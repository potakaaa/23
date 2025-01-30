"use client";

import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import "./puzzle.css";
import { imageSrc } from "@/app/provider/global";

const ImagePuzzle = () => {
  return (
    <JigsawPuzzle
      imageSrc={imageSrc}
      rows={4}
      columns={4}
      onSolved={() => alert("Solved!")}
    />
  );
};

export default ImagePuzzle;
