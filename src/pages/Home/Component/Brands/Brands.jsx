import React from 'react';
import Marquee from 'react-fast-marquee';

const Brands = () => {
    return (
        <div className='container mx-auto'>
            <h2 className='text-center text-4xl font-bold my-4'>Brands Using Our Products </h2>
            <Marquee className='my-10' autoFill={true} pauseOnHover={true} speed={30}>
                <img className='w-32 h-28 mx-2' src='https://i.ibb.co/3YskX97/logo-2.jpg'></img>
                <img className='w-32 h-28 mx-2' src='https://i.ibb.co/hgqgjRS/logo-3.jpg'></img>
                <img className='w-32 h-28 mx-2' src='https://i.ibb.co/YT9cB08/logo-4.jpg'></img>
                <img className='w-32 h-28 mx-2' src='https://i.ibb.co/MMLhjh4/logo-5.jpg'></img>
                <img className='w-32 h-28 mx-2' src='https://i.ibb.co/dJGDYHs/logo-6.jpg'></img>
                <img className='w-32 h-28 mx-2' src='https://i.ibb.co/YT9cB08/logo-4.jpg'></img>
            </Marquee>
        </div>
    );
};

export default Brands;