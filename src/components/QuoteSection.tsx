import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, ShieldCheck, UploadCloud, Check, FileText, Trash2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface QuoteSectionProps {
  currentLang: 'zh' | 'en';
  preselectedCategory?: string;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({
  currentLang,
  preselectedCategory = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: preselectedCategory || '',
    notes: '',
  });

  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRfq, setSubmittedRfq] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable network request
    setTimeout(() => {
      setIsSubmitting(false);
      const rfqId = `RFQ-2025-KY${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRfq(rfqId);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        category: '',
        notes: '',
      });
      setFiles([]);
    }, 900);
  };

  return (
    <section id="quote" className="py-20 bg-white text-[#0b1c30]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-wider text-[#ea580c] uppercase">
            <span className="w-2 h-2 rounded-full bg-[#ea580c]" />
            <span>REQUEST A CUSTOM QUOTE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0b1c30]">
            {currentLang === 'zh' ? '立即諮詢客製化報價' : 'Request a Custom Quotation'}
          </h2>

          <p className="text-base text-slate-600">
            {currentLang === 'zh'
              ? '請填寫您的工程需求或上傳設計圖面，國友傳動工程專案團隊將於 24 小時內為您提供專業評估與精準報價。'
              : 'Submit your mechanical requirements or upload 2D/3D blueprints. Our engineering team responds within 24 hours.'}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Engineering Support + Map Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Support Info Card */}
            <div className="bg-[#f3f7fe] rounded-xl p-7 border border-blue-100/90 shadow-sm space-y-6">
              <div>
                <div className="font-mono text-xs font-bold text-[#ea580c] tracking-wider uppercase mb-1">
                  DIRECT ENGINEERING SUPPORT
                </div>
                <h3 className="text-xl font-bold text-[#0b1c30]">
                  業務與技術諮詢中心
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  針對海內外客製案件，我們提供資深傳動工程師專人一對一諮詢服務。
                </p>
              </div>

              {/* Contact List */}
              <div className="space-y-4 pt-2">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-[#ea580c] flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold text-slate-400 uppercase">
                      諮詢專線 (DIRECT LINE)
                    </div>
                    <a
                      href={`tel:${COMPANY_INFO.hotline}`}
                      className="text-base font-bold text-[#0b1c30] hover:text-[#ea580c] transition-colors font-mono"
                    >
                      {COMPANY_INFO.hotline}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-[#ea580c] flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold text-slate-400 uppercase">
                      報價專用信箱 (RFQ EMAIL)
                    </div>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-sm font-bold text-[#0b1c30] hover:text-[#ea580c] transition-colors font-mono"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-[#ea580c] flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold text-slate-400 uppercase">
                      工廠總部地址
                    </div>
                    <div className="text-sm font-medium text-slate-800 leading-snug">
                      {COMPANY_INFO.address}
                    </div>
                  </div>
                </div>
              </div>

              {/* Security NDA Box */}
              <div className="pt-4 border-t border-blue-200/60 flex items-center gap-3 text-xs text-slate-700">
                <ShieldCheck className="w-5 h-5 text-[#00b060] shrink-0" />
                <span>嚴格遵守保密協議 (NDA) 簽署保護您的核心圖面智財。</span>
              </div>
            </div>

            {/* Industrial Hub Map Visual Card */}
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 relative h-[210px]">
              {/* Stylized Vector Map representation of Taichung Precision Machinery Zone */}
              <svg
                viewBox="0 0 500 240"
                className="w-full h-full object-cover"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="500" height="240" fill="#e2e8f0" />
                {/* Highway / Industrial district grid */}
                <path
                  d="M0,40 Q150,60 300,30 T500,70"
                  stroke="#cbd5e1"
                  strokeWidth="14"
                  fill="none"
                />
                <path
                  d="M40,0 L180,240"
                  stroke="#cbd5e1"
                  strokeWidth="10"
                  fill="none"
                />
                <path
                  d="M320,0 L260,240"
                  stroke="#cbd5e1"
                  strokeWidth="12"
                  fill="none"
                />
                <path
                  d="M0,160 L500,120"
                  stroke="#cbd5e1"
                  strokeWidth="8"
                  fill="none"
                />

                {/* Industrial Zones */}
                <rect x="80" y="80" width="160" height="90" rx="6" fill="#cbd5e1" opacity="0.6" />
                <rect x="270" y="70" width="150" height="100" rx="6" fill="#cbd5e1" opacity="0.6" />

                {/* Labels */}
                <text x="100" y="65" fill="#64748b" fontSize="10" fontFamily="sans-serif">
                  Xitun District 西屯區
                </text>
                <text x="320" y="195" fill="#64748b" fontSize="10" fontFamily="sans-serif">
                  East District 東區
                </text>
                <text x="120" y="215" fill="#64748b" fontSize="10" fontFamily="sans-serif">
                  Nantun District 南屯區
                </text>
              </svg>

              {/* Marker Tag */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0b0f17] text-white px-3.5 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-2 shadow-lg border border-slate-700">
                <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-ping" />
                <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>TAICHUNG INDUSTRIAL PRECISION HUB</span>
              </div>
            </div>
          </div>

          {/* Right Column: Online RFQ Form */}
          <div className="lg:col-span-7 bg-white rounded-xl p-8 border border-slate-200/90 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <h3 className="text-xl font-bold text-[#0b1c30]">
                線上詢價與圖面傳遞
              </h3>
              <span className="px-2.5 py-1 rounded bg-amber-50 text-[#ea580c] font-mono text-xs font-bold border border-amber-200">
                24H FAST RESPONSE
              </span>
            </div>

            <form onSubmit={handleSubmit} className="pt-6 space-y-5">
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    聯絡人姓名 <span className="text-[#ea580c]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="例：陳經理"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/30 focus:border-[#ea580c] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    公司名稱 <span className="text-[#ea580c]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="例：創精自動化股份有限公司"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/30 focus:border-[#ea580c] transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    電子郵件 <span className="text-[#ea580c]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/30 focus:border-[#ea580c] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    聯絡電話 <span className="text-[#ea580c]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="例：+886-912-345-678"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/30 focus:border-[#ea580c] transition-all"
                  />
                </div>
              </div>

              {/* Product Category Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  需求產品類別 <span className="text-[#ea580c]">*</span>
                </label>
                <select
                  required
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/30 focus:border-[#ea580c] bg-white transition-all"
                >
                  <option value="">請選擇產品類別</option>
                  <option value="precision-gears">精密正齒輪 / 斜齒輪 (Spur & Helical Gears)</option>
                  <option value="planetary-reducers">行星減速機 / 工業減速機 (Planetary Reducers)</option>
                  <option value="bevel-worm">傘齒輪與蝸輪蝸桿 (Bevel & Worm Gears)</option>
                  <option value="custom-gearbox">客製傳動箱與專案零組件 (Custom Gearbox / OEM)</option>
                  <option value="grinding-service">高精密齒輪代工研磨 (CNC Profile Grinding)</option>
                </select>
              </div>

              {/* Technical Specifications Textarea */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  規格描述與數量需求 (模數、齒數、材質、硬度要求、預估批量)
                </label>
                <textarea
                  rows={3}
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="例如：M2 30齒 斜齒輪，材質 SCM415 滲碳淬火 HRC 58-62，首批試作 50 件，量產預估 500 件/月..."
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#ea580c]/30 focus:border-[#ea580c] transition-all resize-none"
                />
              </div>

              {/* File Upload Drag & Drop Zone */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    上傳 2D / 3D 設計圖面 (支援 STEP, IGS, DXF, DWG, PDF，上限 50MB)
                  </label>
                  <span className="text-[11px] text-slate-400">已上傳 {files.length} 個檔案</span>
                </div>

                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragging(true);
                  }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleFileDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
                    isDragging
                      ? 'border-[#ea580c] bg-orange-50/50'
                      : 'border-slate-300 hover:border-[#ea580c] hover:bg-slate-50/50'
                  }`}
                >
                  <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={handleFileInput}
                    className="hidden"
                    accept=".step,.stp,.igs,.iges,.dxf,.dwg,.pdf,.zip,.rar"
                  />
                  <div className="w-10 h-10 rounded-full bg-orange-100 text-[#ea580c] flex items-center justify-center mx-auto mb-2">
                    <UploadCloud className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-bold text-slate-700">
                    點擊或拖曳工程圖面至此處
                  </p>
                  <p className="text-[11px] font-mono text-slate-400 mt-1 uppercase">
                    SECURE ENCRYPTED TRANSFER // 保密協定傳輸保障
                  </p>
                </div>

                {/* Uploaded Files List */}
                {files.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {files.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs"
                      >
                        <div className="flex items-center gap-2 truncate">
                          <FileText className="w-4 h-4 text-slate-500 shrink-0" />
                          <span className="font-medium text-slate-800 truncate">
                            {file.name}
                          </span>
                          <span className="text-slate-400 text-[11px] shrink-0 font-mono">
                            ({(file.size / (1024 * 1024)).toFixed(2)} MB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeFile(idx);
                          }}
                          className="text-slate-400 hover:text-red-500 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="submit-rfq-btn"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-lg text-sm font-bold text-white bg-[#ea580c] hover:bg-[#d44f08] active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>處理中，正在傳輸圖面...</span>
                  </div>
                ) : (
                  <>
                    <span>送出詢價需求單 (SUBMIT RFQ)</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Confirmation Success Modal */}
      {submittedRfq && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setSubmittedRfq(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-7 text-center shadow-2xl space-y-4 border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-14 h-14 rounded-full bg-green-100 text-[#00b060] flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-[#0b1c30]">
              詢價需求單已成功送出
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              感謝您的諮詢！國友傳動工程專案小組已收到您的圖面與技術需求，專案工程師將於 24 小時內與您聯繫並提供正式評估報價書。
            </p>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs font-mono">
              <span className="text-slate-500">案件專屬追蹤編號：</span>
              <span className="font-bold text-[#ea580c] block mt-1 text-sm">{submittedRfq}</span>
            </div>

            <button
              onClick={() => setSubmittedRfq(null)}
              className="w-full py-2.5 text-xs font-bold text-white bg-[#0b0f17] hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
            >
              完成並返回
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
