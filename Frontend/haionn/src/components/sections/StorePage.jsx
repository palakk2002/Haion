import React, { useEffect, useState } from 'react';
import { GlassCard } from '../ui';
import { FiMapPin, FiPhone, FiClock, FiCheck, FiArrowRight, FiShield, FiCpu, FiAward, FiLock } from 'react-icons/fi';

// Imports for new dynamic sections
import { getStoreConfig } from '../../data/storeConfig';
import BrandShowcase from './store/BrandShowcase';
import ProductRangeShowcase from './store/ProductRangeShowcase';
import WarrantySection from './store/WarrantySection';
import ShowroomNetwork from './store/ShowroomNetwork';
import BecomeDealer from './store/BecomeDealer';
import StoreAdminPanel from './store/StoreAdminPanel';

const storeImages = [
  {
    src: '/store1.png',
    title: 'Premium Retail Experience',
    location: 'Storefront Showcase',
    desc: 'Our state-of-the-art showrooms are designed to give customers a hands-on look at our vehicles and premium diagnostic spaces.'
  },
  {
    src: '/store2.png',
    title: 'EV Scooter Lineup Display',
    location: 'Product Showcase',
    desc: 'We showcase all current EV scooter models side by side, allowing customers to easily inspect, compare, and test ride them.'
  },
  {
    src: '/store3.png',
    title: 'Interactive Smart Tech Zones',
    location: 'Experience Center',
    desc: 'Explore connected IoT systems, live diagnostics, and smart ecosystems built to complement our modern electric vehicle lineup.'
  }
];

const storeLocations = [
  {
    city: 'New Delhi (Flagship)',
    address: 'Plot 12, Sector 5, Dwarka, New Delhi - 110075',
    phone: '+91 11 4987 6543',
    timings: '10:00 AM - 8:30 PM'
  },
  {
    city: 'Bengaluru (Tech Center)',
    address: '74, 100 Feet Road, Indiranagar, Bengaluru - 560038',
    phone: '+91 80 4321 0987',
    timings: '10:00 AM - 8:30 PM'
  },
  {
    city: 'Mumbai (Experience Studio)',
    address: 'G-3, Ground Floor, Maker Chambers, Nariman Point, Mumbai - 400021',
    phone: '+91 22 2204 1234',
    timings: '10:00 AM - 8:30 PM'
  }
];

const storeHighlights = [
  {
    icon: FiAward,
    title: 'Interactive Test Drives',
    desc: 'Book a slot or walk in to experience the high-torque, smooth acceleration of our EV scooters on local tracks.'
  },
  {
    icon: FiCpu,
    title: 'Live IoT Smart Demos',
    desc: 'Get hands-on experience of our smart TVs, refrigerators, air conditioners, and robotic vacuums connected live.'
  },
  {
    icon: FiShield,
    title: 'Spot Battery Diagnostics',
    desc: 'Bring in your battery pack or charger for a live BMS diagnostic checkup by our certified technicians in under 15 minutes.'
  }
];

export default function StorePage({ onClose }) {
  const [config, setConfig] = useState(getStoreConfig());
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Listen for custom event when configuration changes in Admin panel
    const handleConfigChange = () => {
      setConfig(getStoreConfig());
    };

    window.addEventListener("store_config_updated", handleConfigChange);
    return () => {
      window.removeEventListener("store_config_updated", handleConfigChange);
    };
  }, []);

  const handleViewProductDetails = (productId) => {
    // Dynamically trigger the parent navigation or anchor scroll
    const detailElement = document.getElementById(`product-detail-${productId}`);
    if (detailElement) {
      detailElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: If not rendered in page flow, find the tabbed showcase
      const showcaseElement = document.getElementById('showcase-tabs');
      if (showcaseElement) {
        showcaseElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-[#f8f9fa] min-h-screen pt-28 pb-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-12">
          <nav className="flex text-sm font-semibold tracking-wide">
            <button 
              onClick={onClose} 
              className="text-zinc-400 hover:text-purple-500 transition-colors cursor-pointer bg-transparent border-none outline-none"
            >
              Home
            </button>
            <span className="mx-2 text-zinc-400 font-normal">/</span>
            <span className="text-purple-500">Haion Exclusive Stores</span>
          </nav>
          <div className="flex gap-2">
            <button
              onClick={() => setIsAdminOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-950 bg-white border border-zinc-200 px-4 py-2 rounded-xl hover:border-purple-500 hover:text-purple-500 transition-all duration-300 shadow-sm cursor-pointer"
            >
              <FiLock size={14} />
              Admin Panel
            </button>
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-950 bg-white border border-zinc-200 px-4 py-2 rounded-xl hover:border-purple-500 hover:text-purple-500 transition-all duration-300 shadow-sm cursor-pointer"
            >
              <FiArrowRight size={14} className="rotate-180" />
              Back to Home
            </button>
          </div>
        </div>

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-purple-600 uppercase bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/25 mb-4">
            Experience Centers
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gradient mb-6 font-display bg-gradient-to-r from-zinc-950 to-amber-500 bg-clip-text text-transparent">
            {config.banners.heroTitle || "Visit Our Stores"}
          </h1>
          <p className="text-zinc-500 text-lg font-light leading-relaxed">
            {config.banners.heroSubtitle || "Step into the world of Haion. Experience first-class tech solutions, witness connected smart homes in action, and take your favorite EV scooter out for a ride."}
          </p>
        </div>

        {/* Original Experience Center Gallery Section (Preserved for compatibility) */}
        <div className="mb-20">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gradient text-center font-display mb-10">
            Explore Our Store Layouts & Experience Zones
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storeImages.map((store, idx) => (
              <GlassCard key={idx} className="overflow-hidden p-0 border-zinc-200/50 bg-white shadow-sm rounded-3xl group flex flex-col justify-between">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-105 border-b border-zinc-100">
                  <img 
                    src={store.src} 
                    alt={store.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-zinc-950/80 backdrop-blur-md text-white text-[10px] uppercase font-bold tracking-wider px-3 py-1.5 rounded-lg shadow-sm">
                    {store.location}
                  </div>
                </div>
                <div className="p-6 text-left flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2 font-display">
                      {store.title}
                    </h3>
                    <p className="text-zinc-500 text-sm leading-relaxed font-light">
                      {store.desc}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* SECTION 3 & 4 — Warranty Coverage & Terms Accordion */}
        <WarrantySection info={config.warrantyInfo} terms={config.warrantyTerms} />

        {/* SECTION 5 — Showroom & Service Network */}
        <ShowroomNetwork content={config.showroomInfo} />

        {/* SECTION 6 — Become a Dealer */}
        <BecomeDealer content={config.dealerInfo} />

        {/* Original Store Highlights Grid (Preserved for compatibility) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 bg-white border border-zinc-200/60 rounded-3xl p-8 md:p-12 shadow-sm text-left">
          {storeHighlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-10 h-10 shrink-0 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">{highlight.title}</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {highlight.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Admin Panel Modal Overlay */}
      {isAdminOpen && (
        <StoreAdminPanel
          isOpen={isAdminOpen}
          onClose={() => setIsAdminOpen(false)}
        />
      )}
    </div>
  );
}
