import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 } from "uuid";

type KanbanStages = "to_do" | "in_progress" | "done";

export interface KanbanTask {
  id: string;
  title: string;
  description?: string;
  stage: KanbanStages;
}

interface KanbanState {
  tasks: KanbanTask[];
  addTask: (title: string, description?: string) => void;
  updateTaskStage: (taskId: string, newStage: KanbanStages) => void;
  deleteTask: (taskId: string) => void;
}

export const useKanbanStore = create(
  persist<KanbanState>(
    (set) => ({
      tasks: [],
      addTask: (title: string, description?: string) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: v4(),
              title,
              description,
              stage: "to_do",
            },
          ],
        })),
      updateTaskStage: (taskId: string, newStage: KanbanStages) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, stage: newStage } : task
          ),
        })),
      deleteTask: (taskId: string) =>
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        })),
    }),
    {
      name: "fm_kanban_store",
    }
  )
);
