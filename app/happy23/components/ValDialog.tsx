"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const ValDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const [no, setNo] = useState(20);
  const handleOnNo = () => {};

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-80 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="font-medium">Juje...</DialogTitle>
          <DialogDescription className="text-sm">
            Will you be my Valentines Date?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-1">
          <div className="flex gap-2 justify-center items-center">
            <Button className="hover:bg-black transition duration-300 w-full flex-1">
              YES
            </Button>
            <Button className="hover:bg-black transition duration-300 flex-2 w-20">
              no
            </Button>
          </div>
          <DialogClose asChild>
            <Button
              onClick={() => setIsOpen(false)}
              className="bg-transparent text-popover-foreground shadow-none hover:text-popover transition duration-300 hover:bg-destructive"
            >
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
