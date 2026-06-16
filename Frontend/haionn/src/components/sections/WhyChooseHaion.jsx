import React from 'react';
import { GlassCard, SectionHeading } from '../ui';
import { FiCpu, FiDollarSign, FiZap, FiLifeBuoy } from 'react-icons/fi';

const whyChooseData = [
  {
    icon: FiZap,
    title: 'Eco-Friendly Mobility',
    desc: 'Our electric vehicles run on next-gen clean-energy batteries with Zero Emission standards, cutting urban noise and carbon footprints.'
  },
  {
    icon: FiCpu,
    title: 'Advanced Smart IoT',
    desc: 'Seamlessly connect and control all EV parameters and home appliances directly from the intuitive Haion mobile application.'
  },
  {
    icon: FiDollarSign,
    title: 'Factory-Direct Pricing',
    desc: 'By eliminating middle channels and dealers, we ship directly from our state-of-the-art factories, passing the savings to you.'
  },
  {
    icon: FiLifeBuoy,
    title: '24/7 Premium Support',
    desc: 'Get rapid assistance, routine home maintenance service checkups, and a 1-year direct manufacturer warranty on every purchase.'
  }
];

export default function WhyChooseHaion() {
  return (
    <section id="why-choose-haion" className="relative py-12 md:py-24 bg-[#f8f9fa] text-zinc-800 overflow-hidden border-t border-black/5">
      {/* Cinematic background highlights */}
      <div className="absolute top-[10%] left-[-15%] w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-15%] w-[450px] h-[450px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <SectionHeading
          badge="The Haion Advantage"
          title="Why Choose Haion?"
          subtitle="From smart commuter scooters to next-generation connected appliances, we engineer everyday tech to make life sustainable, integrated, and simple."
        />

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseData.map((item) => {
            const Icon = item.icon;
            return (
              <GlassCard key={item.title} className="h-full flex flex-col items-center text-center p-8 bg-white/70 border-zinc-200/50 hover:bg-white hover:border-purple-500/35 hover:shadow-[0_15px_35px_rgba(232,141,1,0.12)] transition-all duration-500 rounded-2xl group">
                
                {/* Icon Frame */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-zinc-950 to-amber-500 flex items-center justify-center text-white mb-6 shadow-md shadow-purple-500/15 group-hover:scale-110 group-hover:rotate-[12deg] transition-all duration-500">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-zinc-900 mb-4 font-display">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-500 text-sm font-normal leading-relaxed">
                  {item.desc}
                </p>

              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
