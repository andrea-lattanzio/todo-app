import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask, AddTaskDto } from "../api/postTask";
import updateTask, { UpdateTaskDto } from "../api/updateTask";
import deleteTask from "../api/deleteTask";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useTaskMutations = (taskId: string = "") => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const addTaskMutation = useMutation({
    mutationFn: (newTask: AddTaskDto) => addTask(newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
    onError: (error) => {
      setError(error.message);
    }
  });

  const updateTaskMutation = useMutation({
    mutationFn: (body: UpdateTaskDto) => updateTask(taskId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["task", taskId] });
      navigate("/");
    },
  });

  const deleteTaskMutation = useMutation({
    mutationFn: () => deleteTask(taskId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      navigate("/");
    },
  });

  return { addTaskMutation, updateTaskMutation, deleteTaskMutation, error };
};
