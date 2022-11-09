import React from 'react';
import { HiTrash, HiPencilAlt } from "react-icons/hi";

const MyReviews = () => {
    return (
        <div>
            <div className="delete_update_btn flex items-center gap-2">
                <HiPencilAlt className='hover:text-blue-600' />
                <HiTrash className='hover:text-rose-600' />
            </div>
        </div>
    );
};

export default MyReviews;