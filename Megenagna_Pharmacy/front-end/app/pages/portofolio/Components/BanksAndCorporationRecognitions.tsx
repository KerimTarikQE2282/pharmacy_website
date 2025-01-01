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
    <div className="flex flex-col lg:flex-row bg-white h-auto lg:h-[60vh] mt-[5vh]">
    {/* Images Section */}
    <div className="w-full lg:w-[60vw] flex flex-col lg:flex-row relative lg:top-[5vh] lg:left-[10vw]">
      <div className="w-full lg:w-[15vw] flex flex-wrap gap-6 lg:ml-0 ml-7 sm:gap-8 lg:gap-10 mt-4 lg:mt-[2vh]">
        <Image
          src={Group}
          alt="Mayo Clinic"
          className="h-[15vh] sm:h-[18vh] lg:h-[20vh] w-[25%] lg:w-[17vw] object-contain"
        />
        <Image
          src={Stanford}
          alt="Stanford"
          className="h-[15vh] sm:h-[18vh] lg:h-[20vh] w-[25%] lg:w-[17vw] object-contain"
        />
        <Image
          src={WHO}
          alt="WHO"
          className="h-[15vh] sm:h-[18vh] lg:h-[20vh] w-[25%] lg:w-[17vw] object-contain"
        />
      </div>
      <div className="w-full lg:w-[15vw] flex flex-wrap items-center gap-6 lg:ml-0 ml-7 sm:gap-8 lg:gap-10 mt-4 lg:mt-0">
        <Image
          src={CBE}
          alt="CBE"
          className="h-[15vh] sm:h-[18vh] lg:h-[20vh] w-[25%] lg:w-[17vw] object-contain"
        />
        <Image
          src={EPA}
          alt="EPA"
          className="h-[15vh] sm:h-[18vh] lg:h-[20vh] w-[25%] lg:w-[17vw] object-contain"
        />
        <Image
          src={Ethiopia}
          alt="Ethiopia"
          className="h-[15vh] sm:h-[18vh] lg:h-[20vh] w-[25%] lg:w-[17vw] object-contain"
        />
      </div>
    </div>
  
    {/* Text Section */}
    <div className="w-full lg:w-[60vw] h-auto lg:h-[90vh] flex items-center justify-center text-center lg:text-left text-[#42abf5] px-4 sm:px-8 lg:px-0">
      <p className="text-2xl sm:text-3xl lg:text-4xl w-full lg:w-[30vw] mb-8 lg:mb-[20vh]">
        Recognized by Major Ethiopian Corporations and Banks
      </p>
    </div>
  </div>
  
  )
}
