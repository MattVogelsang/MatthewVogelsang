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

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
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
    <div className="fixed bottom-4 right-4 z-50">
      <div 
        className={`glass rounded-2xl shadow-2xl p-4 transition-all duration-500 hover:scale-105 ${
          showControls ? 'w-80' : 'w-16'
        } ${darkMode ? 'text-white' : 'text-gray-800'}`}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <div className="flex items-center space-x-3">
          <button
            onClick={togglePlay}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              isPlaying 
                ? 'bg-red-500 hover:bg-red-600 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          
          {showControls && (
            <>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{playlist[currentTrack].title}</p>
                <p className="text-xs opacity-70">{playlist[currentTrack].artist} • {playlist[currentTrack].duration}</p>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={prevTrack}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <SkipBack size={16} />
                </button>
                
                <button
                  onClick={nextTrack}
                  className="p-2 rounded-full hover:bg-white/20 transition-colors"
                >
                  <SkipForward size={16} />
                </button>
              </div>
            </>
          )}
        </div>

        {showControls && (
          <div className="flex items-center space-x-2 mt-3">
            <button
              onClick={toggleMute}
              className="p-1 rounded hover:bg-white/20 transition-colors"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
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
              className="flex-1 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
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