import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../Shared/ServiceCard/ServiceCard';
import Faq from './Faq/Faq';
import HeroSection from './HeroSection/HeroSection';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';

const Home = () => {
    const [services, setServices] = useState([]);
    const [limit, setLimit] = useState(3);
    useTitle('Home')

    useEffect(() => {
        fetch(`https://pets-health-care-server-mdhamimulhaque.vercel.app/services?limit=${limit}`)
            .then(res => res.json())
            .then(data => {
                setServices(data.service3);
            })
    }, [limit])

    return (
        <div>
            <HeroSection />
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-bold capitalize text-rose-600 lg:text-5xl dark:text-white">My Services</h1>
                    <h2 className="text-3xl font-semibold text-gray-800 capitalize lg:text-5xl dark:text-white"> I Care Because<span className="underline decoration-rose-500"> You Care</span></h2>

                    <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
                        I offer quick & easy services for cats and dogs, accumsan felis id, fermentum purus. Quisque vitae hendrerit elit
                    </p>

                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        {
                            services.map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            />)
                        }

                    </div>
                    <div className="see_all_service_btn text-center mt-10">
                        <Link to='/services'>
                            <button
                                className=" rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                See All Services
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="why_choose_us">
                <WhyChooseUs />
            </section>

            <div className="faq_area">
                <Faq />
            </div>
        </div>
    );
};

export default Home;