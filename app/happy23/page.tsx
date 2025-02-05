import ConfettiDrop from "./components/ConfettiDrop";
import PressMe from "./components/PressMe";
import PlayPuzzle from "./components/PlayPuzzle";
import ValButton from "./components/ValButton";
import { CirclePlay, Play, SkipBack, SkipForward } from "lucide-react";
import MusicButtons from "./components/MusicButtons";

const Happy23 = () => {
  return (
    <div className="flex flex-col h-screen w-full justify-center items-center space-y-10">
      <ConfettiDrop />
      <div className="flex flex-col space-y-1">
        <p className="font-extrabold tracking-tight text-4xl drop-shadow text-primary animate-slidein [--slidein-delay:300ms] opacity-0">
          Happy 23rd
        </p>
        <p className="font-bold tracking-tighter text-center text-2xl animate-slidein [--slidein-delay:300ms] drop-shadow-sm text-primary opacity-0">
          Monthsarry!
        </p>
      </div>
      <div className="flex flex-col space-y-3">
        <PressMe />
        <PlayPuzzle />
        <ValButton />
      </div>
      <section
        id="player-container"
        className="bg-card w-9/12 h-10 rounded-full flex flex-row justify-between items-center animate-slidein [--slidein-delay:300ms] opacity-0 shadow-lg px-8 p-2"
      >
        <div className="flex text-left flex-col space-y-0">
          <p className="text-xs font-bold tracking-tight drop-shadow-sm">
            Electric Love
          </p>
          <p className="text-[10px] font-thin tracking-tighter">Børns ‧ 2015</p>
        </div>
        <MusicButtons />
      </section>
    </div>
  );
};

export default Happy23;
