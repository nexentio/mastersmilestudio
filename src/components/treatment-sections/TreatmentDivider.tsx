'use client';

import React from 'react';
import styles from './TreatmentDivider.module.css';

export default function TreatmentDivider() {
  return (
    <div className={styles.dividerInner}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://sohodent.com/doc/static/cizgi.webp"
        alt="Divider"
        width={1240}
        height={49}
        loading="lazy"
        decoding="async"
        className={styles.dividerImg}
      />
    </div>
  );
}
