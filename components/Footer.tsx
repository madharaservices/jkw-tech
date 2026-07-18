'use client';
import { Monitor, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Monitor className="text-blue-500 w-7 h-7" />
              <span className="font-extrabold text-2xl tracking-wide">JKW Tech</span>
            </div>
            <p className="text-gray-400 font-medium leading-relaxed mb-6 text-sm">
              Dependable and efficient repair and maintenance services tailored to printers, computers, and network systems. Keeping your technology running seamlessly.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Our Services', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-blue-400 font-medium text-sm flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-4 h-4" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-4">
              {['Computer & Laptop Repair', 'Network Systems', 'Printer Servicing', 'Sales & Upgrades'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-blue-400 font-medium text-sm flex items-center gap-2 transition-colors">
                    <ArrowRight className="w-4 h-4" /> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 font-medium text-sm">45/T Kaduboda, <br/>Delgoda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400 font-medium text-sm">077 369 9601 <br/> 071 769 0313</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <span className="text-gray-400 font-medium text-sm">jkwtechnologies@gmail.com</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mb-8"></div>

        {/* Bottom Footer Section (Copyright & Credit) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-medium text-sm text-center md:text-left">
            © {new Date().getFullYear()} JKW Technologies. All rights reserved.
          </p>
          <p className="text-gray-500 font-medium text-sm text-center md:text-right">
            Designed & Developed by{' '}
            <a 
              href="https://padumainduwara.me" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 font-bold transition-colors"
            >
              Paduma Induwara
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}