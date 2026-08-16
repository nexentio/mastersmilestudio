'use client';

import React from 'react';
import styles from './TreatmentTripleVideoSlider.module.css';

interface VideoItem {
  id: string;
  title?: string;
}

interface Props {
  videos?: VideoItem[];
}

export default function TreatmentTripleVideoSlider({
  videos = [
    { id: 'ZYMbU63b_PY', title: 'Dental Trauma Correction in Istanbul' },
    { id: 'Be2UTTeW5JI', title: 'Full-Mouth Extractions & Dental Implants' },
    { id: 'F_ULWgBZhjY', title: 'Full-Mouth All-on-6 After Extractions' },
  ],
}: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {videos.map((vid, idx) => (
          <div key={idx} className={styles.card}>
            <iframe
              src={`https://www.youtube.com/embed/${vid.id}`}
              title={vid.title || `Dental Patient Reel ${idx + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
}
