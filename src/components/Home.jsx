import React from 'react';
import Footer from './Footer';
import Banner from './Banner';
import BrandName from './BrandName';
import FeaturedProduct from './FeaturedProduct';
import SomeProduct from './SomeProduct';

const Home = () => {
    return (
        <div>
            this is home
            <Banner></Banner>
            <BrandName></BrandName>
            <SomeProduct></SomeProduct>
            <FeaturedProduct></FeaturedProduct>

            <Footer></Footer>
        </div>
    );
};

export default Home;