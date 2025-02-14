import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import deleteTask from "../api/deleteTask";
import updateTask, { UpdateTaskDto } from "../api/updateTask";

export const useTaskMutations = (taskId: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const completeTaskMutation = useMutation({
    mutationFn: () =>
      updateTask(taskId, {status: "COMPLETED"}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["task", taskId] });
      navigate("/");
    },
  });

  const updateTaskMutation = useMutation({
    mutationFn: (body: UpdateTaskDto) =>
      updateTask(taskId, body),
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
      queryClient.invalidateQueries({ queryKey: ["task", taskId] });
      navigate("/");
    },
  });

  return { completeTaskMutation, deleteTaskMutation, updateTaskMutation };
};
