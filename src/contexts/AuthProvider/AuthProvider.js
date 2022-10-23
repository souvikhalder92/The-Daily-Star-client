import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const providerLogin = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const providerLoginFacebook = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const verifyEmail = () =>{
        return sendEmailVerification(auth.currentUser);
    }

    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser,profile);

    }

    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('state changed',currentUser);
           if(currentUser ===  null || currentUser.emailVerified)
           {
            setUser(currentUser);
           }
            setLoading(false);

        });

        return () =>{
            unSubscribe();

        }

    },[])

    const authInfo = {user,loading,setLoading,providerLogin,providerLoginFacebook,logOut,createUser,signIn,updateUserProfile,verifyEmail};
    return (

        <div>
           <AuthContext.Provider value={authInfo}>
             {children}
            </AuthContext.Provider> 
        </div>
    );
};

export default AuthProvider;