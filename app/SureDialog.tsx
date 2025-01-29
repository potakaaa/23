"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import React from "react";

const SureDialog = ({
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
          <DialogTitle className="font-medium">
            Are you really very sure?
          </DialogTitle>
          <DialogDescription className="text-sm">
            There is no going back from this. Finalize your answer now or never.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-1">
          <DialogClose asChild>
            <Button
              onClick={() => setIsOpen(false)}
              className="bg-transparent text-popover-foreground shadow-none"
            >
              Cancel
            </Button>
          </DialogClose>
          <Button onClick={() => setIsOpen(false)}>Yes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SureDialog;
