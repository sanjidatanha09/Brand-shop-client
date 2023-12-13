import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllBrands2 = ({product}) => {

    const { _id, image, name, brandname, type, price, description, rating } = product;

    const handleDelete = _id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(` https://brand-shop-rhs6z662f-sanjida-tanhas-projects.vercel.app/product/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = products.filter(prod => prod._id !== _id);
                            setProduct(remaining);

                        }
                    })



            }


        });


    }

    return (

        <div>
           


            <div className="card card-side bg-base-100 shadow-xl ">
                <figure><img className='lg:w-[250px] h-[200px]' src={image} alt="Movie" /></figure>
                <div className=" flex justify-between   w-full ">
                    <div className='pl-10 pt-8'>
                        <h2 className="card-title text-sm lg:text-xl lg:font-bold">{name} </h2>
                        <p className='text-lg lg:text-xl lg:font-bold'>{brandname}</p>
                        <p className='text-lg lg:text-xl lg:font-bold'>{price}</p>
                        <p className='text-lg lg:text-xl lg:font-bold'>{type}</p>
                        <p className='text-lg lg:text-xl lg:font-bold'>{rating}</p>
                    </div>
                    <div className="card-actions justify-end pr-10 pt-10">
                        <div className="btn-group btn-group-vertical gap-5  ">
                            <Link to={`/btndetails/${_id}`}>
                                <button className="btn btn-info text-white">Details</button>
                            </Link>
                           
                            <Link to={`/update/${_id}`}>
                                <button className="btn btn-info text-white">Update</button>
                            </Link>

        
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default AllBrands2;