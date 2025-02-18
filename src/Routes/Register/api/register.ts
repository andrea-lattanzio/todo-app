import { RegisterFormSchema } from "../types/register.types";
const baseUrl = import.meta.env.VITE_API_URL;
export default async function register(data: RegisterFormSchema) {
  const response = await fetch(`${baseUrl}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  if(!response.ok) {
    throw new Error(responseData.message);
  }
  return responseData;
}
