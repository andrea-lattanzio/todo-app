import { useMutation, useQueryClient } from "@tanstack/react-query";
import addCategory, { AddCategoryDto } from "../api/postCategory";
import deleteCategory from "../api/deleteCategory";
import { useState } from "react";

export const useCategoryMutations = () => {
  const queryClient = useQueryClient();
  const [error, setError] = useState<string | null>(null);

  const addCategoryMutation = useMutation({
    mutationFn: (newTask: AddCategoryDto) => addCategory(newTask),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      setError(null);
    },
    onError: (error) => {
      setError(error.message);
    }
  });

  const deleteCategoryMutation = useMutation({
    mutationFn: (categoryId: string) => deleteCategory(categoryId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      setError(null);
    },
    onError: (error) => {
      setError(error.message);
    }
  });

  return { addCategoryMutation, deleteCategoryMutation, error };
};
