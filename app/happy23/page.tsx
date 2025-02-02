import React from "react";
import ConfettiDrop from "./components/ConfettiDrop";
import PressMe from "./components/PressMe";
import PlayPuzzle from "./components/PlayPuzzle";
import MusicPlayer from "./components/MusicPlay";

const Happy23 = () => {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center space-y-10">
      <ConfettiDrop />
      <MusicPlayer />
      <div className="flex flex-col space-y-1">
        <p className="font-extrabold tracking-tight text-4xl drop-shadow text-primary animate-slidein opacity-0">
          Happy 23rd
        </p>
        <p className="font-bold tracking-tighter text-center text-2xl animate-slidein drop-shadow-sm text-primary opacity-0">
          Monthsarry!
        </p>
      </div>
      <div className="flex flex-col space-y-3">
        <PressMe />
        <PlayPuzzle />
      </div>
    </div>
  );
};

export default Happy23;
