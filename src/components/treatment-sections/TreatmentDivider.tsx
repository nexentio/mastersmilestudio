'use client';

import React from 'react';
import styles from './TreatmentDivider.module.css';

export default function TreatmentDivider() {
  return (
    <div className={styles.dividerInner}>
      <div className={styles.dividerLineGold} />
    </div>
  );
}
