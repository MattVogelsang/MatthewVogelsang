import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import BackgroundMusic from './components/widgets/BackgroundMusic';
import ScrollAnimations from './components/layout/ScrollAnimations';
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
import { Layout, Zap, Globe, Palette, Settings, Mail, MapPin, Send, Download, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import umFullStackImg from './images/UMFULLSTACK.jpg';
import ibmDataAnalystImg from './images/IMBDATAANALYST.jpg';



function App() {
  // Initialize theme synchronously from localStorage to prevent flicker
  const [theme, setTheme] = useState<'theme1' | 'theme2'>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('portfolio-theme') as 'theme1' | 'theme2') || 'theme1';
    }
    return 'theme1';
  });
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const toggleTheme = () => {
    const newTheme = theme === 'theme1' ? 'theme2' : 'theme1';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Matthew-Vogelsang-Full Stack Developer...pdf';
    link.download = 'Matthew-Vogelsang-Full-Stack-Developer-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    document.title = 'Matt Vogelsang | Full Stack Developer';
    // Only update if theme changed (already set in index.html)
    const currentTheme = document.documentElement.classList.contains('theme1') ? 'theme1' : 
                        document.documentElement.classList.contains('theme2') ? 'theme2' : null;
    if (currentTheme !== theme) {
      document.documentElement.classList.remove('theme1', 'theme2', 'dark');
      document.documentElement.classList.add(theme);
      if (theme === 'theme1') {
        document.documentElement.classList.add('dark');
      }
    }
  }, [theme]);

  return (
    <div className={theme}>
      <BackgroundMusic theme={theme} />
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 text-gray-900 dark:text-white relative overflow-x-hidden">
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

            <section id="projects" className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 dark:via-gray-900/50 to-transparent" />
              <div className="section-divider" />
              <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16 animate-on-scroll">
                  <span className="text-cyan-400 font-medium tracking-widest text-sm">PORTFOLIO</span>
                  <h2 className="text-4xl md:text-5xl font-bold mt-4 gradient-text">
                    Featured Projects
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                    A selection of projects that showcase my skills and passion for building exceptional web experiences.
                  </p>
                </div>

                {(() => {
                  const featuredProjects = projects.filter((p) => p.featured);
                  const initialCount = 4;
                  const remainingCount = featuredProjects.length - initialCount;
                  const displayedProjects = showAllProjects ? featuredProjects : featuredProjects.slice(0, initialCount);

                  return (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {displayedProjects.map((project, i) => {
                          const titleParts = project.title.split(' - ');
                          const projectTitle = titleParts[0] ?? project.title;
                          const projectSubtitle = titleParts.slice(1).join(' - ') || project.category || '';
                          return (
                            <a
                              key={project.id}
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`animate-on-scroll group relative rounded-3xl overflow-hidden block ${project.featured ? 'md:col-span-1' : ''}`}
                              style={{ animationDelay: `${Math.min(i * 0.1, 0.4)}s` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-purple-600/20 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 z-10" />

                              <div className="relative h-72 overflow-hidden">
                                <img
                                  src={project.imageUrl}
                                  alt={project.title}
                                  loading="lazy"
                                  decoding="async"
                                  className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 dark:from-[#050810] via-gray-900/50 dark:via-[#050810]/50 to-transparent" />
                              </div>

                              <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                                <div className="flex flex-wrap gap-2 mb-3 opacity-0 translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 delay-100">
                                  {project.technologies.slice(0, 4).map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs text-white"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>

                                <h3 className="text-xl font-bold text-white md:group-hover:text-transparent md:group-hover:bg-gradient-to-r md:group-hover:from-cyan-400 md:group-hover:to-purple-400 md:group-hover:bg-clip-text transition-all duration-300">
                                  {projectTitle}
                                </h3>
                                <p className="text-sm text-gray-400 mb-2">{projectSubtitle}</p>

                                <p className="text-sm text-gray-300 leading-relaxed opacity-0 max-h-0 md:group-hover:opacity-100 md:group-hover:max-h-24 transition-all duration-500 overflow-hidden">
                                  {project.description}
                                </p>

                                <div className="flex items-center gap-2 mt-3 text-cyan-400 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                  <span className="text-sm">View Project</span>
                                  <ExternalLink className="w-4 h-4" />
                                </div>
                              </div>

                              <div className="absolute inset-0 rounded-3xl border border-white/10 md:group-hover:border-cyan-500/50 transition-colors duration-300 pointer-events-none z-30" />
                            </a>
                          );
                        })}
                      </div>

                      {remainingCount > 0 && (
                        <div className="flex justify-center mt-12 animate-on-scroll">
                          <button
                            type="button"
                            onClick={() => setShowAllProjects(!showAllProjects)}
                            className="flex items-center gap-2 px-8 py-4 rounded-full glass-effect border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 text-gray-800 dark:text-white"
                          >
                            <span>{showAllProjects ? 'Show Less' : `View ${remainingCount} More Projects`}</span>
                            {showAllProjects ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </button>
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>
              <div className="section-divider" />
            </section>

            <section id="contact" className="relative py-20 md:py-32 px-4 md:px-6 bg-gray-50/50 dark:bg-gray-900/50 overflow-hidden">
              {/* Background - Simplified on mobile */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/5 md:via-purple-950/10 dark:via-purple-950/10 md:dark:via-purple-950/20 to-transparent" />
              <div className="section-divider"></div>
              
              <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 animate-on-scroll">
                  <span className="text-cyan-400 dark:text-cyan-400 font-medium tracking-widest text-sm">LET'S CONNECT</span>
                  <h2 className="text-4xl md:text-5xl font-bold mt-4 gradient-text">
                    Get In Touch
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                    I'm always interested in new opportunities and exciting projects. Let's create something amazing together.
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Form */}
                  <div className="animate-on-scroll">
                    <div className="p-8 rounded-3xl glass-effect border border-white/10 dark:border-white/10">
                      <h3 className="text-2xl font-bold mb-6 gradient-text">Send a Message</h3>
                      
                      <form 
                        action="https://formspree.io/f/mvgqglbw" 
                        method="POST"
                        className="space-y-6"
                      >
                        <div>
                          <label htmlFor="contact-name" className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Name</label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your name"
                            className="w-full px-5 py-4 glass-effect border border-cyan-500/30 dark:border-white/10 rounded-xl bg-white/5 dark:bg-white/5 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 dark:focus:border-cyan-500/50 focus:outline-none transition-all duration-300"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="contact-email" className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Email</label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                            className="w-full px-5 py-4 glass-effect border border-cyan-500/30 dark:border-white/10 rounded-xl bg-white/5 dark:bg-white/5 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 dark:focus:border-cyan-500/50 focus:outline-none transition-all duration-300"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="contact-message" className="block text-sm text-gray-600 dark:text-gray-400 mb-2">Message</label>
                          <textarea
                            id="contact-message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell me about your project..."
                            rows={5}
                            className="w-full px-5 py-4 glass-effect border border-cyan-500/30 dark:border-white/10 rounded-xl bg-white/5 dark:bg-white/5 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-500 focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 dark:focus:border-cyan-500/50 focus:outline-none transition-all duration-300 resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="group relative w-full py-6 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-[1.02] overflow-hidden"
                        >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <Send className="w-4 h-4" />
                            Send Message
                          </span>
                          <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* Contact Info & Certifications */}
                  <div className="space-y-8 animate-on-scroll">
                    {/* Contact Cards */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <a
                        href="mailto:vogelsangmatt@gmail.com"
                        className="p-6 rounded-2xl glass-effect border border-white/10 hover:border-cyan-500/30 transition-all group"
                      >
                        <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 w-fit mb-4">
                          <Mail className="w-5 h-5 text-cyan-400" />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
                        <p className="text-gray-800 dark:text-white font-medium group-hover:text-cyan-400 dark:group-hover:text-cyan-400 transition-colors">
                          vogelsangmatt@gmail.com
                        </p>
                      </a>

                      <div className="p-6 rounded-2xl glass-effect border border-white/10">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 w-fit mb-4">
                          <MapPin className="w-5 h-5 text-purple-400" />
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Location</p>
                        <p className="text-gray-800 dark:text-white font-medium">South Florida, USA</p>
                      </div>
                    </div>

                    {/* Resume Download */}
                    <div className="p-6 rounded-2xl glass-effect border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                      <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Download Resume</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                        Get a detailed overview of my experience and qualifications.
                      </p>
                      <button
                        onClick={handleResumeDownload}
                        className="group px-6 py-3 glass-effect border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-all duration-300 flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download PDF
                      </button>
                    </div>

                    {/* Certifications */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Certifications</h4>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="group relative rounded-2xl overflow-hidden border border-white/10 md:hover:border-cyan-500/30 transition-all md:hover:scale-[1.02]">
                          <img
                            src={umFullStackImg}
                            alt="Full Stack Developer"
                            className="w-full h-32 object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 dark:from-[#050810] via-gray-900/80 dark:via-[#050810]/80 to-transparent flex flex-col justify-end p-4">
                            <p className="font-medium text-sm text-white">Full Stack Developer</p>
                            <p className="text-xs text-gray-400">University of Miami</p>
                          </div>
                        </div>
                        <div className="group relative rounded-2xl overflow-hidden border border-white/10 md:hover:border-purple-500/30 transition-all md:hover:scale-[1.02]">
                          <img
                            src={ibmDataAnalystImg}
                            alt="Data Analyst"
                            className="w-full h-32 object-cover"
                            loading="lazy"
                            decoding="async"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 dark:from-[#050810] via-gray-900/80 dark:via-[#050810]/80 to-transparent flex flex-col justify-end p-4">
                            <p className="font-medium text-sm text-white">Data Analyst</p>
                            <p className="text-xs text-gray-400">IBM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="section-divider"></div>
            </section>
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