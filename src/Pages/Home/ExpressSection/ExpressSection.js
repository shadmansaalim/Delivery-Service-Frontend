import React from "react";
const ExpressSection = () => {

    return (
        <section className="row d-flex align-items-center" style={{ marginTop: '100px', marginBottom: '100px' }}>

            <img className="col-lg-5 mx-auto" src="https://www.zoom2u.com.au/wp-content/themes/zoom2u2018/images/map2.png" alt="" />
            <div className="col-lg-6">
                <h3 className="mb-4" style={{ color: '#0057A7' }}>Seamless Express Delivery Service</h3>
                <p>Delivering parcels has never been easier and more personalised. Zoom2u’s technology makes sure that your package gets to where it needs to be and how it has to be.</p>
                <p>Zoom2u enables you to keep your eyes on your parcel while it’s on route to its destination. Our technology allows you to track your parcel in real time, call the courier when you feel the need to and get informative updates directly on your mobile device. It’s easy.</p>
                <p>Simply create an account, book a delivery and see it get to where it needs to be live on your device! You can also do all these through the convenience of our app, available both on Android and iOS.</p>
            </div>
        </section>
    );

};

export default ExpressSection;