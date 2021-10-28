import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
const Services = () => {

    return (
        <Container className="mx-auto">
            <Row xs={1} md={3} className="g-4 my-5">
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://ecourier.com.bd/wp-content/uploads/Individual-Delivery-300x218.png" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://ecourier.com.bd/wp-content/uploads/Merchant-Delivery_-300x218.png" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src="https://ecourier.com.bd/wp-content/uploads/AirParcel-300x218.png" />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;