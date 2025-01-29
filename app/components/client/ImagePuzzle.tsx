"use client";

import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import "./puzzle.css";

const IMAGE_URL =
  "https://scontent.fcgm1-1.fna.fbcdn.net/v/t39.30808-6/475384339_3987666824891550_5527229469945314392_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Edf0tw3tUOQQ7kNvgGorff-&_nc_zt=23&_nc_ht=scontent.fcgm1-1.fna&_nc_gid=A65jpWaxXpSY3_ZDxNqxB7q&oh=00_AYAoKRdiOoowu5t-NnJ6vXrmIUj6qxwcoQedYSBivaTi3w&oe=679F708C";

const ImagePuzzle = () => {
  return (
    <JigsawPuzzle
      imageSrc={IMAGE_URL}
      rows={3}
      columns={4}
      onSolved={() => alert("Solved!")}
    />
  );
};

export default ImagePuzzle;
