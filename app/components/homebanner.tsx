import Image from "next/image"
export default function HomeBanner(){
    return(
        <>
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
        </>
    )
}