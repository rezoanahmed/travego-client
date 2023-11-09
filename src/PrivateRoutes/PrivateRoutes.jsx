import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth/useAuth"
import PropTypes from "prop-types"
import Loading from "../components/Loading/Loading";
const PrivateRoutes = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};
PrivateRoutes.propTypes = {
    children: PropTypes.object.isRequired,
}

export default PrivateRoutes;