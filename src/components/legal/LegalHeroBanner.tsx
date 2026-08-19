'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import styles from './LegalHeroBanner.module.css';
import { LegalDocumentData } from '@/data/privacy-policy-data';

interface LegalHeroBannerProps {
  data: LegalDocumentData;
  imageSrc?: string;
}

export default function LegalHeroBanner({
  data,
  imageSrc = '/prices-hero-bg.webp',
}: LegalHeroBannerProps) {
  const locale = useLocale();

  const title = data.title[locale] || data.title.en;
  const subtitle = data.subtitle[locale] || data.subtitle.en;
  const badgeText = data.badge[locale] || data.badge.en;
  const lastUpdatedLabel = data.lastUpdated[locale] || data.lastUpdated.en;
  const breadcrumbHome = data.breadcrumbHome[locale] || data.breadcrumbHome.en;
  const breadcrumbCurrent = data.breadcrumbCurrent[locale] || data.breadcrumbCurrent.en;

  return (
    <section className={styles.heroSection} aria-label={title}>
      <Image
        src={imageSrc}
        alt={title}
        fill
        priority
        sizes="100vw"
        className={styles.backImg}
      />
      <div className={styles.heroContainer}>
        {/* Minimalist Plain Text Breadcrumb */}
        <nav className={styles.breadcrumbRow} aria-label="Breadcrumb">
          <Link href="/" className={styles.breadcrumbLink}>
            {breadcrumbHome}
          </Link>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbCurrent}>{breadcrumbCurrent}</span>
        </nav>

        {/* Eyebrow Category Text */}
        <div className={styles.categoryTag}>// {badgeText}</div>

        {/* Editorial Heading */}
        <h1 className={styles.heroTitle}>{title}</h1>

        {/* Subtitle */}
        <p className={styles.heroSubtitle}>{subtitle}</p>

        {/* Meta details */}
        <div className={styles.metaRow}>
          <div className={styles.metaItem}>
            {lastUpdatedLabel} <strong className={styles.metaStrong}>{data.lastUpdatedDate}</strong>
          </div>
          <div className={styles.metaItem}>•</div>
          <div className={styles.metaItem}>
            Master Smile Studio • Antalya, Turkey
          </div>
        </div>
      </div>
    </section>
  );
}
