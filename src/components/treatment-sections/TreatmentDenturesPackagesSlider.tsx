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

const DENTURES_PACKAGES_I18N: Record<string, PackageDict> = {
  en: {
    badge: 'ALL-INCLUSIVE DENTURE PACKAGES',
    title: 'Popular Denture & Overdenture Packages in Antalya',
    subtitle: 'High-retention Snap-On implant overdentures and precision complete dentures with 5-star hotel accommodation and VIP transfers.',
    durationLabel: 'Treatment Duration:',
    featuresTitle: 'Package Inclusions:',
    ctaText: 'Get Quote & Book',
    packages: {
      pkg1Name: 'Premium Complete Full Dentures (Upper & Lower)',
      pkg1Badge: 'High-Impact Acrylic',
      pkg1Duration: '4 - 5 Days',
      pkg1Features: [
        'Upper & Lower High-Impact Cross-Linked Acrylic Dentures',
        'Multi-Layered Aesthetic Teeth with Natural Color Gradient',
        'Functional Impression & Anatomical Bite Analysis',
        '5-Star Luxury Hotel (4 Nights with Breakfast)',
        'VIP Airport & Clinic Chauffeur Service',
        'Official Quality Certificate & Adjustment Kit',
      ],
      pkg2Name: 'Snap-On Implant Overdentures (2 Implants)',
      pkg2Badge: 'Most Popular',
      pkg2Duration: '5 - 6 Days',
      pkg2Features: [
        '2 Premium Swiss/German Titanium Implants + Locator Attachments',
        'Reinforced Snap-On Denture with Rock-Solid Retention',
        'No Messy Adhesives & Zero Slipping During Chewing',
        '5-Star Luxury Hotel (5 Nights with Breakfast)',
        'Private VIP Mercedes Chauffeur Transfers',
        'Lifetime Implant Guarantee & Complete Care Kit',
      ],
      pkg3Name: '4-Implant Palateless Overdenture (Upper Arch)',
      pkg3Badge: 'Open-Palate Comfort',
      pkg3Duration: '5 - 6 Days',
      pkg3Features: [
        '4 Titanium Implants with Horseshoe Open-Palate Design',
        'Full Taste Sensation & Temperature Perception Restored',
        '5-Star Suite Hotel Accommodation (6 Nights)',
        'Dedicated Personal Host & Multi-Lingual Coordinator',
        'Custom Protective Night Case & Sonic Cleaning Device',
        'Lifetime Implant & 5-Year Denture Warranty',
      ],
    },
  },
  tr: {
    badge: 'HER ŞEY DAHİL PROTEZ DİŞ PAKETLERİ',
    title: 'Antalya Popüler Protez Diş & Çıt Çıtlı Damak Paketleri',
    subtitle: 'İmplant destekli çıtçıtlı protezler ve hassas tutuculu damaklar, 5 yıldızlı otel konaklaması ve VIP transfer ile.',
    durationLabel: 'Tedavi Süresi:',
    featuresTitle: 'Pakete Dahil Hizmetler:',
    ctaText: 'Teklif Al & Randevu',
    packages: {
      pkg1Name: 'Premium Tam Damak Protez (Alt & Üst Çene)',
      pkg1Badge: 'Kırılmaya Dayanıklı Akrilik',
      pkg1Duration: '4 - 5 Gün',
      pkg1Features: [
        'Alt ve Üst Çene İçin Yüksek Dayanımlı Akrilik Tam Protez',
        'Çok Katmanlı Doğal Görünümlü Estetik Dişler',
        'Fonksiyonel Ölçü ve Anatomik Kapanış Analizi',
        '5 Yıldızlı Lüks Otel (4 Gece Oda & Kahvaltı)',
        'VIP Havalimanı ve Klinik Özel Transferleri',
        'Resmi Kalite Sertifikası ve Bakım Kiti',
      ],
      pkg2Name: 'İmplant Destekli Çıt Çıtlı Protez (2 İmplant)',
      pkg2Badge: 'En Çok Tercih Edilen',
      pkg2Duration: '5 - 6 Gün',
      pkg2Features: [
        '2 Adet İsviçre/Alman Titanyum İmplant + Locator Çıtçıt Tutucu',
        'Güçlendirilmiş Damak ile Oynamayan Kilitli Tutuculuk',
        'Yapıştırıcı Krem İhtiyacını Tamamen Ortadan Kaldırır',
        '5 Yıldızlı Lüks Otel (5 Gece Oda & Kahvaltı)',
        'Özel VIP Mercedes Şoförlü Transfer Hizmeti',
        'Ömür Boyu İmplant Garantisi ve Tam Bakım Seti',
      ],
      pkg3Name: 'Damaksız Çıt Çıtlı Protez (4 İmplant Üst Çene)',
      pkg3Badge: 'Damaksız Açık Konfor',
      pkg3Duration: '5 - 6 Gün',
      pkg3Features: [
        '4 İmplant Üzerine Damaksız (Nal Tipi) Açık Protez',
        'Yemeklerin Tadını ve Sıcaklığını Tam Hissedebilme',
        '5 Yıldızlı Süit Otel Konaklaması (6 Gece)',
        'Kişisel Hasta Danışmanı ve Tercüman Desteği',
        'Özel Koruyucu Saklama Kutusu ve Ultrasonik Temizleyici',
        'Ömür Boyu İmplant ve 5 Yıl Protez Garanti Belgesi',
      ],
    },
  },
  de: {
    badge: 'ALL-INCLUSIVE PROTHESEN-PAKETE',
    title: 'Beliebte Zahnprothesen-Pakete in Antalya',
    subtitle: 'Implantatgetragene Druckknopf-Prothesen und Vollprothesen inklusive 5-Sterne-Hotel und VIP-Transfers.',
    durationLabel: 'Behandlungsdauer:',
    featuresTitle: 'Im Paket enthalten:',
    ctaText: 'Angebot anfordern',
    packages: {
      pkg1Name: 'Premium Vollprothese (Ober- & Unterkiefer)',
      pkg1Badge: 'Hochfester Kunststoff',
      pkg1Duration: '4 - 5 Tage',
      pkg1Features: [
        'Hochwertige Vollprothese für Ober- und Unterkiefer',
        'Mehrschichtige ästhetische Zähne mit natürlicher Farbgebung',
        'Funktionsabformung und präzise Bissanalyse',
        '5-Sterne-Luxushotel (4 Nächte mit Frühstück)',
        'VIP-Flughafen- und Klinik-Chauffeurservice',
        'Offizielles Qualitätszertifikat inklusive',
      ],
      pkg2Name: 'Druckknopf-Prothese (2 Implantate)',
      pkg2Badge: 'Bestseller',
      pkg2Duration: '5 - 6 Tage',
      pkg2Features: [
        '2 Premium-Titanimplantate mit Locator-Klicksystem',
        'Fester Halt ohne Wackeln und ohne Haftcreme',
        'Sicheres Kauen und klares Sprechen ab dem 1. Tag',
        '5-Sterne-Luxushotel (5 Nächte mit Frühstück)',
        'VIP-Mercedes-Transferservice',
        'Lebenslange Garantie auf Implantate',
      ],
      pkg3Name: 'Gaumenfreie Overdenture (4 Implantate)',
      pkg3Badge: 'Gaumenfreier Komfort',
      pkg3Duration: '5 - 6 Tage',
      pkg3Features: [
        '4 Titanimplantate mit hufeisenförmigem gaumenfreiem Design',
        'Volles Geschmacksempfinden und Temperaturgefühl beim Essen',
        '5-Sterne-Suite-Hotelaufenthalt (6 Nächte)',
        'Persönlicher deutschsprachiger Betreuer',
        'Ultraschall-Reinigungsgerät als Geschenk',
        'Lebenslange Garantie auf Implantate',
      ],
    },
  },
  pl: {
    badge: 'PAKIETY PROTEZ ZĘBOWYCH ALL-INCLUSIVE',
    title: 'Popularne Pakiety Protez Zębowych w Antalyi',
    subtitle: 'Protezy na zatrzaskach (Overdentures) i protezy całkowite z 5-gwiazdkowym hotelem i transferami VIP.',
    durationLabel: 'Czas trwania:',
    featuresTitle: 'W pakiecie zawarte:',
    ctaText: 'Odbierz Wycenę',
    packages: {
      pkg1Name: 'Kompletna Proteza Całkowita (Góra i Dół)',
      pkg1Badge: 'Wysokoudarzeniowy Akryl',
      pkg1Duration: '4 - 5 Dni',
      pkg1Features: [
        'Górna i Dolna Proteza Całkowita z Twardego Akrylu',
        'Wielowarstwowe Zęby Kompozytowe o Naturalnym Blasku',
        'Precyzyjny Wykres Czynnościowy i Analiza Zgryzu',
        '5-Gwiazdkowy Luksusowy Hotel (4 noce ze śniadaniem)',
        'Prywatny Transfer VIP z Lotniska i Kliniki',
        'Certyfikat Jakości i Zestaw Pielęgnacyjny',
      ],
      pkg2Name: 'Proteza na Zatrzaskach Locator (2 Implanty)',
      pkg2Badge: 'Najpopularniejszy',
      pkg2Duration: '5 - 6 Dni',
      pkg2Features: [
        '2 Implanty Tytanowe Premium + Łączniki Zatrzaskowe Locator',
        'Brak Ruchomości i Konieczności Stosowania Klejów',
        'Maksymalna Stabilność Podczas Żucia',
        '5-Gwiazdkowy Luksusowy Hotel (5 nocy ze śniadaniem)',
        'Prywatny Chauffeur VIP Mercedes',
        'Dożywotnia Gwarancja na Implanty',
      ],
      pkg3Name: 'Proteza Bezpodniebienna (4 Implanty Góra)',
      pkg3Badge: 'Komfort Bez Podniebienia',
      pkg3Duration: '5 - 6 Dni',
      pkg3Features: [
        '4 Implanty Tytanowe i Konstrukcja Otwarta Bez Płyty Podniebiennej',
        'Pełne Odczuwanie Smaku i Temperatury Potraw',
        'Apartament w 5-Gwiazdkowym Hotelu (6 nocy)',
        'Dedykowany Polski Koordynator i Kierowca VIP',
        'Myjka Ultrasoniczna do Protezy w Prezencie',
        'Dożywotnia Gwarancja na Implanty i 5 Lat na Protezę',
      ],
    },
  },
  pt: {
    badge: 'PACOTES DE PRÓTESES DENTÁRIAS ALL-INCLUSIVE',
    title: 'Pacotes Populares de Próteses Dentárias em Antalya',
    subtitle: 'Overdentures com encaixe tipo clique sobre implantes e próteses totais com hotel 5 estrelas e transfers VIP.',
    durationLabel: 'Duração do Tratamento:',
    featuresTitle: 'Incluso no Pacote:',
    ctaText: 'Solicitar Orçamento',
    packages: {
      pkg1Name: 'Prótese Total Completa (Superior & Inferior)',
      pkg1Badge: 'Acrílico de Alto Impacto',
      pkg1Duration: '4 - 5 Dias',
      pkg1Features: [
        'Próteses Totais Superior e Inferior em Acrílico de Alta Densidade',
        'Dentes Estéticos Multicamadas com Gradiente Natural',
        'Moldagem Funcional e Ajuste Oclusal Anatômico',
        'Hotel de Luxo 5 Estrelas (4 noites com café)',
        'Transfers VIP Aeroporto e Clínica',
        'Certificado Oficial de Qualidade',
      ],
      pkg2Name: 'Overdenture com Encaixe de Pressão (2 Implantes)',
      pkg2Badge: 'Mais Procurado',
      pkg2Duration: '5 - 6 Dias',
      pkg2Features: [
        '2 Implantes de Titânio Premium + Encaixes Locator',
        'Fixação Firme com Sistema de Clique Sem Cola Fixadora',
        'Mastigação Segura e Sem Deslocamentos',
        'Hotel de Luxo 5 Estrelas (5 noites com café)',
        'Transfers VIP em Mercedes com Motorista',
        'Garantia Vitalícia nos Implantes',
      ],
      pkg3Name: 'Overdenture Sem Céu da Boca (4 Implantes Superior)',
      pkg3Badge: 'Palato Livre',
      pkg3Duration: '5 - 6 Dias',
      pkg3Features: [
        '4 Implantes com Design Aberto Sem Cobertura do Palato',
        'Retorno Completo do Paladar e Sensação Térmica',
        'Hospedagem em Suíte 5 Estrelas (6 noites)',
        'Anfitrião Pessoal e Atendimento em Português',
        'Estojo Higiênico e Aparelho de Limpeza Ultrassônica',
        'Garantia Vitalícia nos Implantes e 5 Anos na Prótese',
      ],
    },
  },
  es: {
    badge: 'PAQUETES DE PRÓTESIS DENTALES TODO INCLUIDO',
    title: 'Paquetes Populares de Prótesis Dentales en Antalya',
    subtitle: 'Sobredentaduras con anclaje sobre implantes y dentaduras completas con hotel 5 estrellas y traslados VIP.',
    durationLabel: 'Duración del Tratamiento:',
    featuresTitle: 'Incluido en el Paquete:',
    ctaText: 'Pedir Presupuesto',
    packages: {
      pkg1Name: 'Dentadura Completa Total (Superior e Inferior)',
      pkg1Badge: 'Acrílico de Alto Impacto',
      pkg1Duration: '4 - 5 Días',
      pkg1Features: [
        'Prótesis Totales Superior e Inferior de Alta Resistencia',
        'Dientes Estéticos Multicapa con Tonalidad Natural',
        'Toma de Impresión Funcional y Registro de Mordida',
        'Hotel de Lujo 5 Estrellas (4 noches con desayuno)',
        'Traslados VIP Aeropuerto y Clínica',
        'Certificado de Calidad y Kit de Ajuste',
      ],
      pkg2Name: 'Sobredentadura con Anclajes Locator (2 Implantes)',
      pkg2Badge: 'Más Popular',
      pkg2Duration: '5 - 6 Días',
      pkg2Features: [
        '2 Implantes de Titanio Prémium + Anclajes Locator de Clic',
        'Sujeción Firme sin Pastas Adhesivas ni Movimientos',
        'Seguridad Total al Morder y Hablar',
        'Hotel de Lujo 5 Estrelas (5 noches con desayuno)',
        'Chófer VIP Privado en Mercedes',
        'Garantía de por Vida en Implantes',
      ],
      pkg3Name: 'Sobredentadura sin Paladar (4 Implantes Superior)',
      pkg3Badge: 'Paladar Libre',
      pkg3Duration: '5 - 6 Días',
      pkg3Features: [
        '4 Implantes con Diseño en Herradura sin Cubrir el Paladar',
        'Recuperación Completa del Gusto y Sensación Térmica',
        'Alojamiento en Suite 5 Estrellas (6 noches)',
        'Asistente Personal en su Idioma',
        'Dispositivo Ultrasónico de Limpieza de Regalo',
        'Garantía de por Vida en Implantes y 5 Años en Prótesis',
      ],
    },
  },
  ru: {
    badge: 'ПАКЕТЫ СЪЕМНЫХ ПРОТЕЗОВ «ВСЕ ВКЛЮЧЕНО»',
    title: 'Популярные пакеты зубных протезов в Анталье',
    subtitle: 'Покрывные протезы на имплантах (Overdentures) и полные съемные протезы с проживанием в 5★ отеле и VIP-трансфером.',
    durationLabel: 'Длительность лечения:',
    featuresTitle: 'В пакет включено:',
    ctaText: 'Получить расчет',
    packages: {
      pkg1Name: 'Полный съемный протез (Верхняя и нижняя челюсть)',
      pkg1Badge: 'Ударопрочный акрил',
      pkg1Duration: '4 - 5 дней',
      pkg1Features: [
        'Полные съемные протезы из немецкого высокопрочного акрила',
        'Многослойные эстетичные искусственные зубы',
        'Функциональный слепок и компьютерный анализ прикуса',
        '5-звездочный отель (4 ночи с завтраком)',
        'VIP-трансфер из аэропорта и клиники',
        'Официальный сертификат качества и набор по уходу',
      ],
      pkg2Name: 'Протез на кнопочных замках Locator (2 импланта)',
      pkg2Badge: 'Самый популярный',
      pkg2Duration: '5 - 6 дней',
      pkg2Features: [
        '2 титановых имплантата + замковые крепления Locator',
        'Надежная кнопочная фиксация без фиксирующего клея',
        'Абсолютная стабильность при жевании и разговоре',
        '5-звездочный отель (5 ночей с завтраком)',
        'Личный VIP-водитель на автомобилях Mercedes',
        'Пожизненная гарантия на имплантаты',
      ],
      pkg3Name: 'Протез без нёба на 4 имплантатах (Верхняя челюсть)',
      pkg3Badge: 'Свободное нёбо',
      pkg3Duration: '5 - 6 дней',
      pkg3Features: [
        '4 имплантата и подковообразная конструкция без перекрытия нёба',
        'Полное сохранение вкусовых и температурных ощущений',
        'Проживание в люксе 5★ отеля (6 ночей)',
        'Русскоязычный координатор и личный водитель',
        'Ультразвуковая ванночка для чистки в подарок',
        'Пожизненная гарантия на импланты и 5 лет на протез',
      ],
    },
  },
};

const DENTURES_IMAGES = [
  '/treatments/accordion/complete-dentures.webp',
  '/treatments/accordion/partial-dentures.webp',
  '/treatments/accordion/implant-supported-dentures.webp',
];

export default function TreatmentDenturesPackagesSlider() {
  const locale = useLocale();
  const dict = DENTURES_PACKAGES_I18N[locale] || DENTURES_PACKAGES_I18N.en;
  const p = dict.packages;

  const packagesList: PackageItem[] = [
    {
      name: p.pkg1Name,
      badge: p.pkg1Badge,
      img: DENTURES_IMAGES[0],
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
      img: DENTURES_IMAGES[1],
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
      img: DENTURES_IMAGES[2],
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
