import React from 'react'
import intern from '../../../../Resources/whatwedo/WhatWeDoIntern.png'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import hospital from '../../../../Resources/Home/choose-card.mp4.png'
import Logo from '../../../../Resources/Home/cards/CockroachLogo.png'

import Tmanfathernew from '../../../../Resources/Home/Value_proposition_2.gif.png'
import Bluethings from '../../../../app/components/ui/Bluethings'
export default function WhatWeDoSecond() {
  return (
    <div className='bg-white lg:h-[310vh]  px-[10vw] flex lg:flex-col flex-col h-[340vh]'>
      
    <p className='text-[#fbd36f] lg:w-[20vw] w-[100vw] relative top-[10vh] lg:text-md text-lg'>what we do?</p> 
    <div >
   <p className='text-black font-semibold text-2xl relative top-[15vh]  lg:w-[30vw] w-[80vw]'>Beyond a pharmacy serving your Needs</p>
   <p className='text-slate-500 text-sm  font-light relative top-[15vh]  lg:w-[30vw] w-[80vw] '>We are more than just a pharmacy; we provide a wide range of services across the medical field.</p>
   </div>
   <div>
    <div className='flex lg:flex-row flex-col mt-[20vh] lg:h-[40vh] h-[60vh]'>
      <div>
        <p className=' text-2xl text-slate-800'>Ze'Orit Medical Center</p>
        <p className='lg:w-[40vw] w-[90vw] text-black mt-[5vh] relative lg:top-0 top-[25vh]'>Providing comprehensive healthcare services with expert medical professionals and state-of-the-art facilities. Your trusted partner in wellness and care.</p>

      </div>
      <div>
    <Image
    src={hospital}
    alt='hospital'
    className='relative lg:bottom-[25vh] bottom-[10vh] lg:left-[5vw]'
    />
      </div>
    </div>
    {/* /////////////////////// */}
    <div className='flex lg:flex-row-reverse flex-col mt-[20vh] '>
      <div className='relative lg:left-[5vw] lg:bottom-[20vh] bottom-[35vh]'>
        <p className=' text-2xl text-slate-800'>Offer Pharmaceuticals in multiple locations</p>
        <p className='lg:w-[40vw] w-[90vw] text-black mt-[5vh]'>Conveniently located pharmacies offering a wide range of medications, health products, and personalized pharmaceutical care to meet your needs.</p>
        <div className='relative top-[31vh] left-[25vw]'>
        <Bluethings text={"pharmacies"}/>
        </div>
      </div>
      <div>
    <Image
    src={Tmanfathernew}
    alt='hospital'
    className='relative lg:bottom-[25vh] bottom-[35vh] lg:w-[30vw] w-[80vw]  lg:right-[10vw] '
    /> <Image
    src={Tmanfathernew}
    alt='hospital'
    className='relative lg:bottom-[25vh] bottom-[35vh] lg:w-[30vw] w-[80vw]  lg:right-[10vw] '
    />
      </div>
    </div>
    {/* ///////////////////// */}
    <div>
    <div className='flex lg:flex-row flex-col mt-[20vh]'>
     
      <div className='relative bottom-[15vh]'>
        <div className='relative bottom-[20vh]'> <Bluethings text={"Wholesale and reatail"}/></div>
        
        <p className=' text-2xl text-slate-800'>Medical Supply & Distribution</p>
        <p className='lg:w-[40vw] w-[90vw] text-black mt-[5vh]'>Supplying high-quality medical products and equipment to individuals, clinics, and businesses at competitive prices. Reliable solutions for your healthcare needs.</p>

      </div>
      <div>
    <Image
    src={hospital}
    alt='hospital'
    className='relative lg:bottom-[25vh] bottom-[10vh] lg:left-[5vw]'
    />
      </div>
    </div>
    </div>
    {/* ////////////// */}
    <div>
    <div className='flex lg:flex-row-reverse flex-col mt-[20vh]'>
     
      <div className='relative bottom-[15vh] left-[5vw]'>
        <div className='relative bottom-[10vh] lg:left-[20vw] flex flex-row gap-4 text-slate-700 text-sm'>
          <p className='mt-3'>Megenagna Cockroach Pesticide </p>
          <Image src={Logo}
          alt='logo'
          className='lg:w-[4vw] w-[8vw]'
          />
        </div>
        
        <p className=' text-2xl text-slate-800'>Trusted Homemade Pest Control</p>
        <p className='lg:w-[40vw] w-[90vw] text-black mt-[5vh]'> We take pride in not just selling medicines but creating them too. Megenagna Pesticide is our homemade solution for effective and safe pest control.</p>

      </div>
      <div>
    <Image
    src={hospital}
    alt='hospital'
    className='relative lg:bottom-[25vh] bottom-[10vh] '
    />
      </div>
    </div>
    </div>

    {/* //////////////////////// */}
   </div>
   
    </div>
  )
}
