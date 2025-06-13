import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IMusicState {
  musicQueue: string[];
  currentMusic: number;
  addToQueue: (url: string) => void;
  removeFromQueue: (index: number) => void;
  jumpTo: (index: number) => void;
  next: () => void;
}

export const useMusicStore = create(
  persist<IMusicState>(
    (set) => ({
      musicQueue: [],
      currentMusic: 0,

      addToQueue: (url: string) =>
        set((state) => ({
          musicQueue: [...state.musicQueue, url],
        })),
      removeFromQueue: (index: number) =>
        set((state) => ({
          musicQueue: state.musicQueue.filter((_, i) => i !== index),
        })),
      jumpTo: (index: number) =>
        set((state) => {
          return {
            currentMusic: index >= 0 ? index : state.currentMusic,
          };
        }),
      next: () =>
        set((state) => {
          if (state.musicQueue.length === 0) return {};
          const nextIndex = (state.currentMusic + 1) % state.musicQueue?.length;
          return { currentMusic: nextIndex };
        }),
    }),
    { name: "fm_music_store" }
  )
);
