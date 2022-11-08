import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className=" py-10 bg-base-200 ">
            <div className="why_choose_us_wrapper px-6 container mx-auto">
                <h1 className="text-3xl font-bold capitalize text-rose-600 lg:text-5xl dark:text-white">Why Choose Us!</h1>
                <p className="py-6 lg:pr-80">We've been setting new standards for pet-care facilities. Individual suites are offered in all CarePress locations, and they are spotless and climate controlled, with excellent food, bedding, and a broad variety of tailored activities and services. You can rest assured that your dog is in the best, most qualified hands in the industry with CarePress.</p>

                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src="https://img.freepik.com/free-photo/young-woman-park-with-her-white-dog_1303-11499.jpg?w=1380&t=st=1667886214~exp=1667886814~hmac=7148097799ee9a3d03a4258e95fb4d67b68926079478115a390807f9e63fdc70" className="max-w-sm rounded-lg shadow-2xl w-full" />
                        <div>

                            <div className="timeLine">
                                <section>
                                    <div className="container max-w-5xl px-4 py-12 mx-auto">
                                        <div className="grid gap-4 mx-4 sm:grid-cols-12">
                                            <div className="col-span-12 sm:col-span-3">
                                                <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                                                    <h3 className="text-3xl font-semibold">Our Bests</h3>
                                                    <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Vestibulum diam nunc</span>
                                                </div>
                                            </div>
                                            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                                                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                                        <h3 className="text-xl font-semibold tracking-wide">Care for Puppy</h3>
                                                        <p className="mt-3">We strongly advise you to take advantage of our extremely affordable annual</p>
                                                    </div>
                                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                                        <h3 className="text-xl font-semibold tracking-wide">Dental Care</h3>
                                                        <p className="mt-3">Dental disease is the most commonly neglected chronic infection in our pets.</p>
                                                    </div>
                                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                                        <h3 className="text-xl font-semibold tracking-wide">14yr Experience</h3>
                                                        <p className="mt-3">With us pet care professionals are passionate, well-trained, and pleasant animal.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default WhyChooseUs;