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

const DENTURES_I18N_DATA: Record<string, LocalizedText> = {
  en: {
    heading: 'Restoring Complete Smiles & Confident Chewing',
    desc: 'Real patient transformations with custom Snap-On implant overdentures and precision complete dentures at Master Smile Studio Istanbul.',
    viewGallery: 'View Full Denture Gallery →',
    cases: [
      {
        title: 'Upper Palateless Snap-On Denture on 4 Implants',
        sub: 'Complete upper arch restoration with zero palate covering and 100% taste sensation',
      },
      {
        title: 'Lower Jaw Snap-On Overdenture on 2 Implants',
        sub: 'Eliminating loose, painful bottom dentures with rock-solid locator retention',
      },
      {
        title: 'Premium High-Impact Acrylic Complete Dentures',
        sub: 'Upper and lower natural gum-colored dentures with multilayer aesthetic composite teeth',
      },
      {
        title: 'Valplast Flexible Partial Denture for Multiple Gaps',
        sub: 'Discreet tissue-colored flexible clasps replacing missing posterior teeth with zero metal',
      },
    ],
  },
  tr: {
    heading: 'Oynamayan Damaklar ve Yeniden Güçlü Çiğneme',
    desc: 'Master Smile Studio İstanbul’da implant destekli çıtçıtlı protezler ve hassas tutuculu damaklarla tamamlanan gerçek hasta dönüşümleri.',
    viewGallery: 'Tüm Protez Galerisini İncele →',
    cases: [
      {
        title: 'Üst Çene 4 İmplant Üstü Damaksız Çıt Çıtlı Protez',
        sub: 'Damağı kapatmayan, tat alma duyusunu kısıtlamayan konforlu kilitli sistem',
      },
      {
        title: 'Alt Çene 2 İmplant Üstü Çıt Çıtlı Protez (Locator)',
        sub: 'Sürekli yerinden oynayan ve vuran alt damak sorununa son veren kilitli tutuculuk',
      },
      {
        title: 'Premium Kırılmaya Dayanıklı Tam Damak Protezi',
        sub: 'Doğal diş eti renginde estetik kaide ve çok katmanlı doğal görünümlü dişler',
      },
      {
        title: 'Valplast Esnek Bölümlü Kancasız Protez',
        sub: 'Metalsiz, diş eti renginde esnek kancalarla fark edilmeyen doğal tutuculuk',
      },
    ],
  },
  de: {
    heading: 'Fester Halt und wieder kraftvolles Kauen',
    desc: 'Echte Patiententransformationen mit implantatgetragenen Druckknopf-Prothesen und Vollprothesen bei Master Smile Studio Istanbul.',
    viewGallery: 'Vollständige Prothesen-Galerie ansehen →',
    cases: [
      {
        title: 'Gaumenfreie Overdenture auf 4 Implantaten (Oberkiefer)',
        sub: 'Freier Gaumen und 100% Geschmacksempfinden mit sicherem Klick-System',
      },
      {
        title: 'Unterkiefer-Klick-Prothese auf 2 Implantaten (Locator)',
        sub: 'Schluss mit wackelnden Unterkieferprothesen dank fester Locator-Verankerung',
      },
      {
        title: 'Hochfeste Premium-Vollprothese (Ober- & Unterkiefer)',
        sub: 'Natürliche Zahnfleischästhetik mit mehrschichtigen Kompositzähnen',
      },
      {
        title: 'Valplast flexible Teilprothese ohne Metallklammern',
        sub: 'Unauffällige zahnfleischfarbene Halteelemente ohne sichtbares Metall',
      },
    ],
  },
  pl: {
    heading: 'Maksymalna stabilność i pewne żucie każdego dnia',
    desc: 'Metamorfozy pacjentów z użyciem protez na zatrzaskach (Overdentures) i protez całkowitych w Master Smile Studio Stambuł.',
    viewGallery: 'Zobacz całą galerię protez →',
    cases: [
      {
        title: 'Górna Proteza Bezpodniebienna na 4 Implantach',
        sub: 'Pełne odczuwanie smaku potraw bez płyty podniebiennej dzięki zatrzaskom',
      },
      {
        title: 'Dolna Proteza na 2 Zatrzaskach Locator',
        sub: 'Koniec z wypadającą dolną protezą i klejami mocującymi',
      },
      {
        title: 'Wysokoudarzeniowa Proteza Całkowita Góra i Dół',
        sub: 'Estetyczna płyta w kolorze dziąsła z wielowarstwowymi zębami kompozytowymi',
      },
      {
        title: 'Elastyczna Proteza Częściowa Valplast bez Metalu',
        sub: 'Dyskretne klamry w kolorze dziąsła bez widocznych metalowych elementów',
      },
    ],
  },
  pt: {
    heading: 'Estabilidade absoluta e segurança ao sorrir',
    desc: 'Transformações reais com overdentures tipo clique sobre implantes e próteses totais na Master Smile Studio Istambul.',
    viewGallery: 'Ver galeria completa de próteses →',
    cases: [
      {
        title: 'Overdenture Superior Sem Céu da Boca (4 Implantes)',
        sub: 'Palato totalmente livre com recuperação completa do paladar e encaixe seguro',
      },
      {
        title: 'Overdenture Inferior sobre 2 Implantes (Locator)',
        sub: 'Eliminação definitiva de próteses inferiores soltas e dores ao mastigar',
      },
      {
        title: 'Prótese Total Premium em Acrílico de Alta Densidade',
        sub: 'Base anatômica natural com dentes estéticos multicamadas',
      },
      {
        title: 'Prótese Parcial Flexível Valplast Sem Grampos Metálicos',
        sub: 'Grampos estéticos na cor da gengiva sem metal aparente',
      },
    ],
  },
  es: {
    heading: 'Máxima fijación y seguridad total al masticar',
    desc: 'Transformaciones de pacientes con sobredentaduras sobre implantes y dentaduras completas en Master Smile Studio Estambul.',
    viewGallery: 'Ver galería completa de prótesis →',
    cases: [
      {
        title: 'Sobredentadura Superior sin Paladar sobre 4 Implantes',
        sub: 'Paladar despejado con 100% de sensación de sabor y anclaje firme de clic',
      },
      {
        title: 'Sobredentadura Inferior sobre 2 Implantes Locator',
        sub: 'Fin a las dentaduras inferiores flojas y a las pastas adhesivas',
      },
      {
        title: 'Dentadura Completa de Acrílico de Alto Impacto',
        sub: 'Base estética con tonalidad gingival y dientes multicapa de aspecto natural',
      },
      {
        title: 'Prótesis Parcial Flexible Valplast sin Metal',
        sub: 'Retenedores del color de la encía sin ganchos metálicos visibles',
      },
    ],
  },
  ru: {
    heading: 'Надежная фиксация и уверенное пережевывание пищи',
    desc: 'Реальные результаты восстановления улыбки покрывными протезами на имплантах и полными съемными протезами в Master Smile Studio.',
    viewGallery: 'Посмотреть всю галерею протезов →',
    cases: [
      {
        title: 'Верхний протез без нёба на 4 имплантатах',
        sub: 'Полное сохранение вкусовых ощущений благодаря открытому нёбу и надежным замкам',
      },
      {
        title: 'Нижний протез на 2 замках Locator',
        sub: 'Надежное решение проблемы подвижности нижнего съемного протеза',
      },
      {
        title: 'Полный съемный протез из ударопрочного акрила',
        sub: 'Анатомическая эстетика десны с многослойными композитными зубами',
      },
      {
        title: 'Нейлоновый гибкий протез Valplast без металла',
        sub: 'Незаметные кламмеры под цвет десны без металлического каркаса',
      },
    ],
  },
};

const DENTURE_CASE_IMAGES = [
  'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
  'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
  'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
  'https://sohodent.com/doc/data1/lumineer-copy.webp',
];

export default function TreatmentDenturesBeforeAfterSliderSection() {
  const locale = useLocale();
  const dict = DENTURES_I18N_DATA[locale] || DENTURES_I18N_DATA.en;
  const [startIndex, setStartIndex] = useState(0);

  const cases: CaseItem[] = dict.cases.map((c, i) => ({
    id: i + 1,
    title: c.title,
    subtitle: c.sub,
    img: DENTURE_CASE_IMAGES[i % DENTURE_CASE_IMAGES.length],
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
    <section aria-labelledby="denture-before-after-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.headCenter}>
          <h2 id="denture-before-after-heading" className={styles.headingMain}>
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
            aria-label="Previous denture cases"
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
            aria-label="Next denture cases"
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
