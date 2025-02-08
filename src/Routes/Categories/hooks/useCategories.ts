import { useEffect, useState } from "react";
import getCategories from "../api/getCategories";
import { Category } from "../types/Categories";

const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data: Category[] = await getCategories();
        setCategories(data);
      } catch (error) {
        console.log(error instanceof Error ? error.message : null);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading };
};

export default useCategories;
