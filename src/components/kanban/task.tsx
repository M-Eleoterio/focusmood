import { Trash } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { KanbanTask, useKanbanStore } from "@/stores/kanbanStore";

interface TaskProps {
  task: KanbanTask;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  const { deleteTask } = useKanbanStore();

  return (
    <Card key={task.id}>
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
