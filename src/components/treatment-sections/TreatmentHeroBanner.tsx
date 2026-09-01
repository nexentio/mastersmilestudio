'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentHeroBanner.module.css';

const DEFAULT_BTNS: Record<string, { primary: string; secondary: string }> = {
  en: { primary: 'Book Free Consultation', secondary: 'Explore Packages' },
  tr: { primary: 'Randevu & Bilgi Al', secondary: 'Paketleri İncele' },
  de: { primary: 'Kostenlose Beratung', secondary: 'Pakete Ansehen' },
  pl: { primary: 'Darmowa Konsultacja', secondary: 'Zobacz Pakiety' },
  pt: { primary: 'Consulta Gratuita', secondary: 'Ver Pacotes' },
  es: { primary: 'Consulta Gratuita', secondary: 'Ver Paquetes' },
  ru: { primary: 'Бесплатная Консультация', secondary: 'Смотреть Пакеты' },
};

export interface TreatmentHeroBannerProps {
  tag: string;
  title: string;
  subtitle: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  primaryBtnAriaLabel?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  secondaryBtnAriaLabel?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function TreatmentHeroBanner({
  tag,
  title,
  subtitle,
  primaryBtnText,
  primaryBtnHref = '/contact',
  primaryBtnAriaLabel,
  secondaryBtnText,
  secondaryBtnHref = '#main-content',
  secondaryBtnAriaLabel,
  imageSrc = '/treatment-hero-bg.webp',
  imageAlt,
}: TreatmentHeroBannerProps) {
  const locale = useLocale();
  const dBtns = DEFAULT_BTNS[locale] || DEFAULT_BTNS.en;
  const pBtn = primaryBtnText || dBtns.primary;
  const sBtn = secondaryBtnText || dBtns.secondary;

  return (
    <header className={styles.banner} role="banner">
      <Image
        src={imageSrc}
        alt={imageAlt || title}
        fill
        priority
        sizes="100vw"
        className={styles.bgImg}
      />
      <div className={styles.content}>
        <div className={styles.tag}>{tag}</div>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.subheading}>{subtitle}</p>
        <div className={styles.btns}>
          {pBtn && (
            <Link
              href={primaryBtnHref}
              className={styles.primaryBtn}
              aria-label={primaryBtnAriaLabel || pBtn}
            >
              <span>{pBtn}</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className={styles.btnArrowIcon}
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          )}

          {sBtn && (
            <a
              href={secondaryBtnHref}
              className={styles.secondaryBtn}
              aria-label={secondaryBtnAriaLabel || sBtn}
            >
              <span>{sBtn}</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
