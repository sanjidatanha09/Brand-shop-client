import React from 'react';

const SomeProduct = () => {
    return (
        <div className='bg-gray-300'>
           

            <div className='gap-5 grid  lg:grid-cols-4 px-10 my-10 py-20 text-center'>
                <div className=''>
                    <img src="" alt="" />
                    <h1 className='text-3xl font-bold text-gray-700'>Elementor</h1>
                    <p className='text-xl text-gray-600'>Build pages by drag-&-dropping elements & view changes on the fly. Elementor compatible.</p>
                </div>

                <div className=''>
                    <img src="" alt="" />
                    <h1 className='text-3xl font-bold text-gray-700'>1-click Import</h1>
                    <p className='text-xl text-gray-600'>You can import the entire demo content with just a single click of your mouse & customize away.</p>
                </div>

                <div className=''>
                    <img src="" alt="" />
                    <h1 className='text-3xl font-bold text-gray-700'>Customization</h1>
                    <p className='text-xl text-gray-600'>Cyberdom’s powerful user admin lets you adapt any site element in a clear & intuitive manner.</p>
                </div>
                <div className=''>
                    <img src="" alt="" />
                    <h1 className='text-3xl font-bold text-gray-700'>Help Center</h1>
                    <p className='text-xl text-gray-600'>If you run into any questions, browse our knowledge base or reach out to our support team.</p>
                </div>

            </div>
        </div>
    );
};

export default SomeProduct;