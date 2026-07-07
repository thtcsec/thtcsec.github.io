import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ArrowLeft, 
  Github, 
  Linkedin, 
  Mail, 
  Disc,
  Sparkles,
  Maximize2,
  Minimize2,
  CloudRain,
  Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/config";

// Interface for music track
interface Track {
  title: string;
  artist: string;
  src: string;
  cover: string;
}

const tracks: Track[] = [
  {
    title: "学校を 안갔어 (Didn't Go to School Remix)",
    artist: "량현량하 (Ryanghyun Ryangha) - DragonChimes Music",
    src: "/music/school-remix.mp3",
    cover: "/images/doro.jpeg" // Custom doro record center sticker
  }
];

interface LyricLine {
  time: number;
  text: string;
  translation?: string;
}

const schoolRemixLyrics: LyricLine[] = [
  { time: 0, text: "🎵 (Music Playing) 🎵", translation: "🎵 (Intro) 🎵" },
  { time: 5, text: "학 학 학 학 학교를 안갔어", translation: "I, I, I, I, I didn't go to school" },
  { time: 10, text: "학 학 학 학 학교를 안갔어", translation: "I, I, I, I, I didn't go to school" },
  { time: 15, text: "학 학 학 학 학교를 안갔어", translation: "I, I, I, I, I didn't go to school" },
  { time: 20, text: "어쩌면 좋겠어 학교를 안갔어", translation: "What should I do? I didn't go to school" },
  { time: 25, text: "아니 아니야 안간게 아니야", translation: "No, no, that's not it, it's not that I didn't go" },
  { time: 30, text: "실수로 못갔어 정말이야 믿어줘", translation: "I couldn't go by mistake, please believe me" },
  { time: 35, text: "제발좀 들어줘 일부러 그런게 아니야", translation: "Please listen, I didn't do it on purpose" },
  { time: 40, text: "내 얘길 들어봐줘", translation: "Please listen to my story" },
  { time: 46, text: "아침에 일어나 시간을 보니까", translation: "I woke up in the morning, looked at the time..." },
  { time: 51, text: "학교 버스는 벌써 떠나버렸고", translation: "The school bus had already departed..." },
  { time: 56, text: "어떻게 해야 하나 가슴이 콩닥콩닥", translation: "What should I do? My heart is thumping..." },
  { time: 61, text: "에라 모르겠다 하고 오락실로 갔지", translation: "Oh well, I just headed to the game arcade" },
  { time: 66, text: "오락실 문을 열자마자 신나게 게임을 해", translation: "As soon as the arcade opened, I played games excitedly" },
  { time: 71, text: "스트리트 파이터, 테트리스, 보글보글", translation: "Street Fighter, Tetris, Bubble Bobble..." },
  { time: 76, text: "정신없이 하다 보니 벌써 정오가 넘었어", translation: "Before I knew it, it was past noon!" },
  { time: 82, text: "학 학 학 학 학교를 안갔어", translation: "I, I, I, I, I didn't go to school" },
  { time: 87, text: "학 학 학 학 학교를 안갔어", translation: "I, I, I, I, I didn't go to school" },
  { time: 92, text: "어쩌면 좋겠어 학교를 안갔어", translation: "What should I do? I didn't go to school" },
  { time: 97, text: "실수로 못갔어 정말이야 믿어줘", translation: "I couldn't go by mistake, please believe me" },
  { time: 102, text: "일부러 그런게 아니야 내 얘길 들어봐줘", translation: "I didn't do it on purpose, please listen to me" },
  { time: 108, text: "🎵 (Guitar & Beat Solo) 🎵", translation: "🎵 (Instrumental Break) 🎵" },
  { time: 122, text: "갑자기 나타난 그 애가 날 보고", translation: "Suddenly, the girl I like saw me..." },
  { time: 127, text: "너 왜 학교 안 가고 여기 있냐고 물어봐", translation: "And asked, 'Why aren't you at school?'" },
  { time: 132, text: "당황한 나는 아무 말도 못 하고", translation: "Embarrassed, I couldn't say a word..." },
  { time: 137, text: "얼굴만 빨개져서 도망치고 말았네", translation: "My face turned red and I just ran away" },
  { time: 142, text: "터덜터덜 걷다 보니 결국 학교 앞이야", translation: "Wandering around, I ended up in front of the school..." },
  { time: 147, text: "선생님께 혼날 생각 하니 눈물이 나네", translation: "Thinking of teacher scolding me makes me want to cry..." },
  { time: 152, text: "교실 문을 열자 깜짝 놀라며 박수를 쳐", translation: "I opened the door and they suddenly applauded!" },
  { time: 157, text: "게임 대회 신기록 세웠다고 소문이 났대", translation: "Rumor spread that I set the new arcade high score!" },
  { time: 162, text: "학 학 학 학 학교를 안갔어", translation: "I, I, I, I, I didn't go to school" },
  { time: 167, text: "학 학 학 학 학교를 안갔어", translation: "I, I, I, I, I didn't go to school" },
  { time: 172, text: "어쩌면 좋겠어 학교를 안갔어", translation: "What should I do? I didn't go to school" },
  { time: 177, text: "실수로 못갔어 정말이야 믿어줘", translation: "I couldn't go by mistake, please believe me" },
  { time: 182, text: "일부러 그런게 아니야 내 얘길 들어봐줘", translation: "I didn't do it on purpose, please listen to me" },
  { time: 188, text: "🎵 (Outro Beat Fadeout) 🎵", translation: "🎵 (Outro) 🎵" }
];

type Theme = 'cyber' | 'sunset' | 'matrix' | 'deepblue';

const themeStyles = {
  cyber: {
    bg: "bg-slate-950",
    text: "text-slate-100",
    accent: "text-primary",
    accentBg: "bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(168,85,247,0.4)]",
    cardBg: "bg-gradient-to-br from-slate-900/60 to-slate-950/60 border-white/10",
    subText: "text-slate-400",
    glow1: "bg-violet-600/15",
    glow2: "bg-cyan-600/15",
    iconColor: "text-violet-400",
    sliderActive: "hsl(var(--primary))",
    equalizer: "bg-primary/70",
    gridOpacity: "opacity-[0.25]",
    fontFamily: "font-sans",
    platterGlow: "rgba(168,85,247,0.35)",
    sparkColor: "bg-violet-400/20"
  },
  sunset: {
    bg: "bg-stone-950",
    text: "text-amber-50",
    accent: "text-amber-500",
    accentBg: "bg-amber-600 hover:bg-amber-600/90 shadow-[0_0_20px_rgba(245,158,11,0.4)]",
    cardBg: "bg-gradient-to-br from-stone-900/60 to-stone-950/60 border-white/10",
    subText: "text-stone-400",
    glow1: "bg-amber-600/15",
    glow2: "bg-rose-600/15",
    iconColor: "text-amber-400",
    sliderActive: "#f59e0b",
    equalizer: "bg-amber-500/70",
    gridOpacity: "opacity-[0.18]",
    fontFamily: "font-sans",
    platterGlow: "rgba(245,158,11,0.35)",
    sparkColor: "bg-amber-400/20"
  },
  matrix: {
    bg: "bg-zinc-950",
    text: "text-emerald-100",
    accent: "text-emerald-500",
    accentBg: "bg-emerald-600 hover:bg-emerald-600/90 shadow-[0_0_20px_rgba(16,185,129,0.4)]",
    cardBg: "bg-gradient-to-br from-zinc-900/70 to-black/70 border-emerald-500/20",
    subText: "text-emerald-500/70",
    glow1: "bg-emerald-600/15",
    glow2: "bg-green-700/8",
    iconColor: "text-emerald-400",
    sliderActive: "#10b981",
    equalizer: "bg-emerald-500/70",
    gridOpacity: "opacity-[0.12]",
    fontFamily: "font-mono",
    platterGlow: "rgba(16,185,129,0.35)",
    sparkColor: "bg-emerald-400/20"
  },
  deepblue: {
    bg: "bg-blue-950",
    text: "text-blue-100",
    accent: "text-sky-400",
    accentBg: "bg-sky-500 hover:bg-sky-500/90 shadow-[0_0_20px_rgba(14,165,233,0.4)]",
    cardBg: "bg-gradient-to-br from-blue-900/40 to-blue-950/60 border-white/10",
    subText: "text-blue-400",
    glow1: "bg-sky-600/15",
    glow2: "bg-indigo-600/15",
    iconColor: "text-sky-400",
    sliderActive: "#0ea5e9",
    equalizer: "bg-sky-400/70",
    gridOpacity: "opacity-[0.22]",
    fontFamily: "font-sans",
    platterGlow: "rgba(14,165,233,0.35)",
    sparkColor: "bg-sky-300/20"
  }
};

const ImmersivePage = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isRainy, setIsRainy] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>('cyber');
  
  // Vinyl rotation physics simulation
  const [rotationAngle, setRotationAngle] = useState(0);
  const rotationRef = useRef(0);
  const speedRef = useRef(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentTrack = tracks[currentTrackIndex];
  const t = themeStyles[currentTheme];
  const navigate = useNavigate();

  // Initialize Audio
  useEffect(() => {
    const audio = new Audio(currentTrack.src);
    audio.volume = volume;
    audioRef.current = audio;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleAudioEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleAudioEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleAudioEnded);
    };
  }, [currentTrackIndex]);

  // Sync play/pause state
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(err => {
        console.log("Audio play failed: ", err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Platter rotation physics simulation (decelerates when paused)
  useEffect(() => {
    let animFrame: number;
    const updateRotation = () => {
      // 0.65 degrees per frame when playing, 0 when stopped
      const targetSpeed = isPlaying ? 0.65 : 0;
      // Linear interpolation to simulate momentum / deceleration
      speedRef.current += (targetSpeed - speedRef.current) * 0.035;

      if (speedRef.current > 0.005) {
        rotationRef.current = (rotationRef.current + speedRef.current) % 360;
        setRotationAngle(rotationRef.current);
      }
      animFrame = requestAnimationFrame(updateRotation);
    };
    animFrame = requestAnimationFrame(updateRotation);
    return () => cancelAnimationFrame(animFrame);
  }, [isPlaying]);

  // Volume control
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  // Keyboard shortcuts event listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const key = e.key.toLowerCase();
      if (e.code === "Space") {
        e.preventDefault();
        setIsPlaying(prev => !prev);
      } else if (key === 'r') {
        setIsRainy(prev => !prev);
      } else if (key === 'z') {
        setCurrentTheme('cyber');
      } else if (key === 'd') {
        setCurrentTheme('deepblue');
      } else if (e.key === "Escape") {
        e.preventDefault();
        navigate("/");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setVolume(value);
    if (value > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(err => {
        console.error("Error attempting to enable full-screen mode:", err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const cycleTheme = () => {
    const themes: Theme[] = ['cyber', 'sunset', 'matrix', 'deepblue'];
    const nextIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
    setCurrentTheme(themes[nextIndex]);
  };

  // Find active lyric line based on current time
  const currentLyricIndex = schoolRemixLyrics.findIndex(
    (line, idx) => 
      currentTime >= line.time && 
      (idx === schoolRemixLyrics.length - 1 || currentTime < schoolRemixLyrics[idx + 1].time)
  );

  return (
    <div className={`relative min-h-screen ${t.bg} ${t.text} ${t.fontFamily} flex flex-col items-center justify-between p-4 sm:p-6 overflow-hidden transition-colors duration-1000 ease-in-out select-none`}>
      
      {/* Background glow components with slow float animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className={`absolute -top-40 -right-40 w-96 md:w-[650px] h-96 md:h-[650px] rounded-full ${t.glow1} blur-[130px] transition-all duration-1000 ease-in-out animate-float-slow ${isPlaying ? 'scale-110 opacity-80' : 'scale-100 opacity-40'}`} />
        <div className={`absolute -bottom-40 -left-40 w-96 md:w-[650px] h-96 md:h-[650px] rounded-full ${t.glow2} blur-[130px] transition-all duration-1000 ease-in-out animate-float-reverse ${isPlaying ? 'scale-120 opacity-80 animate-pulse' : 'scale-100 opacity-40'}`} />
        {/* Retro Grid Background */}
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] ${t.gridOpacity} transition-opacity duration-1000 ease-in-out`} />
      </div>

      {/* Analog tape grain overlay for authentic lofi vibes */}
      <div className="absolute inset-0 z-0 pointer-events-none grainy-overlay" />

      {/* Ambient Floating Spark System */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => {
          const size = 3 + Math.random() * 5;
          const left = Math.random() * 100;
          const delay = Math.random() * 12;
          const duration = 12 + Math.random() * 8;
          return (
            <div
              key={i}
              className={`absolute rounded-full ${t.sparkColor} blur-[1px] ambient-spark`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`
              }}
            />
          );
        })}
      </div>

      {/* Rain Effect overlay */}
      {isRainy && (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[1.5px] h-[22px] bg-sky-400/25 animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-${Math.random() * 50}px`,
                animationDuration: `${0.4 + Math.random() * 0.7}s`,
                animationDelay: `${Math.random() * 2}s`,
                animationIterationCount: 'infinite'
              }}
            />
          ))}
        </div>
      )}

      {/* Embedded CSS for custom styling & animations */}
      <style>{`
        .vinyl-record {
          background: radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.95) 30%), 
                      conic-gradient(from 0deg, #111 0%, #222 8%, #111 15%, #2d2d2d 25%, #111 35%, #222 45%, #111 50%, #222 58%, #111 65%, #2d2d2d 75%, #111 85%, #222 95%, #111 100%);
          box-shadow: 0 15px 45px rgba(0,0,0,0.7), inset 0 0 15px rgba(255,255,255,0.05);
        }
        .vinyl-shine {
          background: conic-gradient(from 0deg, transparent 30%, rgba(255,255,255,0.04) 40%, transparent 50%, transparent 80%, rgba(255,255,255,0.04) 90%, transparent 100%);
        }
        /* Custom progress bar styles */
        .custom-slider {
          -webkit-appearance: none;
          width: 100%;
          background: rgba(255,255,255,0.08);
          border-radius: 9999px;
          height: 6px;
          outline: none;
        }
        .custom-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: ${t.sliderActive};
          cursor: pointer;
          transition: transform 0.15s;
          box-shadow: 0 0 10px ${t.sliderActive};
        }
        .custom-slider::-webkit-slider-thumb:hover {
          transform: scale(1.3);
        }
        /* Soundwaves visualizer animation */
        @keyframes soundwave {
          0%, 100% { height: 4px; }
          50% { height: 28px; }
        }
        /* Rain falling animation */
        @keyframes fall {
          from { transform: translateY(-20px); }
          to { transform: translateY(100vh); }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
        }
        /* Platter pulse animations with active theme color variables */
        @keyframes beat-pulse {
          0%, 100% { box-shadow: 0 0 15px rgba(0,0,0,0.4); }
          50% { box-shadow: 0 0 35px var(--glow-color, ${t.platterGlow}); }
        }
        .vinyl-beat-pulse {
          animation: beat-pulse 1.3s infinite ease-in-out;
        }
        /* Floating background blobs animation */
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(60px, -40px) scale(1.1); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0) scale(1.1); }
          50% { transform: translate(-60px, 40px) scale(0.9); }
        }
        .animate-float-slow {
          animation: float-slow 22s infinite ease-in-out;
        }
        .animate-float-reverse {
          animation: float-reverse 26s infinite ease-in-out;
        }
        /* Ambient particles float-up animation */
        @keyframes spark-float {
          0% { transform: translateY(100vh) translateX(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-10vh) translateX(60px); opacity: 0; }
        }
        .ambient-spark {
          animation: spark-float 16s infinite linear;
        }
        /* Analog film grain overlay */
        .grainy-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.02;
        }
      `}</style>

      {/* Header bar */}
      <header className="w-full max-w-5xl flex flex-wrap gap-3 items-center justify-between z-10 mb-4 md:mb-0">
        <Button variant="ghost" className="text-slate-400 hover:text-white rounded-full bg-slate-900/40 border border-slate-800/40 backdrop-blur-md px-4 py-2 hover:scale-105 transition-all text-xs sm:text-sm" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
        
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={cycleTheme}
            className="text-slate-400 hover:text-white rounded-full bg-slate-900/40 border border-slate-800/40 backdrop-blur-md px-3 py-2 flex items-center gap-1.5 transition-all hover:scale-105 text-xs"
          >
            <Palette size={13} className={t.iconColor} />
            <span className="capitalize">{currentTheme} Mode</span>
          </Button>

          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsRainy(!isRainy)}
            className={`rounded-full border backdrop-blur-md px-3 py-2 flex items-center gap-1.5 transition-all hover:scale-105 text-xs ${
              isRainy 
                ? "bg-sky-500/20 border-sky-500/40 text-sky-400" 
                : "text-slate-400 hover:text-white bg-slate-900/40 border-slate-800/40"
            }`}
          >
            <CloudRain size={13} className={isRainy ? "animate-bounce" : ""} />
            <span>Rain FX</span>
          </Button>

          <div className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-500 font-semibold flex items-center gap-1.5 bg-slate-900/60 border border-slate-800/50 rounded-full px-3 py-1.5 backdrop-blur-md">
            <Sparkles className="w-3 h-3 text-yellow-500 animate-pulse" />
            Zen Space
          </div>
          
          <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="text-slate-400 hover:text-white rounded-full bg-slate-900/40 border border-slate-800/40 backdrop-blur-md h-8 w-8 sm:h-9 sm:w-9">
            {isFullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
          </Button>
        </div>
      </header>

      {/* Main player layout */}
      <main className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center my-auto z-10 py-4">
        
        {/* Left Column: Vinyl Player */}
        <div className="md:col-span-6 flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-[350px] sm:h-[350px] md:w-[380px] md:h-[380px] rounded-2xl bg-zinc-900/80 border border-zinc-800/50 p-4 sm:p-6 flex items-center justify-center shadow-2xl backdrop-blur-md group">
            
            {/* Wood Plaque details */}
            <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-zinc-700 shadow-inner" />
            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-zinc-700 shadow-inner" />
            <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-zinc-700 shadow-inner" />
            <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-zinc-700 shadow-inner" />
            
            {/* Platter (Dark circle underneath with active pulsing glow) */}
            <div 
              className={`w-56 h-56 sm:w-[290px] sm:h-[290px] md:w-[310px] md:h-[310px] rounded-full bg-black border-[3px] border-zinc-800/40 flex items-center justify-center relative shadow-inner transition-all duration-1000 ${
                isPlaying ? 'vinyl-beat-pulse' : ''
              }`}
              style={{
                ['--glow-color' as any]: t.platterGlow
              }}
            >
              
              {/* Vinyl Record Platter */}
              <div 
                className="w-[210px] h-[210px] sm:w-[270px] sm:h-[270px] md:w-[290px] md:h-[290px] rounded-full vinyl-record flex items-center justify-center relative pointer-events-none"
                style={{ 
                  transform: `rotate(${rotationAngle}deg)`
                }}
              >
                {/* Conical reflections */}
                <div className="absolute inset-0 rounded-full vinyl-shine" />
                
                {/* Grooves marker details */}
                <div className="absolute inset-3 sm:inset-4 rounded-full border border-black/25" />
                <div className="absolute inset-6 sm:inset-8 rounded-full border border-black/25" />
                <div className="absolute inset-12 sm:inset-16 rounded-full border border-black/30" />
                <div className="absolute inset-18 sm:inset-24 rounded-full border border-black/35" />

                {/* Center sticker - spinning the Doro image from the root */}
                <div className="w-[70px] h-[70px] sm:w-[88px] sm:h-[88px] md:w-[96px] md:h-[96px] rounded-full bg-zinc-800 border-[3px] border-black relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={currentTrack.cover} 
                    alt="Doro Center Cover" 
                    className="w-full h-full object-cover rounded-full opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
                  {/* Spindle hole */}
                  <div className="w-3 h-3 rounded-full bg-zinc-950 border border-zinc-700 shadow-inner z-10" />
                </div>
              </div>
            </div>

            {/* Tonearm Assembly */}
            <div className="absolute top-4 right-6 sm:right-10 w-24 h-40 pointer-events-none z-20">
              {/* Tonearm base pivot */}
              <div className="absolute right-4 top-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center shadow-lg">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full ${t.iconColor} bg-current animate-pulse`} />
                </div>
              </div>
              {/* Arm stem */}
              <div 
                className="absolute right-9 top-9 w-2 h-36 origin-[14px_6px] transition-transform duration-1000 ease-out"
                style={{ 
                  transform: isPlaying ? "rotate(26deg)" : "rotate(0deg)",
                  filter: "drop-shadow(5px 5px 8px rgba(0,0,0,0.5))"
                }}
              >
                {/* Silver Metal Bar */}
                <div className="w-1 h-28 sm:h-32 bg-zinc-400 mx-auto rounded-full" />
                {/* Counterweight */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-5 bg-zinc-700 border border-zinc-600 rounded-sm" />
                {/* Cartridge Head & Stylus */}
                <div className="absolute bottom-4 sm:bottom-0 left-1/2 -translate-x-1/2 w-3.5 h-6 bg-zinc-800 border border-zinc-700 rounded-t-sm flex flex-col justify-end items-center">
                  <div className="w-2 h-1 bg-yellow-600/70" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Music Info & Visualizer & Controls */}
        <div className="md:col-span-6 flex flex-col gap-4 sm:gap-6 w-full">
          
          {/* Glassmorphic controller panel */}
          <div className={`rounded-2xl border ${t.cardBg} p-5 sm:p-6 md:p-8 backdrop-blur-xl shadow-2xl flex flex-col gap-4 sm:gap-6 transition-all duration-1000 ease-in-out`}>
            
            {/* Title & Artist & Equalizer */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white leading-tight">
                  {currentTrack.title}
                </h2>
                <p className={`text-xs sm:text-sm ${t.subText} font-medium`}>
                  {currentTrack.artist}
                </p>
              </div>
              {/* Mini visualizer */}
              <div className="flex items-end gap-1 h-8 w-12 shrink-0">
                {[1, 2, 3, 4, 5].map((bar) => {
                  const delayMap = ["0s", "0.2s", "0.4s", "0.1s", "0.3s"];
                  const baseDurations = ["1.1s", "0.8s", "1.3s", "0.9s", "1.2s"];
                  return (
                    <div 
                      key={bar}
                      className={`w-1.5 rounded-full ${t.equalizer} transition-all duration-300`}
                      style={{
                        animation: isPlaying ? `soundwave ${baseDurations[bar-1]} ease-in-out infinite` : 'none',
                        animationDelay: delayMap[bar-1],
                        height: isPlaying ? 'auto' : '4px'
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Synchronized Lyrics Container */}
            <div className="h-16 flex flex-col items-center justify-center text-center px-4 py-2 bg-black/30 border border-white/5 rounded-xl transition-all duration-500 ease-in-out min-h-[4rem]">
              {currentLyricIndex >= 0 ? (
                <div className="animate-fade-in space-y-1">
                  <p className="text-xs sm:text-sm font-bold text-white tracking-wide leading-snug">
                    {schoolRemixLyrics[currentLyricIndex].text}
                  </p>
                  <p className={`text-[10px] sm:text-xs ${t.subText} font-medium leading-normal`}>
                    {schoolRemixLyrics[currentLyricIndex].translation}
                  </p>
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">🎵 Enjoying the lofi beats 🎵</p>
              )}
            </div>

            {/* Time progress bar */}
            <div className="space-y-2">
              <input 
                type="range" 
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="custom-slider cursor-pointer"
                style={{
                  background: `linear-gradient(to right, ${t.sliderActive} 0%, ${t.sliderActive} ${
                    (currentTime / (duration || 1)) * 100
                  }%, rgba(255, 255, 255, 0.08) ${
                    (currentTime / (duration || 1)) * 100
                  }%, rgba(255, 255, 255, 0.08) 100%)`
                }}
              />
              <div className={`flex justify-between text-[11px] ${t.subText} font-medium font-mono`}>
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Audio Controls */}
            <div className="flex items-center justify-between gap-4">
              
              {/* Volume controls (Optimized touch target size) */}
              <div className="flex items-center gap-2 w-28">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleMute}
                  className="h-9 w-9 text-slate-400 hover:text-white rounded-full bg-slate-800/20 hover:bg-slate-800/40 border border-slate-700/10 shrink-0"
                >
                  {isMuted || volume === 0 ? <VolumeX size={15} /> : <Volume2 size={15} />}
                </Button>
                <input 
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1.5 rounded-full appearance-none bg-slate-800 cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, ${t.sliderActive} 0%, ${t.sliderActive} ${
                      (isMuted ? 0 : volume) * 100
                    }%, rgba(255, 255, 255, 0.08) ${
                      (isMuted ? 0 : volume) * 100
                    }%, rgba(255, 255, 255, 0.08) 100%)`
                  }}
                />
              </div>

              {/* Main Play Button (Larger touch target) */}
              <button 
                onClick={togglePlay}
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full ${t.accentBg} hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center text-white group relative overflow-hidden`}
                aria-label={isPlaying ? "Pause music" : "Play music"}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {isPlaying ? (
                  <Pause size={24} className="fill-white" />
                ) : (
                  <Play size={24} className="fill-white translate-x-0.5" />
                )}
              </button>

              {/* Spacebar hotkey hint */}
              <div className={`hidden sm:flex items-center gap-1.5 text-[10px] ${t.subText} font-medium w-28 justify-end`}>
                <kbd className="px-1.5 py-0.5 rounded border border-slate-800 bg-slate-900 font-sans shadow-sm text-[9px]">Space</kbd>
                <span>to toggle</span>
              </div>
              <div className="flex sm:hidden w-28" />

            </div>

          </div>

          {/* Minimalist Profile Note - using normal avatar, non-spinning */}
          <div className={`rounded-2xl border ${t.cardBg} p-4 sm:p-5 backdrop-blur-xl flex flex-col sm:flex-row gap-4 items-center transition-all duration-1000 ease-in-out`}>
            <img 
              src="/images/avatar.jpg" 
              alt={siteConfig.author} 
              className="w-12 h-12 rounded-full border border-slate-800/80 object-cover flex-shrink-0"
            />
            <div className="flex-1 text-center sm:text-left space-y-1">
              <h4 className="text-sm font-semibold text-white">{siteConfig.authorEn}</h4>
              <p className={`text-xs ${t.subText} leading-relaxed max-w-sm`}>
                IT Specialist & Cybersecurity student at HUFLIT. Taking a moment to step back, put on lofi music, and relax.
              </p>
              
              {/* Mini Social Icons */}
              <div className="flex items-center justify-center sm:justify-start gap-3 pt-1">
                {[
                  { icon: Github, href: siteConfig.social.github, label: "GitHub" },
                  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" }
                ].map(({ icon: Icon, href, label }) => (
                  <a 
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-white transition-colors"
                    aria-label={label}
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Keyboard Shortcuts Guide Panel - visible on desktop */}
          <div className={`hidden md:grid grid-cols-5 text-center gap-2 p-3 border border-white/5 bg-slate-900/10 rounded-xl text-[10px] ${t.subText}`}>
            <div>
              <kbd className="px-1 py-0.5 rounded bg-slate-900/50 border border-slate-800">Space</kbd> Play/Pause
            </div>
            <div>
              <kbd className="px-1 py-0.5 rounded bg-slate-900/50 border border-slate-800">R</kbd> Rain FX
            </div>
            <div>
              <kbd className="px-1 py-0.5 rounded bg-slate-900/50 border border-slate-800">Z</kbd> Zen/Cyber
            </div>
            <div>
              <kbd className="px-1 py-0.5 rounded bg-slate-900/50 border border-slate-800">D</kbd> Deep Blue
            </div>
            <div>
              <kbd className="px-1 py-0.5 rounded bg-slate-900/50 border border-slate-800">Esc</kbd> Exit
            </div>
          </div>

        </div>

      </main>

      {/* Footer bar */}
      <footer className="w-full text-center text-[10px] sm:text-xs text-slate-600 z-10 pt-4 md:pt-0">
        <p>© {new Date().getFullYear()} {siteConfig.authorEn}. Built with React, Tailwind & custom vinyl physics.</p>
      </footer>

    </div>
  );
};

export default ImmersivePage;
