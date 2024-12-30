"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./output.css";
import Image from "next/image";
import Logo from '../Resources/meg-pharmancy logo 1.png'
import Location_icon from '../Resources/Pin_light.png'
import Calendar_icon from '../Resources/Calendar_light.png'
import FooterLogo from '../Resources/footer/FooterLogo.png'
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { useState } from "react";

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

 const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-white">
        <nav className="bg-white flex flex-col lg:flex-row justify-between px-4 lg:px-10 py-4">
          <div className="flex justify-center lg:justify-start mb-4 lg:mb-0">
            <Image
              src={Logo}
              alt="Next.js logo"
              className="w-[40px] h-[40px] lg:w-[9vw] lg:h-[9vh] relative lg:bottom-4"
              priority
            />
          </div>
          <div className="lg:flex lg:flex-col items-center hidden">
            <div className="flex flex-row  lg:mr-8 text-slate-500 px-4 lg:px-10 py-2 lg:py-0">
              <Image
                src={Location_icon}
                alt="Location Icon"
                className="w-[20px] h-[20px] lg:w-[2vw] lg:h-[4vh] mt-1 lg:mt-3"
                priority
              />
              <div>
              <div className="ml-4 flex flex-col justify-center lg:border-b-0 lg:border-r border-slate-400">
                <p className="font-light text-lg lg:text-base">Megnagna Near Arsho Labs</p>
                <p className="text-lg lg:text-base">8AM to 3 PM</p>
              </div>
            </div>
            <div className="flex flex-row text-slate-500 px-4 lg:px-10 py-2 lg:py-0 ">
              <Image
                src={Calendar_icon}
                alt="Calendar Icon"
                className="w-[20px] h-[20px] lg:w-[2vw] lg:h-[4vh] mt-1 lg:mt-3"
                priority
              />
              <div className="ml-4 flex flex-col justify-center">
                <p className="font-light text-lg lg:text-base">Monday to Sunday</p>
                <p className="text-lg lg:text-base">8AM to 3 PM</p>
              </div>
              </div>
            </div>
          </div>
        </nav>

        <nav className="bg-[#42abf5] py-2">
          <div className="text-white flex flex-col lg:flex-row lg:justify-start justify-center lg:justify-evenly space-y-2 lg:space-y-0 w-full lg:w-[50vw] mx-auto">
            <div className="lg:hidden">
              <div className="flex items-center justify-between" onClick={() => setMenuOpen(!menuOpen)}>
                <span>Menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
              {menuOpen && (
                <div className="bg-white text-black flex flex-col space-y-2 mt-2 p-4 rounded-lg">
                  <Link href="/pages/home" onClick={() => setMenuOpen(false)}>Home</Link>
                  <Link href="/pages/about" onClick={() => setMenuOpen(false)}>About Us</Link>
                  <Link href="/pages/portofolio" onClick={() => setMenuOpen(false)}>Portfolio</Link>
                  <Link href="/pages/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                </div>
              )}
            </div>

            
          </div>
          <div className="hidden lg:flex space-x-8 ml-5">
              <Link href="/pages/home">Home</Link>
              <Link href="/pages/about">About Us</Link>
              <Link href="/pages/portofolio">Portfolio</Link>
              <Link href="/pages/contact">Contact Us</Link>
            </div>
        </nav>

        {children}

        <footer className="bg-blue-900 text-white py-10 flex flex-col px-[10vw]">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3 relative">
              <Image src={FooterLogo} alt="logo" className="w-[4vw] h-[4vw]" />
              <p className="relative top-3">Pharmacy <br /> store</p>
            </div>
            <div>
              <button className="rounded-full bg-white w-[4vw] h-[4vw]">
                <ArrowUp color="Black" className="relative left-5" />
              </button>
            </div>
          </div>
          <hr className="w-[80vw] mt-10" />
          <div className="h-[30vh] mt-5 flex flex-row gap-[10vw]">
            <div className="w-[15vw] h-[30vh]">
              <p className="font-bold text-2xl">Company</p>
              <div className="mt-3">
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
              </div>
            </div>
            <div className="w-[15vw] h-[30vh]">
              <p className="font-bold text-2xl">Company</p>
              <div className="mt-3">
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
                <p>About us</p>
              </div>
            </div>
            <div className="w-[45vw] h-[30vh] bg-white">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Arsho%20Megenagna&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 rounded-lg"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <hr className="w-[80vw] mt-3" />
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-3 relative">
              <p className="relative top-3">Copyright © 2023 Pharmacy Store</p>
            </div>
            <div>
              <p>Terms of use / Privacy Policy</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
