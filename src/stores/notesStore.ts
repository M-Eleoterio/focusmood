import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NotesStore {
  notes: string;
  setNotes: (notes: string) => void;
}

export const useNotesStore = create(
  persist<NotesStore>(
    (set) => ({
      notes: "",
      setNotes: (notes: string) => set({ notes }),
    }),
    { name: "fm-notes-store" }
  )
);
