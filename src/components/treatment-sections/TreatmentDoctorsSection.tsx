'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentDoctorsSection.module.css';

export default function TreatmentDoctorsSection() {
  const locale = useLocale();

  const doctors = [
    {
      title: 'Dr. Dt.',
      name: 'Onur Utku Yüksel',
      role: 'Co-Founder',
      img: 'https://sohodent.com/doc/data1/Dr.Dt.-Onur-Utku-Yuksel.jpg',
      href: '/team',
    },
    {
      title: 'Dt.',
      name: 'Ufuk Ağdaşan',
      role: 'Co-Founder',
      img: 'https://sohodent.com/doc/data1/Dt.Ufuk-Agdasan.jpg',
      href: '/team',
    },
    {
      title: 'MSc. Dt.',
      name: 'Hakkı Serdar Ünal',
      role: 'Co-Founder',
      img: 'https://sohodent.com/doc/data1/Dt.Hakki-Serdar-unal.jpg',
      href: '/team',
    },
    {
      title: 'Dt.',
      name: 'Çağatay Çakır',
      role: 'Dentist',
      img: 'https://sohodent.com/doc/data1/cagatay-cakir.jpg',
      href: '/team',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className="treatment-container">
        <h2 className={styles.heading}>
          <span>{locale === 'tr' ? 'UZMAN DOKTORLARIMIZ' : 'OUR DENTISTS'}</span>
        </h2>

        <div className={styles.grid}>
          {doctors.map((doc, idx) => (
            <div key={idx} className={styles.card}>
              <Link href={doc.href} className="no-underline block">
                <div className={styles.imgWrap}>
                  <img
                    src={doc.img}
                    alt={`${doc.title} ${doc.name}`}
                    loading="lazy"
                  />
                </div>

                <div className={styles.info}>
                  <span className={styles.badge}>
                    {doc.title}
                  </span>
                  <strong className={styles.name}>
                    {doc.name}
                  </strong>
                  <span className={styles.specialty}>
                    {doc.role}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
