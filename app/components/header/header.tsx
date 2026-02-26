"use client";
import Image from "next/image";
import { useState } from "react";

const Header= ()=>{
   const [isOpen, setIsOpen] = useState(false);
 return(
   <>
   <header className="bg-white shadow-md">
   <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
     
     {/* Logo */}
     <h1 className="text-2xl font-bold text-blue-600">
       SudhirDev
     </h1>

     {/* Desktop Menu */}
     <nav className="hidden md:flex space-x-6">
       <a href="#" className="hover:text-blue-600 transition">Home</a>
       <a href="#" className="hover:text-blue-600 transition">About</a>
       <a href="#" className="hover:text-blue-600 transition">Projects</a>
       <a href="#" className="hover:text-blue-600 transition">Contact</a>
     </nav>

     {/* Mobile Button */}
     <button
       className="md:hidden text-2xl"
       onClick={() => setIsOpen(!isOpen)}
     >
       ☰
     </button>
   </div>

   {/* Mobile Menu */}
   {isOpen && (
     <div className="md:hidden bg-gray-100 px-6 pb-4 space-y-3">
       <a href="#" className="block">Home</a>
       <a href="#" className="block">About</a>
       <a href="#" className="block">Projects</a>
       <a href="#" className="block">Contact</a>
     </div>
   )}
 </header>

 <section className="relative h-[70vh] flex items-center justify-center px-6 text-white overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/banner.jpg"
        alt="Banner"
        fill
        className="object-cover"
        priority={false}   // Lazy load (default behavior)
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center">
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-500">Sudhir Kumar</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Frontend Developer specializing in React, Next.js and building
          high-performance web applications.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
            View Projects
          </button>

          <button className="border border-gray-400 hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition">
            Contact Me
          </button>
        </div>

      </div>
    </section>
 {/* <div className="grid grid-cols-1 gap-4 p-6">
 <div className="bg-blue-500 text-white p-6">Column 1</div>
</div> */}
</>
 )

}

export default Header;