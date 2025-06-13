import { KanbanTask, useKanbanStore } from "@/stores/kanbanStore";
import { CreateTask } from "./create-task";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { KanbanColumn } from "./column";
import { useState } from "react";
import { Task } from "./task";

export const KanbanLists = () => {
  const { tasks } = useKanbanStore();
  const updateTaskStage = useKanbanStore((state) => state.updateTaskStage);
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const [activeTask, setActiveTask] = useState<KanbanTask | null>(null);

  function handleDragStart(event: DragStartEvent) {
    if (event.active.data.current?.task) {
      setActiveTask(event.active.data.current.task);
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over) {
      setActiveTask(null);
      return;
    }

    if (active.id === over.id) {
      setActiveTask(null);
      return;
    }

    const taskToMove = active.data.current?.task as KanbanTask;
    const destinationColumnStage = over.data.current?.stage;

    if (taskToMove && taskToMove.stage !== destinationColumnStage) {
      updateTaskStage(taskToMove.id, destinationColumnStage);
    }

    setActiveTask(null);
  }

  const kanbanLists = ["To Do", "In Progress", "Done"];

  return (
    <>
      <CreateTask />
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex mt-5 gap-10">
          {kanbanLists.map((list) => (
            <KanbanColumn
              id={list}
              title={list}
              tasks={tasks.filter(
                (task) => task.stage === list.toLowerCase().replace(" ", "_")
              )}
              key={list}
            />
          ))}
        </div>

        <DragOverlay>
          {activeTask ? <Task task={activeTask} /> : null}
        </DragOverlay>
      </DndContext>
    </>
  );
};
