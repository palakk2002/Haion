import React, { useEffect } from 'react';
import { GlassCard, SectionHeading } from '../ui';
import { FiArrowRight, FiCpu, FiClock, FiShield } from 'react-icons/fi';

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
import washing1 from '../../assets/wahsing2-removebg-preview.png';
import washing2 from '../../assets/washing_machine_3-removebg-preview (1).png';

const appliancesData = [
  {
    id: 'refri1',
    name: 'SmartChill Pro 450L',
    subtitle: 'Double-Door IoT Smart Refrigerator with Auto-Defrost',
    image: refri1,
    price: '₹54,999',
    tag: 'New',
    features: ['IoT Temperature Control', 'Digital Inverter Compressor', 'Triple Cooling System']
  },
  {
    id: 'refri2',
    name: 'FrostBreeze Duo 600L',
    subtitle: 'French Door Luxury Smart Refrigerator with Touch Console',
    image: refri2,
    price: '₹84,999',
    tag: 'New',
    features: ['InstaView Glass Panel', 'Wi-Fi Smart Control', 'Water & Ice Dispenser']
  },
  {
    id: 'mixer1',
    name: 'PowerBlend X1',
    subtitle: '1000W Heavy-Duty Smart Mixer Grinder with Auto-Clean',
    image: mixer1,
    price: '₹8,999',
    tag: 'New',
    features: ['1000W High-Torque Motor', 'Smart Speed Sensor Control', '4 Rust-Free Stainless Steel Jars']
  },
  {
    id: 'mixer2',
    name: 'TurboMix Pro',
    subtitle: 'High-Speed IoT Blender and Dry Grinder',
    image: mixer2,
    price: '₹6,499',
    tag: 'New',
    features: ['High-Speed Copper Motor', 'Touch Control Interface', 'Vacuum Extraction Technology']
  },
  {
    id: 'tv2',
    name: 'CinemaMax 55',
    subtitle: '55-inch Ultra HD Smart LED TV with HDR10+',
    image: tv2,
    price: '₹38,999',
    tag: 'New',
    features: ['4K Ultra HD resolution', 'Dolby Vision Support', '30W Dolby Audio Speakers']
  },
  {
    id: 'tv3',
    name: 'VisionPro 65',
    subtitle: '65-inch 4K Smart TV with Quantum Dot Display',
    image: tv3,
    price: '₹48,999',
    tag: 'New',
    features: ['QLED Screen technology', '120Hz Refresh Rate', 'Google TV OS integrated']
  },
  {
    id: 'tv4',
    name: 'OLED Q1 50',
    subtitle: '50-inch Premium OLED Smart TV with Deep Blacks',
    image: tv4,
    price: '₹59,999',
    tag: 'New',
    features: ['Infinite Contrast OLED Panel', 'Hands-free Voice Control', 'HDMI 2.1 Gaming Ports']
  },

  {
    id: 'ac',
    name: 'AeroBreeze AC',
    subtitle: '1.5 Ton 5-Star IoT Inverter Split Air Conditioner',
    image: ac,
    price: '₹36,999',
    tag: 'New',
    features: ['5-Star Energy Efficiency', 'Copper Condenser Coil', 'Smart App Temperature Schedule']
  }
];

export default function HomeAppliancesPage({ onViewDetails, onClose }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-28 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        


        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block text-xs font-semibold tracking-widest text-purple-600 uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/25 mb-4 animate-pulse-slow">
            IoT Household
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gradient mb-6 font-display">
            Haion Home Appliances
          </h1>
          <p className="text-zinc-500 text-lg font-light leading-relaxed">
            Smarter living made effortless. Explore our connected IoT household devices engineered for modern comfort, energy saving, and seamless app management.
          </p>
        </div>

        {/* LED TVs Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gradient text-center font-display mb-8">
            Smart LED TVs Series
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {appliancesData.filter(p => p.id.startsWith('tv')).map((product) => (
              <GlassCard key={product.id} className="w-full md:w-[380px] flex flex-col justify-between p-6 border-zinc-200/50 bg-white/70 hover:bg-white hover:border-purple-500/35 hover:shadow-[0_15px_40px_rgba(232,141,1,0.12)] transition-all duration-500 rounded-2xl group">
                
                {/* Sale Tag */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-950 bg-purple-500 px-3 py-1 rounded-md shadow-sm">
                    {product.tag}
                  </span>
                </div>

                {/* Product Image Container */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-zinc-50 border border-zinc-100 group-hover:bg-zinc-100/50 transition-colors duration-500">
                  <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-purple-500/5 to-purple-650/5 blur-2xl opacity-80 group-hover:scale-125 transition-transform duration-700" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-56 object-contain z-10 transition-transform duration-500 group-hover:scale-105"
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
                    onClick={() => onViewDetails(product.id)}
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

        {/* Standalone Whole New Range of LED TV Table */}
        <div className="mb-20">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gradient text-center font-display mb-2">
              Whole New Range of LED TV
            </h2>
            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xl mx-auto">
              Compare models, prices, and detailed specifications across our entire range of LED TVs.
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
                    <th className="py-4 px-6 text-zinc-950">Description</th>
                    <th className="py-4 px-6 text-zinc-950 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/40 text-sm text-zinc-950">
                  {[
                    { model: 'LED-AH24', price: '₹ 5,400', mrp: '₹ 9,999', desc: 'Speaker 20 W Connectivity (AV IN, HDMI, USB, VGA, Earphone)' },
                    { model: 'LED-AH40Normal', price: '₹ 10,000', mrp: '₹ 17,999', desc: '(AOSP), Normal, Speaker 20W, Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45))' },
                    { model: 'LED-32PROSmart', price: '₹ 8,000', mrp: '₹ 15,000', desc: 'Android (AOSP), 1.25/4GB , Speaker 20W, Connectivity ( AV IN, HDMI, USB, Earphone, LAN(RJ45))' },
                    { model: 'LED-32SIRIS LED TV', price: '₹ 8,400', mrp: '₹ 9,999', desc: 'Android IRIS , Speaker 20W, Connectivity ( AV IN, HDMI, USB, Earphone, LAN(RJ45)) Voice Remote, In-built' },
                    { model: 'LED-AH32SOTIS LED TV', price: '₹ 9,999', mrp: '₹ 16,999', desc: 'Android (OTIS), 1+8 GB, Speaker 20W, Screen-Sharing, HDMI ARC, Command Tv through Mobile Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45)) Voice Remote, In-built' },
                    { model: 'LED-AH32BLSmart', price: '₹ 10,999', mrp: '₹ 17,999', desc: 'Android (AOSP), Bezel Less, 1+8 GB, Speaker 20W, Screen-Sharing, HDMI ARC, Command Tv through Mobile Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45)) Voice Remote, In-built' },
                    { model: 'LED-AH40Smart', price: '₹ 13,999', mrp: '₹ 21,000', desc: 'Android (AOSP), BT, 1+8 GB, Speaker 20W, Screen-Sharing, HDMI ARC, Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45))' },
                    { model: 'LED-AH43SBSmart', price: '₹ 17,999', mrp: '₹ 27,000', desc: 'Android (AOSP), 1+8 GB, Speaker 20W, Screen-Sharing, HDMI ARC, Sound Bar In-built, Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45))' },
                    { model: 'LED-AH43BLSmart', price: '₹ 19,999', mrp: '₹ 28,000', desc: 'Bezel less, Android (AOSP), 1+8 GB, Speaker 20W, Screen-Sharing, HDMI ARC, Voice Remote, BT In-built, Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45))' },
                    { model: 'LED-AH43WEB', price: '₹ 24,999', mrp: '₹ 34,999', desc: 'HDR10 ,4K, Dolby Audio, Bezel less, WebOS, Magic Remotely ThinQ/Alexa, Screen-Sharing, HDMI ARC, BT In-built Connectivity (HDMI, USB, Optical, LAN(RJ45))' },
                    { model: 'LED-AH50Smart', price: '₹ 25,999', mrp: '₹ 42,000', desc: 'Android (AOSP), 1+8 GB, Speaker 20W, Screen-Sharing, HDMI ARC, In-built Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45))' },
                    { model: 'LED-AH50WEB', price: '₹ 29,999', mrp: '₹ 49,000', desc: 'HDR10 ,4K, Dolby Audio, Bezel less, WebOS, Magic Remotely ThinQ/Alexa, Screen-Sharing, HDMI ARC, BT In-built Connectivity (HDMI, USB, Optical, LAN(RJ45))' },
                    { model: 'LED-AN55Smart', price: '₹ 31,999', mrp: '₹ 50,000', desc: 'Android (AOSP), 1+8 GB, Speaker 20W, Screen-Sharing, HDMI ARC, In-built Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45))' },
                    { model: 'LED-AH55WEB', price: '₹ 38,999', mrp: '₹ 55,999', desc: 'HDR10 ,4K, Dolby Audio, Bezel less, WebOS, Magic Remotely ThinQ/Alexa, Screen-Sharing, HDMI ARC, BT In-built Connectivity (HDMI, USB, Optical, LAN(RJ45))' },
                    { model: 'LED-AN65Smart', price: '₹ 49,999', mrp: '₹ 75,000', desc: 'Android (AOSP), 1+8 GB, Speaker 20W, Screen-Sharing, HDMI ARC, In-built Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45))' }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-zinc-950">{row.model}</td>
                      <td className="py-4 px-6 text-right font-bold text-zinc-950">{row.price}</td>
                      <td className="py-4 px-6 text-right font-medium text-zinc-400 line-through">{row.mrp}</td>
                      <td className="py-4 px-6 text-zinc-950 font-normal leading-relaxed">{row.desc}</td>
                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => onViewDetails(row.model)}
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

        {/* Smart Refrigerators Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gradient text-center font-display mb-8">
            Smart Refrigerators
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {appliancesData.filter(p => p.id.startsWith('refri')).map((product) => (
              <GlassCard key={product.id} className="w-full md:w-[380px] flex flex-col justify-between p-6 border-zinc-200/50 bg-white/70 hover:bg-white hover:border-purple-500/35 hover:shadow-[0_15px_40px_rgba(232,141,1,0.12)] transition-all duration-500 rounded-2xl group">
                
                {/* Sale Tag */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-950 bg-purple-500 px-3 py-1 rounded-md shadow-sm">
                    {product.tag}
                  </span>
                </div>

                {/* Product Image Container */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-zinc-50 border border-zinc-100 group-hover:bg-zinc-100/50 transition-colors duration-500">
                  <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-purple-500/5 to-purple-650/5 blur-2xl opacity-80 group-hover:scale-125 transition-transform duration-700" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-56 object-contain z-10 transition-transform duration-500 group-hover:scale-105"
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
                    onClick={() => onViewDetails(product.id)}
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

        {/* Mixer Grinders & Kitchen Appliances Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gradient text-center font-display mb-8">
            Smart Mixer Grinders
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {appliancesData.filter(p => p.id.startsWith('mixer')).map((product) => (
              <GlassCard key={product.id} className="w-full md:w-[380px] flex flex-col justify-between p-6 border-zinc-200/50 bg-white/70 hover:bg-white hover:border-purple-500/35 hover:shadow-[0_15px_40px_rgba(232,141,1,0.12)] transition-all duration-500 rounded-2xl group">
                
                {/* Sale Tag */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-950 bg-purple-500 px-3 py-1 rounded-md shadow-sm">
                    {product.tag}
                  </span>
                </div>

                {/* Product Image Container */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-zinc-50 border border-zinc-100 group-hover:bg-zinc-100/50 transition-colors duration-500">
                  <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-purple-500/5 to-purple-650/5 blur-2xl opacity-80 group-hover:scale-125 transition-transform duration-700" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-56 object-contain z-10 transition-transform duration-500 group-hover:scale-105"
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
                    onClick={() => onViewDetails(product.id)}
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

        {/* Standalone Mixer Grinder, Juicer & Induction Table */}
        <div className="mb-20">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gradient text-center font-display mb-2">
              Mixer Grinder, Juicer & Induction
            </h2>
            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xl mx-auto">
              Explore our complete range of high-performance mixer grinders, juicers, hand blenders, and induction cookers.
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
                    <th className="py-4 px-6 text-zinc-950">Description</th>
                    <th className="py-4 px-6 text-zinc-950 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/40 text-sm text-zinc-950">
                  {[
                    { model: 'AN Electric Chopper / 1311', price: '₹ 780', mrp: '₹ 1,999', desc: 'Chopper' },
                    { model: 'AN Hand Blender / 502', price: '₹ 880', mrp: '₹ 2,499', desc: 'Stainless Steel Stem & 3 Multifunctional SS Blades' },
                    { model: 'AN MINI POPULAR 450 (Copper)', price: '₹ 1,150', mrp: '₹ 3,999', desc: '2 Poly JAR' },
                    { model: 'AN MINI DIAMOND 450 (Copper)', price: '₹ 1,100', mrp: '₹ 4,299', desc: '2 JARS' },
                    { model: 'AN Real JMG 450W (Copper)', price: '₹ 2,300', mrp: '₹ 4,999', desc: '1.5 Ltr Liquidizer & 200ml SS 3 Jar' },
                    { model: 'AN Marvel JMG 550W (Copper)', price: '₹ 2,650', mrp: '₹ 5,999', desc: '1.5 Ltr Ploy-Carbonate Jar & 500ml SS 3 Jar' },
                    { model: 'AN MINI DIAMOND 500 (Copper)', price: '₹ 1,500', mrp: '₹ 4,499', desc: '3 JARS' },
                    { model: 'AN Vista 550W (Copper)', price: '₹ 1,800', mrp: '₹ 4,299', desc: '3 JARS' },
                    { model: 'AN Gold Star 750W (Copper)', price: '₹ 2,400', mrp: '₹ 5,199', desc: '3 JARS' },
                    { model: 'AN Mega Star 1HP (Copper)', price: '₹ 2,650', mrp: '₹ 4,999', desc: '3 JARS' },
                    { model: 'AN W671100', price: '₹ 2,100', mrp: '₹ 4,499', desc: 'Induction Cooker' }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-zinc-950">{row.model}</td>
                      <td className="py-4 px-6 text-right font-bold text-zinc-950">{row.price}</td>
                      <td className="py-4 px-6 text-right font-medium text-zinc-400 line-through">{row.mrp}</td>
                      <td className="py-4 px-6 text-zinc-950 font-normal leading-relaxed">{row.desc}</td>
                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => onViewDetails(row.model)}
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

        {/* Smart Air Conditioners Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gradient text-center font-display mb-8">
            Smart Air Conditioners
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {appliancesData.filter(p => p.id === 'ac').map((product) => (
              <GlassCard key={product.id} className="w-full md:w-[380px] flex flex-col justify-between p-6 border-zinc-200/50 bg-white/70 hover:bg-white hover:border-purple-500/35 hover:shadow-[0_15px_40px_rgba(232,141,1,0.12)] transition-all duration-500 rounded-2xl group">
                
                {/* Sale Tag */}
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-950 bg-purple-500 px-3 py-1 rounded-md shadow-sm">
                    {product.tag}
                  </span>
                </div>

                {/* Product Image Container */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-6 flex items-center justify-center bg-zinc-50 border border-zinc-100 group-hover:bg-zinc-100/50 transition-colors duration-500">
                  <div className="absolute w-36 h-36 rounded-full bg-gradient-to-tr from-purple-500/5 to-purple-650/5 blur-2xl opacity-80 group-hover:scale-125 transition-transform duration-700" />
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-56 object-contain z-10 transition-transform duration-500 group-hover:scale-105"
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
                    onClick={() => onViewDetails(product.id)}
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

        {/* Standalone Air Conditioner Table */}
        <div className="mb-20">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gradient text-center font-display mb-2">
              Air Conditioner Range
            </h2>
            <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xl mx-auto">
              Compare models, prices, and energy efficiency ratings for our Air Conditioners.
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
                    <th className="py-4 px-6 text-zinc-950">Description</th>
                    <th className="py-4 px-6 text-zinc-950 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-200/40 text-sm text-zinc-950">
                  {[
                    { model: 'Ac-ATSAC183101TV', price: '₹ 29,999', mrp: '₹ 45,000', desc: 'AC Split 3 Star 1.5 Ton (Inverter) / 3 STAR / 3.92*' }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-zinc-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-zinc-950">{row.model}</td>
                      <td className="py-4 px-6 text-right font-bold text-zinc-950">{row.price}</td>
                      <td className="py-4 px-6 text-right font-medium text-zinc-400 line-through">{row.mrp}</td>
                      <td className="py-4 px-6 text-zinc-950 font-normal leading-relaxed">{row.desc}</td>
                      <td className="py-4 px-6 text-center">
                        <button
                          onClick={() => onViewDetails(row.model)}
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

        {/* Brand Connectivity Showcase */}
        <div className="bg-white border border-zinc-200/60 rounded-3xl p-8 md:p-12 shadow-sm text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                <FiCpu size={20} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">Unified IoT App</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Monitor water levels, schedules, battery health, and operations inside a single mobile application dashboard.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                <FiClock size={20} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">Smart Scheduling</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Set vacuum cleanups or air purify routines automatically when you leave the house or via calendar integrations.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                <FiShield size={20} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">Direct Brand Support</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  1-year manufacturing warranty with free in-home maintenance checkups and spare replacement support.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
