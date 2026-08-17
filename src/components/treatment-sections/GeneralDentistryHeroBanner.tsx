'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './GeneralDentistryHeroBanner.module.css';

const HERO_I18N = {
  en: {
    tag: 'TREATMENTS',
    title: 'General Dentistry in Istanbul, Turkey',
    subtitle: 'Prevent, protect, and restore with trusted general dentistry services. Your smile starts here.',
    btnText: 'Contact',
  },
  tr: {
    tag: 'TEDAVİLERİMİZ',
    title: 'İstanbul Genel Diş Hekimliği & Tedavileri',
    subtitle: 'Güvenilir genel diş hekimliği hizmetleriyle koruyun, önleyin ve restore edin. Kusursuz gülüşünüz burada başlıyor.',
    btnText: 'İletişime Geç',
  },
  de: {
    tag: 'BEHANDLUNGEN',
    title: 'Allgemeine Zahnheilkunde in Istanbul, Türkei',
    subtitle: 'Vorbeugen, schützen und wiederherstellen mit erstklassiger Zahnmedizin. Ihr Lächeln beginnt hier.',
    btnText: 'Kontakt',
  },
  pl: {
    tag: 'ZABIEGI',
    title: 'Stomatologia Ogólna i Zachowawcza w Stambule, Turcja',
    subtitle: 'Profilaktyka, ochrona i odbudowa dzięki zaufanym usługom stomatologii ogólnej. Twój uśmiech zaczyna się tutaj.',
    btnText: 'Kontakt',
  },
  pt: {
    tag: 'TRATAMENTOS',
    title: 'Medicina Dentária Geral em Istambul, Turquia',
    subtitle: 'Prevenção, proteção e restauração com serviços odontológicos de excelência. O seu sorriso começa aqui.',
    btnText: 'Contato',
  },
  es: {
    tag: 'TRATAMIENTOS',
    title: 'Odontología General y Preventiva en Estambul, Turquía',
    subtitle: 'Prevenga, proteja y restaure con servicios de odontología general de confianza. Su sonrisa comienza aquí.',
    btnText: 'Contacto',
  },
  ru: {
    tag: 'ЛЕЧЕНИЕ',
    title: 'Общая и профилактическая стоматология в Стамбуле',
    subtitle: 'Профилактика, защита и лечение с помощью передовых технологий. Ваша здоровая улыбка начинается здесь.',
    btnText: 'Записаться',
  },
};

export default function GeneralDentistryHeroBanner() {
  const locale = useLocale();
  const d = HERO_I18N[locale as keyof typeof HERO_I18N] || HERO_I18N.en;

  return (
    <div className={styles.sect20}>
      <Image
        src="/treatments/general.jpg"
        alt={d.title}
        fill
        priority
        sizes="100vw"
        className={styles.back1}
      />
      <div className={styles.content}>
        <div className={styles.text1}>{d.tag}</div>
        <h1 className={styles.text2}>{d.title}</h1>
        {d.subtitle && <p className={styles.text3}>{d.subtitle}</p>}
        <div className={styles.buton}>
          <Link href="/contact" className={styles.gototedaviform} aria-label={d.btnText}>
            <span className={styles.xgrid}>
              <span className={`${styles.xgrids} ${styles.s1}`}>{d.btnText}</span>
              <span className={`${styles.xgrids} ${styles.s2}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
