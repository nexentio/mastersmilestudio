'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import styles from './BeforeAfterHeroBanner.module.css';

interface BeforeAfterHeroBannerProps {
  customTitle?: string;
  customSubtitle?: string;
  imageSrc?: string;
}

const BEFORE_AFTER_HERO_DATA: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: 'Turkey Teeth in Istanbul: Before and After Dental Implants, Veneers & More',
    subtitle: 'Master Smile Studio | Istanbul, Turkey',
  },
  tr: {
    title: 'İstanbul Diş Tedavisi Öncesi ve Sonrası: İmplant, Kaplama ve Gülüş Tasarımı',
    subtitle: 'Master Smile Studio | İstanbul, Türkiye',
  },
  de: {
    title: 'Zahnbehandlungen in Istanbul: Vorher-Nachher für Zahnimplantate, Veneers & mehr',
    subtitle: 'Master Smile Studio | Istanbul, Türkei',
  },
  pl: {
    title: 'Zęby w Turcji: Przed i Po Implantach, Licówkach i Metamorfozach Uśmiechu',
    subtitle: 'Master Smile Studio | Stambuł, Turcja',
  },
  pt: {
    title: 'Tratamentos Dentários em Istambul: Antes e Depois de Implantes, Facetas e Mais',
    subtitle: 'Master Smile Studio | Istambul, Turquia',
  },
  es: {
    title: 'Dientes en Turquía: Antes y Después de Implantes Dentales, Carillas y Más',
    subtitle: 'Master Smile Studio | Estambul, Turquía',
  },
  ru: {
    title: 'Лечение зубов в Стамбуле: До и После имплантации, виниров и реставрации',
    subtitle: 'Master Smile Studio | Стамбул, Турция',
  },
};

export default function BeforeAfterHeroBanner({
  customTitle,
  customSubtitle,
  imageSrc = '/before-after/before-after-hero-bg.webp',
}: BeforeAfterHeroBannerProps) {
  const locale = useLocale();
  const data = BEFORE_AFTER_HERO_DATA[locale] || BEFORE_AFTER_HERO_DATA.en;

  const title = customTitle || data.title;
  const subtitle = customSubtitle || data.subtitle;

  return (
    <section className={styles.sect20} aria-label="Before and After Smile Gallery Hero Banner">
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
        <p className={styles.text2}>{subtitle}</p>
      </div>
    </section>
  );
}
