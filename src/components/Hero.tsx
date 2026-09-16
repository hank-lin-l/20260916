import React, { useState } from 'react';
import { ArrowRight, Settings, CheckCircle2, Microscope, Award, ShieldCheck, Activity } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenQuote: () => void;
  onExploreProducts: () => void;
  currentLang: 'zh' | 'en';
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuote,
  onExploreProducts,
  currentLang,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeAxis, setActiveAxis] = useState('CNC_AXIS_05');

  return (
    <section
      id="hero"
      className="relative pt-[72px] bg-[#0b0f17] text-white overflow-hidden border-b border-slate-800"
    >
      {/* Background Technical Grid and Ambient Glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ea580c]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-14 lg:pt-16 lg:pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#111827] border border-slate-700/80 text-xs font-mono w-fit shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e882] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00e882]" />
              </span>
              <span className="text-slate-300 font-semibold tracking-wider uppercase">
                TAIWAN PRECISION GEAR MANUFACTURER
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-400 font-normal">
                {currentLang === 'zh' ? '台灣高精度齒輪領航者' : 'Pioneering Mastercraft'}
              </span>
            </div>

            {/* Massive Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.15] text-white">
              {currentLang === 'zh' ? (
                <>
                  驅動工業核心
                  <br />
                  <span className="text-white">精密齒輪與傳動系統</span>{' '}
                  <span className="text-white inline-block">製造專家</span>
                </>
              ) : (
                <>
                  Powering Industrial Cores
                  <br />
                  <span className="text-white">Mastering Precision Gears</span>{' '}
                  <span className="text-white inline-block">& Drive Systems</span>
                </>
              )}
            </h1>

            {/* Explanatory Technical Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {currentLang === 'zh'
                ? '國友工業專注提供客製化高精度齒輪與精密減速機傳動總成，以德國與瑞士極限研磨工藝，為全球高階工具機、半導體與智能自動化設備注入穩定動能。'
                : 'Kuo Yu specializes in bespoke high-precision gears and advanced planetary reducers. Powered by Swiss and German grinding mastercraft, delivering rock-solid kinetics for global CNC tools, semiconductors, and automation robotics.'}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                id="hero-rfq-cta-btn"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-[#ea580c] hover:bg-[#d44f08] active:scale-[0.98] transition-all rounded shadow-lg shadow-orange-950/30 cursor-pointer"
              >
                <span>{currentLang === 'zh' ? '索取客製化報價' : 'Request Custom RFQ'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                id="hero-explore-products-btn"
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-base font-semibold text-slate-200 bg-[#151d2d] hover:bg-[#1f2b40] hover:text-white border border-slate-700/80 rounded transition-all cursor-pointer"
              >
                <span>{currentLang === 'zh' ? '探索產品系列' : 'Explore Products'}</span>
                <Settings className="w-4 h-4 text-[#ea580c]" />
              </button>
            </div>

            {/* Trust Certification Badges */}
            <div className="pt-3 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#00e882]" />
                <span className="font-medium text-slate-300">ISO 9001:2015 國際認證</span>
              </div>
              <div className="flex items-center gap-2">
                <Microscope className="w-4 h-4 text-[#38bdf8]" />
                <span className="font-medium text-slate-300">微米級檢測實驗室</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Machine Graphic with HUD Overlays */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative rounded-lg overflow-hidden border border-slate-700/80 bg-[#111726] shadow-2xl group cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Machine Chamber Photo with Realistic Industrial Visual */}
              <div className="relative h-[340px] sm:h-[390px] w-full overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                  alt="Precision CNC Tooth Profile Grinding Center"
                  className="w-full h-full object-cover object-center filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/30 to-transparent" />
              </div>

              {/* Top High-Tech Telemetry HUD */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-slate-700/80 font-mono text-[11px] text-[#00e882]">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>[{activeAxis} // ACTIVE]</span>
                </div>
                <div className="px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-slate-700/80 font-mono text-[11px] text-slate-300">
                  TOLERANCE: <span className="text-[#00e882] font-semibold">±0.002mm</span>
                </div>
              </div>

              {/* Machine Coordinates Crosshairs Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity">
                <div className="w-16 h-16 border border-dashed border-[#ea580c] rounded-full flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-[#00e882] rounded-full" />
                </div>
              </div>

              {/* Bottom Card Bar: Core Capability DIN 4-6 */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded bg-black/85 backdrop-blur-md border border-slate-700 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-mono font-semibold">
                    CORE CAPABILITY
                  </div>
                  <div className="text-base font-bold text-white flex items-center gap-1.5">
                    DIN 4-6 精密齒研技術
                  </div>
                </div>
                <div className="w-9 h-9 rounded bg-[#ea580c] text-white flex items-center justify-center shadow">
                  <Settings className="w-5 h-5 animate-[spin_10s_linear_infinite]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Metrics Strip (4 Columns Dark Container) */}
        <div className="mt-14 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {/* Metric 1: Accuracy Grade */}
            <div className="pt-4 sm:pt-0 sm:px-4 first:pl-0 flex flex-col">
              <span className="text-[11px] font-bold text-slate-400 font-mono tracking-wider uppercase">
                ACCURACY GRADE
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  DIN 4
                </span>
                <span className="text-xs text-slate-400 font-mono">/ AGMA 13</span>
              </div>
              <span className="text-xs text-slate-400 mt-1">超精密齒研研磨等級</span>
            </div>

            {/* Metric 2: Experience */}
            <div className="pt-4 sm:pt-0 sm:px-4 flex flex-col">
              <span className="text-[11px] font-bold text-slate-400 font-mono tracking-wider uppercase">
                EXPERIENCE
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  40+
                </span>
                <span className="text-xs text-slate-400 font-mono uppercase">YEARS</span>
              </div>
              <span className="text-xs text-slate-400 mt-1">深厚精密製造淬鍊</span>
            </div>

            {/* Metric 3: Pass Rate */}
            <div className="pt-4 sm:pt-0 sm:px-4 flex flex-col">
              <span className="text-[11px] font-bold text-slate-400 font-mono tracking-wider uppercase">
                PASS RATE
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-[#00e882] tracking-tight">
                  &gt;99.8%
                </span>
              </div>
              <span className="text-xs text-slate-400 mt-1">出廠首件全檢直通率</span>
            </div>

            {/* Metric 4: Global Footprint */}
            <div className="pt-4 sm:pt-0 sm:px-4 flex flex-col">
              <span className="text-[11px] font-bold text-slate-400 font-mono tracking-wider uppercase">
                GLOBAL FOOTPRINT
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  35+
                </span>
                <span className="text-xs text-slate-400 font-mono uppercase">COUNTRIES</span>
              </div>
              <span className="text-xs text-slate-400 mt-1">全球歐美日高階夥伴</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
