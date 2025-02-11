import authenticatedFetch from "../../../utils/auth.wrapper";
import { TaskListItem } from "../types/task";

export default async function getTaskById(taskId: string) {
  return await authenticatedFetch<TaskListItem>(`/api/task/${taskId}`);
}
