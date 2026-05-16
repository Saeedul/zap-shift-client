import React from 'react';

const OurServicesCard = ({ item }) => {
    return (
        <div className="bg-white rounded-2xl p-8 text-center">
            <div className="flex justify-center">
                <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 mb-5"
                />
            </div>
            <h3 className="text-xl font-semibold mb-4">
                {item.title}
            </h3>
            <p className="text-gray-500 leading-7">
                {item.description}
            </p>
        </div>
    );
};

export default OurServicesCard;