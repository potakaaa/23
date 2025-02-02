"use client";

import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import "./puzzle.css";
import { useImage, useSolved } from "@/app/store/globals";
import ConfettiDrop from "../components/ConfettiDrop";

const ImagePuzzle = () => {
  const imageSrc = useImage((state: any) => state.image);
  const setIsSolved = useSolved((state: any) => state.setIsSolved);
  const isSolved = useSolved((state: any) => state.isSolved);

  const handleOnSolved = () => {
    setTimeout(() => {
      setIsSolved(true);
      alert("Congratulations love!");
    }, 0);
  };

  return (
    <>
      {isSolved && <ConfettiDrop />}
      <JigsawPuzzle
        imageSrc={imageSrc}
        rows={4}
        columns={4}
        onSolved={() => handleOnSolved()}
      />
    </>
  );
};

export default ImagePuzzle;
