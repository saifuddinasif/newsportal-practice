import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../NewsSummary/NewsSummary';

const Category = () => {

    const newss = useLoaderData();



    return (
        <div>
            <h4> This  Category  has : {newss.length}   news </h4>

            {
                newss.map(news => <NewsSummary
                
                key={news._id}
                news= {news}
                >

                </NewsSummary>)
            }
        </div>
    );
};

export default Category;