import {create} from 'zustand';
import { imageSrc } from "@/app/provider/global";

interface DateState {
    date: Date;
    setDate: (date: Date | undefined) => void;
  }

export const useDate = create<DateState>((set) => ({
    date: new Date(),
    setDate: (date) => set({date: date ?? new Date()}),
}))

export const useImage = create((set) => ({
  image: imageSrc,
  setImage: (image: any) => set({image}),
}))