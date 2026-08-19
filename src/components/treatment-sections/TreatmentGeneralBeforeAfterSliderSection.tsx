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

const GENERAL_I18N_DATA: Record<string, LocalizedText> = {
  en: {
    heading: 'Restoring Oral Health, Comfort & Healthy Foundations',
    desc: 'Real patient general dentistry transformations with microscopic root canal therapy, ultrasonic Air-Flow deep cleaning, and aesthetic composite fillings at Master Smile Studio Antalya.',
    viewGallery: 'View Full Dental Case Gallery →',
    cases: [
      {
        title: 'Microscopic Root Canal & Ceramic Onlay Restoration',
        sub: 'Saving a severely decayed molar tooth from extraction with 3D obturation and CAD/CAM ceramic onlay',
      },
      {
        title: 'Full Arch Periodontal Deep Scaling & Laser Curettage',
        sub: 'Reversing chronic bleeding gingivitis into firm, pink, healthy gum tissue in just 2 visits',
      },
      {
        title: 'Amalgam Mercury Filling Replacement with Nano-Composite',
        sub: 'Removing old oxidized grey metal fillings and replacing them with tooth-colored biocompatible composite',
      },
      {
        title: 'Atraumatic Impacted Wisdom Tooth Surgical Extraction',
        sub: 'Minimally invasive 3D CBCT-guided surgical extraction with zero adjacent nerve trauma and rapid healing',
      },
    ],
  },
  tr: {
    heading: 'Sağlıklı Dişler, Ağrısız Çiğneme ve Güçlü Diş Etleri',
    desc: 'Master Smile Studio Antalya’da mikroskobik kanal tedavisi, ultrasonik Air-Flow diş temizliği ve estetik nanokompozit dolgularla tamamlanan gerçek klinik vakalar.',
    viewGallery: 'Tüm Klinik Tedavi Galerisini İncele →',
    cases: [
      {
        title: 'Mikroskobik Kök Kanal Tedavisi & Seramik Onlay',
        sub: 'İleri derece çürük azı dişinin çekimden kurtarılması, 3D kanal dolumu ve CAD/CAM seramik dolgu restorasyonu',
      },
      {
        title: 'Tam Çene Diş Eti Tedavisi & Lazer Destekli Küretaj',
        sub: 'Kronik diş eti kanaması ve iltihabının 2 seansta tamamen durdurulması ve pembe sağlıklı diş etine kavuşulması',
      },
      {
        title: 'Eski Amalgam Dolguların Estetik Kompozit ile Yenilenmesi',
        sub: 'Cıva içerikli gri metal dolguların güvenli sökümü ve doğal diş renginde biyouyumlu nanokompozit ile değişimi',
      },
      {
        title: 'Atravmatik Gömülü 20’lik Diş Cerrahi Çekimi',
        sub: '3D Tomografi kılavuzluğunda çevre sinirlere zarar vermeden milimetrik ve konforlu cerrahi çekim',
      },
    ],
  },
  de: {
    heading: 'Wiederherstellung von Mundgesundheit, Komfort & gesundem Zahnfleisch',
    desc: 'Echte klinische Fälle mit mikroskopischer Wurzelbehandlung, Air-Flow Tiefenreinigung und ästhetischen Kompositfüllungen bei Master Smile Studio Antalya.',
    viewGallery: 'Vollständige Fall-Galerie ansehen →',
    cases: [
      {
        title: 'Mikroskopische Wurzelbehandlung & Keramik-Onlay',
        sub: 'Erhalt eines stark zerstörten Backenzahns vor der Extraktion mit 3D-Obturation und CAD/CAM Keramik',
      },
      {
        title: 'Parodontitistherapie & Laser-gestützte Kürettage',
        sub: 'Rückbildung chronischer Zahnfleischentzündungen zu straffem, gesundem rosa Zahnfleisch in 2 Sitzungen',
      },
      {
        title: 'Amalgamsanierung & Austausch gegen Nanokomposit',
        sub: 'Schonende Entfernung alter quecksilberhaltiger Metallfüllungen und Ersatz durch zahnfarbenes Komposit',
      },
      {
        title: 'Atraumatische operative Weisheitszahnentfernung',
        sub: '3D CBCT-geführte minimalinvasive Entfernung retinierter Weisheitszähne mit schneller Wundheilung',
      },
    ],
  },
  pl: {
    heading: 'Odbudowa zdrowia jamy ustnej, komfortu i mocnych dziąseł',
    desc: 'Prawdziwe przypadki leczenia kanałowego pod mikroskopem, higienizacji Air-Flow i estetycznych wypełnień nanokompozytowych w Master Smile Studio Antalya.',
    viewGallery: 'Zobacz całą galerię przypadków medycznych →',
    cases: [
      {
        title: 'Leczenie Kanałowe pod Mikroskopem & Odbudowa Ceramiczna Onlay',
        sub: 'Uratowanie zniszczonego zęba trzonowego przed ekstrakcją z termoplastycznym wypełnieniem i ceramiką CAD/CAM',
      },
      {
        title: 'Leczenie Przyzębia & Laserowy Kiretaż Kieszonek',
        sub: 'Zatrzymanie krwawienia dziąseł i przywrócenie jędrnych, zdrowych tkanek w zaledwie 2 wizytach',
      },
      {
        title: 'Bezpieczna Wymiana Wypełnień Amalgamatowych na Kompozyt',
        sub: 'Usunięcie szarych plomb z rtęcią i zastąpienie ich wysoce estetycznym nanokompozytem w kolorze zęba',
      },
      {
        title: 'Atraumatyczne Chirurgiczne Usunięcie Zęba Mądrości',
        sub: 'Precyzyjna ekstrakcja zatrzymanej ósemki pod kontrolą tomografii 3D CBCT bez uszkodzenia nerwów',
      },
    ],
  },
  pt: {
    heading: 'Restaurando a saúde bucal, conforto e gengivas saudáveis',
    desc: 'Casos clínicos reais de tratamento de canal microscópico, profilaxia profunda Air-Flow e restaurações em resina composta na Master Smile Studio Antalya.',
    viewGallery: 'Ver galeria completa de tratamentos clínicos →',
    cases: [
      {
        title: 'Tratamento de Canal Microscópico & Restauração Onlay Cerâmica',
        sub: 'Salvamento de dente molar severamente cariado com obturação 3D e bloco cerâmico CAD/CAM',
      },
      {
        title: 'Tratamento Periodontal Completo & Curetagem a Laser',
        sub: 'Eliminação de sangramento gengival e recuperação de gengivas firmes e saudáveis em 2 sessões',
      },
      {
        title: 'Substituição Segura de Restaurações de Amálgama por Resina',
        sub: 'Remoção de restaurações metálicas escuras e troca por resinas biocompatíveis na cor do dente',
      },
      {
        title: 'Extração Cirúrgica Atraumática de Dente do Siso Incluso',
        sub: 'Cirurgia guiada por tomografia 3D CBCT com preservação nervosa e cicatrização acelerada',
      },
    ],
  },
  es: {
    heading: 'Restaurando la salud bucodental, el confort y las encías sanas',
    desc: 'Casos clínicos reales de endodoncia microscópica, limpieza profunda Air-Flow y empastes estéticos de composite en Master Smile Studio Antalya.',
    viewGallery: 'Ver galería completa de casos clínicos →',
    cases: [
      {
        title: 'Endodoncia Microscópica & Restauración con Onlay Cerámico',
        sub: 'Salvamento de molar con caries profunda evitando la extracción con obturación 3D y cerámica CAD/CAM',
      },
      {
        title: 'Tratamiento Periodontal Completo & Curetaje con Láser',
        sub: 'Detención del sangrado gingival y recuperación de encías firmes y rosadas en 2 sesiones',
      },
      {
        title: 'Sustitución de Empastes de Amalgama por Nanocomposite',
        sub: 'Eliminación segura de metales oscuros y colocación de resinas biocompatibles del color del diente',
      },
      {
        title: 'Extracción Quirúrgica Atraumática de Muela del Juicio',
        sub: 'Cirugía mínimamente invasiva guiada por TAC 3D CBCT sin afectación de estructuras nerviosas',
      },
    ],
  },
  ru: {
    heading: 'Восстановление здоровья зубов, комфорта и крепких десен',
    desc: 'Реальные клинические случаи эндодонтии под микроскопом, глубокой гигиены Air-Flow и эстетических нанокомпозитных реставраций в Master Smile Studio.',
    viewGallery: 'Посмотреть всю клиническую галерею →',
    cases: [
      {
        title: 'Лечение каналов под микроскопом & Керамическая вкладка Onlay',
        sub: 'Спасение сильно разрушенного моляра от удаления с 3D обтурацией и вкладкой CAD/CAM',
      },
      {
        title: 'Комплексное лечение пародонтита & Лазерный кюретаж',
        sub: 'Устранение кровоточивости и воспаления десен с восстановлением здоровой плотности за 2 визита',
      },
      {
        title: 'Замена старых амальгамовых пломб на нанокомпозит',
        sub: 'Безопасное снятие темных металлических пломб и установка биосовместимого композита в цвет зуба',
      },
      {
        title: 'Атравматичное удаление ретинированного зуба мудрости',
        sub: 'Миниинвазивное удаление под контролем 3D CBCT томографии без травмы нижнечелюстного нерва',
      },
    ],
  },
};

const GENERAL_CASE_IMAGES = [
  '/treatments/accordion/lumineers.webp',
  '/treatments/accordion/porcelain-laminate-copy.webp',
  '/treatments/accordion/e-max-laminate-copy.webp',
  '/treatments/accordion/zirconium-implant-copy.webp',
];

export default function TreatmentGeneralBeforeAfterSliderSection() {
  const locale = useLocale();
  const dict = GENERAL_I18N_DATA[locale] || GENERAL_I18N_DATA.en;
  const [startIndex, setStartIndex] = useState(0);

  const cases: CaseItem[] = dict.cases.map((c, i) => ({
    id: i + 1,
    title: c.title,
    subtitle: c.sub,
    img: GENERAL_CASE_IMAGES[i % GENERAL_CASE_IMAGES.length],
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
    <section aria-labelledby="general-before-after-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.headCenter}>
          <h2 id="general-before-after-heading" className={styles.headingMain}>
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
            aria-label="Previous dental cases"
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
            aria-label="Next dental cases"
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
