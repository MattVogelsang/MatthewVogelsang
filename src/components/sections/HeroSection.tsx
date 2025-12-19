import { Github, Linkedin, Mail, Code, Zap, Globe } from 'lucide-react';
import mattProfile from '../../images/matt-profile.jpg';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url(${mattProfile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-900/95"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-transparent to-gray-900/60"></div>

      {/* Top Navbar - Already handled by Header component, but ensuring it's visible */}
      <div className="relative z-50"></div>

      {/* Left Vertical Icon Sidebar */}
      <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center space-y-6">
        <a
          href="https://github.com/MattVogelsang"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 rounded-full glass-effect hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
          aria-label="GitHub"
        >
          <Github size={20} className="text-white group-hover:text-cyan-400 transition-colors" />
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-vogelsang-096514229/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 rounded-full glass-effect hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} className="text-white group-hover:text-cyan-400 transition-colors" />
        </a>
        <a
          href="mailto:vogelsangmatt@gmail.com"
          className="group p-3 rounded-full glass-effect hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110"
          aria-label="Email"
        >
          <Mail size={20} className="text-white group-hover:text-cyan-400 transition-colors" />
        </a>
        <div className="w-px h-16 bg-white/20"></div>
      </div>

      {/* Mobile Sidebar - Collapsed to top */}
      <div className="md:hidden fixed top-20 left-4 z-40 flex flex-row items-center space-x-4">
        <a
          href="https://github.com/MattVogelsang"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full glass-effect hover:bg-cyan-500/20 transition-all duration-300"
          aria-label="GitHub"
        >
          <Github size={18} className="text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-vogelsang-096514229/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full glass-effect hover:bg-cyan-500/20 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} className="text-white" />
        </a>
        <a
          href="mailto:vogelsangmatt@gmail.com"
          className="p-2 rounded-full glass-effect hover:bg-cyan-500/20 transition-all duration-300"
          aria-label="Email"
        >
          <Mail size={18} className="text-white" />
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Text Section - Right Aligned */}
        <div className="flex-1 flex items-center justify-end pr-8 md:pr-16 lg:pr-24 pt-32 pb-40">
          <div className="max-w-2xl text-right space-y-6">
            <div className="space-y-4">
              <p className="text-cyan-400 text-sm md:text-base font-semibold tracking-wider uppercase">
                Full Stack Developer
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                Build
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Anywhere
                </span>
              </h1>
            </div>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl ml-auto">
              I create beautiful, functional web applications with React, TypeScript, and Node.js. 
              Specializing in modern full-stack development that brings ideas to life with clean code 
              and exceptional user experiences.
            </p>
            <div className="flex justify-end gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 glass-effect border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Glassmorphism Cards */}
        <div className="relative z-10 pb-8 md:pb-12 px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="glass-effect p-6 md:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/10">
                  <Code size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Full Stack</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                React, TypeScript, Node.js, and modern web technologies for building scalable applications.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-effect p-6 md:p-8 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/10">
                  <Zap size={24} className="text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Fast & Modern</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Optimized performance with cutting-edge tools and best practices for lightning-fast experiences.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-effect p-6 md:p-8 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                  <Globe size={24} className="text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Global Reach</h3>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Responsive designs that work seamlessly across all devices and platforms worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
