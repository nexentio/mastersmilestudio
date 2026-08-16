'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentDoctorsSection.module.css';

interface DoctorData {
  title: string;
  name: string;
  role: string;
  img: string;
  href: string;
}

interface DoctorsSectionI18n {
  heading: string;
  doctors: DoctorData[];
}

const DOCTORS_I18N: Record<string, DoctorsSectionI18n> = {
  en: {
    heading: 'OUR DENTISTS',
    doctors: [
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
    ],
  },
  tr: {
    heading: 'UZMAN DOKTORLARIMIZ',
    doctors: [
      {
        title: 'Dr. Dt.',
        name: 'Onur Utku Yüksel',
        role: 'Kurucu Ortak & Ağız, Diş ve Çene Cerrahisi Uzmanı',
        img: 'https://sohodent.com/doc/data1/Dr.Dt.-Onur-Utku-Yuksel.jpg',
        href: '/team',
      },
      {
        title: 'Dt.',
        name: 'Ufuk Ağdaşan',
        role: 'Kurucu Ortak & Estetik Diş Hekimi',
        img: 'https://sohodent.com/doc/data1/Dt.Ufuk-Agdasan.jpg',
        href: '/team',
      },
      {
        title: 'MSc. Dt.',
        name: 'Hakkı Serdar Ünal',
        role: 'Kurucu Ortak & Protetik Diş Tedavisi Uzmanı',
        img: 'https://sohodent.com/doc/data1/Dt.Hakki-Serdar-unal.jpg',
        href: '/team',
      },
      {
        title: 'Dt.',
        name: 'Çağatay Çakır',
        role: 'Diş Hekimi',
        img: 'https://sohodent.com/doc/data1/cagatay-cakir.jpg',
        href: '/team',
      },
    ],
  },
  de: {
    heading: 'UNSERE ZAHNÄRZTE',
    doctors: [
      {
        title: 'Dr. Dt.',
        name: 'Onur Utku Yüksel',
        role: 'Mitgründer & Mund-, Kiefer- und Gesichtschirurg',
        img: 'https://sohodent.com/doc/data1/Dr.Dt.-Onur-Utku-Yuksel.jpg',
        href: '/team',
      },
      {
        title: 'Dt.',
        name: 'Ufuk Ağdaşan',
        role: 'Mitgründer & Ästhetischer Zahnarzt',
        img: 'https://sohodent.com/doc/data1/Dt.Ufuk-Agdasan.jpg',
        href: '/team',
      },
      {
        title: 'MSc. Dt.',
        name: 'Hakkı Serdar Ünal',
        role: 'Mitgründer & Fachzahnarzt für Prothetik',
        img: 'https://sohodent.com/doc/data1/Dt.Hakki-Serdar-unal.jpg',
        href: '/team',
      },
      {
        title: 'Dt.',
        name: 'Çağatay Çakır',
        role: 'Zahnarzt',
        img: 'https://sohodent.com/doc/data1/cagatay-cakir.jpg',
        href: '/team',
      },
    ],
  },
  pl: {
    heading: 'NASI DENTYŚCI',
    doctors: [
      {
        title: 'Dr. Dt.',
        name: 'Onur Utku Yüksel',
        role: 'Współzałożyciel i Chirurg Stomatologiczny',
        img: 'https://sohodent.com/doc/data1/Dr.Dt.-Onur-Utku-Yuksel.jpg',
        href: '/team',
      },
      {
        title: 'Dt.',
        name: 'Ufuk Ağdaşan',
        role: 'Współzałożyciel i Stomatolog Estetyczny',
        img: 'https://sohodent.com/doc/data1/Dt.Ufuk-Agdasan.jpg',
        href: '/team',
      },
      {
        title: 'MSc. Dt.',
        name: 'Hakkı Serdar Ünal',
        role: 'Współzałożyciel i Protetyk Stomatologiczny',
        img: 'https://sohodent.com/doc/data1/Dt.Hakki-Serdar-unal.jpg',
        href: '/team',
      },
      {
        title: 'Dt.',
        name: 'Çağatay Çakır',
        role: 'Lekarz Stomatolog',
        img: 'https://sohodent.com/doc/data1/cagatay-cakir.jpg',
        href: '/team',
      },
    ],
  },
  pt: {
    heading: 'NOSSOS DENTISTAS',
    doctors: [
      {
        title: 'Dr. Dt.',
        name: 'Onur Utku Yüksel',
        role: 'Cofundador e Cirurgião Bucomaxilofacial',
        img: 'https://sohodent.com/doc/data1/Dr.Dt.-Onur-Utku-Yuksel.jpg',
        href: '/team',
      },
      {
        title: 'Dt.',
        name: 'Ufuk Ağdaşan',
        role: 'Cofundador e Dentista Estético',
        img: 'https://sohodent.com/doc/data1/Dt.Ufuk-Agdasan.jpg',
        href: '/team',
      },
      {
        title: 'MSc. Dt.',
        name: 'Hakkı Serdar Ünal',
        role: 'Cofundador e Especialista em Prótese Dentária',
        img: 'https://sohodent.com/doc/data1/Dt.Hakki-Serdar-unal.jpg',
        href: '/team',
      },
      {
        title: 'Dt.',
        name: 'Çağatay Çakır',
        role: 'Cirurgião Dentista',
        img: 'https://sohodent.com/doc/data1/cagatay-cakir.jpg',
        href: '/team',
      },
    ],
  },
  es: {
    heading: 'NUESTROS DENTISTAS',
    doctors: [
      {
        title: 'Dr. Dt.',
        name: 'Onur Utku Yüksel',
        role: 'Cofundador y Cirujano Oral y Maxilofacial',
        img: 'https://sohodent.com/doc/data1/Dr.Dt.-Onur-Utku-Yuksel.jpg',
        href: '/team',
      },
      {
        title: 'Dt.',
        name: 'Ufuk Ağdaşan',
        role: 'Cofundador y Odontólogo Estético',
        img: 'https://sohodent.com/doc/data1/Dt.Ufuk-Agdasan.jpg',
        href: '/team',
      },
      {
        title: 'MSc. Dt.',
        name: 'Hakkı Serdar Ünal',
        role: 'Cofundador y Especialista en Prótesis Dental',
        img: 'https://sohodent.com/doc/data1/Dt.Hakki-Serdar-unal.jpg',
        href: '/team',
      },
      {
        title: 'Dt.',
        name: 'Çağatay Çakır',
        role: 'Odontólogo',
        img: 'https://sohodent.com/doc/data1/cagatay-cakir.jpg',
        href: '/team',
      },
    ],
  },
  ru: {
    heading: 'НАШИ ВРАЧИ-СТОМАТОЛОГИ',
    doctors: [
      {
        title: 'Д-р',
        name: 'Онур Утку Юксель',
        role: 'Сооснователь и Челюстно-лицевой хирург',
        img: 'https://sohodent.com/doc/data1/Dr.Dt.-Onur-Utku-Yuksel.jpg',
        href: '/team',
      },
      {
        title: 'Врач',
        name: 'Уфук Агдашан',
        role: 'Сооснователь и Эстетический стоматолог',
        img: 'https://sohodent.com/doc/data1/Dt.Ufuk-Agdasan.jpg',
        href: '/team',
      },
      {
        title: 'Магистр',
        name: 'Хаккы Сердар Юнал',
        role: 'Сооснователь и Стоматолог-ортопед',
        img: 'https://sohodent.com/doc/data1/Dt.Hakki-Serdar-unal.jpg',
        href: '/team',
      },
      {
        title: 'Врач',
        name: 'Чагатай Чакыр',
        role: 'Врач-стоматолог',
        img: 'https://sohodent.com/doc/data1/cagatay-cakir.jpg',
        href: '/team',
      },
    ],
  },
};

export default function TreatmentDoctorsSection() {
  const locale = useLocale();
  const current = DOCTORS_I18N[locale] || DOCTORS_I18N.en;

  return (
    <section aria-labelledby="section-doctors-title" className={styles.wrapper}>
      <div className="treatment-container">
        <h2 id="section-doctors-title" className={styles.heading}>
          <span>{current.heading}</span>
        </h2>

        <div className={styles.grid}>
          {current.doctors.map((doc, idx) => (
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
