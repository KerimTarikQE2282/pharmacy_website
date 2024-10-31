import React from 'react'
import oldman from '../../../../Resources/Entities/oldman.png'
export default function Entities() {
  return (
    <div className='bg-white h-[80vh]'>
     <p className='font-medium text-[#3280b8] text-4xl relative left-[5vw] top-[4vh] w-[20vw]' >Our Entities</p> 
     <div className='flex flex-row relative  top-[7vh] items-center justify-center'>
     <div className='w-[45vw] h-[60vh] flex flex-col' >
      <div className='  h-[20vh] flex flex-row gap-10 w-[45vw]'>
        <div className='bg-[#42abf5] w-[8vw] h-[14vh] rounded-lg '></div>
        <div>
        <p className='font-bold text-black'>Pharmacy & Retail</p>
        <p className='w-[20vw] text-slate-800'>Awarded for our professional contributions, including serving as Secretary of the Audit Committee.</p>
        </div>
      </div>
      <div className='  w-[30vw] h-[20vh]'>
      <div className='  h-[20vh] flex flex-row gap-10 w-[45vw]'>
        <div className='bg-[#42abf5] w-[8vw] h-[14vh] rounded-lg '></div>
        <div>
        <p className='font-bold text-black'>Pharmacy & Retail</p>
        <p className='w-[20vw] text-slate-800'>Awarded for our professional contributions, including serving as Secretary of the Audit Committee.</p>
        </div>
      </div>
      </div>
      <div className='  w-[30vw] h-[20vh]'>
      <div className='  h-[20vh] flex flex-row gap-10 w-[45vw]'>
        <div className='bg-[#42abf5] w-[8vw] h-[14vh] rounded-lg '></div>
        <div>
        <p className='font-bold text-black '>Pharmacy & Retail</p>
        <p className='w-[20vw] text-slate-800'>Awarded for our professional contributions, including serving as Secretary of the Audit Committee.</p>
        </div>
      </div>
      </div>

     </div>
     <div className='w-[45vw] h-[60vh] rounded-lg relative bottom-10 '
     style={{
      backgroundImage: `url(${oldman.src})`, // Use the src property
      backgroundSize: 'cover', // Ensures the image covers the container
      backgroundPosition: 'center', // Centers the background image
      backgroundRepeat: 'no-repeat', // Prevents image repeat
     
      overflow: 'auto'
    }}>
      
     </div>
     </div>
    </div>
  )
}
