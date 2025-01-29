import React from "react";
import ImagePuzzle from "./ImagePuzzle";

const PuzzlePage = () => {
  return (
    <div
      id="page-container"
      className="w-full h-screen flex flex-col justify-center items-center space-y-5"
    >
      <div
        id="puzzle-container"
        className="h-[390px] w-10/12 border border-primary border-opacity-0 rounded-lg overflow-hidden"
      >
        <ImagePuzzle />
      </div>
      <div className="flex w-10/12">
        <p className="font-semibold tracking-tight text-sm">No cheating!!!</p>
      </div>
    </div>
  );
};

export default PuzzlePage;
