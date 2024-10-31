import React from 'react'
import Awards1 from '../../../../Resources/Awards/Awards1.png'
import EPA from '../../../../Resources/Recognizers_logo/EPA.png'
import Image from 'next/image'
export default function Awards() {
  return (
    <div className='h-[100vh] flex flex-row gap-[10vw] bg-white'>
        <div>
            <Image
            src={Awards1}
            alt="awards 1"
            className='relative left-[10vw] top-[15vh] w-[30vw]' 
            />
        </div>
     
        <div className='flex flex-col gap-0'>
        <div className='flex flex-row'>
            <div className='h-[20vh]'>
            <Image
            src={EPA}
            alt="awards 1"
            className='relative left-[10vw] top-[10vh] ' 
            />
            <div className='relative left-[25vw] w-[30vw] bottom-[7vh]'>
                <p className='text-black font-bold'>Ethiopia Pharmaceutical Association (EPA):</p>
           
            <p className='text-slate-900'>
            Awarded for our professional contributions, including serving as Secretary of the Audit Committee.
            </p></div>
            </div>
        </div>
        <div className='flex flex-row'>
            <div className='h-[20vh]'>
            <Image
            src={EPA}
            alt="awards 1"
            className='relative left-[10vw] top-[10vh] ' 
            />
            <div className='relative left-[25vw] w-[30vw] bottom-[7vh]'>
                <p className='text-black font-bold'>Ethiopia Pharmaceutical Association (EPA):</p>
           
            <p className='text-slate-900'>
            Awarded for our professional contributions, including serving as Secretary of the Audit Committee.
            </p></div>
            </div>
        </div>
        <div className='flex flex-row'>
            <div className='h-[20vh]'>
            <Image
            src={EPA}
            alt="awards 1"
            className='relative left-[10vw] top-[10vh] ' 
            />
            <div className='relative left-[25vw] w-[30vw] bottom-[7vh]'>
                <p className='text-black font-bold'>Ethiopia Pharmaceutical Association (EPA):</p>
           
            <p className='text-slate-900'>
            Awarded for our professional contributions, including serving as Secretary of the Audit Committee.
            </p></div>
            </div>
        </div>
        
        </div>
        
    </div>
  )
}
