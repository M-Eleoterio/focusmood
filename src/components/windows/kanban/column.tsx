import { useDroppable } from "@dnd-kit/core";
import { KanbanTask as KanbanTaskType } from "@/stores/kanbanStore";
import { Task } from "./task";

interface KanbanColumnProps {
  id: string;
  title: string;
  tasks: KanbanTaskType[];
}

export const KanbanColumn = ({ id, title, tasks }: KanbanColumnProps) => {
  const { setNodeRef, isOver } = useDroppable({
    id,
    data: { stage: title.toLowerCase().replace(" ", "_") },
  });

  const columnStyle = {
    backgroundColor: isOver ? "rgba(255, 255, 255, 0.1)" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={columnStyle}
      className="flex flex-col rounded border border-white/30 shadow-md min-w-[250px] p-3 min-h-[400px] gap-2 transition-colors duration-200"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      {tasks.map((task) => (
        <Task task={task} key={task.id} />
      ))}
    </div>
  );
};
