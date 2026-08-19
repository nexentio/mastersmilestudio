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

const I18N_DATA: Record<string, LocalizedText> = {
  en: {
    heading: 'From First Consultation to Your Dream Smile',
    desc: 'Real patient smile transformations with custom Ivoclar E-Max and porcelain veneers at Master Smile Studio Antalya.',
    viewGallery: 'View Full Veneer Gallery →',
    cases: [
      {
        title: 'Midline Diastema Closure (Gap Repair)',
        sub: '8 Upper Ivoclar E-Max Porcelain Veneers (BL2)',
      },
      {
        title: 'Tetracycline Stain Masking & Alignment',
        sub: '16 Upper & Lower E-Max Veneers (BL1 Hollywood White)',
      },
      {
        title: 'Worn & Chipped Enamel Restoration',
        sub: '10 Upper Aesthetic Porcelain Laminates (A1)',
      },
      {
        title: 'Complete Hollywood Smile Transformation',
        sub: '20 Ultra-Thin E-Max Veneers with Gum Contouring',
      },
    ],
  },
  tr: {
    heading: 'İlk Muayeneden Kusursuz Gülüşe',
    desc: 'Master Smile Studio Antalya’da kişiye özel Ivoclar E-Max ve porselen laminalarla hayata geçirilen gerçek hasta dönüşümleri.',
    viewGallery: 'Tüm Lamina Galerisini İncele →',
    cases: [
      {
        title: 'Ayrık Diş (Diastema) Kapatma Tedavisi',
        sub: '8 Üst Çene Ivoclar E-Max Porselen Lamina (BL2)',
      },
      {
        title: 'İleri Derece Renk Bozukluğu & Hizalama',
        sub: '16 Alt ve Üst E-Max Lamina (BL1 Hollywood Beyazı)',
      },
      {
        title: 'Aşınmış ve Kırık Diş Restorasyonu',
        sub: '10 Üst Çene Estetik Porselen Lamina (A1)',
      },
      {
        title: 'Komple Hollywood Smile Gülüş Dönüşümü',
        sub: '20 Adet Ultra İnce E-Max Lamina ve Diş Eti Şekillendirme',
      },
    ],
  },
  de: {
    heading: 'Von der ersten Beratung zum perfekten Lächeln',
    desc: 'Echte Patiententransformationen mit Ivoclar E-Max und Porzellan-Veneers bei Master Smile Studio Antalya.',
    viewGallery: 'Vollständige Galerie ansehen →',
    cases: [
      {
        title: 'Schluss von Zahnlücken (Diastema)',
        sub: '8 Obere Ivoclar E-Max Porzellan-Veneers (BL2)',
      },
      {
        title: 'Korrektur starker Verfärbungen & Form',
        sub: '16 E-Max Veneers Ober- und Unterkiefer (BL1 Hollywood White)',
      },
      {
        title: 'Wiederherstellung abgebrochener Schneidezähne',
        sub: '10 Ästhetische Porzellan-Laminate (A1)',
      },
      {
        title: 'Komplette Hollywood Smile Verwandlung',
        sub: '20 Hauchdünne E-Max Veneers mit Zahnfleischkorrektur',
      },
    ],
  },
  pl: {
    heading: 'Od pierwszej wizyty do wymarzonego uśmiechu',
    desc: 'Prawdziwe metamorfozy uśmiechów pacjentów z użyciem licówek Ivoclar E-Max w Master Smile Studio Antalya.',
    viewGallery: 'Zobacz całą galerię licówek →',
    cases: [
      {
        title: 'Zamknięcie diastemy (przerw między zębami)',
        sub: '8 Górnych Licówek Porcelanowych Ivoclar E-Max (BL2)',
      },
      {
        title: 'Maskowanie przebarwień i wyrównanie łuku',
        sub: '16 Licówek E-Max na Górny i Dolny Łuk (BL1 Hollywood)',
      },
      {
        title: 'Odbudowa startych i ukruszonych zębów',
        sub: '10 Estetycznych Licówek Porcelanowych (A1)',
      },
      {
        title: 'Kompletna Metamorfoza Hollywood Smile',
        sub: '20 Cienkich Licówek E-Max z Plastyką Dziąseł',
      },
    ],
  },
  pt: {
    heading: 'Da primeira consulta ao seu sorriso dos sonhos',
    desc: 'Transformações reais com facetas de porcelana Ivoclar E-Max na Master Smile Studio Antalya.',
    viewGallery: 'Ver galeria completa de facetas →',
    cases: [
      {
        title: 'Fechamento de Diastema (Espaço entre Dentes)',
        sub: '8 Facetas Superiores Ivoclar E-Max (BL2)',
      },
      {
        title: 'Correção de Manchas e Alinhamento',
        sub: '16 Facetas E-Max Superior e Inferior (BL1 Branco Hollywood)',
      },
      {
        title: 'Restauração de Dentes Desgastados e Fraturados',
        sub: '10 Facetas Estéticas de Porcelana (A1)',
      },
      {
        title: 'Transformação Completa Hollywood Smile',
        sub: '20 Facetas Ultrafinas E-Max com Plástica Gengival',
      },
    ],
  },
  es: {
    heading: 'De la primera consulta a su sonrisa soñada',
    desc: 'Transformaciones reales de pacientes con carillas de porcelana Ivoclar E-Max en Master Smile Studio Antalya.',
    viewGallery: 'Ver galería completa de carillas →',
    cases: [
      {
        title: 'Cierre de Diastemas (Espacios Interdentales)',
        sub: '8 Carillas Superiores Ivoclar E-Max (BL2)',
      },
      {
        title: 'Enmascaramiento de Manchas Severas y Alineación',
        sub: '16 Carillas E-Max Superior e Inferior (BL1 Blanco Hollywood)',
      },
      {
        title: 'Restauración de Bordes Desgastados y Fracturas',
        sub: '10 Carillas Estéticas de Porcelana (A1)',
      },
      {
        title: 'Transformación Total Hollywood Smile',
        sub: '20 Carillas Ultrafinas E-Max con Armonización Gingival',
      },
    ],
  },
  ru: {
    heading: 'От первой консультации до идеальной улыбки',
    desc: 'Реальные преображения пациентов с помощью виниров Ivoclar E-Max в Master Smile Studio Анталья.',
    viewGallery: 'Посмотреть всю галерею виниров →',
    cases: [
      {
        title: 'Закрытие диастемы (щелей между зубами)',
        sub: '8 верхних керамических виниров Ivoclar E-Max (BL2)',
      },
      {
        title: 'Маскировка глубоких пятен и выравнивание',
        sub: '16 виниров E-Max на обе челюсти (BL1 Голливудский Белый)',
      },
      {
        title: 'Реставрация сколов и стертых зубов',
        sub: '10 эстетических фарфоровых виниров (A1)',
      },
      {
        title: 'Полное голливудское преображение улыбки',
        sub: '20 ультратонких виниров E-Max с пластикой десны',
      },
    ],
  },
};

const VENEER_CASE_IMAGES = [
  '/treatments/accordion/porcelain-laminate-copy.webp',
  '/treatments/accordion/e-max-laminate-copy.webp',
  '/treatments/accordion/lumineers.webp',
  '/treatments/accordion/composite-laminate.webp',
];

export default function TreatmentVeneerBeforeAfterSliderSection() {
  const locale = useLocale();
  const dict = I18N_DATA[locale] || I18N_DATA.en;
  const [startIndex, setStartIndex] = useState(0);

  const cases: CaseItem[] = dict.cases.map((c, i) => ({
    id: i + 1,
    title: c.title,
    subtitle: c.sub,
    img: VENEER_CASE_IMAGES[i % VENEER_CASE_IMAGES.length],
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
    <section aria-labelledby="veneer-before-after-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.headCenter}>
          <h2 id="veneer-before-after-heading" className={styles.headingMain}>
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
            aria-label="Previous veneer cases"
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
            aria-label="Next veneer cases"
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
