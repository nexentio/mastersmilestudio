export interface TreatmentKeyConfig {
  key: string;
  image: string;
}

export interface CaseStudyImage {
  id: string;
  src: string;
  alt: string;
}

export interface TreatmentDoctorConfig {
  name: string;
  titleKey: string;
  image: string;
}

export const TREATMENT_KEYS: TreatmentKeyConfig[] = [
  { key: 'smileDesign', image: '/smile-makeover.jpg' },
  { key: 'implant', image: '/dental-implant-mss.jpeg' },
  { key: 'emax', image: '/e-max-lamine-treatment-mss.jpeg' },
  { key: 'zirconia', image: '/transformations/t1.jpg' },
  { key: 'whitening', image: '/teeth-whiting-treatment.jpeg' },
  { key: 'rootCanal', image: '/transformations/t4.jpg' },
  { key: 'dentures', image: '/transformations/t3.jpg' },
  { key: 'bonding', image: '/transformations/t5.jpg' },
  { key: 'bridge', image: '/transformations/t6.jpg' },
  { key: 'periodontology', image: '/transformations/t2.jpg' },
  { key: 'allOnX', image: '/dental-implant-mss.jpeg' },
  { key: 'surgery', image: '/smile-between-section.png' },
];

export const TREATMENT_CASE_STUDIES: CaseStudyImage[] = [
  { id: 'case-img-1', src: '/mastersmilestudio_1781430682_3919246906335743176_70887948899.jpg', alt: 'Master Smile Studio Full Mouth Case 1' },
  { id: 'case-img-2', src: '/mastersmilestudio_1783158972_3933743875695538963_70887948899.jpg', alt: 'Master Smile Studio Zirconia Case 2' },
  { id: 'case-img-3', src: '/mastersmilestudio_1784098986_3941630290953391467_70887948899.jpg', alt: 'Master Smile Studio Hollywood Smile Case 3' },
  { id: 'case-img-4', src: '/mastersmilestudio_1784465233_3944702579575983298_70887948899.jpg', alt: 'Master Smile Studio E-Max Veneers Case 4' },
  { id: 'case-img-5', src: '/smile-makeover.jpg', alt: 'Master Smile Studio Smile Makeover Case 5' },
  { id: 'case-img-6', src: '/e-max-lamine-treatment-mss.jpeg', alt: 'Master Smile Studio E-Max Laminates Case 6' },
  { id: 'case-img-7', src: '/dental-implant-mss.jpeg', alt: 'Master Smile Studio Dental Implant Case 7' },
  { id: 'case-img-8', src: '/teeth-whiting-treatment.jpeg', alt: 'Master Smile Studio Teeth Whitening Case 8' },
  { id: 'case-img-9', src: '/smile-between-section.png', alt: 'Master Smile Studio Aesthetic Smile Case 9' },
];

export const TREATMENT_DOCTORS: TreatmentDoctorConfig[] = [
  { name: 'Dr. Tülay Kaya', titleKey: 'doctorTulayTitle', image: '/team/tulay.webp' },
  { name: 'Dr. Ali Kemal Demir', titleKey: 'doctorAliKemalTitle', image: '/team/ali-kemal.webp' },
  { name: 'Dr. Abdullah Yılmaz', titleKey: 'doctorAbdullahTitle', image: '/team/abdullah.webp' },
];
