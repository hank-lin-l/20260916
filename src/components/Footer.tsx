import React from 'react';
import { MapPin, Phone, Printer, Mail, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  currentLang: 'zh' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ currentLang }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#0b0f17] text-white border-t border-slate-800">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Certification (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center p-1.5 border border-slate-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-[#ea580c]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M19.4 15A1.65 1.65 0 0 0 20 16.3A1.85 1.85 0 0 1 18.3 18A1.65 1.65 0 0 0 17 18.6A1.65 1.65 0 0 0 16.4 20A1.85 1.85 0 0 1 14.7 21.7A1.65 1.65 0 0 0 13.4 21.1A1.65 1.65 0 0 0 12 21.1A1.65 1.65 0 0 0 10.6 21.1A1.85 1.85 0 0 1 8.9 19.4A1.65 1.65 0 0 0 7.6 18.8A1.65 1.65 0 0 0 6.2 18.8A1.85 1.85 0 0 1 4.5 17.1A1.65 1.65 0 0 0 3.9 15.8A1.65 1.65 0 0 0 3.9 14.4A1.85 1.85 0 0 1 5.6 12.7A1.65 1.65 0 0 0 6.2 11.4A1.65 1.65 0 0 0 6.2 10A1.85 1.85 0 0 1 7.9 8.3A1.65 1.65 0 0 0 9.2 7.7A1.65 1.65 0 0 0 10.6 6.3A1.85 1.85 0 0 1 12.3 4.6A1.65 1.65 0 0 0 13.6 5.2A1.65 1.65 0 0 0 15 5.2A1.65 1.65 0 0 0 16.4 5.2A1.85 1.85 0 0 1 18.1 6.9A1.65 1.65 0 0 0 19.4 7.5A1.65 1.65 0 0 0 20.8 7.5A1.85 1.85 0 0 1 22.5 9.2A1.65 1.65 0 0 0 23.1 10.5A1.65 1.65 0 0 0 23.1 11.9A1.85 1.85 0 0 1 21.4 13.6A1.65 1.65 0 0 0 20.8 14.9"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div>
                <div className="font-bold text-base text-white">KUO YU</div>
                <div className="text-[11px] text-slate-400">國友工業股份有限公司</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              卓越精密加工與高階機械設備解決方案供應商。自創立以來秉持品質至上、創新求精的匠構精神，服務全球高科技與工業客戶。
            </p>

            {/* Certification pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#162032] border border-slate-700 text-xs font-mono text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#00e882]" />
              <span>ISO 9001:2015 CERTIFIED</span>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-mono text-xs font-bold text-slate-300 tracking-wider uppercase">
              NAVIGATE // 導覽
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => scrollTo('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  首頁
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  關於我們
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  核心產品
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('manufacturing')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  製造工藝與品質
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('quote')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  聯絡與報價
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono text-xs font-bold text-slate-300 tracking-wider uppercase">
              SOLUTIONS // 產品解決方案
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="hover:text-slate-200 transition-colors cursor-default">
                五軸立臥複合加工中心
              </li>
              <li className="hover:text-slate-200 transition-colors cursor-default">
                高剛性航太級精密零件
              </li>
              <li className="hover:text-slate-200 transition-colors cursor-default">
                半導體製程治工具
              </li>
              <li className="hover:text-slate-200 transition-colors cursor-default">
                客製化智能自動化單元
              </li>
              <li className="hover:text-slate-200 transition-colors cursor-default">
                三次元微米級量測技術
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Live indicator (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-mono text-xs font-bold text-slate-300 tracking-wider uppercase">
              HEADQUARTERS // 聯絡資訊
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#ea580c] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Phone className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                <span>TEL: {COMPANY_INFO.hotline}</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Printer className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>FAX: {COMPANY_INFO.fax}</span>
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>EMAIL: {COMPANY_INFO.serviceEmail}</span>
              </div>
            </div>

            {/* Live Operational Status Indicator */}
            <div className="pt-3">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/60 border border-slate-800 text-[11px] font-mono text-slate-300">
                <span className="w-2 h-2 rounded-full bg-[#00e882] animate-pulse" />
                <span>[SYS.ONLINE] 工廠運轉中</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2025 國友工業股份有限公司 Kuo Yu Machinery Co., Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">隱私權條款</span>
            <span>|</span>
            <span className="hover:text-slate-400 cursor-pointer">智財聲明</span>
            <span>|</span>
            <span className="hover:text-slate-400 cursor-pointer">品質管理承諾</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
