import React from 'react';
import { ScrollReveal, PhoneMockup } from '../ui';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';

export default function DownloadCTA() {
  const benefits = [
    "Secure biometric 1-tap checkout",
    "Real-time hyper-local shipment maps",
    "App-exclusive bundle offers up to 20% off",
    "Direct expert advice chat in-app 24/7"
  ];

  return (
    <section id="download" className="relative py-24 bg-[#f8f9fa] overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="glassmorphism rounded-3xl p-8 md:p-16 border-black/5 overflow-hidden shadow-xs">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy Info */}
            <div className="lg:col-span-7 text-left">
              <ScrollReveal>
                <span className="inline-block text-xs font-semibold tracking-widest text-purple-600 uppercase bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20 mb-6">
                  Get The Mobile Application
                </span>
                
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-6 font-display leading-tight">
                  Unlock the Pinnacle of <br className="hidden md:inline" />
                  Electronics Shopping
                </h2>
                
                <p className="text-zinc-650 text-lg font-light mb-8 max-w-xl leading-relaxed">
                  Join over 50,000 active members saving weekly on factory-direct audio monitors, smartphone flagships, computing gear, and IoT wearables.
                </p>

                {/* Benefits List */}
                <ul className="space-y-4 mb-10">
                  {benefits.map(benefit => (
                    <li key={benefit} className="flex items-center gap-3 text-sm text-zinc-750 font-light">
                      <FiCheckCircle className="text-emerald-550 shrink-0" size={18} />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* App store button links */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#download"
                    className="flex items-center justify-center gap-3 bg-zinc-900 hover:bg-purple-650 text-white px-6 py-3.5 rounded-2xl transition-all duration-300 group hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] font-bold text-sm"
                  >
                    <FaApple size={20} className="group-hover:scale-110 transition-transform" />
                    App Store
                  </a>
                  <a
                    href="#download"
                    className="flex items-center justify-center gap-3 bg-zinc-100 hover:bg-zinc-200 border border-black/5 hover:border-black/10 text-zinc-900 px-6 py-3.5 rounded-2xl transition-all duration-300 group font-bold text-sm"
                  >
                    <FaGooglePlay size={18} className="group-hover:scale-110 transition-transform" />
                    Google Play
                  </a>
                </div>

              </ScrollReveal>
            </div>

            {/* Right mockup phone illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <ScrollReveal delay={0.2}>
                <div className="relative">
                  {/* Dynamic halo ring glow */}
                  <div className="absolute inset-0 bg-purple-500/5 rounded-[48px] blur-[30px] -z-10 animate-pulse-slow" />

                  <PhoneMockup>
                    {/* Immersive final app screen wrapper */}
                    <div className="flex flex-col h-full justify-between py-2 text-center">
                      <div className="text-[10px] text-purple-400 font-bold uppercase tracking-widest mt-6">Welcome to Haion</div>
                      
                      <div className="flex-1 flex flex-col justify-center items-center gap-4 my-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-4xl shadow-xl shadow-purple-500/30">
                          H
                        </div>
                        <h4 className="font-display font-black text-xl text-white">Experience Direct E-Commerce</h4>
                        <p className="text-[10px] text-gray-500 max-w-[180px] leading-relaxed">
                          Scan the store codes or download the package directly to start shopping.
                        </p>
                      </div>

                      <div className="bg-white/5 border border-white/5 p-3 rounded-2xl flex items-center justify-between text-left">
                        <div>
                          <div className="text-[8px] text-gray-500 uppercase font-semibold">Ready to Shop</div>
                          <div className="text-[10px] font-bold text-white">100% Genuine Certified</div>
                        </div>
                        <span className="text-[9px] bg-purple-500 text-white font-bold px-3 py-1.5 rounded-lg">Open App</span>
                      </div>
                    </div>
                  </PhoneMockup>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
