import React, { useState } from 'react';
import MyCart2 from './MyCart2';
import { useLoaderData } from 'react-router-dom';

const MyCart = () => {
    const loadedProducts = useLoaderData();
    console.log(loadedProducts)
    const [products, setProduct] = useState(loadedProducts);

    return (
        <div>
            <div className='max-w-6xl mx-auto pb-40'>
                <h1 className='text-center font-bold text-xl text-gray-600 lg:text-2xl lg:text-5xl p-10'>All Products:{products.length}</h1>
                <div className='grid md:grid-cols-2 gap-10  max-w-6xl'>
                    {

                        products.map(product => <MyCart2
                            key={product._id}
                            product={product}
                            products={products}
                            setProduct={setProduct}>

                        </MyCart2>)


                    }
                </div>
            </div>
        </div>
    );
};

export default MyCart;