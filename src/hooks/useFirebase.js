import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../component/firebase.init";

initializeFirebase();

const useFirebase = () =>{
    const[user , setUser] = useState({});
    const[isLoading,setIsLoading] =useState(true);
    const [admin , setAdmin] = useState(false);
    const auth = getAuth();

    const registerUser = (email, password, name, navigate)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
            .then((userCarential) => {
                const newUser = {email , displayName:name};
                setUser(newUser);
                // save user
                saveUser(email,name);

                updateProfile(auth.currentUser, {
                    displayName: name
                })
                console.log(email,password);
                const redirect_uri = '/';
                navigate(redirect_uri);
            }).catch((error)=>{
                
            })
            .finally(()=>setIsLoading(false));
    }
    // Login user
    const loginUser = (email, password, location, navigate)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth,email,password)
        .then(()=>{
            const redirect_uri = location?.state?.from || '/';
            console.log(redirect_uri);
            navigate(redirect_uri);

        }).catch(()=>{

        })
        .finally(() => setIsLoading(false));
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            } else{
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe ;
    },[])
    // logout
    const logout = () =>{
        setIsLoading(true)
        signOut(auth).then(()=>{

        }).catch((error)=>{

        })
        .finally(() => setIsLoading(false));
    }

    useEffect(() =>{
        fetch(`https://immense-sierra-48309.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user?.email])


    const saveUser =(email , displayName) =>{
        const user = {email , displayName};
        fetch('https://immense-sierra-48309.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)

        })
           
    }

    return{
        user,
        admin,
        isLoading,
        registerUser,
        loginUser,
        logout,
    }
}

export default useFirebase;