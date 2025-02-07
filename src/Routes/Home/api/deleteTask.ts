import authenticatedFetch from "../../../utils/auth.wrapper";

export default async function deleteTask(taskId: string) {
  return authenticatedFetch(`/api/task/${taskId}`, {
    method: "DELETE",
  });
}
