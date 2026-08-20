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
import styles from './ZirconiumCrownsDetailView.module.css';

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
    "packagesTitle": "Zirconium & Ceramic Dental Crown Packages",
    "packagesSubtitle": "All-inclusive smile makeover and single crown packages using certified German Amman-Girrbach Zirconia and Swiss Ivoclar E-Max with hotel and VIP transfers.",
    "mostPopularBadge": "Most Popular Choice",
    "durationLabel": "Procedure Time:",
    "includedLabel": "Package Inclusions:",
    "priceLabel": "Price (All-Inclusive):",
    "getQuoteBtn": "Get Your Free Quote",
    "faqTitle": "Frequently Asked Questions About Zirconium Crowns",
    "faqSubtitle": "Explore answers to the most common clinical and travel questions regarding Zirconia crowns, smile makeovers, procedure timelines, and international warranties in Antalya.",
    "stayDuration": "<strong>6 to 7 days in Antalya.</strong> During this single trip, tooth preparation, digital CAD/CAM 3D scanning, laboratory milling of your high-strength monolithic zirconium crowns, and final aesthetic cementation are completed with precision.",
    "visitCount": "<strong>Single 1-visit trip.</strong> You only need to travel to Antalya once. Your complete dental crown makeover (from 1 tooth to full mouth 20-28 crowns) is designed and placed during this single visit.",
    "recoveryTime": "<strong>2 to 3 days adaptation.</strong> There is virtually no surgical recovery time. Any mild sensitivity subsides within 48-72 hours, allowing you to comfortably enjoy eating and normal activities immediately.",
    "priceEstimate": "<strong>Zirconium Dental Crown prices start at £210 / €250 / $275 per tooth.</strong> All-inclusive multi-crown packages (10, 20 or 24 crowns) include digital smile design, 4/5-star luxury hotel accommodation, and VIP Mercedes transfers with zero hidden fees.",
    "packages": [
      {
        "name": "Single Zirconium Crown",
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
        "name": "10-Unit Upper Smile Makeover (Zirconia)",
        "brand": "German Monolithic Multi-Layer Zirconia",
        "duration": "5 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "popular": true,
        "included": [
          "10x Premium High-Translucency German Zirconia Crowns (Upper Visible Smile Line)",
          "Bespoke 3D Digital Smile Design (DSD) & Mock-up",
          "Laser gum contouring & smile symmetry adjustment (if needed)",
          "Custom temporary crowns for complete comfort during manufacturing",
          "4-Star Hotel Stay with Breakfast in Antalya (6 Nights)",
          "VIP Mercedes Chauffeur Transfers (Airport - Hotel - Clinic)",
          "Lifetime warranty against crown fracture & chipping"
        ],
        "price": {
          "USD": "$2,590",
          "EUR": "€2,390",
          "GBP": "£2,050"
        }
      },
      {
        "name": "20-Unit Full Mouth Zirconia Makeover",
        "brand": "Monolithic Multi-Layer 3D Pro Zirconia",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x High-Translucency Monolithic Zirconia Crowns (10 Upper + 10 Lower Arches)",
          "Comprehensive 3D CT Diagnostic Scan & Digital Smile Simulation",
          "Full aesthetic & functional bite balancing (gnathological alignment)",
          "Complete temporary smile set fitted on Day 1",
          "5-Star Luxury Hotel Accommodation in Antalya (6 Nights)",
          "Private VIP Mercedes Airport & Clinic Chauffeur",
          "Comprehensive post-op care pack & night guard protection"
        ],
        "price": {
          "USD": "$5,050",
          "EUR": "€4,650",
          "GBP": "£3,990"
        }
      },
      {
        "name": "Single Swiss Ivoclar E-Max Crown",
        "brand": "Ivoclar Vivadent IPS e.max Press (Swiss)",
        "duration": "4 – 6 Days (1 Trip)",
        "img": "/packages/Porcelain-Crown-Package-1.jpg",
        "included": [
          "1x 100% Genuine Swiss Ivoclar Lithium Disilicate Crown/Veneer",
          "Unmatched 70% natural light transmission for anterior teeth",
          "High-precision microscopic margin preparation",
          "Custom hand-stained individual tooth shading & opalescence",
          "10-Year International Manufacturer Warranty",
          "Digital shade calibration under natural & studio lighting"
        ],
        "price": {
          "USD": "$320",
          "EUR": "€290",
          "GBP": "£250"
        }
      },
      {
        "name": "20-Unit Premium Ivoclar E-Max Hollywood Smile",
        "brand": "Ivoclar IPS e.max CAD / Press Master",
        "duration": "6 – 7 Days (1 Trip)",
        "img": "/packages/Porcelain-Crown-Package-2.jpg",
        "included": [
          "20x Swiss Ivoclar IPS e.max Porcelain Crowns/Veneers (Full Hollywood Smile)",
          "3D Digital Facial Aesthetics & golden ratio smile planning",
          "Live smile trial with aesthetic temporary mock-up before fabrication",
          "5-Star Luxury Hotel Stay (Bed & Breakfast) for 6 Nights",
          "Private VIP Chauffeur Service for all transfers",
          "Professional clinical teeth whitening for remaining natural teeth",
          "Lifetime warranty certificate & international care passport"
        ],
        "price": {
          "USD": "$5,950",
          "EUR": "€5,450",
          "GBP": "£4,690"
        }
      },
      {
        "name": "Full Arch Zirconia Bridge on Implants",
        "brand": "Prettau / Katana Multi-Layer Zirconia (12–14 Units)",
        "duration": "6 – 7 Days (Final Visit)",
        "img": "/packages/Porcelain-Crown-Package-3.jpg",
        "included": [
          "12 to 14-Unit One-Piece Screw-Retained Monolithic Zirconia Bridge",
          "Precision CAD/CAM titanium multi-unit abutment connection",
          "High fracture resistance (1250 MPa) for extreme chewing forces",
          "Gingival shade porcelain characterization for lifelike pink aesthetics",
          "5-Star Hotel Stay + VIP Mercedes Private Transfers",
          "Lifetime structural warranty on zirconia framework"
        ],
        "price": {
          "USD": "$3,150",
          "EUR": "€2,890",
          "GBP": "£2,490"
        }
      }
    ],
    "faqs": [
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
          "We strictly refuse low-cost generic copies. We use 100% genuine medical-grade blanks from global dental leaders: German Amman-Girrbach, Vita, and Japanese Noritake Katana multi-layer zirconia (1200+ MPa), as well as Swiss Ivoclar Vivadent IPS e.max lithium disilicate.",
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
          "Dental crowns require 360-degree circumferential preparation (approximately 1.0 to 1.5 mm) to provide full structural reinforcement and ensure natural emergence profiles without gum inflammation.",
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
          "We provide a comprehensive warranty on all crown restorations: a lifetime structural guarantee on monolithic zirconia against fracture or breakage, and a 10-year warranty on Swiss Ivoclar E-Max restorations.",
          "In the unlikely event of crown loosening or fracture under normal physiological use, our clinic repairs or replaces the restoration free of charge."
        ]
      },
      {
        "q": "What options are available to change the appearance of my smile?",
        "a": [
          "Depending on your oral anatomy and aesthetic goals, options include: 1) Monolithic Zirconia Crowns for maximum durability and color masking, 2) Swiss Ivoclar E-Max Veneers for unmatched natural translucency, 3) Direct Composite Bonding for quick cosmetic fixes, and 4) In-Office Laser Teeth Whitening."
        ]
      },
      {
        "q": "Can I cover my tooth with gold or custom dental jewelry?",
        "a": [
          "Yes. We can craft bespoke dental restorations including medical-grade dental gold alloy crowns (18K/24K) or embed authentic Swarovski crystals and diamonds into your ceramic or zirconia crowns upon request."
        ]
      },
      {
        "q": "Is it safe to postpone dental crown treatment?",
        "a": [
          "Postponing a recommended crown on a fractured, severely worn, or root-canal-treated tooth can be risky. Without the 360-degree protection of a crown, the tooth can split down the root, making extraction and implant surgery unavoidable."
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
          "Posterior molars endure massive chewing pressures exceeding 800 to 1,000 Newtons. Ultra-thin porcelain veneers are designed for front-surface aesthetics and cannot withstand heavy lateral grinding forces. Zirconia offers the necessary fracture toughness for long-term posterior function."
        ]
      },
      {
        "q": "Why can multi-unit dental bridges not be made from pure E-Max?",
        "a": [
          "E-Max lithium disilicate has a flexural strength of ~450–500 MPa. When bridging across multiple missing teeth, torsional chewing forces can exceed this threshold and cause fracture. Multi-unit bridges require 1200+ MPa Monolithic Zirconia for guaranteed structural integrity."
        ]
      },
      {
        "q": "Are prepared teeth under crowns more prone to tooth decay?",
        "a": [
          "No. Precision CAD/CAM milled zirconia crowns fit with microscopic margin tolerances (under 20 microns), sealed with resin glass-ionomer cement that prevents bacterial leakage. As long as you brush, floss, and maintain good oral hygiene, the underlying tooth remains healthy."
        ]
      },
      {
        "q": "What is the expected lifespan of Zirconium crowns?",
        "a": [
          "With proper oral hygiene, regular dental checkups, and nighttime bruxism protection (if you grind your teeth), monolithic zirconia crowns typically last 20 to 25+ years, and frequently a lifetime."
        ]
      },
      {
        "q": "How much tooth structure is reduced for crowns versus veneers?",
        "a": [
          "Laminate veneers require only 0.3 to 0.7 mm of front enamel reduction. Full dental crowns require 1.0 to 1.5 mm of circumferential reduction all around the tooth to create space for high-strength ceramic walls and protect against biting forces."
        ]
      },
      {
        "q": "Can I change the shade or color of my crowns after they are cemented?",
        "a": [
          "Once permanently cemented with resin cement, the ceramic glaze and color are locked and 100% stain-resistant. You will thoroughly evaluate, test, and approve the exact shade, translucency, and shape during your try-in session prior to final cementation."
        ]
      },
      {
        "q": "What is the difference between laminate veneers, composite veneers, and zirconia crowns?",
        "a": [
          "Laminate veneers are ultra-thin (0.3–0.5 mm) custom porcelain shells bonded only to the front tooth surface; composite veneers are hand-layered resin materials with a shorter lifespan (4–7 years); zirconia crowns are full 360-degree high-strength caps that fully encase damaged, discolored, or heavily filled teeth for maximum longevity."
        ]
      }
    ]
  },
  "tr": {
    "packagesTitle": "Zirkonyum & Porselen Diş Kaplama Paketleri",
    "packagesSubtitle": "Orijinal Alman Amman-Girrbach Zirkonyum ve İsviçre Ivoclar E-Max materyalleri, otel konaklaması ve VIP transfer dahil her şey dahil kuron paketleri.",
    "mostPopularBadge": "En Çok Tercih Edilen",
    "durationLabel": "Tedavi Süresi:",
    "includedLabel": "Paket İçeriği:",
    "priceLabel": "Her Şey Dahil Fiyat:",
    "getQuoteBtn": "Ücretsiz Fiyat Teklifi Al",
    "faqTitle": "Zirkonyum Kaplama Hakkında Sıkça Sorulan Sorular",
    "faqSubtitle": "Antalya'da zirkonyum diş kaplama, gülüş tasarımı, tedavi süresi, garanti koşulları ve seyahat planlaması hakkında en çok merak edilen 21 sorunun yanıtları.",
    "stayDuration": "<strong>Antalya’da 6–7 gün.</strong> Bu tek seyahatte dişlerin minimal preparasyonu, 3D dijital CAD/CAM tarama, laboratuvarda monolitik zirkonyum kuronların üretimi ve kalıcı estetik simantasyon eksiksiz tamamlanır.",
    "visitCount": "<strong>Tek (1) ziyaret.</strong> Antalya’ya yalnızca bir kez gelmeniz yeterlidir. Tek bir dişten tüm ağız 20-28 zirkonyum kaplamaya kadar tüm tedaviniz aynı seyahatte tamamlanır.",
    "recoveryTime": "<strong>2–3 gün alışma süresi.</strong> Cerrahi bir operasyon olmadığı için iyileşme süreci gerektirmez. Diş etlerinin hafif adaptasyonu 48-72 saat içinde tamamlanır ve hemen normal beslenmenize dönebilirsiniz.",
    "priceEstimate": "<strong>Zirkonyum diş kaplama fiyatları diş başına £210 / €250 / $275’den başlar.</strong> Çoklu kuron paketlerimiz (10, 20 veya 24 diş) dijital gülüş tasarımı, 4/5 yıldızlı otel konaklaması ve VIP transferleri kapsar.",
    "packages": [
      {
        "name": "Tek Diş Zirkonyum Kron Kaplama",
        "brand": "Amman-Girrbach / Vita (1200+ MPa)",
        "duration": "3 – 5 Gün (Tek Ziyaret)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "1x Orijinal Alman Monolitik Zirkonyum Kuron (1200+ MPa)",
          "3D Ağız İçi Dijital Tarama & CAD/CAM Mikron Düzeyinde Kazıma",
          "Diş preparasyonu, bilgisayarlı lokal anestezi & geçici diş",
          "Doğal diş minesi renk eşleme & translusens estetik cila",
          "10 Yıl Klinik Garanti & Orijinallik Sertifikası",
          "Kişisel hasta danışmanı refakati"
        ],
        "price": {
          "USD": "$275",
          "EUR": "€250",
          "GBP": "£210"
        }
      },
      {
        "name": "10 Üye Üst Çene Zirkonyum Gülüş Tasarımı",
        "brand": "Alman Monolitik Çok Katmanlı Zirkonyum",
        "duration": "5 – 7 Gün (Tek Ziyaret)",
        "img": "/packages/pkg-zirconia.webp",
        "popular": true,
        "included": [
          "10x Yüksek Işık Geçirgenlikli Alman Zirkonyum Kuron (Üst Gülüş Hattı)",
          "Kişiye Özel 3D Dijital Gülüş Tasarımı (DSD) & Mock-up Provası",
          "Lazerle diş eti seviyeleme ve simetri düzenlemesi (Gingivoplasti)",
          "Üretim süresince konforlu çiğneme sağlayan özel geçici diş seti",
          "Antalya'da 4 Yıldızlı Otelde 6 Gece Kahvaltı Dahil Konaklama",
          "VIP Mercedes Özel Şoförlü Transferler (Havalimanı - Otel - Klinik)",
          "Kırılma ve çatlamaya karşı Ömür Boyu Garanti Sertifikası"
        ],
        "price": {
          "USD": "$2,590",
          "EUR": "€2,390",
          "GBP": "£2,050"
        }
      },
      {
        "name": "20 Üye Tam Ağız Zirkonyum Makeover",
        "brand": "Monolitik Çok Katmanlı 3D Pro Zirkonyum",
        "duration": "6 – 7 Gün (Tek Ziyaret)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Yüksek Translusens Zirkonyum Kaplama (10 Üst + 10 Alt Çene)",
          "Kapsamlı 3D Tomografi ve Yüz Estetiği Gülüş Simülasyonu",
          "Gnatolojik çene kapanış dengesi ve tam fonksiyonel artikülasyon",
          "1. Gün takılan estetik geçici diş seti ile kesintisiz sosyal yaşam",
          "Antalya'da 5 Yıldızlı Lüks Otelde 6 Gece Konaklama",
          "Özel VIP Mercedes Havalimanı ve Klinik Transferleri",
          "Kapsamlı ameliyat sonrası bakım seti ve koruyucu gece plağı"
        ],
        "price": {
          "USD": "$5,050",
          "EUR": "€4,650",
          "GBP": "£3,990"
        }
      },
      {
        "name": "Tek Diş İsviçre Ivoclar E-Max Kron",
        "brand": "Ivoclar Vivadent IPS e.max Press (İsviçre)",
        "duration": "4 – 6 Gün (Tek Ziyaret)",
        "img": "/packages/Porcelain-Crown-Package-1.jpg",
        "included": [
          "1x %100 Orijinal İsviçre Lityum Disilikat E-Max Kaplama/Lamina",
          "Ön dişler için %70 doğal ışık geçirgenliği ve saydamlık",
          "Mikroskop altında ultra hassas kenar uyum preparasyonu",
          "Usta seramist tarafından elle renklendirme ve opal efekti",
          "10 Yıl Uluslararası Üretici Garantisi",
          "Stüdyo ve doğal gün ışığı altında dijital renk kalibrasyonu"
        ],
        "price": {
          "USD": "$320",
          "EUR": "€290",
          "GBP": "£250"
        }
      },
      {
        "name": "20 Üye Premium Ivoclar E-Max Hollywood Smile",
        "brand": "Ivoclar IPS e.max CAD / Press Master",
        "duration": "6 – 7 Gün (Tek Ziyaret)",
        "img": "/packages/Porcelain-Crown-Package-2.jpg",
        "included": [
          "20x İsviçre Ivoclar IPS e.max Porselen Kaplama (Tam Hollywood Gülüşü)",
          "3D Yüz Estetiği ve Altın Oran Dijital Gülüş Planlaması",
          "Üretim öncesi ağızda birebir canlı test imkanı sunan Mock-up uygulaması",
          "5 Yıldızlı Lüks Otelde 6 Gece Kahvaltı Dahil Konaklama",
          "Tüm seyahat boyunca özel VIP şoförlü Mercedes transfer hizmeti",
          "Gereken diğer dişler için profesyonel klinik beyazlatma (Bleaching)",
          "Ömür boyu garanti sertifikası ve uluslararası hasta pasaportu"
        ],
        "price": {
          "USD": "$5,950",
          "EUR": "€5,450",
          "GBP": "£4,690"
        }
      },
      {
        "name": "İmplant Üstü Tam Çene Zirkonyum Köprü",
        "brand": "Prettau / Katana Multi-Layer Zirkonyum (12–14 Üye)",
        "duration": "6 – 7 Gün (Kalıcı Aşama)",
        "img": "/packages/Porcelain-Crown-Package-3.jpg",
        "included": [
          "12–14 Üyelik Tek Parça Vidalı Monolitik Zirkonyum İmplant Köprüsü",
          "CAD/CAM titanyum multi-unit abutment hassas bağlantı sistemi",
          "Çiğneme kuvvetlerine karşı 1250 MPa ultra yüksek kırılma direnci",
          "Pembe estetik için diş eti karakterizasyonlu özel porselen tasarımı",
          "5 Yıldızlı Otel Konaklaması + VIP Mercedes Özel Transferler",
          "Zirkonyum altyapıda Ömür Boyu Yapısal Garanti"
        ],
        "price": {
          "USD": "$3,150",
          "EUR": "€2,890",
          "GBP": "£2,490"
        }
      }
    ],
    "faqs": [
      {
        "q": "Kliniğe geldiğimde tedavi planım veya fiyat değişir mi?",
        "a": [
          "Hayır. Çevrim içi danışmanlıkta fotoğraflarınız ve panoramik röntgeniniz üzerinden sunulan tedavi planı ve fiyat teklifi bağlayıcıdır.",
          "Kliniğimizde çekilen 3D tomografide önceden tespit edilemeyen derin bir kök enfeksiyonu görülmediği sürece, anlaşılan fiyatta hiçbir değişiklik olmaz ve gizli ek ücret talep edilmez."
        ]
      },
      {
        "q": "Konaklama ve otel rezervasyonu konusunda yardımcı oluyor musunuz?",
        "a": [
          "Evet. Çoklu kaplama paketlerimizin (10, 20 veya 24 diş) tamamında kliniğimize yakın, güvenli ve merkezi konumdaki 4 veya 5 yıldızlı otellerde oda-kahvaltı konaklama fiyata dahildir.",
          "Tüm otel rezervasyonu ve transfer koordinasyonu uluslararası hasta ekibimiz tarafından eksiksiz yönetilir."
        ]
      },
      {
        "q": "Diş tedavisi için Türkiye'ye seyahat etmek güvenli mi?",
        "a": [
          "Evet, kesinlikle. Antalya her yıl 500.000'den fazla uluslararası diş hastasını ağırlayan dünyanın en gelişmiş sağlık turizmi merkezlerinden biridir.",
          "Kliniğimiz Sağlık Bakanlığı akreditasyonuna sahip olup, hastane tipi HEPA filtreleme, B sınıfı otoklav sterilizasyonu ve CE/FDA onaylı Alman ve İsviçre materyalleri kullanmaktadır."
        ]
      },
      {
        "q": "Diş kaplamalarında hangi marka ve materyalleri kullanıyorsunuz?",
        "a": [
          "Jenerik veya düşük kaliteli materyalleri asla kullanmıyoruz. Alman Amman-Girrbach, Vita, Japon Noritake Katana monolitik zirkonyum (1200+ MPa) ve İsviçre Ivoclar IPS e.max cam seramik bloklar kullanıyoruz.",
          "Her hastamıza karekodlu ve seri numaralı resmi orijinallik sertifikası teslim edilir."
        ]
      },
      {
        "q": "Yeni dişlerimin şekil ve rengini üretilmeden önce görebilir miyim?",
        "a": [
          "Evet! 3D Dijital Gülüş Tasarımı (DSD) teknolojisi sayesinde dişleriniz hazırlanmadan önce simülasyon yapılır.",
          "Ayrıca ilk gün takılan geçici mock-up dişlerle gülüşünüzü kendi ağzınızda test edebilir, diş boyu, rengi ve formuna hekiminizle birlikte karar verebilirsiniz."
        ]
      },
      {
        "q": "Dişlerimi hiç kestirmeden kaplama veya lamina yaptırabilir miyim?",
        "a": [
          "Zirkonyum kuronlar dişin 360 derece sarılarak güçlendirilmesi için 1.0–1.5 mm minimal aşındırma gerektirir.",
          "Eğer dişlerinizde yapısal hasar yoksa ve sadece estetik düzeltme istiyorsanız, 0.3–0.5 mm aşındırma gerektiren porselen laminalar veya kesimsiz Lumineers seçenekleri değerlendirilebilir."
        ]
      },
      {
        "q": "Ödemeyi gelmeden önce veya seyahatim sırasında çevrim içi yapabilir miyim?",
        "a": [
          "Evet. Uluslararası banka havalesi, kredi kartı (Visa, Mastercard, AMEX) ve nakit (EUR, GBP, USD) dahil olmak üzere tüm güvenli ödeme yöntemlerini kabul ediyoruz.",
          "Tüm ücreti peşin ödemeniz gerekmez; ödemeler tedavi aşamalarına bölünerek alınır."
        ]
      },
      {
        "q": "Havalimanı transferleri ve otel konaklaması gerçekten pakete dahil mi?",
        "a": [
          "Evet! Gülüş tasarımı paketlerimizin tamamında Antalya Havalimanı (IST/SAW) ile otel ve klinik arasındaki tüm transferler özel VIP Mercedes araçlarımız ve şoförümüzle sağlanır."
        ]
      },
      {
        "q": "Yabancı hastalar için taksit imkanı sunuyor musunuz?",
        "a": [
          "Doğrudan sağlık kredisi hastanın ikamet ettiği ülkenin bankacılık kurallarına bağlıdır. Ancak kliniğimizde ödemenizi tedavi aşamalarına bölebilir veya uluslararası taksit özellikli kredi kartlarınızı kullanabilirsiniz."
        ]
      },
      {
        "q": "Diş kaplamalarına ne kadar süre garanti veriyorsunuz?",
        "a": [
          "Monolitik zirkonyum kaplamalarımızda kırılma ve çatlamaya karşı ömür boyu yapısal garanti, İsviçre Ivoclar E-Max laminalarımızda ise 10 yıl tam klinik garanti sunulmaktadır."
        ]
      },
      {
        "q": "Gülüşümün görünümünü değiştirmek için hangi tedavi seçenekleri mevcut?",
        "a": [
          "Maksimum dayanıklılık ve koyu renkleri maskelemek için Zirkonyum Kaplamalar, ön dişlerde maksimum doğallık için E-Max Porselen Laminalar, küçük kusurlar için Kompozit Bonding ve Lazerli Diş Beyazlatma seçenekleri sunulmaktadır."
        ]
      },
      {
        "q": "Dişime altın kaplama veya özel diş pırlantası taktırabilir miyim?",
        "a": [
          "Evet. İsteğe bağlı olarak medikal altın alaşımlı (18K/24K) özel kaplamalar veya zirkonyum diş üzerine yerleştirilen orijinal pırlanta ve kristal taş uygulamaları yapılabilmektedir."
        ]
      },
      {
        "q": "Kaplama tedavisini ertelemek dişime zarar verir mi?",
        "a": [
          "Kırık, aşırı aşınmış veya kanal tedavisi görmüş dişlerde kaplamayı ertelemek dişin kökten kırılarak kaybedilmesine ve çekim/implant gereksinimine yol açabilir."
        ]
      },
      {
        "q": "İmplant üstüne E-Max mi yoksa Zirkonyum mu tercih edilmelidir?",
        "a": [
          "İmplant üstü protezlerde titanyum dayanakla kusursuz uyum ve 1200+ MPa yüksek direnç sağlayan Monolitik Zirkonyum tercih edilmelidir. E-Max ise doğal ön dişler için idealdir."
        ]
      },
      {
        "q": "Arka azı dişlerinde neden lamina yerine zirkonyum tercih edilir?",
        "a": [
          "Arka azı dişleri 800-1000 Newton'a varan yoğun çiğneme kuvvetlerine maruz kalır. İnce porselen laminalar bu kuvvete dayanamaz; zirkonyum ise yüksek kırılma direnciyle arka bölgede mükemmel dayanıklılık sunar."
        ]
      },
      {
        "q": "Çok üyeli diş köprüleri neden saf E-Max ile yapılamaz?",
        "a": [
          "E-Max cam seramiğin bükülme direnci ~450–500 MPa seviyesindedir. Çoklu diş eksikliklerinde köprünün çiğneme baskısıyla kırılmaması için 1200+ MPa dirence sahip monolitik zirkonyum zorunludur."
        ]
      },
      {
        "q": "Kaplama yapılan dişler zamanla çürümeye daha mı yatkındır?",
        "a": [
          "Hayır. CAD/CAM teknolojisiyle 20 mikron hassasiyetle üretilen zirkonyum kaplamalar dişe sıfır boşlukla yapışır ve bakteri sızıntısını önler. Düzenli fırçalama ve diş ipi ile alttaki diş ömür boyu korunur."
        ]
      },
      {
        "q": "Zirkonyum kaplamaların ortalama ömrü ne kadardır?",
        "a": [
          "İyi bir ağız hijyeni ve düzenli diş hekimi kontrolleriyle zirkonyum kaplamalar 20 ila 25 yıl veya ömür boyu sorunsuz bir şekilde kullanılabilir."
        ]
      },
      {
        "q": "Kaplama ile lamina arasında dişten ne kadar kesim yapılır?",
        "a": [
          "Laminalarda dişin sadece ön yüzeyinden 0.3–0.7 mm mine kaldırılırken; kuron kaplamalarda dişin tüm çevresinden 1.0–1.5 mm inceltme yapılır."
        ]
      },
      {
        "q": "Kaplamalar takıldıktan sonra rengini değiştirmek mümkün müdür?",
        "a": [
          "Kalıcı olarak yapıştırılan seramik ve zirkonyumun rengi 1500°C fırınlandığı için asla lekelenmez ve değişmez. Bu nedenle renk ve form seçimi prova aşamasında hasta onayıyla kesinleştirilir."
        ]
      },
      {
        "q": "Lamine, kompozit lamina ve zirkonyum kuron arasındaki fark nedir?",
        "a": [
          "Porselen laminalar dişin sadece ön yüzüne yapışan estetik yapraklardır; kompozit laminalar klinikte elle uygulanan ekonomik dolgu katmanlarıdır (ömrü 4-7 yıl); zirkonyum kuronlar ise dişi çepeçevre sararak hem estetik hem de maksimum çiğneme gücü sağlayan kalıcı restorasyonlardır."
        ]
      }
    ]
  },
  "de": {
    "packagesTitle": "Zirkon & Vollkeramik Zahnkronen Pakete",
    "packagesSubtitle": "All-Inclusive-Pakete für Smile Makeovers und Einzelkronen mit deutschem Amman-Girrbach Zirkonoxid und Schweizer Ivoclar E-Max inklusive Hotel und VIP-Transfer.",
    "mostPopularBadge": "Beliebteste Wahl",
    "durationLabel": "Behandlungsdauer:",
    "includedLabel": "Paketleistungen:",
    "priceLabel": "All-Inclusive-Preis:",
    "getQuoteBtn": "Kostenloses Angebot anfordern",
    "faqTitle": "Häufig gestellte Fragen zu Zirkonkronen",
    "faqSubtitle": "Erfahren Sie alles über Zirkonkronen, Smile Makeover, Behandlungsablauf, Materialqualität und Garantien in unserer Spezialklinik in Antalya.",
    "stayDuration": "<strong>6 bis 7 Tage in Antalya.</strong> In einer einzigen Reise erfolgen die Zahnvorbereitung, der digitale 3D-CAD/CAM-Scan, das Fräsen der Zirkonkronen im Meisterlabor und das dauerhafte Einsetzen.",
    "visitCount": "<strong>Nur 1 Besuch erforderlich.</strong> Sie müssen nur einmal nach Antalya reisen. Sowohl Einzelkronen als auch ein komplettes Zirkon-Lächeln (20-28 Kronen) werden in einer einzigen Reise fertiggestellt.",
    "recoveryTime": "<strong>2 bis 3 Tage Eingewöhnung.</strong> Da es sich um keinen chirurgischen Eingriff handelt, gibt es keine Ausfallzeiten. Eine leichte Gewöhnung der Zähne erfolgt innerhalb von 48 bis 72 Stunden.",
    "priceEstimate": "<strong>Preise für Zirkonkronen beginnen ab £210 / €250 / $275 pro Zahn.</strong> All-Inclusive-Pakete (10, 20 oder 24 Kronen) beinhalten 3D Smile Design, 4/5-Sterne-Hotel und VIP-Flughafentransfers.",
    "packages": [
      {
        "name": "Einzelne Zirkonkrone",
        "brand": "Amman-Girrbach / Vita (1200+ MPa)",
        "duration": "3 – 5 Tage (1 Besuch)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "1x Deutsche monolithische Zirkonkrone (1200+ MPa)",
          "Digitaler 3D-Intraoralscan & hochpräzise CAD/CAM-Fräsung",
          "Zahnpräparation, computergestützte Betäubung & Provisorium",
          "Natürliche Zahnfarbanpassung & transluzente Glasur",
          "10 Jahre klinische Garantie & Echtheitszertifikat",
          "Persönliche deutschsprachige Patientenbetreuung"
        ],
        "price": {
          "USD": "$275",
          "EUR": "€250",
          "GBP": "£210"
        }
      },
      {
        "name": "10 Einheiten Oberkiefer Zirkon Smile Makeover",
        "brand": "Deutsches mehrschichtiges Zirkonoxid",
        "duration": "5 – 7 Tage (1 Besuch)",
        "img": "/packages/pkg-zirconia.webp",
        "popular": true,
        "included": [
          "10x Hochtransluzente Zirkonkronen (sichtbare Lachlinie Oberkiefer)",
          "Individuelles 3D Digital Smile Design (DSD) & Mock-up",
          "Schonende Zahnfleischkorrektur mit Laser für perfekte Symmetrie",
          "Komfortable provisorische Zähne für die Laborphase",
          "6 Übernachtungen im 4-Sterne-Hotel mit Frühstück in Antalya",
          "VIP Mercedes Chauffeur-Transfers (Flughafen - Hotel - Klinik)",
          "Lebenslange Garantie gegen Bruch und Absplitterung"
        ],
        "price": {
          "USD": "$2,590",
          "EUR": "€2,390",
          "GBP": "£2,050"
        }
      },
      {
        "name": "20 Einheiten Komplettes Zirkon Makeover",
        "brand": "Monolithisches 3D Pro Multilayer Zirkon",
        "duration": "6 – 7 Tage (1 Besuch)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Premium Zirkonkronen (10 Oberkiefer + 10 Unterkiefer)",
          "Umfassende 3D-DVT-Diagnostik & Gesichtssimulation",
          "Funktionelle Gelenkvermessung & harmonische Bissabstimmung",
          "Provisorisches Komplettset am 1. Tag eingesetzt",
          "6 Übernachtungen im 5-Sterne-Luxushotel in Antalya",
          "Privater VIP-Mercedes-Fahrdienst für alle Termine",
          "Umfangreiches Pflegepaket & maßgefertigte Aufbissschiene"
        ],
        "price": {
          "USD": "$5,050",
          "EUR": "€4,650",
          "GBP": "£3,990"
        }
      },
      {
        "name": "Einzelne Schweizer Ivoclar E-Max Krone",
        "brand": "Ivoclar Vivadent IPS e.max Press (Schweiz)",
        "duration": "4 – 6 Tage (1 Besuch)",
        "img": "/packages/Porcelain-Crown-Package-1.jpg",
        "included": [
          "1x 100% Original Schweizer Lithium-Disilikat Krone/Veneer",
          "Herausragende 70% Lichtdurchlässigkeit für Frontzähne",
          "Mikrofeine Randschlusspräparation unter Vergrößerung",
          "Handgeschichtete Opaleszenz durch Meister-Zahntechniker",
          "10 Jahre internationale Herstellergarantie",
          "Digitale Farbkalibrierung unter Studio- und Tageslicht"
        ],
        "price": {
          "USD": "$320",
          "EUR": "€290",
          "GBP": "£250"
        }
      },
      {
        "name": "20 Einheiten Ivoclar E-Max Hollywood Smile",
        "brand": "Ivoclar IPS e.max CAD / Press Master",
        "duration": "6 – 7 Tage (1 Besuch)",
        "img": "/packages/Porcelain-Crown-Package-2.jpg",
        "included": [
          "20x Schweizer Ivoclar IPS e.max Vollkeramikkronen/Veneers",
          "3D Gesichtsästhetik & Goldener Schnitt Smile-Planung",
          "Mock-up-Anprobe im Mund vor der endgültigen Fertigung",
          "6 Übernachtungen im 5-Sterne-Hotel mit Frühstück",
          "Privater VIP-Shuttle-Service für den gesamten Aufenthalt",
          "Klinisches Bleaching für verbleibende natürliche Zähne",
          "Lebenslanges Garantiezertifikat & Patientenpass"
        ],
        "price": {
          "USD": "$5,950",
          "EUR": "€5,450",
          "GBP": "£4,690"
        }
      },
      {
        "name": "Zirkonbrücke auf Implantaten (12–14 Einheiten)",
        "brand": "Prettau / Katana Multilayer Zirkon",
        "duration": "6 – 7 Tage (Abschlussbesuch)",
        "img": "/packages/Porcelain-Crown-Package-3.jpg",
        "included": [
          "Einteilige verschraubte Zirkonbrücke (12–14 Zähne)",
          "Präzise CAD/CAM Titan-Multi-Unit-Abutmentverbindung",
          "1250 MPa Bruchfestigkeit gegen höchste Kaukraft",
          "Individuelle Zahnfleischkeramik (Pink Aesthetics)",
          "5-Sterne-Hotelunterkunft + VIP-Mercedes-Transfers",
          "Lebenslange Garantie auf das Zirkongerüst"
        ],
        "price": {
          "USD": "$3,150",
          "EUR": "€2,890",
          "GBP": "£2,490"
        }
      }
    ],
    "faqs": [
      {
        "q": "Ändert sich mein Behandlungsplan oder Preis bei Ankunft?",
        "a": [
          "Nein. Der auf Basis Ihrer Fotos und Röntgenbilder erstellte Behandlungsplan und Kostenvoranschlag sind verbindlich.",
          "Vor Ort führen wir ein kostenloses 3D-DVT durch. Sofern keine unvorhersehbare schwere Wurzelentzündung vorliegt, bleibt der Paketpreis zu 100% transparent ohne versteckte Kosten."
        ]
      },
      {
        "q": "Helfen Sie bei Unterkunft und Hotelbuchung?",
        "a": [
          "Ja. Bei allen Kronenpaketen (10, 20 oder 24 Zähne) ist die Unterkunft in gehobenen 4- oder 5-Sterne-Hotels mit Frühstück in Kliniknähe vollständig im Preis enthalten."
        ]
      },
      {
        "q": "Ist eine Zahnbehandlung in der Türkei sicher?",
        "a": [
          "Ja, absolut. Antalya ist weltweit führend im Medizintourismus und empfängt jährlich Hunderttausende europäische Patienten. Unsere Klinik arbeitet nach strengsten Standards mit B-Klasse-Autoklaven und CE-zertifizierten deutschen Materialien."
        ]
      },
      {
        "q": "Welche Marken und Materialien verwenden Sie für Kronen?",
        "a": [
          "Wir verwenden ausschließlich Originalmaterialien deutscher und Schweizer Hersteller: Amman-Girrbach, Vita, Noritake Katana Zirkonoxid (1200+ MPa) und Ivoclar Vivadent IPS e.max. Jeder Patient erhält ein Echtheitszertifikat."
        ]
      },
      {
        "q": "Kann ich Form und Farbe vor der Fertigung sehen?",
        "a": [
          "Ja! Mit 3D Digital Smile Design planen wir Ihr Lächeln vorab digital. Zudem testen Sie am 1. Tag provisorische Mock-up-Zähne direkt im Mund, um Länge, Form und Biss gemeinsam abzustimmen."
        ]
      },
      {
        "q": "Können Kronen ohne Beschleifen der Zähne eingesetzt werden?",
        "a": [
          "Zahnkronen erfordern ein rundum schonendes Beschleifen von ca. 1.0–1.5 mm, um Stabilität und einen entzündungsfreien Zahnfleischrand zu garantieren. Für intakte Frontzähne können hauchdünne Veneers (0.3–0.5 mm) eine Alternative sein."
        ]
      },
      {
        "q": "Kann ich vorab oder während der Reise online bezahlen?",
        "a": [
          "Ja, wir akzeptieren internationale Banküberweisungen, gängige Kreditkarten (Visa, MasterCard) und Barzahlung in EUR, GBP oder USD in bequemen Etappen."
        ]
      },
      {
        "q": "Sind Flughafentransfers und Hotel wirklich inklusive?",
        "a": [
          "Ja. Alle Makeover-Pakete beinhalten einen privaten Mercedes-VIP-Chauffeurdienst zwischen Flughafen (IST/SAW), Hotel und Klinik für alle Behandlungstermine."
        ]
      },
      {
        "q": "Gibt es Ratenzahlungsoptionen für internationale Patienten?",
        "a": [
          "Direkte Ratenkredite richten sich nach den Bankrichtlinien Ihres Wohnsitzlandes. Wir ermöglichen jedoch gestaffelte Zahlungen nach Behandlungsfortschritt und stellen detaillierte Rechnungen für Ihre Krankenkasse aus."
        ]
      },
      {
        "q": "Welche Garantien bieten Sie auf Zirkonkronen?",
        "a": [
          "Wir gewähren eine lebenslange Garantie auf das Zirkongerüst gegen Bruch und 10 Jahre Garantie auf Ivoclar E-Max Restaurationen inklusive internationalem Garantiezertifikat."
        ]
      },
      {
        "q": "Welche Methoden zur Zahnverschönerung gibt es?",
        "a": [
          "Zirkonkronen für höchste Belastbarkeit und Farbkorrektur, Ivoclar E-Max Veneers für Frontzahnästhetik, Composite-Bonding für kleinere Korrekturen und Laser-Bleaching zur Aufhellung."
        ]
      },
      {
        "q": "Können Zähne mit Gold oder Zahnschmuck verziert werden?",
        "a": [
          "Ja, auf Wunsch fertigen wir Kronen mit medizinischer Dental-Goldlegierung an oder integrieren echte Diamanten und Kristalle in die Keramik."
        ]
      },
      {
        "q": "Ist es gefährlich, eine Kronenbehandlung aufzuschieben?",
        "a": [
          "Das Aufschieben bei stark beschädigten oder wurzelbehandelten Zähnen birgt das Risiko von Wurzellängsfrakturen, was oft den Zahnverlust und eine Implantatbehandlung zur Folge hat."
        ]
      },
      {
        "q": "Sollte man für Implantate E-Max oder Zirkon wählen?",
        "a": [
          "Auf Implantaten ist monolithisches Zirkonoxid mit 1200+ MPa Stärke der Goldstandard gegen Titanaufbauten. E-Max eignet sich ideal für natürliche Frontzähne."
        ]
      },
      {
        "q": "Warum Zirkon statt Veneers im Seitenzahnbereich?",
        "a": [
          "Backenzähne müssen Kaukraft von bis zu 1000 N standhalten. Dünne Veneers sind dafür ungeeignet; Zirkon bietet die notwendige Bruchfestigkeit für dauerhafte Funktion."
        ]
      },
      {
        "q": "Warum können Brücken nicht aus reinem E-Max bestehen?",
        "a": [
          "E-Max besitzt eine Biegefestigkeit von ~450–500 MPa. Bei mehrgliedrigen Brücken können Hebelkräfte zum Bruch führen. Daher ist 1200+ MPa Zirkon zwingend erforderlich."
        ]
      },
      {
        "q": "Sind überkronte Zähne anfälliger für Karies?",
        "a": [
          "Nein. CAD/CAM-gefräste Zirkonkronen schließen mikrometergenau am Zahnfleischrand ab und verhindern das Eindringen von Bakterien bei normaler Mundhygiene."
        ]
      },
      {
        "q": "Wie lange halten Zirkonkronen im Durchschnitt?",
        "a": [
          "Bei guter Mundhygiene und regelmäßiger Pflege halten Zirkonkronen problemlos 20 bis 25 Jahre und häufig ein Leben lang."
        ]
      },
      {
        "q": "Wie viel Zahnsubstanz wird für Kronen im Vergleich zu Veneers entfernt?",
        "a": [
          "Veneers erfordern 0.3–0.7 mm Schmelzabtrag an der Vorderseite, Kronen ca. 1.0–1.5 mm rundherum für eine 360-Grad-Schutzwirkung."
        ]
      },
      {
        "q": "Kann die Kronenfarbe nach dem Einsetzen geändert werden?",
        "a": [
          "Nach dem endgültigen Zementieren ist die Farbe dauerhaft versiegelt und verfärbungssicher. Daher stimmen Sie Form und Farbe während der Anprobe verbindlich ab."
        ]
      },
      {
        "q": "Was ist der Unterschied zwischen Veneers, Komposit und Zirkonkronen?",
        "a": [
          "Veneers sind Keramikschalen für die Vorderseite; Komposit-Veneers sind geschichtete Kunststoffe (4–7 Jahre Haltbarkeit); Zirkonkronen umschließen den Zahn vollständig und bieten maximale Stabilität und Langlebigkeit."
        ]
      }
    ]
  },
  "pl": {
    "packagesTitle": "Pakiety Koron Cyrkonowych i Pełnoceramicznych",
    "packagesSubtitle": "Kompleksowe pakiety metamorfozy uśmiechu z niemieckiego tlenku cyrkonu Amman-Girrbach i szwajcarskiego E-Max z hotelem 4/5★ i transferami VIP w cenie.",
    "mostPopularBadge": "Najczęściej Wybierany",
    "durationLabel": "Czas Zabiegu:",
    "includedLabel": "Zawartość Pakietu:",
    "priceLabel": "Cena (All-Inclusive):",
    "getQuoteBtn": "Otrzymaj Bezpłatną Wycenę",
    "faqTitle": "Często Zadawane Pytania o Korony Cyrkonowe",
    "faqSubtitle": "Odpowiedzi na 21 najważniejszych pytań dotyczących koron cyrkonowych, estetyki uśmiechu, przebiegu leczenia w Antalyi i międzynarodowych gwarancji.",
    "stayDuration": "<strong>6 do 7 dni w Antalyi.</strong> W trakcie jednej podróży wykonujemy przygotowanie zębów, cyfrowy skan 3D CAD/CAM, precyzyjne frezowanie koron cyrkonowych oraz ich ostateczną cementację.",
    "visitCount": "<strong>Wymagana tylko 1 wizyta.</strong> Wystarczy jedna podróż do Antalyi. Odbudowa pojedynczego zęba lub pełna metamorfoza uśmiechu (20-28 koron) jest w całości realizowana podczas jednego pobytu.",
    "recoveryTime": "<strong>2 do 3 dni adaptacji.</strong> Brak okresu rekonwalescencji chirurgicznej. Ewentualna lekka nadwrażliwość ustępuje w ciągu 48-72 godzin, pozwalając na normalne gryzienie.",
    "priceEstimate": "<strong>Ceny koron cyrkonowych zaczynają się od £210 / €250 / $275 za ząb.</strong> Pakiety All-Inclusive (10, 20 lub 24 korony) zawierają cyfrowy projekt uśmiechu, hotel 4/5★ i transfery VIP.",
    "packages": [
      {
        "name": "Pojedyncza Korona Cyrkonowa",
        "brand": "Amman-Girrbach / Vita (1200+ MPa)",
        "duration": "3 – 5 Dni (1 Wizyta)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "1x Niemiecka Monolityczna Korona Cyrkonowa (1200+ MPa)",
          "Cyfrowy skan 3D i precyzyjne frezowanie CAD/CAM",
          "Oszlifowanie zęba, znieczulenie komputerowe i korona tymczasowa",
          "Dopasowanie koloru i naturalnej przezierności szkliwa",
          "10 Lat Gwarancji Klinicznej i Certyfikat Autentyczności",
          "Dedykowany polskojęzyczny koordynator pacjenta"
        ],
        "price": {
          "USD": "$275",
          "EUR": "€250",
          "GBP": "£210"
        }
      },
      {
        "name": "10 Koron Cyrkonowych – Górny Łuk (Smile Makeover)",
        "brand": "Niemiecki Wielowarstwowy Tlenek Cyrkonu",
        "duration": "5 – 7 Dni (1 Wizyta)",
        "img": "/packages/pkg-zirconia.webp",
        "popular": true,
        "included": [
          "10x Korony Cyrkonowe Premium o Wysokiej Przezierności (Linia Uśmiechu)",
          "Indywidualny Cyfrowy Projekt Uśmiechu 3D (DSD) i Przymiarka Mock-up",
          "Laserowa plastyka dziąseł dla idealnej symetrii (w razie potrzeby)",
          "Tymczasowy zestaw zębów na czas produkcji laboratoryjnej",
          "6 Noclegów w 4-Gwiazdkowym Hotelu ze Śniadaniami w Antalyi",
          "Prywatne Transfery VIP Mercedesem (Lotnisko - Hotel - Klinika)",
          "Dożywotnia Gwarancja na pęknięcia i ukruszenia podbudowy"
        ],
        "price": {
          "USD": "$2,590",
          "EUR": "€2,390",
          "GBP": "£2,050"
        }
      },
      {
        "name": "20 Koron Cyrkonowych – Pełna Odbudowa Uśmiechu",
        "brand": "Monolityczny Cyrkon 3D Pro Multilayer",
        "duration": "6 – 7 Dni (1 Wizyta)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Korony Cyrkonowe Premium (10 Górny + 10 Dolny Łuk)",
          "Kompleksowa Diagnostyka Tomograficzna 3D i Symulacja Twarzy",
          "Precyzyjne wyważenie okluzji i stawu skroniowo-żuchwowego",
          "Zestaw zębów tymczasowych zakładany w 1. dniu wizyty",
          "6 Noclegów w 5-Gwiazdkowym Luksusowym Hotelu w Antalyi",
          "Prywatny Kierowca VIP Mercedes na wszystkie wizyty",
          "Zestaw pozabiegowy i indywidualna szyna relaksacyjna na noc"
        ],
        "price": {
          "USD": "$5,050",
          "EUR": "€4,650",
          "GBP": "£3,990"
        }
      },
      {
        "name": "Pojedyncza Korona Szwajcarska Ivoclar E-Max",
        "brand": "Ivoclar Vivadent IPS e.max Press (Szwajcaria)",
        "duration": "4 – 6 Dni (1 Wizyta)",
        "img": "/packages/Porcelain-Crown-Package-1.jpg",
        "included": [
          "1x Oryginalna Korona/Licówka z Dwukrzemianu Litu Ivoclar",
          "Niezrównana przezierność 70% imitująca naturalne szkliwo",
          "Mikroskopowe opracowanie krawędzi przydziąsłowej",
          "Ręczne cieniowanie i nadawanie opalescencji przez ceramika",
          "10 Lat Międzynarodowej Gwarancji Producenta",
          "Cyfrowa kalibracja odcienia w świetle studyjnym i dziennym"
        ],
        "price": {
          "USD": "$320",
          "EUR": "€290",
          "GBP": "£250"
        }
      },
      {
        "name": "20 Koron Ivoclar E-Max – Hollywood Smile",
        "brand": "Ivoclar IPS e.max CAD / Press Master",
        "duration": "6 – 7 Dni (1 Wizyta)",
        "img": "/packages/Porcelain-Crown-Package-2.jpg",
        "included": [
          "20x Szwajcarskie Korony/Licówki Porcelanowe Ivoclar IPS e.max",
          "Cyfrowy Projekt Estetyki Twarzy i Złotego Podziału Uśmiechu",
          "Przymiarka Mock-up w ustach przed ostatecznym wypaleniem",
          "6 Noclegów w 5-Gwiazdkowym Hotelu ze Śniadaniami",
          "Prywatny serwis transferowy VIP Mercedes przez cały pobyt",
          "Profesjonalne wybielanie laserowe pozostałych zębów własnych",
          "Certyfikat dożywotniej gwarancji i paszport pacjenta"
        ],
        "price": {
          "USD": "$5,950",
          "EUR": "€5,450",
          "GBP": "£4,690"
        }
      },
      {
        "name": "Pełnołukowy Most Cyrkonowy na Implantach (12–14 pkt)",
        "brand": "Prettau / Katana Multilayer Zirconia",
        "duration": "6 – 7 Dni (Etap Ostateczny)",
        "img": "/packages/Porcelain-Crown-Package-3.jpg",
        "included": [
          "Jednoczęściowy przykręcany most monolityczny (12–14 zębów)",
          "Precyzyjne tytanowe połączenie CAD/CAM multi-unit",
          "Wytrzymałość 1250 MPa na ekstremalne siły żucia",
          "Różowa ceramika dziąsłowa dla naturalnej estetyki",
          "Hotel 5★ + Prywatne transfery VIP Mercedes",
          "Dożywotnia gwarancja na strukturę cyrkonową"
        ],
        "price": {
          "USD": "$3,150",
          "EUR": "€2,890",
          "GBP": "£2,490"
        }
      }
    ],
    "faqs": [
      {
        "q": "Czy plan leczenia lub cena zmienią się po moim przyjeździe do kliniki?",
        "a": [
          "Nie. Plan leczenia i kosztorys przygotowane podczas konsultacji online (na podstawie zdjęć i pantomogramu) są stałe i wiążące.",
          "Na miejscu wykonujemy bezpłatną tomografię 3D. Jeśli nie wykryje ona ukrytego, głębokiego stanu zapalnego wymagającego leczenia kanałowego, cena pozostaje w 100% niezmienna bez ukrytych opłat."
        ]
      },
      {
        "q": "Czy pomagacie w rezerwacji hotelu i zakwaterowaniu?",
        "a": [
          "Tak. Wszystkie nasze pakiety koron (10, 20 lub 24 zęby) zawierają bezpłatny pobyt w 4- lub 5-gwiazdkowym hotelu ze śniadaniami w bezpiecznej i dogodnej lokalizacji w Antalyi."
        ]
      },
      {
        "q": "Czy podróż do Turcji na leczenie stomatologiczne jest bezpieczna?",
        "a": [
          "Tak, w 100%. Antalya jest jednym z wiodących na świecie ośrodków turystyki medycznej, przyjmującym rocznie ponad 500 000 pacjentów zagranicznych. Nasza klinika spełnia rygorystyczne normy sterylizacji i używa certyfikowanych materiałów z Niemiec i Szwajcarii."
        ]
      },
      {
        "q": "Jakich marek i materiałów używacie do wykonywania koron?",
        "a": [
          "Stosujemy wyłącznie certyfikowane materiały światowych liderów: niemiecki Amman-Girrbach, Vita, japoński Noritake Katana (1200+ MPa) oraz szwajcarski Ivoclar Vivadent IPS e.max. Każdy pacjent otrzymuje paszport z kodem QR."
        ]
      },
      {
        "q": "Czy mogę zobaczyć kształt i kolor moich nowych zębów przed ich wykonaniem?",
        "a": [
          "Tak! Dzięki technologii 3D Digital Smile Design projektujemy uśmiech cyfrowo, a w pierwszym dniu zakładasz tymczasowy 'mock-up' w ustach, co pozwala ocenić długość, kształt i kolor zębów na żywo."
        ]
      },
      {
        "q": "Czy można założyć korony lub licówki bez szlifowania zębów?",
        "a": [
          "Korony cyrkonowe wymagają oszlifowania zęba o około 1.0–1.5 mm, aby zapewnić pełną ochronę i naturalny profil przy dziąśle. W przypadku zdrowych zębów przednich alternatywą mogą być ultracienkie licówki (0.3–0.5 mm)."
        ]
      },
      {
        "q": "Czy mogę zapłacić online przed przyjazdem lub w trakcie pobytu?",
        "a": [
          "Tak. Akceptujemy przelewy międzynarodowe, karty płatnicze (Visa, Mastercard) oraz gotówkę w EUR, GBP i USD w przejrzystych ratach powiązanych z etapami leczenia."
        ]
      },
      {
        "q": "Czy transfery z lotniska i hotel są naprawdę wliczone w cenę pakietu?",
        "a": [
          "Tak. Wszystkie pakiety metamorfozy uśmiechu zawierają prywatny transport luksusowym Mercedesem Vito z lotniska (IST/SAW) do hotelu i na wszystkie wizyty w klinice."
        ]
      },
      {
        "q": "Czy oferujecie płatność ratalną dla pacjentów zagranicznych?",
        "a": [
          "Kredyty medyczne zależą od przepisów bankowych w Twoim kraju zamieszkania. W klinice umożliwiamy płatność etapami i wystawiamy szczegółowe faktury medyczne do ubezpieczenia."
        ]
      },
      {
        "q": "Jakiej gwarancji udzielacie na korony cyrkonowe?",
        "a": [
          "Udzielamy dożywotniej gwarancji na strukturę tlenku cyrkonu przeciw pęknięciom oraz 10 lat pełnej gwarancji na korony i licówki szwajcarskie Ivoclar E-Max."
        ]
      },
      {
        "q": "Jakie są opcje poprawy wyglądu mojego uśmiechu?",
        "a": [
          "Korony Cyrkonowe (maksymalna wytrzymałość i maskowanie przebarwień), Licówki Ivoclar E-Max (maksymalna naturalność), Bonding Kompozytowy oraz Wybielanie Laserowe."
        ]
      },
      {
        "q": "Czy mogę pokryć ząb złotem lub wstawić kryształek/diament?",
        "a": [
          "Tak, na życzenie wykonujemy korony ze złota medycznego (18K/24K) lub mocujemy oryginalne kryształy i diamenty w koronach ceramicznych."
        ]
      },
      {
        "q": "Czy odkładanie założenia korony na ząb jest bezpieczne?",
        "a": [
          "Odwlekanie zabiegu na zębie zniszczonym lub po leczeniu kanałowym grozi pęknięciem korzenia, co uniemożliwia odbudowę i zmusza do usunięcia zęba oraz wstawienia implantu."
        ]
      },
      {
        "q": "Czy na implantach lepiej wybrać E-Max czy Zirkon?",
        "a": [
          "Na implantach zalecany jest tlenek cyrkonu o twardości 1200+ MPa ze względu na współpracę z tytanowym łącznikiem. E-Max jest doskonały na naturalne zęby przednie."
        ]
      },
      {
        "q": "Dlaczego na zęby boczne wybiera się cyrkon zamiast licówek?",
        "a": [
          "Zęby trzonowe przenoszą nacisk do 1000 N. Cienkie licówki nie wytrzymują takich sił bocznych, podczas gdy tlenek cyrkonu gwarantuje wieloletnią trwałość bez ryzyka złamania."
        ]
      },
      {
        "q": "Dlaczego mosty wielopunktowe nie mogą być wykonane z czystego E-Max?",
        "a": [
          "E-Max ma wytrzymałość na zginanie rzędu ~450–500 MPa. Przy mostach rozpiętych na kilku zębach siły żucia mogłyby go złamać, dlatego niezbędny jest cyrkon 1200+ MPa."
        ]
      },
      {
        "q": "Czy zęby pod koronami są bardziej podatne na próchnicę?",
        "a": [
          "Nie. Precyzyjnie frezowane korony CAD/CAM przylegają z dokładnością do 20 mikronów, szczelnie chroniąc ząb przed bakteriami przy zachowaniu standardowej higieny."
        ]
      },
      {
        "q": "Jaka jest przewidywana żywotność koron cyrkonowych?",
        "a": [
          "Przy prawidłowej higienie jamy ustnej i regularnych wizytach kontrolnych korony cyrkonowe służą przez 20 do 25 lat, a często przez całe życie."
        ]
      },
      {
        "q": "Ile zęba szlifuje się pod korony, a ile pod licówki?",
        "a": [
          "Pod licówki szlifuje się jedynie 0.3–0.7 mm szkliwa od przodu, natomiast pod korony usuwa się 1.0–1.5 mm na całym obwodzie zęba dla zapewnienia pełnej ochrony."
        ]
      },
      {
        "q": "Czy można zmienić odcień koron po ich zacementowaniu na stałe?",
        "a": [
          "Po zacementowaniu kolor ceramiki jest trwały i odporny na przebarwienia. Ostateczną akceptację koloru i kształtu pacjent wyraża na etapie przymiarki."
        ]
      },
      {
        "q": "Jaka jest różnica między licówkami porcelanowymi, kompozytowymi a koronami cyrkonowymi?",
        "a": [
          "Licówki porcelanowe pokrywają tylko przód zęba; licówki kompozytowe to bezpośredni kompozyt o krótszej żywotności (4–7 lat); korony cyrkonowe obejmują cały ząb 360°, dając maksymalną siłę i trwałość."
        ]
      }
    ]
  },
  "pt": {
    "packagesTitle": "Pacotes de Coroas de Zircônia e Cerâmica Pura",
    "packagesSubtitle": "Pacotes all-inclusive para transformação do sorriso com zircônia alemã Amman-Girrbach e Ivoclar E-Max suíço, com hotel 4/5★ e transfers VIP em Antalya.",
    "mostPopularBadge": "Mais Escolhido",
    "durationLabel": "Duração do Tratamento:",
    "includedLabel": "Incluso no Pacote:",
    "priceLabel": "Preço All-Inclusive:",
    "getQuoteBtn": "Solicitar Orçamento Grátis",
    "faqTitle": "Perguntas Frequentes sobre Coroas de Zircônia",
    "faqSubtitle": "Tudo o que você precisa saber sobre coroas de zircônia, design do sorriso, prazos de viagem, garantias internacionais e cuidados clínicos em Antalya.",
    "stayDuration": "<strong>6 a 7 dias em Antalya.</strong> Em apenas uma viagem, realizamos o preparo dental, escaneamento 3D CAD/CAM, fresagem laboratorial das coroas de zircônia e cimentação estética definitiva.",
    "visitCount": "<strong>Apenas 1 viagem necessária.</strong> Você precisa viajar para Antalya apenas uma vez. Seu tratamento completo (de 1 coroa a 20-28 coroas) é concluído integralmente nessa estadia.",
    "recoveryTime": "<strong>2 a 3 dias de adaptação.</strong> Por não envolver cirurgia óssea, não há tempo de inatividade. Qualquer leve sensibilidade desaparece em 48 a 72 horas.",
    "priceEstimate": "<strong>Preços de coroas de zircónia começam a partir de £210 / €250 / $275 por dente.</strong> Pacotes completos (10, 20 ou 24 coroas) incluem design do sorriso, hotel 4/5 estrelas e transfers VIP.",
    "packages": [
      {
        "name": "Coroa Individual de Zircônia",
        "brand": "Amman-Girrbach / Vita (1200+ MPa)",
        "duration": "3 – 5 Dias (1 Viagem)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "1x Coroa Monolítica Alemã de Zircônia (1200+ MPa)",
          "Escaneamento 3D Intraoral e Fresagem de Alta Precisão CAD/CAM",
          "Preparo dentário, anestesia computadorizada e dente provisório",
          "Ajuste de translucidez natural e estratificação estética",
          "10 Anos de Garantia Clínica e Certificado de Autenticidade",
          "Acompanhamento de coordenador dedicado em português"
        ],
        "price": {
          "USD": "$275",
          "EUR": "€250",
          "GBP": "£210"
        }
      },
      {
        "name": "10 Coroas de Zircônia – Arcada Superior",
        "brand": "Zircônia Multicamadas Monolítica Alemã",
        "duration": "5 – 7 Dias (1 Viagem)",
        "img": "/packages/pkg-zirconia.webp",
        "popular": true,
        "included": [
          "10x Coroas de Zircônia de Alta Translucidez (Linha do Sorriso Superior)",
          "Design Digital do Sorriso 3D (DSD) e Teste de Mock-up",
          "Plástica gengival a laser para simetria estética (se necessário)",
          "Conjunto de dentes provisórios estéticos para a fase laboratorial",
          "6 Noites em Hotel 4 Estrelas com Café da Manhã em Antalya",
          "Transfers Privados em Mercedes VIP (Aeroporto - Hotel - Clínica)",
          "Garantia Vitalícia contra fraturas e lascamentos"
        ],
        "price": {
          "USD": "$2,590",
          "EUR": "€2,390",
          "GBP": "£2,050"
        }
      },
      {
        "name": "20 Coroas de Zircônia – Makeover Completo",
        "brand": "Zircônia 3D Pro Multicamadas Monolítica",
        "duration": "6 – 7 Dias (1 Viagem)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Coroas de Zircônia Premium (10 Arcada Superior + 10 Inferior)",
          "Tomografia 3D Completa e Simulação Facial do Sorriso",
          "Equilíbrio oclusal gnatológico e articulação funcional perfeita",
          "Dentes provisórios instalados no 1º dia para conforto total",
          "6 Noites em Hotel 5 Estrelas de Luxo em Antalya",
          "Motorista Particular em Mercedes VIP para todas as consultas",
          "Kit de cuidados pós-tratamento e placa oclusal noturna"
        ],
        "price": {
          "USD": "$5,050",
          "EUR": "€4,650",
          "GBP": "£3,990"
        }
      },
      {
        "name": "Coroa Individual Suíça Ivoclar E-Max",
        "brand": "Ivoclar Vivadent IPS e.max Press (Suíça)",
        "duration": "4 – 6 Dias (1 Viagem)",
        "img": "/packages/Porcelain-Crown-Package-1.jpg",
        "included": [
          "1x Coroa/Faceta 100% Dissilicato de Lítio Ivoclar Suíço",
          "70% de translucidez natural incomparável para dentes anteriores",
          "Preparo microscópico de margem para adaptação gengival perfeita",
          "Caracterização artesanal e efeito opalescente personalizado",
          "10 Anos de Garantia Internacional do Fabricante",
          "Calibração de cor sob iluminação natural e de estúdio"
        ],
        "price": {
          "USD": "$320",
          "EUR": "€290",
          "GBP": "£250"
        }
      },
      {
        "name": "20 Unidades Ivoclar E-Max – Hollywood Smile",
        "brand": "Ivoclar IPS e.max CAD / Press Master",
        "duration": "6 – 7 Dias (1 Viagem)",
        "img": "/packages/Porcelain-Crown-Package-2.jpg",
        "included": [
          "20x Facetas/Coroas Cerâmicas Suíças Ivoclar IPS e.max",
          "Design 3D da Estética Facial e Proporção Áurea do Sorriso",
          "Prova ao vivo de mock-up na boca antes da confecção final",
          "6 Noites em Hotel 5 Estrelas com Café da Manhã",
          "Serviço de transfer privativo em Mercedes VIP",
          "Clareamento clínico a laser para dentes naturais restantes",
          "Certificado de garantia vitalícia e passaporte internacional"
        ],
        "price": {
          "USD": "$5,950",
          "EUR": "€5,450",
          "GBP": "£4,690"
        }
      },
      {
        "name": "Ponte Fixa de Zircônia sobre Implantes (12–14 Dentes)",
        "brand": "Prettau / Katana Multicamadas Zircônia",
        "duration": "6 – 7 Dias (Etapa Final)",
        "img": "/packages/Porcelain-Crown-Package-3.jpg",
        "included": [
          "Ponte Monolítica Parafusada de Zircônia em Peça Única (12–14 dentes)",
          "Conexão multi-unit de titânio de alta precisão CAD/CAM",
          "Resistência de 1250 MPa para suporte de força mastigatória",
          "Cerâmica gengival rosa personalizada para estética natural",
          "Hotel 5★ + Transfers VIP Mercedes",
          "Garantia Vitalícia na estrutura de zircônia"
        ],
        "price": {
          "USD": "$3,150",
          "EUR": "€2,890",
          "GBP": "£2,490"
        }
      }
    ],
    "faqs": [
      {
        "q": "O meu plano de tratamento ou preço mudará ao chegar na clínica?",
        "a": [
          "Não. O plano de tratamento e o orçamento fornecidos na consulta online são fixos e garantidos.",
          "Realizamos uma tomografia 3D sem custos na clínica. Salvo infecções graves ocultas na raiz que exijam tratamento de canal prévio, o valor acordado permanece 100% transparente."
        ]
      },
      {
        "q": "Vocês auxiliam na hospedagem e reserva de hotel?",
        "a": [
          "Sim. Todos os nossos pacotes de coroas (10, 20 ou 24 dentes) incluem hospedagem com café da manhã em hotéis 4 ou 5 estrelas em áreas nobres de Antalya."
        ]
      },
      {
        "q": "É seguro viajar para a Turquia para tratamento dentário?",
        "a": [
          "Sim, totalmente. Antalya é um dos maiores polos mundiais de turismo odontológico, recebendo mais de 500.000 pacientes internacionais ao ano com padrões hospitalares rigorosos e materiais certificados CE/FDA."
        ]
      },
      {
        "q": "Quais marcas e materiais vocês utilizam nas coroas?",
        "a": [
          "Utilizamos exclusivamente materiais originais de líderes mundiais: Amman-Girrbach, Vita, Noritake Katana (1200+ MPa) e Ivoclar IPS e.max suíço com certificado de autenticidade."
        ]
      },
      {
        "q": "Posso ver o formato e a cor dos meus novos dentes antes de serem feitos?",
        "a": [
          "Sim! Com o 3D Digital Smile Design e dentes provisórios estéticos (mock-up), você testa o novo sorriso na sua boca no 1º dia antes da confecção definitiva."
        ]
      },
      {
        "q": "Posso colocar coroas ou facetas sem desgastar os dentes?",
        "a": [
          "As coroas de zircônia necessitam de desgaste de 1.0 a 1.5 mm para proteção estrutural completa de 360°. Para dentes saudáveis e sem manchas profundas, facetas ultrafinas (0.3–0.5 mm) podem ser indicadas."
        ]
      },
      {
        "q": "Posso pagar online antes da viagem ou durante a estadia?",
        "a": [
          "Sim. Aceitamos transferências bancárias internacionais, cartões de crédito (Visa, Mastercard) e dinheiro em espécie (EUR, GBP, USD) em etapas divididas por consulta."
        ]
      },
      {
        "q": "Os transfers de aeroporto e o hotel estão realmente inclusos?",
        "a": [
          "Sim! Todos os pacotes de Smile Makeover incluem transporte privativo com motorista em Mercedes VIP entre o aeroporto (IST/SAW), o hotel e a clínica."
        ]
      },
      {
        "q": "Existe parcelamento para pacientes internacionais?",
        "a": [
          "O financiamento bancário direto depende das regras do seu país de residência, mas dividimos o pagamento pelas fases clínicas e emitimos faturas médicas detalhadas para reembolso."
        ]
      },
      {
        "q": "Qual garantia vocês oferecem para as coroas de zircônia?",
        "a": [
          "Oferecemos garantia vitalícia contra fratura na estrutura de zircônia monolítica e 10 anos de garantia nas facetas e coroas suíças Ivoclar E-Max."
        ]
      },
      {
        "q": "Quais são as opções para transformar o meu sorriso?",
        "a": [
          "Coroas de Zircônia (máxima resistência e cobertura de dentes escuros), Facetas Ivoclar E-Max (máxima translucidez natural), Resina Composta e Clareamento a Laser."
        ]
      },
      {
        "q": "Posso colocar dente de ouro ou pedras de brilhante?",
        "a": [
          "Sim, sob encomenda confeccionamos coroas com ligas de ouro odontológico (18K/24K) ou incrustação de cristais e diamantes autênticos."
        ]
      },
      {
        "q": "É perigoso adiar o tratamento com coroas?",
        "a": [
          "Adiar a colocação de coroa em dentes fraturados ou com canal tratado pode causar a fratura irreversível da raiz, tornando a extração e o implante inevitáveis."
        ]
      },
      {
        "q": "Em implantes, devo escolher E-Max ou Zircônia?",
        "a": [
          "Sobre implantes, a Zircônia Monolítica de 1200+ MPa é o padrão ouro por suportar o pilar de titânio. O E-Max é perfeito para dentes naturais anteriores."
        ]
      },
      {
        "q": "Por que a zircônia é preferida para dentes posteriores em vez de facetas?",
        "a": [
          "Os molares suportam forças mastigatórias de até 1000 N. Facetas finas não foram feitas para essa carga; a zircônia oferece a resistência necessária para durar décadas."
        ]
      },
      {
        "q": "Por que pontes extensas não podem ser feitas em E-Max puro?",
        "a": [
          "O E-Max possui resistência de ~450–500 MPa. Em pontes com vários dentes faltantes, as forças de alavanca podem quebrá-lo, exigindo zircônia de 1200+ MPa."
        ]
      },
      {
        "q": "Dentes com coroas têm mais facilidade de ter cárie?",
        "a": [
          "Não. As coroas CAD/CAM adaptam-se com precisão micrométrica (abaixo de 20 micra), vedando o dente contra bactérias com boa higiene diária."
        ]
      },
      {
        "q": "Qual a durabilidade média das coroas de zircônia?",
        "a": [
          "Com escovação adequada, uso de fio dental e consultas de rotina, as coroas de zircônia duram de 20 a 25 anos ou a vida inteira."
        ]
      },
      {
        "q": "Quanto do dente é desgastado para coroas em comparação com facetas?",
        "a": [
          "Facetas exigem apenas 0.3–0.7 mm na face frontal; coroas exigem 1.0–1.5 mm em toda a circunferência para proteção completa de 360°."
        ]
      },
      {
        "q": "É possível mudar a cor da coroa após a cimentação final?",
        "a": [
          "Após a cimentação definitiva, a cor cerâmica é permanente e resistente a manchas. A cor e o formato são testados e aprovados por você na prova antes da fixação."
        ]
      },
      {
        "q": "Qual a diferença entre facetas laminadas, resina e coroas de zircônia?",
        "a": [
          "Facetas de porcelana cobrem apenas a frente do dente; facetas de resina são aplicadas diretamente (durabilidade de 4–7 anos); coroas de zircônia cobrem 360° do dente, garantindo máxima força e longevidade."
        ]
      }
    ]
  },
  "es": {
    "packagesTitle": "Paquetes de Coronas de Circonio y Cerámica Pura",
    "packagesSubtitle": "Paquetes todo incluido para transformación de sonrisa con circonio alemán Amman-Girrbach e Ivoclar E-Max suizo, con hotel 4/5★ y traslados VIP en Antalya.",
    "mostPopularBadge": "Opción Más Popular",
    "durationLabel": "Duración del Tratamiento:",
    "includedLabel": "Incluido en el Paquete:",
    "priceLabel": "Precio Todo Incluido:",
    "getQuoteBtn": "Solicitar Presupuesto Gratis",
    "faqTitle": "Preguntas Frecuentes sobre Coronas de Circonio",
    "faqSubtitle": "Todo lo que necesita saber sobre coronas de circonio, diseño de sonrisa, tiempos de viaje, garantías internacionales y atención médica en Antalya.",
    "stayDuration": "<strong>6 a 7 días en Antalya.</strong> En un solo viaje realizamos la preparación dental, escaneo digital 3D CAD/CAM, fresado de las coronas de circonio y su cementación estética definitiva.",
    "visitCount": "<strong>Solo 1 viaje requerido.</strong> Solo necesita viajar a Antalya una vez. Desde una sola corona hasta una transformación completa de 20-28 coronas de circonio, todo se completa en una estancia.",
    "recoveryTime": "<strong>2 a 3 días de adaptación.</strong> No requiere reposo quirúrgico. Cualquier leve sensibilidad desaparece en 48-72 horas, permitiéndole comer con total normalidad.",
    "priceEstimate": "<strong>Los precios de coronas de circonio comienzan desde £210 / €250 / $275 por diente.</strong> Los paquetes todo incluido (10, 20 o 24 coronas) incluyen diseño de sonrisa, hotel 4/5 estrellas y traslados VIP.",
    "packages": [
      {
        "name": "Corona Individual de Circonio",
        "brand": "Amman-Girrbach / Vita (1200+ MPa)",
        "duration": "3 – 5 Días (1 Viaje)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "1x Corona Monolítica Alemana de Circonio (1200+ MPa)",
          "Escaneo 3D Intraoral y Fresado de Alta Precisión CAD/CAM",
          "Preparación dental, anestesia computarizada y diente provisional",
          "Ajuste de color natural y estratificación estética",
          "10 Años de Garantía Clínica y Certificado de Autenticidad",
          "Asistencia de coordinador dedicado en español"
        ],
        "price": {
          "USD": "$275",
          "EUR": "€250",
          "GBP": "£210"
        }
      },
      {
        "name": "10 Coronas de Circonio – Arcada Superior",
        "brand": "Circonio Multicapa Monolítico Alemán",
        "duration": "5 – 7 Días (1 Viaje)",
        "img": "/packages/pkg-zirconia.webp",
        "popular": true,
        "included": [
          "10x Coronas de Circonio de Alta Translucidez (Línea de la Sonrisa Superior)",
          "Diseño Digital de Sonrisa 3D (DSD) y Prueba de Mock-up",
          "Plastia gingival con láser para simetría estética (si es necesaria)",
          "Juego de dientes provisionales estéticos para la fase de laboratorio",
          "6 Noches en Hotel de 4 Estrellas con Desayuno en Antalya",
          "Traslados Privados en Mercedes VIP (Aeropuerto - Hotel - Clínica)",
          "Garantía de por Vida contra fracturas y astillamientos"
        ],
        "price": {
          "USD": "$2,590",
          "EUR": "€2,390",
          "GBP": "£2,050"
        }
      },
      {
        "name": "20 Coronas de Circonio – Makeover Completo",
        "brand": "Circonio 3D Pro Multicapa Monolítico",
        "duration": "6 – 7 Días (1 Viaje)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Coronas de Circonio Premium (10 Arcada Superior + 10 Inferior)",
          "Tomografía 3D Completa y Simulación Facial de Sonrisa",
          "Equilibrio oclusal gnatológico y articulación funcional perfecta",
          "Dientes provisionales instalados el 1.er día para confort total",
          "6 Noches en Hotel de 5 Estrellas de Lujo en Antalya",
          "Chófer Privado en Mercedes VIP para todas las citas",
          "Kit de cuidados postoperatorios y férula de descarga nocturna"
        ],
        "price": {
          "USD": "$5,050",
          "EUR": "€4,650",
          "GBP": "£3,990"
        }
      },
      {
        "name": "Corona Individual Suiza Ivoclar E-Max",
        "brand": "Ivoclar Vivadent IPS e.max Press (Suiza)",
        "duration": "4 – 6 Días (1 Viaje)",
        "img": "/packages/Porcelain-Crown-Package-1.jpg",
        "included": [
          "1x Corona/Carilla 100% Disilicato de Litio Ivoclar Suizo",
          "70% de translucidez natural incomparable para dientes anteriores",
          "Preparación microscópica de margen para sellado gingival perfecto",
          "Caracterización artesanal y efecto opalescente personalizado",
          "10 Años de Garantía Internacional del Fabricante",
          "Calibración de color bajo luz natural y de estudio"
        ],
        "price": {
          "USD": "$320",
          "EUR": "€290",
          "GBP": "£250"
        }
      },
      {
        "name": "20 Unidades Ivoclar E-Max – Hollywood Smile",
        "brand": "Ivoclar IPS e.max CAD / Press Master",
        "duration": "6 – 7 Días (1 Viaje)",
        "img": "/packages/Porcelain-Crown-Package-2.jpg",
        "included": [
          "20x Carillas/Coronas Cerámicas Suizas Ivoclar IPS e.max",
          "Diseño 3D de Estética Facial y Proporción Áurea de Sonrisa",
          "Prueba en vivo de mock-up en boca antes de la fabricación final",
          "6 Noches en Hotel de 5 Estrellas con Desayuno Incluido",
          "Servicio de traslados privados en Mercedes VIP",
          "Blanqueamiento clínico profesional para dientes naturales restantes",
          "Certificado de garantía de por vida y pasaporte internacional"
        ],
        "price": {
          "USD": "$5,950",
          "EUR": "€5,450",
          "GBP": "£4,690"
        }
      },
      {
        "name": "Puente Fijo de Circonio sobre Implantes (12–14 Dientes)",
        "brand": "Prettau / Katana Multicapa Circonio",
        "duration": "6 – 7 Días (Etapa Final)",
        "img": "/packages/Porcelain-Crown-Package-3.jpg",
        "included": [
          "Puente Monolítico Atornillado de Circonio en una Sola Pieza (12–14 dientes)",
          "Conexión multi-unit de titanio de alta precisión CAD/CAM",
          "Resistencia de 1250 MPa para máxima fuerza de mordida",
          "Cerámica gingival rosa personalizada para estética natural",
          "Hotel 5★ + Traslados VIP Mercedes",
          "Garantía de por Vida en la estructura de circonio"
        ],
        "price": {
          "USD": "$3,150",
          "EUR": "€2,890",
          "GBP": "£2,490"
        }
      }
    ],
    "faqs": [
      {
        "q": "¿Cambiará mi plan de tratamiento o el precio al llegar a la clínica?",
        "a": [
          "No. El plan de tratamiento y presupuesto acordados en su consulta online son fijos y garantizados.",
          "Realizamos una tomografía 3D gratuita en la clínica. A menos que se detecte una infección radicular severa e imprevista que requiera endodoncia, el precio acordado se mantiene 100% transparente."
        ]
      },
      {
        "q": "¿Nos ayudan con el alojamiento y la reserva de hotel?",
        "a": [
          "Sí. Todos nuestros paquetes de coronas (10, 20 o 24 dientes) incluyen estancia con desayuno en hoteles de 4 o 5 estrellas en zonas exclusivas y seguras de Antalya."
        ]
      },
      {
        "q": "¿Es seguro viajar a Turquía para tratamientos dentales?",
        "a": [
          "Sí, totalmente. Antalya es uno de los mayores centros mundiales de turismo dental, recibiendo a más de 500.000 pacientes internacionales al año con rigurosos estándares hospitalarios y materiales con sello CE/FDA."
        ]
      },
      {
        "q": "¿Qué marcas y materiales utilizan en las coronas?",
        "a": [
          "Utilizamos exclusivamente materiales originales de líderes mundiales: Amman-Girrbach, Vita, Noritake Katana (1200+ MPa) e Ivoclar IPS e.max suizo con certificado oficial de autenticidad."
        ]
      },
      {
        "q": "¿Puedo ver la forma y el color de mis nuevos dientes antes de fabricarlos?",
        "a": [
          "¡Sí! Con el Diseño Digital de Sonrisa 3D y dientes provisionales estéticos (mock-up), probará su nueva sonrisa directamente en la boca el primer día antes de la cementación final."
        ]
      },
      {
        "q": "¿Puedo ponerme coronas o carillas sin desgastar mis dientes?",
        "a": [
          "Las coronas de circonio requieren una preparación circunferencial de 1.0 a 1.5 mm para brindar protección estructural de 360°. Para dientes sanos, las carillas ultrafinas (0.3–0.5 mm) pueden ser una alternativa."
        ]
      },
      {
        "q": "¿Puedo pagar online antes del viaje o durante mi estancia?",
        "a": [
          "Sí. Aceptamos transferencias bancarias internacionales, tarjetas de crédito (Visa, Mastercard) y efectivo en EUR, GBP o USD en pagos escalonados por fases de tratamiento."
        ]
      },
      {
        "q": "¿Los traslados de aeropuerto y el hotel están realmente incluidos?",
        "a": [
          "¡Sí! Todos los paquetes de Smile Makeover incluyen servicio privado con chófer en Mercedes VIP entre el aeropuerto (IST/SAW), el hotel y la clínica."
        ]
      },
      {
        "q": "¿Ofrecen planes de pago a plazos para pacientes internacionales?",
        "a": [
          "La financiación directa depende de las entidades bancarias de su país de residencia. No obstante, facilitamos pagos fraccionados por etapas y emitimos facturas médicas detalladas para su seguro."
        ]
      },
      {
        "q": "¿Qué garantía ofrecen en las coronas de circonio?",
        "a": [
          "Ofrecemos garantía de por vida contra roturas en la estructura de circonio monolítico y 10 años de garantía en restauraciones suizas Ivoclar E-Max."
        ]
      },
      {
        "q": "¿Qué opciones existen para mejorar el aspecto de mi sonrisa?",
        "a": [
          "Coronas de Circonio (máxima resistencia y enmascaramiento de tonos oscuros), Carillas Ivoclar E-Max (máxima naturalidad), Composite Bonding y Blanqueamiento Dental Láser."
        ]
      },
      {
        "q": "¿Puedo cubrir un diente con oro o poner un brillante dental?",
        "a": [
          "Sí, bajo pedido confeccionamos coronas en oro odontológico médico (18K/24K) o incrustamos cristales y diamantes auténticos en las coronas cerámicas."
        ]
      },
      {
        "q": "¿Es peligroso posponer el tratamiento con coronas?",
        "a": [
          "Posponer una corona en dientes fracturados o endodonciados puede provocar la rotura vertical de la raíz, obligando a la extracción y a la colocación de un implante."
        ]
      },
      {
        "q": "¿En implantes, se debe elegir E-Max o Circonio?",
        "a": [
          "Sobre implantes, el Circonio Monolítico de 1200+ MPa es el estándar de oro por su resistencia ante el pilar de titanio. E-Max es ideal para dientes naturales frontales."
        ]
      },
      {
        "q": "¿Por qué se prefiere el circonio para dientes posteriores en lugar de carillas?",
        "a": [
          "Los molares soportan presiones masticatorias de hasta 1000 N. Las carillas finas no están diseñadas para esa fuerza; el circonio ofrece la solidez requerida para una función duradera."
        ]
      },
      {
        "q": "¿Por qué los puentes extensos no pueden ser de E-Max puro?",
        "a": [
          "E-Max tiene una resistencia a la flexión de ~450–500 MPa. En puentes de varios dientes, las fuerzas de palanca podrían fracturarlo, requiriéndose circonio de 1200+ MPa."
        ]
      },
      {
        "q": "¿Los dientes con coronas tienen mayor tendencia a tener caries?",
        "a": [
          "No. Las coronas CAD/CAM se ajustan con precisión micrométrica (menos de 20 micras), sellando el diente contra bacterias con una adecuada higiene bucal."
        ]
      },
      {
        "q": "¿Cuánto duran en promedio las coronas de circonio?",
        "a": [
          "Con un buen cepillado, hilo dental y revisiones periódicas, las coronas de circonio duran fácilmente de 20 a 25 años o toda la vida."
        ]
      },
      {
        "q": "¿Cuánto diente se talla para coronas en comparación con carillas?",
        "a": [
          "Las carillas requieren solo 0.3–0.7 mm en la cara frontal; las coronas requieren 1.0–1.5 mm en toda la circunferencia para máxima protección."
        ]
      },
      {
        "q": "¿Se puede cambiar el color de la corona una vez cementada?",
        "a": [
          "Una vez cementada definitivamente, el color cerámico es permanente e inalterable. El tono y la forma son probados y aprobados por usted durante la sesión de prueba."
        ]
      },
      {
        "q": "¿Cuál es la diferencia entre carillas de porcelana, composite y coronas de circonio?",
        "a": [
          "Las carillas de porcelana cubren solo el frente del diente; el composite es resina aplicada directamente (vida útil 4–7 años); las coronas de circonio cubren el diente 360° para máxima fuerza y longevidad."
        ]
      }
    ]
  },
  "ru": {
    "packagesTitle": "Пакеты Циркониевых и Керамических Коронок",
    "packagesSubtitle": "Комплексные пакеты «все включено» на немецкий диоксид циркония Amman-Girrbach и швейцарский Ivoclar E-Max с отелем 4/5★ и VIP-трансфером в Анталье.",
    "mostPopularBadge": "Самый Популярный Выбор",
    "durationLabel": "Срок Лечения:",
    "includedLabel": "В Стоимость Входит:",
    "priceLabel": "Цена «Все Включено»:",
    "getQuoteBtn": "Получить Бесплатный Расчет",
    "faqTitle": "Часто Задаваемые Вопросы о Циркониевых Коронках",
    "faqSubtitle": "Ответы на 21 главный вопрос о коронках из диоксида циркония, дизайне улыбки, сроках лечения в Анталье и международных гарантиях.",
    "stayDuration": "<strong>6–7 дней в Анталье.</strong> За одну поездку выполняется подготовка зубов, 3D-сканирование CAD/CAM, изготовление монолитных циркониевых коронок в лаборатории и постоянная фиксация.",
    "visitCount": "<strong>Требуется всего 1 визит.</strong> Вам достаточно приехать в Анталью один раз. Как одиночные коронки, так и полная реконструкция улыбки (20–28 коронок) выполняются за одну поездку.",
    "recoveryTime": "<strong>2–3 дня на адаптацию.</strong> Процедура не требует хирургического восстановления. Легкая чувствительность проходит за 48–72 часа, после чего вы сразу возвращаетесь к привычному питанию.",
    "priceEstimate": "<strong>Цены на циркониевые коронки начинаются от £210 / €250 / $275 за единицу.</strong> Комплексные пакеты (10, 20 или 24 коронки) включают цифровой дизайн улыбки, отель 4/5★ и VIP-трансфер.",
    "packages": [
      {
        "name": "Одиночная Циркониевая Коронка",
        "brand": "Amman-Girrbach / Vita (1200+ МПа)",
        "duration": "3 – 5 Дней (1 Визит)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "1x Немецкая Монолитная Циркониевая Коронка (1200+ МПа)",
          "3D Цифровое Сканирование и Прецизионное Фрезерование CAD/CAM",
          "Препарирование зуба, компьютерная анестезия и временная коронка",
          "Индивидуальный подбор оттенка и естественной прозрачности",
          "10 Лет Клинической Гарантии и Сертификат Подлинности",
          "Персональный русскоязычный координатор"
        ],
        "price": {
          "USD": "$275",
          "EUR": "€250",
          "GBP": "£210"
        }
      },
      {
        "name": "10 Коронок из Циркония – Верхняя Челюсть",
        "brand": "Немецкий Многослойный Диоксид Циркония",
        "duration": "5 – 7 Дней (1 Визит)",
        "img": "/packages/pkg-zirconia.webp",
        "popular": true,
        "included": [
          "10x Коронок из Высокопрозрачного Циркония (Зона Улыбки)",
          "Цифровой 3D Дизайн Улыбки (DSD) и Примерка Модели Mock-up",
          "Лазерная коррекция десневого контура для идеальной симметрии",
          "Комплект эстетических временных коронок на период изготовления",
          "6 Ночей в Отеле 4 Звезды с Завтраками в Анталье",
          "Трансферы на VIP Mercedes (Аэропорт - Отель - Клиника)",
          "Пожизненная Гарантия на целостность структуры циркония"
        ],
        "price": {
          "USD": "$2,590",
          "EUR": "€2,390",
          "GBP": "£2,050"
        }
      },
      {
        "name": "20 Коронок из Циркония – Полная Реконструкция",
        "brand": "Монолитный Диоксид Циркония 3D Pro Multilayer",
        "duration": "6 – 7 Дней (1 Визит)",
        "img": "/packages/pkg-zirconia.webp",
        "included": [
          "20x Коронок из Премиального Циркония (10 Верхняя + 10 Нижняя Челюсть)",
          "Полная 3D Компьютерная Томография и Моделирование Улыбки",
          "Гнатологическая балансировка прикуса и височно-нижнечелюстного сустава",
          "Временные коронки, установленные в 1-й день визита",
          "6 Ночей в 5-Звездочном Люкс-Отеле в Анталье",
          "Личный Водитель на VIP Mercedes на все приемы",
          "Индивидуальная ночная капа и набор для ухода"
        ],
        "price": {
          "USD": "$5,050",
          "EUR": "€4,650",
          "GBP": "£3,990"
        }
      },
      {
        "name": "Одиночная Швейцарская Коронка Ivoclar E-Max",
        "brand": "Ivoclar Vivadent IPS e.max Press (Швейцария)",
        "duration": "4 – 6 Дней (1 Визит)",
        "img": "/packages/Porcelain-Crown-Package-1.jpg",
        "included": [
          "1x Коронка/Винир из 100% Швейцарского Дисиликата Лития",
          "Непревзойденная 70% светопроницаемость для передних зубов",
          "Микроскопическая обработка края для идеального прилегания к десне",
          "Ручная индивидуальная роспись и эффект опалесценции",
          "10 Лет Международной Гарантии Производителя",
          "Калибровка оттенка при студийном и дневном свете"
        ],
        "price": {
          "USD": "$320",
          "EUR": "€290",
          "GBP": "£250"
        }
      },
      {
        "name": "20 Коронок Ivoclar E-Max – Голливудская Улыбка",
        "brand": "Ivoclar IPS e.max CAD / Press Master",
        "duration": "6 – 7 Дней (1 Визит)",
        "img": "/packages/Porcelain-Crown-Package-2.jpg",
        "included": [
          "20x Швейцарских Керамических Коронок/Виниров Ivoclar IPS e.max",
          "3D Дизайн Эстетики Лица и Золотого Сечения Улыбки",
          "Примерка mock-up в полости рта до финального обжига керамики",
          "6 Ночей в Отеле 5 Звезд с Завтраками",
          "Личный трансфер на VIP Mercedes на весь период пребывания",
          "Клиническое отбеливание остальных собственных зубов",
          "Пожизненный гарантийный сертификат и паспорт пациента"
        ],
        "price": {
          "USD": "$5,950",
          "EUR": "€5,450",
          "GBP": "£4,690"
        }
      },
      {
        "name": "Циркониевый Мост на Имплантах (12–14 Единиц)",
        "brand": "Prettau / Katana Multilayer Zirconia",
        "duration": "6 – 7 Дней (Финальный Этап)",
        "img": "/packages/Porcelain-Crown-Package-3.jpg",
        "included": [
          "Цельный винтовой монолитный циркониевый мост (12–14 зубов)",
          "Прецизионное титановое соединение CAD/CAM multi-unit",
          "Прочность 1250 МПа против экстремальных жевательных нагрузок",
          "Эстетическая розовая десневая керамика для естественного вида",
          "Отель 5★ + Индивидуальные трансферы VIP Mercedes",
          "Пожизненная гарантия на циркониевый каркас"
        ],
        "price": {
          "USD": "$3,150",
          "EUR": "€2,890",
          "GBP": "£2,490"
        }
      }
    ],
    "faqs": [
      {
        "q": "Изменится ли мой план лечения или цена по прибытии в клинику?",
        "a": [
          "Нет. План лечения и расчет стоимости, предоставленные на онлайн-консультации, являются фиксированными.",
          "В клинике мы проводим бесплатную 3D-томографию. Если на снимке не обнаружится скрытого воспаления корней, требующего эндодонтии, цена остается на 100% прозрачной."
        ]
      },
      {
        "q": "Помогаете ли вы с бронированием отеля и проживанием?",
        "a": [
          "Да. Все комплексные пакеты коронок (10, 20 или 24 зуба) включают проживание с завтраками в отелях 4★ или 5★ в престижных районах Антальи рядом с клиникой."
        ]
      },
      {
        "q": "Безопасно ли приезжать в Турцию на стоматологическое лечение?",
        "a": [
          "Да, абсолютно. Анталья — мировой лидер медицинского туризма, принимающий более 500 000 иностранных пациентов ежегодно с соблюдением европейских протоколов стерилизации и сертификацией CE/FDA."
        ]
      },
      {
        "q": "Какие бренды и материалы вы используете для изготовления коронок?",
        "a": [
          "Мы используем только оригинальные материалы: немецкий Amman-Girrbach, Vita, японский Noritake Katana (1200+ МПа) и швейцарский Ivoclar IPS e.max с выдачей сертификата подлинности."
        ]
      },
      {
        "q": "Могу ли я увидеть форму и цвет будущих зубов до их изготовления?",
        "a": [
          "Да! С помощью технологии 3D Digital Smile Design мы моделируем улыбку, а в 1-й день устанавливаем временный mock-up, позволяя оценить форму и оттенок зубов во рту."
        ]
      },
      {
        "q": "Можно ли поставить коронки или виниры без обточки зубов?",
        "a": [
          "Циркониевые коронки требуют обточки на 1.0–1.5 мм для прочности и защиты зуба на 360°. Для здоровых передних зубов альтернативой могут служить ультратонкие виниры (0.3–0.5 мм)."
        ]
      },
      {
        "q": "Можно ли оплатить лечение онлайн до приезда или во время поездки?",
        "a": [
          "Да. Мы принимаем международные банковские переводы, банковские карты (Visa, Mastercard) и наличные в EUR, GBP и USD поэтапно."
        ]
      },
      {
        "q": "Действительно ли трансферы и отель включены в стоимость пакета?",
        "a": [
          "Да! Все пакеты Makeover включают индивидуальный трансфер на комфортабельном автомобиле Mercedes VIP между аэропортом (IST/SAW), отелем и клиникой."
        ]
      },
      {
        "q": "Предоставляете ли вы рассрочку для иностранных пациентов?",
        "a": [
          "Банковское кредитование зависит от правил страны вашего проживания. Однако мы делим оплату на клинические этапы и выдаем счета для страховых компаний."
        ]
      },
      {
        "q": "Какую гарантию вы предоставляете на коронки из циркония?",
        "a": [
          "Мы даем пожизненную гарантию на структуру монолитного циркония от сколов и переломов, а также 10 лет гарантии на коронки и виниры Ivoclar E-Max."
        ]
      },
      {
        "q": "Какие существуют варианты преображения улыбки?",
        "a": [
          "Циркониевые коронки (максимальная прочность и маскировка темного цвета), виниры Ivoclar E-Max (максимальная эстетика), композитный бондинг и лазерное отбеливание."
        ]
      },
      {
        "q": "Можно ли покрыть зуб золотом или установить бриллиант?",
        "a": [
          "Да, по запросу мы изготавливаем коронки из медицинского золотого сплава (18K/24K) или инкрустируем настоящие кристаллы и бриллианты в керамику."
        ]
      },
      {
        "q": "Опасно ли откладывать установку коронки на разрушенный зуб?",
        "a": [
          "Откладывание протезирования зуба с трещиной или после лечения каналов может привести к продольному перелому корня и неизбежному удалению с установкой импланта."
        ]
      },
      {
        "q": "Что выбрать на импланты: E-Max или цирконий?",
        "a": [
          "На имплантах золотым стандартом является монолитный цирконий 1200+ МПа благодаря устойчивости к титановому абатменту. E-Max идеален для естественных передних зубов."
        ]
      },
      {
        "q": "Почему на жевательные зубы выбирают цирконий, а не виниры?",
        "a": [
          "Жевательные зубы выдерживают нагрузку до 1000 Н. Тонкие виниры не предназначены для таких нагрузок; цирконий гарантирует надежность на десятилетия."
        ]
      },
      {
        "q": "Почему мостовидные протезы нельзя делать из чистого E-Max?",
        "a": [
          "Прочность E-Max на изгиб составляет ~450–500 МПа. При мостах большой протяженности нагрузки могут вызвать перелом, поэтому необходим цирконий 1200+ МПа."
        ]
      },
      {
        "q": "Подвержены ли зубы под коронками кариесу?",
        "a": [
          "Нет. Коронки CAD/CAM прилегают с точностью до 20 микрон, герметично защищая зуб от бактерий при соблюдении стандартной гигиены полости рта."
        ]
      },
      {
        "q": "Каков средний срок службы циркониевых коронок?",
        "a": [
          "При правильной гигиене и регулярных осмотрах циркониевые коронки служат от 20 до 25 лет и нередко всю жизнь."
        ]
      },
      {
        "q": "Сколько ткани зуба сошлифовывается под коронки и под виниры?",
        "a": [
          "Под виниры снимается всего 0.3–0.7 мм эмали с передней поверхности, а под коронки — 1.0–1.5 мм по всей окружности для надежной защиты."
        ]
      },
      {
        "q": "Можно ли изменить оттенок коронок после их окончательной фиксации?",
        "a": [
          "После постоянной цементировки цвет керамики зафиксирован и устойчив к любым красителям. Окончательный оттенок и форма согласуются с вами на примерке."
        ]
      },
      {
        "q": "В чем разница между керамическими винирами, композитом и циркониевыми коронками?",
        "a": [
          "Керамические виниры закрывают только переднюю часть зуба; композитные виниры — это пломбировочный материал (срок службы 4–7 лет); циркониевые коронки охватывают зуб на 360°, гарантируя максимальную прочность."
        ]
      }
    ]
  }
};

export default function ZirconiumCrownsDetailView() {
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
      <section aria-labelledby="zirconium-packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="zirconium-packages-heading" className={styles.packagesTitle}>
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

      {/* 8. MASTER 21-QUESTION FAQ SECTION (CLINICAL & HEALTH TOURISM) */}
      <section aria-labelledby="zirconium-faq-heading" className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h2 id="zirconium-faq-heading" className={styles.faqTitle}>
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
                    aria-controls={`zirconium-faq-ans-${fIdx}`}
                  >
                    <span className={styles.faqQuestionText}>{faq.q}</span>
                    <span className={`${styles.faqIconWrap} ${isOpen ? styles.faqIconActive : ''}`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`zirconium-faq-ans-${fIdx}`} className={styles.faqAnswer} role="region">
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
        <TreatmentInteractiveQuoteForm defaultTreatment="Zirconium Crowns" />
      </div>
    </div>
  );
}
