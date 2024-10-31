import Image from 'next/image'
import React from 'react'
import CBE from '../../../../Resources/Recognizers_logo/CBE.png'
import EPA from '../../../../Resources/Recognizers_logo/EPA.png'
import Ethiopia from '../../../../Resources/Recognizers_logo/Ethiopia.png'
import Group from '../../../../Resources/Recognizers_logo/Group.png'
import Stanford from '../../../../Resources/Recognizers_logo/Stanford.png'
import WHO from '../../../../Resources/Recognizers_logo/WHO.png'

export default function BanksAndCorporationRecognitions() {
  return (
    <div className='flex flex-row bg-white h-[60vh]'>
      <div className=' w-[60vw] h-[60vh] flex flex-row  relative top-[5vh] left-[10vw]'>
      <div className='w-[15vw] h-[30vh] mt-[2vh] flex flex-col gap-10'>
        <Image
src={Group}
alt='Mayo Clinic'
className='h-[20vh] w-[17vw]'

/>
<Image
src={Stanford}
alt='Stanford'
className='h-[20vh] object-contain w-[17vw]'

/>
<Image
src={WHO}
alt='WHO'
className='h-[20vh] object-contain w-[17vw]'

/>
</div>
        <div className='w-[15vw] h-[60vh] flex flex-col gap-10'>
        <Image
src={CBE}
alt='CBE'
className='h-[20vh] w-[17vw] object-contain'

/>
<Image
src={EPA}
alt='EPA'
className='h-[20vh] w-[17vw]'

/>
<Image
src={Ethiopia}
alt='Ethiopia'
className='h-[20vh] w-[17vw] object-contain'

/>

        </div>
       

      </div>
      <div className=' w-[60vw] h-[90vh] flex  items-center text-[#42abf5] '>
        <p className='text-4xl w-[30vw] ml-32 mb-[20vh]'>Recognized by Major Ethiopian Co-operations and Banks</p>
      </div>
    </div>
  )
}
