import { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from 'lucide-react';

interface BackgroundMusicProps {
  darkMode: boolean;
}

const BackgroundMusic = ({ darkMode }: BackgroundMusicProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // House Music Playlist for Portfolio
  const playlist = [
    {
      title: "You Know Me",
      url: "/You Know Me - Jeremy Black.mp3",
      duration: "3:45",
      artist: "Jeremy Black"
    },
    {
      title: "Deep House Vibes",
      url: "/music/deep-house-vibes.mp3", // Add your house music file here
      duration: "4:32",
      artist: "House Flow"
    },
    {
      title: "Tech House Groove",
      url: "/music/tech-house-groove.mp3", // Add your house music file here
      duration: "5:18",
      artist: "Digital Beats"
    },
    {
      title: "Chill House Flow",
      url: "/music/chill-house-flow.mp3", // Add your house music file here
      duration: "3:55",
      artist: "Relax House"
    },
    {
      title: "Progressive House",
      url: "/music/progressive-house.mp3", // Add your house music file here
      duration: "6:12",
      artist: "Future Sound"
    },
    {
      title: "Minimal House",
      url: "/music/minimal-house.mp3", // Add your house music file here
      duration: "4:08",
      artist: "Minimal Flow"
    }
  ];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play when component mounts
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log('Auto-play prevented by browser:', error);
        // Most browsers block auto-play, so we'll start paused
        setIsPlaying(false);
      });
    }
  }, [currentTrack]);

  // Enhanced auto-play with user interaction
  useEffect(() => {
    let hasStarted = false;
    
    const handleUserInteraction = (event: Event) => {
      // Don't auto-play if user is clicking on music controls
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
        // Remove event listeners after first interaction
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
        document.removeEventListener('touchstart', handleUserInteraction);
      }
    };

    // Add event listeners for user interaction
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, []); // Remove isPlaying dependency to prevent re-adding listeners

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

  return (
    <div className="fixed bottom-4 right-4 z-50 music-player">
      <div 
        className={`glass rounded-2xl shadow-2xl p-3 md:p-4 transition-all duration-500 hover:scale-105 ${
          showControls || isMobile ? 'w-72 md:w-80' : 'w-16 md:w-16'
        } ${darkMode ? 'text-white' : 'text-gray-800'}`}
        onMouseEnter={() => !isMobile && setShowControls(true)}
        onMouseLeave={() => !isMobile && setShowControls(false)}
        onTouchStart={() => isMobile && setShowControls(true)}
      >
        <div className="flex items-center space-x-3">
          <button
            onClick={togglePlay}
            className={`w-16 h-16 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 touch-manipulation ${
              isPlaying 
                ? 'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white'
            }`}
          >
            {isPlaying ? <Pause size={24} className="md:w-5 md:h-5" /> : <Play size={24} className="md:w-5 md:h-5" />}
          </button>
          
          {(showControls || isMobile) && (
            <>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{playlist[currentTrack].title}</p>
                <p className="text-xs opacity-70">{playlist[currentTrack].artist} • {playlist[currentTrack].duration}</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={prevTrack}
                  className="p-3 md:p-2 rounded-full hover:bg-white/20 active:bg-white/30 transition-colors touch-manipulation"
                >
                  <SkipBack size={20} className="md:w-4 md:h-4" />
                </button>
                
                <button
                  onClick={nextTrack}
                  className="p-3 md:p-2 rounded-full hover:bg-white/20 active:bg-white/30 transition-colors touch-manipulation"
                >
                  <SkipForward size={20} className="md:w-4 md:h-4" />
                </button>
              </div>
            </>
          )}
        </div>

        {(showControls || isMobile) && (
          <div className="flex items-center space-x-2 mt-3">
            <button
              onClick={toggleMute}
              className="p-2 md:p-1 rounded hover:bg-white/20 active:bg-white/30 transition-colors touch-manipulation"
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