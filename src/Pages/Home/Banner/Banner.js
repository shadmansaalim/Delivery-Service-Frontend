import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner p-5 text-white d-flex align-items-center justify-content-center text-center" >
            <div>
                <h1 className="fw-bold">Fast, Easy and Transparent <br /> Express Delivery Service</h1>
                <p className="mt-4 fw-light">All it takes is one booking</p>
                <div className="mt-4 d-flex">
                    <button className="btn btn-outline-warning btn-lg mx-auto">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;