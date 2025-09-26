"use client";
import { useState, useEffect } from 'react';

const Navbar = ({ setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (setActiveSection) setActiveSection(id);
    const section = document.getElementById("active-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-4/5 transition-all duration-300
        ${scrolled 
          ? 'bg-white/95 backdrop-blur-lg rounded-full shadow-lg py-3 px-6 z-[9999]' 
          : 'bg-white py-3 px-4 z-[9999]'
        }`}
    >
      <div className="flex items-center justify-between">
        <a href="#">
          <img src='/tslogo.svg' className='w-32' alt="Logo" />
        </a>

        <div className="hidden lg:flex space-x-8 items-center">
          <div className="relative">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center gap-1 text-gray-800 text-base font-normal hover:text-[#F15A29] transition-colors"
            >
              About Us
              <svg
                className={`w-4 h-4 transform transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {aboutOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                <button onClick={() => handleNavClick("company")} className="block px-4 py-2 text-left text-gray-800 hover:text-[#F15A29]">About Company</button>
                <button onClick={() => handleNavClick("values")} className="block px-4 py-2 text-left text-gray-800 hover:text-[#F15A29]">Our Values</button>
                <button onClick={() => handleNavClick("mission")} className="block px-4 py-2 text-left text-gray-800 hover:text-[#F15A29]">Our Mission</button>
                <button onClick={() => handleNavClick("policies")} className="block px-4 py-2 text-left text-gray-800 hover:text-[#F15A29]">Our Policies</button>
              </div>
            )}
          </div>

          <a href="#services" className="text-gray-800 hover:text-[#F15A29] transition-colors">Services</a>
          <a href="#testimonials" className="text-gray-800 hover:text-[#F15A29] transition-colors">Testimonials</a>
          <a href="#case-studies" className="text-gray-800 hover:text-[#F15A29] transition-colors">Case Studies</a>
        </div>

        <a href="#contact" className="hidden lg:inline-flex items-center bg-[#F15A29] text-white px-4 py-2 rounded-lg hover:bg-[#d94d22] transition-colors">
          Get in Touch →
        </a>

        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg py-4 px-6 flex flex-col space-y-4">
          <details>
            <summary className="flex items-center gap-1 text-gray-800 cursor-pointer hover:text-[#F15A29]">
              About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="flex flex-col pl-4 space-y-2 mt-2">
              <button onClick={() => handleNavClick("company")} className="text-gray-800 hover:text-[#F15A29]">About Company</button>
              <button onClick={() => handleNavClick("values")} className="text-gray-800 hover:text-[#F15A29]">Our Values</button>
              <button onClick={() => handleNavClick("mission")} className="text-gray-800 hover:text-[#F15A29]">Our Mission</button>
              <button onClick={() => handleNavClick("policies")} className="text-gray-800 hover:text-[#F15A29]">Our Policies</button>
            </div>
          </details>
          <a href="#services" className="text-gray-800 hover:text-[#F15A29]">Services</a>
          <a href="#testimonials" className="text-gray-800 hover:text-[#F15A29]">Testimonials</a>
          <a href="#case-studies" className="text-gray-800 hover:text-[#F15A29]">Case Studies</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
