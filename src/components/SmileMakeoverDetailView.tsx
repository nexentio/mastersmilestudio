'use client';

import React, { useState, useRef } from 'react';
import { useLocale } from 'next-intl';
import TreatmentCosmeticRightTreatmentAccordion from '@/components/treatment-sections/TreatmentCosmeticRightTreatmentAccordion';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentBeforeAfterSliderSection';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
import styles from './SmileMakeoverDetailView.module.css';

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
  packages: PackageItem[];
  faqTitle: string;
  faqSubtitle: string;
  faqs: FaqItem[];
}

const DICTIONARIES: Record<string, LocaleDictionary> = {
  en: {
    packagesTitle: 'Smile Makeover Packages & Currency Calculator',
    packagesSubtitle: 'Bespoke 3D Digital Smile Design, Swiss Ivoclar E-Max veneers, and full-mouth aesthetic reconstructions crafted for natural luminescence, golden facial ratio, and lifelong durability in Antalya.',
    mostPopularBadge: 'Most Popular Choice',
    durationLabel: 'Procedure Time:',
    includedLabel: 'Package Inclusions:',
    priceLabel: 'Package Price:',
    getQuoteBtn: 'Get Your Free Quote',
    faqTitle: 'Frequently Asked Questions About Smile Makeover',
    faqSubtitle: 'Everything you need to know about smile design in Antalya — from 3D AI mock-ups and tooth preparation to Swiss porcelain longevity, gum contouring, and international VIP care.',
    packages: [
      {
        name: 'Full Arc 16-Veneer Swiss E-Max Smile Makeover',
        brand: 'Ivoclar Vivadent IPS e.max Press (Switzerland)',
        duration: '5-6 Working Days (3-4 Visits)',
        img: '/packages/pkg-4.webp',
        popular: true,
        included: [
          '16 Custom Hand-layered Swiss Ivoclar E-Max Porcelain Laminates',
          '3Shape 3D Intraoral Scanning & High-definition AI Smile Simulation',
          'In-mouth Physical Resin Mock-Up Try-in before any enamel prep',
          'Microscopic ultra-conservative enamel preservation (0.3mm-0.5mm)',
          'Diode Laser Gum Recontouring & Gingival Symmetry Alignment',
          'Temporary aesthetic veneers during laboratory fabrication',
          'VIP Airport & Clinic Luxury Transfers + 5-Star Hotel Package'
        ],
        price: { USD: '$3,800', EUR: '€3,450', GBP: '£3,050' }
      },
      {
        name: 'Complete 20-Unit Elite Hollywood Transformation',
        brand: 'Swiss E-Max / 1200+ MPa German Zirconia Monolithic',
        duration: '6 Working Days (4 Visits)',
        img: '/packages/pkg-5.webp',
        included: [
          '20 Premium Aesthetic Units (Upper 10 & Lower 10 Smile Arc)',
          'Full facial Golden Ratio aesthetic reconstruction & lip dynamics analysis',
          'Dual try-in: Bis-GMA preview + final raw porcelain fit calibration',
          'Laser soft-tissue depigmentation & aesthetic gingivoplasty included',
          'High-gloss diamond polish & Variolink Esthetic dual-cure bonding',
          'Night guard & bespoke travel dental care kit included',
          'Lifetime Clinic Guarantee & 5-Star VIP Concierge service'
        ],
        price: { USD: '$4,950', EUR: '€4,500', GBP: '£3,950' }
      },
      {
        name: 'Digital Smile Design & 8-Veneer Social Six Focus',
        brand: 'Ivoclar IPS e.max CAD / Prime Zirconia',
        duration: '4-5 Working Days (3 Visits)',
        img: '/packages/pkg-6.webp',
        included: [
          '8 Upper Front Aesthetic E-Max Veneers targeting the visible smile line',
          '3D Digital Smile Design portrait photographic facial analysis',
          'Shade matching with natural optical translucency gradient',
          'Painless local anesthesia with Wand computerized delivery',
          'Post-cementation bite equilibration and high-speed polish',
          'VIP Airport & Hotel Transfers included'
        ],
        price: { USD: '$2,100', EUR: '€1,920', GBP: '£1,690' }
      }
    ],
    faqs: [
      {
        q: 'What is a Smile Makeover and how is it customized?',
        a: [
          'A Smile Makeover is a comprehensive aesthetic and functional dental rehabilitation tailored to your unique facial geometry, lip line, skin undertone, and personal goals. It typically combines multiple cosmetic and restorative procedures — most commonly Swiss Ivoclar E-Max porcelain veneers, ultra-thin laminates, digital smile design, laser gum contouring, and in some cases zirconium crowns or teeth whitening.',
          'At Master Smile Studio Antalya, we do not believe in one-size-fits-all teeth. Using 3Shape 3D digital scanners and AI smile design software, our cosmetic master dentists analyze your facial Golden Ratio to create a harmonious, radiant, and naturally luminous smile.'
        ]
      },
      {
        q: 'How does the 3D Digital Smile Design (DSD) and mock-up trial work?',
        a: [
          'On your very first appointment, we take high-resolution studio portraits, dynamic facial video recordings, and a precision 3D digital intraoral scan. We then digitally design your ideal tooth shapes, proportions, and symmetry on the computer.',
          'Before touching or preparing a single tooth, we 3D-print a physical resin mock-up and place it directly over your existing teeth. You look in the mirror, see your projected final smile in real life, test your speech, and approve every aesthetic detail with your dentist before we begin.'
        ]
      },
      {
        q: 'How many days do I need to stay in Antalya for a full Smile Makeover?',
        a: [
          'A full smile makeover with 16 to 20 custom Swiss E-Max porcelain veneers or crowns typically requires only 5 to 6 working days (usually 3 to 4 clinical appointments).',
          'During this time, our in-house master laboratory custom-layers and hand-finishes your restorations. Between appointments, you wear comfortable temporary veneers, allowing you to explore the historic sights, shopping, and dining of Antalya.'
        ]
      },
      {
        q: 'Will my teeth need to be shaved down heavily for a Smile Makeover?',
        a: [
          'No. We adhere to minimally invasive, biomimetic dentistry principles. For Swiss E-Max porcelain laminates, our cosmetic dentists perform ultra-conservative micro-preparation of only 0.3 mm to 0.5 mm on the outer enamel surface — about the thickness of a contact lens.',
          'In many cases with Lumineers or no-prep veneers, virtually zero enamel shaving is required. Full crown preparation is strictly reserved for severely broken, heavily filled, or root-canal treated teeth.'
        ]
      },
      {
        q: 'Is the Smile Makeover procedure painful?',
        a: [
          'Not at all. The entire procedure is carried out under gentle local anesthesia (including computerized pain-free delivery systems). You will feel zero discomfort during tooth preparation or impression taking.',
          'Following the placement of your temporary or permanent restorations, mild sensitivity to hot or cold may occur for a few days, which quickly resolves as the gum tissue settles around the margins.'
        ]
      },
      {
        q: 'How long do E-Max veneers and Smile Makeover restorations last?',
        a: [
          'Swiss Ivoclar E-Max porcelain laminates and German Zirconia restorations have an average clinical lifespan of 15 to 20+ years when properly maintained.',
          'Because lithium disilicate ceramic is non-porous and chemically inert, it will never stain from coffee, red wine, tea, or smoking. Regular brushing, flossing, and wearing a night guard if you clench your teeth will ensure your new smile stays flawless for decades.'
        ]
      },
      {
        q: 'What is the difference between E-Max veneers and Zirconium crowns?',
        a: [
          'Ivoclar E-Max (lithium disilicate glass-ceramic) offers the absolute highest optical translucency and light transmission, replicating natural tooth enamel with lifelike depth. It is the gold standard for front teeth and smile makeovers.',
          'Zirconium (1200+ MPa zirconium dioxide) provides exceptional fracture resistance and strength, making it the ideal choice for back molars, bridges, or patients with heavy nighttime bruxism.'
        ]
      },
      {
        q: 'Can a Smile Makeover fix a gummy smile or crooked teeth?',
        a: [
          'Yes. A Smile Makeover is designed to address multiple cosmetic concerns simultaneously. If you show excessive gum when smiling (gummy smile), we perform painless diode laser gingivoplasty in 15 minutes to establish perfect symmetrical gum arches.',
          'For minor to moderate crowding, spacing (diastema), or asymmetrical tooth lengths, porcelain veneers act as "instant orthodontics", correcting alignment and creating a harmonious dental arch in under a week.'
        ]
      }
    ]
  },
  tr: {
    packagesTitle: 'Gülüş Tasarımı Paketleri ve Para Birimi Hesaplayıcı',
    packagesSubtitle: '3D Dijital Gülüş Tasarımı, İsviçre Ivoclar E-Max porselen laminalar ve altın oran yüz simetrisi ile Antalya’da ömür boyu kalıcı, doğal ve ışıltılı bir Hollywood gülüşü.',
    mostPopularBadge: 'En Çok Tercih Edilen',
    durationLabel: 'Tedavi Süresi:',
    includedLabel: 'Paket Kapsamı:',
    priceLabel: 'Paket Fiyatı:',
    getQuoteBtn: 'Ücretsiz Teklif Alın',
    faqTitle: 'Gülüş Tasarımı (Smile Makeover) Hakkında Sıkça Sorulan Sorular',
    faqSubtitle: 'Antalya’da dijital gülüş tasarımına dair bilmeniz gereken her şey — 3D canlı mock-up provasından diş kesim miktarına, E-Max ömründen lazerli pembe estetiğe kadar tüm detaylar.',
    packages: [
      {
        name: '16 Üye İsviçre E-Max Lamina Tam Gülüş Tasarımı',
        brand: 'Ivoclar Vivadent IPS e.max Press (İsviçre)',
        duration: '5-6 İş Günü (3-4 Seans)',
        img: '/packages/pkg-4.webp',
        popular: true,
        included: [
          '16 Adet Özel El İşçiliği İsviçre Ivoclar E-Max Porselen Yaprak Lamina',
          '3Shape 3D Ağız İçi Tarama ve Yüksek Çözünürlüklü Yapay Zeka Gülüş Simülasyonu',
          'Dişe hiç dokunulmadan önce ağızda canlı reçine mock-up provası',
          'Mikroskop altında ultra koruyucu minimum mine aşındırması (0.3-0.5 mm)',
          'Diyot Lazer ile Diş Eti Seviyeleme (Pembe Estetik) ve Simetri Hizalaması',
          'Laboratuvar üretim sürecinde kullanılacak estetik geçici laminalar',
          'VIP Havalimanı ve Klinik Transferleri + 5 Yıldızlı Otel Konaklama Paketi'
        ],
        price: { USD: '$3,800', EUR: '€3,450', GBP: '£3,050' }
      },
      {
        name: '20 Üye Komple Hollywood Smile Elite Dönüşüm Paketi',
        brand: 'İsviçre E-Max / 1200+ MPa Alman Monolitik Zirkonyum',
        duration: '6 İş Günü (4 Seans)',
        img: '/packages/pkg-5.webp',
        included: [
          '20 Adet Üst ve Alt Çene Estetik Restorasyon (Tam Çene Gülüş Arkı)',
          'Yüzün altın oranına ve dudak hareketlerine göre kişiselleştirilmiş tam mimari planlama',
          'Çift aşamalı prova: Bis-GMA önizleme + ham porselen prova ve renk uyumlama',
          'Lazerle yumuşak doku depigmentasyonu ve estetik gingivoplasti dahil',
          'Elmas partiküllü yüksek cila ve Variolink Esthetic dual-cure bonding yapıştırma',
          'Kişiye özel 3D gece koruyucu plağı ve seyahat bakım kiti dahil',
          'Ömür Boyu Klinik Kalite Garantisi ve VIP Konsiyerj Hizmeti'
        ],
        price: { USD: '$4,950', EUR: '€4,500', GBP: '£3,950' }
      },
      {
        name: 'Dijital Gülüş Tasarımı & 8 Lamina Ön Bölge Odak Paketi',
        brand: 'Ivoclar IPS e.max CAD / Prime Zirkonyum',
        duration: '4-5 İş Günü (3 Seans)',
        img: '/packages/pkg-6.webp',
        included: [
          'Görünen gülüş hattını kapsayan 8 Adet Üst Ön E-Max Yaprak Porselen',
          '3D Dijital Gülüş Tasarımı stüdyo fotoğraf ve video analizi',
          'Doğal diş minesinin ışık geçirgenliğini birebir taklit eden renk geçişleri',
          'Wand bilgisayarlı anestezi ile tamamen ağrısız ve konforlu işlem',
          'Simantasyon sonrası oklüzyon dengelemesi ve mikron düzeyinde cila',
          'VIP Havalimanı ve Otel Transferleri Dahil'
        ],
        price: { USD: '$2,100', EUR: '€1,920', GBP: '£1,690' }
      }
    ],
    faqs: [
      {
        q: 'Gülüş Tasarımı (Smile Makeover) nedir ve nasıl kişiselleştirilir?',
        a: [
          'Gülüş Tasarımı, hastanın yüz hatları, dudak yapısı, ten rengi ve estetik beklentileri doğrultusunda hem estetik hem de fonksiyonel olarak yeniden planlanan kapsamlı bir tedavidir. Çoğunlukla İsviçre Ivoclar E-Max yaprak porselenler, monolitik zirkonyum kaplamalar, lazerle diş eti estetiği (gingivoplasti) ve diş beyazlatma işlemlerinin kombinasyonunu içerir.',
          'Master Smile Studio olarak standart kalıp dişler uygulamıyoruz. 3Shape 3D dijital tarayıcılar ve yapay zeka destekli gülüş tasarımı yazılımları ile yüzünüzün altın oranını hesaplayarak tamamen size özel doğal bir gülüş inşa ediyoruz.'
        ]
      },
      {
        q: '3D Dijital Gülüş Tasarımı ve canlı mock-up provası nasıl yapılır?',
        a: [
          'İlk randevunuzda profesyonel stüdyo fotoğraflarınız ve 3D ağız içi dijital taramanız alınır. Bilgisayar ortamında yüzünüze en uygun diş boyu, genişliği ve formu tasarlanır.',
          'Dişlerinize hiçbir işlem yapılmadan ve kesim uygulanmadan önce, tasarlanan yeni dişler 3D yazıcıdan reçine olarak çıkartılır ve ağzınıza takılarak canlı mock-up provası yapılır. Aynada yeni gülüşünüzü somut olarak görür, hekiminizle birlikte onayladıktan sonra tedaviye başlarsınız.'
        ]
      },
      {
        q: 'Antalya’da komple bir Gülüş Tasarımı için kaç gün kalmalıyım?',
        a: [
          '16 ila 20 üyeden oluşan komple bir İsviçre E-Max lamina veya zirkonyum gülüş tasarımı tedavisi genellikle sadece 5-6 iş günü (3 ila 4 klinik seansı) sürer.',
          'Kendi bünyemizdeki master diş laboratuvarımızda laminalarınız özel el işçiliğiyle katmanlanır. Seans aralarında geçici estetik dişlerinizle Antalya’nın tarihi ve turistik güzelliklerini rahatlıkla gezebilirsiniz.'
        ]
      },
      {
        q: 'Gülüş tasarımı için dişler çok fazla kesilir mi veya küçültülür mü?',
        a: [
          'Hayır. Kliniğimizde biyomimetik ve minimal invaziv diş hekimliği ilkelerini uygularız. İsviçre E-Max porselen laminalarda sadece dişin ön yüzeyinden 0.3 mm - 0.5 mm (kontakt lens kalınlığında) mikroskobik pürüzlendirme yapılır.',
          'Pek çok vakada "No-Prep" (kesimsiz) teknikle dişe hiç dokunulmadan lamina yapıştırılabilir. Tam kuron kesimi yalnızca aşırı çürük, kırık veya kanal tedavili dişlerde tercih edilir.'
        ]
      },
      {
        q: 'Gülüş tasarımı tedavisi ağrılı veya acılı bir süreç midir?',
        a: [
          'Kesinlikle hayır. İşlemlerin tamamı bilgisayarlı ağrısız anestezi (The Wand) altında gerçekleştirilir. Diş hazırlığı veya ölçü alımı sırasında en ufak bir ağrı hissetmezsiniz.',
          'Tedavi sonrasında dişlerin alışma sürecinde birkaç gün hafif soğuk-sıcak hassasiyeti oluşabilir, diş etleri yeni restorasyonlara uyum sağladıkça bu durum tamamen geçer.'
        ]
      },
      {
        q: 'E-Max porselen laminaların ve gülüş tasarımının ömrü ne kadardır?',
        a: [
          'İsviçre Ivoclar E-Max porselen laminalar ve Alman Zirkonyum restorasyonlar, düzenli ağız bakımı ile ortalama 15-20 yıl ve üzeri ömre sahiptir.',
          'Lityum disilikat cam seramik gözeneksiz yapısı sayesinde çay, kahve, sigara veya kırmızı şaraptan asla leke tutmaz ve rengi yıllar boyu ilk günkü parlaklığında kalır.'
        ]
      },
      {
        q: 'E-Max lamina ile Zirkonyum kaplama arasındaki fark nedir?',
        a: [
          'E-Max (lityum disilikat cam seramik), ışık geçirgenliği ve saydamlık açısından doğal diş minesini birebir taklit eder. Ön diş estetiğinde ve gülüş tasarımında altın standarttır.',
          'Zirkonyum (1200+ MPa) ise yüksek kırılma direncine sahiptir; bu nedenle arka azı dişlerinde, köprülerde veya diş sıkma alışkanlığı olan hastalarda mükemmel bir dayanıklılık sağlar.'
        ]
      },
      {
        q: 'Gummy smile (diş eti görünümü) veya çapraşıklık gülüş tasarımıyla düzelir mi?',
        a: [
          'Evet. Gülüş tasarımı tüm estetik kusurları tek bir tedavi planında çözer. Gülerken diş etleriniz fazla görünüyorsa 15 dakikalık kansız ve dikişsiz diyot lazer uygulaması ile diş etleriniz kusursuz seviyelenir.',
          'Hafif ve orta derece çapraşıklıklar, dişler arasındaki boşluklar (diastema) ve asimetriler laminalar ile ortodontik tel tedavisine gerek kalmadan 5 günde tamamen düzeltilir.'
        ]
      }
    ]
  },
  de: {
    packagesTitle: 'Smile Makeover Pakete & Währungsrechner',
    packagesSubtitle: 'Individuelles 3D Digital Smile Design, Schweizer Ivoclar E-Max Veneers und ganzheitliche ästhetische Rekonstruktionen für natürliche Lumineszenz und perfekten Goldenen Schnitt in Antalya.',
    mostPopularBadge: 'Beliebteste Wahl',
    durationLabel: 'Behandlungsdauer:',
    includedLabel: 'Paketumfang:',
    priceLabel: 'Paketpreis:',
    getQuoteBtn: 'Kostenloses Angebot anfordern',
    faqTitle: 'Häufig gestellte Fragen zum Smile Makeover',
    faqSubtitle: 'Alles, was Sie über das Smile Makeover in Antalya wissen müssen — von der 3D-Mock-up-Anprobe über minimale Präparation bis hin zur Langlebigkeit von Schweizer E-Max Veneers.',
    packages: [
      {
        name: 'Full Arc 16-Veneer Schweizer E-Max Smile Makeover',
        brand: 'Ivoclar Vivadent IPS e.max Press (Schweiz)',
        duration: '5-6 Arbeitstage (3-4 Termine)',
        img: '/packages/pkg-4.webp',
        popular: true,
        included: [
          '16 handgeschichtete Schweizer Ivoclar E-Max Keramikveneers',
          '3Shape 3D-Intraoralscan und hochauflösende KI-Lächelnsimulation',
          'Live-Mock-up-Anprobe im Mund vor jeglicher Zahnpräparation',
          'Minimalinvasive mikro-feine Schmelzpräparation (0,3 - 0,5 mm)',
          'Diodenlaser-Zahnfleischkorrektur (Gingivoplastik) für rosa Ästhetik',
          'Ästhetische temporäre Veneers während der Laborfertigung',
          'VIP Flughafen- und Kliniktransfers + 5-Sterne-Hotelpaket'
        ],
        price: { USD: '$3,800', EUR: '€3,450', GBP: '£3,050' }
      },
      {
        name: '20 Einheiten Komplettes Elite Hollywood Transformation',
        brand: 'Schweizer E-Max / 1200+ MPa Deutsches Zirkonium Monolithisch',
        duration: '6 Arbeitstage (4 Termine)',
        img: '/packages/pkg-5.webp',
        included: [
          '20 Premium-Einheiten (Ober- und Unterkiefer voller Lächelbogen)',
          'Analyse des Goldenen Schnitts und der Lippenästhetik',
          'Zweistufige Anprobe: Bis-GMA-Vorschau + Rohkeramik-Farbabgleich',
          'Laser-Depigmentierung und Zahnfleischharmonisierung inklusive',
          'Diamant-Hochglanzpolitur und Variolink Esthetic Adhäsivbefestigung',
          'Individuelle 3D-Aufbissschiene und Reisedental-Set inklusive',
          'Lebenslange Klinikgarantie und VIP-Concierge-Betreuung'
        ],
        price: { USD: '$4,950', EUR: '€4,500', GBP: '£3,950' }
      },
      {
        name: 'Digital Smile Design & 8 Frontzahn-Veneers Fokus',
        brand: 'Ivoclar IPS e.max CAD / Prime Zirkon',
        duration: '4-5 Arbeitstage (3 Termine)',
        img: '/packages/pkg-6.webp',
        included: [
          '8 E-Max Veneers für den sichtbaren oberen Frontzahnbereich',
          '3D Digital Smile Design Fotostudio- und Videoanalyse',
          'Farbabstimmung mit natürlichem Transluzenzverlauf',
          'Schmerzfreie computergestützte Wand-Lokalanästhesie',
          'Bisskalibrierung nach Einsetzen und Hochglanzpolitur',
          'VIP Flughafen- und Hoteltransfers inklusive'
        ],
        price: { USD: '$2,100', EUR: '€1,920', GBP: '£1,690' }
      }
    ],
    faqs: [
      {
        q: 'Was ist ein Smile Makeover und wie wird es individuell angepasst?',
        a: [
          'Ein Smile Makeover ist eine maßgeschneiderte ästhetische und funktionelle Gesamtrehabilitation Ihres Lächelns, abgestimmt auf Ihre Gesichtsproportionen, Lippenbewegung und persönlichen Wünsche. Es kombiniert Schweizer Ivoclar E-Max Veneers, Zirkonkronen, Laser-Zahnfleischästhetik und Bleaching.',
          'Bei Master Smile Studio Antalya verwenden wir modernste 3Shape 3D-Scanner und KI-gestützte Designsoftware, um Ihr Lächeln nach dem Goldenen Schnitt vollkommen natürlich zu gestalten.'
        ]
      },
      {
        q: 'Wie funktioniert das 3D Digital Smile Design und die Mock-up-Probe?',
        a: [
          'Beim ersten Termin erstellen wir hochauflösende Porträtfotos und einen 3D-Scan. Auf dem Computer modellieren wir Ihr ideales Lächeln.',
          'Vor dem Beschleifen drucken wir ein 3D-Kunststoff-Mock-up und probieren es direkt in Ihrem Mund an. So sehen Sie Ihr zukünftiges Lächeln vorab im Spiegel und können jedes Detail mitgestalten.'
        ]
      },
      {
        q: 'Wie viele Tage muss ich für ein komplettes Smile Makeover in Antalya einplanen?',
        a: [
          'Ein vollständiges Smile Makeover mit 16 bis 20 Schweizer E-Max Veneers oder Zirkonkronen dauert in der Regel nur 5 bis 6 Arbeitstage (3 bis 4 Sitzungen).',
          'Zwischen den Terminen tragen Sie komfortable temporäre Veneers und können entspannt Antalya entdecken.'
        ]
      },
      {
        q: 'Müssen meine Zähne stark abgeschliffen werden?',
        a: [
          'Nein. Wir arbeiten strikt nach Prinzipien der minimalinvasiven Zahnmedizin. Für E-Max Veneers tragen wir lediglich 0,3 bis 0,5 mm des äußeren Schmelzes ab (kontaktlinsendünn). Vollkronen werden nur bei stark geschädigten Zähnen verwendet.'
        ]
      },
      {
        q: 'Ist die Behandlung schmerzhaft?',
        a: [
          'Überhaupt nicht. Alle Schritte erfolgen unter sanfter, computergesteuerter Lokalanästhesie. Sie spüren während der gesamten Behandlung keinerlei Schmerzen.'
        ]
      },
      {
        q: 'Wie lange halten E-Max Veneers?',
        a: [
          'Schweizer Ivoclar E-Max Veneers haben bei normaler Mundhygiene eine Lebensdauer von 15 bis 20+ Jahren. Die Keramik ist vollkommen resistent gegen Verfärbungen durch Kaffee, Tee oder Tabak.'
        ]
      },
      {
        q: 'Was ist der Unterschied zwischen E-Max und Zirkon?',
        a: [
          'E-Max bietet maximale Lichtdurchlässigkeit und ist der Goldstandard für Frontzähne. Zirkonium bietet extrem hohe Festigkeit (1200+ MPa) und eignet sich ideal für Backenzähne und Brücken.'
        ]
      },
      {
        q: 'Kann ein Gummy Smile oder eine Zahnlücke korrigiert werden?',
        a: [
          'Ja. Ein Gummy Smile wird mit einem schmerzlosen Diodenlaser in 15 Minuten korrigiert. Zahnlücken (Diastema) und leichte Schiefstände werden mit Veneers in wenigen Tagen dauerhaft behoben.'
        ]
      }
    ]
  },
  pl: {
    packagesTitle: 'Pakiety Smile Makeover i Kalkulator Walut',
    packagesSubtitle: 'Indywidualne projektowanie 3D Digital Smile Design, szwajcarskie licówki Ivoclar E-Max oraz kompleksowa odbudowa estetyczna w Antalyi.',
    mostPopularBadge: 'Najchętniej Wybierany',
    durationLabel: 'Czas zabiegu:',
    includedLabel: 'Zawartość pakietu:',
    priceLabel: 'Cena pakietu:',
    getQuoteBtn: 'Otrzymaj Darmową Wycenę',
    faqTitle: 'Często zadawane pytania o Smile Makeover',
    faqSubtitle: 'Wszystko o metamorfozie uśmiechu w Antalyi — od próbnego mock-up 3D po trwałość szwajcarskich licówek E-Max.',
    packages: [
      {
        name: 'Pełny Łuk 16 Licówek Szwajcarskich E-Max',
        brand: 'Ivoclar Vivadent IPS e.max Press (Szwajcaria)',
        duration: '5-6 Dni Roboczych (3-4 Wizyty)',
        img: '/packages/pkg-4.webp',
        popular: true,
        included: [
          '16 Ręcznie warstwowanych szwajcarskich licówek ceramicznych Ivoclar E-Max',
          'Skanowanie 3D 3Shape i cyfrowa symulacja uśmiechu AI',
          'Przymiarka mock-up na żywo w ustach przed szlifowaniem',
          'Minimalnie inwazyjne opracowanie szkliwa (0.3-0.5 mm)',
          'Laserowa korekta linii dziąseł (różowa estetyka)',
          'Estetyczne licówki tymczasowe na czas oczekiwania',
          'Transfery VIP lotnisko-klinika + pakiet hotelowy 5 gwiazdek'
        ],
        price: { USD: '$3,800', EUR: '€3,450', GBP: '£3,050' }
      },
      {
        name: '20 Jednostek Kompleksowa Transformacja Hollywood Smile',
        brand: 'Szwajcarski E-Max / Niemiecki Cyrkon Monolityczny 1200+ MPa',
        duration: '6 Dni Roboczych (4 Wizyty)',
        img: '/packages/pkg-5.webp',
        included: [
          '20 Jednostek estetycznych (Górny i Dolny pełny łuk uśmiechu)',
          'Rekonstrukcja estetyczna według Złotego Podziału twarzy',
          'Podwójna przymiarka: mock-up + przymiarka surowej ceramiki',
          'Laserowa depigmentacja i gingiwoplastyka w cenie',
          'Polerowanie diamentowe i klejenie Variolink Esthetic',
          'Indywidualna szyna relaksacyjna 3D i zestaw podróżny',
          'Dożywotnia Gwarancja Kliniki i obsługa VIP Concierge'
        ],
        price: { USD: '$4,950', EUR: '€4,500', GBP: '£3,950' }
      },
      {
        name: 'Digital Smile Design i 8 Licówek Odcinek Przedni',
        brand: 'Ivoclar IPS e.max CAD / Prime Zirconia',
        duration: '4-5 Dni Roboczych (3 Wizyty)',
        img: '/packages/pkg-6.webp',
        included: [
          '8 Licówek E-Max na górne zęby widoczne przy uśmiechu',
          'Analiza fotograficzna i wideo 3D Digital Smile Design',
          'Idealne dopasowanie odcienia z naturalną przeziernością',
          'Komputerowe bezbolesne znieczulenie The Wand',
          'Dopasowanie okluzji i mikropolerowanie',
          'Transfery VIP lotnisko-hotel w cenie'
        ],
        price: { USD: '$2,100', EUR: '€1,920', GBP: '£1,690' }
      }
    ],
    faqs: [
      {
        q: 'Czym jest Smile Makeover i jak przebiega personalizacja?',
        a: [
          'Smile Makeover to kompleksowa rekonstrukcja estetyczna i funkcjonalna dopasowana do geometrii twarzy, linii warg i odcienia skóry pacjenta. Łączy szwajcarskie licówki E-Max, korony cyrkonowe i laserową korektę dziąseł.',
          'W Master Smile Studio projektujemy uśmiech przy użyciu skanerów 3D 3Shape i oprogramowania AI według Złotego Podziału twarzy.'
        ]
      },
      {
        q: 'Jak działa cyfrowe projektowanie 3D i przymiarka mock-up?',
        a: [
          'Podczas pierwszej wizyty wykonujemy skany 3D i zdjęcia. Drukujemy model z żywicy i nakładamy go na zęby, aby pacjent mógł zobaczyć swój przyszły uśmiech w lustrze przed jakimkolwiek szlifowaniem.'
        ]
      },
      {
        q: 'Ile dni trwa zabieg w Antalyi?',
        a: [
          'Zabieg trwa zazwyczaj 5 do 6 dni roboczych (3-4 wizyty w klinice). W międzyczasie pacjent nosi estetyczne licówki tymczasowe.'
        ]
      },
      {
        q: 'Czy zęby są mocno szlifowane?',
        a: [
          'Nie. Stosujemy stomatologię biomimetyczną. Zdejmujemy zaledwie 0.3-0.5 mm szkliwa. W wielu przypadkach możliwe jest wykonanie licówek bez szlifowania (No-Prep).'
        ]
      },
      {
        q: 'Czy zabieg jest bolesny?',
        a: [
          'Nie. Stosujemy komputerowe znieczulenie The Wand, dzięki czemu cały proces jest w 100% bezbolesny.'
        ]
      },
      {
        q: 'Jaka jest trwałość licówek E-Max?',
        a: [
          'Licówki E-Max zachowują trwałość przez 15-20+ lat i są całkowicie odporne na przebarwienia od kawy, herbaty czy tytoniu.'
        ]
      },
      {
        q: 'Czym różni się E-Max od Cyrkonu?',
        a: [
          'E-Max zapewnia najwyższą przezierność i naturalność w odcinku przednim, natomiast cyrkon (1200+ MPa) gwarantuje maksymalną wytrzymałość mechaniczną.'
        ]
      },
      {
        q: 'Czy można skorygować uśmiech dziąsłowy lub przerwę między zębami?',
        a: [
          'Tak. Uśmiech dziąsłowy korygujemy bezkrwawym laserem diodowym w 15 minut, a diastemy zamykamy licówkami w kilka dni.'
        ]
      }
    ]
  },
  pt: {
    packagesTitle: 'Pacotes Smile Makeover e Calculadora de Moeda',
    packagesSubtitle: 'Design Digital do Sorriso 3D personalizado, facetas suíças Ivoclar E-Max e transformação estética completa em Antalya.',
    mostPopularBadge: 'Mais Popular',
    durationLabel: 'Duração do Tratamento:',
    includedLabel: 'Inclusões do Pacote:',
    priceLabel: 'Preço do Pacote:',
    getQuoteBtn: 'Pedir Orçamento Grátis',
    faqTitle: 'Perguntas Frequentes sobre Smile Makeover',
    faqSubtitle: 'Tudo o que precisa de saber sobre o design do sorriso em Antalya — desde a prova de mock-up ao vivo até à durabilidade das facetas E-Max.',
    packages: [
      {
        name: 'Transformação 16 Facetas Suíças Ivoclar E-Max',
        brand: 'Ivoclar Vivadent IPS e.max Press (Suíça)',
        duration: '5-6 Dias Úteis (3-4 Consultas)',
        img: '/packages/pkg-4.webp',
        popular: true,
        included: [
          '16 Facetas cerâmicas artesanais suíças Ivoclar E-Max',
          'Digitalização intraoral 3Shape 3D e simulação de IA',
          'Prova de mock-up em resina na boca antes do desgaste dental',
          'Desgaste ultraconservador do esmalte (0,3 a 0,5 mm)',
          'Harmonização gengival a laser de díodo (estética rosa)',
          'Facetas provisórias estéticas durante o fabrico',
          'Transfers VIP aeroporto-clínica + hotel 5 estrelas'
        ],
        price: { USD: '$3,800', EUR: '€3,450', GBP: '£3,050' }
      },
      {
        name: '20 Unidades Transformação Elite Hollywood Smile',
        brand: 'E-Max Suíço / Zircónia Alemã Monolítica 1200+ MPa',
        duration: '6 Dias Úteis (4 Consultas)',
        img: '/packages/pkg-5.webp',
        included: [
          '20 Unidades estéticas (Arcada superior e inferior completa)',
          'Reconstrução estética baseada na Proporção Áurea facial',
          'Dupla prova: prévia Bis-GMA + prova de cerâmica em bruto',
          'Gengivoplastia estética e despigmentação a laser incluídas',
          'Polimento com partículas de diamante e cimentação adesiva',
          'Goteira noturna 3D e kit de viagem incluídos',
          'Garantia Vitalícia da Clínica e serviço de Concierge VIP'
        ],
        price: { USD: '$4,950', EUR: '€4,500', GBP: '£3,950' }
      },
      {
        name: 'Design Digital do Sorriso & 8 Facetas Frontais',
        brand: 'Ivoclar IPS e.max CAD / Prime Zirconia',
        duration: '4-5 Dias Úteis (3 Consultas)',
        img: '/packages/pkg-6.webp',
        included: [
          '8 Facetas E-Max na zona estética do sorriso superior',
          'Análise em estúdio fotográfico e vídeo 3D DSD',
          'Gradiente de cor com translucidez natural idêntica ao esmalte',
          'Anestesia computadorizada The Wand totalmente indolor',
          'Equilíbrio oclusal e polimento de alta precisão',
          'Transfers VIP aeroporto e hotel incluídos'
        ],
        price: { USD: '$2,100', EUR: '€1,920', GBP: '£1,690' }
      }
    ],
    faqs: [
      {
        q: 'O que é o Smile Makeover e como é personalizado?',
        a: [
          'O Smile Makeover é uma reabilitação estética e funcional personalizada de acordo com as proporções faciais, linha labial e objetivos do paciente. Combina facetas cerâmicas E-Max, zircónia, gengivoplastia a laser e branqueamento.',
          'No Master Smile Studio usamos scanners 3D e tecnologia de IA para desenhar o sorriso ideal respeitando a Proporção Áurea.'
        ]
      },
      {
        q: 'Como funciona a prova do mock-up 3D em boca?',
        a: [
          'Digitalizamos a boca em 3D e imprimimos uma réplica em resina que é colocada sobre os dentes sem qualquer desgaste prévio. O paciente vê o resultado no espelho antes de iniciar o tratamento.'
        ]
      },
      {
        q: 'Quantos dias são necessários em Antalya?',
        a: [
          'Geralmente são necessários 5 a 6 dias úteis (3 a 4 consultas clínicas).'
        ]
      },
      {
        q: 'Os dentes são muito desgastados?',
        a: [
          'Não. Praticamos odontologia minimamente invasiva, com desgaste superficial de apenas 0,3 a 0,5 mm.'
        ]
      },
      {
        q: 'O procedimento é doloroso?',
        a: [
          'Não. Todo o processo é realizado com anestesia local computadorizada e indolor.'
        ]
      },
      {
        q: 'Qual é a durabilidade das facetas E-Max?',
        a: [
          'As facetas E-Max duram entre 15 a 20+ anos e não mancham com café, vinho ou tabaco.'
        ]
      },
      {
        q: 'Qual é a diferença entre E-Max e Zircónia?',
        a: [
          'E-Max oferece máxima translucidez para os dentes anteriores. A zircónia (1200+ MPa) garante resistência extrema para molares e pontes.'
        ]
      },
      {
        q: 'Pode corrigir sorriso gengival ou dentes tortos?',
        a: [
          'Sim. O sorriso gengival é alinhado com laser em 15 minutos e pequenos desalinhamentos ou diastemas são corrigidos em poucos dias.'
        ]
      }
    ]
  },
  es: {
    packagesTitle: 'Paquetes de Diseño de Sonrisa y Calculadora de Divisas',
    packagesSubtitle: 'Diseño Digital de Sonrisa 3D personalizado, carillas suizas Ivoclar E-Max y transformación estética completa en Antalya.',
    mostPopularBadge: 'Más Popular',
    durationLabel: 'Duración del Tratamiento:',
    includedLabel: 'Inclusiones del Paquete:',
    priceLabel: 'Precio del Paquete:',
    getQuoteBtn: 'Solicitar Presupuesto Gratis',
    faqTitle: 'Preguntas Frecuentes sobre el Smile Makeover',
    faqSubtitle: 'Todo lo que necesita saber sobre el diseño de sonrisa en Antalya — desde la prueba de mock-up en vivo hasta la durabilidad de las carillas E-Max.',
    packages: [
      {
        name: 'Transformación 16 Carillas Suizas Ivoclar E-Max',
        brand: 'Ivoclar Vivadent IPS e.max Press (Suiza)',
        duration: '5-6 Días Laborables (3-4 Citas)',
        img: '/packages/pkg-4.webp',
        popular: true,
        included: [
          '16 Carillas cerámicas artesanales suizas Ivoclar E-Max',
          'Escaneo intraoral 3Shape 3D y simulación con IA',
          'Prueba de mock-up en resina en boca antes del tallado',
          'Tallado ultraconservador del esmalte (0,3 a 0,5 mm)',
          'Armonización gingival con láser de diodo (estética rosa)',
          'Carillas provisionales estéticas durante la fabricación',
          'Traslados VIP aeropuerto-clínica + hotel de 5 estrellas'
        ],
        price: { USD: '$3,800', EUR: '€3,450', GBP: '£3,050' }
      },
      {
        name: '20 Unidades Transformación Elite Hollywood Smile',
        brand: 'E-Max Suizo / Circonio Alemán Monolítico 1200+ MPa',
        duration: '6 Días Laborables (4 Citas)',
        img: '/packages/pkg-5.webp',
        included: [
          '20 Unidades estéticas (Arcada superior e inferior completa)',
          'Reconstrucción estética basada en la Proporción Áurea facial',
          'Doble prueba: previa Bis-GMA + prueba de cerámica en bruto',
          'Gingivoplastia estética y despigmentación con láser incluidas',
          'Pulido con partículas de diamante y cementación adhesiva',
          'Férula de descarga 3D y kit de viaje incluidos',
          'Garantía de por vida de la clínica y servicio de Concierge VIP'
        ],
        price: { USD: '$4,950', EUR: '€4,500', GBP: '£3,950' }
      },
      {
        name: 'Diseño Digital de Sonrisa & 8 Carillas Frontales',
        brand: 'Ivoclar IPS e.max CAD / Prime Zirconia',
        duration: '4-5 Días Laborables (3 Citas)',
        img: '/packages/pkg-6.webp',
        included: [
          '8 Carillas E-Max en la zona estética visible superior',
          'Análisis en estudio fotográfico y vídeo 3D DSD',
          'Gradiente de color con translucidez natural idéntica al esmalte',
          'Anestesia computarizada The Wand totalmente indolora',
          'Equilibrio oclusal y pulido de alta precisión',
          'Traslados VIP aeropuerto y hotel incluidos'
        ],
        price: { USD: '$2,100', EUR: '€1,920', GBP: '£1,690' }
      }
    ],
    faqs: [
      {
        q: '¿Qué es el Smile Makeover y cómo se personaliza?',
        a: [
          'El Smile Makeover es una rehabilitación estética integral adaptada a la geometría facial, labios y tono de piel del paciente mediante carillas E-Max, circonio y láser.',
          'En Master Smile Studio utilizamos tecnología 3D y software de IA para diseñar una sonrisa que cumpla con la Proporción Áurea de su rostro.'
        ]
      },
      {
        q: '¿Cómo funciona la prueba de mock-up en vivo?',
        a: [
          'Antes de tocar ningún diente, colocamos un mock-up de resina impreso en 3D sobre sus dientes para que vea y apruebe el resultado en el espejo.'
        ]
      },
      {
        q: '¿Cuántos días se necesitan en Antalya?',
        a: [
          'Generalmente entre 5 y 6 días laborables (3 a 4 citas clínicas).'
        ]
      },
      {
        q: '¿Se tallan mucho los dientes?',
        a: [
          'No. Aplicamos odontología mínimamente invasiva con un tallado superficial de solo 0,3 a 0,5 mm.'
        ]
      },
      {
        q: '¿Es doloroso el tratamiento?',
        a: [
          'En absoluto. Se realiza con anestesia local computarizada sin dolor.'
        ]
      },
      {
        q: '¿Cuánto duran las carillas E-Max?',
        a: [
          'Tienen una vida útil de 15 a 20+ años y no se manchan con café, té ni tabaco.'
        ]
      },
      {
        q: '¿Cuál es la diferencia entre E-Max y Circonio?',
        a: [
          'E-Max ofrece máxima translucidez para los dientes frontales. El circonio proporciona máxima resistencia para molares y puentes.'
        ]
      },
      {
        q: '¿Se puede corregir la sonrisa gingival o los espacios entre dientes?',
        a: [
          'Sí. El exceso de encía se corrige con láser en 15 minutos y las diastemas se cierran con carillas en pocos días.'
        ]
      }
    ]
  },
  ru: {
    packagesTitle: 'Пакеты Smile Makeover и Калькулятор Валют',
    packagesSubtitle: 'Индивидуальный 3D цифровой дизайн улыбки, швейцарские виниры Ivoclar E-Max и комплексная эстетическая реабилитация в Анталье.',
    mostPopularBadge: 'Самый Популярный',
    durationLabel: 'Срок лечения:',
    includedLabel: 'В стоимость входит:',
    priceLabel: 'Цена пакета:',
    getQuoteBtn: 'Получить Бесплатный Расчет',
    faqTitle: 'Часто задаваемые вопросы о Smile Makeover',
    faqSubtitle: 'Все о дизайне улыбки в Анталье — от живой примерки mock-up до долговечности швейцарских виниров E-Max.',
    packages: [
      {
        name: 'Полный Комплекс 16 Швейцарских Виниров E-Max',
        brand: 'Ivoclar Vivadent IPS e.max Press (Швейцария)',
        duration: '5-6 Рабочих Дней (3-4 Визита)',
        img: '/packages/pkg-4.webp',
        popular: true,
        included: [
          '16 Авторских керамических виниров Ivoclar E-Max ручной работы',
          '3D сканирование 3Shape и цифровая симуляция улыбки с ИИ',
          'Примерка mock-up в полости рта до начала препарирования',
          'Микропрепарирование эмали с сохранением зуба (0.3-0.5 мм)',
          'Лазерная коррекция десневого контура (розовая эстетика)',
          'Эстетические временные виниры на время изготовления',
          'VIP трансферы аэропорт-клиника + отель 5 звезд'
        ],
        price: { USD: '$3,800', EUR: '€3,450', GBP: '£3,050' }
      },
      {
        name: '20 Единиц Премиум Голливудская Улыбка Элит',
        brand: 'Швейцарский E-Max / Немецкий Монолитный Цирконий 1200+ МПа',
        duration: '6 Рабочих Дней (4 Визита)',
        img: '/packages/pkg-5.webp',
        included: [
          '20 Эстетических единиц (Верхняя и нижняя челюсть полностью)',
          'Реконструкция по Золотому Сечению лица и динамике улыбки',
          'Двойная примерка: mock-up + примерка сырой керамики',
          'Лазерная гингивопластика и депигментация десен включены',
          'Алмазная полировка и фиксация Variolink Esthetic',
          'Индивидуальная ночная капа 3D и дорожный набор',
          'Пожизненная гарантия клиники и VIP консьерж-сервис'
        ],
        price: { USD: '$4,950', EUR: '€4,500', GBP: '£3,950' }
      },
      {
        name: 'Digital Smile Design и 8 Виниров Зоны Улыбки',
        brand: 'Ivoclar IPS e.max CAD / Prime Zirconia',
        duration: '4-5 Рабочих Дней (3 Визита)',
        img: '/packages/pkg-6.webp',
        included: [
          '8 Виниров E-Max на передние зубы зоны улыбки',
          'Фотостудийный и видео 3D анализ улыбки',
          'Градация цвета с естественной прозрачностью эмали',
          'Компьютерная безболезненная анестезия The Wand',
          'Окклюзионная калибровка и высокоточная полировка',
          'VIP трансферы аэропорт-отель включены'
        ],
        price: { USD: '$2,100', EUR: '€1,920', GBP: '£1,690' }
      }
    ],
    faqs: [
      {
        q: 'Что такое Smile Makeover и как он индивидуализируется?',
        a: [
          'Smile Makeover — это комплексное преображение улыбки с учетом анатомии лица, формы губ и оттенка кожи. Включает виниры E-Max, коронки из диоксида циркония и лазерную эстетику десен.',
          'В Master Smile Studio мы создаем индивидуальную улыбку с помощью 3D сканеров 3Shape и ИИ по правилу Золотого Сечения.'
        ]
      },
      {
        q: 'Как проходит примерка живого 3D mock-up?',
        a: [
          'До обточки зубов мы примеряем напечатанный на 3D-принтере полимерный макет будущих зубов. Вы оцениваете результат в зеркале до начала манипуляций.'
        ]
      },
      {
        q: 'Сколько дней требуется для лечения в Анталье?',
        a: [
          'Обычно требуется от 5 до 6 рабочих дней (3-4 визита в клинику).'
        ]
      },
      {
        q: 'Сильно ли обтачиваются зубы?',
        a: [
          'Нет. Мы используем малоинвазивные технологии: толщина препарирования составляет всего 0.3-0.5 мм (как контактная линза).'
        ]
      },
      {
        q: 'Болезненна ли процедура?',
        a: [
          'Нет. Процедура проводится под компьютерной анестезией The Wand и полностью безболезненна.'
        ]
      },
      {
        q: 'Каков срок службы виниров E-Max?',
        a: [
          'Виниры E-Max служат 15-20+ лет и не окрашиваются кофе, чаем или табаком.'
        ]
      },
      {
        q: 'В чем разница между E-Max и Цирконием?',
        a: [
          'E-Max обеспечивает непревзойденную прозрачность для зоны улыбки. Цирконий (1200+ МПа) гарантирует максимальную прочность для жевательных зубов.'
        ]
      },
      {
        q: 'Можно ли исправить десневую улыбку или промежутки между зубами?',
        a: [
          'Да. Десневая улыбка корректируется диодным лазером за 15 минут, а диастемы устраняются винирами за несколько дней.'
        ]
      }
    ]
  }
};

export default function SmileMakeoverDetailView() {
  const locale = useLocale();
  const dict = DICTIONARIES[locale] || DICTIONARIES.en;

  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  return (
    <>
      <TreatmentCosmeticRightTreatmentAccordion />
      <TreatmentJourneySimpleSection />
      <TreatmentServicesIncludedSection />
      <TreatmentPatientReelsSection />
      <TreatmentBeforeAfterSliderSection />

      {/* Packages Section */}
      <section aria-labelledby="packages-heading" className={styles.packagesSection}>
        <div className={styles.container}>
          <div className={styles.packagesHeader}>
            <h2 id="packages-heading" className={styles.packagesTitle}>
              {dict.packagesTitle}
            </h2>
            <p className={styles.packagesSubtitle}>{dict.packagesSubtitle}</p>

            <div className={styles.currencyToggle}>
              {(['USD', 'EUR', 'GBP'] as const).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => setCurrency(curr)}
                  className={`${styles.currBtn} ${currency === curr ? styles.currBtnActive : ''}`}
                >
                  {curr === 'USD' ? '$ USD' : curr === 'EUR' ? '€ EUR' : '£ GBP'}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className={styles.packagesGrid}>
            {dict.packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`${styles.packageCard} ${pkg.popular ? styles.popularCard : ''}`}
              >
                {pkg.popular && (
                  <div className={styles.badge}>{dict.mostPopularBadge}</div>
                )}

                <div>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.packageName}>{pkg.name}</h3>
                    <p className={styles.packageBrand}>{pkg.brand}</p>
                  </div>

                  <div className={styles.pkgImageWrap}>
                    <img
                      src={pkg.img}
                      alt={pkg.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className={styles.durationRow}>
                    <span className={styles.durationLabel}>{dict.durationLabel}</span>
                    <span className={styles.durationValue}>{pkg.duration}</span>
                  </div>

                  <div className={styles.inclusionsBox}>
                    <p className={styles.inclusionsTitle}>{dict.includedLabel}</p>
                    <ul className={styles.inclusionsList}>
                      {pkg.included.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.priceRow}>
                    <span className={styles.priceLabel}>{dict.priceLabel}</span>
                    <p className={styles.priceValue}>{pkg.price[currency]}</p>
                  </div>
                  <a href="#contact" className={styles.quoteBtn}>
                    {dict.getQuoteBtn}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Horizontal Swipe Track */}
          <div className={styles.mobileTrack}>
            {dict.packages.map((pkg, idx) => (
              <div
                key={idx}
                className={`${styles.packageCard} ${pkg.popular ? styles.popularCard : ''}`}
              >
                {pkg.popular && (
                  <div className={styles.badge}>{dict.mostPopularBadge}</div>
                )}

                <div>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.packageName}>{pkg.name}</h3>
                    <p className={styles.packageBrand}>{pkg.brand}</p>
                  </div>

                  <div className={styles.pkgImageWrap}>
                    <img
                      src={pkg.img}
                      alt={pkg.name}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className={styles.durationRow}>
                    <span className={styles.durationLabel}>{dict.durationLabel}</span>
                    <span className={styles.durationValue}>{pkg.duration}</span>
                  </div>

                  <div className={styles.inclusionsBox}>
                    <p className={styles.inclusionsTitle}>{dict.includedLabel}</p>
                    <ul className={styles.inclusionsList}>
                      {pkg.included.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.priceRow}>
                    <span className={styles.priceLabel}>{dict.priceLabel}</span>
                    <p className={styles.priceValue}>{pkg.price[currency]}</p>
                  </div>
                  <a href="#contact" className={styles.quoteBtn}>
                    {dict.getQuoteBtn}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TreatmentReviewsSection />

      {/* FAQs Section */}
      <section aria-labelledby="faq-heading" className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqHeader}>
            <h2 id="faq-heading" className={styles.faqTitle}>
              {dict.faqTitle}
            </h2>
            <p className={styles.faqSubtitle}>{dict.faqSubtitle}</p>
          </div>

          <div className={styles.faqList}>
            {dict.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className={styles.faqQuestion}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.faqIcon}>{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswer}>
                      {faq.a.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div id="contact">
        <TreatmentInteractiveQuoteForm defaultTreatment="Smile Makeover" />
      </div>
    </>
  );
}
