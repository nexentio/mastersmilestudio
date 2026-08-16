'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import styles from './BlogHeroBanner.module.css';

export default function BlogHeroBanner() {
  const locale = useLocale();

  const HERO_CONTENT: Record<string, { title: string; subtitle: string }> = {
    en: {
      title: 'BLOG',
      subtitle: 'Master Smile Studio',
    },
    tr: {
      title: 'BLOG',
      subtitle: 'Master Smile Studio',
    },
    de: {
      title: 'BLOG',
      subtitle: 'Master Smile Studio',
    },
    pl: {
      title: 'BLOG',
      subtitle: 'Master Smile Studio',
    },
    pt: {
      title: 'BLOG',
      subtitle: 'Master Smile Studio',
    },
    es: {
      title: 'BLOG',
      subtitle: 'Master Smile Studio',
    },
    ru: {
      title: 'БЛОГ',
      subtitle: 'Master Smile Studio',
    },
  };

  const content = HERO_CONTENT[locale] || HERO_CONTENT.en;

  return (
    <section className={styles.sect20} aria-label="Blog Hero">
      <Image
        src="/blog/blog-hero-bg.jpeg"
        alt={content.title}
        fill
        priority
        sizes="100vw"
        className={styles.back1}
      />
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <h1 className={styles.text1}>{content.title}</h1>
        <div className={styles.text2}>{content.subtitle}</div>
      </div>
    </section>
  );
}
