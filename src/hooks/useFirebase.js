import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup,updateProfile, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebase from '../Authentication/Firebase/firebase.init';


initializeFirebase()


const useFirebase=()=>{

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    const auth = getAuth();
    // const googleProvider = new GoogleAuthProvider();



    const registerUser = (email,name, password,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                const newuser ={email:email,displayName:name}
                setUser(newuser)
               
                updateProfile(auth.currentUser, {
                    displayName:name
                  }).then(() => {
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });

               
            })
            .catch((error) => {
                
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                
            })
            .catch((error) => {
               
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // getIdToken(user)
                // .then(idToken=>{
                //     setToken(idToken);
                // })

            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        
        isLoading,
        
        registerUser,
        loginUser,
       
        logout,
    }

    

}


export default useFirebase