import React, { useEffect } from 'react';
import { GlassCard } from '../ui';
import { FiArrowRight, FiCpu, FiClock, FiShield } from 'react-icons/fi';

const invertersData = [
  {
    id: 'inv1',
    name: 'Haion PowerGuard 1100',
    subtitle: 'Smart Sine Wave Home UPS Inverter with IoT Battery Monitoring',
    image: '/haion_inverter.webp',
    price: '₹ 6,999',
    tag: 'Best Seller',
    features: ['Pure Sine Wave Output', 'Smart WiFi App Tracking', 'Turbo Charging (Fast recovery)']
  },
  {
    id: 'inv2',
    name: 'Haion SuperCharge 1500',
    subtitle: 'Heavy-Duty Smart Inverter with Eco & UPS Dual Mode Toggle',
    image: '/haion_inverter.webp',
    price: '₹ 9,499',
    tag: 'New Launch',
    features: ['High Load Capacity', 'Eco & UPS Dual Mode', 'Short Circuit & Overload protection']
  },
  {
    id: 'inv3',
    name: 'Haion Solar Hybrid 2000',
    subtitle: 'Advanced Solar Hybrid Inverter with Intelligent Grid Sharing',
    image: '/haion_inverter.webp',
    price: '₹ 14,999',
    tag: 'Solar Tech',
    features: ['High Efficiency MPPT Charger', 'Solar Grid Intelligent Sharing', 'Digital LCD Status Display']
  }
];

export default function InverterPage({ onViewDetails, onClose }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-28 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-xs font-bold tracking-widest text-purple-700 uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/25 mb-4">
            Smart Power Backup
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gradient mb-6 font-display bg-gradient-to-r from-zinc-950 to-amber-500 bg-clip-text text-transparent">
            Haion Smart Inverters
          </h1>
          <p className="text-zinc-550 text-lg font-light leading-relaxed">
            Powering your home seamlessly. Explore our premium smart sine wave and hybrid solar inverters engineered with intelligent app integration, robust safety standards, and instant UPS switching.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gradient text-center font-display mb-10 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
            Premium Inverter Series
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {invertersData.map((product) => (
              <GlassCard key={product.id} className="w-full md:w-[380px] flex flex-col justify-between p-6 border-zinc-200/50 bg-white/75 hover:bg-white hover:border-purple-500/35 hover:shadow-[0_15px_40px_rgba(232,141,1,0.12)] transition-all duration-500 rounded-2xl group">
                
                {/* Sale Tag */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-purple-600 px-3 py-1 rounded-md shadow-sm">
                    {product.tag}
                  </span>
                </div>

                {/* Product Image Container */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-zinc-50 border border-zinc-100 group-hover:bg-zinc-100/50 transition-colors duration-500">
                  <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-purple-500/5 to-purple-650/5 blur-2xl opacity-80 group-hover:scale-125 transition-transform duration-700" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-48 object-contain z-10 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Details */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-extrabold text-zinc-900 mb-2 font-display">
                    {product.name}
                  </h3>
                  <p className="text-zinc-500 text-sm font-normal px-2 line-clamp-2 mb-4">
                    {product.subtitle}
                  </p>
                  {/* Feature Bullets */}
                  <ul className="inline-block text-left space-y-2 mt-2">
                    {product.features.map((feat) => (
                      <li key={feat} className="text-xs text-zinc-650 flex items-center gap-2 font-light">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Footer */}
                <div className="border-t border-zinc-100 pt-4 flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-[10px] text-zinc-400 block uppercase tracking-wider font-semibold">Special Price</span>
                    <span className="text-xl font-black text-zinc-900">{product.price}</span>
                  </div>
                  <button
                    onClick={() => onViewDetails && onViewDetails(product.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-zinc-950 to-amber-500 px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 hover:scale-[1.03] cursor-pointer focus:outline-none"
                  >
                    View Details
                    <FiArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </GlassCard>
            ))}
          </div>
        </div>

        {/* Specifications & Price Comparison Table */}
        <div className="mb-20">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gradient text-center font-display mb-2 bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
              Inverter Models & Specifications
            </h2>
            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xl mx-auto">
              Compare capacities, prices, and features across our smart home inverters.
            </p>
          </div>

          <GlassCard className="p-0 border-zinc-200/50 bg-white/80 overflow-hidden shadow-sm rounded-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/50 text-xs font-bold uppercase tracking-wider text-zinc-950">
                    <th className="py-4 px-6 text-zinc-950">Model</th>
                    <th className="py-4 px-6 text-right text-zinc-950">Price</th>
                    <th className="py-4 px-6 text-right text-zinc-950">MRP</th>
                    <th className="py-4 px-6 text-zinc-950">Description & Specification</th>
                    <th className="py-4 px-6 text-zinc-950 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/40 text-sm text-zinc-950">
                  {[
                    { model: 'Haion PowerGuard 1100', price: '₹ 6,999', mrp: '₹ 12,999', desc: '1100 VA Capacity, Pure Sine Wave, Single Battery Support, Smart Bluetooth App Monitoring' },
                    { model: 'Haion SuperCharge 1500', price: '₹ 9,499', mrp: '₹ 16,999', desc: '1500 VA Capacity, Pure Sine Wave, Dual Battery Mode Support, High Load Protection' },
                    { model: 'Haion Solar Hybrid 2000', price: '₹ 14,999', mrp: '₹ 24,999', desc: '2000 VA Hybrid capacity, Smart Solar Grid sharing with MPPT controller, LCD display console' }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-zinc-950">{row.model}</td>
                      <td className="py-4 px-6 text-right font-bold text-zinc-950">{row.price}</td>
                      <td className="py-4 px-6 text-right font-medium text-zinc-400 line-through">{row.mrp}</td>
                      <td className="py-4 px-6 text-zinc-950 font-normal leading-relaxed">{row.desc}</td>
                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => onViewDetails && onViewDetails(row.model)}
                          className="inline-flex items-center justify-center bg-zinc-950 hover:bg-zinc-800 text-white font-semibold text-xs py-1.5 px-3.5 rounded-full cursor-pointer transition-all duration-300 shadow-sm"
                        >
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>

        {/* Feature Grid */}
        <div className="bg-white border border-zinc-200/60 rounded-3xl p-8 md:p-12 shadow-sm text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                <FiCpu size={20} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">IoT Smart App Monitoring</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Monitor live backup time, battery water alerts, charging cycles, and power load through the unified Haion Smart App.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                <FiClock size={20} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">Instant UPS Switchover</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Switching time of less than 10ms ensures that computers, routers, and sensitive electronics remain powered without resetting.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                <FiShield size={20} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">2-Year Warranty</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Enjoy complete peace of mind with 2 years of manufacturing warranty and on-site servicing by Haion certified technicians.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
