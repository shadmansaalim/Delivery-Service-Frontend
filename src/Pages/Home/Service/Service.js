import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Service = ({ service }) => {
    const { _id, name, img, sID, description } = service;
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
                <Card.Footer className="text-center">
                    <Link to={`/service/${_id}`}>
                        <Button variant="warning">Book Now</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;