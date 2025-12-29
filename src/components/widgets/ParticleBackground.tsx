import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Three.js particle background component for hero section
export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Detect mobile device
    const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Optimize renderer for mobile
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: !isMobile, // Disable antialiasing on mobile for performance
      powerPreference: 'high-performance'
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    // Lower pixel ratio on mobile
    renderer.setPixelRatio(isMobile ? Math.min(window.devicePixelRatio, 1.5) : Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // Create particles - reduce count on mobile
    const particlesCount = isMobile ? 200 : 800;
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);

    const colorPalette = [
      new THREE.Color('#22d3ee'), // cyan
      new THREE.Color('#c084fc'), // purple
      new THREE.Color('#3b82f6'), // blue
    ];

    for (let i = 0; i < particlesCount; i++) {
      // Position
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Color
      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Size
      sizes[i] = Math.random() * 2 + 0.5;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Store initial positions for wave motion
    const initialPositions = new Float32Array(positions);

    const particlesMaterial = new THREE.ShaderMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          
          gl_FragColor = vec4(vColor, strength * 0.3);
        }
      `,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Mouse movement
    const mouse = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const clock = new THREE.Clock();
    let animationFrameId: number;
    let lastTime = 0;
    const targetFPS = isMobile ? 30 : 60; // Lower FPS on mobile
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      // Throttle animation on mobile
      if (isMobile && currentTime - lastTime < frameInterval) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow (only on desktop)
      if (!isMobile) {
        target.x += (mouse.x * 0.2 - target.x) * 0.05;
        target.y += (mouse.y * 0.2 - target.y) * 0.05;
        particles.rotation.y = target.x * 0.5;
        particles.rotation.x = target.y * 0.5;
      }

      // Gentle rotation
      particles.rotation.y += 0.0005;
      particles.rotation.x += 0.0003;

      // Wave motion - simplified on mobile
      const positionsArray = particles.geometry.attributes.position.array as Float32Array;
      const waveIntensity = isMobile ? 0.3 : 0.5; // Reduced wave motion on mobile
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        const baseX = initialPositions[i3];
        const baseY = initialPositions[i3 + 1];
        const baseZ = initialPositions[i3 + 2];
        
        positionsArray[i3] = baseX + Math.sin(elapsedTime * 0.5 + i * 0.01) * waveIntensity;
        positionsArray[i3 + 1] = baseY + Math.cos(elapsedTime * 0.3 + i * 0.01) * waveIntensity;
        positionsArray[i3 + 2] = baseZ + Math.sin(elapsedTime * 0.4 + i * 0.01) * waveIntensity;
      }
      particles.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate(0);

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
