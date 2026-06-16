import React from 'react';
import { offersData } from '../../data/mockData';
import { ScrollReveal, SectionHeading, GlassCard } from '../ui';
import { FiArrowRight, FiPercent, FiClock, FiLayers, FiShield } from 'react-icons/fi';

const iconMap = {
  "Festival Offer": FiPercent,
  "Cashback": FiShield,
  "Flash Sale": FiClock,
  "Bundle Deal": FiLayers
};

export default function Offers() {
  return (
    <section id="offers" className="relative py-24 bg-[#f8f9fa] overflow-hidden">
      {/* Background radial soft lights */}
      <div className="absolute top-[20%] left-[-15%] w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <SectionHeading 
          badge="Promotional Offers"
          title="Exclusive App Savings"
          subtitle="Unlock the full discount potential of direct electronics shopping. Active coupons applied automatically at checkout."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offersData.map((offer, idx) => {
            const Icon = iconMap[offer.tag] || FiPercent;
            
            // Adjust dark gradient to high-contrast premium light gradient
            const lightGradient = offer.gradient.replace('#030303', '#ffffff').replace('via-purple-900/40', 'via-purple-500/5').replace('via-blue-900/40', 'via-blue-500/5').replace('via-pink-900/40', 'via-pink-500/5').replace('via-teal-900/40', 'via-teal-500/5').replace('from-indigo-900/60', 'from-indigo-500/10').replace('from-cyan-900/60', 'from-cyan-500/10').replace('from-rose-900/60', 'from-rose-500/10').replace('from-emerald-900/60', 'from-emerald-500/10');
            
            return (
              <ScrollReveal key={offer.title} delay={idx * 0.1}>
                <div 
                  className={`relative rounded-3xl p-8 md:p-10 border border-black/5 overflow-hidden flex flex-col justify-between min-h-[260px] bg-gradient-to-br ${lightGradient} group hover:border-purple-500/25 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.02)]`}
                >
                  {/* Subtle top glare highlight */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-black/5 to-transparent" />
                  
                  {/* Glowing background halo */}
                  <div className="absolute top-[-30px] right-[-30px] w-24 h-24 bg-purple-500/5 rounded-full blur-xl group-hover:scale-125 transition-transform duration-700" />

                  {/* Top line detail */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-2 bg-black/5 border border-black/5 rounded-full px-3 py-1">
                      <Icon className="text-purple-600 text-xs" />
                      <span className="text-[10px] font-bold text-zinc-650 uppercase tracking-widest">{offer.tag}</span>
                    </div>
                    <span className="text-[10px] font-semibold text-white bg-purple-600 px-2.5 py-0.5 rounded-full">
                      {offer.badge}
                    </span>
                  </div>

                  {/* Body copy */}
                  <div className="mb-6 text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2 font-display leading-tight">
                      {offer.title}
                    </h3>
                    <p className="text-zinc-550 text-sm md:text-base font-light max-w-md">
                      {offer.subtitle}
                    </p>
                  </div>

                  {/* Bottom details and trigger */}
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pt-6 border-t border-black/5">
                    <div className="flex items-center gap-2 text-xs text-purple-600 font-semibold">
                      <FiClock />
                      <span>{offer.timeRemaining}</span>
                    </div>
                    <a
                      href="#download"
                      className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white hover:bg-purple-600 px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 group-hover:scale-[1.02]"
                    >
                      {offer.actionText}
                      <FiArrowRight />
                    </a>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
