import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal, GlassCard } from '../ui';
import { FiArrowRight } from 'react-icons/fi';

const evX1 = '/sc05-removebg-preview.png';
const evX1Plus = '/sc06-removebg-preview.png';
const evX2 = '/sco2-removebg-preview.png';
import applianceVacuum from '../../assets/appliance-vacuum.png';
import appliancePurifier from '../../assets/appliance-purifier.png';
import applianceTv from '../../assets/appliance-tv.png';
import refri1 from '../../assets/refri-removebg-preview.png';
import refri2 from '../../assets/refri2-removebg-preview.png';
import mixer2 from '../../assets/mixer2-removebg-preview.png';
import mixer1 from '../../assets/mixer1-removebg-preview.png';
import tv2 from '../../assets/tv2.jpg';
import tv3 from '../../assets/tv3.jpg';
import tv4 from '../../assets/tv4.jpg';
import tv5 from '../../assets/tv5.jpg';
import ac from '../../assets/ac-removebg-preview.png';

export const productsData = {
  evs: [
    {
      id: 'x1',
      name: 'X1',
      subtitle: 'Smart, Eco-Friendly EV Scooter for Urban Commuting',
      image: evX1,
      tag: 'Sale',
      price: '₹74,999',
      link: '#product-detail-x1'
    },
    {
      id: 'x1plus',
      name: 'X1Plus',
      subtitle: 'Your Everyday Green Ride – EV Scooter',
      image: '/xplusf3.png',
      tag: 'Sale',
      price: '₹84,999',
      link: '#product-detail-x1plus'
    },
    {
      id: 'x2',
      name: 'X2',
      subtitle: 'Reimagine Urban Travel with Our EV Scooter',
      image: '/x2f.png',
      tag: 'Sale',
      price: '₹94,999',
      link: '#product-detail-x2'
    },
    {
      id: 'x2plus',
      name: 'X2Plus',
      subtitle: 'High-Performance Smart EV Scooter',
      image: '/x2plusf2.png',
      tag: 'New',
      price: '₹99,999',
      link: '#product-detail-x2plus'
    },
    {
      id: 'x3',
      name: 'X3',
      subtitle: 'Adventure Ready Premium EV Scooter',
      image: '/x3f1.png',
      tag: 'New',
      price: '₹1,09,999',
      link: '#product-detail-x3'
    },
    {
      id: 'x4plus',
      name: 'X4Plus',
      subtitle: 'Ultra Range Smart EV Scooter',
      image: '/x4plusf1.png',
      tag: 'New',
      price: '₹1,19,999',
      link: '#product-detail-x4plus'
    },
    {
      id: 'spro',
      name: 'S Pro',
      subtitle: 'Elegant High-Speed Smart EV Scooter',
      image: '/Sprof.png',
      tag: 'Premium',
      price: '₹1,29,999',
      link: '#product-detail-spro'
    },
    {
      id: 'oxplus',
      name: 'OX Plus',
      subtitle: 'Ultimate Power & Intelligent EV Scooter',
      image: '/OXplusf2.png',
      tag: 'Elite',
      price: '₹1,39,999',
      link: '#product-detail-oxplus'
    }
  ],
  appliances: [
    {
      id: 'refri1',
      name: 'SmartChill Pro 450L',
      subtitle: 'Double-Door IoT Smart Refrigerator with Auto-Defrost',
      image: refri1,
      tag: 'New',
      price: '₹54,999',
      link: '#product-detail-refri1'
    },
    {
      id: 'refri2',
      name: 'FrostBreeze Duo 600L',
      subtitle: 'French Door Luxury Smart Refrigerator with Touch Console',
      image: refri2,
      tag: 'New',
      price: '₹84,999',
      link: '#product-detail-refri2'
    },
    {
      id: 'mixer1',
      name: 'PowerBlend X1',
      subtitle: '1000W Heavy-Duty Smart Mixer Grinder with Auto-Clean',
      image: mixer1,
      tag: 'New',
      price: '₹8,999',
      link: '#product-detail-mixer1'
    },
    {
      id: 'mixer2',
      name: 'TurboMix Pro',
      subtitle: 'High-Speed IoT Blender and Dry Grinder',
      image: mixer2,
      tag: 'New',
      price: '₹6,499',
      link: '#product-detail-mixer2'
    },
    {
      id: 'tv2',
      name: 'CinemaMax 55',
      subtitle: '55-inch Ultra HD Smart LED TV with HDR10+',
      image: tv2,
      tag: 'New',
      price: '₹38,999',
      link: '#product-detail-tv2'
    },
    {
      id: 'tv3',
      name: 'VisionPro 65',
      subtitle: '65-inch 4K Smart TV with Quantum Dot Display',
      image: tv3,
      tag: 'New',
      price: '₹48,999',
      link: '#product-detail-tv3'
    },
    {
      id: 'tv4',
      name: 'OLED Q1 50',
      subtitle: '50-inch Premium OLED Smart TV with Deep Blacks',
      image: tv4,
      tag: 'New',
      price: '₹59,999',
      link: '#product-detail-tv4'
    },

    {
      id: 'ac',
      name: 'AeroBreeze AC',
      subtitle: '1.5 Ton 5-Star IoT Inverter Split Air Conditioner',
      image: ac,
      tag: 'New',
      price: '₹36,999',
      link: '#product-detail-ac'
    }
  ]
};

export default function ProductsTabs({ onViewDetails }) {
  const [activeTab, setActiveTab] = useState('evs'); // 'evs' or 'appliances'

  return (
    <section id="showcase-tabs" className="relative py-12 md:py-24 bg-[#f8f9fa] overflow-hidden border-t border-black/5">
      {/* Decorative background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Tab Headers */}
        <div className="flex justify-center items-center gap-8 md:gap-12 mb-16 border-b border-zinc-200/60 pb-4 max-w-xl mx-auto">
          <button
            onClick={() => setActiveTab('evs')}
            className="relative pb-4 text-xl md:text-2xl font-bold font-display transition-colors duration-300 focus:outline-none cursor-pointer"
            style={{ color: activeTab === 'evs' ? '#18181b' : '#a1a1aa' }}
          >
            Electric Vehicles (EVs)
            {activeTab === 'evs' && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('appliances')}
            className="relative pb-4 text-xl md:text-2xl font-bold font-display transition-colors duration-300 focus:outline-none cursor-pointer"
            style={{ color: activeTab === 'appliances' ? '#18181b' : '#a1a1aa' }}
          >
            Home Appliances
            {activeTab === 'appliances' && (
              <motion.div
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-0 right-0 h-1 bg-purple-500"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        </div>

        {/* Tab Content Cards Grid */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10"
            >
              {productsData[activeTab].map((product) => (
                <div key={product.id} className="h-full">
                  <GlassCard className="h-full flex flex-col justify-between p-6 border-zinc-200/50 bg-white/70 hover:bg-white hover:border-purple-500/35 hover:shadow-[0_15px_40px_rgba(232,141,1,0.12)] transition-all duration-500 rounded-2xl group">
                    
                    {/* Sale Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider text-zinc-950 bg-purple-500 px-3 py-1 rounded-md shadow-sm">
                        {product.tag}
                      </span>
                    </div>

                    {/* Product Image Container */}
                    <div className="relative h-64 rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-zinc-50 border border-zinc-100 group-hover:bg-zinc-100/50 transition-colors duration-500">
                      <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-purple-500/5 to-purple-500/5 blur-2xl opacity-80 group-hover:scale-125 transition-transform duration-700" />
                      <img
                        src={product.image}
                        alt={product.name}
                        className={`max-h-56 object-contain z-10 transition-transform duration-500 ${
                          product.id.startsWith('x') 
                            ? 'scale-[1.35] group-hover:scale-[1.42]' 
                            : 'group-hover:scale-105'
                        }`}
                      />
                    </div>

                    {/* Details */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-extrabold text-zinc-900 mb-2 font-display">
                        {product.name}
                      </h3>
                      <p className="text-zinc-500 text-sm font-normal px-2 line-clamp-2">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Action Area */}
                    <div className="border-t border-zinc-100 pt-4 flex items-center justify-between">
                      <div className="text-left">
                        <span className="text-[10px] text-zinc-400 block uppercase tracking-wider font-semibold">Special Price</span>
                        <span className="text-xl font-black text-zinc-900">{product.price}</span>
                      </div>
                      <button
                        onClick={() => onViewDetails(product.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-zinc-950 to-amber-500 px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 hover:scale-[1.03] cursor-pointer focus:outline-none"
                      >
                        View Details
                        <FiArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>

                  </GlassCard>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
