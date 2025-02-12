import getTaskById from "../api/getTaskById";
import { useQuery } from "@tanstack/react-query";

const useTasks = (id: string) => {
  return useQuery({
    queryKey: ["task", id],
    queryFn: () => getTaskById(id),
    staleTime: 240000
  });
};

export default useTasks;
