import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

const Error = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="bg-[url('https://i.ibb.co/XF0jJ0G/404.png')] h-[75vh] bg-cover flex justify-center items-center">
                <div>
                    <Link to='/' className="bg-white bg-opacity-50 p-2 rounded-md text-black hover:bg-gray-400 hover:bg-opacity-50">Go Back To Homepage</Link>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Error;