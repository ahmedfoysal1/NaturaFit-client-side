import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useClassess = (search = "", currentPage = 0, itemsPerPage = 0) => {
  const axiosPublic = useAxiosPublic();
  const {
    data: classess = [],
    isPending,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["allclassess", search, currentPage, itemsPerPage],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/allclassess?search=${search}&page=${currentPage}&size=${itemsPerPage}`
      );
      return res.data;
    },
  });
  const loading = isFetching || isPending;
  return [classess, loading, refetch];
};

export default useClassess;
