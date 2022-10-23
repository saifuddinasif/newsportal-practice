import React, { createContext, useEffect, useState } from 'react';

import {getAuth,  onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import app from '../../Firebase';

 export  const AuthContext = createContext()

const auth = getAuth(app)



 

const Context = ({children}) => {

    const[user,setUser] =useState(null)


    useEffect(() => {

    const unsubscribe =onAuthStateChanged(auth, (currentUser) =>{

             setUser(currentUser)

          });

          return  () => {
            unsubscribe();

          }

    },[])


 

    const providerLogin = (provider) => {

        return signInWithPopup(auth,provider)
    }
 

   const authInfo= {providerLogin,user }

    return (
        <div>
            
            <AuthContext.Provider value={authInfo}>
                    {children} 
            </AuthContext.Provider>
        </div>
    );
};

export default Context;