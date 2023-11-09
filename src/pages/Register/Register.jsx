import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const {googleLogin, register} = useAuth();
    const navigate = useNavigate();

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(userCredentials=>{
            // console.log(userCredentials);
            if(userCredentials){
                Swal.fire("", "Login Succeeded!!!", "success")
                navigate("/");
            }
        })
        .catch(err=>{
            // console.log(err);
            if(err){
                Swal.fire("", "Something went wrong!!!", "error");
                navigate("/");
            }
        })
    }

    // password validation
    const [passwordError, setPasswordError] = useState('');
    const validatePassword = (password) => {
        const minLength = 6;
        const hasUppercase = /[A-Z]/.test(password);
        const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);

        if (password.length < minLength) {
            return "Password should be at least 6 characters long.";
        }

        if (!hasUppercase) {
            return "Password should contain at least one uppercase letter.";
        }

        if (!hasSpecialCharacter) {
            return "Password should contain at least one special character.";
        }

        return null;
    };

    const signUp = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const name = form.name.value;

         // password validation
         const error = validatePassword(password);
         if (error) {
             setPasswordError(error);
             return;
         }

        register(email,password,name,photo)
        .then(userCredentials=>{
            // console.log(userCredentials);
            if(userCredentials){
                form.reset();
                Swal.fire("", "Registration Succeeded!!!", "success");
                navigate("/login");
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
            <Helmet>
                <title>Travego | Register</title>
            </Helmet>
            <div className="bg-black bg-opacity-70 h-screen">
                <div className="max-w-[1200px] mx-auto flex justify-center items-center h-screen">
                    <div className="max-w-[600px] hidden md:flex">
                        <h1 className="text-6xl opacity-70 font-bold text-white">Register Today & Explore Our Exciting Packages.....</h1>
                    </div>
                    <div className="bg-white bg-opacity-10 p-4 rounded-md shadow-md max-w-[600px]">
                        <form onSubmit={signUp} className="flex flex-col gap-2">
                            <input name="name" type="text" placeholder="Your Full Name" className="px-4 py-2 rounded-md opacity-60 bg-black w-full md:w-96 text-white" />
                            <input name="email" type="email" placeholder="E-mail Address" className="px-4 py-2 rounded-md opacity-60 bg-black w-full md:w-96 text-white" />
                            <input name="password" type="password" placeholder="Password" className="px-4 py-2 rounded-md opacity-60 bg-black w-full md:w-96 text-white" />
                            {passwordError && <p className="text-red-400 text-sm mt-1">{passwordError}</p>}
                            <input name="photo" type="text" placeholder="Your Photo URL" className="px-4 py-2 rounded-md opacity-60 bg-black w-full md:w-96 text-white" />
                            <p className="text-white px-1 opacity-70">Already Have An Account? <Link className="font-medium hover:text-green-400" to='/login'>Login Now!</Link></p>
                            <input type="submit" value="Register" className="px-4 py-2 rounded-md opacity-80 bg-travego w-full md:w-96 text-white hover:bg-travego2 ease-in-out duration-300"/>
                            
                        </form>
                        <button onClick={handleGoogleLogin} className="px-4 py-2 rounded-md opacity-80 bg-travego w-full md:w-96 text-white mt-1 flex justify-center items-center gap-1 hover:bg-travego2 ease-in-out duration-300"><FcGoogle className="text-xl"></FcGoogle>Login With Google</button>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default Register;