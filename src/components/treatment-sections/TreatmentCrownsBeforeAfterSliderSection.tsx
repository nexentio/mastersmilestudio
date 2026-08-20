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

const CROWN_I18N_DATA: Record<string, LocalizedText> = {
  en: {
    heading: 'From Broken Teeth to a Restored Radiant Smile',
    desc: 'Real patient smile transformations with custom German Zirconia and E-Max crowns at Master Smile Studio Antalya.',
    viewGallery: 'View Full Crown Gallery →',
    cases: [
      {
        title: 'Full Arch Zirconia Bridge & Crown Restoration',
        sub: '14 Upper Multilayer Zirconia Crowns (Shade BL2)',
      },
      {
        title: 'Severe Decay & Root Canal Treated Tooth Repair',
        sub: '6 Anterior E-Max High Translucency Crowns (A1)',
      },
      {
        title: 'Replacing Worn Metal-Porcelain (PFM) Crowns',
        sub: '8 Premium Zirconia Crowns with Natural Gingival Line',
      },
      {
        title: 'Complete Full Mouth Bite Reconstruction',
        sub: '24 German Amann Girrbach Zirconia Crowns (BL1)',
      },
    ],
  },
  tr: {
    heading: 'Kırık ve Yıpranmış Dişlerden Kusursuz Gülüşe',
    desc: 'Master Smile Studio Antalya’da Alman Zirkonyum ve E-Max kronlarla gerçekleştirilen gerçek hasta dönüşümleri.',
    viewGallery: 'Tüm Kron Galerisini İncele →',
    cases: [
      {
        title: 'Tam Çene Zirkonyum Köprü ve Kron Restorasyonu',
        sub: '14 Üst Çene Çok Katmanlı Zirkonyum Kron (Renk BL2)',
      },
      {
        title: 'İleri Derece Çürük ve Kanal Tedavili Diş Onarımı',
        sub: '6 Ön Bölge E-Max Yüksek Saydamlıkta Kron (A1)',
      },
      {
        title: 'Eski Metal Destekli Porselenlerin Değişimi',
        sub: '8 Adet Doğal Diş Eti Uyumlu Premium Zirkonyum Kron',
      },
      {
        title: 'Komple Tam Ağız Çiğneme ve Gülüş Rekonstrüksiyonu',
        sub: '24 Adet Alman Amann Girrbach Zirkonyum Kron (BL1)',
      },
    ],
  },
  de: {
    heading: 'Von beschädigten Zähnen zu einem strahlenden Lächeln',
    desc: 'Echte Patiententransformationen mit deutschem Zirkon und E-Max Kronen bei Master Smile Studio Antalya.',
    viewGallery: 'Vollständige Kronen-Galerie ansehen →',
    cases: [
      {
        title: 'Vollkiefer-Zirkonbrücke und Kronenversorgung',
        sub: '14 Obere Multilayer-Zirkonkronen (Farbe BL2)',
      },
      {
        title: 'Wiederherstellung stark zerstörter Zähne nach Wurzelbehandlung',
        sub: '6 Ästhetische E-Max Frontzahnkronen (A1)',
      },
      {
        title: 'Austausch alter Metallkeramikkronen',
        sub: '8 Zirkonkronen mit perfektem Zahnfleischsaum',
      },
      {
        title: 'Komplette Bissrekonstruktion Full Mouth',
        sub: '24 Deutsche Amann Girrbach Zirkonkronen (BL1)',
      },
    ],
  },
  pl: {
    heading: 'Od zniszczonych zębów do idealnego uśmiechu',
    desc: 'Prawdziwe metamorfozy pacjentów z użyciem koron cyrkonowych i E-Max w Master Smile Studio Antalya.',
    viewGallery: 'Zobacz całą galerię koron →',
    cases: [
      {
        title: 'Odbudowa całego łuku zębowego na tlenku cyrkonu',
        sub: '14 Górnych Koron Cyrkonowych Multilayer (BL2)',
      },
      {
        title: 'Odbudowa zębów po leczeniu kanałowym i rozległej próchnicy',
        sub: '6 Przednich Koron Pełnoceramicznych E-Max (A1)',
      },
      {
        title: 'Wymiana starych nieszczelnych koron na metalu (PFM)',
        sub: '8 Koron Cyrkonowych z Bio-Kompatybilną Linią Dziąseł',
      },
      {
        title: 'Kompleksowa Rekonstrukcja Całej Jamy Ustnej',
        sub: '24 Niemieckie Korony Cyrkonowe Amann Girrbach (BL1)',
      },
    ],
  },
  pt: {
    heading: 'Da restauração dental ao sorriso radiante',
    desc: 'Transformações reais de pacientes com coroas de zircônia e E-Max na Master Smile Studio Antalya.',
    viewGallery: 'Ver galeria completa de coroas →',
    cases: [
      {
        title: 'Reabilitação em Zircônia Arcada Superior',
        sub: '14 Coroas em Zircônia Multicamadas (Cor BL2)',
      },
      {
        title: 'Restauração de Dentes Tratados Endodonticamente',
        sub: '6 Coroas Anteriores E-Max de Alta Translucidez (A1)',
      },
      {
        title: 'Substituição de Antigas Coroas Metalocerâmicas',
        sub: '8 Coroas em Zircônia com Margem Gengival Perfeita',
      },
      {
        title: 'Reconstrução Oclusal Completa Full Mouth',
        sub: '24 Coroas de Zircônia Alemã Amann Girrbach (BL1)',
      },
    ],
  },
  es: {
    heading: 'De dientes dañados a una sonrisa deslumbrante',
    desc: 'Transformaciones reales con coronas de zirconio alemán y E-Max en Master Smile Studio Antalya.',
    viewGallery: 'Ver galería completa de coronas →',
    cases: [
      {
        title: 'Rehabilitación Superior Completa con Puente de Zirconio',
        sub: '14 Coronas de Zirconio Multicapa (Color BL2)',
      },
      {
        title: 'Reparación de Dientes con Endodoncia y Grandes Fracturas',
        sub: '6 Coronas E-Max de Alta Translucidez (A1)',
      },
      {
        title: 'Sustitución de Antiguas Coronas de Metal-Porcelana',
        sub: '8 Coronas de Zirconio con Integración Gingival Óptima',
      },
      {
        title: 'Reconstrucción Oclusal Total de la Sonrisa',
        sub: '24 Coronas de Zirconio Alemán Amann Girrbach (BL1)',
      },
    ],
  },
  ru: {
    heading: 'От разрушенных зубов к безупречной улыбке',
    desc: 'Реальные преображения пациентов с помощью немецких коронок из диоксида циркония и E-Max в Master Smile Studio.',
    viewGallery: 'Посмотреть всю галерею коронок →',
    cases: [
      {
        title: 'Полная реабилитация верхнего зубного ряда на цирконии',
        sub: '14 многослойных коронок из диоксида циркония (оттенок BL2)',
      },
      {
        title: 'Восстановление зубов после эндодонтического лечения',
        sub: '6 эстетических коронок E-Max на передние зубы (A1)',
      },
      {
        title: 'Замена старых металлокерамических коронок',
        sub: '8 циркониевых коронок с естественным десневым краем',
      },
      {
        title: 'Комплексная тотальная реконструкция прикуса',
        sub: '24 немецкие коронки Amann Girrbach (BL1)',
      },
    ],
  },
};

const CROWN_CASE_IMAGES = [
  '/treatments/accordion/zirconium-implant.webp',
  '/treatments/accordion/e-max-laminate.webp',
  '/treatments/accordion/porcelain-laminate.webp',
  '/treatments/accordion/full-mouth-implant.webp',
];

export default function TreatmentCrownsBeforeAfterSliderSection() {
  const locale = useLocale();
  const dict = CROWN_I18N_DATA[locale] || CROWN_I18N_DATA.en;
  const [startIndex, setStartIndex] = useState(0);

  const cases: CaseItem[] = dict.cases.map((c, i) => ({
    id: i + 1,
    title: c.title,
    subtitle: c.sub,
    img: CROWN_CASE_IMAGES[i % CROWN_CASE_IMAGES.length],
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
    <section aria-labelledby="crown-before-after-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.headCenter}>
          <h2 id="crown-before-after-heading" className={styles.headingMain}>
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
            aria-label="Previous crown cases"
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
            aria-label="Next crown cases"
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
