import React, { createContext, useContext, useState, useEffect, useRef } from "react";

export interface Track {
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
    cover: "/images/doro.jpeg"
  }
];

interface AudioContextType {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  currentTrack: Track;
  togglePlay: () => void;
  seek: (time: number) => void;
  changeVolume: (vol: number) => void;
  toggleMute: () => void;
  hasPlayed: boolean; // Tracks if user has started playback at least once
  stopAudio: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const currentTrack = tracks[0]; // Currently just one track

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
  }, []);

  // Sync play/pause state
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(err => {
        console.log("Global Audio play failed: ", err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Volume & Mute control
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 0 : volume;
  }, [volume, isMuted]);

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
    setHasPlayed(true);
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const changeVolume = (vol: number) => {
    setVolume(vol);
    if (vol > 0) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const stopAudio = () => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setHasPlayed(false);
  };

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        currentTime,
        duration,
        volume,
        isMuted,
        currentTrack,
        togglePlay,
        seek,
        changeVolume,
        toggleMute,
        hasPlayed,
        stopAudio
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};
