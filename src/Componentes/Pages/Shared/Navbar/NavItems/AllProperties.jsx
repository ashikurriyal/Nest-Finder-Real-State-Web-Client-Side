import { useQuery } from "@tanstack/react-query";
import { Link } from 'react-router-dom';
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure";

const AllProperties = () => {
    const axiosSecure = useAxiosSecure();

    const { data: properties = [], isLoading, error } = useQuery({
        queryKey: ['verifiedProperties'],
        queryFn: async () => {
            const res = await axiosSecure.get('/verifiedProperties')
            return res.data;
        }
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading properties</div>;
    }

    return (
        <div className="lg:mx-36 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {properties.map(property => (
                <div key={property.id} className="bg-white shadow-md rounded-lg overflow-hidden border-2 border-black">
                    <img src={property.propertyImage} alt={property.title} className="w-full h-64 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">{property.propertyTitle}</h3>
                        <p className="text-gray-600 mb-2">{property.propertyLocation}</p>
                        <div className="flex items-center mb-2">
                            <img src={property.agentImage} alt={property.agentName} className="w-8 h-8 rounded-full mr-2" />
                            <span className="text-sm">{property.agentName}</span>
                        </div>
                        <p className="text-gray-600 mb-2">Verification Status: {property.status}</p>
                        <p className="text-gray-600 mb-2">Price Range: {property.priceRange}</p>
                        <div className="flex justify-end">
                            <Link to={`/property/${property.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md">Details</Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllProperties;
