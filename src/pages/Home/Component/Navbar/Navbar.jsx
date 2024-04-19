import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (<>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Home</a></li>
                    <li><a>Login</a></li>
                    <li><a>Register</a></li>
                    <li><a>Watch Demo</a></li>
                    <Link to='/createStore'>Create Store</Link>   
                    <Link to='/dashboard'>Dashboard</Link>
                </ul>
                </div>
                <div className='hidden md:block'>
                        <a className="btn btn-ghost text-xl block ">Fusion Inventory</a>
                        <a className="btn btn-ghost text-xs md:block -mt-4">Best Inventory System</a>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex -mt-8">
                <ul className="menu menu-horizontal px-1">
                <li><a>Home</a></li>
                    <li><a>Login</a></li>
                    <li><a>Register</a></li>
                    <li><a>Watch Demo</a></li>
                    <li><Link to='/createStore'>Create Store</Link></li> 
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
            </div>
            <div className="navbar-end hidden md:flex -mt-8">
                <a className="btn">Free Download</a>
            </div>
            <div className='navbar-end sm:block md:hidden'>
                    <a className="btn btn-ghost text-xl">Fusion Inventory</a>           
            </div>
        </div>
</> );
};

export default Navbar;