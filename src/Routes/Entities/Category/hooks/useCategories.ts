import { useQuery } from "@tanstack/react-query";
import getCategories from "../api/getCategories";

const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
    staleTime: 240000
  });
};

export default useCategories;
