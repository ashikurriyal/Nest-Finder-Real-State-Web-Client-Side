import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const MyAddedProperties = () => {

    const axiosSecure = useAxiosSecure();

    const { user } = useContext(AuthContext);


    const { data: properties = [] } = useQuery({
        queryKey: ['properties', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/properties?email=${user?.email}`)
            return res.data
        }
    })
    console.log(properties)

    return (
        <div>

        </div>
    );
};

export default MyAddedProperties;