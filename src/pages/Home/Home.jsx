import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banner/Banner';
import Brands from './Component/Brands/Brands';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Brands/>
        </div>
    );
};

export default Home;