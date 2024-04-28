import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import CraftItems from "../pages/CraftItems";
import AddCraft from "../pages/AddCraft";
import MyArt from "../pages/MyArt";
import AboutUs from "../pages/AboutUs";
import LoginPage from "../pages/LoginPage";
import CraftDetails from "../components/Cards/CraftDetails";
import Register from "../pages/RegisterPage";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                loader: () => fetch('http://localhost:5000/craft'),
            },
            {
                path: "/craftItems",
                element: <CraftItems />,
                loader: () => fetch('http://localhost:5000/craft'),
            },
            {
                path: "/craftDetails/:id",
                element: <CraftDetails />,
                loader: ({params}) => fetch(`http://localhost:5000/craft/${params.id}`),
            },
            {
                path: "/addCraft",
                element: <ProtectedRoute><AddCraft /></ProtectedRoute>
            },
            {
                path: "/myArt",
                element: <ProtectedRoute><MyArt /></ProtectedRoute>
            },
            {
                path: "/aboutUs",
                element: <ProtectedRoute><AboutUs /></ProtectedRoute>
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