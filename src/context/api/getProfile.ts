import { User } from "../../Routes/Login/types/login.types";
import authenticatedFetch from "../../utils/auth.wrapper";

export default async function getProfile() {
  return await authenticatedFetch<User>("/api/auth");
}