"use client";
import MajorConcerns from './MajorConcerns';
import Why from './Why';
import How from './How';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      date: "Oct 12, 2025",
      title: "Understanding SIEM in Modern IT Infrastructure",
      desc: "Why Security Information and Event Management is essential for tracking vulnerabilities and threats in real-time."
    },
    {
      id: 2,
      date: "Nov 03, 2025",
      title: "Top 5 Cybersecurity Trends to Watch in 2026",
      desc: "An in-depth look at emerging threats and the key defensive measures your enterprise should deploy."
    },
    {
      id: 3,
      date: "Dec 18, 2025",
      title: "Scaling Operational Support Without Breaking the Bank",
      desc: "How 24/7 NOC/SOC coverage keeps systems optimized while controlling overhead budget."
    }
  ];

  return (
    <div>
      {/* Blog Section */}
      <div className="container mx-auto flex flex-col items-center justify-center p-8 text-center py-20">
        <p className="inline-block px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-500 uppercase tracking-wide bg-transparent">
          Latest Insights
        </p>
        <h2 className="text-[56px] md:text-6xl font-semibold leading-tight mb-16 mt-4">
          Our <span className="text-[#1d77ba] font-thin">Blog Updates</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
          {blogs.map((b) => (
            <div key={b.id} className="bg-[#F3F3F1] rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 text-left flex flex-col justify-between">
              <div>
                <p className="text-sm text-[#f15a27] font-semibold mb-3">{b.date}</p>
                <h3 className="text-[22px] font-bold text-gray-900 mb-4 leading-snug">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {b.desc}
                </p>
              </div>
              <a href="#" className="mt-6 text-[#1d77ba] font-semibold flex items-center hover:underline">
                Read Article →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Sub-Sections */}
      <div id="concerns">
        <MajorConcerns />
      </div>

      <div id="why">
        <Why />
      </div>

      <div id="how">
        <How />
      </div>
    </div>
  );
};

export default Blog;
