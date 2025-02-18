import authenticatedFetch from "../../../../utils/auth.wrapper";

export interface AddTaskDto {
  name: string;
  description: string;
  dueDate: string;
  priority: string;
  categories?: string[];
}

export async function addTask(body: AddTaskDto) {
  return await authenticatedFetch("/api/task", {
    method: "POST",
    body: JSON.stringify(body),
  });
}