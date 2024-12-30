import React from 'react'
import Discover from '../../../../Resources/Talk/Discover.png'
import Frame from '../../../../Resources/Talk/Frame.png'
import Group from '../../../../Resources/Talk/Group (1).png'
import Image from 'next/image'
export default function Talk() {
  return (
    <div className='flex flex-col bg-white mt-10'>
      <div className='h-[50vh] flex flex-row'>
      <div className='  flex  items-center text-[#42abf5] '>
        <p className='text-4xl w-[30vw] ml-32'>Experience Exceptional Healthcare In The USA With Omnicure USA</p>
      </div> 
             <div className='  flex  items-center text-slate-500 '>
        <p className=' w-[30vw] ml-60'>Discover the pinnacle of healthcare services in the United States, where advancements, quality, cutting edge research, expert doctors and a commitment to patient success, combine to provide an unparalleled medical tourilg experience. Omnicure USA is your dedicated partner, guiding you towards improved health and wellness. Connect with us today and embark on a journey of exceptional USA healthcare services.</p>
      </div> 
      </div>
      <div className='h-[50vh] flex flex-row justify-center gap-20'>
    <div className='flex flex-col bg-[#f9f9f9] p-10 h-[40vh] rounded-xl gap-4'>
    <Image
src={Discover}
alt='Discover'
className='ml-[4vw]'
/>
<p className='font-bold text-black ml-[3vw]'>300+ Customers</p>
<p className='w-[17vw] text-slate-800'>When facing a serious, 
life-changing illness, we understand the critical importance of obtaining expert advices</p>
    </div>
    <div className='flex flex-col bg-[#f9f9f9] p-10 h-[40vh] rounded-xl gap-4'>
    <Image
src={Frame}
alt='Discover'
className='ml-[4vw]'
/>
<p className='font-bold text-black ml-[1vw]'>+7  Branches and PLC’s</p>
<p className='w-[17vw] text-slate-800'>Get help from the best chosen hospitals and specialists that excel in providing premium healthcare directly from the United States.</p>
    </div>
    <div className='flex flex-col bg-[#f9f9f9] p-10 h-[40vh] rounded-xl gap-4'>
    <Image
src={Group}
alt='Discover'
className='ml-[4vw]'
/>
<p className='font-bold text-black ml-[3vw]'>Global Plans</p>
<p className='w-[17vw] text-slate-800'>Get help from the best chosen hospitals and specialists that excel in providing premium healthcare directly from the United States.</p>
    </div>   
      </div>
    </div>
  )
}
