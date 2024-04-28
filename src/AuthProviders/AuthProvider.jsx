import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";



export const AuthContext = createContext(null);

// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(loading);


    // // update user profile
    // const updateUserProfile = (name, image) => {
    //     return updateProfile(auth.currentUser, {
    //         displayName: name, 
    //         photoURL: image
    //       })
    // }

    // create user
    const createUser = (email, password) => {
        console.log('password')
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // logout
    const logOut = () => {
        setUser(null)
        return signOut(auth)
    }

    // observer
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        console.log(user)
            if (user) {
                setUser(user)
            }
            setLoading(false);
        });
        return () =>  unsubscribe();
    }, [])

    const authInfo = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        user,
        // updateUserProfile,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;