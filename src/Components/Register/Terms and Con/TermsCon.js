import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsCon = () => {
    return (
        <div className='App'>
            <h5>Terms AND Condition </h5>
           
           <p>Go Back To Register : <Link to='/register'><Button variant="outline-success">Click</Button></Link>  </p>
        </div>
    );
};

export default TermsCon;