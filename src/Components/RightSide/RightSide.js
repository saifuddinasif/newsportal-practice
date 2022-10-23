import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import {FaGithub,FaGoogle, FaFacebook, FaTwitch, FaTwitter, FaInstagram, FaWhatsapp} from "react-icons/fa";
import Carouse from '../Carousel.js/Carousel';
import { AuthContext } from '../Context/Context';
const RightSide = () => {

   const {providerLogin} =useContext(AuthContext)
   
   const googleProvider = new GoogleAuthProvider()


    const handleGoogleSignIn = () =>{

        providerLogin(googleProvider)

        .then(result => {
            const user = result.user;
            console.log(user)

        })
             
        .catch(error => console.error(error))

    }

    return (
        <div>
            <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary">      <FaGoogle></FaGoogle> Login In  Google</Button>
         <Button  variant="outline-dark"><FaGithub></FaGithub> Login In With Github</Button>

       </ButtonGroup>

        <div>
            <h3>Find Us On </h3>

            <ListGroup>
      <ListGroup.Item className='mb-2 ' variant="dark"><FaFacebook></FaFacebook> FaceBook</ListGroup.Item>
      <ListGroup.Item className='mb-2' variant="success"><FaTwitch></FaTwitch> WhatsApp</ListGroup.Item>
      <ListGroup.Item className='mb-2 ' variant="warning"><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item className='mb-2' variant="info"><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
      <ListGroup.Item className='mb-2' variant="dark"> <FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
    </ListGroup>
        </div>
             
               <Carouse></Carouse>

        </div>
    );
};

export default RightSide;