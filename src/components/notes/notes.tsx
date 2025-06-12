"use client";

import { useNotesStore } from "@/stores/notesStore";
import { useUIStore } from "@/stores/uiStore";
import { Textarea } from "../ui/textarea";
import { DraggableWindow } from "../draggable-window/draggable-window";

export const NotesCard = () => {
  const { notes, setNotes } = useNotesStore();
  const { isNotepadOpen, toggleNotepad } = useUIStore();

  return (
    <DraggableWindow
      description="Save your notes for later"
      isOpen={isNotepadOpen}
      title="Notes"
      toggleIsOpen={toggleNotepad}
    >
      <Textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Type your notes here..."
        className="h-[300px]"
      />
    </DraggableWindow>
  );
};
