'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './DenturesHeroBanner.module.css';

const HERO_I18N = {
  en: {
    tag: 'TREATMENTS',
    title: 'Dentures in Antalya, Turkey | Full & Partial Removable Teeth Solutions',
    subtitle: 'Regain comfort and confidence with custom-made dentures designed to fit your smile.',
    btnText: 'Contact',
  },
  tr: {
    tag: 'TEDAVİLERİMİZ',
    title: 'Antalya Diş Protezleri | Tam & Bölümlü Hareketli Protez Çözümleri',
    subtitle: 'Gülüşünüze tam oturan, size özel tasarlanmış diş protezleriyle konfor ve özgüveninizi yeniden kazanın.',
    btnText: 'İletişime Geç',
  },
  de: {
    tag: 'BEHANDLUNGEN',
    title: 'Zahnersatz & Prothesen in Antalya, Türkei | Voll- & Teilprothesen',
    subtitle: 'Gewinnen Sie Komfort und Selbstvertrauen zurück mit maßgefertigtem Zahnersatz, der perfekt zu Ihrem Lächeln passt.',
    btnText: 'Kontakt',
  },
  pl: {
    tag: 'ZABIEGI',
    title: 'Protezy Zębowe w Antalyi, Turcja | Całkowite i Częściowe Protezy Ruchome',
    subtitle: 'Odzyskaj komfort i pewność siebie dzięki indywidualnie dopasowanym protezom zębowym.',
    btnText: 'Kontakt',
  },
  pt: {
    tag: 'TRATAMENTOS',
    title: 'Próteses Dentárias em Antalya, Turquia | Soluções Totais e Parciais Removíveis',
    subtitle: 'Recupere o conforto e a confiança com próteses dentárias personalizadas e adaptadas ao seu sorriso.',
    btnText: 'Contato',
  },
  es: {
    tag: 'TRATAMIENTOS',
    title: 'Dentaduras Postizas en Antalya, Turquía | Prótesis Totales y Parciales Removibles',
    subtitle: 'Recupere el confort y la confianza con dentaduras personalizadas diseñadas a la medida de su sonrisa.',
    btnText: 'Contacto',
  },
  ru: {
    tag: 'ЛЕЧЕНИЕ',
    title: 'Зубные протезы в Анталье | Полные и частичные съемные конструкции',
    subtitle: 'Верните комфорт и уверенность с индивидуальными зубными протезами, созданными специально для вас.',
    btnText: 'Записаться',
  },
};

export default function DenturesHeroBanner() {
  const locale = useLocale();
  const d = HERO_I18N[locale as keyof typeof HERO_I18N] || HERO_I18N.en;

  return (
    <div className={styles.sect20}>
      <Image
        src="/images/treatments/dentures.jpg"
        alt={d.title}
        fill
        priority
        sizes="100vw"
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
