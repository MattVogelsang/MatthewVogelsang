import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import mattProfile from '../images/matt-profile.jpg';

const HeroSection = () => {

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Enhanced Parallax Background Elements */}
      <div className="parallax-bg">
        <div className="parallax-element" data-speed="0.3" style={{ top: '10%', left: '5%' }}>
          <div className="w-20 h-20 bg-blue-500/10 rounded-full blur-xl floating"></div>
        </div>
        <div className="parallax-element" data-speed="0.5" style={{ top: '30%', right: '10%' }}>
          <div className="w-32 h-32 bg-purple-500/10 rounded-full blur-xl floating" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="parallax-element" data-speed="0.2" style={{ bottom: '20%', left: '15%' }}>
          <div className="w-16 h-16 bg-green-500/10 rounded-full blur-xl floating" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="parallax-element" data-speed="0.4" style={{ bottom: '40%', right: '20%' }}>
          <div className="w-24 h-24 bg-yellow-500/10 rounded-full blur-xl floating" style={{ animationDelay: '1.5s' }}></div>
        </div>
        <div className="parallax-element" data-speed="0.6" style={{ top: '60%', left: '30%' }}>
          <div className="w-12 h-12 bg-pink-500/10 rounded-full blur-xl floating" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="parallax-element" data-speed="0.1" style={{ top: '20%', left: '70%' }}>
          <div className="w-28 h-28 bg-indigo-500/10 rounded-full blur-xl floating" style={{ animationDelay: '2.5s' }}></div>
        </div>
        <div className="parallax-element" data-speed="0.7" style={{ bottom: '10%', left: '50%' }}>
          <div className="w-8 h-8 bg-orange-500/10 rounded-full blur-xl floating" style={{ animationDelay: '1.8s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-blue-600 dark:text-blue-400 font-semibold animate-on-scroll">
                Hello, I'm
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold gradient-text leading-tight">
                <span className="typewriter">Matt Vogelsang</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 animate-on-scroll">
                Full-Stack Engineer
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl animate-on-scroll">
              I'm a South-Floridian Full-Stack engineer that specializes in
              React, JavaScript, and Node.js to build clean, high-performance
              web applications with stunning user experiences.
            </p>

            <div className="flex flex-wrap gap-4 animate-on-scroll">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 glow"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500 rounded-full font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-6 animate-on-scroll">
              <a
                href="https://github.com/MattVogelsang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/matthew-vogelsang-096514229/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:vogelsangmatt@gmail.com"
                className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative animate-on-scroll">
              {/* Floating background elements */}
              <div className="absolute inset-0 bg-blue-600 rounded-full transform translate-x-4 translate-y-4 opacity-20 floating"></div>
              <div className="absolute inset-0 bg-purple-600 rounded-full transform -translate-x-2 -translate-y-2 opacity-20 floating" style={{ animationDelay: '0.5s' }}></div>
              
              {/* Profile image */}
              <div className="relative z-10 w-80 h-80 rounded-full shadow-2xl border-4 border-white dark:border-gray-800 auto-glow overflow-hidden">
                <img
                  src={mattProfile}
                  alt="Matt Vogelsang - Full-Stack Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection; 