"use client";

import { CirclePause, CirclePlay, SkipBack, SkipForward } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Howl } from "howler";

const MusicButtons = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef<Howl | null>(null);
  const musicSrc = "/music/electric.aac";

  useEffect(() => {
    soundRef.current = new Howl({
      src: musicSrc,
      format: ["aac"],
      volume: 0.1,
      html5: true,
      onpause: () => setIsPlaying(false),
    });

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, [musicSrc]);

  const handlePlay = () => {
    if (!soundRef.current) return;
    if (isPlaying) {
      soundRef.current.pause();
    } else {
      soundRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleReset = async () => {
    if (!soundRef.current) return;

    soundRef.current.stop();

    soundRef.current.play();
    setIsPlaying(true);
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
