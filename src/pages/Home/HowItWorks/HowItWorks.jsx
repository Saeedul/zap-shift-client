import React from 'react';
import HowItWorksData from './HowItWorksData';
import HowItWorksCard from './HowItWorksCard';

const HowItWorks = () => {
    return (
        <section className="bg-[#f5f5f5] py-20 rounded-3xl">
            <div className="w-11/12 mx-auto">
                <h2 className="text-4xl font-bold mb-12">
                    How It Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {HowItWorksData.map((item) => (
                        <HowItWorksCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;