import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers.jsx/AuthProvider';
import { FaGithub, FaGofore, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {

    const { user, logOUt } = useContext(AuthContext);

    const handleSignOut = () => {
        logOUt()
            .then()
            .catch()

    }


    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/addproduct">Add Product</NavLink></li>

        <li><NavLink to="/mycart">My Cart</NavLink></li>
       
        <li><NavLink to="/productinfo">Product Info</NavLink></li>
        <li><NavLink to="/users">users</NavLink></li>


    </>

    return (
        <div className='max-w-6xl mx-auto py-7 font-sans gap-5 '>
            
            <div className="navbar bg-gray-300 rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {navLinks}
                        </ul>
                    </div>
                    <div className=''>
                        <img className='w-[150px]' src="https://i.ibb.co/BLLsLtX/tech-logo.webp" alt="" />
                    </div>
                
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="font-bold text-xl menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end ">

                    <div className='flex justify-end items-center gap-5'>


                        {
                            user ?
                                <button onClick={handleSignOut} className='btn btn-info text-white'>Log Out</button>

                                :
                                <Link className='flex justify-center items-center gap-3' to="/login"><FaUserCircle className='lg:text-4xl '></FaUserCircle>
                                    <button className='btn text-sm lg:text-lg lg:font-bold btn-info text-white'>Login</button>

                                </Link>

                        }
                        <div>
                            <p className='text-sm font-bold'>{user?.email}</p>


                        </div>


                    </div>

                 


                </div>


               
            </div>

            
        </div>
    );
};

export default Navbar;