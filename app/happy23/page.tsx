import React from "react";
import ConfettiDrop from "./components/ConfettiDrop";

const Happy23 = () => {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <ConfettiDrop />
      <div className="flex flex-col space-y-1">
        <p className="font-extrabold tracking-tight text-4xl drop-shadow text-primary animate-slidein opacity-0">
          Happy 23rd
        </p>
        <p className="font-bold tracking-tighter text-center text-2xl animate-slidein drop-shadow-sm text-primary opacity-0">
          Monthsarry!
        </p>
      </div>
    </div>
  );
};

export default Happy23;
