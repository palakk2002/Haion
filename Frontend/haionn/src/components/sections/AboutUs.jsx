import React, { useEffect } from 'react';
import { ScrollReveal, GlassCard } from '../ui';
import { FiTarget, FiAward, FiShield, FiHeart, FiArrowLeft } from 'react-icons/fi';
import factoryImg from '../../assets/haion.jpg';

const values = [
  {
    icon: FiTarget,
    title: 'Our Purpose',
    desc: 'To make clean mobility and smart automated living accessible, reliable, and premium for every Indian household.'
  },
  {
    icon: FiAward,
    title: 'Certified Quality',
    desc: 'ISO 9001 certified automated manufacturing lines subject all controllers and motors to extreme weather and load tests.'
  },
  {
    icon: FiShield,
    title: 'Secure Heritage',
    desc: 'Trusted by over 3,00,000 families across the country since our establishment in 2016 with complete direct-to-consumer support.'
  }
];

const timelineMilestones = [
  {
    year: '2016',
    title: 'Company Foundation',
    desc: 'Established as an OEM component developer for clean energy storage systems in New Delhi.'
  },
  {
    year: '2019',
    title: 'Lithium-Ion Breakthrough',
    desc: 'Commissioned our first smart battery pack assembly line, powering micro-mobility scooters.'
  },
  {
    year: '2022',
    title: 'EV Scooter Launches',
    desc: 'Rolled out the premium X1 electric vehicle line featuring smart diagnostics and central locking.'
  },
  {
    year: '2025',
    title: 'Connected IoT Ecosystem',
    desc: 'Integrated AI assistant features, smart vacuums, and express local deliveries under one mobile platform.'
  }
];

export default function AboutUs({ onClose }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-28 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center justify-between mb-12">
          <nav className="flex text-sm font-semibold tracking-wide">
            <button 
              onClick={onClose} 
              className="text-zinc-400 hover:text-purple-500 transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="mx-2 text-zinc-400 font-normal">/</span>
            <span className="text-purple-500">About Us</span>
          </nav>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-950 bg-white border border-zinc-200 px-4 py-2 rounded-xl hover:border-purple-500 hover:text-purple-500 transition-all duration-300 shadow-sm cursor-pointer"
          >
            <FiArrowLeft size={14} />
            Back to Home
          </button>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest text-purple-600 uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/25 mb-4 animate-pulse-slow">
            Corporate Profile
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gradient mb-6 font-display">
            Our Journey & Purpose
          </h1>
          <p className="text-zinc-500 text-lg font-light leading-relaxed">
            Haion is at the forefront of engineering sustainable micro-mobility and premium connected home appliances, bringing state-of-the-art technologies straight from our automated plants to your doorstep.
          </p>
        </div>

        {/* Heritage Section (Factory Highlight) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7 text-left order-2 lg:order-1">
            <h2 className="text-3xl font-extrabold text-zinc-950 font-display mb-6">
              Automated Manufacturing Plants
            </h2>
            <div className="space-y-6 text-zinc-500 text-base md:text-lg leading-relaxed font-light">
              <p>
                From assembly to shipping, Haion operates next-generation automated production lines equipped with real-time quality scanning, laser welding, and dynamic performance validation.
              </p>
              <p>
                By engineering and building our components—including high-torque BLDC motors, thermal-safe battery packs, and smart IoT control boards—we ensure that every device leaving our facility delivers top performance, low maintenance, and maximum lifecycle.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2 w-full">
            <div className="rounded-3xl border border-purple-500/20 p-2 bg-gradient-to-r from-white to-purple-50/30 shadow-xl overflow-hidden">
              <img 
                src={factoryImg} 
                alt="Haion Corporate Plant" 
                className="w-full h-80 rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-extrabold text-center text-zinc-950 font-display mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <GlassCard key={item.title} className="p-8 bg-white/70 border-zinc-200/50 hover:bg-white hover:border-purple-500/35 hover:shadow-[0_15px_35px_rgba(232,141,1,0.12)] transition-all duration-500 rounded-2xl flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-zinc-950 to-amber-500 flex items-center justify-center text-white mb-6 shadow-md transition-transform duration-500 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 font-display">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-sm font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </GlassCard>
              );
            })}
          </div>
        </div>

        {/* Timeline Milestones */}
        <div>
          <h2 className="text-3xl font-extrabold text-center text-zinc-950 font-display mb-16">
            Our Milestones
          </h2>
          <div className="max-w-4xl mx-auto relative">
            {/* Center connector line */}
            <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-zinc-950 via-amber-500 to-amber-500/20 -translate-x-[1px] -z-10" />

            <div className="space-y-12">
              {timelineMilestones.map((milestone, idx) => {
                const isLeft = idx % 2 === 0;
                
                return (
                  <div key={milestone.year} className="flex flex-col md:flex-row items-start md:items-center relative">
                    {/* Circle Node indicator */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-zinc-950 to-amber-500 flex items-center justify-center text-white font-bold text-xs shadow-md border border-white z-10">
                      {milestone.year.slice(-2)}
                    </div>

                    {/* Step Card block */}
                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2 text-left'}`}>
                      <div className="bg-white/80 border border-zinc-200/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                        <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block mb-1">
                          {milestone.year}
                        </span>
                        <h4 className="text-lg font-bold text-zinc-900 font-display mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                          {milestone.desc}
                        </p>
                      </div>
                    </div>

                    {/* Empty block to push layout to alternating sides on desktop */}
                    <div className="hidden md:block w-1/2" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
