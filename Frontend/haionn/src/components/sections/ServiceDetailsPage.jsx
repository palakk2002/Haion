import React, { useEffect, useRef } from 'react';
import { GlassCard } from '../ui';
import { FiArrowRight, FiCpu, FiShield, FiZap, FiTruck, FiBattery } from 'react-icons/fi';
import { motion, useScroll, useTransform } from 'framer-motion';

import imgPreventShock from '../../assets/safeguard_prevent_shock.png';
import imgFastSpeed from '../../assets/safeguard_fast_speed.png';
import imgGroundMonitoring from '../../assets/safeguard_ground_monitoring.png';

const evX1 = '/sc05-removebg-preview.png';
const evX1Plus = '/sc06-removebg-preview.png';
const evX2 = '/sco2-removebg-preview.png';
import imgBattery from '../../assets/haion-battery.png';
import imgCharger from '../../assets/haion-charger.png';
import imgRickshaw from '../../assets/haion-rickshaw.png';

const servicesContent = {
  safeguard: {
    id: 'safeguard',
    icon: FiShield,
    title: 'Safeguard (New Innovation)',
    subtitle: 'Intellectually designed protective systems shielding your electric vehicles and batteries from power surges and thermal overloads.',
    description: 'Our patent-pending Safeguard technology provides continuous monitoring of battery voltages and motor currents. By integrating real-time telemetry with our smart BMS, it automatically isolates critical components during power anomalies, preventing short circuits and thermal runaway.',
    specs: [
      { label: 'Surge Protection', val: 'Up to 10kV dynamic voltage protection' },
      { label: 'Thermal Cut-off', val: 'Instant isolation trigger at 65°C' },
      { label: 'BMS Integration', val: 'Continuous sync with Haion Mobile App' },
      { label: 'Auto-Recovery', val: 'Self-diagnosing automatic system reset' }
    ]
  },
  scooter: {
    id: 'scooter',
    icon: FiZap,
    title: 'Electric Scooters',
    subtitle: 'Experience the next-generation of urban commuting. Powered by clean battery packs and high-torque BLDC hub motors.',
    description: 'Haion electric scooters combine aerodynamics, digital consoles, and robust chassis engineering to deliver a smooth, quiet, and eco-friendly ride. Configured with front disc brakes, central locking, and GPS tracking, urban transit is safer and smarter than ever.',
    specs: [
      { label: 'Max Speed', val: 'Up to 65 KM/H (in Sport Mode)' },
      { label: 'IDC Range', val: '70 KM - 200 KM' },
      { label: 'Warranty', val: '3 Years Warranty' },
      { label: 'Suspension', val: 'Telescopic front and double-spring rear' }
    ]
  },
  battery: {
    id: 'battery',
    icon: FiBattery,
    title: 'Lithium-Ion Battery Packs',
    subtitle: 'State-of-the-art smart batteries with integrated BMS (Battery Management System), cell balancing, and high energy density.',
    description: 'Our battery packs are engineered with premium Grade-A cells and custom metal casing to ensure structural durability. The built-in cell-balancing hardware maximizes both range and lifecycle, making them reliable powerhouses for long daily commutes.',
    specs: [
      { label: 'Chemistry', val: 'Advanced Lithium Iron Phosphate (LFP) / NMC' },
      { label: 'Cycles', val: '3000+ charging cycles at 80% capacity' },
      { label: 'Protection', val: 'IP67 dust and water resistance' },
      { label: 'Charging', val: 'Fast-charging support (0 to 80% in 1.5 hours)' }
    ]
  },
  charger: {
    id: 'charger',
    icon: FiCpu,
    title: 'Smart EV Chargers',
    subtitle: 'Intelligent fast chargers configured with automatic power-cut mechanisms to secure battery lifespans.',
    description: 'Haion smart chargers detect the battery charge levels in real-time. Once the pack reaches 100% capacity, the charger safely cuts off power to avoid overcharging, swelling, and heating, thereby extending the long-term battery health.',
    specs: [
      { label: 'Input Range', val: '180V to 260V AC wide input support' },
      { label: 'Auto Cut-off', val: 'Intelligent power disconnection' },
      { label: 'Cooling', val: 'Silent active fan cooling mechanism' },
      { label: 'Indicators', val: 'LED charge status and fault indicators' }
    ]
  },
  rickshaw: {
    id: 'rickshaw',
    icon: FiTruck,
    title: 'Heavy-Duty E-Rickshaw Vehicles',
    subtitle: 'Engineered for robust passenger transport, loading capacity, and high-efficiency performance on Indian roads.',
    description: 'Designed to handle rugged street conditions, our E-Rickshaws feature reinforced steel chassis, dual-leaf spring suspensions, and high-efficiency gearboxes. They provide clean, profitable livelihood solutions for transit operators nationwide.',
    specs: [
      { label: 'Motor Power', val: '1200W high-torque brushless gear motor' },
      { label: 'Loading Weight', val: 'Up to 500 K.G. passenger/cargo capacity' },
      { label: 'Range', val: 'Up to 150 KM with dual battery setup' },
      { label: 'Braking', val: 'Mechanical drum brakes with parking lock' }
    ]
  }
};

const serviceProducts = {
  scooter: [
    {
      id: 'x1',
      name: 'X1',
      subtitle: 'Smart, Eco-Friendly EV Scooter for Urban Commuting',
      image: evX1,
      tag: 'Sale',
      price: '₹74,999'
    },
    {
      id: 'x1plus',
      name: 'X1Plus',
      subtitle: 'Your Everyday Green Ride – EV Scooter',
      image: evX1Plus,
      tag: 'Sale',
      price: '₹84,999'
    },
    {
      id: 'x2',
      name: 'X2',
      subtitle: 'Reimagine Urban Travel with Our EV Scooter',
      image: evX2,
      tag: 'Sale',
      price: '₹94,999'
    }
  ],
  battery: [
    {
      id: 'bat_48v',
      name: 'B1-48V PowerPack',
      subtitle: '48V 24Ah Lithium-Ion Battery Pack with Smart BMS',
      image: '/battery2-removebg-preview.png',
      tag: 'New',
      price: '₹28,999'
    },
    {
      id: 'bat_60v',
      name: 'B2-60V EnergyMax',
      subtitle: '60V 30Ah High-Performance Lithium Battery Pack',
      image: '/battrey3-removebg-preview.png',
      tag: 'New',
      price: '₹36,999'
    },
    {
      id: 'bat_72v',
      name: 'B3-72V UltraPower',
      subtitle: '72V 35Ah Long-Range Lithium-Ion Battery Pack',
      image: '/battery2-removebg-preview.png',
      tag: 'New',
      price: '₹45,999'
    }
  ],
  charger: [
    {
      id: 'chg_standard',
      name: 'C1-Standard',
      subtitle: '48V-72V Auto-Detect Smart EV Charger',
      image: '/charger-removebg-preview.png',
      tag: 'Sale',
      price: '₹4,999'
    },
    {
      id: 'chg_fast',
      name: 'C2-Fast Charger',
      subtitle: '10A Quick Charging Support for EV Scooters',
      image: '/charger3-removebg-preview.png',
      tag: 'Best Seller',
      price: '₹7,999'
    },
    {
      id: 'chg_smart',
      name: 'C3-Smart IoT Charger',
      subtitle: 'App-Connected Smart Charger with Auto Cut-off',
      image: '/charger-removebg-preview.png',
      tag: 'New',
      price: '₹11,999'
    }
  ],
  rickshaw: [
    {
      id: 'er_passenger',
      name: 'R1-Passenger',
      subtitle: 'Heavy-Duty 4-Passenger E-Rickshaw for Indian Roads',
      image: imgRickshaw,
      tag: 'Sale',
      price: '₹1,24,999'
    },
    {
      id: 'er_cargo',
      name: 'R2-Cargo',
      subtitle: 'High-Capacity Goods Carrier E-Rickshaw',
      image: imgRickshaw,
      tag: 'New',
      price: '₹1,34,999'
    },
    {
      id: 'er_loader',
      name: 'R3-Loader',
      subtitle: 'Reinforced Closed Cabin Delivery E-Rickshaw',
      image: imgRickshaw,
      tag: 'New',
      price: '₹1,44,999'
    }
  ]
};

const serviceSectionTitles = {
  scooter: { main: "Electrical", highlight: "Products" },
  battery: { main: "Lithium Battery", highlight: "Packs" },
  charger: { main: "Smart EV", highlight: "Chargers" },
  rickshaw: { main: "E-Rickshaw", highlight: "Vehicles" }
};

const scooterGalleryImages = [
  { img: '/sc05-removebg-preview.png', title: 'Aero Pink', desc: 'Front-facing aerodynamic view' },
  { img: '/sc06-removebg-preview.png', title: 'Pearl White', desc: 'Sleek premium commuter look' },
  { img: '/sco2-removebg-preview.png', title: 'Carbon Grey', desc: 'Urban street design profile' },
  { img: '/sco8-removebg-preview.png', title: 'Sport Edition', desc: 'Stylish side profile' },
  { img: '/scooter-removebg-preview.png', title: 'Classic Matte', desc: 'Traditional clean signature finish' }
];

export default function ServiceDetailsPage({ serviceId, onViewProduct, onClose }) {
  const content = servicesContent[serviceId] || servicesContent.safeguard;
  const Icon = content.icon;
  const [activeScooterImg, setActiveScooterImg] = React.useState('/sc05-removebg-preview.png');
  const [frameIndex, setFrameIndex] = React.useState(1);

  const isDragging = React.useRef(false);
  const startX = React.useRef(0);
  const startFrame = React.useRef(1);

  const handleDragStart = (e) => {
    isDragging.current = true;
    startX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    startFrame.current = frameIndex;
  };

  const handleDragMove = (e) => {
    if (!isDragging.current) return;
    const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = currentX - startX.current;
    
    // Adjust rotation sensitivity: 1 frame per 8 pixels of drag
    const frameDiff = Math.round(deltaX / 8);
    
    let newFrame = startFrame.current - frameDiff;
    while (newFrame < 1) newFrame += 150;
    while (newFrame > 150) newFrame -= 150;
    
    setFrameIndex(newFrame);
  };

  const handleDragEnd = () => {
    isDragging.current = false;
  };

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const xLeft = useTransform(scrollYProgress, [0, 0.35, 1.0], [-280, 0, 0]);
  const xRight = useTransform(scrollYProgress, [0, 0.35, 1.0], [280, 0, 0]);
  const scaleCenter = useTransform(scrollYProgress, [0, 0.35, 0.6, 0.75, 0.9, 1.0], [1, 1, 4.5, 4.5, 1, 1]);
  const borderRadiusCenter = useTransform(scrollYProgress, [0.35, 0.55, 0.75, 0.9], [32, 0, 0, 32]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveScooterImg('/sc05-removebg-preview.png');
    setFrameIndex(1);
  }, [serviceId]);

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-28 pb-20 font-sans">

      <div 
        className={`relative w-full ${
          content.id === 'scooter' 
            ? 'bg-cover bg-center py-16 md:py-24 text-white border-b border-zinc-800 shadow-md' 
            : 'bg-transparent text-zinc-950 py-8 mb-12'
        }`}
        style={content.id === 'scooter' ? { backgroundImage: 'url("/haion_tropical_scooters.png")' } : {}}
      >
        {/* Grid Layout Content */}
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-md ${
              content.id === 'scooter'
                ? 'bg-gradient-to-r from-purple-650 to-amber-500 shadow-purple-555/10'
                : 'bg-gradient-to-r from-zinc-950 to-amber-500 shadow-purple-500/15'
            }`}>
              <Icon size={26} />
            </div>

            <h1 className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-6 font-display ${
              content.id === 'scooter' ? 'text-zinc-950' : 'text-gradient'
            }`}>
              {content.title}
            </h1>
            
            <p className="text-zinc-800 text-lg font-semibold leading-relaxed mb-6">
              {content.subtitle}
            </p>

            <p className={`text-base leading-relaxed font-light mb-8 ${
              content.id === 'scooter' ? 'text-zinc-650' : 'text-zinc-500'
            }`}>
              {content.description}
            </p>

            {/* Quick Explore Redirect */}
            {content.id === 'scooter' && (
              <button
                onClick={() => onViewProduct('x1')}
                className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-purple-650 to-amber-500 px-6 py-3 rounded-full hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 hover:scale-[1.03] cursor-pointer"
              >
                View Scooters
                <FiArrowRight size={16} />
              </button>
            )}
          </div>

          {/* Right Specs Table Card */}
          <div className="lg:col-span-5 w-full">
            <GlassCard className="p-6 md:p-8 rounded-3xl border shadow-sm bg-white/80 border-zinc-200/50 text-zinc-900">
              <h3 className={`text-xl font-bold mb-6 font-display border-b pb-3 ${
                content.id === 'scooter' ? 'text-zinc-950 border-zinc-200' : 'text-zinc-900 border-zinc-100'
              }`}>
                Technical Specifications
              </h3>
              
              <div className={`divide-y ${content.id === 'scooter' ? 'divide-zinc-200/80' : 'divide-zinc-200/40'}`}>
                {content.specs.map((spec) => (
                  <div key={spec.label} className="py-4 text-sm text-left">
                    <div className="font-bold text-zinc-500 uppercase tracking-wider mb-1">
                      {spec.label}
                    </div>
                    <div className="text-zinc-800 font-semibold">
                      {spec.val}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      {/* Specifications Bar (Only for Scooter service) */}
      {content.id === 'scooter' && (
        <div className="w-full bg-zinc-950 py-10 text-white select-none">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Km Range */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 w-full flex justify-center">
                <svg viewBox="0 0 160 100" className="w-full max-w-[120px] h-20" xmlns="http://www.w3.org/2000/svg">
                  <style>{`
                    @keyframes moveRoad {
                      to { stroke-dashoffset: -28; }
                    }
                    .animate-road-line {
                      animation: moveRoad 1.2s linear infinite;
                    }
                  `}</style>
                  <rect width="160" height="100" rx="8" fill="rgba(255, 255, 255, 0.15)" />
                  <polygon points="-10,65 30,30 70,65" fill="rgba(255, 255, 255, 0.25)" />
                  <polygon points="20,38 30,30 40,38" fill="rgba(255, 255, 255, 0.45)" />
                  <polygon points="50,65 95,20 140,65" fill="rgba(255, 255, 255, 0.3)" />
                  <polygon points="82,33 95,20 108,33" fill="rgba(255, 255, 255, 0.45)" />
                  <polygon points="100,65 130,35 165,65" fill="rgba(255, 255, 255, 0.25)" />
                  <polygon points="120,45 130,35 140,45" fill="rgba(255, 255, 255, 0.45)" />
                  <path d="M-10,30 Q20,15 50,30 Q80,15 110,30 Q140,15 170,30 L170,65 L-10,65 Z" fill="rgba(255, 255, 255, 0.15)" opacity="0.4" />
                  <path d="M-10,38 Q15,25 40,38 Q65,25 90,38 Q115,25 140,38 L140,65 L-10,65 Z" fill="rgba(255, 255, 255, 0.25)" opacity="0.6" />
                  <rect y="65" width="160" height="35" fill="rgba(255, 255, 255, 0.35)" />
                  <polygon points="10,100 75,65 85,65 150,100" fill="rgba(0, 0, 0, 0.2)" />
                  <line x1="80" y1="65" x2="80" y2="100" stroke="#ffffff" strokeWidth="3" strokeDasharray="8,6" className="animate-road-line" />
                  <rect x="12" y="60" width="3" height="12" fill="#78350f" opacity="0.6" />
                  <circle cx="13.5" cy="54" r="7" fill="#22c55e" />
                </svg>
              </div>
              <div className="text-4xl font-extrabold font-display mb-1">
                200<span className="text-sm font-normal ml-0.5 opacity-80">*</span>
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold opacity-90">Km Range Per Charge</div>
            </div>

            {/* Watt Peak Power */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 w-full flex justify-center">
                <svg viewBox="0 0 100 100" className="w-full max-w-[120px] h-20" xmlns="http://www.w3.org/2000/svg">
                  <style>{`
                    @keyframes pulseLightning {
                      0%, 100% { transform: scale(1); filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.4)); }
                      50% { transform: scale(1.08); filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.9)); }
                    }
                    .animate-lightning {
                      animation: pulseLightning 1.8s ease-in-out infinite;
                      transform-origin: center;
                    }
                  `}</style>
                  <path d="M58,5 L32,54 H50 L42,95 L68,46 H50 Z" fill="#ffffff" className="animate-lightning" />
                </svg>
              </div>
              <div className="text-4xl font-extrabold font-display mb-1">
                1200
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold opacity-90">Watt Peak Power</div>
            </div>

            {/* Modes & Reverse */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 w-full flex justify-center">
                <svg viewBox="0 0 100 100" className="w-full max-w-[120px] h-20" xmlns="http://www.w3.org/2000/svg">
                  <style>{`
                    @keyframes spinClockwise {
                      to { transform: rotate(360deg); }
                    }
                    @keyframes spinCounterClockwise {
                      to { transform: rotate(-360deg); }
                    }
                    .gear-blue {
                      animation: spinClockwise 8s linear infinite;
                      transform-origin: 38px 38px;
                    }
                    .gear-slate {
                      animation: spinCounterClockwise 6s linear infinite;
                      transform-origin: 64px 44px;
                    }
                    .gear-orange {
                      animation: spinCounterClockwise 10s linear infinite;
                      transform-origin: 48px 66px;
                    }
                  `}</style>
                  <g transform="translate(38, 38)" fill="rgba(255,255,255,0.85)" className="gear-blue">
                    <circle cx="0" cy="0" r="14" />
                    <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(0)" />
                    <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(45)" />
                    <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(90)" />
                    <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(135)" />
                    <circle cx="0" cy="0" r="6" fill="none" />
                  </g>
                  <g transform="translate(64, 44)" fill="rgba(255,255,255,0.55)" className="gear-slate">
                    <circle cx="0" cy="0" r="11" />
                    <rect x="-2.5" y="-14" width="5" height="6" rx="1" transform="rotate(22.5)" />
                    <rect x="-2.5" y="-14" width="5" height="6" rx="1" transform="rotate(67.5)" />
                    <rect x="-2.5" y="-14" width="5" height="6" rx="1" transform="rotate(112.5)" />
                    <rect x="-2.5" y="-14" width="5" height="6" rx="1" transform="rotate(157.5)" />
                    <circle cx="0" cy="0" r="5" fill="none" />
                  </g>
                  <g transform="translate(48, 66)" fill="rgba(255,255,255,0.7)" className="gear-orange">
                    <circle cx="0" cy="0" r="14" />
                    <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(15)" />
                    <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(60)" />
                    <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(105)" />
                    <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(150)" />
                    <circle cx="0" cy="0" r="6" fill="none" />
                  </g>
                </svg>
              </div>
              <div className="text-4xl font-extrabold font-display mb-1">
                4
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold opacity-90">I 2 3 4 Modes & Reverse</div>
            </div>

            {/* Top Speed */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-3 w-full flex justify-center">
                <svg viewBox="0 0 100 100" className="w-full max-w-[120px] h-20" xmlns="http://www.w3.org/2000/svg">
                  <style>{`
                    @keyframes sweepNeedle {
                      0%, 100% { transform: rotate(-8deg); }
                      50% { transform: rotate(12deg); }
                    }
                    .animate-needle {
                      animation: sweepNeedle 2.5s ease-in-out infinite;
                      transform-origin: 50px 70px;
                    }
                  `}</style>
                  <path d="M20,75 A35,35 0 0,1 80,75" stroke="rgba(255,255,255,0.25)" strokeWidth="4" strokeLinecap="round" fill="none" />
                  <path d="M20,75 A35,35 0 0,1 32,45" stroke="rgba(255,255,255,0.75)" strokeWidth="5" strokeLinecap="round" fill="none" />
                  <path d="M32,45 A35,35 0 0,1 50,30" stroke="rgba(255,255,255,0.95)" strokeWidth="5" strokeLinecap="round" fill="none" />
                  <path d="M50,30 A35,35 0 0,1 80,75" stroke="rgba(255,255,255,0.4)" strokeWidth="5" strokeLinecap="round" fill="none" />
                  <g transform="translate(50, 70)" className="animate-needle">
                    <line x1="0" y1="0" x2="0" y2="-34" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="0" cy="0" r="4" fill="#ffffff" />
                  </g>
                </svg>
              </div>
              <div className="text-4xl font-extrabold font-display mb-1">
                25<span className="text-sm font-normal ml-0.5 opacity-80">*</span>
              </div>
              <div className="text-xs uppercase tracking-widest font-semibold opacity-90">KMPH Top Speed</div>
            </div>
          </div>
        </div>
      )}

      {/* 360 Degree Viewer (Only for Scooter service) */}
      {content.id === 'scooter' && (
        <div className="w-full py-16 bg-white border-b border-zinc-150 text-center select-none">
          <div className="max-w-4xl mx-auto px-6">
            
            {/* Header with dividers */}
            <div className="flex items-center justify-center gap-6 mb-10 select-none">
              <div className="h-[1px] bg-zinc-200 flex-grow max-w-[150px]" />
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-widest font-display text-zinc-800">
                HAION <span className="text-amber-500 font-black">360°</span>
              </h2>
              <div className="h-[1px] bg-zinc-200 flex-grow max-w-[150px]" />
            </div>

            {/* Spinner Showcase Box */}
            <div 
              className="relative aspect-[16/10] max-w-2xl mx-auto bg-zinc-50/50 rounded-2xl border border-zinc-100 flex items-center justify-center p-6 cursor-ew-resize select-none overflow-hidden group shadow-sm"
              onMouseDown={handleDragStart}
              onMouseMove={handleDragMove}
              onMouseUp={handleDragEnd}
              onMouseLeave={handleDragEnd}
              onTouchStart={handleDragStart}
              onTouchMove={handleDragMove}
              onTouchEnd={handleDragEnd}
            >
              {/* Pseudo-3D Interactive Scooter Image */}
              <div 
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
                className="w-full h-full flex items-center justify-center pointer-events-none"
              >
                <img 
                  src="/scooter-removebg-preview.png" 
                  alt="Haion Scooter 3D Showcase" 
                  style={{
                    transform: `rotateY(${((frameIndex - 75) / 75) * 45}deg) rotateX(${Math.abs((frameIndex - 75) / 75) * -6}deg) scale(1.15)`,
                    filter: `drop-shadow(${((75 - frameIndex) / 75) * 12}px 18px 15px rgba(0,0,0,0.18))`,
                    transition: 'transform 0.15s ease-out, filter 0.15s ease-out',
                  }}
                  className="max-h-[90%] object-contain select-none pointer-events-none" 
                />
              </div>

              {/* Interaction Guide overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-zinc-950/85 text-white text-[10px] uppercase font-bold tracking-widest px-4 py-2 rounded-full shadow-md pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
                ← Drag to Rotate 360° →
              </div>
            </div>

            {/* Slider Scrub Controller */}
            <div className="mt-8 flex flex-col items-center gap-2">
              <input 
                type="range" 
                min="1" 
                max="150" 
                value={frameIndex} 
                onChange={(e) => setFrameIndex(Number(e.target.value))}
                className="w-full max-w-md accent-sky-500 h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider mt-1">
                Angle: {Math.round(((frameIndex - 75) / 75) * 45)}°
              </span>
            </div>

          </div>
        </div>
      )}

      {/* LED Light Section (Only for Scooter service) */}
      {content.id === 'scooter' && (
        <div className="w-full py-16 bg-[#f8f9fa] border-b border-zinc-200/60 text-left select-none">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 font-display text-zinc-950">
                LED <span className="bg-gradient-to-r from-zinc-950 to-amber-500 bg-clip-text text-transparent">Light</span>
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-light max-w-md">
                LED lights are all the rage these days. Haion equipped with LED headlights and Tail Lights. Saves a lot of energy. Looks stylish and modern.
              </p>
            </div>

            {/* Right Images */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-6 w-full">
              {/* Headlight Image */}
              <div className="rounded-3xl overflow-hidden bg-white aspect-[4/5] flex items-center justify-center relative shadow-md group border border-zinc-200/20">
                <img 
                  src="/front.jpeg" 
                  alt="LED Headlight" 
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                />
              </div>

              {/* Tail Light Image */}
              <div className="rounded-3xl overflow-hidden bg-zinc-950 aspect-[4/5] flex items-center justify-center relative shadow-md group border border-zinc-200/20">
                <img 
                  src="/back.jpeg" 
                  alt="Tail Light" 
                  className="w-full h-full object-cover rotate-90 scale-[1.4] group-hover:scale-[1.5] transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Digital Meter Section (Only for Scooter service) */}
      {content.id === 'scooter' && (
        <div className="w-full py-16 bg-white border-b border-zinc-200/60 text-left select-none">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="lg:col-span-7 flex items-center justify-center relative w-full">
              <div className="rounded-3xl overflow-hidden bg-white aspect-[16/10] flex items-center justify-center relative shadow-md group border border-zinc-200/20 w-full">
                <img 
                  src="/front.jpeg" 
                  alt="Digital Meter Console" 
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-[1.03] transition-transform duration-500" 
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-5 text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 font-display text-zinc-950">
                Digital <span className="bg-gradient-to-r from-zinc-950 to-amber-500 bg-clip-text text-transparent">Meter</span>
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-light max-w-md">
                Stylish and Modern digital Meter giver your scooter a new look. It has several indicators. Speedometer, Tripmeter and Battery are major part of Digital Meter.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* DISC Brakes Section (Only for Scooter service) */}
      {content.id === 'scooter' && (
        <div className="w-full py-16 bg-[#f8f9fa] border-b border-zinc-200/60 text-left select-none">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-5 text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 font-display text-zinc-950">
                DISC <span className="bg-gradient-to-r from-zinc-950 to-amber-500 bg-clip-text text-transparent">Brakes</span>
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-light max-w-md">
                A disc brake is a type of brake that uses rotors and calipers to stop the wheels from turning. It is the safest electric scooter brake out there because of their strong stopping power in both dry and wet conditions.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-7 flex items-center justify-center relative w-full">
              <div className="rounded-3xl overflow-hidden bg-zinc-950 aspect-[16/10] flex items-center justify-center relative shadow-md group border border-zinc-200/20 w-full">
                <img 
                  src="/back.jpeg" 
                  alt="Disc Brakes" 
                  className="w-full h-full object-cover rotate-90 scale-[1.8] origin-center group-hover:scale-[1.9] transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Dual Suspension Section (Only for Scooter service) */}
      {content.id === 'scooter' && (
        <div className="w-full py-16 bg-white border-b border-zinc-200/60 text-left select-none">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="lg:col-span-7 flex items-center justify-center relative w-full">
              <div className="rounded-3xl overflow-hidden bg-zinc-950 aspect-[16/10] flex items-center justify-center relative shadow-md group border border-zinc-200/20 w-full">
                <img 
                  src="/back.jpeg" 
                  alt="Dual Suspension" 
                  className="w-full h-full object-cover rotate-90 scale-[1.4] group-hover:scale-[1.5] transition-transform duration-500" 
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-5 text-left">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 font-display text-zinc-950">
                Dual <span className="bg-gradient-to-r from-zinc-950 to-amber-500 bg-clip-text text-transparent">Suspension</span>
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-light max-w-md">
                An electric scooter suspension system is a mechanism that balances road handling and ride quality. The suspension absorbs the impact of riding on uneven terrain and makes the ride smoother for the rider.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Boxed content wrapper for other sections */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        {/* Dynamic Safeguard Scroll-Driven Zooming Gallery */}
        {content.id === 'safeguard' && (
          <div className="w-full mt-24">
            {/* Header outside sticky container to prevent overlapping */}
            <div className="text-center mb-12 max-w-xl mx-auto px-4">
              <span className="inline-block text-xs font-semibold text-amber-500 uppercase tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 mb-3 animate-pulse-slow">
                The Family Album
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 font-display">
                Effortless riding. <span className="bg-gradient-to-r from-zinc-950 to-amber-500 bg-clip-text text-transparent">Worry-free ownership.</span>
              </h2>
              <p className="text-zinc-500 text-xs mt-2">
                Scroll down to explore moments captured with the Haion family scooter.
              </p>
            </div>

            <div ref={containerRef} className="relative h-[280vh] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
              <div className="sticky top-0 h-screen w-screen overflow-hidden flex flex-col justify-center items-center bg-[#f8f9fa] z-20">
                
                {/* Panorama Gallery Container */}
                <div className="relative w-full flex items-center justify-center h-[55vh]">
                  <div className="flex gap-0 items-center justify-center relative w-full h-full">
                    
                    {/* Left Panel */}
                    <motion.div 
                      style={{ x: xLeft }}
                      className="w-[30vw] md:w-[380px] h-full rounded-l-[32px] overflow-hidden shadow-lg border border-zinc-200/50 bg-white relative z-10 shrink-0"
                    >
                      <img src="/family_album_left.png" alt="Left Panel" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Center Panel (The one that zooms in) */}
                    <motion.div 
                      style={{ scale: scaleCenter, borderRadius: borderRadiusCenter }}
                      className="w-[30vw] md:w-[380px] h-full overflow-hidden shadow-2xl bg-white relative z-20 shrink-0"
                    >
                      <img src="/family_album_center.png" alt="Center Panel" className="w-full h-full object-cover" />
                      
                      {/* Centered text overlay that fades out on zoom */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-black/[0.03] text-white">
                        <h3 className="text-2xl md:text-3xl font-black font-display tracking-tight leading-none drop-shadow-md">
                          The family album
                        </h3>
                        <p className="text-[10px] md:text-xs font-light tracking-widest mt-2 uppercase opacity-85">
                          Built for everyday memories
                        </p>
                      </div>
                    </motion.div>

                    {/* Right Panel */}
                    <motion.div 
                      style={{ x: xRight }}
                      className="w-[30vw] md:w-[380px] h-full rounded-r-[32px] overflow-hidden shadow-lg border border-zinc-200/50 bg-white relative z-10 shrink-0"
                    >
                      <img src="/family_album_right.png" alt="Right Panel" className="w-full h-full object-cover" />
                    </motion.div>

                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Dynamic Safeguard Features Section */}
        {content.id === 'safeguard' && (
          <div className="mt-24 border-t border-zinc-200/40 pt-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 font-display">
                Why the <span className="bg-gradient-to-r from-zinc-950 to-amber-500 bg-clip-text text-transparent">Safeguard</span> is Important
              </h2>
              <div className="w-24 h-[3px] bg-gradient-to-r from-zinc-950 to-amber-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Prevents Electric Shocks */}
              <GlassCard className="overflow-hidden bg-white border border-zinc-200/50 hover:border-amber-500/35 hover:shadow-[0_15px_35px_rgba(245,158,11,0.08)] transition-all duration-500 rounded-3xl flex flex-col items-center text-center group">
                <div className="w-full h-48 overflow-hidden bg-zinc-100">
                  <img 
                    src={imgPreventShock} 
                    alt="Prevents Electric Shocks" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 font-display">
                    Prevents Electric Shocks
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Detects leakage currents and instantly cuts off power before injury occurs.
                  </p>
                </div>
              </GlassCard>

              {/* Life-Saving Speed */}
              <GlassCard className="overflow-hidden bg-white border border-zinc-200/50 hover:border-amber-500/35 hover:shadow-[0_15px_35px_rgba(245,158,11,0.08)] transition-all duration-500 rounded-3xl flex flex-col items-center text-center group">
                <div className="w-full h-48 overflow-hidden bg-zinc-100">
                  <img 
                    src={imgFastSpeed} 
                    alt="Life-Saving Speed" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 font-display">
                    Life-Saving Speed
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Responds in less than 0.5 seconds, well within the safe human tolerance time for electrical exposure.
                  </p>
                </div>
              </GlassCard>

              {/* Continuous Ground Monitoring */}
              <GlassCard className="overflow-hidden bg-white border border-zinc-200/50 hover:border-amber-500/35 hover:shadow-[0_15px_35px_rgba(245,158,11,0.08)] transition-all duration-500 rounded-3xl flex flex-col items-center text-center group">
                <div className="w-full h-48 overflow-hidden bg-zinc-100">
                  <img 
                    src={imgGroundMonitoring} 
                    alt="Continuous Ground Monitoring" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 font-display">
                    Continuous Ground Monitoring
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Alerts you if your ground connection becomes loose or broken, avoiding hidden risks.
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Key Benefits for Users Section */}
            <div className="mt-20 bg-white border border-zinc-200/60 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden">
              {/* Subtle decorative background glow */}
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />
              
              <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-12 font-display text-zinc-950">
                Key Benefits for <span className="bg-gradient-to-r from-zinc-950 to-amber-500 bg-clip-text text-transparent">Users</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl mx-auto">
                <div className="flex gap-4 items-start">
                  <span className="w-2 h-2 rounded-xs bg-amber-500 shrink-0 mt-2" />
                  <div className="text-left">
                    <h4 className="text-lg font-bold font-display mb-1 text-zinc-900">Protects People</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light">
                      Reduces the risk of electrocution, especially in wet areas like kitchens, bathrooms, and outdoors.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="w-2 h-2 rounded-xs bg-amber-500 shrink-0 mt-2" />
                  <div className="text-left">
                    <h4 className="text-lg font-bold font-display mb-1 text-zinc-900">Peace of Mind</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light">
                      24/7 protection without the need for constant manual checks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="w-2 h-2 rounded-xs bg-amber-500 shrink-0 mt-2" />
                  <div className="text-left">
                    <h4 className="text-lg font-bold font-display mb-1 text-zinc-900">Protects Equipment</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light">
                      Prevents damage to appliances from leakage currents and grounding faults.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="w-2 h-2 rounded-xs bg-amber-500 shrink-0 mt-2" />
                  <div className="text-left">
                    <h4 className="text-lg font-bold font-display mb-1 text-zinc-900">Easy Integration</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light">
                      Can be installed in homes, offices, factories, and other facilities without major rewiring.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="w-2 h-2 rounded-xs bg-amber-500 shrink-0 mt-2" />
                  <div className="text-left">
                    <h4 className="text-lg font-bold font-display mb-1 text-zinc-900">Cost-Effective Safety</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light">
                      Minimizes expensive repairs, medical costs, and downtime from electrical accidents.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="w-2 h-2 rounded-xs bg-amber-500 shrink-0 mt-2" />
                  <div className="text-left">
                    <h4 className="text-lg font-bold font-display mb-1 text-zinc-900">Versatile Use</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light">
                      Ideal for residential, commercial, industrial, and public spaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Scooter Gallery Section */}
        {content.id === 'scooter' && (
          <div className="mt-24 border-t border-zinc-200/40 pt-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 font-display">
                Haion EV Scooter <span className="bg-gradient-to-r from-zinc-950 to-amber-500 bg-clip-text text-transparent">Gallery</span>
              </h2>
              <div className="w-24 h-[3px] bg-gradient-to-r from-zinc-950 to-amber-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
              {/* Main Display Area */}
              <div className="lg:col-span-8">
                <GlassCard className="h-full min-h-[400px] flex flex-col justify-center items-center p-8 bg-white/80 border-zinc-200/50 shadow-sm rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-4 left-4 bg-zinc-950 text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg shadow-sm">
                    Interactive View
                  </div>
                  <div className="w-full h-full flex items-center justify-center relative min-h-[300px]">
                    <img 
                      src={activeScooterImg} 
                      alt="Active Scooter Showcase" 
                      className="max-h-[340px] object-contain z-10 transition-all duration-500 scale-[1.35] group-hover:scale-[1.42]"
                    />
                    <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-amber-500/10 to-purple-500/10 blur-3xl opacity-80" />
                  </div>
                </GlassCard>
              </div>

              {/* Selection Thumbnails & Feature highlights */}
              <div className="lg:col-span-4 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-3">
                  {scooterGalleryImages.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveScooterImg(item.img)}
                      className={`flex items-center gap-4 p-3.5 rounded-2xl border text-left transition-all duration-300 bg-white/70 cursor-pointer ${
                        activeScooterImg === item.img 
                          ? 'border-purple-500 shadow-md ring-1 ring-purple-500/20 bg-white' 
                          : 'border-zinc-200/60 hover:border-zinc-300 hover:bg-white'
                      }`}
                    >
                      <div className="w-16 h-16 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center p-1.5 overflow-hidden shrink-0">
                        <img src={item.img} alt={item.title} className="max-h-full object-contain scale-[1.2]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-extrabold text-zinc-900 uppercase tracking-wider">{item.title}</h4>
                        <p className="text-xs text-zinc-500 font-light mt-0.5">{item.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Service Products Section */}
        {serviceProducts[content.id] && (
          <div className="mt-24 border-t border-zinc-200/40 pt-16">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 font-display">
                {serviceSectionTitles[content.id].main} <span className="bg-gradient-to-r from-zinc-950 to-amber-500 bg-clip-text text-transparent">{serviceSectionTitles[content.id].highlight}</span>
              </h2>
              <div className="w-24 h-[3px] bg-gradient-to-r from-zinc-950 to-amber-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {serviceProducts[content.id].map((product) => (
                <div key={product.id} className="h-full">
                  <GlassCard className="h-full flex flex-col justify-between p-6 border-zinc-200/50 bg-white/70 hover:bg-white hover:border-purple-500/35 hover:shadow-[0_15px_40px_rgba(232,141,1,0.12)] transition-all duration-500 rounded-2xl group">
                    
                    {/* Tag Badge */}
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
                        onClick={() => onViewProduct(product.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-gradient-to-r from-zinc-950 to-amber-500 px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 hover:scale-[1.03] cursor-pointer focus:outline-none"
                      >
                        View Details
                        <FiArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>

                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
