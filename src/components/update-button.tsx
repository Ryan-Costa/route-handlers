"use client";

import { IUpdateTask } from "@/types/tasks";
import { Pen } from "lucide-react";

function UpdateButton({ task }: IUpdateTask) {
  return (
    <button className="text-background flex items-center">
      <Pen size={14} />
    </button>
  );
}

export default UpdateButton;
