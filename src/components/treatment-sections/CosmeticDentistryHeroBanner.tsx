'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './CosmeticDentistryHeroBanner.module.css';

const HERO_I18N = {
  en: {
    tag: 'TREATMENTS',
    title: 'Cosmetic Dentistry in Antalya, Turkey | Smile Makeovers & Aesthetic Treatments',
    subtitle: 'Reveal your best smile with cosmetic dentistry tailored to you.',
    btnText: 'Contact',
  },
  tr: {
    tag: 'TEDAVİLERİMİZ',
    title: 'Antalya Estetik Diş Hekimliği & Hollywood Gülüş Tasarımı',
    subtitle: 'Size özel tasarlanan estetik diş hekimliği ile en güzel gülüşünüzü ortaya çıkarın.',
    btnText: 'İletişime Geç',
  },
  de: {
    tag: 'BEHANDLUNGEN',
    title: 'Ästhetische Zahnheilkunde in Antalya, Türkei | Smile Makeover',
    subtitle: 'Zeigen Sie Ihr schönstes Lächeln mit maßgeschneiderter ästhetischer Zahnmedizin.',
    btnText: 'Kontakt',
  },
  pl: {
    tag: 'ZABIEGI',
    title: 'Stomatologia Estetyczna w Antalyi, Turcja | Metamorfozy Uśmiechu',
    subtitle: 'Odkryj swój najpiękniejszy uśmiech dzięki stomatologii estetycznej dopasowanej do Ciebie.',
    btnText: 'Kontakt',
  },
  pt: {
    tag: 'TRATAMENTOS',
    title: 'Dentisteria Estética em Antalya, Turquia | Transformação do Sorriso',
    subtitle: 'Revele o seu melhor sorriso com tratamentos de estética dentária à sua medida.',
    btnText: 'Contato',
  },
  es: {
    tag: 'TRATAMIENTOS',
    title: 'Odontología Estética en Antalya, Turquía | Diseño de Sonrisa',
    subtitle: 'Luzca su mejor sonrisa con odontología cosmética personalizada.',
    btnText: 'Contacto',
  },
  ru: {
    tag: 'ЛЕЧЕНИЕ',
    title: 'Эстетическая стоматология в Анталье | Голливудская улыбка',
    subtitle: 'Раскройте свою лучшую улыбку с помощью индивидуальной эстетической стоматологии.',
    btnText: 'Записаться',
  },
};

export default function CosmeticDentistryHeroBanner() {
  const locale = useLocale();
  const d = HERO_I18N[locale as keyof typeof HERO_I18N] || HERO_I18N.en;

  return (
    <div className={styles.sect20}>
      <Image
        src="/images/treatments/cosmetics.jpg"
        alt={d.title}
        fill
        priority
        sizes="100vw"
        className={styles.back1}
      />
      <div className={styles.content}>
        <div className={styles.text1}>{d.tag}</div>
        <h1 className={styles.text2}>{d.title}</h1>
        <h4 className={styles.text3}>{d.subtitle}</h4>
        <div className={styles.buton}>
          <Link href="#contact" className={styles.gototedaviform}>
            <span className={styles.xgrid}>
              <span className={`${styles.xgrids} ${styles.s1}`}>{d.btnText}</span>
              <span className={`${styles.xgrids} ${styles.s2}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
