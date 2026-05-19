import React from 'react';
import { RiDoubleQuotesL } from 'react-icons/ri';

const ReviewCard = ({ review }) => {
    const { userName, review: testimonial, user_photoURL } = review;
    return (
        <div className="card bg-base-100 shadow-lg rounded-2xl p-6 max-w-sm w-full">
            {/* Quote Icon */}
            <RiDoubleQuotesL className="text-primary text-2xl mb-3" />

            {/* Quote Text */}
            <p className="mb-4">
                {testimonial}
            </p>

            {/* Divider */}
            <div className="border-t border-dashed border-base-300 mb-4" />

            {/* Author */}
            <div className="flex items-center gap-3">
                <div className="w-10 h10 rounded-full bg-primary">
                    <img src={user_photoURL} alt='' />
                </div>
                <div>
                    <p className="font-bold text-base-content text-sm">{userName}</p>
                    <p className="text-base-content/50 text-xs">Senior Product Designer</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;