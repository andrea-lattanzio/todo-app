import { z } from "zod";

export interface LoginFormProps {
  onSubmitForm: (data: LoginFormSchema) => void;
  error: string | null;
}

export const loginSchema = z.object({
  email: z.string().email("Email must be a valid email address"),
  password: z.string(),
});

export type LoginFormSchema = z.infer<typeof loginSchema>;

export interface LoginResponse {
  token: string;
  user: User;
}

export interface User {
  email: string;
}
