import React from 'react';
import { Col, Card } from 'react-bootstrap';
const Service = ({ service }) => {
    const { name, img, description } = service;
    return (
        <Col>
            <Card className="h-100">
                <Card.Img variant="top" src={img} className="img-fluid" style={{ height: '250px' }} />
                <Card.Body >
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;