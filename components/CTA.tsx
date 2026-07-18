'use client';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white flex justify-center">
      {/* Modern Floating Card Layout instead of a full-width boring block */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 p-10 md:p-16 lg:p-20 text-center shadow-[0_20px_50px_-15px_rgba(30,58,138,0.3)] border border-white/10"
      >
        {/* Background glowing orbs (Subtle, not clunky) */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center">
          
          {/* Cute Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
            <span className="text-xs font-bold text-blue-200 tracking-widest uppercase">Fast & Reliable Support</span>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
            Ready to fix your tech issues?
          </h2>
          <p className="text-blue-100/80 text-base md:text-lg font-medium mb-10 max-w-2xl">
            Don't let broken hardware slow down your productivity. Drop us a message on WhatsApp and let our expert technicians handle it immediately.
          </p>

          {/* Next-Level WhatsApp Button */}
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/94773699601" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 md:px-10 py-4 rounded-full font-extrabold text-base md:text-lg hover:bg-[#20bd5a] transition-colors shadow-[0_10px_25px_-10px_rgba(37,211,102,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(37,211,102,0.7)]"
          >
            <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7" />
            <span>Chat on WhatsApp</span>
          </motion.a>
          
          <p className="mt-5 text-xs sm:text-sm text-gray-400 font-medium">
            Replies usually within minutes.
          </p>
        </div>
      </motion.div>
    </section>
  );
}