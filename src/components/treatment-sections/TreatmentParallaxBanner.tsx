'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SITE_CONFIG, getWhatsAppLink } from '@/config/site';
import styles from './TreatmentParallaxBanner.module.css';

interface BannerContent {
  tag: string;
  title: string;
  desc: string;
  bookBtn: string;
  bookAria: string;
  whatsappBtn: string;
}

const BANNER_TRANSLATIONS: Record<string, BannerContent> = {
  en: {
    tag: 'YOUR JOURNEY, SEAMLESSLY DESIGNED',
    title: 'From Your First Message to Your Final Smile — Guided with World-Class Care',
    desc: 'Personalized care, transparent communication, luxury 5-star hotel accommodation, and direct treatment by our clinic founders ensure a smooth and joyful journey in Antalya.',
    bookBtn: 'Book Appointment',
    bookAria: 'Book a dental treatment appointment with Master Smile Studio',
    whatsappBtn: 'WhatsApp Live Chat',
  },
  tr: {
    tag: 'KUSURSUZ TEDAVİ DENEYİMİ',
    title: 'İlk Mesajınızdan Yeni Gülüşünüze Kadar Her Adımda Yanınızdayız',
    desc: 'Kişiye özel tedavi planlaması, net ve şeffaf iletişim, 5 yıldızlı lüks otel konaklaması ve uzman kurucu hekimlerimizle sağlık seyahatinizi kusursuz bir deneyime dönüştürüyoruz.',
    bookBtn: 'Randevu Oluştur',
    bookAria: 'Master Smile Studio ile diş tedavisi randevusu oluşturun',
    whatsappBtn: 'WhatsApp Canlı Destek',
  },
  de: {
    tag: 'IHRE BEHANDLUNGSREISE, NAHTLOS GEPLANT',
    title: 'Von Ihrer ersten Nachricht bis zu Ihrem finalen Lächeln — Erstklassige Betreuung',
    desc: 'Individuelle Behandlungsplanung, transparente Kommunikation, erstklassige 5-Sterne-Unterkunft und direkte Behandlung durch unsere Chefärzte garantieren einen sorgenfreien Aufenthalt in Antalya.',
    bookBtn: 'Termin Buchen',
    bookAria: 'Buchen Sie einen Termin für Ihre Zahnbehandlung bei Master Smile Studio',
    whatsappBtn: 'WhatsApp Live-Chat',
  },
  pl: {
    tag: 'TWOJA PODRÓŻ, IDEALNIE ZAPLANOWANA',
    title: 'Od pierwszej wiadomości do wymarzonego uśmiechu — Światowej klasy opieka',
    desc: 'Indywidualna opieka, przejrzysta komunikacja, luksusowe zakwaterowanie w 5-gwiazdkowym hotelu oraz bezpośrednie leczenie przez naszych założycieli kliniki zapewniają komfortowy pobyt w Antalyi.',
    bookBtn: 'Zarezerwuj Wizytę',
    bookAria: 'Zarezerwuj wizytę na leczenie stomatologiczne w Master Smile Studio',
    whatsappBtn: 'Czat WhatsApp Live',
  },
  pt: {
    tag: 'SUA JORNADA, PERFEITAMENTE PLANEJADA',
    title: 'Da sua primeira mensagem ao sorriso final — Cuidado de classe mundial',
    desc: 'Atendimento personalizado, comunicação transparente, hospedagem de luxo em hotel 5 estrelas e tratamento direto com os fundadores da nossa clínica garantem uma estadia tranquila em Antalya.',
    bookBtn: 'Agendar Consulta',
    bookAria: 'Agende uma consulta odontológica na Master Smile Studio',
    whatsappBtn: 'Chat WhatsApp ao Vivo',
  },
  es: {
    tag: 'SU VIAJE, DISEÑADO A LA PERFECCIÓN',
    title: 'Desde su primer mensaje hasta su sonrisa final — Atención médica de primer nivel',
    desc: 'Atención personalizada, comunicación transparente, alojamiento de lujo en hotel de 5 estrellas y tratamiento directo con los cirujanos fundadores de nuestra clínica garantizan una experiencia inolvidable en Antalya.',
    bookBtn: 'Reservar Cita',
    bookAria: 'Reserve una cita para su tratamiento dental en Master Smile Studio',
    whatsappBtn: 'Chat en Vivo por WhatsApp',
  },
  ru: {
    tag: 'ВАШЕ ПУТЕШЕСТВИЕ, ИДЕАЛЬНО СПЛАНИРОВАННОЕ',
    title: 'От первого сообщения до вашей идеальной улыбки — Забота мирового уровня',
    desc: 'Персонализированный подход, прозрачная коммуникация, проживание в 5-звездочном отеле и лечение у ведущих хирургов-основателей клиники гарантируют комфортное пребывание в Анталье.',
    bookBtn: 'Записаться на Приём',
    bookAria: 'Запишитесь на консультацию по лечению зубов в Master Smile Studio',
    whatsappBtn: 'Чат в WhatsApp',
  },
};

export default function TreatmentParallaxBanner() {
  const locale = useLocale();
  const t = BANNER_TRANSLATIONS[locale] || BANNER_TRANSLATIONS.en;

  return (
    <section aria-labelledby="parallax-banner-heading" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.subtitle}>
          {t.tag}
        </span>

        <h2 id="parallax-banner-heading" className={styles.title}>
          {t.title}
        </h2>

        <p className={styles.desc}>
          {t.desc}
        </p>

        {/* 3 Circular Icon Action Buttons Side-by-Side */}
        <div className={styles.buttonsRow}>
          {/* Calendar / Appointment */}
          <Link
            href="/contact"
            className={styles.circleBtnGold}
            aria-label={t.bookAria}
            title={t.bookBtn}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </Link>

          {/* WhatsApp Chat */}
          <a
            href={getWhatsAppLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.circleBtnWhatsApp}
            aria-label="Direct WhatsApp consultation"
            title={t.whatsappBtn}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.04 20.15C10.56 20.15 9.11 19.75 7.84 19L7.54 18.82L4.42 19.64L5.25 16.6L5.05 16.29C4.23 14.98 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.04 3.67C14.24 3.67 16.31 4.53 17.87 6.08C19.42 7.64 20.28 9.71 20.28 11.91C20.28 16.46 16.58 20.15 12.04 20.15ZM16.56 14.39C16.31 14.26 15.09 13.66 14.86 13.58C14.63 13.5 14.47 13.46 14.3 13.7C14.14 13.95 13.67 14.53 13.52 14.7C13.38 14.86 13.23 14.88 12.98 14.76C12.74 14.64 11.94 14.37 11 13.53C10.26 12.87 9.76 12.06 9.62 11.81C9.47 11.56 9.6 11.43 9.73 11.3C9.84 11.19 9.98 11.01 10.1 10.87C10.23 10.72 10.27 10.62 10.35 10.45C10.43 10.29 10.39 10.15 10.33 10.02C10.27 9.9 9.77 8.7 9.57 8.2C9.36 7.72 9.16 7.79 9 7.78C8.86 7.77 8.69 7.77 8.53 7.77C8.36 7.77 8.09 7.83 7.87 8.08C7.64 8.32 7 8.92 7 10.14C7 11.36 7.89 12.54 8.01 12.7C8.14 12.87 9.75 15.36 12.23 16.43C12.82 16.69 13.28 16.84 13.64 16.96C14.23 17.15 14.77 17.12 15.2 17.06C15.68 16.99 16.67 16.46 16.88 15.88C17.09 15.3 17.09 14.8 17.02 14.7C16.96 14.59 16.8 14.53 16.56 14.39Z"
                fill="#ffffff"
              />
            </svg>
          </a>

          {/* Direct Phone Call */}
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className={styles.circleBtnPhone}
            aria-label={`Call clinic phone ${SITE_CONFIG.phone}`}
            title={`Call ${SITE_CONFIG.phone}`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
