import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask, AddTaskDto } from "../api/postTask";
import updateTask, { UpdateTaskDto } from "../api/updateTask";
import deleteTask from "../api/deleteTask";
import { useNavigate } from "react-router-dom";

export const useTaskMutations = (taskId: string = "") => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const addTaskMutation = useMutation({
    mutationFn: (newTask: AddTaskDto) => addTask(newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
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

  return { addTaskMutation, updateTaskMutation, deleteTaskMutation };
};
