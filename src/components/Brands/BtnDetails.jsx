import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BtnDetails = () => {
    const product = useLoaderData();

    const { _id, image, name, brandname, type, price, description, rating } = product || {}

    const handleAddToMyCart = () =>{

    }


    return (
        <div className='max-w-6xl mx-auto pb-48 mt-10'>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <figure><img className='w-full h-[250px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{brandname}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleAddToMyCart} className="btn btn-info text-white font-bold">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BtnDetails;