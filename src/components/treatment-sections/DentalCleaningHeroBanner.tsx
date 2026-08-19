'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './DentalCleaningHeroBanner.module.css';

const HERO_I18N = {
  en: {
    tag: 'TREATMENTS',
    title: 'Dental Cleaning (Scaling & Polishing) in Antalya, Turkey',
    subtitle: 'Pain-free ultrasonic scaling, Swiss Air-Flow plaque removal, and high-gloss polishing performed by expert dental hygienists.',
    btnText: 'Contact',
  },
  tr: {
    tag: 'TEDAVİLERİMİZ',
    title: 'Antalya Diş Taşı Temizliği (Detertraj & Polisaj)',
    subtitle: 'Ağrısız ultrasonik kavitron, İsviçre Air-Flow leke temizliği ve florürlü profesyonel cila uygulaması.',
    btnText: 'İletişime Geç',
  },
  de: {
    tag: 'BEHANDLUNGEN',
    title: 'Professionelle Zahnreinigung (PZR) in Antalya, Türkei',
    subtitle: 'Schmerzfreie Ultraschall-Zahnsteinentfernung, Schweizer Air-Flow Pulverstrahl und Hochglanzpolitur für gesunde Zähne.',
    btnText: 'Kontakt',
  },
  pl: {
    tag: 'ZABIEGI',
    title: 'Higienizacja i Skaling Zębów w Antalyi, Turcja',
    subtitle: 'Bezbolesny skaling ultradźwiękowy, piaskowanie Swiss Air-Flow i polerowanie zębów w Master Smile Studio.',
    btnText: 'Kontakt',
  },
  pt: {
    tag: 'TRATAMENTOS',
    title: 'Destartarização e Polimento Dentário em Antalya, Turquia',
    subtitle: 'Remoção indolor de tártaro por ultrassons, jato de bicarbonato Air-Flow e polimento dentário de alto brilho.',
    btnText: 'Contato',
  },
  es: {
    tag: 'TRATAMIENTOS',
    title: 'Limpieza Dental Profesional (Tartrectomía) en Antalya, Turquía',
    subtitle: 'Eliminación indolora de sarro por ultrasonidos, aeropulidor Swiss Air-Flow y pulido dental de alta precisión.',
    btnText: 'Contacto',
  },
  ru: {
    tag: 'ЛЕЧЕНИЕ',
    title: 'Профессиональная чистка зубов (Air-Flow и УЗ) в Анталье',
    subtitle: 'Безболезненное удаление зубного камня ультразвуком, швейцарская чистка Air-Flow и полировка эмали.',
    btnText: 'Записаться',
  },
};

export default function DentalCleaningHeroBanner() {
  const locale = useLocale();
  const d = HERO_I18N[locale as keyof typeof HERO_I18N] || HERO_I18N.en;

  return (
    <div className={styles.sect20}>
      <Image
        src="/treatments/scaling-polishing.webp"
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
