"use client";

import { create } from "zustand";
import { Howl } from "howler";

type AudioStore = {
    isPlaying: boolean;
    handlePlayPause: () => void;
    handleReset: () => void;
    audio: Howl | null;
}

export const useAudioStore = create<AudioStore>((set, get) => {
    const musicSrc = "/music/electric.aac";
    
    const audio = new Howl({
          src: musicSrc,
          format: ["aac"],
          volume: 0.1,
          html5: true,
          onpause: () => set({isPlaying: false}),
          onplay: () => set({isPlaying: true}),
        });

    return {
        isPlaying: false,
        audio,
        handlePlayPause: () => {
            const { isPlaying, audio } = get();
            if (isPlaying) {
                audio?.pause()
            } else {
                audio?.play()
            }
        },
        handleReset: () => {
            get().audio?.stop();
            get().audio?.play();
        }
    }
});