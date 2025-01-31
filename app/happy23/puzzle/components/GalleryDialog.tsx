"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";
import Gallery from "./Gallery";

const GalleryDialog = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-80 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="font-bold">Photo Gallery</DialogTitle>
          <div className="flex items-center justify-center flex-col">
            <p className="text-sm">Select a photo to puzzle</p>
            <Gallery />
          </div>
        </DialogHeader>

        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button onClick={() => setIsOpen(false)} variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={() => setIsOpen(false)}>Select</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryDialog;
