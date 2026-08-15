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
      role: 'Co-Founder & Oral Surgeon',
      img: 'https://sohodent.com/doc/data1/Dr.Dt.-Onur-Utku-Yuksel.jpg',
      href: '/team',
    },
    {
      title: 'Dt.',
      name: 'Ufuk Ağdaşan',
      role: 'Co-Founder & Aesthetic Dentist',
      img: 'https://sohodent.com/doc/data1/Dt.Ufuk-Agdasan.jpg',
      href: '/team',
    },
    {
      title: 'MSc. Dt.',
      name: 'Hakkı Serdar Ünal',
      role: 'Co-Founder & Prosthodontist',
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
    <section aria-labelledby="section-doctors-title" className={styles.wrapper}>
      <div className="treatment-container">
        <h2 id="section-doctors-title" className={styles.heading}>
          <span>{locale === 'tr' ? 'UZMAN DOKTORLARIMIZ' : 'OUR DENTISTS'}</span>
        </h2>

        <div className={styles.grid}>
          {doctors.map((doc, idx) => (
            <article key={idx} className={styles.card} itemScope itemType="https://schema.org/Physician">
              <Link
                href={doc.href}
                className="no-underline block"
                aria-label={`View doctor profile for ${doc.title} ${doc.name}`}
              >
                <div className={styles.imgWrap}>
                  <img
                    src={doc.img}
                    alt={`${doc.title} ${doc.name}`}
                    loading="lazy"
                    itemProp="image"
                  />
                </div>

                <div className={styles.info}>
                  <span className={styles.badge}>
                    {doc.title}
                  </span>
                  <h3 className={styles.name} itemProp="name">
                    {doc.name}
                  </h3>
                  <span className={styles.specialty} itemProp="jobTitle">
                    {doc.role}
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
