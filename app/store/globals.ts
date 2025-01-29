import {create} from 'zustand';

interface DateState {
    date: Date;
    setDate: (date: Date | undefined) => void;
  }

export const useDate = create<DateState>((set) => ({
    date: new Date(),
    setDate: (date) => set({date: date ?? new Date()}),
}))