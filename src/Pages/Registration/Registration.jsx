import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';

const Registration = () => {
    const { createUser, setLoading, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    // ---> handle registration
    const handleRegistrationForm = (e) => {
        e.preventDefault()
        const form = e.target;
        const fullName = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // --->handle create user
        createUser(email, password)
            .then(res => {
                toast.success('Registration successfully');
                form.reset();
                setError('')
                handleUpdateUserProfile(fullName, photoURL);
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

    // ---> handle update user profile
    const handleUpdateUserProfile = (name, url) => {
        const profile = {
            displayName: name,
            photoURL: url
        }
        updateUserProfile(profile)
            .then(() => {
                console.log('profile updated')
            }).catch((error) => {
                console.error(error)
            });
    }



    return (
        <div>
            <div className="py-6">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div className="hidden lg:block lg:w-1/2 bg-cover bg-[url('https://img.freepik.com/free-photo/pretty-asian-housewife-carries-pedigree-dog-hands-expresses-love-pet-hugs-puppy-wears-casual-jumper-stands-with-furry-shiba-inu-isolated-pink-background_273609-34191.jpg?w=1380&t=st=1667937545~exp=1667938145~hmac=e959dc75f606ba034a0d0381be1b36e0d666b3089ccceb79a8f341526928aa17')]"></div>
                    <form onSubmit={handleRegistrationForm} className="w-full p-8 lg:w-1/2">
                        <h2 className="text-2xl font-semibold text-gray-700 text-center">Registration</h2>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                            <input name="fullName" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
                            <input name="photoURL" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
                            <input name="email" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                            <input name="password" className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                        </div>
                        <div className="mt-8">
                            <button type="submit" className="bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 px-4 w-full rounded ">Registration</button>
                        </div>
                        <p className='text-rose-600 text-sm my-1 text-center'>{error}</p>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <span className="text-xs text-gray-500 flex">Have account? <Link to="/login" className="text-rose-400 hover:text-rose-500 ml-1"> login</Link></span>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;