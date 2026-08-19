'use client';

import React, { useState, useRef } from 'react';
import { useLocale } from 'next-intl';
import TreatmentCrownsRightTreatmentAccordion from '@/components/treatment-sections/TreatmentCrownsRightTreatmentAccordion';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentBeforeAfterSliderSection';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './EmaxCrownsDetailView.module.css';

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
  a: string[];
}

interface LocaleDictionary {
  packagesTitle: string;
  packagesSubtitle: string;
  mostPopularBadge: string;
  durationLabel: string;
  includedLabel: string;
  priceLabel: string;
  getQuoteBtn: string;
  faqTitle: string;
  faqSubtitle: string;
  stayDuration: string;
  visitCount: string;
  recoveryTime: string;
  priceEstimate: string;
  packages: PackageItem[];
  faqs: FaqItem[];
}

const DICTIONARIES: Record<string, LocaleDictionary> = {
  "en": {
    "packagesTitle": "E-Max Porcelain & Ceramic Dental Crown Packages",
    "packagesSubtitle": "All-inclusive smile makeover and single crown packages using genuine Swiss Ivoclar IPS e.max lithium disilicate with hotel and VIP transfers.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About E-Max Crowns & Veneers",
    "faqSubtitle": "Explore answers to the most common clinical and travel questions regarding E-Max crowns, smile makeovers, procedure timelines, and international warranties in Antalya.",
    "stayDuration": "<strong>6 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation, CAD/CAM milling of IPS e.max ingots, and final aesthetic glaze cementation are completed with precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete dental crown makeover (from 1 tooth to full mouth 20-28 crowns) is designed and placed during this single visit.",
    "recoveryTime": "<strong>2 to 3 days adaptation.</strong> There is virtually no surgical recovery time. Any mild sensitivity subsides within 48-72 hours, allowing you to comfortably enjoy eating and normal activities immediately.",
    "priceEstimate": "<strong>E-Max Dental Crown prices start at £220 / €260 / $285 per tooth.</strong> All-inclusive multi-crown packages (10, 20 or 24 crowns) include digital smile design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single E-Max Porcelain Crown",
        "brand": "Swiss Ivoclar Vivadent IPS e.max (450–500 MPa)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Lithium Disilicate Crown",
          "3D Digital Intraoral Scan & CAD/CAM Precision Milling",
          "Tooth preparation, local anesthesia & temporary tooth",
          "Custom shade matching & natural tooth enamel characterization",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£220"
        }
      },
      {
        "name": "10-Unit Anterior Smile Makeover (E-Max)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "10x High-Translucency E-Max Crowns/Veneers (Upper Smile Zone)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Harmony Analysis",
          "Laser gum contouring & smile symmetry adjustment (if needed)",
          "Custom temporary crowns for complete comfort during manufacturing",
          "4-Star Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against crown fracture & porcelain chipping"
        ],
        "price": {
          "USD": "$2,650",
          "EUR": "€2,450",
          "GBP": "£2,100"
        }
      },
      {
        "name": "20-Unit Full Mouth E-Max Makeover",
        "brand": "Ivoclar IPS e.max CAD/Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "20x High-Translucency E-Max Crowns (10 Upper + 10 Lower Arches)",
          "Comprehensive 3D CT Diagnostic Scan & Bite Balance Simulation",
          "Full aesthetic & functional bite balancing (gnathological alignment)",
          "Complete temporary smile set fitted on Day 1",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Comprehensive post-op care pack & custom night guard protection"
        ],
        "price": {
          "USD": "$5,150",
          "EUR": "€4,750",
          "GBP": "£4,100"
        }
      },
      {
        "name": "Single Zirconium Crown (Amman-Girrbach)",
        "brand": "Amman-Girrbach / Vita (1200+ MPa)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "1x Genuine German Monolithic Zirconia Crown (1200+ MPa)",
          "3D Digital Intraoral Scan & CAD/CAM Precision Milling",
          "Tooth preparation, local anesthesia & temporary tooth",
          "Shade matching & natural aesthetic translucency glazing",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$275",
          "EUR": "€250",
          "GBP": "£210"
        }
      },
      {
        "name": "20-Unit Premium Zirconia Hollywood Smile",
        "brand": "Monolithic Multi-Layer 3D Pro Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x High-Translucency Monolithic Zirconia Crowns (10 Upper + 10 Lower Arches)",
          "3D Digital Facial Aesthetics & golden ratio smile planning",
          "Live smile trial with aesthetic temporary mock-up before fabrication",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Chauffeur Service for all transfers",
          "Professional clinical teeth whitening for remaining natural teeth",
          "Lifetime warranty certificate & international care passport"
        ],
        "price": {
          "USD": "$5,050",
          "EUR": "€4,650",
          "GBP": "£3,990"
        }
      },
      {
        "name": "Combination Makeover (E-Max Front + Zirconia Back)",
        "brand": "Swiss E-Max + German Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/treatments/accordion/Porcelain-Crown-Package-2.jpg",
        "included": [
          "8-10 Anterior E-Max Crowns for ultimate aesthetics + Posterior Zirconia for bite strength",
          "Precision CAD/CAM digital margin adaptation",
          "Optimal light transmission in the smile zone and fracture toughness in molars",
          "5-Star Hotel Stay + VIP Mercedes Private Transfers",
          "10-Year structural warranty on entire combination restoration"
        ],
        "price": {
          "USD": "$4,850",
          "EUR": "€4,450",
          "GBP": "£3,850"
        }
      }
    ],
    "faqs": [
      {
        "q": "What makes E-Max crowns superior for front teeth?",
        "a": [
          "E-Max is crafted from monolithic lithium disilicate ceramic, which matches the natural light reflection and translucency of real human enamel better than any other restorative material.",
          "Unlike metal-backed crowns, light passes through E-Max naturally, preventing opaque chalkiness and eliminating dark gumline borders."
        ]
      },
      {
        "q": "Will my treatment plan or price change when I arrive at the clinic?",
        "a": [
          "No. The personalized treatment plan and cost quotation provided during your online consultation (based on your dental photos and panoramic X-ray) are fixed and binding.",
          "Upon your arrival in Antalya, we perform a complimentary 3D CBCT scan. Unless an unforeseen internal dental infection or severe root pathology requiring endodontic intervention is discovered, your package price remains 100% transparent with zero hidden charges."
        ]
      },
      {
        "q": "Do you assist with accommodation and hotel booking?",
        "a": [
          "Yes. All of our multi-unit crown packages (10, 20, or 24 teeth) include complimentary 4-star or 5-star hotel accommodation with daily breakfast located in safe, upscale central districts of Antalya near our clinic.",
          "Our dedicated international patient team handles your hotel reservations, check-in, and daily VIP Mercedes clinic transfers for a completely stress-free experience."
        ]
      },
      {
        "q": "Is it safe to travel to Turkey for dental treatments?",
        "a": [
          "Yes, absolutely. Antalya is one of the world's most reputable and advanced centers for medical and dental tourism, welcoming over 500,000 international dental patients every year.",
          "Our clinic operates under strict Ministry of Health regulations, employing hospital-grade HEPA filtration, class-B autoclave sterilization, and CE/FDA-certified German and Swiss biomaterials."
        ]
      },
      {
        "q": "Which materials and brands do you use for dental crowns?",
        "a": [
          "We strictly refuse low-cost generic copies. We use 100% genuine medical-grade blanks from global dental leaders: Swiss Ivoclar Vivadent IPS e.max lithium disilicate, German Amman-Girrbach, Vita, and Japanese Noritake Katana multi-layer zirconia (1200+ MPa).",
          "Every patient receives an official certificate of authenticity with QR code verification and manufacturer lot numbers."
        ]
      },
      {
        "q": "Can I see the shape and color of my new crowns before they are manufactured?",
        "a": [
          "Yes! We employ 3D Digital Smile Design (DSD) technology. Prior to preparing your teeth, we scan your smile and simulate the final outcome on high-definition screens.",
          "Furthermore, we create physical aesthetic temporary mock-up teeth that you can test and wear in your mouth on Day 1, allowing you to preview the tooth length, shade, and alignment before final ceramic firing."
        ]
      },
      {
        "q": "Can I get dental crowns or veneers without having my teeth shaved?",
        "a": [
          "Dental crowns require 360-degree circumferential preparation (approximately 0.8 to 1.2 mm for E-Max) to provide structural reinforcement and ensure natural emergence profiles without gum inflammation.",
          "If your teeth are structurally intact, aligned, and you only desire cosmetic improvements, ultra-thin laminate veneers (0.3–0.5 mm) or prepless Lumineers may be indicated instead of full crowns."
        ]
      },
      {
        "q": "Can I pay online before arriving or during my trip?",
        "a": [
          "Yes. We accept flexible payment methods including international bank wire transfers, major credit/debit cards (Visa, MasterCard, American Express), and cash in EUR (€), GBP (£), and USD ($).",
          "You do not need to pay the full amount upfront; payment is split into transparent stages as your treatment milestones are completed."
        ]
      },
      {
        "q": "Are airport transfers and hotel stays really included in the packages?",
        "a": [
          "Yes! All smile makeover packages include complimentary private VIP Mercedes Vito transfers between Antalya Airport (IST / SAW), your hotel, and the clinic for all appointments.",
          "Your personal driver greets you at the arrival gate, ensuring seamless transportation throughout your entire stay."
        ]
      },
      {
        "q": "Do you offer installment payment plans for international patients?",
        "a": [
          "Direct healthcare installment financing depends on credit regulations in your home country (UK, EU, USA). However, we facilitate split stage payments across your clinic visits.",
          "We also support international credit card split-payment features and provide detailed itemized medical invoices for health insurance reimbursement in your home country."
        ]
      },
      {
        "q": "What warranty and guarantees do you offer on dental crowns?",
        "a": [
          "We provide a comprehensive warranty on all crown restorations: a 10-year warranty on Swiss Ivoclar E-Max restorations and a lifetime structural guarantee on monolithic zirconia against fracture or breakage.",
          "In the unlikely event of crown loosening or fracture under normal physiological use, our clinic repairs or replaces the restoration free of charge."
        ]
      },
      {
        "q": "Should I choose E-Max or Zirconium crowns over dental implants?",
        "a": [
          "For dental implant restorations, Monolithic Zirconia is strongly recommended due to its 1200+ MPa strength against titanium abutments. For natural front teeth where the underlying root is healthy and light transmission is paramount, E-Max lithium disilicate is the gold standard."
        ]
      },
      {
        "q": "Why is zirconia preferred over veneers for posterior (back) teeth?",
        "a": [
          "Posterior molars endure massive chewing pressures exceeding 800 to 1,000 Newtons. Ultra-thin porcelain veneers are designed for front-surface aesthetics and cannot withstand heavy lateral grinding forces. Zirconia and PFM offer the necessary fracture toughness for long-term posterior function."
        ]
      },
      {
        "q": "Why can multi-unit dental bridges not be made from pure E-Max?",
        "a": [
          "E-Max lithium disilicate has a flexural strength of ~450–500 MPa. When bridging across multiple missing teeth, torsional chewing forces can exceed this threshold and cause fracture. Multi-unit bridges require 1200+ MPa Monolithic Zirconia or PFM for guaranteed structural integrity."
        ]
      },
      {
        "q": "Are prepared teeth under crowns more prone to tooth decay?",
        "a": [
          "No. Precision CAD/CAM milled crowns fit with microscopic margin tolerances (under 20 microns), sealed with resin glass-ionomer cement that prevents bacterial leakage. As long as you brush, floss, and maintain good oral hygiene, the underlying tooth remains healthy."
        ]
      },
      {
        "q": "What is the expected lifespan of E-Max crowns?",
        "a": [
          "With proper oral hygiene, regular dental checkups, and nighttime bruxism protection (if you grind your teeth), high-quality Swiss Ivoclar E-Max crowns typically last 15 to 20+ years."
        ]
      },
      {
        "q": "Can I change the shade or color of my crowns after they are cemented?",
        "a": [
          "Once permanently cemented with resin cement, the ceramic glaze and color are locked and 100% stain-resistant. You will thoroughly evaluate, test, and approve the exact shade, translucency, and shape during your try-in session prior to final cementation."
        ]
      }
    ]
  },
  "tr": {
    "packagesTitle": "E-Max Porselen Diş Kaplama Paketleri",
    "packagesSubtitle": "İsviçre Ivoclar IPS e.max lityum disilikat, otel konaklaması ve VIP transfer dahil her şey dahil kuron paketleri.",
    "mostPopularBadge": "En Çok Tercih Edilen",
    "durationLabel": "Tedavi Süresi:",
    "includedLabel": "Paket İçeriği:",
    "priceLabel": "Her Şey Dahil Fiyat:",
    "getQuoteBtn": "Ücretsiz Fiyat Teklifi Al",
    "faqTitle": "E-Max Porselen Kaplama Hakkında Sıkça Sorulan Sorular",
    "faqSubtitle": "Antalya'da E-Max diş kaplama, estetik saydamlık, tedavi süresi, garanti koşulları ve seyahat planlaması hakkında en çok merak edilen soruların yanıtları.",
    "stayDuration": "<strong>6 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation, CAD/CAM milling of IPS e.max ingots, and final aesthetic glaze cementation are completed with precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete dental crown makeover (from 1 tooth to full mouth 20-28 crowns) is designed and placed during this single visit.",
    "recoveryTime": "<strong>2 to 3 days adaptation.</strong> There is virtually no surgical recovery time. Any mild sensitivity subsides within 48-72 hours, allowing you to comfortably enjoy eating and normal activities immediately.",
    "priceEstimate": "<strong>E-Max Dental Crown prices start at £220 / €260 / $285 per tooth.</strong> All-inclusive multi-crown packages (10, 20 or 24 crowns) include digital smile design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single E-Max Porcelain Crown",
        "brand": "Swiss Ivoclar Vivadent IPS e.max (450–500 MPa)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Lithium Disilicate Crown",
          "3D Digital Intraoral Scan & CAD/CAM Precision Milling",
          "Tooth preparation, local anesthesia & temporary tooth",
          "Custom shade matching & natural tooth enamel characterization",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£220"
        }
      },
      {
        "name": "10-Unit Anterior Smile Makeover (E-Max)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "10x High-Translucency E-Max Crowns/Veneers (Upper Smile Zone)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Harmony Analysis",
          "Laser gum contouring & smile symmetry adjustment (if needed)",
          "Custom temporary crowns for complete comfort during manufacturing",
          "4-Star Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against crown fracture & porcelain chipping"
        ],
        "price": {
          "USD": "$2,650",
          "EUR": "€2,450",
          "GBP": "£2,100"
        }
      },
      {
        "name": "20-Unit Full Mouth E-Max Makeover",
        "brand": "Ivoclar IPS e.max CAD/Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "20x High-Translucency E-Max Crowns (10 Upper + 10 Lower Arches)",
          "Comprehensive 3D CT Diagnostic Scan & Bite Balance Simulation",
          "Full aesthetic & functional bite balancing (gnathological alignment)",
          "Complete temporary smile set fitted on Day 1",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Comprehensive post-op care pack & custom night guard protection"
        ],
        "price": {
          "USD": "$5,150",
          "EUR": "€4,750",
          "GBP": "£4,100"
        }
      },
      {
        "name": "Single Zirconium Crown (Amman-Girrbach)",
        "brand": "Amman-Girrbach / Vita (1200+ MPa)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "1x Genuine German Monolithic Zirconia Crown (1200+ MPa)",
          "3D Digital Intraoral Scan & CAD/CAM Precision Milling",
          "Tooth preparation, local anesthesia & temporary tooth",
          "Shade matching & natural aesthetic translucency glazing",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$275",
          "EUR": "€250",
          "GBP": "£210"
        }
      },
      {
        "name": "20-Unit Premium Zirconia Hollywood Smile",
        "brand": "Monolithic Multi-Layer 3D Pro Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x High-Translucency Monolithic Zirconia Crowns (10 Upper + 10 Lower Arches)",
          "3D Digital Facial Aesthetics & golden ratio smile planning",
          "Live smile trial with aesthetic temporary mock-up before fabrication",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Chauffeur Service for all transfers",
          "Professional clinical teeth whitening for remaining natural teeth",
          "Lifetime warranty certificate & international care passport"
        ],
        "price": {
          "USD": "$5,050",
          "EUR": "€4,650",
          "GBP": "£3,990"
        }
      },
      {
        "name": "Combination Makeover (E-Max Front + Zirconia Back)",
        "brand": "Swiss E-Max + German Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/treatments/accordion/Porcelain-Crown-Package-2.jpg",
        "included": [
          "8-10 Anterior E-Max Crowns for ultimate aesthetics + Posterior Zirconia for bite strength",
          "Precision CAD/CAM digital margin adaptation",
          "Optimal light transmission in the smile zone and fracture toughness in molars",
          "5-Star Hotel Stay + VIP Mercedes Private Transfers",
          "10-Year structural warranty on entire combination restoration"
        ],
        "price": {
          "USD": "$4,850",
          "EUR": "€4,450",
          "GBP": "£3,850"
        }
      }
    ],
    "faqs": [
      {
        "q": "What makes E-Max crowns superior for front teeth?",
        "a": [
          "E-Max is crafted from monolithic lithium disilicate ceramic, which matches the natural light reflection and translucency of real human enamel better than any other restorative material.",
          "Unlike metal-backed crowns, light passes through E-Max naturally, preventing opaque chalkiness and eliminating dark gumline borders."
        ]
      },
      {
        "q": "Will my treatment plan or price change when I arrive at the clinic?",
        "a": [
          "No. The personalized treatment plan and cost quotation provided during your online consultation (based on your dental photos and panoramic X-ray) are fixed and binding.",
          "Upon your arrival in Antalya, we perform a complimentary 3D CBCT scan. Unless an unforeseen internal dental infection or severe root pathology requiring endodontic intervention is discovered, your package price remains 100% transparent with zero hidden charges."
        ]
      },
      {
        "q": "Do you assist with accommodation and hotel booking?",
        "a": [
          "Yes. All of our multi-unit crown packages (10, 20, or 24 teeth) include complimentary 4-star or 5-star hotel accommodation with daily breakfast located in safe, upscale central districts of Antalya near our clinic.",
          "Our dedicated international patient team handles your hotel reservations, check-in, and daily VIP Mercedes clinic transfers for a completely stress-free experience."
        ]
      },
      {
        "q": "Is it safe to travel to Turkey for dental treatments?",
        "a": [
          "Yes, absolutely. Antalya is one of the world's most reputable and advanced centers for medical and dental tourism, welcoming over 500,000 international dental patients every year.",
          "Our clinic operates under strict Ministry of Health regulations, employing hospital-grade HEPA filtration, class-B autoclave sterilization, and CE/FDA-certified German and Swiss biomaterials."
        ]
      },
      {
        "q": "Which materials and brands do you use for dental crowns?",
        "a": [
          "We strictly refuse low-cost generic copies. We use 100% genuine medical-grade blanks from global dental leaders: Swiss Ivoclar Vivadent IPS e.max lithium disilicate, German Amman-Girrbach, Vita, and Japanese Noritake Katana multi-layer zirconia (1200+ MPa).",
          "Every patient receives an official certificate of authenticity with QR code verification and manufacturer lot numbers."
        ]
      },
      {
        "q": "Can I see the shape and color of my new crowns before they are manufactured?",
        "a": [
          "Yes! We employ 3D Digital Smile Design (DSD) technology. Prior to preparing your teeth, we scan your smile and simulate the final outcome on high-definition screens.",
          "Furthermore, we create physical aesthetic temporary mock-up teeth that you can test and wear in your mouth on Day 1, allowing you to preview the tooth length, shade, and alignment before final ceramic firing."
        ]
      },
      {
        "q": "Can I get dental crowns or veneers without having my teeth shaved?",
        "a": [
          "Dental crowns require 360-degree circumferential preparation (approximately 0.8 to 1.2 mm for E-Max) to provide structural reinforcement and ensure natural emergence profiles without gum inflammation.",
          "If your teeth are structurally intact, aligned, and you only desire cosmetic improvements, ultra-thin laminate veneers (0.3–0.5 mm) or prepless Lumineers may be indicated instead of full crowns."
        ]
      },
      {
        "q": "Can I pay online before arriving or during my trip?",
        "a": [
          "Yes. We accept flexible payment methods including international bank wire transfers, major credit/debit cards (Visa, MasterCard, American Express), and cash in EUR (€), GBP (£), and USD ($).",
          "You do not need to pay the full amount upfront; payment is split into transparent stages as your treatment milestones are completed."
        ]
      },
      {
        "q": "Are airport transfers and hotel stays really included in the packages?",
        "a": [
          "Yes! All smile makeover packages include complimentary private VIP Mercedes Vito transfers between Antalya Airport (IST / SAW), your hotel, and the clinic for all appointments.",
          "Your personal driver greets you at the arrival gate, ensuring seamless transportation throughout your entire stay."
        ]
      },
      {
        "q": "Do you offer installment payment plans for international patients?",
        "a": [
          "Direct healthcare installment financing depends on credit regulations in your home country (UK, EU, USA). However, we facilitate split stage payments across your clinic visits.",
          "We also support international credit card split-payment features and provide detailed itemized medical invoices for health insurance reimbursement in your home country."
        ]
      },
      {
        "q": "What warranty and guarantees do you offer on dental crowns?",
        "a": [
          "We provide a comprehensive warranty on all crown restorations: a 10-year warranty on Swiss Ivoclar E-Max restorations and a lifetime structural guarantee on monolithic zirconia against fracture or breakage.",
          "In the unlikely event of crown loosening or fracture under normal physiological use, our clinic repairs or replaces the restoration free of charge."
        ]
      },
      {
        "q": "Should I choose E-Max or Zirconium crowns over dental implants?",
        "a": [
          "For dental implant restorations, Monolithic Zirconia is strongly recommended due to its 1200+ MPa strength against titanium abutments. For natural front teeth where the underlying root is healthy and light transmission is paramount, E-Max lithium disilicate is the gold standard."
        ]
      },
      {
        "q": "Why is zirconia preferred over veneers for posterior (back) teeth?",
        "a": [
          "Posterior molars endure massive chewing pressures exceeding 800 to 1,000 Newtons. Ultra-thin porcelain veneers are designed for front-surface aesthetics and cannot withstand heavy lateral grinding forces. Zirconia and PFM offer the necessary fracture toughness for long-term posterior function."
        ]
      },
      {
        "q": "Why can multi-unit dental bridges not be made from pure E-Max?",
        "a": [
          "E-Max lithium disilicate has a flexural strength of ~450–500 MPa. When bridging across multiple missing teeth, torsional chewing forces can exceed this threshold and cause fracture. Multi-unit bridges require 1200+ MPa Monolithic Zirconia or PFM for guaranteed structural integrity."
        ]
      },
      {
        "q": "Are prepared teeth under crowns more prone to tooth decay?",
        "a": [
          "No. Precision CAD/CAM milled crowns fit with microscopic margin tolerances (under 20 microns), sealed with resin glass-ionomer cement that prevents bacterial leakage. As long as you brush, floss, and maintain good oral hygiene, the underlying tooth remains healthy."
        ]
      },
      {
        "q": "What is the expected lifespan of E-Max crowns?",
        "a": [
          "With proper oral hygiene, regular dental checkups, and nighttime bruxism protection (if you grind your teeth), high-quality Swiss Ivoclar E-Max crowns typically last 15 to 20+ years."
        ]
      },
      {
        "q": "Can I change the shade or color of my crowns after they are cemented?",
        "a": [
          "Once permanently cemented with resin cement, the ceramic glaze and color are locked and 100% stain-resistant. You will thoroughly evaluate, test, and approve the exact shade, translucency, and shape during your try-in session prior to final cementation."
        ]
      }
    ]
  },
  "de": {
    "packagesTitle": "E-Max Porcelain & Ceramic Dental Crown Packages",
    "packagesSubtitle": "All-inclusive smile makeover and single crown packages using genuine Swiss Ivoclar IPS e.max lithium disilicate with hotel and VIP transfers.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About E-Max Crowns & Veneers",
    "faqSubtitle": "Explore answers to the most common clinical and travel questions regarding E-Max crowns, smile makeovers, procedure timelines, and international warranties in Antalya.",
    "stayDuration": "<strong>6 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation, CAD/CAM milling of IPS e.max ingots, and final aesthetic glaze cementation are completed with precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete dental crown makeover (from 1 tooth to full mouth 20-28 crowns) is designed and placed during this single visit.",
    "recoveryTime": "<strong>2 to 3 days adaptation.</strong> There is virtually no surgical recovery time. Any mild sensitivity subsides within 48-72 hours, allowing you to comfortably enjoy eating and normal activities immediately.",
    "priceEstimate": "<strong>E-Max Dental Crown prices start at £220 / €260 / $285 per tooth.</strong> All-inclusive multi-crown packages (10, 20 or 24 crowns) include digital smile design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single E-Max Porcelain Crown",
        "brand": "Swiss Ivoclar Vivadent IPS e.max (450–500 MPa)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Lithium Disilicate Crown",
          "3D Digital Intraoral Scan & CAD/CAM Precision Milling",
          "Tooth preparation, local anesthesia & temporary tooth",
          "Custom shade matching & natural tooth enamel characterization",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£220"
        }
      },
      {
        "name": "10-Unit Anterior Smile Makeover (E-Max)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "10x High-Translucency E-Max Crowns/Veneers (Upper Smile Zone)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Harmony Analysis",
          "Laser gum contouring & smile symmetry adjustment (if needed)",
          "Custom temporary crowns for complete comfort during manufacturing",
          "4-Star Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against crown fracture & porcelain chipping"
        ],
        "price": {
          "USD": "$2,650",
          "EUR": "€2,450",
          "GBP": "£2,100"
        }
      },
      {
        "name": "20-Unit Full Mouth E-Max Makeover",
        "brand": "Ivoclar IPS e.max CAD/Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "20x High-Translucency E-Max Crowns (10 Upper + 10 Lower Arches)",
          "Comprehensive 3D CT Diagnostic Scan & Bite Balance Simulation",
          "Full aesthetic & functional bite balancing (gnathological alignment)",
          "Complete temporary smile set fitted on Day 1",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Comprehensive post-op care pack & custom night guard protection"
        ],
        "price": {
          "USD": "$5,150",
          "EUR": "€4,750",
          "GBP": "£4,100"
        }
      },
      {
        "name": "Single Zirconium Crown (Amman-Girrbach)",
        "brand": "Amman-Girrbach / Vita (1200+ MPa)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "1x Genuine German Monolithic Zirconia Crown (1200+ MPa)",
          "3D Digital Intraoral Scan & CAD/CAM Precision Milling",
          "Tooth preparation, local anesthesia & temporary tooth",
          "Shade matching & natural aesthetic translucency glazing",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$275",
          "EUR": "€250",
          "GBP": "£210"
        }
      },
      {
        "name": "20-Unit Premium Zirconia Hollywood Smile",
        "brand": "Monolithic Multi-Layer 3D Pro Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x High-Translucency Monolithic Zirconia Crowns (10 Upper + 10 Lower Arches)",
          "3D Digital Facial Aesthetics & golden ratio smile planning",
          "Live smile trial with aesthetic temporary mock-up before fabrication",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Chauffeur Service for all transfers",
          "Professional clinical teeth whitening for remaining natural teeth",
          "Lifetime warranty certificate & international care passport"
        ],
        "price": {
          "USD": "$5,050",
          "EUR": "€4,650",
          "GBP": "£3,990"
        }
      },
      {
        "name": "Combination Makeover (E-Max Front + Zirconia Back)",
        "brand": "Swiss E-Max + German Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/treatments/accordion/Porcelain-Crown-Package-2.jpg",
        "included": [
          "8-10 Anterior E-Max Crowns for ultimate aesthetics + Posterior Zirconia for bite strength",
          "Precision CAD/CAM digital margin adaptation",
          "Optimal light transmission in the smile zone and fracture toughness in molars",
          "5-Star Hotel Stay + VIP Mercedes Private Transfers",
          "10-Year structural warranty on entire combination restoration"
        ],
        "price": {
          "USD": "$4,850",
          "EUR": "€4,450",
          "GBP": "£3,850"
        }
      }
    ],
    "faqs": [
      {
        "q": "What makes E-Max crowns superior for front teeth?",
        "a": [
          "E-Max is crafted from monolithic lithium disilicate ceramic, which matches the natural light reflection and translucency of real human enamel better than any other restorative material.",
          "Unlike metal-backed crowns, light passes through E-Max naturally, preventing opaque chalkiness and eliminating dark gumline borders."
        ]
      },
      {
        "q": "Will my treatment plan or price change when I arrive at the clinic?",
        "a": [
          "No. The personalized treatment plan and cost quotation provided during your online consultation (based on your dental photos and panoramic X-ray) are fixed and binding.",
          "Upon your arrival in Antalya, we perform a complimentary 3D CBCT scan. Unless an unforeseen internal dental infection or severe root pathology requiring endodontic intervention is discovered, your package price remains 100% transparent with zero hidden charges."
        ]
      },
      {
        "q": "Do you assist with accommodation and hotel booking?",
        "a": [
          "Yes. All of our multi-unit crown packages (10, 20, or 24 teeth) include complimentary 4-star or 5-star hotel accommodation with daily breakfast located in safe, upscale central districts of Antalya near our clinic.",
          "Our dedicated international patient team handles your hotel reservations, check-in, and daily VIP Mercedes clinic transfers for a completely stress-free experience."
        ]
      },
      {
        "q": "Is it safe to travel to Turkey for dental treatments?",
        "a": [
          "Yes, absolutely. Antalya is one of the world's most reputable and advanced centers for medical and dental tourism, welcoming over 500,000 international dental patients every year.",
          "Our clinic operates under strict Ministry of Health regulations, employing hospital-grade HEPA filtration, class-B autoclave sterilization, and CE/FDA-certified German and Swiss biomaterials."
        ]
      },
      {
        "q": "Which materials and brands do you use for dental crowns?",
        "a": [
          "We strictly refuse low-cost generic copies. We use 100% genuine medical-grade blanks from global dental leaders: Swiss Ivoclar Vivadent IPS e.max lithium disilicate, German Amman-Girrbach, Vita, and Japanese Noritake Katana multi-layer zirconia (1200+ MPa).",
          "Every patient receives an official certificate of authenticity with QR code verification and manufacturer lot numbers."
        ]
      },
      {
        "q": "Can I see the shape and color of my new crowns before they are manufactured?",
        "a": [
          "Yes! We employ 3D Digital Smile Design (DSD) technology. Prior to preparing your teeth, we scan your smile and simulate the final outcome on high-definition screens.",
          "Furthermore, we create physical aesthetic temporary mock-up teeth that you can test and wear in your mouth on Day 1, allowing you to preview the tooth length, shade, and alignment before final ceramic firing."
        ]
      },
      {
        "q": "Can I get dental crowns or veneers without having my teeth shaved?",
        "a": [
          "Dental crowns require 360-degree circumferential preparation (approximately 0.8 to 1.2 mm for E-Max) to provide structural reinforcement and ensure natural emergence profiles without gum inflammation.",
          "If your teeth are structurally intact, aligned, and you only desire cosmetic improvements, ultra-thin laminate veneers (0.3–0.5 mm) or prepless Lumineers may be indicated instead of full crowns."
        ]
      },
      {
        "q": "Can I pay online before arriving or during my trip?",
        "a": [
          "Yes. We accept flexible payment methods including international bank wire transfers, major credit/debit cards (Visa, MasterCard, American Express), and cash in EUR (€), GBP (£), and USD ($).",
          "You do not need to pay the full amount upfront; payment is split into transparent stages as your treatment milestones are completed."
        ]
      },
      {
        "q": "Are airport transfers and hotel stays really included in the packages?",
        "a": [
          "Yes! All smile makeover packages include complimentary private VIP Mercedes Vito transfers between Antalya Airport (IST / SAW), your hotel, and the clinic for all appointments.",
          "Your personal driver greets you at the arrival gate, ensuring seamless transportation throughout your entire stay."
        ]
      },
      {
        "q": "Do you offer installment payment plans for international patients?",
        "a": [
          "Direct healthcare installment financing depends on credit regulations in your home country (UK, EU, USA). However, we facilitate split stage payments across your clinic visits.",
          "We also support international credit card split-payment features and provide detailed itemized medical invoices for health insurance reimbursement in your home country."
        ]
      },
      {
        "q": "What warranty and guarantees do you offer on dental crowns?",
        "a": [
          "We provide a comprehensive warranty on all crown restorations: a 10-year warranty on Swiss Ivoclar E-Max restorations and a lifetime structural guarantee on monolithic zirconia against fracture or breakage.",
          "In the unlikely event of crown loosening or fracture under normal physiological use, our clinic repairs or replaces the restoration free of charge."
        ]
      },
      {
        "q": "Should I choose E-Max or Zirconium crowns over dental implants?",
        "a": [
          "For dental implant restorations, Monolithic Zirconia is strongly recommended due to its 1200+ MPa strength against titanium abutments. For natural front teeth where the underlying root is healthy and light transmission is paramount, E-Max lithium disilicate is the gold standard."
        ]
      },
      {
        "q": "Why is zirconia preferred over veneers for posterior (back) teeth?",
        "a": [
          "Posterior molars endure massive chewing pressures exceeding 800 to 1,000 Newtons. Ultra-thin porcelain veneers are designed for front-surface aesthetics and cannot withstand heavy lateral grinding forces. Zirconia and PFM offer the necessary fracture toughness for long-term posterior function."
        ]
      },
      {
        "q": "Why can multi-unit dental bridges not be made from pure E-Max?",
        "a": [
          "E-Max lithium disilicate has a flexural strength of ~450–500 MPa. When bridging across multiple missing teeth, torsional chewing forces can exceed this threshold and cause fracture. Multi-unit bridges require 1200+ MPa Monolithic Zirconia or PFM for guaranteed structural integrity."
        ]
      },
      {
        "q": "Are prepared teeth under crowns more prone to tooth decay?",
        "a": [
          "No. Precision CAD/CAM milled crowns fit with microscopic margin tolerances (under 20 microns), sealed with resin glass-ionomer cement that prevents bacterial leakage. As long as you brush, floss, and maintain good oral hygiene, the underlying tooth remains healthy."
        ]
      },
      {
        "q": "What is the expected lifespan of E-Max crowns?",
        "a": [
          "With proper oral hygiene, regular dental checkups, and nighttime bruxism protection (if you grind your teeth), high-quality Swiss Ivoclar E-Max crowns typically last 15 to 20+ years."
        ]
      },
      {
        "q": "Can I change the shade or color of my crowns after they are cemented?",
        "a": [
          "Once permanently cemented with resin cement, the ceramic glaze and color are locked and 100% stain-resistant. You will thoroughly evaluate, test, and approve the exact shade, translucency, and shape during your try-in session prior to final cementation."
        ]
      }
    ]
  },
  "pl": {
    "packagesTitle": "E-Max Porcelain & Ceramic Dental Crown Packages",
    "packagesSubtitle": "All-inclusive smile makeover and single crown packages using genuine Swiss Ivoclar IPS e.max lithium disilicate with hotel and VIP transfers.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About E-Max Crowns & Veneers",
    "faqSubtitle": "Explore answers to the most common clinical and travel questions regarding E-Max crowns, smile makeovers, procedure timelines, and international warranties in Antalya.",
    "stayDuration": "<strong>6 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation, CAD/CAM milling of IPS e.max ingots, and final aesthetic glaze cementation are completed with precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete dental crown makeover (from 1 tooth to full mouth 20-28 crowns) is designed and placed during this single visit.",
    "recoveryTime": "<strong>2 to 3 days adaptation.</strong> There is virtually no surgical recovery time. Any mild sensitivity subsides within 48-72 hours, allowing you to comfortably enjoy eating and normal activities immediately.",
    "priceEstimate": "<strong>E-Max Dental Crown prices start at £220 / €260 / $285 per tooth.</strong> All-inclusive multi-crown packages (10, 20 or 24 crowns) include digital smile design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single E-Max Porcelain Crown",
        "brand": "Swiss Ivoclar Vivadent IPS e.max (450–500 MPa)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Lithium Disilicate Crown",
          "3D Digital Intraoral Scan & CAD/CAM Precision Milling",
          "Tooth preparation, local anesthesia & temporary tooth",
          "Custom shade matching & natural tooth enamel characterization",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£220"
        }
      },
      {
        "name": "10-Unit Anterior Smile Makeover (E-Max)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "10x High-Translucency E-Max Crowns/Veneers (Upper Smile Zone)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Harmony Analysis",
          "Laser gum contouring & smile symmetry adjustment (if needed)",
          "Custom temporary crowns for complete comfort during manufacturing",
          "4-Star Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against crown fracture & porcelain chipping"
        ],
        "price": {
          "USD": "$2,650",
          "EUR": "€2,450",
          "GBP": "£2,100"
        }
      },
      {
        "name": "20-Unit Full Mouth E-Max Makeover",
        "brand": "Ivoclar IPS e.max CAD/Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "20x High-Translucency E-Max Crowns (10 Upper + 10 Lower Arches)",
          "Comprehensive 3D CT Diagnostic Scan & Bite Balance Simulation",
          "Full aesthetic & functional bite balancing (gnathological alignment)",
          "Complete temporary smile set fitted on Day 1",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Comprehensive post-op care pack & custom night guard protection"
        ],
        "price": {
          "USD": "$5,150",
          "EUR": "€4,750",
          "GBP": "£4,100"
        }
      },
      {
        "name": "Single Zirconium Crown (Amman-Girrbach)",
        "brand": "Amman-Girrbach / Vita (1200+ MPa)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "1x Genuine German Monolithic Zirconia Crown (1200+ MPa)",
          "3D Digital Intraoral Scan & CAD/CAM Precision Milling",
          "Tooth preparation, local anesthesia & temporary tooth",
          "Shade matching & natural aesthetic translucency glazing",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$275",
          "EUR": "€250",
          "GBP": "£210"
        }
      },
      {
        "name": "20-Unit Premium Zirconia Hollywood Smile",
        "brand": "Monolithic Multi-Layer 3D Pro Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x High-Translucency Monolithic Zirconia Crowns (10 Upper + 10 Lower Arches)",
          "3D Digital Facial Aesthetics & golden ratio smile planning",
          "Live smile trial with aesthetic temporary mock-up before fabrication",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Chauffeur Service for all transfers",
          "Professional clinical teeth whitening for remaining natural teeth",
          "Lifetime warranty certificate & international care passport"
        ],
        "price": {
          "USD": "$5,050",
          "EUR": "€4,650",
          "GBP": "£3,990"
        }
      },
      {
        "name": "Combination Makeover (E-Max Front + Zirconia Back)",
        "brand": "Swiss E-Max + German Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/treatments/accordion/Porcelain-Crown-Package-2.jpg",
        "included": [
          "8-10 Anterior E-Max Crowns for ultimate aesthetics + Posterior Zirconia for bite strength",
          "Precision CAD/CAM digital margin adaptation",
          "Optimal light transmission in the smile zone and fracture toughness in molars",
          "5-Star Hotel Stay + VIP Mercedes Private Transfers",
          "10-Year structural warranty on entire combination restoration"
        ],
        "price": {
          "USD": "$4,850",
          "EUR": "€4,450",
          "GBP": "£3,850"
        }
      }
    ],
    "faqs": [
      {
        "q": "What makes E-Max crowns superior for front teeth?",
        "a": [
          "E-Max is crafted from monolithic lithium disilicate ceramic, which matches the natural light reflection and translucency of real human enamel better than any other restorative material.",
          "Unlike metal-backed crowns, light passes through E-Max naturally, preventing opaque chalkiness and eliminating dark gumline borders."
        ]
      },
      {
        "q": "Will my treatment plan or price change when I arrive at the clinic?",
        "a": [
          "No. The personalized treatment plan and cost quotation provided during your online consultation (based on your dental photos and panoramic X-ray) are fixed and binding.",
          "Upon your arrival in Antalya, we perform a complimentary 3D CBCT scan. Unless an unforeseen internal dental infection or severe root pathology requiring endodontic intervention is discovered, your package price remains 100% transparent with zero hidden charges."
        ]
      },
      {
        "q": "Do you assist with accommodation and hotel booking?",
        "a": [
          "Yes. All of our multi-unit crown packages (10, 20, or 24 teeth) include complimentary 4-star or 5-star hotel accommodation with daily breakfast located in safe, upscale central districts of Antalya near our clinic.",
          "Our dedicated international patient team handles your hotel reservations, check-in, and daily VIP Mercedes clinic transfers for a completely stress-free experience."
        ]
      },
      {
        "q": "Is it safe to travel to Turkey for dental treatments?",
        "a": [
          "Yes, absolutely. Antalya is one of the world's most reputable and advanced centers for medical and dental tourism, welcoming over 500,000 international dental patients every year.",
          "Our clinic operates under strict Ministry of Health regulations, employing hospital-grade HEPA filtration, class-B autoclave sterilization, and CE/FDA-certified German and Swiss biomaterials."
        ]
      },
      {
        "q": "Which materials and brands do you use for dental crowns?",
        "a": [
          "We strictly refuse low-cost generic copies. We use 100% genuine medical-grade blanks from global dental leaders: Swiss Ivoclar Vivadent IPS e.max lithium disilicate, German Amman-Girrbach, Vita, and Japanese Noritake Katana multi-layer zirconia (1200+ MPa).",
          "Every patient receives an official certificate of authenticity with QR code verification and manufacturer lot numbers."
        ]
      },
      {
        "q": "Can I see the shape and color of my new crowns before they are manufactured?",
        "a": [
          "Yes! We employ 3D Digital Smile Design (DSD) technology. Prior to preparing your teeth, we scan your smile and simulate the final outcome on high-definition screens.",
          "Furthermore, we create physical aesthetic temporary mock-up teeth that you can test and wear in your mouth on Day 1, allowing you to preview the tooth length, shade, and alignment before final ceramic firing."
        ]
      },
      {
        "q": "Can I get dental crowns or veneers without having my teeth shaved?",
        "a": [
          "Dental crowns require 360-degree circumferential preparation (approximately 0.8 to 1.2 mm for E-Max) to provide structural reinforcement and ensure natural emergence profiles without gum inflammation.",
          "If your teeth are structurally intact, aligned, and you only desire cosmetic improvements, ultra-thin laminate veneers (0.3–0.5 mm) or prepless Lumineers may be indicated instead of full crowns."
        ]
      },
      {
        "q": "Can I pay online before arriving or during my trip?",
        "a": [
          "Yes. We accept flexible payment methods including international bank wire transfers, major credit/debit cards (Visa, MasterCard, American Express), and cash in EUR (€), GBP (£), and USD ($).",
          "You do not need to pay the full amount upfront; payment is split into transparent stages as your treatment milestones are completed."
        ]
      },
      {
        "q": "Are airport transfers and hotel stays really included in the packages?",
        "a": [
          "Yes! All smile makeover packages include complimentary private VIP Mercedes Vito transfers between Antalya Airport (IST / SAW), your hotel, and the clinic for all appointments.",
          "Your personal driver greets you at the arrival gate, ensuring seamless transportation throughout your entire stay."
        ]
      },
      {
        "q": "Do you offer installment payment plans for international patients?",
        "a": [
          "Direct healthcare installment financing depends on credit regulations in your home country (UK, EU, USA). However, we facilitate split stage payments across your clinic visits.",
          "We also support international credit card split-payment features and provide detailed itemized medical invoices for health insurance reimbursement in your home country."
        ]
      },
      {
        "q": "What warranty and guarantees do you offer on dental crowns?",
        "a": [
          "We provide a comprehensive warranty on all crown restorations: a 10-year warranty on Swiss Ivoclar E-Max restorations and a lifetime structural guarantee on monolithic zirconia against fracture or breakage.",
          "In the unlikely event of crown loosening or fracture under normal physiological use, our clinic repairs or replaces the restoration free of charge."
        ]
      },
      {
        "q": "Should I choose E-Max or Zirconium crowns over dental implants?",
        "a": [
          "For dental implant restorations, Monolithic Zirconia is strongly recommended due to its 1200+ MPa strength against titanium abutments. For natural front teeth where the underlying root is healthy and light transmission is paramount, E-Max lithium disilicate is the gold standard."
        ]
      },
      {
        "q": "Why is zirconia preferred over veneers for posterior (back) teeth?",
        "a": [
          "Posterior molars endure massive chewing pressures exceeding 800 to 1,000 Newtons. Ultra-thin porcelain veneers are designed for front-surface aesthetics and cannot withstand heavy lateral grinding forces. Zirconia and PFM offer the necessary fracture toughness for long-term posterior function."
        ]
      },
      {
        "q": "Why can multi-unit dental bridges not be made from pure E-Max?",
        "a": [
          "E-Max lithium disilicate has a flexural strength of ~450–500 MPa. When bridging across multiple missing teeth, torsional chewing forces can exceed this threshold and cause fracture. Multi-unit bridges require 1200+ MPa Monolithic Zirconia or PFM for guaranteed structural integrity."
        ]
      },
      {
        "q": "Are prepared teeth under crowns more prone to tooth decay?",
        "a": [
          "No. Precision CAD/CAM milled crowns fit with microscopic margin tolerances (under 20 microns), sealed with resin glass-ionomer cement that prevents bacterial leakage. As long as you brush, floss, and maintain good oral hygiene, the underlying tooth remains healthy."
        ]
      },
      {
        "q": "What is the expected lifespan of E-Max crowns?",
        "a": [
          "With proper oral hygiene, regular dental checkups, and nighttime bruxism protection (if you grind your teeth), high-quality Swiss Ivoclar E-Max crowns typically last 15 to 20+ years."
        ]
      },
      {
        "q": "Can I change the shade or color of my crowns after they are cemented?",
        "a": [
          "Once permanently cemented with resin cement, the ceramic glaze and color are locked and 100% stain-resistant. You will thoroughly evaluate, test, and approve the exact shade, translucency, and shape during your try-in session prior to final cementation."
        ]
      }
    ]
  },
  "pt": {
    "packagesTitle": "E-Max Porcelain & Ceramic Dental Crown Packages",
    "packagesSubtitle": "All-inclusive smile makeover and single crown packages using genuine Swiss Ivoclar IPS e.max lithium disilicate with hotel and VIP transfers.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About E-Max Crowns & Veneers",
    "faqSubtitle": "Explore answers to the most common clinical and travel questions regarding E-Max crowns, smile makeovers, procedure timelines, and international warranties in Antalya.",
    "stayDuration": "<strong>6 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation, CAD/CAM milling of IPS e.max ingots, and final aesthetic glaze cementation are completed with precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete dental crown makeover (from 1 tooth to full mouth 20-28 crowns) is designed and placed during this single visit.",
    "recoveryTime": "<strong>2 to 3 days adaptation.</strong> There is virtually no surgical recovery time. Any mild sensitivity subsides within 48-72 hours, allowing you to comfortably enjoy eating and normal activities immediately.",
    "priceEstimate": "<strong>E-Max Dental Crown prices start at £220 / €260 / $285 per tooth.</strong> All-inclusive multi-crown packages (10, 20 or 24 crowns) include digital smile design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single E-Max Porcelain Crown",
        "brand": "Swiss Ivoclar Vivadent IPS e.max (450–500 MPa)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Lithium Disilicate Crown",
          "3D Digital Intraoral Scan & CAD/CAM Precision Milling",
          "Tooth preparation, local anesthesia & temporary tooth",
          "Custom shade matching & natural tooth enamel characterization",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£220"
        }
      },
      {
        "name": "10-Unit Anterior Smile Makeover (E-Max)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "10x High-Translucency E-Max Crowns/Veneers (Upper Smile Zone)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Harmony Analysis",
          "Laser gum contouring & smile symmetry adjustment (if needed)",
          "Custom temporary crowns for complete comfort during manufacturing",
          "4-Star Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against crown fracture & porcelain chipping"
        ],
        "price": {
          "USD": "$2,650",
          "EUR": "€2,450",
          "GBP": "£2,100"
        }
      },
      {
        "name": "20-Unit Full Mouth E-Max Makeover",
        "brand": "Ivoclar IPS e.max CAD/Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "20x High-Translucency E-Max Crowns (10 Upper + 10 Lower Arches)",
          "Comprehensive 3D CT Diagnostic Scan & Bite Balance Simulation",
          "Full aesthetic & functional bite balancing (gnathological alignment)",
          "Complete temporary smile set fitted on Day 1",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Comprehensive post-op care pack & custom night guard protection"
        ],
        "price": {
          "USD": "$5,150",
          "EUR": "€4,750",
          "GBP": "£4,100"
        }
      },
      {
        "name": "Single Zirconium Crown (Amman-Girrbach)",
        "brand": "Amman-Girrbach / Vita (1200+ MPa)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "1x Genuine German Monolithic Zirconia Crown (1200+ MPa)",
          "3D Digital Intraoral Scan & CAD/CAM Precision Milling",
          "Tooth preparation, local anesthesia & temporary tooth",
          "Shade matching & natural aesthetic translucency glazing",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$275",
          "EUR": "€250",
          "GBP": "£210"
        }
      },
      {
        "name": "20-Unit Premium Zirconia Hollywood Smile",
        "brand": "Monolithic Multi-Layer 3D Pro Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x High-Translucency Monolithic Zirconia Crowns (10 Upper + 10 Lower Arches)",
          "3D Digital Facial Aesthetics & golden ratio smile planning",
          "Live smile trial with aesthetic temporary mock-up before fabrication",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Chauffeur Service for all transfers",
          "Professional clinical teeth whitening for remaining natural teeth",
          "Lifetime warranty certificate & international care passport"
        ],
        "price": {
          "USD": "$5,050",
          "EUR": "€4,650",
          "GBP": "£3,990"
        }
      },
      {
        "name": "Combination Makeover (E-Max Front + Zirconia Back)",
        "brand": "Swiss E-Max + German Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/treatments/accordion/Porcelain-Crown-Package-2.jpg",
        "included": [
          "8-10 Anterior E-Max Crowns for ultimate aesthetics + Posterior Zirconia for bite strength",
          "Precision CAD/CAM digital margin adaptation",
          "Optimal light transmission in the smile zone and fracture toughness in molars",
          "5-Star Hotel Stay + VIP Mercedes Private Transfers",
          "10-Year structural warranty on entire combination restoration"
        ],
        "price": {
          "USD": "$4,850",
          "EUR": "€4,450",
          "GBP": "£3,850"
        }
      }
    ],
    "faqs": [
      {
        "q": "What makes E-Max crowns superior for front teeth?",
        "a": [
          "E-Max is crafted from monolithic lithium disilicate ceramic, which matches the natural light reflection and translucency of real human enamel better than any other restorative material.",
          "Unlike metal-backed crowns, light passes through E-Max naturally, preventing opaque chalkiness and eliminating dark gumline borders."
        ]
      },
      {
        "q": "Will my treatment plan or price change when I arrive at the clinic?",
        "a": [
          "No. The personalized treatment plan and cost quotation provided during your online consultation (based on your dental photos and panoramic X-ray) are fixed and binding.",
          "Upon your arrival in Antalya, we perform a complimentary 3D CBCT scan. Unless an unforeseen internal dental infection or severe root pathology requiring endodontic intervention is discovered, your package price remains 100% transparent with zero hidden charges."
        ]
      },
      {
        "q": "Do you assist with accommodation and hotel booking?",
        "a": [
          "Yes. All of our multi-unit crown packages (10, 20, or 24 teeth) include complimentary 4-star or 5-star hotel accommodation with daily breakfast located in safe, upscale central districts of Antalya near our clinic.",
          "Our dedicated international patient team handles your hotel reservations, check-in, and daily VIP Mercedes clinic transfers for a completely stress-free experience."
        ]
      },
      {
        "q": "Is it safe to travel to Turkey for dental treatments?",
        "a": [
          "Yes, absolutely. Antalya is one of the world's most reputable and advanced centers for medical and dental tourism, welcoming over 500,000 international dental patients every year.",
          "Our clinic operates under strict Ministry of Health regulations, employing hospital-grade HEPA filtration, class-B autoclave sterilization, and CE/FDA-certified German and Swiss biomaterials."
        ]
      },
      {
        "q": "Which materials and brands do you use for dental crowns?",
        "a": [
          "We strictly refuse low-cost generic copies. We use 100% genuine medical-grade blanks from global dental leaders: Swiss Ivoclar Vivadent IPS e.max lithium disilicate, German Amman-Girrbach, Vita, and Japanese Noritake Katana multi-layer zirconia (1200+ MPa).",
          "Every patient receives an official certificate of authenticity with QR code verification and manufacturer lot numbers."
        ]
      },
      {
        "q": "Can I see the shape and color of my new crowns before they are manufactured?",
        "a": [
          "Yes! We employ 3D Digital Smile Design (DSD) technology. Prior to preparing your teeth, we scan your smile and simulate the final outcome on high-definition screens.",
          "Furthermore, we create physical aesthetic temporary mock-up teeth that you can test and wear in your mouth on Day 1, allowing you to preview the tooth length, shade, and alignment before final ceramic firing."
        ]
      },
      {
        "q": "Can I get dental crowns or veneers without having my teeth shaved?",
        "a": [
          "Dental crowns require 360-degree circumferential preparation (approximately 0.8 to 1.2 mm for E-Max) to provide structural reinforcement and ensure natural emergence profiles without gum inflammation.",
          "If your teeth are structurally intact, aligned, and you only desire cosmetic improvements, ultra-thin laminate veneers (0.3–0.5 mm) or prepless Lumineers may be indicated instead of full crowns."
        ]
      },
      {
        "q": "Can I pay online before arriving or during my trip?",
        "a": [
          "Yes. We accept flexible payment methods including international bank wire transfers, major credit/debit cards (Visa, MasterCard, American Express), and cash in EUR (€), GBP (£), and USD ($).",
          "You do not need to pay the full amount upfront; payment is split into transparent stages as your treatment milestones are completed."
        ]
      },
      {
        "q": "Are airport transfers and hotel stays really included in the packages?",
        "a": [
          "Yes! All smile makeover packages include complimentary private VIP Mercedes Vito transfers between Antalya Airport (IST / SAW), your hotel, and the clinic for all appointments.",
          "Your personal driver greets you at the arrival gate, ensuring seamless transportation throughout your entire stay."
        ]
      },
      {
        "q": "Do you offer installment payment plans for international patients?",
        "a": [
          "Direct healthcare installment financing depends on credit regulations in your home country (UK, EU, USA). However, we facilitate split stage payments across your clinic visits.",
          "We also support international credit card split-payment features and provide detailed itemized medical invoices for health insurance reimbursement in your home country."
        ]
      },
      {
        "q": "What warranty and guarantees do you offer on dental crowns?",
        "a": [
          "We provide a comprehensive warranty on all crown restorations: a 10-year warranty on Swiss Ivoclar E-Max restorations and a lifetime structural guarantee on monolithic zirconia against fracture or breakage.",
          "In the unlikely event of crown loosening or fracture under normal physiological use, our clinic repairs or replaces the restoration free of charge."
        ]
      },
      {
        "q": "Should I choose E-Max or Zirconium crowns over dental implants?",
        "a": [
          "For dental implant restorations, Monolithic Zirconia is strongly recommended due to its 1200+ MPa strength against titanium abutments. For natural front teeth where the underlying root is healthy and light transmission is paramount, E-Max lithium disilicate is the gold standard."
        ]
      },
      {
        "q": "Why is zirconia preferred over veneers for posterior (back) teeth?",
        "a": [
          "Posterior molars endure massive chewing pressures exceeding 800 to 1,000 Newtons. Ultra-thin porcelain veneers are designed for front-surface aesthetics and cannot withstand heavy lateral grinding forces. Zirconia and PFM offer the necessary fracture toughness for long-term posterior function."
        ]
      },
      {
        "q": "Why can multi-unit dental bridges not be made from pure E-Max?",
        "a": [
          "E-Max lithium disilicate has a flexural strength of ~450–500 MPa. When bridging across multiple missing teeth, torsional chewing forces can exceed this threshold and cause fracture. Multi-unit bridges require 1200+ MPa Monolithic Zirconia or PFM for guaranteed structural integrity."
        ]
      },
      {
        "q": "Are prepared teeth under crowns more prone to tooth decay?",
        "a": [
          "No. Precision CAD/CAM milled crowns fit with microscopic margin tolerances (under 20 microns), sealed with resin glass-ionomer cement that prevents bacterial leakage. As long as you brush, floss, and maintain good oral hygiene, the underlying tooth remains healthy."
        ]
      },
      {
        "q": "What is the expected lifespan of E-Max crowns?",
        "a": [
          "With proper oral hygiene, regular dental checkups, and nighttime bruxism protection (if you grind your teeth), high-quality Swiss Ivoclar E-Max crowns typically last 15 to 20+ years."
        ]
      },
      {
        "q": "Can I change the shade or color of my crowns after they are cemented?",
        "a": [
          "Once permanently cemented with resin cement, the ceramic glaze and color are locked and 100% stain-resistant. You will thoroughly evaluate, test, and approve the exact shade, translucency, and shape during your try-in session prior to final cementation."
        ]
      }
    ]
  },
  "es": {
    "packagesTitle": "E-Max Porcelain & Ceramic Dental Crown Packages",
    "packagesSubtitle": "All-inclusive smile makeover and single crown packages using genuine Swiss Ivoclar IPS e.max lithium disilicate with hotel and VIP transfers.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About E-Max Crowns & Veneers",
    "faqSubtitle": "Explore answers to the most common clinical and travel questions regarding E-Max crowns, smile makeovers, procedure timelines, and international warranties in Antalya.",
    "stayDuration": "<strong>6 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation, CAD/CAM milling of IPS e.max ingots, and final aesthetic glaze cementation are completed with precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete dental crown makeover (from 1 tooth to full mouth 20-28 crowns) is designed and placed during this single visit.",
    "recoveryTime": "<strong>2 to 3 days adaptation.</strong> There is virtually no surgical recovery time. Any mild sensitivity subsides within 48-72 hours, allowing you to comfortably enjoy eating and normal activities immediately.",
    "priceEstimate": "<strong>E-Max Dental Crown prices start at £220 / €260 / $285 per tooth.</strong> All-inclusive multi-crown packages (10, 20 or 24 crowns) include digital smile design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single E-Max Porcelain Crown",
        "brand": "Swiss Ivoclar Vivadent IPS e.max (450–500 MPa)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Lithium Disilicate Crown",
          "3D Digital Intraoral Scan & CAD/CAM Precision Milling",
          "Tooth preparation, local anesthesia & temporary tooth",
          "Custom shade matching & natural tooth enamel characterization",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£220"
        }
      },
      {
        "name": "10-Unit Anterior Smile Makeover (E-Max)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "10x High-Translucency E-Max Crowns/Veneers (Upper Smile Zone)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Harmony Analysis",
          "Laser gum contouring & smile symmetry adjustment (if needed)",
          "Custom temporary crowns for complete comfort during manufacturing",
          "4-Star Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against crown fracture & porcelain chipping"
        ],
        "price": {
          "USD": "$2,650",
          "EUR": "€2,450",
          "GBP": "£2,100"
        }
      },
      {
        "name": "20-Unit Full Mouth E-Max Makeover",
        "brand": "Ivoclar IPS e.max CAD/Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "20x High-Translucency E-Max Crowns (10 Upper + 10 Lower Arches)",
          "Comprehensive 3D CT Diagnostic Scan & Bite Balance Simulation",
          "Full aesthetic & functional bite balancing (gnathological alignment)",
          "Complete temporary smile set fitted on Day 1",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Comprehensive post-op care pack & custom night guard protection"
        ],
        "price": {
          "USD": "$5,150",
          "EUR": "€4,750",
          "GBP": "£4,100"
        }
      },
      {
        "name": "Single Zirconium Crown (Amman-Girrbach)",
        "brand": "Amman-Girrbach / Vita (1200+ MPa)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "1x Genuine German Monolithic Zirconia Crown (1200+ MPa)",
          "3D Digital Intraoral Scan & CAD/CAM Precision Milling",
          "Tooth preparation, local anesthesia & temporary tooth",
          "Shade matching & natural aesthetic translucency glazing",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$275",
          "EUR": "€250",
          "GBP": "£210"
        }
      },
      {
        "name": "20-Unit Premium Zirconia Hollywood Smile",
        "brand": "Monolithic Multi-Layer 3D Pro Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x High-Translucency Monolithic Zirconia Crowns (10 Upper + 10 Lower Arches)",
          "3D Digital Facial Aesthetics & golden ratio smile planning",
          "Live smile trial with aesthetic temporary mock-up before fabrication",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Chauffeur Service for all transfers",
          "Professional clinical teeth whitening for remaining natural teeth",
          "Lifetime warranty certificate & international care passport"
        ],
        "price": {
          "USD": "$5,050",
          "EUR": "€4,650",
          "GBP": "£3,990"
        }
      },
      {
        "name": "Combination Makeover (E-Max Front + Zirconia Back)",
        "brand": "Swiss E-Max + German Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/treatments/accordion/Porcelain-Crown-Package-2.jpg",
        "included": [
          "8-10 Anterior E-Max Crowns for ultimate aesthetics + Posterior Zirconia for bite strength",
          "Precision CAD/CAM digital margin adaptation",
          "Optimal light transmission in the smile zone and fracture toughness in molars",
          "5-Star Hotel Stay + VIP Mercedes Private Transfers",
          "10-Year structural warranty on entire combination restoration"
        ],
        "price": {
          "USD": "$4,850",
          "EUR": "€4,450",
          "GBP": "£3,850"
        }
      }
    ],
    "faqs": [
      {
        "q": "What makes E-Max crowns superior for front teeth?",
        "a": [
          "E-Max is crafted from monolithic lithium disilicate ceramic, which matches the natural light reflection and translucency of real human enamel better than any other restorative material.",
          "Unlike metal-backed crowns, light passes through E-Max naturally, preventing opaque chalkiness and eliminating dark gumline borders."
        ]
      },
      {
        "q": "Will my treatment plan or price change when I arrive at the clinic?",
        "a": [
          "No. The personalized treatment plan and cost quotation provided during your online consultation (based on your dental photos and panoramic X-ray) are fixed and binding.",
          "Upon your arrival in Antalya, we perform a complimentary 3D CBCT scan. Unless an unforeseen internal dental infection or severe root pathology requiring endodontic intervention is discovered, your package price remains 100% transparent with zero hidden charges."
        ]
      },
      {
        "q": "Do you assist with accommodation and hotel booking?",
        "a": [
          "Yes. All of our multi-unit crown packages (10, 20, or 24 teeth) include complimentary 4-star or 5-star hotel accommodation with daily breakfast located in safe, upscale central districts of Antalya near our clinic.",
          "Our dedicated international patient team handles your hotel reservations, check-in, and daily VIP Mercedes clinic transfers for a completely stress-free experience."
        ]
      },
      {
        "q": "Is it safe to travel to Turkey for dental treatments?",
        "a": [
          "Yes, absolutely. Antalya is one of the world's most reputable and advanced centers for medical and dental tourism, welcoming over 500,000 international dental patients every year.",
          "Our clinic operates under strict Ministry of Health regulations, employing hospital-grade HEPA filtration, class-B autoclave sterilization, and CE/FDA-certified German and Swiss biomaterials."
        ]
      },
      {
        "q": "Which materials and brands do you use for dental crowns?",
        "a": [
          "We strictly refuse low-cost generic copies. We use 100% genuine medical-grade blanks from global dental leaders: Swiss Ivoclar Vivadent IPS e.max lithium disilicate, German Amman-Girrbach, Vita, and Japanese Noritake Katana multi-layer zirconia (1200+ MPa).",
          "Every patient receives an official certificate of authenticity with QR code verification and manufacturer lot numbers."
        ]
      },
      {
        "q": "Can I see the shape and color of my new crowns before they are manufactured?",
        "a": [
          "Yes! We employ 3D Digital Smile Design (DSD) technology. Prior to preparing your teeth, we scan your smile and simulate the final outcome on high-definition screens.",
          "Furthermore, we create physical aesthetic temporary mock-up teeth that you can test and wear in your mouth on Day 1, allowing you to preview the tooth length, shade, and alignment before final ceramic firing."
        ]
      },
      {
        "q": "Can I get dental crowns or veneers without having my teeth shaved?",
        "a": [
          "Dental crowns require 360-degree circumferential preparation (approximately 0.8 to 1.2 mm for E-Max) to provide structural reinforcement and ensure natural emergence profiles without gum inflammation.",
          "If your teeth are structurally intact, aligned, and you only desire cosmetic improvements, ultra-thin laminate veneers (0.3–0.5 mm) or prepless Lumineers may be indicated instead of full crowns."
        ]
      },
      {
        "q": "Can I pay online before arriving or during my trip?",
        "a": [
          "Yes. We accept flexible payment methods including international bank wire transfers, major credit/debit cards (Visa, MasterCard, American Express), and cash in EUR (€), GBP (£), and USD ($).",
          "You do not need to pay the full amount upfront; payment is split into transparent stages as your treatment milestones are completed."
        ]
      },
      {
        "q": "Are airport transfers and hotel stays really included in the packages?",
        "a": [
          "Yes! All smile makeover packages include complimentary private VIP Mercedes Vito transfers between Antalya Airport (IST / SAW), your hotel, and the clinic for all appointments.",
          "Your personal driver greets you at the arrival gate, ensuring seamless transportation throughout your entire stay."
        ]
      },
      {
        "q": "Do you offer installment payment plans for international patients?",
        "a": [
          "Direct healthcare installment financing depends on credit regulations in your home country (UK, EU, USA). However, we facilitate split stage payments across your clinic visits.",
          "We also support international credit card split-payment features and provide detailed itemized medical invoices for health insurance reimbursement in your home country."
        ]
      },
      {
        "q": "What warranty and guarantees do you offer on dental crowns?",
        "a": [
          "We provide a comprehensive warranty on all crown restorations: a 10-year warranty on Swiss Ivoclar E-Max restorations and a lifetime structural guarantee on monolithic zirconia against fracture or breakage.",
          "In the unlikely event of crown loosening or fracture under normal physiological use, our clinic repairs or replaces the restoration free of charge."
        ]
      },
      {
        "q": "Should I choose E-Max or Zirconium crowns over dental implants?",
        "a": [
          "For dental implant restorations, Monolithic Zirconia is strongly recommended due to its 1200+ MPa strength against titanium abutments. For natural front teeth where the underlying root is healthy and light transmission is paramount, E-Max lithium disilicate is the gold standard."
        ]
      },
      {
        "q": "Why is zirconia preferred over veneers for posterior (back) teeth?",
        "a": [
          "Posterior molars endure massive chewing pressures exceeding 800 to 1,000 Newtons. Ultra-thin porcelain veneers are designed for front-surface aesthetics and cannot withstand heavy lateral grinding forces. Zirconia and PFM offer the necessary fracture toughness for long-term posterior function."
        ]
      },
      {
        "q": "Why can multi-unit dental bridges not be made from pure E-Max?",
        "a": [
          "E-Max lithium disilicate has a flexural strength of ~450–500 MPa. When bridging across multiple missing teeth, torsional chewing forces can exceed this threshold and cause fracture. Multi-unit bridges require 1200+ MPa Monolithic Zirconia or PFM for guaranteed structural integrity."
        ]
      },
      {
        "q": "Are prepared teeth under crowns more prone to tooth decay?",
        "a": [
          "No. Precision CAD/CAM milled crowns fit with microscopic margin tolerances (under 20 microns), sealed with resin glass-ionomer cement that prevents bacterial leakage. As long as you brush, floss, and maintain good oral hygiene, the underlying tooth remains healthy."
        ]
      },
      {
        "q": "What is the expected lifespan of E-Max crowns?",
        "a": [
          "With proper oral hygiene, regular dental checkups, and nighttime bruxism protection (if you grind your teeth), high-quality Swiss Ivoclar E-Max crowns typically last 15 to 20+ years."
        ]
      },
      {
        "q": "Can I change the shade or color of my crowns after they are cemented?",
        "a": [
          "Once permanently cemented with resin cement, the ceramic glaze and color are locked and 100% stain-resistant. You will thoroughly evaluate, test, and approve the exact shade, translucency, and shape during your try-in session prior to final cementation."
        ]
      }
    ]
  },
  "ru": {
    "packagesTitle": "E-Max Porcelain & Ceramic Dental Crown Packages",
    "packagesSubtitle": "All-inclusive smile makeover and single crown packages using genuine Swiss Ivoclar IPS e.max lithium disilicate with hotel and VIP transfers.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About E-Max Crowns & Veneers",
    "faqSubtitle": "Explore answers to the most common clinical and travel questions regarding E-Max crowns, smile makeovers, procedure timelines, and international warranties in Antalya.",
    "stayDuration": "<strong>6 to 7 days in Antalya.</strong> During this single trip, 3D intraoral digital scanning, minimally invasive tooth preparation, CAD/CAM milling of IPS e.max ingots, and final aesthetic glaze cementation are completed with precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete dental crown makeover (from 1 tooth to full mouth 20-28 crowns) is designed and placed during this single visit.",
    "recoveryTime": "<strong>2 to 3 days adaptation.</strong> There is virtually no surgical recovery time. Any mild sensitivity subsides within 48-72 hours, allowing you to comfortably enjoy eating and normal activities immediately.",
    "priceEstimate": "<strong>E-Max Dental Crown prices start at £220 / €260 / $285 per tooth.</strong> All-inclusive multi-crown packages (10, 20 or 24 crowns) include digital smile design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single E-Max Porcelain Crown",
        "brand": "Swiss Ivoclar Vivadent IPS e.max (450–500 MPa)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "1x Authentic Swiss Ivoclar IPS e.max Lithium Disilicate Crown",
          "3D Digital Intraoral Scan & CAD/CAM Precision Milling",
          "Tooth preparation, local anesthesia & temporary tooth",
          "Custom shade matching & natural tooth enamel characterization",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$285",
          "EUR": "€260",
          "GBP": "£220"
        }
      },
      {
        "name": "10-Unit Anterior Smile Makeover (E-Max)",
        "brand": "Swiss Ivoclar IPS e.max Press",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-emax.webp",
        "popular": true,
        "included": [
          "10x High-Translucency E-Max Crowns/Veneers (Upper Smile Zone)",
          "Bespoke 3D Digital Smile Design (DSD) & Facial Harmony Analysis",
          "Laser gum contouring & smile symmetry adjustment (if needed)",
          "Custom temporary crowns for complete comfort during manufacturing",
          "4-Star Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "10-Year warranty against crown fracture & porcelain chipping"
        ],
        "price": {
          "USD": "$2,650",
          "EUR": "€2,450",
          "GBP": "£2,100"
        }
      },
      {
        "name": "20-Unit Full Mouth E-Max Makeover",
        "brand": "Ivoclar IPS e.max CAD/Press",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-veneers.webp",
        "included": [
          "20x High-Translucency E-Max Crowns (10 Upper + 10 Lower Arches)",
          "Comprehensive 3D CT Diagnostic Scan & Bite Balance Simulation",
          "Full aesthetic & functional bite balancing (gnathological alignment)",
          "Complete temporary smile set fitted on Day 1",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Comprehensive post-op care pack & custom night guard protection"
        ],
        "price": {
          "USD": "$5,150",
          "EUR": "€4,750",
          "GBP": "£4,100"
        }
      },
      {
        "name": "Single Zirconium Crown (Amman-Girrbach)",
        "brand": "Amman-Girrbach / Vita (1200+ MPa)",
        "duration": "3 – 5 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "1x Genuine German Monolithic Zirconia Crown (1200+ MPa)",
          "3D Digital Intraoral Scan & CAD/CAM Precision Milling",
          "Tooth preparation, local anesthesia & temporary tooth",
          "Shade matching & natural aesthetic translucency glazing",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "Dedicated patient coordinator assistance"
        ],
        "price": {
          "USD": "$275",
          "EUR": "€250",
          "GBP": "£210"
        }
      },
      {
        "name": "20-Unit Premium Zirconia Hollywood Smile",
        "brand": "Monolithic Multi-Layer 3D Pro Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x High-Translucency Monolithic Zirconia Crowns (10 Upper + 10 Lower Arches)",
          "3D Digital Facial Aesthetics & golden ratio smile planning",
          "Live smile trial with aesthetic temporary mock-up before fabrication",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Chauffeur Service for all transfers",
          "Professional clinical teeth whitening for remaining natural teeth",
          "Lifetime warranty certificate & international care passport"
        ],
        "price": {
          "USD": "$5,050",
          "EUR": "€4,650",
          "GBP": "£3,990"
        }
      },
      {
        "name": "Combination Makeover (E-Max Front + Zirconia Back)",
        "brand": "Swiss E-Max + German Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/treatments/accordion/Porcelain-Crown-Package-2.jpg",
        "included": [
          "8-10 Anterior E-Max Crowns for ultimate aesthetics + Posterior Zirconia for bite strength",
          "Precision CAD/CAM digital margin adaptation",
          "Optimal light transmission in the smile zone and fracture toughness in molars",
          "5-Star Hotel Stay + VIP Mercedes Private Transfers",
          "10-Year structural warranty on entire combination restoration"
        ],
        "price": {
          "USD": "$4,850",
          "EUR": "€4,450",
          "GBP": "£3,850"
        }
      }
    ],
    "faqs": [
      {
        "q": "What makes E-Max crowns superior for front teeth?",
        "a": [
          "E-Max is crafted from monolithic lithium disilicate ceramic, which matches the natural light reflection and translucency of real human enamel better than any other restorative material.",
          "Unlike metal-backed crowns, light passes through E-Max naturally, preventing opaque chalkiness and eliminating dark gumline borders."
        ]
      },
      {
        "q": "Will my treatment plan or price change when I arrive at the clinic?",
        "a": [
          "No. The personalized treatment plan and cost quotation provided during your online consultation (based on your dental photos and panoramic X-ray) are fixed and binding.",
          "Upon your arrival in Antalya, we perform a complimentary 3D CBCT scan. Unless an unforeseen internal dental infection or severe root pathology requiring endodontic intervention is discovered, your package price remains 100% transparent with zero hidden charges."
        ]
      },
      {
        "q": "Do you assist with accommodation and hotel booking?",
        "a": [
          "Yes. All of our multi-unit crown packages (10, 20, or 24 teeth) include complimentary 4-star or 5-star hotel accommodation with daily breakfast located in safe, upscale central districts of Antalya near our clinic.",
          "Our dedicated international patient team handles your hotel reservations, check-in, and daily VIP Mercedes clinic transfers for a completely stress-free experience."
        ]
      },
      {
        "q": "Is it safe to travel to Turkey for dental treatments?",
        "a": [
          "Yes, absolutely. Antalya is one of the world's most reputable and advanced centers for medical and dental tourism, welcoming over 500,000 international dental patients every year.",
          "Our clinic operates under strict Ministry of Health regulations, employing hospital-grade HEPA filtration, class-B autoclave sterilization, and CE/FDA-certified German and Swiss biomaterials."
        ]
      },
      {
        "q": "Which materials and brands do you use for dental crowns?",
        "a": [
          "We strictly refuse low-cost generic copies. We use 100% genuine medical-grade blanks from global dental leaders: Swiss Ivoclar Vivadent IPS e.max lithium disilicate, German Amman-Girrbach, Vita, and Japanese Noritake Katana multi-layer zirconia (1200+ MPa).",
          "Every patient receives an official certificate of authenticity with QR code verification and manufacturer lot numbers."
        ]
      },
      {
        "q": "Can I see the shape and color of my new crowns before they are manufactured?",
        "a": [
          "Yes! We employ 3D Digital Smile Design (DSD) technology. Prior to preparing your teeth, we scan your smile and simulate the final outcome on high-definition screens.",
          "Furthermore, we create physical aesthetic temporary mock-up teeth that you can test and wear in your mouth on Day 1, allowing you to preview the tooth length, shade, and alignment before final ceramic firing."
        ]
      },
      {
        "q": "Can I get dental crowns or veneers without having my teeth shaved?",
        "a": [
          "Dental crowns require 360-degree circumferential preparation (approximately 0.8 to 1.2 mm for E-Max) to provide structural reinforcement and ensure natural emergence profiles without gum inflammation.",
          "If your teeth are structurally intact, aligned, and you only desire cosmetic improvements, ultra-thin laminate veneers (0.3–0.5 mm) or prepless Lumineers may be indicated instead of full crowns."
        ]
      },
      {
        "q": "Can I pay online before arriving or during my trip?",
        "a": [
          "Yes. We accept flexible payment methods including international bank wire transfers, major credit/debit cards (Visa, MasterCard, American Express), and cash in EUR (€), GBP (£), and USD ($).",
          "You do not need to pay the full amount upfront; payment is split into transparent stages as your treatment milestones are completed."
        ]
      },
      {
        "q": "Are airport transfers and hotel stays really included in the packages?",
        "a": [
          "Yes! All smile makeover packages include complimentary private VIP Mercedes Vito transfers between Antalya Airport (IST / SAW), your hotel, and the clinic for all appointments.",
          "Your personal driver greets you at the arrival gate, ensuring seamless transportation throughout your entire stay."
        ]
      },
      {
        "q": "Do you offer installment payment plans for international patients?",
        "a": [
          "Direct healthcare installment financing depends on credit regulations in your home country (UK, EU, USA). However, we facilitate split stage payments across your clinic visits.",
          "We also support international credit card split-payment features and provide detailed itemized medical invoices for health insurance reimbursement in your home country."
        ]
      },
      {
        "q": "What warranty and guarantees do you offer on dental crowns?",
        "a": [
          "We provide a comprehensive warranty on all crown restorations: a 10-year warranty on Swiss Ivoclar E-Max restorations and a lifetime structural guarantee on monolithic zirconia against fracture or breakage.",
          "In the unlikely event of crown loosening or fracture under normal physiological use, our clinic repairs or replaces the restoration free of charge."
        ]
      },
      {
        "q": "Should I choose E-Max or Zirconium crowns over dental implants?",
        "a": [
          "For dental implant restorations, Monolithic Zirconia is strongly recommended due to its 1200+ MPa strength against titanium abutments. For natural front teeth where the underlying root is healthy and light transmission is paramount, E-Max lithium disilicate is the gold standard."
        ]
      },
      {
        "q": "Why is zirconia preferred over veneers for posterior (back) teeth?",
        "a": [
          "Posterior molars endure massive chewing pressures exceeding 800 to 1,000 Newtons. Ultra-thin porcelain veneers are designed for front-surface aesthetics and cannot withstand heavy lateral grinding forces. Zirconia and PFM offer the necessary fracture toughness for long-term posterior function."
        ]
      },
      {
        "q": "Why can multi-unit dental bridges not be made from pure E-Max?",
        "a": [
          "E-Max lithium disilicate has a flexural strength of ~450–500 MPa. When bridging across multiple missing teeth, torsional chewing forces can exceed this threshold and cause fracture. Multi-unit bridges require 1200+ MPa Monolithic Zirconia or PFM for guaranteed structural integrity."
        ]
      },
      {
        "q": "Are prepared teeth under crowns more prone to tooth decay?",
        "a": [
          "No. Precision CAD/CAM milled crowns fit with microscopic margin tolerances (under 20 microns), sealed with resin glass-ionomer cement that prevents bacterial leakage. As long as you brush, floss, and maintain good oral hygiene, the underlying tooth remains healthy."
        ]
      },
      {
        "q": "What is the expected lifespan of E-Max crowns?",
        "a": [
          "With proper oral hygiene, regular dental checkups, and nighttime bruxism protection (if you grind your teeth), high-quality Swiss Ivoclar E-Max crowns typically last 15 to 20+ years."
        ]
      },
      {
        "q": "Can I change the shade or color of my crowns after they are cemented?",
        "a": [
          "Once permanently cemented with resin cement, the ceramic glaze and color are locked and 100% stain-resistant. You will thoroughly evaluate, test, and approve the exact shade, translucency, and shape during your try-in session prior to final cementation."
        ]
      }
    ]
  }
};

export default function EmaxCrownsDetailView() {
  const locale = useLocale();
  const d = DICTIONARIES[locale] || DICTIONARIES.en;

  const [currency, setCurrency] = useState<'EUR' | 'GBP' | 'USD'>('EUR');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const toggleFaq = (idx: number) => {
    setActiveFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className={styles.wrapper}>
      {/* 1. FIND THE RIGHT TREATMENT ACCORDION (ZIRCONIUM / E-MAX / PFM / CERAMIC) */}
      <TreatmentCrownsRightTreatmentAccordion />

      {/* 2. YOUR DENTAL JOURNEY MADE SIMPLE (STAY, VISITS, RECOVERY, PRICE) */}
      <TreatmentJourneySimpleSection
        stayDuration={d.stayDuration}
        visitCount={d.visitCount}
        recoveryTime={d.recoveryTime}
        priceEstimate={d.priceEstimate}
      />

      {/* 3. OUR BEST SERVICES INCLUDED (8 SERVICE PILLARS) */}
      <TreatmentServicesIncludedSection />

      {/* 4. REAL PATIENTS. REAL SMILES. (VIDEO REELS) */}
      <TreatmentPatientReelsSection />

      {/* 5. FROM FIRST VISIT TO FINAL SMILE (BEFORE & AFTER GALLERY) */}
      <TreatmentBeforeAfterSliderSection />

      {/* 6. TREATMENT PACKAGES SLIDER & CURRENCY CALCULATOR */}
      <section aria-labelledby="crowns-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="crowns-packages-heading" className={styles.packagesTitle}>
              {d.packagesTitle}
            </h2>
            <p className={styles.packagesSubtitle}>{d.packagesSubtitle}</p>
          </div>

          <div className={styles.pkgSliderControls}>
            <div className={styles.currencyBar} role="group" aria-label="Currency Selector">
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

            <div className={styles.sliderNavBtns}>
              <button
                type="button"
                className={styles.sliderNavBtn}
                onClick={scrollLeft}
                aria-label="Previous Package"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              <button
                type="button"
                className={styles.sliderNavBtn}
                onClick={scrollRight}
                aria-label="Next Package"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div className={styles.pkgSliderTrack} ref={trackRef}>
            {d.packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`${styles.pkgCard} ${pkg.popular ? styles.pkgCardPopular : ''}`}
              >
                {pkg.popular && (
                  <span className={styles.popularBadge}>{d.mostPopularBadge}</span>
                )}

                <div>
                  <h3 className={styles.pkgName}>{pkg.name}</h3>
                  <span className={styles.pkgBrand}>{pkg.brand}</span>

                  <div className={styles.pkgImageWrap}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pkg.img}
                      alt={pkg.name}
                      width={340}
                      height={180}
                      className={styles.pkgImage}
                      loading="lazy"
                    />
                  </div>

                  <div className={styles.pkgDurationRow}>
                    <span>{d.durationLabel}</span>
                    <strong>{pkg.duration}</strong>
                  </div>

                  <span className={styles.pkgListTitle}>{d.includedLabel}</span>
                  <ul className={styles.pkgList}>
                    {pkg.included.map((item, iIdx) => (
                      <li key={iIdx} className={styles.pkgListItem}>
                        <span className={styles.pkgCheck}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.pkgFooter}>
                  <div className={styles.pkgPriceRow}>
                    <span className={styles.pkgPriceLabel}>{d.priceLabel}</span>
                    <strong className={styles.pkgPriceValue}>
                      {pkg.price[currency]}
                    </strong>
                  </div>

                  <a
                    href="#contact"
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

      {/* 7. EVERY SMILE HAS A STORY (REVIEWS SECTION) */}
      <TreatmentReviewsSection />

      {/* 8. MASTER FAQ SECTION */}
      <section aria-labelledby="crowns-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="crowns-faq-heading" className={styles.faqTitle}>
              {d.faqTitle}
            </h2>
            <p className={styles.faqSubtitle}>{d.faqSubtitle}</p>
          </div>

          <div className={styles.faqAccordion}>
            {d.faqs.map((faq, fIdx) => {
              const isOpen = activeFaq === fIdx;
              return (
                <div key={fIdx} className={styles.faqItem}>
                  <button
                    type="button"
                    className={styles.faqQuestionBtn}
                    onClick={() => toggleFaq(fIdx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-ans-${fIdx}`}
                  >
                    <span className={styles.faqQuestionText}>{faq.q}</span>
                    <span className={`${styles.faqIconWrap} ${isOpen ? styles.faqIconActive : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`faq-ans-${fIdx}`} className={styles.faqAnswer} role="region">
                      {faq.a.map((par, pIdx) => (
                        <p key={pIdx} className={styles.faqParagraph}>
                          {par}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. 4-STEP INTERACTIVE QUOTE & SMILE CONSULTATION FORM */}
      <div id="contact">
        <TreatmentInteractiveQuoteForm defaultTreatment="E-Max Crowns" />
      </div>
    </div>
  );
}
