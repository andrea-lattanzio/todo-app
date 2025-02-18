import authenticatedFetch from "../../../../utils/auth.wrapper";
import { Task } from "../types";

export default async function getTaskById(taskId: string) {
  return await authenticatedFetch<Task>(`/api/task/${taskId}`);
}