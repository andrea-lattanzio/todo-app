import getTasks from "../api/getTasks";
import { useQuery } from "@tanstack/react-query";

const useTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(),
    staleTime: 240000
  });
};

export default useTasks;