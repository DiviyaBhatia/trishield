const CaseStudies = () => {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center p-8 text-center py-20">
       <p className="inline-block px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-500 uppercase tracking-wide bg-transparent">
  Case Studies
</p>
<h2 className="text-[56px] md:text-6xl font-semibold leading-tight mb-16">
Unleash Your Potential with Our{' '}
        <span className="text-[#1d77ba] font-thin">Latest Campaign</span>
        
      </h2>

      <p className=" text-lg max-w-3xl text-zinc-500 mb-16">
        Join us as we introduce our exciting new campaign designed to elevate your 
        experience. Discover innovative solutions that cater to your needs and drive results.
      </p>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Service 1 */}
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

        {/* Service 2 */}
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

        {/* Service 3 */}
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
  
  export default CaseStudies;
  