import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BrandName = ({ product }) => {
    const { id, brandname, image } = product || {}

    // const brands = useLoaderData();
    // console.log(brands)
    // const [branddata, setBranddata] = useState(brands);

    

    return (
        <div>
            <Link to={`/allbrand/${brandname}`}>
                <div className="card card-compact bg-gray-400 shadow-xl">
                    <figure><img className='w-full h-[200px]' src={image} alt="Shoes" /></figure>
                    <div className="card-body text-right w-[400px] mx-auto">
                        <h2 className="card-title py-5 text-3xl font-bold ">{brandname}</h2>
                        <div className='w-[280px]  text-right'>
                            <button className='w-[100px]  btn btn-neutral '>Click</button>

                        </div>



                    </div>
                </div>

            </Link>

        </div>
    );
};

export default BrandName;