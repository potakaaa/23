"use client";

import { Button } from "@/components/ui/button";
import { ValDialog } from "./ValDialog";
import { useState } from "react";

const ValButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        variant={"outline"}
        className="border-primary border shadow-md hover:bg-slate-50 transition animate-slidein [--slidein-delay:450ms] opacity-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        ???
      </Button>
      <ValDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default ValButton;
