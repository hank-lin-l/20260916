import React from 'react';
import { Cog, Wrench, ShieldCheck, Award, Layers, Cpu, CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  currentLang: 'zh' | 'en';
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  return (
    <section id="about" className="py-20 bg-[#f8f9ff] text-[#0b1c30]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Right Process Badge */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 pb-12">
          <div className="max-w-3xl space-y-4">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#ea580c] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#ea580c]" />
              <span>ABOUT KUO YU PRECISION</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b1c30]">
              {currentLang === 'zh'
                ? '專注精準，傳動未來 —— 淬鍊極致機械工藝'
                : 'Dedicated to Precision, Driving the Future — Refined Mechanical Mastercraft'}
            </h2>

            {/* Body Description */}
            <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed">
              {currentLang === 'zh'
                ? '國友工業股份有限公司深耕精密傳動領域數十年，以卓越研發技術、頂級歐洲進口齒輪研磨設備與全流程恆溫恆濕三次元檢驗體系，致力為全球機械設備大廠提供具備極高可靠度、低傳動背隙、極致靜音特性的傳動零部件與減速機解決方案。'
                : 'Kuo Yu Machinery has honed precision motion transmission for decades. Powered by top European CNC grinding centers and a 20°C temperature-controlled CMM laboratory, we empower global manufacturers with ultra-reliable, zero-backlash, and whisper-silent gear transmission assemblies.'}
            </p>
          </div>

          {/* Right Top Badge: One-Stop Full Process */}
          <div className="self-start lg:self-center flex items-center gap-3.5 px-5 py-3.5 rounded-lg bg-[#eaf1ff] border border-blue-200/80 shadow-sm shrink-0">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
              <Award className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#0b1c30] tracking-wide">
                一站式全製程
              </span>
              <span className="text-xs text-slate-600 font-medium">
                設計 · 齒研 · 熱處理 · 檢驗
              </span>
            </div>
          </div>
        </div>

        {/* 3 Core Capability Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: 01 // CRAFT 精密加工工藝 */}
          <div
            id="about-card-craft"
            className="group relative bg-white rounded-xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6">
                <div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-200/60 text-[#ea580c] flex items-center justify-center">
                  <Cog className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
                </div>
                <span className="font-mono text-xs font-bold text-slate-400 tracking-wider">
                  01 // CRAFT
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0b1c30] mb-3">
                精密加工工藝
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                引進德國 Klingelnberg 與瑞士 Reishauer 高精密數位控磨齒機，達成 DIN 4-6 級超高齒形齒向精度。極致平滑齒面接觸率大幅降低齒輪嚙合噪音，顯著延長機械運轉壽命。
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400 font-medium tracking-wide">TOOTH ACCURACY</span>
              <span className="text-[#ea580c] font-bold">DIN 4 - 6 GRADE</span>
            </div>
          </div>

          {/* Card 2: 02 // R&D 客製化研發試作 */}
          <div
            id="about-card-rd"
            className="group relative bg-white rounded-xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6">
                <div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-200/60 text-[#ea580c] flex items-center justify-center">
                  <Wrench className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="font-mono text-xs font-bold text-slate-400 tracking-wider">
                  02 // R&D
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0b1c30] mb-3">
                客製化研發試作
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                資深機械傳動工程團隊擁有30年以上齒形修整與修形設計經驗。針對特殊減速比、高扭矩微型化及機器人關節嚴苛空間限制，提供迅速打樣、模組化計算及專案驗證服務。
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400 font-medium tracking-wide">PROTOTYPING TIME</span>
              <span className="text-[#ea580c] font-bold">RAPID 14-DAY SAMPLING</span>
            </div>
          </div>

          {/* Card 3: 03 // QUALITY 國際品質全檢體系 */}
          <div
            id="about-card-quality"
            className="group relative bg-white rounded-xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-6">
                <div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-200/60 text-[#ea580c] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="font-mono text-xs font-bold text-slate-400 tracking-wider">
                  03 // QUALITY
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0b1c30] mb-3">
                國際品質全檢體系
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                全面落實 ISO 9001:2015 與嚴苛航太級品保流程。每批齒輪出廠皆通過德國蔡司 (ZEISS) 三次元與齒輪量測中心全齒面嚙合分析，檢附完整光譜材質證明與精度度量報告。
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between font-mono text-xs">
              <span className="text-slate-400 font-medium tracking-wide">CERTIFICATION</span>
              <span className="text-[#00b060] font-bold">ISO 9001 COMPLIANT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
