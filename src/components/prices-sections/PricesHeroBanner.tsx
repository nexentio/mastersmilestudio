'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import styles from './PricesHeroBanner.module.css';

interface PricesHeroBannerProps {
  customTitle?: string;
  customSubtitle?: string;
  imageSrc?: string;
}

const HERO_DATA: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: 'Affordable Turkey Teeth Prices in Istanbul',
    subtitle: 'Get Your Dream Smile at Master Smile Studio',
  },
  tr: {
    title: 'İstanbul Diş Tedavisi ve İmplant Fiyatları',
    subtitle: 'Master Smile Studio ile Hayalinizdeki Gülüşe Kavuşun',
  },
  de: {
    title: 'Erschwingliche Zahnbehandlungspreise in Istanbul',
    subtitle: 'Holen Sie sich Ihr Traumlächeln im Master Smile Studio',
  },
  pl: {
    title: 'Przystępne Ceny Zabiegów Stomatologicznych w Stambule',
    subtitle: 'Uzyskaj Swój Wymarzony Uśmiech w Master Smile Studio',
  },
  pt: {
    title: 'Preços Acessíveis de Tratamentos Dentários em Istambul',
    subtitle: 'Conquiste o Seu Sorriso de Sonho no Master Smile Studio',
  },
  es: {
    title: 'Precios Asequibles de Tratamientos Dentales en Estambul',
    subtitle: 'Consigue la Sonrisa de Tus Sueños en Master Smile Studio',
  },
  ru: {
    title: 'Доступные Цены на Стоматологическое Лечение в Стамбуле',
    subtitle: 'Обретите Улыбку Своей Мечты в Master Smile Studio',
  },
};

export default function PricesHeroBanner({
  customTitle,
  customSubtitle,
  imageSrc = '/prices-hero-bg.webp',
}: PricesHeroBannerProps) {
  const locale = useLocale();
  const data = HERO_DATA[locale] || HERO_DATA.en;

  const title = customTitle || data.title;
  const subtitle = customSubtitle || data.subtitle;

  return (
    <section className={styles.sect20} aria-label="Prices Hero Banner">
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
