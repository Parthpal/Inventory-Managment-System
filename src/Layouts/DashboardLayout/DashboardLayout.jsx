import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full font-bold text-xl text-neutral-50 bg-[#7258DB] text-white">
      {/* Sidebar content here */}
      <p className=''>DashBoard</p>
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  
  </div>
</div>
    );
};

export default DashboardLayout;