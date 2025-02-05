"use client";

import { CirclePause, CirclePlay, SkipBack, SkipForward } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import { useAudioStore } from "@/app/store/audioStore";

const MusicButtons = () => {
  const { isPlaying, handlePlayPause, handleReset } = useAudioStore();

  return (
    <div className="flex justify-center items-center space-x-5">
      <button
        onClick={handleReset}
        className="hover:bg-zinc-300 p-1 rounded-full transition duration-300"
      >
        <SkipBack size={20} className="text-primary drop-shadow-sm" />
      </button>
      <button
        onClick={handlePlayPause}
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
