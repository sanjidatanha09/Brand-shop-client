import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {

    const product = useLoaderData();

    const { _id, image, name, brandname, type, price, rating } = product;

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandname = form.brandname.value;
        const type = form.type.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const updateProduct = { image, name, brandname, type, price,  rating }

    

        //send data to the server 
        fetch(`http://localhost:5000/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })

                }
            })

    }

    return (
            <div className='mt-16 '>


                <div className='border text-gray-600 font-bold text-3xl max-w-4xl mx-auto text-center  p-12 bg-[#F4F3F0]'>
                    <h2 className='text-5xl font-bold text-gray-600 mb-5'>Update Product : {brandname}</h2>
                    <form onSubmit={handleUpdateProduct}>
                        <div className='flex justify-between items-center gap-6 '>
                            <div className="form-control  w-3/6">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <label className="input-group">

                                    <input type="text" defaultValue={image} name="image" placeholder="Image" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control w-3/6">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <label className="input-group">

                                <input type="text" defaultValue={name} name="name" placeholder="Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <div className='flex justify-between items-center gap-6'>
                            <div className="form-control w-3/6">
                                <label className="label">
                                    <span className="label-text">Brand Name</span>
                                </label>
                                <label className="input-group">

                                <input type="text" defaultValue={brandname} name="brandname" placeholder="Brand Name" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control w-3/6">
                                <label className="label">
                                    <span className="label-text">Type</span>
                                </label>
                                <label className="input-group">

                                <input type="text" defaultValue={type} name="type" placeholder="Type" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <div className='flex justify-between items-center gap-6'>
                            <div className="form-control w-3/6">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">

                                <input type="text" defaultValue={price} name="price" placeholder="Price" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control w-3/6">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <label className="input-group">

                                <input type="text" defaultValue={rating} name="rating" placeholder="Rating" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <div className='pt-10'>
                            <button className="btn btn-neutral ">Update Product</button>

                        </div>


                    </form>



                </div>
                <div className='pb-32'>

                </div>
            </div>
    
    );
};

export default Update;