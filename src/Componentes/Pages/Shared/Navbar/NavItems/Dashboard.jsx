import { NavLink } from "react-router-dom";


const Dashboard = () => {
    const isAgent = false;
    const isAdmin = true;

    return (
        <div className="lg:mx-36 mt-10">
            
            {
                isAdmin ?
                    <>
                        <div className="grid grid-cols-2 border-xl justify-items-center  gap-6">
                            <NavLink to='/dashboard/adminprofile' className="w-3/4  rounded-xl flex items-center justify-center font-medium text-2xl p-8 border-2 border-black">Admin Profile</NavLink>
                            <NavLink to='/dashboard/manageProperties' className="w-3/4  rounded-xl flex items-center justify-center font-medium text-2xl p-8 border-2 border-black">Manage Properties</NavLink>
                            <NavLink to='/dashboard/manageUsers' className="w-3/4  rounded-xl flex items-center justify-center font-medium text-2xl p-8 border-2 border-black">Manage Users</NavLink>
                            <NavLink to='/dashboard/manageReviews' className="w-3/4  rounded-xl flex items-center justify-center font-medium text-2xl p-8 border-2 border-black">Manage Reviews</NavLink>
                        </div>
                    </>
                    :
                    (isAgent ?
                        <>
                            <div className="grid grid-cols-3 border-xl justify-items-center  gap-6">
                                <NavLink to='/dashboard/agentProfile' className="w-3/4 rounded-xl  font-medium text-2xl flex items-center justify-center border-2 border-black">Agent Profile</NavLink>
                                <NavLink to='/dashboard/addProperty' className="w-3/4  rounded-xl flex items-center justify-center font-medium text-2xl p-8 border-2 border-black">Add Property</NavLink>
                                <NavLink to='/dashboard/myAddedProperties' className="w-3/4  rounded-xl flex items-center justify-center font-medium text-2xl border-2 border-black">My Added Properties</NavLink>
                                <NavLink to='/dashboard/mySoldProperties' className="w-3/4  rounded-xl flex items-center justify-center font-medium text-2xl p-8 border-2 border-black">My Sold Properties</NavLink>
                                <NavLink to='/dashboard/requestedProperties' className="w-3/4  rounded-xl flex items-center justify-center font-medium text-2xl border-2 border-black">Requested Properties</NavLink>
                            </div>
                        </>
                        :
                        <>
                            <div className="grid grid-cols-2 border-xl justify-items-center  gap-6">
                                <NavLink to='/dashboard/myProfile' className="w-3/4  rounded-xl flex items-center justify-center font-medium text-2xl p-8 border-2 border-black">My Profile</NavLink>
                                <NavLink to='/dashboard/wishlist' className="w-3/4  rounded-xl flex items-center justify-center font-medium text-2xl p-8 border-2 border-black">Wishlist</NavLink>
                                <NavLink to='/dashboard/propertyBought' className="w-3/4  rounded-xl flex items-center justify-center font-medium text-2xl p-8 border-2 border-black">Property Bought</NavLink>
                                <NavLink to='/dashboard/myReviews' className="w-3/4  rounded-xl flex items-center justify-center font-medium text-2xl p-8 border-2 border-black">My Reviews</NavLink>
                            </div>
                        </>)
            }
        </div>
    );
};

export default Dashboard;