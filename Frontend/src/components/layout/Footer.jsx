import React from 'react';
import { FiTwitter, FiInstagram, FiArrowUp, FiFacebook, FiYoutube, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

export default function Footer({ onCareersClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-black/5 pt-20 pb-10 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-650/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 text-center md:text-left flex flex-col items-center md:items-start">
            <a href="#" className="flex items-center justify-center md:justify-start gap-2 mb-6 group inline-block">
              <img 
                src="/haionlogo-removebg-preview.webp" 
                alt="Haion Logo" 
                className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-sm font-light text-center md:text-left">
              Haion also focuses on the underlying electronic components and integrated systems that power modern technology,Every electronic product from Haion is crafted with the user in mind
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h4 className="font-display font-bold text-zinc-950 mb-6 text-sm uppercase tracking-wider font-semibold">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about-us" className="text-zinc-500 hover:text-amber-500 text-sm transition-colors font-medium">About us</a></li>
              <li>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    if (onCareersClick) onCareersClick();
                  }} 
                  className="text-zinc-500 hover:text-amber-500 text-sm transition-colors font-medium cursor-pointer text-center md:text-left bg-transparent border-none p-0 focus:outline-none w-full md:w-auto"
                >
                  Careers
                </button>
              </li>
              <li><a href="#faq" className="text-zinc-500 hover:text-amber-500 text-sm transition-colors font-medium">FAQ</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-amber-500 text-sm transition-colors font-medium">Blog</a></li>
              <li><a href="#contact" className="text-zinc-500 hover:text-amber-500 text-sm transition-colors font-medium">Contact us</a></li>
            </ul>
          </div>

          {/* Our Service */}
          <div className="lg:col-span-2 text-center md:text-left">
            <h4 className="font-display font-bold text-zinc-950 mb-6 text-sm uppercase tracking-wider font-semibold">Our Service</h4>
            <ul className="space-y-4">
              <li><a href="#appliances-view" className="text-zinc-500 hover:text-amber-500 text-sm transition-colors font-medium">Home Appliances</a></li>
              <li><a href="#service-scooter" className="text-zinc-500 hover:text-amber-500 text-sm transition-colors font-medium">Electric Vechicle</a></li>
              <li><a href="#service-safeguard" className="text-zinc-500 hover:text-amber-500 text-sm transition-colors font-medium">Safegaurd (New innovation)</a></li>
            </ul>
          </div>

          {/* Reach Us */}
          <div className="lg:col-span-4 text-center md:text-left">
            <h4 className="font-display font-bold text-zinc-950 mb-6 text-sm uppercase tracking-wider font-semibold">Reach Us</h4>
            <ul className="space-y-4 flex flex-col items-center md:items-start">
              <li className="flex flex-col md:flex-row gap-1.5 md:gap-3 items-center md:items-start text-sm text-zinc-500 font-medium text-center md:text-left">
                <FiMapPin className="text-zinc-450 shrink-0 mt-1" size={18} />
                <span>633/4, Bhabhariya Faliyu, Kavant, Panvad, Panvad, Chhotaudepur, Gujarat, 391168</span>
              </li>
              <li className="flex flex-col md:flex-row gap-1.5 md:gap-3 items-center md:items-start text-sm text-zinc-500 font-medium text-center md:text-left">
                <FiPhone className="text-zinc-450 shrink-0" size={18} />
                <span>02269622645</span>
              </li>
              <li className="flex flex-col md:flex-row gap-1.5 md:gap-3 items-center md:items-start text-sm text-zinc-500 font-medium text-center md:text-left">
                <FiMail className="text-zinc-450 shrink-0" size={18} />
                <a href="mailto:info@haion.co.in" className="hover:text-amber-500 transition-colors">info@haion.co.in</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-xs font-semibold text-center md:text-left">
            Copyright © 2009 - 2025 Haion. All Rights Reserved.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">Social Media</span>
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-900/5 flex items-center justify-center text-zinc-500 hover:text-amber-500 hover:bg-amber-500/10 transition-colors border border-black/5">
                  <FiFacebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-900/5 flex items-center justify-center text-zinc-500 hover:text-amber-500 hover:bg-amber-500/10 transition-colors border border-black/5">
                  <FiTwitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-900/5 flex items-center justify-center text-zinc-500 hover:text-amber-500 hover:bg-amber-500/10 transition-colors border border-black/5">
                  <FiInstagram size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-zinc-900/5 flex items-center justify-center text-zinc-500 hover:text-amber-500 hover:bg-amber-500/10 transition-colors border border-black/5">
                  <FiYoutube size={16} />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-650 hover:text-amber-500 transition-colors"
            >
              Back to Top
              <div className="w-8 h-8 rounded-full bg-zinc-900/5 group-hover:bg-amber-500/10 border border-black/5 group-hover:border-amber-500/20 flex items-center justify-center transition-all">
                <FiArrowUp className="group-hover:-translate-y-0.5 transition-transform text-zinc-700" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
