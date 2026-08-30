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
  { key: 'hollywoodSmile', image: '/hollywoodsmile.jpeg' },
  { key: 'smileDesign', image: '/mastersmile-smilemakeover-treatment-uk.jpg' },
  { key: 'implant', image: '/mastersmile-implant-treatment-uk.jpg' },
  { key: 'emax', image: '/mss-emax.jpeg' },
  { key: 'zirconia', image: '/mss-zirconium-crown.jpg' },
  { key: 'whitening', image: '/mss-teeth-whitining.jpeg' },
  { key: 'dentures', image: '/mss-implant.png' },
  { key: 'bonding', image: '/mss-composite-bonding.jpeg' },
  { key: 'rootCanal', image: '/mss-root-canal-treatment.jpeg' },
  { key: 'bridge', image: '/transformations/t6.jpg' },
  { key: 'periodontology', image: '/transformations/t2.jpg' },
  { key: 'allOnX', image: '/mastersmile-implant-treatment-uk.jpg' },
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
  { name: 'Dt. Fırat İskender', titleKey: 'doctorFiratTitle', image: '/team/firat-iskender.webp' },
  { name: 'Dr. Ozan Öztürk', titleKey: 'doctorOzanTitle', image: '/team/ozan-ozturk.webp' },
];
