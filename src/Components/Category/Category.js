import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummary from '../NewsSummary/NewsSummary';

const Category = () => {

    const newss = useLoaderData();



    return (
        <div>
            <h4> This  Category  has : {newss.length}   news </h4>

            {
                newss.map(newss=> <NewsSummary
                
                key={newss._id}
                news= {newss}
                >

                </NewsSummary>)
            }
        </div>
    );
};

export default Category;