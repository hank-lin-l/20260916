import React, { useState } from 'react';
import { X, Search, FileCheck, Clock, ShieldCheck, Download, AlertCircle } from 'lucide-react';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortalModal: React.FC<PortalModalProps> = ({ isOpen, onClose }) => {
  const [queryCode, setQueryCode] = useState('RFQ-2025-KY8942');
  const [searched, setSearched] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 text-[#0b1c30] space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <span className="font-mono text-[10px] font-bold text-[#ea580c] uppercase tracking-wider">
              CLIENT ACCESS // 客戶專區
            </span>
            <h3 className="text-lg font-bold text-[#0b1c30]">
              工程圖面與詢價單進度查詢
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          <label className="block text-xs font-bold text-slate-700">
            請輸入詢價追蹤編號 (RFQ ID) 或客戶圖號
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={queryCode}
              onChange={(e) => setQueryCode(e.target.value)}
              placeholder="例：RFQ-2025-KY8942"
              className="flex-1 px-3 py-2 text-xs font-mono rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#ea580c]"
            />
            <button
              onClick={() => setSearched(true)}
              className="px-4 py-2 text-xs font-bold text-white bg-[#0b0f17] hover:bg-slate-800 rounded-lg flex items-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5" />
              <span>查詢</span>
            </button>
          </div>
        </div>

        {/* Search Result Showcase */}
        {searched && (
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <span className="font-bold text-slate-800">{queryCode}</span>
              <span className="px-2 py-0.5 rounded bg-green-100 text-[#00b060] font-bold text-[10px]">
                工程師已審圖完畢
              </span>
            </div>

            <div className="space-y-1.5 text-[11px] text-slate-600">
              <div className="flex justify-between">
                <span>圖面品項：</span>
                <span className="text-slate-900 font-semibold">M2.5 45齒 滲碳精密斜齒輪</span>
              </div>
              <div className="flex justify-between">
                <span>精度指定：</span>
                <span className="text-[#ea580c] font-semibold">DIN 5 級 (齒形修整)</span>
              </div>
              <div className="flex justify-between">
                <span>預估試作工期：</span>
                <span className="text-slate-900 font-semibold">12 工作天</span>
              </div>
              <div className="flex justify-between">
                <span>三次元檢測認證：</span>
                <span className="text-[#00b060] font-semibold">蔡司 CMM 齒面全檢已核可</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
              <span className="text-slate-400 text-[10px]">專案專員：林工程師 (分機 206)</span>
              <button
                onClick={() => alert('報價單 PDF 已生成，請查看您的專屬信箱。')}
                className="text-[#ea580c] hover:underline flex items-center gap-1 text-[11px] font-bold"
              >
                <Download className="w-3 h-3" />
                下載正式工程報價書
              </button>
            </div>
          </div>
        )}

        <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-[#00b060] shrink-0" />
          <span>全系統採用 AES-256 專利圖面加密，恪守商業 NDA 保密條款。</span>
        </div>
      </div>
    </div>
  );
};
