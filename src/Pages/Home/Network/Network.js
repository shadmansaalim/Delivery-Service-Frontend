import React from 'react';

const Network = () => {
    return (
        <section className="mb-5" style={{ marginTop: '100px' }}>
            <h3 className="text-center mt-4">Australia's largest delivery network</h3>
            <div className="row d-flex justify-content-center align-items-center mx-auto text-center mt-3">
                <div className="col-md-3 mx-auto">
                    <img className="img-fluid" src="https://startrack.com.au/content/dam/startrack_corp/images/illu-delivery-points-across-network.svg" alt="" />
                    <h6>11.9 million delivery points across the Australia Post network</h6>
                </div>
                <div className="col-md-3 mx-auto">
                    <img className="img-fluid" src="https://startrack.com.au/content/dam/startrack_corp/images/illu-startrack-plane.svg" alt="" />
                    <h6>750+ national flights per day to 80+ destinations</h6>
                </div>
                <div className="col-md-3 mx-auto">
                    <img className="img-fluid" src="https://startrack.com.au/content/dam/startrack_corp/images/illu-startrack-truck.svg" alt="" />
                    <h6>16,000+ vehicles on the road</h6>
                </div>
            </div>
        </section>
    );
};

export default Network;