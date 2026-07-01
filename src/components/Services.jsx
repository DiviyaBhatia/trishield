"use client";
import { useRef, useState } from 'react';

const Services = () => {
  const scrollRef = useRef(null);
  const [activePage, setActivePage] = useState(0);

  const servicesData = [
    {
      category: "CATEGORY 01",
      title: "Managed Services",
      desc: "Our Managed Services practice takes on the day-to-day operational burden of your IT environment so your team can focus on strategic priorities. We combine skilled engineers with purpose-built tooling to deliver consistent, measurable outcomes.",
      highlights: ["Managed NOC", "Network Security Management", "Virtual Infrastructure", "System Administration", "Multi-Cloud Management"],
      colorClass: {
        bg: "bg-[#F3F3F1]",
        border: "border-transparent",
        text: "text-[#1d77ba]",
        badgeBg: "bg-blue-100/70 text-[#1d77ba]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2 2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      category: "CATEGORY 02",
      title: "Professional Services",
      desc: "Our Professional Services team delivers hands-on expertise for your infrastructure projects — whether on-site or remote. From new technology deployments to ongoing support, we bring the skills and experience to get the job done right.",
      highlights: ["Data Centre Support", "Wifi Installations", "Hardware Refresh", "Remote Support"],
      colorClass: {
        bg: "bg-[#F3F3F1]",
        border: "border-transparent",
        text: "text-[#1d77ba]",
        badgeBg: "bg-blue-100/70 text-[#1d77ba]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      category: "CATEGORY 03",
      title: "Security Services",
      desc: "Cyber threats are growing in scale and sophistication. Our Security Services provide the people, processes, and technology to protect your organisation — from real-time threat detection and response to vulnerability management.",
      highlights: ["Managed SOC", "Vulnerability Management", "PIM / PAM"],
      colorClass: {
        bg: "bg-[#F3F3F1]",
        border: "border-transparent",
        text: "text-[#1d77ba]",
        badgeBg: "bg-blue-100/70 text-[#1d77ba]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      category: "CATEGORY 04",
      title: "Staff Augmentation",
      desc: "When you need specialised skills quickly — without the overhead of permanent hiring — our Staff Augmentation service delivers vetted, experienced professionals who integrate seamlessly into your team.",
      highlights: ["Network & Systems", "Cybersecurity Specialists", "DevOps Engineers"],
      colorClass: {
        bg: "bg-[#F3F3F1]",
        border: "border-transparent",
        text: "text-[#1d77ba]",
        badgeBg: "bg-blue-100/70 text-[#1d77ba]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      )
    },
    {
      category: "CATEGORY 05",
      title: "Value Added Reseller Services",
      desc: "As a trusted technology reseller, we go beyond simply supplying equipment. We combine deep vendor relationships, procurement expertise, and lifecycle knowledge to ensure you get the right technology at the right price.",
      highlights: ["Data Centre Hardware", "Enterprise Infrastructure", "EOL / EOS Hardware"],
      colorClass: {
        bg: "bg-[#F3F3F1]",
        border: "border-transparent",
        text: "text-[#1d77ba]",
        badgeBg: "bg-blue-100/70 text-[#1d77ba]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      category: "CATEGORY 06",
      title: "DevOps Services",
      desc: "Our DevOps Services practice helps organisations modernise their operations through automation, AI-powered tooling, and cloud-native design. We build solutions that reduce manual effort and accelerate delivery.",
      highlights: ["AI-Driven Managed Services", "School Systems Design", "Cloud Assessments"],
      colorClass: {
        bg: "bg-[#F3F3F1]",
        border: "border-transparent",
        text: "text-[#1d77ba]",
        badgeBg: "bg-blue-100/70 text-[#1d77ba]"
      },
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: -containerWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollBy({ left: containerWidth, behavior: 'smooth' });
    }
  };

  const scrollToPage = (pageIndex) => {
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({ left: pageIndex * containerWidth, behavior: 'smooth' });
      setActivePage(pageIndex);
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const pageIndex = Math.round(scrollLeft / offsetWidth);
      setActivePage(pageIndex);
    }
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-8 text-center py-20">
      <p className="inline-block px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-500 uppercase tracking-wide bg-transparent">
        WHAT WE DO
      </p>

      <h2 className="text-[56px] md:text-6xl font-semibold leading-tight mb-16 mt-4">
        Explore Our Comprehensive Range of{' '}
        <span className="text-[#1d77ba] font-thin">Innovative Services</span>{' '}
        Tailored for You
      </h2>

      {/* Grid Wrapper with Carousel Navigation */}
      <div className="relative w-full max-w-6xl px-4 md:px-12 flex flex-col items-center">
        
        {/* Hide scrollbar utility styles */}
        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        {/* Left Arrow Button */}
        <button 
          onClick={scrollLeft}
          aria-label="Scroll left"
          className="absolute left-[-10px] md:left-[-25px] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1d77ba] hover:text-white transition-colors duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow Button */}
        <button 
          onClick={scrollRight}
          aria-label="Scroll right"
          className="absolute right-[-10px] md:right-[-25px] top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#1d77ba] hover:text-white transition-colors duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Scrollable Row */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-8 w-full no-scrollbar pb-4"
        >
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className={`rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 text-left flex flex-col justify-between min-h-[460px] w-full md:w-[calc(33.333%-1.33rem)] flex-shrink-0 snap-start ${service.colorClass.bg}`}
            >
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${service.colorClass.badgeBg}`}>
                  {service.category}
                </span>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white shadow-sm ${service.colorClass.text}`}>
                  {service.icon}
                </div>
                <h3 className="text-[24px] font-bold text-gray-900 mb-3 leading-snug">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>
              
              {/* Highlights/Sub-services */}
              <div className="border-t border-gray-200/40 pt-4 mt-auto">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Solutions</p>
                <div className="flex flex-wrap gap-1.5">
                  {service.highlights.map((h, i) => (
                    <span key={i} className="text-xs bg-white/70 border border-gray-200/50 text-gray-700 px-2.5 py-1 rounded-lg">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicator dots */}
        <div className="flex space-x-3 mt-10">
          <button 
            onClick={() => scrollToPage(0)}
            aria-label="Page 1"
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${activePage === 0 ? 'bg-[#1d77ba] w-7' : 'bg-gray-300 hover:bg-gray-400'}`}
          />
          <button 
            onClick={() => scrollToPage(1)}
            aria-label="Page 2"
            className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${activePage === 1 ? 'bg-[#1d77ba] w-7' : 'bg-gray-300 hover:bg-gray-400'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;