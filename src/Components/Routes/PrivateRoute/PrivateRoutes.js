import React, { useContext } from 'react';
import { AuthContext } from './../../Context/Context';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoutes = ({children}) => {
 
    const location = useLocation()
    const  {user,loading} = useContext(AuthContext)

    
       if(loading){

        return <Spinner animation='border' variant='primary'></Spinner>
       }

    if(!user){

        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }

    return children; 

};

export default PrivateRoutes;