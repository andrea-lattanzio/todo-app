import Spinner from "../../components/Spinner";
import deleteCategory from "./api/deleteCategory";
import addCategory from "./api/postCategory";
import CategoryForm from "./components/CategoryForm";
import CategoryList from "./components/CategoryList/CategoryList";
import useCategories from "./hooks/useCategories";
import { CategoryFormSchema } from "./types/Categories";

const Categories = () => {
  const { data, refetch, isLoading } = useCategories();

  const handleSubmit = async (newCategory: CategoryFormSchema) => {
    await addCategory(newCategory);
    refetch();
  };

  const handleDelete = async (categoryId: string) => {
    await deleteCategory(categoryId);
    refetch();
  }

  if (isLoading) return <Spinner />;
  if (!data) return;

  return (
    <div className="h-auto overflow-y-scroll">
      <CategoryList categories={data} onDelete={handleDelete} />
      <CategoryForm onSubmitForm={handleSubmit} error={""} />
    </div>
  );
};

export default Categories;
