import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import TrustStats from './components/sections/TrustStats';
import Features from './components/sections/Features';
import Categories from './components/sections/Categories';
import AppExperience from './components/sections/AppExperience';
import ProductsTabs from './components/sections/ProductsTabs';
import WhyChooseHaion from './components/sections/WhyChooseHaion';
import ProductDetails from './components/sections/ProductDetails';
import AboutUs from './components/sections/AboutUs';
import HomeAppliancesPage from './components/sections/HomeAppliancesPage';
import ServiceDetailsPage from './components/sections/ServiceDetailsPage';
import StorePage from './components/sections/StorePage';
import HowItWorks from './components/sections/HowItWorks';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import WhoWeAre from './components/sections/WhoWeAre';
import HaionAdvantage from './components/sections/HaionAdvantage';
import LeadPopup from './components/ui/LeadPopup';
import CareerFormModal from './components/sections/store/CareerFormModal';
import { CartDrawer } from './components/ui';
import TrackOrderModal from './components/sections/store/TrackOrderModal';
import ProfilePage from './components/sections/ProfilePage';
import InverterPage from './components/sections/InverterPage';

function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const scrollRef = React.useRef(0);
  const previousServiceIdRef = React.useRef(null);
  const [previousPage, setPreviousPage] = useState(null); // 'home' | 'appliances' | 'inverter' | 'service'

  const handleOpenProductDetails = (id, fromPage = 'home') => {
    scrollRef.current = window.scrollY;
    setPreviousPage(fromPage);
    if (fromPage === 'service') {
      previousServiceIdRef.current = selectedServiceId;
      setSelectedServiceId(null);
    }
    if (fromPage === 'appliances') {
      setShowHomeAppliances(false);
    }
    if (fromPage === 'inverter') {
      setShowInverter(false);
    }
    setSelectedProductId(id);
  };

  const handleCloseProductDetails = () => {
    setSelectedProductId(null);
    if (previousPage === 'appliances') {
      setShowHomeAppliances(true);
    } else if (previousPage === 'inverter') {
      setShowInverter(true);
    } else if (previousPage === 'service') {
      setSelectedServiceId(previousServiceIdRef.current);
    }
    // Restore scroll position
    setTimeout(() => {
      window.scrollTo({ top: scrollRef.current, behavior: 'smooth' });
    }, 100);
  };

  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showHomeAppliances, setShowHomeAppliances] = useState(false);
  const [showStore, setShowStore] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showCareersModal, setShowCareersModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showInverter, setShowInverter] = useState(false);

  // Global Cart state
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCartCheckout, setShowCartCheckout] = useState(false);
  const [cartCheckoutForm, setCartCheckoutForm] = useState({ name: '', phone: '', address: '' });
  const [cartOrderComplete, setCartOrderComplete] = useState(false);
  const [cartPaymentMethod, setCartPaymentMethod] = useState('cod');
  const [cartSelectedApp, setCartSelectedApp] = useState('phonepe');
  const [cartPaymentProcessing, setCartPaymentProcessing] = useState(false);
  const [cartGeneratedOrderId, setCartGeneratedOrderId] = useState('');

  // Global Tracking state
  const [isTrackingOpen, setIsTrackingOpen] = useState(false);
  const [trackingOrderId, setTrackingOrderId] = useState('');

  const handleOpenTracking = (orderId = '') => {
    setTrackingOrderId(orderId);
    setIsTrackingOpen(true);
  };

  const handleAddToCart = (product, color) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id && item.color === color);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.color === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          color,
          quantity: 1
        }
      ];
    });
  };

  const handleUpdateCartQuantity = (id, color, quantity) => {
    if (quantity <= 0) {
      handleRemoveCartItem(id, color);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id && item.color === color ? { ...item, quantity } : item))
    );
  };

  const handleRemoveCartItem = (id, color) => {
    setCartItems((prev) => prev.filter((item) => !(item.id === id && item.color === color)));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const navigateToHomeSection = (href) => {
    setShowProfile(false);
    if (href.startsWith('#service-')) {
      const serviceId = href.replace('#service-', '');
      setSelectedServiceId(serviceId);
      setShowAboutUs(false);
      setShowHomeAppliances(false);
      setShowStore(false);
      setSelectedProductId(null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setShowAboutUs(false);
    setShowHomeAppliances(false);
    setShowStore(false);
    setShowInverter(false);
    setSelectedProductId(null);
    setSelectedServiceId(null);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-gray-200 antialiased overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
      {/* Sticky Premium Navbar */}
      <Navbar 
        onAboutUsClick={() => {
          setSelectedProductId(null);
          setShowHomeAppliances(false);
          setSelectedServiceId(null);
          setShowStore(false);
          setShowProfile(false);
          setShowInverter(false);
          setShowAboutUs(true);
        }}
        onHomeAppliancesClick={() => {
          setSelectedProductId(null);
          setShowAboutUs(false);
          setSelectedServiceId(null);
          setShowStore(false);
          setShowProfile(false);
          setShowInverter(false);
          setShowHomeAppliances(true);
        }}
        onHomeClick={() => {
          setShowAboutUs(false);
          setShowHomeAppliances(false);
          setSelectedProductId(null);
          setSelectedServiceId(null);
          setShowStore(false);
          setShowProfile(false);
          setShowInverter(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onStoreClick={() => {
          setSelectedProductId(null);
          setShowAboutUs(false);
          setSelectedServiceId(null);
          setShowHomeAppliances(false);
          setShowProfile(false);
          setShowInverter(false);
          setShowStore(true);
        }}
        onNavLinkClick={navigateToHomeSection}
        onCareersClick={() => setShowCareersModal(true)}
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onTrackClick={() => handleOpenTracking('')}
        onProfileClick={() => {
          setSelectedProductId(null);
          setShowAboutUs(false);
          setSelectedServiceId(null);
          setShowStore(false);
          setShowHomeAppliances(false);
          setShowInverter(false);
          setShowProfile(true);
        }}
        onInverterClick={() => {
          setSelectedProductId(null);
          setShowAboutUs(false);
          setSelectedServiceId(null);
          setShowStore(false);
          setShowHomeAppliances(false);
          setShowProfile(false);
          setShowInverter(true);
        }}
      />

      {/* Main Cinematic Sections */}
      <main>
        {showProfile ? (
          <ProfilePage onClose={() => setShowProfile(false)} />
        ) : showHomeAppliances ? (
          <HomeAppliancesPage
            onViewDetails={(id) => handleOpenProductDetails(id, 'appliances')}
            onClose={() => setShowHomeAppliances(false)}
          />
        ) : showInverter ? (
          <InverterPage
            onViewDetails={(id) => handleOpenProductDetails(id, 'inverter')}
            onClose={() => setShowInverter(false)}
          />
        ) : showAboutUs ? (
          <AboutUs onClose={() => setShowAboutUs(false)} onCareersClick={() => setShowCareersModal(true)} />
        ) : showStore ? (
          <StorePage onClose={() => setShowStore(false)} />
        ) : selectedServiceId ? (
          <ServiceDetailsPage
            serviceId={selectedServiceId}
            onViewProduct={(id) => handleOpenProductDetails(id, 'service')}
            onClose={() => setSelectedServiceId(null)}
          />
        ) : selectedProductId ? (
          <ProductDetails
            productId={selectedProductId}
            onClose={handleCloseProductDetails}
            onViewProduct={(id) => handleOpenProductDetails(id, previousPage)}
            onAddToCart={handleAddToCart}
            onTrackOrder={handleOpenTracking}
          />
        ) : (
          <>
            {/* 1. CINEMATIC HERO SECTION */}
            <Hero />

            {/* 2. TRUST & SOCIAL PROOF */}
            <TrustStats />

            {/* 3. WHY USERS LOVE OUR APP */}
            <Features />


            {/* 3b. SCROLL-DRIVEN PRODUCT ANIMATION */}


            {/* 4. ELECTRONICS CATEGORY SHOWCASE */}
            <Categories />

            {/* About Section: Who We Are */}
            <WhoWeAre />

            {/* 5. APP EXPERIENCE SECTION */}
            <AppExperience />

            {/* 6a. HAION OWNERSHIP ADVANTAGE GRID */}
            <HaionAdvantage />

            {/* 6b. TABBED PRODUCT SHOWCASE (EVs & Appliances) */}
            <ProductsTabs onViewDetails={(id) => handleOpenProductDetails(id, 'home')} />

            {/* 6c. WHY CHOOSE HAION ADVANTAGE */}
            <WhyChooseHaion />
            {/* 8. HOW IT WORKS */}
            <HowItWorks />

            {/* 10. TESTIMONIALS */}
            <Testimonials />

            {/* 11. DOWNLOAD APP CTA */}


            {/* 12. FAQ */}
            <FAQ />

            {/* 13. CONTACT SECTION */}
            <Contact />
          </>
        )}
      </main>

      {/* 14. PREMIUM FOOTER */}
      <Footer onCareersClick={() => setShowCareersModal(true)} />

      {/* Automated Lead Popup */}
      <LeadPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      {/* Career Application Form Modal */}
      <CareerFormModal isOpen={showCareersModal} onClose={() => setShowCareersModal(false)} />

      {/* Real-time Order Tracking Modal */}
      <TrackOrderModal
        isOpen={isTrackingOpen}
        onClose={() => setIsTrackingOpen(false)}
        initialOrderId={trackingOrderId}
      />

      {/* Global Cart Slide-out Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateCartQuantity}
        onRemoveItem={handleRemoveCartItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setShowCartCheckout(true);
          setCartOrderComplete(false);
        }}
      />

      {/* Global Checkout Modal */}
      <AnimatePresence>
        {showCartCheckout && (
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
                    if (!cartPaymentProcessing) {
                      setShowCartCheckout(false);
                    }
                  }}
                  className="absolute top-6 right-6 text-white hover:text-zinc-300 transition-colors cursor-pointer"
                  disabled={cartPaymentProcessing}
                >
                  ✕
                </button>
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block mb-1">
                  Secure Checkout
                </span>
                <h3 className="text-xl font-bold font-display">
                  Order Details
                </h3>
              </div>

              <div className="p-6 overflow-y-auto flex-1">
                {cartPaymentProcessing ? (
                  <div className="text-center py-10 space-y-6 flex flex-col items-center justify-center">
                    {/* Animated Mobile App Redirect Loading */}
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full border-4 border-amber-500/20 border-t-amber-500 animate-spin" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl">📱</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-zinc-900 capitalize">Opening {cartSelectedApp}</h4>
                      <p className="text-xs text-zinc-500 mt-2 max-w-xs mx-auto">
                        Simulating redirect to the {cartSelectedApp} app on your device to authorize the transaction of <span className="font-extrabold text-zinc-900">
                          {new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            maximumFractionDigits: 0
                          }).format(
                            cartItems.reduce((acc, item) => {
                              const priceNum = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0;
                              return acc + priceNum * item.quantity;
                            }, 0)
                          )}
                        </span>.
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
                ) : cartOrderComplete ? (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2 border border-emerald-300 text-2xl font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-zinc-900">
                        {cartPaymentMethod === 'online' ? 'Payment Verified & Order Placed!' : 'Order Placed Successfully!'}
                      </h4>
                      <p className="text-xs text-zinc-500 mt-1">
                        Thank you for your purchase. {cartPaymentMethod === 'online' && `Your payment via ${cartSelectedApp.toUpperCase()} was authorized successfully.`}
                      </p>
                    </div>

                    <div className="p-4 bg-zinc-50 border border-zinc-150 rounded-2xl">
                      <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Your Tracking ID</span>
                      <span className="text-lg font-black text-zinc-950 font-display block select-all mt-1">{cartGeneratedOrderId}</span>
                      <button
                        onClick={() => {
                          setShowCartCheckout(false);
                          handleOpenTracking(cartGeneratedOrderId);
                        }}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors uppercase tracking-wider cursor-pointer"
                      >
                        Track Shipment Status →
                      </button>
                    </div>

                    <button
                      onClick={() => setShowCartCheckout(false)}
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
                      setCartGeneratedOrderId(newOrderId);
                      
                      const saveOrder = {
                        id: newOrderId,
                        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
                        items: cartItems.map(i => `${i.name} (x${i.quantity})`).join(', '),
                        status: 'In Transit',
                        address: cartCheckoutForm.address || 'User Address'
                      };
                      const localOrders = JSON.parse(localStorage.getItem('haion_orders') || '[]');
                      localOrders.push(saveOrder);
                      localStorage.setItem('haion_orders', JSON.stringify(localOrders));

                      if (cartPaymentMethod === 'online') {
                        setCartPaymentProcessing(true);
                        setTimeout(() => {
                          setCartPaymentProcessing(false);
                          setCartOrderComplete(true);
                          handleClearCart();
                        }, 2500);
                      } else {
                        setCartOrderComplete(true);
                        handleClearCart();
                      }
                    }}
                  >
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-650 uppercase mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={cartCheckoutForm.name}
                        onChange={(e) => setCartCheckoutForm({ ...cartCheckoutForm, name: e.target.value })}
                        placeholder="Enter your name"
                        className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-2.5 text-zinc-800 text-sm focus:outline-none focus:border-zinc-950"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-650 uppercase mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        value={cartCheckoutForm.phone}
                        onChange={(e) => setCartCheckoutForm({ ...cartCheckoutForm, phone: e.target.value })}
                        placeholder="10-digit number"
                        className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-2.5 text-zinc-800 text-sm focus:outline-none focus:border-zinc-950"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-zinc-650 uppercase mb-1">Shipping Address *</label>
                      <textarea
                        required
                        rows="3"
                        value={cartCheckoutForm.address}
                        onChange={(e) => setCartCheckoutForm({ ...cartCheckoutForm, address: e.target.value })}
                        placeholder="Enter full address"
                        className="w-full bg-zinc-50 border border-zinc-300 rounded-xl px-4 py-2.5 text-zinc-800 text-sm focus:outline-none focus:border-zinc-950 resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold text-zinc-650 uppercase mb-2">Payment Method *</label>
                      <div className="grid grid-cols-2 gap-3">
                        <label className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all duration-300 ${
                          cartPaymentMethod === 'cod' 
                            ? 'border-zinc-950 bg-zinc-950 text-white' 
                            : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50'
                        }`}>
                          <input 
                            type="radio" 
                            name="cartPaymentMethod" 
                            value="cod" 
                            checked={cartPaymentMethod === 'cod'} 
                            onChange={() => setCartPaymentMethod('cod')} 
                            className="sr-only"
                          />
                          <span>Cash on Delivery</span>
                        </label>
                        <label className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold cursor-pointer transition-all duration-300 ${
                          cartPaymentMethod === 'online' 
                            ? 'border-zinc-950 bg-zinc-950 text-white' 
                            : 'border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50'
                        }`}>
                          <input 
                            type="radio" 
                            name="cartPaymentMethod" 
                            value="online" 
                            checked={cartPaymentMethod === 'online'} 
                            onChange={() => setCartPaymentMethod('online')} 
                            className="sr-only"
                          />
                          <span>Pay Online</span>
                        </label>
                      </div>
                    </div>

                    {cartPaymentMethod === 'online' && (
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
                                cartSelectedApp === app.id
                                  ? 'border-purple-550 bg-purple-50 text-purple-950'
                                  : 'border-zinc-200 bg-white text-zinc-650 hover:bg-zinc-50'
                              }`}
                            >
                              <input
                                type="radio"
                                name="cartOnlineApp"
                                value={app.id}
                                checked={cartSelectedApp === app.id}
                                onChange={() => setCartSelectedApp(app.id)}
                                className="sr-only"
                              />
                              <span>{app.icon}</span>
                              <span className="truncate">{app.label}</span>
                            </label>
                          ))
                        }
                      </div>
                    </div>
                  )}

                    <div className="bg-zinc-50 border border-zinc-150 p-4 rounded-2xl flex items-center justify-between mt-4">
                      <div>
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider block">Total Payable</span>
                        <span className="text-base font-black text-zinc-900">
                          {new Intl.NumberFormat('en-IN', {
                            style: 'currency',
                            currency: 'INR',
                            maximumFractionDigits: 0
                          }).format(
                            cartItems.reduce((acc, item) => {
                              const priceNum = parseInt(item.price.replace(/[^\d]/g, ''), 10) || 0;
                              return acc + priceNum * item.quantity;
                            }, 0)
                          )}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-600 uppercase">
                        {cartPaymentMethod === 'cod' ? 'Cash on Delivery' : 'Online Payment'}
                      </span>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 text-xs font-bold text-center uppercase tracking-wider rounded-full bg-gradient-to-r from-zinc-950 to-amber-500 text-white hover:scale-[1.02] transition-all duration-300 mt-6 cursor-pointer"
                    >
                      {cartPaymentMethod === 'online' ? `Make Payment with ${cartSelectedApp.toUpperCase()}` : 'Confirm Order'}
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

export default App;
