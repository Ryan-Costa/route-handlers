"use client";

import { toggleCheckTask } from "@/actions/task-actions";
import { ITask, IUpdateTask } from "@/types/tasks";
import { Check, X } from "lucide-react";

function ToggleButton({ task }: IUpdateTask) {
  return (
    <form action={toggleCheckTask}>
      <button
        type="submit"
        // onClick={() => toggleCheckTask()}
        className="text-background flex items-center"
      >
        {task.done ? <X size={18} /> : <Check size={18} />}
      </button>
    </form>
  );
}

export default ToggleButton;
