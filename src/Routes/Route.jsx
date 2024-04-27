import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";
import CraftItems from "../pages/CraftItems";
import AddCraft from "../pages/AddCraft";
import MyArt from "../pages/MyArt";
import AboutUs from "../pages/AboutUs";
import LoginPage from "../pages/LoginPage";

const Route = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "/craftItems",
                element: <CraftItems />
            },
            {
                path: "/addCraft",
                element: <AddCraft />
            },
            {
                path: "/myArt",
                element: <MyArt />
            },
            {
                path: "/aboutUs",
                element: <AboutUs />
            },
            {
                path: "/loginPage",
                element: <LoginPage />
            }
        ]
    }
])


export default Route;