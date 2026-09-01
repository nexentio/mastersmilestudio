import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MINIMAL_NOT_FOUND_I18N } from '@/data/not-found-i18n';
import styles from './NotFoundSection.module.css';

interface NotFoundSectionProps {
  locale?: string;
}

export default function NotFoundSection({ locale = 'en' }: NotFoundSectionProps) {
  const safeLocale = MINIMAL_NOT_FOUND_I18N[locale] ? locale : 'en';
  const d = MINIMAL_NOT_FOUND_I18N[safeLocale] || MINIMAL_NOT_FOUND_I18N.en;

  const homeHref = `/${safeLocale}/`;
  const treatmentsHref = `/${safeLocale}/treatments/`;

  return (
    <section className={styles.section} aria-labelledby="not-found-title">
      <Image
        src="/treatment-hero-bg.webp"
        alt="Master Smile Studio Clinic"
        fill
        className={styles.backgroundImage}
        priority
        sizes="100vw"
      />
      <div className={styles.overlay} />

      <div className={styles.container}>
        <span className={styles.errorCode}>404</span>
        <h1 id="not-found-title" className={styles.title}>
          {d.title}
        </h1>
        <p className={styles.description}>{d.description}</p>
        <div className={styles.actions}>
          <Link href={homeHref} className={styles.primaryBtn}>
            {d.homeBtn}
          </Link>
          <Link href={treatmentsHref} className={styles.secondaryBtn}>
            {d.treatmentsBtn}
          </Link>
        </div>
      </div>
    </section>
  );
}
