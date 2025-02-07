import authenticatedFetch from "../../../utils/auth.wrapper";
import { TaskListProps } from "../types/task";

export default async function getTasks() {
  try {
    return await authenticatedFetch<TaskListProps>("/api/task");
  } catch (error) {
    console.log(error);
  }
}
