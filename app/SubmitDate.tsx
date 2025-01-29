"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useDate } from "./store/globals";
import SureDialog from "./SureDialog";
import { useState } from "react";

const SubmitDate = () => {
  const date = useDate((state: any) => state.date);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmitDate = () => {
    if (date.getMonth() === 1 && date.getDate() === 8) {
      console.log("Do this!");
      setIsOpen(true);
    } else {
      console.log("Dont do this.");
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Submit</Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col space-y-1">
        <p className="text-base font-medium">Are you absolutely sure?</p>
        <p className="text-xs">
          This action cannot be undone. Ensure your answer or forever hold your
          peace.
        </p>
        <div className="flex justify-end space-x-2 pt-3">
          <Button className="bg-destructive">No</Button>
          <Button
            className="bg-card-foreground"
            onClick={() => handleSubmitDate()}
          >
            Yes
          </Button>
        </div>
        <SureDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      </PopoverContent>
    </Popover>
  );
};

export default SubmitDate;
