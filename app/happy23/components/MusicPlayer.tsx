"use client";

import { useMusic } from "@/app/store/globals";
import { useEffect, useState } from "react";

const MusicPlayer = () => {
  const playCount = useMusic((state: any) => state.playCount);
  const addPlayCount = useMusic((state: any) => state.addPlayCount);

  const audio = new Audio("music/electric.wav");

  useEffect(() => {
    if (playCount === 0 && audio) {
      audio.volume = 0.1;
      audio.loop = true;
      audio.play().catch((err) => console.log("Autoplay blocked:", err));
      addPlayCount();
    }
    console.log("Play count: ", playCount);
  }, []);

  return null; // No UI, just playing music in the background
};

export default MusicPlayer;
