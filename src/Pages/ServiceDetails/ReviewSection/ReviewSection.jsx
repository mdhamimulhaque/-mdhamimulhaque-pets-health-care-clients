import React, { useContext, useEffect, useState } from 'react';
import { HiChevronDoubleRight } from "react-icons/hi";
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider';

import { Link, useLocation } from 'react-router-dom';
import ReviewCard from '../../Shared/ReviewCard/ReviewCard';

const ReviewSection = ({ service }) => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    const location = useLocation()


    // --->handle comment form
    const handleReviewForm = (e) => {
        e.preventDefault()
        const review = e.target.comment.value;
        const reviewInfo = {
            review: review,
            userName: user.displayName,
            userEmail: user.email,
            photoURL: user.photoURL,
            serviceId: service._id,
            serviceTitle: service.title,
            serviceImg: service.image_url

        }

        // ---> post || create review
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewInfo),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("review added successfully");
                    e.target.reset()
                }
            })
    }

    // ---> get service based review
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${service.title}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])


    return (
        <div>
            {
                user?.uid ?
                    <form onSubmit={handleReviewForm}>
                        <label htmlFor="chat" className="sr-only">Your Review</label>
                        <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
                            <textarea name="comment" id="chat" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500" placeholder={`Commenting publicly as ${user?.displayName}`}></textarea>
                            <button type="submit" className="inline-flex justify-center p-2 text-rose-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-rose-500 dark:hover:bg-gray-600">
                                <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                            </button>
                        </div>
                    </form>
                    : <Link to="/login" state={{ from: location }} replace>
                        <div className='bg-rose-600 text-white hover:bg-rose-700 flex justify-between items-center py-3 px-2'>
                            <h2 className='font-bold '>Please login to add a review</h2>
                            <HiChevronDoubleRight className='text-xl' />
                        </div>
                    </Link>
            }

            <div className="review_area">
                {
                    reviews.map(review => <ReviewCard
                        key={review._id}
                        service={service}
                        review={review}
                    />)
                }
            </div>


        </div>
    );
};

export default ReviewSection;