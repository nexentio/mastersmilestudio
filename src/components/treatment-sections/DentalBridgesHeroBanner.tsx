'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './DentalBridgesHeroBanner.module.css';

const HERO_I18N = {
  en: {
    tag: 'TREATMENTS',
    title: 'Dental Bridges in Istanbul, Turkey |',
    subtitle: 'Replace missing teeth with custom dental bridges. Strong, natural-looking, and long-lasting.',
    btnText: 'Contact',
  },
  tr: {
    tag: 'TEDAVİLERİMİZ',
    title: 'İstanbul Diş Köprüsü Tedavisi | Estetik ve Fonksiyonel Köprü Çözümleri',
    subtitle: 'Eksik dişlerinizi kişiye özel diş köprüleriyle tamamlayın. Güçlü, doğal görünümlü ve uzun ömürlü.',
    btnText: 'İletişime Geç',
  },
  de: {
    tag: 'BEHANDLUNGEN',
    title: 'Zahnbrücken in Istanbul, Türkei | Ästhetischer Zahnersatz',
    subtitle: 'Ersetzen Sie fehlende Zähne mit maßgefertigten Zahnbrücken. Stabil, natürlich und langlebig.',
    btnText: 'Kontakt',
  },
  pl: {
    tag: 'ZABIEGI',
    title: 'Mosty Protetyczne w Stambule, Turcja | Odbudowa Braków Zębowych',
    subtitle: 'Uzupełnij brakujące zęby precyzyjnymi mostami protetycznymi. Trwałe, estetyczne i naturalne.',
    btnText: 'Kontakt',
  },
  pt: {
    tag: 'TRATAMENTOS',
    title: 'Pontes Dentárias em Istambul, Turquia | Restauração Dentária',
    subtitle: 'Substitua dentes em falta com pontes dentárias personalizadas. Fortes, naturais e duradouras.',
    btnText: 'Contato',
  },
  es: {
    tag: 'TRATAMIENTOS',
    title: 'Puentes Dentales en Estambul, Turquía | Reemplazo Dental Fijo',
    subtitle: 'Recupere las piezas dentales perdidas con puentes dentales a medida. Resistentes, naturales y duraderos.',
    btnText: 'Contacto',
  },
  ru: {
    tag: 'ЛЕЧЕНИЕ',
    title: 'Зубные мосты в Стамбуле | Надежное восстановление зубов',
    subtitle: 'Восстановите отсутствующие зубы с помощью индивидуальных мостовидных протезов. Прочно, эстетично и долговечно.',
    btnText: 'Записаться',
  },
};

export default function DentalBridgesHeroBanner() {
  const locale = useLocale();
  const d = HERO_I18N[locale as keyof typeof HERO_I18N] || HERO_I18N.en;

  return (
    <div className={styles.sect20}>
      <Image
        src="/images/treatments/bridge.jpg"
        alt={d.title}
        width={1600}
        height={637}
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
