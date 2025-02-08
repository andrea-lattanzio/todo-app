import authenticatedFetch from "../../../utils/auth.wrapper";
import { Category } from "../types/Categories";

export default async function getCategories() {
  return await authenticatedFetch<Category[]>("/api/category");
}