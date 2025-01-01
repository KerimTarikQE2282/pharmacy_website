import React from 'react'
import Awards1 from '../../../../Resources/Awards/Awards1.png'
import EPA from '../../../../Resources/Recognizers_logo/EPA.png'
import Image from 'next/image'
export default function Awards() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row lg:gap-[10vw] bg-white px-4 lg:px-0">
  <div className="flex justify-center lg:block">
    <Image
      src={Awards1}
      alt="awards 1"
      className="w-full lg:w-[30vw] mt-10 lg:mt-[15vh]"
    />
  </div>

  <div className="flex flex-col gap-8 mt-8 lg:mt-0">
    {[...Array(3)].map((_, index) => (
      <div key={index} className="flex flex-wrap lg:flex-nowrap">
        <Image
          src={EPA}
          alt="award"
          className="w-20 h-20 lg:w-auto lg:h-auto mx-auto lg:mx-0"
        />
        <div className="lg:ml-[5vw] max-w-full lg:max-w-[30vw] text-center lg:text-left mt-4 lg:mt-0">
          <p className="text-black font-bold">
            Ethiopia Pharmaceutical Association (EPA):
          </p>
          <p className="text-slate-900">
            Awarded for our professional contributions, including serving as
            Secretary of the Audit Committee.
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}
