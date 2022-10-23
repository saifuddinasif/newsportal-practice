

import React, { useEffect, useState } from 'react';

const LeftSide = () => {


  const [categories, setCategories] = useState([]);


  useEffect(() => {

    fetch('http://localhost:5100/news-category')

    .then(res => res.json())
    .then(data => setCategories(data))

     


  })


    return (
        <div>
            <h1>LeftSide {categories.length}</h1>
        </div>
    );
};

export default LeftSide;