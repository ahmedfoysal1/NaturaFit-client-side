import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useIsTrainer = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isTrainer, isPending: trainerLoading } = useQuery({
    queryKey: [user?.email, "isTrainer"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/trainer/${user?.email}`);
      return res.data?.trainer;
    },
  });
  return [isTrainer, trainerLoading];
};

export default useIsTrainer;
