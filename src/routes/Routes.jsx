import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllServices from "../pages/Services/AllServices";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Add from "../pages/Add/Add";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Manage from "../pages/Manage/Manage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/services",
                element: <AllServices></AllServices>
            },
            {
                path: "/service/:id",
                element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
                loader: ({params})=>fetch(`http://localhost:3000/service/${params.id}`)
            },
            {
                path: "/add",
                element: <PrivateRoutes><Add></Add></PrivateRoutes>
            },
            {
                path: "/manage",
                element: <PrivateRoutes><Manage></Manage></PrivateRoutes>
            },
            {
                
            }
        ],
        
    },
    
])