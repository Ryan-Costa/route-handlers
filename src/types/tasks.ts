export interface ITask {
  id: string;
  title: string;
  done: boolean;
}

export interface IUpdateTask {
  task: ITask;
}
