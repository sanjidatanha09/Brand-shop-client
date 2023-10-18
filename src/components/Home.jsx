import React from 'react';
import Footer from './Footer';
import Banner from './Banner';
import BrandName from './BrandName';
import FeaturedProduct from './FeaturedProduct';
import SomeProduct from './SomeProduct';


const Home = () => {

    // const products = useLoaderData();
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
            
            <BrandName></BrandName>
            <SomeProduct></SomeProduct>
            <FeaturedProduct></FeaturedProduct>

            <Footer></Footer>
        </div>
    );
};

export default Home;