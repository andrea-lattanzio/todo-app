import Spinner from "../../../../components/Spinner";
import { AddCategoryDto } from "../api/postCategory";
import CategoryForm from "../components/CategoryForm/CategoryForm";
import { CategoryFormSchema } from "../components/CategoryForm/CategoryFormTypes";
import CategoryList from "../components/CategoryList/CategoryList";
import useCategories from "../hooks/useCategories";
import { useCategoryMutations } from "../hooks/useCategoryMutation";

const Categories = () => {
  const { data, isLoading, isFetching } = useCategories();
  const { addCategoryMutation, deleteCategoryMutation, error } =
    useCategoryMutations();

  const handleSubmit = (newCategory: CategoryFormSchema) => {
    const newCategoryDto: AddCategoryDto = {
      name: newCategory.name,
      description: newCategory.description,
    };
    addCategoryMutation.mutate(newCategoryDto);
  };

  const handleDelete = (id: string) => {
    deleteCategoryMutation.mutate(id);
  };

  if (
    isLoading ||
    isFetching ||
    deleteCategoryMutation.isPending ||
    addCategoryMutation.isPending
  )
    return <Spinner />;
  if (!data) return;

  return (
    <div className="h-auto overflow-y-scroll">
      <CategoryList categories={data} onDelete={handleDelete} />
      <CategoryForm onSubmitForm={handleSubmit} error={error} />
    </div>
  );
};

export default Categories;
