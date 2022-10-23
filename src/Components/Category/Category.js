import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {

    const news = useLoaderData();



    return (
        <div>
            <h4> This  Category  has : {news.length}news </h4>
        </div>
    );
};

export default Category;