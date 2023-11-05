import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth/useAuth"
const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <div className="h-[70vh] flex justify-center items-center">
            <div className="animate-spin inline-block w-60 h-60 border-[10px] border-current border-t-transparent text-travego rounded-full" role="status" aria-label="loading">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoutes;