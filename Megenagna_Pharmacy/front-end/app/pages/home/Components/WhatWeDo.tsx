import React from 'react'
import intern from '../../../../Resources/whatwedo/WhatWeDoIntern.png'
import { ArrowUpRight } from 'lucide-react'
export default function WhatWeDo() {
  return (
    <div className='bg-white lg:h-[70vh] h-[130vh] px-[10vw] flex lg:flex-row flex-col '>
        <div>
    <p className='text-[#4b8fbd] lg:w-[20vw] w-[30vw] relative top-[10vh]'>what we do</p> 
    <p className=' relative top-[15vh] text-5xl text-[#020043]'>We Help Get solutions </p> 
    <p className='lg:w-[40vw] w-full relative top-[20vh] text-slate-800'>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
      <button className='bg-yellow-400 flex flex-row p-3 rounded-lg relative top-[25vh] text-black'>Learn More <ArrowUpRight color={'black'}/></button>
    </div>
    <div>
    <div className='lg:w-[30vw] lg:h-[30vw] w-full h-[50vh] lg:ml-[10vw] lg:mt-[5vh] mt-[18vh] rounded-lg relative lg:top-0 top-[10vh]' style={{
        backgroundImage: `url(${intern.src})`, // Use the src property
        backgroundSize: 'cover', // Ensures the image covers the container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents image repeat
        
        overflow: 'auto'
      }}>
       
      </div>
      <div className='lg:w-[20vw] w-[70vw]  bg-[#42abf5] rounded-lg relative lg:left-10 left-6 lg:bottom-[15vh] bottom-[8vh]  lg:mt-0 lg:opacity-100 opacity-80 '>
        <div className='px-10 lg:px-2 py-3'>
            <p className=''>Overcoming challenges to supply essential and affordable medicines for people and animals through local manufacturing.</p>

        </div>
        </div>
        </div>
    </div>
  )
}
