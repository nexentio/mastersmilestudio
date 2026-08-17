'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentComparisonMatrix.module.css';

interface MatrixRow {
  treatmentName: string;
  treatmentSub: string;
  idealFor: string;
  lifespan: string;
  duration: string;
  preparation: string;
  ratingScore: string;
  href: string;
  actionText: string;
}

interface MatrixCategory {
  tabLabel: string;
  rows: MatrixRow[];
}

interface MatrixDictionary {
  badge: string;
  heading: string;
  subText: string;
  thTreatment: string;
  thIdealFor: string;
  thLifespan: string;
  thDuration: string;
  thPreparation: string;
  thScore: string;
  thAction: string;
  footerNote: string;
  categories: {
    missing: MatrixCategory;
    aesthetic: MatrixCategory;
  };
}

const MATRIX_DATA: Record<string, MatrixDictionary> = {
  en: {
    badge: 'CLINICAL DECISION MATRIX',
    heading: 'Which Dental Treatment Is Right for Your Needs?',
    subText:
      'Compare our core dental disciplines across durability, treatment duration, invasiveness, and aesthetic scores to make an informed medical decision.',
    thTreatment: 'Treatment Solution',
    thIdealFor: 'Ideal Patient Profile',
    thLifespan: 'Lifespan & Guarantee',
    thDuration: 'Time in Istanbul',
    thPreparation: 'Tooth Preparation',
    thScore: 'Aesthetics & Strength',
    thAction: 'Explore Details',
    footerNote:
      '💡 Note: All treatments are planned following 3D CBCT digital scans during your initial consultation at Master Smile Studio.',
    categories: {
      missing: {
        tabLabel: 'Restoring Missing Teeth & Full-Arch Solutions',
        rows: [
          {
            treatmentName: 'Dental Implants',
            treatmentSub: 'Titanium / Straumann',
            idealFor: 'Single or multiple missing teeth; healthy bone volume',
            lifespan: 'Lifetime Warranty (25+ Years)',
            duration: '1–2 Visits (3–5 Days)',
            preparation: 'Zero damage to adjacent teeth',
            ratingScore: '★★★★★ (100% Bone Stability)',
            href: '/treatments/dental-implants',
            actionText: 'View Implants →',
          },
          {
            treatmentName: 'Fixed Dental Bridge',
            treatmentSub: 'Monolithic Zirconia',
            idealFor: '1–3 missing teeth with strong adjacent supporting teeth',
            lifespan: '15–20 Years (5-Yr Guarantee)',
            duration: '4–6 Days (Single Visit)',
            preparation: 'Circumferential shaving of neighbor teeth',
            ratingScore: '★★★★☆ (1200+ MPa Strength)',
            href: '/treatments/dental-bridge',
            actionText: 'View Bridges →',
          },
          {
            treatmentName: 'Snap-On Overdenture',
            treatmentSub: 'Locator Implant Retained',
            idealFor: 'Total tooth loss wanting palate-free solid removable comfort',
            lifespan: '10–15 Years',
            duration: '4–6 Days / 2 Visits',
            preparation: 'Placed on 2–4 mini implants',
            ratingScore: '★★★★☆ (No Slipping or Adhesive)',
            href: '/treatments/dentures',
            actionText: 'View Overdentures →',
          },
          {
            treatmentName: 'All-on-4 / All-on-6',
            treatmentSub: 'Full-Arch Fixed Zirconia',
            idealFor: 'Completely edentulous jaw; seeking permanent non-removable teeth',
            lifespan: 'Lifetime Warranty',
            duration: '2 Visits (3 Days + 5 Days)',
            preparation: 'Full-arch surgical placement',
            ratingScore: '★★★★★ (Ultimate Chewing Power)',
            href: '/treatments/dental-implants/all-on-4-implants',
            actionText: 'View All-on-4 →',
          },
        ],
      },
      aesthetic: {
        tabLabel: 'Cosmetic Smile Makeover & Tooth Protection',
        rows: [
          {
            treatmentName: 'E-Max Porcelain Veneers',
            treatmentSub: 'Swiss Ivoclar Glass-Ceramic',
            idealFor: 'Discolored, chipped, slightly crowded, or gapped front teeth',
            lifespan: '15–20+ Years (5-Yr Guarantee)',
            duration: '4–6 Days (Single Visit)',
            preparation: 'Minimal micro-shaving (0.3–0.5 mm)',
            ratingScore: '★★★★★ (Natural Translucency)',
            href: '/treatments/dental-veneers',
            actionText: 'View Veneers →',
          },
          {
            treatmentName: 'German Zirconia Crowns',
            treatmentSub: 'Monolithic Multi-Layered',
            idealFor: 'Heavily decayed, cracked, or root-canal treated teeth',
            lifespan: '15–20+ Years (5-Yr Guarantee)',
            duration: '4–6 Days (Single Visit)',
            preparation: '360° circumferential reduction',
            ratingScore: '★★★★★ (1200+ MPa Maximum Strength)',
            href: '/treatments/dental-crowns',
            actionText: 'View Crowns →',
          },
          {
            treatmentName: 'Hollywood Smile Makeover',
            treatmentSub: 'Complete Aesthetic Reconstruction',
            idealFor: 'Full aesthetic smile makeover according to golden facial proportions',
            lifespan: '15–20+ Years',
            duration: '4–6 Days (Single Visit)',
            preparation: 'Customized based on veneer/crown mix',
            ratingScore: '★★★★★ (Celebrity Smile Aesthetics)',
            href: '/treatments/cosmetic-dentistry',
            actionText: 'View Hollywood Smile →',
          },
          {
            treatmentName: 'Microscopic Root Canal',
            treatmentSub: 'Carl Zeiss Endodontics',
            idealFor: 'Deep infections, acute toothaches; saving natural roots',
            lifespan: 'Lifetime with crown protection',
            duration: '1–2 Days (1–2 Sessions)',
            preparation: 'Internal canal debridement & seal',
            ratingScore: '★★★★★ (Tooth Preservation)',
            href: '/treatments/general-dentistry',
            actionText: 'View General Dentistry →',
          },
        ],
      },
    },
  },
  tr: {
    badge: 'KLİNİK KARAR MATRİSİ',
    heading: 'Hangi Diş Tedavisi Sizin İçin En Doğru Çözüm?',
    subText:
      'Dayanıklılık, İstanbul’da kalış süresi, diş dokusu koruma ve estetik puanlarını kıyaslayarak size en uygun tedaviyi belirleyin.',
    thTreatment: 'Tedavi Çözümü',
    thIdealFor: 'İdeal Hasta Profili',
    thLifespan: 'Ömür & Garanti',
    thDuration: 'İstanbul’da Kalış',
    thPreparation: 'Diş Kesimi / Müdahale',
    thScore: 'Estetik & Dayanıklılık',
    thAction: 'Tedavi Detayları',
    footerNote:
      '💡 Not: Kesin tedavi planı, Master Smile Studio kliniğimizdeki ilk 3D tomografi ve dijital konsültasyon sonrası hekimlerimizce belirlenir.',
    categories: {
      missing: {
        tabLabel: 'Eksik Diş Tedavileri & Tam Çene Çözümleri',
        rows: [
          {
            treatmentName: 'Diş İmplantı',
            treatmentSub: 'Titanyum / Straumann',
            idealFor: 'Tek veya çoklu diş eksikliği; sağlıklı kemik yapısı',
            lifespan: 'Ömür Boyu Garanti (25+ Yıl)',
            duration: '1–2 Ziyaret (3–5 Gün)',
            preparation: 'Komşu dişlere sıfır dokunma (100% koruma)',
            ratingScore: '★★★★★ (Tam Doğal Çiğneme Gücü)',
            href: '/treatments/dental-implants',
            actionText: 'İmplantı İncele →',
          },
          {
            treatmentName: 'Sabit Diş Köprüsü',
            treatmentSub: 'Monolitik Zirkonyum',
            idealFor: 'Yanında güçlü destek dişleri olan 1–3 diş boşlukları',
            lifespan: '15–20 Yıl (5 Yıl Klinik Garanti)',
            duration: '4–6 Gün (Tek Ziyaret)',
            preparation: 'Komşu destek dişlerin çepeçevre küçültülmesi',
            ratingScore: '★★★★☆ (1200+ MPa Dayanıklılık)',
            href: '/treatments/dental-bridge',
            actionText: 'Köprüyü İncele →',
          },
          {
            treatmentName: 'Çıt Çıtlı Overdenture',
            treatmentSub: 'Locator Tutuculu İmplant Damak',
            idealFor: 'Tam dişsizlikte oynamayan, damaksız konforlu protez isteyenler',
            lifespan: '10–15 Yıl',
            duration: '4–6 Gün / 2 Ziyaret',
            preparation: '2–4 adet mini implant üzerine kilitlenir',
            ratingScore: '★★★★☆ (Yapıştırıcı Gerektirmez)',
            href: '/treatments/dentures',
            actionText: 'Protezi İncele →',
          },
          {
            treatmentName: 'All-on-4 / All-on-6',
            treatmentSub: 'Sabit Zirkonyum Tam Çene',
            idealFor: 'Hiç dişi olmayan ve çıkarılmayan sabit diş isteyenler',
            lifespan: 'Ömür Boyu Garanti',
            duration: '2 Ziyaret (3 Gün + 5 Gün)',
            preparation: 'Tek seansta tam çene cerrahi implantasyon',
            ratingScore: '★★★★★ (Maksimum Çiğneme Gücü)',
            href: '/treatments/dental-implants/all-on-4-implants',
            actionText: 'All-on-4 İncele →',
          },
        ],
      },
      aesthetic: {
        tabLabel: 'Estetik Gülüş Tasarımı & Diş Koruma',
        rows: [
          {
            treatmentName: 'E-Max Lamine Veneer',
            treatmentSub: 'İsviçre Ivoclar Cam Seramik',
            idealFor: 'Renk bozukluğu, kırık veya hafif çapraşık ön dişler',
            lifespan: '15–20+ Yıl (5 Yıl Garanti)',
            duration: '4–6 Gün (Tek Ziyaret)',
            preparation: 'Minimal mikro aşındırma (0.3–0.5 mm)',
            ratingScore: '★★★★★ (Kusursuz Doğal Şeffaflık)',
            href: '/treatments/dental-veneers',
            actionText: 'Lamineyi İncele →',
          },
          {
            treatmentName: 'Alman Zirkonyum Kron',
            treatmentSub: 'Monolitik Çok Katmanlı Zirkon',
            idealFor: 'İleri derece çürük, kırık veya kanal tedavili dişler',
            lifespan: '15–20+ Yıl (5 Yıl Garanti)',
            duration: '4–6 Gün (Tek Ziyaret)',
            preparation: 'Dişin 360 derece estetik kaplanması',
            ratingScore: '★★★★★ (1200+ MPa Yüksek Dayanıklılık)',
            href: '/treatments/dental-crowns',
            actionText: 'Kronu İncele →',
          },
          {
            treatmentName: 'Hollywood Smile Dönüşümü',
            treatmentSub: 'Tam Estetik Rekonstrüksiyon',
            idealFor: 'Yüzün altın oranına göre kusursuz beyaz gülüş isteyenler',
            lifespan: '15–20+ Yıl',
            duration: '4–6 Gün (Tek Ziyaret)',
            preparation: 'Kişiye özel lamina / zirkon kombinasyonu',
            ratingScore: '★★★★★ (Kusursuz Işıltı & Beyazlık)',
            href: '/treatments/cosmetic-dentistry',
            actionText: 'Gülüş Tasarımını İncele →',
          },
          {
            treatmentName: 'Mikroskobik Kanal Tedavisi',
            treatmentSub: 'Carl Zeiss Endodonti',
            idealFor: 'İltihaplı, ağrılı ve kurtarılması gereken doğal dişler',
            lifespan: 'Kron korumasıyla ömür boyu',
            duration: '1–2 Gün (1–2 Seans)',
            preparation: 'Kanal içi temizlik ve hermetik dolum',
            ratingScore: '★★★★★ (Doğal Dişi Ağızda Tutma)',
            href: '/treatments/general-dentistry',
            actionText: 'Genel Dişi İncele →',
          },
        ],
      },
    },
  },
  de: {
    badge: 'KLINISCHE ENTSCHEIDUNGSMATRIX',
    heading: 'Welche Zahnbehandlung ist die richtige für Sie?',
    subText:
      'Vergleichen Sie Haltbarkeit, Behandlungsdauer in Istanbul, Zahnhartsubstanzschonung und Ästhetikbewertung für eine fundierte Entscheidung.',
    thTreatment: 'Behandlungslösung',
    thIdealFor: 'Ideales Patientenprofil',
    thLifespan: 'Haltbarkeit & Garantie',
    thDuration: 'Dauer in Istanbul',
    thPreparation: 'Präparation / Zahnschonung',
    thScore: 'Ästhetik & Stabilität',
    thAction: 'Details ansehen',
    footerNote:
      '💡 Hinweis: Ihr individueller Behandlungsplan wird nach dem ersten 3D-CBCT-Scan im Master Smile Studio von unseren Chefärzten festgelegt.',
    categories: {
      missing: {
        tabLabel: 'Zahnersatz bei fehlenden Zähnen & Gesamtsanierung',
        rows: [
          {
            treatmentName: 'Zahnimplantat',
            treatmentSub: 'Titan / Straumann',
            idealFor: 'Einzelzahn- oder Mehrzahnlücken; gesunder Kieferknochen',
            lifespan: 'Lebenslange Garantie (25+ Jahre)',
            duration: '1–2 Reisen (3–5 Tage)',
            preparation: 'Kein Beschleifen gesunder Nachbarzähne',
            ratingScore: '★★★★★ (Volle Kaukraft & Stabilität)',
            href: '/treatments/dental-implants',
            actionText: 'Implantate ansehen →',
          },
          {
            treatmentName: 'Festsitzende Brücke',
            treatmentSub: 'Monolithisches Zirkon',
            idealFor: '1–3 fehlende Zähne mit stabilen Nachbarzähnen',
            lifespan: '15–20 Jahre (5 Jahre Garantie)',
            duration: '4–6 Tage (1 Reise)',
            preparation: 'Zirkuläres Beschleifen der Pfeilerzähne',
            ratingScore: '★★★★☆ (1200+ MPa Festigkeit)',
            href: '/treatments/dental-bridge',
            actionText: 'Brücken ansehen →',
          },
          {
            treatmentName: 'Snap-On Klickprothese',
            treatmentSub: 'Locator-Verankerung',
            idealFor: 'Zahnloser Kiefer; Wunsch nach gaumenfreiem Halt',
            lifespan: '10–15 Jahre',
            duration: '4–6 Tage / 2 Reisen',
            preparation: 'Verankerung auf 2–4 Mini-Implantaten',
            ratingScore: '★★★★☆ (Kein Verrutschen / Kleber)',
            href: '/treatments/dentures',
            actionText: 'Prothesen ansehen →',
          },
          {
            treatmentName: 'All-on-4 / All-on-6',
            treatmentSub: 'Festsitzendes Zirkon',
            idealFor: 'Vollständige Zahnlosigkeit; dauerhaft feste Zähne',
            lifespan: 'Lebenslange Garantie',
            duration: '2 Reisen (3 Tage + 5 Tage)',
            preparation: 'Chirurgische Implantation des gesamten Kiefers',
            ratingScore: '★★★★★ (Maximale Kaufunktion)',
            href: '/treatments/dental-implants/all-on-4-implants',
            actionText: 'All-on-4 ansehen →',
          },
        ],
      },
      aesthetic: {
        tabLabel: 'Ästhetisches Smile Makeover & Zahnerhalt',
        rows: [
          {
            treatmentName: 'E-Max Veneers',
            treatmentSub: 'Schweizer Ivoclar Glaskeramik',
            idealFor: 'Verfärbte, abgesplitterte oder leicht schiefe Frontzähne',
            lifespan: '15–20+ Jahre (5 Jahre Garantie)',
            duration: '4–6 Tage (1 Reise)',
            preparation: 'Minimale Mikro-Präparation (0,3–0,5 mm)',
            ratingScore: '★★★★★ (Perfekte Lichtdurchlässigkeit)',
            href: '/treatments/dental-veneers',
            actionText: 'Veneers ansehen →',
          },
          {
            treatmentName: 'Deutsches Zirkon Kronen',
            treatmentSub: 'Monolithisch mehrschichtig',
            idealFor: 'Stark geschädigte, rissige oder wurzelbehandelte Zähne',
            lifespan: '15–20+ Jahre (5 Jahre Garantie)',
            duration: '4–6 Tage (1 Reise)',
            preparation: '360° zirkuläre Überkronung',
            ratingScore: '★★★★★ (1200+ MPa Höchstfestigkeit)',
            href: '/treatments/dental-crowns',
            actionText: 'Kronen ansehen →',
          },
          {
            treatmentName: 'Hollywood Smile Makeover',
            treatmentSub: 'Ganzheitliche Rekonstruktion',
            idealFor: 'Makelloses Lächeln nach dem goldenen Schnitt',
            lifespan: '15–20+ Jahre',
            duration: '4–6 Tage (1 Reise)',
            preparation: 'Individuelle Veneer- & Kronenkombination',
            ratingScore: '★★★★★ (VIP Lächeln-Ästhetik)',
            href: '/treatments/cosmetic-dentistry',
            actionText: 'Hollywood Smile →',
          },
          {
            treatmentName: 'Mikroskopische Endodontie',
            treatmentSub: 'Carl Zeiss Mikroskop',
            idealFor: 'Entzündete Zähne; Erhalt der eigenen Zahnwurzel',
            lifespan: 'Lebenslang mit Kronenschutz',
            duration: '1–2 Tage (1–2 Sitzungen)',
            preparation: 'Wurzelkanalreinigung & Versiegelung',
            ratingScore: '★★★★★ (Erhalt der eigenen Zähne)',
            href: '/treatments/general-dentistry',
            actionText: 'Zahnheilkunde →',
          },
        ],
      },
    },
  },
  pl: {
    badge: 'KLINICZNA MACIERZ DECYZYJNA',
    heading: 'Który Zabieg Stomatologiczny Jest Dla Ciebie Odpowiedni?',
    subText:
      'Porównaj trwałość, czas pobytu w Stambule, stopień ingerencji w ząb i ocenę estetyczną, aby podjąć najlepszą decyzję medyczną.',
    thTreatment: 'Rozwiązanie Lecznicze',
    thIdealFor: 'Profil Pacjenta',
    thLifespan: 'Trwałość i Gwarancja',
    thDuration: 'Czas w Stambule',
    thPreparation: 'Szlifowanie Zębów',
    thScore: 'Estetyka i Siła',
    thAction: 'Zobacz Szczegóły',
    footerNote:
      '💡 Uwaga: Ostateczny plan leczenia jest ustalany po wykonaniu tomografii 3D CBCT podczas pierwszej wizyty w Master Smile Studio.',
    categories: {
      missing: {
        tabLabel: 'Odbudowa Braków Zębowych i Całych Łuków',
        rows: [
          {
            treatmentName: 'Implanty Zębowe',
            treatmentSub: 'Tytan / Straumann',
            idealFor: 'Pojedyncze lub mnogie braki; zdrowa kość',
            lifespan: 'Dożywotnia Gwarancja (25+ Lat)',
            duration: '1–2 Wizyty (3–5 Dni)',
            preparation: 'Brak naruszania sąsiednich zębów',
            ratingScore: '★★★★★ (100% Siły Gryzienia)',
            href: '/treatments/dental-implants',
            actionText: 'Zobacz Implanty →',
          },
          {
            treatmentName: 'Mosty Cyrkonowe',
            treatmentSub: 'Monolityczny Cyrkon',
            idealFor: '1–3 brakujące zęby ze stabilnymi zębami filarowymi',
            lifespan: '15–20 Lat (5 Lat Gwarancji)',
            duration: '4–6 Dni (1 Wizyta)',
            preparation: 'Szlifowanie zębów sąsiadujących',
            ratingScore: '★★★★☆ (Wytrzymałość 1200+ MPa)',
            href: '/treatments/dental-bridge',
            actionText: 'Zobacz Mosty →',
          },
          {
            treatmentName: 'Proteza na Zatrzaskach Overdenture',
            treatmentSub: 'Mocowanie Locator',
            idealFor: 'Całkowite bezzębie, brak podniebienia i stabilność',
            lifespan: '10–15 Lat',
            duration: '4–6 Dni / 2 Wizyty',
            preparation: 'Mocowanie na 2–4 mini implantach',
            ratingScore: '★★★★☆ (Bez Kleju i Ruszania)',
            href: '/treatments/dentures',
            actionText: 'Zobacz Protezy →',
          },
          {
            treatmentName: 'All-on-4 / All-on-6',
            treatmentSub: 'Stały Most Cyrkonowy',
            idealFor: 'Całkowite bezzębie; chęć posiadania stałych zębów',
            lifespan: 'Dożywotnia Gwarancja',
            duration: '2 Wizyty (3 Dni + 5 Dni)',
            preparation: 'Zabieg implantacji całego łuku',
            ratingScore: '★★★★★ (Maksymalna Siła Gryzienia)',
            href: '/treatments/dental-implants/all-on-4-implants',
            actionText: 'Zobacz All-on-4 →',
          },
        ],
      },
      aesthetic: {
        tabLabel: 'Estetyczna Metamorfoza i Ochrona Zębów',
        rows: [
          {
            treatmentName: 'Licówki Porcelanowe E-Max',
            treatmentSub: 'Szwajcarska Ceramika Ivoclar',
            idealFor: 'Przebarwienia, pęknięcia, stłoczenia zębów przednich',
            lifespan: '15–20+ Lat (5 Lat Gwarancji)',
            duration: '4–6 Dni (1 Wizyta)',
            preparation: 'Minimalne mikro-szlifowanie (0.3–0.5 mm)',
            ratingScore: '★★★★★ (Naturalna Przezierzytość)',
            href: '/treatments/dental-veneers',
            actionText: 'Zobacz Licówki →',
          },
          {
            treatmentName: 'Niemieckie Korony Cyrkonowe',
            treatmentSub: 'Monolityczny Tlenek Cyrkonu',
            idealFor: 'Mocno zniszczone lub leczone kanałowo zęby',
            lifespan: '15–20+ Lat (5 Lat Gwarancji)',
            duration: '4–6 Dni (1 Wizyta)',
            preparation: 'Opracowanie zęba 360 stopni',
            ratingScore: '★★★★★ (Wytrzymałość 1200+ MPa)',
            href: '/treatments/dental-crowns',
            actionText: 'Zobacz Korony →',
          },
          {
            treatmentName: 'Metamorfoza Hollywood Smile',
            treatmentSub: 'Kompleksowa Odbudowa Estetyczna',
            idealFor: 'Idealny biały uśmiech według złotego podziału',
            lifespan: '15–20+ Lat',
            duration: '4–6 Dni (1 Wizyta)',
            preparation: 'Indywidualna kombinacja licówek i koron',
            ratingScore: '★★★★★ (Perfekcyjna Estetyka)',
            href: '/treatments/cosmetic-dentistry',
            actionText: 'Hollywood Smile →',
          },
          {
            treatmentName: 'Leczenie Kanałowe pod Mikroskopem',
            treatmentSub: 'Endodoncja Carl Zeiss',
            idealFor: 'Głębokie stany zapalne; ratowanie własnych zębów',
            lifespan: 'Dożywotnio pod koroną',
            duration: '1–2 Dni (1–2 Wizyty)',
            preparation: 'Oczyszczenie i szczelne wypełnienie kanałów',
            ratingScore: '★★★★★ (Ochrona Własnego Zęba)',
            href: '/treatments/general-dentistry',
            actionText: 'Stomatologia Ogólna →',
          },
        ],
      },
    },
  },
  pt: {
    badge: 'MATRIZ DE DECISÃO CLÍNICA',
    heading: 'Qual Tratamento Odontológico É o Ideal para Você?',
    subText:
      'Compare durabilidade, tempo de estadia em Istambul, nível de desgaste dental e pontuação estética para tomar a melhor decisão médica.',
    thTreatment: 'Solução Clínica',
    thIdealFor: 'Perfil do Paciente',
    thLifespan: 'Durabilidade & Garantia',
    thDuration: 'Tempo em Istambul',
    thPreparation: 'Preparo Dental',
    thScore: 'Estética & Força',
    thAction: 'Ver Detalhes',
    footerNote:
      '💡 Nota: O plano definitivo é determinado após tomografia 3D CBCT em sua primeira consulta na Master Smile Studio.',
    categories: {
      missing: {
        tabLabel: 'Reposição de Dentes & Arcada Total',
        rows: [
          {
            treatmentName: 'Implantes Dentários',
            treatmentSub: 'Titânio / Straumann',
            idealFor: 'Dentes ausentes unitários ou múltiplos; osso saudável',
            lifespan: 'Garantia Vitalícia (25+ Anos)',
            duration: '1–2 Viagens (3–5 Dias)',
            preparation: 'Sem desgaste dos dentes vizinhos',
            ratingScore: '★★★★★ (100% de Força Mastigatória)',
            href: '/treatments/dental-implants',
            actionText: 'Ver Implantes →',
          },
          {
            treatmentName: 'Ponte Fixa em Zircônia',
            treatmentSub: 'Zircônia Monolítica',
            idealFor: '1–3 dentes ausentes com dentes pilares fortes',
            lifespan: '15–20 Anos (5 Anos de Garantia)',
            duration: '4–6 Dias (1 Viagem)',
            preparation: 'Desgaste dos dentes de suporte',
            ratingScore: '★★★★☆ (1200+ MPa de Resistência)',
            href: '/treatments/dental-bridge',
            actionText: 'Ver Pontes →',
          },
          {
            treatmentName: 'Overdenture de Clique',
            treatmentSub: 'Encaixe Locator sem Céu da Boca',
            idealFor: 'Edentulismo total buscando prótese firme sem céu da boca',
            lifespan: '10–15 Anos',
            duration: '4–6 Dias / 2 Viagens',
            preparation: 'Fixada em 2–4 mini implantes',
            ratingScore: '★★★★☆ (Sem Adesivos ou Quedas)',
            href: '/treatments/dentures',
            actionText: 'Ver Próteses →',
          },
          {
            treatmentName: 'All-on-4 / All-on-6',
            treatmentSub: 'Ponte Fixa em Zircônia',
            idealFor: 'Sem dentes na arcada; busca dentes fixos definitivos',
            lifespan: 'Garantia Vitalícia',
            duration: '2 Viagens (3 Dias + 5 Dias)',
            preparation: 'Implantes cirúrgicos na arcada total',
            ratingScore: '★★★★★ (Máximo Poder Mastigatório)',
            href: '/treatments/dental-implants/all-on-4-implants',
            actionText: 'Ver All-on-4 →',
          },
        ],
      },
      aesthetic: {
        tabLabel: 'Design do Sorriso & Preservação Dental',
        rows: [
          {
            treatmentName: 'Facetas E-Max',
            treatmentSub: 'Cerâmica Vítrea Ivoclar',
            idealFor: 'Dentes escurecidos, fraturados ou espaçados',
            lifespan: '15–20+ Anos (5 Anos de Garantia)',
            duration: '4–6 Dias (1 Viagem)',
            preparation: 'Micro desgaste mínimo (0,3–0,5 mm)',
            ratingScore: '★★★★★ (Translucidez Natural)',
            href: '/treatments/dental-veneers',
            actionText: 'Ver Facetas →',
          },
          {
            treatmentName: 'Coroas de Zircônia Alemã',
            treatmentSub: 'Zircônia Monolítica Multicamadas',
            idealFor: 'Dentes fraturados ou desvitalizados',
            lifespan: '15–20+ Anos (5 Anos de Garantia)',
            duration: '4–6 Dias (1 Viagem)',
            preparation: 'Preparo 360° ao redor do dente',
            ratingScore: '★★★★★ (1200+ MPa Máxima Força)',
            href: '/treatments/dental-crowns',
            actionText: 'Ver Coroas →',
          },
          {
            treatmentName: 'Hollywood Smile Makeover',
            treatmentSub: 'Reconstrução Estética Integral',
            idealFor: 'Sorriso branco e simétrico pela proporção áurea',
            lifespan: '15–20+ Anos',
            duration: '4–6 Dias (1 Viagem)',
            preparation: 'Personalizada com facetas e coroas',
            ratingScore: '★★★★★ (Estética de Alto Padrão)',
            href: '/treatments/cosmetic-dentistry',
            actionText: 'Hollywood Smile →',
          },
          {
            treatmentName: 'Canal sob Microscópio',
            treatmentSub: 'Endodontia Carl Zeiss',
            idealFor: 'Infecções e dores; preservação da raiz natural',
            lifespan: 'Vitalício com proteção de coroa',
            duration: '1–2 Dias (1–2 Sessões)',
            preparation: 'Desinfecção e selamento hermético',
            ratingScore: '★★★★★ (Preservação Dental)',
            href: '/treatments/general-dentistry',
            actionText: 'Clínica Geral →',
          },
        ],
      },
    },
  },
  es: {
    badge: 'MATRIZ DE DECISIÓN CLÍNICA',
    heading: '¿Qué Tratamiento Dental Es el Más Adecuado para Usted?',
    subText:
      'Compare durabilidad, tiempo de estancia en Estambul, conservación del diente y puntuación estética para tomar la decisión correcta.',
    thTreatment: 'Solución Dental',
    thIdealFor: 'Perfil del Paciente',
    thLifespan: 'Durabilidad & Garantía',
    thDuration: 'Tiempo en Estambul',
    thPreparation: 'Preparación Dental',
    thScore: 'Estética & Fuerza',
    thAction: 'Ver Detalles',
    footerNote:
      '💡 Nota: El plan médico final se define tras el TAC 3D CBCT en su primera consulta en Master Smile Studio.',
    categories: {
      missing: {
        tabLabel: 'Reposición de Piezas & Arcada Completa',
        rows: [
          {
            treatmentName: 'Implantes Dentales',
            treatmentSub: 'Titanio / Straumann',
            idealFor: 'Pérdida de piezas individuales o múltiples; hueso sano',
            lifespan: 'Garantía de por Vida (25+ Años)',
            duration: '1–2 Viajes (3–5 Días)',
            preparation: 'Sin tallar dientes sanos contiguos',
            ratingScore: '★★★★★ (100% Fuerza Masticatoria)',
            href: '/treatments/dental-implants',
            actionText: 'Ver Implantes →',
          },
          {
            treatmentName: 'Puentes Fijos de Zirconio',
            treatmentSub: 'Zirconio Monolítico',
            idealFor: '1–3 piezas ausentes con dientes pilares firmes',
            lifespan: '15–20 Años (5 Años de Garantía)',
            duration: '4–6 Días (1 Viaje)',
            preparation: 'Tallado de dientes contiguos',
            ratingScore: '★★★★☆ (Resistencia 1200+ MPa)',
            href: '/treatments/dental-bridge',
            actionText: 'Ver Puentes →',
          },
          {
            treatmentName: 'Sobredentadura con Anclaje',
            treatmentSub: 'Locator sin Paladar',
            idealFor: 'Edentulismo total que busca prótesis fija sin paladar',
            lifespan: '10–15 Años',
            duration: '4–6 Días / 2 Viajes',
            preparation: 'Fijada sobre 2–4 mini implantes',
            ratingScore: '★★★★☆ (Sin Adhesivos ni Movimiento)',
            href: '/treatments/dentures',
            actionText: 'Ver Prótesis →',
          },
          {
            treatmentName: 'All-on-4 / All-on-6',
            treatmentSub: 'Puente Fijo de Zirconio',
            idealFor: 'Sin dientes en la arcada; busca dientes fijos definitivos',
            lifespan: 'Garantía de por Vida',
            duration: '2 Viajes (3 Días + 5 Días)',
            preparation: 'Implantes quirúrgicos en toda la arcada',
            ratingScore: '★★★★★ (Máximo Poder Masticatorio)',
            href: '/treatments/dental-implants/all-on-4-implants',
            actionText: 'Ver All-on-4 →',
          },
        ],
      },
      aesthetic: {
        tabLabel: 'Diseño de Sonrisa & Conservación Dental',
        rows: [
          {
            treatmentName: 'Carillas E-Max',
            treatmentSub: 'Cerámica Vítrea Ivoclar',
            idealFor: 'Dientes oscurecidos, desgastados o con diastemas',
            lifespan: '15–20+ Años (5 Años de Garantía)',
            duration: '4–6 Días (1 Viaje)',
            preparation: 'Micro-tallado mínimo (0.3–0.5 mm)',
            ratingScore: '★★★★★ (Translucidez Natural)',
            href: '/treatments/dental-veneers',
            actionText: 'Ver Carillas →',
          },
          {
            treatmentName: 'Coronas de Zirconio Alemán',
            treatmentSub: 'Zirconio Monolítico Multicapa',
            idealFor: 'Dientes muy destruidos o endodonciados',
            lifespan: '15–20+ Años (5 Años de Garantía)',
            duration: '4–6 Días (1 Viaje)',
            preparation: 'Recubrimiento 360° del diente',
            ratingScore: '★★★★★ (1200+ MPa Máxima Dureza)',
            href: '/treatments/dental-crowns',
            actionText: 'Ver Coronas →',
          },
          {
            treatmentName: 'Hollywood Smile Makeover',
            treatmentSub: 'Reconstrucción Estética Integral',
            idealFor: 'Sonrisa blanca y armónica según la proporción áurea',
            lifespan: '15–20+ Años',
            duration: '4–6 Días (1 Viaje)',
            preparation: 'Combinación personalizada de carillas y coronas',
            ratingScore: '★★★★★ (Estética Dental de Élite)',
            href: '/treatments/cosmetic-dentistry',
            actionText: 'Hollywood Smile →',
          },
          {
            treatmentName: 'Endodoncia Microscópica',
            treatmentSub: 'Microscopio Carl Zeiss',
            idealFor: 'Infecciones y dolor agudo; conservación de la raíz',
            lifespan: 'De por vida con corona de protección',
            duration: '1–2 Días (1–2 Sesiones)',
            preparation: 'Desinfección y sellado de conductos',
            ratingScore: '★★★★★ (Conservación del Diente)',
            href: '/treatments/general-dentistry',
            actionText: 'Odontología General →',
          },
        ],
      },
    },
  },
  ru: {
    badge: 'КЛИНИЧЕСКАЯ МАТРИЦА РЕШЕНИЙ',
    heading: 'Какое стоматологическое лечение подходит именно вам?',
    subText:
      'Сравните долговечность, время пребывания в Стамбуле, степень обточки зубов и эстетические показатели для принятия взвешенного решения.',
    thTreatment: 'Метод лечения',
    thIdealFor: 'Профиль пациента',
    thLifespan: 'Срок службы и гарантия',
    thDuration: 'Срок в Стамбуле',
    thPreparation: 'Обработка зубов',
    thScore: 'Эстетика и прочность',
    thAction: 'Подробнее',
    footerNote:
      '💡 Примечание: Точный план лечения составляется после 3D КТ диагностики на первой консультации в Master Smile Studio.',
    categories: {
      missing: {
        tabLabel: 'Восстановление отсутствующих зубов и челюсти',
        rows: [
          {
            treatmentName: 'Имплантация зубов',
            treatmentSub: 'Титан / Straumann',
            idealFor: 'Единичная или множественная потеря зубов; нормальная кость',
            lifespan: 'Пожизненная гарантия (25+ лет)',
            duration: '1–2 Визита (3–5 Дней)',
            preparation: 'Соседние зубы не обтачиваются (100% сохранность)',
            ratingScore: '★★★★★ (100% естественная жевательная сила)',
            href: '/treatments/dental-implants',
            actionText: 'Импланты →',
          },
          {
            treatmentName: 'Мостовидный протез',
            treatmentSub: 'Монолитный цирконий',
            idealFor: 'Отсутствие 1–3 зубов при наличии крепких опорных зубов',
            lifespan: '15–20 лет (5 лет гарантии)',
            duration: '4–6 Дней (1 Визит)',
            preparation: 'Круговое обтачивание опорных зубов',
            ratingScore: '★★★★☆ (Прочность 1200+ МПа)',
            href: '/treatments/dental-bridge',
            actionText: 'Мосты →',
          },
          {
            treatmentName: 'Замковый протез Overdenture',
            treatmentSub: 'Крепление Locator без неба',
            idealFor: 'Полная адентия; надежная фиксация без неба и клея',
            lifespan: '10–15 лет',
            duration: '4–6 Дней / 2 Визита',
            preparation: 'Фиксация на 2–4 мини-имплантах',
            ratingScore: '★★★★☆ (Без клея и смещения)',
            href: '/treatments/dentures',
            actionText: 'Протезы →',
          },
          {
            treatmentName: 'All-on-4 / All-on-6',
            treatmentSub: 'Несъемный циркониевый мост',
            idealFor: 'Полное отсутствие зубов; желание иметь несъемные зубы',
            lifespan: 'Пожизненная гарантия',
            duration: '2 Визита (3 Дня + 5 Дней)',
            preparation: 'Хирургическая имплантация всей челюсти',
            ratingScore: '★★★★★ (Максимальная жевательная сила)',
            href: '/treatments/dental-implants/all-on-4-implants',
            actionText: 'All-on-4 →',
          },
        ],
      },
      aesthetic: {
        tabLabel: 'Эстетика улыбки и сохранение зубов',
        rows: [
          {
            treatmentName: 'Виниры E-Max',
            treatmentSub: 'Стеклокерамика Ivoclar',
            idealFor: 'Потемневшие, сколотые или неровные передние зубы',
            lifespan: '15–20+ лет (5 лет гарантии)',
            duration: '4–6 Дней (1 Визит)',
            preparation: 'Минимальное препарирование (0.3–0.5 мм)',
            ratingScore: '★★★★★ (Естественная прозрачность)',
            href: '/treatments/dental-veneers',
            actionText: 'Виниры →',
          },
          {
            treatmentName: 'Немецкие коронки из циркония',
            treatmentSub: 'Монолитный многослойный цирконий',
            idealFor: 'Сильно разрушенные или депульпированные зубы',
            lifespan: '15–20+ лет (5 лет гарантии)',
            duration: '4–6 Дней (1 Визит)',
            preparation: 'Круговое препарирование на 360°',
            ratingScore: '★★★★★ (1200+ МПа сверхпрочность)',
            href: '/treatments/dental-crowns',
            actionText: 'Коронки →',
          },
          {
            treatmentName: 'Голливудская улыбка Makeover',
            treatmentSub: 'Комплексная реконструкция',
            idealFor: 'Белоснежная улыбка по правилу золотого сечения',
            lifespan: '15–20+ лет',
            duration: '4–6 Дней (1 Визит)',
            preparation: 'Индивидуальный подбор виниров и коронок',
            ratingScore: '★★★★★ (Безупречная эстетика)',
            href: '/treatments/cosmetic-dentistry',
            actionText: 'Hollywood Smile →',
          },
          {
            treatmentName: 'Лечение каналов под микроскопом',
            treatmentSub: 'Эндодонтия Carl Zeiss',
            idealFor: 'Глубокий кариес и боль; спасение собственного зуба',
            lifespan: 'Пожизненно под защитой коронки',
            duration: '1–2 Дня (1–2 Сеанса)',
            preparation: 'Очистка и герметизация каналов',
            ratingScore: '★★★★★ (Сохранение своего зуба)',
            href: '/treatments/general-dentistry',
            actionText: 'Терапия →',
          },
        ],
      },
    },
  },
};

export default function TreatmentComparisonMatrix() {
  const locale = useLocale();
  const dict = MATRIX_DATA[locale] || MATRIX_DATA.en;
  const [activeTab, setActiveTab] = useState<'missing' | 'aesthetic'>('missing');

  const currentCategory = dict.categories[activeTab];

  return (
    <section aria-labelledby="matrix-heading" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.headerWrap}>
          <span className={styles.badge}>{dict.badge}</span>
          <h2 id="matrix-heading" className={styles.mainHeading}>
            {dict.heading}
          </h2>
          <p className={styles.subText}>{dict.subText}</p>
        </div>

        {/* Tab Switcher */}
        <div className={styles.tabSwitcher}>
          <button
            type="button"
            className={`${styles.tabBtn} ${
              activeTab === 'missing' ? styles.tabBtnActive : ''
            }`}
            onClick={() => setActiveTab('missing')}
          >
            <span>🦷</span>
            <span>{dict.categories.missing.tabLabel}</span>
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${
              activeTab === 'aesthetic' ? styles.tabBtnActive : ''
            }`}
            onClick={() => setActiveTab('aesthetic')}
          >
            <span>✨</span>
            <span>{dict.categories.aesthetic.tabLabel}</span>
          </button>
        </div>

        {/* Responsive Table Card */}
        <div className={styles.tableCard}>
          <div className={styles.tableScroll}>
            <table className={styles.matrixTable}>
              <thead>
                <tr>
                  <th>{dict.thTreatment}</th>
                  <th>{dict.thIdealFor}</th>
                  <th>{dict.thLifespan}</th>
                  <th>{dict.thDuration}</th>
                  <th>{dict.thPreparation}</th>
                  <th>{dict.thScore}</th>
                  <th>{dict.thAction}</th>
                </tr>
              </thead>
              <tbody>
                {currentCategory.rows.map((row, idx) => (
                  <tr key={idx}>
                    <td>
                      <span className={styles.treatmentCell}>
                        {row.treatmentName}
                      </span>
                      <span className={styles.treatmentCellSub}>
                        {row.treatmentSub}
                      </span>
                    </td>
                    <td>{row.idealFor}</td>
                    <td>
                      <span className={styles.highlightBadge}>
                        {row.lifespan}
                      </span>
                    </td>
                    <td>{row.duration}</td>
                    <td>{row.preparation}</td>
                    <td>
                      <span className={styles.starsRating}>
                        {row.ratingScore}
                      </span>
                    </td>
                    <td>
                      <Link href={row.href} className={styles.actionLink}>
                        <span>{row.actionText}</span>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.noteFooter}>
            <span>{dict.footerNote}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
