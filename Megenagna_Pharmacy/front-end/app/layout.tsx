import type { Metadata } from "next";
import localFont from "next/font/local";
import "./output.css";
import Image from "next/image";
import Logo from '../Resources/meg-pharmancy logo 1.png'
import Location_icon from '../Resources/Pin_light.png'
import Calendar_icon from '../Resources/Calendar_light.png'
import Link from "next/link";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <nav className="bg-white flex flex-row justify-between px-10 py-2 ">
        <div>
        <Image
          src={Logo}
          alt="Next.js logo"
          className="w-[9vw] h-[9vh] relative bottom-4"

          priority  />
          </div>
          <div className="flex flex-row  " >
            <div className="flex flex-row border-r border-slate-400 margin-r-8   text-slate-500 px-10 justify-center">
             
           <Image
          src={Location_icon}
          alt="Next.js logo"
          className="w-[2vw] h-[4vh] mt-3"
          priority  />
          <div className="ml-4 flex flex-col justify-center">
              <p className="font-light">Megnagna Near Arsho Labs</p>
              <p>8AM to 3 PM</p>

              </div>
          </div>
          <div className="flex flex-row  margin-r-8   text-slate-500 px-10 justify-center">
             
           <Image
          src={Calendar_icon}
          alt="Next.js logo"
          className="w-[2vw] h-[4vh] mt-3"
          priority  />
          <div className="ml-4 flex flex-col justify-center">
              <p className="font-light">Monday to Sunday</p>
              <p>8AM to 3 PM</p>

              </div>
          </div>
          </div>
      
      </nav>
      <div className="bg-[#42abf5] h-10 py-2">
        <div className="text-white flex flex-row justify-evenly w-[50vw]">
          <Link href={'/pages/home'}>Home</Link>
          <Link href={'/pages/about'}>about us</Link>
          <Link href={'/pages/portofolio'}>Portofolio</Link>
        </div>
      </div>
        
        {children}


        <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          {/* Left Section - Company and Resources */}
          <div className="flex flex-wrap w-full lg:w-2/3">
            {/* Company */}
            <div className="w-1/2 lg:w-1/4 mb-6 lg:mb-0">
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Products</a></li>
                <li><a href="#" className="hover:underline">Services</a></li>
                <li><a href="#" className="hover:underline">Blog & News</a></li>
              </ul>
            </div>
            {/* Resources */}
            <div className="w-1/2 lg:w-1/4 mb-6 lg:mb-0">
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Educational</a></li>
                <li><a href="#" className="hover:underline">Mental Health Resources</a></li>
                <li><a href="#" className="hover:underline">Nutrition</a></li>
                <li><a href="#" className="hover:underline">Medication Guides</a></li>
              </ul>
            </div>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <h3 className="font-semibold text-lg mb-4">Follow Our Social Media</h3>
            <div className="flex flex-wrap gap-2">
              <a href="#" className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">Instagram</a>
              <a href="#" className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">Youtube</a>
              <a href="#" className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">Facebook</a>
              <a href="#" className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">LinkedIn</a>
              <a href="#" className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">Twitter</a>
              <a href="#" className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">Tik Tok</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-white pt-4 flex justify-between items-center text-sm">
          <p>Copyright © 2023 Pharmacy Store | Design by TokoTema</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
      </body>
    </html>
  );
}
