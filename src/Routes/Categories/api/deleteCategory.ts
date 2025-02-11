import authenticatedFetch from "../../../utils/auth.wrapper";

export default async function deleteCategory(categoryId: string) {
  return authenticatedFetch(`/api/category/${categoryId}`, {
    method: "DELETE",
  });
}
