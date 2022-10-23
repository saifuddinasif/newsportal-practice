import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';



const NewsSummary = ({news}) => {


    const {_id, title,details, image_url,total_view,author} =news


    return (
        <Card >
      <Card.Header className='d-flex justify-content-between align-items-center'>
 
        <div className='d-flex  align-items-center'>
            <Image 
            
            roundedCircle
            src={author.img}
              
            style={{height: '60px'}}
            >
             
            </Image>
                <div>
                    <p>{author.name}</p>
                    <p>{author.published_date}</p>
                </div>
        </div>
       
        <div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
        </div>


      </Card.Header>
      <Card.Body className='mb-4'>
      <Card.Img variant="top" src={image_url} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>

             {
                details.length > 250 ? <p>{details.slice(0,250) + '...'} <Link to={`/news/${_id}`}>Read MORE </Link></p>

                : <p>{details}</p>
             }
    
        </Card.Text>
        
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    );
};

export default NewsSummary;