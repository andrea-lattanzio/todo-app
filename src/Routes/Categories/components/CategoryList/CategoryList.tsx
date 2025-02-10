import NoElementComponent, { NoElementProps } from "../../../../components/ui/NoElementComponent";
import { CategoryListProps } from "../../types/Categories";
import CategoryCard from "./Category";

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  const noCategoriesMessage: NoElementProps = {
    title: "Oops! No categories were found",
    description: "You don't have any saved category, create one",
    icon: "bi-exclamation-diamond",
    createButton: false,
  };

  return (
    <div className="h-auto sm:h-60 lg:h-60 xl:h-40 max-h-60 w-full bg-[#2c2e2d] p-4 rounded-xl shadow-lg border-2 border-[#343434] overflow-y-auto">
      {categories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full">
          <NoElementComponent {...noCategoriesMessage} />
        </div>
      )}
    </div>
  );
};

export default CategoryList;
