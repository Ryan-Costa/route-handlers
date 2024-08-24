"use client";

import { deleteTask } from "@/actions/task-actions";
import { Trash } from "lucide-react";

function DeleteButton({ taskId }: { taskId: string }) {
  return (
    <button
      onClick={() => deleteTask(taskId)}
      className="text-background flex items-center"
    >
      <Trash size={14} />
    </button>
  );
}

export default DeleteButton;
