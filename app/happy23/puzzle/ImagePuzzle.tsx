"use client";

import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import "./puzzle.css";
import { useImage, useSolved } from "@/app/store/globals";
import { useState } from "react";
import ConfettiDrop from "../components/ConfettiDrop";

const ImagePuzzle = () => {
  const imageSrc = useImage((state: any) => state.image);
  const setIsSolved = useSolved((state: any) => state.setIsSolved);
  const isSolved = useSolved((state: any) => state.isSolved);

  const handleOnSolved = () => {
    setIsSolved(true);
    alert("Congratulations love!");
  };

  return (
    <>
      {isSolved && <ConfettiDrop />}
      <JigsawPuzzle
        imageSrc={imageSrc}
        rows={1}
        columns={2}
        onSolved={() => handleOnSolved()}
      />
    </>
  );
};

export default ImagePuzzle;
