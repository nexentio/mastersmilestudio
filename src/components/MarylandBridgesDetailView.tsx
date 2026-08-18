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
import styles from './MarylandBridgesDetailView.module.css';

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
    "packagesTitle": "Maryland Resin-Bonded Bridge Packages",
    "packagesSubtitle": "Conservative fixed bridge restorations with ultra-thin zirconia or ceramic wings, luxury accommodation, and VIP transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Maryland Dental Bridges",
    "faqSubtitle": "Clinical guidance on minimal-prep resin-bonded bridges, adhesive longevity, anterior tooth replacement, and maintenance in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> 3D digital scanning, ultra-conservative micro-etching of anchor teeth, precision CAD/CAM laboratory fabrication, and high-strength adhesive bonding completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Istanbul for your complete Maryland bridge treatment. All clinical steps are finished within 5 to 7 days.",
    "recoveryTime": "<strong>Immediate / 24 hours.</strong> Because natural teeth are not heavily reduced, there is zero recovery downtime and no post-operative sensitivity.",
    "priceEstimate": "<strong>Maryland bridge prices start from £350 / €400 / $440 per bridge.</strong> All-inclusive packages include 3D digital smile design, luxury hotel stay, and VIP Mercedes transfers with zero hidden costs.",
    "packages": [
      {
        "name": "1-Tooth Zirconia Maryland Bridge",
        "brand": "German High-Translucency Zirconia Wings",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "popular": true,
        "included": [
          "1 Artificial Pontic with 2 High-Strength Zirconia Retention Wings",
          "Zero or minimal micro-preparation of adjacent natural teeth",
          "High-strength dual-cure resin adhesive bonding protocol",
          "Custom shade matching to natural enamel",
          "10-Year Clinical Warranty against bridge debonding/fracture",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$530",
          "EUR": "€480",
          "GBP": "£420"
        }
      },
      {
        "name": "1-Tooth E-Max Ceramic Maryland Bridge",
        "brand": "Swiss Ivoclar IPS e.max Lithium Disilicate",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-1.jpg",
        "included": [
          "Ultra-aesthetic lithium disilicate pontic and retention wings",
          "Maximum natural light translucency for front smile zone",
          "Precision 3D intraoral digital impression & bite balancing",
          "4-Star Luxury Hotel Stay in Istanbul (5 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty & Dental Passport"
        ],
        "price": {
          "USD": "$615",
          "EUR": "€560",
          "GBP": "£490"
        }
      },
      {
        "name": "Full Maryland Bridge All-Inclusive Package",
        "brand": "German Multi-Layered Zirconia / E-Max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "included": [
          "Complete Maryland bridge restoration for single/dual missing front teeth",
          "Full digital smile aesthetic design and shade harmonisation",
          "5-Star Luxury Hotel Accommodation with Breakfast in Istanbul (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Comprehensive warranty & aftercare kit"
        ],
        "price": {
          "USD": "$1,060",
          "EUR": "€970",
          "GBP": "£850"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a Maryland dental bridge and how does it differ from a traditional bridge?",
        "a": [
          "A Maryland bridge (also known as a resin-bonded bridge) replaces a missing tooth without requiring substantial shaving or crowning of the adjacent natural teeth.",
          "Instead of full-coverage crowns, it uses two small ceramic or zirconia 'wings' that are micro-mechanically bonded with high-grade dental adhesive to the back (lingual) surfaces of the neighboring teeth."
        ]
      },
      {
        "q": "Who is the ideal candidate for a Maryland bridge?",
        "a": [
          "Maryland bridges are ideal for replacing single missing front teeth (incisors or canines) where chewing forces are moderate and the adjacent natural teeth are completely healthy and untouched.",
          "They are also widely used as an aesthetic permanent solution or a long-term provisional restoration while dental implants are osseointegrating."
        ]
      },
      {
        "q": "How long does a Maryland bridge last?",
        "a": [
          "With modern dental adhesive bonding systems and high-strength German zirconia or IPS e.max ceramics, Maryland bridges typically last 10 to 15 years or longer with proper oral hygiene and regular dental check-ups."
        ]
      },
      {
        "q": "Does getting a Maryland bridge hurt?",
        "a": [
          "No, the procedure is completely painless and non-invasive. In most cases, little to no enamel removal is required, meaning local anesthesia is often not even needed."
        ]
      }
    ]
  },
  "tr": {
    "packagesTitle": "Maryland Kanatlı Diş Köprüsü Paketleri",
    "packagesSubtitle": "Komşu dişleri kesmeden uygulanan kanatlı adeziv zirkonyum köprü, otel konaklaması ve VIP transfer dahil paketler.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Maryland Kanatlı Diş Köprüleri Hakkında Sıkça Sorulan Sorular",
    "faqSubtitle": "Clinical guidance on minimal-prep resin-bonded bridges, adhesive longevity, anterior tooth replacement, and maintenance in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> 3D digital scanning, ultra-conservative micro-etching of anchor teeth, precision CAD/CAM laboratory fabrication, and high-strength adhesive bonding completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Istanbul for your complete Maryland bridge treatment. All clinical steps are finished within 5 to 7 days.",
    "recoveryTime": "<strong>Immediate / 24 hours.</strong> Because natural teeth are not heavily reduced, there is zero recovery downtime and no post-operative sensitivity.",
    "priceEstimate": "<strong>Maryland bridge prices start from £350 / €400 / $440 per bridge.</strong> All-inclusive packages include 3D digital smile design, luxury hotel stay, and VIP Mercedes transfers with zero hidden costs.",
    "packages": [
      {
        "name": "1-Tooth Zirconia Maryland Bridge",
        "brand": "German High-Translucency Zirconia Wings",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "popular": true,
        "included": [
          "1 Artificial Pontic with 2 High-Strength Zirconia Retention Wings",
          "Zero or minimal micro-preparation of adjacent natural teeth",
          "High-strength dual-cure resin adhesive bonding protocol",
          "Custom shade matching to natural enamel",
          "10-Year Clinical Warranty against bridge debonding/fracture",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$530",
          "EUR": "€480",
          "GBP": "£420"
        }
      },
      {
        "name": "1-Tooth E-Max Ceramic Maryland Bridge",
        "brand": "Swiss Ivoclar IPS e.max Lithium Disilicate",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-1.jpg",
        "included": [
          "Ultra-aesthetic lithium disilicate pontic and retention wings",
          "Maximum natural light translucency for front smile zone",
          "Precision 3D intraoral digital impression & bite balancing",
          "4-Star Luxury Hotel Stay in Istanbul (5 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty & Dental Passport"
        ],
        "price": {
          "USD": "$615",
          "EUR": "€560",
          "GBP": "£490"
        }
      },
      {
        "name": "Full Maryland Bridge All-Inclusive Package",
        "brand": "German Multi-Layered Zirconia / E-Max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "included": [
          "Complete Maryland bridge restoration for single/dual missing front teeth",
          "Full digital smile aesthetic design and shade harmonisation",
          "5-Star Luxury Hotel Accommodation with Breakfast in Istanbul (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Comprehensive warranty & aftercare kit"
        ],
        "price": {
          "USD": "$1,060",
          "EUR": "€970",
          "GBP": "£850"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a Maryland dental bridge and how does it differ from a traditional bridge?",
        "a": [
          "A Maryland bridge (also known as a resin-bonded bridge) replaces a missing tooth without requiring substantial shaving or crowning of the adjacent natural teeth.",
          "Instead of full-coverage crowns, it uses two small ceramic or zirconia 'wings' that are micro-mechanically bonded with high-grade dental adhesive to the back (lingual) surfaces of the neighboring teeth."
        ]
      },
      {
        "q": "Who is the ideal candidate for a Maryland bridge?",
        "a": [
          "Maryland bridges are ideal for replacing single missing front teeth (incisors or canines) where chewing forces are moderate and the adjacent natural teeth are completely healthy and untouched.",
          "They are also widely used as an aesthetic permanent solution or a long-term provisional restoration while dental implants are osseointegrating."
        ]
      },
      {
        "q": "How long does a Maryland bridge last?",
        "a": [
          "With modern dental adhesive bonding systems and high-strength German zirconia or IPS e.max ceramics, Maryland bridges typically last 10 to 15 years or longer with proper oral hygiene and regular dental check-ups."
        ]
      },
      {
        "q": "Does getting a Maryland bridge hurt?",
        "a": [
          "No, the procedure is completely painless and non-invasive. In most cases, little to no enamel removal is required, meaning local anesthesia is often not even needed."
        ]
      }
    ]
  },
  "de": {
    "packagesTitle": "Maryland Resin-Bonded Bridge Packages",
    "packagesSubtitle": "Conservative fixed bridge restorations with ultra-thin zirconia or ceramic wings, luxury accommodation, and VIP transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Maryland Dental Bridges",
    "faqSubtitle": "Clinical guidance on minimal-prep resin-bonded bridges, adhesive longevity, anterior tooth replacement, and maintenance in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> 3D digital scanning, ultra-conservative micro-etching of anchor teeth, precision CAD/CAM laboratory fabrication, and high-strength adhesive bonding completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Istanbul for your complete Maryland bridge treatment. All clinical steps are finished within 5 to 7 days.",
    "recoveryTime": "<strong>Immediate / 24 hours.</strong> Because natural teeth are not heavily reduced, there is zero recovery downtime and no post-operative sensitivity.",
    "priceEstimate": "<strong>Maryland bridge prices start from £350 / €400 / $440 per bridge.</strong> All-inclusive packages include 3D digital smile design, luxury hotel stay, and VIP Mercedes transfers with zero hidden costs.",
    "packages": [
      {
        "name": "1-Tooth Zirconia Maryland Bridge",
        "brand": "German High-Translucency Zirconia Wings",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "popular": true,
        "included": [
          "1 Artificial Pontic with 2 High-Strength Zirconia Retention Wings",
          "Zero or minimal micro-preparation of adjacent natural teeth",
          "High-strength dual-cure resin adhesive bonding protocol",
          "Custom shade matching to natural enamel",
          "10-Year Clinical Warranty against bridge debonding/fracture",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$530",
          "EUR": "€480",
          "GBP": "£420"
        }
      },
      {
        "name": "1-Tooth E-Max Ceramic Maryland Bridge",
        "brand": "Swiss Ivoclar IPS e.max Lithium Disilicate",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-1.jpg",
        "included": [
          "Ultra-aesthetic lithium disilicate pontic and retention wings",
          "Maximum natural light translucency for front smile zone",
          "Precision 3D intraoral digital impression & bite balancing",
          "4-Star Luxury Hotel Stay in Istanbul (5 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty & Dental Passport"
        ],
        "price": {
          "USD": "$615",
          "EUR": "€560",
          "GBP": "£490"
        }
      },
      {
        "name": "Full Maryland Bridge All-Inclusive Package",
        "brand": "German Multi-Layered Zirconia / E-Max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "included": [
          "Complete Maryland bridge restoration for single/dual missing front teeth",
          "Full digital smile aesthetic design and shade harmonisation",
          "5-Star Luxury Hotel Accommodation with Breakfast in Istanbul (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Comprehensive warranty & aftercare kit"
        ],
        "price": {
          "USD": "$1,060",
          "EUR": "€970",
          "GBP": "£850"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a Maryland dental bridge and how does it differ from a traditional bridge?",
        "a": [
          "A Maryland bridge (also known as a resin-bonded bridge) replaces a missing tooth without requiring substantial shaving or crowning of the adjacent natural teeth.",
          "Instead of full-coverage crowns, it uses two small ceramic or zirconia 'wings' that are micro-mechanically bonded with high-grade dental adhesive to the back (lingual) surfaces of the neighboring teeth."
        ]
      },
      {
        "q": "Who is the ideal candidate for a Maryland bridge?",
        "a": [
          "Maryland bridges are ideal for replacing single missing front teeth (incisors or canines) where chewing forces are moderate and the adjacent natural teeth are completely healthy and untouched.",
          "They are also widely used as an aesthetic permanent solution or a long-term provisional restoration while dental implants are osseointegrating."
        ]
      },
      {
        "q": "How long does a Maryland bridge last?",
        "a": [
          "With modern dental adhesive bonding systems and high-strength German zirconia or IPS e.max ceramics, Maryland bridges typically last 10 to 15 years or longer with proper oral hygiene and regular dental check-ups."
        ]
      },
      {
        "q": "Does getting a Maryland bridge hurt?",
        "a": [
          "No, the procedure is completely painless and non-invasive. In most cases, little to no enamel removal is required, meaning local anesthesia is often not even needed."
        ]
      }
    ]
  },
  "pl": {
    "packagesTitle": "Maryland Resin-Bonded Bridge Packages",
    "packagesSubtitle": "Conservative fixed bridge restorations with ultra-thin zirconia or ceramic wings, luxury accommodation, and VIP transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Maryland Dental Bridges",
    "faqSubtitle": "Clinical guidance on minimal-prep resin-bonded bridges, adhesive longevity, anterior tooth replacement, and maintenance in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> 3D digital scanning, ultra-conservative micro-etching of anchor teeth, precision CAD/CAM laboratory fabrication, and high-strength adhesive bonding completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Istanbul for your complete Maryland bridge treatment. All clinical steps are finished within 5 to 7 days.",
    "recoveryTime": "<strong>Immediate / 24 hours.</strong> Because natural teeth are not heavily reduced, there is zero recovery downtime and no post-operative sensitivity.",
    "priceEstimate": "<strong>Maryland bridge prices start from £350 / €400 / $440 per bridge.</strong> All-inclusive packages include 3D digital smile design, luxury hotel stay, and VIP Mercedes transfers with zero hidden costs.",
    "packages": [
      {
        "name": "1-Tooth Zirconia Maryland Bridge",
        "brand": "German High-Translucency Zirconia Wings",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "popular": true,
        "included": [
          "1 Artificial Pontic with 2 High-Strength Zirconia Retention Wings",
          "Zero or minimal micro-preparation of adjacent natural teeth",
          "High-strength dual-cure resin adhesive bonding protocol",
          "Custom shade matching to natural enamel",
          "10-Year Clinical Warranty against bridge debonding/fracture",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$530",
          "EUR": "€480",
          "GBP": "£420"
        }
      },
      {
        "name": "1-Tooth E-Max Ceramic Maryland Bridge",
        "brand": "Swiss Ivoclar IPS e.max Lithium Disilicate",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-1.jpg",
        "included": [
          "Ultra-aesthetic lithium disilicate pontic and retention wings",
          "Maximum natural light translucency for front smile zone",
          "Precision 3D intraoral digital impression & bite balancing",
          "4-Star Luxury Hotel Stay in Istanbul (5 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty & Dental Passport"
        ],
        "price": {
          "USD": "$615",
          "EUR": "€560",
          "GBP": "£490"
        }
      },
      {
        "name": "Full Maryland Bridge All-Inclusive Package",
        "brand": "German Multi-Layered Zirconia / E-Max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "included": [
          "Complete Maryland bridge restoration for single/dual missing front teeth",
          "Full digital smile aesthetic design and shade harmonisation",
          "5-Star Luxury Hotel Accommodation with Breakfast in Istanbul (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Comprehensive warranty & aftercare kit"
        ],
        "price": {
          "USD": "$1,060",
          "EUR": "€970",
          "GBP": "£850"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a Maryland dental bridge and how does it differ from a traditional bridge?",
        "a": [
          "A Maryland bridge (also known as a resin-bonded bridge) replaces a missing tooth without requiring substantial shaving or crowning of the adjacent natural teeth.",
          "Instead of full-coverage crowns, it uses two small ceramic or zirconia 'wings' that are micro-mechanically bonded with high-grade dental adhesive to the back (lingual) surfaces of the neighboring teeth."
        ]
      },
      {
        "q": "Who is the ideal candidate for a Maryland bridge?",
        "a": [
          "Maryland bridges are ideal for replacing single missing front teeth (incisors or canines) where chewing forces are moderate and the adjacent natural teeth are completely healthy and untouched.",
          "They are also widely used as an aesthetic permanent solution or a long-term provisional restoration while dental implants are osseointegrating."
        ]
      },
      {
        "q": "How long does a Maryland bridge last?",
        "a": [
          "With modern dental adhesive bonding systems and high-strength German zirconia or IPS e.max ceramics, Maryland bridges typically last 10 to 15 years or longer with proper oral hygiene and regular dental check-ups."
        ]
      },
      {
        "q": "Does getting a Maryland bridge hurt?",
        "a": [
          "No, the procedure is completely painless and non-invasive. In most cases, little to no enamel removal is required, meaning local anesthesia is often not even needed."
        ]
      }
    ]
  },
  "pt": {
    "packagesTitle": "Maryland Resin-Bonded Bridge Packages",
    "packagesSubtitle": "Conservative fixed bridge restorations with ultra-thin zirconia or ceramic wings, luxury accommodation, and VIP transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Maryland Dental Bridges",
    "faqSubtitle": "Clinical guidance on minimal-prep resin-bonded bridges, adhesive longevity, anterior tooth replacement, and maintenance in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> 3D digital scanning, ultra-conservative micro-etching of anchor teeth, precision CAD/CAM laboratory fabrication, and high-strength adhesive bonding completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Istanbul for your complete Maryland bridge treatment. All clinical steps are finished within 5 to 7 days.",
    "recoveryTime": "<strong>Immediate / 24 hours.</strong> Because natural teeth are not heavily reduced, there is zero recovery downtime and no post-operative sensitivity.",
    "priceEstimate": "<strong>Maryland bridge prices start from £350 / €400 / $440 per bridge.</strong> All-inclusive packages include 3D digital smile design, luxury hotel stay, and VIP Mercedes transfers with zero hidden costs.",
    "packages": [
      {
        "name": "1-Tooth Zirconia Maryland Bridge",
        "brand": "German High-Translucency Zirconia Wings",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "popular": true,
        "included": [
          "1 Artificial Pontic with 2 High-Strength Zirconia Retention Wings",
          "Zero or minimal micro-preparation of adjacent natural teeth",
          "High-strength dual-cure resin adhesive bonding protocol",
          "Custom shade matching to natural enamel",
          "10-Year Clinical Warranty against bridge debonding/fracture",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$530",
          "EUR": "€480",
          "GBP": "£420"
        }
      },
      {
        "name": "1-Tooth E-Max Ceramic Maryland Bridge",
        "brand": "Swiss Ivoclar IPS e.max Lithium Disilicate",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-1.jpg",
        "included": [
          "Ultra-aesthetic lithium disilicate pontic and retention wings",
          "Maximum natural light translucency for front smile zone",
          "Precision 3D intraoral digital impression & bite balancing",
          "4-Star Luxury Hotel Stay in Istanbul (5 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty & Dental Passport"
        ],
        "price": {
          "USD": "$615",
          "EUR": "€560",
          "GBP": "£490"
        }
      },
      {
        "name": "Full Maryland Bridge All-Inclusive Package",
        "brand": "German Multi-Layered Zirconia / E-Max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "included": [
          "Complete Maryland bridge restoration for single/dual missing front teeth",
          "Full digital smile aesthetic design and shade harmonisation",
          "5-Star Luxury Hotel Accommodation with Breakfast in Istanbul (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Comprehensive warranty & aftercare kit"
        ],
        "price": {
          "USD": "$1,060",
          "EUR": "€970",
          "GBP": "£850"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a Maryland dental bridge and how does it differ from a traditional bridge?",
        "a": [
          "A Maryland bridge (also known as a resin-bonded bridge) replaces a missing tooth without requiring substantial shaving or crowning of the adjacent natural teeth.",
          "Instead of full-coverage crowns, it uses two small ceramic or zirconia 'wings' that are micro-mechanically bonded with high-grade dental adhesive to the back (lingual) surfaces of the neighboring teeth."
        ]
      },
      {
        "q": "Who is the ideal candidate for a Maryland bridge?",
        "a": [
          "Maryland bridges are ideal for replacing single missing front teeth (incisors or canines) where chewing forces are moderate and the adjacent natural teeth are completely healthy and untouched.",
          "They are also widely used as an aesthetic permanent solution or a long-term provisional restoration while dental implants are osseointegrating."
        ]
      },
      {
        "q": "How long does a Maryland bridge last?",
        "a": [
          "With modern dental adhesive bonding systems and high-strength German zirconia or IPS e.max ceramics, Maryland bridges typically last 10 to 15 years or longer with proper oral hygiene and regular dental check-ups."
        ]
      },
      {
        "q": "Does getting a Maryland bridge hurt?",
        "a": [
          "No, the procedure is completely painless and non-invasive. In most cases, little to no enamel removal is required, meaning local anesthesia is often not even needed."
        ]
      }
    ]
  },
  "es": {
    "packagesTitle": "Maryland Resin-Bonded Bridge Packages",
    "packagesSubtitle": "Conservative fixed bridge restorations with ultra-thin zirconia or ceramic wings, luxury accommodation, and VIP transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Maryland Dental Bridges",
    "faqSubtitle": "Clinical guidance on minimal-prep resin-bonded bridges, adhesive longevity, anterior tooth replacement, and maintenance in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> 3D digital scanning, ultra-conservative micro-etching of anchor teeth, precision CAD/CAM laboratory fabrication, and high-strength adhesive bonding completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Istanbul for your complete Maryland bridge treatment. All clinical steps are finished within 5 to 7 days.",
    "recoveryTime": "<strong>Immediate / 24 hours.</strong> Because natural teeth are not heavily reduced, there is zero recovery downtime and no post-operative sensitivity.",
    "priceEstimate": "<strong>Maryland bridge prices start from £350 / €400 / $440 per bridge.</strong> All-inclusive packages include 3D digital smile design, luxury hotel stay, and VIP Mercedes transfers with zero hidden costs.",
    "packages": [
      {
        "name": "1-Tooth Zirconia Maryland Bridge",
        "brand": "German High-Translucency Zirconia Wings",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "popular": true,
        "included": [
          "1 Artificial Pontic with 2 High-Strength Zirconia Retention Wings",
          "Zero or minimal micro-preparation of adjacent natural teeth",
          "High-strength dual-cure resin adhesive bonding protocol",
          "Custom shade matching to natural enamel",
          "10-Year Clinical Warranty against bridge debonding/fracture",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$530",
          "EUR": "€480",
          "GBP": "£420"
        }
      },
      {
        "name": "1-Tooth E-Max Ceramic Maryland Bridge",
        "brand": "Swiss Ivoclar IPS e.max Lithium Disilicate",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-1.jpg",
        "included": [
          "Ultra-aesthetic lithium disilicate pontic and retention wings",
          "Maximum natural light translucency for front smile zone",
          "Precision 3D intraoral digital impression & bite balancing",
          "4-Star Luxury Hotel Stay in Istanbul (5 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty & Dental Passport"
        ],
        "price": {
          "USD": "$615",
          "EUR": "€560",
          "GBP": "£490"
        }
      },
      {
        "name": "Full Maryland Bridge All-Inclusive Package",
        "brand": "German Multi-Layered Zirconia / E-Max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "included": [
          "Complete Maryland bridge restoration for single/dual missing front teeth",
          "Full digital smile aesthetic design and shade harmonisation",
          "5-Star Luxury Hotel Accommodation with Breakfast in Istanbul (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Comprehensive warranty & aftercare kit"
        ],
        "price": {
          "USD": "$1,060",
          "EUR": "€970",
          "GBP": "£850"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a Maryland dental bridge and how does it differ from a traditional bridge?",
        "a": [
          "A Maryland bridge (also known as a resin-bonded bridge) replaces a missing tooth without requiring substantial shaving or crowning of the adjacent natural teeth.",
          "Instead of full-coverage crowns, it uses two small ceramic or zirconia 'wings' that are micro-mechanically bonded with high-grade dental adhesive to the back (lingual) surfaces of the neighboring teeth."
        ]
      },
      {
        "q": "Who is the ideal candidate for a Maryland bridge?",
        "a": [
          "Maryland bridges are ideal for replacing single missing front teeth (incisors or canines) where chewing forces are moderate and the adjacent natural teeth are completely healthy and untouched.",
          "They are also widely used as an aesthetic permanent solution or a long-term provisional restoration while dental implants are osseointegrating."
        ]
      },
      {
        "q": "How long does a Maryland bridge last?",
        "a": [
          "With modern dental adhesive bonding systems and high-strength German zirconia or IPS e.max ceramics, Maryland bridges typically last 10 to 15 years or longer with proper oral hygiene and regular dental check-ups."
        ]
      },
      {
        "q": "Does getting a Maryland bridge hurt?",
        "a": [
          "No, the procedure is completely painless and non-invasive. In most cases, little to no enamel removal is required, meaning local anesthesia is often not even needed."
        ]
      }
    ]
  },
  "ru": {
    "packagesTitle": "Maryland Resin-Bonded Bridge Packages",
    "packagesSubtitle": "Conservative fixed bridge restorations with ultra-thin zirconia or ceramic wings, luxury accommodation, and VIP transfers in Istanbul.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Maryland Dental Bridges",
    "faqSubtitle": "Clinical guidance on minimal-prep resin-bonded bridges, adhesive longevity, anterior tooth replacement, and maintenance in Istanbul.",
    "stayDuration": "<strong>5 to 7 days in Istanbul.</strong> 3D digital scanning, ultra-conservative micro-etching of anchor teeth, precision CAD/CAM laboratory fabrication, and high-strength adhesive bonding completed during 1 visit.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel once to Istanbul for your complete Maryland bridge treatment. All clinical steps are finished within 5 to 7 days.",
    "recoveryTime": "<strong>Immediate / 24 hours.</strong> Because natural teeth are not heavily reduced, there is zero recovery downtime and no post-operative sensitivity.",
    "priceEstimate": "<strong>Maryland bridge prices start from £350 / €400 / $440 per bridge.</strong> All-inclusive packages include 3D digital smile design, luxury hotel stay, and VIP Mercedes transfers with zero hidden costs.",
    "packages": [
      {
        "name": "1-Tooth Zirconia Maryland Bridge",
        "brand": "German High-Translucency Zirconia Wings",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-1.jpg",
        "popular": true,
        "included": [
          "1 Artificial Pontic with 2 High-Strength Zirconia Retention Wings",
          "Zero or minimal micro-preparation of adjacent natural teeth",
          "High-strength dual-cure resin adhesive bonding protocol",
          "Custom shade matching to natural enamel",
          "10-Year Clinical Warranty against bridge debonding/fracture",
          "VIP Patient coordination assistance"
        ],
        "price": {
          "USD": "$530",
          "EUR": "€480",
          "GBP": "£420"
        }
      },
      {
        "name": "1-Tooth E-Max Ceramic Maryland Bridge",
        "brand": "Swiss Ivoclar IPS e.max Lithium Disilicate",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/E-Max-Veneers-Package-1.jpg",
        "included": [
          "Ultra-aesthetic lithium disilicate pontic and retention wings",
          "Maximum natural light translucency for front smile zone",
          "Precision 3D intraoral digital impression & bite balancing",
          "4-Star Luxury Hotel Stay in Istanbul (5 Nights)",
          "VIP Mercedes Chauffeur Airport & Clinic Transfers",
          "10-Year Comprehensive Warranty & Dental Passport"
        ],
        "price": {
          "USD": "$615",
          "EUR": "€560",
          "GBP": "£490"
        }
      },
      {
        "name": "Full Maryland Bridge All-Inclusive Package",
        "brand": "German Multi-Layered Zirconia / E-Max",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "https://sohodent.com/doc/data1/Zirconium-Crown-Package-2.jpg",
        "included": [
          "Complete Maryland bridge restoration for single/dual missing front teeth",
          "Full digital smile aesthetic design and shade harmonisation",
          "5-Star Luxury Hotel Accommodation with Breakfast in Istanbul (6 Nights)",
          "Private VIP Mercedes Chauffeur for all appointments",
          "Comprehensive warranty & aftercare kit"
        ],
        "price": {
          "USD": "$1,060",
          "EUR": "€970",
          "GBP": "£850"
        }
      }
    ],
    "faqs": [
      {
        "q": "What is a Maryland dental bridge and how does it differ from a traditional bridge?",
        "a": [
          "A Maryland bridge (also known as a resin-bonded bridge) replaces a missing tooth without requiring substantial shaving or crowning of the adjacent natural teeth.",
          "Instead of full-coverage crowns, it uses two small ceramic or zirconia 'wings' that are micro-mechanically bonded with high-grade dental adhesive to the back (lingual) surfaces of the neighboring teeth."
        ]
      },
      {
        "q": "Who is the ideal candidate for a Maryland bridge?",
        "a": [
          "Maryland bridges are ideal for replacing single missing front teeth (incisors or canines) where chewing forces are moderate and the adjacent natural teeth are completely healthy and untouched.",
          "They are also widely used as an aesthetic permanent solution or a long-term provisional restoration while dental implants are osseointegrating."
        ]
      },
      {
        "q": "How long does a Maryland bridge last?",
        "a": [
          "With modern dental adhesive bonding systems and high-strength German zirconia or IPS e.max ceramics, Maryland bridges typically last 10 to 15 years or longer with proper oral hygiene and regular dental check-ups."
        ]
      },
      {
        "q": "Does getting a Maryland bridge hurt?",
        "a": [
          "No, the procedure is completely painless and non-invasive. In most cases, little to no enamel removal is required, meaning local anesthesia is often not even needed."
        ]
      }
    ]
  }
};

export default function MarylandBridgesDetailView() {
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
      <section aria-labelledby="marylandbridgesdetailview-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="marylandbridgesdetailview-packages-heading" className={styles.packagesTitle}>
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
      <section aria-labelledby="marylandbridgesdetailview-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="marylandbridgesdetailview-faq-heading" className={styles.faqTitle}>
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
                    aria-controls={`marylandbridgesdetailview-faq-ans-${fIdx}`}
                  >
                    <span className={styles.faqQuestionText}>{faq.q}</span>
                    <span className={`${styles.faqIconWrap} ${isOpen ? styles.faqIconActive : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`marylandbridgesdetailview-faq-ans-${fIdx}`} className={styles.faqAnswer} role="region">
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
        <TreatmentInteractiveQuoteForm defaultTreatment="Maryland Dental Bridges" />
      </div>
    </div>
  );
}
