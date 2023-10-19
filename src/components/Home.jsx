import React from 'react';
import Footer from './Footer';
import Banner from './Banner';
import BrandName from './BrandName';
import FeaturedProduct from './FeaturedProduct';
import SomeProduct from './SomeProduct';
import { useLoaderData } from 'react-router-dom';
import CricFeast from './CricFeast';


const Home = () => {

    const product = useLoaderData();
   
    return (
        <div>
            
            <Banner></Banner>
            {/* <div className='max-w-6xl mx-auto'>
                <h1 className='text-center font-bold text-5xl p-10'>All Products:{products.length}</h1>
                <div className='grid md:grid-cols-2 gap-10 border max-w-6xl'>
                    {

                        products.map(product => <ProductCard
                            key={product._id}
                            product={product}>

                        </ProductCard>)

                        
                    }
                </div>
            </div> */}
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
            <SomeProduct></SomeProduct>

            <Footer></Footer>
        </div>
    );
};

export default Home;