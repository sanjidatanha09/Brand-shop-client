import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyCart2 = ({ product, products, setProduct }) => {
    const { _id, image, name, brandname, type, price, description, rating } = product;
    

    const handleDelete = _id => {
        console.log(_id)

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

                fetch(`http://localhost:5000/card/${_id}`, {
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
           <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img className='w-full h-[250px]' src={image} alt="Shoes" /></figure>
                <div className="card-body ">
                    <h2 className="card-title lg:text-2xl font-bold text-gray-700 pl-5">{name}</h2>
                    <p className='font-bold pl-5 lg:text-2xl text-gray-600'>{description}</p>
                    <p className='font-bold pl-5 lg:text-2xl text-gray-600'>{price}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleDelete(_id)} className="btn btn-info text-white font-bold my-5 py-2 px-7">Delete</button>
                    </div>
                </div>
            </div>

        </div>
     
    );
};

export default MyCart2;