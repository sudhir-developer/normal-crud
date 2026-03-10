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
       <a href="/" className="hover:text-blue-600 transition">Home</a>
       <a href="/aboutus" className="hover:text-blue-600 transition">About</a>
       <a href="/example" className="hover:text-blue-600 transition">Example</a>
       <a href="/chart" className="hover:text-blue-600 transition">Chart</a>
       <a href="/d3chart" className="hover:text-blue-600 transition">D3 Chart</a>
       <a href="/threejschart" className="hover:text-blue-600 transition">Three Js Chart</a>
       <a href="/contactus" className="hover:text-blue-600 transition">Contact Us</a>
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
       <div className="mobile_menu">
       <a href="/" className="hover:text-blue-600 transition link">Home</a>
       <a href="/aboutus" className="hover:text-blue-600 transition link">About</a>
       <a href="/example" className="hover:text-blue-600 transition link">Example</a>
       <a href="/chart" className="hover:text-blue-600 transition link">Chart</a>
       <a href="/d3chart" className="hover:text-blue-600 transition link">D3 Chart</a>
       <a href="/threejschart" className="hover:text-blue-600 transition link">Three Js Chart</a>
       <a href="/contactus" className="hover:text-blue-600 transition link">Contact Us</a>
       </div>
     </div>
   )}
 </header>


 {/* <div className="grid grid-cols-1 gap-4 p-6">
 <div className="bg-blue-500 text-white p-6">Column 1</div>
</div> */}
</>
 )

}

export default Header;