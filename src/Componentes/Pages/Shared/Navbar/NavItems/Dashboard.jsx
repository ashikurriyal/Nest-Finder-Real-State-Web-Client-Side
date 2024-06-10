import { NavLink } from "react-router-dom";


const Dashboard = () => {
    const isAgent = true;

    return (
        <div className="lg:mx-36 mt-10">
            {
                isAgent ?
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
                            <NavLink to='/dashboard/myprofile' className="w-3/4  rounded-xl flex items-center justify-center font-medium text-2xl p-8 border-2 border-black">My Profile</NavLink>
                            <NavLink to='/dashboard/wishlist' className="w-3/4  rounded-xl flex items-center justify-center font-medium text-2xl p-8 border-2 border-black">Wishlist</NavLink>
                            <NavLink to='/dashboard/propertybought' className="w-3/4  rounded-xl flex items-center justify-center font-medium text-2xl p-8 border-2 border-black">Property bought</NavLink>
                            <NavLink to='/dashboard/myreviews' className="w-3/4  rounded-xl flex items-center justify-center font-medium text-2xl p-8 border-2 border-black">My reviews</NavLink>
                        </div>
                    </>
            }
        </div>
    );
};

export default Dashboard;