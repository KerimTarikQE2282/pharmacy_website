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
        height: '85vh', // Full viewport height
        width: '99vw', 
        overflow: 'auto'
      }}
    >
      <p className='text-5xl font-bold mb-10 w-[40vw] relative top-[40vh] left-[5vw]'>A Little About us </p>
      <p className=' mb-10 w-[40vw] relative top-[40vh] left-[5vw]'>A Little About us </p>

    </div>
  )
}
