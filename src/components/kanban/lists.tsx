import { useKanbanStore } from "@/stores/kanbanStore";
import { CreateTask } from "./create-task";
import { Task } from "./task";

export const KanbanLists = () => {
  const { tasks } = useKanbanStore();

  const kanbanLists = ["To Do", "In Progress", "Done"];

  return (
    <>
      <CreateTask />
      <div className="flex mt-5 gap-10">
        {kanbanLists.map((list) => (
          <div
            key={list}
            className="flex flex-col rounded border border-white/30 shadow-md min-w-[200px] p-3 min-h-[300px] gap-2"
          >
            <h3 className="text-lg font-semibold">{list}</h3>

            {tasks
              .filter(
                (task) => task.stage === list.toLowerCase().replace(" ", "_")
              )
              .map((task) => (
                <Task task={task} key={task.id} />
              ))}
          </div>
        ))}
      </div>
    </>
  );
};
