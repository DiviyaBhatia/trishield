"use client";
import { useState, useEffect } from "react";

const TrishieldEdge = () => {
  const [activeTab, setActiveTab] = useState("risks");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
    );

    const element = document.getElementById("trishield-edge-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const concerns = [
    {
      id: 1,
      title: "Data Breaches",
      desc: "Unauthorized access to sensitive records can damage your brand reputation and result in severe financial loss."
    },
    {
      id: 2,
      title: "Ransomware Attacks",
      desc: "Sophisticated malicious software locking up operational resources and demanding costly releases."
    },
    {
      id: 3,
      title: "System Downtime",
      desc: "Network outages or server crashes leading to unproductive work hours, lost revenue, and poor UX."
    },
    {
      id: 4,
      title: "Compliance Failure",
      desc: "Failing to meet security audit frameworks leading to major fines and operational restrictions."
    }
  ];

  const advantages = [
    {
      title: "24/7/365 Protection",
      desc: "Our NOC and SOC keep watch round-the-clock to detect anomalies and keep your services live."
    },
    {
      title: "Industry Experts Only",
      desc: "Access certified security consultants and senior architects who understand compliance and scale."
    },
    {
      title: "Guaranteed SLA Response",
      desc: "Fast, response-time guarantees for critical events so your operations are never left hanging."
    }
  ];

  const steps = [
    {
      step: "01",
      title: "Assess & Audit",
      desc: "We analyze your existing workflows and identify infrastructure loopholes, compliance gaps, and vulnerabilities."
    },
    {
      step: "02",
      title: "Design & Deploy",
      desc: "We construct custom solutions and seamlessly deploy SIEM, SOC, and cloud resources into your network."
    },
    {
      step: "03",
      title: "Monitor & Optimize",
      desc: "Our NOC provides proactive round-the-clock observation and performance enhancements continuously."
    }
  ];

  return (
    <div 
      id="trishield-edge-section"
      className={`container mx-auto flex flex-col items-center justify-center p-8 text-center py-20 bg-gray-50/50 rounded-3xl my-16 border border-gray-100 transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <p className="inline-block px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-500 uppercase tracking-wide bg-transparent font-poppins">
        Why Choose Us
      </p>
      
      <h2 className="text-[44px] md:text-5xl font-bold leading-tight mb-12 mt-4 max-w-3xl font-poppins tracking-tight">
        Why Partner With Us? Discover{' '}
        <span className="text-[#1d77ba] font-normal">The Trishield Edge</span>
      </h2>

      {/* Tabs Control */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 bg-white p-2 rounded-2xl shadow-sm border border-gray-150 max-w-2xl w-full">
        <button
          onClick={() => setActiveTab("risks")}
          className={`flex-1 min-w-[150px] py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${
            activeTab === "risks"
              ? "bg-[#1d77ba] text-white shadow-md"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          }`}
        >
          Risks We Solve
        </button>
        <button
          onClick={() => setActiveTab("advantages")}
          className={`flex-1 min-w-[150px] py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${
            activeTab === "advantages"
              ? "bg-[#1d77ba] text-white shadow-md"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          }`}
        >
          Our Advantages
        </button>
        <button
          onClick={() => setActiveTab("process")}
          className={`flex-1 min-w-[150px] py-3 px-6 rounded-xl font-bold text-sm transition-all duration-300 ${
            activeTab === "process"
              ? "bg-[#1d77ba] text-white shadow-md"
              : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
          }`}
        >
          Our Process
        </button>
      </div>

      {/* Tab Panels */}
      <div className="w-full max-w-6xl">
        {activeTab === "risks" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeInUp">
            {concerns.map((c) => (
              <div key={c.id} className="bg-white rounded-2xl p-6 shadow-sm border border-transparent hover:border-red-500/20 hover:scale-[1.03] hover:shadow-lg transition-all duration-700 ease-out text-left flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-poppins">{c.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "advantages" && (
          <div className="grid md:grid-cols-3 gap-6 animate-fadeInUp">
            {advantages.map((adv, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-transparent hover:border-[#1d77ba]/20 hover:scale-[1.03] hover:shadow-lg transition-all duration-700 ease-out text-left flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-[#1d77ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 font-poppins">{adv.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "process" && (
          <div className="grid md:grid-cols-3 gap-6 animate-fadeInUp">
            {steps.map((s, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-transparent hover:border-[#1d77ba]/20 hover:scale-[1.03] hover:shadow-lg transition-all duration-700 ease-out text-left relative overflow-hidden flex flex-col justify-between min-h-[220px]">
                <span className="absolute top-2 right-4 text-6xl font-bold text-gray-100 select-none">
                  {s.step}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 font-poppins">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrishieldEdge;
