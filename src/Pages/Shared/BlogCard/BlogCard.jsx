import React from 'react';
import { FcNews } from "react-icons/fc";

const BlogCard = ({ blog }) => {
    return (
        <div className="my-10 py-10 border-t-8 border-rose-600 rounded-lg flex shadow-lg">
            <div className="w-1/3 pt-6 flex justify-center text-6xl lg:text-9xl">
                <FcNews />
            </div>
            <div className="w-full pt-9 pr-4">
                <h3 className="font-bold text-rose-600">{blog.title}</h3>
                <p className="py-4 text-sm text-gray-400">{blog.description}</p>
            </div>
        </div>
    );
};

export default BlogCard;