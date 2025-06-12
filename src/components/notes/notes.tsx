"use client";

import { X } from "lucide-react";
import { useNotesStore } from "@/stores/notesStore";
import { useUIStore } from "@/stores/uiStore";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Textarea } from "../ui/textarea";
import { motion, useDragControls } from "framer-motion";
import { useRef } from "react";

export const NotesCard = () => {
  const { notes, setNotes } = useNotesStore();
  const { isNotepadOpen, toggleNotepad } = useUIStore();
  const dragControls = useDragControls();

  const dragContainerRef = useRef<HTMLDivElement>(null);

  if (!isNotepadOpen) {
    return null;
  }

  return (
    <div
      ref={dragContainerRef}
      className="inset-0 border flex items-center justify-center absolute w-11/12 h-screen"
    >
      <motion.div
        drag
        dragControls={dragControls}
        dragListener={false}
        dragConstraints={dragContainerRef}
        dragMomentum={false}
      >
        <Card className="w-[400px] min-h-[400px]">
          <CardHeader
            onPointerDown={(e) => dragControls.start(e)}
            className="cursor-grab active:cursor-grabbing"
          >
            <div className="flex w-full justify-between">
              <CardTitle>Notes</CardTitle>
              <X className="cursor-pointer" onClick={toggleNotepad} />
            </div>
            <CardDescription>Take and save your notes</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Type your notes here..."
              className="h-[300px]"
            />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
