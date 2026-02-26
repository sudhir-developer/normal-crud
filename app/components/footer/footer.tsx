const Footer= ()=>{
    return(
      <>
      <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            SudhirDev
          </h2>
          <p className="text-sm">
            Frontend Developer building modern, scalable and high-performance
            web applications using React & Next.js.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Projects</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <p className="text-sm">Email: sudhir@email.com</p>
          <p className="text-sm">Location: India</p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Sudhir Kumar. All rights reserved.
      </div>
    </footer>
    </>
    )
   
   }
   
   export default Footer;