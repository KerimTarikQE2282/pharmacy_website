import React from 'react'
import HeroImage from '../../../Resources/ContactImages/Rectangle 10.png'
import Image from 'next/image'
import Body from './Components/Body'
export default function page() {
  return (
    <div>
    <Image src={HeroImage} alt='hero Image' className='w-[100vw] h-[50vh]'/>
    <Body/>
    </div>
  )
}
