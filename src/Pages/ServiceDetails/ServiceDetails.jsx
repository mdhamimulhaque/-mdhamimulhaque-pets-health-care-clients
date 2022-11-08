import React from 'react';
import { useLoaderData } from 'react-router-dom';
import "./ServicesDetails.css";
import { HiStar } from "react-icons/hi";
import PageHeader from '../Shared/PageHeader/PageHeader';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { _id, title, price, rating, image_url, details } = service;
    console.log(service)
    return (
        <>
            <PageHeader title={title} />
            <div class="max-w-screen-xl mx-auto">
                <main class="mt-10">

                    <div class="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ 'height': '24em' }}>
                        <div class="absolute left-0 bottom-0 w-full h-full z-10 overlay" ></div>
                        <img src={image_url} class="absolute left-0 top-0 w-full h-full z-0 object-cover" />
                        <div class="p-4 absolute bottom-0 left-0 z-20">
                            <span
                                class="px-4 py-1 bg-rose-600 text-gray-200 inline-flex items-center justify-center mb-2">Price ${price}</span>
                            <h2 class="text-4xl font-semibold text-gray-100 leading-tight">
                                {title}
                            </h2>
                            <p class="font-semibold mt-3 text-gray-200 text-sm flex gap-1 items-center">Rating : {rating} <HiStar /></p>

                        </div>
                    </div>

                    <div class="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                        {details}
                    </div>
                </main>
            </div>
        </>

    );
};

export default ServiceDetails;