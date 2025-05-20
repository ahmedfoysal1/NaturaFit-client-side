import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTrainer = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: trainerss = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["trainers"],
    queryFn: async () => {
      const res = await axiosPublic.get("/trainers");
      return res.data;
    },
  });
  return [trainerss, loading, refetch];
};

export default useTrainer;
