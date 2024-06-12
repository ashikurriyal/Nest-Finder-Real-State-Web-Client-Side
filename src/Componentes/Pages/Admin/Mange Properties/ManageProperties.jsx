import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const ManageProperties = () => {

    const axiosSecure = useAxiosSecure();
    const {data: properties = [] } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allProperties')
            return res.data
        }
    })

    console.log(properties)
    return (
        <div>
            Manage Properties
        </div>
    );
};

export default ManageProperties;