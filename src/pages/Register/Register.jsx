import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="bg-[url('https://images.pexels.com/photos/761511/pexels-photo-761511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-screen bg-cover">
            <div className="bg-black bg-opacity-70 h-screen">
                <div className="max-w-[1200px] mx-auto flex justify-center items-center h-screen">
                    <div className="max-w-[600px] hidden md:flex">
                        <h1 className="text-6xl opacity-70 font-bold text-white">Register Today & Explore Our Exciting Packages.....</h1>
                    </div>
                    <div className="bg-white bg-opacity-10 p-4 rounded-md shadow-md max-w-[600px]">
                        <form className="flex flex-col gap-2">
                            <input type="text" placeholder="Your Full Name" className="px-4 py-2 rounded-md opacity-60 bg-black w-full md:w-96 text-white" />
                            <input type="email" placeholder="E-mail Address" className="px-4 py-2 rounded-md opacity-60 bg-black w-full md:w-96 text-white" />
                            <input type="password" placeholder="Password" className="px-4 py-2 rounded-md opacity-60 bg-black w-full md:w-96 text-white" />
                            <input type="text" placeholder="Your Photo URL" className="px-4 py-2 rounded-md opacity-60 bg-black w-full md:w-96 text-white" />
                            <p className="text-white px-1 opacity-70">Already Have An Account? <Link className="font-medium hover:text-green-400" to='/login'>Login Now!</Link></p>
                            <input type="submit" value="Register" className="px-4 py-2 rounded-md opacity-80 bg-travego w-full md:w-96 text-white hover:bg-travego2 ease-in-out duration-300"/>
                            
                        </form>
                        <button className="px-4 py-2 rounded-md opacity-80 bg-travego w-full md:w-96 text-white mt-1 flex justify-center items-center gap-1 hover:bg-travego2 ease-in-out duration-300"><FcGoogle className="text-xl"></FcGoogle>Login With Google</button>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default Register;