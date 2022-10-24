import React, { createContext, useEffect, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../Firebase';

 export  const AuthContext = createContext()

const auth = getAuth(app)



 

const Context = ({children}) => {

    const[user,setUser] =useState(null)

    const [loading, setLoading] = useState(true);



    useEffect(() => {

    const unsubscribe =onAuthStateChanged(auth, (currentUser) =>{
             setUser(currentUser)

             setLoading(false)

          });

          return  () => {
            unsubscribe();

          }

    },[])


 

    const providerLogin = (provider) => {
        setLoading(false)
        return signInWithPopup(auth,provider)
    }
 
     const logOut = () => {

        return signOut(auth)
     }
     
     
       const createUser =(email,password) =>{
        setLoading(false)
         return createUserWithEmailAndPassword(auth,email,password)

        }

    const signIn = (email,password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password)
    }

   const authInfo= {providerLogin,user ,loading,logOut,createUser,signIn}

    return (
        <div>
            
            <AuthContext.Provider value={authInfo}>
                    {children} 
            </AuthContext.Provider>
        </div>
    );
};

export default Context;