import { ProductSpec, ProcessPhase, Equipment } from '../types';

export const COMPANY_INFO = {
  nameZh: "國友工業股份有限公司",
  nameEn: "KUO YU PRECISION GEAR",
  fullNameEn: "Kuo Yu Machinery Co., Ltd.",
  hotline: "+886-4-2359-0000",
  fax: "+886-4-2359-0001",
  email: "rfq@kuoyu.com.tw",
  serviceEmail: "service@kuoyu.com.tw",
  address: "台中市西屯區工業區一路88號 (台中工業區)",
  addressEn: "No. 88, 1st Rd., Taichung Industrial Park, Xitun Dist., Taichung City, Taiwan",
  established: "1984",
  experienceYears: "40+",
  dinGrade: "DIN 4",
  passRate: ">99.8%",
  countries: "35+",
  tempTolerance: "20°C ±0.5°C",
  measurementResolution: "0.001mm"
};

export const PRODUCTS: ProductSpec[] = [
  {
    id: "precision-gears",
    badge: "DIN 5+",
    category: "PRECISION GEARS",
    categoryEn: "PRECISION GEARS",
    title: "精密正齒輪 / 斜齒輪",
    titleEn: "Spur & Helical Gears",
    description: "高精度齒面磨削，具備優異耐磨耗性與低噪音特性。模數範圍 M0.5~M12，大幅減少振動並提升傳動效率。",
    descriptionEn: "High-precision tooth profile grinding with superior wear resistance and ultra-low noise. Module range M0.5-M12, maximizing transmission efficiency.",
    tags: ["模數 M0.5-M12", "滲碳淬火 HRC 58-62"],
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80",
    detailedSpecs: {
      moduleRange: "M0.5 ~ M12 (公制 / 徑節 DP 3~48)",
      precisionGrade: "DIN 4 - DIN 6 / AGMA 12 - 14 / JIS 0 - 1 級",
      materials: ["SCM415", "SCM420H", "SNCM220", "SUS304", "SUS316", "17-4PH", "PEEK"],
      surfaceHardness: "滲碳淬火 HRC 58 ~ 62 (有效硬化層 0.6~1.5mm)",
      maxDiameter: "Ø 12mm ~ Ø 800mm",
      efficiency: "98.5% ~ 99.2%",
      customCapability: "齒頂修緣 (Tip Relief)、齒向鼓形修整 (Crowning)、微量修形"
    }
  },
  {
    id: "planetary-reducers",
    badge: "< 3 arcmin",
    category: "REDUCERS & GEARHEADS",
    categoryEn: "REDUCERS & GEARHEADS",
    title: "行星減速機 / 工業減速機",
    titleEn: "Planetary & Industrial Reducers",
    description: "專為伺服馬達驅動設計，擁有超低齒隙（<3弧分）、高扭矩剛性與長效合成潤滑，提供極致動態響應。",
    descriptionEn: "Engineered for high-end servo applications with ultra-low backlash (< 3 arcmin), supreme torsional rigidity and lifelong synthetic lubrication.",
    tags: ["背隙 < 3 arcmin", "高徑向承載力"],
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    detailedSpecs: {
      moduleRange: "精密微型至高負載型減速總成",
      precisionGrade: "精密背隙 < 3 弧分 (P0級可達 < 1 弧分)",
      materials: ["航太合金鋼外殼", "滲碳齒圈與行星齒輪組"],
      surfaceHardness: "內齒輪滲氮 HRC 55+ / 行星輪 HRC 60-62",
      backlash: "標準型 ≤ 5 arcmin / 超精密型 ≤ 1~3 arcmin",
      ratioRange: "單段 3~10 / 雙段 15~100 / 客製最高達 1000:1",
      efficiency: "單段 ≥ 97% / 雙段 ≥ 94%",
      customCapability: "支援各式伺服馬達法蘭接口、IP65 防塵防水、防爆特殊密封"
    }
  },
  {
    id: "bevel-worm",
    badge: "90° DRIVE",
    category: "RIGHT-ANGLE SYSTEMS",
    categoryEn: "RIGHT-ANGLE SYSTEMS",
    title: "傘齒輪與蝸輪蝸桿",
    titleEn: "Bevel Gears & Worm Drives",
    description: "克林貝格研磨蝸桿與螺旋傘齒輪，嚙合接觸率高達 85% 以上，具備卓越自鎖效能與高承載重切削能力。",
    descriptionEn: "Klingelnberg ground worm drives and spiral bevel gears with over 85% tooth contact ratio, high shock-load endurance, and reliable self-locking.",
    tags: ["高接觸齒面比", "磷青銅/鎳鉻鋼選材"],
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    detailedSpecs: {
      moduleRange: "M1.0 ~ M10.0 (螺旋角 35° / 45°)",
      precisionGrade: "DIN 5 - DIN 7 / AGMA 11 - 13",
      materials: ["高純度磷青銅 (CuSn12Ni2)", "SCM440", "20CrMnTi", "SNCM439"],
      surfaceHardness: "蝸桿研磨表面粗糙度 Ra ≤ 0.2μm，齒面 HRC 58-62",
      ratioRange: "1:5 ~ 1:120 (交錯軸傳動)",
      efficiency: "高導程型達 90% 以上 / 自鎖型",
      customCapability: "雙導程無背隙蝸輪蝸桿組 (Dual-lead Anti-backlash Worm Gear)"
    }
  },
  {
    id: "custom-gearbox",
    badge: "OEM / ODM",
    category: "TAILORED SOLUTIONS",
    categoryEn: "TAILORED SOLUTIONS",
    title: "客製傳動箱與專案零組件",
    titleEn: "Custom Gearboxes & Assemblies",
    description: "支援半導體製程晶圓手臂、電動車驅動齒輪與航太級傳動系統特殊規格開發，提供逆向工程與性能最佳化設計。",
    descriptionEn: "Custom transmission assemblies for semiconductor wafer transfer robots, EV powertrains, and aerospace-grade actuation with full reverse engineering.",
    tags: ["半導體/航太規範", "專屬附裝設計"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    detailedSpecs: {
      moduleRange: "非標準規格客製研製",
      precisionGrade: "航太級 AS9100 / ISO 9001:2015 驗證標準",
      materials: ["航空級鋁合金 7075-T6", "鈦合金 Ti-6Al-4V", "高鎳合金", "超純淨真空冶煉鋼"],
      surfaceHardness: "可配合 DLC (類鑽碳膜) / TiN / 物理氣相沉積與陽極氧化",
      maxDiameter: "機構外箱總長可達 1200mm",
      efficiency: "系統性傳動動態阻尼最佳化",
      customCapability: "完整 3D 結構應力 FEA 分析、有限元受力模擬、極限轉速溫升測試"
    }
  }
];

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    phase: "PHASE // 01",
    title: "需求評估與設計諮詢",
    titleEn: "Requirements & FEA Design",
    description: "分析負載扭矩、傳動比與空間限制，完成 3D 模擬與齒形修正計算。",
    descriptionEn: "Analyze load torque, ratio and boundary envelope; formulate 3D simulation and micro-geometry tooth modification.",
    keyPoints: ["KissSoft 齒輪分析", "3D 實體干涉檢查", "接觸齒印預測分析"]
  },
  {
    phase: "PHASE // 02",
    title: "材料檢驗與真空熱處理",
    titleEn: "Spectrometry & Vacuum Carburizing",
    description: "光譜儀材質成分確認，真空滲碳淬火，達齒面高硬度與心部強韌性。",
    descriptionEn: "Optical emission spectrometry analysis and vacuum carburizing to ensure supreme tooth hardness and ductile core.",
    keyPoints: ["材料光譜成分全析", "真空滲碳淬火 HRC 58-62", "金相顯微組織檢定"]
  },
  {
    phase: "PHASE // 03",
    title: "CNC 粗車與精密滾齒",
    titleEn: "CNC Turning & High-Speed Hobbing",
    description: "德國與日本多軸數控車削與高速乾切滾齒，確保基準面與同心度。",
    descriptionEn: "Multi-axis turning and dry high-speed gear hobbing ensuring datum surface perpendicularity and concentricity.",
    keyPoints: ["五軸同動車銑複合", "高速硬切削滾齒工藝", "微米級端面垂直度"]
  },
  {
    phase: "PHASE // 04",
    title: "數控磨齒與超精密精修",
    titleEn: "CNC Tooth Profile Grinding",
    description: "全伺服成形磨齒與蝸桿砂輪連續磨齒，嚴格消除熱處理形變。",
    descriptionEn: "Continuous generating and form tooth grinding to eliminate thermal distortion, achieving DIN 4 micro-geometry.",
    keyPoints: ["Reishauer 蝸桿磨齒", "Klingelnberg 成形研磨", "齒形修緣與鼓形修整"]
  },
  {
    phase: "PHASE // 05",
    title: "三次元檢驗與防蝕出廠",
    titleEn: "CMM Metrology & Anti-Corrosion",
    description: "蔡司 CMM 齒面全檢測，出具完整量測品管報告，真空防鏽裝箱出廠。",
    descriptionEn: "ZEISS CMM 100% full-profile verification, certified QA report issuance, and VCI vacuum anti-corrosion packaging.",
    keyPoints: ["蔡司 CMM 空間公差全檢", "齒面全嚙合接觸印跡", "氣相真空防蝕密封"]
  }
];

export const QC_EQUIPMENT: Equipment[] = [
  {
    id: "zeiss-cmm",
    name: "德國 ZEISS 三次元測量儀",
    nameEn: "German ZEISS Coordinate Measuring Machine",
    description: "微米級幾何公差與位置度檢測，支援多軸複雜自由曲面自動量測。",
    descriptionEn: "Sub-micron geometric tolerancing and position verification for complex multi-axis contours.",
    accuracy: "E0, MPE: 0.9 + L/350 μm",
    capability: "五軸掃描測頭、3D CAD 自由曲面幾何比對",
    iconName: "Search"
  },
  {
    id: "klingelnberg-center",
    name: "Klingelnberg 齒輪量測中心",
    nameEn: "Klingelnberg Precision Gear Testing Center",
    description: "快速檢測齒形誤差 (fα)、齒向誤差 (fβ) 與累積節距誤差 (Fp)。",
    descriptionEn: "Precision evaluation of tooth profile (fα), lead deviation (fβ), and total cumulative pitch error (Fp).",
    accuracy: "Class 1 最高國家計量標準",
    capability: "DIN / AGMA / ISO / JIS 自動誤差曲線圖形判定",
    iconName: "Compass"
  },
  {
    id: "hardness-analyzer",
    name: "微小硬度計與光譜分析",
    nameEn: "Micro-Vickers Hardness & Spectrometry",
    description: "精確量測滲碳有效硬化層深度 (CHD) 與金相微觀組織晶粒度。",
    descriptionEn: "Accurate measurement of case hardened depth (CHD) and metallurgical microstructure grain size.",
    accuracy: "HV 0.1 ~ HV 10 載重自動量測",
    capability: "自動金相硬度階梯曲線繪製、光譜直讀成分儀",
    iconName: "Cpu"
  }
];
