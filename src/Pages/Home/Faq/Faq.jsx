import React from 'react';

const Faq = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                    <p className="p-2 text-sm font-medium tracking-wider text-rose-600 uppercase">Faq</p>
                    <h2 className="mb-12 text-4xl font-bold leading-none sm:text-5xl">Get Every Answer
                        From Here</h2>
                    <div className="flex flex-col divide-y ">
                        <details className='shadow-lg px-2 py-4'>
                            <summary className="py-2 outline-none cursor-pointer font-semibold ">What types of foods do you have on hand??</summary>
                            <div className="px-4 pb-4">
                                <p>Regular formula is fed to the dogs and cats in our care. CarePress is a high-quality food that comes in dry and canned forms, with the option of.</p>
                            </div>
                        </details>
                        <details className='shadow-lg px-2 py-4'>
                            <summary className="py-2 outline-none cursor-pointer font-semibold ">What should I bring with me for my pet’s boarding stay?</summary>
                            <div className="px-4 pb-4">
                                <p>There is no need to bring anything with you. Food, stainless steel dishes, and beds are all provided. Please do not bring any dishes from home. After each meal.</p>
                            </div>
                        </details>
                        <details className='shadow-lg px-2 py-4'>
                            <summary className="py-2 outline-none cursor-pointer font-semibold">What Should I Expect Before My Pet Has Surgery?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>We withhold food from all dogs and cats after 8:00 p.m. the night before surgery. Food is withheld so that if the pet vomits while sedated, the food. </p>
                            </div>
                        </details>
                        <details className='shadow-lg px-2 py-4'>
                            <summary className="py-2 outline-none cursor-pointer font-semibold">Are there any benefits of Pet Day Care?</summary>
                            <div className="px-4 pb-4 space-y-2">
                                <p>It will not only provide you with a safe place in which to raise your dog, but it will also aid in their socialization and help them stay fit.</p>
                            </div>
                        </details>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://img.freepik.com/free-photo/red-white-cat-i-white-studio_155003-13189.jpg?w=740&t=st=1667889004~exp=1667889604~hmac=1a82d58f88514bc85106910c2feb273f7c850036f07b21fa60d7d77d24626054"
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://img.freepik.com/free-photo/beagle-dog-sitting-with-white-background_53876-30186.jpg?w=900&t=st=1667888973~exp=1667889573~hmac=e71504562ed03355b1be8229453dadb465c25b033f633d894eaa46be8ae49d43"
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="https://img.freepik.com/free-photo/beautiful-shot-different-dog-breeds-resting_181624-19887.jpg?w=996&t=st=1667888998~exp=1667889598~hmac=9f23cec16d65699ac183847efa6a48f2e0fe0e7aa7219a1826e36955262f4038"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;