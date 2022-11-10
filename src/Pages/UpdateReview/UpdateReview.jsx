import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthProvider';
import useTitle from '../../hooks/useTitle';
import PageHeader from '../Shared/PageHeader/PageHeader';

const UpdateReview = () => {
    useTitle('Update Review');
    const myReVw = useLoaderData();
    const { user } = useContext(AuthContext)
    const [reviewItemUpdate, setReviewItemUpdate] = useState('');
    const { _id, userEmail, userName, review, photoURL, serviceImg, serviceTitle } = myReVw;


    const handleReviewUpdate = (e) => {
        e.preventDefault();

        const reviewInfo = {
            review: reviewItemUpdate,
            serviceImg,
            userName,
            photoURL,
            serviceTitle,
            userEmail,
        }
        // console.log(reviewInfo)

        fetch(`http://localhost:5000/my-reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Review Update Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }

    const handleUpdateReviewChange = (e) => {
        const review = e.target.value;
        setReviewItemUpdate(review);
    }

    return (
        <>
            <PageHeader title={'Update Review'} />
            <div className="flex py-20 items-center justify-start bg-white">
                <div className="mx-auto w-full max-w-lg">
                    <h1 className="text-4xl font-medium">Update Review</h1>
                    <div className="user_box flex gap-2 my-4 items-center">
                        <img alt="profil" src={photoURL} className="border-2 border-rose-600 object-cover rounded-full h-12 w-12 " />
                        <div className="user_info">
                            <h2 className="title-font font-medium text-lg text-gray-900">{userName}</h2>
                        </div>
                    </div>

                    <form>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div className="relative z-0 col-span-2">
                                <input name="serviceTitle" defaultValue={serviceTitle} rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-rose-600 focus:outline-none focus:ring-0" placeholder=" " readOnly></input>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-rose-600 peer-focus:dark:text-rose-500">Title</label>
                            </div>
                            <div className="relative z-0 col-span-2">
                                <textarea onChange={handleUpdateReviewChange} defaultValue={review} name="review" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-rose-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-rose-600 peer-focus:dark:text-rose-500">Your Review</label>
                            </div>
                        </div>
                        <button onClick={handleReviewUpdate} type="submit" className="mt-5 rounded-md bg-rose-600 hover:bg-rose-700 px-10 py-2 text-white">Update Review</button>
                    </form>
                </div>
            </div></>

    );
};

export default UpdateReview;