import React from 'react';
import './Track.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
const Track = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="track d-flex text-center shadow-lg bg-white col-10 col-lg-6 rounded-3">
                <div class="input-group mb-3 d-flex flex-column flex-md-row">
                    <input type="text" class="form-control" placeholder="Type your tracking number" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button class="btn app-blue-btn text-white" type="button" id="button-addon2">TRACK PARCEL <FontAwesomeIcon icon={faTruck} /></button>
                </div>
            </div>
        </div>
    );
};

export default Track;