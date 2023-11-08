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
import MyBookings from "../pages/MyBookings/MyBookings";
import MySchedules from "../pages/MySchedules/MySchedules";
import UpdateServices from "../pages/Update/UpdateServices";
import UpdateBookings from "../pages/Update/UpdateBookings";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
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
                loader: ({params})=>fetch(`https://travego-server.vercel.app/service/${params.id}`)
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
                path: "/mybookings",
                element: <PrivateRoutes><MyBookings></MyBookings></PrivateRoutes>
            },
            {
                path: "/myschedules",
                element: <PrivateRoutes><MySchedules></MySchedules></PrivateRoutes>
            },
            {
                path: "/updateservice/:id",
                element: <PrivateRoutes><UpdateServices></UpdateServices></PrivateRoutes>,
                loader: ({params})=>fetch(`https://travego-server.vercel.app/service/${params.id}`)
            },
            {
                path: "/updatebooking/:id",
                element: <PrivateRoutes><UpdateBookings></UpdateBookings></PrivateRoutes>,
                loader: ({params})=>fetch(`https://travego-server.vercel.app/booking/${params.id}`)
                
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            }
        ],
        
    },
    
])