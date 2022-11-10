import React from 'react';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import PageHeader from '../Shared/PageHeader/PageHeader';

const AddService = () => {
    useTitle('Add Service')
    const handleCreateService = (e) => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const image_url = form.image_url.value;
        const details = form.details.value;

        const service = { title, price, rating, image_url, details }

        fetch(`https://pets-health-care-server-mdhamimulhaque.vercel.app/services`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset();
                }
            })
    }

    return (
        <div>
            <PageHeader title={'Add Service'} />

            <div className="w-full">
                <div className="bg-gradient-to-b from-rose-600 to-rose-800 h-96"></div>
                <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
                    <div className="bg-white w-full shadow rounded p-8 sm:p-12 -mt-72">
                        <p className="text-3xl font-bold leading-7 text-center">Add New Service</p>
                        <form onSubmit={handleCreateService}>
                            <div className="md:flex items-center mt-12">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="font-semibold leading-none">Price</label>
                                    <input name="price" type="number" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-rose-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                    <label className="font-semibold leading-none">Rating</label>
                                    <input name="rating" type="number" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-rose-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                </div>
                            </div>
                            <div className="md:flex items-center mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none">Image URL</label>
                                    <input name="image_url" type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-rose-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                </div>
                            </div>

                            <div className="md:flex items-center mt-8">
                                <div className="w-full flex flex-col">
                                    <label className="font-semibold leading-none">Title</label>
                                    <input name="title" type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-rose-700 mt-4 bg-gray-100 border rounded border-gray-200" />
                                </div>
                            </div>

                            <div>
                                <div className="w-full flex flex-col mt-8">
                                    <label className="font-semibold leading-none">Description</label>
                                    <textarea name="details" type="text" className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-rose-700 mt-4 bg-gray-100 border rounded border-gray-200"></textarea>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-rose-600 rounded hover:bg-rose-700 focus:ring-2 focus:ring-offset-2 focus:ring-rose-600 focus:outline-none">
                                    Add Service
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddService;