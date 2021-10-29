import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Track from '../Track/Track';
import Network from '../Network/Network';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <main className="container mx-auto">
                <Track></Track>
                <Services></Services>
                <Network></Network>
            </main>
        </div>
    );
};

export default Home;