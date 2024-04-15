import React from 'react';
import Navbar from './Component/Navbar/Navbar';
import Banner from './Component/Banner/Banner';
import Brands from './Component/Brands/Brands';
import InventoryManager from './Component/InventoryManager/InventoryManager';
import NeedSoftware from './Component/NeedSoftware/NeedSoftware';
import Footer from './Component/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Brands/>
            <InventoryManager/>
            <NeedSoftware/>
            <Footer/>
        </div>
    );
};

export default Home;