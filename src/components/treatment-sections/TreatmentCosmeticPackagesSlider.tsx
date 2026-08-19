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

const COSMETIC_PACKAGES_I18N: Record<string, PackageDict> = {
  en: {
    badge: 'ALL-INCLUSIVE SMILE MAKEOVER PACKAGES',
    title: 'Popular Cosmetic Dentistry & Hollywood Smile Packages in Antalya',
    subtitle: 'Digital Smile Design, Swiss Ivoclar E-Max veneers, laser gum contouring, and 5-star VIP hotel accommodation.',
    durationLabel: 'Treatment Duration:',
    featuresTitle: 'Package Inclusions:',
    ctaText: 'Get Quote & Book',
    packages: {
      pkg1Name: 'Express Laser Whitening & Composite Bonding',
      pkg1Badge: 'Quick Glow-Up',
      pkg1Duration: '2 - 3 Days',
      pkg1Features: [
        'In-Clinic Philips Zoom WhiteSpeed Laser Teeth Whitening (Up to 8 Shades Whiter)',
        'Up to 4 Front Teeth Aesthetic Composite Edge Bonding',
        'Ultrasonic Air-Flow Scaling & Enamel Polish',
        'Custom Home Maintenance Whitening Trays Included',
        '5-Star Luxury Hotel (3 Nights with Breakfast)',
        'VIP Airport & Clinic Chauffeur Service',
      ],
      pkg2Name: '16-Tooth E-Max Hollywood Smile Makeover',
      pkg2Badge: 'Most Popular',
      pkg2Duration: '5 - 6 Days',
      pkg2Features: [
        '16 Swiss Ivoclar E-Max Porcelain Laminates / Crowns (8 Upper + 8 Lower)',
        '3D AI Digital Smile Design & Live Mock-Up Simulation',
        'Laser Gum Contouring (Gingivoplasty for Gummy Smile)',
        '5-Star Luxury Hotel (5 Nights with Breakfast)',
        'Private VIP Mercedes Chauffeur Transfers',
        '5-Year Official Clinical Warranty & Custom Night Guard',
      ],
      pkg3Name: '20-Tooth Full Mouth Luxury Hollywood Transformation',
      pkg3Badge: 'Complete VIP Makeover',
      pkg3Duration: '6 - 7 Days',
      pkg3Features: [
        '20 Premium Multilayer Zirconia / E-Max Restorations (10 Upper + 10 Lower)',
        'Facial Golden Proportion & Lip Harmony Rebalancing',
        'Diastema Closure & Microscopic Bite Alignment',
        '5-Star Suite Hotel Accommodation (6 Nights)',
        'Dedicated Personal Host & Multi-Lingual Coordinator',
        'Lifetime Structural Material Guarantee',
      ],
    },
  },
  tr: {
    badge: 'HER ŞEY DAHİL GÜLÜŞ TASARIMI PAKETLERİ',
    title: 'Antalya Popüler Estetik Diş Hekimliği & Hollywood Smile Paketleri',
    subtitle: '3D Dijital Gülüş Tasarımı, İsviçre Ivoclar E-Max laminalar, lazerle diş eti estetiği, 5 yıldızlı otel ve VIP transfer.',
    durationLabel: 'Tedavi Süresi:',
    featuresTitle: 'Pakete Dahil Hizmetler:',
    ctaText: 'Teklif Al & Randevu',
    packages: {
      pkg1Name: 'Lazer Diş Beyazlatma & Kompozit Bonding Paketi',
      pkg1Badge: 'Hızlı Estetik Dokunuş',
      pkg1Duration: '2 - 3 Gün',
      pkg1Features: [
        'Klinik Tipi Philips Zoom WhiteSpeed Lazer Beyazlatma (8 Tona Kadar Beyazlık)',
        '4 Ön Diş İçin Estetik Kompozit Bonding / Kırık Onarımı',
        'Ultrasonik Air-Flow Diş Taşı Temizliği ve Cila',
        'Kişiye Özel Ev Tipi Pekiştirme Beyazlatma Plağı Hediyesi',
        '5 Yıldızlı Lüks Otel (3 Gece Oda & Kahvaltı)',
        'VIP Havalimanı ve Klinik Özel Transferleri',
      ],
      pkg2Name: '16 Diş E-Max Hollywood Smile Gülüş Tasarımı',
      pkg2Badge: 'En Çok Tercih Edilen',
      pkg2Duration: '5 - 6 Gün',
      pkg2Features: [
        '16 Adet İsviçre Ivoclar E-Max Porselen Lamina / Kron (8 Üst + 8 Alt)',
        '3D Yapay Zeka Destekli Dijital Gülüş Tasarımı & Mock-Up Ön İzleme',
        'Lazerle Diş Eti Estetiği (Gummy Smile Pembe Estetik Düzeltme)',
        '5 Yıldızlı Lüks Otel (5 Gece Oda & Kahvaltı)',
        'Özel VIP Mercedes Şoförlü Transfer Hizmeti',
        '5 Yıl Resmi Klinik Kalite Garantisi ve Koruyucu Gece Plağı',
      ],
      pkg3Name: '20 Diş Tam Ağız VIP Hollywood Smile Dönüşümü',
      pkg3Badge: 'Komple VIP Estetik',
      pkg3Duration: '6 - 7 Gün',
      pkg3Features: [
        '20 Adet Çok Katmanlı Zirkonyum veya E-Max (10 Üst + 10 Alt)',
        'Yüz Altın Oranı ve Dudak Dolgunluğu Uyum Analizi',
        'Ayrık Diş (Diastema) Kapatma ve Çiğneme Hizalaması',
        '5 Yıldızlı Süit Otel Konaklaması (6 Gece)',
        'Kişisel Hasta Danışmanı ve Tercüman Desteği',
        'Ömür Boyu Yapısal Materyal Garanti Sertifikası',
      ],
    },
  },
  de: {
    badge: 'ALL-INCLUSIVE SMILE DESIGN PAKETE',
    title: 'Beliebte Hollywood Smile & Ästhetik-Pakete in Antalya',
    subtitle: 'Digital Smile Design, Ivoclar E-Max Veneers, Laser-Zahnfleischkorrektur inklusive 5-Sterne-Hotel und VIP-Transfers.',
    durationLabel: 'Behandlungsdauer:',
    featuresTitle: 'Im Paket enthalten:',
    ctaText: 'Angebot anfordern',
    packages: {
      pkg1Name: 'Laser-Bleaching & Komposit-Bonding Paket',
      pkg1Badge: 'Quick Glow-Up',
      pkg1Duration: '2 - 3 Tage',
      pkg1Features: [
        'Philips Zoom WhiteSpeed Laser-Zahnaufhellung (bis zu 8 Stufen weißer)',
        'Ästhetisches Komposit-Bonding für 4 Frontzähne',
        'Professionelle Air-Flow Zahnreinigung & Politur',
        'Individuelle Home-Bleaching-Schienen für zu Hause',
        '5-Sterne-Luxushotel (3 Nächte mit Frühstück)',
        'VIP-Flughafen- und Klinik-Chauffeurservice',
      ],
      pkg2Name: '16 Zähne E-Max Hollywood Smile Makeover',
      pkg2Badge: 'Bestseller',
      pkg2Duration: '5 - 6 Tage',
      pkg2Features: [
        '16 Ivoclar E-Max Keramikveneers / Kronen (8 oben + 8 unten)',
        '3D Digital Smile Design & Live-Mock-Up Vorschau',
        'Laser-Gingivoplastik (Korrektur von Gummy Smile)',
        '5-Sterne-Luxushotel (5 Nächte mit Frühstück)',
        'VIP-Mercedes-Transferservice',
        '5 Jahre Garantie und individuelle Knirscherschiene',
      ],
      pkg3Name: '20 Zähne Full Mouth Hollywood VIP Makeover',
      pkg3Badge: 'Komplettsanierung',
      pkg3Duration: '6 - 7 Tage',
      pkg3Features: [
        '20 Premium Multilayer Zirkon / E-Max Restaurationen',
        'Gesichts-Goldener-Schnitt & Lippenharmonisierung',
        'Diastema-Schluss und Okklusionskorrektur',
        '5-Sterne-Suite-Hotelaufenthalt (6 Nächte)',
        'Persönlicher deutschsprachiger Betreuer',
        'Lebenslange Garantie auf Materialstruktur',
      ],
    },
  },
  pl: {
    badge: 'PAKIETY HOLLYWOOD SMILE ALL-INCLUSIVE',
    title: 'Popularne Pakiety Stomatologii Estetycznej w Antalyi',
    subtitle: 'Cyfrowe Projektowanie Uśmiechu 3D, licówki Ivoclar E-Max, laserowa korekta dziąseł z hotelem 5★ i transferami VIP.',
    durationLabel: 'Czas trwania:',
    featuresTitle: 'W pakiecie zawarte:',
    ctaText: 'Odbierz Wycenę',
    packages: {
      pkg1Name: 'Wybielanie Laserowe & Bonding Kompozytowy',
      pkg1Badge: 'Szybki Efekt Glow',
      pkg1Duration: '2 - 3 Dni',
      pkg1Features: [
        'Wybielanie Gabinetowe Laserem Philips Zoom WhiteSpeed (do 8 odcieni jaśniej)',
        'Bonding Estetyczny 4 Przednich Zębów / Odbudowa Krawędzi',
        'Profesjonalny Piaskowanie Air-Flow i Polerowanie Szkliwa',
        'Indywidualne Nakładki do Wybielania Domowego w Cenie',
        '5-Gwiazdkowy Luksusowy Hotel (3 noce ze śniadaniem)',
        'Prywatny Transfer VIP z Lotniska i Kliniki',
      ],
      pkg2Name: 'Metamorfoza Hollywood Smile 16 Zębów E-Max',
      pkg2Badge: 'Najpopularniejszy',
      pkg2Duration: '5 - 6 Dni',
      pkg2Features: [
        '16 Szwajcarskich Licówek / Koron Ivoclar E-Max (8 góra + 8 dół)',
        'Cyfrowe Projektowanie Uśmiechu 3D DSD & Przymiarka Mock-Up na Żywo',
        'Laserowa Plastyka Dziąseł (Leczenie Gummy Smile)',
        '5-Gwiazdkowy Luksusowy Hotel (5 nocy ze śniadaniem)',
        'Prywatny Chauffeur VIP Mercedes',
        '5 Lat Gwarancji i Szyna Ochronna na Noc',
      ],
      pkg3Name: '20 Zębów Całkowita Metamorfoza VIP Hollywood Smile',
      pkg3Badge: 'Pełna Rekonstrukcja',
      pkg3Duration: '6 - 7 Dni',
      pkg3Features: [
        '20 Wielowarstwowych Licówek / Koron E-Max lub Cyrkon Multilayer',
        'Harmonizacja Złotej Proporcji Twarzy i Podparcia Ust',
        'Zamknięcie Diastemy i Idealne Ustawienie Symetrii Zgryzu',
        'Apartament w 5-Gwiazdkowym Hotelu (6 nocy)',
        'Dedykowany Polski Koordynator i Kierowca VIP',
        'Dożywotnia Gwarancja Strukturalna na Materiał',
      ],
    },
  },
  pt: {
    badge: 'PACOTES DE SMILE MAKEOVER ALL-INCLUSIVE',
    title: 'Pacotes Populares de Odontologia Estética em Antalya',
    subtitle: 'Design Digital do Sorriso, facetas Ivoclar E-Max, plástica gengival a laser com hotel 5 estrelas e transfers VIP.',
    durationLabel: 'Duração do Tratamento:',
    featuresTitle: 'Incluso no Pacote:',
    ctaText: 'Solicitar Orçamento',
    packages: {
      pkg1Name: 'Clareamento a Laser & Bonding em Resina',
      pkg1Badge: 'Resultado Rápido',
      pkg1Duration: '2 - 3 Dias',
      pkg1Features: [
        'Clareamento a Laser Philips Zoom WhiteSpeed em Consultório (Até 8 tons mais branco)',
        'Bonding Estético em Resina Composta para 4 Dentes Frontais',
        'Profilaxia com Jato de Bicarbonato Air-Flow e Polimento',
        'Moldeiras Personalizadas de Clareamento Caseiro Inclusas',
        'Hotel de Luxo 5 Estrelas (3 noites com café)',
        'Transfers VIP Aeroporto e Clínica',
      ],
      pkg2Name: 'Hollywood Smile com 16 Facetas Ivoclar E-Max',
      pkg2Badge: 'Mais Procurado',
      pkg2Duration: '5 - 6 Dias',
      pkg2Features: [
        '16 Facetas / Coroas em Cerâmica Pura Ivoclar E-Max (8 superiores + 8 inferiores)',
        'Design Digital 3D do Sorriso e Simulação Mock-Up em Boca',
        'Gengivoplastia a Laser para Correção de Sorriso Gengival',
        'Hotel de Luxo 5 Estrelas (5 noites com café)',
        'Transfers VIP em Mercedes com Motorista',
        '5 Anos de Garantia e Placa de Bruxismo Inclusa',
      ],
      pkg3Name: '20 Dentes Transformação VIP Hollywood Smile',
      pkg3Badge: 'Reabilitação Estética Total',
      pkg3Duration: '6 - 7 Dias',
      pkg3Features: [
        '20 Restaurações Multilayer em E-Max ou Zircônia (10 superiores + 10 inferiores)',
        'Harmonização da Proporção Áurea Facial e Contorno Labial',
        'Fechamento de Diastemas e Alinhamento Oclusal Preciso',
        'Hospedagem em Suíte 5 Estrelas (6 noites)',
        'Anfitrião Pessoal e Atendimento em Português',
        'Certificado de Garantia Estrutural Vitalícia',
      ],
    },
  },
  es: {
    badge: 'PAQUETES DE DISEÑO DE SONRISA TODO INCLUIDO',
    title: 'Paquetes Populares de Odontología Estética y Hollywood Smile',
    subtitle: 'Diseño Digital de Sonrisa 3D, carillas Ivoclar E-Max, contorneado gingival con láser, hotel 5 estrellas y traslados VIP.',
    durationLabel: 'Duración del Tratamiento:',
    featuresTitle: 'Incluido en el Paquete:',
    ctaText: 'Pedir Presupuesto',
    packages: {
      pkg1Name: 'Blanqueamiento Láser & Composite Bonding',
      pkg1Badge: 'Efecto Rápido',
      pkg1Duration: '2 - 3 Días',
      pkg1Features: [
        'Blanqueamiento Láser Philips Zoom WhiteSpeed en Clínica (Hasta 8 tonos más blanco)',
        'Bonding Estético de Composite en 4 Dientes Frontales',
        'Limpieza Dental con Aeropulidor Air-Flow y Pulido de Esmalte',
        'Férulas a Medida para Mantenimiento en Casa',
        'Hotel de Lujo 5 Estrellas (3 noches con desayuno)',
        'Traslados VIP Aeropuerto y Clínica',
      ],
      pkg2Name: 'Diseño de Sonrisa Hollywood Smile 16 Piezas E-Max',
      pkg2Badge: 'Más Popular',
      pkg2Duration: '5 - 6 Días',
      pkg2Features: [
        '16 Carillas / Coronas de Porcelana Ivoclar E-Max (8 superiores + 8 inferiores)',
        'Diseño Digital 3D de Sonrisa y Prueba Mock-Up en Vivo',
        'Gingivoplastia Láser para Sonrisa Gingival (Gummy Smile)',
        'Hotel de Lujo 5 Estrellas (5 noches con desayuno)',
        'Chófer VIP Privado en Mercedes',
        '5 Años de Garantía y Férula de Descarga Nocturna',
      ],
      pkg3Name: '20 Piezas Transformación VIP Total Hollywood Smile',
      pkg3Badge: 'Transformación Completa',
      pkg3Duration: '6 - 7 Días',
      pkg3Features: [
        '20 Carillas / Coronas de E-Max o Zirconio Multicapa (10 superiores + 10 inferiores)',
        'Armonización Facial de Proporción Áurea y Soporte Labial',
        'Cierre de Diastemas y Alineación Oclusal Microscópica',
        'Alojamiento en Suite 5 Estrellas (6 noches)',
        'Asistente Personal en su Idioma',
        'Garantía Estructural de por Vida',
      ],
    },
  },
  ru: {
    badge: 'ПАКЕТЫ ДИЗАЙНА УЛЫБКИ «ВСЕ ВКЛЮЧЕНО»',
    title: 'Популярные пакеты эстетической стоматологии и Голливудской улыбки',
    subtitle: 'Цифровой дизайн улыбки 3D, керамические виниры Ivoclar E-Max, лазерная коррекция десен и проживание в 5★ отеле.',
    durationLabel: 'Длительность лечения:',
    featuresTitle: 'В пакет включено:',
    ctaText: 'Получить расчет',
    packages: {
      pkg1Name: 'Лазерное отбеливание & Композитный бондинг',
      pkg1Badge: 'Быстрое преображение',
      pkg1Duration: '2 - 3 дня',
      pkg1Features: [
        'Клиническое отбеливание Philips Zoom WhiteSpeed (до 8 тонов светлее)',
        'Эстетический композитный бондинг 4 передних зубов',
        'Профессиональная чистка Air-Flow и полировка эмали',
        'Индивидуальные капы для домашнего поддержания цвета в подарок',
        '5-звездочный отель (3 ночи с завтраком)',
        'VIP-трансфер из аэропорта и клиники',
      ],
      pkg2Name: '16 виниров Ivoclar E-Max Hollywood Smile',
      pkg2Badge: 'Самый популярный',
      pkg2Duration: '5 - 6 дней',
      pkg2Features: [
        '16 керамических виниров / коронок Ivoclar E-Max (8 верхних + 8 нижних)',
        '3D цифровой дизайн улыбки (DSD) и живая примерка Mock-Up',
        'Лазерная коррекция десны (устранение десневой улыбки Gummy Smile)',
        '5-звездочный отель (5 ночей с завтраком)',
        'Личный VIP-водитель на автомобилях Mercedes',
        '5 лет гарантии и защитная ночная капа',
      ],
      pkg3Name: '20 зубов Полное VIP-Преображение Hollywood Smile',
      pkg3Badge: 'Полное преображение',
      pkg3Duration: '6 - 7 дней',
      pkg3Features: [
        '20 многослойных реставраций E-Max или Zirconia Multilayer',
        'Гармонизация золотого сечения лица и поддержки губ',
        'Закрытие диастем (щелей) и идеальное выравнивание зубного ряда',
        'Проживание в люксе 5★ отеля (6 ночей)',
        'Русскоязычный координатор и личный водитель',
        'Пожизненная гарантия на структуру материала',
      ],
    },
  },
};

const COSMETIC_IMAGES = [
  '/treatments/accordion/e-max-laminate-copy.webp',
  '/treatments/accordion/porcelain-laminate-copy.webp',
  '/treatments/accordion/zirconium-implant-copy.webp',
];

export default function TreatmentCosmeticPackagesSlider() {
  const locale = useLocale();
  const dict = COSMETIC_PACKAGES_I18N[locale] || COSMETIC_PACKAGES_I18N.en;
  const p = dict.packages;

  const [mobileIndex, setMobileIndex] = useState(0);

  const packagesList: PackageItem[] = [
    {
      name: p.pkg1Name,
      badge: p.pkg1Badge,
      img: COSMETIC_IMAGES[0],
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
      img: COSMETIC_IMAGES[1],
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
      img: COSMETIC_IMAGES[2],
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
    <section aria-labelledby="cosmetic-packages-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.head}>
          <span className={styles.badge}>{dict.badge}</span>
          <h2 id="cosmetic-packages-heading" className={styles.title}>
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
              aria-label="Previous cosmetic package"
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
              aria-label="Next cosmetic package"
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
