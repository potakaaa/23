"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const PlayPuzzle = () => {
  const router = useRouter();
  return (
    <Button
      variant={"outline"}
      className="border-primary border shadow-md hover:bg-slate-50 transition animate-slidein opacity-0"
      onClick={() => router.push("/happy23/puzzle")}
    >
      Play Puzzle
    </Button>
  );
};

export default PlayPuzzle;
