import authenticatedFetch from "../../../../utils/auth.wrapper";
import { Category } from "../types";

export default async function getCategories() {
  return await authenticatedFetch<Category[]>("/api/category");
}