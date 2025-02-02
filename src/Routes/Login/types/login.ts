import { z } from "zod";

export interface LoginFormProps {
  onSubmitForm: (data: LoginFormSchema) => void;
}

export const loginSchema = z.object({
  email: z.string().email("Email must be a valid email address"),
  password: z.string(),
});

export type LoginFormSchema = z.infer<typeof loginSchema>;
