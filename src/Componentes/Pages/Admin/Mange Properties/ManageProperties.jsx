import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";


const ManageProperties = () => {

    const axiosSecure = useAxiosSecure();
    const { data: properties = [] } = useQuery({
        queryKey: ['properties'],
        queryFn: async () => {
            const res = await axiosSecure.get('/allProperties')
            return res.data
        }
    })

    console.log(properties)
    return (
        <div className="lg:mx-36 mt-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Property Title</th>
                            <th>Property Location</th>
                            <th>Agent Name</th>
                            <th>Agent Email</th>
                            <th>Price Range</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            properties.map(item => <>
                                <tr>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.propertyImage} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.propertyTitle}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.propertyLocation}
                                    </td>
                                    <th>
                                        <td>
                                            {
                                                item.agentName
                                            }
                                        </td>
                                    </th>
                                    <th>
                                        <td>{item.agentEmail}</td>
                                    </th>
                                    <th>
                                        <td>${item.priceRange}</td>
                                    </th>
                                    <th>
                                        <td>{item.status}</td>
                                    </th>
                                    <th>
                                        <td>
                                            {item.status === 'pending' && (
                                                <>
                                                    <button className="btn btn-sm bg-green-500 p-2" onClick={() => handleVerify()}>Verify</button>
                                                    <button className="btn btn-sm bg-red-500 p-2" onClick={() => handleReject()}>Reject</button>
                                                </>
                                            )}
                                            {item.status === 'verified' && <span>Verified</span>}
                                            {item.status === 'rejected' && <span>Rejected</span>}
                                        </td>
                                    </th>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProperties;