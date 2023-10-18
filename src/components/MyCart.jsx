import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { useLoaderData } from 'react-router-dom';

const MyCart = () => {

    const loadedProducts = useLoaderData();
    const [products, setProduct] = useState(loadedProducts);

    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <h1 className='text-center font-bold text-5xl p-10'>All Products:{products.length}</h1>
                <div className='grid md:grid-cols-2 gap-10 border max-w-6xl'>
                    {

                        products.map(product =><ProductCard
                        key={product._id}
                        product={product}
                        products={products}
                        setProduct={setProduct}>

                        </ProductCard>)

                       
                    }
                </div>
            </div>
        </div>
    );
};

export default MyCart;