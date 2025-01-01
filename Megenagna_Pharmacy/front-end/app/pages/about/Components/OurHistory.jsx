import React from 'react'
import TimeLine from './Components/TimeLine'

export default function ourHistory() {

  const state = { value: 0, previous: 0 };
  return (
    <div className="bg-white h-[110vh] lg:min-h-[90vh] px-4 lg:px-[10vw] flex flex-col">
    <div className="border-b-10 lg:relative lg:left-[10vw]">
      <p className="relative lg:top-[15vh] mt-8 lg:mt-0 text-2xl lg:text-4xl text-[#020043] text-center lg:text-left">
        Our History: A Legacy of Medical Excellence
      </p>
    </div>
    <div className="lg:relative lg:left-[10vw]">
      <p className="w-full lg:w-[40vw] mx-auto lg:mx-0 mt-6 lg:mt-0 lg:top-[17vh] text-slate-800 text-center lg:text-left">
        For over three decades, our company has pioneered scientific research in cognitive performance and impairment risk measurement.
      </p>
    </div>
    <div className=" lg:mt-16">
      <TimeLine />
    </div>
  </div>
  
  )
}
