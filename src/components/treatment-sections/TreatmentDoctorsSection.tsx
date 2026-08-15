'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';

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
    <div className="treatment-doctors-wrapper">
      <div className="treatment-container">
        <h2 className="treatment-doctors-heading">
          <span>{locale === 'tr' ? 'UZMAN DOKTORLARIMIZ' : 'OUR DENTISTS'}</span>
        </h2>

        <div className="treatment-doctors-grid">
          {doctors.map((doc, idx) => (
            <div key={idx} className="treatment-doctor-card">
              <Link href={doc.href} className="no-underline block">
                <div className="treatment-doctor-img-wrap">
                  <img
                    src={doc.img}
                    alt={`${doc.title} ${doc.name}`}
                    loading="lazy"
                  />
                </div>

                <div className="treatment-doctor-info">
                  <span className="treatment-doctor-badge">
                    {doc.title}
                  </span>
                  <strong className="treatment-doctor-name">
                    {doc.name}
                  </strong>
                  <span className="treatment-doctor-specialty">
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
