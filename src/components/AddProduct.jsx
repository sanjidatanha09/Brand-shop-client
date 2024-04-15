import React from 'react';
import Swal from 'sweetalert2'

const AddProduct = () => {
    const handleAddProduct = event =>{
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandname = form.brandname.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const newProduct= {image, name, brandname,type,price,description,rating}
        //send data to the server 
        fetch(' https://brand-shop-rhs6z662f-sanjida-tanhas-projects.vercel.app/product',{
            method:'POST',
            headers : {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
        })
    }

    return (
        <div className='mt-16'>
            <div className='border text-gray-600 font-bold text-3xl max-w-4xl mx-auto text-center  p-12 bg-[#F4F3F0]'>
                <h2 className='text-5xl font-bold text-gray-600 mb-5'>Add a Product</h2>
                <form onSubmit={handleAddProduct}>
                    <div className='flex justify-between items-center gap-6 '>
                        <div className="form-control  w-3/6">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="Image" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-3/6">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-6'>
                        <div className="form-control w-3/6">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brandname" placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-3/6">
                            <label className="label">
                                <span className="label-text">Type</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <div className='flex justify-between items-center gap-6'>
                        <div className="form-control w-3/6">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-3/6">
                            <label className="label">
                                <span className="label-text">Short description</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="description" placeholder="Short description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='pt-10'>
                        <button className="btn btn-neutral ">Add Product</button>

                    </div>
                </form>
            </div>
            <div className='pb-32'>
            </div>
        </div>
    );
};

export default AddProduct;