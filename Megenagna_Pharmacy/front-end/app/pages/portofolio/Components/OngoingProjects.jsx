import Image from 'next/image'
import React from 'react'
import plan1 from '../../../../Resources/plans/A1_page-0001 (2).jpg'
import plan2 from '../../../../Resources/plans/AR 3 (1)_page-0001 (2).jpg'

function OngoingProjects() {
  return (
    <div className='bg-white h-[60vh] flex'>
    
    <div className='w-[80vw] h-[40vh] bg-[#173c56] ml-[10vw] mt-[10vh] rounded-md flex flex-col'>
    <div>
    <div className='w-[12vw] px-2 py-3 rounded-full relative top-[7vh] left-[5vw] h-[6vh] bg-gray-300 text-center items-center'>
    <p className='font-bold text-blue-400'>Ongoing Projects</p> </div>
    <p className='w-[30vw] text-lg font-bold relative top-[10vh] left-[7vw]'>Our current ongoing projects includes building an Animal Food Factory, that will house production, supply and store raw materials.</p>
    </div>
    <div>
        <Image src={plan2} alt='plans' className='w-[30vw] h-[30vh] relative left-[49vw] bottom-[13vh]'/>
        <Image src={ plan1} alt='plans'  className='w-[30vw] h-[30vh] relative left-[44vw] bottom-[39vh]'/>
    </div>
    </div>
      
    </div>
  )
}

export default OngoingProjects
