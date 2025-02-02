"use client";

import { useMusic } from "@/app/store/globals";
import { add } from "date-fns";

const MusicPlayer = () => {
  const playCount = useMusic((state: any) => state.playCount);
  const addPlayCount = useMusic((state: any) => state.addPlayCount);

  if (playCount > 0) return null;
  const audio = new Audio("/music/electric.wav");
  audio.volume = 0.1;
  audio.loop = true;
  audio.play().catch((err) => console.log("Autoplay blocked:", err));
  addPlayCount();

  return null; // No UI, just playing music in the background
};

export default MusicPlayer;
