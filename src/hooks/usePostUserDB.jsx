import { useMutation } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const usePostUserDB = () => {
  const axiosPublic = useAxiosPublic();
  const mutation = useMutation({
    mutationFn: async (users) => {
      await axiosPublic.post("/users", users);
    },
  });
  return mutation;
}

export default usePostUserDB