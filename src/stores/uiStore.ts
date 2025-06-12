import { create } from "zustand";

interface UIStore {
  isNotepadOpen: boolean;
  isTimerOpen: boolean;
  toggleNotepad: () => void;
  toggleTimer: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isNotepadOpen: false,
  isTimerOpen: false,
  toggleNotepad: () =>
    set((state) => ({ isNotepadOpen: !state.isNotepadOpen })),
  toggleTimer: () => set((state) => ({ isTimerOpen: !state.isTimerOpen })),
}));
