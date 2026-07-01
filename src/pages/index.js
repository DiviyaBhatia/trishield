"use client";
import { useState } from 'react';
import AboutPage from '@/components/AboutPage';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import ContactModal from '@/components/ContactModal';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';


// Main Homepage Component
export default function HomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="overflow-x-hidden bg-white text-black">
    {/* Navbar at the very top, outside hero */}
    <Navbar onContactClick={() => setIsContactOpen(true)} />

    {/* Hero Section with Background */}
    <div 
      className="relative min-h-screen w-full"
      style={{
        backgroundImage: 'url("/bg3.png")',
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
    <div id="about" >
      <AboutPage />
    </div>
    <div id="services">
      <Services />
    </div>
    
    <div id="testimonials" className="bg-gray-50">
      <Testimonials />
    </div>
    
    <div id="blog">
      <Blog />
    </div>
    
    <div id="contact">
      <Contact onContactClick={() => setIsContactOpen(true)} />
    </div>

    <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
  </div>
  );
}