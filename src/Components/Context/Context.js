import React, { createContext, useEffect, useState } from 'react';

import {createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../Firebase';

 export  const AuthContext = createContext()

const auth = getAuth(app)



 

const Context = ({children}) => {

    const[user,setUser] =useState(null)

    const [loading, setLoading] = useState(true);



    useEffect(() => {

    const unsubscribe =onAuthStateChanged(auth, (currentUser) =>{

         console.log(currentUser)
         if( currentUser === null || currentUser.emailVerified){


            setUser(currentUser)
         }

            

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


    const updateUserProfile = (profile) => {

        return updateProfile(auth.currentUser,profile);
    }

    const  verifyEmail= () => {

        return sendEmailVerification(auth.currentUser)
    }

   const authInfo= { updateUserProfile,providerLogin,user ,loading,logOut,createUser,signIn, verifyEmail, setLoading}

    return (
        <div>
            
            <AuthContext.Provider value={authInfo}>
                    {children} 
            </AuthContext.Provider>
        </div>
    );
};

export default Context;