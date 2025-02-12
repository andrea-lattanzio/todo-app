import authenticatedFetch from "../../../utils/auth.wrapper";
import { Category } from "../types/Categories";

interface AddCategoryDto {
  name: string;
  description: string;
}

export default async function addCategory(body: AddCategoryDto) {
  return await authenticatedFetch<Category>("/api/category", {
    method: "POST",
    body: JSON.stringify(body),
  });
}
