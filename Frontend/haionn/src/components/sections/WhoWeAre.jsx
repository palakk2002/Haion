import React from 'react';
import { ScrollReveal, GlassCard, SectionHeading } from '../ui';
import factoryImg from '../../assets/haion.jpg';

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="relative py-24 bg-white overflow-hidden">
      {/* Background glow visual accent */}
      <div className="absolute top-1/2 left-[-15%] w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Centered Heading with Gradient Theme */}
        <SectionHeading 
          badge="Our Heritage"
          title="Who We Are"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left">
            <ScrollReveal delay={0.1}>
              <div className="space-y-6 text-zinc-800 text-base md:text-lg leading-relaxed font-light">
                <p>
                  Established in <strong className="font-semibold text-purple-600">2016</strong>, <strong className="font-semibold text-zinc-950">Haion Group of India</strong> has gained an admirable position in OEM Manufacturing and Exporting of <strong className="font-medium text-purple-600">Electric Scooter, Safeguard, Inverter, Lithium-Ion Batteries, EV Charger, Semi Washing Machine, AD Air Conditioner, Digital Receiver Radio, LED TV, Android TV, Home Theatre System</strong> etc.
                </p>
                <p>
                  These products are enormously well-liked due to their effortless operations, low maintenance, nominal prices, longer operational life and top performance. Our offered products are developed employing the advanced technology. In addition, in order to provide the top performance of products, these are tested on varied industry parameters employing advanced testing methodologies under expert supervision.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <ScrollReveal delay={0.2} scale={0.95}>
              <div className="relative group w-full max-w-md">
                {/* Visual back glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-950/5 to-purple-500/10 rounded-3xl blur-2xl -z-10 group-hover:scale-105 transition-transform duration-700" />
                
                {/* Premium Image Frame */}
                <div className="rounded-3xl border border-purple-500/20 p-2 bg-gradient-to-r from-white to-purple-50/30 shadow-xl overflow-hidden group-hover:border-purple-500/40 transition-colors duration-500">
                  <img 
                    src={factoryImg} 
                    alt="Haion Corporate Office & Manufacturing Factory" 
                    className="w-full h-[450px] rounded-2xl object-cover shadow-sm group-hover:scale-[1.01] transition-transform duration-700"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
