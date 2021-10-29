import React from 'react';
import Rating from 'react-rating';
import './Reviews.css'
const Reviews = () => {
    return (
        <div id="carouselExampleInterval" className="carousel slide mb-5" data-bs-ride="carousel" style={{ marginTop: '100px' }}>
            <div className="carousel-inner">
                <div className="carousel-item active d-flex row" data-bs-interval="4000">
                    <div className="shadow-lg p-4 d-flex flex-column justify-content-around col-4 ">
                        <p>We have been looking for a reliable courier for express same day delivery in Sydney! So far we have had no issues. They offer fantastic tracking and even photograph the item being left. Well done guys - keep up the good work.</p>
                        <div>
                            <p className="m-0">igift Fruit Hampers</p>
                            <Rating
                                className="me-1"
                                initialRating={4.5}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly
                            ></Rating>
                        </div>
                    </div>
                    <div className="shadow-lg p-4 d-flex flex-column justify-content-around col-4 ">
                        <p>We have been looking for a reliable courier for express same day delivery in Sydney! So far we have had no issues. They offer fantastic tracking and even photograph the item being left. Well done guys - keep up the good work.</p>
                        <div>
                            <p className="m-0">igift Fruit Hampers</p>
                            <Rating
                                className="me-1"
                                initialRating={4.5}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly
                            ></Rating>
                        </div>
                    </div>
                    <div className="shadow-lg p-4 d-flex flex-column justify-content-around col-4 ">
                        <p>We have been looking for a reliable courier for express same day delivery in Sydney! So far we have had no issues. They offer fantastic tracking and even photograph the item being left. Well done guys - keep up the good work.</p>
                        <div>
                            <p className="m-0">igift Fruit Hampers</p>
                            <Rating
                                className="me-1"
                                initialRating={4.5}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly
                            ></Rating>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                    <img src="..." className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Reviews;