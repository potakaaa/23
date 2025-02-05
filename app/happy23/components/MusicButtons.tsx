"use client";

import { CirclePause, CirclePlay, SkipBack, SkipForward } from "lucide-react";
import { useEffect, useState } from "react";

const MusicButtons = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElem = new Audio("/music/electric.ogg");
    audioElem.volume = 0.1;
    audioElem.preload = "auto";
    setAudio(audioElem);
  }, []);

  const handlePlay = async () => {
    if (!audio) return;

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
      }
    } catch (e) {
      console.error("Audio play failed: ", e);
    }
  };

  const handleReset = async () => {
    if (!audio) return;

    audio.currentTime = 0;
    try {
      await audio.play();
      setIsPlaying(true);
    } catch (e) {
      console.error("Audio reset failed: ", e);
    }
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
