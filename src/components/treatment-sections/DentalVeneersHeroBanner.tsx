'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './DentalVeneersHeroBanner.module.css';

const HERO_I18N = {
  en: {
    tag: 'TREATMENTS',
    title: 'Dental Veneers in Istanbul, Turkey',
    subtitle: 'Achieve a flawless smile with custom dental veneers. Fast, natural, and long-lasting results.',
    btnText: 'Contact',
  },
  tr: {
    tag: 'TEDAVİLERİMİZ',
    title: 'İstanbul Yaprak Porselen & Dental Lamine Tedavisi',
    subtitle: 'Kişiye özel lamine diş kaplamalarıyla kusursuz bir gülüşe kavuşun. Hızlı, doğal ve uzun ömürlü sonuçlar.',
    btnText: 'İletişime Geç',
  },
  de: {
    tag: 'BEHANDLUNGEN',
    title: 'Veneers in Istanbul, Türkei | Ästhetische Zahnverblendungen',
    subtitle: 'Erzielen Sie ein makelloses Lächeln mit individuellen Veneers. Schnelle, natürliche und dauerhafte Ergebnisse.',
    btnText: 'Kontakt',
  },
  pl: {
    tag: 'ZABIEGI',
    title: 'Licówki Porcelanowe w Stambule, Turcja | Estetyka Uśmiechu',
    subtitle: 'Osiągnij nieskazitelny uśmiech dzięki precyzyjnym licówkom. Szybkie, naturalne i trwałe rezultaty.',
    btnText: 'Kontakt',
  },
  pt: {
    tag: 'TRATAMENTOS',
    title: 'Facetas Dentárias em Istambul, Turquia | Estética Dental',
    subtitle: 'Consiga um sorriso impecável com facetas dentárias personalizadas. Resultados rápidos, naturais e duradouros.',
    btnText: 'Contato',
  },
  es: {
    tag: 'TRATAMIENTOS',
    title: 'Carillas Dentales en Estambul, Turquía | Estética de Sonrisa',
    subtitle: 'Consiga una sonrisa impecable con carillas dentales personalizadas. Resultados rápidos, naturales y duraderos.',
    btnText: 'Contacto',
  },
  ru: {
    tag: 'ЛЕЧЕНИЕ',
    title: 'Керамические виниры в Стамбуле | Идеальная эстетика улыбки',
    subtitle: 'Создайте безупречную улыбку с индивидуальными винирами. Быстрый, естественный и долговечный результат.',
    btnText: 'Записаться',
  },
};

export default function DentalVeneersHeroBanner() {
  const locale = useLocale();
  const d = HERO_I18N[locale as keyof typeof HERO_I18N] || HERO_I18N.en;

  return (
    <div className={styles.sect20}>
      <Image
        src="/images/treatments/veneers.jpg"
        alt={d.title}
        width={1600}
        height={741}
        priority
        fetchPriority="high"
        className={styles.back1}
      />
      <div className={styles.content}>
        <div className={styles.text1}>{d.tag}</div>
        <h1 className={styles.text2}>{d.title}</h1>
        <h4 className={styles.text3}>{d.subtitle}</h4>
        <div className={styles.buton}>
          <Link href="#contact" className={styles.gototedaviform}>
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
