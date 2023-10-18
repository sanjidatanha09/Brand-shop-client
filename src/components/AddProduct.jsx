import React from 'react';

const AddProduct = () => {
    return (
        <div className='mt-24 '>


            <div className='border text-gray-600 font-bold text-3xl max-w-4xl mx-auto text-center  p-16 bg-[#F4F3F0]'>
                <h2 className='text-5xl font-bold text-gray-600 mb-10'>Add a Product</h2>
                <form >
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
                    <div className='flex justify-between items-center gap-6'>
                        <div className="form-control w-3/6">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">

                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control w-3/6">
                            <label className="label">
                                <span className="label-text">Add button</span>
                            </label>
                            <label className="input-group">

                                <input type="text" placeholder="Add button" name="button" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                </form>
               
            </div>
            <div className='pb-32'>

            </div>
        </div>
    );
};

export default AddProduct;