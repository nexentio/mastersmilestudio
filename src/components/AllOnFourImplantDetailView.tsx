'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { getWhatsAppLink } from '@/config/site';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentParallaxBanner from '@/components/treatment-sections/TreatmentParallaxBanner';
import TreatmentDoctorsSection from '@/components/treatment-sections/TreatmentDoctorsSection';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentClinicTourSection from '@/components/treatment-sections/TreatmentClinicTourSection';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentBeforeAfterSliderSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './AllOnFourImplantDetailView.module.css';

interface PackageItem {
  name: string;
  brand: string;
  duration: string;
  img: string;
  included: string[];
  price: { USD: string; EUR: string; GBP: string };
  popular?: boolean;
}

interface FaqItem {
  q: string;
  a: string;
}

interface MaterialCardItem {
  title: string;
  sub: string;
  badge?: string;
  isGold?: boolean;
  material: string;
  strength: string;
  chippingRisk: string;
  lifespan: string;
  features: { text: string; status: 'good' | 'bad' | 'warn' }[];
}

interface MaterialTableRow {
  criteria: string;
  zirconia: string;
  acrylic: string;
  pfm: string;
}

interface DetailDictionary {
  materialsTitle: string;
  materialsSubtitle: string;
  materialsSpecLabels: {
    material: string;
    strength: string;
    chipping: string;
    lifespan: string;
  };
  materialsCards: MaterialCardItem[];
  materialsTableHeaders: {
    criteria: string;
    zirconia: string;
    acrylic: string;
    pfm: string;
  };
  materialsTableRows: MaterialTableRow[];
  introBadge: string;
  introTitle: string;
  introLead: string;
  introP1: string;
  introP2: string;
  introP3Lead: string;
  introP3LinkAll6: string;
  introP3Mid: string;
  introP3LinkZygoma: string;
  introP3And: string;
  introP3LinkSinus: string;
  introP3Tail: string;
      materialsTitle: 'Materiales de Prótesis All-on-4: Por qué Usamos Circonio Monolítico',
    materialsSubtitle: 'En All-on-4, 4 implantes soportan toda la fuerza masticatoria de la mandíbula (200 a 600 Newtons). Descubra por qué diseñamos exclusivamente Circonio Monolítico Multicapa en lugar de acrílico o metal.',
    materialsSpecLabels: {
      material: 'Tipo de Material',
      strength: 'Resistencia a la Flexión',
      chipping: 'Riesgo de Fractura',
      lifespan: 'Vida Útil',
    },
    materialsCards: [
      {
        title: 'Circonio Monolítico Multicapa',
        sub: '100% Circonio Alemán Macizo + Barra de Titanio Fresada',
        badge: 'ESTÁNDAR DE ORO MASTER SMILE',
        isGold: true,
        material: '1200+ MPa CAD/CAM Circonio',
        strength: '1200 – 1400 MPa (Ultra Alta)',
        chippingRisk: 'Casi Cero (Monolítico Sólido)',
        lifespan: '25+ Años / De por Vida',
        features: [
          { text: 'Cero fracturas o astillamiento bajo fuerte masticación', status: 'good' },
          { text: 'Superficie ultra lisa previene placa y Periimplantitis', status: 'good' },
          { text: 'No poroso: 100% resistente a manchas y malos olores', status: 'good' },
          { text: 'Gradiente multicapa para una estética natural translúcida', status: 'good' },
        ],
      },
      {
        title: 'Puente Híbrido Titanio-Acrílico',
        sub: 'Estructura Metálica + Resina Acrílica y Dientes Plásticos',
        material: 'Acrílico PMMA + Estructura Metálica',
        strength: '80 – 120 MPa (Baja)',
        chippingRisk: 'Alto (Dientes pueden desprenderse)',
        lifespan: '3 – 7 Años',
        features: [
          { text: 'Desgaste abrasivo acorta dientes y causa dolor articular', status: 'bad' },
          { text: 'Resina porosa absorbe bacterias, café y olores', status: 'bad' },
          { text: 'Dientes individuales pueden soltarse con alimentos duros', status: 'bad' },
          { text: 'Requiere mantenimiento frecuente y reemplazo total', status: 'warn' },
        ],
      },
      {
        title: 'Metal-Porcelana (PFM)',
        sub: 'Estructura Cobalto-Cromo + Cerámica Horneada',
        material: 'Porcelana Feldespática en Capas',
        strength: '350 – 450 MPa (Media)',
        chippingRisk: 'Moderado a Alto (Astillamiento)',
        lifespan: '8 – 12 Años',
        features: [
          { text: 'La porcelana se astilla bajo las intensas fuerzas de 4 implantes', status: 'bad' },
          { text: 'Margen metálico oscuro visible si la encía se retrae', status: 'bad' },
          { text: 'Peso elevado causa sensación pesada en la boca', status: 'warn' },
          { text: 'Reparar porcelana astillada en boca es inviable', status: 'bad' },
        ],
      },
    ],
    materialsTableHeaders: {
      criteria: 'Criterio de Comparación',
      zirconia: 'Circonio Monolítico (Nuestro Estándar)',
      acrylic: 'Híbrido Acrílico (Opción Económica)',
      pfm: 'Metal-Porcelana (PFM)',
    },
    materialsTableRows: [
      {
        criteria: 'Riesgo de Fractura / Astillamiento',
        zirconia: 'Casi Cero (Sólido 1200+ MPa)',
        acrylic: 'Alto (Dientes pueden soltarse)',
        pfm: 'Moderado (Porcelana se astilla)',
      },
      {
        criteria: 'Desgaste y Pérdida de Altura Oclusal',
        zirconia: 'Cero Desgaste (Mordida Estable)',
        acrylic: 'Se desgasta en 3–5 años (Dolor ATM)',
        pfm: 'Muy resistente al desgaste',
      },
      {
        criteria: 'Manchas y Absorción de Olores',
        zirconia: '100% No Poroso (Cero Manchas)',
        acrylic: 'Poroso (Absorbe café y olores)',
        pfm: 'Esmaltado (Resiste manchas)',
      },
      {
        criteria: 'Biocompatibilidad con la Encía',
        zirconia: 'Antibacteriano (Protege la encía)',
        acrylic: 'Retiene placa (Riesgo de infección)',
        pfm: 'Posible sensibilidad al metal',
      },
      {
        criteria: 'Translucidez y Estética Natural',
        zirconia: 'Vitalidad Natural Multicapa',
        acrylic: 'Opacidad plástica artificial',
        pfm: 'Reflejo metálico grisáceo',
      },
      {
        criteria: 'Durabilidad Clínica',
        zirconia: 'De por Vida / 25+ Años',
        acrylic: '3 – 7 Años',
        pfm: '8 – 12 Años',
      },
    ],
    packagesTitle: string;
  packagesSubtitle: string;
  durationLabel: string;
  includedLabel: string;
  pricePerArchLabel: string;
  getQuoteBtn: string;
  mostPopularBadge: string;
  faqTitle: string;
  faqSubtitle: string;
  faqGroup1Badge: string;
  faqGroup1Title: string;
  faqGroup2Badge: string;
  faqGroup2Title: string;
  ctaTitle: string;
  ctaDesc: string;
  whatsappBtn: string;
  quoteBtn: string;
  packages: PackageItem[];
  faqsPart1: FaqItem[];
  faqsPart2: FaqItem[];
}

const DICTIONARIES: Record<string, DetailDictionary> = {
  en: {
    introBadge: 'FULL ARCH RESTORATION',
    introTitle: 'All-on-4 Dental Implants in Istanbul, Turkey',
    introLead: 'Permanent, fixed teeth in two visits — engineered with 3D computer-guided precision and Swiss/German materials.',
    introP1: 'At Master Smile Studio, All-on-4 dental implants represent our flagship full-arch restoration solution. This specialized technique provides patients with a permanent, rock-solid bite when severe tooth decay, advanced gum disease, or complete tooth loss has compromised oral function. Because all surgical procedures are performed directly by our senior oral surgeons and clinic founders, you receive uncompromising consistency and precision.',
    introP2: 'The All-on-4 protocol utilizes four strategically positioned titanium implants per jaw: two upright in the anterior region and two angled up to 45 degrees in the posterior. This biomechanical tilt bypasses the maxillary sinus cavity and inferior alveolar nerve canal, allowing 90% of patients with moderate bone atrophy to avoid painful and costly bone grafting or sinus lifting surgeries.',
    introP3Lead: 'If your clinical bone density or bite dynamics require additional support, explore our ',
    introP3LinkAll6: 'All-on-6 Dental Implants',
    introP3Mid: ', specialized ',
    introP3LinkZygoma: 'Zygomatic Implants for Severe Bone Loss',
    introP3And: ', and ',
    introP3LinkSinus: 'Sinus Lifting Procedures',
    introP3Tail: ' — all seamlessly integrated within our clinic.',
        materialsTitle: 'All-on-4 Permanent Bridge Materials: Why We Use Monolithic Zirconia',
    materialsSubtitle: 'In All-on-4 restorations, 4 implants bear your entire jaw chewing load (200 to 600 Newtons). Discover why we exclusively engineer 100% Monolithic Multilayer Zirconia instead of cheaper acrylic or fragile porcelain.',
    materialsSpecLabels: {
      material: 'Material Type',
      strength: 'Flexural Strength',
      chipping: 'Chipping Risk',
      lifespan: 'Expected Lifespan',
    },
    materialsCards: [
      {
        title: 'Monolithic Multilayer Zirconia',
        sub: '100% Solid German Zirconia + Milled Titanium Bar',
        badge: 'MASTER SMILE GOLD STANDARD',
        isGold: true,
        material: '1200+ MPa CAD/CAM Zirconia',
        strength: '1200 – 1400 MPa (Ultra-High)',
        chippingRisk: 'Near Zero (Monolithic Solid)',
        lifespan: '25+ Years / Lifetime',
        features: [
          { text: 'Zero chipping or fractures under heavy chewing force', status: 'good' },
          { text: 'Ultra-smooth surface prevents plaque & Peri-Implantitis', status: 'good' },
          { text: 'Non-porous: 100% stain-resistant & zero odor retention', status: 'good' },
          { text: 'Multilayer gradient creates natural tooth translucency', status: 'good' },
        ],
      },
      {
        title: 'Hybrid Titanium-Acrylic Bridge',
        sub: 'Cast Metal Frame + Denture Acrylic & Resin Teeth',
        material: 'PMMA Acrylic + Metal Frame',
        strength: '80 – 120 MPa (Low)',
        chippingRisk: 'High (Teeth can pop off)',
        lifespan: '3 – 7 Years',
        features: [
          { text: 'Abrasive wear flattens teeth, altering vertical bite', status: 'bad' },
          { text: 'Porous resin absorbs bacteria, food oils & causes odor', status: 'bad' },
          { text: 'Individual teeth can detach when biting hard foods', status: 'bad' },
          { text: 'Requires frequent maintenance and total replacement', status: 'warn' },
        ],
      },
      {
        title: 'Porcelain-Fused-to-Metal (PFM)',
        sub: 'Cast Cobalt-Chromium Frame + Baked Ceramic',
        material: 'Layered Feldspathic Porcelain',
        strength: '350 – 450 MPa (Medium)',
        chippingRisk: 'Moderate to High (Chipping)',
        lifespan: '8 – 12 Years',
        features: [
          { text: 'Porcelain delaminates & chips under heavy 4-implant load', status: 'bad' },
          { text: 'Dark metal margin becomes visible if gums recede', status: 'bad' },
          { text: 'Heavier weight creates a bulky oral sensation', status: 'warn' },
          { text: 'Intraoral repair of chipped porcelain is impossible', status: 'bad' },
        ],
      },
    ],
    materialsTableHeaders: {
      criteria: 'Comparison Criteria',
      zirconia: 'Monolithic Zirconia (Our Standard)',
      acrylic: 'Hybrid Acrylic (Budget Option)',
      pfm: 'Metal-Porcelain (PFM)',
    },
    materialsTableRows: [
      {
        criteria: 'Fracture / Chipping Risk',
        zirconia: 'Near Zero (Solid 1200+ MPa)',
        acrylic: 'High (Teeth can detach)',
        pfm: 'Moderate (Porcelain chips)',
      },
      {
        criteria: 'Chewing Wear & Tooth Shortening',
        zirconia: 'Zero Wear (Stable Bite)',
        acrylic: 'Wears in 3–5 yrs (TMJ pain)',
        pfm: 'Highly wear-resistant',
      },
      {
        criteria: 'Staining & Odor Absorption',
        zirconia: '100% Non-porous (Zero Stains)',
        acrylic: 'Porous (Absorbs coffee & odors)',
        pfm: 'Glazed (Resists stains)',
      },
      {
        criteria: 'Gum Biocompatibility',
        zirconia: 'Anti-bacterial (Protects gums)',
        acrylic: 'Plaque trap (High infection risk)',
        pfm: 'Potential metal sensitivity',
      },
      {
        criteria: 'Aesthetic Light Translucency',
        zirconia: 'Multilayer Natural Vitality',
        acrylic: 'Flat plastic opacity',
        pfm: 'Dull background metal reflection',
      },
      {
        criteria: 'Clinical Longevity',
        zirconia: 'Lifetime / 25+ Years',
        acrylic: '3 – 7 Years',
        pfm: '8 – 12 Years',
      },
    ],
    packagesTitle: 'All-on-4 Implant Package Deals & Pricing in Istanbul',
    packagesSubtitle: 'Transparent, all-inclusive pricing per arch with premium titanium implants, CAD/CAM zirconia bridge, 5-star hotel stay, and private VIP transfers.',
    durationLabel: 'Treatment Duration:',
    includedLabel: "What's Included in This Package:",
    pricePerArchLabel: 'Price per jaw / arch',
    getQuoteBtn: 'Get Free Personalized Quote',
    mostPopularBadge: 'MOST POPULAR',
    faqTitle: 'Frequently Asked Questions About All-on-4 Implants',
    faqSubtitle: 'Clear, clinically validated answers to help you understand every surgical, biomechanical, and travel aspect of your All-on-4 transformation in Istanbul.',
    faqGroup1Badge: 'PART 1',
    faqGroup1Title: 'Specialized All-on-4 Clinical & Biomechanical FAQs',
    faqGroup2Badge: 'PART 2',
    faqGroup2Title: 'Health Tourism, Inclusions & Lifetime Warranty FAQs',
    ctaTitle: 'Get a Free Surgical Evaluation for All-on-4 Implants',
    ctaDesc: 'Send your panoramic X-ray or CT scan via WhatsApp. Our founding oral surgeons will analyze your jawbone architecture and prepare a bespoke surgical plan with exact package pricing within 24 hours.',
    whatsappBtn: 'WhatsApp 24/7 Direct Consultation',
    quoteBtn: 'Get Online Free Quote Form',
    packages: [
      {
        name: 'ALL-ON-4 – NUCLEOSS',
        brand: 'NucleOSS (Turkish Premium Quality)',
        duration: '3+7 Working Days (2 Visits)',
        img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
        included: [
          '4x NucleOSS Dental Implants per Arch',
          '12x Fixed Temporary Teeth (Same Visit)',
          '12x Final Permanent Zirconia Teeth',
          '3D CBCT Surgical Planning Guide',
          'Local Anesthesia & Post-op Medication Pack',
          'Airport-Hotel VIP Transfers',
          'Hotel Stay with Bed & Breakfast',
          'Full Laboratory Work Included',
        ],
        price: { USD: '$5,700', EUR: '€4,900', GBP: '£4,200' },
      },
      {
        name: 'ALL-ON-4 – DXL GERMAN',
        brand: 'DXL (German Engineering)',
        duration: '3+7 Working Days (2 Visits)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
        included: [
          '4x DXL German Titanium Implants',
          '12x Fixed Temporary Teeth',
          '12x Final Permanent Zirconia Teeth',
          '3D CBCT Surgical Planning',
          'Local Anesthesia & Follow-up Care',
          'Airport-Hotel VIP Transfers',
          'Hotel Stay with Bed & Breakfast',
          'Full Laboratory Work Included',
        ],
        price: { USD: '$6,400', EUR: '€5,500', GBP: '£4,750' },
      },
      {
        name: 'ALL-ON-4 – STRAUMANN',
        brand: 'Straumann (Swiss Gold Standard)',
        duration: '3+7 Working Days (2 Visits)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
        included: [
          '4x Straumann Swiss Dental Implants',
          '12x Fixed High-Grade Temporary Teeth',
          '12x Final Monolithic Multilayer Zirconia Teeth',
          'Lifetime International Guarantee Passport',
          'VIP Airport-Clinic Transfers',
          'Luxury 5-Star Hotel Stay Included',
          'Dedicated Personal Patient Host',
        ],
        price: { USD: '$9,300', EUR: '€8,000', GBP: '£6,900' },
        popular: true,
      },
      {
        name: 'ALL-ON-4 – MEGAGEN',
        brand: 'Megagen (AnyRidge Korean Technology)',
        duration: '3+7 Working Days (2 Visits)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg',
        included: [
          '4x Megagen AnyRidge Dental Implants',
          '12x Fixed Temporary Teeth',
          '12x Final Permanent Zirconia Teeth',
          'Surgical planning (with CBCT)',
          'Airport-hotel transfers',
          'Hotel Stay with Bed & Breakfast',
          'Laboratory Work Included',
        ],
        price: { USD: '$6,900', EUR: '€6,000', GBP: '£5,100' },
      },
      {
        name: 'ALL-ON-4 – NEODENT',
        brand: 'Neodent (by Straumann Group)',
        duration: '3+7 Working Days (2 Visits)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg',
        included: [
          '4x Neodent Implants (Straumann Family)',
          '12x Fixed Temporary Teeth',
          '12x Final Permanent Zirconia Teeth',
          'Surgical planning (with CBCT)',
          'Airport-hotel transfers',
          'Hotel Stay with Bed & Breakfast',
          'Laboratory Work Included',
        ],
        price: { USD: '$6,900', EUR: '€6,000', GBP: '£5,100' },
      },
      {
        name: 'ALL-ON-4 – HIOSSEN',
        brand: 'Hiossen (American Premium Quality)',
        duration: '3+7 Working Days (2 Visits)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
        included: [
          '4x Hiossen American Dental Implants',
          '12x Fixed Temporary Teeth',
          '12x Final Permanent Zirconia Teeth',
          'Surgical planning (with CBCT)',
          'Airport-hotel transfers',
          'Hotel Stay with Bed & Breakfast',
          'Laboratory Work Included',
        ],
        price: { USD: '$6,600', EUR: '€5,750', GBP: '£4,900' },
      },
    ],
    faqsPart1: [
      {
        q: 'How does the All-on-4 biomechanical concept work with only 4 implants?',
        a: 'The All-on-4 concept uses 2 straight vertical implants in the front jaw where bone is naturally denser, combined with 2 posterior implants tilted at up to 45 degrees. This triangular load distribution creates a wide restorative polygon capable of supporting a full arch of 12 to 14 fixed prosthetic teeth with optimal masticatory load absorption.',
      },
      {
        q: 'What is the exact surgical difference between All-on-4 and All-on-6?',
        a: 'All-on-4 is engineered for moderate jawbone volume or narrower arches, tilting posterior fixtures to bypass sinus cavities without grafting. All-on-6 utilizes 6 upright/tilted implants, distributing chewing forces over a broader surface for wider jaw arches, high bite forces, or younger active masticators.',
      },
      {
        q: 'How does All-on-4 eliminate the need for sinus lifting or bone grafting?',
        a: 'By angling the two rear implants at 30°–45°, our surgeons anchor them directly into the dense anterior maxillary bone, safely passing just in front of the maxillary sinus in the upper jaw and anterior to the mental nerve in the lower jaw. This avoids 6–9 months of graft maturation.',
      },
      {
        q: 'How do immediate-load temporary teeth work on Day 1? Will I ever be toothless?',
        a: 'You will never spend a single day without teeth. Within 24 hours of surgery, our in-house dental laboratory fabricates a custom screw-retained high-impact acrylic temporary bridge that is securely bolted directly onto your new implants before you leave the clinic.',
      },
      {
        q: 'What can I eat with the temporary bridge during the 3-month healing period?',
        a: 'During the initial 10–12 weeks of osseointegration, you maintain a soft-chew diet (steamed fish, pasta, eggs, tender poultry, soft vegetables). Avoiding hard, crunchy, or chewy foods protects the newly integrating implants from micro-movements, ensuring 100% bone fusion.',
      },
      {
        q: 'What materials are used for the final permanent All-on-4 bridge?',
        a: 'For your permanent bridge, we fabricate a monolithic multilayer German Zirconia prosthesis (1200+ MPa flexural strength) supported by a precision CAD/CAM titanium substructure bar. Zirconia offers lifelike opalescence, zero staining, and maximum fracture resistance.',
      },
      {
        q: 'Is the All-on-4 prosthesis fixed or removable? How is it cleaned at home?',
        a: 'The All-on-4 bridge is 100% fixed and can only be removed by your dentist during annual checkups. Daily home maintenance is simple: you clean underneath the bridge using a pulsating water flosser (Waterpik), SuperFloss, and specialized interdental brushes.',
      },
      {
        q: 'Why is a 3D CBCT computer-guided surgical template critical for All-on-4 success?',
        a: 'We use high-resolution 3D CBCT scans and digital planning software to generate a custom 3D-printed surgical guide. This guide dictates the exact sub-millimeter entry point, angulation, and depth, completely eliminating freehand human error and protecting vital nerves.',
      },
      {
        q: 'Can All-on-4 be performed if I still have failing teeth that need extraction?',
        a: 'Yes. In fact, most All-on-4 cases are completed as immediate extraction and loading procedures. Our oral surgeons extract remaining compromised teeth, clean all infected tissues, place the 4 implants, and fit your temporary fixed bridge all in the very same appointment.',
      },
      {
        q: 'What is the long-term lifespan and clinical success rate of All-on-4 implants?',
        a: 'Extensive long-term international clinical studies show an All-on-4 success rate exceeding 98% over 15+ years. With daily oral hygiene, water flossing, and annual clinical reviews, high-grade titanium implants from Straumann and DXL are designed to last a lifetime.',
      },
    ],
    faqsPart2: [
      {
        q: 'How many visits to Istanbul are required and how long do I need to stay?',
        a: 'The full treatment requires 2 visits: Visit 1 (3–5 days) covers consultation, extractions, 4-implant surgery, and temporary fixed bridge fitting. After a 3-month osseointegration period at home, Visit 2 (5–7 days) covers 3D digital impressions and final permanent Zirconia bridge delivery.',
      },
      {
        q: "What is included in Master Smile Studio's All-on-4 package?",
        a: 'Our all-inclusive package covers: 4 titanium implants per arch, same-day fixed temporary bridge, permanent monolithic Zirconia bridge, 3D CBCT tomography, all surgical fees, local anesthesia, post-op medications, VIP private Mercedes airport-hotel-clinic transfers, and 4/5-star hotel accommodation with breakfast.',
      },
      {
        q: 'Will my All-on-4 quote change once I arrive in Istanbul?',
        a: 'No. The formal written quote provided by our international coordinators based on your pre-travel X-ray is fixed and transparent. What you see is exactly what you pay, with zero hidden clinic fees, laboratory extras, or transfer surcharges.',
      },
      {
        q: 'Will I feel pain during surgery? Is sedation available?',
        a: 'The procedure is completely painless under computerized local anesthesia. For patients experiencing dental anxiety, we also offer Conscious IV Sedation administered by a licensed anesthesiologist, allowing you to relax or lightly sleep through the entire surgery.',
      },
      {
        q: 'Can I have All-on-4 if I have osteoporosis, controlled diabetes, or if I smoke?',
        a: 'Yes. Controlled diabetes (HbA1c under 7.5%) and mild-to-moderate osteoporosis are fully manageable with specialized implant surfaces and antibiotic regimens. While smoking increases risk, following our 2-week pre/post-operative cessation protocol ensures safe healing.',
      },
      {
        q: 'How does the International Lifetime Warranty and Implant Passport work?',
        a: 'Every patient receives an official International Implant Passport detailing the manufacturer, serial numbers, lot codes, and torque specifications of each fixture. Straumann and DXL implants come with lifetime international replacement warranties valid worldwide.',
      },
      {
        q: 'How do follow-up checks work once I return to the UK, Europe, or USA?',
        a: 'Our dedicated International Patient Care team remains in continuous contact via WhatsApp, phone, and video consultation. We coordinate routine checkups and provide your local dentist with technical bridge schematics if ever needed.',
      },
    ],
  },
  tr: {
    introBadge: 'TAM ÇENE RESTORASYONU',
    introTitle: 'İstanbul, Türkiye’de All-on-4 Diş İmplantı',
    introLead: 'İki ziyarette sabit, kalıcı dişler — 3D bilgisayarlı cerrahi kılavuz ve İsviçre/Alman titanyum hassasiyetiyle.',
    introP1: 'Master Smile Studio’da All-on-4 diş implantı tedavisi, ileri derece diş kaybı veya sallanan diş problemi yaşayan hastalarımız için amiral gemisi tam çene çözümümüzdür. Tüm cerrahi operasyonlar doğrudan uzman çene cerrahlarımız ve klinik kurucu hekimlerimiz tarafından yürütülerek en yüksek cerrahi başarı ve kusursuz estetik sağlanır.',
    introP2: 'All-on-4 protokolü, çene kemiğine yerleştirilen 4 adet özel titanyum implanttan oluşur: Ön bölgeye 2 düz, arka bölgeye ise 45 dereceye kadar açılı 2 implant yerleştirilir. Bu biyomekanik eğim sayesinde sinüs boşlukları ve sinir kanalları korunur; hastaların %90’ında kemik grefti (kemik tozu) veya sinüs lifting ameliyatı ihtiyacı ortadan kalkar.',
    introP3Lead: 'Kemik yapınız veya çiğneme kuvvetiniz daha geniş bir destek gerektiriyorsa, ',
    introP3LinkAll6: 'All-on-6 Diş İmplantı',
    introP3Mid: ', ileri kemik erimesi için ',
    introP3LinkZygoma: 'Zigomatik İmplant',
    introP3And: ' ve ',
    introP3LinkSinus: 'Sinüs Lifting Tedavisi',
    introP3Tail: ' seçeneklerimizi de inceleyebilirsiniz.',
        materialsTitle: 'All-on-4 Kalıcı Köprü Materyalleri: Neden Monolitik Zirkonyum Kullanıyoruz?',
    materialsSubtitle: 'All-on-4 tedavisinde 4 implant tüm çenenin 200 ila 600 Newtonluk çiğneme kuvvetini taşır. Kliniğimizde neden ucuz akrilik veya kırılgan porselen yerine %100 Monolitik Çok Katmanlı Zirkonyum ürettiğimizi keşfedin.',
    materialsSpecLabels: {
      material: 'Materyal Türü',
      strength: 'Kırılma Dayanımı',
      chipping: 'Kırılma / Çatlama Riski',
      lifespan: 'Klinik Ömrü',
    },
    materialsCards: [
      {
        title: 'Monolitik Çok Katmanlı Zirkonyum',
        sub: '100% Yekpare Alman Zirkonyumu + Frezelenmiş Titanyum Bar',
        badge: 'MASTER SMILE ALTIN STANDARDI',
        isGold: true,
        material: '1200+ MPa CAD/CAM Zirkonyum',
        strength: '1200 – 1400 MPa (Ultra Yüksek)',
        chippingRisk: 'Sıfıra Yakın (Yekpare Blok)',
        lifespan: '25+ Yıl / Ömür Boyu',
        features: [
          { text: 'Yoğun çiğneme baskısında sıfır kırılma ve parça atma', status: 'good' },
          { text: 'Pürüzsüz yüzey bakteri tutmaz, Peri-implantitis riskini sıfırlar', status: 'good' },
          { text: 'Gözeneksiz yapı: Asla leke tutmaz, koku yapmaz', status: 'good' },
          { text: 'Çok katmanlı doğal ışık geçirgenliği ile canlı estetik', status: 'good' },
        ],
      },
      {
        title: 'Hibrit Titanyum-Akrilik Köprü',
        sub: 'Metal İskelet + Protez Akriliği ve Plastik Dişler',
        material: 'PMMA Akrilik + Metal İskelet',
        strength: '80 – 120 MPa (Düşük)',
        chippingRisk: 'Yüksek (Dişler kopabilir)',
        lifespan: '3 – 7 Yıl',
        features: [
          { text: 'Çiğneme ile dişler aşınır, kapanış kısalır ve eklem ağrısı yapar', status: 'bad' },
          { text: 'Gözenekli yapı bakterileri çeker, sararır ve koku yapar', status: 'bad' },
          { text: 'Sert gıdalarda tek tek dişlerin kopma riski yüksektir', status: 'bad' },
          { text: 'Sık bakım ve birkaç yılda bir komple değişim gerektirir', status: 'warn' },
        ],
      },
      {
        title: 'Metal Destekli Porselen (PFM)',
        sub: 'Döküm Kobalt-Krom Altyapı + Fırınlanmış Porselen',
        material: 'Katmanlı Feldspatik Porselen',
        strength: '350 – 450 MPa (Orta)',
        chippingRisk: 'Orta - Yüksek (Porselen Atması)',
        lifespan: '8 – 12 Yıl',
        features: [
          { text: '4 implant yükünde porselen kırılması (chipping) sık görülür', status: 'bad' },
          { text: 'Diş eti çekilirse alttaki gri metal çizgi görünür', status: 'bad' },
          { text: 'Ağır yapısı ağızda kaba ve hantal bir his bırakır', status: 'warn' },
          { text: 'Ağız içinde kırılan porselenin tamiri mümkün değildir', status: 'bad' },
        ],
      },
    ],
    materialsTableHeaders: {
      criteria: 'Karşılaştırma Kriteri',
      zirconia: 'Monolitik Zirkonyum (Standartımız)',
      acrylic: 'Hibrit Akrilik (Ucuz Seçenek)',
      pfm: 'Metal Destekli Porselen (PFM)',
    },
    materialsTableRows: [
      {
        criteria: 'Kırılma / Çatlama Riski',
        zirconia: 'Sıfıra Yakın (Yekpare 1200+ MPa)',
        acrylic: 'Yüksek (Diş kopabilir)',
        pfm: 'Orta (Porselen atabilir)',
      },
      {
        criteria: 'Çiğneme Aşınması & Boy Kısalması',
        zirconia: 'Sıfır Aşınma (Sabit Kapanış)',
        acrylic: '3–5 Yılda aşınır (Çene eklem ağrısı)',
        pfm: 'Aşınmaya çok dayanıklı',
      },
      {
        criteria: 'Leke & Koku Tutma',
        zirconia: '100% Gözeneksiz (Sıfır Leke)',
        acrylic: 'Gözenekli (Kahve/koku emer)',
        pfm: 'Glaze cila (Leke tutmaz)',
      },
      {
        criteria: 'Diş Eti Biyouyumluluğu',
        zirconia: 'Antibakteriyel (Eti korur)',
        acrylic: 'Plak biriktirir (Enfeksiyon riski)',
        pfm: 'Metal alerjisi riski',
      },
      {
        criteria: 'Doğal Işık Geçirgenliği',
        zirconia: 'Çok Katmanlı Doğal Canlılık',
        acrylic: 'Yapay plastik matlığı',
        pfm: 'Alttan gri metal yansıması',
      },
      {
        criteria: 'Klinik Ömrü',
        zirconia: 'Ömür Boyu / 25+ Yıl',
        acrylic: '3 – 7 Yıl',
        pfm: '8 – 12 Yıl',
      },
    ],
    packagesTitle: 'İstanbul All-on-4 İmplant Paket Fiyatları',
    packagesSubtitle: 'Titanyum implantlar, kalıcı monolitik zirkonyum köprü, 5 yıldızlı otel konaklaması ve VIP transfer dahil şeffaf çene başı paket fiyatları.',
    durationLabel: 'Tedavi Süresi:',
    includedLabel: 'Pakete Neler Dahil?',
    pricePerArchLabel: 'Çene Başına Paket Fiyatı',
    getQuoteBtn: 'Ücretsiz Kişiselleştirilmiş Teklif Al',
    mostPopularBadge: 'EN ÇOK TERCİH EDİLEN',
    faqTitle: 'All-on-4 İmplant Tedavisi Hakkında Sıkça Sorulan Sorular',
    faqSubtitle: 'İstanbul’daki All-on-4 ameliyatınız, cerrahi biyomekanik ve seyahat süreciniz hakkında klinik olarak doğrulanmış kapsamlı yanıtlar.',
    faqGroup1Badge: 'BÖLÜM 1',
    faqGroup1Title: 'All-on-4’a Özel Cerrahi ve Biyomekanik Sorular',
    faqGroup2Badge: 'BÖLÜM 2',
    faqGroup2Title: 'Sağlık Turizmi, Paket Kapsamı ve Ömür Boyu Garanti',
    ctaTitle: 'All-on-4 İçin Ücretsiz Cerrahi Değerlendirme Alın',
    ctaDesc: 'Panoramik röntgeninizi veya 3D tomografinizi WhatsApp ile iletin. Uzman çene cerrahlarımız kemik yapınızı inceleyerek 24 saat içinde size özel tedavi planınızı ve sabit paket fiyatınızı hazırlasın.',
    whatsappBtn: 'WhatsApp 7/24 Doğrudan Danışma',
    quoteBtn: 'Online Ücretsiz Teklif Formu',
    packages: [
      {
        name: 'ALL-ON-4 – NUCLEOSS',
        brand: 'NucleOSS (Türk Premium Kalite)',
        duration: '3+7 İş Günü (2 Ziyaret)',
        img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
        included: [
          'Çene Başına 4x NucleOSS Titanyum İmplant',
          '12x Sabit Geçici Diş (İlk Ziyarette)',
          '12x Kalıcı Monolitik Zirkonyum Diş',
          '3D CBCT Cerrahi Planlama Kılavuzu',
          'Lokal Anestezi & Cerrahi Sonrası İlaç Seti',
          'VIP Havalimanı - Otel - Klinik Transferleri',
          'Oda & Kahvaltı Otel Konaklaması',
          'Tüm Laboratuvar ve Dijital Tasarım Ücretleri',
        ],
        price: { USD: '$5,700', EUR: '€4,900', GBP: '£4,200' },
      },
      {
        name: 'ALL-ON-4 – DXL GERMAN',
        brand: 'DXL (Alman Mühendisliği)',
        duration: '3+7 İş Günü (2 Ziyaret)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
        included: [
          '4x DXL Alman Titanyum İmplant',
          '12x Sabit Geçici Diş',
          '12x Kalıcı Zirkonyum Köprü',
          '3D Tomografi & Dijital Cerrahi Kılavuz',
          'Lokal Anestezi ve Kontroller',
          'VIP Şoförlü Transferler',
          'Otel Konaklaması (Kahvaltı Dahil)',
          'Tam Laboratuvar & Frezeleme Dahil',
        ],
        price: { USD: '$6,400', EUR: '€5,500', GBP: '£4,750' },
      },
      {
        name: 'ALL-ON-4 – STRAUMANN',
        brand: 'Straumann (İsviçre Altın Standart)',
        duration: '3+7 İş Günü (2 Ziyaret)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
        included: [
          '4x Straumann İsviçre Orijinal İmplant',
          '12x Yüksek Dayanımlı Sabit Geçici Diş',
          '12x Kalıcı Monolitik Çok Katmanlı Zirkonyum',
          'Ömür Boyu Uluslararası Garanti Pasaportu',
          'VIP Özel Şoförlü Transferler',
          '5 Yıldızlı Lüks Otel Konaklaması',
          'Özel Hasta Danışmanı & 7/24 Destek',
        ],
        price: { USD: '$9,300', EUR: '€8,000', GBP: '£6,900' },
        popular: true,
      },
      {
        name: 'ALL-ON-4 – MEGAGEN',
        brand: 'Megagen (AnyRidge Kore Teknolojisi)',
        duration: '3+7 İş Günü (2 Ziyaret)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg',
        included: [
          '4x Megagen AnyRidge Diş İmplantı',
          '12x Sabit Geçici Diş',
          '12x Kalıcı Zirkonyum Diş',
          'CBCT 3D Cerrahi Planlama',
          'Havalimanı-Otel VIP Transfer',
          'Otel Konaklaması',
          'Tüm Laboratuvar Ücretleri',
        ],
        price: { USD: '$6,900', EUR: '€6,000', GBP: '£5,100' },
      },
      {
        name: 'ALL-ON-4 – NEODENT',
        brand: 'Neodent (Straumann Group)',
        duration: '3+7 İş Günü (2 Ziyaret)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg',
        included: [
          '4x Neodent İmplant (Straumann Ailesi)',
          '12x Sabit Geçici Diş',
          '12x Kalıcı Zirkonyum Diş',
          'CBCT Planlama',
          'VIP Transferler',
          'Otel Konaklaması',
          'Laboratuvar İşçiliği',
        ],
        price: { USD: '$6,900', EUR: '€6,000', GBP: '£5,100' },
      },
      {
        name: 'ALL-ON-4 – HIOSSEN',
        brand: 'Hiossen (Amerikan Premium)',
        duration: '3+7 İş Günü (2 Ziyaret)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
        included: [
          '4x Hiossen Amerikan Titanyum İmplant',
          '12x Sabit Geçici Diş',
          '12x Kalıcı Zirkonyum Diş',
          '3D Dijital Planlama',
          'VIP Transfer',
          'Otel Konaklaması',
          'Laboratuvar Ücretleri',
        ],
        price: { USD: '$6,600', EUR: '€5,750', GBP: '£4,900' },
      },
    ],
    faqsPart1: [
      {
        q: 'All-on-4 biyomekanik konsepti sadece 4 implantla tüm çeneyi nasıl taşır?',
        a: 'All-on-4 konsepti, kemik yoğunluğunun en güçlü olduğu ön bölgeye yerleştirilen 2 düz implant ve arka bölgeye 45 dereceye kadar açıyla yerleştirilen 2 implanttan oluşur. Bu üçgen kuvvet dağılımı sayesinde 12–14 dişlik tam çene sabit köprü çiğneme yükünü kemiğe eşit şekilde dağıtarak mükemmel stabilite sağlar.',
      },
      {
        q: 'All-on-4 ile All-on-6 arasındaki kesin cerrahi fark nedir?',
        a: 'All-on-4, kemik erimesi olan veya daha dar çene kemiğine sahip hastalarda arka implantları eğerek kemik tozu (greft) ihtiyacını ortadan kaldırır. All-on-6 ise kemik hacmi daha geniş, çiğneme kasları çok güçlü olan veya genç hastalarda yükü 6 noktaya yaymak için tercih edilir.',
      },
      {
        q: 'All-on-4 sayesinde sinüs lifting ve kemik grefti ameliyatlarından nasıl kaçınılır?',
        a: 'Arka iki implantın 30°–45° açıyla yerleştirilmesi, implantların üst çenede sinüs boşluğunun önünden, alt çenede ise sinir kanalının önünden güvenle geçmesini sağlar. Böylece kemik tozu ekleme ve 6–9 ay kemik bekleme süresi tamamen ortadan kalkar.',
      },
      {
        q: 'Aynı gün sabit geçici dişler nasıl takılır? Asla dişsiz kalır mıyım?',
        a: 'Kliniğimizde asla dişsiz kalmazsınız. İmplant ameliyatının ardından ilk 24 saat içerisinde özel laboratuvarımızda üretilen vidalı sabit geçici köprünüz takılır. İstanbul’dan sabit, fonksiyonel dişlerinizle ayrılırsınız.',
      },
      {
        q: 'Geçici köprü ile 3 aylık kemikleşme döneminde neler yiyebilirim?',
        a: 'İlk 10–12 haftalık osteointegrasyon (kemikle kaynaşma) sürecinde makarna, balık, yumurta, haşlanmış sebze gibi yumuşak gıdalarla beslenilir. Çok sert ve kabuklu yiyeceklerden kaçınmak implantların kemikle %100 kaynaşmasını garanti altına alır.',
      },
      {
        q: 'Kalıcı All-on-4 köprüsünde hangi malzemeler kullanılır?',
        a: 'Kalıcı köprünüz için 1200+ MPa kırılma direncine sahip, leke tutmayan ve doğal ışık geçirgenliğine sahip Alman Monolitik Zirkonyumu ve titanyum alt yapı barı kullanmaktayız. Asla plastik veya dayanıksız reçine kullanılmaz.',
      },
      {
        q: 'All-on-4 sabit midir yoksa takıp çıkarmalı mıdır? Evde bakımı nasıl yapılır?',
        a: 'All-on-4 %100 sabit vidalı bir sistemdir; sadece hekiminiz tarafından çıkarılabilir. Evde günlük bakımı ağız duşu (Waterpik), süperfloss diş ipi ve özel arayüz fırçalarıyla oldukça kolay ve pratiktir.',
      },
      {
        q: 'All-on-4 cerrahisinde 3D Tomografi ve Bilgisayarlı Cerrahi Kılavuz neden hayatidir?',
        a: '3D CBCT tomografi ve dijital cerrahi kılavuzlar sayesinde implantların giriş noktası, açısı ve derinliği milimetrenin onda biri hassasiyetle önceden planlanır; sinir hasarı riski sıfırlanır ve dikişsiz operasyon konforu sunulur.',
      },
      {
        q: 'Ağzımda çekilmesi gereken sallanan dişler varken All-on-4 yapılabilir mi?',
        a: 'Evet. Vakalarımızın büyük çoğunluğunda hasarlı dişlerin çekimi, 4 implantın yerleştirilmesi ve geçici sabit dişin takılması tek bir cerrahi seansta (Immediate Loading) aynı gün tamamlanır.',
      },
      {
        q: 'All-on-4 implantların ömrü ne kadardır ve başarı oranı nedir?',
        a: 'Uluslararası klinik çalışmalarda All-on-4 tedavisinin 15 yılı aşkın başarı oranı %98’in üzerindedir. Günlük hijyen ve yıllık rutin kontrollerle Straumann ve DXL titanyum implantlar bir ömür boyu hizmet eder.',
      },
    ],
    faqsPart2: [
      {
        q: 'İstanbul’a kaç ziyaret yapmam gerekir ve ne kadar kalmalıyım?',
        a: 'Toplam 2 ziyaret gerekir: 1. Ziyaret (3–5 gün): Muayene, cerrahi ve geçici sabit dişlerin takılması. Evinizdeki 3 aylık kemikleşme sonrası 2. Ziyaret (5–7 gün): Dijital ölçü ve kalıcı monolitik zirkonyum köprünüzün takılması.',
      },
      {
        q: 'Master Smile Studio All-on-4 paketine neler dahildir?',
        a: 'Paketimize: Çene başına 4 titanyum implant, sabit geçici köprü, kalıcı zirkonyum köprü, 3D CBCT tomografi, cerrahi ücretler, ilaç paketi, VIP Mercedes transferler ve oda-kahvaltı dahil 4/5 yıldızlı otel konaklaması dahildir.',
      },
      {
        q: 'Bana verilen All-on-4 fiyatı İstanbul’a geldiğimde değişir mi?',
        a: 'Hayır. Röntgeniniz incelenerek tarafınıza sunulan yazılı fiyat teklifi sabittir ve şeffaftır. Kliniğe geldiğinizde hiçbir gizli laboratuvar, anestezi veya transfer ek ücreti talep edilmez.',
      },
      {
        q: 'Ameliyat sırasında ağrı hisseder miyim? Sedasyon seçeneği var mı?',
        a: 'Operasyon bilgisayarlı lokal anestezi altında tamamen ağrısız gerçekleşir. Diş hekimi korkusu veya yoğun heyecan duyan hastalarımız için uzman anestezi hekimimiz eşliğinde Bilinçli Sedasyon (uyku hali) seçeneğimiz de mevcuttur.',
      },
      {
        q: 'Kemik erimesi, diyabet veya sigara kullanımı All-on-4’a engel midir?',
        a: 'Kontrol altındaki diyabette (HbA1c <%7.5) ve kemik erimesinde özel implant yüzeyleriyle işlem güvenle uygulanır. Sigara kullanan hastalarımızda operasyon öncesi ve sonrası 2 haftalık bırakma protokolüyle kemikleşme güvenceye alınır.',
      },
      {
        q: 'Ömür boyu uluslararası garanti ve implant pasaportu nasıl çalışır?',
        a: 'Her hastamıza uygulanan implantların marka, seri numarası, lot kodu ve tork değerlerini içeren resmi Uluslararası İmplant Pasaportu verilir. Straumann ve DXL implantlarımız ömür boyu uluslararası parça garantilidir.',
      },
      {
        q: 'Kendi ülkeme döndüğümde kontroller ve takip nasıl yürütülür?',
        a: 'Uluslararası hasta koordinasyon ekibimiz WhatsApp ve görüntülü görüşme ile 7/24 yanınızdadır. Rutin kontrolleriniz dijital olarak takip edilir ve ihtiyaç halinde ülkenizdeki hekiminize teknik şemalar iletilir.',
      },
    ],
  },
  de: {
    introBadge: 'VOLLKIEFER-RESTAURATION',
    introTitle: 'All-on-4 Zahnimplantate in Istanbul, Türkei',
    introLead: 'Feste, dauerhafte Zähne in nur zwei Besuchen – 3D-computergeführt und mit Schweizer/Deutscher Premium-Qualität.',
    introP1: 'Bei Master Smile Studio ist All-on-4 unsere führende Lösung für Vollkieferrestaurationen bei fortgeschrittenem Zahnverlust. Da alle Eingriffe direkt von unseren leitenden Kieferchirurgen und Klinikgründern durchgeführt werden, garantieren wir höchste chirurgische Präzision.',
    introP2: 'Das All-on-4-Protokoll verwendet 4 Titanimplantate pro Kiefer: 2 gerade im Frontbereich und 2 im 45-Grad-Winkel im Seitenzahnbereich. Diese Neigung schützt die Kieferhöhle und macht bei 90 % der Patienten einen Knochenaufbau oder Sinuslift überflüssig.',
    introP3Lead: 'Benötigen Sie zusätzliche Stabilität? Entdecken Sie unsere ',
    introP3LinkAll6: 'All-on-6 Zahnimplantate',
    introP3Mid: ', spezielle ',
    introP3LinkZygoma: 'Jochbeinimplantate (Zygoma)',
    introP3And: ' sowie ',
    introP3LinkSinus: 'Sinuslift-Behandlungen',
    introP3Tail: ' in unserer modernen Klinik.',
        materialsTitle: 'All-on-4 Brückenmaterialien: Warum wir monolithisches Zirkon verwenden',
    materialsSubtitle: 'Bei All-on-4 tragen 4 Implantate die gesamte Kaukraft des Kiefers (200 bis 600 Newton). Erfahren Sie, warum wir ausschließlich 100% monolithisches Mehrschicht-Zirkon anstelle von billigem Acryl oder brüchiger Keramik einsetzen.',
    materialsSpecLabels: {
      material: 'Materialtyp',
      strength: 'Biegefestigkeit',
      chipping: 'Chipping-Risiko',
      lifespan: 'Lebensdauer',
    },
    materialsCards: [
      {
        title: 'Monolithisches Mehrschicht-Zirkon',
        sub: '100% solides deutsches Zirkon + gefräster Titansteg',
        badge: 'MASTER SMILE GOLDSTANDARD',
        isGold: true,
        material: '1200+ MPa CAD/CAM Zirkon',
        strength: '1200 – 1400 MPa (Extrem hoch)',
        chippingRisk: 'Nahezu Null (Vollmonolithisch)',
        lifespan: '25+ Jahre / Lebenslang',
        features: [
          { text: 'Kein Chipping oder Bruch bei starken Kaukräften', status: 'good' },
          { text: 'Ultra-glatte Oberfläche verhindert Plaque & Periimplantitis', status: 'good' },
          { text: 'Porenfrei: 100% fleckenresistent & geruchsneutral', status: 'good' },
          { text: 'Mehrschicht-Farbverlauf für natürliche Zahnästhetik', status: 'good' },
        ],
      },
      {
        title: 'Hybrid-Titan-Acryl-Brücke',
        sub: 'Gussmetallrahmen + Prothesen-Acryl & Kunststoffzähne',
        material: 'PMMA-Acryl + Metallgerüst',
        strength: '80 – 120 MPa (Gering)',
        chippingRisk: 'Hoch (Zähne können abplatzen)',
        lifespan: '3 – 7 Jahre',
        features: [
          { text: 'Abrasiver Abrieb verkürzt Zähne & verursacht Kiefergelenkschmerzen', status: 'bad' },
          { text: 'Poröses Harz absorbiert Bakterien, Öle & Gerüche', status: 'bad' },
          { text: 'Einzelne Zähne können sich bei harter Kost lösen', status: 'bad' },
          { text: 'Erfordert häufige Wartung und Gesamterneuerung', status: 'warn' },
        ],
      },
      {
        title: 'Metallkeramik (PFM)',
        sub: 'Guss-Kobalt-Chrom-Gerüst + gebrannte Keramik',
        material: 'Geschichtete Feldspatkeramik',
        strength: '350 – 450 MPa (Mittel)',
        chippingRisk: 'Mäßig bis hoch (Keramikabplatzungen)',
        lifespan: '8 – 12 Jahre',
        features: [
          { text: 'Keramik splittert unter hoher 4-Implantat-Last leicht ab', status: 'bad' },
          { text: 'Dunkler Metallrand wird sichtbar bei Zahnfleischrückgang', status: 'bad' },
          { text: 'Hohes Eigengewicht fühlt sich im Mund sperrig an', status: 'warn' },
          { text: 'Reparatur im Mund bei abgeplatzter Keramik unmöglich', status: 'bad' },
        ],
      },
    ],
    materialsTableHeaders: {
      criteria: 'Vergleichskriterium',
      zirconia: 'Monolithisches Zirkon (Unser Standard)',
      acrylic: 'Hybrid-Acryl (Budget-Kliniken)',
      pfm: 'Metallkeramik (PFM)',
    },
    materialsTableRows: [
      {
        criteria: 'Bruch- & Chipping-Risiko',
        zirconia: 'Nahezu Null (Solide 1200+ MPa)',
        acrylic: 'Hoch (Zähne können ausbrechen)',
        pfm: 'Mittel (Keramikabplatzungen)',
      },
      {
        criteria: 'Kauabrieb & Bissabsenkung',
        zirconia: 'Kein Abrieb (Stabiler Biss)',
        acrylic: 'Nutzt sich in 3–5 J. ab (Kiefergelenkschmerz)',
        pfm: 'Sehr abriebfest',
      },
      {
        criteria: 'Verfärbung & Geruchsaufnahme',
        zirconia: '100% Porenfrei (Keine Flecken)',
        acrylic: 'Porös (Nimmt Kaffee & Gerüche an)',
        pfm: 'Glasiert (Fleckenresistent)',
      },
      {
        criteria: 'Zahnfleisch-Biokompatibilität',
        zirconia: 'Antibakteriell (Schützt Gewebe)',
        acrylic: 'Plaquefalle (Infektionsrisiko)',
        pfm: 'Mögliche Metallsensibilität',
      },
      {
        criteria: 'Natürliche Lichtdurchlässigkeit',
        zirconia: 'Natürliche Mehrschicht-Vitalität',
        acrylic: 'Flache Kunststoff-Opazität',
        pfm: 'Dunkle Metallreflexion',
      },
      {
        criteria: 'Klinische Lebensdauer',
        zirconia: 'Lebenslang / 25+ Jahre',
        acrylic: '3 – 7 Jahre',
        pfm: '8 – 12 Jahre',
      },
    ],
    packagesTitle: 'All-on-4 Paketpreise & Kosten in Istanbul',
    packagesSubtitle: 'Transparente Komplettpakete pro Kiefer inklusive Titanimplantaten, Zirkonbrücke, 5-Sterne-Hotel und VIP-Transfers.',
    durationLabel: 'Behandlungsdauer:',
    includedLabel: 'Im Paket enthalten:',
    pricePerArchLabel: 'Preis pro Kiefer',
    getQuoteBtn: 'Kostenloses Angebot anfordern',
    mostPopularBadge: 'AM BELIEBTESTEN',
    faqTitle: 'Häufig gestellte Fragen zu All-on-4 Implantaten',
    faqSubtitle: 'Klinisch fundierte Antworten zu chirurgischen Details, Heilungsphasen und Ihrem Reiseablauf nach Istanbul.',
    faqGroup1Badge: 'TEIL 1',
    faqGroup1Title: 'Spezifische klinische & biomechanische All-on-4 Fragen',
    faqGroup2Badge: 'TEIL 2',
    faqGroup2Title: 'Gesundheitstourismus, Inklusivleistungen & Garantie',
    ctaTitle: 'Kostenlose chirurgische All-on-4 Bewertung anfordern',
    ctaDesc: 'Senden Sie uns Ihr Röntgenbild per WhatsApp. Unsere Kieferchirurgen analysieren Ihre Knochenstruktur und erstellen innerhalb von 24 Stunden Ihren individuellen Behandlungsplan.',
    whatsappBtn: 'WhatsApp 24/7 Direktberatung',
    quoteBtn: 'Kostenloses Online-Formular',
    packages: [
      {
        name: 'ALL-ON-4 – NUCLEOSS',
        brand: 'NucleOSS (Türkische Premium-Qualität)',
        duration: '3+7 Arbeitstage (2 Besuche)',
        img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
        included: [
          '4x NucleOSS Implantate pro Kiefer',
          '12x Feste provisorische Zähne',
          '12x Permanente Zirkonbrücke',
          '3D CBCT Operationsschablone',
          'Lokalanästhesie & Medikamentenset',
          'VIP Flughafen-Hotel Transfers',
          'Hotelaufenthalt mit Frühstück',
          'Laborarbeiten komplett inklusive',
        ],
        price: { USD: '$5,700', EUR: '€4,900', GBP: '£4,200' },
      },
      {
        name: 'ALL-ON-4 – DXL GERMAN',
        brand: 'DXL (Deutsche Ingenieurskunst)',
        duration: '3+7 Arbeitstage (2 Besuche)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
        included: [
          '4x DXL Deutsche Titanimplantate',
          '12x Feste provisorische Zähne',
          '12x Finale Zirkonbrücke',
          '3D CBCT Planung',
          'Lokalanästhesie & Nachsorge',
          'VIP Transfers & Hotel inklusive',
          'Komplette Labor- & Fräsarbeiten',
        ],
        price: { USD: '$6,400', EUR: '€5,500', GBP: '£4,750' },
      },
      {
        name: 'ALL-ON-4 – STRAUMANN',
        brand: 'Straumann (Schweizer Goldstandard)',
        duration: '3+7 Arbeitstage (2 Besuche)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
        included: [
          '4x Straumann Schweizer Titanimplantate',
          '12x Feste Provisorien in Premium-Qualität',
          '12x Monolithische mehrschichtige Zirkonbrücke',
          'Lebenslanger internationaler Garantiepass',
          'VIP Chauffeur & 5-Sterne-Luxushotel',
          'Persönliche deutschsprachige Betreuung',
        ],
        price: { USD: '$9,300', EUR: '€8,000', GBP: '£6,900' },
        popular: true,
      },
      {
        name: 'ALL-ON-4 – MEGAGEN',
        brand: 'Megagen AnyRidge',
        duration: '3+7 Arbeitstage (2 Besuche)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg',
        included: [
          '4x Megagen AnyRidge Implantate',
          '12x Feste provisorische Zähne',
          '12x Permanente Zirkonbrücke',
          'CBCT Planung & VIP Transfer',
          'Hotelaufenthalt mit Frühstück',
        ],
        price: { USD: '$6,900', EUR: '€6,000', GBP: '£5,100' },
      },
      {
        name: 'ALL-ON-4 – NEODENT',
        brand: 'Neodent (Straumann Group)',
        duration: '3+7 Arbeitstage (2 Besuche)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg',
        included: [
          '4x Neodent Implantate',
          '12x Feste provisorische Zähne',
          '12x Finale Zirkonbrücke',
          'VIP Transfers & Hotel',
        ],
        price: { USD: '$6,900', EUR: '€6,000', GBP: '£5,100' },
      },
      {
        name: 'ALL-ON-4 – HIOSSEN',
        brand: 'Hiossen Premium USA',
        duration: '3+7 Arbeitstage (2 Besuche)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
        included: [
          '4x Hiossen Titanimplantate',
          '12x Feste provisorische Zähne',
          '12x Finale Zirkonbrücke',
          'VIP Transfers & Hotel',
        ],
        price: { USD: '$6,600', EUR: '€5,750', GBP: '£4,900' },
      },
    ],
    faqsPart1: [
      {
        q: 'Wie trägt das All-on-4-Konzept mit nur 4 Implantaten den gesamten Kiefer?',
        a: 'Das Konzept kombiniert 2 gerade Implantate im dichten Frontzahnbereich mit 2 im 45°-Winkel geneigten Implantaten im Seitenzahnbereich. Dies erzeugt ein stabiles biomechanisches Kraftdreieck für 12–14 feste Zähne.',
      },
      {
        q: 'Was ist der genaue chirurgische Unterschied zwischen All-on-4 und All-on-6?',
        a: 'All-on-4 ist ideal bei mäßigem Knochenangebot, um Knochenaufbauten zu vermeiden. All-on-6 verteilt die Kaukraft bei breiteren Kiefern und jüngeren Patienten auf 6 Verankerungspunkte.',
      },
      {
        q: 'Wie verhindert All-on-4 einen Sinuslift oder Knochenaufbau?',
        a: 'Durch die 30°–45° Neigung der hinteren Implantate werden die Kieferhöhlen im Oberkiefer und die Nervenbahnen im Unterkiefer sicher umgangen.',
      },
      {
        q: 'Wie funktionieren feste provisorische Zähne am ersten Tag?',
        a: 'Innerhalb von 24 Stunden nach der OP wird eine festsitzende, verschraubte Acrylbrücke eingesetzt. Sie verlassen unsere Klinik an keinem Tag ohne feste Zähne.',
      },
      {
        q: 'Was kann ich während der 3-monatigen Einheilphase essen?',
        a: 'In den ersten 10–12 Wochen empfiehlt sich weiche Kost (Fisch, Nudeln, Eier, weiches Gemüse), um die Osseointegration der Implantate zu schützen.',
      },
      {
        q: 'Welche Materialien werden für die endgültige All-on-4 Brücke verwendet?',
        a: 'Wir fertigen die permanente Brücke aus monolithischem deutschem Mehrschicht-Zirkon (1200+ MPa) mit einer Titan-Präzisionsbasis. Kein spröder Kunststoff.',
      },
      {
        q: 'Ist die All-on-4 Brücke fest oder herausnehmbar?',
        a: 'Sie ist zu 100 % fest verschraubt und kann nur vom Zahnarzt gelöst werden. Die Pflege erfolgt einfach mit Munddusche (Waterpik) und SuperFloss.',
      },
      {
        q: 'Warum ist eine 3D-Bohrschablone (Surgical Guide) bei All-on-4 unerlässlich?',
        a: 'Mithilfe von 3D-DVT-Scans wird eine individuelle Schablone gedruckt, die Winkel und Tiefe auf den Zehntelmillimeter genau vorgibt und Nervenschäden ausschließt.',
      },
      {
        q: 'Können lockere oder beschädigte Restzähne in derselben Sitzung entfernt werden?',
        a: 'Ja. Extraktion, Implantation von 4 Titanpfosten und das Einsetzen der festen provisorischen Brücke erfolgen in einem einzigen Eingriff.',
      },
      {
        q: 'Wie hoch ist die Erfolgsrate und Lebensdauer von All-on-4?',
        a: 'Internationale Langzeitstudien belegen eine Erfolgsquote von über 98 % nach 15+ Jahren. Bei guter Mundhygiene halten Straumann/DXL Implantate ein Leben lang.',
      },
    ],
    faqsPart2: [
      {
        q: 'Wie viele Besuche in Istanbul sind nötig und wie lange bleibe ich?',
        a: 'Insgesamt 2 Besuche: 1. Besuch (3–5 Tage): OP & festes Provisorium. Nach 3 Monaten Einheilung folgt der 2. Besuch (5–7 Tage) für die finale Zirkonbrücke.',
      },
      {
        q: 'Was beinhaltet das Komplettpaket von Master Smile Studio?',
        a: '4 Implantate pro Kiefer, festes Provisorium, finale Zirkonbrücke, 3D-Tomographie, alle Operationen, Medikamente, VIP-Transfers und 4/5-Sterne-Hotel mit Frühstück.',
      },
      {
        q: 'Ändert sich mein Preis nach meiner Ankunft in Istanbul?',
        a: 'Nein. Ihr schriftliches Angebot auf Basis Ihres Röntgenbildes ist ein garantierter Festpreis ohne versteckte Zusatzkosten.',
      },
      {
        q: 'Habe ich während der OP Schmerzen? Gibt es Sedierung?',
        a: 'Der Eingriff ist dank digitaler Lokalanästhesie vollkommen schmerzfrei. Auf Wunsch bieten wir eine Dämmerschlafsedierung (IV-Sedierung) an.',
      },
      {
        q: 'Ist All-on-4 bei Osteoporose, Diabetes oder für Raucher möglich?',
        a: 'Ja. Bei gut eingestelltem Diabetes und mäßiger Osteoporose ist die Behandlung sehr sicher. Raucher sollten ein 2-wöchiges Rauchstopp-Protokoll einhalten.',
      },
      {
        q: 'Wie funktioniert die lebenslange Garantie und der Implantatpass?',
        a: 'Sie erhalten einen offiziellen internationalen Implantatpass mit Seriennummern und Herstellerzertifikaten für weltweite Gültigkeit.',
      },
      {
        q: 'Wie läuft die Nachsorge in Deutschland, Österreich oder der Schweiz ab?',
        a: 'Unser mehrsprachiges Patiententeam betreut Sie per WhatsApp und Video. Wir stellen Ihrem Hauszahnarzt bei Bedarf alle technischen Unterlagen bereit.',
      },
    ],
  },
  pl: {
    introBadge: 'PEŁNA ODBUDOWA ŁUKU ZĘBOWEGO',
    introTitle: 'Implanty Zębowe All-on-4 w Stambule, Turcja',
    introLead: 'Stałe, stabilne zęby w zaledwie dwóch wizytach – precyzja cyfrowa 3D i szwajcarskie/niemieckie materiały.',
    introP1: 'W Master Smile Studio metoda All-on-4 jest naszym flagowym rozwiązaniem dla pacjentów z bezzębiem lub zaawansowanym uszkodzeniem zębów. Wszystkie zabiegi wykonują bezpośrednio nasi doświadczeni chirurdzy szczękowi i założyciele kliniki.',
    introP2: 'Protokół All-on-4 opiera się na 4 implantach tytanowych: 2 prostych z przodu i 2 wprowadzonych pod kątem 45 stopni z tyłu. Zapobiega to uszkodzeniu zatok i eliminuje potrzebę przeszczepu kości u 90% pacjentów.',
    introP3Lead: 'Sprawdź również nasze zabiegi: ',
    introP3LinkAll6: 'Implanty All-on-6',
    introP3Mid: ', specjalistyczne ',
    introP3LinkZygoma: 'Implanty Zygomatyczne',
    introP3And: ' oraz ',
    introP3LinkSinus: 'Podniesienie Dna Zatoki (Sinus Lift)',
    introP3Tail: ' w naszej klinice.',
        materialsTitle: 'Materiały Mostów All-on-4: Dlaczego Wybieramy Monolityczny Cyrkon?',
    materialsSubtitle: 'W protokole All-on-4 4 implanty przenoszą całą siłę żucia (od 200 do 600 N). Zobacz, dlaczego standardowo wykonujemy mosty w 100% z monolitycznego cyrkonu zamiast nietrwałego akrylu lub metalu.',
    materialsSpecLabels: {
      material: 'Typ Materiału',
      strength: 'Wytrzymałość na Zginanie',
      chipping: 'Ryzyko Ukruszenia',
      lifespan: 'Żywotność',
    },
    materialsCards: [
      {
        title: 'Monolityczny Wielowarstwowy Cyrkon',
        sub: '100% lity niemiecki cyrkon + frezowana belka tytanowa',
        badge: 'ZŁOTY STANDARD MASTER SMILE',
        isGold: true,
        material: '1200+ MPa CAD/CAM Cyrkon',
        strength: '1200 – 1400 MPa (Ultra Wysoka)',
        chippingRisk: 'Prawie Zero (Monolit)',
        lifespan: '25+ Lat / Dożywotnio',
        features: [
          { text: 'Zero ukruszeń i pęknięć przy dużym nacisku żucia', status: 'good' },
          { text: 'Idealnie gładka powierzchnia zapobiega periimplantitis', status: 'good' },
          { text: 'Brak porowatości: odporny na plamy i zapachy', status: 'good' },
          { text: 'Wielowarstwowa przezierność daje w pełni naturalny uśmiech', status: 'good' },
        ],
      },
      {
        title: 'Most Hybrydowy Tytanowo-Akrylowy',
        sub: 'Odlewany szkielet metalowy + akryl i zęby kompozytowe',
        material: 'Akryl PMMA + Metal',
        strength: '80 – 120 MPa (Niska)',
        chippingRisk: 'Wysokie (Zęby mogą odpadać)',
        lifespan: '3 – 7 Lat',
        features: [
          { text: 'Ścieranie zębów obniża zgryz i powoduje ból stawu skroniowego', status: 'bad' },
          { text: 'Porowaty akryl chłonie bakterie, kawę i powoduje nieświeży oddech', status: 'bad' },
          { text: 'Pojedyncze zęby mogą odpaść przy twardym jedzeniu', status: 'bad' },
          { text: 'Wymaga częstego serwisu i całkowitej wymiany po paru latach', status: 'warn' },
        ],
      },
      {
        title: 'Most Metalowo-Ceramiczny (PFM)',
        sub: 'Szkielet Co-Cr + napalana porcelana',
        material: 'Warstwowa Porcelana Skaleniowa',
        strength: '350 – 450 MPa (Średnia)',
        chippingRisk: 'Umiarkowane do Wysokiego (Odpryski)',
        lifespan: '8 – 12 Lat',
        features: [
          { text: 'Porcelana odpryskuje pod wpływem sił na 4 implantach', status: 'bad' },
          { text: 'Ciemna linia metalu widoczna przy cofnięciu dziąseł', status: 'bad' },
          { text: 'Duża waga daje uczucie ciężkości w jamie ustnej', status: 'warn' },
          { text: 'Naprawa odprysku w ustach jest technicznie niemożliwa', status: 'bad' },
        ],
      },
    ],
    materialsTableHeaders: {
      criteria: 'Kryterium Porównania',
      zirconia: 'Monolityczny Cyrkon (Nasz Standard)',
      acrylic: 'Hybryda Akrylowa (Tanie Kliniki)',
      pfm: 'Metaloceramika (PFM)',
    },
    materialsTableRows: [
      {
        criteria: 'Ryzyko Pęknięcia / Odprysku',
        zirconia: 'Bliskie Zeru (Lity 1200+ MPa)',
        acrylic: 'Wysokie (Zęby odpadają)',
        pfm: 'Umiarkowane (Odpryski ceramiki)',
      },
      {
        criteria: 'Ścieranie i Obniżenie Zgryzu',
        zirconia: 'Brak Ścierania (Stabilny Zgryz)',
        acrylic: 'Ściera się w 3–5 l. (Ból stawów)',
        pfm: 'Bardzo odporny na ścieranie',
      },
      {
        criteria: 'Przebarwienia i Zapachy',
        zirconia: '100% Bezporowy (Zero Plam)',
        acrylic: 'Porowaty (Chłonie kawę i zapachy)',
        pfm: 'Glazurowany (Odporny)',
      },
      {
        criteria: 'Biozgodność z Dziąsłem',
        zirconia: 'Przeciwbakteryjny (Chroni kość)',
        acrylic: 'Gromadzi płytkę (Ryzyko infekcji)',
        pfm: 'Możliwa wrażliwość na metal',
      },
      {
        criteria: 'Naturalna Przezierność',
        zirconia: 'Wielowarstwowa Naturalność',
        acrylic: 'Sztuczny matowy plastik',
        pfm: 'Szary odblask metalu',
      },
      {
        criteria: 'Trwałość Kliniczna',
        zirconia: 'Dożywotnia / 25+ Lat',
        acrylic: '3 – 7 Lat',
        pfm: '8 – 12 Lat',
      },
    ],
    packagesTitle: 'Pakiety i Ceny All-on-4 w Stambule',
    packagesSubtitle: 'Przejrzyste pakiety cenowe za łuk zębowy z implantami tytanowymi, mostem cyrkonowym, hotelem 5-gwiazdkowym i transferami VIP.',
    durationLabel: 'Czas leczenia:',
    includedLabel: 'Co zawiera pakiet:',
    pricePerArchLabel: 'Cena za jeden łuk zębowy',
    getQuoteBtn: 'Otrzymaj Bezpłatną Wycenę',
    mostPopularBadge: 'NAJCZĘŚCIEJ WYBIERANY',
    faqTitle: 'Najczęściej Zadawane Pytania o Implanty All-on-4',
    faqSubtitle: 'Szczegółowe, medycznie zweryfikowane odpowiedzi dotyczące zabiegu, procesu gojenia i podróży do Stambułu.',
    faqGroup1Badge: 'CZĘŚĆ 1',
    faqGroup1Title: 'Pytania Kliniczne i Biomechaniczne All-on-4',
    faqGroup2Badge: 'CZĘŚĆ 2',
    faqGroup2Title: 'Turystyka Medyczna, Pakiet i Dożywotnia Gwarancja',
    ctaTitle: 'Uzyskaj Bezpłatną Ocenę Chirurgiczną All-on-4',
    ctaDesc: 'Prześlij zdjęcie pantomograficzne przez WhatsApp. Nasi chirurdzy przeanalizują stan kości i przygotują plan leczenia w 24h.',
    whatsappBtn: 'WhatsApp 24/7 Bezpośrednia Konsultacja',
    quoteBtn: 'Internetowy Formularz Wyceny',
    packages: [
      {
        name: 'ALL-ON-4 – NUCLEOSS',
        brand: 'NucleOSS (Turecka Jakość Premium)',
        duration: '3+7 Dni Roboczych (2 Wizyty)',
        img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
        included: [
          '4x Implanty NucleOSS na łuk',
          '12x Stałe zęby tymczasowe',
          '12x Stały most cyrkonowy',
          'Szablon chirurgiczny 3D CBCT',
          'Znieczulenie i leki pozabiegowe',
          'Transfery VIP lotnisko-hotel',
          'Hotel ze śniadaniami',
          'Pełne prace laboratoryjne',
        ],
        price: { USD: '$5,700', EUR: '€4,900', GBP: '£4,200' },
      },
      {
        name: 'ALL-ON-4 – DXL GERMAN',
        brand: 'DXL (Niemiecka Inżynieria)',
        duration: '3+7 Dni Roboczych (2 Wizyty)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
        included: [
          '4x Niemieckie implanty tytanowe DXL',
          '12x Stałe zęby tymczasowe',
          '12x Ostateczny most cyrkonowy',
          'Planowanie 3D CBCT',
          'Znieczulenie miejscowe i opieka',
          'Transfery VIP i hotel w cenie',
        ],
        price: { USD: '$6,400', EUR: '€5,500', GBP: '£4,750' },
      },
      {
        name: 'ALL-ON-4 – STRAUMANN',
        brand: 'Straumann (Szwajcarski Złoty Standard)',
        duration: '3+7 Dni Roboczych (2 Wizyty)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
        included: [
          '4x Szwajcarskie implanty Straumann',
          '12x Tymczasowy most wysokiej klasy',
          '12x Monolityczny wielowarstwowy most cyrkonowy',
          'Dożywotni Międzynarodowy Paszport Gwarancyjny',
          'Transfery VIP i 5-gwiazdkowy hotel',
          'Dedykowany polskojęzyczny koordynator',
        ],
        price: { USD: '$9,300', EUR: '€8,000', GBP: '£6,900' },
        popular: true,
      },
      {
        name: 'ALL-ON-4 – MEGAGEN',
        brand: 'Megagen AnyRidge',
        duration: '3+7 Dni Roboczych (2 Wizyty)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg',
        included: ['4x Implanty Megagen', '12x Zęby tymczasowe', '12x Most cyrkonowy', 'Hotel i transfery'],
        price: { USD: '$6,900', EUR: '€6,000', GBP: '£5,100' },
      },
      {
        name: 'ALL-ON-4 – NEODENT',
        brand: 'Neodent (Grupa Straumann)',
        duration: '3+7 Dni Roboczych (2 Wizyty)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg',
        included: ['4x Implanty Neodent', '12x Zęby tymczasowe', '12x Most cyrkonowy', 'Hotel i transfery'],
        price: { USD: '$6,900', EUR: '€6,000', GBP: '£5,100' },
      },
      {
        name: 'ALL-ON-4 – HIOSSEN',
        brand: 'Hiossen USA',
        duration: '3+7 Dni Roboczych (2 Wizyty)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
        included: ['4x Implanty Hiossen', '12x Zęby tymczasowe', '12x Most cyrkonowy', 'Hotel i transfery'],
        price: { USD: '$6,600', EUR: '€5,750', GBP: '£4,900' },
      },
    ],
    faqsPart1: [
      {
        q: 'Jak działa biomechanika All-on-4 przy użyciu tylko 4 implantów?',
        a: 'Koncepcja łączy 2 implanty proste w przedniej części kości oraz 2 implanty tylne nachylone pod kątem 45 stopni. Rozkład sił pozwala na bezpieczne utrzymanie mostu z 12–14 zębami.',
      },
      {
        q: 'Jaka jest różnica między All-on-4 a All-on-6?',
        a: 'All-on-4 stosuje się przy umiarkowanym zaniku kości bez przeszczepów. All-on-6 rozkłada siłę żucia na 6 punktów przy większej objętości kości i u młodszych pacjentów.',
      },
      {
        q: 'Jak All-on-4 pozwala uniknąć podniesienia zatoki (Sinus Lift)?',
        a: 'Dzięki nachyleniu tylnych implantów pod kątem 30°–45° omijamy zatokę szczękową z przodu, eliminując konieczność 6–9 miesięcy oczekiwania na zrost kości.',
      },
      {
        q: 'Jak działają stałe zęby tymczasowe w 1. dniu? Czy będę bez zębów?',
        a: 'W ciągu 24h po zabiegu przykręcamy stały most akrylowy. Nigdy nie opuścisz kliniki bez zębów.',
      },
      {
        q: 'Co mogę jeść podczas 3-miesięcznego okresu gojenia?',
        a: 'Zalecamy dietę miękką (makarony, ryby, jajka, gotowane warzywa), aby chronić proces osteointegracji implantów.',
      },
      {
        q: 'Z jakich materiałów wykonany jest ostateczny most All-on-4?',
        a: 'Używamy monolitycznego niemieckiego tlenku cyrkonu (1200+ MPa) na podbudowie tytanowej CAD/CAM. Brak tworzyw sztucznych.',
      },
      {
        q: 'Czy most All-on-4 jest stały czy wyjmowany?',
        a: 'Jest w 100% stały, przykręcany na stałe. Higienę utrzymuje się irygatorem (Waterpik) i nicią SuperFloss.',
      },
      {
        q: 'Dlaczego szablon chirurgiczny 3D jest kluczowy w All-on-4?',
        a: 'Szablon 3D gwarantuje precyzję wprowadzenia implantów co do dziesiątych części milimetra, eliminując ryzyko uszkodzenia nerwów.',
      },
      {
        q: 'Czy można wykonać zabieg, jeśli mam jeszcze ruszające się zęby?',
        a: 'Tak, ekstrakcja, wszczepienie 4 implantów i montaż mostu tymczasowego odbywają się podczas tej samej wizyty.',
      },
      {
        q: 'Jaka jest żywotność i wskaźnik sukcesu All-on-4?',
        a: 'Wskaźnik sukcesu przekracza 98% po 15 latach. Przy prawidłowej higienie implanty Straumann/DXL służą przez całe życie.',
      },
    ],
    faqsPart2: [
      {
        q: 'Ile wizyt w Stambule jest wymaganych i na jak długo?',
        a: '2 wizyty: 1. wizyta (3–5 dni) – zabieg i zęby tymczasowe; 2. wizyta po 3 miesiącach (5–7 dni) – ostateczny most cyrkonowy.',
      },
      {
        q: 'Co zawiera pakiet Master Smile Studio?',
        a: '4 implanty na łuk, most tymczasowy, most cyrkonowy, tomografia 3D, zabiegi, leki, transfery VIP i hotel ze śniadaniami.',
      },
      {
        q: 'Czy cena All-on-4 zmieni się po przyjeździe do Stambułu?',
        a: 'Nie, wycena na podstawie zdjęcia rentgenowskiego jest gwarantowana i niezmienna.',
      },
      {
        q: 'Czy zabieg boli? Czy dostępna jest sedacja?',
        a: 'Zabieg jest bezbolesny w znieczuleniu miejscowym. Dla osób z lękiem oferujemy bezpieczną sedację dożylną (IV Sedation).',
      },
      {
        q: 'Czy cukrzyca lub palenie tytoniu są przeciwwskazaniem?',
        a: 'Wyrównana cukrzyca nie jest przeszkodą. Palaczom zalecamy 2-tygodniowy protokół powstrzymania się od palenia.',
      },
      {
        q: 'Jak działa gwarancja i paszport implantologiczny?',
        a: 'Otrzymujesz oficjalny międzynarodowy paszport z numerami seryjnymi potwierdzający dożywotnią gwarancję producenta.',
      },
      {
        q: 'Jak przebiega opieka po powrocie do Polski?',
        a: 'Nasz zespół koordynatorów pozostaje w stałym kontakcie przez WhatsApp i wideokonsultacje.',
      },
    ],
  },
  pt: {
    introBadge: 'RESTAURAÇÃO TOTAL DO ARCO',
    introTitle: 'Implantes Dentários All-on-4 em Istambul, Turquia',
    introLead: 'Dentes fixos e permanentes em duas visitas — guiados por computador 3D com titânio suíço e alemão.',
    introP1: 'No Master Smile Studio, o tratamento All-on-4 é a nossa solução de excelência para restauração total do arco dentário em pacientes com perda dentária severa. Todos os procedimentos cirúrgicos são realizados diretamente por cirurgiões seniores e fundadores da clínica.',
    introP2: 'O protocolo All-on-4 utiliza 4 implantes de titânio por arcada: 2 retos na região anterior e 2 inclinados até 45 graus na região posterior. Essa inclinação preserva os seios maxilares e elimina a necessidade de enxerto ósseo em 90% dos casos.',
    introP3Lead: 'Conheça também: ',
    introP3LinkAll6: 'Implantes All-on-6',
    introP3Mid: ', ',
    introP3LinkZygoma: 'Implantes Zigomáticos',
    introP3And: ' e ',
    introP3LinkSinus: 'Elevação de Seio Maxilar (Sinus Lift)',
    introP3Tail: ' na nossa clínica.',
        materialsTitle: 'Materiais de Prótese All-on-4: Por que Usamos Zircônia Monolítica',
    materialsSubtitle: 'No All-on-4, 4 implantes suportam toda a força mastigatória da mandíbula (200 a 600 Newtons). Saiba por que produzimos exclusivamente Zircônia Monolítica Multicamadas em vez de acrílico ou metal.',
    materialsSpecLabels: {
      material: 'Tipo de Material',
      strength: 'Resistência Flexural',
      chipping: 'Risco de Fratura',
      lifespan: 'Vida Útil',
    },
    materialsCards: [
      {
        title: 'Zircônia Monolítica Multicamadas',
        sub: '100% Zircônia Alemã Maciça + Barra de Titânio Fresada',
        badge: 'PADRÃO OURO MASTER SMILE',
        isGold: true,
        material: '1200+ MPa CAD/CAM Zircônia',
        strength: '1200 – 1400 MPa (Ultra Alta)',
        chippingRisk: 'Praticamente Zero (Monolítica)',
        lifespan: '25+ Anos / Toda a Vida',
        features: [
          { text: 'Zero lascamento ou fraturas sob forte mastigação', status: 'good' },
          { text: 'Superfície lisa previne placa bacteriana e Peri-implantite', status: 'good' },
          { text: 'Não poroso: 100% resistente a manchas e odores', status: 'good' },
          { text: 'Degradê multicamadas com translucidez natural', status: 'good' },
        ],
      },
      {
        title: 'Ponte Híbrida Titânio-Acrílico',
        sub: 'Estrutura Metálica + Resina Acrílica e Dentes Plásticos',
        material: 'Acrílico PMMA + Estrutura Metálica',
        strength: '80 – 120 MPa (Baixa)',
        chippingRisk: 'Alto (Dentes podem soltar)',
        lifespan: '3 – 7 Anos',
        features: [
          { text: 'Desgaste abrasivo encurta dentes e causa dores articulares', status: 'bad' },
          { text: 'Resina porosa absorve bactérias, café e odores', status: 'bad' },
          { text: 'Dentes individuais podem se soltar com alimentos duros', status: 'bad' },
          { text: 'Requer manutenção constante e substituição completa', status: 'warn' },
        ],
      },
      {
        title: 'Metalocerâmica (PFM)',
        sub: 'Estrutura de Cobalto-Cromo + Porcelana Fundida',
        material: 'Porcelana Feldspática em Camadas',
        strength: '350 – 450 MPa (Média)',
        chippingRisk: 'Moderado a Alto (Lascamento)',
        lifespan: '8 – 12 Anos',
        features: [
          { text: 'A porcelana lasca com frequência sob forças de 4 implantes', status: 'bad' },
          { text: 'Borda metálica escura visível se a gengiva retrair', status: 'bad' },
          { text: 'Peso elevado causa sensação pesada na boca', status: 'warn' },
          { text: 'Reparo de porcelana lascada na boca é inviável', status: 'bad' },
        ],
      },
    ],
    materialsTableHeaders: {
      criteria: 'Critério de Comparação',
      zirconia: 'Zircônia Monolítica (Nosso Padrão)',
      acrylic: 'Híbrido Acrílico (Opção Econômica)',
      pfm: 'Metalocerâmica (PFM)',
    },
    materialsTableRows: [
      {
        criteria: 'Risco de Fratura / Lascamento',
        zirconia: 'Próximo de Zero (Sólido 1200+ MPa)',
        acrylic: 'Alto (Dentes podem descolar)',
        pfm: 'Moderado (Porcelana lasca)',
      },
      {
        criteria: 'Desgaste Mastigatório e Oclusão',
        zirconia: 'Zero Desgaste (Mordida Estável)',
        acrylic: 'Desgasta em 3–5 anos (Dor na ATM)',
        pfm: 'Altamente resistente',
      },
      {
        criteria: 'Manchas e Retenção de Odores',
        zirconia: '100% Não Poroso (Zero Manchas)',
        acrylic: 'Poroso (Absorve café e odores)',
        pfm: 'Esmaltado (Resiste a manchas)',
      },
      {
        criteria: 'Biocompatibilidade Gengival',
        zirconia: 'Antibacteriano (Protege a gengiva)',
        acrylic: 'Retém placa (Risco de infecção)',
        pfm: 'Possível sensibilidade ao metal',
      },
      {
        criteria: 'Translucidez e Estética',
        zirconia: 'Vitalidade Natural Multicamadas',
        acrylic: 'Opacidade plástica artificial',
        pfm: 'Reflexo metálico acinzentado',
      },
      {
        criteria: 'Durabilidade Clínica',
        zirconia: 'Toda a Vida / 25+ Anos',
        acrylic: '3 – 7 Anos',
        pfm: '8 – 12 Anos',
      },
    ],
    packagesTitle: 'Preços e Pacotes All-on-4 em Istambul',
    packagesSubtitle: 'Preços com tudo incluído por arcada com implantes de titânio, ponte definitiva de zircônia, hotel 5 estrelas e transfers VIP.',
    durationLabel: 'Duração do Tratamento:',
    includedLabel: 'O que está incluído:',
    pricePerArchLabel: 'Preço por arcada',
    getQuoteBtn: 'Obter Orçamento Gratuito',
    mostPopularBadge: 'MAIS POPULAR',
    faqTitle: 'Perguntas Frequentes sobre Implantes All-on-4',
    faqSubtitle: 'Respostas clínicas e detalhadas sobre procedimentos cirúrgicos, cicatrização e sua viagem a Istambul.',
    faqGroup1Badge: 'PARTE 1',
    faqGroup1Title: 'Perguntas Clínicas e Biomecânicas All-on-4',
    faqGroup2Badge: 'PARTE 2',
    faqGroup2Title: 'Turismo de Saúde, Pacote e Garantia Vitalícia',
    ctaTitle: 'Avaliação Cirúrgica Gratuita para All-on-4',
    ctaDesc: 'Envie sua radiografia panorâmica pelo WhatsApp. Nossos cirurgiões avaliarão sua estrutura óssea e enviarão o plano em 24h.',
    whatsappBtn: 'WhatsApp 24/7 Consulta Direta',
    quoteBtn: 'Formulário Online Gratuito',
    packages: [
      {
        name: 'ALL-ON-4 – NUCLEOSS',
        brand: 'NucleOSS (Qualidade Premium Turca)',
        duration: '3+7 Dias Úteis (2 Visitas)',
        img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
        included: [
          '4x Implantes de Titânio NucleOSS',
          '12x Dentes Fixos Provisórios',
          '12x Ponte Fixa Definitiva de Zircônia',
          'Guia Cirúrgico 3D CBCT',
          'Anestesia e Medicamentos Pós-op',
          'Transfers VIP Aeroporto-Hotel',
          'Hotel com Café da Manhã',
          'Laboratório Completo Incluído',
        ],
        price: { USD: '$5,700', EUR: '€4,900', GBP: '£4,200' },
      },
      {
        name: 'ALL-ON-4 – DXL GERMAN',
        brand: 'DXL (Engenharia Alemã)',
        duration: '3+7 Dias Úteis (2 Visitas)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
        included: [
          '4x Implantes Alemães DXL',
          '12x Dentes Provisórios Fixos',
          '12x Ponte Definitiva de Zircônia',
          'Planejamento 3D CBCT',
          'Transfers VIP e Hotel Incluídos',
        ],
        price: { USD: '$6,400', EUR: '€5,500', GBP: '£4,750' },
      },
      {
        name: 'ALL-ON-4 – STRAUMANN',
        brand: 'Straumann (Padrão Ouro Suíço)',
        duration: '3+7 Dias Úteis (2 Visitas)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
        included: [
          '4x Implantes Suíços Straumann',
          '12x Provisórios Fixos de Alto Padrão',
          '12x Ponte Monolítica Multicamadas de Zircônia',
          'Passaporte de Garantia Internacional Vitalícia',
          'Transfers VIP e Hotel Luxo 5 Estrelas',
          'Assistência Personalizada',
        ],
        price: { USD: '$9,300', EUR: '€8,000', GBP: '£6,900' },
        popular: true,
      },
      {
        name: 'ALL-ON-4 – MEGAGEN',
        brand: 'Megagen AnyRidge',
        duration: '3+7 Dias Úteis (2 Visitas)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg',
        included: ['4x Implantes Megagen', '12x Dentes Provisórios', '12x Ponte Zircônia', 'Hotel e Transfers'],
        price: { USD: '$6,900', EUR: '€6,000', GBP: '£5,100' },
      },
      {
        name: 'ALL-ON-4 – NEODENT',
        brand: 'Neodent (Grupo Straumann)',
        duration: '3+7 Dias Úteis (2 Visitas)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg',
        included: ['4x Implantes Neodent', '12x Dentes Provisórios', '12x Ponte Zircônia', 'Hotel e Transfers'],
        price: { USD: '$6,900', EUR: '€6,000', GBP: '£5,100' },
      },
      {
        name: 'ALL-ON-4 – HIOSSEN',
        brand: 'Hiossen USA',
        duration: '3+7 Dias Úteis (2 Visitas)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
        included: ['4x Implantes Hiossen', '12x Dentes Provisórios', '12x Ponte Zircônia', 'Hotel e Transfers'],
        price: { USD: '$6,600', EUR: '€5,750', GBP: '£4,900' },
      },
    ],
    faqsPart1: [
      {
        q: 'Como funciona o conceito biomecânico do All-on-4 com apenas 4 implantes?',
        a: 'Combina 2 implantes retos na região anterior de maior densidade óssea com 2 implantes posteriores inclinados a 45°. Essa distribuição suporta com segurança 12 a 14 dentes fixos.',
      },
      {
        q: 'Qual é a diferença exata entre All-on-4 e All-on-6?',
        a: 'O All-on-4 é indicado para perda óssea moderada sem enxertos. O All-on-6 distribui as forças mastigatórias em 6 pontos em rebordos mais largos e pacientes jovens.',
      },
      {
        q: 'Como o All-on-4 elimina a necessidade de enxerto ósseo e sinus lift?',
        a: 'A angulação de 30° a 45° permite contornar com precisão o seio maxilar superior e o nervo mandibular inferior, poupando meses de espera de enxertos.',
      },
      {
        q: 'Como funcionam os dentes provisórios fixos no 1º dia?',
        a: 'Em até 24h após a cirurgia, instalamos uma prótese provisória aparafusada. Você nunca sai da clínica sem dentes.',
      },
      {
        q: 'O que posso comer durante os 3 meses de cicatrização?',
        a: 'Alimentos macios (peixe, massas, ovos, legumes cozidos) para proteger a osseointegração dos implantes.',
      },
      {
        q: 'Quais materiais são utilizados na ponte definitiva All-on-4?',
        a: 'Zircônia monolítica alemã de alta resistência (1200+ MPa) com estrutura de titânio CAD/CAM. Zero resina frágil.',
      },
      {
        q: 'A prótese All-on-4 é fixa ou removível?',
        a: '100% fixa e aparafusada, removível apenas pelo dentista. A limpeza é feita facilmente com irrigador oral (Waterpik).',
      },
      {
        q: 'Por que o guia cirúrgico 3D é essencial no All-on-4?',
        a: 'Ele define a inclinação e profundidade exata dos implantes, eliminando riscos anatômicos com precisão milimétrica.',
      },
      {
        q: 'Posso fazer o All-on-4 se ainda tiver dentes com mobilidade?',
        a: 'Sim, as extrações, a fixação dos 4 implantes e a colocação dos dentes provisórios são feitas na mesma consulta.',
      },
      {
        q: 'Qual é a durabilidade e taxa de sucesso do All-on-4?',
        a: 'A taxa de sucesso ultrapassa 98% em 15 anos de estudos clínicos. Implantes Straumann/DXL são projetados para durar a vida toda.',
      },
    ],
    faqsPart2: [
      {
        q: 'Quantas viagens a Istambul são necessárias?',
        a: 'Apenas 2 viagens: 1ª Visita (3–5 dias) para cirurgia e dentes provisórios; 2ª Visita (5–7 dias, 3 meses depois) para a ponte definitiva de zircônia.',
      },
      {
        q: 'O que está incluído no pacote do Master Smile Studio?',
        a: '4 implantes por arcada, prótese provisória, prótese definitiva em zircônia, tomografia 3D, cirurgias, medicamentos, transfers VIP e hotel 4/5 estrelas.',
      },
      {
        q: 'O preço do All-on-4 mudará quando eu chegar a Istambul?',
        a: 'Não. O orçamento enviado com base na sua radiografia é um preço fixo garantido, sem custos ocultos.',
      },
      {
        q: 'Sentirei dor durante a cirurgia? Há opção de sedação?',
        a: 'O procedimento é indolor sob anestesia local. Também disponibilizamos sedação consciente intravenosa.',
      },
      {
        q: 'Posso fazer All-on-4 com diabetes ou se for fumante?',
        a: 'Sim, com diabetes controlada e suspensão temporária do tabaco, a taxa de integração óssea é excelente.',
      },
      {
        q: 'Como funciona o passaporte e a garantia vitalícia?',
        a: 'Você recebe um passaporte internacional oficial com o número de série e certificado vitalício do fabricante.',
      },
      {
        q: 'Como é feito o acompanhamento no meu país de origem?',
        a: 'Nossa equipe internacional mantém contato direto via WhatsApp e videochamadas sempre que necessário.',
      },
    ],
  },
  es: {
    introBadge: 'RESTAURACIÓN TOTAL DE LA ARCADA',
    introTitle: 'Implantes Dentales All-on-4 en Estambul, Turquía',
    introLead: 'Dientes fijos y permanentes en dos visitas — guiados por ordenador 3D con titanio suizo y alemán.',
    introP1: 'En Master Smile Studio, el tratamiento All-on-4 es nuestra solución insignia para la restauración completa del arco dental. Todas las intervenciones quirúrgicas son realizadas directamente por cirujanos maxilofaciales expertos y fundadores de la clínica.',
    introP2: 'El protocolo All-on-4 utiliza 4 implantes de titanio por maxilar: 2 rectos en la zona frontal y 2 inclinados hasta 45 grados en la parte posterior. Esta inclinación protege los senos maxilares y evita el injerto óseo en el 90% de los pacientes.',
    introP3Lead: 'Conozca también: ',
    introP3LinkAll6: 'Implantes All-on-6',
    introP3Mid: ', ',
    introP3LinkZygoma: 'Implantes Cigomáticos',
    introP3And: ' y ',
    introP3LinkSinus: 'Elevación de Seno Maxilar',
    introP3Tail: ' en nuestra clínica.',
    materialsTitle: 'Materiales de Prótesis All-on-4: Por qué Usamos Circonio Monolítico',
    materialsSubtitle: 'En All-on-4, 4 implantes soportan toda la fuerza masticatoria de la mandíbula (200 a 600 Newtons). Descubra por qué diseñamos exclusivamente Circonio Monolítico Multicapa en lugar de acrílico o metal.',
    materialsSpecLabels: {
      material: 'Tipo de Material',
      strength: 'Resistencia a la Flexión',
      chipping: 'Riesgo de Fractura',
      lifespan: 'Vida Útil',
    },
    materialsCards: [
      {
        title: 'Circonio Monolítico Multicapa',
        sub: '100% Circonio Alemán Macizo + Barra de Titanio Fresada',
        badge: 'ESTÁNDAR DE ORO MASTER SMILE',
        isGold: true,
        material: '1200+ MPa CAD/CAM Circonio',
        strength: '1200 – 1400 MPa (Ultra Alta)',
        chippingRisk: 'Casi Cero (Monolítico Sólido)',
        lifespan: '25+ Años / De por Vida',
        features: [
          { text: 'Cero fracturas o astillamiento bajo fuerte masticación', status: 'good' },
          { text: 'Superficie ultra lisa previene placa y Periimplantitis', status: 'good' },
          { text: 'No poroso: 100% resistente a manchas y malos olores', status: 'good' },
          { text: 'Gradiente multicapa para una estética natural translúcida', status: 'good' },
        ],
      },
      {
        title: 'Puente Híbrido Titanio-Acrílico',
        sub: 'Estructura Metálica + Resina Acrílica y Dientes Plásticos',
        material: 'Acrílico PMMA + Estructura Metálica',
        strength: '80 – 120 MPa (Baja)',
        chippingRisk: 'Alto (Dientes pueden desprenderse)',
        lifespan: '3 – 7 Años',
        features: [
          { text: 'Desgaste abrasivo acorta dientes y causa dolor articular', status: 'bad' },
          { text: 'Resina porosa absorbe bacterias, café y olores', status: 'bad' },
          { text: 'Dientes individuales pueden soltarse con alimentos duros', status: 'bad' },
          { text: 'Requiere mantenimiento frecuente y reemplazo total', status: 'warn' },
        ],
      },
      {
        title: 'Metal-Porcelana (PFM)',
        sub: 'Estructura Cobalto-Cromo + Cerámica Horneada',
        material: 'Porcelana Feldespática en Capas',
        strength: '350 – 450 MPa (Media)',
        chippingRisk: 'Moderado a Alto (Astillamiento)',
        lifespan: '8 – 12 Años',
        features: [
          { text: 'La porcelana se astilla bajo las intensas fuerzas de 4 implantes', status: 'bad' },
          { text: 'Margen metálico oscuro visible si la encía se retrae', status: 'bad' },
          { text: 'Peso elevado causa sensación pesada en la boca', status: 'warn' },
          { text: 'Reparar porcelana astillada en boca es inviable', status: 'bad' },
        ],
      },
    ],
    materialsTableHeaders: {
      criteria: 'Criterio de Comparación',
      zirconia: 'Circonio Monolítico (Nuestro Estándar)',
      acrylic: 'Híbrido Acrílico (Opción Económica)',
      pfm: 'Metal-Porcelana (PFM)',
    },
    materialsTableRows: [
      {
        criteria: 'Riesgo de Fractura / Astillamiento',
        zirconia: 'Casi Cero (Sólido 1200+ MPa)',
        acrylic: 'Alto (Dientes pueden soltarse)',
        pfm: 'Moderado (Porcelana se astilla)',
      },
      {
        criteria: 'Desgaste y Pérdida de Altura Oclusal',
        zirconia: 'Cero Desgaste (Mordida Estable)',
        acrylic: 'Se desgasta en 3–5 años (Dolor ATM)',
        pfm: 'Muy resistente al desgaste',
      },
      {
        criteria: 'Manchas y Absorción de Olores',
        zirconia: '100% No Poroso (Cero Manchas)',
        acrylic: 'Poroso (Absorbe café y olores)',
        pfm: 'Esmaltado (Resiste manchas)',
      },
      {
        criteria: 'Biocompatibilidad con la Encía',
        zirconia: 'Antibacteriano (Protege la encía)',
        acrylic: 'Retiene placa (Riesgo de infección)',
        pfm: 'Posible sensibilidad al metal',
      },
      {
        criteria: 'Translucidez y Estética Natural',
        zirconia: 'Vitalidad Natural Multicapa',
        acrylic: 'Opacidad plástica artificial',
        pfm: 'Reflejo metálico grisáceo',
      },
      {
        criteria: 'Durabilidad Clínica',
        zirconia: 'De por Vida / 25+ Años',
        acrylic: '3 – 7 Años',
        pfm: '8 – 12 Años',
      },
    ],
    packagesTitle: 'Precios y Paquetes All-on-4 en Estambul',
    packagesSubtitle: 'Precios transparentes por arcada con implantes de titanio, puente de circonio definitivo, hotel de 5 estrellas y traslados VIP.',
    durationLabel: 'Duración del Tratamiento:',
    includedLabel: 'Qué incluye el paquete:',
    pricePerArchLabel: 'Precio por arcada',
    getQuoteBtn: 'Obtener Presupuesto Gratuito',
    mostPopularBadge: 'MÁS POPULAR',
    faqTitle: 'Preguntas Frecuentes sobre Implantes All-on-4',
    faqSubtitle: 'Respuestas clínicas detalladas sobre el procedimiento quirúrgico, cicatrización y su viaje a Estambul.',
    faqGroup1Badge: 'PARTE 1',
    faqGroup1Title: 'Preguntas Clínicas y Biomecánicas All-on-4',
    faqGroup2Badge: 'PARTE 2',
    faqGroup2Title: 'Turismo Dental, Paquete y Garantía de por Vida',
    ctaTitle: 'Evaluación Quirúrgica Gratuita para All-on-4',
    ctaDesc: 'Envíe su radiografía panorámica por WhatsApp. Nuestros cirujanos evaluarán su hueso maxilar y prepararán su presupuesto en 24h.',
    whatsappBtn: 'WhatsApp 24/7 Consulta Directa',
    quoteBtn: 'Formulario Online Gratuito',
    packages: [
      {
        name: 'ALL-ON-4 – NUCLEOSS',
        brand: 'NucleOSS (Calidad Premium Turca)',
        duration: '3+7 Días Laborables (2 Visitas)',
        img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
        included: [
          '4x Implantes de Titanio NucleOSS por arcada',
          '12x Dientes Provisionales Fijos',
          '12x Puente Definitivo de Circonio',
          'Guía Quirúrgica 3D CBCT',
          'Anestesia y Medicamentos Postoperatorios',
          'Traslados VIP Aeropuerto-Hotel',
          'Estancia en Hotel con Desayuno',
          'Laboratorio Completo Incluido',
        ],
        price: { USD: '$5,700', EUR: '€4,900', GBP: '£4,200' },
      },
      {
        name: 'ALL-ON-4 – DXL GERMAN',
        brand: 'DXL (Ingeniería Alemana)',
        duration: '3+7 Días Laborables (2 Visitas)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
        included: [
          '4x Implantes Alemanes DXL',
          '12x Dientes Provisionales Fijos',
          '12x Puente Definitivo de Circonio',
          'Planificación 3D CBCT',
          'Traslados VIP y Hotel Incluidos',
        ],
        price: { USD: '$6,400', EUR: '€5,500', GBP: '£4,750' },
      },
      {
        name: 'ALL-ON-4 – STRAUMANN',
        brand: 'Straumann (Estándar de Oro Suizo)',
        duration: '3+7 Días Laborables (2 Visitas)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
        included: [
          '4x Implantes Suizos Straumann',
          '12x Provisionales Fijos de Alta Gama',
          '12x Puente Monolítico Multicapa de Circonio',
          'Pasaporte de Garantía Internacional de por Vida',
          'Traslados VIP y Hotel de Lujo 5 Estrellas',
          'Asesor Personal en Español',
        ],
        price: { USD: '$9,300', EUR: '€8,000', GBP: '£6,900' },
        popular: true,
      },
      {
        name: 'ALL-ON-4 – MEGAGEN',
        brand: 'Megagen AnyRidge',
        duration: '3+7 Días Laborables (2 Visitas)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg',
        included: ['4x Implantes Megagen', '12x Dientes Provisionales', '12x Puente Circonio', 'Hotel y Traslados'],
        price: { USD: '$6,900', EUR: '€6,000', GBP: '£5,100' },
      },
      {
        name: 'ALL-ON-4 – NEODENT',
        brand: 'Neodent (Grupo Straumann)',
        duration: '3+7 Días Laborables (2 Visitas)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg',
        included: ['4x Implantes Neodent', '12x Dientes Provisionales', '12x Puente Circonio', 'Hotel y Traslados'],
        price: { USD: '$6,900', EUR: '€6,000', GBP: '£5,100' },
      },
      {
        name: 'ALL-ON-4 – HIOSSEN',
        brand: 'Hiossen USA',
        duration: '3+7 Días Laborables (2 Visitas)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
        included: ['4x Implantes Hiossen', '12x Dientes Provisionales', '12x Puente Circonio', 'Hotel y Traslados'],
        price: { USD: '$6,600', EUR: '€5,750', GBP: '£4,900' },
      },
    ],
    faqsPart1: [
      {
        q: '¿Cómo funciona la biomecánica de All-on-4 con solo 4 implantes?',
        a: 'Combina 2 implantes rectos en la zona anterior de hueso denso con 2 implantes posteriores inclinados a 45°. Esta distribución soporta con seguridad una arcada fija de 12 a 14 dientes.',
      },
      {
        q: '¿Cuál es la diferencia exacta entre All-on-4 y All-on-6?',
        a: 'All-on-4 está diseñado para pérdida ósea moderada evitando injertos. All-on-6 reparte la fuerza en 6 puntos en maxilares más amplios y pacientes jóvenes.',
      },
      {
        q: '¿Cómo evita All-on-4 el injerto óseo y la elevación de seno?',
        a: 'La angulación de 30° a 45° permite anclar los implantes por delante del seno maxilar y del nervio mandibular, evitando 6–9 meses de injerto óseo.',
      },
      {
        q: '¿Cómo funcionan los dientes provisionales fijos el primer día?',
        a: 'En menos de 24h tras la cirugía se fija un puente provisional atornillado. Nunca saldrá de la clínica sin dientes.',
      },
      {
        q: '¿Qué puedo comer durante los 3 meses de cicatrización?',
        a: 'Dieta blanda (pescado, pasta, huevos, verduras tiernas) para no interferir en la osteointegración de los implantes.',
      },
      {
        q: '¿Qué materiales se usan en el puente definitivo All-on-4?',
        a: 'Circonio monolítico alemán multicapa (1200+ MPa) con barra de titanio CAD/CAM. No usamos plásticos ni resinas débiles.',
      },
      {
        q: '¿La prótesis All-on-4 es fija o removible?',
        a: 'Es 100% fija y atornillada; solo puede retirarla el dentista. La higiene se realiza fácilmente con irrigador dental (Waterpik).',
      },
      {
        q: '¿Por qué es indispensable la guía quirúrgica 3D en All-on-4?',
        a: 'Define con precisión milimétrica la angulación y profundidad, eliminando errores y protegiendo estructuras nerviosas.',
      },
      {
        q: '¿Se puede hacer All-on-4 si aún tengo dientes dañados?',
        a: 'Sí, las extracciones, colocación de 4 implantes y ajuste del puente provisional se realizan en la misma sesión.',
      },
      {
        q: '¿Cuál es la durabilidad y tasa de éxito de All-on-4?',
        a: 'La tasa de éxito supera el 98% en estudios a más de 15 años. Con buena higiene, los implantes Straumann/DXL duran toda la vida.',
      },
    ],
    faqsPart2: [
      {
        q: '¿Cuántos viajes a Estambul son necesarios?',
        a: '2 viajes: 1ª Visita (3–5 días) para cirugía y puente provisional; 2ª Visita (5–7 días, tras 3 meses) para el puente definitivo de circonio.',
      },
      {
        q: '¿Qué incluye el paquete de Master Smile Studio?',
        a: '4 implantes por arcada, puente provisional, puente de circonio, TAC 3D, cirugías, medicación, traslados VIP y hotel de 4/5 estrellas.',
      },
      {
        q: '¿Cambiará el precio una vez llegue a Estambul?',
        a: 'No. El presupuesto cerrado tras analizar su radiografía es fijo y transparente, sin cargos sorpresa.',
      },
      {
        q: '¿Duele la cirugía? ¿Existe opción de sedación?',
        a: 'El proceso es indoloro con anestesia local computerizada. También disponemos de sedación intravenosa consciente.',
      },
      {
        q: '¿Es viable con diabetes o en fumadores?',
        a: 'Con diabetes controlada y una pausa de tabaco recomendada de 2 semanas, los resultados son excelentes.',
      },
      {
        q: '¿Cómo funciona la garantía y el pasaporte de implantes?',
        a: 'Recibirá su pasaporte oficial con números de serie y garantía de reposición internacional de por vida.',
      },
      {
        q: '¿Cómo se realiza el seguimiento tras volver a mi país?',
        a: 'Nuestro departamento internacional mantiene contacto continuo por WhatsApp y videoconsulta.',
      },
    ],
  },
  ru: {
    introBadge: 'ПОЛНОЕ ВОССТАНОВЛЕНИЕ ЧЕЛЮСТИ',
    introTitle: 'Имплантация All-on-4 в Стамбуле, Турция',
    introLead: 'Несъемные постоянные зубы за два визита — 3D-компьютерное моделирование и премиальный титан из Швейцарии и Германии.',
    introP1: 'В клинике Master Smile Studio имплантация All-on-4 («Все на четырех») является флагманской методикой восстановления зубного ряда при полном отсутствии зубов. Все хирургические операции выполняются непосредственно ведущими челюстно-лицевыми хирургами и основателями клиники.',
    introP2: 'Протокол All-on-4 использует 4 титановых импланта на челюсть: 2 прямых во фронтальном отделе и 2 под углом до 45 градусов в боковых отделах. Этот наклон защищает гайморовы пазухи и позволяет 90% пациентов избежать костной пластики (синус-лифтинга).',
    introP3Lead: 'Ознакомьтесь также с методами: ',
    introP3LinkAll6: 'Имплантация All-on-6',
    introP3Mid: ', ',
    introP3LinkZygoma: 'Скуловые импланты Зигома',
    introP3And: ' и ',
    introP3LinkSinus: 'Синус-лифтинг',
    introP3Tail: ' в нашей клинике.',
        materialsTitle: 'Материалы Постоянных Мостов All-on-4: Почему Мы Используем Монолитный Цирконий',
    materialsSubtitle: 'В протоколе All-on-4 4 импланта несут всю жевательную нагрузку челюсти (от 200 до 600 Н). Узнайте, почему мы изготавливаем мосты исключительно из 100% монолитного циркония, а не из акрила или металлокерамики.',
    materialsSpecLabels: {
      material: 'Тип Материала',
      strength: 'Прочность на Изгиб',
      chipping: 'Риск Сколов',
      lifespan: 'Срок Службы',
    },
    materialsCards: [
      {
        title: 'Монолитный Многослойный Цирконий',
        sub: '100% Цельный Немецкий Цирконий + Фрезерованная Титановая Балка',
        badge: 'ЗОЛОТОЙ СТАНДАРТ MASTER SMILE',
        isGold: true,
        material: '1200+ МПа CAD/CAM Цирконий',
        strength: '1200 – 1400 МПа (Сверхвысокая)',
        chippingRisk: 'Близок к нулю (Монолит)',
        lifespan: '25+ Лет / Пожизненно',
        features: [
          { text: 'Ноль сколов и переломов при интенсивном жевании', status: 'good' },
          { text: 'Гладкая поверхность препятствует налёту и периимплантиту', status: 'good' },
          { text: 'Непористая структура: не окрашивается и не впитывает запахи', status: 'good' },
          { text: 'Многослойный градиент создаёт естественную прозрачность зубов', status: 'good' },
        ],
      },
      {
        title: 'Гибридный Титано-Акриловый Мост',
        sub: 'Металлический Каркас + Протезный Акрил и Пластмассовые Зубы',
        material: 'PMMA Акрил + Металл',
        strength: '80 – 120 МПа (Низкая)',
        chippingRisk: 'Высокий (Зубы могут отклеиваться)',
        lifespan: '3 – 7 Лет',
        features: [
          { text: 'Истирание зубов снижает прикус и вызывает боли в суставе', status: 'bad' },
          { text: 'Пористый акрил впитывает бактерии, красители и запахи', status: 'bad' },
          { text: 'Отдельные зубы могут отламываться при твёрдой пище', status: 'bad' },
          { text: 'Требует частого ремонта и полной замены через несколько лет', status: 'warn' },
        ],
      },
      {
        title: 'Металлокерамика (PFM)',
        sub: 'Кобальт-Хромовый Каркас + Напечённая Керамика',
        material: 'Послойная Полевошпатная Керамика',
        strength: '350 – 450 МПа (Средняя)',
        chippingRisk: 'От умеренного до высокого (Сколы)',
        lifespan: '8 – 12 Лет',
        features: [
          { text: 'Керамика часто скалывается под давлением на 4 имплантах', status: 'bad' },
          { text: 'Тёмный край металла становится виден при убыли десны', status: 'bad' },
          { text: 'Большой вес создаёт ощущение тяжести во рту', status: 'warn' },
          { text: 'Ремонт сколотой керамики прямо во рту невозможен', status: 'bad' },
        ],
      },
    ],
    materialsTableHeaders: {
      criteria: 'Критерий Сравнения',
      zirconia: 'Монолитный Цирконий (Наш Стандарт)',
      acrylic: 'Гибридный Акрил (Эконом-Вариант)',
      pfm: 'Металлокерамика (PFM)',
    },
    materialsTableRows: [
      {
        criteria: 'Риск Сколов / Переломов',
        zirconia: 'Близок к нулю (Монолит 1200+ МПа)',
        acrylic: 'Высокий (Зубы отпадают)',
        pfm: 'Умеренный (Сколы керамики)',
      },
      {
        criteria: 'Истирание и Снижение Прикуса',
        zirconia: 'Ноль Истирания (Стабильный Прикус)',
        acrylic: 'Стирается за 3–5 л. (Боль в ВНЧС)',
        pfm: 'Высокая устойчивость к истиранию',
      },
      {
        criteria: 'Окрашивание и Запахи',
        zirconia: '100% Без Пор (Ноль Пятен)',
        acrylic: 'Пористый (Впитывает кофе и запахи)',
        pfm: 'Глазурованный (Не красится)',
      },
      {
        criteria: 'Биосовместимость с Десной',
        zirconia: 'Антибактериальный (Защищает десну)',
        acrylic: 'Скапливает налёт (Риск инфекции)',
        pfm: 'Возможная реакция на металл',
      },
      {
        criteria: 'Естественная Прозрачность',
        zirconia: 'Натуральная Многослойность',
        acrylic: 'Искусственная матовость пластика',
        pfm: 'Серый отблеск металла',
      },
      {
        criteria: 'Клинический Срок Службы',
        zirconia: 'Пожизненно / 25+ Лет',
        acrylic: '3 – 7 Лет',
        pfm: '8 – 12 Лет',
      },
    ],
    packagesTitle: 'Цены и пакеты All-on-4 в Стамбуле',
    packagesSubtitle: 'Прозрачные пакетные цены за челюсть «под ключ» с титановыми имплантами, циркониевым мостом, отелем 5* и VIP-трансфером.',
    durationLabel: 'Срок лечения:',
    includedLabel: 'Что входит в пакет:',
    pricePerArchLabel: 'Цена за одну челюсть',
    getQuoteBtn: 'Получить Бесплатный Расчет',
    mostPopularBadge: 'САМЫЙ ПОПУЛЯРНЫЙ',
    faqTitle: 'Часто задаваемые вопросы об имплантации All-on-4',
    faqSubtitle: 'Клинически подтвержденные ответы о хирургическом протоколе, остеоинтеграции и организации поездки в Стамбул.',
    faqGroup1Badge: 'ЧАСТЬ 1',
    faqGroup1Title: 'Клинические и биомеханические вопросы All-on-4',
    faqGroup2Badge: 'ЧАСТЬ 2',
    faqGroup2Title: 'Медицинский туризм, пакет услуг и гарантия',
    ctaTitle: 'Бесплатная хирургическая оценка All-on-4',
    ctaDesc: 'Отправьте панорамный снимок или КТ через WhatsApp. Наши хирурги изучат структуру кости и подготовят план лечения за 24 часа.',
    whatsappBtn: 'WhatsApp 24/7 Прямая Консультация',
    quoteBtn: 'Онлайн Форма Расчета',
    packages: [
      {
        name: 'ALL-ON-4 – NUCLEOSS',
        brand: 'NucleOSS (Премиум Турция)',
        duration: '3+7 Рабочих Дней (2 Визита)',
        img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
        included: [
          '4x Титановых импланта NucleOSS на челюсть',
          '12x Несъемных временных зубов',
          '12x Постоянный циркониевый мост',
          '3D CBCT хирургический шаблон',
          'Анестезия и набор медикаментов',
          'VIP трансфер аэропорт-отель',
          'Проживание в отеле с завтраками',
          'Все лабораторные работы включены',
        ],
        price: { USD: '$5,700', EUR: '€4,900', GBP: '£4,200' },
      },
      {
        name: 'ALL-ON-4 – DXL GERMAN',
        brand: 'DXL (Немецкая инженерия)',
        duration: '3+7 Рабочих Дней (2 Визита)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
        included: [
          '4x Немецких импланта DXL',
          '12x Временных несъемных зубов',
          '12x Постоянный мост из циркония',
          '3D CBCT планирование',
          'VIP трансфер и отель',
        ],
        price: { USD: '$6,400', EUR: '€5,500', GBP: '£4,750' },
      },
      {
        name: 'ALL-ON-4 – STRAUMANN',
        brand: 'Straumann (Золотой Стандарт Швейцария)',
        duration: '3+7 Рабочих Дней (2 Визита)',
        img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
        included: [
          '4x Швейцарских импланта Straumann',
          '12x Высокопрочных временных зубов',
          '12x Монолитный многослойный циркониевый мост',
          'Международный паспорт с пожизненной гарантией',
          'VIP трансфер на Mercedes и отель 5*',
          'Русскоязычный личный куратор',
        ],
        price: { USD: '$9,300', EUR: '€8,000', GBP: '£6,900' },
        popular: true,
      },
      {
        name: 'ALL-ON-4 – MEGAGEN',
        brand: 'Megagen AnyRidge',
        duration: '3+7 Рабочих Дней (2 Визита)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg',
        included: ['4x Импланта Megagen', '12x Временных зубов', '12x Циркониевый мост', 'Отель и трансфер'],
        price: { USD: '$6,900', EUR: '€6,000', GBP: '£5,100' },
      },
      {
        name: 'ALL-ON-4 – NEODENT',
        brand: 'Neodent (Группа Straumann)',
        duration: '3+7 Рабочих Дней (2 Визита)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg',
        included: ['4x Импланта Neodent', '12x Временных зубов', '12x Циркониевый мост', 'Отель и трансфер'],
        price: { USD: '$6,900', EUR: '€6,000', GBP: '£5,100' },
      },
      {
        name: 'ALL-ON-4 – HIOSSEN',
        brand: 'Hiossen USA',
        duration: '3+7 Рабочих Дней (2 Визита)',
        img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
        included: ['4x Импланта Hiossen', '12x Временных зубов', '12x Циркониевый мост', 'Отель и трансфер'],
        price: { USD: '$6,600', EUR: '€5,750', GBP: '£4,900' },
      },
    ],
    faqsPart1: [
      {
        q: 'Как работает концепция All-on-4 всего на 4 имплантах?',
        a: 'Концепция объединяет 2 прямых импланта во фронтальной зоне плотной кости и 2 боковых импланта под углом до 45°. Это обеспечивает устойчивость для несъемного моста из 12–14 зубов.',
      },
      {
        q: 'В чем разница между All-on-4 и All-on-6?',
        a: 'All-on-4 применяется при умеренной атрофии кости без костной пластики. All-on-6 распределяет нагрузку на 6 опор при широкой челюсти и у молодых пациентов.',
      },
      {
        q: 'Как All-on-4 позволяет избежать синус-лифтинга и наращивания кости?',
        a: 'Наклон задних имплантов под углом 30°–45° позволяет обойти гайморову пазуху и нижнечелюстной нерв, исключая 6–9 месяцев ожидания приживления костного материала.',
      },
      {
        q: 'Как устанавливаются временные зубы в 1-й день? Останусь ли я без зубов?',
        a: 'В течение 24 часов после операции фиксируется несъемный винтовой акриловый мост. Вы ни дня не проведете без зубов.',
      },
      {
        q: 'Что можно есть в течение 3 месяцев приживления?',
        a: 'Рекомендуется мягкая пища (рыба, паста, яйца, мягкие овощи), чтобы защитить остеоинтеграцию имплантов.',
      },
      {
        q: 'Из каких материалов изготавливается постоянный мост All-on-4?',
        a: 'Монолитный немецкий цирконий (прочность 1200+ МПа) на титановой балке CAD/CAM. Никакого хрупкого пластика.',
      },
      {
        q: 'Протез All-on-4 съемный или несъемный?',
        a: 'Протез на 100% несъемный, его может снять только врач. Домашняя гигиена проста с помощью ирригатора (Waterpik).',
      },
      {
        q: 'Зачем нужен 3D-хирургический шаблон при All-on-4?',
        a: 'Шаблон задает угол и глубину установки с точностью до десятых долей миллиметра, исключая повреждение нервов.',
      },
      {
        q: 'Можно ли сделать All-on-4, если во рту еще есть разрушенные зубы?',
        a: 'Да, удаление зубов, установка 4 имплантов и фиксация временного моста проводятся в один визит.',
      },
      {
        q: 'Каков срок службы и процент приживаемости All-on-4?',
        a: 'Приживаемость превышает 98% на протяжении 15+ лет. При правильной гигиене импланты Straumann/DXL служат пожизненно.',
      },
    ],
    faqsPart2: [
      {
        q: 'Сколько визитов в Стамбул потребуется?',
        a: 'Всего 2 визита: 1-й визит (3–5 дней) — операция и временный мост; 2-й визит через 3 месяца (5–7 дней) — постоянный циркониевый мост.',
      },
      {
        q: 'Что входит в пакет Master Smile Studio?',
        a: '4 импланта на челюсть, временный мост, постоянный циркониевый мост, 3D-КТ, операция, медикаменты, VIP-трансфер и отель 4/5*.',
      },
      {
        q: 'Изменится ли цена после приезда в Стамбул?',
        a: 'Нет. Предварительный расчет на основе рентгеновского снимка фиксируется в договоре без скрытых доплат.',
      },
      {
        q: 'Будет ли больно во время операции? Возможна ли седация?',
        a: 'Операция безболезненна под местной анестезией. Для пациентов со страхом доступна внутривенная седация (медикаментозный сон).',
      },
      {
        q: 'Возможна ли имплантация при диабете или курении?',
        a: 'При компенсированном диабете и соблюдении 2-недельного отказа от курения остеоинтеграция проходит успешно.',
      },
      {
        q: 'Как работает пожизненная гарантия и паспорт имплантатов?',
        a: 'Вы получаете международный паспорт с серийными номерами и пожизненной гарантией производителя.',
      },
      {
        q: 'Как организовано наблюдение после возвращения домой?',
        a: 'Наши кураторы остаются на связи 24/7 через WhatsApp и организуют видеоконсультации при необходимости.',
      },
    ],
  },
};

export default function AllOnFourImplantDetailView() {
  const locale = useLocale();
  const d = DICTIONARIES[locale] || DICTIONARIES.en;

  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('EUR');

  return (
    <div className={styles.wrapper}>
      {/* 1. INTRO & BIOMECHANICAL CLINICAL OVERVIEW */}
      <section aria-labelledby="allon4-intro-heading" className={styles.introSection}>
        <div className={styles.container}>
          <h1 id="allon4-intro-heading" className={styles.introHeading}>
            {d.introTitle}
          </h1>

          <p className={styles.introLead}>{d.introLead}</p>

          <p className={styles.textP}>{d.introP1}</p>

          <p className={styles.textP}>{d.introP2}</p>

          <p className={styles.textItalic}>
            {d.introP3Lead}
            <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.linkGold}>
              {d.introP3LinkAll6}
            </Link>
            {d.introP3Mid}
            <Link href="/treatments/dental-implants/zygomatic-implants" className={styles.linkGold}>
              {d.introP3LinkZygoma}
            </Link>
            {d.introP3And}
            <Link href="/treatments/dental-implants/sinus-lifting" className={styles.linkGold}>
              {d.introP3LinkSinus}
            </Link>
            {d.introP3Tail}
          </p>

          {/* Full-width 16:9 Clinical All-on-4 Procedure Video */}
          <div className={styles.mainVideoWrap}>
            <iframe
              src="https://www.youtube.com/embed/fJAx9CUxhk4"
              title="All-on-4 Dental Implants in Istanbul Clinical Procedure"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* 2. ALL-ON-4 PERMANENT BRIDGE MATERIALS COMPARISON */}
      <section aria-labelledby="allon4-materials-heading" className={styles.materialsSection}>
        <div className={styles.container}>
          <div className={styles.materialsHeader}>
            <h2 id="allon4-materials-heading" className={styles.materialsTitle}>
              {d.materialsTitle}
            </h2>
            <p className={styles.materialsSubtitle}>{d.materialsSubtitle}</p>
          </div>

          {/* 3 Material Cards */}
          <div className={styles.materialsGrid}>
            {d.materialsCards.map((card, cIdx) => (
              <div
                key={cIdx}
                className={`${styles.materialCard} ${card.isGold ? styles.materialCardGold : ''}`}
              >
                {card.badge && (
                  <span className={styles.materialStandardBadge}>{card.badge}</span>
                )}

                <div>
                  <h3 className={styles.materialCardTitle}>{card.title}</h3>
                  <span className={styles.materialCardSub}>{card.sub}</span>

                  <div className={styles.materialSpecsBox}>
                    <div className={styles.materialSpecRow}>
                      <span className={styles.materialSpecLabel}>{d.materialsSpecLabels.material}</span>
                      <span className={card.isGold ? styles.materialSpecValGold : styles.materialSpecVal}>
                        {card.material}
                      </span>
                    </div>
                    <div className={styles.materialSpecRow}>
                      <span className={styles.materialSpecLabel}>{d.materialsSpecLabels.strength}</span>
                      <span className={card.isGold ? styles.materialSpecValGold : styles.materialSpecVal}>
                        {card.strength}
                      </span>
                    </div>
                    <div className={styles.materialSpecRow}>
                      <span className={styles.materialSpecLabel}>{d.materialsSpecLabels.chipping}</span>
                      <span className={card.isGold ? styles.materialSpecValGold : styles.materialSpecVal}>
                        {card.chippingRisk}
                      </span>
                    </div>
                    <div className={styles.materialSpecRow}>
                      <span className={styles.materialSpecLabel}>{d.materialsSpecLabels.lifespan}</span>
                      <span className={card.isGold ? styles.materialSpecValGold : styles.materialSpecVal}>
                        {card.lifespan}
                      </span>
                    </div>
                  </div>

                  <ul className={styles.materialList}>
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className={styles.materialListItem}>
                        <span
                          className={
                            feat.status === 'good'
                              ? styles.matCheck
                              : feat.status === 'bad'
                              ? styles.matCross
                              : styles.matWarn
                          }
                        >
                          {feat.status === 'good' ? '•' : feat.status === 'bad' ? '—' : '–'}
                        </span>
                        <span>{feat.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Matrix Table */}
          <div className={styles.materialsTableWrap}>
            <table className={styles.materialsTable}>
              <thead>
                <tr>
                  <th className={styles.materialsTh}>{d.materialsTableHeaders.criteria}</th>
                  <th className={styles.materialsThGold}>{d.materialsTableHeaders.zirconia}</th>
                  <th className={styles.materialsTh}>{d.materialsTableHeaders.acrylic}</th>
                  <th className={styles.materialsTh}>{d.materialsTableHeaders.pfm}</th>
                </tr>
              </thead>
              <tbody>
                {d.materialsTableRows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    <td className={styles.materialsTd}>
                      <strong>{row.criteria}</strong>
                    </td>
                    <td className={`${styles.materialsTd} ${styles.materialsTdHighlight}`}>
                      {row.zirconia}
                    </td>
                    <td className={styles.materialsTd}>{row.acrylic}</td>
                    <td className={styles.materialsTd}>{row.pfm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. TRANSPARENT PACKAGES & DYNAMIC CURRENCY SWITCHER */}
      <section aria-labelledby="allon4-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="allon4-packages-heading" className={styles.packagesTitle}>
              {d.packagesTitle}
            </h2>
            <p className={styles.packagesSubtitle}>{d.packagesSubtitle}</p>
          </div>

          {/* Interactive Currency Switcher */}
          <div className={styles.currencyBar} role="group" aria-label="Select Currency">
            <span className={styles.currencyLabel}>Currency:</span>
            <button
              type="button"
              className={`${styles.currencyBtn} ${currency === 'EUR' ? styles.currencyBtnActive : ''}`}
              onClick={() => setCurrency('EUR')}
            >
              EUR (€)
            </button>
            <button
              type="button"
              className={`${styles.currencyBtn} ${currency === 'GBP' ? styles.currencyBtnActive : ''}`}
              onClick={() => setCurrency('GBP')}
            >
              GBP (£)
            </button>
            <button
              type="button"
              className={`${styles.currencyBtn} ${currency === 'USD' ? styles.currencyBtnActive : ''}`}
              onClick={() => setCurrency('USD')}
            >
              USD ($)
            </button>
          </div>

          {/* 6 Real Implant Brand Package Cards */}
          <div className={styles.pkgGrid}>
            {d.packages.map((pkg, pIdx) => (
              <div
                key={pIdx}
                className={`${styles.pkgCard} ${pkg.popular ? styles.pkgCardPopular : ''}`}
              >
                {pkg.popular && (
                  <span className={styles.popularBadge}>{d.mostPopularBadge}</span>
                )}

                <div>
                  <h3 className={styles.pkgName}>{pkg.name}</h3>
                  <span className={styles.pkgBrand}>{pkg.brand}</span>

                  <div className={styles.pkgImageWrap}>
                    <img
                      src={pkg.img}
                      alt={pkg.name}
                      className={styles.pkgImage}
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.pkgDurationRow}>
                    <span>{d.durationLabel}</span>
                    <span>{pkg.duration}</span>
                  </div>

                  <strong className={styles.pkgListTitle}>{d.includedLabel}</strong>

                  <ul className={styles.pkgList}>
                    {pkg.included.map((inc, iIdx) => (
                      <li key={iIdx} className={styles.pkgListItem}>
                        <span className={styles.pkgCheck}>✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.pkgFooter}>
                  <div className={styles.pkgPriceRow}>
                    <span className={styles.pkgPriceLabel}>{d.pricePerArchLabel}</span>
                    <strong className={styles.pkgPriceValue}>
                      {pkg.price[currency]}
                    </strong>
                  </div>

                  <a
                    href="#js_target1"
                    className={`${styles.pkgCtaBtn} ${pkg.popular ? styles.pkgCtaBtnPopular : ''}`}
                  >
                    <span>{d.getQuoteBtn}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REUSABLE: SERVICES INCLUDED */}
      <TreatmentServicesIncludedSection />

      {/* 5. REUSABLE: CLINIC TOUR */}
      <TreatmentClinicTourSection placeholderNum="A4-TOUR" />

      {/* 6. REUSABLE: FOUNDING SURGEONS */}
      <TreatmentDoctorsSection />

      {/* 7. BEFORE & AFTER TRANSFORMATIONS GALLERY */}
      <TreatmentBeforeAfterSliderSection />

      {/* 8. REVIEWS & TRUSTPILOT / GOOGLE 5-STAR */}
      <TreatmentReviewsSection />

      {/* 9. REUSABLE: PARALLAX BANNER */}
      <TreatmentParallaxBanner />

      {/* 10. REUSABLE: PATIENT VIDEO REELS */}
      <TreatmentPatientReelsSection />

      {/* 11. REUSABLE: DENTAL JOURNEY TIMELINE */}
      <TreatmentJourneySimpleSection />

      {/* 12. MASTER 17-QUESTION FAQ SECTION (CLINICAL & HEALTH TOURISM) */}
      <section aria-labelledby="allon4-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="allon4-faq-heading" className={styles.faqTitle}>
              {d.faqTitle}
            </h2>
            <p className={styles.faqSubtitle}>{d.faqSubtitle}</p>
          </div>

          {/* CLINICAL ALL-ON-4 FAQS (10 QUESTIONS) */}
          <div className={styles.faqCategoryGroup}>
            <h3 className={styles.faqCategoryTitle}>
              {d.faqGroup1Title}
            </h3>

            <div className={styles.faqList}>
              {d.faqsPart1.map((faq, fIdx) => {
                const globalIdx = fIdx;
                const isOpen = activeFaq === globalIdx;
                return (
                  <div
                    key={fIdx}
                    className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : globalIdx)}
                      className={styles.faqQuestionBtn}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span
                        className={`${styles.faqToggleIcon} ${isOpen ? styles.faqToggleIconOpen : ''}`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && <div className={styles.faqAnswer}>{faq.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* HEALTH TOURISM, INCLUSIONS & WARRANTY FAQS (7 QUESTIONS) */}
          <div className={styles.faqCategoryGroup}>
            <h3 className={styles.faqCategoryTitle}>
              {d.faqGroup2Title}
            </h3>

            <div className={styles.faqList}>
              {d.faqsPart2.map((faq, fIdx) => {
                const globalIdx = 100 + fIdx;
                const isOpen = activeFaq === globalIdx;
                return (
                  <div
                    key={fIdx}
                    className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : globalIdx)}
                      className={styles.faqQuestionBtn}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span
                        className={`${styles.faqToggleIcon} ${isOpen ? styles.faqToggleIconOpen : ''}`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen && <div className={styles.faqAnswer}>{faq.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 13. LET'S CREATE YOUR PERFECT SMILE PLAN (4-STEP INTERACTIVE QUOTE FUNNEL) */}
      <TreatmentInteractiveQuoteForm defaultTreatment="All-on-4 / All-on-6" />
    </div>
  );
}
