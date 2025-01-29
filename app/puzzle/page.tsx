import React from "react";
import ImagePuzzle from "../components/client/ImagePuzzle";

const PuzzlePage = () => {
  return (
    <div className="h-[390px] w-10/12 border border-primary border-opacity-0 rounded-lg overflow-hidden">
      <ImagePuzzle />
    </div>
  );
};

export default PuzzlePage;
