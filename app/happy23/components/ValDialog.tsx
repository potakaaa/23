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
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const ValDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const router = useRouter();
  const [no, setNo] = useState(20);
  const [index, setIndex] = useState(0);
  const w = [20, 16, 14, 12, 11, 10, 8, 4, 2, 1];

  const handleOnNo = () => {
    setNo(w[index]);
    if (index === w.length - 1) {
      router.push("/idku");
    } else {
      setIndex(index + 1);
    }
  };

  const handleOnYes = () => {
    alert("Yey! February 14 @ TBA :)");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-80 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="font-medium">Juje...</DialogTitle>
          <DialogDescription className="text-sm" asChild>
            <div className="flex flex-col items-center gap-2">
              <p>Will you be my Valentines Date?</p>
              <Image
                src={"/emoji/emoji.png"}
                alt="emoji"
                width={100}
                height={100}
                className="drop-shadow"
              />
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-1">
          <div className="flex gap-2 justify-center items-center">
            <Button
              className="hover:bg-black transition duration-300 w-full flex-1 "
              onClick={handleOnYes}
            >
              YES
            </Button>
            <Button
              className={`hover:bg-black duration-300 flex-2 w-${no} transition-all`}
              onClick={handleOnNo}
            >
              no
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
