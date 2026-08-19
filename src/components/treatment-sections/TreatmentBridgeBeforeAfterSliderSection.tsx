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

const BRIDGE_I18N_DATA: Record<string, LocalizedText> = {
  en: {
    heading: 'Restoring Missing Teeth & Full Chewing Power',
    desc: 'Real patient smile transformations with custom German Zirconia & Implant-supported dental bridges at Master Smile Studio Antalya.',
    viewGallery: 'View Full Bridge Gallery →',
    cases: [
      {
        title: '3-Unit Anterior Zirconia Fixed Bridge',
        sub: 'Restoring a central incisor gap with natural gumline emergence profile (Shade BL2)',
      },
      {
        title: '4-Unit Posterior High-Strength Zirconia Bridge',
        sub: 'Replacing two missing molars for full masticatory bite power (Shade A2)',
      },
      {
        title: 'Implant-Supported Bridge on 2 Titanium Implants',
        sub: '3 missing teeth restored without reducing healthy adjacent natural enamel',
      },
      {
        title: 'Full Arch Fixed Zirconia Bridge Reconstruction',
        sub: '12-unit monolithic zirconia bridge on upper arch (Shade BL1)',
      },
    ],
  },
  tr: {
    heading: 'Eksik Dişlerden Güçlü ve Kusursuz Gülüşe',
    desc: 'Master Smile Studio Antalya’da Alman Zirkonyum ve İmplant üstü köprülerle tamamlanan gerçek hasta vaka dönüşümleri.',
    viewGallery: 'Tüm Köprü Galerisini İncele →',
    cases: [
      {
        title: '3 Üyeli Ön Bölge Zirkonyum Sabit Köprü',
        sub: 'Ön kesici diş boşluğunun doğal diş eti formuyla kapatılması (Renk BL2)',
      },
      {
        title: '4 Üyeli Arka Azı Yüksek Mukavemetli Zirkonyum Köprü',
        sub: 'İki eksik azı dişinin tam çiğneme kuvvetiyle restore edilmesi (Renk A2)',
      },
      {
        title: '2 İmplant Üzerine İmplant Destekli Köprü',
        sub: 'Doğal dişlere hiç dokunulmadan 3 eksik dişin kalıcı tedavisi',
      },
      {
        title: 'Tam Çene Sabit Zirkonyum Köprü Rekonstrüksiyonu',
        sub: '12 üyeli üst çene monolitik zirkonyum tam restorasyon (Renk BL1)',
      },
    ],
  },
  de: {
    heading: 'Wiederherstellung fehlender Zähne und voller Kaukraft',
    desc: 'Echte Patiententransformationen mit Zirkon- und Implantatbrücken bei Master Smile Studio Antalya.',
    viewGallery: 'Vollständige Brücken-Galerie ansehen →',
    cases: [
      {
        title: '3-Gliedrige Zirkon-Frontzahnbrücke',
        sub: 'Lückenschluss im Frontzahnbereich mit natürlichem Zahnfleischverlauf (BL2)',
      },
      {
        title: '4-Gliedrige hochfeste Zirkonbrücke für Seitenzähne',
        sub: 'Wiederherstellung voller Kaukraft bei fehlenden Backenzähnen (A2)',
      },
      {
        title: 'Implantatgetragene Brücke auf 2 Titanimplantaten',
        sub: '3 fehlende Zähne ersetzt ohne Beschleifen der gesunden Nachbarzähne',
      },
      {
        title: 'Vollkiefer-Zirkonbrücke (Full Arch)',
        sub: '12-gliedrige monolithische Zirkonbrücke im Oberkiefer (BL1)',
      },
    ],
  },
  pl: {
    heading: 'Odbudowa brakujących zębów i pełnej siły żucia',
    desc: 'Metamorfozy pacjentów z użyciem mostów cyrkonowych i na implantach w Master Smile Studio Antalya.',
    viewGallery: 'Zobacz całą galerię mostów →',
    cases: [
      {
        title: '3-Punktowy Przedni Most Cyrkonowy',
        sub: 'Odbudowa pojedynczej luki w odcinku przednim z idealną linią dziąseł (BL2)',
      },
      {
        title: '4-Punktowy Most Cyrkonowy w Odcinku Bocznym',
        sub: 'Uzupełnienie brakujących zębów trzonowych dla pełnej wydolności żucia (A2)',
      },
      {
        title: 'Most Protetyczny na 2 Implantach Tytanowych',
        sub: 'Odbudowa 3 brakujących zębów bez szlifowania zdrowych zębów sąsiednich',
      },
      {
        title: 'Całołukowy Most Cyrkonowy Full Arch',
        sub: '12-punktowy most monolityczny w szczęce górnej (BL1)',
      },
    ],
  },
  pt: {
    heading: 'Restaurando dentes ausentes com força total',
    desc: 'Transformações reais com pontes em zircônia e sobre implantes na Master Smile Studio Antalya.',
    viewGallery: 'Ver galeria completa de pontes →',
    cases: [
      {
        title: 'Ponte Fixa em Zircônia Anterior de 3 Elementos',
        sub: 'Fechamento de espaço anterior com perfil gengival natural (Cor BL2)',
      },
      {
        title: 'Ponte em Zircônia Posterior de 4 Elementos',
        sub: 'Restauração de molares ausentes para força mastigatória completa (Cor A2)',
      },
      {
        title: 'Ponte Fixa Suportada por 2 Implantes',
        sub: '3 dentes repostos sem desgastar dentes naturais saudáveis',
      },
      {
        title: 'Reabilitação em Ponte de Zircônia Arcada Completa',
        sub: 'Ponte monolítica de 12 elementos na arcada superior (Cor BL1)',
      },
    ],
  },
  es: {
    heading: 'Recuperando dientes ausentes y la fuerza de masticación',
    desc: 'Transformaciones de pacientes con puentes de zirconio y sobre implantes en Master Smile Studio Antalya.',
    viewGallery: 'Ver galería completa de puentes →',
    cases: [
      {
        title: 'Puente Fijo de Zirconio Anterior de 3 Piezas',
        sub: 'Cierre de espacio frontal con emergencia gingival estética (Color BL2)',
      },
      {
        title: 'Puente de Zirconio Posterior de 4 Piezas',
        sub: 'Restauración de molares ausentes para máxima potencia de mordida (Color A2)',
      },
      {
        title: 'Puente Dental sobre 2 Implantes de Titanio',
        sub: '3 dientes reemplazados sin tallar dientes vecinos sanos',
      },
      {
        title: 'Reconstrucción con Puente de Zirconio de Arcada Completa',
        sub: 'Puente monolítico de 12 piezas en maxilar superior (Color BL1)',
      },
    ],
  },
  ru: {
    heading: 'Восстановление утраченных зубов и жевательной функции',
    desc: 'Реальные результаты восстановления улыбки циркониевыми мостами и протезами на имплантах в Master Smile Studio.',
    viewGallery: 'Посмотреть всю галерею мостов →',
    cases: [
      {
        title: '3-единичный передний мостовидный протез из циркония',
        sub: 'Восстановление резца с естественным десневым краем (BL2)',
      },
      {
        title: '4-единичный высокопрочный мост на жевательные зубы',
        sub: 'Восстановление двух жевательных зубов для полноценного питания (A2)',
      },
      {
        title: 'Мостовидный протез на 2 титановых имплантатах',
        sub: 'Восстановление 3 зубов без обточки соседних здоровых зубов',
      },
      {
        title: 'Тотальный мостовидный протез на всю челюсть (Full Arch)',
        sub: '12-единичный монолитный циркониевый мост (BL1)',
      },
    ],
  },
};

const BRIDGE_CASE_IMAGES = [
  '/treatments/accordion/zirconium-implant-copy.webp',
  '/treatments/accordion/full-mouth-implant.webp',
  '/treatments/accordion/porcelain-laminate-copy.webp',
  '/treatments/accordion/e-max-laminate-copy.webp',
];

export default function TreatmentBridgeBeforeAfterSliderSection() {
  const locale = useLocale();
  const dict = BRIDGE_I18N_DATA[locale] || BRIDGE_I18N_DATA.en;
  const [startIndex, setStartIndex] = useState(0);

  const cases: CaseItem[] = dict.cases.map((c, i) => ({
    id: i + 1,
    title: c.title,
    subtitle: c.sub,
    img: BRIDGE_CASE_IMAGES[i % BRIDGE_CASE_IMAGES.length],
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
    <section aria-labelledby="bridge-before-after-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.headCenter}>
          <h2 id="bridge-before-after-heading" className={styles.headingMain}>
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
            aria-label="Previous bridge cases"
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
            aria-label="Next bridge cases"
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
