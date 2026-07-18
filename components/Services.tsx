'use client';
import { motion } from 'framer-motion';
import { Monitor, Printer, Network, Laptop, ArrowUpRight } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Adjusted Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-extrabold tracking-widest uppercase text-xs sm:text-sm mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              We don't just repair. <br className="hidden sm:block"/> We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">re-engineer.</span>
            </h3>
          </div>
          <p className="text-gray-500 font-medium text-sm sm:text-base md:text-right max-w-sm pb-2">
            Experience next-level tech solutions designed to keep your business running without a single glitch.
          </p>
        </div>

        {/* Bento Grid with Pure Colors (No Images) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[minmax(280px,auto)]">
          
          {/* Card 1: Wide Card (Computer & Laptop) with Image */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 relative overflow-hidden group cursor-pointer flex flex-col justify-between shadow-xl"
          >
            {/* Background Image with Smooth Hover Zoom */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0 group-hover:scale-105 transition-transform duration-700 ease-out"
              style={{ backgroundImage: "url('/services/card1.jpg')" }}
            ></div>
            
            {/* Modern Gradient Overlays for Text Readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent"></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent md:hidden"></div>

            {/* Top Icons with Glassmorphism */}
            <div className="relative z-10 flex justify-between items-start">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                <Laptop className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <ArrowUpRight className="w-7 h-7 text-white/50 group-hover:text-white transition-colors duration-300" />
            </div>
            
            {/* Text Content (Updated to White/Light Gray for contrast) */}
            <div className="relative z-10 mt-16 md:max-w-md">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Computer & Laptop</h4>
              <p className="text-gray-300 font-medium leading-relaxed text-sm sm:text-base">Fast diagnosis and resolution for hardware failures, software bugs, and OS issues. We bring dead machines back to life.</p>
            </div>
          </motion.div>

          {/* Card 2: Square Card (Network) */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="bg-blue-600 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 relative overflow-hidden group cursor-pointer flex flex-col justify-between shadow-xl shadow-blue-600/20 border border-blue-500"
          >
            <div className="relative z-10 flex justify-between items-start">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <Network className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <ArrowUpRight className="w-7 h-7 text-blue-300 group-hover:text-white transition-colors duration-300" />
            </div>
            
            <div className="relative z-10 mt-16">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">Network Systems</h4>
              <p className="text-blue-100 font-medium leading-relaxed text-sm">Troubleshooting connectivity problems and setting up lightning-fast, secure local networks.</p>
            </div>
          </motion.div>

          {/* Card 3: Square Card (Printer) */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="bg-indigo-50 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 relative overflow-hidden group cursor-pointer flex flex-col justify-between border border-indigo-100"
          >
            <div className="relative z-10 flex justify-between items-start">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white shadow-sm rounded-full flex items-center justify-center text-indigo-600 border border-white group-hover:scale-110 transition-transform duration-300">
                <Printer className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <ArrowUpRight className="w-7 h-7 text-indigo-200 group-hover:text-indigo-600 transition-colors duration-300" />
            </div>
            
            <div className="relative z-10 mt-16">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">Printer Servicing</h4>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">Expert repair, ink/toner solutions, and routine maintenance for uninterrupted printing.</p>
            </div>
          </motion.div>

          {/* Card 4: Wide Card (Sales & Upgrades) */}
          <motion.div 
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="md:col-span-2 bg-gray-900 rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 relative overflow-hidden group cursor-pointer flex flex-col justify-between shadow-xl border border-gray-800"
          >
            {/* Abstract noise/texture for dark card */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] z-0" style={{ backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10 flex justify-between items-start">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <ArrowUpRight className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors duration-300" />
            </div>
            
            <div className="relative z-10 mt-16 md:max-w-md">
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">Sales & Upgrades</h4>
              <p className="text-gray-400 font-medium leading-relaxed text-sm sm:text-base">Need more power? We offer premium sales of laptops, accessories, and custom hardware upgrades tailored for peak performance.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}