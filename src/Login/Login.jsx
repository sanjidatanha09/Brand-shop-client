import React from 'react';
import { Link } from 'react-router-dom';
{/* signin r login same */ }

const Login = () => {
    return (
        <div className='mt-10 text-center pb-16'>
            <h1 className="text-5xl text-blue-500  font-bold mb-8">Login Here</h1>
            <div className='bg-blue-300 rounded-lg shadow-lg  lg:w-[600px] mx-auto h-[580px]'>
                <form  className='  card-body ' >


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
                            <input  name='password' placeholder="password" className="input input-bordered w-full" required />

                            {/* <span className='bottom-4 lg:bottom-[14px] right-4 absolute' onClick={() => setShowpassword(!showpassword)}>
                                {
                                    showpassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaEye></FaEye>
                                }

                            </span> */}

                        </div>





                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover font-bold text-blue-500">Forgot password?</a>
                        </label>

                    </div>


                    <div className="form-control mt-6">
                        <button className="btn text-white 	btn-info w-[200px] mx-auto text-2xl font-extrabold">Login</button>
                    </div>





                </form>
                <div className='text-center mt-5'>
                    <h2 className="text-lg mb-2 font-bold ">or Login With</h2>
                    <div className='flex  gap-5 justify-center items-center py-4'>
                        <button className='btn text-xl text-white 	btn-info font-bold btn-neutral'>
                            Google
                        </button>
                        <br />
                        <button className='btn text-white 	btn-info text-xl font-bold btn-neutral'>
                          Github
                        </button>

                    </div>


                </div>
                <p className='font-bold mb-3'>Dont have an account? <Link className='text-blue-600 font-bold' to="/registration">Register</Link> </p>
            </div>

        </div>
    );
};

export default Login;