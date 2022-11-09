import React from 'react';
import { HiTrash, HiPencilAlt } from "react-icons/hi";

const MyReviewCard = ({ myReVw, handleReviewDelete }) => {
    const { _id, userName, review, photoURL, serviceImg, serviceTitle } = myReVw;



    return (
        <div className="p-4 lg:w-1/2 shadow-lg">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={serviceImg} />
                <div className="flex-grow sm:pl-8">
                    <div className="card_header flex justify-between">
                        <div className="user_box flex gap-2">
                            <img alt="profil" src={photoURL} className="border-2 border-rose-600 object-cover rounded-full h-12 w-12 " />
                            <div className="user_info">
                                <h2 className="title-font font-medium text-lg text-gray-900">{userName}</h2>
                                <h3 className="text-gray-500 mb-3">{serviceTitle}</h3>
                            </div>
                        </div>
                        <span className="inline-flex text-2xl gap-2">
                            <HiPencilAlt className='hover:text-blue-600' />
                            <HiTrash onClick={() => handleReviewDelete(_id)} className='hover:text-rose-600' />
                        </span>
                    </div>
                    <p className="mb-4">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;