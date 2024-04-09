import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen md:-mt-6 mt-0 bg-[#F3F9FF]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='lg:w-1/2 w-full'>
                        <img src="https://i.ibb.co/Z6nynxY/11065-removebg-preview-1.png" className="md:max-w-2xl w-full" />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                        <h1 className="text-5xl font-bold">The best inventory management System for businesses</h1>
                        <p className="py-6">Streamline every aspect of inventory management from experiencing seamless procurement, to ensuring efficient sales. Gain control across outlets, optimize stock levels, and say goodbye to manual processes.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
             </div>
          </div>
        </div>
    );
};

export default Banner;