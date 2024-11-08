// pages/index.js

import Image from 'next/image';
import HomeHero from '../../../Resources/Home/HomeHero.png'
import Animatedtooltips from '../../../app/components/ui/Animatedtooltips'
import user1 from '../../../Resources/users/user1.avif'
import user2 from '../../../Resources/users/user2.avif'
import user3 from '../../../Resources/users/user3.avif'
import card1 from '../../../Resources/Home/cards/card1.png'
import card2 from '../../../Resources/Home/cards/card2.png'
import card3 from '../../../Resources/Home/cards/card3.png'
import Paracet from '../../../Resources/Home/ParacetImage.png'
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:{user1}
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:{user2}
    },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
          {user3}
  }
];
export default function Home() {
  return (
    <div className="font-sans">
      
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] text-white flex items-center " 
       style={{
        backgroundImage: `url(${HomeHero.src})`, // Use the src property
        backgroundSize: 'cover', // Ensures the image covers the container
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents image repeat
        height: '85vh', // Full viewport height
        width: '99vw', 
        overflow: 'auto'
      }}>
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">Your Trusted Partner in Pharmaceuticals</h1>
          <p className="text-xl mt-4">Delivering quality, affordable pharmaceutical solutions to empower healthcare and improve lives.</p>
        </div>
      </section>
      
      {/* Info Section */}
      <div className="px-20 py-12  text-center bg-white w-[100vw] h-[30vh]">
        <div className="flex flex-row justify-center items-center mt-10 gap-[10vw]">
          <div>
            <h3 className="font-semibold text-xl text-black">Vision</h3>
            <p className='text-slate-800 w-[20vw] ml-10'>To be a trusted leader in delivering high-quality, affordable pharmaceuticals.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-black">Core Value</h3>
            <p className='text-slate-800 w-[20vw] ml-10'>We prioritize creativity, problem-solving, and empower our customers, team, and partners to drive positive change.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-black">Mission</h3>
            <p className='text-slate-800 w-[20vw] ml-10'>To supply essential medicines for both human and animal health, supporting a healthier community.</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className=" py-20   h-[60vh] bg-[#e1eeff] text-black w-[100vw] flex flex-row gap-20 px-20"  >
        <div>
          <p className='text-yellow-400 font-bold'>Who We Are</p>
        </div>
        <div>
        <h2 className="text-3xl font-semibold mb-4">A Legacy of Innovation and Care</h2>
        <p className="text-lg max-w-3xl ">Our journey began in 1991 E.C. with a small pharmacy run by three university colleagues. Despite their modest backgrounds, they shared a passion for pharmaceuticals and built a small business that eventually supported extended families and grew into Megenagna Pharmaceuticals PLC in 2002 E.C.</p>
        <button className="bg-yellow-500 text-white py-2 px-6 mt-6 rounded-lg">Learn more</button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="  px-6 h-[70vh] bg-white py-32 flex flex-row">
      <p className='relative bottom-[10vh] text-yellow-400 font-bold'>Testimonials</p>
      <div className='w-[50vw]'>
        <Animatedtooltips items={people}/>
      </div>
      <div className='text-slate-900 w-[30vw]'><p> "Pharmacy Store is my go-to for over-the-counter medications and health products. They have a wide selection, and their website makes it easy to order online. The only improvement I'd suggest is expanding their beauty and skincare section."</p>
        <p className='mt-[5vh] font-bold'>Theresa j jones</p>
        <p>24 year old</p>
        </div>
      </div>
      <div className='flex flex-col'>
      <div className='h-[25vh] bg-white'>
        <p className='relative w-[10vw] left-[10vw] text-yellow-500 font-bold'>What do we do?</p>
        <p className='relative w-[60vw] left-[10vw] top-[4vh] text-black text-4xl   font-bold'>Comprehensive pharmacy services</p>
        <p className='relative w-[60vw] left-[10vw] top-[6vh] text-slate-800'>Libero diam auctor tristique hendrerit in eu vel id. Nec leo amet suscipit nulla. Nullam vitae sit tempus diam.</p>
      </div>
      <div className='flex flex-row bg-white h-[60vh] gap-32 justify-around' >
        <div className='ml-[5vw]'>
          <button className='bg-blue-400 text-white py-2 px-6 mt-6 rounded-full'> Medical Center </button>
          <p className='text-slate-700 mt-10 text-2xl'>Choose from over 9,000 (work-
            safe) ecard designs</p>
            <p className='text-slate-700 mt-10 w-[30vw]'>
            Filter by occasion and pick the perfect virtual card for
your meme-loving colleague—you’re no longer
limited by the tiny selection at the store.
            </p>
        </div>
        <div>
          <Image
          src={card1}
          alt='card1'
          className='mt-[3vh] w-[30vw] relative right-[5vw] top-[8vh]'
          />
        </div>
        
      </div>
      {/* /////////////////////////////// */}
      
      <div className='flex flex-row-reverse bg-white h-[60vh] gap-32 justify-around' >
        <div className='mr-[3vw]'>
          <button className='bg-blue-400 text-white py-2 px-6 mt-6 rounded-full'> Pharmacies</button>
          <p className='text-slate-700 mt-10 text-2xl'>Create a shareable link so the
          whole team can sign</p>
            <p className='text-slate-700 mt-10 w-[30vw]'>
            Create a link so everyone can sign the group card
and keep track of who has signed it and who hasn’t.
No more asking. “Where’s the card?”
            </p>
        </div>
        <div>
          <Image
          src={card2}
          alt='card1'
          className='mt-[3vh] w-[30vw] relative left-[5vw] top-[8vh]'
          />
        </div>
        
      </div>
      {/* //////////////////////// */}
      
      <div className='flex flex-row bg-white h-[60vh] gap-32 justify-around' >
        <div className='ml-[5vw]'>
          <button className='bg-blue-400 text-white py-2 px-6 mt-6 rounded-full'> Whole sale and retail </button>
          <p className='text-slate-700 mt-10 text-2xl'>Choose from over 9,000 (work-
            safe) ecard designs</p>
            <p className='text-slate-700 mt-10 w-[30vw]'>
            Filter by occasion and pick the perfect virtual card for
your meme-loving colleague—you’re no longer
limited by the tiny selection at the store.
            </p>
        </div>
        <div>
          <Image
          src={card3}
          alt='card1'
          className='mt-[3vh] w-[30vw] relative right-[5vw] top-[8vh]'
          />
        </div>
        
      </div>
      {/* /////////////////////////////////// */}
      <div className='bg-gradient-to-t from-blue-600 to-white h-[60vh] flex flex-col gap-8 text-slate-900' >
      <div className='ml-[42vw] text-2xl'>
            Our Medicines
      </div>

      <div className='flex flex-row gap-5 justify-center'>
        <button className='rounded-full border-2 border-slate-950 bg-slate-950 w-[5vw] text-white'>Pills</button>
        <button className='rounded-full border-2 border-slate-950 w-[5vw]'>Pills</button>
        <button className='rounded-full border-2 border-slate-950 w-[5vw]'>Pills</button>
        <button className='rounded-full border-2 border-slate-950 w-[5vw]'>Pills</button>
      </div>
            <div className='flex flex-row gap-5 justify-center'>
            <div className='w-[15vw] h-[35vh] bg-white rounded-md pl-9 pt-5'>
              <Image
              src={Paracet}
              alt='paracet'
              />
              <p className='ml-5 text-lg text-slate-800 '>Ibuprofen 31</p>
            </div>
            <div className='w-[15vw] h-[35vh] bg-white rounded-md pl-9 pt-5'>
              <Image
              src={Paracet}
              alt='paracet'
              />
              <p className='ml-5 text-lg text-slate-800 '>Ibuprofen 31</p>
            </div><div className='w-[15vw] h-[35vh] bg-white rounded-md pl-9 pt-5'>
              <Image
              src={Paracet}
              alt='paracet'
              />
              <p className='ml-5 text-lg text-slate-800 '>Ibuprofen 31</p>
            </div><div className='w-[15vw] h-[35vh] bg-white rounded-md pl-9 pt-5'>
              <Image
              src={Paracet}
              alt='paracet'
              />
              <p className='ml-5 text-lg text-slate-800 '>Ibuprofen 31</p>
            </div>

            </div>
      </div>

      </div>
    </div>
  );
}
