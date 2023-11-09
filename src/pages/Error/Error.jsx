
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
// import Lottie from "lottie-react";
import ErrorAnimation from '../../Lottie/ErrorAnimation.json'

const Error = () => {
    return (
        <>
            <Navbar></Navbar>
            {/* <div className="bg-[url('https://i.ibb.co/XF0jJ0G/404.png')] h-[75vh] bg-cover flex justify-center items-center">
                <div>
                </div>
            </div> */}
            <div className="flex flex-col justify-center items-center">
            {/* <h1 className="text-travego font-bold text-6xl pt-10">404 Error</h1> */}
            <Lottie className="h-96" animationData={ErrorAnimation} loop={true}></Lottie>
            <Link to='/' className="bg-travego hover:bg-opacity-80 p-2 rounded-md text-white">Go Back To Homepage</Link>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Error;