import authenticatedFetch from "../../../utils/auth.wrapper";
import { TaskListProps } from "../types/task";

export default async function getTasks() {
  const data = await authenticatedFetch<TaskListProps>("/api/task");
  return data;
}
