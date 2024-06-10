import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAgent = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: isAgent } = useQuery({
        queryKey: [user?.email, 'isAgent'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res.data?.admin;
        }
    })

    return [isAgent]
};

export default useAgent;