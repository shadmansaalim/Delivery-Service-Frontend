import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useServices();
    return (
        <section>
            {
                services.length
                    ?
                    <section id="services" className="mx-lg-5" style={{ marginTop: '60px' }}>
                        <h2 style={{ color: '#0057A7' }}>We provide services that you can rely on</h2>
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
                    //Custom Spinner
                    <section className="text-center" style={{ marginTop: '100px', marginBottom: '100px' }} >
                        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </section>
            }
        </section>
    );
};

export default Services;