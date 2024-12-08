// components/AboutUs.js
import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white py-8 px-8 lg:px-24 h-screen relative">
      {/* Left Text Section */}
      <div className="max-w-md text-center lg:text-left lg:mb-0 mb-6">
        <h4 className="text-blue-600 font-semibold text-sm uppercase">
          About Company
        </h4>
        <h2 className="text-4xl font-bold text-gray-800 mt-2">
          About Us
        </h2>
        <p className="text-gray-500 mt-4">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-500">
          Get Quote Now
        </button>
      </div>

      {/* Right Image Section */}
      <div className="relative mt-6 lg:mt-0">
        {/* Background Circle */}
        <div className="absolute -top-4 -left-4 w-64 h-64 bg-pink-100 rounded-full -z-10"></div>
        {/* Floating Dots */}
        <div className="absolute top-8 right-10 w-4 h-4 bg-purple-300 rounded-full"></div>
        <div className="absolute bottom-12 right-16 w-3 h-3 bg-purple-200 rounded-full"></div>
        <div className="absolute top-16 left-12 w-2 h-2 bg-purple-300 rounded-full"></div>
        {/* Main Image */}
        <div className="relative bg-slate-400 z-10 w-96 h-96">
          <Image
            src="/alex-haigh-fEt6Wd4t4j0-unsplash.jpg" // Replace with the actual path to your image
            alt="About Us"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
