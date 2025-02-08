import { useState } from "react";
import CategoryForm from "./components/CategoryForm";
import CategoryList from "./components/CategoryList/CategoryList";
import useCategories from "./hooks/useCategories";
import { CategoryFormSchema } from "./types/Categories";
import addCategory from "./api/postCategory";
import Spinner from "../../components/Spinner";

const Categories = () => {
  const { categories } = useCategories();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: CategoryFormSchema) => {
    try {
      setLoading(true);
      await addCategory(data);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return loading ? (
    <Spinner />
  ) : (
    <div className="h-auto overflow-y-scroll">
      <CategoryList categories={categories} />
      <CategoryForm onSubmitForm={onSubmit} error={error} />
    </div>
  );
};

export default Categories;
