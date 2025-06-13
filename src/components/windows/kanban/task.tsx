import { Trash } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../../ui/card";
import { KanbanTask, useKanbanStore } from "@/stores/kanbanStore";
import { useDraggable } from "@dnd-kit/core";

interface TaskProps {
  task: KanbanTask;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  const { deleteTask } = useKanbanStore();
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
      data: { task },
    });

  const style = {
    transform: transform ? transform.toString() : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Card ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <CardHeader className="flex items-center w-full justify-between">
        <CardTitle>{task.title}</CardTitle>
        <Trash
          className="cursor-pointer text-red-500"
          size={20}
          onClick={() => deleteTask(task.id)}
        />
      </CardHeader>
      <CardContent>
        <p>{task.description}</p>
      </CardContent>
    </Card>
  );
};
