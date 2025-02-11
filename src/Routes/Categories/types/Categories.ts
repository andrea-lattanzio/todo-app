import { ReactNode } from "react";
import { z } from "zod";

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface CategoryListProps {
  categories: Category[] | undefined;
  onDelete: (id: string) => void;
}

export interface CategoryCardProps {
  category: Category;
  onDelete: (id: string) => void;
}

export interface TooltipProps {
  message: string;
  children: ReactNode;
}

export const categorySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
});

export type CategoryFormSchema = z.infer<typeof categorySchema>;

export interface CategoryFormProps {
  onSubmitForm: (data: CategoryFormSchema) => void;
  error: string | undefined;
}
