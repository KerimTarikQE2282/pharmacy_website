// pages/index.js

import Image from 'next/image';
import HomeHero from '../../../Resources/Home/HomeHero.png'
import user1 from '../../../Resources/users/user1.avif'
import user2 from '../../../Resources/users/user2.avif'
import user3 from '../../../Resources/users/user3.avif'
import card1 from '../../../Resources/Home/cards/card1.png'
import card2 from '../../../Resources/Home/cards/card2.png'
import card3 from '../../../Resources/Home/cards/card3.png'
import Paracet from '../../../Resources/Home/ParacetImage.png'
import Hero from './Components/Hero'
import InfoSection from './Components/InfoSection'
import Testimonials from './Components/Testimonials'
import WhatWeDo from './Components/WhatWeDo';
import WhatWeDoSecond from './Components/WhataWeDoSecond';

export default function Home() {
  return (
    <div className="font-sans overflow-hidden">
      
    <Hero/>
      
      {/* Info Section */}
    <InfoSection/>

      {/* About Section */}
      {/* <About/> */}
      <WhatWeDo/>

      {/* Testimonials Section */}
    <Testimonials/>
      {/* /////////////////////////////// */}
      <WhatWeDoSecond/>
    
      {/* /////////////////////////////////// */}
      <div className='bg-gradient-to-t from-blue-600 to-white h-[70vh] lg:flex flex-col gap-8 text-slate-900 lg:block hidden' >
      <div className='ml-[42vw] text-2xl'>
            Our Medicines
      </div>

      <div className='flex flex-row gap-5 justify-center'>
        <button className='rounded-full border-2 border-slate-950 bg-slate-950 inline-block text-white px-3'>Pills</button>
        <button className='rounded-full border-2 border-slate-950inline-block px-3'>Syrups</button>
        <button className='rounded-full border-2 border-slate-950 inline-block px-3'>Suplements</button>
        <button className='rounded-full border-2 border-slate-950 inline-block px-3'>Others</button>
      </div>
            <div className='flex flex-row gap-5 justify-center'>
            <div className='w-[15vw] h-[35vh] bg-white rounded-md pl-9 pt-5'>
              <Image
              src={Paracet}
              alt='paracet'
              />
              <p className='ml-5 text-lg text-slate-800 '>Ibuprofen 31</p>
            </div>
            <div className='w-[15vw] h-[35vh] bg-white rounded-md pl-9 pt-5'>
              <Image
              src={Paracet}
              alt='paracet'
              />
              <p className='ml-5 text-lg text-slate-800 '>Ibuprofen 31</p>
            </div><div className='w-[15vw] h-[35vh] bg-white rounded-md pl-9 pt-5'>
              <Image
              src={Paracet}
              alt='paracet'
              />
              <p className='ml-5 text-lg text-slate-800 '>Ibuprofen 31</p>
            </div><div className='w-[15vw] h-[35vh] bg-white rounded-md pl-9 pt-5'>
              <Image
              src={Paracet}
              alt='paracet'
              />
              <p className='ml-5 text-lg text-slate-800 '>Ibuprofen 31</p>
            </div>

            </div>
      </div>

      </div>
   
  );
}
