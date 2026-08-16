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
    desc: 'Personalized care, transparent communication, luxury 5-star hotel accommodation, and direct treatment by our clinic founders ensure a smooth and joyful journey in Istanbul.',
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
    desc: 'Individuelle Behandlungsplanung, transparente Kommunikation, erstklassige 5-Sterne-Unterkunft und direkte Behandlung durch unsere Chefärzte garantieren einen sorgenfreien Aufenthalt in Istanbul.',
    bookBtn: 'Termin Buchen',
    bookAria: 'Buchen Sie einen Termin für Ihre Zahnbehandlung bei Master Smile Studio',
    whatsappBtn: 'WhatsApp Live-Chat',
  },
  pl: {
    tag: 'TWOJA PODRÓŻ, IDEALNIE ZAPLANOWANA',
    title: 'Od pierwszej wiadomości do wymarzonego uśmiechu — Światowej klasy opieka',
    desc: 'Indywidualna opieka, przejrzysta komunikacja, luksusowe zakwaterowanie w 5-gwiazdkowym hotelu oraz bezpośrednie leczenie przez naszych założycieli kliniki zapewniają komfortowy pobyt w Stambule.',
    bookBtn: 'Zarezerwuj Wizytę',
    bookAria: 'Zarezerwuj wizytę na leczenie stomatologiczne w Master Smile Studio',
    whatsappBtn: 'Czat WhatsApp Live',
  },
  pt: {
    tag: 'SUA JORNADA, PERFEITAMENTE PLANEJADA',
    title: 'Da sua primeira mensagem ao sorriso final — Cuidado de classe mundial',
    desc: 'Atendimento personalizado, comunicação transparente, hospedagem de luxo em hotel 5 estrelas e tratamento direto com os fundadores da nossa clínica garantem uma estadia tranquila em Istambul.',
    bookBtn: 'Agendar Consulta',
    bookAria: 'Agende uma consulta odontológica na Master Smile Studio',
    whatsappBtn: 'Chat WhatsApp ao Vivo',
  },
  es: {
    tag: 'SU VIAJE, DISEÑADO A LA PERFECCIÓN',
    title: 'Desde su primer mensaje hasta su sonrisa final — Atención médica de primer nivel',
    desc: 'Atención personalizada, comunicación transparente, alojamiento de lujo en hotel de 5 estrellas y tratamiento directo con los cirujanos fundadores de nuestra clínica garantizan una experiencia inolvidable en Estambul.',
    bookBtn: 'Reservar Cita',
    bookAria: 'Reserve una cita para su tratamiento dental en Master Smile Studio',
    whatsappBtn: 'Chat en Vivo por WhatsApp',
  },
  ru: {
    tag: 'ВАШЕ ПУТЕШЕСТВИЕ, ИДЕАЛЬНО СПЛАНИРОВАННОЕ',
    title: 'От первого сообщения до вашей идеальной улыбки — Забота мирового уровня',
    desc: 'Персонализированный подход, прозрачная коммуникация, проживание в 5-звездочном отеле и лечение у ведущих хирургов-основателей клиники гарантируют комфортное пребывание в Стамбуле.',
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

        {/* 3 Quick Action Buttons */}
        <div className={styles.buttonsRow}>
          <Link
            href="/contact"
            className="treatment-btn-gold"
            aria-label={t.bookAria}
          >
            <span>📅 {t.bookBtn}</span>
            <span>→</span>
          </Link>

          <a
            href={getWhatsAppLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="treatment-btn-whatsapp"
            aria-label="Direct WhatsApp consultation"
          >
            <span>💬 {t.whatsappBtn}</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className={styles.btnPhone}
            aria-label={`Call clinic phone ${SITE_CONFIG.phone}`}
          >
            <span>📞 {SITE_CONFIG.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
