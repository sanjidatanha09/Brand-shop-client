import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllBrands2 from './AllBrands2';

const AllBrands = () => {

    const loadedProducts = useLoaderData();
    const [products, setProduct] = useState(loadedProducts);


   


    return (
        <div className='max-w-6xl mx-auto'>
            <div className="carousel lg:w-full h-[600px] mb-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/Hd0mH85/tech2.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/tpds8Jh/tech3.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/KjRDdr6/tech1.jpg" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-10  max-w-6xl'>
                {

                    products.map(product => <AllBrands2
                        key={product._id}
                        product={product}
                        products={products}
                        setProduct={setProduct}>

                    </AllBrands2>)


                }
            </div>

        </div>
    );
};

export default AllBrands;