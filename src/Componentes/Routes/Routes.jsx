import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/User/Home/Home";
import Login from "../Pages/Shared/Navbar/NavItems/Login";
import Register from "../Pages/Shared/Navbar/NavItems/Register";
import Dashboard from "../Pages/Shared/Navbar/NavItems/Dashboard";
import ErrorPage from "../Pages/Shared/ErrorPage";
import MyProfile from "../Pages/User/MyProfile/MyProfile";
import DashboardLayout from "../Layout/DashboardLayout";
import ManageUsers from "../Pages/Admin/ManageUsers/ManageUsers";
import ManageProperties from "../Pages/Admin/Mange Properties/ManageProperties";
import AdminProfile from "../Pages/Admin/AdminProfile/AdminProfile";
import Wishlist from "../Pages/User/Wishlist/Wishlist";
import AgentProfile from "../Pages/Agent/Agent Profile/AgentProfile";
import AddProperty from "../Pages/Agent/Add Property/AddProperty";
import MyAddedProperties from "../Pages/Agent/My Added Property/MyAddedProperties";
import PropertyDetails from "../Pages/User/PropertyDetails/PropertyDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/propertyDetails',
                element: <PropertyDetails></PropertyDetails>
            }

        ]
    },

    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            //user
            {
                path: '/dashboard/myProfile',
                element: <MyProfile></MyProfile>
            },
            {
                path: '/dashboard/wishlist',
                element: <Wishlist></Wishlist>
            },
            //admin
            {
                path: '/dashboard/manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: '/dashboard/adminProfile',
                element: <AdminProfile></AdminProfile>
            },
            {
                path: '/dashboard/manageProperties',
                element: <ManageProperties></ManageProperties>
            },

            //agent
            {
                path:'/dashboard/agentProfile',
                element: <AgentProfile></AgentProfile>
            },
            {
                path: '/dashboard/addProperty',
                element: <AddProperty></AddProperty>
            },
            {
                path: '/dashboard/myAddedProperties',
                element: <MyAddedProperties></MyAddedProperties>
            }

        ]
    }
]);
export default router;