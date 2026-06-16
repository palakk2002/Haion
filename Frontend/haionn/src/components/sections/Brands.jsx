import React from 'react';
import { brandsData } from '../../data/mockData';
import { ScrollReveal } from '../ui';

export default function Brands() {
  return (
    <section className="relative py-12 bg-[#f8f9fa] overflow-hidden border-y border-black/5">
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <span className="text-[10px] uppercase tracking-widest font-semibold text-zinc-400">
          Partnered with Global Giants
        </span>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        {/* Transparent fades on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none" />

        {/* Marquee Row Container */}
        <div className="flex gap-16 items-center whitespace-nowrap animate-infinite-scroll py-2">
          {brandsData.map((brand, idx) => (
            <span 
              key={idx} 
              className="font-display font-black text-xl md:text-2xl tracking-widest uppercase text-zinc-300 hover:text-purple-600 hover:scale-105 transition-all duration-300 cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
