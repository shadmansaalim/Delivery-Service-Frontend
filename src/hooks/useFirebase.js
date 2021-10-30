import initializeAuthentication from "../Firebase/firebase.init"

import { getAuth, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import swal from 'sweetalert';

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({})
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    const [signUpRepeatPassword, setSignUpRepeatPassword] = useState('');


    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const handleFirstNameChange = e => {
        setFirstName(e.target.value);
    }
    const handleLastNameChange = e => {
        setLastName(e.target.value);
    }

    const handleSignUpEmailChange = e => {
        setSignUpEmail(e.target.value);
    }
    const handleSignUpPasswordChange = e => {
        setSignUpPassword(e.target.value);
    }
    const handleSignUpRepeatPasswordChange = e => {
        setSignUpRepeatPassword(e.target.value);
    }

    const handleSignUp = () => {

        return createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
    }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {

            })
            .catch(error => {
                swal("Something Went Wrong!", "Please try again later", "warning");
            })
    }

    const setUserDetails = () => {
        updateProfile(auth.currentUser, { displayName: (firstName + " " + lastName), email: signUpEmail })
            .then(() => {
            })
            .catch(error => {
                swal("Something Went Wrong!", "Please try again later", "warning");
            })
            .finally(() => setIsLoading(false));
    }


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
        logOutUser,
        handleFirstNameChange,
        handleLastNameChange,
        handleSignUpEmailChange,
        signUpPassword,
        signUpRepeatPassword,
        handleSignUpPasswordChange,
        handleSignUpRepeatPasswordChange,
        handleSignUp,
        verifyEmail,
        setUserDetails
    }
}

export default useFirebase;