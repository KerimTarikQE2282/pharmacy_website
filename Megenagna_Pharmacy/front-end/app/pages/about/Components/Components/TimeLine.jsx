"use client"
import React from 'react'

export default function TimeLine() {
    const [year,setYear]=React.useState(1993)
    var Accomplishments;
if(year==1993){
    Accomplishments=(
        <div className='mt-[8vh] ml-[5vw]'>
        <p className='text-2xl font-bold text-black'>Noteworthy achievement of Year 1993</p>
        <p className='mt-[3vh] text-black'>
        Our journey began at the University of Alberta, where initial studies on fair screening for at-risk drivers laid our foundation.
        </p>
    </div>
    )
}
else if(year==2001){
    Accomplishments=(
        <div className='mt-[8vh] ml-[5vw]'>
        <p className='text-2xl font-bold text-black'>Noteworthy achievement of Year 2001</p>
        <p className='mt-[3vh] text-black'>
        Our journey began at the University of Alberta, where initial studies on fair screening for at-risk drivers laid our foundation.
        </p>
    </div>
    )
}
else if(year==2015){
    Accomplishments=(
        <div className='mt-[8vh] ml-[5vw]'>
        <p className='text-2xl font-bold text-black'>Noteworthy achievement of Year 2015</p>
        <p className='mt-[3vh] text-black'>
        Our journey began at the University of Alberta, where initial studies on fair screening for at-risk drivers laid our foundation.
        </p>
    </div>
    )
}
else if(year==2019){
    Accomplishments=(
        <div className='mt-[8vh] ml-[5vw]'>
        <p className='text-2xl font-bold text-black'>Noteworthy achievement of Year 2019</p>
        <p className='mt-[3vh] text-black'>
        Our journey began at the University of Alberta, where initial studies on fair screening for at-risk drivers laid our foundation.
        </p>
    </div>
    )
}
  return (
    <div className='lg:mt-[25vh] mt-[10vh]'>
    <ol class="items-center lg:flex ml-[10vw]">
        <li class="relative mb-6 lg:mb-0 w-[25vw]">
        <button class="mt-3 lg:pe-8 bg-[#e6effd] flex justify-center p-3 pl-5  border-2 border-[#3d86ed] relative right-[3vw] bottom-[2vh]" onClick={()=>{setYear(1993)}}>
                <time class="block mb-2  leading-none text-black font-bold">Year:1993</time>
            </button>
            <div class="flex items-center">
              
                <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-[#0061e8] lg:ring-8 ring-bg-[#b0cef8]  shrink-0">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  
                </div>
                <div class="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
           
        </li>
        <li class="relative mb-6 lg:mb-0 w-[25vw]">
        <button class="mt-3 lg:pe-8 bg-[#e6effd] flex justify-center p-3 pl-5  border-2 border-[#3d86ed] relative right-[3vw] bottom-[2vh]" onClick={()=>{setYear(2001)}}>
                <time class="block mb-2  leading-none text-black font-bold">Year:2001</time>
            </button>
            <div class="flex items-center">
              
                <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-[#0061e8] lg:ring-8 ring-bg-[#b0cef8]  shrink-0">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  
                </div>
                <div class="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
           
        </li>   <li class="relative mb-6 lg:mb-0 w-[25vw]">
        <button class="mt-3 lg:pe-8 bg-[#e6effd] flex justify-center p-3 pl-5  border-2 border-[#3d86ed] relative right-[3vw] bottom-[2vh]" onClick={()=>{setYear(2015)}}>
                <time class="block mb-2  leading-none text-black font-bold">Year:2015</time>
            </button>
            <div class="flex items-center">
              
                <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-[#0061e8] lg:ring-8 ring-bg-[#b0cef8]  shrink-0">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  
                </div>
                <div class="hidden lg:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            </div>
           
        </li>  <li class="relative mb-6 lg:mb-0 w-[25vw]">
        <button class="mt-3 lg:pe-8 bg-[#e6effd] flex justify-center p-3 pl-5  border-2 border-[#3d86ed] relative right-[3vw] bottom-[2vh]" onClick={()=>{setYear(2019)}}>
                <time class="block mb-2  leading-none text-black font-bold">Year:2019</time>
            </button>
            <div class="flex items-center">
              
                <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 ring-white bg-[#0061e8] lg:ring-8 ring-bg-[#b0cef8]  shrink-0">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  
                </div>
            </div>
           
        </li>
        
        
    </ol>
  {
    Accomplishments
  }
    </div>
  )
}
