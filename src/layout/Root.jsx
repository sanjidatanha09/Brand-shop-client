/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';


const Root = () => {
    return (

        <div className='bg-gray-300'>
         
                <Navbar></Navbar>
                <Outlet></Outlet>

         
            
        </div>

    );
};

export default Root;