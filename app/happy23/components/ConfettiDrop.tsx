"use client";

import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

const ConfettiDrop = () => {
  const { width, height } = useWindowSize();
  const [confetti, setConfetti] = useState(false); // Start disabled

  useEffect(() => {
    const timer = setTimeout(() => setConfetti(true), 500); // Enable confetti after 5s
    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <div>
      {confetti && (
        <Confetti width={width} height={height} className="animate-dissolve" />
      )}
    </div>
  );
};

export default ConfettiDrop;
