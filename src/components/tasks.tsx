import { ITask } from "@/types/tasks";
import { Pen } from "lucide-react";
import ToggleButton from "./toggle-check-task-button";
import DeleteButton from "./delete-button";
import UpdateButton from "./update-button";

async function Tasks() {
  const res = await fetch("http://localhost:3001/tasks", {
    next: {
      tags: ["get-taks"],
    },
    cache: "no-store",
  });

  const data = (await res.json()) as ITask[];

  return (
    <ul className="w-full flex flex-col gap-2">
      {data.map((task) => (
        <div
          key={task.id}
          className="bg-white shadow-lg p-2 rounded-[4px] flex"
        >
          <li
            className={`${
              task.done ? "text-background/50 line-through" : "text-background"
            }  flex-1`}
          >
            {task.title}
          </li>
          <div className="flex gap-2">
            <ToggleButton task={task} />
            <UpdateButton task={task} />
            <DeleteButton taskId={task.id} />
          </div>
        </div>
      ))}
    </ul>
  );
}

export default Tasks;
