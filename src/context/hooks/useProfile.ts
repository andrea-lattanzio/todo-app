import { useQuery } from "@tanstack/react-query";
import getProfile from "../api/getProfile";


const useProfile =  () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
    retry: false
  });
}

export default useProfile;