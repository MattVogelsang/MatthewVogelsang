import { Github, Linkedin, Mail, Code, Zap, Globe, ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import subjectImage from '../../images/Subject1.png';

const HeroSection = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    left: number;
    top: number;
    size: number;
    color: string;
    delay: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    // Generate random particles - LOTS of them!
    const particleCount = 1000;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: 80 + Math.random() * 20, // Start closer to viewport
      size: 1.5 + Math.random() * 4,
      color: Math.random() > 0.5 ? 'rgba(6, 182, 212, 0.5)' : 'rgba(167, 139, 250, 0.5)', // cyan or purple
      delay: Math.random() * 2, // Much shorter delay - particles appear almost immediately
      duration: 4 + Math.random() * 6, // Faster movement - 4-10 seconds instead of 8-23
    }));
    setParticles(newParticles);
  }, []);
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full overflow-hidden bg-slate-950"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Moving Gradient Blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl floating-slow"></div>
        
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 pointer-events-none opacity-60" style={{
          background: 'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)',
          backgroundSize: '200% 200%',
          animation: 'gradient-shift 15s ease infinite'
        }}></div>

        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: `radial-gradient(circle, ${particle.color} 0%, transparent 70%)`,
              filter: 'blur(1px)',
              animation: `float-particle ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>
      </div>

      {/* Left Vertical Icon Sidebar */}
      <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center space-y-6">
        <a
          href="https://github.com/MattVogelsang"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 rounded-full bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
          aria-label="GitHub"
        >
          <Github size={20} className="text-white group-hover:text-cyan-400 transition-colors" />
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-vogelsang-096514229/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 rounded-full bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} className="text-white group-hover:text-cyan-400 transition-colors" />
        </a>
        <a
          href="mailto:vogelsangmatt@gmail.com"
          className="group p-3 rounded-full bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
          aria-label="Email"
        >
          <Mail size={20} className="text-white group-hover:text-cyan-400 transition-colors" />
        </a>
        <div className="w-px h-16 bg-slate-700/50"></div>
      </div>

      {/* Mobile Sidebar - Collapsed to top */}
      <div className="md:hidden fixed top-20 left-4 z-40 flex flex-row items-center space-x-4">
        <a
          href="https://github.com/MattVogelsang"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 hover:bg-cyan-500/20 transition-all duration-300"
          aria-label="GitHub"
        >
          <Github size={18} className="text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-vogelsang-096514229/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 hover:bg-cyan-500/20 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} className="text-white" />
        </a>
        <a
          href="mailto:vogelsangmatt@gmail.com"
          className="p-2 rounded-full bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 hover:bg-cyan-500/20 transition-all duration-300"
          aria-label="Email"
        >
          <Mail size={18} className="text-white" />
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Hero Text */}
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-cyan-400 font-semibold text-lg md:text-xl tracking-wider uppercase">
                  Hello, I'm
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                    Matt Vogelsang
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl">
                  <span className="text-slate-300">Full Stack</span>{' '}
                  <span className="text-purple-400">Developer</span>
                </h2>
              </div>
              
              {/* Decorative Line */}
              <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
              
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                I'm a South-Floridian Full Stack Developer that specializes in
                React, JavaScript, and Node.js to build clean, high-performance
                web applications with stunning user experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 text-white rounded-full font-semibold hover:bg-slate-800/60 hover:border-cyan-500/30 transition-all duration-300 text-center"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Right Side - Image with Glass Card */}
            <div className="flex justify-center lg:justify-end relative">
              <div className="relative">
                {/* Outer Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-purple-500/30 rounded-full blur-2xl"></div>
                
                {/* Glass Card Container */}
                <div className="relative z-10 bg-slate-800/20 backdrop-blur-xl rounded-2xl p-4">
                  <div className="relative w-48 sm:w-56 md:w-64 rounded-xl overflow-hidden flex items-center justify-center">
                    <img
                      src={subjectImage}
                      alt="Matt Vogelsang - Full Stack Developer"
                      loading="eager"
                      decoding="async"
                      className="w-full h-auto max-h-[400px] object-contain rounded-xl"
                    />
                  </div>
                  
                  {/* Available for work badge */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full text-sm font-semibold shadow-lg">
                      Available for work
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glassmorphism Cards */}
      <div className="relative z-10 pb-8 md:pb-12 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {/* Card 1 */}
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 p-6 md:p-8 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                <Code size={24} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Full Stack</h3>
            </div>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              React, TypeScript, Node.js, and modern web technologies for building scalable applications.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 p-6 md:p-8 rounded-2xl hover:border-purple-500/30 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10">
                <Zap size={24} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">Fast & Modern</h3>
            </div>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Optimized performance with cutting-edge tools and best practices for lightning-fast experiences.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 p-6 md:p-8 rounded-2xl hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 group">
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                <Globe size={24} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">Global Reach</h3>
            </div>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Responsive designs that work seamlessly across all devices and platforms worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <a
          href="#about"
          className="group relative p-3 rounded-full text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-110"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
