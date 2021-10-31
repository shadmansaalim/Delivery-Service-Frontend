import { useEffect } from 'react';
import { useState } from 'react';

const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://eerie-blood-54641.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])

    return [services, setServices];
};

export default useServices;