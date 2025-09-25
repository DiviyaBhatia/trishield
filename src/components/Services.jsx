const Services = () => {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center p-8 text-center ">
      <p className="inline-block px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-500 uppercase tracking-wide bg-transparent">
  What We Offer
</p>

      
      <h2 className="text-[56px] md:text-6xl font-semibold leading-tight mb-16">
        Explore Our Comprehensive Range of{' '}
        <span className="text-[#1d77ba] font-thin">Innovative Services</span>{' '}
        Tailored for You
      </h2>

      {/* Case Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* case 1 */}
        <div className="bg-[#F3F3F1] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-[#1d77ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-[24px] font-semibold text-gray-900 mb-4">
          Managed Services 
          </h3>
          <p className="text-gray-600 text-[16  px] leading-relaxed">
          SIEM, offshore support, and infrastructure management that keeps your systems secure, monitored, and running smoothly.
          </p>
        </div>

        {/* case 2 */}
        <div className="bg-[#F3F3F1] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-[#1d77ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-[24px] font-semibold text-gray-900 mb-4">
          Operational Services
          </h3>
          <p className="text-gray-600 text-[16  px] leading-relaxed">
          24/7 NOC and SOC support plus IT staff augmentation to ensure uptime, security, and expert coverage.
          </p>
        </div>

        {/* case 3 */}
        <div className="bg-[#F3F3F1] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-[#1d77ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-[24px] font-semibold text-gray-900 mb-4">
          Professional Services 
          </h3>
          <p className="text-gray-600 text-[16  px] leading-relaxed">
          Field services, logistics, staging, and IT equipment installation for seamless deployment and operations.
          </p>
        </div>
      </div>
    </div>
    );
  };
  
  export default Services;
  