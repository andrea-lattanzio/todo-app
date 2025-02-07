import authenticatedFetch from "../../../utils/auth.wrapper";

class UpdateTaskDto {
  name?: string;
  description?: string;
}

export default async function updateTask(taskId: string, body: UpdateTaskDto) {
  return authenticatedFetch(`/api/task/${taskId}`, {
    method: "PATCH",
    body: JSON.stringify(body)
  });
}