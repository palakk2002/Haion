import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import logoImg from '../../assets/Screenshot_2026-06-13_155308-removebg-preview.png';

export default function Navbar({ onAboutUsClick, onHomeAppliancesClick, onHomeClick, onNavLinkClick, onStoreClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceOptions = [
    { label: 'Scooter', id: 'scooter' },
    { label: 'Lithium Battery', id: 'battery' },
    { label: 'Charger', id: 'charger' }
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-black/5 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              onHomeClick();
            }}
            className="flex items-center gap-2 group"
          >
            <img 
              src={logoImg} 
              alt="Haion Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {/* Home Link */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onHomeClick();
              }}
              className="text-sm font-semibold text-zinc-600 hover:text-amber-500 transition-colors duration-300 py-1"
            >
              Home
            </a>

            {/* Store Link */}
            <a
              href="#store-view"
              onClick={(e) => {
                e.preventDefault();
                onStoreClick();
              }}
              className="text-sm font-semibold text-zinc-600 hover:text-amber-500 transition-colors duration-300 py-1"
            >
              Store
            </a>

            {/* About Us Link */}
            <a
              href="#about-us"
              onClick={(e) => {
                e.preventDefault();
                onAboutUsClick();
              }}
              className="text-sm font-semibold text-zinc-600 hover:text-amber-500 transition-colors duration-300 py-1"
            >
              About Us
            </a>

            {/* Services Dropdown */}
            <div 
              className="relative py-1 cursor-pointer"
              onMouseEnter={() => setActiveDropdown(true)}
              onMouseLeave={() => setActiveDropdown(false)}
            >
              <div className="flex items-center gap-1 text-sm font-semibold text-zinc-600 hover:text-amber-500 transition-colors duration-300">
                EV
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Dropdown Menu */}
              <div className={`absolute left-0 mt-2 w-64 bg-white border border-zinc-100 rounded-2xl shadow-xl py-3 transition-all duration-300 origin-top-left ${
                activeDropdown ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 -translate-y-2 invisible'
              }`}>
                {serviceOptions.map((opt) => (
                  <a
                    key={opt.id}
                    href={`#service-${opt.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveDropdown(false);
                      onNavLinkClick(`#service-${opt.id}`);
                    }}
                    className="block px-5 py-2.5 text-sm font-medium text-zinc-700 hover:text-amber-500 hover:bg-zinc-50 transition-colors duration-200"
                  >
                    {opt.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Safeguard Direct Link */}
            <a
              href="#service-safeguard"
              onClick={(e) => {
                e.preventDefault();
                onNavLinkClick('#service-safeguard');
              }}
              className="text-sm font-semibold text-zinc-600 hover:text-amber-500 transition-colors duration-300 py-1"
            >
              Safeguard (New Innovation)
            </a>

            {/* Home Appliances Link */}
            <a
              href="#appliances-view"
              onClick={(e) => {
                e.preventDefault();
                onHomeAppliancesClick();
              }}
              className="text-sm font-semibold text-zinc-600 hover:text-amber-500 transition-colors duration-300 py-1"
            >
              Home Appliances
            </a>



          </div>

          {/* Download CTA Button */}
          <div className="hidden md:block">
            <a
              href="#download"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-zinc-950 to-amber-500 text-white px-5 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 hover:scale-[1.03]"
            >
              <FiDownload className="text-sm" />
              Download App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-zinc-900 hover:text-amber-500 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <div className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl transition-transform duration-500 md:hidden flex flex-col justify-center items-center gap-6 overflow-y-auto pt-20 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            onHomeClick();
          }}
          className="font-display text-xl font-semibold text-zinc-800 hover:text-amber-500 transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#store-view"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            onStoreClick();
          }}
          className="font-display text-xl font-semibold text-zinc-800 hover:text-amber-500 transition-colors duration-300"
        >
          Store
        </a>
        <a
          href="#about-us"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            onAboutUsClick();
          }}
          className="font-display text-xl font-semibold text-zinc-800 hover:text-amber-500 transition-colors duration-300"
        >
          About Us
        </a>
        <div className="w-12 h-[1px] bg-zinc-200 my-1"></div>
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">EV</span>
          {serviceOptions.map((opt) => (
            <a
              key={opt.id}
              href={`#service-${opt.id}`}
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
                onNavLinkClick(`#service-${opt.id}`);
              }}
              className="text-lg font-semibold text-zinc-800 hover:text-amber-500 transition-colors"
            >
              {opt.label}
            </a>
          ))}
        </div>
        <div className="w-12 h-[1px] bg-zinc-200 my-2"></div>
        <a
          href="#appliances-view"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            onHomeAppliancesClick();
          }}
          className="font-display text-xl font-semibold text-zinc-800 hover:text-amber-500 transition-colors duration-300"
        >
          Home Appliances
        </a>

        <a
          href="#download"
          onClick={() => setIsOpen(false)}
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-zinc-950 to-amber-500 text-white px-6 py-3 rounded-full hover:shadow-[0_0_25px_rgba(245,158,11,0.3)] transition-all duration-300 mt-4"
        >
          <FiDownload />
          Download App
        </a>
      </div>
    </>
  );
}
