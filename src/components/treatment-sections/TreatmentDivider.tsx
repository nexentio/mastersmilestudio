'use client';

import React from 'react';
import styles from './TreatmentDivider.module.css';

export default function TreatmentDivider() {
  return (
    <div className={styles.dividerWrapper} role="separator" aria-hidden="true">
      <div className={styles.lineLeft} />
      <div className={styles.brandCenter}>
        <span className={styles.brandMaster}>MASTER</span>
        <span className={styles.brandSub}>SMILE STUDIO</span>
      </div>
      <div className={styles.lineRight} />
    </div>
  );
}
