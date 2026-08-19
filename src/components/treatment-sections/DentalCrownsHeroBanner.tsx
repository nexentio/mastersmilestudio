'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './DentalCrownsHeroBanner.module.css';

const HERO_I18N = {
  en: {
    tag: 'TREATMENTS',
    title: 'Dental Crowns in Antalya, Turkey',
    subtitle: 'Restore strength, function, and aesthetics with custom zirconia and E-Max dental crowns.',
    btnText: 'Contact',
  },
  tr: {
    tag: 'TEDAVİLERİMİZ',
    title: 'Antalya Diş Kaplama & Kron Tedavisi | Zirkonyum ve E-Max Kronlar',
    subtitle: 'Özel zirkonyum ve E-Max diş kronlarıyla sağlamlığı, fonksiyonu ve estetiği geri kazanın.',
    btnText: 'İletişime Geç',
  },
  de: {
    tag: 'BEHANDLUNGEN',
    title: 'Zahnkronen in Antalya, Türkei | Zirkon- & E-Max Kronen',
    subtitle: 'Stellen Sie Stärke, Funktion und Ästhetik mit maßgefertigten Zahnkronen wieder her.',
    btnText: 'Kontakt',
  },
  pl: {
    tag: 'ZABIEGI',
    title: 'Korony Zębowe w Antalyi, Turcja | Korony Cyrkonowe i E-Max',
    subtitle: 'Odbuduj siłę, funkcję i estetykę zębów dzięki precyzyjnym koronom cyrkonowym.',
    btnText: 'Kontakt',
  },
  pt: {
    tag: 'TRATAMENTOS',
    title: 'Coroas Dentárias em Antalya, Turquia | Zircónia e E-Max',
    subtitle: 'Restaure a força, a função e a estética com coroas dentárias personalizadas.',
    btnText: 'Contato',
  },
  es: {
    tag: 'TRATAMIENTOS',
    title: 'Coronas Dentales en Antalya, Turquía | Zirconio y E-Max',
    subtitle: 'Restaure la resistencia, función y estética dental con coronas de alta precisión.',
    btnText: 'Contacto',
  },
  ru: {
    tag: 'ЛЕЧЕНИЕ',
    title: 'Зубные коронки в Анталье | Циркониевые и E-Max коронки',
    subtitle: 'Восстановите прочность, функцию и эстетику зубов с помощью высокоточных коронок.',
    btnText: 'Записаться',
  },
};

export default function DentalCrownsHeroBanner() {
  const locale = useLocale();
  const d = HERO_I18N[locale as keyof typeof HERO_I18N] || HERO_I18N.en;

  return (
    <div className={styles.sect20}>
      <Image
        src="/images/treatments/crowns.jpg"
        alt={d.title}
        fill
        priority
        sizes="100vw"
        className={styles.back1}
      />
      <div className={styles.content}>
        <div className={styles.text1}>{d.tag}</div>
        <h1 className={styles.text2}>{d.title}</h1>
        {d.subtitle && <h4 className={styles.text3}>{d.subtitle}</h4>}
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
