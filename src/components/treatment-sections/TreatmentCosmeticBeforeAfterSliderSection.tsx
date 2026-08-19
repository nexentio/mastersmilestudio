'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentVeneerBeforeAfterSliderSection.module.css';

interface CaseItem {
  id: number;
  title: string;
  subtitle: string;
  img: string;
  imgAlt: string;
}

interface LocalizedText {
  heading: string;
  desc: string;
  viewGallery: string;
  cases: {
    title: string;
    sub: string;
  }[];
}

const COSMETIC_I18N_DATA: Record<string, LocalizedText> = {
  en: {
    heading: 'From Insecurity to a Radiant Hollywood Smile',
    desc: 'Real patient smile design transformations with Swiss Ivoclar E-Max, laser gum contouring, and Philips Zoom whitening at Master Smile Studio Antalya.',
    viewGallery: 'View Full Smile Makeover Gallery →',
    cases: [
      {
        title: 'Full Hollywood Smile Makeover (20 E-Max Veneers)',
        sub: 'Correcting severe tetracycline discoloration and crowded front teeth with bleach shade BL1',
      },
      {
        title: 'Diastema Gap Closure & Edge Bonding',
        sub: 'Closing a 3mm midline gap and evening chipped incisal edges with composite bonding in 1 visit',
      },
      {
        title: 'Gummy Smile Laser Contouring & 8 Veneers',
        sub: 'Harmonizing excess gum exposure with painless diode laser gingivoplasty and porcelain laminates',
      },
      {
        title: 'In-Clinic Philips Zoom Laser Teeth Whitening',
        sub: 'Brightening stained enamel by 8 full Vita shades in a single 45-minute session',
      },
    ],
  },
  tr: {
    heading: 'Kusursuz Gülüş Dönüşümleri & Hollywood Smile',
    desc: 'Master Smile Studio Antalya’da İsviçre Ivoclar E-Max, lazerle diş eti şekillendirme ve Philips Zoom beyazlatma ile tamamlanan gerçek hasta vakaları.',
    viewGallery: 'Tüm Gülüş Galerisini İncele →',
    cases: [
      {
        title: 'Tam Ağız Hollywood Smile (20 Adet E-Max Lamine)',
        sub: 'İleri derece renk bozukluğu ve çapraşıklığın BL1 ekstra beyaz lamina ile dönüştürülmesi',
      },
      {
        title: 'Ayrık Diş (Diastema) Kapatma & Bonding',
        sub: 'Ön iki diş arasındaki 3 mm boşluğun tek seansta diş kesimi yapılmadan kapatılması',
      },
      {
        title: 'Gummy Smile Lazer Diş Eti Şekillendirme & 8 Lamine',
        sub: 'Gülünce fazla görünen diş etinin lazerle dengelenmesi ve estetik lamine uygulaması',
      },
      {
        title: 'Klinik Tipi Philips Zoom Lazer Diş Beyazlatma',
        sub: 'Sararmış diş minesinin 45 dakikalık tek seansta 8 tona kadar açılması',
      },
    ],
  },
  de: {
    heading: 'Von Unsicherheit zu einem strahlenden Hollywood-Lächeln',
    desc: 'Echte Patiententransformationen mit Ivoclar E-Max, Laser-Zahnfleischkorrektur und Philips Zoom Bleaching bei Master Smile Studio Antalya.',
    viewGallery: 'Vollständige Smile-Design-Galerie ansehen →',
    cases: [
      {
        title: 'Komplettes Hollywood Smile Makeover (20 E-Max Veneers)',
        sub: 'Korrektur starker Verfärbungen und Fehlstellungen mit Bleach-Farbe BL1',
      },
      {
        title: 'Diastema-Schluss & Komposit-Bonding',
        sub: 'Schließen einer 3 mm Frontzahnlücke in nur einer Sitzung ohne Zahnschmelzverlust',
      },
      {
        title: 'Gummy Smile Laser-Korrektur & 8 Veneers',
        sub: 'Harmonisierung des Zahnfleischverlaufs und Perfektionierung der Frontzähne',
      },
      {
        title: 'Philips Zoom Laser-Zahnaufhellung',
        sub: 'Aufhellung um bis zu 8 Stufen in einer 45-minütigen Behandlung',
      },
    ],
  },
  pl: {
    heading: 'Od kompleksów do olśniewającego uśmiechu Hollywood Smile',
    desc: 'Prawdziwe metamorfozy uśmiechu z licówkami Ivoclar E-Max, laserową plastyką dziąseł i wybielaniem Philips Zoom w Master Smile Studio Antalya.',
    viewGallery: 'Zobacz całą galerię metamorfoz →',
    cases: [
      {
        title: 'Pełna Metamorfoza Hollywood Smile (20 Licówek E-Max)',
        sub: 'Korekta silnych przebarwień i stłoczeń zębów z odcieniem Bleach BL1',
      },
      {
        title: 'Zamknięcie Diastemy & Bonding Kompozytowy',
        sub: 'Zamknięcie 3 mm przerwy między jedynkami podczas 1 wizyty bez szlifowania',
      },
      {
        title: 'Leczenie Uśmiechu Dziąsłowego (Gummy Smile) & 8 Licówek',
        sub: 'Laserowa plastyka girlandy dziąsłowej i odbudowa licówkami porcelanowymi',
      },
      {
        title: 'Wybielanie Laserowe Philips Zoom WhiteSpeed',
        sub: 'Rozjaśnienie szkliwa nawet o 8 tonów podczas 45-minutowej sesji gabinetowej',
      },
    ],
  },
  pt: {
    heading: 'Da insegurança a um sorriso Hollywoodiano deslumbrante',
    desc: 'Transformações reais com facetas Ivoclar E-Max, plástica gengival a laser e clareamento Philips Zoom na Master Smile Studio Antalya.',
    viewGallery: 'Ver galeria completa de Smile Makeover →',
    cases: [
      {
        title: 'Transformação Total Hollywood Smile (20 Facetas E-Max)',
        sub: 'Correção de manchas severas e dentes desalinhados com cor extra branca BL1',
      },
      {
        title: 'Fechamento de Diastema & Bonding em Resina',
        sub: 'Fechamento de espaço de 3 mm em sessão única sem desgastar os dentes',
      },
      {
        title: 'Correção de Sorriso Gengival a Laser & 8 Facetas',
        sub: 'Harmonização do contorno gengival a laser combinada com facetas cerâmicas',
      },
      {
        title: 'Clareamento Dental a Laser Philips Zoom',
        sub: 'Clareamento de até 8 tons em uma única sessão clínica de 45 minutos',
      },
    ],
  },
  es: {
    heading: 'De la timidez a una deslumbrante sonrisa Hollywood',
    desc: 'Transformaciones reales con carillas Ivoclar E-Max, contorneado gingival con láser y blanqueamiento Philips Zoom en Master Smile Studio Antalya.',
    viewGallery: 'Ver galería completa de diseño de sonrisa →',
    cases: [
      {
        title: 'Diseño de Sonrisa Hollywood Smile Total (20 Carillas E-Max)',
        sub: 'Corrección de manchas severas y apiñamiento con tono extra blanco BL1',
      },
      {
        title: 'Cierre de Diastemas y Composite Bonding',
        sub: 'Cierre de separación de 3 mm en una sola cita sin tallar el esmalte dental',
      },
      {
        title: 'Gingivoplastia Láser para Sonrisa Gingival & 8 Carillas',
        sub: 'Armonización de encías con láser de diodo indoloro y carillas de porcelana',
      },
      {
        title: 'Blanqueamiento Dental Láser Philips Zoom',
        sub: 'Aclarado de hasta 8 tonos en una sesión clínica de 45 minutos',
      },
    ],
  },
  ru: {
    heading: 'От неуверенности к ослепительной Голливудской улыбке',
    desc: 'Реальные результаты цифрового дизайна улыбки с винирами Ivoclar E-Max, лазерной коррекцией десен и отбеливанием Zoom в Master Smile Studio.',
    viewGallery: 'Посмотреть всю галерею преображений →',
    cases: [
      {
        title: 'Полное преображение Hollywood Smile (20 виниров E-Max)',
        sub: 'Устранение стойкого дисколорита и кривизны зубов с оттенком BL1',
      },
      {
        title: 'Закрытие диастемы (щели) и композитный бондинг',
        sub: 'Устранение 3-мм межзубной щели за 1 визит без препарирования эмали',
      },
      {
        title: 'Лазерная коррекция десневой улыбки (Gummy Smile) & 8 виниров',
        sub: 'Выравнивание контура десны диодным лазером и керамические виниры',
      },
      {
        title: 'Клиническое лазерное отбеливание Philips Zoom',
        sub: 'Осветление эмали до 8 тонов за один 45-минутный сеанс',
      },
    ],
  },
};

const COSMETIC_CASE_IMAGES = [
  '/treatments/accordion/e-max-laminate-copy.webp',
  '/treatments/accordion/porcelain-laminate-copy.webp',
  '/treatments/accordion/lumineers.webp',
  '/treatments/accordion/zirconium-implant-copy.webp',
];

export default function TreatmentCosmeticBeforeAfterSliderSection() {
  const locale = useLocale();
  const dict = COSMETIC_I18N_DATA[locale] || COSMETIC_I18N_DATA.en;
  const [startIndex, setStartIndex] = useState(0);

  const cases: CaseItem[] = dict.cases.map((c, i) => ({
    id: i + 1,
    title: c.title,
    subtitle: c.sub,
    img: COSMETIC_CASE_IMAGES[i % COSMETIC_CASE_IMAGES.length],
    imgAlt: `${c.title} - ${c.sub}`,
  }));

  const visibleCount = 2;
  const total = cases.length;

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : total - visibleCount));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < total - visibleCount ? prev + 1 : 0));
  };

  const displayedCases = cases.slice(startIndex, startIndex + visibleCount);

  return (
    <section aria-labelledby="cosmetic-before-after-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.headCenter}>
          <h2 id="cosmetic-before-after-heading" className={styles.headingMain}>
            {dict.heading}
          </h2>
          <p className={styles.descMain}>{dict.desc}</p>
        </div>

        {/* Carousel: 2 Cards Side-by-Side with Left & Right Side Arrows */}
        <div className={styles.carouselWrapper}>
          <button
            type="button"
            onClick={handlePrev}
            className={`${styles.navBtn} ${styles.navBtnPrev}`}
            aria-label="Previous cosmetic cases"
          >
            ‹
          </button>

          <div key={startIndex} className={`${styles.grid2} ${styles.fadeAnimation}`}>
            {displayedCases.map((item) => (
              <div key={item.id} className={styles.card}>
                <img
                  src={item.img}
                  alt={item.imgAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className={`${styles.navBtn} ${styles.navBtnNext}`}
            aria-label="Next cosmetic cases"
          >
            ›
          </button>
        </div>

        {/* Indicators */}
        <div className={styles.dots}>
          {Array.from({ length: total - visibleCount + 1 }).map((_, dIdx) => (
            <button
              key={dIdx}
              type="button"
              onClick={() => setStartIndex(dIdx)}
              aria-label={`Go to slide ${dIdx + 1}`}
              className={`${styles.dot} ${startIndex === dIdx ? styles.dotActive : styles.dotInactive}`}
            />
          ))}
        </div>

        {/* Bottom Link */}
        <div className={styles.bottomRow}>
          <Link href="/gallery" className={styles.viewGalleryBtn}>
            {dict.viewGallery}
          </Link>
        </div>
      </div>
    </section>
  );
}
