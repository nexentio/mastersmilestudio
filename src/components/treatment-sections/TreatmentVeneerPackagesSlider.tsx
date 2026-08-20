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

const PACKAGES_I18N: Record<string, PackageDict> = {
  en: {
    badge: 'ALL-INCLUSIVE VENEER PACKAGES',
    title: 'Popular Dental Veneer Packages in Antalya',
    subtitle: 'Transparent pricing with 5-star hotel accommodation, VIP chauffeur transfers, and Swiss & German Ivoclar E-Max veneers.',
    durationLabel: 'Treatment Duration:',
    featuresTitle: 'Package Inclusions:',
    ctaText: 'Get Quote & Book',
    packages: {
      pkg1Name: '8 Upper Teeth Natural Smile (Ivoclar E-Max)',
      pkg1Badge: 'Most Popular',
      pkg1Duration: '4 - 5 Days',
      pkg1Features: [
        '8 Ultra-Thin Ivoclar E-Max Porcelain Veneers',
        'Digital Smile Design (3D Mock-Up Preview)',
        'Local Anesthesia & Pain-Free Minimal Preparation',
        '5-Star Luxury Hotel (4 Nights with Breakfast)',
        'VIP Airport & Clinic Chauffeur Transfers',
        '5-Year Studio Quality Warranty',
      ],
      pkg2Name: '16 Teeth Full Smile Transformation (E-Max)',
      pkg2Badge: 'Best Value',
      pkg2Duration: '5 - 6 Days',
      pkg2Features: [
        '16 Upper & Lower Ivoclar E-Max Veneers',
        '3D Digital Face & Smile Harmonic Analysis',
        'Master Dental Ceramist Custom Hand-Layering',
        '5-Star Luxury Hotel (5 Nights with Breakfast)',
        'VIP Mercedes Chauffeur Transfers',
        'Comprehensive Aftercare Kit & Medications',
      ],
      pkg3Name: '20 Teeth Hollywood Smile VIP Makeover',
      pkg3Badge: 'VIP Full Makeover',
      pkg3Duration: '6 - 7 Days',
      pkg3Features: [
        '20 Premium E-Max / Empress Veneers (Full Mouth)',
        'Complete Aesthetic Contouring & Gum Harmonization',
        '5-Star Suite Hotel Accommodation (6 Nights)',
        'Private VIP Chauffeur & Personal Host/Translator',
        'Night Guard (Bruxism Protection) Included',
        'Lifetime Aesthetic Quality Guarantee',
      ],
    },
  },
  tr: {
    badge: 'HER ŞEY DAHİL LAMİNA PAKETLERİ',
    title: 'Antalya Popüler Diş Kaplama & Lamina Paketleri',
    subtitle: '5 yıldızlı otel konaklaması, VIP transferler ve orijinal Ivoclar E-Max porselen kalitesiyle şeffaf paketler.',
    durationLabel: 'Tedavi Süresi:',
    featuresTitle: 'Pakete Dahil Hizmetler:',
    ctaText: 'Teklif Al & Randevu',
    packages: {
      pkg1Name: '8 Üst Diş Doğal Gülüş Paketi (Ivoclar E-Max)',
      pkg1Badge: 'En Çok Tercih Edilen',
      pkg1Duration: '4 - 5 Gün',
      pkg1Features: [
        '8 Adet Orijinal Ivoclar E-Max Porselen Lamina',
        'Dijital Gülüş Tasarımı (3D Mock-Up Deneme)',
        'Ağrısız Minimal Aşındırma & Lokal Anestezi',
        '5 Yıldızlı Lüks Otel (4 Gece Oda & Kahvaltı)',
        'VIP Havalimanı ve Klinik Transferleri',
        '5 Yıl Klinik Kalite Garantisi',
      ],
      pkg2Name: '16 Diş Tam Gülüş Dönüşümü (E-Max)',
      pkg2Badge: 'En İyi Fiyat/Performans',
      pkg2Duration: '5 - 6 Gün',
      pkg2Features: [
        '16 Adet Alt ve Üst Ivoclar E-Max Lamina',
        '3D Dijital Yüz & Gülüş Uyum Analizi',
        'Uzman Seramist Tarafından Özel El İşçiliği',
        '5 Yıldızlı Lüks Otel (5 Gece Oda & Kahvaltı)',
        'VIP Özel Şoförlü Mercedes Transferleri',
        'Kapsamlı Ağız Bakım Kiti ve İlaçlar',
      ],
      pkg3Name: '20 Diş Hollywood Smile VIP Gülüş Paketi',
      pkg3Badge: 'VIP Komple Dönüşüm',
      pkg3Duration: '6 - 7 Gün',
      pkg3Features: [
        '20 Adet Premium E-Max / Empress Lamina (Tam Ağız)',
        'Tam Estetik Konturlama ve Diş Eti Uyumlaması',
        '5 Yıldızlı Süit Otel Konaklaması (6 Gece)',
        'Özel VIP Şoför ve Bireysel Hasta Danışmanı',
        'Kişiye Özel Gece Plağı (Koruma) Hediyesi',
        'Ömür Boyu Estetik Kalite Güvencesi',
      ],
    },
  },
  de: {
    badge: 'ALL-INCLUSIVE VENEERS-PAKETE',
    title: 'Beliebte Veneer-Pakete in Antalya',
    subtitle: 'Transparente Festpreise inklusive 5-Sterne-Hotel, VIP-Transfers und original Ivoclar E-Max Keramik.',
    durationLabel: 'Behandlungsdauer:',
    featuresTitle: 'Im Paket enthalten:',
    ctaText: 'Angebot anfordern',
    packages: {
      pkg1Name: '8 Obere Zähne Natural Smile (Ivoclar E-Max)',
      pkg1Badge: 'Sehr Beliebt',
      pkg1Duration: '4 - 5 Tage',
      pkg1Features: [
        '8 Hauchdünne Ivoclar E-Max Porzellan-Veneers',
        'Digitales Smile Design (3D Mock-Up Vorschau)',
        'Schmerzfreie minimale Präparation & Lokalanästhesie',
        '5-Sterne-Luxushotel (4 Nächte mit Frühstück)',
        'VIP-Flughafen- und Klinik-Chauffeurtransfers',
        '5 Jahre Qualitätsgarantie',
      ],
      pkg2Name: '16 Zähne Full Smile Transformation (E-Max)',
      pkg2Badge: 'Bestes Angebot',
      pkg2Duration: '5 - 6 Tage',
      pkg2Features: [
        '16 E-Max Veneers für Ober- und Unterkiefer',
        '3D-Gesichts- & Lächelanalyse',
        'Individuelle Meisterkeramiker-Handarbeit',
        '5-Sterne-Luxushotel (5 Nächte mit Frühstück)',
        'VIP-Mercedes-Transferservice',
        'Umfassendes Nachsorge-Set und Medikamente',
      ],
      pkg3Name: '20 Zähne Hollywood Smile VIP Makeover',
      pkg3Badge: 'VIP Komplettpaket',
      pkg3Duration: '6 - 7 Tage',
      pkg3Features: [
        '20 Premium E-Max / Empress Veneers (Komplett)',
        'Vollständige ästhetische Zahnfleischharmonisierung',
        '5-Sterne-Suite-Hotelaufenthalt (6 Nächte)',
        'Privater VIP-Chauffeur und persönlicher Betreuer',
        'Individuelle Knirschschiene (Nightguard) inklusive',
        'Lebenslange ästhetische Garantie',
      ],
    },
  },
  pl: {
    badge: 'PAKIETY LICÓWEK ALL-INCLUSIVE',
    title: 'Popularne Pakiety Licówek w Antalyi',
    subtitle: 'Przejrzyste ceny z 5-gwiazdkowym hotelem, transferami VIP oraz oryginalnymi licówkami Ivoclar E-Max.',
    durationLabel: 'Czas trwania:',
    featuresTitle: 'W pakiecie zawarte:',
    ctaText: 'Odbierz Wycenę',
    packages: {
      pkg1Name: 'Pakiet 8 Licówek Górnych (Ivoclar E-Max)',
      pkg1Badge: 'Najpopularniejszy',
      pkg1Duration: '4 - 5 Dni',
      pkg1Features: [
        '8 Ultra-Cienkich Licówek Porcelanowych Ivoclar E-Max',
        'Cyfrowe Projektowanie Uśmiechu (Przymiarka 3D Mock-Up)',
        'Bezbolesna minimalna preparacja i znieczulenie miejscowe',
        '5-Gwiazdkowy Luksusowy Hotel (4 noce ze śniadaniem)',
        'Transfery VIP z lotniska i do kliniki',
        '5 Lat Gwarancji Jakości',
      ],
      pkg2Name: 'Pakiet 16 Licówek Pełny Uśmiech (E-Max)',
      pkg2Badge: 'Najlepsza Wartość',
      pkg2Duration: '5 - 6 Dni',
      pkg2Features: [
        '16 Licówek E-Max na Górny i Dolny Łuk',
        'Harmonijna Analiza Twarzy i Uśmiechu 3D',
        'Ręczne Warstwowanie przez Mistrza Ceramiki',
        '5-Gwiazdkowy Luksusowy Hotel (5 nocy ze śniadaniem)',
        'Prywatny Chauffeur VIP Mercedes',
        'Zestaw do Pielęgnacji Pozabiegowej i Leki',
      ],
      pkg3Name: 'Pakiet 20 Licówek Hollywood Smile VIP',
      pkg3Badge: 'VIP Pełna Metamorfoza',
      pkg3Duration: '6 - 7 Dni',
      pkg3Features: [
        '20 Licówek Premium E-Max / Empress (Cała Jama Ustna)',
        'Kompletne Modelowanie Estetyczne i Plastyka Dziąseł',
        'Apartament w 5-Gwiazdkowym Hotelu (6 nocy)',
        'Prywatny Kierowca VIP i Osobisty Opiekun',
        'Szyna Relaksacyjna / Ochronna na Noc w Cenie',
        'Dożywotnia Gwarancja Estetyczna',
      ],
    },
  },
  pt: {
    badge: 'PACOTES DE FACETAS ALL-INCLUSIVE',
    title: 'Pacotes Populares de Facetas em Antalya',
    subtitle: 'Preços transparentes com hotel 5 estrelas, transfers VIP e facetas de porcelana Ivoclar E-Max.',
    durationLabel: 'Duração do Tratamento:',
    featuresTitle: 'Incluso no Pacote:',
    ctaText: 'Solicitar Orçamento',
    packages: {
      pkg1Name: '8 Facetas Superiores Natural Smile (E-Max)',
      pkg1Badge: 'Mais Procurado',
      pkg1Duration: '4 - 5 Dias',
      pkg1Features: [
        '8 Facetas de Porcelana Ultrafinas Ivoclar E-Max',
        'Design Digital do Sorriso (Prévia 3D Mock-Up)',
        'Preparo Mínimo Indolor e Anestesia Local',
        'Hotel de Luxo 5 Estrelas (4 noites com café da manhã)',
        'Transfers VIP Aeroporto e Clínica',
        '5 Anos de Garantia de Qualidade',
      ],
      pkg2Name: '16 Facetas Transformação Completa (E-Max)',
      pkg2Badge: 'Melhor Custo-Benefício',
      pkg2Duration: '5 - 6 Dias',
      pkg2Features: [
        '16 Facetas E-Max para Arcada Superior e Inferior',
        'Análise 3D de Harmonia Facial e do Sorriso',
        'Trabalho Artesanal por Mestre Ceramista',
        'Hotel de Luxo 5 Estrelas (5 noites com café da manhã)',
        'Transfers VIP em Mercedes com Motorista',
        'Kit Completo de Cuidados Pós-Procedimento',
      ],
      pkg3Name: '20 Facetas Hollywood Smile VIP Makeover',
      pkg3Badge: 'VIP Transformação Total',
      pkg3Duration: '6 - 7 Dias',
      pkg3Features: [
        '20 Facetas Premium E-Max / Empress (Boca Completa)',
        'Harmonização Gengival e Contorno Estético Completo',
        'Hospedagem em Suíte de Hotel 5 Estrelas (6 noites)',
        'Motorista VIP Privativo e Anfitrião Pessoal',
        'Placa de Bruxismo Noturna Inclusa',
        'Garantia Estética Vitalícia',
      ],
    },
  },
  es: {
    badge: 'PAQUETES DE CARILLAS TODO INCLUIDO',
    title: 'Paquetes Populares de Carillas en Antalya',
    subtitle: 'Precios transparentes con hotel 5 estrellas, traslados VIP y carillas de porcelana Ivoclar E-Max.',
    durationLabel: 'Duración del Tratamiento:',
    featuresTitle: 'Incluido en el Paquete:',
    ctaText: 'Pedir Presupuesto',
    packages: {
      pkg1Name: '8 Carillas Superiores Sonrisa Natural (E-Max)',
      pkg1Badge: 'Más Popular',
      pkg1Duration: '4 - 5 Días',
      pkg1Features: [
        '8 Carillas de Porcelana Ultrafinas Ivoclar E-Max',
        'Diseño Digital de Sonrisa (Prueba 3D Mock-Up)',
        'Preparación Mínima Indolora y Anestesia Local',
        'Hotel de Lujo 5 Estrellas (4 noches con desayuno)',
        'Traslados VIP Aeropuerto y Clínica',
        '5 Años de Garantía de Calidad',
      ],
      pkg2Name: '16 Carillas Transformación Completa (E-Max)',
      pkg2Badge: 'Mejor Valor',
      pkg2Duration: '5 - 6 Días',
      pkg2Features: [
        '16 Carillas E-Max Superiores e Inferiores',
        'Análisis 3D de Armonía Facial y de Sonrisa',
        'Estratificación Artesanal por Maestro Ceramista',
        'Hotel de Lujo 5 Estrellas (5 noches con desayuno)',
        'Traslados VIP en Mercedes con Chófer',
        'Kit Completo de Cuidados Posteriores y Medicación',
      ],
      pkg3Name: '20 Carillas Hollywood Smile VIP Makeover',
      pkg3Badge: 'VIP Transformación Total',
      pkg3Duration: '6 - 7 Días',
      pkg3Features: [
        '20 Carillas Prémium E-Max / Empress (Boca Completa)',
        'Armonización Gingival y Contorneado Estético Total',
        'Alojamiento en Suite de Hotel 5 Estrellas (6 noches)',
        'Chófer VIP Privado y Asistente Personal en su Idioma',
        'Férula de Descarga Nocturna (Protección) Incluida',
        'Garantía Estética de por Vida',
      ],
    },
  },
  ru: {
    badge: 'ПАКЕТЫ ВИНИРОВ «ВСЕ ВКЛЮЧЕНО»',
    title: 'Популярные пакеты виниров в Анталье',
    subtitle: 'Прозрачные цены с проживанием в 5-звездочном отеле, VIP-трансфером и оригинальной керамикой Ivoclar E-Max.',
    durationLabel: 'Длительность лечения:',
    featuresTitle: 'В пакет включено:',
    ctaText: 'Получить расчет',
    packages: {
      pkg1Name: '8 верхних виниров Естественная Улыбка (E-Max)',
      pkg1Badge: 'Самый популярный',
      pkg1Duration: '4 - 5 дней',
      pkg1Features: [
        '8 ультратонких керамических виниров Ivoclar E-Max',
        'Цифровой дизайн улыбки (3D Mock-Up примерка)',
        'Безболезненная минимальная обработка и анестезия',
        '5-звездочный отель (4 ночи с завтраком)',
        'VIP-трансфер из аэропорта и клиники',
        '5 лет гарантии качества',
      ],
      pkg2Name: '16 виниров Полное Преображение (E-Max)',
      pkg2Badge: 'Лучшая цена',
      pkg2Duration: '5 - 6 дней',
      pkg2Features: [
        '16 виниров E-Max на верхнюю и нижнюю челюсти',
        '3D гармонический анализ лица и улыбки',
        'Индивидуальная ручная работа мастера-керамиста',
        '5-звездочный отель (5 ночей с завтраком)',
        'VIP-трансфер на автомобилях Mercedes',
        'Полный набор для ухода и медикаменты',
      ],
      pkg3Name: '20 виниров Голливудская Улыбка VIP',
      pkg3Badge: 'VIP Полное Преображение',
      pkg3Duration: '6 - 7 дней',
      pkg3Features: [
        '20 премиальных виниров E-Max / Empress (Вся улыбка)',
        'Полная эстетическая гармонизация десневого контура',
        'Проживание в люксе 5-звездочного отеля (6 ночей)',
        'Личный VIP-водитель и русскоязычный координатор',
        'Индивидуальная ночная капа (защита) в подарок',
        'Пожизненная эстетическая гарантия',
      ],
    },
  },
};

const VENEER_IMAGES = [
  '/treatments/accordion/porcelain-laminate.webp',
  '/treatments/accordion/e-max-laminate.webp',
  '/treatments/accordion/lumineers.webp',
];

export default function TreatmentVeneerPackagesSlider() {
  const locale = useLocale();
  const dict = PACKAGES_I18N[locale] || PACKAGES_I18N.en;
  const p = dict.packages;

  const packagesList: PackageItem[] = [
    {
      name: p.pkg1Name,
      badge: p.pkg1Badge,
      img: VENEER_IMAGES[0],
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
      img: VENEER_IMAGES[1],
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
      img: VENEER_IMAGES[2],
      imgAlt: p.pkg3Name,
      durationLabel: dict.durationLabel,
      durationVal: p.pkg3Duration,
      featuresTitle: dict.featuresTitle,
      features: p.pkg3Features,
      ctaText: dict.ctaText,
    },
  ];

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.head}>
          <h2 className={styles.title}>
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
