import Carousel from 'react-bootstrap/Carousel';

import download from './assets/download.jpg'

import OIP from './assets/OIP.jpg';


import React from 'react';

const Carouse = () => {
    return (
        <div>
            

<Carousel slide={false}>
<Carousel.Item>
  <img
    className="d-block w-100"
    src={download}
    alt="First slide"
  />
  <Carousel.Caption>
    
  </Carousel.Caption>
</Carousel.Item>

<Carousel.Item>
  <img
    className="d-block w-100"
    src={OIP}
    alt="First slide"
  />
  <Carousel.Caption>
 
  </Carousel.Caption>
</Carousel.Item>

</Carousel>
        </div>
    );
};

export default Carouse;