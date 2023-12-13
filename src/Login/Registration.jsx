import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers.jsx/AuthProvider';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBeer, FaRegEyeSlash, FaEye } from 'react-icons/fa';


const Registration = () => {

    const [registererror, setRegistererror] = useState('');
    const [showpassword, setShowpassword] = useState(false);

    const { createUser } = useContext(AuthContext);



    const handleRegistration = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setRegistererror('');

        if (password.length < 6) {
            setRegistererror('password is less than 6 characters');
            return;
        }

        else if (!/[A-Z]/.test(password)) {
            setRegistererror('shoult have atleast one capital letter');
            return;
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
            setRegistererror('please use spcecial character');
            return;
        }




        createUser(email, password)
            .then(result => {
                console.log(result.user);
                //new user has been created

                const createAt = result.user?.metadata?.creationTime;

                const user = { email, createAt: createAt };
                fetch(' https://brand-shop-rhs6z662f-sanjida-tanhas-projects.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log('user added success');
                            Swal.fire({
                                title: 'Success!',
                                text: 'user added successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })

                        }
                    })
            })
            .catch(error => {
                console.error(error)
                toast(error.message);

            })

    }


    return (
        <div>
            {/* signup or registration same */}

            <div className='mt-3 text-center pb-10'>
                <h1 className="text-5xl text-blue-500  font-bold pb-8">Register Here</h1>
                {
                    registererror && <p className=' text-black mb-5 text-xl font-semibold'>{registererror}</p>
                }

                <div className='bg-blue-300 rounded-lg shadow-lg  lg:w-[600px] mx-auto h-[640px]'>

                    <form onSubmit={handleRegistration} className=' card-body ' >

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold lg:text-2xl text-blue-500">Name</span>
                            </label>
                            <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold lg:text-2xl text-blue-500">Photo URL</span>
                            </label>
                            <input type="text" placeholder="photo url" name="photourl" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-3xl text-blue-500">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-3xl text-blue-500">Password</span>
                            </label>
                            {/* toggle use */}

                            <div className='relative'>
                                <input type={showpassword ? "text" : "password"} name='password' placeholder="password" className="input input-bordered w-full" required />

                                <span className='bottom-4 lg:bottom-[14px] right-4 absolute' onClick={() => setShowpassword(!showpassword)}>
                                    {
                                        showpassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaEye></FaEye>
                                    }

                                </span>

                            </div>





                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font-bold text-blue-500">Forgot password?</a>
                            </label>

                        </div>


                        <div className="form-control mt-6">
                            <button className="btn text-white 	btn-info w-[200px] mx-auto text-2xl font-extrabold">Register</button>
                        </div>





                    </form>

                    <p className='font-bold mb-3'>Dont have an account? <Link className='text-blue-600 font-bold' to="/login">Login</Link> </p>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default Registration;