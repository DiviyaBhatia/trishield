const How = () => {
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
    <div className="container mx-auto flex flex-col items-center justify-center p-8 text-center py-20">
      <p className="inline-block px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-500 uppercase tracking-wide bg-transparent">
        Our Process
      </p>
      <h2 className="text-[56px] md:text-6xl font-semibold leading-tight mb-16 mt-4">
        How <span className="text-[#1d77ba] font-thin">We Operate</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {steps.map((s, idx) => (
          <div key={idx} className="bg-[#F3F3F1] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 text-left relative overflow-hidden">
            <span className="absolute top-2 right-4 text-7xl font-bold text-gray-200/80 select-none">
              {s.step}
            </span>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default How;
