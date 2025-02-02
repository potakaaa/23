import {create} from 'zustand';
import { galleryImg, imageSrc } from "@/app/provider/global";
import { act } from 'react';

interface DateState {
    date: Date;
    setDate: (date: Date | undefined) => void;
  }

export const useDate = create<DateState>((set) => ({
    date: new Date(),
    setDate: (date) => set({date: date ?? new Date()}),
}))

export const useImage = create((set) => ({
  image: galleryImg[0],
  setImage: (image: string) => set({image}),
}))

export const useActiveIndex = create((set) => ({
  activeIndex: 0,
  setActiveIndex: (activeIndex: number) => set({activeIndex}),
}))

export const useSolved = create((set) => ({
  isSolved: false,
  setIsSolved: (isSolved: boolean) => set({isSolved}),
}))