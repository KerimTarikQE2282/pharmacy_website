import React from 'react';
import Image from 'next/image';
import Animatedtooltips from '../../../../app/components/ui/Animatedtooltips'
import card1 from '../../../../Resources/Home/cards/card1.png'
import user1 from '../../../../Resources/users/user1.avif'
import user2 from '../../../../Resources/users/user2.avif'
import user3 from '../../../../Resources/users/user3.avif'
function Testimonials() {
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
          name: "Jane lgith",
          designation: "Data Scientist",
          image:
                {user3}
        }
      ];
  return (
    <div className='lg:px-[10vh] px-[7vw] lg:h-[80vh] h-[80vh] lg:mt-10'>
      
    <div id="testimonials" className=" h-[70vh] bg-white py-32 flex lg:flex-row flex-col">
      <p className="relative lg:bottom-[10vh] bottom-[5vh] lg:text-md left-[6vw] text-yellow-400 font-bold">Testimonials</p>
      <div className="w-[50vw]">
        <p className='text-4xl text-black font-bold lg:w-[40vw] lg:[100vw] w-[100vw]'>What <span className='text-blue-500'>  Our Customers </span><br/> are saying about us</p>
        <div className='lg:mt-[10vh] mt-[5vh] mb:mb-0 mb-[5vh] lg:ml-[5vw] ml-[17vw] '>
        <Animatedtooltips items={people} />
        </div>
      </div>
      <div className="text-slate-900 lg:w-[30vw] w-full">
        <p>
          "Pharmacy Store is my go-to for over-the-counter medications and health products. They have a wide selection, and their website makes it easy to order online. The only improvement I'd suggest is expanding their beauty and skincare section."
        </p>
        <p className="mt-[5vh] font-bold">Theresa J. Jones</p>
        <p>24 years old</p>
      </div>
    </div>
   
 
    </div>
  );
}

export default Testimonials;
