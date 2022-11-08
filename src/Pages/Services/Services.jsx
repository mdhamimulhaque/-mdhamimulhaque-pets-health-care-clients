import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PageHeader from '../Shared/PageHeader/PageHeader';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';

const Services = () => {
    const { result } = useLoaderData();

    return (
        <>
            <PageHeader />
            <section>
                <div className="bg-gray-100 sm:grid grid-cols-5  px-4 py-6 min-h-full lg:min-h-screen space-y-6 sm:space-y-0 sm:gap-4">

                    <div className=" col-span-4 rounded-md ">
                        <div className="grid grid-cols-1 gap-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 w-full">
                            {
                                result.map(service => <ServiceCard
                                    key={service._id}
                                    service={service}
                                />)
                            }
                        </div>

                    </div>
                    <div className="h-96 col-span-1">
                        <div className="bg-white py-3 px-4 rounded-lg flex justify-around items-center ">
                            <input type="text" placeholder="seach" className=" bg-gray-100 rounded-md  outline-none pl-2 ring-indigo-700 w-full mr-2 p-2" />
                            <span><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor ">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg></span>
                        </div>
                        <div className="bg-white  rounded-md">

                            <h1 className="text-center text-xl my-4 font-semibold bg-white py-2 rounded-md border-b-2 cursor-pointer  text-gray-600">Services</h1>
                            <div className="bg-white rounded-md list-none  text-center ">
                                {
                                    result.map(service =>
                                        <li key={service._id} className="py-3 border-b-2"><Link to={`/services/${service._id}`} className="list-none  hover:text-rose-600">{service.title}</Link></li>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>

    );
};

export default Services;