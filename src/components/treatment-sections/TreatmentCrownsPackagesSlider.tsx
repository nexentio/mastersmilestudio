'use client';

import React, { useState } from 'react';
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

const CROWN_PACKAGES_I18N: Record<string, PackageDict> = {
  en: {
    badge: 'ALL-INCLUSIVE CROWN PACKAGES',
    title: 'Popular Dental Crown Packages in Antalya',
    subtitle: 'High-strength German Zirconia & Ivoclar E-Max crowns with 5-star hotel accommodation and VIP chauffeur transfers.',
    durationLabel: 'Treatment Duration:',
    featuresTitle: 'Package Inclusions:',
    ctaText: 'Get Quote & Book',
    packages: {
      pkg1Name: '8 Monolithic Zirconia Crowns Package',
      pkg1Badge: 'High Strength',
      pkg1Duration: '4 - 5 Days',
      pkg1Features: [
        '8 Premium German Amann Girrbach Zirconia Crowns',
        'CAD/CAM 3D Digital Intraoral Precision Scanning',
        'Painless Local Anesthesia & Temporary Crowns Included',
        '5-Star Luxury Hotel (4 Nights with Breakfast)',
        'VIP Airport & Clinic Chauffeur Service',
        '5-Year Official Clinical Guarantee',
      ],
      pkg2Name: '16 Zirconia & E-Max Aesthetic Crown Package',
      pkg2Badge: 'Most Popular',
      pkg2Duration: '5 - 6 Days',
      pkg2Features: [
        '16 Monolithic Zirconia or Ivoclar E-Max Crowns',
        '3D Digital Smile Harmony & Custom Shade Matching',
        'Master Ceramist Micro-Layering & Glazing',
        '5-Star Luxury Hotel (5 Nights with Breakfast)',
        'Private VIP Mercedes Chauffeur Transfers',
        'Complete Oral Care Kit & Medications',
      ],
      pkg3Name: '20 Full Mouth Zirconia Hollywood Makeover',
      pkg3Badge: 'Full Mouth Restoration',
      pkg3Duration: '6 - 7 Days',
      pkg3Features: [
        '20 Premium Multilayer Zirconia Crowns (Full Arch)',
        'Complete Bite Alignment & Microscopic Occlusion Check',
        '5-Star Suite Hotel Accommodation (6 Nights)',
        'Dedicated Personal Host & Multi-Lingual Translator',
        'Custom Bruxism Night Guard Included',
        'Lifetime Structural Warranty Certificate',
      ],
    },
  },
  tr: {
    badge: 'HER ŞEY DAHİL KRON PAKETLERİ',
    title: 'Antalya Popüler Zirkonyum & Kron Kaplama Paketleri',
    subtitle: 'Alman Zirkonyum ve Ivoclar E-Max kalitesi, 5 yıldızlı otel konaklaması ve VIP transfer ile şeffaf fiyatlar.',
    durationLabel: 'Tedavi Süresi:',
    featuresTitle: 'Pakete Dahil Hizmetler:',
    ctaText: 'Teklif Al & Randevu',
    packages: {
      pkg1Name: '8 Adet Monolitik Zirkonyum Kron Paketi',
      pkg1Badge: 'Yüksek Dayanıklılık',
      pkg1Duration: '4 - 5 Gün',
      pkg1Features: [
        '8 Adet Orijinal Alman Amann Girrbach Zirkonyum Kron',
        'CAD/CAM 3D Dijital Ağız İçi Hassas Tarama',
        'Ağrısız Anestezi ve Geçici Dişler Dahil',
        '5 Yıldızlı Lüks Otel (4 Gece Oda & Kahvaltı)',
        'VIP Havalimanı ve Klinik Özel Transferleri',
        '5 Yıl Resmi Klinik Kalite Garantisi',
      ],
      pkg2Name: '16 Adet Estetik Zirkonyum & E-Max Kron',
      pkg2Badge: 'En Çok Tercih Edilen',
      pkg2Duration: '5 - 6 Gün',
      pkg2Features: [
        '16 Adet Monolitik Zirkonyum veya Ivoclar E-Max Kron',
        '3D Dijital Gülüş Tasarımı ve Özel Renk Eşleme',
        'Uzman Seramist Tarafından Özel El İşçiliği',
        '5 Yıldızlı Lüks Otel (5 Gece Oda & Kahvaltı)',
        'Özel VIP Mercedes Şoförlü Transfer Hizmeti',
        'Kapsamlı Ağız Bakım Kiti ve İlaçlar',
      ],
      pkg3Name: '20 Diş Tam Ağız Zirkonyum Hollywood Smile',
      pkg3Badge: 'Tam Ağız Restorasyonu',
      pkg3Duration: '6 - 7 Gün',
      pkg3Features: [
        '20 Adet Çok Katmanlı Premium Zirkonyum (Tam Ağız)',
        'Tam Çiğneme ve Kapanış (Oklüzyon) Uyumu',
        '5 Yıldızlı Süit Otel Konaklaması (6 Gece)',
        'Kişisel Hasta Danışmanı ve Tercüman Desteği',
        'Kişiye Özel Koruyucu Gece Plağı Hediyesi',
        'Ömür Boyu Yapısal Garanti Sertifikası',
      ],
    },
  },
  de: {
    badge: 'ALL-INCLUSIVE KRONEN-PAKETE',
    title: 'Beliebte Zahnkronen-Pakete in Antalya',
    subtitle: 'Hochfestes deutsches Zirkon & Ivoclar E-Max inklusive 5-Sterne-Hotel und VIP-Transfers.',
    durationLabel: 'Behandlungsdauer:',
    featuresTitle: 'Im Paket enthalten:',
    ctaText: 'Angebot anfordern',
    packages: {
      pkg1Name: '8 Monolithische Zirkonkronen Paket',
      pkg1Badge: 'Hohe Stabilität',
      pkg1Duration: '4 - 5 Tage',
      pkg1Features: [
        '8 Hochwertige deutsche Amann Girrbach Zirkonkronen',
        'CAD/CAM 3D Intraoralscanner Präzision',
        'Schmerzfreie Behandlung & Provisorische Kronen inklusive',
        '5-Sterne-Luxushotel (4 Nächte mit Frühstück)',
        'VIP-Flughafen- und Klinik-Chauffeurservice',
        '5 Jahre offizielle Garantie',
      ],
      pkg2Name: '16 Ästhetische Zirkon- & E-Max Kronen',
      pkg2Badge: 'Bestseller',
      pkg2Duration: '5 - 6 Tage',
      pkg2Features: [
        '16 Monolithische Zirkon- oder E-Max Kronen',
        '3D Digital Smile Design & Individuelle Farbanpassung',
        'Meisterkeramiker-Veredelung',
        '5-Sterne-Luxushotel (5 Nächte mit Frühstück)',
        'VIP-Mercedes-Transferservice',
        'Pflegeset und Medikamente inklusive',
      ],
      pkg3Name: '20 Zähne Full Mouth Zirkon Hollywood Smile',
      pkg3Badge: 'Vollsanierung',
      pkg3Duration: '6 - 7 Tage',
      pkg3Features: [
        '20 Premium Multilayer-Zirkonkronen (Komplett)',
        'Vollständige Bisskorrektur und Funktionsanalyse',
        '5-Sterne-Suite-Hotelaufenthalt (6 Nächte)',
        'Persönlicher deutschsprachiger Betreuer',
        'Individuelle Knirscherschiene (Night Guard) inklusive',
        'Lebenslange Qualitätsgarantie',
      ],
    },
  },
  pl: {
    badge: 'PAKIETY KORON ZĘBOWYCH ALL-INCLUSIVE',
    title: 'Popularne Pakiety Koron w Antalyi',
    subtitle: 'Niemiecki tlenek cyrkonu i Ivoclar E-Max z 5-gwiazdkowym hotelem i transferami VIP.',
    durationLabel: 'Czas trwania:',
    featuresTitle: 'W pakiecie zawarte:',
    ctaText: 'Odbierz Wycenę',
    packages: {
      pkg1Name: 'Pakiet 8 Koron Monolitycznych z Cyrkonu',
      pkg1Badge: 'Wysoka Wytrzymałość',
      pkg1Duration: '4 - 5 Dni',
      pkg1Features: [
        '8 Oryginalnych Koron Cyrkonowych Amann Girrbach',
        'Precyzyjne Skanowanie 3D CAD/CAM',
        'Bezbolesne Znieczulenie i Korony Tymczasowe',
        '5-Gwiazdkowy Luksusowy Hotel (4 noce ze śniadaniem)',
        'Transfery VIP z lotniska i do kliniki',
        '5 Lat Gwarancji Jakości',
      ],
      pkg2Name: 'Pakiet 16 Koron Cyrkonowych i E-Max',
      pkg2Badge: 'Najpopularniejszy',
      pkg2Duration: '5 - 6 Dni',
      pkg2Features: [
        '16 Koron z Monolitycznego Cyrkonu lub Ivoclar E-Max',
        'Cyfrowy Dobór Koloru i Kształtu 3D',
        'Ręczne Wykończenie przez Mistrza Ceramiki',
        '5-Gwiazdkowy Luksusowy Hotel (5 nocy ze śniadaniem)',
        'Prywatny Chauffeur VIP Mercedes',
        'Zestaw do Pielęgnacji i Leki',
      ],
      pkg3Name: 'Pakiet 20 Koron Cyrkonowych Cała Szczęka',
      pkg3Badge: 'Pełna Rekonstrukcja',
      pkg3Duration: '6 - 7 Dni',
      pkg3Features: [
        '20 Wielowarstwowych Koron Cyrkonowych Multilayer',
        'Idealne Ustawienie Zgryzu i Mikroskopowa Okluzja',
        'Apartament w 5-Gwiazdkowym Hotelu (6 nocy)',
        'Dedykowany Polski Koordynator i Kierowca VIP',
        'Szyna Relaksacyjna / Ochronna na Noc w Cenie',
        'Dożywotnia Gwarancja Strukturalna',
      ],
    },
  },
  pt: {
    badge: 'PACOTES DE COROAS ALL-INCLUSIVE',
    title: 'Pacotes Populares de Coroas em Antalya',
    subtitle: 'Zircônia alemã e Ivoclar E-Max com hotel 5 estrelas e transfers VIP em Antalya.',
    durationLabel: 'Duração do Tratamento:',
    featuresTitle: 'Incluso no Pacote:',
    ctaText: 'Solicitar Orçamento',
    packages: {
      pkg1Name: 'Pacote de 8 Coroas em Zircônia Monolítica',
      pkg1Badge: 'Alta Resistência',
      pkg1Duration: '4 - 5 Dias',
      pkg1Features: [
        '8 Coroas de Zircônia Alemã Amann Girrbach',
        'Escaneamento 3D Digital CAD/CAM',
        'Anestesia Indolor e Provisórios Inclusos',
        'Hotel de Luxo 5 Estrelas (4 noites com café)',
        'Transfers VIP Aeroporto e Clínica',
        '5 Anos de Garantia Clínica',
      ],
      pkg2Name: '16 Coroas em Zircônia & E-Max Estético',
      pkg2Badge: 'Mais Procurado',
      pkg2Duration: '5 - 6 Dias',
      pkg2Features: [
        '16 Coroas em Zircônia Monolítica ou E-Max',
        'Harmonização Digital 3D do Sorriso',
        'Estratificação por Mestre Ceramista',
        'Hotel de Luxo 5 Estrelas (5 noites com café)',
        'Transfers VIP em Mercedes com Motorista',
        'Kit de Cuidados e Medicação Inclusos',
      ],
      pkg3Name: '20 Coroas em Zircônia Boca Completa',
      pkg3Badge: 'Reabilitação Total',
      pkg3Duration: '6 - 7 Dias',
      pkg3Features: [
        '20 Coroas Multilayer Premium (Arcada Completa)',
        'Ajuste Oclusal e Mastigatório Preciso',
        'Hospedagem em Suíte 5 Estrelas (6 noites)',
        'Anfitrião Pessoal e Atendimento em Português',
        'Placa Noturna de Bruxismo Inclusa',
        'Certificado de Garantia Estrutural Vitalícia',
      ],
    },
  },
  es: {
    badge: 'PAQUETES DE CORONAS TODO INCLUIDO',
    title: 'Paquetes Populares de Coronas en Antalya',
    subtitle: 'Zirconio alemán e Ivoclar E-Max con hotel 5 estrellas y traslados VIP.',
    durationLabel: 'Duración del Tratamiento:',
    featuresTitle: 'Incluido en el Paquete:',
    ctaText: 'Pedir Presupuesto',
    packages: {
      pkg1Name: 'Paquete de 8 Coronas de Zirconio Monolítico',
      pkg1Badge: 'Alta Resistencia',
      pkg1Duration: '4 - 5 Días',
      pkg1Features: [
        '8 Coronas de Zirconio Alemán Amann Girrbach',
        'Escaneo Intraoral 3D CAD/CAM de Alta Precisión',
        'Anestesia Indolora y Coronas Provisionales',
        'Hotel de Lujo 5 Estrellas (4 noches con desayuno)',
        'Traslados VIP Aeropuerto y Clínica',
        '5 Años de Garantía Clínica Oficial',
      ],
      pkg2Name: '16 Coronas de Zirconio & E-Max Estético',
      pkg2Badge: 'Más Popular',
      pkg2Duration: '5 - 6 Días',
      pkg2Features: [
        '16 Coronas de Zirconio Monolítico o E-Max',
        'Diseño Digital 3D y Ajuste de Color a Medida',
        'Estratificación Artesanal por Ceramista',
        'Hotel de Lujo 5 Estrellas (5 noches con desayuno)',
        'Chófer VIP Privado en Mercedes',
        'Kit Completo de Cuidado Bucal y Medicación',
      ],
      pkg3Name: '20 Coronas de Zirconio Boca Completa',
      pkg3Badge: 'Rehabilitación Total',
      pkg3Duration: '6 - 7 Días',
      pkg3Features: [
        '20 Coronas de Zirconio Multicapa (Boca Completa)',
        'Alineación Completa de Mordida y Oclusión',
        'Alojamiento en Suite 5 Estrelas (6 noches)',
        'Asistente Personal en su Idioma',
        'Férula de Descarga Nocturna de Regalo',
        'Garantía Estructural de por Vida',
      ],
    },
  },
  ru: {
    badge: 'ПАКЕТЫ КОРОНОК «ВСЕ ВКЛЮЧЕНО»',
    title: 'Популярные пакеты коронок в Анталье',
    subtitle: 'Немецкий цирконий и Ivoclar E-Max с проживанием в 5★ отеле и VIP-трансфером.',
    durationLabel: 'Длительность лечения:',
    featuresTitle: 'В пакет включено:',
    ctaText: 'Получить расчет',
    packages: {
      pkg1Name: '8 коронок из монолитного циркония',
      pkg1Badge: 'Высокая прочность',
      pkg1Duration: '4 - 5 дней',
      pkg1Features: [
        '8 оригинальных немецких коронок Amann Girrbach',
        'Цифровое 3D-сканирование CAD/CAM',
        'Безболезненная анестезия и временные коронки',
        '5-звездочный отель (4 ночи с завтраком)',
        'VIP-трансфер из аэропорта и клиники',
        '5 лет официальной гарантии',
      ],
      pkg2Name: '16 коронок из циркония и E-Max',
      pkg2Badge: 'Самый популярный',
      pkg2Duration: '5 - 6 дней',
      pkg2Features: [
        '16 коронок из монолитного циркония или E-Max',
        'Цифровой дизайн улыбки и подбор оттенка',
        'Ручная доработка мастером-керамистом',
        '5-звездочный отель (5 ночей с завтраком)',
        'Личный VIP-водитель на автомобилях Mercedes',
        'Набор для ухода и медикаменты',
      ],
      pkg3Name: '20 коронок Полное Преображение (Вся челюсть)',
      pkg3Badge: 'Полная реставрация',
      pkg3Duration: '6 - 7 дней',
      pkg3Features: [
        '20 многослойных премиальных коронок Multilayer',
        'Полная коррекция прикуса и окклюзии',
        'Проживание в люксе 5★ отеля (6 ночей)',
        'Русскоязычный координатор и личный водитель',
        'Индивидуальная ночная капа в подарок',
        'Пожизненная гарантия на материал',
      ],
    },
  },
};

const CROWN_IMAGES = [
  '/treatments/accordion/zirconium-implant-copy.webp',
  '/treatments/accordion/e-max-laminate-copy.webp',
  '/treatments/accordion/porcelain-laminate-copy.webp',
];

export default function TreatmentCrownsPackagesSlider() {
  const locale = useLocale();
  const dict = CROWN_PACKAGES_I18N[locale] || CROWN_PACKAGES_I18N.en;
  const p = dict.packages;

  const [mobileIndex, setMobileIndex] = useState(0);

  const packagesList: PackageItem[] = [
    {
      name: p.pkg1Name,
      badge: p.pkg1Badge,
      img: CROWN_IMAGES[0],
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
      img: CROWN_IMAGES[1],
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
      img: CROWN_IMAGES[2],
      imgAlt: p.pkg3Name,
      durationLabel: dict.durationLabel,
      durationVal: p.pkg3Duration,
      featuresTitle: dict.featuresTitle,
      features: p.pkg3Features,
      ctaText: dict.ctaText,
    },
  ];

  const handlePrev = () => {
    setMobileIndex((prev) => (prev > 0 ? prev - 1 : packagesList.length - 1));
  };

  const handleNext = () => {
    setMobileIndex((prev) => (prev < packagesList.length - 1 ? prev + 1 : 0));
  };

  return (
    <section aria-labelledby="crown-packages-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.head}>
          <span className={styles.badge}>{dict.badge}</span>
          <h2 id="crown-packages-heading" className={styles.title}>
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
                  {pkg.ctaText} →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile 1-Card Carousel with Side Arrow Navigation */}
        <div className={styles.mobileContainer}>
          <div className={styles.mobileCardWrapper}>
            <button
              type="button"
              onClick={handlePrev}
              className={`${styles.sideArrowBtn} ${styles.sideArrowLeft}`}
              aria-label="Previous crown package"
            >
              ‹
            </button>

            <div className={styles.mobileCardInner}>
              {(() => {
                const pkg = packagesList[mobileIndex];
                return (
                  <article
                    key={mobileIndex}
                    className={`${styles.card} ${styles.fadeSlide}`}
                  >
                    <div>
                      {pkg.badge && <span className={styles.cardBadge}>{pkg.badge}</span>}
                      <h3 className={styles.header}>{pkg.name}</h3>

                      <div className={styles.imgWrap}>
                        <img
                          key={pkg.img}
                          src={pkg.img}
                          alt={pkg.imgAlt}
                          loading="lazy"
                          decoding="async"
                          className={styles.imgFadeIn}
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
                        {pkg.ctaText} →
                      </Link>
                    </div>
                  </article>
                );
              })()}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className={`${styles.sideArrowBtn} ${styles.sideArrowRight}`}
              aria-label="Next crown package"
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div className={styles.mobileDots}>
            {packagesList.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setMobileIndex(dotIdx)}
                aria-label={`Go to package ${dotIdx + 1}`}
                className={`${styles.dot} ${mobileIndex === dotIdx ? styles.dotActive : styles.dotInactive}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
