import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { createTask } from "@/actions/task-actions";

function FormTask() {
  return (
    <form action={createTask} className="flex gap-2 my-4">
      <Input
        className="rounded-[4px]"
        type="text"
        name="title"
        placeholder="Add a new task..."
      />
      <Button className="rounded-[4px]" type="submit">
        Add Task
      </Button>
    </form>
  );
}

export default FormTask;
