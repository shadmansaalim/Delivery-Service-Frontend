import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
const Services = () => {
    const [services, setServices] = useServices([]);
    return (
        <section>
            {
                services.length
                    ?
                    <section className="mx-lg-5" style={{ marginTop: '60px' }}>
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