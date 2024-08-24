import FormTask from "@/components/form-task";
import Tasks from "@/components/tasks";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-20 max-w-80 h-screen">
      <h1 className="text-2xl font-semibold">Todo-list</h1>
      <FormTask />
      <Suspense fallback={<p>carregado...</p>}>
        <Tasks />
      </Suspense>
    </main>
  );
}
