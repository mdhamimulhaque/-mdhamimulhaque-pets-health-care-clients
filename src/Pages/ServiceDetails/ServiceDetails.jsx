import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import "./ServicesDetails.css";
import { HiStar } from "react-icons/hi";
import PageHeader from '../Shared/PageHeader/PageHeader';
import ReviewSection from './ReviewSection/ReviewSection';
import useTitle from '../../hooks/useTitle';



const ServiceDetails = () => {
    const service = useLoaderData();
    useTitle('Service Details')
    const { _id, title, price, rating, image_url, details } = service;

    return (
        <>
            <PageHeader title={title} />
            <div className="max-w-screen-xl mx-auto">
                <main className="mt-10">

                    <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ 'height': '24em' }}>
                        <div className="absolute left-0 bottom-0 w-full h-full z-10 overlay" ></div>
                        <img src={image_url} className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
                        <div className="p-4 absolute bottom-0 left-0 z-20">
                            <span
                                className="px-4 py-1 bg-rose-600 text-gray-200 inline-flex items-center justify-center mb-2">Price ${price}</span>
                            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                                {title}
                            </h2>
                            <p className="font-semibold mt-3 text-gray-200 text-sm flex gap-1 items-center">Rating : {rating} <HiStar /></p>

                        </div>
                    </div>

                    <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                        {details}
                    </div>

                    <div className="review_area w-full max-w-screen-md mx-auto py-6">
                        <ReviewSection service={service} />
                    </div>
                </main>
            </div>
        </>

    );
};

export default ServiceDetails;