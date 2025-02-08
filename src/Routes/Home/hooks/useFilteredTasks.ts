import { useMemo } from "react";
import { TaskListItem } from "../types/task";

const useFilteredTasks = (tasks: TaskListItem[], showCompleted: boolean) => {
  console.log(tasks);
  return useMemo(() => {
    return tasks.filter((task) => {
      return showCompleted ? task.status === "COMPLETED" : task.status === "PENDING";
    });
  }, [tasks, showCompleted]);
};

export default useFilteredTasks;
