"use client";

import { useMusic } from "@/app/store/globals";
import { useEffect, useRef } from "react";

const MusicPlayer = () => {
  const playCount = useMusic((state: any) => state.playCount);
  const addPlayCount = useMusic((state: any) => state.addPlayCount);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure this runs only on the client

    if (!audioRef.current) {
      const audio = new Audio("/music/electric.ogg");
      audio.volume = 0.1;
      audio.loop = true;
      audio.preload = "auto"; // Preload the audio to prevent delays
      audioRef.current = audio;
    }

    if (playCount === 0 && audioRef.current) {
      audioRef.current
        .play()
        .then(() => addPlayCount())
        .catch((err) => console.log("Autoplay blocked:", err));
    }
  }, [playCount]);

  return null;
};

export default MusicPlayer;
