'use client';
import { motion } from 'framer-motion';
import { Shield, Wrench, Zap, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top: Massive Editorial Headline */}
        <div className="mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="text-sm font-extrabold text-blue-600 tracking-[0.2em] uppercase">The Story</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] tracking-tight max-w-4xl"
          >
            More than just repairs. <br className="hidden md:block" />
            <span className="text-gray-400">We are your tech partners.</span>
          </motion.h2>
        </div>

        {/* Bottom: Asymmetric Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Side: The Image (Offset & Uncropped) spans 5 columns */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            {/* Minimalist Backdrop Shape to break the boring square look */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-blue-50/80 rounded-[2.5rem] -z-10"></div>
            
            <div className="relative bg-white p-3 rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100">
              <div className="relative rounded-[1.5rem] overflow-hidden bg-gray-50 flex items-center justify-center pt-4">
                {/* Image without clipping the head */}
                <Image 
                  src="/profile.png" 
                  alt="JKW Tech Profile" 
                  width={600}
                  height={800}
                  className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700" 
                  priority
                />
              </div>
            </div>

            {/* Rotating Premium Agency Badge (Floating) */}
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -right-8 w-28 h-28 bg-white rounded-full shadow-xl border border-gray-100 flex items-center justify-center hidden sm:flex z-20"
            >
              <div className="relative w-full h-full flex items-center justify-center p-2">
                <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_20s_linear_infinite_reverse]">
                  <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                  <text className="text-[11px] font-bold fill-blue-600 uppercase tracking-widest">
                    <textPath href="#circlePath" startOffset="0%">
                      • 100% Guaranteed • Top Quality • 
                    </textPath>
                  </text>
                </svg>
                <div className="absolute w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: The Story & Mini-Bento spans 7 columns */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 lg:pl-10 flex flex-col justify-center"
          >
            <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed mb-10 max-w-2xl">
              We specialize in offering dependable and efficient repair and maintenance services tailored to printers, computers, and network systems. Our team is dedicated to ensuring the smooth operation of your business by promptly diagnosing and resolving complex hardware and software issues.
            </p>

            {/* Mini Bento Cards instead of boring bullet points */}
            <div className="grid sm:grid-cols-2 gap-4">
              
              <div className="bg-gray-50 border border-gray-100 p-6 rounded-3xl hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Wrench className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-gray-900 font-bold text-lg mb-2">Hardware & Software Diagnostics</h4>
                <p className="text-sm text-gray-500 font-medium">Pinpointing issues with pinpoint accuracy.</p>
              </div>

              <div className="bg-gray-50 border border-gray-100 p-6 rounded-3xl hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <Zap className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-gray-900 font-bold text-lg mb-2">Complex Network Troubleshooting</h4>
                <p className="text-sm text-gray-500 font-medium">Keeping your connections fast and secure.</p>
              </div>

              <div className="sm:col-span-2 bg-blue-50 border border-blue-100 p-6 rounded-3xl hover:bg-blue-600 hover:text-white transition-all duration-300 group cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 group-hover:text-white font-bold text-lg transition-colors">Routine Preventative Maintenance</h4>
                    <p className="text-sm text-gray-500 group-hover:text-blue-100 font-medium transition-colors">Stopping problems before they even start.</p>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}