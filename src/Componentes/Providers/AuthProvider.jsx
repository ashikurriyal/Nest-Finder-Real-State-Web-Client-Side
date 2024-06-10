import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    //Sign In With Google

    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    /* const signInWithGitHub = () => {
        setloading(true)
        return signInWithPopup(auth, gitHubProvider)
    } */

    const updateCurrentProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {displayName:name, photoURL:photoURL})
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            //console.log('current user', currentUser);
            setLoading(false);
        })
        return () => {
            return unSubscribe();
        }
    }, [])

    const authInfo = {
        user, loading, createUser, signIn, logOut, signInWithGoogle, updateCurrentProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;