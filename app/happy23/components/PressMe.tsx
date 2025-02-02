"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const PressMe = () => {
  return (
    <Button
      variant={"outline"}
      className="border-primary border shadow-md hover:bg-slate-50 transition animate-slidein [--slidein-delay:300ms] opacity-0"
      onClick={() => alert("I love you jujeee <3")}
    >
      Press me!
    </Button>
  );
};

export default PressMe;
