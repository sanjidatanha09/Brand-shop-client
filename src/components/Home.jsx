import React from 'react';
import Footer from './Footer';
import Banner from './Banner';
import BrandName from './BrandName';
import FeaturedProduct from './FeaturedProduct';
import SomeProduct from './SomeProduct';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const products = useLoaderData();
    return (
        <div>
            
            <Banner></Banner>
            <div>
                <h1>All Products:{products.length}</h1>
            </div>
            <BrandName></BrandName>
            <SomeProduct></SomeProduct>
            <FeaturedProduct></FeaturedProduct>

            <Footer></Footer>
        </div>
    );
};

export default Home;