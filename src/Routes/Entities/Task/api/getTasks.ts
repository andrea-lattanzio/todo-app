import authenticatedFetch from "../../../../utils/auth.wrapper";
import { Task } from "../types";

export default async function getTasks() {
  return await authenticatedFetch<Task[]>("/api/task");
}