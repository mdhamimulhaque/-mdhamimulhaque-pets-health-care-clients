import React, { useContext, useState } from 'react';
import { HiThumbUp } from "react-icons/hi";
import { toast } from 'react-toastify';
import { AuthContext } from '../../../context/AuthProvider';

const ReviewSection = ({ service }) => {
    const { user } = useContext(AuthContext);


    const [isClicked, setIsClicked] = useState(false);

    // ---> like 
    const like = () => {
        setIsClicked(!isClicked)
    }
    // --->handle comment form
    const handleReviewForm = (e) => {
        e.preventDefault()
        const review = e.target.comment.value;
        const reviewInfo = {
            review: review,
            userName: user.displayName,
            photoURL: user.photoURL,
            serviceId: service._id,
            serviceTitle: service.title

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

    return (
        <div>
            <form onSubmit={handleReviewForm}>
                <label htmlFor="chat" className="sr-only">Your message</label>
                <div className="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
                    <textarea name="comment" id="chat" rows="1" className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500" placeholder={`Commenting publicly as ${user?.displayName}`}></textarea>
                    <button type="submit" className="inline-flex justify-center p-2 text-rose-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-rose-500 dark:hover:bg-gray-600">
                        <svg className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                    </button>
                </div>
            </form>

            <div className="p-4 w-full">
                <div className="h-full bg-gray-100 p-8 rounded mb-1">
                    <a className="inline-flex items-center">
                        <img alt="testimonial" src={user?.photoURL} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                        <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">{user?.displayName}</span>
                            <span className="text-sm text-rose-600">{service?.title}</span>
                        </span>
                    </a>
                    <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                    <div className="icons_like flex gap-2 text-xl items-center">
                        <HiThumbUp onClick={() => like()} className={isClicked ? "text-rose-600" : "hover:text-rose-600"} />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReviewSection;