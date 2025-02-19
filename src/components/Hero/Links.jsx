import React, { useEffect, useState } from 'react';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import first from "../../assets/Links/1.png";
import second from "../../assets/Links/2.png";
import third from "../../assets/Links/3.png";
import fourth from "../../assets/Links/4.png";
import fifth from "../../assets/Links/5.png";
import sixth from "../../assets/Links/6.png";
import seventh from "../../assets/Links/7.png";
import eighth from "../../assets/Links/8.png";
import ninth from "../../assets/Links/9.png";
import tenth from "../../assets/Links/10.png";

const Links = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Sample logo data - replace with your actual logos
    const logos = [
        { id: 1, imageUrl: first, url: "https://example1.com" },
        { id: 2, imageUrl: second, url: "https://example2.com" },
        { id: 3, imageUrl: third, url: "https://example3.com" },
        { id: 4, imageUrl: fourth, url: "https://example4.com" },
        { id: 5, imageUrl: fifth, url: "https://example5.com" },
        { id: 6, imageUrl: sixth, url: "https://example6.com" },
        { id: 7, imageUrl: seventh, url: "https://example7.com" },
        { id: 8, imageUrl: eighth, url: "https://example8.com" },
        { id: 9, imageUrl: ninth, url: "https://example9.com" },
        { id: 10, imageUrl: tenth, url: "https://example10.com" },
    ];


    const visibleSlides = 4;
    const totalSlides = logos.length;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === totalSlides - visibleSlides ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(timer);
    }, [totalSlides]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === totalSlides - visibleSlides ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - visibleSlides : prevIndex - 1
        );
    };

    return (
    <div className='bg-gradient-to-t from-[#F3F6FD] to-[#E0E7FF]'>

        <div className="text-center pt-16">
            <div className="flex gap-2 justify-center items-center">
                <h1 className="text-5xl font-bold mb-1 text-[#1E3A8A]">
                    Important
                </h1>
                <h1 className="text-5xl font-bold mb-1 text-[#0044ff]">
                    Links
                </h1>
            </div>
            <div className="w-[500px] h-[3px] bg-[#1E3A8A] mx-auto mt-3"></div>
            <p className="text-lg text-[#1E3A8A]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nihil error temporibus
            </p>
        </div>
        <div className="relative w-full max-w-7xl mx-auto px-4 py-8">
            <div className="overflow-hidden">
                <div className="flex transition-transform duration-500 ease-in-out" style={{
                transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
            }}>
                    {logos.map((logo) => (
                    <div key={logo.id} className="min-w-[25%] px-4">
                        <a href={logo.url} target="_blank" rel="noopener noreferrer" className="block group">
                            <div
                                className="bg-white rounded-lg p-6 border-2 border-blue-900 transform transition-transform duration-300 hover:scale-105">
                                <img src={logo.imageUrl} alt="Company Logo"
                                    className="w-full h-20 object-contain filter hover:brightness-90 transition-all duration-300" />
                            </div>
                        </a>
                    </div>
                    ))}
                </div>
            </div>

            <button onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
                aria-label="Previous slide">
                <ArrowLeftCircle className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
            </button>

            <button onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-300"
                aria-label="Next slide">
                <ArrowRightCircle className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
            </button>
        </div>
    </div>
    );
};

export default Links;