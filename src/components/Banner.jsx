import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero h-[700px] " style={{ backgroundImage: 'url(https://www.digitalsilk.com/wp-content/uploads/2022/09/best-tech-websites-hero-image.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:w-[800px]">
                        <h1 className="mb-5 text-2xl lg:text-5xl font-bold">Welcome to Tech Eloctronics</h1>
                        <p className="mb-5 text-lg lg:text-2xl">Tech fuels small, powerful electronics, enabling global connectivity, automation, sustainability. Personalized experiences emerge, but challenges include privacy, cybersecurity, and ethical considerations.</p>
                        <button className="btn btn-info text-white font-bold lg:text-2xl ">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;