const Services = () => {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center p-8 text-center py-20">
      <p className="text-sm text-gray-600 mb-4 uppercase tracking-wide">What We Offer</p>
      
      <h2 className="text-5xl md:text-6xl font-thin leading-tight mb-16">
        Explore Our Comprehensive Range of{' '}
        <span className="text-[#1d77ba]">Innovative Services</span>{' '}
        Tailored for You
      </h2>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Service 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-[#1d77ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Discover Solutions That Drive Success and Elevate Your Business
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Our services are designed to meet your unique needs and challenges.
          </p>
        </div>

        {/* Service 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-[#1d77ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Transform Your Ideas into Reality with Our Expert Guidance
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We provide the expertise you need to turn visions into actionable plans.
          </p>
        </div>

        {/* Service 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-[#1d77ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Achieve Outstanding Results with Our Proven Strategies and Solutions
          </h3>
          <p className="text-gray-600 leading-relaxed">
            We deploy your solution seamlessly and ensure its continued performance with ongoing care.
          </p>
        </div>
      </div>
    </div>
    );
  };
  
  export default Services;
  