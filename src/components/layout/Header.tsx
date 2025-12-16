import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Palette, Clock, MapPin } from 'lucide-react';

interface HeaderProps {
  theme: 'theme1' | 'theme2';
  toggleTheme: () => void;
}

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  icon: string;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const getWeather = async () => {
      try {
        setLoading(true);
        
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 10000,
            enableHighAccuracy: true
          });
        });

        const { latitude, longitude } = position.coords;
        
        const API_KEY = process.env.VITE_OPENWEATHERMAP_API_KEY || 'demo_key';
        
        if (API_KEY === 'demo_key') {
          const mockWeather: WeatherData = {
            location: "Miami, FL",
            temperature: Math.floor(Math.random() * 20) + 15,
            condition: "Partly Cloudy",
            icon: "☁️"
          };
          setWeather(mockWeather);
          return;
        }
        
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        
        if (!weatherResponse.ok) {
          throw new Error('Weather API request failed');
        }
        
        const weatherData = await weatherResponse.json();
        
        const geoResponse = await fetch(
          `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`
        );
        
        let locationName = "Unknown Location";
        if (geoResponse.ok) {
          const geoData = await geoResponse.json();
          if (geoData.length > 0) {
            const location = geoData[0];
            locationName = `${location.name}, ${location.country}`;
          }
        }
        
        const weatherIcons: { [key: string]: string } = {
          'Clear': '☀️',
          'Clouds': '☁️',
          'Rain': '🌧️',
          'Drizzle': '🌦️',
          'Thunderstorm': '⛈️',
          'Snow': '❄️',
          'Mist': '🌫️',
          'Fog': '🌫️',
          'Haze': '🌫️'
        };
        
        const weatherInfo: WeatherData = {
          location: locationName,
          temperature: Math.round(weatherData.main.temp),
          condition: weatherData.weather[0].main,
          icon: weatherIcons[weatherData.weather[0].main] || '🌤️'
        };

        setWeather(weatherInfo);
      } catch (err) {
        console.error('Error getting weather:', err);
        setWeather({
          location: "Location unavailable",
          temperature: 22,
          condition: "Unknown",
          icon: "🌤️"
        });
      } finally {
        setLoading(false);
      }
    };

    getWeather();
    
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

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
                className="relative px-4 py-2 text-gray-700 theme1:text-gray-300 theme2:text-gray-700 hover:text-cyan-400 transition-all duration-300 font-medium rounded-lg group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-3/4 transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-3 px-3 py-1.5 glass-effect rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-gray-800 dark:text-white" />
                <span className="font-mono text-sm font-semibold text-gray-800 dark:text-white">
                  {formatTime(time)}
                </span>
              </div>
              {weather && !loading && (
                <div className="flex items-center space-x-2 border-l border-gray-400 dark:border-white/30 pl-3">
                  <span className="text-base">{weather.icon}</span>
                  <span className="text-sm font-semibold text-gray-800 dark:text-white">
                    {Math.round((weather.temperature * 9/5) + 32)}°F
                  </span>
                </div>
              )}
              {loading && (
                <div className="flex items-center space-x-2 border-l border-gray-400 dark:border-white/30 pl-3">
                  <div className="h-4 w-8 bg-gray-400 dark:bg-white/30 rounded animate-pulse"></div>
                </div>
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full glass-effect hover:bg-cyan-500/20 transition-all duration-300 group relative overflow-hidden"
              aria-label={`Switch to ${theme === 'theme1' ? 'Theme 2' : 'Theme 1'}`}
              title={`Current: ${theme === 'theme1' ? 'Theme 1 (Futuristic)' : 'Theme 2 (Modern)'}`}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 text-gray-700 theme1:text-gray-300 theme2:text-gray-700 group-hover:text-cyan-400 transition-colors duration-300">
                {theme === 'theme1' ? <Palette size={20} /> : <Sparkles size={20} />}
              </span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 rounded-full glass-effect hover:bg-cyan-500/20 transition-all duration-300 group relative overflow-hidden"
              aria-label="Toggle menu"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 text-gray-700 theme1:text-gray-300 theme2:text-gray-700 group-hover:text-cyan-400 transition-colors duration-300">
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
                  className="relative px-4 py-3 text-gray-700 theme1:text-gray-300 theme2:text-gray-700 hover:text-cyan-400 transition-all duration-300 font-medium rounded-lg group overflow-hidden"
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