import { useAudio } from "@/context/AudioContext";
import { Link, useLocation } from "react-router-dom";
import { Play, Pause, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const MiniPlayer = () => {
  const { isPlaying, togglePlay, currentTrack, hasPlayed, stopAudio } = useAudio();
  const location = useLocation();

  // Hide MiniPlayer if music hasn't started, or if the user is on the /immersive page
  if (!hasPlayed || location.pathname === "/immersive") {
    return null;
  }

  return (
    <div 
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 p-2 pr-4 rounded-full bg-slate-950/80 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/40 animate-fade-in group hover:bg-slate-900/90 hover:border-white/20 transition-all duration-300"
    >
      {/* Clickable section to return to /immersive */}
      <Link to="/immersive" className="flex items-center gap-2.5">
        <div className="relative shrink-0">
          <img 
            src={currentTrack.cover} 
            alt="Vinyl persistence" 
            className={`w-9 h-9 rounded-full border border-white/10 object-cover transition-transform duration-1000 ${
              isPlaying ? "animate-spin" : ""
            }`}
            style={{ animationDuration: "4s" }}
          />
          {/* Platter spindle hole visual element */}
          <div className="absolute inset-0 m-auto w-1.5 h-1.5 rounded-full bg-slate-950 border border-zinc-700 shadow-inner" />
        </div>
        
        <div className="flex flex-col text-left max-w-[100px] sm:max-w-[150px]">
          <span className="text-[10px] font-bold text-white truncate leading-tight">
            {currentTrack.title}
          </span>
          <span className="text-[8px] text-slate-400 truncate leading-none mt-0.5">
            량현량하
          </span>
        </div>
      </Link>

      <div className="flex items-center gap-1 border-l border-white/10 pl-2">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={togglePlay}
          className="w-7 h-7 rounded-full text-white hover:bg-white/10 hover:text-white shrink-0"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause size={11} className="fill-white" />
          ) : (
            <Play size={11} className="fill-white translate-x-[0.5px]" />
          )}
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={stopAudio}
          className="w-7 h-7 rounded-full text-slate-400 hover:bg-white/10 hover:text-white shrink-0"
          aria-label="Stop and hide player"
        >
          <X size={11} />
        </Button>
      </div>
    </div>
  );
};

export default MiniPlayer;
