import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import axios from "axios";

const useAuth = () => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);


    // google login
    const googleLogin = async () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result;
    }

    // register user
    const register = async (email, password, name, photo) => {
        setLoading(true)
        const result = await createUserWithEmailAndPassword(auth, email, password);
        await updateUser(name, photo)
        await logout();
        return result;
    }

    // login user
    const login = async (email, password) => {
        setLoading(true);
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result;
    }

    // logout user
    const logout = async () => {
        const result = await signOut(auth);
        Swal.fire("", "Logout Succeeded!!!", "success");
        return result;
    }

    // update user
    const updateUser = async (name, photo) => {
        const result = await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
        return result;
    }


    // manage users
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail };
            if (currentUser) {
                axios.post("http://localhost:3000/jwt", loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            } else {
                axios.post("http://localhost:3000/logout", loggedUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
            }
        })
        return () => {
            unsubscribe();
        }
    }, [user])

    const loginSystems = {
        googleLogin,
        register,
        login,
        logout,
        user,
        loading,
        updateUser


    }

    return loginSystems;
};

export default useAuth;