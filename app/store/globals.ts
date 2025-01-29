import {create} from 'zustand';

export const useDate = create((set) => ({
    date: Date.now(),
    setDate: (date: Date) => set({date}),
}))