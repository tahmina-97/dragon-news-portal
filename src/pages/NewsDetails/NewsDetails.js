import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsDetails = ({ news }) => {
    const { title, details, image_url, category_id } = news
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>

                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All News in This Category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default NewsDetails;