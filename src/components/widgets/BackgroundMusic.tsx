import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Minimize2, Maximize2 } from 'lucide-react';

interface BackgroundMusicProps {
  theme: 'theme1' | 'theme2';
}

const BackgroundMusic = ({ theme }: BackgroundMusicProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const playlist = [
    {
      title: "You Know Me",
      url: "/You Know Me - Jeremy Black.mp3",
      duration: "3:45",
      artist: "Jeremy Black"
    },
    {
      title: "Deep House Vibes",
      url: "/music/deep-house-vibes.mp3",
      duration: "4:32",
      artist: "House Flow"
    },
    {
      title: "Tech House Groove",
      url: "/music/tech-house-groove.mp3",
      duration: "5:18",
      artist: "Digital Beats"
    },
    {
      title: "Chill House Flow",
      url: "/music/chill-house-flow.mp3",
      duration: "3:55",
      artist: "Relax House"
    },
    {
      title: "Progressive House",
      url: "/music/progressive-house.mp3",
      duration: "6:12",
      artist: "Future Sound"
    },
    {
      title: "Minimal House",
      url: "/music/minimal-house.mp3",
      duration: "4:08",
      artist: "Minimal Flow"
    }
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Auto-play prevented by browser:', error);
        setIsPlaying(false);
      });
    }
  }, [currentTrack]);

  useEffect(() => {
    let hasStarted = false;
    
    const handleUserInteraction = (event: Event) => {
      if (event.target && (event.target as Element).closest('.music-player')) {
        return;
      }
      
      if (audioRef.current && !isPlaying && !hasStarted) {
        hasStarted = true;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.log('Auto-play still blocked:', error);
        });
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []);

  const togglePlay = () => {
    console.log('Toggle play clicked, current state:', isPlaying);
    if (audioRef.current) {
      if (isPlaying) {
        console.log('Pausing audio...');
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        console.log('Playing audio...');
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          console.log('Play failed:', error);
        });
      }
    }
  };

  const nextTrack = () => {
    const next = (currentTrack + 1) % playlist.length;
    setCurrentTrack(next);
    if (audioRef.current) {
      audioRef.current.src = playlist[next].url;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  };

  const prevTrack = () => {
    const prev = currentTrack === 0 ? playlist.length - 1 : currentTrack - 1;
    setCurrentTrack(prev);
    if (audioRef.current) {
      audioRef.current.src = playlist[prev].url;
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleEnded = () => {
    nextTrack();
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    if (!isMinimized) {
      setShowControls(false);
    }
  };

  return (
    <div className="music-player fixed top-20 right-4 z-50" style={{ zIndex: 9999 }}>
      <div 
        className={`glass-effect rounded-3xl shadow-2xl p-3 md:p-4 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 ${
          isMinimized ? 'w-16 md:w-16' : (showControls || isMobile ? 'w-72 md:w-80' : 'w-16 md:w-16')
        } ${theme === 'theme1' ? 'text-white' : 'text-gray-800'}`}
        onMouseEnter={() => !isMobile && !isMinimized && setShowControls(true)}
        onMouseLeave={() => !isMobile && !isMinimized && setShowControls(false)}
        onTouchStart={() => isMobile && !isMinimized && setShowControls(true)}
      >
        <div className="flex items-center space-x-3">
          <button
            onClick={togglePlay}
            className={`relative w-16 h-16 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 touch-manipulation overflow-hidden group ${
              isPlaying 
                ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg shadow-red-500/50' 
                : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white shadow-lg shadow-cyan-500/50'
            }`}
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></span>
            <span className="relative z-10">
              {isPlaying ? <Pause size={24} className="md:w-5 md:h-5" /> : <Play size={24} className="md:w-5 md:h-5" />}
            </span>
          </button>
          
          {isMobile && (
            <button
              onClick={toggleMinimize}
              className="p-2 rounded-full glass-effect hover:bg-purple-500/20 hover:border-purple-500/50 active:bg-purple-500/30 transition-all duration-300 touch-manipulation"
            >
              {isMinimized ? <Maximize2 size={20} /> : <Minimize2 size={20} />}
            </button>
          )}
          
          {(showControls || isMobile) && !isMinimized && (
            <>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{playlist[currentTrack].title}</p>
                <p className="text-xs opacity-70">{playlist[currentTrack].artist} • {playlist[currentTrack].duration}</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={prevTrack}
                  className="p-3 md:p-2 rounded-full glass-effect hover:bg-purple-500/20 hover:border-purple-500/50 active:bg-purple-500/30 transition-all duration-300 touch-manipulation"
                >
                  <SkipBack size={20} className="md:w-4 md:h-4" />
                </button>
                
                <button
                  onClick={nextTrack}
                  className="p-3 md:p-2 rounded-full glass-effect hover:bg-purple-500/20 hover:border-purple-500/50 active:bg-purple-500/30 transition-all duration-300 touch-manipulation"
                >
                  <SkipForward size={20} className="md:w-4 md:h-4" />
                </button>
              </div>
            </>
          )}
        </div>

        {(showControls || isMobile) && !isMinimized && (
          <div className="flex items-center space-x-2 mt-3">
            <button
              onClick={toggleMute}
              className="p-2 md:p-1 rounded-lg glass-effect hover:bg-purple-500/20 hover:border-purple-500/50 active:bg-purple-500/30 transition-all duration-300 touch-manipulation"
            >
              {isMuted ? <VolumeX size={20} className="md:w-4 md:h-4" /> : <Volume2 size={20} className="md:w-4 md:h-4" />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(parseFloat(e.target.value));
                setIsMuted(false);
              }}
              className="flex-1 h-3 md:h-2 bg-white/20 rounded-lg appearance-none cursor-pointer touch-manipulation"
              style={{
                WebkitAppearance: 'none',
                appearance: 'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
            />
          </div>
        )}

        <audio
          ref={audioRef}
          src={playlist[currentTrack].url}
          onEnded={handleEnded}
          preload="metadata"
        />
      </div>
    </div>
  );
};

export default BackgroundMusic; 