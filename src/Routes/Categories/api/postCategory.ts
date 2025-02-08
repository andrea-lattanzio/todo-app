import authenticatedFetch from "../../../utils/auth.wrapper";

interface AddCategoryDto {
  name: string;
  description: string;
}

export default async function addCategory(body: AddCategoryDto) {
  return authenticatedFetch("/api/category", {
    method: "POST",
    body: JSON.stringify(body),
  });
}
