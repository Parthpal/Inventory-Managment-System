import React from 'react';

const CreateStore = () => {
    return (<>  
<div className="hero min-h-screen bg-[#EEF9FB]"> 
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left flex-1">     
       <img src='https://i.ibb.co/7zX3Xp8/shop.jpg'></img>
    </div>
<div className='flex-1 w-[500px]'>
   <h1 className="text-5xl font-bold text-center mb-4">Create Your Store now!</h1>  
   <div className="card shrink-0 shadow-2xl bg-base-100">   
      <form className="card-body grid lg:grid-cols-2 grid-cols-1">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Shop Name</span>
          </label>
          <input type="text" placeholder="Shop Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Shop Logo</span>
          </label>
          <input type="file" className="file-input w-full max-w-xs file-input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Shop Location</span>
          </label>
          <input type="text" placeholder="Shop Location" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Shop Owner Name</span>
          </label>
          <input type="text" placeholder="Shop Owner Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Shop Owner Email</span>
          </label>
          <input type="Email" placeholder="Shop Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Shop Info</span>
          </label>
          <textarea className="textarea textarea-bordered" placeholder="Shop Info"></textarea>
        </div>
        <div className="form-control mt-6 col-span-2">
          <button className="btn btn-ghost bg-[#01566A] text-neutral-50">Create Shop</button>
        </div>
      </form>
    </div>
</div> 

  </div>
</div>
    </>);
};

export default CreateStore;