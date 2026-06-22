import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiZoomIn, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const GALLERY_DATA = [
  {
    id: 1,
    category: 'Showroom',
    src: '/storeban.jpg',
    title: 'Flagship Entrance',
    desc: 'Grand entrance of our New Delhi flagship store featuring modern lighting.'
  },
  {
    id: 2,
    category: 'EV Scooters',
    src: '/sc05-removebg-preview.png',
    title: 'X1',
    desc: 'Smart, Eco-Friendly EV Scooter for Urban Commuting.'
  },
  {
    id: 4,
    category: 'EV Scooters',
    src: '/xplusf3.png',
    title: 'X1Plus',
    desc: 'Your Everyday Green Ride – EV Scooter.'
  },
  {
    id: 5,
    category: 'EV Scooters',
    src: '/x2f.png',
    title: 'X2',
    desc: 'Reimagine Urban Travel with Our EV Scooter.'
  },
  {
    id: 7,
    category: 'Showroom',
    src: '/haionban2.jpg',
    title: 'Bengaluru Experience Zone',
    desc: 'Experience our high-tech electric vehicles and interactive zones.'
  },
  {
    id: 8,
    category: 'Showroom',
    src: '/store1.png',
    title: 'Experience Lounge',
    desc: 'Premium customer lounge featuring our complete smart appliance ecosystem.'
  }
];

export default function StoreGallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredData = activeFilter === 'All' 
    ? GALLERY_DATA 
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex(prev => (prev === 0 ? filteredData.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex(prev => (prev === filteredData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mb-20 text-left">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-zinc-200 pb-6">
        <div>
          <span className="text-xs font-bold text-purple-600 uppercase tracking-widest block mb-2">
            [ PHOTO GALLERY ]
          </span>
          <h2 className="text-3xl font-extrabold text-zinc-900 font-display">
            Interactive Experience Gallery
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0 bg-zinc-100 p-1.5 rounded-2xl border border-zinc-200">
          {['All', 'Showroom', 'EV Scooters'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                activeFilter === filter 
                  ? 'bg-zinc-950 text-white shadow-md' 
                  : 'text-zinc-500 hover:text-zinc-800 hover:bg-zinc-200/50'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <motion.div 
        layout 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredData.map((item, index) => {
            // Find global index in active filter dataset
            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border-2 border-zinc-200 bg-white p-3 hover:border-zinc-950 hover:shadow-[6px_6px_0px_rgba(24,24,27,0.95)] transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-50">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center text-zinc-950 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-350">
                      <FiZoomIn size={18} />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-md text-white text-[9px] uppercase font-bold tracking-wider px-2 py-1 rounded-md">
                    {item.category}
                  </span>
                </div>
                <div className="pt-4 px-1 pb-1">
                  <h3 className="font-bold text-zinc-900 font-display text-base group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-xs mt-1 leading-relaxed line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full cursor-pointer transition-colors"
            >
              <FiX size={20} />
            </button>

            {/* Left navigation arrow */}
            <button 
              onClick={handlePrev}
              className="absolute left-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full cursor-pointer transition-colors"
            >
              <FiChevronLeft size={24} />
            </button>

            {/* Main content display */}
            <motion.div 
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full flex flex-col gap-4 items-center"
            >
              <img 
                src={filteredData[lightboxIndex].src} 
                alt={filteredData[lightboxIndex].title}
                className="max-h-[70vh] rounded-3xl border-2 border-zinc-700/50 shadow-2xl object-contain bg-zinc-950"
              />
              <div className="text-center text-white max-w-xl">
                <span className="text-[10px] font-black tracking-widest text-purple-400 uppercase">
                  {filteredData[lightboxIndex].category}
                </span>
                <h3 className="text-xl font-bold font-display mt-1">
                  {filteredData[lightboxIndex].title}
                </h3>
                <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                  {filteredData[lightboxIndex].desc}
                </p>
              </div>
            </motion.div>

            {/* Right navigation arrow */}
            <button 
              onClick={handleNext}
              className="absolute right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full cursor-pointer transition-colors"
            >
              <FiChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
