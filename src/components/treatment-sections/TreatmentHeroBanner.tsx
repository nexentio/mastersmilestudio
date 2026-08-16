import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import styles from './TreatmentHeroBanner.module.css';

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
  primaryBtnText = 'Randevu & Bilgi Al',
  primaryBtnHref = '/contact',
  primaryBtnAriaLabel,
  secondaryBtnText = 'Paketleri İncele',
  secondaryBtnHref = '#main-content',
  secondaryBtnAriaLabel,
  imageSrc = '/treatment-hero-bg.webp',
  imageAlt,
}: TreatmentHeroBannerProps) {
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
          {primaryBtnText && (
            <Link
              href={primaryBtnHref}
              className={styles.primaryBtn}
              aria-label={primaryBtnAriaLabel || primaryBtnText}
            >
              <span>{primaryBtnText}</span>
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

          {secondaryBtnText && (
            <a
              href={secondaryBtnHref}
              className={styles.secondaryBtn}
              aria-label={secondaryBtnAriaLabel || secondaryBtnText}
            >
              <span>{secondaryBtnText}</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
