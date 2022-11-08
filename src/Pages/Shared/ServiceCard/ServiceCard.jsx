import React from 'react';
import { Link } from 'react-router-dom';
import { HiChevronDoubleRight } from "react-icons/hi";

const ServiceCard = ({ service }) => {
    const { _id, title, price, rating, image_url, details } = service;
    return (
        <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
            <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-rose-600">{title}</h3>
                <div className="price_rating_area flex justify-between">
                    <span className='font-bold'>Price: ${price}</span>
                    <span>Rating: {rating}</span>
                </div>
                <p className="mb-6">{details.slice(0, 100)}...</p>
                <Link to={`/services/${_id}`} className="block font-medium text-rose-600 flex gap-2 items-center">
                    View Details <HiChevronDoubleRight /></Link>
            </div>
            <img src={image_url} className="w-full ml-auto -mb-12 rounded-tl-lg rounded-tr-lg" alt="illustration" loading="lazy" width="900" height="600" />
        </div>
    );
};

export default ServiceCard;