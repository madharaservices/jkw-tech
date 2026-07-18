'use client';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, Sparkles } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Integrated Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-white rounded-[2rem] lg:rounded-[2.5rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row"
        >
          
          {/* Left Panel: Contact Info (Image + Black Dark Tint + Glassmorphism for text boxes) */}
          <div className="lg:w-5/12 relative overflow-hidden text-white p-8 sm:p-10 lg:p-14 flex flex-col justify-center">
            
            {/* Background Image - Clean and clear */}
            <div 
              className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-[10s] hover:scale-110"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')" }}
            ></div>
            
            {/* Dark Tint Overlay to make White Text pop (No blur here so image is clear) */}
            <div className="absolute inset-0 bg-blue-900/70 z-0"></div>
            
            {/* Content Container (z-10 to stay above image and overlay) */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 mb-6">
                <span className="text-sm font-bold text-white tracking-wide">LET'S CONNECT</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight text-white drop-shadow-md">
                Have a tech problem?
              </h3>
              <p className="text-gray-200 text-base sm:text-lg font-medium mb-10 lg:mb-12 max-w-sm drop-shadow-md">
                Drop us a message and our expert technicians will get back to you to fix it fast.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {/* Contact Item 1 */}
                <div className="group flex items-start gap-4 sm:gap-5 p-4 rounded-2xl bg-black/40 hover:bg-black/60 transition-colors duration-300 border border-white/10 hover:border-white/20 cursor-pointer backdrop-blur-md">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 shadow-inner flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-500 transition-all">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">Call Us</p>
                    <p className="font-semibold text-base sm:text-lg text-white">077 369 9601</p>
                    <p className="font-semibold text-base sm:text-lg text-gray-300">071 769 0313</p>
                  </div>
                </div>

                {/* Contact Item 2 */}
                <div className="group flex items-start gap-4 sm:gap-5 p-4 rounded-2xl bg-black/40 hover:bg-black/60 transition-colors duration-300 border border-white/10 hover:border-white/20 cursor-pointer backdrop-blur-md">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 shadow-inner flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-500 transition-all">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">Email Us</p>
                    <p className="font-semibold text-base sm:text-lg break-all text-white">jkwtechnologies@gmail.com</p>
                  </div>
                </div>

                {/* Contact Item 3 */}
                <div className="group flex items-start gap-4 sm:gap-5 p-4 rounded-2xl bg-black/40 hover:bg-black/60 transition-colors duration-300 border border-white/10 hover:border-white/20 cursor-pointer backdrop-blur-md">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 shadow-inner flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-500 transition-all">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-400 text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">Visit Us</p>
                    <p className="font-semibold text-base sm:text-lg text-white">45/T Kaduboda,</p>
                    <p className="font-semibold text-base sm:text-lg text-gray-300">Delgoda, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: The Form */}
          <div className="lg:w-7/12 p-8 sm:p-10 lg:p-16 flex flex-col justify-center bg-white">
            
            <div className="flex items-center gap-2 mb-8 text-gray-500 bg-gray-50 w-max px-4 py-2 rounded-full border border-gray-100">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-bold">We usually respond within a few hours</span>
            </div>

            <form className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 font-medium text-gray-900 shadow-sm hover:border-gray-200" 
                    placeholder="John Doe" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                  <input 
                    type="text" 
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 font-medium text-gray-900 shadow-sm hover:border-gray-200" 
                    placeholder="077 123 4567" 
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 font-medium text-gray-900 shadow-sm hover:border-gray-200" 
                  placeholder="john@example.com" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Your Message</label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border-2 border-gray-100 rounded-2xl focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-300 font-medium text-gray-900 shadow-sm hover:border-gray-200 resize-none" 
                  placeholder="Tell us about the issue you're facing..."
                ></textarea>
              </div>

              <button 
                type="button"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 text-white font-extrabold px-10 py-4 rounded-2xl hover:bg-blue-700 transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_10px_20px_-10px_rgba(37,99,235,0.7)] hover:-translate-y-1 mt-2 sm:mt-4"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}