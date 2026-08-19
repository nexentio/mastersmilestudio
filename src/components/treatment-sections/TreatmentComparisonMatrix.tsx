'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link, useRouter } from '@/i18n/routing';
import styles from './TreatmentComparisonMatrix.module.css';

interface MatrixRow {
  treatmentName: string;
  treatmentSub: string;
  idealFor: string;
  lifespan: string;
  duration: string;
  preparation: string;
  clinicalMetric: string;
  href: string;
}

interface MatrixCategory {
  tabLabel: string;
  rows: MatrixRow[];
}

interface MatrixDictionary {
  heading: string;
  subText: string;
  thTreatment: string;
  thIdealFor: string;
  thLifespan: string;
  thDuration: string;
  thPreparation: string;
  thScore: string;
  footerNote: string;
  categories: {
    missing: MatrixCategory;
    aesthetic: MatrixCategory;
  };
}

const MATRIX_DATA: Record<string, MatrixDictionary> = {
  en: {
    heading: 'Which Dental Treatment Is Right for Your Needs?',
    subText:
      'Compare our core dental disciplines across durability, treatment duration, invasiveness, and clinical strength metrics. Click any treatment row to explore complete clinical specifications.',
    thTreatment: 'Treatment Solution',
    thIdealFor: 'Primary Clinical Indication',
    thLifespan: 'Lifespan & Guarantee',
    thDuration: 'Time in Antalya',
    thPreparation: 'Tooth Preparation',
    thScore: 'Clinical Strength Metric',
    footerNote:
      'Clinical Note: Final bespoke treatment plans are calibrated via 3D CBCT tomography and intraoral optical scans during your initial in-clinic consultation.',
    categories: {
      missing: {
        tabLabel: 'Restoring Missing Teeth & Full-Arch Solutions',
        rows: [
          {
            treatmentName: 'Dental Implants',
            treatmentSub: 'Titanium / Straumann',
            idealFor: 'Single or multiple missing teeth; healthy bone volume',
            lifespan: 'Lifetime International Warranty',
            duration: '1–2 Visits (3–5 Days)',
            preparation: 'Zero damage to adjacent teeth (100% preservation)',
            clinicalMetric: '100% Osseointegrated Stability',
            href: '/treatments/dental-implants',
          },
          {
            treatmentName: 'Fixed Dental Bridge',
            treatmentSub: 'Monolithic German Zirconia',
            idealFor: '1–3 missing teeth with stable neighboring abutments',
            lifespan: '15–20 Years (5-Yr Guarantee)',
            duration: '4–6 Days (Single Visit)',
            preparation: 'Circumferential reduction of neighbor teeth',
            clinicalMetric: '1200+ MPa Flexural Strength',
            href: '/treatments/dental-bridge',
          },
          {
            treatmentName: 'Snap-On Overdenture',
            treatmentSub: 'Locator Implant Retained',
            idealFor: 'Edentulous jaw seeking palate-free removable retention',
            lifespan: '10–15 Years',
            duration: '4–6 Days / 2 Visits',
            preparation: 'Anchored over 2–4 titanium implants',
            clinicalMetric: 'Zero Palate Coverage & Zero Slipping',
            href: '/treatments/dentures',
          },
          {
            treatmentName: 'All-on-4 / All-on-6',
            treatmentSub: 'Full-Arch Fixed Zirconia',
            idealFor: 'Completely edentulous jaw; seeking permanent non-removable teeth',
            lifespan: 'Lifetime International Warranty',
            duration: '2 Visits (3 Days + 5 Days)',
            preparation: 'Full-arch computer guided implantation',
            clinicalMetric: '100% Full-Arch Chewing Restoration',
            href: '/treatments/dental-implants/all-on-4-implants',
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
            preparation: 'Micro-preparation (0.3–0.5 mm)',
            clinicalMetric: 'Natural Opalescent Translucency',
            href: '/treatments/dental-veneers',
          },
          {
            treatmentName: 'German Zirconia Crowns',
            treatmentSub: 'Monolithic Multi-Layered',
            idealFor: 'Heavily decayed, cracked, or root-canal treated teeth',
            lifespan: '15–20+ Years (5-Yr Guarantee)',
            duration: '4–6 Days (Single Visit)',
            preparation: '360° full circumferential protection',
            clinicalMetric: '1200+ MPa Fracture Resistance',
            href: '/treatments/dental-crowns',
          },
          {
            treatmentName: 'Hollywood Smile Makeover',
            treatmentSub: 'Complete Aesthetic Reconstruction',
            idealFor: 'Full aesthetic smile makeover according to golden facial proportions',
            lifespan: '15–20+ Years',
            duration: '4–6 Days (Single Visit)',
            preparation: 'Customized based on veneer/crown mix',
            clinicalMetric: 'Golden Proportion DSD Alignment',
            href: '/treatments/cosmetic-dentistry',
          },
          {
            treatmentName: 'Microscopic Root Canal',
            treatmentSub: 'Carl Zeiss Endodontics',
            idealFor: 'Deep infections, acute toothaches; saving natural roots',
            lifespan: 'Lifetime under crown restoration',
            duration: '1–2 Days (1–2 Sessions)',
            preparation: 'Internal root canal debridement & 3D seal',
            clinicalMetric: 'Carl Zeiss 25x Optical Precision',
            href: '/treatments/general-dentistry',
          },
        ],
      },
    },
  },
  tr: {
    heading: 'Hangi Diş Tedavisi Sizin İçin En Doğru Çözüm?',
    subText:
      'Dayanıklılık, Antalya’da kalış süresi, diş dokusu koruma ve klinik direnç değerlerini kıyaslayın. Detaylı tedavi sayfasına gitmek için ilgili satıra tıklayabilirsiniz.',
    thTreatment: 'Tedavi Çözümü',
    thIdealFor: 'Birincil Klinik Endikasyon',
    thLifespan: 'Ömür & Garanti',
    thDuration: 'Antalya’da Kalış',
    thPreparation: 'Diş Kesimi / Müdahale',
    thScore: 'Klinik Mukavemet Değeri',
    footerNote:
      'Klinik Not: Kesin tedavi planı, Master Smile Studio kliniğimizdeki ilk 3D tomografi ve dijital konsültasyon sonrası hekimlerimizce belirlenir.',
    categories: {
      missing: {
        tabLabel: 'Eksik Diş Tedavileri & Tam Çene Çözümleri',
        rows: [
          {
            treatmentName: 'Diş İmplantı',
            treatmentSub: 'Titanyum / Straumann',
            idealFor: 'Tek veya çoklu diş eksikliği; sağlıklı kemik yapısı',
            lifespan: 'Ömür Boyu Uluslararası Garanti',
            duration: '1–2 Ziyaret (3–5 Gün)',
            preparation: 'Komşu dişlere sıfır dokunma (100% koruma)',
            clinicalMetric: '100% Osseointegrasyon Stabilitesi',
            href: '/treatments/dental-implants',
          },
          {
            treatmentName: 'Sabit Diş Köprüsü',
            treatmentSub: 'Monolitik Zirkonyum',
            idealFor: 'Yanında güçlü destek dişleri olan 1–3 diş boşlukları',
            lifespan: '15–20 Yıl (5 Yıl Klinik Garanti)',
            duration: '4–6 Gün (Tek Ziyaret)',
            preparation: 'Komşu destek dişlerin çepeçevre küçültülmesi',
            clinicalMetric: '1200+ MPa Bükülme Direnci',
            href: '/treatments/dental-bridge',
          },
          {
            treatmentName: 'Çıt Çıtlı Overdenture',
            treatmentSub: 'Locator Tutuculu İmplant Damak',
            idealFor: 'Tam dişsizlikte oynamayan, damaksız konforlu protez isteyenler',
            lifespan: '10–15 Yıl',
            duration: '4–6 Gün / 2 Ziyaret',
            preparation: '2–4 adet mini implant üzerine kilitlenir',
            clinicalMetric: 'Sıfır Damak Örtüsü & Sıfır Oynama',
            href: '/treatments/dentures',
          },
          {
            treatmentName: 'All-on-4 / All-on-6',
            treatmentSub: 'Sabit Zirkonyum Tam Çene',
            idealFor: 'Hiç dişi olmayan ve çıkarılmayan sabit diş isteyenler',
            lifespan: 'Ömür Boyu Uluslararası Garanti',
            duration: '2 Ziyaret (3 Gün + 5 Gün)',
            preparation: 'Tek seansta tam çene cerrahi implantasyon',
            clinicalMetric: '100% Tam Çene Çiğneme Gücü',
            href: '/treatments/dental-implants/all-on-4-implants',
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
            clinicalMetric: 'Doğal Opalesan Işık Geçirgenliği',
            href: '/treatments/dental-veneers',
          },
          {
            treatmentName: 'Alman Zirkonyum Kron',
            treatmentSub: 'Monolitik Çok Katmanlı Zirkon',
            idealFor: 'İleri derece çürük, kırık veya kanal tedavili dişler',
            lifespan: '15–20+ Yıl (5 Yıl Garanti)',
            duration: '4–6 Gün (Tek Ziyaret)',
            preparation: 'Dişin 360 derece estetik kaplanması',
            clinicalMetric: '1200+ MPa Kırılma Direnci',
            href: '/treatments/dental-crowns',
          },
          {
            treatmentName: 'Hollywood Smile Dönüşümü',
            treatmentSub: 'Tam Estetik Rekonstrüksiyon',
            idealFor: 'Yüzün altın oranına göre kusursuz beyaz gülüş isteyenler',
            lifespan: '15–20+ Yıl',
            duration: '4–6 Gün (Tek Ziyaret)',
            preparation: 'Kişiye özel lamina / zirkon kombinasyonu',
            clinicalMetric: 'Altın Oran 3D DSD Hizalaması',
            href: '/treatments/cosmetic-dentistry',
          },
          {
            treatmentName: 'Mikroskobik Kanal Tedavisi',
            treatmentSub: 'Carl Zeiss Endodonti',
            idealFor: 'İltihaplı, ağrılı ve kurtarılması gereken doğal dişler',
            lifespan: 'Kron korumasıyla ömür boyu',
            duration: '1–2 Gün (1–2 Seans)',
            preparation: 'Kanal içi temizlik ve hermetik dolum',
            clinicalMetric: 'Carl Zeiss 25x Büyütme Hassasiyeti',
            href: '/treatments/general-dentistry',
          },
        ],
      },
    },
  },
  de: {
    heading: 'Welche Zahnbehandlung ist die richtige für Sie?',
    subText:
      'Vergleichen Sie Haltbarkeit, Behandlungsdauer in Antalya, Zahnhartsubstanzschonung und klinische Festigkeitswerte. Klicken Sie auf eine Zeile, um die Detailseite zu öffnen.',
    thTreatment: 'Behandlungslösung',
    thIdealFor: 'Klinische Indikation',
    thLifespan: 'Haltbarkeit & Garantie',
    thDuration: 'Dauer in Antalya',
    thPreparation: 'Präparation / Zahnschonung',
    thScore: 'Klinischer Festigkeitswert',
    footerNote:
      'Klinischer Hinweis: Ihr individueller Behandlungsplan wird nach 3D-CBCT-Diagnostik im Master Smile Studio von unseren Chefärzten festgelegt.',
    categories: {
      missing: {
        tabLabel: 'Zahnersatz bei fehlenden Zähnen & Gesamtsanierung',
        rows: [
          {
            treatmentName: 'Zahnimplantat',
            treatmentSub: 'Titan / Straumann',
            idealFor: 'Einzelzahn- oder Mehrzahnlücken; gesunder Kieferknochen',
            lifespan: 'Lebenslange internationale Garantie',
            duration: '1–2 Reisen (3–5 Tage)',
            preparation: 'Kein Beschleifen gesunder Nachbarzähne',
            clinicalMetric: '100% Osseointegrations-Stabilität',
            href: '/treatments/dental-implants',
          },
          {
            treatmentName: 'Festsitzende Brücke',
            treatmentSub: 'Monolithisches deutsches Zirkon',
            idealFor: '1–3 fehlende Zähne mit stabilen Nachbarzähnen',
            lifespan: '15–20 Jahre (5 Jahre Garantie)',
            duration: '4–6 Tage (1 Reise)',
            preparation: 'Zirkuläres Beschleifen der Pfeilerzähne',
            clinicalMetric: '1200+ MPa Biegefestigkeit',
            href: '/treatments/dental-bridge',
          },
          {
            treatmentName: 'Snap-On Klickprothese',
            treatmentSub: 'Locator-Verankerung',
            idealFor: 'Zahnloser Kiefer; Wunsch nach gaumenfreiem Halt',
            lifespan: '10–15 Jahre',
            duration: '4–6 Tage / 2 Reisen',
            preparation: 'Verankerung auf 2–4 Mini-Implantaten',
            clinicalMetric: 'Gaumenfreie Verankerung ohne Verrutschen',
            href: '/treatments/dentures',
          },
          {
            treatmentName: 'All-on-4 / All-on-6',
            treatmentSub: 'Festsitzendes Zirkon',
            idealFor: 'Vollständige Zahnlosigkeit; dauerhaft feste Zähne',
            lifespan: 'Lebenslange internationale Garantie',
            duration: '2 Reisen (3 Tage + 5 Tage)',
            preparation: 'Chirurgische Implantation des gesamten Kiefers',
            clinicalMetric: '100% Wiederherstellung der Kaukraft',
            href: '/treatments/dental-implants/all-on-4-implants',
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
            clinicalMetric: 'Natürliche opaleszierende Transluzenz',
            href: '/treatments/dental-veneers',
          },
          {
            treatmentName: 'Deutsches Zirkon Kronen',
            treatmentSub: 'Monolithisch mehrschichtig',
            idealFor: 'Stark geschädigte, rissige oder wurzelbehandelte Zähne',
            lifespan: '15–20+ Jahre (5 Jahre Garantie)',
            duration: '4–6 Tage (1 Reise)',
            preparation: '360° zirkuläre Überkronung',
            clinicalMetric: '1200+ MPa Bruchfestigkeit',
            href: '/treatments/dental-crowns',
          },
          {
            treatmentName: 'Hollywood Smile Makeover',
            treatmentSub: 'Ganzheitliche Rekonstruktion',
            idealFor: 'Makelloses Lächeln nach dem goldenen Schnitt',
            lifespan: '15–20+ Jahre',
            duration: '4–6 Tage (1 Reise)',
            preparation: 'Individuelle Veneer- & Kronenkombination',
            clinicalMetric: 'Goldener Schnitt 3D DSD Passung',
            href: '/treatments/cosmetic-dentistry',
          },
          {
            treatmentName: 'Mikroskopische Endodontie',
            treatmentSub: 'Carl Zeiss Mikroskop',
            idealFor: 'Entzündete Zähne; Erhalt der eigenen Zahnwurzel',
            lifespan: 'Lebenslang mit Kronenschutz',
            duration: '1–2 Tage (1–2 Sitzungen)',
            preparation: 'Wurzelkanalreinigung & Versiegelung',
            clinicalMetric: 'Carl Zeiss 25-fache optische Präzision',
            href: '/treatments/general-dentistry',
          },
        ],
      },
    },
  },
  pl: {
    heading: 'Który Zabieg Stomatologiczny Jest Dla Ciebie Odpowiedni?',
    subText:
      'Porównaj trwałość, czas pobytu w Antalyi, stopień ingerencji w ząb i kliniczne parametry wytrzymałości. Kliknij wiersz, aby przejść do szczegółów zabiegu.',
    thTreatment: 'Rozwiązanie Lecznicze',
    thIdealFor: 'Główne Wskazanie Kliniczne',
    thLifespan: 'Trwałość i Gwarancja',
    thDuration: 'Czas w Antalyi',
    thPreparation: 'Szlifowanie Zębów',
    thScore: 'Wytrzymałość Kliniczna',
    footerNote:
      'Uwaga kliniczna: Ostateczny plan leczenia jest ustalany po wykonaniu tomografii 3D CBCT podczas pierwszej wizyty w Master Smile Studio.',
    categories: {
      missing: {
        tabLabel: 'Odbudowa Braków Zębowych i Całych Łuków',
        rows: [
          {
            treatmentName: 'Implanty Zębowe',
            treatmentSub: 'Tytan / Straumann',
            idealFor: 'Pojedyncze lub mnogie braki; zdrowa kość',
            lifespan: 'Dożywotnia Międzynarodowa Gwarancja',
            duration: '1–2 Wizyty (3–5 Dni)',
            preparation: 'Brak naruszania sąsiednich zębów (100% ochrony)',
            clinicalMetric: '100% Stabilności Osteointegracji',
            href: '/treatments/dental-implants',
          },
          {
            treatmentName: 'Mosty Cyrkonowe',
            treatmentSub: 'Monolityczny Tlenek Cyrkonu',
            idealFor: '1–3 brakujące zęby ze stabilnymi zębami filarowymi',
            lifespan: '15–20 Lat (5 Lat Gwarancji)',
            duration: '4–6 Dni (1 Wizyta)',
            preparation: 'Szlifowanie zębów sąsiadujących',
            clinicalMetric: 'Wytrzymałość 1200+ MPa',
            href: '/treatments/dental-bridge',
          },
          {
            treatmentName: 'Proteza na Zatrzaskach Overdenture',
            treatmentSub: 'Mocowanie Locator',
            idealFor: 'Całkowite bezzębie, brak podniebienia i stabilność',
            lifespan: '10–15 Lat',
            duration: '4–6 Dni / 2 Wizyty',
            preparation: 'Mocowanie na 2–4 mini implantach',
            clinicalMetric: 'Konstrukcja bez podniebienia',
            href: '/treatments/dentures',
          },
          {
            treatmentName: 'All-on-4 / All-on-6',
            treatmentSub: 'Stały Most Cyrkonowy',
            idealFor: 'Całkowite bezzębie; chęć posiadania stałych zębów',
            lifespan: 'Dożywotnia Międzynarodowa Gwarancja',
            duration: '2 Wizyty (3 Dni + 5 Dni)',
            preparation: 'Zabieg implantacji całego łuku',
            clinicalMetric: '100% Przywrócenia Siły Gryzienia',
            href: '/treatments/dental-implants/all-on-4-implants',
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
            clinicalMetric: 'Naturalna Opalescencyjna Przezierzytość',
            href: '/treatments/dental-veneers',
          },
          {
            treatmentName: 'Niemieckie Korony Cyrkonowe',
            treatmentSub: 'Monolityczny Tlenek Cyrkonu',
            idealFor: 'Mocno zniszczone lub leczone kanałowo zęby',
            lifespan: '15–20+ Lat (5 Lat Gwarancji)',
            duration: '4–6 Dni (1 Wizyta)',
            preparation: 'Opracowanie zęba 360 stopni',
            clinicalMetric: 'Odporność na Złamania 1200+ MPa',
            href: '/treatments/dental-crowns',
          },
          {
            treatmentName: 'Metamorfoza Hollywood Smile',
            treatmentSub: 'Kompleksowa Odbudowa Estetyczna',
            idealFor: 'Idealny biały uśmiech według złotego podziału',
            lifespan: '15–20+ Lat',
            duration: '4–6 Dni (1 Wizyta)',
            preparation: 'Indywidualna kombinacja licówek i koron',
            clinicalMetric: 'Projektowanie Złotego Podziału 3D DSD',
            href: '/treatments/cosmetic-dentistry',
          },
          {
            treatmentName: 'Leczenie Kanałowe pod Mikroskopem',
            treatmentSub: 'Endodoncja Carl Zeiss',
            idealFor: 'Głębokie stany zapalne; ratowanie własnych zębów',
            lifespan: 'Dożywotnio pod koroną',
            duration: '1–2 Dni (1–2 Wizyty)',
            preparation: 'Oczyszczenie i szczelne wypełnienie kanałów',
            clinicalMetric: 'Optyka Carl Zeiss z Powiększeniem 25x',
            href: '/treatments/general-dentistry',
          },
        ],
      },
    },
  },
  pt: {
    heading: 'Qual Tratamento Odontológico É o Ideal para Você?',
    subText:
      'Compare durabilidade, tempo de estadia em Antalya, nível de desgaste dental e valores de resistência clínica. Clique em qualquer linha para abrir a página detalhada.',
    thTreatment: 'Solução Clínica',
    thIdealFor: 'Indicação Clínica Principal',
    thLifespan: 'Durabilidade & Garantia',
    thDuration: 'Tempo em Antalya',
    thPreparation: 'Preparo Dental',
    thScore: 'Resistência Clínica',
    footerNote:
      'Nota Clínica: O plano definitivo é calibrado após tomografia 3D CBCT e escaneamento digital em sua primeira consulta na Master Smile Studio.',
    categories: {
      missing: {
        tabLabel: 'Reposição de Dentes & Arcada Total',
        rows: [
          {
            treatmentName: 'Implantes Dentários',
            treatmentSub: 'Titânio / Straumann',
            idealFor: 'Dentes ausentes unitários ou múltiplos; osso saudável',
            lifespan: 'Garantia Vitalícia Internacional',
            duration: '1–2 Viagens (3–5 Dias)',
            preparation: 'Sem desgaste dos dentes vizinhos (100% de preservação)',
            clinicalMetric: '100% Estabilidade de Osseointegração',
            href: '/treatments/dental-implants',
          },
          {
            treatmentName: 'Ponte Fixa em Zircônia',
            treatmentSub: 'Zircônia Monolítica Alemã',
            idealFor: '1–3 dentes ausentes com dentes pilares fortes',
            lifespan: '15–20 Anos (5 Anos de Garantia)',
            duration: '4–6 Dias (1 Viagem)',
            preparation: 'Desgaste dos dentes de suporte',
            clinicalMetric: '1200+ MPa de Resistência Flexural',
            href: '/treatments/dental-bridge',
          },
          {
            treatmentName: 'Overdenture de Clique',
            treatmentSub: 'Encaixe Locator sem Céu da Boca',
            idealFor: 'Edentulismo total buscando prótese firme sem céu da boca',
            lifespan: '10–15 Anos',
            duration: '4–6 Dias / 2 Viagens',
            preparation: 'Fixada em 2–4 mini implantes',
            clinicalMetric: 'Sem Cobertura Palatina e Sem Deslocamentos',
            href: '/treatments/dentures',
          },
          {
            treatmentName: 'All-on-4 / All-on-6',
            treatmentSub: 'Ponte Fixa em Zircônia',
            idealFor: 'Sem dentes na arcada; busca dentes fixos definitivos',
            lifespan: 'Garantia Vitalícia Internacional',
            duration: '2 Viagens (3 Dias + 5 Dias)',
            preparation: 'Implantes cirúrgicos guiados na arcada total',
            clinicalMetric: '100% de Recuperação Mastigatória',
            href: '/treatments/dental-implants/all-on-4-implants',
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
            clinicalMetric: 'Translucidez Opalescente Natural',
            href: '/treatments/dental-veneers',
          },
          {
            treatmentName: 'Coroas de Zircônia Alemã',
            treatmentSub: 'Zircônia Monolítica Multicamadas',
            idealFor: 'Dentes fraturados ou desvitalizados',
            lifespan: '15–20+ Anos (5 Anos de Garantia)',
            duration: '4–6 Dias (1 Viagem)',
            preparation: 'Preparo 360° ao redor do dente',
            clinicalMetric: '1200+ MPa Resistência à Fratura',
            href: '/treatments/dental-crowns',
          },
          {
            treatmentName: 'Hollywood Smile Makeover',
            treatmentSub: 'Reconstrução Estética Integral',
            idealFor: 'Sorriso branco e simétrico pela proporção áurea',
            lifespan: '15–20+ Anos',
            duration: '4–6 Dias (1 Viagem)',
            preparation: 'Personalizada com facetas e coroas',
            clinicalMetric: 'Alinhamento 3D DSD na Proporção Áurea',
            href: '/treatments/cosmetic-dentistry',
          },
          {
            treatmentName: 'Canal sob Microscópio',
            treatmentSub: 'Endodontia Carl Zeiss',
            idealFor: 'Infecções e dores; preservação da raiz natural',
            lifespan: 'Vitalício com proteção de coroa',
            duration: '1–2 Dias (1–2 Sessões)',
            preparation: 'Desinfecção e selamento hermético',
            clinicalMetric: 'Precisão Óptica Carl Zeiss 25x',
            href: '/treatments/general-dentistry',
          },
        ],
      },
    },
  },
  es: {
    heading: '¿Qué Tratamiento Dental Es el Más Adecuado para Usted?',
    subText:
      'Compare durabilidad, tiempo de estancia en Antalya, conservación del diente y métricas de resistencia clínica. Haga clic en cualquier fila para explorar la página del tratamiento.',
    thTreatment: 'Solución Dental',
    thIdealFor: 'Indicación Clínica Primaria',
    thLifespan: 'Durabilidad & Garantía',
    thDuration: 'Tiempo en Antalya',
    thPreparation: 'Preparación Dental',
    thScore: 'Métrica de Resistencia Clínica',
    footerNote:
      'Nota Clínica: El plan médico final se calibra tras el TAC 3D CBCT y escaneo intraoral en su primera consulta en Master Smile Studio.',
    categories: {
      missing: {
        tabLabel: 'Reposición de Piezas & Arcada Completa',
        rows: [
          {
            treatmentName: 'Implantes Dentales',
            treatmentSub: 'Titanio / Straumann',
            idealFor: 'Pérdida de piezas individuales o múltiples; hueso sano',
            lifespan: 'Garantía Internacional de por Vida',
            duration: '1–2 Viajes (3–5 Días)',
            preparation: 'Sin tallar dientes sanos contiguos (100% de preservación)',
            clinicalMetric: '100% Estabilidad de Osteointegración',
            href: '/treatments/dental-implants',
          },
          {
            treatmentName: 'Puentes Fijos de Zirconio',
            treatmentSub: 'Zirconio Monolítico Alemán',
            idealFor: '1–3 piezas ausentes con dientes pilares firmes',
            lifespan: '15–20 Años (5 Años de Garantía)',
            duration: '4–6 Días (1 Viaje)',
            preparation: 'Tallado de dientes contiguos',
            clinicalMetric: '1200+ MPa Resistencia a la Flexión',
            href: '/treatments/dental-bridge',
          },
          {
            treatmentName: 'Sobredentadura con Anclaje',
            treatmentSub: 'Locator sin Paladar',
            idealFor: 'Edentulismo total que busca prótesis fija sin paladar',
            lifespan: '10–15 Años',
            duration: '4–6 Días / 2 Viajes',
            preparation: 'Fijada sobre 2–4 mini implantes',
            clinicalMetric: 'Sin Cobertura Palatina y Sin Movimiento',
            href: '/treatments/dentures',
          },
          {
            treatmentName: 'All-on-4 / All-on-6',
            treatmentSub: 'Puente Fijo de Zirconio',
            idealFor: 'Sin dientes en la arcada; busca dientes fijos definitivos',
            lifespan: 'Garantía Internacional de por Vida',
            duration: '2 Viajes (3 Días + 5 Días)',
            preparation: 'Implantes guiados por TAC en toda la arcada',
            clinicalMetric: '100% de Restauración de la Masticación',
            href: '/treatments/dental-implants/all-on-4-implants',
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
            clinicalMetric: 'Translucidez Opalescente Natural',
            href: '/treatments/dental-veneers',
          },
          {
            treatmentName: 'Coronas de Zirconio Alemán',
            treatmentSub: 'Zirconio Monolítico Multicapa',
            idealFor: 'Dientes muy destruidos o endodonciados',
            lifespan: '15–20+ Años (5 Años de Garantía)',
            duration: '4–6 Días (1 Viaje)',
            preparation: 'Recubrimiento 360° del diente',
            clinicalMetric: '1200+ MPa Resistencia a la Fractura',
            href: '/treatments/dental-crowns',
          },
          {
            treatmentName: 'Hollywood Smile Makeover',
            treatmentSub: 'Reconstrucción Estética Integral',
            idealFor: 'Sonrisa blanca y armónica según la proporción áurea',
            lifespan: '15–20+ Años',
            duration: '4–6 Días (1 Viaje)',
            preparation: 'Combinación personalizada de carillas y coronas',
            clinicalMetric: 'Alineación 3D DSD en Proporción Áurea',
            href: '/treatments/cosmetic-dentistry',
          },
          {
            treatmentName: 'Endodoncia Microscópica',
            treatmentSub: 'Microscopio Carl Zeiss',
            idealFor: 'Infecciones y dolor agudo; conservación de la raíz',
            lifespan: 'De por vida con corona de protección',
            duration: '1–2 Días (1–2 Sesiones)',
            preparation: 'Desinfección y sellado de conductos',
            clinicalMetric: 'Precisión Óptica Carl Zeiss 25x',
            href: '/treatments/general-dentistry',
          },
        ],
      },
    },
  },
  ru: {
    heading: 'Какое стоматологическое лечение подходит именно вам?',
    subText:
      'Сравните долговечность, время пребывания в Анталье, степень обточки зубов и клинические показатели прочности. Нажмите на любую строку для перехода к деталям процедуры.',
    thTreatment: 'Метод лечения',
    thIdealFor: 'Клинические показания',
    thLifespan: 'Срок службы и гарантия',
    thDuration: 'Срок в Анталье',
    thPreparation: 'Обработка зубов',
    thScore: 'Клинический показатель прочности',
    footerNote:
      'Клиническое примечание: Индивидуальный план лечения утверждается врачами после 3D КТ диагностики на консультации в Master Smile Studio.',
    categories: {
      missing: {
        tabLabel: 'Восстановление отсутствующих зубов и челюсти',
        rows: [
          {
            treatmentName: 'Имплантация зубов',
            treatmentSub: 'Титан / Straumann',
            idealFor: 'Единичная или множественная потеря зубов; нормальная кость',
            lifespan: 'Пожизненная международная гарантия',
            duration: '1–2 Визита (3–5 Дней)',
            preparation: 'Соседние зубы не обтачиваются (100% сохранность)',
            clinicalMetric: '100% Стабильность Остеоинтеграции',
            href: '/treatments/dental-implants',
          },
          {
            treatmentName: 'Мостовидный протез',
            treatmentSub: 'Монолитный цирконий',
            idealFor: 'Отсутствие 1–3 зубов при наличии крепких опорных зубов',
            lifespan: '15–20 лет (5 лет гарантии)',
            duration: '4–6 Дней (1 Визит)',
            preparation: 'Круговое обтачивание опорных зубов',
            clinicalMetric: 'Прочность на изгиб 1200+ МПа',
            href: '/treatments/dental-bridge',
          },
          {
            treatmentName: 'Замковый протез Overdenture',
            treatmentSub: 'Крепление Locator без неба',
            idealFor: 'Полная адентия; надежная фиксация без неба и клея',
            lifespan: '10–15 лет',
            duration: '4–6 Дней / 2 Визита',
            preparation: 'Фиксация на 2–4 мини-имплантах',
            clinicalMetric: 'Конструкция без неба без смещения',
            href: '/treatments/dentures',
          },
          {
            treatmentName: 'All-on-4 / All-on-6',
            treatmentSub: 'Несъемный циркониевый мост',
            idealFor: 'Полное отсутствие зубов; желание иметь несъемные зубы',
            lifespan: 'Пожизненная международная гарантия',
            duration: '2 Визита (3 Дня + 5 Дней)',
            preparation: 'Хирургическая имплантация всей челюсти',
            clinicalMetric: '100% Восстановление жевательной силы',
            href: '/treatments/dental-implants/all-on-4-implants',
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
            clinicalMetric: 'Естественная опалесцирующая прозрачность',
            href: '/treatments/dental-veneers',
          },
          {
            treatmentName: 'Немецкие коронки из циркония',
            treatmentSub: 'Монолитный многослойный цирконий',
            idealFor: 'Сильно разрушенные или депульпированные зубы',
            lifespan: '15–20+ лет (5 лет гарантии)',
            duration: '4–6 Дней (1 Визит)',
            preparation: 'Круговое препарирование на 360°',
            clinicalMetric: 'Устойчивость к трещинам 1200+ МПа',
            href: '/treatments/dental-crowns',
          },
          {
            treatmentName: 'Голливудская улыбка Makeover',
            treatmentSub: 'Комплексная реконструкция',
            idealFor: 'Белоснежная улыбка по правилу золотого сечения',
            lifespan: '15–20+ лет',
            duration: '4–6 Дней (1 Визит)',
            preparation: 'Индивидуальный подбор виниров и коронок',
            clinicalMetric: 'Дизайн 3D DSD по золотому сечению',
            href: '/treatments/cosmetic-dentistry',
          },
          {
            treatmentName: 'Лечение каналов под микроскопом',
            treatmentSub: 'Эндодонтия Carl Zeiss',
            idealFor: 'Глубокий кариес и боль; спасение собственного зуба',
            lifespan: 'Пожизненно под защитой коронки',
            duration: '1–2 Дня (1–2 Сеанса)',
            preparation: 'Очистка и герметизация каналов',
            clinicalMetric: 'Оптическая точность Carl Zeiss 25x',
            href: '/treatments/general-dentistry',
          },
        ],
      },
    },
  },
};

export default function TreatmentComparisonMatrix() {
  const locale = useLocale();
  const router = useRouter();
  const dict = MATRIX_DATA[locale] || MATRIX_DATA.en;
  const [activeTab, setActiveTab] = useState<'missing' | 'aesthetic'>('missing');

  const currentCategory = dict.categories[activeTab];

  return (
    <section aria-labelledby="matrix-heading" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.headerWrap}>
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
            {dict.categories.missing.tabLabel}
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${
              activeTab === 'aesthetic' ? styles.tabBtnActive : ''
            }`}
            onClick={() => setActiveTab('aesthetic')}
          >
            {dict.categories.aesthetic.tabLabel}
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
                </tr>
              </thead>
              <tbody>
                {currentCategory.rows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={styles.clickableRow}
                    onClick={() => router.push(row.href)}
                    role="link"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        router.push(row.href);
                      }
                    }}
                  >
                    <td>
                      <Link
                        href={row.href}
                        className={styles.treatmentLink}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className={styles.treatmentCell}>
                          {row.treatmentName}
                        </span>
                        <span className={styles.treatmentCellSub}>
                          {row.treatmentSub}
                        </span>
                      </Link>
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
                      <span className={styles.metricBadge}>
                        {row.clinicalMetric}
                      </span>
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
