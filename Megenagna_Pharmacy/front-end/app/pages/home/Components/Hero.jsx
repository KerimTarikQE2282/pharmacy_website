import React from 'react'
import HomeHero from '../../../../Resources/Home/HomeHero.png'

function Hero() {
  return (
     
       <div className="relative bg-cover bg-center h-[500px] text-white flex items-center " 
       style={{
        backgroundImage: `url(${HomeHero.src})`, // Use the src property
        backgroundSize: 'cover', // Ensures the image covers the container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents image repeat
        height: '85vh', // Full viewport height
        width: '99vw', 
        overflow: 'auto'
      }}>
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">Your Trusted Partner in Pharmaceuticals</h1>
          <p className="text-xl mt-4">Delivering quality, affordable pharmaceutical solutions to empower healthcare and improve lives.</p>
        </div>
      </div>
      
  )
}

export default Hero
