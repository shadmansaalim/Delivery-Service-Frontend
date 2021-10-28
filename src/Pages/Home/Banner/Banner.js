import React from 'react';
import './Banner.css'
import { Button } from 'react-bootstrap';
const Banner = () => {
    return (
        <div className="banner p-5 text-white d-flex align-items-center justify-content-center text-center">
            <div>
                <h1 className="fw-bold">Fast, Easy and Transparent <br /> Express Delivery Service</h1>
                <p className="mt-4 fw-lighter">All it takes is one booking</p>
                <div className="mt-4 d-flex">
                    <Button className="app-blue-btn mx-auto" variant="primary" size="lg">Book Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;