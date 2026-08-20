'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import styles from './CosmeticBeforeAfterSliderSection.module.css';

interface BeforeAfterDictionary {
  headTitle: string;
  headSub: string;
}

const BA_I18N: Record<string, BeforeAfterDictionary> = {
  en: {
    headTitle: 'From First Visit to Final Smile.',
    headSub:
      'Explore real patient stories captured in every transformation. These are more than smiles — they are renewed confidence, achieved with care and precision at Master Smile Studio.',
  },
  tr: {
    headTitle: 'İlk Muayeneden Kusursuz Gülüşe.',
    headSub:
      'Her dönüşümde kaydedilen gerçek hasta hikayelerini keşfedin. Bunlar sadece birer gülüş değil; Master Smile Studio güvencesi ve hassasiyetiyle yeniden kazanılmış özgüvendir.',
  },
  de: {
    headTitle: 'Vom ersten Besuch bis zum perfekten Lächeln.',
    headSub:
      'Entdecken Sie echte Patientengeschichten. Mehr als nur Lächeln – neues Selbstvertrauen mit Präzision und Fürsorge.',
  },
  pl: {
    headTitle: 'Od pierwszej wizyty po ostateczny uśmiech.',
    headSub:
      'Odkryj autentyczne historie pacjentów. To coś więcej niż uśmiechy – to nowa pewność siebie z Master Smile Studio.',
  },
  pt: {
    headTitle: 'Da Primeira Consulta ao Sorriso Final.',
    headSub:
      'Descubra histórias reais de pacientes em cada transformação. Mais do que sorrisos: confiança renovada com cuidado e precisão.',
  },
  es: {
    headTitle: 'Desde la Primera Cita Hasta su Sonrisa Final.',
    headSub:
      'Explore historias reales de pacientes en cada transformación. Mucho más que sonrisas: confianza renovada con precisión.',
  },
  ru: {
    headTitle: 'От первого визита до сияющей улыбки.',
    headSub:
      'Реальные истории преображения наших пациентов. Это больше, чем просто улыбки — это новая уверенность в себе.',
  },
};

const BA_IMAGES = [
  { src: '/before-after/firstvisit.webp', alt: 'Laminate Veneer Before and After 18' },
  { src: '/before-after/firstvisit.webp', alt: 'Laminate Veneer Before and After 17' },
  { src: '/before-after/firstvisit.webp', alt: 'Laminate Veneer Before and After 16' },
  { src: '/before-after/firstvisit.webp', alt: 'Laminate Veneer Before and After 15' },
  { src: '/before-after/firstvisit.webp', alt: 'Laminate Veneer Before and After 14' },
  { src: '/before-after/firstvisit.webp', alt: 'Laminate Veneer Before and After 13' },
  { src: '/before-after/firstvisit.webp', alt: 'Laminate Veneer Before and After 12' },
  { src: '/before-after/firstvisit.webp', alt: 'Laminate Veneer Before and After 11' },
  { src: '/before-after/firstvisit.webp', alt: 'Hollywood Smile Before and After 10' },
  { src: '/before-after/firstvisit.webp', alt: 'Hollywood Smile Before and After 9' },
  { src: '/before-after/firstvisit.webp', alt: 'Hollywood Smile Before and After 8' },
  { src: '/before-after/firstvisit.webp', alt: 'Hollywood Smile Before and After 7' },
  { src: '/before-after/firstvisit.webp', alt: 'Hollywood Smile Before and After 5' },
  { src: '/before-after/firstvisit.webp', alt: 'Hollywood Smile Before and After 4' },
  { src: '/before-after/firstvisit.webp', alt: 'Hollywood Smile Before and After 3' },
  { src: '/before-after/firstvisit.webp', alt: 'Hollywood Smile Before and After 2' },
  { src: '/before-after/firstvisit.webp', alt: 'Crowns and Veneers Before After 6' },
  { src: '/before-after/firstvisit.webp', alt: 'Crowns and Veneers Before After 1' },
  { src: '/before-after/firstvisit.webp', alt: 'Veneers Before After 1' },
  { src: '/before-after/firstvisit.webp', alt: 'Veneers Before After 2' },
  { src: '/before-after/firstvisit.webp', alt: 'Veneers Before After 3' },
  { src: '/before-after/firstvisit.webp', alt: 'Veneers Before After 4' },
  { src: '/before-after/firstvisit.webp', alt: 'Veneers Before After 5' },
  { src: '/before-after/firstvisit.webp', alt: 'Veneers Before After 6' },
  { src: '/before-after/firstvisit.webp', alt: 'Veneers Before After 7' },
  { src: '/before-after/firstvisit.webp', alt: 'Veneers Before After 8' },
  { src: '/before-after/firstvisit.webp', alt: 'Veneers Before After 9' },
  { src: '/before-after/firstvisit.webp', alt: 'Veneers Before After 10' },
];

export default function CosmeticBeforeAfterSliderSection() {
  const locale = useLocale();
  const d = BA_I18N[locale] || BA_I18N.en;
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalDots = 7;

  const handleScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) return;
    const ratio = scrollLeft / maxScroll;
    const idx = Math.min(Math.round(ratio * (totalDots - 1)), totalDots - 1);
    setActiveIndex(idx);
  };

  const scrollToDot = (dotIdx: number) => {
    if (!trackRef.current) return;
    const { scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const targetScroll = (dotIdx / (totalDots - 1)) * maxScroll;
    trackRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    setActiveIndex(dotIdx);
  };

  return (
    <section className={styles.sectba} aria-label={d.headTitle}>
      <div className={styles.standard_center4}>
        <div className={styles.head}>
          <div className={styles.grid1}>
            <div className={styles.headS1}>{d.headTitle}</div>
            <div className={styles.headS2}>{d.headSub}</div>
          </div>
        </div>

        <div className={styles.sliderContainer}>
          <div
            ref={trackRef}
            className={styles.sliderTrack}
            onScroll={handleScroll}
          >
            {BA_IMAGES.map((img, idx) => (
              <div key={idx} className={styles.cardItem}>
                <div className={styles.imageWrap}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 280px"
                    className={styles.baImg}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.dotsWrapper}>
            {Array.from({ length: totalDots }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                className={`${styles.dot} ${activeIndex === dotIdx ? styles.activeDot : ''}`}
                onClick={() => scrollToDot(dotIdx)}
                aria-label={`Slide group ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
