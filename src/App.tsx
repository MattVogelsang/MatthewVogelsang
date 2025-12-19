import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import BackgroundMusic from './components/widgets/BackgroundMusic';
import ScrollAnimations from './components/layout/ScrollAnimations';
import Resume from './components/sections/Resume';
import { projects } from './data/projects';
import { skillCategories } from './data/skills';
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiWebpack,
  SiVite,
  SiJest,
  SiFigma,
  SiVuedotjs,
  SiWordpress,
  SiBootstrap,
  SiVercel,
  SiNetlify,
  SiRender,
  SiSequelize,
  SiStripe,
} from 'react-icons/si';
import { FaReact, FaNode, FaGitAlt } from 'react-icons/fa';
import { Layout, Zap, Globe, Palette, Settings } from 'lucide-react';



function App() {
  const [theme, setTheme] = useState<'theme1' | 'theme2'>('theme1');
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as 'theme1' | 'theme2' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'theme1' ? 'theme2' : 'theme1';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  useEffect(() => {
    document.title = 'Matt Vogelsang | Full Stack Developer';
    document.documentElement.classList.remove('theme1', 'theme2', 'dark');
    document.documentElement.classList.add(theme);
    if (theme === 'theme1') {
      document.documentElement.classList.add('dark');
    }
  }, [theme]);

  useEffect(() => {
    // Page load animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={theme}>
      <BackgroundMusic theme={theme} />
      <div className={`min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-white relative overflow-x-hidden transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <ScrollAnimations>
          <Header
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <main>
            <HeroSection />
            
            <section id="about" className="py-20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 dark:from-gray-900/50 via-transparent to-transparent"></div>
              <div className="section-divider"></div>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-on-scroll">
                  About Me
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-8 animate-on-scroll">
                    <div className="space-y-6">
                      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        I'm a passionate Full Stack Developer based in South Florida, 
                        specializing in creating beautiful, functional, and user-friendly 
                        web applications.
                      </p>
                      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                        With expertise in React, TypeScript, Node.js, and modern web 
                        technologies, I bring ideas to life with clean code and 
                        exceptional user experiences.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="glass-effect p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent mb-2 whitespace-nowrap">3+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
                        <div className="mt-3 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </div>
                      <div className="glass-effect p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2 whitespace-nowrap">50+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Projects Completed</div>
                        <div className="mt-3 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </div>
                      <div className="glass-effect p-4 md:p-6 rounded-2xl text-center group hover:scale-105 transition-all duration-300">
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent mb-2 whitespace-nowrap">100%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">Client Satisfaction</div>
                        <div className="mt-3 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </div>
                    </div>
                  </div>
                  <div className="animate-on-scroll">
                    <div className="glass-effect p-8 md:p-10 rounded-3xl relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-magenta-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">What I Do</h3>
                        <ul className="space-y-4">
                          <li className="flex items-start space-x-4 group/item">
                            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-cyan-500/50"></div>
                            <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-cyan-400 transition-colors duration-300">Frontend Development Specializing in React, TypeScript & Modern Web Technologies</span>
                          </li>
                          <li className="flex items-start space-x-4 group/item">
                            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-purple-500/50"></div>
                            <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-purple-400 transition-colors duration-300">Backend Development with Node.js & Python</span>
                          </li>
                          <li className="flex items-start space-x-4 group/item">
                            <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-magenta-600 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-cyan-500/50"></div>
                            <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-cyan-400 transition-colors duration-300">UI/UX Design & Implementation</span>
                          </li>
                          <li className="flex items-start space-x-4 group/item">
                            <div className="w-3 h-3 bg-gradient-to-r from-magenta-400 to-purple-600 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-magenta-500/50"></div>
                            <span className="text-gray-700 dark:text-gray-300 group-hover/item:text-magenta-400 transition-colors duration-300">Database Design & Management</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-divider"></div>
            </section>

            <section id="skills" className="py-20 bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden">
              <div className="section-divider"></div>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-on-scroll">
                  Skills & Technologies
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
                  {skillCategories.flatMap((category) => {
                    const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
                      'JavaScript': SiJavascript,
                      'TypeScript': SiTypescript,
                      'SQL': SiPostgresql,
                      'Python': SiPython,
                      'React': FaReact,
                      'Vue.js': SiVuedotjs,
                      'Node.js': FaNode,
                      'Express.js': SiExpress,
                      'Tailwind CSS': SiTailwindcss,
                      'Bootstrap': SiBootstrap,
                      'WordPress': SiWordpress,
                      'Sequelize': SiSequelize,
                      'PostgreSQL': SiPostgresql,
                      'Git': FaGitAlt,
                      'Webpack': SiWebpack,
                      'Vite': SiVite,
                      'Vercel': SiVercel,
                      'Netlify': SiNetlify,
                      'Render': SiRender,
                      'Stripe': SiStripe,
                      'Jest/Testing Library': SiJest,
                      'Figma': SiFigma,
                      'Responsive Design': Layout,
                      'Performance Optimization': Zap,
                      'RESTful API': Globe,
                      'CI/CD Pipelines': Settings,
                      'UI/UX Principles': Palette
                    };
                    
                    const categoryColors: { [key: string]: string } = {
                      languages: 'from-cyan-400 to-cyan-600',
                      frameworks: 'from-purple-400 to-purple-600',
                      tools: 'from-blue-400 to-blue-600',
                      other: 'from-green-400 to-green-600'
                    };
                    const gradientClass = categoryColors[category.id] || 'from-cyan-400 to-cyan-600';
                    
                    return category.skills.map((skill, index) => {
                      const IconComponent = iconMap[skill.name] || Globe;
                      
                      return (
                        <div
                          key={`${category.id}-${skill.name}`}
                          className="animate-on-scroll group"
                          style={{ animationDelay: `${index * 0.03}s` }}
                        >
                          <div className="glass-effect p-4 sm:p-5 rounded-2xl h-full flex flex-col items-center justify-center text-center hover:scale-105 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden">
                            <div className={`absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r ${gradientClass} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            
                            <div className="mb-3 flex items-center justify-center">
                              <IconComponent 
                                className="w-12 h-12 sm:w-16 sm:h-16 text-gray-700 dark:text-gray-300 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 transition-colors duration-300" 
                              />
                            </div>
                            
                            <div className="font-semibold text-sm sm:text-base text-gray-800 dark:text-gray-200 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 transition-colors duration-300">
                              {skill.name}
                            </div>
                            
                            <div className="text-xs text-gray-500 dark:text-gray-400 opacity-70 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                              {category.name}
                            </div>
                          </div>
                        </div>
                      );
                    });
                  })}
                </div>
              </div>
              <div className="section-divider"></div>
            </section>

            <section id="projects" className="py-20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 dark:via-gray-900/50 to-transparent"></div>
              <div className="section-divider"></div>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-on-scroll">
                  Featured Projects
                </h2>
                
                {(() => {
                  const featuredProjects = projects.filter(project => project.featured);
                  const topProjects = featuredProjects.slice(0, 5);
                  const remainingProjects = featuredProjects.slice(5);
                  const displayedProjects = showAllProjects ? featuredProjects : topProjects;

                  return (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                        {displayedProjects.map((project, index) => (
                          <div 
                            key={project.id} 
                            className="animate-on-scroll group transition-all duration-700 ease-out"
                            style={{ animationDelay: `${index * 0.05}s` }}
                          >
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block h-full"
                            >
                              <div className="glass-effect px-10 py-8 pb-8 rounded-3xl h-full flex flex-col relative overflow-visible cursor-pointer transition-[transform,box-shadow,border-color,background] duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-cyan-500/30 hover:border-cyan-500/60 border-2 border-transparent group-hover:bg-gradient-to-br group-hover:from-cyan-500/5 group-hover:to-purple-500/5">
                                {/* Enhanced Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-cyan-500/20 group-hover:via-purple-500/20 group-hover:to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl -z-10"></div>
                                
                                {/* Image Section - Always Visible */}
                                <div className="relative mb-6 overflow-hidden rounded-2xl">
                                  <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full h-64 md:h-72 object-cover transition-[transform,filter] duration-300 group-hover:scale-110 group-hover:brightness-110"
                                  />
                                  {/* Gradient Overlay */}
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                                  {/* Shine Effect - Removed for performance */}
                                </div>

                                {/* Title - Always Visible */}
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 transition-colors duration-300 relative">
                                  {project.title}
                                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500"></span>
                                </h3>

                                {/* Dropdown Content - Hidden until hover */}
                                <div className="overflow-hidden max-h-0 group-hover:max-h-[600px] transition-[max-height] duration-300 ease-out">
                                  <div className="pt-2">
                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-base leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-[opacity,transform] duration-300 delay-50">
                                      {project.description}
                                    </p>

                                    {/* Tech Stack - Enhanced */}
                                    <div className="flex flex-wrap gap-2 mb-6 px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 transform translate-y-2 group-hover:translate-y-0 transition-[opacity,transform] min-w-0">
                                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                        <span 
                                          key={tech} 
                                          className="glass-effect px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 border border-cyan-500/20 group-hover:border-cyan-500/60 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-[border-color,color,background-color,box-shadow] duration-200 transform group-hover:scale-[1.03] whitespace-nowrap"
                                          style={{ transitionDelay: `${techIndex * 30 + 150}ms` }}
                                        >
                                          {tech}
                                        </span>
                                      ))}
                                      {project.technologies.length > 4 && (
                                        <span className="glass-effect px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 border border-cyan-500/20 group-hover:border-cyan-500/60 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-[border-color,color,background-color] duration-200 whitespace-nowrap">
                                          +{project.technologies.length - 4}
                                        </span>
                                      )}
                                    </div>

                                    {/* CTA Button - Enhanced */}
                                    <div className="group/btn relative mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 transform translate-y-2 group-hover:translate-y-0 transition-[opacity,transform]">
                                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-200"></div>
                                      <div className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold text-base overflow-hidden">
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                          View Project
                                          <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                          </svg>
                                        </span>
                                        <span className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200 blur-xl"></span>
                                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-200"></span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Corner Accent */}
                                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-150 group-hover:blur-sm"></div>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>

                      {remainingProjects.length > 0 && (
                        <div className="flex justify-center mt-12">
                          <button
                            onClick={() => setShowAllProjects(!showAllProjects)}
                            className="group relative px-8 py-4 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 text-white rounded-full font-semibold hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all duration-300 overflow-hidden"
                          >
                            <span className="relative z-10 flex items-center gap-3">
                              {showAllProjects ? (
                                <>
                                  <span>Show Less</span>
                                  <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                  </svg>
                                </>
                              ) : (
                                <>
                                  <span>View {remainingProjects.length} More Projects</span>
                                  <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                  </svg>
                                </>
                              )}
                            </span>
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          </button>
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
              <div className="section-divider"></div>
            </section>

            <section id="contact" className="py-20 pb-32 md:pb-20 bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden">
              <div className="section-divider"></div>
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-on-scroll">
                  Get In Touch
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                  <div className="animate-on-scroll">
                    <div className="glass-effect p-8 rounded-3xl h-full">
                      <h3 className="text-3xl font-bold mb-6 gradient-text">Let's Work Together</h3>
                      <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
                        I'm always interested in new opportunities and exciting projects. 
                        Whether you have a question or just want to say hi, feel free to reach out!
                      </p>
                      <div className="space-y-6">
                        <div className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-cyan-500/10 transition-all duration-300">
                          <div className="w-14 h-14 glass-effect rounded-full flex items-center justify-center text-2xl group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all duration-300">
                            📧
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Email</div>
                            <a 
                              href="mailto:vogelsangmatt@gmail.com"
                              className="text-gray-600 dark:text-gray-400 hover:text-cyan-400 dark:hover:text-cyan-400 transition-colors duration-300 text-sm md:text-base"
                            >
                              vogelsangmatt@gmail.com
                            </a>
                          </div>
                        </div>
                        <div className="group flex items-center space-x-4 p-4 rounded-2xl hover:bg-purple-500/10 transition-all duration-300">
                          <div className="w-14 h-14 glass-effect rounded-full flex items-center justify-center text-2xl group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300">
                            📍
                          </div>
                          <div>
                            <div className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Location</div>
                            <div className="text-gray-600 dark:text-gray-400 text-sm md:text-base">South Florida, USA</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="animate-on-scroll">
                    <div className="glass-effect p-8 rounded-3xl">
                      <form 
                        action="https://formspree.io/f/mvgqglbw" 
                        method="POST"
                        className="space-y-6"
                      >
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">Name</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            className="w-full px-5 py-4 glass-effect border border-cyan-500/30 rounded-xl bg-white/5 dark:bg-black/20 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-cyan-500/20"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">Email</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full px-5 py-4 glass-effect border border-cyan-500/30 rounded-xl bg-white/5 dark:bg-black/20 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-cyan-500/20"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold mb-3 text-gray-700 dark:text-gray-300">Message</label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                            className="w-full px-5 py-4 glass-effect border border-cyan-500/30 rounded-xl bg-white/5 dark:bg-black/20 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 focus:outline-none transition-all duration-300 focus:shadow-lg focus:shadow-cyan-500/20 resize-none"
                            placeholder="Your message..."
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Send Message
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </span>
                          <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Resume />
          </main>
        </ScrollAnimations>
        
        <div className="fixed bottom-2 left-2 z-30 md:left-20">
          <div className={`glass-effect px-3 py-2 rounded-lg text-xs opacity-70 hover:opacity-100 transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/50 ${
            theme === 'theme1' ? 'text-cyan-300' : 'text-gray-700'
          }`}>
            🎵 Music: Jeremy Black
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 