import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header = ({ darkMode, toggleDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#resume', label: 'Resume' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-effect shadow-2xl border-b border-cyan-500/20' 
        : 'bg-transparent'
    } ${isScrolled ? 'backdrop-blur-xl' : ''}`}>
      {isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
      )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a 
            href="#home" 
            className="text-2xl md:text-3xl font-bold gradient-text hover:scale-110 transition-transform duration-300 relative group"
          >
            MV
            <span className="absolute inset-0 text-2xl md:text-3xl font-bold blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300 gradient-text">
              MV
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-all duration-300 font-medium rounded-lg group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full glass-effect hover:bg-cyan-500/20 transition-all duration-300 group relative overflow-hidden"
              aria-label="Toggle dark mode"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 transition-colors duration-300">
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-full glass-effect hover:bg-cyan-500/20 transition-all duration-300 group relative overflow-hidden"
              aria-label="Toggle menu"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 text-gray-700 dark:text-gray-300 group-hover:text-cyan-400 dark:group-hover:text-cyan-400 transition-colors duration-300">
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass-effect rounded-2xl mt-3 p-6 border border-cyan-500/20 shadow-2xl animate-in">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-all duration-300 font-medium rounded-lg group overflow-hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 flex items-center">
                    {item.label}
                    <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  </span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 