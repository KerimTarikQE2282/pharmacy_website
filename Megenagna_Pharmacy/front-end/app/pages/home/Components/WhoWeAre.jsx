import React from 'react'

export default function AboutSection() {
  return (
    <div>
        <div id="about" className=" py-20   h-[60vh] bg-[#e1eeff] text-black w-[100vw] flex flex-row gap-20 px-20"  >
        <div>
          <p className='text-yellow-400 font-bold'>Who We Are</p>
        </div>
        <div>
        <h2 className="text-3xl font-semibold mb-4">A Legacy of Innovation and Care</h2>
        <p className="text-lg max-w-3xl ">Our journey began in 1991 E.C. with a lgall pharmacy run by three university colleagues. Despite their modest backgrounds, they shared a passion for pharmaceuticals and built a lgall business that eventually supported extended families and grew into Megenagna Pharmaceuticals PLC in 2002 E.C.</p>
        <button className="bg-yellow-500 text-white py-2 px-6 mt-6 rounded-lg">Learn more</button>
        </div>
      </div>
    </div>
  )
}
