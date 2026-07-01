const Why = () => {
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

  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-8 text-center py-20">
      <p className="inline-block px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-500 uppercase tracking-wide bg-transparent">
        Why Trishield
      </p>
      <h2 className="text-[56px] md:text-6xl font-semibold leading-tight mb-16 mt-4">
        Why Partner <span className="text-[#1d77ba] font-thin">With Us?</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {advantages.map((adv, idx) => (
          <div key={idx} className="bg-[#F3F3F1] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-[#1d77ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{adv.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{adv.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
