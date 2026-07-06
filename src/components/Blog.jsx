"use client";
import { useState } from "react";

const Blog = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const blogs = [
    {
      id: 1,
      date: "Oct 12, 2025",
      title: "Understanding SIEM in Modern IT Infrastructure",
      desc: "Why Security Information and Event Management is essential for tracking vulnerabilities and threats in real-time.",
      backdropText: "SECURITY / SECURITY",
      themeColor: "bg-[#f15a27]", // Orange
      tag: "INFRASTRUCTURE",
      image: (
        <svg className="w-16 h-16 text-[#1d77ba] drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 2,
      date: "Nov 03, 2025",
      title: "Top 5 Cybersecurity Trends to Watch in 2026",
      desc: "An in-depth look at emerging threats and the key defensive measures your enterprise should deploy.",
      backdropText: "CYBER / CYBER",
      themeColor: "bg-[#7A52B3]", // Purple
      tag: "CYBERSECURITY",
      image: (
        <svg className="w-16 h-16 text-[#f15a27] drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      id: 3,
      date: "Dec 18, 2025",
      title: "Scaling Operational Support Without Breaking the Bank",
      desc: "How 24/7 NOC/SOC coverage keeps systems optimized while controlling overhead budget.",
      backdropText: "NOC SOC / NOC SOC",
      themeColor: "bg-[#1d77ba]", // Blue
      tag: "OPERATIONS",
      image: (
        <svg className="w-16 h-16 text-green-500 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
        </svg>
      )
    }
  ];

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % blogs.length);
      setIsTransitioning(false);
    }, 350); // Matches transition duration
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setActiveSlide((prev) => (prev - 1 + blogs.length) % blogs.length);
      setIsTransitioning(false);
    }, 350);
  };

  // Helper to calculate card layout styles in the stack
  const getCardStyle = (index) => {
    const total = blogs.length;
    // Calculate index relative to the active slide
    const diff = (index - activeSlide + total) % total;

    if (diff === 0) {
      // Top card (active)
      if (isTransitioning) {
        // Slide out to the side
        return {
          zIndex: 30,
          transform: "translateX(120%) rotate(12deg) scale(0.95)",
          opacity: 0,
        };
      }
      return {
        zIndex: 30,
        transform: "translateX(0) rotate(0deg) scale(1)",
        opacity: 1,
      };
    } else if (diff === 1) {
      // Second card
      if (isTransitioning) {
        // Transition to top active
        return {
          zIndex: 30,
          transform: "translateX(0) rotate(0deg) scale(1)",
          opacity: 1,
        };
      }
      return {
        zIndex: 20,
        transform: "translateX(8px) translateY(12px) rotate(-2.5deg) scale(0.97)",
        opacity: 0.95,
      };
    } else {
      // Third card (bottom)
      if (isTransitioning) {
        // Transition to second card
        return {
          zIndex: 20,
          transform: "translateX(8px) translateY(12px) rotate(-2.5deg) scale(0.97)",
          opacity: 0.95,
        };
      }
      return {
        zIndex: 10,
        transform: "translateX(-12px) translateY(8px) rotate(3deg) scale(0.94)",
        opacity: 0.85,
      };
    }
  };

  return (
    <div className={`relative min-h-[95vh] py-24 w-full overflow-hidden transition-colors duration-500 ${blogs[activeSlide].themeColor} flex flex-col justify-center items-center px-8`}>
      
      {/* Repeating Backdrop Staggered Text Grid */}
      <div className="absolute inset-0 flex flex-col justify-between py-8 md:py-16 overflow-hidden select-none pointer-events-none z-0">
        <div className="text-[120px] md:text-[220px] font-black text-black/10 uppercase tracking-tighter whitespace-nowrap leading-none font-poppins -translate-x-12">
          {blogs[activeSlide].backdropText}
        </div>
        <div className="text-[120px] md:text-[220px] font-black text-black/10 uppercase tracking-tighter whitespace-nowrap leading-none font-poppins translate-x-12">
          {blogs[activeSlide].backdropText}
        </div>
        <div className="text-[120px] md:text-[220px] font-black text-black/10 uppercase tracking-tighter whitespace-nowrap leading-none font-poppins -translate-x-24">
          {blogs[activeSlide].backdropText}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Title Tag */}
        <p className="inline-block px-4 py-2 border border-white/30 rounded-full text-sm text-white uppercase tracking-wide bg-white/10 mb-12 font-poppins">
          Latest Insights
        </p>

        {/* Featured Slider Card Wrapper */}
        <div className="relative w-full max-w-4xl flex items-center justify-center py-6">
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] md:left-[-60px] z-50 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-gray-900 shadow-2xl flex items-center justify-center hover:scale-115 transition-transform active:scale-95 border border-gray-150"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-[-20px] md:right-[-60px] z-50 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-gray-900 shadow-2xl flex items-center justify-center hover:scale-115 transition-transform active:scale-95 border border-gray-150"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Stacking Messy Card Deck Container */}
          <div className="relative w-full h-[580px] sm:h-[500px] md:h-[450px]">
            {blogs.map((blog, idx) => {
              const currentStyle = getCardStyle(idx);
              return (
                <div
                  key={blog.id}
                  style={currentStyle}
                  className="absolute inset-0 w-full h-full bg-white rounded-[32px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-200/50 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 transition-all duration-350 ease-out origin-center"
                >
                  {/* Left Side: Info & Meta */}
                  <div className="flex-1 text-left flex flex-col h-full">
                    <div className="flex items-center gap-4 text-xs font-bold tracking-wider text-gray-400 mb-4 font-poppins">
                      <span className="text-[#f15a27] uppercase">{blog.tag}</span>
                      <span>•</span>
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-4 font-poppins leading-tight tracking-tight">
                      {blog.title}
                    </h3>
                    
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
                      {blog.desc}
                    </p>

                    <a
                      href="#"
                      className="inline-flex items-center gap-2 font-bold text-gray-950 hover:text-[#f15a27] transition-colors group font-poppins mt-auto text-sm"
                    >
                      Read Article
                      <span className="transform transition-transform group-hover:translate-x-2">→</span>
                    </a>
                  </div>

                  {/* Right Side: Phone Mockup */}
                  <div className="flex-shrink-0 relative flex justify-center items-center w-full md:w-auto">
                    <div className="relative w-48 h-[280px] bg-neutral-950 rounded-[32px] border-4 border-neutral-800 shadow-xl overflow-hidden flex flex-col items-center justify-center p-2.5">
                      {/* Notch */}
                      <div className="absolute top-1.5 w-20 h-3.5 bg-neutral-800 rounded-full z-25"></div>
                      
                      {/* Phone screen UI */}
                      <div className="w-full h-full bg-slate-900 rounded-[22px] p-2.5 flex flex-col justify-between overflow-hidden relative border border-slate-800/80">
                        {/* Glowing circles */}
                        <div className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-blue-500/10 filter blur-lg"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-orange-500/10 filter blur-lg"></div>

                        {/* Top status */}
                        <div className="relative z-10 flex justify-between items-center text-[7px] text-gray-500 font-medium">
                          <span>9:41 AM</span>
                          <div className="w-1 h-1 rounded-full bg-green-500 animate-ping"></div>
                        </div>

                        {/* Content graphic */}
                        <div className="relative z-10 flex-1 flex flex-col justify-center items-center gap-2 py-2">
                          <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 backdrop-blur-md">
                            {blog.image}
                          </div>
                          <span className="text-[9px] font-bold text-white tracking-widest uppercase font-poppins">
                            {blog.tag}
                          </span>
                        </div>

                        {/* Bottom status widget */}
                        <div className="relative z-10 w-full bg-white/5 border border-white/10 rounded-lg py-1 px-2 flex justify-between items-center">
                          <span className="text-[7px] text-gray-400">Monitoring</span>
                          <span className="text-[7px] text-green-400 font-bold">SECURE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
