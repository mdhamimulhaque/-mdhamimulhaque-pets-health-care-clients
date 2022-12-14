import React from 'react';

const PriceTable = () => {
    const packageInfo = [
        {
            id: '1',
            name: 'All Time',
            price: 'Free',
            description: 'making this the first true generator on the Internet. It uses a dictionary of over',
            services: [
                'State And Federal Postings',
                '24/7 Customer Support',
                'State And Federal Postings',
                'Free Equipment Use'
            ]
        },
        {
            id: '2',
            name: 'Monthly',
            price: '80.00$',
            description: 'making this the first true generator on the Internet. It uses a dictionary of over',
            services: [
                'State And Federal Postings',
                '24/7 Customer Support',
                'State And Federal Postings',
                'Free Equipment Use',
            ]
        },
        {
            id: '3',
            name: 'Yearly',
            price: '700$',
            description: 'making this the first true generator on the Internet. It uses a dictionary of over',
            services: [
                'State And Federal Postings',
                '24/7 Customer Support',
                'State And Federal Postings',
                'Free Equipment Use'
            ]
        }
    ]
    return (
        <section className="py-20">
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto mb-16 text-center">
                    <span className="font-bold tracking-wider uppercase">Pricing</span>
                    <h2 className="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
                </div>
                <div className="flex flex-wrap items-stretch -mx-4">
                    {
                        packageInfo?.map(packData =>
                            <div className="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0 bg-orange-100 hover:bg-orange-200">
                                <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 ">
                                    <div className="space-y-2">
                                        <h4 className="text-2xl font-bold">{packData?.name}</h4>
                                        <span className="text-6xl font-bold">{packData?.price}</span>
                                    </div>
                                    <p className="mt-3 leading-relaxed ">{packData?.description}</p>
                                    <ul className="flex-1 mb-6 ">
                                        {
                                            packData?.services.map(service =>
                                                <li className="flex mb-2 space-x-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>{service}</span>
                                                </li>
                                            )
                                        }

                                    </ul>
                                    <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-rose-400 hover:bg-rose-700 hover:shadow-lg duration-300 transition text-white">Get Started</button>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default PriceTable;