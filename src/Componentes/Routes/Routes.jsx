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
            }

        ]
    },

    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard/myProfile',
                element: <MyProfile></MyProfile>
            },
            //admin
            {
                path: '/dashboard/manageUsers',
                element: <ManageUsers></ManageUsers>
            }

        ]
    }
]);
export default router;