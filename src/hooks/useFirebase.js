
import { useState, useEffect } from 'react';
import { getAuth, signInWithPopup,updateProfile, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import initializeFirebase from '../Authentication/Firebase/firebase.init';





initializeFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin,setAdmin] =useState(false)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
   
    // useEffect(()=>{
    //     fetch(`http://localhost:7000/users/${user.email}`)
    //     .then(res=>res.json())
    //     .then(data=>setAdmin(data.admin))
    // },[user.email])
    const registerUser = (email,name, password,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newuser ={email:email,displayName:name}
                setUser(newuser)
                saveUser(email,name,"POST")
                updateProfile(auth.currentUser, {
                    displayName:name
                  }).then(() => {
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });

                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
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
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    const signinwithGoogle=(location,history)=>{
        setIsLoading(true)
    signInWithPopup(auth, googleProvider)
  .then((result) => {
    
    const user = result.user;
    saveUser(user.email,user.displayName,"PUT")
    const destination = location?.state?.from || '/';
    history.replace(destination);
    setAuthError('')
    // ...
  }).catch((error) => {
    // Handle Errors here.
    
    setAuthError(error.message);
    
  
  })
  .finally(()=>setIsLoading(false))
    }


    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
               

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

    const saveUser=(email,displayName,method)=>{
        const user={email,displayName};
        fetch('http://localhost:7000/users',{
            method:method,
            headers:{
                "content-type":'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return {
        user,
        admin,
       
        isLoading,
        authError,
        registerUser,
        loginUser,
        signinwithGoogle,
        logout,
    }
}

export default useFirebase;