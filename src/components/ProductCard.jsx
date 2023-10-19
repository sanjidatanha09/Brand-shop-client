import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ProductCard = ({ product, products, setProduct }) => {
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
                
                fetch(`http://localhost:5000/product/${_id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data);
                    if(data.deletedCount >0){
                        Swal.fire(
                            'Deleted',
                            'Your file has been deleted.',
                            'success'
                        )
                        const remaining = products.filter(prod =>prod._id !== _id);
                        setProduct(remaining);

                    }
                })

               

            }


        });


    }

    return (
        <div className='max-w-6xl mx-auto  lg:w-full'>
            <cart className="card card-side bg-base-100 shadow-xl ">
                <figure><img className='lg:w-[200px] h-[200px]' src={image} alt="Movie" /></figure>
                <div className=" flex justify-between   w-full ">
                    <div className='pl-10 pt-8'>
                        <h2 className="card-title text-sm lg:text-xl">Name: {name} </h2>
                        <p className='text-lg lg:text-2xl lg:font-bold'>{brandname}</p>
                        <p className='text-lg lg:text-2xl lg:font-bold'>{price}</p>
                    </div>
                    <div className="card-actions justify-end pr-10 pt-4">
                        <div className="btn-group btn-group-vertical gap-3 ">
                            <button className="btn">Details</button>
                            <Link to={`/update/${_id}`}>
                                <button className="btn">Update</button>
                            </Link>
                           
                            <button onClick={() => handleDelete(_id)} className="btn">Delete</button>
                        </div>

                    </div>
                </div>
            </cart>
        </div>
    );
};

export default ProductCard;