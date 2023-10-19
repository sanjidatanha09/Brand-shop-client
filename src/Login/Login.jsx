import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers.jsx/AuthProvider';
import { FaGithub, FaGofore } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBeer, FaRegEyeSlash, FaEye } from 'react-icons/fa';
{/* signin r login same */ }

const Login = () => {

    const [showpassword, setShowpassword] = useState(false);

    const { googleSignIn } = useContext(AuthContext)
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    console.log('location login page', location)

    const handleGoogle = () => {
        googleSignIn().then(result => {
            console.log(result.user)
        });
    };
    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user)

                
                //navigate after login

                navigate(location?.state ? location.state : '/')
                toast('user created successfully');
            })
            .catch(error => {
                console.error(error);
                toast(error.message);
            })


    }



    return (
        <div className='mt-10 text-center pb-16'>
            <h1 className="text-5xl text-blue-500  font-bold mb-8">Login Here</h1>
            <div className='bg-blue-300 rounded-lg shadow-lg  lg:w-[600px] mx-auto h-[580px]'>
                <form onSubmit={handleLogin} className='  card-body ' >


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
                        <button className="btn text-white 	btn-info w-[200px] mx-auto text-2xl font-extrabold">Login</button>
                    </div>





                </form>
                <div className='text-center mt-5'>
                    <h2 className="text-lg mb-2 font-bold ">or Login With</h2>
                    <div className='flex  gap-5 justify-center items-center py-4'>
                        <button onClick={handleGoogle} className='btn text-xl font-bold btn-info text-white'>
                            <FaGofore></FaGofore>Google
                        </button>
                        <br />
                        <button className='btn text-xl font-bold  text-white btn-info'>
                            <FaGithub></FaGithub>Github
                        </button>

                    </div>


                </div>
                <p className='font-bold mb-3'>Dont have an account? <Link className='text-blue-600 font-bold' to="/registration">Register</Link> </p>
            </div>

            <ToastContainer />

        </div>
    );
};

export default Login;