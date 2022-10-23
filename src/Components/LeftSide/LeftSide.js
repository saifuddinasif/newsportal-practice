

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {


  const [categories, setCategories] = useState([]);


  useEffect(() => {

    fetch('http://localhost:5100/news-category')

    .then(res => res.json())
    .then(data => setCategories(data))

     


  })


    return (
        <div>
            <h1>All Categories : {categories.length}</h1>
            {
                categories.map (category => <p key={category.id}>
           
               <Link to={`/category/${category.id}`}>{category.name}</Link>

                </p>)
            }
        </div>
    );
};

export default LeftSide;