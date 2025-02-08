import { useEffect, useState } from "react";
import { TaskListItem } from "../types/task";
import getTasks from "../api/getTasks";

const useTasks = () => {
  const [tasks, setTasks] = useState<TaskListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setLoading(true);
        const data = await getTasks();
        setTasks(data);
      } catch (error) {
        console.log(error instanceof Error ? error.message : null);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  return { tasks, loading };
};

export default useTasks;
