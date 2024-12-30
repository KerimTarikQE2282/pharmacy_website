import React from 'react'

function InfoSection() {
  return (
    <div className="px-20 py-12  text-center bg-white w-[100vw] lg:h-[30vh] h-[70vh] lg:mb-[15vh]">
    <div className="flex lg:flex-row flex-col justify-center items-center mt-10 gap-[10vw]">
      <div className=''>
        <h3 className="font-semibold text-xl text-black">Vision</h3>
        <p className='text-slate-800 lg:w-[20vw] w-[70vw] lg:ml-10 '>To be a trusted leader in delivering high-quality, affordable pharmaceuticals.</p>
      </div>
      <div className='lg:border-l-2 pl-5'>
        <h3 className="font-semibold text-xl text-black">Core Value</h3>
        <p className='text-slate-800 lg:w-[20vw] w-[70vw] lg:ml-10'>We prioritize creativity, problem-solving, and empower our customers, team, and partners to drive positive change.</p>
      </div>
      <div className='lg:border-l-2 pl-5'>
        <h3 className="font-semibold text-xl text-black">Mission</h3>
        <p className='text-slate-800 lg:w-[20vw] w-[70vw] lg:ml-10'>To supply essential medicines for both human and animal health, supporting a healthier community.</p>
      </div>
    </div>
  </div>
  )
}

export default InfoSection
