import { LoginFormSchema } from "../types/login";

export default async function login(data: LoginFormSchema) {
  await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}
