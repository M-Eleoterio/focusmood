import { create } from "zustand";

interface UIStore {
  isNotepadOpen: boolean;
  isTimerOpen: boolean;
  isKanbanOpen: boolean;
  isMusicOpen: boolean;
  toggleNotepad: () => void;
  toggleTimer: () => void;
  toggleKanban: () => void;
  toggleMusic: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isNotepadOpen: false,
  isTimerOpen: false,
  isKanbanOpen: false,
  isMusicOpen: false,

  toggleNotepad: () =>
    set((state) => ({ isNotepadOpen: !state.isNotepadOpen })),
  toggleTimer: () => set((state) => ({ isTimerOpen: !state.isTimerOpen })),
  toggleKanban: () => set((state) => ({ isKanbanOpen: !state.isKanbanOpen })),
  toggleMusic: () => set((state) => ({ isMusicOpen: !state.isMusicOpen })),
}));
