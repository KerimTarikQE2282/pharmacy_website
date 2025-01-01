import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

function body() {
  return (
    <div className="mt-[10vh] mb-[10vh] px-4 sm:px-0">
  {/* Title Section */}
  <div className="text-center mb-8">
    <p className="text-slate-700 text-3xl sm:text-5xl font-semibold">Contact Us</p>
  </div>

  {/* Content Section */}
  <div className="flex flex-col sm:flex-row justify-center items-start gap-10 lg:ml-[7vw] mt-[5vh]">
    {/* Contact Form */}
    <div className="w-full sm:w-[30vw] h-auto sm:h-[60vh] shadow-xl py-8 px-6">
      <p className="text-xl font-semibold text-black text-center mb-6">Contact us</p>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
        className="max-w-[400px] mx-auto"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="p-3 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="p-3 rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
        ></textarea>
        <button
          type="submit"
          className="p-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>

    {/* Contact Details & Map */}
    <div className="w-full sm:w-[40vw] h-auto sm:h-[60vh] p-4 sm:p-10">
      {/* Contact Details */}
      <div className="flex flex-col sm:flex-row sm:gap-[3vw] mb-6">
        <div className="flex items-center gap-3 mb-4 sm:mb-0">
          <MapPin color="#42abf5" />
          <p className="text-gray-700">Near Arsho Megenagna</p>
        </div>
        <div className="flex items-center gap-3 mb-4 sm:mb-0">
          <Phone color="#42abf5" />
          <p className="text-gray-700">(843) 565-0130</p>
        </div>
        <div className="flex items-center gap-3">
          <Mail color="#42abf5" />
          <p className="text-gray-700">tman@gmail.com</p>
        </div>
      </div>

      {/* Map */}
      <iframe
        title="map"
        src="https://maps.google.com/maps?q=Arsho%20Megenagna&t=&z=13&ie=UTF8&iwloc=&output=embed"
        className="w-full h-60 sm:h-full border-0 rounded-lg lg:block hidden"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</div>

  )
}

export default body
