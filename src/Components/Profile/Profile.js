import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../Context/Context';

const Profile = () => {

    const {user} = useContext(AuthContext)

     
     const photoURLRef = useRef(user.photoURL);



   const [name,setName] =useState(AuthContext)
     
    

    const handleSubmit = (event) => {
       event.preventDefault();
    }



   const handleNameChange = (event) =>{
    setName(event.target.value)

    console.log(name);
   }


    
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control readOnly defaultValue={user?.email} type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Your Name</Form.Label>
                <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Photo URL</Form.Label>
                
                <Form.Control
                ref={photoURLRef}
                defaultValue={user?.photoURL} type="text" placeholder="Photo URL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};
  


export default Profile;