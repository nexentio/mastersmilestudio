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

const BRIDGE_PACKAGES_I18N: Record<string, PackageDict> = {
  en: {
    badge: 'ALL-INCLUSIVE DENTAL BRIDGE PACKAGES',
    title: 'Popular Dental Bridge Packages in Antalya',
    subtitle: 'High-strength Zirconia & Implant-Supported bridge packages with 5-star hotel accommodation and VIP chauffeur transfers.',
    durationLabel: 'Treatment Duration:',
    featuresTitle: 'Package Inclusions:',
    ctaText: 'Get Quote & Book',
    packages: {
      pkg1Name: '3-Unit Zirconia Fixed Bridge Package',
      pkg1Badge: 'Single Gap Solution',
      pkg1Duration: '4 - 5 Days',
      pkg1Features: [
        '3-Unit German Amann Girrbach Zirconia Bridge (2 Abutments + 1 Pontic)',
        '3Shape CAD/CAM Digital Intraoral Precision Scanning',
        'Painless Local Anesthesia & Temporary Bridge Included',
        '5-Star Luxury Hotel (4 Nights with Breakfast)',
        'VIP Airport & Clinic Chauffeur Transfers',
        '5-Year Official Clinical Warranty',
      ],
      pkg2Name: '4-Unit Monolithic Zirconia Bridge Package',
      pkg2Badge: 'Most Popular',
      pkg2Duration: '5 - 6 Days',
      pkg2Features: [
        '4-Unit High-Strength Monolithic Zirconia Bridge',
        'Bite Alignment & Microscopic Occlusion Analysis',
        'Master Ceramist Custom Hand-Layering & Glazing',
        '5-Star Luxury Hotel (5 Nights with Breakfast)',
        'Private VIP Mercedes Chauffeur Service',
        'Complete Oral Care Kit & Medications',
      ],
      pkg3Name: 'Implant-Supported Bridge Rehabilitation',
      pkg3Badge: 'Implants + Bridge Combo',
      pkg3Duration: '5 - 6 Days',
      pkg3Features: [
        '2 Premium Titanium Implants + 4-Unit Zirconia Bridge',
        'Zero Reduction on Natural Adjacent Teeth',
        '5-Star Suite Hotel Accommodation (6 Nights)',
        'Dedicated Personal Host & Multi-Lingual Coordinator',
        'Custom Bruxism Night Guard Included',
        'Lifetime Implant & 5-Year Bridge Warranty',
      ],
    },
  },
  tr: {
    badge: 'HER ŞEY DAHİL DİŞ KÖPRÜSÜ PAKETLERİ',
    title: 'Antalya Popüler Diş Köprüsü & Zirkonyum Paketleri',
    subtitle: 'Alman Zirkonyum kalitesi, implant destekli çözümler, 5 yıldızlı otel konaklaması ve VIP transfer ile şeffaf paketler.',
    durationLabel: 'Tedavi Süresi:',
    featuresTitle: 'Pakete Dahil Hizmetler:',
    ctaText: 'Teklif Al & Randevu',
    packages: {
      pkg1Name: '3 Üyeli Zirkonyum Sabit Köprü Paketi',
      pkg1Badge: 'Tek Diş Eksikliği Çözümü',
      pkg1Duration: '4 - 5 Gün',
      pkg1Features: [
        '3 Üyeli Alman Amann Girrbach Zirkonyum Köprü (2 Ayak + 1 Gövde)',
        '3Shape CAD/CAM 3D Dijital Ağız İçi Tarama',
        'Ağrısız Lokal Anestezi ve Geçici Köprü Dişler Dahil',
        '5 Yıldızlı Lüks Otel (4 Gece Oda & Kahvaltı)',
        'VIP Havalimanı ve Klinik Özel Transferleri',
        '5 Yıl Resmi Klinik Kalite Garantisi',
      ],
      pkg2Name: '4 Üyeli Monolitik Zirkonyum Köprü Paketi',
      pkg2Badge: 'En Çok Tercih Edilen',
      pkg2Duration: '5 - 6 Gün',
      pkg2Features: [
        '4 Üyeli Yüksek Mukavemetli Monolitik Zirkonyum Köprü',
        'Tam Çiğneme ve Kapanış (Oklüzyon) Analizi',
        'Uzman Seramist Tarafından Özel El İşçiliği ve Renklendirme',
        '5 Yıldızlı Lüks Otel (5 Gece Oda & Kahvaltı)',
        'Özel VIP Mercedes Şoförlü Transfer Hizmeti',
        'Kapsamlı Ağız Bakım Kiti ve İlaçlar',
      ],
      pkg3Name: 'İmplant Destekli Köprü Rehabilitasyonu',
      pkg3Badge: 'İmplant + Köprü Kombini',
      pkg3Duration: '5 - 6 Gün',
      pkg3Features: [
        '2 Adet Premium Titanyum İmplant + 4 Üyeli Zirkonyum Köprü',
        'Komşu Doğal Dişlere Hiç Dokunulmadan Sabit Çözüm',
        '5 Yıldızlı Süit Otel Konaklaması (6 Gece)',
        'Kişisel Hasta Danışmanı ve Tercüman Desteği',
        'Kişiye Özel Koruyucu Gece Plağı Hediyesi',
        'Ömür Boyu İmplant ve 5 Yıl Köprü Garanti Sertifikası',
      ],
    },
  },
  de: {
    badge: 'ALL-INCLUSIVE ZAHNBRÜCKEN-PAKETE',
    title: 'Beliebte Zahnbrücken-Pakete in Antalya',
    subtitle: 'Hochfeste Zirkon- und implantatgetragene Brücken inklusive 5-Sterne-Hotel und VIP-Transfers.',
    durationLabel: 'Behandlungsdauer:',
    featuresTitle: 'Im Paket enthalten:',
    ctaText: 'Angebot anfordern',
    packages: {
      pkg1Name: '3-Gliedrige Zirkonbrücke Paket',
      pkg1Badge: 'Einzelzahnlücke',
      pkg1Duration: '4 - 5 Tage',
      pkg1Features: [
        '3-Gliedrige deutsche Amann Girrbach Zirkonbrücke',
        '3Shape CAD/CAM 3D Intraoralscanner Präzision',
        'Schmerzfreie Behandlung & Provisorische Brücke inklusive',
        '5-Sterne-Luxushotel (4 Nächte mit Frühstück)',
        'VIP-Flughafen- und Klinik-Chauffeurservice',
        '5 Jahre offizielle Garantie',
      ],
      pkg2Name: '4-Gliedrige Monolithische Zirkonbrücke',
      pkg2Badge: 'Bestseller',
      pkg2Duration: '5 - 6 Tage',
      pkg2Features: [
        '4-Gliedrige hochfeste Zirkonbrücke für Seitenzähne',
        'Präzise Bissanalyse und Okklusionsabstimmung',
        'Meisterkeramiker-Veredelung und Farbglanz',
        '5-Sterne-Luxushotel (5 Nächte mit Frühstück)',
        'VIP-Mercedes-Transferservice',
        'Pflegeset und Medikamente inklusive',
      ],
      pkg3Name: 'Implantatgetragene Brückenversorgung',
      pkg3Badge: 'Implantat + Brücke',
      pkg3Duration: '5 - 6 Tage',
      pkg3Features: [
        '2 Premium-Titanimplantate + 4-Gliedrige Zirkonbrücke',
        'Kein Beschleifen der gesunden Nachbarzähne',
        '5-Sterne-Suite-Hotelaufenthalt (6 Nächte)',
        'Persönlicher deutschsprachiger Betreuer',
        'Individuelle Knirscherschiene inklusive',
        'Lebenslange Implantat- und 5 Jahre Brückengarantie',
      ],
    },
  },
  pl: {
    badge: 'PAKIETY MOSTÓW ZĘBOWYCH ALL-INCLUSIVE',
    title: 'Popularne Pakiety Mostów Protetycznych w Antalyi',
    subtitle: 'Niemiecki tlenek cyrkonu i mosty na implantach z 5-gwiazdkowym hotelem i transferami VIP.',
    durationLabel: 'Czas trwania:',
    featuresTitle: 'W pakiecie zawarte:',
    ctaText: 'Odbierz Wycenę',
    packages: {
      pkg1Name: 'Pakiet 3-Punktowego Mostu Cyrkonowego',
      pkg1Badge: 'Pojedyncza Luka',
      pkg1Duration: '4 - 5 Dni',
      pkg1Features: [
        '3-Punktowy Most Cyrkonowy Amann Girrbach (2 filary + 1 przęsło)',
        'Precyzyjne Cyfrowe Skanowanie 3D CAD/CAM',
        'Bezbolesne Znieczulenie i Most Tymczasowy',
        '5-Gwiazdkowy Luksusowy Hotel (4 noce ze śniadaniem)',
        'Prywatny Transfer VIP z Lotniska i Kliniki',
        '5 Lat Gwarancji Jakości',
      ],
      pkg2Name: 'Pakiet 4-Punktowego Mostu Cyrkonowego',
      pkg2Badge: 'Najpopularniejszy',
      pkg2Duration: '5 - 6 Dni',
      pkg2Features: [
        '4-Punktowy Monolityczny Most Cyrkonowy o Wysokiej Twardości',
        'Dokładna Analiza Zwarcia i Okluzji',
        'Ręczne Wykończenie przez Mistrza Ceramiki',
        '5-Gwiazdkowy Luksusowy Hotel (5 nocy ze śniadaniem)',
        'Prywatny Chauffeur VIP Mercedes',
        'Zestaw do Pielęgnacji i Leki',
      ],
      pkg3Name: 'Most Protetyczny na Implantach',
      pkg3Badge: 'Implanty + Most',
      pkg3Duration: '5 - 6 Dni',
      pkg3Features: [
        '2 Implanty Premium + 4-Punktowy Most Cyrkonowy',
        'Ochrona Własnych Zębów bez Ich Szlifowania',
        'Apartament w 5-Gwiazdkowym Hotelu (6 nocy)',
        'Dedykowany Polski Koordynator i Kierowca VIP',
        'Szyna Relaksacyjna / Ochronna na Noc w Cenie',
        'Dożywotnia Gwarancja na Implanty i 5 Lat na Most',
      ],
    },
  },
  pt: {
    badge: 'PACOTES DE PONTES DENTÁRIAS ALL-INCLUSIVE',
    title: 'Pacotes Populares de Pontes Dentárias em Antalya',
    subtitle: 'Pontes em zircônia alemã e sobre implantes com hotel 5 estrelas e transfers VIP em Antalya.',
    durationLabel: 'Duração do Tratamento:',
    featuresTitle: 'Incluso no Pacote:',
    ctaText: 'Solicitar Orçamento',
    packages: {
      pkg1Name: 'Pacote Ponte em Zircônia de 3 Elementos',
      pkg1Badge: 'Solução para Falha Única',
      pkg1Duration: '4 - 5 Dias',
      pkg1Features: [
        'Ponte de 3 Elementos em Zircônia Amann Girrbach',
        'Escaneamento Intraoral 3D CAD/CAM',
        'Anestesia Indolor e Ponte Provisória Inclusa',
        'Hotel de Luxo 5 Estrelas (4 noites com café)',
        'Transfers VIP Aeroporto e Clínica',
        '5 Anos de Garantia Clínica',
      ],
      pkg2Name: 'Ponte em Zircônia Monolítica de 4 Elementos',
      pkg2Badge: 'Mais Procurado',
      pkg2Duration: '5 - 6 Dias',
      pkg2Features: [
        'Ponte Monolítica de Alta Resistência para Dentes Posteriores',
        'Ajuste Oclusal e de Mordida Preciso',
        'Estratificação e Acabamento por Mestre Ceramista',
        'Hotel de Luxo 5 Estrelas (5 noites com café)',
        'Transfers VIP em Mercedes com Motorista',
        'Kit de Cuidados e Medicação Inclusos',
      ],
      pkg3Name: 'Ponte Dentária Fixada sobre Implantes',
      pkg3Badge: 'Implantes + Ponte',
      pkg3Duration: '5 - 6 Dias',
      pkg3Features: [
        '2 Implantes de Titânio Premium + Ponte em Zircônia de 4 Elementos',
        'Zero Desgaste nos Dentes Naturais Vizinhos',
        'Hospedagem em Suíte 5 Estrelas (6 noites)',
        'Anfitrião Pessoal e Atendimento em Português',
        'Placa Noturna de Bruxismo Inclusa',
        'Garantia Vitalícia nos Implantes e 5 Anos na Ponte',
      ],
    },
  },
  es: {
    badge: 'PAQUETES DE PUENTES DENTALES TODO INCLUIDO',
    title: 'Paquetes Populares de Puentes Dentales en Antalya',
    subtitle: 'Puentes de zirconio alemán e implanto-soportados con hotel 5 estrellas y traslados VIP.',
    durationLabel: 'Duración del Tratamiento:',
    featuresTitle: 'Incluido en el Paquete:',
    ctaText: 'Pedir Presupuesto',
    packages: {
      pkg1Name: 'Paquete de Puente de Zirconio de 3 Piezas',
      pkg1Badge: 'Solución Espacio Individual',
      pkg1Duration: '4 - 5 Días',
      pkg1Features: [
        'Puente de Zirconio Alemán Amann Girrbach de 3 Piezas',
        'Escaneo 3D Digital Intraoral CAD/CAM',
        'Anestesia Indolora y Puente Provisional Incluido',
        'Hotel de Lujo 5 Estrellas (4 noches con desayuno)',
        'Traslados VIP Aeropuerto y Clínica',
        '5 Años de Garantía Clínica Oficial',
      ],
      pkg2Name: 'Puente de Zirconio Monolítico de 4 Piezas',
      pkg2Badge: 'Más Popular',
      pkg2Duration: '5 - 6 Días',
      pkg2Features: [
        'Puente Monolítico de Zirconio de Alta Resistencia',
        'Alineación Completa de Oclusión y Mordida',
        'Estratificación y Glaseado por Maestro Ceramista',
        'Hotel de Lujo 5 Estrellas (5 noches con desayuno)',
        'Chófer VIP Privado en Mercedes',
        'Kit Completo de Cuidado Bucal y Medicación',
      ],
      pkg3Name: 'Rehabilitación con Puente sobre Implantes',
      pkg3Badge: 'Implantes + Puente',
      pkg3Duration: '5 - 6 Días',
      pkg3Features: [
        '2 Implantes de Titanio Prémium + Puente de Zirconio de 4 Piezas',
        'Sin Tallar ni Dañar los Dientes Sanos Vecinos',
        'Alojamiento en Suite 5 Estrellas (6 noches)',
        'Asistente Personal en su Idioma',
        'Férula de Descarga Nocturna de Regalo',
        'Garantía de por Vida en Implantes y 5 Años en Puente',
      ],
    },
  },
  ru: {
    badge: 'ПАКЕТЫ МОСТОВИДНЫХ ПРОТЕЗОВ «ВСЕ ВКЛЮЧЕНО»',
    title: 'Популярные пакеты зубных мостов в Анталье',
    subtitle: 'Немецкие циркониевые и мостовидные протезы на имплантах с проживанием в 5★ отеле и VIP-трансфером.',
    durationLabel: 'Длительность лечения:',
    featuresTitle: 'В пакет включено:',
    ctaText: 'Получить расчет',
    packages: {
      pkg1Name: '3-единичный циркониевый мостовидный протез',
      pkg1Badge: 'Восстановление 1 зуба',
      pkg1Duration: '4 - 5 дней',
      pkg1Features: [
        '3-единичный немецкий циркониевый мост Amann Girrbach',
        'Цифровое 3D-сканирование CAD/CAM',
        'Безболезненная анестезия и временный мост',
        '5-звездочный отель (4 ночи с завтраком)',
        'VIP-трансфер из аэропорта и клиники',
        '5 лет официальной гарантии',
      ],
      pkg2Name: '4-единичный монолитный циркониевый мост',
      pkg2Badge: 'Самый популярный',
      pkg2Duration: '5 - 6 дней',
      pkg2Features: [
        '4-единичный высокопрочный мостовидный протез из циркония',
        'Точный анализ окклюзии и смыкания зубов',
        'Ручная доработка мастером-керамистом',
        '5-звездочный отель (5 ночей с завтраком)',
        'Личный VIP-водитель на автомобилях Mercedes',
        'Набор для ухода и медикаменты',
      ],
      pkg3Name: 'Мостовидный протез на имплантатах',
      pkg3Badge: 'Импланты + Мост',
      pkg3Duration: '5 - 6 дней',
      pkg3Features: [
        '2 премиальных имплантата + 4-единичный циркониевый мост',
        'Сохранение соседних здоровых зубов без обточки',
        'Проживание в люксе 5★ отеля (6 ночей)',
        'Русскоязычный координатор и личный водитель',
        'Индивидуальная ночная капа в подарок',
        'Пожизненная гарантия на импланты и 5 лет на мост',
      ],
    },
  },
};

const BRIDGE_IMAGES = [
  '/treatments/accordion/zirconium-implant-copy.webp',
  '/treatments/accordion/full-mouth-implant.webp',
  '/treatments/accordion/porcelain-laminate-copy.webp',
];

export default function TreatmentBridgePackagesSlider() {
  const locale = useLocale();
  const dict = BRIDGE_PACKAGES_I18N[locale] || BRIDGE_PACKAGES_I18N.en;
  const p = dict.packages;

  const [mobileIndex, setMobileIndex] = useState(0);

  const packagesList: PackageItem[] = [
    {
      name: p.pkg1Name,
      badge: p.pkg1Badge,
      img: BRIDGE_IMAGES[0],
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
      img: BRIDGE_IMAGES[1],
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
      img: BRIDGE_IMAGES[2],
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
    <section aria-labelledby="bridge-packages-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.head}>
          <span className={styles.badge}>{dict.badge}</span>
          <h2 id="bridge-packages-heading" className={styles.title}>
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
              aria-label="Previous bridge package"
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
              aria-label="Next bridge package"
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
