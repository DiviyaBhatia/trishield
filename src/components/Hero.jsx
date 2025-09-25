const Hero = () => {
    return (
      <div className="container min-h-screen mx-auto flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-[72px] md:text-7xl font-thin leading-tight mb-8">
          Unlock Your Potential with <br/><span className="text-[#1d77ba] font-semibold">Our Solutions</span>
        </h1>
        <p className="mt-4 text-[18px] max-w-3xl text-zinc-500 mb-12">
          Transform your business with innovative strategies designed for growth. Join us on a journey to success.
        </p>
        <div className="flex space-x-4">
          <button className="px-8 py-4 bg-[#f15a27] text-white rounded-lg hover:bg-[#dc4512] transition font-bold">
            Our Services
          </button>
        </div>
      </div>
    );
  };
  
  export default Hero;
  