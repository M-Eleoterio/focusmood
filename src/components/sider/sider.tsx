"use client";
import { Kanban, Music, NotebookPen, Timer } from "lucide-react";
import { SiderItem } from "./sider-item";
import { useUIStore } from "@/stores/uiStore";

export const Sider = () => {
  const {
    isKanbanOpen,
    isNotepadOpen,
    isTimerOpen,
    toggleNotepad,
    toggleTimer,
    toggleKanban,
  } = useUIStore();

  return (
    <div className="z-30 flex flex-col gap-5 items-center justify-center p-5 h-[80vh]">
      <SiderItem
        isOpen={isNotepadOpen}
        icon={<NotebookPen />}
        onClick={toggleNotepad}
      />
      <SiderItem isOpen={isTimerOpen} icon={<Timer />} onClick={toggleTimer} />
      <SiderItem
        isOpen={isKanbanOpen}
        icon={<Kanban />}
        onClick={toggleKanban}
      />
      <SiderItem isOpen={false} icon={<Music />} />
    </div>
  );
};
