import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BackgroundMusic from './components/BackgroundMusic';
import WeatherTime from './components/WeatherTime';
import ScrollAnimations from './components/ScrollAnimations';

// Import project images
import trinityInsurance from './images/trinity-insurance.jpg';
import swimWithSara from './images/swim-with-sara.jpg';
import sneakersHero from './images/sneakers-hero.jpg';
import spaceHero from './images/space-hero.jpg';
import projectAtlas from './images/project-atlas.jpg';
import classico from './images/classico.jpg';
import workoutGenerator from './images/Workout-Generator.jpg';
import shop23 from './images/Shop23.jpg';
import launchingSoon from './images/launching-soon.jpg';
import landscape from './images/Landscape.jpg';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user preference
    const isDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDarkMode);

    // Listen for changes in color scheme
    const darkModeListener = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);

    if (darkModeListener.addEventListener) {
      darkModeListener.addEventListener('change', handleChange);
      return () => darkModeListener.removeEventListener('change', handleChange);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Update document title
    document.title = 'Matt Vogelsang | Full-Stack Engineer';

    // Update body dark mode class
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden">
        <ScrollAnimations>
          <Header
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <main>
            <HeroSection />
            
            {/* About Section */}
            <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
              <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-on-scroll">
                  About Me
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6 animate-on-scroll">
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      I'm a passionate Full-Stack Engineer based in South Florida, 
                      specializing in creating beautiful, functional, and user-friendly 
                      web applications.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      With expertise in React, TypeScript, Node.js, and modern web 
                      technologies, I bring ideas to life with clean code and 
                      exceptional user experiences.
                    </p>
                    <div className="flex gap-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">3+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">50+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">100%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
                      </div>
                    </div>
                  </div>
                  <div className="animate-on-scroll">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white">
                      <h3 className="text-2xl font-bold mb-4">What I Do</h3>
                      <ul className="space-y-3">
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Frontend Development with React & TypeScript</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Backend Development with Node.js</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>UI/UX Design & Implementation</span>
                        </li>
                        <li className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span>Database Design & Management</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-20">
              <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-on-scroll">
                  Skills & Technologies
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      category: "Frontend",
                      skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js"]
                    },
                    {
                      category: "Backend",
                      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"]
                    },
                    {
                      category: "Tools & Others",
                      skills: ["Git", "Docker", "AWS", "Figma", "Jest", "Webpack"]
                    }
                  ].map((category, index) => (
                    <div key={category.category} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="glass p-6 rounded-2xl h-full">
                        <h3 className="text-2xl font-bold mb-6 text-center">{category.category}</h3>
                        <div className="grid grid-cols-2 gap-3">
                          {category.skills.map((skill) => (
                            <div key={skill} className="bg-white/20 dark:bg-gray-700/20 px-3 py-2 rounded-lg text-center text-sm font-medium">
                              {skill}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
              <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-on-scroll">
                  Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Trinity Insurance",
                      description: "Modern insurance platform with user management and policy tracking.",
                      tech: ["React", "Node.js", "MongoDB", "Express"],
                      image: trinityInsurance,
                      link: "#"
                    },
                    {
                      title: "Project Atlas",
                      description: "Project management tool with team collaboration and task tracking.",
                      tech: ["React", "Socket.io", "Express", "MongoDB"],
                      image: projectAtlas,
                      link: "#"
                    },
                    {
                      title: "Swim With Sara",
                      description: "Swimming lesson booking platform with instructor profiles and scheduling.",
                      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
                      image: swimWithSara,
                      link: "#"
                    },

                    {
                      title: "Classico",
                      description: "Classic car marketplace with detailed listings and user reviews.",
                      tech: ["React", "Node.js", "AWS", "PostgreSQL"],
                      image: classico,
                      link: "#"
                    },
                    {
                      title: "Landscape Project",
                      description: "Beautiful landscape design and visualization platform.",
                      tech: ["React", "Three.js", "WebGL", "CSS3"],
                      image: landscape,
                      link: "#"
                    },
                    {
                      title: "Space Hero",
                      description: "Interactive space exploration app with real-time data visualization.",
                      tech: ["React", "Three.js", "NASA API", "WebGL"],
                      image: spaceHero,
                      link: "#"
                    },
                    {
                      title: "Workout Generator",
                      description: "AI-powered workout planning app with personalized fitness routines.",
                      tech: ["React", "Node.js", "AI/ML", "MongoDB"],
                      image: workoutGenerator,
                      link: "#"
                    },
                    {
                      title: "Shop23",
                      description: "Modern e-commerce platform with advanced shopping features.",
                      tech: ["React", "TypeScript", "Stripe", "PostgreSQL"],
                      image: shop23,
                      link: "#"
                    },
                    {
                      title: "Sneakers Hero",
                      description: "E-commerce platform for premium sneakers with advanced filtering.",
                      tech: ["React", "Node.js", "Stripe", "PostgreSQL"],
                      image: sneakersHero,
                      link: "#"
                    },
                    {
                      title: "Launching Soon",
                      description: "Exciting new project coming soon with innovative features.",
                      tech: ["React", "Next.js", "TypeScript", "Tailwind"],
                      image: launchingSoon,
                      link: "#"
                    }
                  ].map((project, index) => (
                    <div key={project.title} className="animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
                      <div className="glass p-6 rounded-2xl h-full hover:scale-105 transition-transform duration-300 group flex flex-col">
                        <div className="relative mb-4 overflow-hidden rounded-lg">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <span key={tech} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium mt-auto"
                        >
                          View Project
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20">
              <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-4xl font-bold text-center mb-12 gradient-text animate-on-scroll">
                  Get In Touch
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="animate-on-scroll">
                    <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                      I'm always interested in new opportunities and exciting projects. 
                      Whether you have a question or just want to say hi, feel free to reach out!
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          📧
                        </div>
                        <div>
                          <div className="font-medium">Email</div>
                          <a 
                            href="mailto:vogelsangmatt@gmail.com"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                          >
                            vogelsangmatt@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          📍
                        </div>
                        <div>
                          <div className="font-medium">Location</div>
                          <div className="text-gray-600 dark:text-gray-300">South Florida, USA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="animate-on-scroll">
                    <form 
                      action="https://formspree.io/f/mvgqglbw" 
                      method="POST"
                      className="space-y-6"
                    >
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                          placeholder="Your message..."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </ScrollAnimations>

        {/* Floating UI Elements */}
        <BackgroundMusic darkMode={darkMode} />
        <WeatherTime darkMode={darkMode} />
        
        {/* Music Credit */}
        <div className="fixed bottom-2 left-2 z-40">
          <div className={`text-xs opacity-60 hover:opacity-100 transition-opacity duration-300 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            🎵 Music: Jeremy Black
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 