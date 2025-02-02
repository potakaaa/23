"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import GalleryDialog from "./GalleryDialog";

const SelectButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button
        variant={"outline"}
        className="animate-slidein [--slidein-delay:300ms] opacity-0 hover:shadow-md shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        Open gallery
      </Button>
      <GalleryDialog isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default SelectButton;
