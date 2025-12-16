import { useState, useEffect } from 'react';
import { Clock, MapPin, Thermometer, Droplets, Wind, ChevronDown, ChevronUp, Minimize2, Maximize2 } from 'lucide-react';

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
}

interface WeatherTimeProps {
  theme: 'theme1' | 'theme2';
}

const WeatherTime = ({ theme }: WeatherTimeProps) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [time, setTime] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [isMinimized, setIsMinimized] = useState(() => {
    const saved = localStorage.getItem('weatherMinimized');
    return saved ? JSON.parse(saved) : false;
  });
  const [isMobile, setIsMobile] = useState(false);

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
            icon: "☁️",
            humidity: Math.floor(Math.random() * 40) + 40,
            windSpeed: Math.floor(Math.random() * 20) + 5,
            feelsLike: Math.floor(Math.random() * 20) + 13
          };
          setWeather(mockWeather);
          setError(null);
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
        
        const weather: WeatherData = {
          location: locationName,
          temperature: Math.round(weatherData.main.temp),
          condition: weatherData.weather[0].main,
          icon: weatherIcons[weatherData.weather[0].main] || '🌤️',
          humidity: weatherData.main.humidity,
          windSpeed: Math.round(weatherData.wind.speed * 3.6),
          feelsLike: Math.round(weatherData.main.feels_like)
        };

        setWeather(weather);
        setError(null);
      } catch (err) {
        console.error('Error getting weather:', err);
        setError('Unable to get weather data');
        
        setWeather({
          location: "Location unavailable",
          temperature: 22,
          condition: "Unknown",
          icon: "🌤️",
          humidity: 60,
          windSpeed: 10,
          feelsLike: 20
        });
      } finally {
        setLoading(false);
      }
    };

    getWeather();

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      clearInterval(timeInterval);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('weatherMinimized', JSON.stringify(isMinimized));
  }, [isMinimized]);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    if (!isMinimized) {
      setShowDetails(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="fixed bottom-20 md:bottom-4 left-2 md:left-4 z-40">
        <div className={`glass-effect rounded-3xl shadow-2xl p-4 border border-cyan-500/20 transition-all duration-300 ${theme === 'theme1' ? 'text-white' : 'text-gray-800'}`}>
          <div className="animate-pulse">
            <div className="h-4 bg-white/20 rounded w-24 mb-2"></div>
            <div className="h-6 bg-white/20 rounded w-16"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-20 md:bottom-4 left-2 md:left-4 z-40">
      <div 
        className={`glass-effect rounded-3xl shadow-2xl p-4 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 ${
          isMinimized ? 'w-auto' : showDetails ? 'w-72 md:w-80' : 'w-auto'
        } ${theme === 'theme1' ? 'text-white' : 'text-gray-800'}`}
        onMouseEnter={() => !isMobile && !isMinimized && setShowDetails(true)}
        onMouseLeave={() => !isMobile && !isMinimized && setShowDetails(false)}
        onTouchStart={() => isMobile && !isMinimized && setShowDetails(true)}
      >
        <div className={`${isMinimized ? 'mb-2' : 'mb-4'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock size={isMinimized ? 16 : 20} className="opacity-70" />
              <div className={`font-bold font-mono ${isMinimized ? 'text-lg' : 'text-2xl'}`}>
                {formatTime(time)}
              </div>
            </div>
            <button
              onClick={toggleMinimize}
              className="p-1.5 rounded-full glass-effect hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 touch-manipulation"
              title={isMinimized ? "Expand weather" : "Minimize weather"}
            >
              {isMobile ? (
                isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />
              ) : (
                isMinimized ? <ChevronUp size={16} /> : <ChevronDown size={16} />
              )}
            </button>
          </div>
          {!isMinimized && (
            <div className="text-sm opacity-70">
              {formatDate(time)}
            </div>
          )}
        </div>

        {weather && !isMinimized && (
          <div className="border-t border-white/20 pt-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="opacity-70" />
                <div className="text-lg font-semibold">{weather.location}</div>
              </div>
              <div className="text-3xl">{weather.icon}</div>
            </div>
            
            <div className="flex items-center justify-between mb-3">
              <div className="text-2xl font-bold">
                {weather.temperature}°C / {Math.round((weather.temperature * 9/5) + 32)}°F
              </div>
              <div className="text-sm opacity-70 text-right">
                {weather.condition}
              </div>
            </div>

            {showDetails && (
              <div className="space-y-2 text-sm opacity-70">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Thermometer size={14} />
                    <span>Feels like</span>
                  </div>
                  <span>{weather.feelsLike}°C / {Math.round((weather.feelsLike * 9/5) + 32)}°F</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Droplets size={14} />
                    <span>Humidity</span>
                  </div>
                  <span>{weather.humidity}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Wind size={14} />
                    <span>Wind</span>
                  </div>
                  <span>{weather.windSpeed} km/h</span>
                </div>
              </div>
            )}
          </div>
        )}

        {weather && isMinimized && (
          <div className="border-t border-white/20 pt-2">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center space-x-1">
                <span className="text-base">{weather.icon}</span>
                <span className="font-medium">{weather.temperature}°</span>
              </div>
              <div className="text-xs opacity-70 hidden sm:block">
                {weather.location.split(',')[0]}
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="text-xs text-red-400 mt-2">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherTime; 