import { create } from "zustand";

interface UIStore {
  isNotepadOpen: boolean;
  isTimerOpen: boolean;
  isKanbanOpen: boolean;
  toggleNotepad: () => void;
  toggleTimer: () => void;
  toggleKanban: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isNotepadOpen: false,
  isTimerOpen: false,
  isKanbanOpen: false,

  toggleNotepad: () =>
    set((state) => ({ isNotepadOpen: !state.isNotepadOpen })),
  toggleTimer: () => set((state) => ({ isTimerOpen: !state.isTimerOpen })),
  toggleKanban: () => set((state) => ({ isKanbanOpen: !state.isKanbanOpen })),
}));
