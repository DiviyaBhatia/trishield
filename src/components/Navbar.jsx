import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false); // <-- mobile menu state

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 md:w-4/5 transition-all duration-300
        ${scrolled 
          ? 'bg-white/95 backdrop-blur-lg rounded-full shadow-lg  px-6 z-[9999]' 
          : 'bg-white  px-4 z-[9999]'
        }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src='/tslogo.svg' className='w-32 '/>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">Testimonials</a>
          <a href="#case-studies" className="text-gray-700 hover:text-blue-600 transition">Case Studies</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-4 px-6 flex flex-col space-y-4">
          <a href="#services" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Services</a>
          <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Testimonials</a>
          <a href="#case-studies" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Case Studies</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition" onClick={() => setMobileOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
