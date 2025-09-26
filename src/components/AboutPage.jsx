"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  const sections = {
    company: {
      id: "about-company",
      title: "About Company",
      content:
        "TriShield Systems, founded in 2021, was built to address one of the toughest challenges MSPs face—delivering reliable, 24x7 operations. With a proven track record in building NOC/SOC teams, helpdesk support, and managing enterprise infrastructure, we enable businesses to scale while maintaining quality. We’ve successfully partnered with global enterprises, functioning as an extension of their in-house teams and helping them grow revenue while strengthening operations.",
      image: "/api/placeholder/600/400",
    },
    values: {
      id: "our-values",
      title: "Our Values",
      content:
        "At TriShield, our values shape everything we do. We put people first, recognizing that our team is our greatest strength. We uphold integrity by staying honest, transparent, and accountable in every interaction. Our focus on excellence drives us to consistently deliver high-quality services, while our one team approach ensures we work seamlessly as an extension of your organization rather than just another vendor.",
      image: "/api/placeholder/600/400",
    },
    mission: {
      id: "our-mission",
      title: "Our Mission",
      content:
        "Our mission is to empower businesses with reliable, people-driven solutions that deliver round-the-clock excellence. We aim to bridge operational gaps with expertise in cloud, security, and infrastructure management while ensuring customer-centricity remains at the core of every engagement.",
      image: "/api/placeholder/600/400",
    },
    policies: {
      id: "our-policies",
      title: "Our Policies",
      content:
        "We believe in complete transparency, accountability, and ethical conduct. From data privacy and compliance to service quality and confidentiality, our policies are designed to protect our clients while ensuring operational excellence.",
      image: "/api/placeholder/600/400",
    },
  };

  const sectionBoxes = [
    { id: "company", title: "About Company", description: "Learn about our journey and what drives us forward." },
    { id: "values", title: "Our Values", description: "Discover the principles that guide everything we do." },
    { id: "mission", title: "Our Mission", description: "Understanding our purpose and vision for the future." },
    { id: "policies", title: "Our Policies", description: "Review our guidelines and commitment to quality." },
  ];

  const [activeSection, setActiveSection] = useState("company");

  const handleCardClick = (id) => {
    setActiveSection(id);
    // Optional smooth scroll to top of placeholder
    const section = document.getElementById("active-section");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar setActiveSection={setActiveSection} />

      {/* Header */}
      <div className="pt-32 pb-8 px-8 text-center">
        <p className="inline-block px-4 py-2 border mb-10 border-gray-300 rounded-full text-sm text-gray-500 uppercase tracking-wide bg-transparent">
          About Us
        </p>
      </div>

      {/* Active Section Placeholder */}
      <div id="active-section" className="px-8 pb-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-[56px] lg:text-[72px] font-semibold text-black mb-8 leading-tight">
              {sections[activeSection].title}
            </h1>
            <p className="text-gray-600 text-[16px] leading-relaxed">
              {sections[activeSection].content}
            </p>
          </div>
          <div className="lg:order-2">
            <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section Boxes – 3 inactive cards */}
      <div className="px-8 pb-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectionBoxes
            .filter((box) => box.id !== activeSection)
            .map((box) => (
              <div
                key={box.id}
                onClick={() => handleCardClick(box.id)}
                className="relative p-8 rounded-2xl cursor-pointer overflow-hidden transition-all duration-300 group h-56 flex flex-col justify-end"
              >
                <img
                  src={sections[box.id].image}
                  alt={box.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 group-hover:bg-black/60"></div>
                <div className="relative z-10 text-left">
                  <h3 className="text-xl font-bold text-white mb-3">{box.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed">{box.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
