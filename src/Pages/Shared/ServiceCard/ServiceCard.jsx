import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = () => {
    return (
        <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
            <div className="mb-12 space-y-4">
                <h3 className="text-2xl font-semibold text-rose-600">Graphic Design</h3>
                <div className="price_rating_area flex justify-between">
                    <span>price: ${500}</span>
                    <span>Rating: 4.5</span>
                </div>
                <p className="mb-6">Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.</p>
                <Link to="/services" className="block font-medium text-rose-600">View Details</Link>
            </div>
            <img src="https://tailus.io/sources/blocks/end-image/preview/images/graphic.svg" className="w-2/3 ml-auto -mb-12" alt="illustration" loading="lazy" width="900" height="600" />
        </div>
    );
};

export default ServiceCard;