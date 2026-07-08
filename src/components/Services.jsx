"use client";

const Services = () => {
  const servicesData = [
    {
      title: "Managed Services",
      desc: "Our Managed Services practice takes on the day-to-day operational burden of your IT environment, featuring Unified Endpoint Management (UEM) so your team can focus on strategic priorities. We combine skilled engineers with purpose-built tooling to deliver consistent, measurable outcomes.",
      highlights: ["Unified Endpoint Management (UEM)", "Managed NOC", "Network Security Management", "Virtual Infrastructure", "System Administration", "Multi-Cloud Management"],
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
      desc: "Our Professional Services team delivers hands-on expertise for your infrastructure projects — whether on-site or remote. From new technology deployments to ongoing support, we bring the skills and experience to get the job done right.",
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
      desc: "As a trusted technology reseller, we go beyond simply supplying equipment. We combine deep vendor relationships, procurement expertise, and lifecycle knowledge to ensure you get the right technology at the right price.",
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
      desc: "When you need specialised skills quickly — without the overhead of permanent hiring — our Staff Augmentation service delivers vetted, experienced professionals who integrate seamlessly into your team.",
      highlights: ["Network & Systems", "Cybersecurity Specialists", "DevOps Engineers"],
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
      desc: "Secure and manage privileged credentials, session monitoring, and access controls to prevent credential abuse and insider threats. Our team delivers comprehensive Privileged Identity & Access Management (PIM/PAM) solutions.",
      highlights: ["Privileged Identity Management", "Session Monitoring & Recording", "Credential Vaulting", "Just-In-Time Access","Managed PIM / PAM"],
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
      title: "AI-Driven DevOps",
      desc: "Leverage artificial intelligence and machine learning to automate system monitoring, predict anomalies, and streamline IT workflows. We transform traditional DevOps into intelligent AIOps for resilient, self-healing systems.",
      highlights: ["AI-Driven IT Operations", "AIOps & Automation", "Predictive Analytics", "Continuous Delivery", "Intelligent Monitoring"],
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

  return (
    <div className="bg-white text-black w-full py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="w-full text-center mb-6">
          <p className="inline-block px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-500 uppercase tracking-wide bg-transparent font-poppins">
            WHAT WE DO
          </p>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12 md:mb-20 mt-4 font-poppins tracking-tight max-w-4xl mx-auto text-center text-gray-900">
          Explore Our Comprehensive Range of{' '}
          <span className="text-[#1d77ba] font-normal">Innovative Services</span>{' '}
          Tailored for You
        </h2>

        {/* Sticky Card Stacking Container (folding fan effect) */}
        <div className="relative w-full flex flex-col gap-12">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`sticky top-[100px] w-full rounded-3xl p-8 md:p-12 shadow-[0_-12px_30px_-5px_rgba(0,0,0,0.06),0_15px_15px_-5px_rgba(0,0,0,0.02)] border border-gray-200/50 flex flex-col md:flex-row gap-8 items-start md:items-center min-h-[400px] transition-all duration-300 ${service.colorClass.bg}`}
              style={{
                // Offset top slightly for the stacking fan deck look
                top: `calc(100px + ${index * 24}px)`,
              }}
            >
              {/* Left Column: Huge Number */}
              <div className="md:col-span-4 text-left md:w-1/3 flex-shrink-0">
                <span className="text-[120px] md:text-[160px] font-extrabold text-gray-900/10 leading-none font-poppins select-none">
                  {index + 1}
                </span>
              </div>

              {/* Right Column: Content */}
              <div className="flex-1 text-left flex flex-col justify-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white shadow-sm text-[#1d77ba]">
                  {service.icon}
                </div>
                <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins leading-tight tracking-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Sub-services highlights */}
                <div className="border-t border-gray-300/30 pt-4 mt-2">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 font-poppins">Key Solutions</p>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;