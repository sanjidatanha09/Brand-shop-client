import React from 'react';
import Footer from './Footer';
import Banner from './Banner';
import BrandName from './Brands/BrandName';
import FeaturedProduct from './FeaturedProduct';
import SomeProduct from './SomeProduct';
import { useLoaderData } from 'react-router-dom';
import CricFeast from './CricFeast';
import { FaBeer } from 'react-icons/fa';
import About from '../extrafeature/About';
import Contact from '../extrafeature/Contact';


const Home = () => {

    const product = useLoaderData();

   
   
    return (
        <div className='' >
            
            <Banner></Banner>
          
            <div className='max-w-6xl mx-auto'>
                <div className='text-center my-10'>
                    
                    <p className='font-bold text-gray-600 text-3xl lg:text-5xl '>All Brand Name</p>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        product.map(prod => <BrandName key={prod.id} product={prod}>

                        </BrandName>)
                    }

                </div>

            </div>
            
            
           
            <FeaturedProduct></FeaturedProduct>
            <CricFeast></CricFeast>
            <About></About>
            <Contact></Contact>
            <SomeProduct></SomeProduct>

            <Footer></Footer>
        </div>
    );
};

export default Home;