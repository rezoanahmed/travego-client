import {FcGoogle} from "react-icons/fc"
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const {googleLogin, login} = useAuth();
    const handleGoogleLogin = () =>{
        googleLogin()
        .then(userCredentials=>{
            // console.log(userCredentials);
            if(userCredentials){
                Swal.fire("", "Login Succeeded!!!", "success")
            }
        })
        .catch(err=>{
            // console.log(err);
            if(err){
                Swal.fire("", "Something went wrong!!!", "error")
            }
        })
    }

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email,password)
        .then(userCredentials=>{
            // console.log(userCredentials);
            if(userCredentials){
                Swal.fire("", "Login Succeeded!!!", "success")
            }
        })
        .catch(err=>{
            // console.log(err);
            if(err){
                Swal.fire("", "Something went wrong!!!", "error")
            }
        })
    }
    return (
        <div className="bg-[url('https://images.pexels.com/photos/761511/pexels-photo-761511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] h-screen bg-cover">
            <div className="bg-black bg-opacity-70 h-screen">
                <div className="max-w-[1200px] mx-auto flex justify-center items-center h-screen">
                    <div className="max-w-[600px]">
                        <h1 className="text-6xl opacity-70 font-bold text-white hidden md:flex">Login Now & Book The Best Travel Guide For You.....</h1>
                    </div>
                    <div className="bg-white bg-opacity-10 p-4 rounded-md shadow-md max-w-[600px]">
                        <form onSubmit={handleLogin} className="flex flex-col gap-2">
                            <input name="email" type="email" placeholder="E-mail Address" className="px-4 py-2 rounded-md opacity-60 bg-black w-full md:w-96 text-white" />
                            <input name="password" type="password" placeholder="Password" className="px-4 py-2 rounded-md opacity-60 bg-black w-full md:w-96 text-white" />
                            <p className="text-white px-1 opacity-70">New User? <Link className="font-medium hover:text-green-400" to='/register'>Register Now!</Link></p>
                            <input type="submit" value="Login" className="px-4 py-2 rounded-md opacity-80 bg-travego w-full md:w-96 text-white hover:bg-travego2 ease-in-out duration-300"/>
                            
                        </form>
                        <button onClick={handleGoogleLogin} className="px-4 py-2 rounded-md opacity-80 bg-travego w-full md:w-96 text-white mt-1 flex justify-center items-center gap-1 hover:bg-travego2 ease-in-out duration-300"><FcGoogle className="text-xl"></FcGoogle>Continue With Google</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;