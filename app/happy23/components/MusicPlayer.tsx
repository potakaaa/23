"use client";

import { useMusic } from "@/app/store/globals";
import { useEffect, useState } from "react";

const MusicPlayer = () => {
  const playCount = useMusic((state: any) => state.playCount);
  const addPlayCount = useMusic((state: any) => state.addPlayCount);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newAudio = new Audio("/music/electric.wav");
      setAudio(newAudio);

      if (playCount === 0) {
        newAudio.volume = 0.1;
        newAudio.loop = true;
        newAudio.play().catch((err) => console.log("Autoplay blocked:", err));
        addPlayCount();
      }
    }
  }, []);

  return null;
};

export default MusicPlayer;
