import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const BtnDetails = () => {
    const product = useLoaderData();

    const { _id, image, name, brandname, type, price, description, rating } = product || {}
    console.log(product)

    const newCart = { _id, image, name, brandname, type, price, description, rating }

    const handleAddToMyCart = () =>{

        //send data to the server

        fetch('http://localhost:5000/card',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCart)

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            try {
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'Successfully added!',
                        'success'
                    )
                }
            } catch (error) {
                return Swal.fire("Warning", "This item is already in your Cart So please restart the server and try to add another product", "warning");

            }
        })

    }





    return (
        <div className='max-w-6xl mx-auto pb-48 mt-10'>
            <div className="card lg:w-96 mx-auto bg-base-100 shadow-xl ">
                <figure><img className='w-full h-[250px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-xl text-gray-600">{name}</h2>
                    <p className='font-bold text-xl text-gray-600'>{brandname}</p>
                    <p className='font-bold text-xl text-gray-600'>{description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleAddToMyCart} className="btn btn-info text-white font-bold">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BtnDetails;