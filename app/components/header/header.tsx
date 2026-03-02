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
       <a href="/" className="block">Home</a>
       <a href="/aboutus" className="block">About</a>
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