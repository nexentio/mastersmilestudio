'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import styles from './FaqHeroBanner.module.css';

interface FaqHeroBannerProps {
  customTitle?: string;
  customSubtitle?: string;
  imageSrc?: string;
}

const FAQ_HERO_DATA: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: 'Dental Implant (FAQ Page)',
    subtitle: '',
  },
  tr: {
    title: 'Diş İmplantı ve Tedaviler (SSS Sayfası)',
    subtitle: '',
  },
  de: {
    title: 'Zahnimplantate & Behandlungen (FAQ)',
    subtitle: '',
  },
  pl: {
    title: 'Implanty Zębowe (Najczęściej Zadawane Pytania - FAQ)',
    subtitle: '',
  },
  pt: {
    title: 'Implantes Dentários (Página de FAQ)',
    subtitle: '',
  },
  es: {
    title: 'Implantes Dentales (Página de FAQ)',
    subtitle: '',
  },
  ru: {
    title: 'Зубные импланты (Страница FAQ)',
    subtitle: '',
  },
};

export default function FaqHeroBanner({
  customTitle,
  customSubtitle,
  imageSrc = '/faq/faq-hero-bg.webp',
}: FaqHeroBannerProps) {
  const locale = useLocale();
  const data = FAQ_HERO_DATA[locale] || FAQ_HERO_DATA.en;

  const title = customTitle || data.title;
  const subtitle = customSubtitle || data.subtitle;

  return (
    <section className={styles.sect20} aria-label="FAQ Hero Banner">
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        sizes="100vw"
        className={styles.back1}
      />
      <div className={styles.content}>
        <h1 className={styles.text1}>{title}</h1>
        {subtitle && <p className={styles.text2}>{subtitle}</p>}
      </div>
    </section>
  );
}
