'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentVeneerPackagesSlider.module.css';

interface PackageItem {
  name: string;
  badge?: string;
  img: string;
  imgAlt: string;
  durationLabel: string;
  durationVal: string;
  featuresTitle: string;
  features: string[];
  ctaText: string;
}

interface PackageDict {
  badge: string;
  title: string;
  subtitle: string;
  durationLabel: string;
  featuresTitle: string;
  ctaText: string;
  packages: {
    pkg1Name: string;
    pkg1Badge: string;
    pkg1Duration: string;
    pkg1Features: string[];
    pkg2Name: string;
    pkg2Badge: string;
    pkg2Duration: string;
    pkg2Features: string[];
    pkg3Name: string;
    pkg3Badge: string;
    pkg3Duration: string;
    pkg3Features: string[];
  };
}

const GENERAL_PACKAGES_I18N: Record<string, PackageDict> = {
  en: {
    badge: 'ALL-INCLUSIVE GENERAL DENTAL CARE',
    title: 'Popular General & Preventive Dental Packages in Antalya',
    subtitle: 'Comprehensive checkups, 3D CBCT imaging, microscopic root canal therapy, and gentle periodontal cleaning.',
    durationLabel: 'Treatment Duration:',
    featuresTitle: 'Package Inclusions:',
    ctaText: 'Get Quote & Book',
    packages: {
      pkg1Name: 'Full Oral Health Checkup & Air-Flow Deep Clean',
      pkg1Badge: 'Essential Prevention',
      pkg1Duration: '1 - 2 Days',
      pkg1Features: [
        'Comprehensive 3D CBCT Panoramic X-Ray & Digital Cavity Scan',
        'Ultrasonic Scaling & Gentle Subgingival Plaque Removal',
        'Swiss Air-Flow Polishing & Enamel Stain Elimination',
        'Fluoride Enamel Strengthening Therapy',
        'Detailed Treatment Plan & Oral Hygiene Consultation',
        'VIP Airport & Clinic Transfer Service Included',
      ],
      pkg2Name: 'Microscopic Root Canal & Ceramic Restoration',
      pkg2Badge: 'Tooth Preservation',
      pkg2Duration: '2 - 3 Days',
      pkg2Features: [
        'High-Magnification Microscopic Endodontic Root Canal Therapy',
        '3D Thermoplastic Biocompatible Canal Obturation',
        'Custom CAD/CAM Ceramic Inlay / Onlay or Crown Restoration',
        'Digital Post-Treatment X-Ray Verification',
        '5-Star Luxury Hotel (2 Nights with Breakfast)',
        'Private VIP Mercedes Chauffeur Transfers',
      ],
      pkg3Name: 'Full Mouth Periodontal Health & Deep Curettage',
      pkg3Badge: 'Gum Rehabilitation',
      pkg3Duration: '3 - 4 Days',
      pkg3Features: [
        'Full Arch Ultrasonic Subgingival Deep Scaling & Root Planing',
        'Diode Laser Bacterial Decontamination of Periodontal Pockets',
        'Antiseptic Irrigation & Guided Tissue Healing Therapy',
        'Custom Night Guard for Bruxism & Tooth Protection',
        '5-Star Luxury Hotel (3 Nights with Breakfast)',
        'Personal International Patient Host & Language Coordinator',
      ],
    },
  },
  tr: {
    badge: 'HER ŞEY DAHİL GENEL DİŞ SAĞLIĞI',
    title: 'Antalya Popüler Genel & Koruyucu Diş Tedavisi Paketleri',
    subtitle: 'Kapsamlı muayene, 3D Tomografi, mikroskobik kanal tedavisi ve konforlu diş eti temizliği.',
    durationLabel: 'Tedavi Süresi:',
    featuresTitle: 'Pakete Dahil Hizmetler:',
    ctaText: 'Teklif Al & Randevu',
    packages: {
      pkg1Name: 'Kapsamlı Ağız Sağlığı Kontrolü & Air-Flow Temizlik',
      pkg1Badge: 'Temel Koruyucu Bakım',
      pkg1Duration: '1 - 2 Gün',
      pkg1Features: [
        'Kapsamlı 3D CBCT Panoramik Röntgen ve Dijital Çürük Taraması',
        'Ultrasonik Diş Taşı Temizliği & Diş Eti Altı Plak Uzaklaştırma',
        'İsviçre Air-Flow İleri Cila & Çay/Kahve Leke Temizliği',
        'Mine Güçlendirici Koruyucu Florür Uygulaması',
        'Detaylı Tedavi Planı & Bireysel Ağız Hijyeni Danışmanlığı',
        'VIP Havalimanı ve Klinik Özel Transferleri',
      ],
      pkg2Name: 'Mikroskobik Kanal Tedavisi & Seramik Dolgu',
      pkg2Badge: 'Diş Kurtarma Paketi',
      pkg2Duration: '2 - 3 Gün',
      pkg2Features: [
        'Yüksek Büyütmeli Mikroskop Altında Kök Kanal Tedavisi',
        '3D Termoplastik Biyouyumlu Kanal Dolumu ve Dezenfeksiyon',
        'Kişiye Özel CAD/CAM Seramik Onlay / Dolgu Restorasyonu',
        'Dijital Tedavi Sonrası Kontrol Röntgen Doğrulaması',
        '5 Yıldızlı Lüks Otel Konaklaması (2 Gece Oda & Kahvaltı)',
        'Özel VIP Mercedes Şoförlü Transfer Hizmeti',
      ],
      pkg3Name: 'Tam Ağız Diş Eti Tedavisi & Derin Küretaj',
      pkg3Badge: 'Diş Eti İyileştirme',
      pkg3Duration: '3 - 4 Gün',
      pkg3Features: [
        'Tüm Çene Ultrasonik Kök Yüzeyi Düzleştirme & Derin Küretaj',
        'Diyot Lazer ile Diş Eti Cebi Bakteriyel Dekontaminasyonu',
        'Antiseptik İrrigasyon ve Diş Eti Dokusu İyileştirme Tedavisi',
        'Diş Sıkmaya (Bruksizm) Karşı Kişiye Özel Gece Koruma Plağı',
        '5 Yıldızlı Lüks Otel Konaklaması (3 Gece Oda & Kahvaltı)',
        'Kişisel Hasta Danışmanı ve Tercüman Desteği',
      ],
    },
  },
  de: {
    badge: 'ALL-INCLUSIVE ALLGEMEINE ZAHNMEDIZIN',
    title: 'Beliebte Pakete für Zahnerhalt & Prophylaxe in Antalya',
    subtitle: 'Umfassende Diagnostik, 3D CBCT Röntgen, mikroskopische Wurzelbehandlung und schonende Parodontitistherapie.',
    durationLabel: 'Behandlungsdauer:',
    featuresTitle: 'Im Paket enthalten:',
    ctaText: 'Angebot anfordern',
    packages: {
      pkg1Name: 'Vollständiger Checkup & Air-Flow Tiefenreinigung',
      pkg1Badge: 'Basis-Prophylaxe',
      pkg1Duration: '1 - 2 Tage',
      pkg1Features: [
        '3D CBCT Panorama-Röntgen & digitale Kariesdiagnostik',
        'Ultraschall-Zahnsteinentfernung & subgingivale Plaque-Entfernung',
        'Schweizer Air-Flow Politur & Beseitigung hartnäckiger Verfärbungen',
        'Remineralisierende Schmelzfluoridierung',
        'Detaillierter Behandlungsplan & Mundhygiene-Beratung',
        'VIP-Flughafen- und Klinik-Chauffeurservice',
      ],
      pkg2Name: 'Mikroskopische Wurzelbehandlung & Keramik-Inlay',
      pkg2Badge: 'Zahnerhaltungs-Paket',
      pkg2Duration: '2 - 3 Tage',
      pkg2Features: [
        'Präzise Wurzelkanalbehandlung unter dem Dentalmikroskop',
        'Thermoplastische 3D-Wurzelkanalfüllung und Desinfektion',
        'Passgenaues CAD/CAM Keramik-Inlay / Teilkrone',
        'Digitale Kontrollaufnahme zur Qualitätsprüfung',
        '5-Sterne-Luxushotel (2 Nächte mit Frühstück)',
        'VIP-Mercedes-Transferservice',
      ],
      pkg3Name: 'Parodontitistherapie & Tiefenkürettage',
      pkg3Badge: 'Zahnfleisch-Regeneration',
      pkg3Duration: '3 - 4 Tage',
      pkg3Features: [
        'Vollständige subgingivale Ultraschall-Kürettage & Wurzelglättung',
        'Diodenlaser-Dekontamination entzündeter Zahnfleischtaschen',
        'Antiseptische Tiefenspülung und Heilungsförderung',
        'Individuelle Knirscherschiene zum Schutz der Zähne',
        '5-Sterne-Luxushotel (3 Nächte mit Frühstück)',
        'Persönlicher deutschsprachiger Betreuer',
      ],
    },
  },
  pl: {
    badge: 'PAKIETY STOMATOLOGII ZACHOWAWCZEJ ALL-INCLUSIVE',
    title: 'Popularne Pakiety Stomatologii Ogólnej i Profilaktyki w Antalyi',
    subtitle: 'Kompleksowa diagnostyka 3D CBCT, leczenie kanałowe pod mikroskopem i bezbolesne leczenie przyzębia.',
    durationLabel: 'Czas trwania:',
    featuresTitle: 'W pakiecie zawarte:',
    ctaText: 'Odbierz Wycenę',
    packages: {
      pkg1Name: 'Kompleksowy Przegląd & Higienizacja Air-Flow',
      pkg1Badge: 'Podstawowa Profilaktyka',
      pkg1Duration: '1 - 2 Dni',
      pkg1Features: [
        'Pantomograficzne zdjęcie 3D CBCT i cyfrowa diagnostyka próchnicy',
        'Ultradźwiękowy skaling i usuwanie kamienia poddziąsłowego',
        'Szwajcarskie piaskowanie Air-Flow i polerowanie szkliwa',
        'Wzmacniająca fluoryzacja szkliwa',
        'Indywidualny plan leczenia i instruktaż higieny',
        'Prywatny transfer VIP z lotniska i kliniki',
      ],
      pkg2Name: 'Leczenie Kanałowe pod Mikroskopem & Odbudowa Ceramiczna',
      pkg2Badge: 'Ratowanie Zęba',
      pkg2Duration: '2 - 3 Dni',
      pkg2Features: [
        'Precyzyjna endodoncja pod mikroskopem stomatologicznym',
        'Termoplastyczne trójwymiarowe wypełnienie kanałów korzeniowych',
        'Indywidualny ceramiczny Inlay / Onlay lub korona CAD/CAM',
        'Kontrolne cyfrowe zdjęcie RTG potwierdzające szczelność',
        '5-Gwiazdkowy Luksusowy Hotel (2 noce ze śniadaniem)',
        'Prywatny Chauffeur VIP Mercedes',
      ],
      pkg3Name: 'Leczenie Paradontozy & Kiretaż Głębokich Kieszonek',
      pkg3Badge: 'Zdrowe Dziąsła',
      pkg3Duration: '3 - 4 Dni',
      pkg3Features: [
        'Głęboki kiretaż poddziąsłowy i wygładzanie korzeni (SRP)',
        'Laserowa dekontaminacja kieszonek dziąsłowych laserem diodowym',
        'Płukanie antyseptyczne i stymulacja regeneracji tkanek',
        'Indywidualna szyna relaksacyjna na noc chroniąca zęby',
        '5-Gwiazdkowy Luksusowy Hotel (3 noce ze śniadaniem)',
        'Dedykowany Polski Koordynator i Kierowca VIP',
      ],
    },
  },
  pt: {
    badge: 'PACOTES DE CLÍNICA GERAL E PREVENÇÃO ALL-INCLUSIVE',
    title: 'Pacotes Populares de Odontologia Geral e Saúde Bucal em Antalya',
    subtitle: 'Checkup digital 3D CBCT, endodontia microscópica, restaurações estéticas e tratamento periodontal a laser.',
    durationLabel: 'Duração do Tratamento:',
    featuresTitle: 'Incluso no Pacote:',
    ctaText: 'Solicitar Orçamento',
    packages: {
      pkg1Name: 'Checkup Bucal Completo & Profilaxia Air-Flow',
      pkg1Badge: 'Prevenção Essencial',
      pkg1Duration: '1 - 2 Dias',
      pkg1Features: [
        'Tomografia 3D CBCT Panorâmica e mapeamento digital de cáries',
        'Raspagem ultrassônica e remoção de placa subgengival',
        'Jato de bicarbonato suíço Air-Flow para remoção de manchas',
        'Aplicação tópica de flúor para fortalecimento do esmalte',
        'Plano de tratamento completo e orientação de higiene oral',
        'Transfers VIP Aeroporto e Clínica inclusos',
      ],
      pkg2Name: 'Canal Microscópico & Restauração Cerâmica Inlay',
      pkg2Badge: 'Preservação Dental',
      pkg2Duration: '2 - 3 Dias',
      pkg2Features: [
        'Tratamento de canal de alta precisão sob microscópio clínico',
        'Obturação termoplástica 3D biocompatível dos canais',
        'Inlay / Onlay cerâmico em porcelana pura CAD/CAM',
        'Radiografia digital de controle pós-tratamento',
        'Hotel de Luxo 5 Estrelas (2 noites com café)',
        'Transfers VIP em Mercedes com Motorista',
      ],
      pkg3Name: 'Tratamento Periodontal Completo & Curetagem Profunda',
      pkg3Badge: 'Saúde Gengival',
      pkg3Duration: '3 - 4 Dias',
      pkg3Features: [
        'Curetagem subgengival ultrassônica e alisamento radicular',
        'Descontaminação bacteriana das bolsas com laser de diodo',
        'Irrigação antisséptica profunda e estímulo de cicatrização',
        'Placa de bruxismo personalizada para proteção noturna',
        'Hotel de Luxo 5 Estrelas (3 noites com café)',
        'Anfitrião Pessoal e Atendimento em Português',
      ],
    },
  },
  es: {
    badge: 'PAQUETES DE ODONTOLOGÍA GENERAL TODO INCLUIDO',
    title: 'Paquetes Populares de Odontología General y Prevención en Antalya',
    subtitle: 'Diagnóstico 3D CBCT, endodoncia microscópica, empastes estéticos y tratamiento periodontal con láser.',
    durationLabel: 'Duración del Tratamiento:',
    featuresTitle: 'Incluido en el Paquete:',
    ctaText: 'Pedir Presupuesto',
    packages: {
      pkg1Name: 'Revisión Completa & Limpieza Profunda Air-Flow',
      pkg1Badge: 'Prevención Esencial',
      pkg1Duration: '1 - 2 Días',
      pkg1Features: [
        'Tomografía 3D CBCT Panorámica y escaneo digital de caries',
        'Limpieza por ultrasonidos y eliminación de sarro subgingival',
        'Aeropulidor suizo Air-Flow para eliminación de manchas de café/té',
        'Fluorización intensiva para fortalecer el esmalte dental',
        'Plan de tratamiento exhaustivo y asesoramiento de higiene',
        'Traslados VIP Aeropuerto y Clínica incluidos',
      ],
      pkg2Name: 'Endodoncia Microscópica & Restauración Cerámica',
      pkg2Badge: 'Salvamento Dental',
      pkg2Duration: '2 - 3 Días',
      pkg2Features: [
        'Tratamiento de conductos bajo microscopio de alta magnificación',
        'Obturación 3D termoplástica biocompatible y desinfección',
        'Inlay / Onlay cerámico personalizado en CAD/CAM',
        'Radiografía digital de control postratamiento',
        'Hotel de Lujo 5 Estrelas (2 noches con desayuno)',
        'Chófer VIP Privado en Mercedes',
      ],
      pkg3Name: 'Tratamiento Periodontal & Curetaje Profundo',
      pkg3Badge: 'Regeneración Gingival',
      pkg3Duration: '3 - 4 Días',
      pkg3Features: [
        'Curetaje subgingival completo por ultrasonidos y raspado radicular',
        'Descontaminación bacteriana de bolsas con láser de diodo',
        'Irrigación antiséptica profunda y terapia de cicatrización',
        'Férula de descarga nocturna para bruxismo a medida',
        'Hotel de Lujo 5 Estrellas (3 noches con desayuno)',
        'Asistente Personal en su Idioma',
      ],
    },
  },
  ru: {
    badge: 'ПАКЕТЫ ТЕРАПЕВТИЧЕСКОЙ СТОМАТОЛОГИИ «ВСЕ ВКЛЮЧЕНО»',
    title: 'Популярные пакеты общей стоматологии и профилактики в Анталье',
    subtitle: 'Комплексная 3D CBCT диагностика, эндодонтия под микроскопом, эстетические пломбы и лечение десен лазером.',
    durationLabel: 'Длительность лечения:',
    featuresTitle: 'В пакет включено:',
    ctaText: 'Получить расчет',
    packages: {
      pkg1Name: 'Полный чекап полости рта & Чистка Air-Flow',
      pkg1Badge: 'Базовая профилактика',
      pkg1Duration: '1 - 2 дня',
      pkg1Features: [
        '3D CBCT панорамная томография и цифровая диагностика кариеса',
        'Ультразвуковое удаление поддесневого зубного камня и налета',
        'Швейцарская полировка Air-Flow и устранение пигментации',
        'Укрепление эмали глубоким фторированием',
        'Подробный план лечения и рекомендации по уходу',
        'VIP-трансфер из аэропорта и клиники',
      ],
      pkg2Name: 'Лечение каналов под микроскопом & Керамическая вкладка',
      pkg2Badge: 'Спасение зуба',
      pkg2Duration: '2 - 3 дня',
      pkg2Features: [
        'Высокоточное лечение каналов под дентальным микроскопом',
        '3D термопластическая трехмерная обтурация каналов',
        'Керамическая вкладка Inlay/Onlay из CAD/CAM керамики',
        'Контрольный цифровой рентгеновский снимок',
        '5-звездочный отель (2 ночи с завтраком)',
        'Личный VIP-водитель на автомобилях Mercedes',
      ],
      pkg3Name: 'Лечение пародонтита & Глубокий кюретаж десен',
      pkg3Badge: 'Здоровые десны',
      pkg3Duration: '3 - 4 дня',
      pkg3Features: [
        'Ультразвуковой поддесневой кюретаж и сглаживание корней (SRP)',
        'Лазерная стерилизация пародонтальных карманов диодным лазером',
        'Антисептическая обработка и стимуляция заживления тканей',
        'Индивидуальная защитная ночная капа от бруксизма',
        '5-звездочный отель (3 ночи с завтраком)',
        'Русскоязычный координатор и личный водитель',
      ],
    },
  },
};

const GENERAL_IMAGES = [
  '/treatments/accordion/lumineers.webp',
  '/treatments/accordion/porcelain-laminate-copy.webp',
  '/treatments/accordion/full-mouth-implant.webp',
];

export default function TreatmentGeneralPackagesSlider() {
  const locale = useLocale();
  const dict = GENERAL_PACKAGES_I18N[locale] || GENERAL_PACKAGES_I18N.en;
  const p = dict.packages;

  const packagesList: PackageItem[] = [
    {
      name: p.pkg1Name,
      badge: p.pkg1Badge,
      img: GENERAL_IMAGES[0],
      imgAlt: p.pkg1Name,
      durationLabel: dict.durationLabel,
      durationVal: p.pkg1Duration,
      featuresTitle: dict.featuresTitle,
      features: p.pkg1Features,
      ctaText: dict.ctaText,
    },
    {
      name: p.pkg2Name,
      badge: p.pkg2Badge,
      img: GENERAL_IMAGES[1],
      imgAlt: p.pkg2Name,
      durationLabel: dict.durationLabel,
      durationVal: p.pkg2Duration,
      featuresTitle: dict.featuresTitle,
      features: p.pkg2Features,
      ctaText: dict.ctaText,
    },
    {
      name: p.pkg3Name,
      badge: p.pkg3Badge,
      img: GENERAL_IMAGES[2],
      imgAlt: p.pkg3Name,
      durationLabel: dict.durationLabel,
      durationVal: p.pkg3Duration,
      featuresTitle: dict.featuresTitle,
      features: p.pkg3Features,
      ctaText: dict.ctaText,
    },
  ];

  return (
    <section aria-labelledby="general-packages-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.head}>
          <span className={styles.badge}>{dict.badge}</span>
          <h2 id="general-packages-heading" className={styles.title}>
            {dict.title}
          </h2>
          <p className={styles.subtitle}>{dict.subtitle}</p>
        </div>

        {/* Desktop 3-Card Grid */}
        <div className={styles.gridDesktop}>
          {packagesList.map((pkg, idx) => (
            <article key={idx} className={styles.card}>
              <div>
                {pkg.badge && <span className={styles.cardBadge}>{pkg.badge}</span>}
                <h3 className={styles.header}>{pkg.name}</h3>

                <div className={styles.imgWrap}>
                  <img
                    src={pkg.img}
                    alt={pkg.imgAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className={styles.duration}>
                  <span className={styles.durationLabel}>{pkg.durationLabel}</span>
                  <span className={styles.durationVal}>{pkg.durationVal}</span>
                </div>

                <div className={styles.featuresTitle}>{pkg.featuresTitle}</div>
                <ul className={styles.featuresList}>
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardAction}>
                <Link href="/contact" className={styles.ctaBtn}>
                  {pkg.ctaText}
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Horizontal Swipe Track */}
        <div className={styles.mobileTrack}>
          {packagesList.map((pkg, idx) => (
            <article key={idx} className={styles.card}>
              <div>
                {pkg.badge && <span className={styles.cardBadge}>{pkg.badge}</span>}
                <h3 className={styles.header}>{pkg.name}</h3>

                <div className={styles.imgWrap}>
                  <img
                    src={pkg.img}
                    alt={pkg.imgAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className={styles.duration}>
                  <span className={styles.durationLabel}>{pkg.durationLabel}</span>
                  <span className={styles.durationVal}>{pkg.durationVal}</span>
                </div>

                <div className={styles.featuresTitle}>{pkg.featuresTitle}</div>
                <ul className={styles.featuresList}>
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <span className={styles.checkIcon}>✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardAction}>
                <Link href="/contact" className={styles.ctaBtn}>
                  {pkg.ctaText}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
