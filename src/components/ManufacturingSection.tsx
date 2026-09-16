import React, { useState } from 'react';
import { Search, Compass, Cpu, CheckCircle2, ChevronRight, Activity, ShieldCheck } from 'lucide-react';
import { PROCESS_PHASES, QC_EQUIPMENT } from '../data/companyData';
import { Equipment } from '../types';

interface ManufacturingSectionProps {
  currentLang: 'zh' | 'en';
}

export const ManufacturingSection: React.FC<ManufacturingSectionProps> = ({ currentLang }) => {
  const [selectedEquip, setSelectedEquip] = useState<Equipment | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Search':
        return <Search className="w-5 h-5 text-sky-400" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#ea580c]" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-[#00e882]" />;
      default:
        return <Activity className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="manufacturing" className="py-20 bg-[#0b0f17] text-white relative overflow-hidden">
      {/* Subtle Grid Accent */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-slate-800">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-[#00e882] uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00e882]" />
              <span>MANUFACTURING EXCELLENCE & QC</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {currentLang === 'zh' ? '先進設備與極致品質管控' : 'Advanced Facilities & Metrology QC'}
            </h2>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              {currentLang === 'zh'
                ? '廠內建置恆溫恆濕精密量測實驗室（20°C ±0.5°C），結合德國蔡司 ZEISS 三次元、克林貝格齒輪量測中心，落實從首件試切、製程巡檢到出廠全檢的 100% 履歷追溯。'
                : 'Equipped with a 20°C ±0.5°C metrology laboratory, ZEISS 3D CMMs, and Klingelnberg gear testing centers, ensuring 100% full-process traceability from first cut to final shipment.'}
            </p>
          </div>

          {/* Right Dual Metric Cards */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Box 1: 20°C ±0.5 */}
            <div className="p-4 rounded-lg bg-[#111827] border border-slate-700/80 text-center min-w-[130px]">
              <div className="text-2xl font-extrabold text-white font-mono">
                20°C ±0.5
              </div>
              <div className="text-xs text-slate-400 mt-1">恆溫恆濕實驗室</div>
            </div>

            {/* Box 2: 0.001mm */}
            <div className="p-4 rounded-lg bg-[#111827] border border-slate-700/80 text-center min-w-[130px]">
              <div className="text-2xl font-extrabold text-[#00e882] font-mono">
                0.001mm
              </div>
              <div className="text-xs text-slate-400 mt-1">最高量測解析度</div>
            </div>
          </div>
        </div>

        {/* Process Workflow Horizontal Strip */}
        <div className="pt-12 pb-14">
          <div className="text-xs font-mono font-bold text-slate-400 tracking-wider uppercase mb-6 flex items-center gap-2">
            <span>PROCESS WORKFLOW // 標準化高精度製程</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS_PHASES.map((phase, index) => (
              <div
                key={index}
                className="relative bg-[#111827] rounded-lg p-5 border border-slate-800 hover:border-slate-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-bold text-[#ea580c] mb-2 tracking-wider">
                    {phase.phase}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <div className="space-y-1">
                    {phase.keyPoints.map((kp, kIdx) => (
                      <div key={kIdx} className="text-[11px] text-slate-400 flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#ea580c]" />
                        <span>{kp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Inspection Equipment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {QC_EQUIPMENT.map((equip) => (
            <div
              key={equip.id}
              onClick={() => setSelectedEquip(equip)}
              className="bg-[#111827] rounded-xl p-6 border border-slate-800/90 hover:border-slate-700 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                  {getIcon(equip.iconName)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-[#ea580c] transition-colors mb-2">
                    {equip.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {equip.description}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">{equip.accuracy}</span>
                <span className="text-[#00e882] group-hover:translate-x-0.5 transition-transform flex items-center">
                  規格詳情 <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Equipment Modal for Deep Technical Specs */}
      {selectedEquip && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedEquip(null)}
        >
          <div
            className="bg-[#111827] border border-slate-700 text-white rounded-xl max-w-lg w-full p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center">
                  {getIcon(selectedEquip.iconName)}
                </div>
                <h3 className="text-lg font-bold">{selectedEquip.name}</h3>
              </div>
              <button
                onClick={() => setSelectedEquip(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedEquip.description}
            </p>

            <div className="bg-slate-900/90 rounded-lg p-4 space-y-2 border border-slate-800 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">標準檢驗精度 (MPE):</span>
                <span className="text-[#00e882] font-semibold">{selectedEquip.accuracy}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">核心檢測能力:</span>
                <span className="text-white">{selectedEquip.capability}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">檢驗報告格式:</span>
                <span className="text-white">PDF / CSV / VDI/VDE 2612 齒輪專用圖形</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedEquip(null)}
                className="px-4 py-2 text-xs font-semibold bg-[#ea580c] hover:bg-[#d44f08] text-white rounded"
              >
                關閉視窗
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
