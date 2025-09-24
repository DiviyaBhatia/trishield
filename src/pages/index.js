"use client";
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';


// Main Homepage Component
export default function HomePage() {
  return (
    <div className="overflow-x-hidden bg-white text-black">
    {/* Navbar at the very top, outside hero */}
    <Navbar />

    {/* Hero Section with Background */}
    <div 
      className="relative min-h-screen w-full"
      style={{
        backgroundImage: 'url("/bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    > 
      <div className="absolute inset-0 bg-white opacity-60"></div>
      <div className="relative pt-24  z-10">
        <Hero />
      </div>
    </div>

    {/* Other Sections */}
    <div id="services">
      <Services />
    </div>
    
    <div id="testimonials" className="bg-gray-50">
      <Testimonials />
    </div>
    
    <div id="case-studies">
      <CaseStudies />
    </div>
    
    <div id="contact">
      <Contact />
    </div>
  </div>
  );
}