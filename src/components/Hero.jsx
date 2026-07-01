const Hero = ({ onContactClick }) => {
    return (
      <div className="container min-h-screen mx-auto flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-[72px] md:text-7xl font-thin leading-tight mb-8">
          Your Global Partner for <br/><span className="text-[#1d77ba] font-semibold">IT Solutions</span>
        </h1>
        <p className="mt-4 text-[18px] max-w-3xl text-zinc-500 mb-12">
          From managed infrastructure to AI-driven DevOps — delivering the full spectrum of technology services your business needs to thrive.
        </p>
        <div className="flex space-x-4">
          <a href="#services" className="px-8 py-4 bg-[#f15a27] text-white rounded-lg hover:bg-[#dc4512] transition font-bold">
            Our Services
          </a>
          <button onClick={onContactClick} className="px-8 py-4 bg-[#1d77ba] text-white rounded-lg hover:bg-[#155a8e] transition font-bold">
            Get in Touch
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;
  