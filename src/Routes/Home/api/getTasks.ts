import authenticatedFetch from "../../../utils/auth.wrapper";
import { TaskListItem } from "../types/task";

export default async function getTasks() {
  return await authenticatedFetch<TaskListItem[]>("/api/task");
}
