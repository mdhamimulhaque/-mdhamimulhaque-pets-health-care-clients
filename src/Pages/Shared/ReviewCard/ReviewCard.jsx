import React, { useContext, useState } from 'react';
import Img from "../../../img/user.png";
import { HiThumbUp } from "react-icons/hi";
import { AuthContext } from '../../../context/AuthProvider';

const ReviewCard = ({ service }) => {
    const { user } = useContext(AuthContext);

    const [isClicked, setIsClicked] = useState(false);

    // ---> like 
    const like = () => {
        setIsClicked(!isClicked)
    }
    return (
        <div className="p-4 w-full">
            <div className="h-full bg-gray-100 p-8 rounded mb-1">
                <span className="inline-flex items-center">
                    <img alt="testimonial" src={user?.photoURL ? user?.photoURL : Img} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                    <span className="flex-grow flex flex-col pl-4">
                        <span className="title-font font-medium text-gray-900">{user?.displayName ? user?.displayName : "No Name"}</span>
                        <span className="text-sm text-rose-600">{service?.title}</span>
                    </span>
                </span>
                <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                <div className="icons_like flex gap-2 text-xl items-center">
                    <HiThumbUp onClick={() => like()} className={isClicked ? "text-rose-600" : "hover:text-rose-600"} />

                </div>
            </div>
        </div>

    );
};

export default ReviewCard;