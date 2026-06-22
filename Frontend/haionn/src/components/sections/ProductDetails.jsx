import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassCard } from '../ui';
import { FiArrowLeft, FiMaximize2, FiCheck } from 'react-icons/fi';

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
import imgBattery from '../../assets/haion-battery.png';
import imgCharger from '../../assets/haion-charger.png';
import imgRickshaw from '../../assets/haion-rickshaw.png';

// Full specifications for all products
const productDetailsData = {
  x1: {
    id: 'x1',
    name: 'X1',
    price: '₹74,999',
    subtitle: 'Smart, Eco-Friendly EV Scooter for Urban Commuting',
    images: [evX1, evX1Plus, evX2], // Mocking multiple views of the same vehicle
    colors: ['Glossy Blue', 'Crystal White', 'Matt Grey'],
    specs: {
      'MOTOR': 'BLDC HUB MOTOR',
      'CONTROLLER': '12 TUBE',
      'SPEED': 'ECONOMY-25 (MAX 45 KM/H)',
      'RANGE/CHARGE': '70 KM TO 100 KM - DEPENDS ON BATTERY',
      'WARRANTY': '3 YEARS WARRANTY',
      'BREAK SYSTEM': 'FRONT DISK, REAR DRUM BRAKE',
      'KEY FEATURE': 'CENTRAL LOCKING & ANTI-THEFT ALARM',
      'LOADING CAPACITY': '150 K.G.',
      'SPEEDOMETER': 'DIGITAL',
      'TYRE': '3.10 TUBELESS TYRE',
      'BATTERY': 'LITHIUM ION (48V 24Ah)'
    },
    category: 'evs'
  },
  x1plus: {
    id: 'x1plus',
    name: 'X1Plus',
    price: '₹84,999',
    subtitle: 'Your Everyday Green Ride – EV Scooter',
    images: ['/x1plusf.png', '/x1plusf1.png'],
    colors: ['Crystal White', 'Glossy Blue', 'Matt Grey'],
    specs: {
      'MOTOR': '1200W BLDC HUB MOTOR',
      'CONTROLLER': '12 TUBE HIGH CURRENT',
      'SPEED': 'ECONOMY-25 (MAX 55 KM/H)',
      'RANGE/CHARGE': '100 KM TO 150 KM - DEPENDS ON BATTERY',
      'WARRANTY': '3 YEARS WARRANTY',
      'BREAK SYSTEM': 'FRONT DISK, REAR DRUM BRAKE',
      'KEY FEATURE': 'CENTRAL LOCKING & REGENERATIVE BRAKING',
      'LOADING CAPACITY': '150 K.G.',
      'SPEEDOMETER': 'DIGITAL COLOR CONSOLE',
      'TYRE': '3.10 TUBELESS TYRE',
      'BATTERY': 'LITHIUM ION (60V 30Ah)'
    },
    category: 'evs'
  },
  x2: {
    id: 'x2',
    name: 'X2',
    price: '₹94,999',
    subtitle: 'Reimagine Urban Travel with Our EV Scooter',
    images: ['/x2f.png', '/x2f1.png', '/x2f2.png', '/x2f3.png'],
    colors: ['Matt Grey', 'Glossy Blue', 'Crystal White'],
    specs: {
      'MOTOR': '1500W HIGH-TORQUE BLDC MOTOR',
      'CONTROLLER': '15 TUBE SMART CONTROLLER',
      'SPEED': 'ECONOMY-25 (MAX 65 KM/H)',
      'RANGE/CHARGE': '150 KM TO 200 KM - DEPENDS ON BATTERY',
      'WARRANTY': '3 YEARS WARRANTY',
      'BREAK SYSTEM': 'DOUBLE DISC BRAKE (FRONT & REAR)',
      'KEY FEATURE': 'CENTRAL LOCKING, APP-INTEGRATED CONSOLE',
      'LOADING CAPACITY': '180 K.G.',
      'SPEEDOMETER': 'SMART DIGITAL TACTILE',
      'TYRE': '90/90-12 TUBELESS TYRE',
      'BATTERY': 'LITHIUM ION (72V 35Ah)'
    },
    category: 'evs'
  },
  x2plus: {
    id: 'x2plus',
    name: 'X2Plus',
    price: '₹99,999',
    subtitle: 'High-Performance Smart EV Scooter',
    images: ['/x2plusf.png', '/x2plusf1.png', '/x2plusf2.png', '/x2plusf3.png', '/xplusf3.png'],
    colors: ['Carbon Black', 'Neon Green', 'Crimson Red'],
    specs: {
      'MOTOR': '1800W PEAK PERFORMANCE MOTOR',
      'CONTROLLER': '18 TUBE SINUSOIDAL CONTROLLER',
      'SPEED': 'MAX 70 KM/H',
      'RANGE/CHARGE': '160 KM',
      'WARRANTY': '3 YEARS WARRANTY ON BATTERY & MOTOR',
      'BREAK SYSTEM': 'COMBINED BRAKING SYSTEM (CBS) DUAL DISC',
      'KEY FEATURE': 'GPS TRACKING, KEYLESS ENTRY, CRUISE CONTROL',
      'LOADING CAPACITY': '180 K.G.',
      'SPEEDOMETER': 'COLOR TFT DISPLAY WITH NAVIGATION',
      'TYRE': '12-INCH tubeless TYRES',
      'BATTERY': 'LITHIUM ION (72V 40Ah)'
    },
    category: 'evs'
  },
  x3: {
    id: 'x3',
    name: 'X3',
    price: '₹1,09,999',
    subtitle: 'Adventure Ready Premium EV Scooter',
    images: ['/x3f1.png', '/x3f2.png'],
    colors: ['Desert Gold', 'Military Green', 'Carbon Fibre'],
    specs: {
      'MOTOR': '2000W HIGH-POWER BLDC HUB MOTOR',
      'CONTROLLER': 'SMART VECTOR CONTROLLER',
      'SPEED': 'MAX 75 KM/H',
      'RANGE/CHARGE': '180 KM PER CHARGE',
      'WARRANTY': '3 YEARS HASSLE-FREE WARRANTY',
      'BREAK SYSTEM': 'VENTILATED DUAL DISC BRAKES',
      'KEY FEATURE': 'ALL-TERRAIN SUSPENSION, APP INFOTAINMENT, USB CHARGER',
      'LOADING CAPACITY': '200 K.G.',
      'SPEEDOMETER': 'FULL HD TACTILE TOUCHSCREEN',
      'TYRE': 'OFF-ROAD TUBELESS TYRES',
      'BATTERY': 'LITHIUM ION (72V 42Ah)'
    },
    category: 'evs'
  },
  x4plus: {
    id: 'x4plus',
    name: 'X4Plus',
    price: '₹1,19,999',
    subtitle: 'Ultra Range Smart EV Scooter',
    images: ['/x4 plus f.png', '/X 4 plus f.png', '/x4plusf1.png', '/x4plusf2.png'],
    colors: ['Stellar Blue', 'Titanium Grey', 'Frost White'],
    specs: {
      'MOTOR': '2200W SUPER-TORQUE MOTOR',
      'CONTROLLER': 'INTELLIGENT FOC VECTOR CONTROLLER',
      'SPEED': 'MAX 80 KM/H',
      'RANGE/CHARGE': '220 KM EXTRA RANGE',
      'WARRANTY': '3 YEARS COMPREHENSIVE WARRANTY',
      'BREAK SYSTEM': 'E-ABS WITH DUAL VENTILATED DISC',
      'KEY FEATURE': 'REVERSE ASSIST, MOBILE app telemetry, SIDE-STAND SENSOR',
      'LOADING CAPACITY': '200 K.G.',
      'SPEEDOMETER': 'SMART LCD CONSOLE WITH OVER-THE-AIR UPDATES',
      'TYRE': '90/90-12 ALL-WEATHER TUBELESS',
      'BATTERY': 'DUAL LITHIUM ION DOCKS (72V 50Ah TOTAL)'
    },
    category: 'evs'
  },
  spro: {
    id: 'spro',
    name: 'S Pro',
    price: '₹1,29,999',
    subtitle: 'Elegant High-Speed Smart EV Scooter',
    images: ['/Sprof.png', '/S_PRO-removebg-preview.png', '/S_PRO_front-removebg-preview.png', '/S_PRO_BACK-removebg-preview.png'],
    colors: ['Classic White', 'Sleek Black', 'Metallic Rose'],
    specs: {
      'MOTOR': '2500W HIGH-EFFICIENCY MID-DRIVE MOTOR',
      'CONTROLLER': 'ADVANCED MID-DRIVE VECTOR CONTROLLER',
      'SPEED': 'MAX 25 KM/H',
      'RANGE/CHARGE': '150 KM - HIGH SPEED RANGE',
      'WARRANTY': '5 YEARS LIMITED WARRANTY',
      'BREAK SYSTEM': 'REGENERATIVE EBS DUAL DISC BRAKES',
      'KEY FEATURE': 'CHROME FINISH BODY WORK, ADVANCED THEFT PROTECTION, SMART DIAGNOSTICS',
      'LOADING CAPACITY': '180 K.G.',
      'SPEEDOMETER': 'RETINA AMOLED DASHBOARD',
      'TYRE': '12-INCH ALLOY WHEEL TUBELESS TYRES',
      'BATTERY': 'LITHIUM ION (64V 40Ah)'
    },
    category: 'evs'
  },
  oxplus: {
    id: 'oxplus',
    name: 'OX Plus',
    price: '₹1,39,999',
    subtitle: 'Ultimate Power & Intelligent EV Scooter',
    images: ['/OXplusf.png', '/oxplusf1.png', '/OXplusf2.png', '/oxplusf3.png'],
    colors: ['Midnight Blue', 'Stealth Black', 'Carbon Red'],
    specs: {
      'MOTOR': '3000W ULTRA-TORQUE BLDC MOTOR',
      'CONTROLLER': 'INTELLIGENT DUAL-CORE CONTROLLER',
      'SPEED': 'MAX 95 KM/H',
      'RANGE/CHARGE': '200 KM TO 250 KM',
      'WARRANTY': '5 YEARS EXTENDED WARRANTY',
      'BREAK SYSTEM': 'CBS + HYDRAULIC DOUBLE DISC BRAKE',
      'KEY FEATURE': 'INTELLIGENT GPS TRACKING, CRUISE CONTROL, BLUETOOTH SOUND SYSTEM',
      'LOADING CAPACITY': '220 K.G.',
      'SPEEDOMETER': '7-INCH SMART TOUCHSCREEN WITH GOOGLE MAPS',
      'TYRE': '130/70-12 tubeless SPORT TYRES',
      'BATTERY': 'LITHIUM ION (72V 45Ah)'
    },
    category: 'evs'
  },
  vacuum: {
    id: 'vacuum',
    name: 'RoboVac H1',
    price: '₹24,999',
    subtitle: 'Premium Black Smart Vacuum Robot with Auto-Empty Dock',
    images: [applianceVacuum, applianceVacuum, applianceVacuum],
    colors: ['Carbon Black', 'Stellar Silver'],
    specs: {
      'MOTOR': 'SMART INVERTER BLDC MOTOR',
      'SUCTION POWER': '4000 PA ULTRA-STRONG',
      'NAVIGATION': 'LIDAR LASER NAVIGATION 3.0',
      'RUN TIME': 'UP TO 180 MINUTES (5200 MAH BATTERY)',
      'DUSTBIN CAPACITY': '500ML AUTO-EMPTY DUSTBIN',
      'WATER TANK': '300ML SMART CONTROL WATER TANK',
      'KEY FEATURE': 'AUTO DOCKING, AREA ZONE CLEANING, ALEXA SUPPORT',
      'CLEANING MODES': 'VACUUM, MOP, VACUUM & MOP 2-IN-1',
      'NOISE LEVEL': '< 60 DB SILENT WORKFLOW',
      'FILTER': 'HEPA WASHABLE FILTER'
    },
    category: 'appliances'
  },
  purifier: {
    id: 'purifier',
    name: 'AeroClean P5',
    price: '₹14,999',
    subtitle: 'Ultra-Quiet Smart Air Purifier with HEPA H13 Filter',
    images: [appliancePurifier, appliancePurifier, appliancePurifier],
    colors: ['Minimal White', 'Platinum Grey'],
    specs: {
      'MOTOR': 'HIGH-PERFORMANCE DC SILENT MOTOR',
      'CADR': '400 M³/H (CLEANS 500 SQ FT ROOM IN 10 MIN)',
      'FILTER SYSTEM': '3-STAGE HEPA H13 + ACTIVE CARBON',
      'POWER CONSUMPTION': '40W ENERGY SAVING',
      'KEY FEATURE': 'LASER PM2.5 SENSOR, REAL-TIME AQI LIGHT RING',
      'NOISE LEVEL': '22 DB ULTRA-QUIET SLEEP MODE',
      'CONNECTIVITY': 'WI-FI SMART APP CONTROL',
      'SPEED MODES': 'AUTO, SLEEP, MEDIUM, TURBO',
      'WARRANTY': '1 YEAR COMPREHENSIVE WARRANTY'
    },
    category: 'appliances'
  },
  tv: {
    id: 'tv',
    name: 'CinemaView 4K',
    price: '₹44,999',
    subtitle: 'Thin-Bezel Smart TV with Quantum Dot Display',
    images: [applianceTv, applianceTv, applianceTv],
    colors: ['Midnight Black', 'Metallic Silver'],
    specs: {
      'DISPLAY TYPE': 'QLED QUANTUM DOT DISPLAY',
      'RESOLUTION': '4K ULTRA HD (3840 X 2160)',
      'SCREEN SIZE': '55 INCHES',
      'REFRESH RATE': '120 HZ MEMC',
      'SOUND SYSTEM': '40W DOLBY ATMOS SPEAKERS',
      'OPERATING SYSTEM': 'ANDROID TV 11 WITH GOOGLE ASSISTANT',
      'CONNECTIVITY': 'HDMI 2.1 x 3, USB 3.0 x 2, DUAL-BAND WI-FI',
      'KEY FEATURE': 'DOLBY VISION, HDR10+, HANDS-FREE VOICE CONTROL',
      'PROCESSOR': 'QUAD-CORE POWERFUL SMART SOC',
      'WARRANTY': '2 YEARS WARRANTY'
    },
    category: 'appliances'
  },
  refri1: {
    id: 'refri1',
    name: 'SmartChill Pro 450L',
    price: '₹54,999',
    subtitle: 'Double-Door IoT Smart Refrigerator with Auto-Defrost',
    images: [refri1, refri1, refri1],
    colors: ['Steel Grey', 'Elegant Black'],
    specs: {
      'CAPACITY': '450 LITRES',
      'COMPRESSOR': 'DIGITAL INVERTER COMPRESSOR',
      'COOLING TECH': 'TRIPLE COOLING SYSTEM',
      'ENERGY RATING': '5 STAR RATING',
      'CONNECTIVITY': 'WI-FI, SMARTTHINGS APP SUPPORT',
      'KEY FEATURE': 'IOT TEMPERATURE CONTROL, AUTO-DEFROST, DOOR ALARM',
      'WARRANTY': '10 YEARS WARRANTY ON COMPRESSOR'
    },
    category: 'appliances'
  },
  refri2: {
    id: 'refri2',
    name: 'FrostBreeze Duo 600L',
    price: '₹84,999',
    subtitle: 'French Door Luxury Smart Refrigerator with Touch Console',
    images: [refri2, refri2, refri2],
    colors: ['Platinum Silver', 'Midnight Obsidian'],
    specs: {
      'CAPACITY': '600 LITRES',
      'DOOR TYPE': 'FRENCH DOOR (MULTI-DOOR)',
      'PANEL TYPE': 'INSTAVIEW GLASS PANEL',
      'DISPENSER': 'WATER & ICE DISPENSER',
      'CONNECTIVITY': 'IOT WI-FI CONTROLS & VOICE ASSISTANTS',
      'KEY FEATURE': 'DUAL FREEZER ZONES, SMART CONSOLE, HYGIENE FRESH FILTER',
      'WARRANTY': '10 YEARS WARRANTY ON COMPRESSOR'
    },
    category: 'appliances'
  },
  mixer1: {
    id: 'mixer1',
    name: 'PowerBlend X1',
    price: '₹8,999',
    subtitle: '1000W Heavy-Duty Smart Mixer Grinder with Auto-Clean',
    images: [mixer1, mixer1, mixer1],
    colors: ['Stellar Silver', 'Classic White'],
    specs: {
      'MOTOR POWER': '1000W HIGH-TORQUE COPPER MOTOR',
      'JARS': '4 RUST-FREE STAINLESS STEEL JARS',
      'BLADES': 'AERODYNAMIC W-PROFILE BLADES',
      'SPEED CONTROL': 'SMART SPEED SENSOR CONTROL (4 SPEEDS)',
      'KEY FEATURE': 'AUTO-CLEAN TECHNOLOGY, OVERLOAD PROTECTION',
      'WARRANTY': '2 YEARS PRODUCT & 5 YEARS MOTOR WARRANTY'
    },
    category: 'appliances'
  },
  mixer2: {
    id: 'mixer2',
    name: 'TurboMix Pro',
    price: '₹6,499',
    subtitle: 'High-Speed IoT Blender and Dry Grinder',
    images: [mixer2, mixer2, mixer2],
    colors: ['Carbon Black', 'Cosmic Blue'],
    specs: {
      'MOTOR POWER': '800W COPPER MOTOR',
      'SPEEDS': 'TOUCH CONTROL INTERFACE WITH 6 PRESETS',
      'TECHNOLOGY': 'VACUUM EXTRACTION TECHNOLOGY',
      'CONNECTIVITY': 'BLUETOOTH APP SYNCED RECIPES',
      'KEY FEATURE': 'PULSE FUNCTION, ONE-TOUCH SMOOTHIE MODE, BPA-FREE TRITAN JARS',
      'WARRANTY': '2 YEARS COMPREHENSIVE WARRANTY'
    },
    category: 'appliances'
  },
  tv2: {
    id: 'tv2',
    name: 'CinemaMax 55',
    price: '₹38,999',
    subtitle: '55-inch Ultra HD Smart LED TV with HDR10+',
    images: [tv2, tv2, tv2],
    colors: ['Midnight Black'],
    specs: {
      'SCREEN SIZE': '55 INCHES',
      'RESOLUTION': '4K ULTRA HD (3840 X 2160)',
      'HDR': 'HDR10+, HLG SUPPORT',
      'SOUND SYSTEM': '30W DOLBY AUDIO SPEAKERS',
      'OPERATING SYSTEM': 'ANDROID TV with Google Assistant',
      'CONNECTIVITY': 'HDMI 2.0 x 3, USB x 2',
      'WARRANTY': '1 YEAR WARRANTY'
    },
    category: 'appliances'
  },
  tv3: {
    id: 'tv3',
    name: 'VisionPro 65',
    price: '₹48,999',
    subtitle: '65-inch 4K Smart TV with Quantum Dot Display',
    images: [tv3, tv3, tv3],
    colors: ['Metallic Silver'],
    specs: {
      'SCREEN SIZE': '65 INCHES',
      'DISPLAY TYPE': 'QLED QUANTUM DOT',
      'REFRESH RATE': '120 HZ MEMC',
      'SOUND SYSTEM': '40W DOLBY ATMOS',
      'OPERATING SYSTEM': 'GOOGLE TV OS',
      'CONNECTIVITY': 'HDMI 2.1 x 3, DUAL-BAND WI-FI',
      'WARRANTY': '2 YEARS WARRANTY'
    },
    category: 'appliances'
  },
  tv4: {
    id: 'tv4',
    name: 'OLED Q1 50',
    price: '₹59,999',
    subtitle: '50-inch Premium OLED Smart TV with Deep Blacks',
    images: [tv4, tv4, tv4],
    colors: ['Midnight Black'],
    specs: {
      'SCREEN SIZE': '50 INCHES',
      'DISPLAY TYPE': 'OLED PANEL',
      'CONTRAST': 'INFINITE CONTRAST RATIO',
      'GAMING': 'HDMI 2.1, VRR & ALLM SUPPORT',
      'SOUND': '40W DOLBY ATMOS & DTS-X',
      'CONNECTIVITY': 'WI-FI 6, BLUETOOTH 5.2',
      'WARRANTY': '2 YEARS COMPREHENSIVE WARRANTY'
    },
    category: 'appliances'
  },
  ac: {
    id: 'ac',
    name: 'AeroBreeze AC',
    price: '₹36,999',
    subtitle: '1.5 Ton 5-Star IoT Inverter Split Air Conditioner',
    images: [ac, ac, ac],
    colors: ['Arctic White'],
    specs: {
      'CAPACITY': '1.5 TON (SUITABLE FOR 110-150 SQ FT)',
      'ENERGY RATING': '5 STAR RATING',
      'COMPRESSOR': 'VARIABLE SPEED INVERTER COMPRESSOR',
      'CONDENSER': '100% COPPER CONDENSER COILS',
      'CONNECTIVITY': 'WI-FI CONNECTED, HAION SMART APP CONTROL',
      'KEY FEATURE': 'PM2.5 DUST FILTER, 4-WAY AIR SWING, TURBO COOLING',
      'WARRANTY': '1 YEAR PRODUCT, 10 YEARS COMPRESSOR WARRANTY'
    },
    category: 'appliances'
  },
  bat_48v: {
    id: 'bat_48v',
    name: 'B1-48V PowerPack',
    price: '₹28,999',
    subtitle: '48V 24Ah Lithium-Ion Battery Pack with Smart BMS',
    images: ['/battery2-removebg-preview.png', '/battery2-removebg-preview.png', '/battery2-removebg-preview.png'],
    colors: ['Metal Black'],
    specs: {
      'CHEMISTRY': 'LITHIUM IRON PHOSPHATE (LFP)',
      'CAPACITY': '24 Ah (1.15 kWh)',
      'NOMINAL VOLTAGE': '48 V',
      'CYCLE LIFE': '3000+ CYCLES @ 80% DOD',
      'BMS FEATURES': 'CELL BALANCING, OVERCHARGE & OVERDISCHARGE SHIELD',
      'WARRANTY': '3 YEARS MANUFACTURER WARRANTY',
      'DIMENSIONS': '240 x 180 x 150 mm',
      'WEIGHT': '9.5 K.G.'
    },
    category: 'battery'
  },
  bat_60v: {
    id: 'bat_60v',
    name: 'B2-60V EnergyMax',
    price: '₹36,999',
    subtitle: '60V 30Ah High-Performance Lithium Battery Pack',
    images: ['/battrey3-removebg-preview.png', '/battrey3-removebg-preview.png', '/battrey3-removebg-preview.png'],
    colors: ['Metal Black'],
    specs: {
      'CHEMISTRY': 'LITHIUM ION / NMC',
      'CAPACITY': '30 Ah (1.8 kWh)',
      'NOMINAL VOLTAGE': '60 V',
      'CYCLE LIFE': '2500+ CYCLES @ 80% DOD',
      'BMS FEATURES': 'SMART CELL MONITORING & TEMPERATURE SHIELD',
      'WARRANTY': '3 YEARS MANUFACTURER WARRANTY',
      'DIMENSIONS': '280 x 200 x 165 mm',
      'WEIGHT': '13.2 K.G.'
    },
    category: 'battery'
  },
  bat_72v: {
    id: 'bat_72v',
    name: 'B3-72V UltraPower',
    price: '₹45,999',
    subtitle: '72V 35Ah Long-Range Lithium-Ion Battery Pack',
    images: ['/battery2-removebg-preview.png', '/battery2-removebg-preview.png', '/battery2-removebg-preview.png'],
    colors: ['Metal Black'],
    specs: {
      'CHEMISTRY': 'LITHIUM ION / NMC PREMIUM CELLS',
      'CAPACITY': '35 Ah (2.52 kWh)',
      'NOMINAL VOLTAGE': '72 V',
      'CYCLE LIFE': '2500+ CYCLES',
      'BMS FEATURES': 'APP INTEGRATED SMART BMS, DYNAMIC CELL BALANCING',
      'WARRANTY': '3 YEARS EXTENDED WARRANTY',
      'DIMENSIONS': '320 x 220 x 180 mm',
      'WEIGHT': '16.5 K.G.'
    },
    category: 'battery'
  },
  chg_standard: {
    id: 'chg_standard',
    name: 'C1-Standard',
    price: '₹4,999',
    subtitle: '48V-72V Auto-Detect Smart EV Charger',
    images: ['/charger-removebg-preview.png', '/charger-removebg-preview.png', '/charger-removebg-preview.png'],
    colors: ['Brushed Gold/Black'],
    specs: {
      'INPUT VOLTAGE': '180V - 260V AC, 50Hz',
      'OUTPUT CURRENT': '5A MAX',
      'COMPATIBILITY': '48V, 60V, 72V LITHIUM ION BATTERIES',
      'EFFICIENCY': '> 88%',
      'PROTECTIONS': 'SHORT CIRCUIT, OVER-TEMPERATURE, REVERSE POLARITY',
      'COOLING': 'SILENT ACTIVE FAN',
      'WARRANTY': '1 YEAR WARRANTY'
    },
    category: 'charger'
  },
  chg_fast: {
    id: 'chg_fast',
    name: 'C2-Fast Charger',
    price: '₹7,999',
    subtitle: '10A Quick Charging Support for EV Scooters',
    images: ['/charger3-removebg-preview.png', '/charger3-removebg-preview.png', '/charger3-removebg-preview.png'],
    colors: ['Brushed Gold/Black'],
    specs: {
      'INPUT VOLTAGE': '180V - 260V AC, 50-60Hz',
      'OUTPUT CURRENT': '10A EXPRESS CHARGING',
      'COMPATIBILITY': '60V & 72V LITHIUM PACKS',
      'CHARGING SPEED': '0 TO 80% IN 1.5 HOURS',
      'SAFETY FEATURES': 'AUTO POWER-CUTOFF ON FULL CHARGE, DUAL FUSE',
      'COOLING': 'HIGH-RPM DUAL COOLING FANS',
      'WARRANTY': '1 YEAR COMPREHENSIVE WARRANTY'
    },
    category: 'charger'
  },
  chg_smart: {
    id: 'chg_smart',
    name: 'C3-Smart IoT Charger',
    price: '₹11,999',
    subtitle: 'App-Connected Smart Charger with Auto Cut-off',
    images: ['/charger-removebg-preview.png', '/charger-removebg-preview.png', '/charger-removebg-preview.png'],
    colors: ['Brushed Gold/Black'],
    specs: {
      'INPUT VOLTAGE': '100V - 260V WIDE INPUT range',
      'OUTPUT CURRENT': '12A SMART ADAPTIVE',
      'CONNECTIVITY': 'WI-FI & BLUETOOTH (HAION SMART MOBILE APP)',
      'IOT FEATURES': 'REMOTE POWER CONTROL, LIVE TEMPERATURE & CHARGING TELEMETRY',
      'PROTECTIONS': 'IP65 WEATHERPROOF, AUTO TEMPERATURE THROTTLING',
      'WARRANTY': '2 YEARS DIRECT MANUFACTURER WARRANTY'
    },
    category: 'charger'
  },
  er_passenger: {
    id: 'er_passenger',
    name: 'R1-Passenger',
    price: '₹1,24,999',
    subtitle: 'Heavy-Duty 4-Passenger E-Rickshaw for Indian Roads',
    images: [imgRickshaw, imgRickshaw, imgRickshaw],
    colors: ['Royal Gold/Black'],
    specs: {
      'MOTOR': '1200W BRUSHLESS HEAVY DUTY GEAR MOTOR',
      'ROOF COVER': 'FIBER GLASS REINFORCED RIGID ROOF',
      'CAPACITY': '4 PASSENGERS + 1 DRIVER',
      'MAX SPEED': '25 KM/H (GOVERNMENT SPEED COMPLIANT)',
      'RANGE/CHARGE': '120 KM TO 140 KM',
      'SUSPENSION': 'REINFORCED TELESCOPIC FRONT, LEAF SPRING REAR',
      'WARRANTY': '1 YEAR COMPREHENSIVE VEHICLE WARRANTY'
    },
    category: 'rickshaw'
  },
  er_cargo: {
    id: 'er_cargo',
    name: 'R2-Cargo',
    price: '₹1,34,999',
    subtitle: 'High-Capacity Goods Carrier E-Rickshaw',
    images: [imgRickshaw, imgRickshaw, imgRickshaw],
    colors: ['Royal Gold/Black'],
    specs: {
      'MOTOR': '1500W HIGH TORQUE BRUSHLESS DIFFERENTIAL MOTOR',
      'CARGO BED SIZE': '1500 x 1000 x 450 mm OPEN LOADER',
      'LOADING CAPACITY': '500 K.G. TESTED WEIGHT',
      'RANGE/CHARGE': '100 KM TO 120 KM',
      'TYRE': '3.75 - 12 heavy duty',
      'BRAKING SYSTEM': 'DUAL MECHANICAL DRUM BRAKE + HAND PARKING LEVER',
      'WARRANTY': '1 YEAR COMPREHENSIVE WARRANTY'
    },
    category: 'rickshaw'
  },
  er_loader: {
    id: 'er_loader',
    name: 'R3-Loader',
    price: '₹1,44,999',
    subtitle: 'Reinforced Closed Cabin Delivery E-Rickshaw',
    images: [imgRickshaw, imgRickshaw, imgRickshaw],
    colors: ['Royal Gold/Black'],
    specs: {
      'MOTOR': '1800W PEAK SMART DIFFERENTIAL GEAR MOTOR',
      'CABIN TYPE': 'CLOSED WATERPROOF CONTAINER STEEL CABIN',
      'LOADING CAPACITY': '600 K.G.',
      'RANGE/CHARGE': '130 KM TO 150 KM',
      'BATTERY COMPATIBILITY': 'DUAL LITHIUM PACK DOCKS SUPPORT',
      'SAFETY': 'FRONT SHIELD GLASS WIPERS, HAZARD WARNINGS',
      'WARRANTY': '1 YEAR WARRANTY'
    },
    category: 'rickshaw'
  }
};

const AnimatedSpeedometer = () => {
  const [speed, setSpeed] = React.useState(0);
  const [accelerating, setAccelerating] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setSpeed((prev) => {
        if (accelerating) {
          if (prev >= 25) {
            setAccelerating(false);
            return prev - 1;
          }
          return prev + 1;
        } else {
          if (prev <= 0) {
            setAccelerating(true);
            return prev + 1;
          }
          return prev - 1;
        }
      });
    }, 30);
    return () => clearInterval(interval);
  }, [accelerating]);

  const angle = (speed / 25) * 240 - 120;

  return (
    <div className="relative w-28 h-28 flex items-center justify-center select-none bg-zinc-900/50 rounded-2xl border-2 border-zinc-700/80 p-2 shadow-inner">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="speedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        <path
          d="M 20 80 A 40 40 0 1 1 80 80"
          fill="none"
          stroke="#374151"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M 20 80 A 40 40 0 1 1 80 80"
          fill="none"
          stroke="url(#speedGrad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="188"
          strokeDashoffset={188 - (speed / 25) * 188}
          filter="url(#glow)"
        />
        <line
          x1="50"
          y1="50"
          x2="50"
          y2="15"
          stroke="#ef4444"
          strokeWidth="3"
          strokeLinecap="round"
          style={{
            transform: `rotate(${angle}deg)`,
            transformOrigin: '50px 50px',
            transition: 'transform 0.05s linear',
          }}
        />
        <circle cx="50" cy="50" r="5" fill="#ef4444" />
        <text
          x="50"
          y="72"
          textAnchor="middle"
          fill="#ffffff"
          fontSize="14"
          fontWeight="900"
          fontFamily="monospace"
        >
          {speed}
        </text>
        <text
          x="50"
          y="82"
          textAnchor="middle"
          fill="#a1a1aa"
          fontSize="6"
          fontWeight="bold"
        >
          KM/H
        </text>
      </svg>
    </div>
  );
};

export default function ProductDetails({ productId, onClose, onViewProduct, onAddToCart, onTrackOrder }) {
  let details = productDetailsData[productId];
  if (!details && typeof productId === 'string') {
    const allTableRows = [
      { id: 'LED-AH24', name: 'LED-AH24', price: '₹ 5,400', mrp: '₹ 9,999', desc: 'Speaker 20 W Connectivity (AV IN, HDMI, USB, VGA, Earphone)', image: tv2, category: 'appliances' },
      { id: 'LED-AH40Normal', name: 'LED-AH40Normal', price: '₹ 10,000', mrp: '₹ 17,999', desc: '(AOSP), Normal, Speaker 20W, Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45))', image: tv3, category: 'appliances' },
      { id: 'LED-32PROSmart', name: 'LED-32PROSmart', price: '₹ 8,000', mrp: '₹ 15,000', desc: 'Android (AOSP), 1.25/4GB , Speaker 20W, Connectivity ( AV IN, HDMI, USB, Earphone, LAN(RJ45))', image: tv4, category: 'appliances' },
      { id: 'LED-32SIRIS LED TV', name: 'LED-32SIRIS LED TV', price: '₹ 8,400', mrp: '₹ 9,999', desc: 'Android IRIS , Speaker 20W, Connectivity ( AV IN, HDMI, USB, Earphone, LAN(RJ45)) Voice Remote, In-built', image: tv5, category: 'appliances' },
      { id: 'LED-AH32SOTIS LED TV', name: 'LED-AH32SOTIS LED TV', price: '₹ 9,999', mrp: '₹ 16,999', desc: 'Android (OTIS), 1+8 GB, Speaker 20W, Screen-Sharing, HDMI ARC, Command Tv through Mobile Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45)) Voice Remote, In-built', image: tv2, category: 'appliances' },
      { id: 'LED-AH32BLSmart', name: 'LED-AH32BLSmart', price: '₹ 10,999', mrp: '₹ 17,999', desc: 'Android (AOSP), Bezel Less, 1+8 GB, Speaker 20W, Screen-Sharing, HDMI ARC, Command Tv through Mobile Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45)) Voice Remote, In-built', image: tv3, category: 'appliances' },
      { id: 'LED-AH40Smart', name: 'LED-AH40Smart', price: '₹ 13,999', mrp: '₹ 21,000', desc: 'Android (AOSP), BT, 1+8 GB, Speaker 20W, Screen-Sharing, HDMI ARC, Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45))', image: tv4, category: 'appliances' },
      { id: 'LED-AH43SBSmart', name: 'LED-AH43SBSmart', price: '₹ 17,999', mrp: '₹ 27,000', desc: 'Android (AOSP), 1+8 GB, Speaker 20W, Screen-Sharing, HDMI ARC, Sound Bar In-built, Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45))', image: tv5, category: 'appliances' },
      { id: 'LED-AH43BLSmart', name: 'LED-AH43BLSmart', price: '₹ 19,999', mrp: '₹ 28,000', desc: 'Bezel less, Android (AOSP), 1+8 GB, Speaker 20W, Screen-Sharing, HDMI ARC, Voice Remote, BT In-built, Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45))', image: tv2, category: 'appliances' },
      { id: 'LED-AH43WEB', name: 'LED-AH43WEB', price: '₹ 24,999', mrp: '₹ 34,999', desc: 'HDR10 ,4K, Dolby Audio, Bezel less, WebOS, Magic Remotely ThinQ/Alexa, Screen-Sharing, HDMI ARC, BT In-built Connectivity (HDMI, USB, Optical, LAN(RJ45))', image: tv3, category: 'appliances' },
      { id: 'LED-AH50Smart', name: 'LED-AH50Smart', price: '₹ 25,999', mrp: '₹ 42,000', desc: 'Android (AOSP), 1+8 GB, Speaker 20W, Screen-Sharing, HDMI ARC, In-built Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45))', image: tv4, category: 'appliances' },
      { id: 'LED-AH50WEB', name: 'LED-AH50WEB', price: '₹ 29,999', mrp: '₹ 49,000', desc: 'HDR10 ,4K, Dolby Audio, Bezel less, WebOS, Magic Remotely ThinQ/Alexa, Screen-Sharing, HDMI ARC, BT In-built Connectivity (HDMI, USB, Optical, LAN(RJ45))', image: tv5, category: 'appliances' },
      { id: 'LED-AN55Smart', name: 'LED-AN55Smart', price: '₹ 31,999', mrp: '₹ 50,000', desc: 'Android (AOSP), 1+8 GB, Speaker 20W, Screen-Sharing, HDMI ARC, In-built Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45))', image: tv2, category: 'appliances' },
      { id: 'LED-AH55WEB', name: 'LED-AH55WEB', price: '₹ 38,999', mrp: '₹ 55,999', desc: 'HDR10 ,4K, Dolby Audio, Bezel less, WebOS, Magic Remotely ThinQ/Alexa, Screen-Sharing, HDMI ARC, BT In-built Connectivity (HDMI, USB, Optical, LAN(RJ45))', image: tv3, category: 'appliances' },
      { id: 'LED-AN65Smart', name: 'LED-AN65Smart', price: '₹ 49,999', mrp: '₹ 75,000', desc: 'Android (AOSP), 1+8 GB, Speaker 20W, Screen-Sharing, HDMI ARC, In-built Connectivity (AV IN, HDMI, USB, Earphone, LAN(RJ45))', image: tv4, category: 'appliances' },
      { id: 'AN Electric Chopper / 1311', name: 'AN Electric Chopper / 1311', price: '₹ 780', mrp: '₹ 1,999', desc: 'Chopper', image: mixer1, category: 'appliances' },
      { id: 'AN Hand Blender / 502', name: 'AN Hand Blender / 502', price: '₹ 880', mrp: '₹ 2,499', desc: 'Stainless Steel Stem & 3 Multifunctional SS Blades', image: mixer2, category: 'appliances' },
      { id: 'AN MINI POPULAR 450 (Copper)', name: 'AN MINI POPULAR 450 (Copper)', price: '₹ 1,150', mrp: '₹ 3,999', desc: '2 Poly JAR', image: mixer1, category: 'appliances' },
      { id: 'AN MINI DIAMOND 450 (Copper)', name: 'AN MINI DIAMOND 450 (Copper)', price: '₹ 1,100', mrp: '₹ 4,299', desc: '2 JARS', image: mixer2, category: 'appliances' },
      { id: 'AN Real JMG 450W (Copper)', name: 'AN Real JMG 450W (Copper)', price: '₹ 2,300', mrp: '₹ 4,999', desc: '1.5 Ltr Liquidizer & 200ml SS 3 Jar', image: mixer1, category: 'appliances' },
      { id: 'AN Marvel JMG 550W (Copper)', name: 'AN Marvel JMG 550W (Copper)', price: '₹ 2,650', mrp: '₹ 5,999', desc: '1.5 Ltr Ploy-Carbonate Jar & 500ml SS 3 Jar', image: mixer2, category: 'appliances' },
      { id: 'AN MINI DIAMOND 500 (Copper)', name: 'AN MINI DIAMOND 500 (Copper)', price: '₹ 1,500', mrp: '₹ 4,499', desc: '3 JARS', image: mixer1, category: 'appliances' },
      { id: 'AN Vista 550W (Copper)', name: 'AN Vista 550W (Copper)', price: '₹ 1,800', mrp: '₹ 4,299', desc: '3 JARS', image: mixer2, category: 'appliances' },
      { id: 'AN Gold Star 750W (Copper)', name: 'AN Gold Star 750W (Copper)', price: '₹ 2,400', mrp: '₹ 5,199', desc: '3 JARS', image: mixer1, category: 'appliances' },
      { id: 'AN Mega Star 1HP (Copper)', name: 'AN Mega Star 1HP (Copper)', price: '₹ 2,650', mrp: '₹ 4,999', desc: '3 JARS', image: mixer2, category: 'appliances' },
      { id: 'AN W671100', name: 'AN W671100', price: '₹ 2,100', mrp: '₹ 4,499', desc: 'Induction Cooker', image: mixer1, category: 'appliances' },
      { id: 'Ac-ATSAC183101TV', name: 'Ac-ATSAC183101TV', price: '₹ 29,999', mrp: '₹ 45,000', desc: 'AC Split 3 Star 1.5 Ton (Inverter) / 3 STAR / 3.92*', image: ac, category: 'appliances' }
    ];
    const match = allTableRows.find(row => row.id === productId);
    if (match) {
      details = {
        id: match.id,
        name: match.name,
        price: match.price,
        subtitle: match.desc,
        images: [match.image, match.image, match.image],
        colors: ['Standard'],
        specs: {
          'MODEL': match.name,
          'PRICE': match.price,
          'MRP': match.mrp,
          'DESCRIPTION': match.desc,
          'WARRANTY': '1 YEAR STANDARD WARRANTY'
        },
        category: match.category
      };
    }
  }
  if (!details) {
    details = productDetailsData.x1;
  }

  const [activeImage, setActiveImage] = useState(details.images[0]);
  const [selectedColor, setSelectedColor] = useState(details.colors[0]);
  // Cart and simulated Checkout states
  const [toastMessage, setToastMessage] = useState('');
  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({ name: '', phone: '', address: '' });
  const [orderComplete, setOrderComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [selectedApp, setSelectedApp] = useState('phonepe');
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [generatedOrderId, setGeneratedOrderId] = useState('');

  useEffect(() => {
    setActiveImage(details.images[0]);
    setSelectedColor(details.colors[0]);
    // Scroll to top when loading a new product detail
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [productId, details]);

  // Find related products
  const allRelated = Object.values(productDetailsData).filter(
    (p) => p.category === details.category && p.id !== details.id
  );


  const isEv = details.category === 'evs';

  return (
    <div className={`min-h-screen font-sans ${isEv ? 'bg-white text-zinc-950' : 'bg-[#f8f9fa] text-zinc-950'}`}>
      
      {/* First Section (Hero with Background for Scooter, Default Style for others) */}
      <div 
        className={`relative pt-28 pb-16 px-6 ${
          isEv 
            ? 'bg-cover bg-center border-b border-zinc-200' 
            : 'bg-[#f8f9fa]'
        }`}
        style={isEv ? { backgroundImage: 'url("/haion_scooter_hero.png")' } : {}}
      >
        {isEv && <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px] z-0" />}

        <div className="max-w-7xl mx-auto relative z-10">


          {/* Main Product Frame */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Side: Thumbnail Stack & Image Showcase */}
            <div className="lg:col-span-7 grid grid-cols-12 gap-4">
              {/* Thumbnails */}
              <div className="col-span-3 md:col-span-2 flex flex-col gap-3">
                {details.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative aspect-square w-full rounded-xl overflow-hidden bg-white border-2 flex items-center justify-center p-1.5 transition-all duration-300 cursor-pointer ${
                      activeImage === img ? 'border-purple-500 shadow-md' : 'border-zinc-200/60 hover:border-zinc-350'
                    }`}
                  >
                    <img src={img} alt={`${details.name} view ${idx + 1}`} className="max-h-full object-contain" />
                  </button>
                ))}
              </div>

              {/* Active Big Image display */}
              <div className="col-span-9 md:col-span-10 relative aspect-[4/3] rounded-2xl border border-zinc-200/50 bg-white flex items-center justify-center p-6 group">
                <img
                  src={activeImage}
                  alt={details.name}
                  className="max-h-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-4 right-4 bg-white border border-zinc-200/80 p-2 rounded-xl shadow-sm text-zinc-500 hover:text-purple-500 cursor-pointer transition-colors">
                  <FiMaximize2 size={16} />
                </div>
              </div>
            </div>

            {/* Right Side: Product Details Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl font-extrabold text-zinc-950 font-display mb-2">
                  {details.name}
                </h1>
                
                <div className="text-3xl font-black text-purple-500 font-display mb-4">
                  {details.price}
                </div>

                <p className="text-zinc-650 text-base font-normal mb-8 leading-relaxed">
                  {details.subtitle}
                </p>

                {/* Attributes Selectors */}
                <div className="space-y-6 mb-8 border-t border-zinc-200/60 pt-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">
                      Available Color:
                    </label>
                    <div className="relative">
                      <select
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-sm font-medium text-zinc-800 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/20 cursor-pointer transition-all duration-300 appearance-none"
                      >
                        {details.colors.map((color) => (
                          <option key={color} value={color}>
                            {color}
                          </option>
                        ))}
                      </select>
                      {/* Custom Arrow */}
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-500">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Inquiry Query & Add/Buy Buttons */}
              <div className="space-y-4 pt-4 border-t border-zinc-200/60">
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => {
                      if (onAddToCart) {
                        onAddToCart(details, selectedColor);
                      }
                      setToastMessage(`"${details.name}" added to cart!`);
                      setTimeout(() => setToastMessage(''), 3000);
                    }}
                    className="w-full py-3.5 text-xs font-bold text-center uppercase tracking-wider rounded-full border-2 border-zinc-900 hover:bg-zinc-50 text-zinc-900 transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                  >
                    Add To Cart
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowCheckout(true);
                      setOrderComplete(false);
                    }}
                    className="w-full py-3.5 text-xs font-bold text-center uppercase tracking-wider rounded-full bg-gradient-to-r from-zinc-950 to-amber-500 text-white hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:scale-[1.03] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                  >
                    Buy Now
                  </button>
                </div>

                <p className="text-[10px] text-zinc-400 text-center">
                  Our support team typically responds to inquiries within 15 minutes.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 px-6">
        {/* Meet The Incredible Electric Scooter Section (Only for EVs) */}
        {details.category === 'evs' && (
          <div className="mb-16 bg-[#edf1ec] rounded-3xl p-8 md:p-12 text-center border border-zinc-200/50 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-950 mb-10 font-display text-center">
              Meet The <span className="text-purple-650">Incredible</span> Electric Scooter.
            </h2>

            {/* Key Specifications Card */}
            <div className="mb-12 max-w-5xl mx-auto bg-[#1a1a1a] text-white rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-2xl border border-zinc-800">
              {/* Background wave decoration */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M-50,120 C150,180 250,50 450,110 C650,170 750,70 850,130" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  <path d="M-50,150 C180,210 220,70 480,140 C620,200 780,100 880,160" stroke="white" strokeWidth="1" strokeLinecap="round" />
                </svg>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto relative z-10">
                {/* Km Range */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 w-full flex justify-center">
                    <svg viewBox="0 0 160 100" className="w-full max-w-[140px] h-24 md:h-28" xmlns="http://www.w3.org/2000/svg">
                      <style>{`
                        @keyframes moveRoad {
                          to { stroke-dashoffset: -28; }
                        }
                        .animate-road-line {
                          animation: moveRoad 1.2s linear infinite;
                        }
                      `}</style>
                      <rect width="160" height="100" rx="8" fill="#edf2ee" />
                      <polygon points="-10,65 30,30 70,65" fill="#4b5563" />
                      <polygon points="20,38 30,30 40,38" fill="#e5e7eb" />
                      
                      <polygon points="50,65 95,20 140,65" fill="#374151" />
                      <polygon points="82,33 95,20 108,33" fill="#e5e7eb" />

                      <polygon points="100,65 130,35 165,65" fill="#4b5563" />
                      <polygon points="120,45 130,35 140,45" fill="#e5e7eb" />

                      <path d="M-10,30 Q20,15 50,30 Q80,15 110,30 Q140,15 170,30 L170,65 L-10,65 Z" fill="#9ca3af" opacity="0.4" />
                      <path d="M-10,38 Q15,25 40,38 Q65,25 90,38 Q115,25 140,38 L140,65 L-10,65 Z" fill="#d1d5db" opacity="0.6" />

                      <rect y="65" width="160" height="35" fill="#65a30d" />

                      <polygon points="10,100 75,65 85,65 150,100" fill="#1f2937" />
                      <line x1="80" y1="65" x2="80" y2="100" stroke="#ffffff" strokeWidth="3" strokeDasharray="8,6" className="animate-road-line" />

                      <rect x="12" y="60" width="3" height="12" fill="#78350f" />
                      <circle cx="13.5" cy="54" r="7" fill="#22c55e" />
                    </svg>
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white font-display mb-1 flex items-start justify-center">
                    200<span className="text-sm text-zinc-400 ml-0.5 mt-1">*</span>
                  </div>
                  <div className="text-xs md:text-sm text-zinc-450 font-medium tracking-wide">Km Range Per Charge</div>
                </div>

                {/* Watt Peak Power */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 w-full flex justify-center">
                    <svg viewBox="0 0 100 100" className="w-full max-w-[140px] h-24 md:h-28" xmlns="http://www.w3.org/2000/svg">
                      <style>{`
                        @keyframes pulseLightning {
                          0%, 100% { transform: scale(1); filter: drop-shadow(0 0 2px rgba(56, 189, 248, 0.4)); }
                          50% { transform: scale(1.08); filter: drop-shadow(0 0 8px rgba(56, 189, 248, 0.9)); }
                        }
                        .animate-lightning {
                          animation: pulseLightning 1.8s ease-in-out infinite;
                          transform-origin: center;
                        }
                      `}</style>
                      <path d="M58,5 L32,54 H50 L42,95 L68,46 H50 Z" fill="#38bdf8" className="animate-lightning" />
                    </svg>
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white font-display mb-1">
                    1200
                  </div>
                  <div className="text-xs md:text-sm text-zinc-450 font-medium tracking-wide">Watt Peak Power</div>
                </div>

                {/* Modes & Reverse */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 w-full flex justify-center">
                    <svg viewBox="0 0 100 100" className="w-full max-w-[140px] h-24 md:h-28" xmlns="http://www.w3.org/2000/svg">
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
                      <g transform="translate(38, 38)" fill="#3b82f6" className="gear-blue">
                        <circle cx="0" cy="0" r="14" />
                        <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(0)" />
                        <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(45)" />
                        <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(90)" />
                        <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(135)" />
                        <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(180)" />
                        <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(225)" />
                        <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(270)" />
                        <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(315)" />
                        <circle cx="0" cy="0" r="6" fill="#1a1a1a" />
                      </g>
                      <g transform="translate(64, 44)" fill="#64748b" className="gear-slate">
                        <circle cx="0" cy="0" r="11" />
                        <rect x="-2.5" y="-14" width="5" height="6" rx="1" transform="rotate(22.5)" />
                        <rect x="-2.5" y="-14" width="5" height="6" rx="1" transform="rotate(67.5)" />
                        <rect x="-2.5" y="-14" width="5" height="6" rx="1" transform="rotate(112.5)" />
                        <rect x="-2.5" y="-14" width="5" height="6" rx="1" transform="rotate(157.5)" />
                        <rect x="-2.5" y="-14" width="5" height="6" rx="1" transform="rotate(202.5)" />
                        <rect x="-2.5" y="-14" width="5" height="6" rx="1" transform="rotate(247.5)" />
                        <rect x="-2.5" y="-14" width="5" height="6" rx="1" transform="rotate(292.5)" />
                        <rect x="-2.5" y="-14" width="5" height="6" rx="1" transform="rotate(337.5)" />
                        <circle cx="0" cy="0" r="5" fill="#1a1a1a" />
                      </g>
                      <g transform="translate(48, 66)" fill="#f97316" className="gear-orange">
                        <circle cx="0" cy="0" r="14" />
                        <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(15)" />
                        <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(60)" />
                        <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(105)" />
                        <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(150)" />
                        <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(195)" />
                        <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(240)" />
                        <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(285)" />
                        <rect x="-3" y="-18" width="6" height="8" rx="1" transform="rotate(330)" />
                        <circle cx="0" cy="0" r="6" fill="#1a1a1a" />
                      </g>
                    </svg>
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white font-display mb-1">
                    4
                  </div>
                  <div className="text-xs md:text-sm text-zinc-450 font-medium tracking-wide">I 2 3 4 Modes & Reverse</div>
                </div>

                {/* Top Speed */}
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 w-full flex justify-center items-center h-32">
                    <AnimatedSpeedometer />
                  </div>
                  <div className="text-3xl md:text-4xl font-extrabold text-white font-display mb-1 flex items-start justify-center">
                    25<span className="text-sm text-zinc-400 ml-0.5 mt-1">*</span>
                  </div>
                  <div className="text-xs md:text-sm text-zinc-450 font-medium tracking-wide">KMPH Top Speed</div>
                </div>
              </div>
            </div>

            {/* Collage Feature Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
              {/* Left Column */}
              <div className="flex flex-col gap-6">
                {/* Digital Meter */}
                <div className="relative group overflow-hidden rounded-2xl bg-white border border-zinc-200 aspect-[4/3] flex items-center justify-center">
                  <img 
                    src="/front.jpeg" 
                    alt="Digital Meter" 
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
                  <div className="absolute bottom-6 left-6 text-left z-20">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-300 block">Digital</span>
                    <span className="text-xl font-bold text-white uppercase mt-0.5 block">Meter</span>
                  </div>
                </div>

                {/* LED Light */}
                <div className="relative group overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-850 aspect-[4/3] flex items-center justify-center">
                  <div className="w-full h-full overflow-hidden flex items-center justify-center relative">
                    <img 
                      src="/body.jpeg" 
                      alt="LED Light" 
                      className="w-full h-full object-cover rotate-90 scale-[1.6] group-hover:scale-[1.7] transition-transform duration-500" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <div className="absolute bottom-6 left-6 text-left z-20">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 block">Led</span>
                    <span className="text-xl font-bold text-white uppercase mt-0.5 block">Light</span>
                  </div>
                </div>
              </div>

              {/* Middle Column - Tall Center Card */}
              <div className="relative group overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-850 h-full min-h-[350px] md:min-h-[472px] flex items-center justify-center">
                <img 
                  src="/body2.jpeg" 
                  alt="Haion Scooter Front Profile" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-6">
                {/* Dual Suspension */}
                <div className="relative group overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-850 aspect-[4/3] flex items-center justify-center">
                  <div className="w-full h-full overflow-hidden flex items-center justify-center relative">
                    <img 
                      src="/back.jpeg" 
                      alt="Dual Suspension" 
                      className="w-full h-full object-cover rotate-90 scale-[1.4] group-hover:scale-[1.5] transition-transform duration-500" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <div className="absolute bottom-6 left-6 text-left z-20">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 block">Dual</span>
                    <span className="text-xl font-bold text-white uppercase mt-0.5 block">Suspension</span>
                  </div>
                </div>

                {/* Disc Brakes */}
                <div className="relative group overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-850 aspect-[4/3] flex items-center justify-center">
                  <div className="w-full h-full overflow-hidden flex items-center justify-center relative">
                    <img 
                      src="/back.jpeg" 
                      alt="Disc Brakes" 
                      className="w-full h-full object-cover rotate-90 scale-[1.8] origin-center group-hover:scale-[1.9] transition-transform duration-500" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <div className="absolute bottom-6 left-6 text-left z-20">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 block">Disc</span>
                    <span className="text-xl font-bold text-white uppercase mt-0.5 block">Brakes</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {/* Feature 1 */}
              <div className="flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-4 text-left sm:text-center p-4 bg-white/40 rounded-2xl border border-zinc-200/30">
                <div className="flex-shrink-0">
                  <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 55 V82" stroke="#386a45" strokeWidth="4" strokeLinecap="round" />
                    <path d="M50 70 Q38 66 40 58 Q48 60 50 70" fill="#386a45" />
                    <path d="M50 75 Q62 71 60 63 Q52 65 50 75" fill="#386a45" />
                    <path d="M30 82 H70 C65 89 35 89 30 82Z" fill="#5c3a21" />
                    <g transform="translate(50, 38)">
                      {[...Array(12)].map((_, i) => (
                        <path
                          key={i}
                          d="M0 0 Q-7 -18 0 -24 Q7 -18 0 0"
                          fill="#ffc72c"
                          transform={`rotate(${i * 30})`}
                        />
                      ))}
                      <circle cx="0" cy="0" r="14" fill="#f39c12" />
                      <circle cx="0" cy="0" r="12" fill="#f1c40f" />
                      <text x="0" y="4.5" fill="#7f8c8d" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">₹</text>
                    </g>
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-zinc-900">10 Paisa*</div>
                  <div className="text-sm text-zinc-600 font-medium">per Km</div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-4 text-left sm:text-center p-4 bg-white/40 rounded-2xl border border-zinc-200/30">
                <div className="flex-shrink-0">
                  <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 25 C30 25 50 18 50 18 C50 18 70 25 70 25 C70 50 58 72 50 80 C42 72 30 50 30 25Z" fill="#a0c4ff" stroke="#3b82f6" strokeWidth="3" />
                    <path d="M50 18 C50 18 70 25 70 25 C70 50 58 72 50 80 V18Z" fill="#3b82f6" opacity="0.3" />
                    <path d="M38 50 L48 60 L68 35" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M38 50 L48 60 L68 35" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-zinc-900">3 Years</div>
                  <div className="text-sm text-zinc-600 font-medium">Warranty on Battery</div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-4 text-left sm:text-center p-4 bg-white/40 rounded-2xl border border-zinc-200/30">
                <div className="flex-shrink-0">
                  <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="34" y="24" width="32" height="36" rx="16" stroke="#0f172a" strokeWidth="4" fill="none" />
                    <rect x="26" y="46" width="48" height="34" rx="8" fill="white" stroke="#0f172a" strokeWidth="4" />
                    <circle cx="50" cy="60" r="4" fill="#0f172a" />
                    <path d="M48 63 H52 L53 72 H47 Z" fill="#0f172a" />
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-zinc-900">Anti Theft</div>
                  <div className="text-sm text-zinc-600 font-medium">Alarm</div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-4 text-left sm:text-center p-4 bg-white/40 rounded-2xl border border-zinc-200/30">
                <div className="flex-shrink-0">
                  <svg className="w-16 h-16" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="42" y="16" width="16" height="6" rx="2" fill="#0f172a" stroke="#0f172a" strokeWidth="2" />
                    <rect x="33" y="22" width="34" height="58" rx="6" fill="white" stroke="#0f172a" strokeWidth="4" />
                    <rect x="38" y="74" width="24" height="0" rx="3" fill="#22c55e" stroke="#0f172a" strokeWidth="2">
                      <animate 
                        attributeName="height" 
                        values="0;46;0" 
                        dur="2.5s" 
                        repeatCount="indefinite" 
                      />
                      <animate 
                        attributeName="y" 
                        values="74;28;74" 
                        dur="2.5s" 
                        repeatCount="indefinite" 
                      />
                    </rect>
                  </svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-zinc-900">70 - 200 Km</div>
                  <div className="text-sm text-zinc-600 font-medium">in Single Charge</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Spec Table: Product Information */}
        <div className="mb-20">
          <div className="flex border-b border-zinc-200 mb-8 justify-center">
            <span className="pb-3 text-lg font-bold border-b-2 border-purple-500 text-zinc-950 font-display">
              Description
            </span>
          </div>

          <GlassCard className="p-0 border-zinc-200/50 bg-white/80 overflow-hidden shadow-sm rounded-2xl">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-zinc-900 mb-6 font-display text-center">
                Product Information
              </h3>
              
              <div className="divide-y divide-zinc-200/40">
                {Object.entries(details.specs).map(([key, val]) => (
                  <div key={key} className="grid grid-cols-1 md:grid-cols-12 py-4 gap-2 text-sm text-center">
                    <div className="md:col-span-4 font-bold text-zinc-500 uppercase tracking-wider text-center">
                      {key}
                    </div>
                    <div className="md:col-span-8 text-zinc-800 font-semibold text-right pr-4 md:pr-16">
                      {val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Whole New Range of LED TV specifications/pricing sheet */}
        {details.id.startsWith('tv') && (
          <div className="mb-20">
            <div className="flex border-b border-zinc-200 mb-8 justify-center">
              <span className="pb-3 text-lg font-bold border-b-2 border-purple-500 text-zinc-950 font-display">
                Whole New Range of LED TV
              </span>
            </div>

            <GlassCard className="p-0 border-zinc-200/50 bg-white/80 overflow-hidden shadow-sm rounded-2xl">
              <div className="p-6 md:p-8 overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200 bg-zinc-50/50 text-xs font-bold uppercase tracking-wider text-zinc-950">
                      <th className="py-4 px-6 text-zinc-950">Model</th>
                      <th className="py-4 px-6 text-right text-zinc-950">Price</th>
                      <th className="py-4 px-6 text-right text-zinc-950">MRP</th>
                      <th className="py-4 px-6 text-zinc-950">Description</th>
                      <th className="py-4 px-6 text-zinc-950">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200/40 text-sm">
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
                        <td className="py-4 px-6">
                          <button
                            onClick={() => onViewProduct(row.model)}
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
        )}

        {/* You May Also Like Section */}
        <div>
          <h2 className="text-3xl font-extrabold text-center text-zinc-950 font-display mb-12">
            You May Also Like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {allRelated.map((product) => (
              <div 
                key={product.id}
                onClick={() => onViewProduct(product.id)}
                className="cursor-pointer"
              >
                <GlassCard className="h-full flex flex-col justify-between p-6 border-zinc-200/50 bg-white/70 hover:bg-white hover:border-purple-500/35 hover:shadow-[0_12px_30px_rgba(232,141,1,0.08)] transition-all duration-500 rounded-2xl group">
                  <div className="relative h-48 rounded-xl overflow-hidden mb-4 flex items-center justify-center bg-zinc-50 border border-zinc-100">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className={`max-h-40 object-contain z-10 transition-transform duration-500 ${
                        product.id.startsWith('x') 
                          ? 'scale-[1.35] group-hover:scale-[1.42]' 
                          : 'group-hover:scale-105'
                      }`}
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="text-xl font-extrabold text-zinc-900 mb-1 font-display group-hover:text-purple-500 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-zinc-500 text-xs font-normal px-2 line-clamp-2">
                      {product.subtitle}
                    </p>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Floating Add to Cart Toast Alert */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[110] bg-zinc-950 text-white px-6 py-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-zinc-800 text-sm font-semibold"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Simulated Checkout Modal Overlay */}
      <AnimatePresence>
        {showCheckout && (
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[120] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl overflow-y-auto max-h-[90vh] max-w-md w-full shadow-2xl border border-zinc-200 flex flex-col"
            >
              <div className="bg-zinc-950 text-white p-6 relative flex-shrink-0">
                <button
                  onClick={() => {
                    if (!paymentProcessing) {
                      setShowCheckout(false);
                    }
                  }}
                  className="absolute top-6 right-6 text-white hover:text-zinc-300 transition-colors cursor-pointer"
                  disabled={paymentProcessing}
                >
                  ✕
                </button>
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block mb-1">
                  Secure Checkout
                </span>
                <h3 className="text-xl font-bold font-display">
                  Buy {details.name}
                </h3>
              </div>

              <div className="p-6 overflow-y-auto flex-1">
                {paymentProcessing ? (
                  <div className="text-center py-10 space-y-6 flex flex-col items-center justify-center">
                    {/* Animated Mobile App Redirect Loading */}
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full border-4 border-amber-500/20 border-t-amber-500 animate-spin" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl">📱</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-zinc-900 capitalize">Opening {selectedApp}</h4>
                      <p className="text-xs text-zinc-500 mt-2 max-w-xs mx-auto">
                        Simulating redirect to the {selectedApp} app on your device to authorize the transaction of <span className="font-extrabold text-zinc-900">{details.price}</span>.
                      </p>
                    </div>
                    <div className="bg-zinc-50 border border-zinc-150 p-4 rounded-2xl w-full text-left">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-zinc-500 font-semibold">Merchant</span>
                        <span className="text-zinc-900 font-bold">HAION EV & Appliances</span>
                      </div>
                      <div className="flex justify-between items-center text-xs mt-2">
                        <span className="text-zinc-500 font-semibold">Status</span>
                        <span className="text-amber-600 font-bold animate-pulse">Awaiting authorization...</span>
                      </div>
                    </div>
                  </div>
                ) : orderComplete ? (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 border border-emerald-300 text-2xl font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-zinc-900">
                        {paymentMethod === 'online' ? 'Payment Verified & Order Placed!' : 'Order Placed Successfully!'}
                      </h4>
                      <p className="text-xs text-zinc-500 mt-1">
                        Thank you for your purchase. {paymentMethod === 'online' && `Your payment via ${selectedApp.toUpperCase()} was authorized successfully.`}
                      </p>
                    </div>

                    <div className="p-4 bg-zinc-50 border border-zinc-150 rounded-2xl">
                      <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Your Tracking ID</span>
                      <span className="text-lg font-black text-zinc-950 font-display block select-all mt-1">{generatedOrderId}</span>
                      <button
                        onClick={() => {
                          setShowCheckout(false);
                          if (onTrackOrder) {
                            onTrackOrder(generatedOrderId);
                          }
                        }}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors uppercase tracking-wider cursor-pointer"
                      >
                        Track Shipment Status →
                      </button>
                    </div>

                    <button
                      onClick={() => setShowCheckout(false)}
                      className="w-full py-3 bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold uppercase tracking-wider rounded-full cursor-pointer"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const newOrderId = 'HAION-' + Math.floor(100000 + Math.random() * 900000);
                      setGeneratedOrderId(newOrderId);
                      
                      const saveOrder = {
                        id: newOrderId,
                        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
                        items: details.name,
                        status: 'In Transit',
                        address: checkoutForm.address || 'User Address'
                      };
                      const localOrders = JSON.parse(localStorage.getItem('haion_orders') || '[]');
                      localOrders.push(saveOrder);
                      localStorage.setItem('haion_orders', JSON.stringify(localOrders));

                      if (paymentMethod === 'online') {
                        setPaymentProcessing(true);
                        setTimeout(() => {
                          setPaymentProcessing(false);
                          setOrderComplete(true);
                        }, 2500);
                      } else {
                        setOrderComplete(true);
                      }
                    }}
                    className="space-y-4 text-left"
                  >
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-650 uppercase mb-1">FullName *</label>
                      <input
                        type="text"
                        required
                        value={checkoutForm.name}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-2.5 text-zinc-800 text-sm focus:outline-none focus:border-zinc-950"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-650 uppercase mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={checkoutForm.phone}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                        placeholder="10-digit number"
                        className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-2.5 text-zinc-800 text-sm focus:outline-none focus:border-zinc-950"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-650 uppercase mb-1">Shipping Address *</label>
                      <textarea
                        required
                        rows="3"
                        value={checkoutForm.address}
                        onChange={(e) => setCheckoutForm({ ...checkoutForm, address: e.target.value })}
                        placeholder="Enter full address"
                        className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-2.5 text-zinc-800 text-sm focus:outline-none focus:border-zinc-950 resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-zinc-650 uppercase mb-2">Payment Method *</label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all duration-300 ${
                          paymentMethod === 'cod' 
                            ? 'border-zinc-950 bg-zinc-950 text-white' 
                            : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50'
                        }`}>
                          <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="cod" 
                            checked={paymentMethod === 'cod'} 
                            onChange={() => setPaymentMethod('cod')} 
                            className="sr-only"
                          />
                          <span>Cash on Delivery</span>
                        </label>
                        <label className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all duration-300 ${
                          paymentMethod === 'online' 
                            ? 'border-zinc-950 bg-zinc-950 text-white' 
                            : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50'
                        }`}>
                          <input 
                            type="radio" 
                            name="paymentMethod" 
                            value="online" 
                            checked={paymentMethod === 'online'} 
                            onChange={() => setPaymentMethod('online')} 
                            className="sr-only"
                          />
                          <span>Pay Online</span>
                        </label>
                      </div>
                    </div>

                    {paymentMethod === 'online' && (
                      <div className="space-y-3">
                        <label className="block text-[10px] font-bold text-zinc-650 uppercase mb-2">Select Payment App *</label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { id: 'phonepe', label: 'PhonePe', icon: '🟣' },
                            { id: 'gpay', label: 'Google Pay', icon: '🔵' },
                            { id: 'paytm', label: 'Paytm', icon: '🌐' },
                            { id: 'bhim', label: 'BHIM UPI', icon: '🇮🇳' }
                          ].map((app) => (
                            <label
                              key={app.id}
                              className={`flex items-center gap-2 p-2.5 rounded-lg border text-xs font-bold cursor-pointer transition-all duration-300 ${
                                selectedApp === app.id
                                  ? 'border-purple-550 bg-purple-50 text-purple-950'
                                  : 'border-zinc-200 bg-white text-zinc-650 hover:bg-zinc-50'
                              }`}
                            >
                              <input
                                type="radio"
                                name="onlineApp"
                                value={app.id}
                                checked={selectedApp === app.id}
                                onChange={() => setSelectedApp(app.id)}
                                className="sr-only"
                              />
                              <span>{app.icon}</span>
                              <span className="truncate">{app.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="bg-zinc-50 border border-zinc-150 p-4 rounded-2xl flex items-center justify-between mt-4">
                      <div>
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Price details</span>
                        <span className="text-base font-black text-zinc-900">{details.price}</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 uppercase">
                        {paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 text-xs font-bold text-center uppercase tracking-wider rounded-full bg-gradient-to-r from-zinc-950 to-amber-500 text-white hover:scale-[1.02] transition-all duration-300 mt-6 cursor-pointer"
                    >
                      {paymentMethod === 'online' ? `Make Payment with ${selectedApp.toUpperCase()}` : 'Confirm Order'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
