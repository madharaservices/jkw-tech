'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';

export default function Home() {
  return (
    <main className="selection:bg-blue-200 selection:text-blue-900 bg-white">
      <Navbar />
      <Hero />
      <About />  
      <Stats />
      <Services />
      <Gallery />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}