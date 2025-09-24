import { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => console.log('Email submitted:', email);

  return (
    <div>
      {/* Hero Section with Background Image */}
      <div
        className="relative rounded-3xl mx-8 mb-16 px-8 py-16 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: 'url("/contacbg.png")' }}
      >
        {/* Optional overlay if you want to dim the background */}
        <div className="absolute inset-0 "></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="text-sm text-gray-100 mb-4 uppercase tracking-wide">Contact Us</p>

          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Ask whatever you have in<br />
            your mind
          </h2>

          <p className="text-lg text-gray-500  mb-12 max-w-2xl mx-auto">
            Sign up today and see the difference Active can make for your business.
          </p>

          {/* Email Form */}
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
              onClick={handleSubmit}
              className="px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors font-medium whitespace-nowrap"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section can go here */}
      <div className="px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column - Brand */}
          <div>
            <div className="mb-6">
            <img src='/tststs@2x.png' className='w-82 h-fit'/>

            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Streamline workflows and grow your business with effective lead management.
            </p>
            <p className="text-gray-500">
              hello.active@gmail.com
            </p>
          </div>
          
          {/* Right Column - Navigation */}
          <div className="md:text-right">
            <h4 className="text-lg font-semibold text-gray-900 mb-6">Pages</h4>
            <nav className="space-y-4">
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
            <p className="text-sm text-gray-500 border-2 border-dashed border-blue-300 inline-block px-3 py-2 rounded">
              © trishield2025. All right reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
