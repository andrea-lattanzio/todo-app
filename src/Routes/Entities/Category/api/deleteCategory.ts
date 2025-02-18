import authenticatedFetch from "../../../../utils/auth.wrapper";

export default async function deleteCategory(categoryId: string) {
  return await authenticatedFetch(`/api/category/${categoryId}`, {
    method: "DELETE",
  });
}