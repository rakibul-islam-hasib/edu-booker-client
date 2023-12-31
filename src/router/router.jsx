import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";
import College from "../pages/college/College";
import Error404 from "../pages/error/Error404";
import SearchCollage from "../pages/search/SearchCollage";
import Details from "../pages/details/Details";
import AdmissionWrapper from "../pages/admission/AdmissionWrapper";
import PrivetRoute from "./PrivetRoute";
import MyCollege from "../pages/MyCollege/MyCollege";
import ResetPassword from "../pages/ResetPassword/ResetPassword";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error404 />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/college',
                element: <College />
            },
            {
                path: '/college/search/',
                element: <SearchCollage />
            },
            {
                path: '/details/:id',
                element: <Details />,
                loader: ({ params }) => fetch(`https://edu-booker.vercel.app/college/${params.id}`)
            },
            {
                path: '/admission/:id',
                element: <PrivetRoute><AdmissionWrapper /></PrivetRoute>,
                loader: ({ params }) => fetch(`https://edu-booker.vercel.app/college/${params.id}`)
            },
            {
                path: '/my-college',
                element: <PrivetRoute><MyCollege /></PrivetRoute>, 
            }, 
            {
                path : '/reset-password',
                element : <ResetPassword />
            }

        ]
    }
])