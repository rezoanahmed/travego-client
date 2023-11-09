
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
// import Lottie from "lottie-react";
import ErrorAnimation from '../../Lottie/ErrorAnimation.json'
import { Helmet } from "react-helmet-async";

const Error = () => {
    return (
        <>
            <Navbar></Navbar>
            {/* <div className="bg-[url('https://i.ibb.co/XF0jJ0G/404.png')] h-[75vh] bg-cover flex justify-center items-center">
                <div>
                </div>
            </div> */}
            <Helmet>
                <title>404 Error</title>
            </Helmet>
            <div className="flex flex-col justify-center items-center dark:bg-[#1f2937] dark:text-[#949ea9]">
            {/* <h1 className="text-travego font-bold text-6xl pt-10">404 Error</h1> */}
            <Lottie className="h-96" animationData={ErrorAnimation} loop={true}></Lottie>
            <Link to='/' className="bg-travego dark:bg-blue-600 hover:bg-opacity-80 p-2 rounded-md text-white">Go Back To Homepage</Link>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Error;