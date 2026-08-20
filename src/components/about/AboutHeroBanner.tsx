'use client';

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import styles from './AboutHeroBanner.module.css';

interface AboutHeroBannerProps {
  breadcrumbHomeText: string;
  breadcrumbAboutText: string;
  pageTitle: string;
  pageSubtitle: string;
  imageSrc?: string;
}

export default function AboutHeroBanner({
  breadcrumbHomeText,
  breadcrumbAboutText,
  pageTitle,
  pageSubtitle,
  imageSrc = '/master-smile-studio-interior.webp',
}: AboutHeroBannerProps) {
  return (
    <section className={styles.sect20} aria-label={pageTitle}>
      <Image
        src={imageSrc}
        alt={pageTitle}
        fill
        priority
        sizes="100vw"
        className={styles.back1}
      />
      <div className={styles.content}>
        {/* Breadcrumb Pill Badge */}
        <div className={styles.breadcrumbRow}>
          <Link href="/" className={styles.breadcrumbPill}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>{breadcrumbHomeText}</span>
            <span style={{ opacity: 0.6 }}>›</span>
            <span style={{ fontWeight: 600 }}>{breadcrumbAboutText}</span>
          </Link>
        </div>

        {/* Split Header: Left Title | Right Subtitle */}
        <div className={styles.splitHeader}>
          <div>
            <h1 className={styles.mainTitle}>{pageTitle}</h1>
          </div>

          <div className={styles.subtitleWrapper}>
            <p className={styles.pageSubtitle}>{pageSubtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
