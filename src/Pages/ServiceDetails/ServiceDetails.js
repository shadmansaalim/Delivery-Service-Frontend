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
        <div>
            {
                service.name
                    ?
                    <h1>{service.name}</h1>
                    :
                    null
            }
        </div>
    );
};

export default ServiceDetails;