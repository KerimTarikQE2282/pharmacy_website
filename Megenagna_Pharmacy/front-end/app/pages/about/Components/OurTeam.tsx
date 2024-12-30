import React from 'react'
import MrSolomon from '../../../../Resources/ourTeam/MrSolomon.png'
import Image from 'next/image'
import gelila1 from '../../../../Resources/ourTeam/Gelila1.png'
import gelila2 from '../../../../Resources/ourTeam/gelila2.png'
import gelila3 from '../../../../Resources/ourTeam/gelila3.png'
function OurTeam() {
    const theTeam=[
        {
            image:gelila1,
            position:"Cheif Pharmacist",
            Name:"Gelila"
        },
        {
            image:gelila2,
            position:"Cheif Pharmacist",
            Name:"Gelila"
        },
        {
            image:gelila3,
            position:"Cheif Pharmacist",
            Name:"Gelila"
        },
        {
            image:gelila3,
            position:"Cheif Pharmacist",
            Name:"Gelila"
        }
    ]
    const teamCOmponent=theTeam.map((team)=>{
        return(
            <div className='w-[15vw]'>
            <Image
            fill={false}
            src={team.image}
            alt='gelila1'
            className='h-[23.5vh] rounded-md'
            />
            <p className='text-slate-800 mt-5 font-thin text-lg'>team.position</p>
            <p className='text-black text-lg'>team.Name</p>
        </div>
        )
    })

  return (
    <div className='px-[10vw] h-[100vh]'>
       <div>
        <p className='text-[#4b8fbd] w-[20vw] relative top-[10vh]'>our Team</p> 
    <p className=' relative top-[10vh] text-5xl text-[#020043]'>The Heart of Our Pharmacy </p> 
    <p className='w-[40vw] relative top-[12vh] text-slate-800'>Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet suscipit nulla. Nullam vitae sit tempus diam.</p>
   
        </div>
        <div className='flex flex-row w-[100vw]'>
        <div className='relative right-[10vw] top-[10vh]'>
        <div
    className='relative ml-[10vw] mt-[5vh] rounded-lg'
     style={{
        backgroundImage: `url(${MrSolomon.src})`, // Use the src property
        backgroundSize: 'cover', // Ensures the image covers the container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents image repeat
        height: '56.5vh', // Full viewport height
        width: '25vw', 
        overflow: 'auto'
      }}
    >
    </div>
    <div>
    <p className='font-thin text-slate-800 text-lg  relative top-5 left-[10vw] w-[10vw]'>Founder and CEO</p>
    <p className='text-md relative top-5 left-[10vw] w-[20vw] text-black mt-3'>Mr. Solomon Assefa W/Gebrea</p>
    </div>

        </div>
    {/*  */}
    <div className='flex flex-wrap  w-[30vw]  relative top-[15vh] right-[7vw] '>
    {teamCOmponent}
    </div>
      {/*  */}
      <div className='relative right-[10vw] top-[10vh]'>
        <div
    className='relative ml-[2vw] mt-[5vh] rounded-lg'
     style={{
        backgroundImage: `url(${MrSolomon.src})`, // Use the src property
        backgroundSize: 'cover', // Ensures the image covers the container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents image repeat
        height: '56.5vh', // Full viewport height
        width: '25vw', 
        overflow: 'auto'
      }}
    >
    </div>
    <div>
    <p className='font-thin text-slate-800 text-lg  relative top-5 left-[2vw] w-[10vw]'>Founder and CEO</p>
    <p className='text-md relative top-5 left-[2vw] w-[20vw] text-black mt-3'>Mr. Solomon Assefa W/Gebrea</p>
    </div>

        </div>
        </div>

    </div>
  )
}

export default OurTeam
