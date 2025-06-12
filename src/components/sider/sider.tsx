"use client";
import { Kanban, Music, NotebookPen, Timer } from "lucide-react";
import { SiderItem } from "./sider-item";
import { useUIStore } from "@/stores/uiStore";

export const Sider = () => {
  const { toggleNotepad, toggleTimer } = useUIStore();

  return (
    <div className="z-30 flex flex-col gap-5 items-center justify-center p-5 h-[80vh]">
      <SiderItem icon={<NotebookPen />} onClick={toggleNotepad} />
      <SiderItem icon={<Timer />} onClick={toggleTimer} />
      <SiderItem icon={<Kanban />} />
      <SiderItem icon={<Music />} />
    </div>
  );
};
