import authenticatedFetch from "../../../utils/auth.wrapper";

export interface AddTaskDto {}

export default async function addTask(body: AddTaskDto) {
  return await authenticatedFetch("/task", {
    method: "POST",
    body: JSON.stringify(body),
  });
}
