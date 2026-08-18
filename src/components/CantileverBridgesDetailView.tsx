'use client';

import React, { useState, useRef } from 'react';
import { useLocale } from 'next-intl';
import TreatmentBridgeRightTreatmentAccordion from '@/components/treatment-sections/TreatmentBridgeRightTreatmentAccordion';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentBeforeAfterSliderSection';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './CantileverBridgesDetailView.module.css';

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
    "packagesTitle": "Cantilever Fixed Dental Bridge Packages",
    "packagesSubtitle": "Single-sided anchor fixed bridge restorations with high-strength German zirconia or Swiss E-Max, luxury hotel accommodation, and VIP transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Cantilever Dental Bridges",
    "faqSubtitle": "Clinical guidance on single-abutment cantilever bridges, biting force dynamics, natural tooth preservation, and longevity in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> 3D digital imaging, precision preparation of the single anchor abutment tooth, CAD/CAM monolithic milling, and permanent cementation completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Istanbul for your complete cantilever bridge restoration. All clinical steps are finalized within 5 to 7 days.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minor initial gum adaptation subsides quickly, allowing full chewing comfort and natural speech within 1 to 2 days.",
    "priceEstimate": "<strong>Cantilever bridge prices start from £380 / €430 / $475 per bridge.</strong> Multi-unit packages include 3D digital design, luxury hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "2-Unit Zirconia Cantilever Bridge",
        "brand": "German Multi-Layered Monolithic Zirconia (1200+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "popular": true,
        "included": [
          "2-Unit High-Strength German Zirconia Bridge (1 Abutment Crown + 1 Suspended Pontic)",
          "Engineered stress-distribution design to protect anchor tooth",
          "Precision 3D intraoral digital scan & bite alignment",
          "Temporary aesthetic bridge fitted on Day 1",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$560",
          "EUR": "€510",
          "GBP": "£450"
        }
      },
      {
        "name": "2-Unit E-Max Ceramic Cantilever Bridge",
        "brand": "Swiss Ivoclar IPS e.max Lithium Disilicate",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-1.jpg",
        "included": [
          "2-Unit Premium Lithium Disilicate Cantilever Bridge for anterior zone",
          "Bespoke shade matching and multi-tonal light reflection",
          "Minimal enamel preparation with 3D CAD/CAM precision",
          "4-Star Luxury Hotel Stay in Istanbul (5 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive International Warranty"
        ],
        "price": {
          "USD": "$615",
          "EUR": "€560",
          "GBP": "£490"
        }
      },
      {
        "name": "Full Cantilever Bridge All-Inclusive Package",
        "brand": "German Katana / Vita Multi-Layer Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "included": [
          "Complete Cantilever bridge restoration with high-load structural support",
          "Full gnathological bite balancing & aesthetic smile harmonization",
          "5-Star Luxury Hotel Accommodation with Breakfast in Istanbul (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Comprehensive warranty & lifetime international support"
        ],
        "price": {
          "USD": "$1,240",
          "EUR": "€1,130",
          "GBP": "£990"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a cantilever dental bridge and when is it used?",
        "a": [
          "A cantilever dental bridge is a fixed dental restoration used when there is a healthy supporting natural tooth on only one side of the missing tooth gap.",
          "The artificial replacement tooth (pontic) is suspended and supported entirely by one or two crowns cemented onto anchor teeth on that single side."
        ]
      },
      {
        "q": "What are the advantages of a cantilever bridge?",
        "a": [
          "The primary advantage is that only one natural tooth needs to be prepared and crowned, preserving the second adjacent tooth in its 100% natural, untouched state.",
          "It is particularly effective in the front teeth (anterior) where occlusal chewing forces are lower."
        ]
      },
      {
        "q": "Is a cantilever bridge as strong as a traditional bridge?",
        "a": [
          "When placed in the appropriate clinical indications (typically front teeth, lateral incisors, or premolars) and milled from 1200+ MPa German zirconia, cantilever bridges provide exceptional stability and durability.",
          "Our prosthodontists carefully evaluate your bite forces using 3D digital analysis to ensure balanced occlusal distribution."
        ]
      },
      {
        "q": "How long does a cantilever dental bridge last?",
        "a": [
          "With proper oral hygiene, daily flossing around the abutment tooth, and routine dental check-ups, high-grade zirconia cantilever bridges last 10 to 15 years or longer."
        ]
      }
    ]
  },
  "tr": {
    "packagesTitle": "Cantilever (Balkon) Asma Köprü Paketleri",
    "packagesSubtitle": "Tek taraflı destek dişiyle uygulanan zirkonyum ve E-Max asma köprü, otel konaklaması ve VIP transfer dahil paketler.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Cantilever Diş Köprüleri Hakkında Sıkça Sorulan Sorular",
    "faqSubtitle": "Clinical guidance on single-abutment cantilever bridges, biting force dynamics, natural tooth preservation, and longevity in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> 3D digital imaging, precision preparation of the single anchor abutment tooth, CAD/CAM monolithic milling, and permanent cementation completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Istanbul for your complete cantilever bridge restoration. All clinical steps are finalized within 5 to 7 days.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minor initial gum adaptation subsides quickly, allowing full chewing comfort and natural speech within 1 to 2 days.",
    "priceEstimate": "<strong>Cantilever bridge prices start from £380 / €430 / $475 per bridge.</strong> Multi-unit packages include 3D digital design, luxury hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "2-Unit Zirconia Cantilever Bridge",
        "brand": "German Multi-Layered Monolithic Zirconia (1200+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "popular": true,
        "included": [
          "2-Unit High-Strength German Zirconia Bridge (1 Abutment Crown + 1 Suspended Pontic)",
          "Engineered stress-distribution design to protect anchor tooth",
          "Precision 3D intraoral digital scan & bite alignment",
          "Temporary aesthetic bridge fitted on Day 1",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$560",
          "EUR": "€510",
          "GBP": "£450"
        }
      },
      {
        "name": "2-Unit E-Max Ceramic Cantilever Bridge",
        "brand": "Swiss Ivoclar IPS e.max Lithium Disilicate",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-1.jpg",
        "included": [
          "2-Unit Premium Lithium Disilicate Cantilever Bridge for anterior zone",
          "Bespoke shade matching and multi-tonal light reflection",
          "Minimal enamel preparation with 3D CAD/CAM precision",
          "4-Star Luxury Hotel Stay in Istanbul (5 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive International Warranty"
        ],
        "price": {
          "USD": "$615",
          "EUR": "€560",
          "GBP": "£490"
        }
      },
      {
        "name": "Full Cantilever Bridge All-Inclusive Package",
        "brand": "German Katana / Vita Multi-Layer Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "included": [
          "Complete Cantilever bridge restoration with high-load structural support",
          "Full gnathological bite balancing & aesthetic smile harmonization",
          "5-Star Luxury Hotel Accommodation with Breakfast in Istanbul (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Comprehensive warranty & lifetime international support"
        ],
        "price": {
          "USD": "$1,240",
          "EUR": "€1,130",
          "GBP": "£990"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a cantilever dental bridge and when is it used?",
        "a": [
          "A cantilever dental bridge is a fixed dental restoration used when there is a healthy supporting natural tooth on only one side of the missing tooth gap.",
          "The artificial replacement tooth (pontic) is suspended and supported entirely by one or two crowns cemented onto anchor teeth on that single side."
        ]
      },
      {
        "q": "What are the advantages of a cantilever bridge?",
        "a": [
          "The primary advantage is that only one natural tooth needs to be prepared and crowned, preserving the second adjacent tooth in its 100% natural, untouched state.",
          "It is particularly effective in the front teeth (anterior) where occlusal chewing forces are lower."
        ]
      },
      {
        "q": "Is a cantilever bridge as strong as a traditional bridge?",
        "a": [
          "When placed in the appropriate clinical indications (typically front teeth, lateral incisors, or premolars) and milled from 1200+ MPa German zirconia, cantilever bridges provide exceptional stability and durability.",
          "Our prosthodontists carefully evaluate your bite forces using 3D digital analysis to ensure balanced occlusal distribution."
        ]
      },
      {
        "q": "How long does a cantilever dental bridge last?",
        "a": [
          "With proper oral hygiene, daily flossing around the abutment tooth, and routine dental check-ups, high-grade zirconia cantilever bridges last 10 to 15 years or longer."
        ]
      }
    ]
  },
  "de": {
    "packagesTitle": "Cantilever Fixed Dental Bridge Packages",
    "packagesSubtitle": "Single-sided anchor fixed bridge restorations with high-strength German zirconia or Swiss E-Max, luxury hotel accommodation, and VIP transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Cantilever Dental Bridges",
    "faqSubtitle": "Clinical guidance on single-abutment cantilever bridges, biting force dynamics, natural tooth preservation, and longevity in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> 3D digital imaging, precision preparation of the single anchor abutment tooth, CAD/CAM monolithic milling, and permanent cementation completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Istanbul for your complete cantilever bridge restoration. All clinical steps are finalized within 5 to 7 days.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minor initial gum adaptation subsides quickly, allowing full chewing comfort and natural speech within 1 to 2 days.",
    "priceEstimate": "<strong>Cantilever bridge prices start from £380 / €430 / $475 per bridge.</strong> Multi-unit packages include 3D digital design, luxury hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "2-Unit Zirconia Cantilever Bridge",
        "brand": "German Multi-Layered Monolithic Zirconia (1200+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "popular": true,
        "included": [
          "2-Unit High-Strength German Zirconia Bridge (1 Abutment Crown + 1 Suspended Pontic)",
          "Engineered stress-distribution design to protect anchor tooth",
          "Precision 3D intraoral digital scan & bite alignment",
          "Temporary aesthetic bridge fitted on Day 1",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$560",
          "EUR": "€510",
          "GBP": "£450"
        }
      },
      {
        "name": "2-Unit E-Max Ceramic Cantilever Bridge",
        "brand": "Swiss Ivoclar IPS e.max Lithium Disilicate",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-1.jpg",
        "included": [
          "2-Unit Premium Lithium Disilicate Cantilever Bridge for anterior zone",
          "Bespoke shade matching and multi-tonal light reflection",
          "Minimal enamel preparation with 3D CAD/CAM precision",
          "4-Star Luxury Hotel Stay in Istanbul (5 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive International Warranty"
        ],
        "price": {
          "USD": "$615",
          "EUR": "€560",
          "GBP": "£490"
        }
      },
      {
        "name": "Full Cantilever Bridge All-Inclusive Package",
        "brand": "German Katana / Vita Multi-Layer Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "included": [
          "Complete Cantilever bridge restoration with high-load structural support",
          "Full gnathological bite balancing & aesthetic smile harmonization",
          "5-Star Luxury Hotel Accommodation with Breakfast in Istanbul (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Comprehensive warranty & lifetime international support"
        ],
        "price": {
          "USD": "$1,240",
          "EUR": "€1,130",
          "GBP": "£990"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a cantilever dental bridge and when is it used?",
        "a": [
          "A cantilever dental bridge is a fixed dental restoration used when there is a healthy supporting natural tooth on only one side of the missing tooth gap.",
          "The artificial replacement tooth (pontic) is suspended and supported entirely by one or two crowns cemented onto anchor teeth on that single side."
        ]
      },
      {
        "q": "What are the advantages of a cantilever bridge?",
        "a": [
          "The primary advantage is that only one natural tooth needs to be prepared and crowned, preserving the second adjacent tooth in its 100% natural, untouched state.",
          "It is particularly effective in the front teeth (anterior) where occlusal chewing forces are lower."
        ]
      },
      {
        "q": "Is a cantilever bridge as strong as a traditional bridge?",
        "a": [
          "When placed in the appropriate clinical indications (typically front teeth, lateral incisors, or premolars) and milled from 1200+ MPa German zirconia, cantilever bridges provide exceptional stability and durability.",
          "Our prosthodontists carefully evaluate your bite forces using 3D digital analysis to ensure balanced occlusal distribution."
        ]
      },
      {
        "q": "How long does a cantilever dental bridge last?",
        "a": [
          "With proper oral hygiene, daily flossing around the abutment tooth, and routine dental check-ups, high-grade zirconia cantilever bridges last 10 to 15 years or longer."
        ]
      }
    ]
  },
  "pl": {
    "packagesTitle": "Cantilever Fixed Dental Bridge Packages",
    "packagesSubtitle": "Single-sided anchor fixed bridge restorations with high-strength German zirconia or Swiss E-Max, luxury hotel accommodation, and VIP transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Cantilever Dental Bridges",
    "faqSubtitle": "Clinical guidance on single-abutment cantilever bridges, biting force dynamics, natural tooth preservation, and longevity in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> 3D digital imaging, precision preparation of the single anchor abutment tooth, CAD/CAM monolithic milling, and permanent cementation completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Istanbul for your complete cantilever bridge restoration. All clinical steps are finalized within 5 to 7 days.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minor initial gum adaptation subsides quickly, allowing full chewing comfort and natural speech within 1 to 2 days.",
    "priceEstimate": "<strong>Cantilever bridge prices start from £380 / €430 / $475 per bridge.</strong> Multi-unit packages include 3D digital design, luxury hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "2-Unit Zirconia Cantilever Bridge",
        "brand": "German Multi-Layered Monolithic Zirconia (1200+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "popular": true,
        "included": [
          "2-Unit High-Strength German Zirconia Bridge (1 Abutment Crown + 1 Suspended Pontic)",
          "Engineered stress-distribution design to protect anchor tooth",
          "Precision 3D intraoral digital scan & bite alignment",
          "Temporary aesthetic bridge fitted on Day 1",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$560",
          "EUR": "€510",
          "GBP": "£450"
        }
      },
      {
        "name": "2-Unit E-Max Ceramic Cantilever Bridge",
        "brand": "Swiss Ivoclar IPS e.max Lithium Disilicate",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-1.jpg",
        "included": [
          "2-Unit Premium Lithium Disilicate Cantilever Bridge for anterior zone",
          "Bespoke shade matching and multi-tonal light reflection",
          "Minimal enamel preparation with 3D CAD/CAM precision",
          "4-Star Luxury Hotel Stay in Istanbul (5 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive International Warranty"
        ],
        "price": {
          "USD": "$615",
          "EUR": "€560",
          "GBP": "£490"
        }
      },
      {
        "name": "Full Cantilever Bridge All-Inclusive Package",
        "brand": "German Katana / Vita Multi-Layer Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "included": [
          "Complete Cantilever bridge restoration with high-load structural support",
          "Full gnathological bite balancing & aesthetic smile harmonization",
          "5-Star Luxury Hotel Accommodation with Breakfast in Istanbul (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Comprehensive warranty & lifetime international support"
        ],
        "price": {
          "USD": "$1,240",
          "EUR": "€1,130",
          "GBP": "£990"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a cantilever dental bridge and when is it used?",
        "a": [
          "A cantilever dental bridge is a fixed dental restoration used when there is a healthy supporting natural tooth on only one side of the missing tooth gap.",
          "The artificial replacement tooth (pontic) is suspended and supported entirely by one or two crowns cemented onto anchor teeth on that single side."
        ]
      },
      {
        "q": "What are the advantages of a cantilever bridge?",
        "a": [
          "The primary advantage is that only one natural tooth needs to be prepared and crowned, preserving the second adjacent tooth in its 100% natural, untouched state.",
          "It is particularly effective in the front teeth (anterior) where occlusal chewing forces are lower."
        ]
      },
      {
        "q": "Is a cantilever bridge as strong as a traditional bridge?",
        "a": [
          "When placed in the appropriate clinical indications (typically front teeth, lateral incisors, or premolars) and milled from 1200+ MPa German zirconia, cantilever bridges provide exceptional stability and durability.",
          "Our prosthodontists carefully evaluate your bite forces using 3D digital analysis to ensure balanced occlusal distribution."
        ]
      },
      {
        "q": "How long does a cantilever dental bridge last?",
        "a": [
          "With proper oral hygiene, daily flossing around the abutment tooth, and routine dental check-ups, high-grade zirconia cantilever bridges last 10 to 15 years or longer."
        ]
      }
    ]
  },
  "pt": {
    "packagesTitle": "Cantilever Fixed Dental Bridge Packages",
    "packagesSubtitle": "Single-sided anchor fixed bridge restorations with high-strength German zirconia or Swiss E-Max, luxury hotel accommodation, and VIP transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Cantilever Dental Bridges",
    "faqSubtitle": "Clinical guidance on single-abutment cantilever bridges, biting force dynamics, natural tooth preservation, and longevity in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> 3D digital imaging, precision preparation of the single anchor abutment tooth, CAD/CAM monolithic milling, and permanent cementation completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Istanbul for your complete cantilever bridge restoration. All clinical steps are finalized within 5 to 7 days.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minor initial gum adaptation subsides quickly, allowing full chewing comfort and natural speech within 1 to 2 days.",
    "priceEstimate": "<strong>Cantilever bridge prices start from £380 / €430 / $475 per bridge.</strong> Multi-unit packages include 3D digital design, luxury hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "2-Unit Zirconia Cantilever Bridge",
        "brand": "German Multi-Layered Monolithic Zirconia (1200+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "popular": true,
        "included": [
          "2-Unit High-Strength German Zirconia Bridge (1 Abutment Crown + 1 Suspended Pontic)",
          "Engineered stress-distribution design to protect anchor tooth",
          "Precision 3D intraoral digital scan & bite alignment",
          "Temporary aesthetic bridge fitted on Day 1",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$560",
          "EUR": "€510",
          "GBP": "£450"
        }
      },
      {
        "name": "2-Unit E-Max Ceramic Cantilever Bridge",
        "brand": "Swiss Ivoclar IPS e.max Lithium Disilicate",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-1.jpg",
        "included": [
          "2-Unit Premium Lithium Disilicate Cantilever Bridge for anterior zone",
          "Bespoke shade matching and multi-tonal light reflection",
          "Minimal enamel preparation with 3D CAD/CAM precision",
          "4-Star Luxury Hotel Stay in Istanbul (5 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive International Warranty"
        ],
        "price": {
          "USD": "$615",
          "EUR": "€560",
          "GBP": "£490"
        }
      },
      {
        "name": "Full Cantilever Bridge All-Inclusive Package",
        "brand": "German Katana / Vita Multi-Layer Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "included": [
          "Complete Cantilever bridge restoration with high-load structural support",
          "Full gnathological bite balancing & aesthetic smile harmonization",
          "5-Star Luxury Hotel Accommodation with Breakfast in Istanbul (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Comprehensive warranty & lifetime international support"
        ],
        "price": {
          "USD": "$1,240",
          "EUR": "€1,130",
          "GBP": "£990"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a cantilever dental bridge and when is it used?",
        "a": [
          "A cantilever dental bridge is a fixed dental restoration used when there is a healthy supporting natural tooth on only one side of the missing tooth gap.",
          "The artificial replacement tooth (pontic) is suspended and supported entirely by one or two crowns cemented onto anchor teeth on that single side."
        ]
      },
      {
        "q": "What are the advantages of a cantilever bridge?",
        "a": [
          "The primary advantage is that only one natural tooth needs to be prepared and crowned, preserving the second adjacent tooth in its 100% natural, untouched state.",
          "It is particularly effective in the front teeth (anterior) where occlusal chewing forces are lower."
        ]
      },
      {
        "q": "Is a cantilever bridge as strong as a traditional bridge?",
        "a": [
          "When placed in the appropriate clinical indications (typically front teeth, lateral incisors, or premolars) and milled from 1200+ MPa German zirconia, cantilever bridges provide exceptional stability and durability.",
          "Our prosthodontists carefully evaluate your bite forces using 3D digital analysis to ensure balanced occlusal distribution."
        ]
      },
      {
        "q": "How long does a cantilever dental bridge last?",
        "a": [
          "With proper oral hygiene, daily flossing around the abutment tooth, and routine dental check-ups, high-grade zirconia cantilever bridges last 10 to 15 years or longer."
        ]
      }
    ]
  },
  "es": {
    "packagesTitle": "Cantilever Fixed Dental Bridge Packages",
    "packagesSubtitle": "Single-sided anchor fixed bridge restorations with high-strength German zirconia or Swiss E-Max, luxury hotel accommodation, and VIP transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Cantilever Dental Bridges",
    "faqSubtitle": "Clinical guidance on single-abutment cantilever bridges, biting force dynamics, natural tooth preservation, and longevity in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> 3D digital imaging, precision preparation of the single anchor abutment tooth, CAD/CAM monolithic milling, and permanent cementation completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Istanbul for your complete cantilever bridge restoration. All clinical steps are finalized within 5 to 7 days.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minor initial gum adaptation subsides quickly, allowing full chewing comfort and natural speech within 1 to 2 days.",
    "priceEstimate": "<strong>Cantilever bridge prices start from £380 / €430 / $475 per bridge.</strong> Multi-unit packages include 3D digital design, luxury hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "2-Unit Zirconia Cantilever Bridge",
        "brand": "German Multi-Layered Monolithic Zirconia (1200+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "popular": true,
        "included": [
          "2-Unit High-Strength German Zirconia Bridge (1 Abutment Crown + 1 Suspended Pontic)",
          "Engineered stress-distribution design to protect anchor tooth",
          "Precision 3D intraoral digital scan & bite alignment",
          "Temporary aesthetic bridge fitted on Day 1",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$560",
          "EUR": "€510",
          "GBP": "£450"
        }
      },
      {
        "name": "2-Unit E-Max Ceramic Cantilever Bridge",
        "brand": "Swiss Ivoclar IPS e.max Lithium Disilicate",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-1.jpg",
        "included": [
          "2-Unit Premium Lithium Disilicate Cantilever Bridge for anterior zone",
          "Bespoke shade matching and multi-tonal light reflection",
          "Minimal enamel preparation with 3D CAD/CAM precision",
          "4-Star Luxury Hotel Stay in Istanbul (5 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive International Warranty"
        ],
        "price": {
          "USD": "$615",
          "EUR": "€560",
          "GBP": "£490"
        }
      },
      {
        "name": "Full Cantilever Bridge All-Inclusive Package",
        "brand": "German Katana / Vita Multi-Layer Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "included": [
          "Complete Cantilever bridge restoration with high-load structural support",
          "Full gnathological bite balancing & aesthetic smile harmonization",
          "5-Star Luxury Hotel Accommodation with Breakfast in Istanbul (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Comprehensive warranty & lifetime international support"
        ],
        "price": {
          "USD": "$1,240",
          "EUR": "€1,130",
          "GBP": "£990"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a cantilever dental bridge and when is it used?",
        "a": [
          "A cantilever dental bridge is a fixed dental restoration used when there is a healthy supporting natural tooth on only one side of the missing tooth gap.",
          "The artificial replacement tooth (pontic) is suspended and supported entirely by one or two crowns cemented onto anchor teeth on that single side."
        ]
      },
      {
        "q": "What are the advantages of a cantilever bridge?",
        "a": [
          "The primary advantage is that only one natural tooth needs to be prepared and crowned, preserving the second adjacent tooth in its 100% natural, untouched state.",
          "It is particularly effective in the front teeth (anterior) where occlusal chewing forces are lower."
        ]
      },
      {
        "q": "Is a cantilever bridge as strong as a traditional bridge?",
        "a": [
          "When placed in the appropriate clinical indications (typically front teeth, lateral incisors, or premolars) and milled from 1200+ MPa German zirconia, cantilever bridges provide exceptional stability and durability.",
          "Our prosthodontists carefully evaluate your bite forces using 3D digital analysis to ensure balanced occlusal distribution."
        ]
      },
      {
        "q": "How long does a cantilever dental bridge last?",
        "a": [
          "With proper oral hygiene, daily flossing around the abutment tooth, and routine dental check-ups, high-grade zirconia cantilever bridges last 10 to 15 years or longer."
        ]
      }
    ]
  },
  "ru": {
    "packagesTitle": "Cantilever Fixed Dental Bridge Packages",
    "packagesSubtitle": "Single-sided anchor fixed bridge restorations with high-strength German zirconia or Swiss E-Max, luxury hotel accommodation, and VIP transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Cantilever Dental Bridges",
    "faqSubtitle": "Clinical guidance on single-abutment cantilever bridges, biting force dynamics, natural tooth preservation, and longevity in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> 3D digital imaging, precision preparation of the single anchor abutment tooth, CAD/CAM monolithic milling, and permanent cementation completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Istanbul for your complete cantilever bridge restoration. All clinical steps are finalized within 5 to 7 days.",
    "recoveryTime": "<strong>24 to 48 hours adaptation.</strong> Minor initial gum adaptation subsides quickly, allowing full chewing comfort and natural speech within 1 to 2 days.",
    "priceEstimate": "<strong>Cantilever bridge prices start from £380 / €430 / $475 per bridge.</strong> Multi-unit packages include 3D digital design, luxury hotel stay, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "2-Unit Zirconia Cantilever Bridge",
        "brand": "German Multi-Layered Monolithic Zirconia (1200+ MPa)",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "popular": true,
        "included": [
          "2-Unit High-Strength German Zirconia Bridge (1 Abutment Crown + 1 Suspended Pontic)",
          "Engineered stress-distribution design to protect anchor tooth",
          "Precision 3D intraoral digital scan & bite alignment",
          "Temporary aesthetic bridge fitted on Day 1",
          "10-Year Clinical Warranty & Certificate of Authenticity",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$560",
          "EUR": "€510",
          "GBP": "£450"
        }
      },
      {
        "name": "2-Unit E-Max Ceramic Cantilever Bridge",
        "brand": "Swiss Ivoclar IPS e.max Lithium Disilicate",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-1.jpg",
        "included": [
          "2-Unit Premium Lithium Disilicate Cantilever Bridge for anterior zone",
          "Bespoke shade matching and multi-tonal light reflection",
          "Minimal enamel preparation with 3D CAD/CAM precision",
          "4-Star Luxury Hotel Stay in Istanbul (5 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive International Warranty"
        ],
        "price": {
          "USD": "$615",
          "EUR": "€560",
          "GBP": "£490"
        }
      },
      {
        "name": "Full Cantilever Bridge All-Inclusive Package",
        "brand": "German Katana / Vita Multi-Layer Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "included": [
          "Complete Cantilever bridge restoration with high-load structural support",
          "Full gnathological bite balancing & aesthetic smile harmonization",
          "5-Star Luxury Hotel Accommodation with Breakfast in Istanbul (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Comprehensive warranty & lifetime international support"
        ],
        "price": {
          "USD": "$1,240",
          "EUR": "€1,130",
          "GBP": "£990"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a cantilever dental bridge and when is it used?",
        "a": [
          "A cantilever dental bridge is a fixed dental restoration used when there is a healthy supporting natural tooth on only one side of the missing tooth gap.",
          "The artificial replacement tooth (pontic) is suspended and supported entirely by one or two crowns cemented onto anchor teeth on that single side."
        ]
      },
      {
        "q": "What are the advantages of a cantilever bridge?",
        "a": [
          "The primary advantage is that only one natural tooth needs to be prepared and crowned, preserving the second adjacent tooth in its 100% natural, untouched state.",
          "It is particularly effective in the front teeth (anterior) where occlusal chewing forces are lower."
        ]
      },
      {
        "q": "Is a cantilever bridge as strong as a traditional bridge?",
        "a": [
          "When placed in the appropriate clinical indications (typically front teeth, lateral incisors, or premolars) and milled from 1200+ MPa German zirconia, cantilever bridges provide exceptional stability and durability.",
          "Our prosthodontists carefully evaluate your bite forces using 3D digital analysis to ensure balanced occlusal distribution."
        ]
      },
      {
        "q": "How long does a cantilever dental bridge last?",
        "a": [
          "With proper oral hygiene, daily flossing around the abutment tooth, and routine dental check-ups, high-grade zirconia cantilever bridges last 10 to 15 years or longer."
        ]
      }
    ]
  }
};

export default function CantileverBridgesDetailView() {
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
      {/* 1. FIND THE RIGHT TREATMENT ACCORDION (BRIDGES ACCORDION) */}
      <TreatmentBridgeRightTreatmentAccordion />

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
      <section aria-labelledby="cantileverbridgesdetailview-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="cantileverbridgesdetailview-packages-heading" className={styles.packagesTitle}>
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
      <section aria-labelledby="cantileverbridgesdetailview-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="cantileverbridgesdetailview-faq-heading" className={styles.faqTitle}>
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
                    aria-controls={`cantileverbridgesdetailview-faq-ans-${fIdx}`}
                  >
                    <span className={styles.faqQuestionText}>{faq.q}</span>
                    <span className={`${styles.faqIconWrap} ${isOpen ? styles.faqIconActive : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`cantileverbridgesdetailview-faq-ans-${fIdx}`} className={styles.faqAnswer} role="region">
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
        <TreatmentInteractiveQuoteForm defaultTreatment="Cantilever Dental Bridges" />
      </div>
    </div>
  );
}
