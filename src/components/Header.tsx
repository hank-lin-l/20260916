import React, { useState, useEffect } from 'react';
import { Phone, Globe, User, Menu, X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeaderProps {
  onOpenQuote: () => void;
  onOpenPortal: () => void;
  currentLang: 'zh' | 'en';
  onToggleLang: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuote,
  onOpenPortal,
  currentLang,
  onToggleLang,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'products', 'manufacturing', 'quote'];
      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: currentLang === 'zh' ? '首頁' : 'Home' },
    { id: 'about', label: currentLang === 'zh' ? '關於我們' : 'About Us' },
    { id: 'products', label: currentLang === 'zh' ? '核心產品' : 'Core Products' },
    { id: 'manufacturing', label: currentLang === 'zh' ? '製造工藝與品質' : 'Manufacturing & Quality' },
    { id: 'quote', label: currentLang === 'zh' ? '聯絡與報價' : 'Contact & RFQ' },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#ffffff]/95 backdrop-blur-md shadow-sm border-b border-slate-200'
          : 'bg-[#ffffff] border-b border-slate-200'
      }`}
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Brand Logo */}
          <button
            id="brand-logo-btn"
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group text-left cursor-pointer transition-transform duration-200 hover:opacity-95"
            aria-label="國友工業股份有限公司"
          >
            {/* Custom Precision Gear Icon Badge */}
            <div className="relative w-10 h-10 rounded-full bg-[#0b0f17] flex items-center justify-center p-2 shadow-sm border border-slate-800">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6 text-[#ea580c] transition-transform duration-500 group-hover:rotate-45"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.4 15A1.65 1.65 0 0 0 20 16.3A1.85 1.85 0 0 1 18.3 18A1.65 1.65 0 0 0 17 18.6A1.65 1.65 0 0 0 16.4 20A1.85 1.85 0 0 1 14.7 21.7A1.65 1.65 0 0 0 13.4 21.1A1.65 1.65 0 0 0 12 21.1A1.65 1.65 0 0 0 10.6 21.1A1.85 1.85 0 0 1 8.9 19.4A1.65 1.65 0 0 0 7.6 18.8A1.65 1.65 0 0 0 6.2 18.8A1.85 1.85 0 0 1 4.5 17.1A1.65 1.65 0 0 0 3.9 15.8A1.65 1.65 0 0 0 3.9 14.4A1.85 1.85 0 0 1 5.6 12.7A1.65 1.65 0 0 0 6.2 11.4A1.65 1.65 0 0 0 6.2 10A1.85 1.85 0 0 1 7.9 8.3A1.65 1.65 0 0 0 9.2 7.7A1.65 1.65 0 0 0 10.6 6.3A1.85 1.85 0 0 1 12.3 4.6A1.65 1.65 0 0 0 13.6 5.2A1.65 1.65 0 0 0 15 5.2A1.65 1.65 0 0 0 16.4 5.2A1.85 1.85 0 0 1 18.1 6.9A1.65 1.65 0 0 0 19.4 7.5A1.65 1.65 0 0 0 20.8 7.5A1.85 1.85 0 0 1 22.5 9.2A1.65 1.65 0 0 0 23.1 10.5A1.65 1.65 0 0 0 23.1 11.9A1.85 1.85 0 0 1 21.4 13.6A1.65 1.65 0 0 0 20.8 14.9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Title text */}
            <div className="flex flex-col">
              <span className="text-[17px] font-bold tracking-tight text-[#0b1c30] leading-snug">
                KUO YU
              </span>
              <span className="text-[11px] font-medium text-slate-500 tracking-wider">
                國友工業股份有限公司
              </span>
            </div>
          </button>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-1.5 text-sm font-medium transition-all duration-200 cursor-pointer relative ${
                    isActive
                      ? 'text-[#ea580c] font-semibold'
                      : 'text-slate-700 hover:text-[#ea580c]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#ea580c] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Items */}
          <div className="hidden sm:flex items-center gap-4 xl:gap-6">
            {/* Service Hotline */}
            <div className="hidden xl:flex flex-col text-right">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 font-mono">
                SERVICE HOTLINE
              </span>
              <a
                href={`tel:${COMPANY_INFO.hotline}`}
                className="text-[13px] font-bold text-[#0b1c30] hover:text-[#ea580c] transition-colors font-mono"
              >
                {COMPANY_INFO.hotline}
              </a>
            </div>

            {/* Language Switcher */}
            <button
              id="lang-toggle-btn"
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-slate-600 hover:text-[#ea580c] rounded border border-slate-200 hover:border-slate-300 transition-colors"
              title="切換語言 / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <span>{currentLang === 'zh' ? '繁中 / EN' : 'EN / 繁中'}</span>
            </button>

            {/* Request Quote Button (Orange) */}
            <button
              id="header-quote-btn"
              onClick={onOpenQuote}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-[#ea580c] hover:bg-[#d44f08] active:scale-[0.98] transition-all rounded shadow-sm hover:shadow"
            >
              <span>{currentLang === 'zh' ? '索取報價' : 'Request RFQ'}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* User Account / Portal Icon Button */}
            <button
              id="header-portal-btn"
              onClick={onOpenPortal}
              className="w-9 h-9 rounded-full bg-[#0b0f17] text-white flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer border border-slate-700"
              title="客戶圖面與專案查詢中心"
              aria-label="客戶查詢"
            >
              <User className="w-4 h-4 text-slate-200" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              id="mobile-quote-btn"
              onClick={onOpenQuote}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#ea580c] rounded"
            >
              報價
            </button>
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-black rounded"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 text-base font-medium rounded ${
                  activeSection === item.id
                    ? 'text-[#ea580c] bg-orange-50 font-bold'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-2 text-sm font-medium text-slate-600"
            >
              <Globe className="w-4 h-4 text-slate-500" />
              <span>{currentLang === 'zh' ? '語言: 繁體中文' : 'Language: English'}</span>
            </button>
            <button
              onClick={onOpenPortal}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-[#ea580c]"
            >
              <User className="w-4 h-4" />
              <span>客戶中心</span>
            </button>
          </div>

          <div className="pt-2 text-xs text-slate-500 flex items-center gap-1.5 font-mono">
            <Phone className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>諮詢專線: {COMPANY_INFO.hotline}</span>
          </div>
        </div>
      )}
    </header>
  );
};
