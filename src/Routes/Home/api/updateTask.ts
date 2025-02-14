import authenticatedFetch from "../../../utils/auth.wrapper";

export interface UpdateTaskDto {
  name?: string;
  description?: string;
  status?: "PENDING" | "COMPLETED";
  dueDate?: string;
  priority?: string;
  categories?: string[];
}

export default async function updateTask(taskId: string, body: UpdateTaskDto) {
  return authenticatedFetch(`/api/task/${taskId}`, {
    method: "PATCH",
    body: JSON.stringify(body)
  });
}