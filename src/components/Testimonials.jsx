const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      title: "Expert Team",
      icon: "👑",
      description: "An expert team ready to tackle your challenges with innovative solutions and proven strategies."
    },
    {
      id: 2,
      title: "Fast and Scalable",
      icon: "📈",
      description: "Scale your business effortlessly with our SaaS, designed to grow alongside your evolving needs."
    },
    {
      id: 3,
      title: "Customizable for You",
      icon: "🔧",
      description: "Customize the platform to perfectly align with your business's unique requirements and goals.",
      highlighted: true
    },
    {
      id: 4,
      title: "Maximum Efficiency",
      icon: "⚡",
      description: "Maximize efficiency with integrated solutions that eliminate bottlenecks, saving time and costs."
    },
    {
      id: 5,
      title: "User Friendly",
      icon: "👥",
      description: "A simple and accessible interface for users of all skill levels, making it easy to find what you need."
    },
    {
      id: 6,
      title: "Security You Can Trust",
      icon: "🔒",
      description: "Protect sensitive data with industry leading security to prevent unauthorized breaches."
    }
  ];
    return (
      <div className="container mx-auto p-8 grid lg:grid-cols-2 gap-12 py-20">
        <div className="flex flex-col justify-center">
          <p className="text-sm text-gray-600 mb-4 uppercase tracking-wide">Testimonials</p>
          <h2 className="text-5xl font-bold mb-6"><span className="text-[#1d77ba]">Trusted</span> by satisfied clients</h2>
        </div>
        <div className="relative">
          <div className="h-96 lg:h-[600px] overflow-y-auto pr-4 space-y-6">
            {testimonials.map(t => (
              <div key={t.id} className="relative p-6 rounded-2xl border bg-white shadow hover:shadow-lg">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-2xl"></div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">{t.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{t.title}</h3>
                    <p className="text-gray-600">{t.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  