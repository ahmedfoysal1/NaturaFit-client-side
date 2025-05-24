import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useClassess = (search = "") => {
  const axiosPublic = useAxiosPublic();
  const {
    data: classess = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["allclassess",search],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allclassess?search=${search}`);
      return res.data;
    },
  });
  return [classess, loading, refetch];
};

export default useClassess;
