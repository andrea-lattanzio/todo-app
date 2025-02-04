import { z } from "zod";

export interface RegisterFormProps {
  onSubmitForm: (data: RegisterFormSchema) => void;
  error: string | null;
}

export const registerSchema = z.object({
  email: z.string().email("Email must be a valid email address"),
  password: z
    .string()
    .min(5, "Password must be at least 5 characters long")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[@$!%*?&]/,
      "Password must contain at least one special character (@$!%*?&)"
    ),
});

export type RegisterFormSchema = z.infer<typeof registerSchema>;
