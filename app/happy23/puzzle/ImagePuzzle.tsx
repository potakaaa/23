"use client";

import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import "./puzzle.css";
import { useImage } from "@/app/store/globals";

const ImagePuzzle = () => {
  const imageSrc = useImage((state: any) => state.image);
  return (
    <JigsawPuzzle
      imageSrc={imageSrc}
      rows={4}
      columns={4}
      onSolved={() => alert("Congratulations love!")}
    />
  );
};

export default ImagePuzzle;
