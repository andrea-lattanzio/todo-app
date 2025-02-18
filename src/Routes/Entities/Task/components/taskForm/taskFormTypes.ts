import { z } from "zod";

export const taskSchema = z.object({
  name: z.string().nonempty(),
  description: z.string().nonempty(),
  dueDate: z
    .string()
    .refine((value) => !isNaN(Date.parse(value)), {
      message: "Invalid date format",
    })
    .transform((value) => new Date(value))
    .refine((date) => date >= new Date(), {
      message: "Due date must be today or in the future",
    })
    .transform((value) => new Date(value).toISOString()),
  priority: z.array(z.string()),
  categories: z.array(z.string()).optional(),
});

export type TaskFormSchema = z.infer<typeof taskSchema>;