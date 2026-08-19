'use client';

import React from 'react';
import Image from 'next/image';
import styles from './TreatmentDivider.module.css';

export default function TreatmentDivider() {
  return (
    <div className={styles.dividerWrapper} role="separator" aria-hidden="true">
      <div className={styles.lineLeft} />
      <div className={styles.logoWrap}>
        <Image
          src="/logo-mastersmilestudio-no-bg.webp"
          alt="Master Smile Studio Logo Mark"
          width={120}
          height={34}
          className={styles.logoImg}
          loading="lazy"
        />
      </div>
      <div className={styles.lineRight} />
    </div>
  );
}
