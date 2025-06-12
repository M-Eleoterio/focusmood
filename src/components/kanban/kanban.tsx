"use client";

import { useUIStore } from "@/stores/uiStore";
import { DraggableWindow } from "../draggable-window/draggable-window";
import { KanbanLists } from "./lists";

export const Kanban = () => {
  const { isKanbanOpen, toggleKanban } = useUIStore();

  return (
    <DraggableWindow
      title="Kanban"
      description="Manage your tasks with Kanban method"
      isOpen={isKanbanOpen}
      toggleIsOpen={toggleKanban}
    >
      <KanbanLists />
    </DraggableWindow>
  );
};
