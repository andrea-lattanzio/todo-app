import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import deleteTask from "../api/deleteTask";
import updateTask from "../api/updateTask";

export const useTaskMutations = (taskId: string) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const updateTaskMutation = useMutation({
    mutationFn: () =>
      updateTask(taskId, {status: "COMPLETED"}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
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

  return { updateTaskMutation, deleteTaskMutation };
};
