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
            .then(data => {
                setServices(data);
            })
    }, [])

    return (
        <section>
            {
                services.length
                    ?
                    <section style={{ marginTop: '60px' }}>
                        <h2>We provide services that you can rely on</h2>
                        <Row xs={1} md={2} lg={3} className="g-4 mt-3 mb-5">
                            {
                                services.map(service => <Service
                                    key={service.sID}
                                    service={service}
                                ></Service>)
                            }
                        </Row>
                    </section>
                    :
                    null
            }
        </section>
    );
};

export default Services;