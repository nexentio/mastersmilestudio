'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentBeforeAfterSliderSection.module.css';

interface BeforeAfterI18n {
  title: string;
  desc: string;
  viewGallery: string;
  viewGalleryAria: string;
  prevLabel: string;
  nextLabel: string;
  dotLabel: string;
}

const BEFORE_AFTER_I18N: Record<string, BeforeAfterI18n> = {
  en: {
    title: 'From First Visit to Final Smile.',
    desc: 'Explore real patient stories captured in every transformation. These are more than smiles — they are renewed confidence, achieved with care and precision at Master Smile Studio.',
    viewGallery: 'View Gallery',
    viewGalleryAria: 'View full before and after patient smile gallery',
    prevLabel: 'Previous cases',
    nextLabel: 'Next cases',
    dotLabel: 'Slide page',
  },
  tr: {
    title: 'İlk Ziyaretten Son Gülüşe.',
    desc: 'Her dönüşümde yakalanan gerçek hasta hikayelerini keşfedin. Bunlar sadece gülüş değil — Master Smile Studio’da özen ve hassasiyetle kazanılan yepyeni bir özgüvendir.',
    viewGallery: 'Galeriyi İncele',
    viewGalleryAria: 'Tüm öncesi ve sonrası fotoğraflarını görmek için galeri sayfasına gidin',
    prevLabel: 'Önceki vakalar',
    nextLabel: 'Sonraki vakalar',
    dotLabel: 'Sayfa',
  },
  de: {
    title: 'Vom ersten Besuch bis zum finalen Lächeln.',
    desc: 'Entdecken Sie echte Patientengeschichten hinter jeder Verwandlung. Es sind mehr als nur Lächeln — es ist neues Selbstvertrauen, geschaffen mit höchster Sorgfalt und Präzision bei Master Smile Studio.',
    viewGallery: 'Galerie ansehen',
    viewGalleryAria: 'Vollständige Vorher-Nachher-Galerie von Master Smile Studio ansehen',
    prevLabel: 'Vorherige Fälle',
    nextLabel: 'Nächste Fälle',
    dotLabel: 'Seite',
  },
  pl: {
    title: 'Od pierwszej wizyty do wymarzonego uśmiechu.',
    desc: 'Poznaj prawdziwe historie pacjentów uwiecznione w każdej metamorfozie. To coś więcej niż uśmiechy — to odzyskana pewność siebie, osiągnięta dzięki trosce i precyzji w Master Smile Studio.',
    viewGallery: 'Zobacz Galerię',
    viewGalleryAria: 'Zobacz pełną galerię metamorfoz przed i po w Master Smile Studio',
    prevLabel: 'Poprzednie przypadki',
    nextLabel: 'Następne przypadki',
    dotLabel: 'Strona',
  },
  pt: {
    title: 'Da primeira consulta ao sorriso final.',
    desc: 'Explore histórias reais de pacientes registradas em cada transformação. São mais do que sorrisos — é uma autoestima renovada, conquistada com cuidado e precisão na Master Smile Studio.',
    viewGallery: 'Ver Galeria',
    viewGalleryAria: 'Ver galeria completa de antes e depois da Master Smile Studio',
    prevLabel: 'Casos anteriores',
    nextLabel: 'Próximos casos',
    dotLabel: 'Página',
  },
  es: {
    title: 'Desde la primera visita hasta la sonrisa final.',
    desc: 'Descubra historias reales de pacientes en cada transformación. Son más que sonrisas: es una confianza renovada, lograda con dedicación y precisión en Master Smile Studio.',
    viewGallery: 'Ver Galería',
    viewGalleryAria: 'Ver la galería completa de antes y después de Master Smile Studio',
    prevLabel: 'Casos anteriores',
    nextLabel: 'Siguientes casos',
    dotLabel: 'Página',
  },
  ru: {
    title: 'От первого визита до финальной улыбки.',
    desc: 'Откройте для себя реальные истории пациентов в каждом преображении. Это больше, чем просто улыбки — это обретенная уверенность в себе, созданная с заботой и точностью в Master Smile Studio.',
    viewGallery: 'Посмотреть Галерею',
    viewGalleryAria: 'Посмотреть полную галерею результатов до и после Master Smile Studio',
    prevLabel: 'Предыдущие результаты',
    nextLabel: 'Следующие результаты',
    dotLabel: 'Страница',
  },
};

const CASES = [
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
    alt: 'All On 4 dental implants before and after Istanbul Turkey',
  },
  {
    img: 'https://sohodent.com/doc/data1/All-on-4-istanbul-turkey-20.webp',
    alt: 'All On 4 dental smile makeover Istanbul Turkey',
  },
];

export default function TreatmentBeforeAfterSliderSection() {
  const locale = useLocale();
  const t = BEFORE_AFTER_I18N[locale] || BEFORE_AFTER_I18N.en;
  const [activePage, setActivePage] = useState<number>(0);

  // 4 items per page on desktop (2 total pages for 8 items)
  const itemsPerPage = 4;
  const totalPages = Math.ceil(CASES.length / itemsPerPage);
  const visibleCases = CASES.slice(activePage * itemsPerPage, activePage * itemsPerPage + itemsPerPage);

  const handlePrev = () => {
    setActivePage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setActivePage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  return (
    <section aria-labelledby="before-after-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* 2-Column Header (Left: Bold Title, Right: Story Description) */}
        <div className={styles.headGrid}>
          <div className={styles.headLeft}>
            <h2 id="before-after-heading" className={styles.headingMain}>
              {t.title}
            </h2>
          </div>
          <div className={styles.headRight}>
            <p className={styles.descMain}>
              {t.desc}
            </p>
          </div>
        </div>

        {/* 4-Card Slider with Side Navigation Arrows */}
        <div className={styles.carouselWrapper}>
          {/* Left Arrow */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label={t.prevLabel}
            className={`${styles.navBtn} ${styles.navBtnPrev}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* 4 Cards Grid */}
          <div key={activePage} className={`${styles.grid4} ${styles.fadeAnimation}`}>
            {visibleCases.map((c, idx) => (
              <div key={idx} className={styles.card}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.img}
                  alt={c.alt}
                  loading="lazy"
                  width={700}
                  height={700}
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={handleNext}
            aria-label={t.nextLabel}
            className={`${styles.navBtn} ${styles.navBtnNext}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
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

        {/* Bottom Button (Centered View Gallery) */}
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
