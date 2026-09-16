export interface ProductSpec {
  id: string;
  badge: string;
  category: string;
  categoryEn: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  tags: string[];
  image: string;
  detailedSpecs: {
    moduleRange: string;
    precisionGrade: string;
    materials: string[];
    surfaceHardness: string;
    maxDiameter?: string;
    backlash?: string;
    ratioRange?: string;
    efficiency?: string;
    customCapability: string;
  };
}

export interface ProcessPhase {
  phase: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  keyPoints: string[];
}

export interface Equipment {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  accuracy: string;
  capability: string;
  iconName: string;
}

export interface RFQFormData {
  contactName: string;
  companyName: string;
  email: string;
  phone: string;
  productCategory: string;
  specNotes: string;
  files: File[];
}
