import React, { useState } from 'react';
import Img from "../../../img/user.png";
import { HiThumbUp } from "react-icons/hi";

const ReviewCard = ({ review }) => {

    const [isClicked, setIsClicked] = useState(false);

    // ---> like 
    const like = () => {
        setIsClicked(!isClicked)
    }

    return (
        <div className="p-4 w-full">
            <div className="h-full bg-gray-100 p-8 rounded mb-1">
                <span className="inline-flex items-center">
                    <img alt="testimonial" src={review?.photoURL ? review?.photoURL : Img} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                    <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">{review?.userName ? review?.userName : "No Name"}</span>
                        <span className="text-sm text-rose-600">{review?.serviceTitle}</span>
                    </span>
                    <div className="icons_like flex gap-2 text-xl items-center">
                        <HiThumbUp onClick={() => like()} className={isClicked ? "text-rose-600" : "hover:text-rose-600"} />
                    </div>
                </span>
                <p className="leading-relaxed mb-6">{review.review}</p>
            </div>
        </div>

    );
};

export default ReviewCard;