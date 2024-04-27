import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="container mx-auto lg:px-24 px-8 py-5">
                <div>
                    <Navbar />
                    <Outlet />
                </div>
            </div>
            <div className="w-full px-4">
                <Footer />
            </div>
        </div>
    );
};

export default Root;