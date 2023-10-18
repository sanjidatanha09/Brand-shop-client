import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero h-[800px]" style={{ backgroundImage: 'url(https://i.ibb.co/D9cyYMh/img23.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-[800px]">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Tech Eloctronics</h1>
                        <p className="mb-5 text-2xl">Tech fuels small, powerful electronics, enabling global connectivity, automation, sustainability. Personalized experiences emerge, but challenges include privacy, cybersecurity, and ethical considerations.</p>
                        <button className="btn btn-primary">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;