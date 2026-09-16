import React from 'react';
import { X, CheckCircle, ArrowRight, Download, ShieldCheck, Cpu } from 'lucide-react';
import { ProductSpec } from '../types';

interface ProductModalProps {
  product: ProductSpec | null;
  onClose: () => void;
  onInquireProduct: (category: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onInquireProduct,
}) => {
  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8 text-[#0b1c30]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="relative h-44 bg-slate-900 overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on image */}
          <div className="absolute bottom-4 left-6 right-6">
            <span className="inline-block px-2.5 py-0.5 rounded bg-[#ea580c] text-white text-[11px] font-mono font-bold uppercase mb-1">
              {product.category}
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              {product.title}
            </h2>
          </div>
        </div>

        {/* Detailed Specs Body */}
        <div className="p-6 space-y-5">
          <p className="text-sm text-slate-600 leading-relaxed">
            {product.description}
          </p>

          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/90 space-y-3 font-mono text-xs">
            <div className="text-xs font-bold text-[#0b1c30] tracking-wider uppercase font-sans border-b border-slate-200 pb-2 flex items-center justify-between">
              <span>工程製造規範參數 (MANUFACTURING SPECIFICATIONS)</span>
              <span className="text-[#ea580c]">{product.badge}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <span className="text-slate-400 block text-[11px]">模數與規格範圍：</span>
                <span className="font-semibold text-slate-800">{product.detailedSpecs.moduleRange}</span>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px]">齒輪研磨精度等級：</span>
                <span className="font-semibold text-[#00b060]">{product.detailedSpecs.precisionGrade}</span>
              </div>

              <div>
                <span className="text-slate-400 block text-[11px]">表面硬化與熱處理：</span>
                <span className="font-semibold text-slate-800">{product.detailedSpecs.surfaceHardness}</span>
              </div>

              {product.detailedSpecs.backlash && (
                <div>
                  <span className="text-slate-400 block text-[11px]">傳動齒隙 (Backlash)：</span>
                  <span className="font-semibold text-slate-800">{product.detailedSpecs.backlash}</span>
                </div>
              )}

              {product.detailedSpecs.ratioRange && (
                <div>
                  <span className="text-slate-400 block text-[11px]">減速比範圍 (Ratio)：</span>
                  <span className="font-semibold text-slate-800">{product.detailedSpecs.ratioRange}</span>
                </div>
              )}

              {product.detailedSpecs.efficiency && (
                <div>
                  <span className="text-slate-400 block text-[11px]">傳動效率：</span>
                  <span className="font-semibold text-slate-800">{product.detailedSpecs.efficiency}</span>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-slate-200">
              <span className="text-slate-400 block text-[11px]">建議選用材質：</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {product.detailedSpecs.materials.map((m, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-white border border-slate-300 text-[11px] text-slate-700"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <span className="text-slate-400 block text-[11px]">客製化修形能力：</span>
              <span className="text-slate-700 text-[11px] block mt-0.5 font-sans">
                {product.detailedSpecs.customCapability}
              </span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-sans">
              <ShieldCheck className="w-4 h-4 text-[#00b060]" />
              <span>支援提供蔡司 CMM 齒面量測檢驗報告</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg"
              >
                關閉
              </button>

              <button
                onClick={() => {
                  onInquireProduct(product.id);
                  onClose();
                }}
                className="px-5 py-2 text-xs font-bold text-white bg-[#ea580c] hover:bg-[#d44f08] rounded-lg flex items-center justify-center gap-1.5 shadow cursor-pointer"
              >
                <span>以此規格立即詢價</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
