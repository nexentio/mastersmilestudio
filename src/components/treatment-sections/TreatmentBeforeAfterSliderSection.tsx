'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentBeforeAfterSliderSection.module.css';

interface BeforeAfterI18n {
  title1: string;
  title2: string;
  desc: string;
  viewGallery: string;
  viewGalleryAria: string;
  prevLabel: string;
  nextLabel: string;
  dotLabel: string;
}

const BEFORE_AFTER_I18N: Record<string, BeforeAfterI18n> = {
  en: {
    title1: 'From First Visit to Final',
    title2: 'Smile.',
    desc: 'Explore real patient stories captured in every transformation. These are more than smiles — they are renewed confidence, achieved with care and precision at Master Smile Studio.',
    viewGallery: 'View Gallery',
    viewGalleryAria: 'View full before and after patient smile gallery',
    prevLabel: 'Previous cases',
    nextLabel: 'Next cases',
    dotLabel: 'Slide page',
  },
  tr: {
    title1: 'İlk Ziyaretten',
    title2: 'Son Gülüşe.',
    desc: 'Her dönüşümde yakalanan gerçek hasta hikayelerini keşfedin. Bunlar sadece gülüş değil — Master Smile Studio’da özen ve hassasiyetle kazanılan yepyeni bir özgüvendir.',
    viewGallery: 'Galeriyi İncele',
    viewGalleryAria: 'Tüm öncesi ve sonrası fotoğraflarını görmek için galeri sayfasına gidin',
    prevLabel: 'Önceki vakalar',
    nextLabel: 'Sonraki vakalar',
    dotLabel: 'Sayfa',
  },
  de: {
    title1: 'Vom ersten Besuch bis zum',
    title2: 'finalen Lächeln.',
    desc: 'Entdecken Sie echte Patientengeschichten hinter jeder Verwandlung. Es sind mehr als nur Lächeln — es ist neues Selbstvertrauen, geschaffen mit höchster Sorgfalt und Präzision bei Master Smile Studio.',
    viewGallery: 'Galerie ansehen',
    viewGalleryAria: 'Vollständige Vorher-Nachher-Galerie von Master Smile Studio ansehen',
    prevLabel: 'Vorherige Fälle',
    nextLabel: 'Nächste Fälle',
    dotLabel: 'Seite',
  },
  pl: {
    title1: 'Od pierwszej wizyty do',
    title2: 'wymarzonego uśmiechu.',
    desc: 'Poznaj prawdziwe historie pacjentów uwiecznione w każdej metamorfozie. To coś więcej niż uśmiechy — to odzyskana pewność siebie, osiągnięta dzięki trosce i precyzji w Master Smile Studio.',
    viewGallery: 'Zobacz Galerię',
    viewGalleryAria: 'Zobacz pełną galerię metamorfoz przed i po w Master Smile Studio',
    prevLabel: 'Poprzednie przypadki',
    nextLabel: 'Następne przypadki',
    dotLabel: 'Strona',
  },
  pt: {
    title1: 'Da primeira consulta ao',
    title2: 'sorriso final.',
    desc: 'Explore histórias reais de pacientes registradas em cada transformação. São mais do que sorrisos — é uma autoestima renovada, conquistada com cuidado e precisão na Master Smile Studio.',
    viewGallery: 'Ver Galeria',
    viewGalleryAria: 'Ver galeria completa de antes e depois da Master Smile Studio',
    prevLabel: 'Casos anteriores',
    nextLabel: 'Próximos casos',
    dotLabel: 'Página',
  },
  es: {
    title1: 'Desde la primera visita hasta la',
    title2: 'sonrisa final.',
    desc: 'Descubra historias reales de pacientes en cada transformación. Son más que sonrisas: es una confianza renovada, lograda con dedicación y precisión en Master Smile Studio.',
    viewGallery: 'Ver Galería',
    viewGalleryAria: 'Ver la galería completa de antes y después de Master Smile Studio',
    prevLabel: 'Casos anteriores',
    nextLabel: 'Siguientes casos',
    dotLabel: 'Página',
  },
  ru: {
    title1: 'От первого визита до',
    title2: 'финальной улыбки.',
    desc: 'Откройте для себя реальные истории пациентов в каждом преображении. Это больше, чем просто улыбки — это обретенная уверенность в себе, созданная с заботой и точностью в Master Smile Studio.',
    viewGallery: 'Посмотреть Галерею',
    viewGalleryAria: 'Посмотреть полную галерею результатов до и после Master Smile Studio',
    prevLabel: 'Предыдущие результаты',
    nextLabel: 'Следующие результаты',
    dotLabel: 'Страница',
  },
};

export default function TreatmentBeforeAfterSliderSection() {
  const locale = useLocale();
  const t = BEFORE_AFTER_I18N[locale] || BEFORE_AFTER_I18N.en;
  const [activePage, setActivePage] = useState<number>(0);

  const cases = [
    {
      img: 'https://sohodent.com/doc/data1/all-on-six-istanbul-turkey26.webp',
      alt: 'All on 6 dental implants before and after Istanbul Turkey',
    },
    {
      img: 'https://sohodent.com/doc/data1/all-on-six-istanbul-turkey25.webp',
      alt: 'All on 6 dental implants before and after Istanbul Turkey',
    },
    {
      img: 'https://sohodent.com/doc/data1/all-on-4-istanbul-turkey-24.webp',
      alt: 'All on 4 dental implants before and after Istanbul Turkey',
    },
    {
      img: 'https://sohodent.com/doc/data1/all-on-4-istanbul-turkey22.webp',
      alt: 'All on 4 dental implants before and after Istanbul Turkey',
    },
    {
      img: 'https://sohodent.com/doc/data1/all-on-6-istanbul-turkey23.webp',
      alt: 'All on 6 dental implants before and after Istanbul Turkey',
    },
    {
      img: 'https://sohodent.com/doc/data1/all-on-4-istanbul-turkey21.webp',
      alt: 'All on 4 dental implants before and after Istanbul Turkey',
    },
    {
      img: 'https://sohodent.com/doc/data1/all-on-four-istanbul-turkey-27.webp',
      alt: 'All on 4 transformation Istanbul Turkey',
    },
    {
      img: 'https://sohodent.com/doc/data1/All-on-4-istanbul-turkey-20.webp',
      alt: 'All on 4 dental smile makeover',
    },
  ];

  const itemsPerPage = 2;
  const totalPages = Math.ceil(cases.length / itemsPerPage);
  const visibleCases = cases.slice(activePage * itemsPerPage, activePage * itemsPerPage + itemsPerPage);

  const handlePrev = () => {
    setActivePage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setActivePage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section aria-labelledby="before-after-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Centered Heading and Subtitle */}
        <div className={styles.headCenter}>
          <h2 id="before-after-heading" className={styles.headingMain}>
            {t.title1} {t.title2}
          </h2>
          <p className={styles.descMain}>
            {t.desc}
          </p>
        </div>

        {/* 2-Card Full-Width Carousel with Side Navigation Arrows */}
        <div className={styles.carouselWrapper}>
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label={t.prevLabel}
            className={`${styles.navBtn} ${styles.navBtnPrev}`}
          >
            ‹
          </button>

          {/* 2 Cards Side-by-Side Grid (Wide on Mobile) */}
          <div key={activePage} className={`${styles.grid2} ${styles.fadeAnimation}`}>
            {visibleCases.map((c, idx) => (
              <div key={idx} className={styles.card}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label={t.nextLabel}
            className={`${styles.navBtn} ${styles.navBtnNext}`}
          >
            ›
          </button>
        </div>

        {/* Pagination Dots (Centered) */}
        <div className={styles.dots}>
          {Array.from({ length: totalPages }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setActivePage(dotIdx)}
              aria-label={`${t.dotLabel} ${dotIdx + 1}`}
              className={`${styles.dot} ${activePage === dotIdx ? styles.dotActive : styles.dotInactive}`}
            />
          ))}
        </div>

        {/* Bottom Actions Row (View Gallery Right Aligned) */}
        <div className={styles.bottomRow}>
          <Link
            href="/gallery"
            className={styles.viewGalleryBtn}
            aria-label={t.viewGalleryAria}
          >
            {t.viewGallery}
          </Link>
        </div>
      </div>
    </section>
  );
}
