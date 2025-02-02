"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDate } from "../store/globals";
import SureDialog from "./SureDialog";
import { useState } from "react";
import { useRouter } from "next/navigation";

const SubmitDate = () => {
  const date = useDate((state: any) => state.date);
  const [isOpen, setIsOpen] = useState(false);
  const [isSureOpen, setIsSureOpen] = useState(false);
  const router = useRouter();

  const handleSubmitDate = () => {
    if (
      date.getMonth() === 1 &&
      date.getDate() === 8 &&
      date.getYear() === 2025
    ) {
      console.log("Do this!");
      setIsSureOpen(true);
    } else {
      console.log("Dont do this.");
      router.push("/idku");
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="transition hover:bg-black hover:shadow-md duration-300"
        >
          Submit
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col space-y-1">
        <p className="text-base font-medium">Are you absolutely sure?</p>
        <p className="text-xs">
          This action cannot be undone. Ensure your answer or forever hold your
          peace.
        </p>
        <div className="flex justify-end space-x-2 pt-3 group transition-all duration-300">
          <Button
            className="bg-destructive group-hover:duration-300 group-hover:shadow-md"
            onClick={() => setIsOpen(false)}
          >
            No
          </Button>
          <Button
            className="bg-card-foreground group-hover:duration-300 group-hover:shadow-md"
            onClick={() => handleSubmitDate()}
          >
            Yes
          </Button>
        </div>
        <SureDialog isOpen={isSureOpen} setIsOpen={setIsSureOpen} />
      </PopoverContent>
    </Popover>
  );
};

export default SubmitDate;
