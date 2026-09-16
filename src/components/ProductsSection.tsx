import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../data/companyData';
import { ProductSpec } from '../types';

interface ProductsSectionProps {
  onSelectProduct: (product: ProductSpec) => void;
  currentLang: 'zh' | 'en';
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onSelectProduct,
  currentLang,
}) => {
  return (
    <section id="products" className="py-20 bg-[#f4f7fc] text-[#0b1c30] border-t border-slate-200">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-wider text-[#ea580c] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#ea580c]" />
            <span>CORE PRODUCTS & SOLUTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b1c30]">
            {currentLang === 'zh' ? '精密傳動產品系列' : 'Precision Transmission Series'}
          </h2>

          <p className="text-base text-slate-600">
            {currentLang === 'zh'
              ? '嚴選合金鋼材、高頻淬火滲碳深層熱處理與微米級齒面研磨，完美契合極限負載與嚴苛工況環境。'
              : 'Forged with selected alloy steels, deep vacuum carburizing, and sub-micron grinding to endure extreme mechanical stress.'}
          </p>
        </div>

        {/* 4-Column Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              id={`product-card-${product.id}`}
              className="group bg-white rounded-xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Image Box with Corner Badge */}
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to high quality industrial gear image if needed
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#0b0f17]/90 text-white font-mono text-[11px] font-semibold border border-slate-700 shadow-sm">
                    {product.badge}
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-5">
                  <div className="font-mono text-[11px] font-bold text-[#ea580c] tracking-wider uppercase mb-1">
                    {product.category}
                  </div>

                  <h3 className="text-lg font-bold text-[#0b1c30] mb-2">
                    {product.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {product.description}
                  </p>

                  {/* Specification Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {product.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-2 py-1 rounded text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="p-5 pt-0">
                <button
                  id={`btn-spec-${product.id}`}
                  onClick={() => onSelectProduct(product)}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-bold text-slate-700 bg-[#eaf1ff] hover:bg-[#d9e7ff] hover:text-[#0b1c30] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>{currentLang === 'zh' ? '檢視客製規格' : 'View Specifications'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
