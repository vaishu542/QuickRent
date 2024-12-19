import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Link,useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Hero = () => {
    const navigate = useNavigate();
    const slides = [
        { id: 1, image: './images/Hero/1.jpg' },
        { id: 2, image: './images/Hero/2.jpg' },
        { id: 3, image: './images/Hero/3.jpg' },
        { id: 4, image: './images/Hero/4.jpg' },
        { id: 5, image: './images/Hero/5.jpg' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); 
            setTimeout(() => {
                setCurrentIndex((prevIndex) =>
                    prevIndex === slides.length - 1 ? 0 : prevIndex + 1
                );
                setFade(true); 
            }, 1000); 
        }, 5000); 

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <>
            <Header />
            <section
                className="relative text-white"
                style={{
                    height: '100vh',
                    background: `url(${slides[currentIndex].image}) center/cover no-repeat`,
                    transition: 'background-image 1s ease-in-out', 
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                    QuickRent – Your Gadget, On-Demand!
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">
                    QuickRent is your go-to platform for affordable, fast, and reliable gadget rentals—laptops, gaming consoles, and more—whenever you need them!
                    </p>
                    <div className="flex">
                         <Link
                            to="/gadgets"
                            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg border-2 border-purple-700 "
                        >
                            Let's Explore
                            {/* Arrow */}
                            <svg
                                className="w-5 h-5 ml-2 -mr-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Hero;
