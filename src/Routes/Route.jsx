import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import CraftItems from "../pages/CraftItems";
import AddCraft from "../pages/AddCraft";
import MyArt from "../pages/MyArt";
import AboutUs from "../pages/AboutUs";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/RegisterPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import ViewDetails from "../components/Cards/ViewDetails";
import Contract from "../pages/Contract";
import UpdatePage from "../pages/UpdatePage";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                loader: () => fetch('https://craft-store-server-ten.vercel.app/craft'),
            },
            {
                path: "/craftItems",
                element: <CraftItems />,
                loader: () => fetch('https://craft-store-server-ten.vercel.app/craft'),
            },
            {
                path: "/viewDetails/:id",
                element: <ProtectedRoute><ViewDetails /></ProtectedRoute>,
                loader: ({params}) => fetch(`https://craft-store-server-ten.vercel.app/craft/${params.id}`),
            },
            {
                path: "/addCraft",
                element: <ProtectedRoute><AddCraft /></ProtectedRoute>
            },
            {
                path: "/updatePage/:id",
                element: <UpdatePage />,
                loader: ({params}) => fetch(`https://craft-store-server-ten.vercel.app/craft/${params.id}`)
            },
            {
                path: "/myArt",
                element: <ProtectedRoute><MyArt /></ProtectedRoute>,
                loader: () => fetch('https://craft-store-server-ten.vercel.app/craft'),
            },
            {
                path: "/aboutUs",
                element: <ProtectedRoute><AboutUs /></ProtectedRoute>
            },
            {
                path: "/contract",
                element: <ProtectedRoute><Contract /></ProtectedRoute>
            },
            {
                path: "/loginPage",
                element: <LoginPage />
            },
            {
                path: "/registerPage",
                element: <Register />
            }
        ]
    }
])


export default Route;