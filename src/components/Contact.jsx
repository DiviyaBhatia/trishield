import { useState } from 'react';

const Contact = ({ onContactClick }) => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div
        className="relative rounded-3xl mx-8 mb-16 px-8 py-16 overflow-hidden bg-cover bg-center"
        // style={{ backgroundImage: 'url("/contacbg.png")' }}
      >
        {/* Optional overlay if you want to dim the background */}
        <div className="absolute inset-0"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-sm text-gray-100 mb-4 uppercase tracking-wide">Contact Us</p>

          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight font-poppins tracking-tight">
            How We Can Help You
          </h2>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Get in touch with our expert team and find out how we can help protect and scale your business.
          </p>

          <button
            onClick={onContactClick}
            className="px-8 py-4 bg-[#f15a27] text-white rounded-xl hover:bg-[#dc4512] transition-colors font-bold shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Brand */}
          <div className="flex flex-col justify-start space-y-6">
            <img src='/tslogo.svg' className='w-32 h-auto' alt="Trishield Brand Logo" />
            <div className="flex flex-col space-y-3">
              <div className="flex flex-wrap items-center gap-4 text-xs font-light tracking-wider text-gray-900">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#f15a27] flex items-center justify-center shadow-sm flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="7.5" r="3.5" />
                      <path d="M12 21c-2.8 0-5-2.2-5-5s3-5.5 5-2c2-3.5 5-0.8 5 2s-2.2 5-5 5z" />
                    </svg>
                  </div>
                  <span className="font-poppins font-light tracking-[0.25em] text-[11px] uppercase">AVAILABLE</span>
                </div>
                
                <div className="hidden sm:block h-6 w-[1px] bg-gray-300"></div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#1d77ba] flex items-center justify-center shadow-sm flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2.5L6.5 13h5.5l-1 8.5L17.5 11h-5.5z" />
                    </svg>
                  </div>
                  <span className="font-poppins font-light tracking-[0.25em] text-[11px] uppercase">AGILE</span>
                </div>

                <div className="hidden sm:block h-6 w-[1px] bg-gray-300"></div>

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#f15a27] flex items-center justify-center shadow-sm flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.8" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 16c1.5-4 5-4.5 11-4.5" />
                      <path d="M14 7.5l4 4-4 4" />
                    </svg>
                  </div>
                  <span className="font-poppins font-light tracking-[0.25em] text-[11px] uppercase">AHEAD</span>
                </div>
              </div>
              <p className="text-xs font-bold tracking-wider text-gray-700 uppercase mt-1">
                YOUR TRUSTED IT PARTNER FOR YOUR BUSINESS
              </p>
            </div>
            <p className="text-gray-500">
              contact@trishield.tech
            </p>
          </div>

          {/* Right Column - Navigation */}
          <div className="md:text-right flex flex-col justify-start space-y-4">
            <h4 className="text-lg font-bold text-gray-900 mb-4 font-poppins">Pages</h4>
            <nav className="space-y-2">
              <a href="/" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Homepage
              </a>
              <a href="#contact" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </a>
              <a href="/terms" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Terms & Conditions
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-200">
          <div className="text-right">
            <p className="text-sm text-gray-500 inline-block">
              © trishield2025. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
