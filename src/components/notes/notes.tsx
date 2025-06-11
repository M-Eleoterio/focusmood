"use client";
import { X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Textarea } from "../ui/textarea";
import { useUIStore } from "@/stores/uiStore";
import { useNotesStore } from "@/stores/notesStore";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

export const NotesCard = () => {
  const { notes, setNotes } = useNotesStore();
  const [currentNotes, setCurrentNotes] = useState<string>(notes);

  const { isNotepadOpen, toggleNotepad } = useUIStore();
  const debouncedNotes = useDebounce(currentNotes, 1000);

  useEffect(() => {
    if (debouncedNotes !== notes) {
      setNotes(debouncedNotes);
    }
  }, [debouncedNotes, setNotes]);

  useEffect(() => {
    setCurrentNotes(notes);
  }, [notes]);

  if (!isNotepadOpen) return null;

  return (
    <Card className="w-[400px] h-[600px]">
      <CardHeader>
        <div className="flex w-full justify-between">
          <CardTitle>Notes</CardTitle>
          <X className="cursor-pointer" onClick={toggleNotepad} />
        </div>
        <CardDescription>Take and save your notes</CardDescription>
      </CardHeader>
      <CardContent>
        <Textarea
          value={currentNotes}
          onChange={(e) => setCurrentNotes(e.target.value)}
          placeholder="Type your notes here..."
          className="h-[300px] resize-none"
        />
      </CardContent>
    </Card>
  );
};
