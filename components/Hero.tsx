'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

// Public folder eke hero folder ekathule thiyena images tika
const backgroundImages = [
  '/hero/repair1.jpg',
  '/hero/repair2.jpg',
  '/hero/repair3.jpg',
  '/hero/repair4.jpg',
  '/hero/cctv1.jpg',
  '/hero/cctv2.jpg',
  '/hero/acrepair.jpg'
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto slide animation (Every 5 seconds)
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); 
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-gray-950 group">
      
      {/* Background Image Slider with smooth crossfade & zoom */}
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentImageIndex}
          src={backgroundImages[currentImageIndex]}
          alt={`JKW Tech Service ${currentImageIndex + 1}`}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="absolute inset-0 w-full h-full object-cover z-0"
          loading="eager"
        />
      </AnimatePresence>

      {/* Modern Gradient Overlays to make text pop */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-900/80 via-gray-900/50 to-gray-950/90 mix-blend-multiply" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-900/40 to-transparent" />
      
      {/* Main Content Container */}
      <div className="relative z-20 text-center px-4 w-full max-w-5xl mx-auto flex flex-col items-center pt-24 pb-20">
        
        {/* Animated Glassmorphism Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl mb-8"
        >
          <span className="text-xs md:text-sm font-bold tracking-[0.15em] text-white uppercase">
            Trusted Tech Repair in Delgoda
          </span>
        </motion.div>
        
        {/* Main Title (Wow look) */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.1] mb-8 text-white drop-shadow-2xl"
        >
          Seamless Tech, <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-400">
            Uninterrupted Business.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-md"
        >
          Expert repair and maintenance for printers, computers, CCTV, and network systems. We minimize downtime so you can maximize productivity.
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto px-6 sm:px-0"
        >
          <a href="#services" className="w-full sm:w-auto group relative px-8 py-4 bg-blue-600 rounded-full font-bold text-white text-lg shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 border border-blue-500 overflow-hidden">
            <span className="relative z-10">Explore Services</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </a>

          <a href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white text-lg border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Modern Slider Indicators (The .-.. style) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
      >
        {backgroundImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out cursor-pointer ${
              idx === currentImageIndex 
                ? "w-8 sm:w-10 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" 
                : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/80 hover:scale-110"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="text-white/50 hover:text-white transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

    </section>
  );
}