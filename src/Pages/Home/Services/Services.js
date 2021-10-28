import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Container } from 'react-bootstrap';
import Service from '../Service/Service';
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container className="mx-auto">
            <Row xs={1} md={3} className="g-4 my-5">
                {
                    services.map(service => <Service
                        key={service.sID}
                        service={service}
                    ></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;