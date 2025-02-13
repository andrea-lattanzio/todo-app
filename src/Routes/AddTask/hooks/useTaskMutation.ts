import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addTask, AddTaskDto } from "../api/postTask";
import { useNavigate } from "react-router-dom";

export const useTaskMutations = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const addTaskMutation = useMutation({
    mutationFn: (newTask: AddTaskDto) => addTask(newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      navigate("/");
    },
  });

  return { addTaskMutation };
};
