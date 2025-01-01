import React from 'react';
import TamnFather from '../../../../Resources/AboutUsHero/TmanFather.png';

export default function Hero() {
  return (
    <div className="relative h-[50vh] w-[100vw] lg:h-[85vh] lg:w-full overflow-hidden">
      {/* Full-width and height image */}
      <img
        src={TamnFather.src}
        alt="Tamn Father"
        className="absolute top-0 left-0 w-full h-[50vh] lg:h-[85vh] "
      />

      {/* Content overlay */}
      <div className="relative z-10 px-4 md:px-8 lg:px-16 top-[25vh] md:top-[30vh] lg:top-[20vh]">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10 text-white w-[90vw]">
          A Little About Us
        </p>
        <p className="text-sm md:text-base lg:text-lg text-white w-[90vw]">
          We are dedicated to making a difference. Learn more about how we’ve evolved and what we stand for.
        </p>
      </div>
    </div>
  );
}
