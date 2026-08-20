'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import styles from './TreatmentClinicTourSection.module.css';

interface Props {
  videoId?: string;
  placeholderNum?: string;
}

const CONTENT_DICT: Record<string, { title: string; tagline: string; desc: string }> = {
  en: {
    title: 'Step Inside Master Smile Studio',
    tagline: 'Take a virtual tour of our state-of-the-art clinic located in the heart of Antalya.',
    desc: 'From modern treatment suites to welcoming patient lounges, see how we combine advanced CAD/CAM technology, international hospital standards, and 5-star comfort to make your dental journey truly exceptional.',
  },
  tr: {
    title: 'Master Smile Studio Kliniğimizi Keşfedin',
    tagline: 'Antalya’nın kalbinde yer alan son teknoloji kliniğimizde sanal bir tura çıkın.',
    desc: 'Modern tedavi ünitelerinden şık hasta dinlenme salonlarımıza kadar, diş sağlığı yolculuğunuzu kusursuz kılmak için ileri CAD/CAM teknolojisini, uluslararası hastane standartlarını ve 5 yıldızlı konforu nasıl birleştirdiğimizi görün.',
  },
  de: {
    title: 'Erleben Sie das Master Smile Studio',
    tagline: 'Machen Sie einen virtuellen Rundgang durch unsere hochmoderne Klinik im Herzen von Antalya.',
    desc: 'Von hochmodernen Behandlungsräumen bis hin zu eleganten Patientenlounges – erleben Sie, wie wir fortschrittliche CAD/CAM-Technologie, internationale Klinikstandards und 5-Sterne-Komfort für Ihre Behandlung vereinen.',
  },
  pl: {
    title: 'Odkryj Master Smile Studio',
    tagline: 'Wybierz się na wirtualny spacer po naszej ultranowoczesnej klinice w sercu Antalyi.',
    desc: 'Od zaawansowanych gabinetów zabiegowych po luksusowe strefy relaksu dla pacjentów – zobacz, jak łączymy zaawansowaną technologię CAD/CAM, międzynarodowe standardy medyczne i 5-gwiazdkowy komfort.',
  },
  pt: {
    title: 'Conheça a Master Smile Studio',
    tagline: 'Faça um tour virtual pela nossa clínica de última geração localizada no coração de Antália.',
    desc: 'De salas de tratamento modernas a lounges acolhedores, veja como combinamos tecnologia avançada CAD/CAM, padrões hospitalares internacionais e conforto 5 estrelas para uma experiência inesquecível.',
  },
  es: {
    title: 'Descubra Master Smile Studio',
    tagline: 'Realice un recorrido virtual por nuestra clínica de vanguardia ubicada en el corazón de Antalya.',
    desc: 'Desde modernas salas de tratamiento hasta elegantes salas de descanso, descubra cómo combinamos tecnología CAD/CAM avanzada, estándares internacionales y confort de 5 estrellas para su tratamiento dental.',
  },
  ru: {
    title: 'Взгляните на Master Smile Studio',
    tagline: 'Совершите виртуальный тур по нашей ультрасовременной клинике в самом сердце Антальи.',
    desc: 'От передовых лечебных кабинетов до роскошных зон отдыха — посмотрите, как мы объединяем цифровые CAD/CAM технологии, международные медицинские стандарты и 5-звездочный комфорт.',
  },
};

export default function TreatmentClinicTourSection({
  videoId = 'haSWVr2smMM',
}: Props) {
  const locale = useLocale();
  const t = CONTENT_DICT[locale] || CONTENT_DICT.en;

  return (
    <section aria-labelledby="clinic-tour-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.head}>
          <div className={styles.headGrid}>
            <div>
              <h2 id="clinic-tour-heading" className={styles.title}>
                {t.title}
              </h2>
            </div>
            <div>
              <div className={styles.tagline}>{t.tagline}</div>
              <p className={styles.desc}>{t.desc}</p>
            </div>
          </div>
        </div>

        {/* Video Box */}
        <div className={styles.videoBox}>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={t.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
