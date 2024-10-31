import React from 'react'
import intern from '../../../../Resources/whatwedo/WhatWeDoIntern.png'
export default function WhatWeDo() {
  return (
    <div className='bg-white h-[70vh] px-[10vw] flex flex-row'>
        <div>
    <p className='text-[#4b8fbd] w-[20vw] relative top-[10vh]'>what we do</p> 
    <p className=' relative top-[15vh] text-5xl text-[#020043]'>We Help Get solutions </p> 
    <p className='w-[40vw] relative top-[20vh] text-slate-800'>We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
    </div>
    <div className='w-[45vw] h-[30vw] ml-[10vw] mt-[5vh] rounded-lg' style={{
        backgroundImage: `url(${intern.src})`, // Use the src property
        backgroundSize: 'cover', // Ensures the image covers the container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents image repeat
        
        overflow: 'auto'
      }}>
        <div className='w-[20vw] h-[10vw] bg-[#42abf5] rounded-lg absolute right-[30vw] top-[150vh]'>
        <div className='px-10 py-3'>
            <p className='text-xl font-bold mb-2' >Our mission is simple</p>
            <p className='text-sm'>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>

        </div>
        </div>
      </div>
    </div>
  )
}
