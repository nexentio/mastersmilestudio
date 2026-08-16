'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import styles from './TreatmentServicesIncludedSection.module.css';

interface ServiceContent {
  title: string;
  col1: string[];
  col2: string[];
}

const SERVICES_DATA: Record<string, ServiceContent> = {
  en: {
    title: 'Our Best Services Included',
    col1: [
      'Consultation',
      'The Dentist’s Time & Work',
      'Local Anesthetics',
      'Laboratory Fees',
    ],
    col2: [
      'Panoramic X-Ray',
      'VIP Transfers (airport, hotel)',
      'Anti-biotics, Pain killers, mouth wash etc.',
      'Hotel Stay with Package Deals (Bed & Breakfast)',
    ],
  },
  tr: {
    title: 'Dahil Olan En İyi Hizmetlerimiz',
    col1: [
      'Konsültasyon & Uzman Muayenesi',
      'Uzman Hekimin Zamanı ve Emeği',
      'Gelişmiş Lokal Anestezi',
      'Tüm Laboratuvar Ücretleri',
    ],
    col2: [
      'Panoramik Röntgen ve 3D Planlama',
      'VIP Transferler (havalimanı, otel)',
      'Antibiyotikler, Ağrı Kesiciler, Ağız Çalkalama Suyu vb.',
      'Paket Anlaşmalı Otel Konaklaması (Oda & Kahvaltı)',
    ],
  },
  de: {
    title: 'Unsere Besten Inklusivleistungen',
    col1: [
      'Beratung & Fachärztliche Untersuchung',
      'Arbeitszeit & Expertise des Zahnarztes',
      'Lokalanästhesie',
      'Laborgebühren',
    ],
    col2: [
      'Panorama-Röntgen & 3D-Diagnostik',
      'VIP-Transfers (Flughafen, Hotel)',
      'Antibiotika, Schmerzmittel, Mundspülung etc.',
      'Hotelaufenthalt mit Paketangeboten (Übernachtung & Frühstück)',
    ],
  },
  pl: {
    title: 'Nasze Najlepsze Usługi w Cenie',
    col1: [
      'Konsultacja i badanie specjalistyczne',
      'Czas i praca lekarza stomatologa',
      'Znieczulenie miejscowe',
      'Opłaty laboratoryjne',
    ],
    col2: [
      'Zdjęcie pantomograficzne i diagnostyka 3D',
      'Transfery VIP (lotnisko, hotel)',
      'Antybiotyki, leki przeciwbólowe, płyn do płukania ust itp.',
      'Pobyt w hotelu w ramach pakietów (ze śniadaniem)',
    ],
  },
  pt: {
    title: 'Nossos Melhores Serviços Incluídos',
    col1: [
      'Consulta e Avaliação Especializada',
      'Tempo e Trabalho do Cirurgião-Dentista',
      'Anestesia Local',
      'Taxas de Laboratório',
    ],
    col2: [
      'Raio-X Panorâmico e Planejamento 3D',
      'Transfers VIP (aeroporto, hotel)',
      'Antibióticos, Analgésicos, Enxaguante bucal etc.',
      'Estadia em Hotel com Pacotes (Café da Manhã)',
    ],
  },
  es: {
    title: 'Nuestros Mejores Servicios Incluidos',
    col1: [
      'Consulta y Evaluación Especializada',
      'Tiempo y Trabajo del Odontólogo',
      'Anestesia Local',
      'Costos de Laboratorio',
    ],
    col2: [
      'Radiografía Panorámica y Diagnóstico 3D',
      'Traslados VIP (aeropuerto, hotel)',
      'Antibióticos, Analgésicos, Enjuague bucal etc.',
      'Estancia en Hotel con Paquetes (Alojamiento y Desayuno)',
    ],
  },
  ru: {
    title: 'Наши лучшие услуги, включенные в стоимость',
    col1: [
      'Консультация и осмотр специалиста',
      'Время и работа врача-стоматолога',
      'Местная анестезия',
      'Лабораторные расходы',
    ],
    col2: [
      'Панорамный снимок и 3D-диагностика',
      'VIP-трансферы (аэропорт, отель)',
      'Антибиотики, обезболивающие, ополаскиватель и др.',
      'Проживание в отеле по пакетам (завтрак включен)',
    ],
  },
};

export default function TreatmentServicesIncludedSection() {
  const locale = useLocale();
  const data = SERVICES_DATA[locale] || SERVICES_DATA.en;

  const renderIcon = () => (
    <span className={styles.icon} aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
        <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 151.2c-4.2-4.6-10.1-7.2-16.4-7.2C266 144 256 154 256 166.3l0 41.7-96 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l96 0 0 41.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.4-7.2l84-91c3.5-3.8 5.4-8.7 5.4-13.9s-1.9-10.1-5.4-13.9l-84-91z" />
      </svg>
    </span>
  );

  return (
    <section aria-labelledby="services-included-heading" className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.headerWrap}>
            <h2 id="services-included-heading" className={styles.title}>
              {data.title}
            </h2>
            <div className={styles.divider} />
          </div>

          <div className={styles.grid}>
            {/* Left Column */}
            <div className={styles.column}>
              {data.col1.map((item, idx) => (
                <div key={idx} className={styles.item}>
                  {renderIcon()}
                  <span className={styles.text}>{item}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className={styles.column}>
              {data.col2.map((item, idx) => (
                <div key={idx} className={styles.item}>
                  {renderIcon()}
                  <span className={styles.text}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
