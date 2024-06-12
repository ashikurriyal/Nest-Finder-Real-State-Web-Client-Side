

const PropertyDetails = () => {
    return (
        <div className="lg:mx-32 grid md:grid-cols-12 grid-cols-1 gap-10">
            <div className="col-span-8">
                {/* Property Details Content */}
                <div className="py-8">
                    {/* Property Image */}
                    <div className="mb-8">
                        <img src="https://i.ibb.co/W5727Ys/lycs-architecture-k-Udb-EEMc-Rw-E-unsplash.jpg" alt="Property" className="w-full h-96 rounded-lg" />
                    </div>

                    {/* Property Description */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Property Description</h2>
                        <p>Welcome to this charming 3-bedroom, 2-bathroom home nestled in the heart of a peaceful suburban neighborhood. This tastefully designed residence boasts an open floor plan with ample natural light, creating a warm and inviting atmosphere. The spacious living area features hardwood floors and a cozy fireplace, perfect for relaxing or entertaining guests. The kitchen is equipped with modern appliances, granite countertops, and plenty of storage space. Retreat to the serene master suite with a private en-suite bathroom and walk-in closet. Outside, enjoy the beautifully landscaped backyard oasis, complete with a covered patio, lush greenery, and a sparkling pool, ideal for summer gatherings and outdoor enjoyment. Conveniently located near schools, parks, shopping, and dining options, this home offers the perfect blend of comfort, convenience, and style. Dont miss out on this wonderful opportunity to make this your dream home!</p>
                    </div>

                    {/* Reviews Section */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
                        {/* Review 1 */}
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <h3 className="text-lg font-semibold">John Doe</h3>
                            <p className="text-gray-600">Great property! Loved the location and amenities.</p>
                        </div>

                        {/* Review 2 */}
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <h3 className="text-lg font-semibold">Jane Smith</h3>
                            <p className="text-gray-600">Had a wonderful experience staying at this property. Highly recommended!</p>
                        </div>

                        {/* Review 3 */}
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <h3 className="text-lg font-semibold">Alice Johnson</h3>
                            <p className="text-gray-600">The property exceeded our expectations. Will definitely visit again!</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-amber-400 py-8 col-span-4 text-center">
                <h2 className="text-2xl font-semibold mb-4">Agent Information</h2>

                <div className="border-2 border-black">
                    
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
