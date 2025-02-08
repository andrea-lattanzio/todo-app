import CategoryForm from "./components/CategoryForm";
import CategoryList from "./components/CategoryList/CategoryList";
import useCategories from "./hooks/useCategories";

const Categories = () => {
  const { categories } = useCategories();


  return (
    <div className="p-8 select-none h-screen">
      <CategoryForm />
      <CategoryList categories={categories} />
    </div>
  );
};

export default Categories;
