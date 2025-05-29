"use client";

import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="h-[700px] w-full bg-gradient-to-r from-blue-600 to-blue-400 max-lg:h-[900px] max-md:h-[750px]">
      <div className="grid grid-cols-3 items-center justify-items-center px-10 gap-x-10 max-w-screen-2xl mx-auto h-full max-lg:grid-cols-1 max-lg:py-10 max-lg:gap-y-10">
        
        {/* TEXT SECTION */}
        <div className="flex flex-col gap-y-6 animate-fade-in-up max-lg:order-last col-span-2">
          <h1 className="text-white text-6xl font-extrabold leading-tight tracking-tight max-xl:text-5xl max-md:text-4xl max-sm:text-3xl">
            <span className="block">THE PRODUCT</span>
            <span className="block text-blue-200">OF THE FUTURE</span>
          </h1>

          <p className="text-white text-lg font-light leading-relaxed max-sm:text-sm max-w-2xl">
            Elevate your lifestyle with cutting-edge innovation. Discover how our next-gen product redefines technology, comfort, and elegance — made for tomorrow, available today.
          </p>

          <div className="flex gap-x-4 max-lg:flex-col max-lg:gap-y-3 mt-2">
            <button className="bg-white text-blue-600 font-semibold px-10 py-3 rounded-md text-lg hover:bg-gray-100 transition-all duration-200 shadow-md hover:scale-105">
              BUY NOW
            </button>
            <button className="bg-transparent border border-white text-white font-semibold px-10 py-3 rounded-md text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 shadow-md hover:scale-105">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <Image
          src="/watch for banner.png"
          width={400}
          height={400}
          alt="smart watch"
          className="animate-fade-in max-md:w-[300px] max-md:h-[300px] max-sm:h-[250px] max-sm:w-[250px] w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
