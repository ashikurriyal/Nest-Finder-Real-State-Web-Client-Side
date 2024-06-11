import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useUser from "../../../../Hooks/useUser";

const AddProperty = () => {
    const collectUser = useUser();
    console.log(collectUser)

    const axiosSecure = useAxiosSecure();


    const handleAddProperty = async e => {
        e.preventDefault();

        const form = e.target;
        const propertyTitle = form.propertyTitle.value;
        const propertyLocation = form.propertyLocation.value;
        const propertyImage = form.propertyImage.value;
        const priceRange = form.priceRange.value;
        const agentName = collectUser.name
        const agentEmail = collectUser.email;
        const status = 'pending';
        

        const addProperty = {propertyTitle, propertyLocation, propertyImage, priceRange, agentName, agentEmail, status};
        
        const res = await axiosSecure.post('/properties', addProperty)
        if(res.data.insertedId) {
            Swal.fire({
                title: "Sucessfull",
                text: "Property Added Successfully",
                icon: "success"
            });
        }
        // console.log(addProperty)
    }

    return (
        <div className="lg:mx-36 lg:mt-10 min-h-screen bg-white flex flex-col-reverse lg:gap-0 gap-4 lg:flex-row  items-center lg:py-10 py-4">
            {/* Add Property Form Section */}
            <div className="w-full lg:w-1/2 px-5">
                <div className="bg-white shadow-md shadow-stone-700 rounded-lg p-6">
                    <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">Add Property</h2>
                    <form onSubmit={handleAddProperty} className="space-y-8">
                        <div className="form-group">
                            <label htmlFor="propertyTitle" className="block mb-2 text-lg text-gray-700">Property Title</label>
                            <input type="text" id="propertyTitle" name="propertyTitle" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none" placeholder="Title of your property" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="propertyLocation" className="block mb-2 text-lg text-gray-700">Property Location</label>
                            <input type="text" id="propertyLocation" name="propertyLocation" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none" placeholder="Property location" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="propertyImage" className="block mb-2 text-lg text-gray-700">Property Image</label>
                            <input type="file" id="propertyImage" name="propertyImage" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="priceRange" className="block mb-2 text-lg text-gray-700">Price Range</label>
                            <input type="text" id="priceRange" name="priceRange" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none" placeholder="$300,000 - $350,000" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="agentName" className="block mb-2 text-lg text-gray-700">Agent Name</label>
                            <input type="text" id="agentName" name="agentName" disabled className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none" placeholder={collectUser.name} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="agentEmail" className="block mb-2 text-lg text-gray-700">Agent Email</label>
                            <input type="text" id="agentEmail" name="agentEmail" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:ring-2 focus:ring-black focus:outline-none" placeholder={collectUser.email} />
                        </div>
                        <button type="submit" className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors">Add Property</button>
                    </form>
                </div>
            </div>

            {/* Promotional Banner Section */}
            <div className="w-full lg:w-1/2 px-5 mt-10 lg:mt-0 relative">
                <div className="bg-gray-900 text-white p-10 rounded-lg flex flex-col items-center justify-center">
                    <img src="https://i.ibb.co/mbkqF31/mikita-yo-Hup-Lwltb-W3k-unsplash.jpg" alt="Promotional Banner" className="w-full rounded-md shadow-md" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <h2 className="text-4xl font-bold mb-4">List Your Property</h2>
                        <p className="mb-8">Add your property to our platform to reach potential buyers and sell faster. List your property today and get started on your selling journey.</p>
                        <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProperty;
