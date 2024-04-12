import React from 'react';

const NeedSoftware = () => {
    return (
    <div className='bg-[#ECFEFF]'>
         <div className='mx-auto container space-y-10 py-20 '>
            <h2 className='text-3xl text-center font-bold'>Why does your business need stock management software to grow and thrive?</h2>
            <div className='grid lg:grid-cols-3 grid-cols-1 justify-center mx-auto container'>
                <div className='pt-10'> 
                        <div className='flex justify-center'>
                            <div className="radial-progress text-2xl bg-[#CFFAFE] font-bold text-[#0E7490]" style={{"--value":34,"--size": "8rem",}} role="progressbar">34%</div>
                        </div>
                        <h2 className='text-2xl text-center'> Shipped order late because of no track over stock outs</h2>
                </div>
                <div className='pt-10'> 
                        <div className='flex justify-center'>
                            <div className="radial-progress text-2xl bg-[#CFFAFE] font-bold text-[#0E7490]" style={{"--value":43,"--size": "8rem",}} role="progressbar">43%</div>
                        </div>
                        <h2 className='text-2xl text-center'> Face human errors in operations as a major problem</h2>
                </div>
                <div className='pt-10'> 
                        <div className='flex justify-center'>
                            <div className="radial-progress text-2xl bg-[#CFFAFE] font-bold text-[#0E7490]" style={{"--value":74,"--size": "8rem",}} role="progressbar">74%</div>
                        </div>
                        <h2 className='text-2xl text-center'> Lost visibility on inventory across the entire supply chain</h2>
                </div>

            </div>
        </div>
    </div>    
    );
};

export default NeedSoftware;