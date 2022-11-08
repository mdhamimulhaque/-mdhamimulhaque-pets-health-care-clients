import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    // ---> google login
    const googleLogIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    // ---> registration || create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // ---> email-pass login
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ---> handleCurrent user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }
    }, [])



    // ---> log out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    const authInfo = {
        googleLogIn,
        logOut,
        user,
        setLoading,
        logIn,
        createUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;