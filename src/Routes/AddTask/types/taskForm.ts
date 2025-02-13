import { z } from "zod";

export interface TaskFormProps {
  onSubmitForm: (data: TaskFormSchema) => void;
  error: string | undefined;
}

export const taskSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
});

export type TaskFormSchema = z.infer<typeof taskSchema>;

export interface CustomRadioProps {
  options: string[];
  maxSelect?: number;
  colors?: { [key: string]: string };
  onChange: (option: string[] | null) => void;
}
