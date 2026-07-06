const MajorConcerns = () => {
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

  return (
    <div className="container mx-auto flex flex-col items-center justify-center p-8 text-center py-20 bg-gray-50 rounded-3xl my-16">
      <p className="inline-block px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-500 uppercase tracking-wide bg-transparent">
        Risks & Security
      </p>
      <h2 className="text-[56px] md:text-6xl font-bold leading-tight mb-16 mt-4 font-poppins tracking-tight">
        Major <span className="text-[#1d77ba] font-normal">IT Concerns</span> We Solve
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {concerns.map((c) => (
          <div key={c.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#1d77ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-poppins">{c.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MajorConcerns;
