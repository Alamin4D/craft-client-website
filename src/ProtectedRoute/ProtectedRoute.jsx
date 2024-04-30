import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../hooks/UseAuth";


const ProtectedRoute = ({children}) => {
    const { user, loading } = UseAuth();
    const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner loading-lg text-center justify-center items-center mx-auto flex"></span>
    }

    if (!user) {
        return <Navigate to="/loginPage" state={location?.pathname || "/"}></Navigate>
    }
    return (
        <div>
           {children} 
        </div>
    );
};

export default ProtectedRoute;