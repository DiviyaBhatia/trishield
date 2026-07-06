const Hero = ({ onContactClick }) => {
  return (
    <div className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden py-20 px-8 text-center">
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-400/20 mix-blend-multiply filter blur-3xl opacity-60 animate-pulseGlow animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#f15a27]/15 mix-blend-multiply filter blur-3xl opacity-50 animate-pulseGlow animate-float-mid pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center">
        <h1 
          className="text-[56px] md:text-[84px] font-extrabold tracking-tight leading-[1.05] text-gray-900 mb-8 animate-fadeInUp font-poppins" 
          style={{ animationDelay: '200ms' }}
        >
          Your Global Partner for <br />
          <span className="text-[#1d77ba]">IT Solutions</span>
        </h1>

        <p 
          className="text-lg md:text-xl max-w-2xl text-gray-600 mb-12 leading-relaxed animate-fadeInUp" 
          style={{ animationDelay: '400ms' }}
        >
          From managed infrastructure to AI-driven DevOps — delivering the full spectrum of technology services your business needs to thrive.
        </p>

        <div 
          className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fadeInUp" 
          style={{ animationDelay: '600ms' }}
        >
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 bg-[#f15a27] text-white rounded-xl hover:bg-[#dc4512] transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Explore Services
          </a>
          <button
            onClick={onContactClick}
            className="w-full sm:w-auto px-8 py-4 bg-[#1d77ba] text-white rounded-xl hover:bg-[#155a8e] transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};
  
  export default Hero;
  