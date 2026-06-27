import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSearch, FiPackage, FiTruck, FiMapPin, FiCheckCircle } from 'react-icons/fi';

export default function TrackOrderModal({ isOpen, onClose, initialOrderId = '' }) {
  const [orderId, setOrderId] = useState(initialOrderId);
  const [searchedId, setSearchedId] = useState(initialOrderId);
  const [error, setError] = useState('');
  const [orderData, setOrderData] = useState(null);

  // Look up order from localStorage or simulate standard timeline if matches pattern
  const handleTrack = (e) => {
    e.preventDefault();
    if (!orderId.trim()) {
      setError('Please enter a valid Order ID');
      return;
    }

    const cleanId = orderId.trim().toUpperCase();
    
    // Attempt lookup in localStorage or simulate standard response for HAION-* format
    const localOrders = JSON.parse(localStorage.getItem('haion_orders') || '[]');
    const matched = localOrders.find(o => o.id === cleanId);

    if (matched) {
      setOrderData(matched);
      setSearchedId(cleanId);
      setError('');
    } else if (cleanId.startsWith('HAION-')) {
      // Fallback/Simulate a standard order if format is correct
      const simulatedOrder = {
        id: cleanId,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
        items: 'Haion Smart Appliance / EV',
        status: 'In Transit',
        address: 'User Delivery Address'
      };
      setOrderData(simulatedOrder);
      setSearchedId(cleanId);
      setError('');
    } else {
      setError('Order ID not found. Use a format like: HAION-123456');
      setOrderData(null);
    }
  };

  React.useEffect(() => {
    if (initialOrderId) {
      setOrderId(initialOrderId);
      setSearchedId(initialOrderId);
      
      // Auto look up initial ID
      const localOrders = JSON.parse(localStorage.getItem('haion_orders') || '[]');
      const matched = localOrders.find(o => o.id === initialOrderId);
      if (matched) {
        setOrderData(matched);
      } else {
        setOrderData({
          id: initialOrderId,
          date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
          items: 'Haion Smart Product',
          status: 'In Transit',
          address: 'User Delivery Address'
        });
      }
    }
  }, [initialOrderId]);

  // Timeline steps
  const steps = [
    { label: 'Order Confirmed', desc: 'Order received and being processed', icon: <FiPackage />, completed: true },
    { label: 'Payment Verified', desc: 'Secure payment authorization confirmed', icon: <FiCheckCircle />, completed: true },
    { label: 'Dispatched & In Transit', desc: 'Shipped via Haion logistics fleet', icon: <FiTruck />, active: true, completed: false },
    { label: 'Out for Delivery', desc: 'Delivery partner delivering to your door', icon: <FiMapPin />, completed: false }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-[130] flex items-center justify-center p-4">
          {/* Backdrop Closer */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-3xl overflow-y-auto max-h-[90vh] max-w-lg w-full shadow-2xl border border-zinc-200 z-[131] flex flex-col relative"
          >
            {/* Header */}
            <div className="bg-zinc-950 text-white p-6 relative flex-shrink-0">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white hover:text-zinc-300 transition-colors cursor-pointer"
              >
                ✕
              </button>
              <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest block mb-1">
                Real-Time Tracking
              </span>
              <h3 className="text-xl font-bold font-display">
                Track Your Haion Order
              </h3>
            </div>

            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {/* Tracker Form */}
              <form onSubmit={handleTrack} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="Enter Order Tracking ID (e.g. HAION-982736)"
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-xl pl-4 pr-10 py-3 text-zinc-800 text-sm focus:outline-none focus:border-zinc-950 font-semibold"
                  />
                  <FiSearch className="absolute right-3.5 top-3.5 text-zinc-400 text-lg" />
                </div>
                <button
                  type="submit"
                  className="bg-zinc-950 hover:bg-zinc-900 text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl cursor-pointer transition-all duration-300"
                >
                  Track
                </button>
              </form>

              {error && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-600 text-xs font-semibold rounded-xl text-center">
                  {error}
                </div>
              )}

              {/* Status details & Timeline */}
              {orderData ? (
                <div className="space-y-6 text-left">
                  {/* Order Details Header */}
                  <div className="p-4 bg-zinc-50 border border-zinc-150 rounded-2xl flex justify-between items-center text-xs">
                    <div>
                      <span className="text-zinc-400 font-medium uppercase tracking-wider block">Order ID</span>
                      <span className="text-zinc-900 font-extrabold text-sm">{orderData.id}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-zinc-400 font-medium uppercase tracking-wider block">Estimated Delivery</span>
                      <span className="text-emerald-600 font-bold text-sm">2-3 Business Days</span>
                    </div>
                  </div>

                  {/* Graphical Timeline */}
                  <div className="space-y-6 relative pl-8 before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-100">
                    {steps.map((step, idx) => (
                      <div key={idx} className="relative flex gap-4 items-start">
                        {/* Bullet Node */}
                        <div className={`absolute -left-8 w-7.5 h-7.5 rounded-full flex items-center justify-center border text-xs transition-all duration-500 ${
                          step.completed
                            ? 'bg-emerald-500 border-emerald-500 text-white'
                            : step.active
                            ? 'bg-amber-500 border-amber-500 text-zinc-950 animate-pulse'
                            : 'bg-white border-zinc-200 text-zinc-400'
                        }`}>
                          {step.icon}
                        </div>

                        {/* Text description */}
                        <div>
                          <h4 className={`text-sm font-bold ${step.completed || step.active ? 'text-zinc-900' : 'text-zinc-400'}`}>
                            {step.label}
                            {step.active && (
                              <span className="ml-2 inline-block bg-amber-100 text-amber-800 text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-md">
                                Live
                              </span>
                            )}
                          </h4>
                          <p className="text-xs text-zinc-500 mt-0.5">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Mock Map Preview */}
                  <div className="border border-zinc-200 rounded-2xl overflow-hidden bg-sky-50 relative h-40 flex items-center justify-center shadow-xs">
                    {/* Simulated Map SVG background */}
                    <svg className="absolute inset-0 w-full h-full text-zinc-300" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" />
                      <path d="M20,0 L20,100 M60,0 L60,100 M0,20 L100,20 M0,80 L100,80" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
                    </svg>

                    {/* Flashing Dot and Route marker */}
                    <div className="absolute left-[45%] top-[40%] flex flex-col items-center">
                      <div className="w-5 h-5 bg-amber-500 text-zinc-950 rounded-full flex items-center justify-center shadow-md animate-bounce text-[10px]">
                        🚚
                      </div>
                      <div className="w-2.5 h-1 bg-black/20 rounded-full blur-xs mt-0.5" />
                    </div>

                    <div className="absolute right-[15%] top-[30%] flex flex-col items-center">
                      <div className="w-4 h-4 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center shadow-md text-[8px] text-white">
                        ✓
                      </div>
                      <span className="bg-emerald-600 text-white text-[8px] font-black uppercase px-1.5 py-0.5 rounded-md mt-1 shadow-sm">
                        Destination
                      </span>
                    </div>

                    <span className="absolute bottom-2.5 left-2.5 bg-zinc-900/80 text-white text-[9px] font-bold py-1 px-2.5 rounded-lg backdrop-blur-xs">
                      Live Delivery Fleet Route
                    </span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 text-zinc-400 space-y-2">
                  <div className="text-3xl">📦</div>
                  <p className="text-xs font-semibold">Enter a valid Order ID to view real-time tracking route.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
