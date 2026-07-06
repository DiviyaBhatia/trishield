"use client";
import { useState, useEffect } from 'react';

const Navbar = ({ setActiveSection, onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById("about");
    if (!aboutSection) {
      const handleScroll = () => setScrolled(window.scrollY > 300);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the 'about' section has entered the top threshold area of the screen
        setScrolled(entry.boundingClientRect.top <= 80);
      },
      { 
        threshold: 0, 
        rootMargin: "-80px 0px 0px 0px" // Trigger right as the header area is reached
      }
    );

    observer.observe(aboutSection);
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    if (setActiveSection) setActiveSection(id);
    const section = document.getElementById("active-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-4/5 transition-all duration-500 rounded-full py-3 px-6 z-[9999]
        ${scrolled 
          ? 'bg-blue-100/95 border border-[#1d77ba]/40 text-slate-800 shadow-xl backdrop-blur-md' 
          : 'bg-white/75 backdrop-blur-md border border-gray-200/30 text-gray-800 shadow-sm'
        }`}
    >
      <div className="flex items-center justify-between">
        <a href="#">
          <img 
            src='/tslogo.svg' 
            className="w-32 transition-all duration-500" 
            alt="Logo" 
          />
        </a>

        <div className="hidden lg:flex space-x-8 items-center">
          <a href="#services" className={`font-semibold transition-colors ${scrolled ? 'text-slate-700 hover:text-[#F15A29]' : 'text-gray-800 hover:text-[#F15A29]'}`}>SERVICES</a>
          <a href="#products" className={`font-semibold transition-colors ${scrolled ? 'text-slate-700 hover:text-[#F15A29]' : 'text-gray-800 hover:text-[#F15A29]'}`}>PRODUCTS</a>
          <a href="#trishield-edge" className={`font-semibold transition-colors ${scrolled ? 'text-slate-700 hover:text-[#F15A29]' : 'text-gray-800 hover:text-[#F15A29]'}`}>THE TRISHIELD EDGE</a>
          <a href="#insights" className={`font-semibold transition-colors ${scrolled ? 'text-slate-700 hover:text-[#F15A29]' : 'text-gray-800 hover:text-[#F15A29]'}`}>INSIGHTS</a>
          
          <div className="relative">
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className={`flex items-center gap-1 font-semibold transition-colors ${scrolled ? 'text-slate-700 hover:text-[#F15A29]' : 'text-gray-800 hover:text-[#F15A29]'}`}
            >
              ABOUT US
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
              <div className={`absolute left-0 mt-2 w-48 rounded-lg shadow-lg py-2 border ${scrolled ? 'bg-white border-blue-100 text-slate-800' : 'bg-white border-gray-100 text-gray-800'}`}>
                <button onClick={() => { handleNavClick("company"); setAboutOpen(false); }} className="block px-4 py-2 text-left w-full font-medium hover:text-[#F15A29] hover:bg-blue-50/40">ABOUT COMPANY</button>
                <button onClick={() => { handleNavClick("values"); setAboutOpen(false); }} className="block px-4 py-2 text-left w-full font-medium hover:text-[#F15A29] hover:bg-blue-50/40">OUR VALUES</button>
                <button onClick={() => { handleNavClick("mission"); setAboutOpen(false); }} className="block px-4 py-2 text-left w-full font-medium hover:text-[#F15A29] hover:bg-blue-50/40">OUR MISSION</button>
                <button onClick={() => { handleNavClick("policies"); setAboutOpen(false); }} className="block px-4 py-2 text-left w-full font-medium hover:text-[#F15A29] hover:bg-blue-50/40">OUR POLICIES</button>
              </div>
            )}
          </div>
        </div>

        <button onClick={onContactClick} className="hidden lg:inline-flex items-center bg-[#F15A29] text-white px-4 py-2 rounded-lg hover:bg-[#d94d22] transition-colors font-bold">
          GET IN TOUCH →
        </button>

        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={`lg:hidden mt-4 rounded-lg shadow-lg py-4 px-6 flex flex-col space-y-4 border ${scrolled ? 'bg-white border-blue-150 text-slate-800' : 'bg-white border-gray-150 text-gray-800'}`}>
          <a href="#services" onClick={() => setMobileOpen(false)} className="font-semibold hover:text-[#F15A29] text-gray-800">SERVICES</a>
          <a href="#products" onClick={() => setMobileOpen(false)} className="font-semibold hover:text-[#F15A29] text-gray-800">PRODUCTS</a>
          <a href="#trishield-edge" onClick={() => setMobileOpen(false)} className="font-semibold hover:text-[#F15A29] text-gray-800">THE TRISHIELD EDGE</a>
          <a href="#insights" onClick={() => setMobileOpen(false)} className="font-semibold hover:text-[#F15A29] text-gray-800">INSIGHTS</a>
          
          <details>
            <summary className="flex items-center gap-1 font-semibold cursor-pointer hover:text-[#F15A29] text-gray-800">
              ABOUT US
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="flex flex-col pl-4 space-y-2 mt-2">
              <button onClick={() => { handleNavClick("company"); setMobileOpen(false); }} className="text-left hover:text-[#F15A29] font-medium text-gray-700">ABOUT COMPANY</button>
              <button onClick={() => { handleNavClick("values"); setMobileOpen(false); }} className="text-left hover:text-[#F15A29] font-medium text-gray-700">OUR VALUES</button>
              <button onClick={() => { handleNavClick("mission"); setMobileOpen(false); }} className="text-left hover:text-[#F15A29] font-medium text-gray-700">OUR MISSION</button>
              <button onClick={() => { handleNavClick("policies"); setMobileOpen(false); }} className="text-left hover:text-[#F15A29] font-medium text-gray-700">OUR POLICIES</button>
            </div>
          </details>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
