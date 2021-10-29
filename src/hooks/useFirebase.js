import initializeAuthentication from "../Firebase/firebase.init"

import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({})

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const twitterProvider = new TwitterAuthProvider();


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('Inside State Change', user)
                setUser(user);
            }
            else {
                setUser(null);
            }
            setIsLoading(false);
        })
    }, []);


    const handleGoogleSignUp = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const handleFacebookSignUp = () => {
        return signInWithPopup(auth, facebookProvider);
    }

    const handleTwitterSignUp = () => {
        return signInWithPopup(auth, twitterProvider);
    }

    const logOutUser = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        setUser,
        isLoading,
        setIsLoading,
        handleGoogleSignUp,
        handleFacebookSignUp,
        handleTwitterSignUp,
        logOutUser
    }
}

export default useFirebase;