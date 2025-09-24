const CaseStudies = () => {
    return (
      <div className="container mx-auto flex flex-col items-center justify-center p-8 text-center py-20">
      <p className="text-sm text-gray-600 mb-4 uppercase tracking-wide">What We Offer</p>
      
      <h2 className="text-5xl md:text-6xl font-thin leading-tight mb-8">
        Unleash Your Potential with Our{' '}
        <span className="text-[#1d77ba]">Latest Campaign</span>
      </h2>

      <p className="mt-4 text-lg max-w-3xl text-zinc-500 mb-16">
        Join us as we introduce our exciting new campaign designed to elevate your 
        experience. Discover innovative solutions that cater to your needs and drive results.
      </p>

      {/* Case Studies Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Case Study 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="w-full h-48 bg-gray-200 rounded-xl mb-6 flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h7v7H4V4zm0 9h7v7H4v-7zm9-9h7v7h-7V4zm0 9h7v7h-7v-7z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Discover Solutions That Drive Success and Elevate Your Business
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Unite your apps for a cohesive workflow.
          </p>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="w-full h-48 bg-gray-200 rounded-xl mb-6 flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h18v4H3V3zm0 6h18v2H3V9zm0 4h18v2H3v-2zm0 4h18v4H3v-4z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Advance Reporting
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Reports customized to your metrics.
          </p>
        </div>

        {/* Case Study 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="w-full h-48 bg-gray-200 rounded-xl mb-6 flex items-center justify-center">
            <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"/>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Quoting & Invoicing
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Generate quotes and invoices easily.
          </p>
        </div>
      </div>
    </div>
    );
  };
  
  export default CaseStudies;
  