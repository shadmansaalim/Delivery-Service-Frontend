import React from 'react';
import Rating from 'react-rating';
import './Reviews.css'
const Reviews = () => {
    return (
        <div id="carouselExampleInterval" class="carousel slide mb-5" data-bs-ride="carousel" style={{ marginTop: '100px' }}>
            <div class="carousel-inner">
                <div class="carousel-item active d-flex row" data-bs-interval="4000">
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
                <div class="carousel-item" data-bs-interval="4000">
                    <img src="..." class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Reviews;