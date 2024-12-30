import React from 'react'
import TamnFather from '../../../../Resources/AboutUsHero/TmanFather.png'
export default function hero() {
  return (
    <div
    style={{
        backgroundImage: `url(${TamnFather.src})`, // Use the src property
        backgroundSize: 'cover', // Ensures the image covers the container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents image repeat
        
        overflow: 'auto'
      }}
      className='overflow-auto lg:h-[85vh] lg:w-[99vw]'
    >
      <div className='relative top-[20vh] left-[5vw]  w-[40vw]'>
      <p className='text-5xl font-bold mb-10 '>A Little About us </p>
      </div>
    </div>
  )
}
