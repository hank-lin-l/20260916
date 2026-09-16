import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { ManufacturingSection } from './components/ManufacturingSection';
import { QuoteSection } from './components/QuoteSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { PortalModal } from './components/PortalModal';
import { ProductSpec } from './types';

export default function App() {
  const [currentLang, setCurrentLang] = useState<'zh' | 'en'>('zh');
  const [selectedProduct, setSelectedProduct] = useState<ProductSpec | null>(null);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [preselectedCategory, setPreselectedCategory] = useState('');

  const handleOpenQuote = () => {
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireProduct = (categoryId: string) => {
    setPreselectedCategory(categoryId);
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLanguage = () => {
    setCurrentLang((prev) => (prev === 'zh' ? 'en' : 'zh'));
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-sans">
      {/* Fixed Navigation Header */}
      <Header
        currentLang={currentLang}
        onToggleLang={toggleLanguage}
        onOpenQuote={handleOpenQuote}
        onOpenPortal={() => setIsPortalOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenQuote={handleOpenQuote}
          onExploreProducts={handleExploreProducts}
        />

        {/* About Section */}
        <AboutSection currentLang={currentLang} />

        {/* Core Products & Solutions */}
        <ProductsSection
          currentLang={currentLang}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />

        {/* Manufacturing Excellence & QC */}
        <ManufacturingSection currentLang={currentLang} />

        {/* Request a Custom Quote */}
        <QuoteSection
          currentLang={currentLang}
          preselectedCategory={preselectedCategory}
        />
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />

      {/* Product Detailed Technical Specification Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInquireProduct={handleInquireProduct}
      />

      {/* Client Portal & Drawing Tracking Modal */}
      <PortalModal
        isOpen={isPortalOpen}
        onClose={() => setIsPortalOpen(false)}
      />
    </div>
  );
}
