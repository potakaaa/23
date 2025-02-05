"use client";

import { CirclePause, CirclePlay, SkipBack, SkipForward } from "lucide-react";
import { useState } from "react";

const MusicButtons = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio("/music/electric.ogg"));

  const handlePlay = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.1;
      audio.preload = "auto";
      audio.play();
      setIsPlaying(true);
    }
  };

  const handleReset = () => {
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className="flex justify-center items-center space-x-5">
      <button
        onClick={handleReset}
        className="hover:bg-zinc-300 p-1 rounded-full transition duration-300"
      >
        <SkipBack size={20} className="text-primary drop-shadow-sm" />
      </button>
      <button
        onClick={handlePlay}
        className="hover:bg-zinc-300 p-1 rounded-full transition duration-300"
      >
        {isPlaying ? (
          <CirclePause size={20} className="text-primary drop-shadow-sm" />
        ) : (
          <CirclePlay size={20} className="text-primary drop-shadow-sm" />
        )}
      </button>
      <button
        onClick={handleReset}
        className="hover:bg-zinc-300 p-1 rounded-full transition duration-300"
      >
        <SkipForward size={20} className="text-primary drop-shadow-sm" />
      </button>
    </div>
  );
};

export default MusicButtons;
