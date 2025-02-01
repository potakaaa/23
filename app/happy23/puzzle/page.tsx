import React from "react";
import ImagePuzzle from "./ImagePuzzle";
import BackButton from "@/app/components/BackButton";
import SelectButton from "./components/SelectButton";

const PuzzlePage = () => {
  return (
    <div
      id="page-container"
      className="w-full h-screen flex flex-col justify-center items-center space-y-10 overflow-hidden"
    >
      <div
        id="title-container"
        className="items-center justify-center flex flex-col absolute top-10"
      >
        <p className="animate-slidein opacity-0 font-extrabold text-primary text-2xl drop-shadow">
          PUZZLE GAME
        </p>
        <p className="animate-slidein opacity-0 font-light text-xs text-end self-end">
          by gugu
        </p>
      </div>
      <div
        id="puzzle-container"
        className=" my-16 h-auto w-10/12 border border-primary border-opacity-5 bg-card rounded-lg justify-center items-center self-center overflow-auto animate-slidein opacity-0 shadow-lg"
      >
        <ImagePuzzle />
      </div>
      <div className="flex flex-col space-y-4 justify-center items-center">
        <SelectButton />
        <BackButton />
      </div>
    </div>
  );
};

export default PuzzlePage;
