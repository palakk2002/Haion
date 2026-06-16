import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import TrustStats from './components/sections/TrustStats';
import Features from './components/sections/Features';
import Categories from './components/sections/Categories';
import AppExperience from './components/sections/AppExperience';
import Products from './components/sections/Products';
import ProductsTabs from './components/sections/ProductsTabs';
import WhyChooseHaion from './components/sections/WhyChooseHaion';
import ProductDetails from './components/sections/ProductDetails';
import AboutUs from './components/sections/AboutUs';
import HomeAppliancesPage from './components/sections/HomeAppliancesPage';
import ServiceDetailsPage from './components/sections/ServiceDetailsPage';
import StorePage from './components/sections/StorePage';
import Offers from './components/sections/Offers';
import HowItWorks from './components/sections/HowItWorks';
import Brands from './components/sections/Brands';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import WhoWeAre from './components/sections/WhoWeAre';
import HaionAdvantage from './components/sections/HaionAdvantage';
import LeadPopup from './components/ui/LeadPopup';

function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showHomeAppliances, setShowHomeAppliances] = useState(false);
  const [showStore, setShowStore] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const navigateToHomeSection = (href) => {
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
          setShowAboutUs(true);
        }}
        onHomeAppliancesClick={() => {
          setSelectedProductId(null);
          setShowAboutUs(false);
          setSelectedServiceId(null);
          setShowStore(false);
          setShowHomeAppliances(true);
        }}
        onHomeClick={() => {
          setShowAboutUs(false);
          setShowHomeAppliances(false);
          setSelectedProductId(null);
          setSelectedServiceId(null);
          setShowStore(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onStoreClick={() => {
          setSelectedProductId(null);
          setShowAboutUs(false);
          setSelectedServiceId(null);
          setShowHomeAppliances(false);
          setShowStore(true);
        }}
        onNavLinkClick={navigateToHomeSection}
      />

      {/* Main Cinematic Sections */}
      <main>
        {showHomeAppliances ? (
          <HomeAppliancesPage
            onViewDetails={(id) => {
              setSelectedProductId(id);
              setShowHomeAppliances(false);
            }}
            onClose={() => setShowHomeAppliances(false)}
          />
        ) : showAboutUs ? (
          <AboutUs onClose={() => setShowAboutUs(false)} />
        ) : showStore ? (
          <StorePage onClose={() => setShowStore(false)} />
        ) : selectedServiceId ? (
          <ServiceDetailsPage
            serviceId={selectedServiceId}
            onViewProduct={(id) => {
              setSelectedProductId(id);
              setSelectedServiceId(null);
            }}
            onClose={() => setSelectedServiceId(null)}
          />
        ) : selectedProductId ? (
          <ProductDetails
            productId={selectedProductId}
            onClose={() => setSelectedProductId(null)}
            onViewProduct={(id) => setSelectedProductId(id)}
          />
        ) : (
          <>
            {/* 1. CINEMATIC HERO SECTION */}
            <Hero />

            {/* 9. BRANDS SECTION (Moving up slightly for better Apple/Tesla flow right below Hero) */}
            <Brands />

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

            {/* 6. FEATURED PRODUCTS SHOWCASE */}
            <Products />

            {/* 6a. HAION OWNERSHIP ADVANTAGE GRID */}
            <HaionAdvantage />

            {/* 6b. TABBED PRODUCT SHOWCASE (EVs & Appliances) */}
            <ProductsTabs onViewDetails={(id) => setSelectedProductId(id)} />

            {/* 6c. WHY CHOOSE HAION ADVANTAGE */}
            <WhyChooseHaion />

            {/* 7. PROMOTIONAL OFFERS SECTION */}
            <Offers />

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
      <Footer />

      {/* Automated Lead Popup */}
      <LeadPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
}

export default App;
