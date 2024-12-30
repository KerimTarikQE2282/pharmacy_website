import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

function body() {
  return (
    <div className='mt-[10vh] mb-[10vh]'>
      <div>
        <p className='text-slate-700  text-center text-5xl font-semiBold'>Contact Us</p>
        <p></p>
      </div>
      <div className='flex flex-row ml-[15vw] mt-[5vh]'>
        <div className='w-[30vw] h-[60vh] '>
            <div className='shadow-xl h-full py-[5vh]'>
                <p className='text-xl font-semibold text-black text-center '>Contact us</p>
                <form 
      
      style={{
        display: 'flex', 
        flexDirection: 'column', 
        maxWidth: '400px', 
        margin: 'auto',
        gap: '10px',
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        // value={formData.name}
        // onChange={handleChange}
        style={{
          padding: '10px',
          borderRadius: '20px',
          border: '1px solid #ccc',
          outline: 'none',
        }}
        className='mt-[6vh]'
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        // value={formData.email}
        // onChange={handleChange}
        style={{
          padding: '10px',
          borderRadius: '20px',
          border: '1px solid #ccc',
          outline: 'none',
        }}
        className='mt-7'
      />
      <textarea
        name="message"
        placeholder="Your Message"
        // value={formData.message}
        // onChange={handleChange}
        style={{
          padding: '10px',
          borderRadius: '10px',
          border: '1px solid #ccc',
          outline: 'none',
          resize: 'none',
          height: '100px',
        }}
         className='mt-7'
      ></textarea>
      <button
        type="submit"
        style={{
          padding: '10px 20px',
          borderRadius: '20px',
          border: 'none',
          backgroundColor: '#007bff',
          color: '#fff',
          cursor: 'pointer',
        }}
         className='mt-7'
      >
        Send
      </button>
    </form>
            </div>
        </div>
        <div className='w-[40vw] h-[60vh] p-10 '>
        <div className=" flex flex-row gap-[3vw] mb-2 relative bottom-5">
              <div className="flex flex-row items-center gap-4">
               <MapPin color={"#42abf5"}/>
                <p className="text-gray-700">Near Arsho Megenagna</p>
              </div>
              <div className="flex flex-row items-center gap-4">
              <Phone color={"#42abf5"}/>
                <p className="text-gray-700">(843) 565-0130</p>
              </div>
              <div className="flex flex-row items-center gap-4">
                <Mail color={"#42abf5"}/>
                <p className="text-gray-700">tman@gmail.com</p>
              </div>
            </div>
        <iframe
                title="map"
                src="https://maps.google.com/maps?q=Arsho%20Megenagna&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 rounded-lg"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
        </div>
      </div>
    </div>
  )
}

export default body
