import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { googleLogIn, setLoading, logIn } = useContext(AuthContext);
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // ---> provider
    const googleProvider = new GoogleAuthProvider();


    // ---> handle google login
    const handleGoogleLogIn = () => {
        googleLogIn(googleProvider)
            .then(res => {
                toast.success('login successfully');
                setError('');
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err)
                toast.error(err.message);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }


    // ---> handle email-pass login
    const handleEmailPassLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(res => {
                const user = res.user;
                setError('');
                form.reset();
                navigate(from, { replace: true });

            })
            .catch(err => {
                console.error(err)
                toast.error(err.message);
                setError(err.message);
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div>
            <div className="bg-no-repeat bg-cover bg-center relative bg-[url('https://img.freepik.com/free-photo/love-tender-warm-feeling-understanding-without-words-cheerful-korean-woman-receives-kiss-from-two-pedigree-puppies-cannot-imagine-life-without-pets-has-fun-with-animal-best-friends_273609-34197.jpg?w=1380&t=st=1667931232~exp=1667931832~hmac=e79812bfa95244418b097f9a6fb26c2da84f1b6ecfd728b7aaa3dab4164f826a')]"><div className="absolute bg-gradient-to-b from-rose-500 to-rose-400 opacity-75 inset-0 z-0"></div>
                <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                    <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                        <div className="self-start hidden lg:flex flex-col  text-white">
                            <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome <br />Pets Health Care </h1>
                            <p className="pr-3">We offer quick & easy services for cats and dogs.</p>
                        </div>
                    </div>
                    <div className="flex justify-center self-center z-10 pb-6">
                        <div className="p-12 bg-white mx-auto rounded-2xl w-100 z-10">
                            <div className="mb-4">
                                <h3 className="font-semibold text-2xl text-gray-800">Log In </h3>
                                <p className="text-gray-500">Please Log in to your account.</p>
                            </div>

                            <form onSubmit={handleEmailPassLogin} className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                    <input name='email' className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-rose-400" type="email" placeholder="Your Email" />
                                </div>
                                <div className="space-y-2">
                                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                                        Password
                                    </label>
                                    <input name="password" className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-rose-400" type="password" placeholder="Enter your password" />
                                </div>
                                <p className='text-rose-600 text-sm'>{error}</p>
                                <div className="text-sm">
                                    New here? Please<Link to="/registration" className="text-rose-400 hover:text-rose-500"> Registration</Link>
                                </div>
                                <div>
                                    <button type="submit" className=" bg-rose-400  hover:bg-rose-500 text-gray-100 w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md mb-4">
                                        Log in
                                    </button>

                                </div>
                            </form>
                            <button onClick={handleGoogleLogIn} className="flex flex-wrap items-center justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                                <FcGoogle className='text-lg mr-2 text-center my-1' />
                                Sign in with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;