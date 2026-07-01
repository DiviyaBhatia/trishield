import { useState } from 'react';

const Contact = ({ onContactClick }) => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div
        className="relative rounded-3xl mx-8 mb-16 px-8 py-16 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url("/contacbg.png")' }}
      >
        {/* Optional overlay if you want to dim the background */}
        <div className="absolute inset-0"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-sm text-gray-100 mb-4 uppercase tracking-wide">Contact Us</p>

          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Ask whatever you have in<br />
            your mind
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
          <div className="flex flex-col justify-start space-y-4">
            <img src='/tslogo.svg' className='w-32 h-auto'/>
            <p className="text-gray-600 max-w-md">
              Streamline workflows and grow your business with effective lead management.
            </p>
            <p className="text-gray-500">
              hello.active@gmail.com
            </p>
          </div>

          {/* Right Column - Navigation */}
          <div className="md:text-right flex flex-col justify-start space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Pages</h4>
            <nav className="space-y-2">
              <a href="/" className="block text-gray-600 hover:text-gray-900 transition-colors">
                Homepage
              </a>
              <a href="/contact" className="block text-gray-600 hover:text-gray-900 transition-colors">
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
