import { LoginFormSchema } from "../types/login.types";

export default async function login(data: LoginFormSchema) {

  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(responseData.message);
  }
  return responseData;
}
