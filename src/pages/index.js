"use client";
import { useState } from 'react';
import AboutPage from '@/components/AboutPage';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import ContactModal from '@/components/ContactModal';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import TrishieldEdge from '@/components/TrishieldEdge';


// Main Homepage Component
export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="overflow-x-clip bg-white text-black">
      {/* Navbar at the very top, outside hero */}
      <Navbar onContactClick={() => setIsContactOpen(true)} />

      {/* Hero Section with Background */}
      <div
        className="relative min-h-screen w-full"
        style={{
          backgroundImage: 'url("/bg-final.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white opacity-60"></div>

        <div className="relative pt-24 z-10">
          <Hero onContactClick={() => setIsContactOpen(true)} />
        </div>
      </div>

      {/* Other Sections */}
      <div id="services">
        <Services />
      </div>

      <div id="products">
        {/* Kept empty for now */}
      </div>

      <div id="trishield-edge" className="bg-gray-50/30">
        <TrishieldEdge />
      </div>

      <div id="insights">
        <Blog />
      </div>

      <div id="about">
        <AboutPage />
      </div>

      <div id="contact">
        <Contact onContactClick={() => setIsContactOpen(true)} />
      </div>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}