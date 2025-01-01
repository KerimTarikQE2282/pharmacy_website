import React from 'react';

export default function AboutSection() {
  return (
    <div>
      <div
        id="about"
        className="py-10 md:py-20 h-auto md:h-[60vh] bg-[#e1eeff] text-black w-full flex flex-col md:flex-row gap-10 md:gap-20 px-6 md:px-20 items-center"
      >
        {/* Section Title */}
        <div className="text-center md:text-left">
          <p className="text-yellow-400 font-bold text-lg md:text-xl">Who We Are</p>
        </div>

        {/* Content Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            A Legacy of Innovation and Care
          </h2>
          <p className="text-base md:text-lg max-w-3xl">
            Our journey began in 1991 E.C. with a legal pharmacy run by three university
            colleagues. Despite their modest backgrounds, they shared a passion for pharmaceuticals and built a legal business that eventually supported extended families and grew into Megenagna Pharmaceuticals PLC in 2002 E.C.
          </p>
          <button className="bg-yellow-500 text-white py-2 px-6 mt-6 rounded-lg">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
