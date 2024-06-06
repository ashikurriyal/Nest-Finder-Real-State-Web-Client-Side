import { NavLink } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="lg:mx-36 mt-10">
            <div className="grid grid-cols-2 border-xl justify-items-center  gap-6">
                <NavLink to='/myprofile' className="w-3/4 text-center rounded-xl font-medium text-2xl p-8 border-2 border-black">My Profile</NavLink>
                <NavLink to='/wishlist' className="w-3/4 text-center rounded-xl font-medium text-2xl p-8 border-2 border-black">Wishlist</NavLink>
                <NavLink to='/propertybought' className="w-3/4 text-center rounded-xl font-medium text-2xl p-8 border-2 border-black">Property bought</NavLink>
                <NavLink to='/myreviews' className="w-3/4 text-center rounded-xl font-medium text-2xl p-8 border-2 border-black">My reviews</NavLink>
            </div>
        </div>
    );
};

export default Dashboard;