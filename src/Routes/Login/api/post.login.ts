import { LoginFormSchema } from "../types/login.types";

export default async function login(data: LoginFormSchema) {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  if (!response.ok) {
    console.log(responseData.message || "Login failed");
  }
  localStorage.setItem("authToken", responseData.token);
  return responseData;
}
