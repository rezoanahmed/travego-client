import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/XF0jJ0G/404.png')] h-screen bg-cover flex justify-center items-center">
            <div>
                <Link to='/' className="bg-white bg-opacity-50 p-2 rounded-md text-black hover:bg-gray-400 hover:bg-opacity-50">Go Back To Homepage</Link>
            </div>
        </div>
    );
};

export default Error;