import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            }
        ],
        // path: "/login"
    }
])