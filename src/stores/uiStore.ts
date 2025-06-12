import { create } from "zustand";

interface UIStore {
  isNotepadOpen: boolean;
  toggleNotepad: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isNotepadOpen: false,
  toggleNotepad: () =>
    set((state) => ({ isNotepadOpen: !state.isNotepadOpen })),
}));
