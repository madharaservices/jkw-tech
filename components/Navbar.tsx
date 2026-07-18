'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Monitor, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const menuVars: Variants = {
    initial: { opacity: 0, y: -20, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.1 }
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };

  const linkVars: Variants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center pointer-events-none">

      {/* FIX: All classes are now on a single line to prevent Next.js hydration mismatch */}
      <div className="pointer-events-auto bg-white/90 backdrop-blur-md border-b md:border-x border-gray-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.1)] w-full md:w-[90%] lg:w-[1000px] xl:w-[1100px] px-6 md:px-12 py-4 md:py-4 rounded-none md:rounded-b-[2.5rem] flex justify-between items-center transition-all duration-300">
        
        {/* Logo Section */}
        <a href="#" className="flex-shrink-0 flex items-center gap-3 group cursor-pointer">
          <span className="font-extrabold text-xl lg:text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 tracking-tight group-hover:opacity-80 transition-opacity">
            JKW Tech
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
          {['About', 'Services', 'Gallery', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-gray-600 hover:text-blue-600 font-bold text-sm transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex">
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-sm transition-all shadow-[0_8px_20px_-6px_rgba(37,99,235,0.5)] hover:shadow-[0_10px_25px_-6px_rgba(37,99,235,0.6)] transform hover:-translate-y-0.5"
          >
            Get Support
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-gray-900 p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* OVERLAY for Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[76px] z-40 bg-gray-900/20 backdrop-blur-sm md:hidden pointer-events-auto"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Dropdown (Floating App-Style Card) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-[90px] left-4 right-4 z-50 pointer-events-auto bg-white/95 backdrop-blur-2xl border border-gray-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] rounded-[2rem] p-3 md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {['About', 'Services', 'Gallery', 'Contact'].map((item) => (
                <motion.a 
                  variants={linkVars}
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)} 
                  className="flex items-center justify-between text-gray-800 hover:text-blue-600 hover:bg-blue-50/50 p-4 rounded-2xl font-bold text-lg transition-colors group"
                >
                  {item}
                  <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors group-hover:translate-x-1 transform duration-300" />
                </motion.a>
              ))}
            </div>
            
            <motion.div variants={linkVars} className="p-3 pt-2">
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-[0_10px_20px_-10px_rgba(37,99,235,0.6)] active:scale-95 transition-all"
              >
                Get Support
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}