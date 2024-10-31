// pages/index.js

import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-sans">
      
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] text-white flex items-center" style={{ backgroundImage: `url('/pharmacy-hero.jpg')` }}>
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">Your Trusted Partner in Pharmaceuticals</h1>
          <p className="text-xl mt-4">Delivering quality, affordable pharmaceutical solutions to empower healthcare and improve lives.</p>
        </div>
      </section>
      
      {/* Info Section */}
      <section className="container mx-auto py-12 px-6 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-xl">Vision</h3>
            <p>To be a trusted leader in delivering high-quality, affordable pharmaceuticals.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Core Value</h3>
            <p>We prioritize creativity, problem-solving, and empower our customers, team, and partners to drive positive change.</p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Mission</h3>
            <p>To supply essential medicines for both human and animal health, supporting a healthier community.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">A Legacy of Innovation and Care</h2>
        <p className="text-lg max-w-3xl mx-auto">Our journey began in 1991 E.C. with a small pharmacy run by three university colleagues...</p>
        <button className="bg-yellow-500 text-white py-2 px-6 mt-6 rounded-lg">Learn more</button>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold text-center">What Our Customers Are Saying</h2>
        <div className="mt-6 flex flex-col md:flex-row gap-8 items-center">
          <div className="text-left md:w-1/2">
            <p className="text-lg font-semibold">What Our Customers Are Saying About Us</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <p className="text-blue-500 font-bold mt-4">100+ Reviews</p>
          </div>
          <div className="text-left md:w-1/2">
            <blockquote className="text-xl font-light italic">"Pharmacy Store is my go-to for over-the-counter medications and health products..."</blockquote>
            <p className="mt-4 font-semibold">Theresa J. Jones, 24 years old</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-blue-500 py-12 text-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Comprehensive Pharmacy Services</h2>
        <p className="mb-8">Libero diam auctor tristique hendrerit in eu vel id...</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-6">
          <div className="bg-white text-blue-500 p-4 rounded-lg">
            <Image src="/service1.jpg" alt="Medical Center" width={300} height={200} className="rounded-lg" />
            <h3 className="font-bold mt-4">ZeOrit Medical Center PLC</h3>
            <p className="text-sm">Nec leo amet suscipit nulla vitae sit.</p>
          </div>
          <div className="bg-white text-blue-500 p-4 rounded-lg">
            <Image src="/service2.jpg" alt="Pharmacy" width={300} height={200} className="rounded-lg" />
            <h3 className="font-bold mt-4">Pharmacy</h3>
            <p className="text-sm">Nec leo amet suscipit nulla vitae sit.</p>
          </div>
          <div className="bg-white text-blue-500 p-4 rounded-lg">
            <Image src="/service3.jpg" alt="Wholesaler" width={300} height={200} className="rounded-lg" />
            <h3 className="font-bold mt-4">Wholesaler</h3>
            <p className="text-sm">Nec leo amet suscipit nulla vitae sit.</p>
          </div>
        </div>
      </section>
      
    </div>
  );
}
