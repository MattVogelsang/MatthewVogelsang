import { useEffect, useRef } from 'react';

interface ScrollAnimationsProps {
  children: React.ReactNode;
}

const ScrollAnimations = ({ children }: ScrollAnimationsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Detect mobile for performance optimizations
    const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Reduced threshold and margin on mobile for better performance
    const observerOptions = {
      threshold: isMobile ? 0.01 : 0.05,
      rootMargin: isMobile ? '0px 0px -50px 0px' : '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Debounce setup to avoid blocking
    let timeoutId: NodeJS.Timeout;
    const setupAnimations = () => {
      // Batch DOM reads
      const sections = document.querySelectorAll('section, .animate-on-scroll');
      const sectionsArray = Array.from(sections);
      
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        sectionsArray.forEach((section, index) => {
          // Reduce animation complexity on mobile
          if (isMobile) {
            section.classList.add('opacity-0', 'transition-opacity', 'duration-300');
          } else {
            section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-500', 'ease-out');
            (section as HTMLElement).style.transitionDelay = `${Math.min(index * 0.03, 0.3)}s`;
          }
          observer.observe(section);
        });
      });
    };

    // Delay setup to avoid blocking initial render
    if ('requestIdleCallback' in window) {
      requestIdleCallback(setupAnimations, { timeout: 1000 });
    } else {
      timeoutId = setTimeout(setupAnimations, 100);
    }

    // Only setup floating animations on desktop
    if (!isMobile) {
      const floatingElements = document.querySelectorAll('.floating, .floating-tech');
      floatingElements.forEach((element, index) => {
        (element as HTMLElement).style.animationDelay = `${index * 0.2}s`;
        if (!element.classList.contains('floating-tech')) {
          element.classList.add('animate-float');
        }
      });
    }

    // Use passive listeners for better scroll performance
    const glowElements = document.querySelectorAll('.glow, .neon-glow');
    glowElements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        element.classList.add('glow-active');
      }, { passive: true });
      element.addEventListener('mouseleave', () => {
        element.classList.remove('glow-active');
      }, { passive: true });
    });

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      observer.disconnect();
      glowElements.forEach((element) => {
        element.removeEventListener('mouseenter', () => {});
        element.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

export default ScrollAnimations; 