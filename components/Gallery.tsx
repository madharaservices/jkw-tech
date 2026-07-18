'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X } from 'lucide-react';
import Image from 'next/image';

// Kalin use karapu images tika Bento Grid ekata galapena widiyata classes ekka dala thiyenawa
const galleryImages = [
  { src: '/hero/repair1.jpg', alt: 'Motherboard Repair', className: 'col-span-1 md:col-span-2 row-span-2' },
  { src: '/hero/cctv1.jpg', alt: 'CCTV Installation', className: 'col-span-1 row-span-1' },
  { src: '/services/card1.jpg', alt: 'Laptop Service', className: 'col-span-1 md:col-span-1 row-span-2' },
  { src: '/hero/acrepair.jpg', alt: 'AC Repair', className: 'col-span-1 row-span-1' },
  { src: '/hero/repair2.jpg', alt: 'Network Cabling', className: 'col-span-1 md:col-span-2 row-span-1' },
  { src: '/hero/cctv2.jpg', alt: 'Security Systems', className: 'col-span-1 row-span-1' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Gallery Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6"
          >
            <span className="text-xs font-bold text-blue-700 tracking-widest uppercase">Our Work</span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
          >
            Behind the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Scenes.</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 font-medium text-sm sm:text-base max-w-2xl mx-auto"
          >
            Take a look at our expert technicians in action. We handle every device with precision and care.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] gap-3 sm:gap-4 md:gap-6">
          {galleryImages.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ scale: 0.98 }}
              onClick={() => setSelectedImage(img.src)}
              className={`relative rounded-2xl sm:rounded-[2rem] overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${img.className}`}
            >
              {/* Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${img.src})` }}
              ></div>
              
              {/* Dark Hover Overlay */}
              <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/40 transition-colors duration-300 backdrop-blur-[0px] group-hover:backdrop-blur-[2px]"></div>

              {/* Glassmorphism View Icon (Appears on Hover) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center text-white shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Maximize2 className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Popup (Fullscreen Image View) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/90 backdrop-blur-xl p-4 sm:p-8"
            onClick={() => setSelectedImage(null)} // Click outside to close
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 sm:top-10 sm:right-10 w-12 h-12 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors z-[110]"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Popup Image */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl max-h-[85vh] rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            >
              <img 
                src={selectedImage} 
                alt="Fullscreen View" 
                className="w-full h-full max-h-[85vh] object-contain bg-black/50"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
    </section>
  );
}