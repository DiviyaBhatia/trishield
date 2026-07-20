"use client";
import { useRef, useState } from "react";

const Services = () => {
  const scrollRef = useRef(null);
  const [activePage, setActivePage] = useState(0);

  const servicesData = [
    {
      title: "Managed Services",
      desc: "Our Managed Services practice takes on the day-to-day operational burden of your IT environment. We combine skilled engineers with purpose-built tooling to deliver consistent, measurable outcomes - reducing downtime, lowering costs, and improving service quality.",
      highlights: ["Unified Endpoint Management (UEM)", "Managed NOC", "Network Security Management", "Virtual Infrastructure Management", "System Administration", "Multi-Cloud Management"],
      colorClass: {
        bg: "bg-[#F3F3F1]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2 2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Professional Services",
      desc: "Our Professional Services team delivers hands-on expertise for your infrastructure projects - whether on-site or remote. From new technology deployments to ongoing support, we bring the skills and experience to get the job done right, on time, and to specification.",
      highlights: ["Data Centre Support", "Wifi Installations", "Hardware Refresh", "Remote Support"],
      colorClass: {
        bg: "bg-[#EAEAEA]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Value Added Reseller Services",
      desc: "As a trusted technology reseller, we go beyond simply supplying equipment. We combine deep vendor relationships, procurement expertise, and lifecycle knowledge to ensure you get the right technology at the right price - with professional support at every stage.",
      highlights: ["Data Centre Hardware", "Enterprise Infrastructure", "EOL / EOS Hardware"],
      colorClass: {
        bg: "bg-[#F3F3F1]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Staff Augmentation",
      desc: "When you need specialised skills quickly - without the overhead of permanent hiring - our Staff Augmentation service delivers vetted, experienced professionals who integrate seamlessly into your team. We provide flexible engagements that scale with your project demands.",
      highlights: ["Network & Systems Specialists", "Cybersecurity Specialists", "DevOps Engineers"],
      colorClass: {
        bg: "bg-[#EAEAEA]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      title: "Managed Security Services",
      desc: "Cyber threats are growing in scale and sophistication. Our Security Services provide the people, processes, and technology to protect your organisation - from real-time threat detection and response through to privileged access governance and vulnerability management.",
      highlights: ["Managed SOC", "Vulnerability Management", "PIM / PAM"],
      colorClass: {
        bg: "bg-[#F3F3F1]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "DevOps Services",
      desc: "Our DevOps Services practice helps organisations modernise their operations through automation, AI-powered tooling, and cloud-native design. We build solutions that reduce manual effort, accelerate delivery cycles, and give you the insight to make smarter technology decisions.",
      highlights: ["AI-Driven IT Operations", "AIOps & Automation", "Predictive Analytics", "Intelligent Monitoring"],
      colorClass: {
        bg: "bg-[#EAEAEA]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  const scrollToPage = (pageIndex) => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(".snap-center");
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 32; // gap-8 = 32px
        scrollRef.current.scrollTo({
          left: pageIndex * (cardWidth + gap),
          behavior: "smooth"
        });
        setActivePage(pageIndex);
      }
    }
  };

  const scrollLeft = () => {
    if (activePage > 0) {
      scrollToPage(activePage - 1);
    }
  };

  const scrollRight = () => {
    if (activePage < servicesData.length - 1) {
      scrollToPage(activePage + 1);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const card = scrollRef.current.querySelector(".snap-center");
      if (card) {
        const cardWidth = card.offsetWidth;
        const gap = 32;
        const index = Math.round(scrollLeft / (cardWidth + gap));
        if (index >= 0 && index < servicesData.length) {
          setActivePage(index);
        }
      }
    }
  };

  return (
    <div className="bg-white text-black w-full py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="w-full text-center pb-12">
          <div className="mb-6">
            <p className="inline-block px-4 py-2 border border-[#1d77ba]/30 rounded-full text-sm font-bold text-[#1d77ba] uppercase tracking-wide bg-transparent font-poppins">
              WHAT WE DO
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-4 font-poppins tracking-tight max-w-4xl mx-auto text-gray-900">
            Explore Our Comprehensive Range of{' '}
            <span className="text-[#1d77ba] font-normal">Innovative Services</span>{' '}
            Tailored for You
          </h2>
        </div>

        {/* Horizontal scroll container wrapper */}
        <div className="relative w-full overflow-hidden">
          
          {/* Scrollable Row */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-8 w-full py-4 no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 md:px-12"
          >
            {servicesData.map((service, index) => {
              return (
                <div
                  key={index}
                  className={`snap-center w-[85vw] md:w-[850px] flex-shrink-0 rounded-3xl p-6 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] border border-gray-200/50 flex flex-col md:flex-row gap-6 md:gap-10 items-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${service.colorClass.bg}`}
                >
                  {/* Left Column: Huge Number */}
                  <div className="md:w-1/3 flex-shrink-0 text-center md:text-left flex items-center justify-center md:justify-start">
                    <span className="text-[100px] md:text-[140px] font-extrabold text-gray-900/10 leading-none font-poppins select-none">
                      {index + 1}
                    </span>
                  </div>

                  {/* Right Column: Content */}
                  <div className="flex-1 text-left flex flex-col justify-center">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 bg-white shadow-sm text-[#1d77ba]">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 font-poppins leading-tight tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                      {service.desc}
                    </p>

                    {/* Sub-services highlights */}
                    <div className="border-t border-gray-300/30 pt-3 mt-1">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 font-poppins">Key Solutions</p>
                      <div className="flex flex-wrap gap-2">
                        {service.highlights.map((h, i) => (
                          <span key={i} className="text-xs bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-lg shadow-sm font-medium">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={scrollLeft}
              disabled={activePage === 0}
              aria-label="Scroll left"
              className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1d77ba] hover:text-white transition-colors duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex space-x-2.5">
              {servicesData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToPage(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    activePage === index ? "bg-[#1d77ba] w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={scrollRight}
              disabled={activePage === servicesData.length - 1}
              aria-label="Scroll right"
              className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1d77ba] hover:text-white transition-colors duration-300 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
