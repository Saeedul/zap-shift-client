import React from 'react';
import OurServicesData from './OurServicesData';
import OurServicesCard from './OurServicesCard';

const OurServices = () => {
    return (
        <section className="bg-[#03373D] py-20 my-7 md:my-10 lg:my-15 rounded-3xl">
            <div className="w-11/12 mx-auto">
                <h2 className="text-4xl font-bold text-white text-center">
                    Our Services
                </h2>
                <p className="text-[#DADADA] w-full md:w-8/12 mx-auto text-center leading-7 my-6">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {OurServicesData.map(( item ) =>(
                        <OurServicesCard 
                        key={item.id}
                        item={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;