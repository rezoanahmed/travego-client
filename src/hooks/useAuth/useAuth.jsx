import { auth } from "../../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const useAuth = () => {
    

    // google login
    const googleLogin = async () =>{
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result;
    }

    // register user
    const register = async(email, password) =>{
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return result;
    }

    // login user
    const login = async(email,password) =>{
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result;
    }

    const loginSystems = {
        googleLogin,
        register,
        login,

    }

    return loginSystems;
};

export default useAuth;