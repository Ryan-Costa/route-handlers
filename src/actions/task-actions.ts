"use server";

import { ITask } from "@/types/tasks";
import { revalidateTag } from "next/cache";

export async function createTask(form: FormData) {
  const title = form.get("title");

  if (!title) {
    return;
  }

  fetch("http://localhost:3001/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, done: false }),
  });

  revalidateTag("get-tasks");
}

export async function updateTask(task: ITask) {
  try {
    const response = await fetch(`http://localhost:3001/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    revalidateTag("get-tasks");

    if (!response.ok) {
      throw new Error("Failed to update task");
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to update task:", error);
  }
}

export async function toggleCheckTask() {
  console.log("toggle");
  // try {
  //   const updatedTask = { id: task.id, title: task.title, done: !task.done };
  //   const response = await fetch(`http://localhost:3001/tasks/${task.id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updatedTask),
  //   });

  //   revalidateTag("get-tasks");

  //   if (!response.ok) {
  //     throw new Error("Failed to toggle check task");
  //   }

  //   return await response.json();
  // } catch (error) {
  //   console.error("Failed to toggle check task:", error);
  // }
}

export async function deleteTask(taskId: string) {
  try {
    const response = await fetch(`http://localhost:3001/tasks/${taskId}`, {
      method: "DELETE",
    });

    revalidateTag("get-tasks");

    if (!response.ok) {
      throw new Error("Failed to delete task");
    }

    return await response.json();
  } catch (error) {
    console.error("Failed to delete task:", error);
  }
}
