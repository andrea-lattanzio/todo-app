export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface CategoryListProps {
  categories: Category[] | [];
}

export interface CategoryCardProps {
  category: Category;
}