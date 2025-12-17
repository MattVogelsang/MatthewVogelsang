import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import mattProfile from '../../images/matt-profile.jpg';

const HeroSection = () => {

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative mesh-gradient grid-pattern overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-tech" style={{ top: '10%', left: '5%', width: '60px', height: '60px' }}>
          <div className="w-full h-full bg-cyan-500/15 rounded-full blur-xl"></div>
        </div>
        <div className="floating-tech" style={{ top: '30%', right: '10%', width: '80px', height: '80px', animationDelay: '1s' }}>
          <div className="w-full h-full bg-purple-500/15 rounded-full blur-xl"></div>
        </div>
        <div className="floating-tech" style={{ bottom: '20%', left: '15%', width: '50px', height: '50px', animationDelay: '2s' }}>
          <div className="w-full h-full bg-magenta-500/15 rounded-full blur-xl"></div>
        </div>
        
        <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-500/20 rounded-lg rotate-45 floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-32 w-24 h-24 border border-purple-500/20 rounded-lg rotate-12 floating" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-8 relative">
            <div className="space-y-6">
              <p className="text-cyan-400 dark:text-blue-500 font-semibold text-lg md:text-xl animate-on-scroll tracking-wider uppercase">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-on-scroll">
                <span className="typewriter block">Matt Vogelsang</span>
              </h1>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 dark:text-white animate-on-scroll font-light">
                Full Stack <span className="neon-text">Developer</span>
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-gray-800 dark:text-white max-w-2xl animate-on-scroll leading-relaxed">
              I'm a South-Floridian Full Stack Developer that specializes in
              React, JavaScript, and Node.js to build clean, high-performance
              web applications with stunning user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-full font-semibold shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
              </a>
              <a
                href="#contact"
                className="group relative px-8 py-4 glass-effect border-2 border-cyan-500/50 text-cyan-400 dark:text-blue-500 rounded-full font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 dark:hover:bg-blue-500/10 dark:hover:border-blue-400 transition-all duration-300 overflow-hidden neon-glow"
              >
                <span className="relative z-10">Contact Me</span>
              </a>
            </div>

            <div className="flex gap-6 animate-on-scroll pt-4">
              <a
                href="https://github.com/MattVogelsang"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 glass-effect rounded-full text-gray-300 dark:text-gray-600 hover:text-cyan-400 dark:hover:text-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 dark:hover:shadow-blue-500/50"
                aria-label="GitHub"
              >
                <Github size={28} className="relative z-10" />
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-vogelsang-096514229/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 glass-effect rounded-full text-gray-300 dark:text-gray-600 hover:text-cyan-400 dark:hover:text-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 dark:hover:shadow-blue-500/50"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} className="relative z-10" />
              </a>
              <a
                href="mailto:vogelsangmatt@gmail.com"
                className="group relative p-3 glass-effect rounded-full text-gray-300 dark:text-gray-600 hover:text-cyan-400 dark:hover:text-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 dark:hover:shadow-blue-500/50"
                aria-label="Email"
              >
                <Mail size={28} className="relative z-10" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end relative">
            <div className="relative animate-on-scroll">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-magenta-500 opacity-20 blur-2xl"></div>
              
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full shadow-2xl border-4 border-cyan-500/30 overflow-hidden animate-bounce-slow">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 via-transparent to-purple-500/15 pointer-events-none"></div>
                <img
                  src={mattProfile}
                  alt="Matt Vogelsang - Full Stack Developer"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="group relative p-3 rounded-full text-cyan-400 dark:text-blue-500 hover:text-cyan-300 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection; 