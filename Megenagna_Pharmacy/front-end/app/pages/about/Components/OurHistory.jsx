import React from 'react'
import TimeLine from './Components/TimeLine'

export default function ourHistory() {

  const state = { value: 0, previous: 0 };
  return (
    <div className='bg-white h-[90vh] px-[10vw] flex flex-col'>
      <div className='border-b-10 relative left-[10vw]'>
          <p className=' relative top-[15vh] text-4xl text-[#020043]'>Our History: A Legacy of Medical Excellence </p> 
          </div>
          <div className='relative left-[10vw]'>
          <p className='w-[40vw] relative top-[17vh] text-slate-800'>For over three decades, our company has pioneered scientific research in cognitive performance and impairment risk measurement.</p>
          </div>
          <div>
   
      <TimeLine/>

            
          </div>
    </div>
  )
}
