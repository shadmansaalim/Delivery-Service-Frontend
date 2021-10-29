import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const ServiceDetails = () => {
    const { id } = useParams();
    const [services, setServices] = useServices();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data);
            })
    }, [])






    return (
        <section className="mb-5">
            {
                service.name
                    ?
                    <div className="text-center">
                        <img src={service.banner} alt="" style={{ width: '100%', height: '500px' }} />
                        <h3 className="my-3">{service.name}</h3>
                        <p className="col-6 mx-auto">{service.description}</p>
                    </div>
                    :
                    <section className="text-center vh-100 d-flex justify-content-center align-items-center">
                        <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </section>
            }
        </section>
    );
};

export default ServiceDetails;