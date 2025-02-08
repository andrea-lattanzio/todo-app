import { useState } from "react";
import { TaskListItem } from "../types/task";

const useTaskDetail = () => {
  const [detailedTask, setDetailedTask] = useState<TaskListItem | null>(null);
  const toggleDetails = (task: TaskListItem) => setDetailedTask(task);

  return { detailedTask, toggleDetails, setDetailedTask };
};

export default useTaskDetail;
