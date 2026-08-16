'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { getWhatsAppLink } from '@/config/site';
import styles from './TreatmentJourneySimpleSection.module.css';

interface JourneyItem {
  id: string;
  icon: string;
  title: string;
  content: string;
}

interface LocaleContent {
  sectionTitle: string;
  subText: string;
  contactHeading: string;
  whatsappLabel: string;
  phoneLabel: string;
  quickFormLabel: string;
  emailLabel: string;
  items: JourneyItem[];
}

const JOURNEY_DATA: Record<string, LocaleContent> = {
  en: {
    sectionTitle: 'Your Dental Journey Made Simple',
    subText:
      'From your very first inquiry to the final results, we ensure a smooth and transparent treatment journey in Istanbul. Learn about how long you’ll stay, how many visits you’ll need, your recovery time, and estimated pricing — all designed with international patients in mind. Let us take care of the details, so you can focus on your smile.',
    contactHeading: 'Reach Out to Us - Quickly and Easily',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Phone Call',
    quickFormLabel: 'Quick Form',
    emailLabel: 'E-mail',
    items: [
      {
        id: 'stay',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon01.webp',
        title: 'Average Length of Stay in Istanbul',
        content:
          'The duration of dental implant treatment may vary depending on the number of implants to be placed and any additional procedures required (such as bone grafting, sinus lifting, etc.)',
      },
      {
        id: 'visits',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon02.webp',
        title: 'Number of Visits Required',
        content: 'In general, the procedure is completed in one or two visits.',
      },
      {
        id: 'recovery',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon03.webp',
        title: 'Recovery Time',
        content:
          'In general, it takes 3 to 6 months for the implants to integrate with the bone.',
      },
      {
        id: 'price',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon04.webp',
        title: 'Price',
        content:
          'On average, the cost per implant ranges around $450, €400, or £335. For a detailed quote tailored to your needs, please contact us.',
      },
    ],
  },
  tr: {
    sectionTitle: 'Diş Tedavisi Yolculuğunuz Artık Çok Kolay',
    subText:
      'İlk danışmanızdan nihai sonuçlara kadar İstanbul\'da sorunsuz ve şeffaf bir tedavi süreci sunuyoruz. Uluslararası hastalarımız için tasarlanan kalış süresi, ziyaret sayısı, iyileşme süreci ve tahmini fiyatları keşfedin. Siz gülüşünüze odaklanın, detayları bize bırakın.',
    contactHeading: 'Bize Hızlı ve Kolayca Ulaşın',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Telefon Görüşmesi',
    quickFormLabel: 'Hızlı Form',
    emailLabel: 'E-posta',
    items: [
      {
        id: 'stay',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon01.webp',
        title: 'İstanbul’da Ortalama Kalış Süresi',
        content:
          'İmplant tedavisinin süresi, yerleştirilecek implant sayısına ve gereken ek prosedürlere (kemik tozu greftleme, sinüs kaldırma vb.) bağlı olarak değişebilir.',
      },
      {
        id: 'visits',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon02.webp',
        title: 'Gereken Ziyaret Sayısı',
        content: 'Genellikle implant tedavisi bir veya iki ziyarette tamamlanır.',
      },
      {
        id: 'recovery',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon03.webp',
        title: 'İyileşme Süresi',
        content:
          'Genel olarak implantların çene kemiği ile kaynaşması (osteointegrasyon) 3 ila 6 ay sürer.',
      },
      {
        id: 'price',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon04.webp',
        title: 'Fiyat Bilgisi',
        content:
          'Ortalama olarak tek bir implant maliyeti 450 $, 400 € veya 335 £ civarındadır. Size özel detaylı teklif için lütfen bizimle iletişime geçin.',
      },
    ],
  },
  de: {
    sectionTitle: 'Ihre Zahnbehandlungsreise Einfach Gemacht',
    subText:
      'Von Ihrer ersten Anfrage bis zum Endergebnis sorgen wir für eine reibungslose und transparente Behandlungsreise in Istanbul. Erfahren Sie mehr über Aufenthaltsdauer, Besuche, Heilungszeit und Preise.',
    contactHeading: 'Erreichen Sie uns – schnell und einfach',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Telefonanruf',
    quickFormLabel: 'Schnellformular',
    emailLabel: 'E-Mail',
    items: [
      {
        id: 'stay',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon01.webp',
        title: 'Durchschnittliche Aufenthaltsdauer in Istanbul',
        content:
          'Die Dauer der Zahnimplantatbehandlung kann je nach Anzahl der Implantate und zusätzlichen Eingriffen (z. B. Knochenaufbau, Sinuslift) variieren.',
      },
      {
        id: 'visits',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon02.webp',
        title: 'Erforderliche Anzahl der Besuche',
        content: 'Im Allgemeinen wird das Verfahren in einem oder zwei Besuchen abgeschlossen.',
      },
      {
        id: 'recovery',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon03.webp',
        title: 'Heilungszeit',
        content:
          'Im Allgemeinen dauert es 3 bis 6 Monate, bis die Implantate mit dem Knochen verwachsen.',
      },
      {
        id: 'price',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon04.webp',
        title: 'Preise',
        content:
          'Durchschnittlich liegen die Kosten pro Implantat bei ca. $450, €400 oder £335. Kontaktieren Sie uns für ein detailliertes Angebot.',
      },
    ],
  },
  pl: {
    sectionTitle: 'Twoja Podróż Stomatologiczna w Prosty Sposób',
    subText:
      'Od pierwszego zapytania po ostateczne rezultaty zapewniamy bezproblemową podróż leczniczą w Stambule. Poznaj czas pobytu, liczbę wizyt, okres rekonwalescencji i szacunkowe ceny.',
    contactHeading: 'Skontaktuj się z nami – szybko i łatwo',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Telefon',
    quickFormLabel: 'Szybki formularz',
    emailLabel: 'E-mail',
    items: [
      {
        id: 'stay',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon01.webp',
        title: 'Średni czas pobytu w Stambule',
        content:
          'Czas trwania leczenia implantologicznego może się różnić w zależności od liczby wszczepianych implantów i ewentualnych procedur dodatkowych.',
      },
      {
        id: 'visits',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon02.webp',
        title: 'Wymagana liczba wizyt',
        content: 'Zazwyczaj zabieg kończy się w trakcie jednej lub dwóch wizyt.',
      },
      {
        id: 'recovery',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon03.webp',
        title: 'Czas rekonwalescencji',
        content:
          'Zazwyczaj integracja implantów z kością trwa od 3 do 6 miesięcy.',
      },
      {
        id: 'price',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon04.webp',
        title: 'Cena',
        content:
          'Średnio koszt jednego implantu wynosi około $450, €400 lub £335. Skontaktuj się z nami, aby uzyskać szczegółową wycenę.',
      },
    ],
  },
  pt: {
    sectionTitle: 'Sua Jornada Dentária de Forma Simples',
    subText:
      'Desde sua primeira consulta até o resultado final, garantimos uma jornada tranquila e transparente em Istambul. Conheça a duração da estadia, visitas necessárias, recuperação e preços.',
    contactHeading: 'Fale Conosco - Rápido e Fácil',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Ligação',
    quickFormLabel: 'Formulário Rápido',
    emailLabel: 'E-mail',
    items: [
      {
        id: 'stay',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon01.webp',
        title: 'Duração Média da Estadia em Istambul',
        content:
          'A duração do tratamento com implantes pode variar dependendo do número de implantes e de procedimentos adicionais necessários.',
      },
      {
        id: 'visits',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon02.webp',
        title: 'Número de Visitas Necessárias',
        content: 'Geralmente, o procedimento é concluído em uma ou duas visitas.',
      },
      {
        id: 'recovery',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon03.webp',
        title: 'Tempo de Recuperação',
        content:
          'Geralmente, leva de 3 a 6 meses para que os implantes se integrem ao osso.',
      },
      {
        id: 'price',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon04.webp',
        title: 'Preço',
        content:
          'Em média, o custo por implante varia em torno de $450, €400 ou £335. Entre em contato para um orçamento personalizado.',
      },
    ],
  },
  es: {
    sectionTitle: 'Su Viaje Dental de Forma Sencilla',
    subText:
      'Desde su primera consulta hasta los resultados finales, garantizamos un viaje de tratamiento fluido y transparente en Estambul. Conozca la estancia, visitas, recuperación y precios.',
    contactHeading: 'Contáctenos - Rápida y Fácilmente',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Llamada',
    quickFormLabel: 'Formulario Rápido',
    emailLabel: 'Correo Electrónico',
    items: [
      {
        id: 'stay',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon01.webp',
        title: 'Estancia Media en Estambul',
        content:
          'La duración del tratamiento puede variar según la cantidad de implantes y cualquier procedimiento adicional necesario.',
      },
      {
        id: 'visits',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon02.webp',
        title: 'Número de Visitas Requeridas',
        content: 'En general, el procedimiento se completa en una o dos visitas.',
      },
      {
        id: 'recovery',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon03.webp',
        title: 'Tiempo de Recuperación',
        content:
          'En general, los implantes tardan de 3 a 6 meses en integrarse con el hueso.',
      },
      {
        id: 'price',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon04.webp',
        title: 'Precio',
        content:
          'En promedio, el costo por implante ronda los $450, €400 o £335. Contáctenos para un presupuesto detallado.',
      },
    ],
  },
  ru: {
    sectionTitle: 'Ваше стоматологическое путешествие стало проще',
    subText:
      'От вашего первого запроса до финального результата мы обеспечиваем прозрачный процесс лечения в Стамбуле. Узнайте о длительности пребывания, визитах, восстановлении и ценах.',
    contactHeading: 'Свяжитесь с нами — быстро и просто',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Телефон',
    quickFormLabel: 'Быстрая форма',
    emailLabel: 'Эл. почта',
    items: [
      {
        id: 'stay',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon01.webp',
        title: 'Средняя продолжительность пребывания в Стамбуле',
        content:
          'Продолжительность лечения может варьироваться в зависимости от количества имплантатов и дополнительных процедур.',
      },
      {
        id: 'visits',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon02.webp',
        title: 'Необходимое количество визитов',
        content: 'Как правило, процедура завершается за один или два визита.',
      },
      {
        id: 'recovery',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon03.webp',
        title: 'Время восстановления',
        content:
          'В среднем приживление имплантатов к кости занимает от 3 до 6 месяцев.',
      },
      {
        id: 'price',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon04.webp',
        title: 'Стоимость',
        content:
          'В среднем стоимость одного имплантата составляет около $450, €400 или £335. Свяжитесь с нами для индивидуального расчета.',
      },
    ],
  },
};

interface Props {
  stayDuration?: string;
  visitCount?: string;
  recoveryTime?: string;
  priceEstimate?: string;
}

export default function TreatmentJourneySimpleSection({
  stayDuration,
  visitCount,
  recoveryTime,
  priceEstimate,
}: Props) {
  const locale = useLocale();
  const data = JOURNEY_DATA[locale] || JOURNEY_DATA.en;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleItem = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  const getCustomContent = (id: string, defaultContent: string) => {
    if (id === 'stay' && stayDuration) return stayDuration;
    if (id === 'visits' && visitCount) return visitCount;
    if (id === 'recovery' && recoveryTime) return recoveryTime;
    if (id === 'price' && priceEstimate) return priceEstimate;
    return defaultContent;
  };

  return (
    <section aria-labelledby="journey-simple-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head Section */}
        <div className={styles.head}>
          <h2 id="journey-simple-heading" className={styles.title}>
            {data.sectionTitle}
          </h2>
          <p className={styles.subText}>{data.subText}</p>
        </div>

        {/* Main Card */}
        <div className={styles.box}>
          <div className={styles.accordion}>
            {data.items.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={item.id} className={styles.item}>
                  <div
                    className={styles.titleRow}
                    onClick={() => toggleItem(idx)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleItem(idx);
                      }
                    }}
                  >
                    <div className={styles.leftGroup}>
                      <div className={styles.iconBadge}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.icon}
                          alt={item.title}
                          width={52}
                          height={52}
                          className={styles.iconImg}
                          loading="lazy"
                        />
                      </div>
                      <div className={styles.textCol}>
                        <span className={styles.itemTitle}>{item.title}</span>
                      </div>
                    </div>

                    <span
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                      aria-hidden="true"
                    >
                      <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor">
                        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                      </svg>
                    </span>
                  </div>

                  {isOpen && (
                    <div className={styles.content}>
                      <p style={{ margin: 0 }}>{getCustomContent(item.id, item.content)}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact Bar Inside Card */}
          <div className={styles.contactWrap}>
            <h3 className={styles.contactHead}>{data.contactHeading}</h3>
            <div className={styles.buttonRow}>
              {/* WhatsApp */}
              <a
                href={getWhatsAppLink(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactPill}
                aria-label="WhatsApp"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sohodent.com/doc/static/a1/contact-icon-10.png.webp"
                  alt=""
                  width={22}
                  height={22}
                  className={styles.contactIconImg}
                />
                <span className={styles.contactLabel}>{data.whatsappLabel}</span>
              </a>

              {/* Phone Call */}
              <a href="tel:+905434568080" className={styles.contactPill} aria-label="Phone Call">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sohodent.com/doc/static/a1/contact-icon-11.png.webp"
                  alt=""
                  width={22}
                  height={22}
                  className={styles.contactIconImg}
                />
                <span className={styles.contactLabel}>{data.phoneLabel}</span>
              </a>

              {/* Quick Form */}
              <Link href="/contact" className={styles.contactPill} aria-label="Quick Form">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sohodent.com/doc/static/a1/contact-icon-12.png.webp"
                  alt=""
                  width={22}
                  height={22}
                  className={styles.contactIconImg}
                />
                <span className={styles.contactLabel}>{data.quickFormLabel}</span>
              </Link>

              {/* E-mail */}
              <a href="mailto:info@sohodent.com" className={styles.contactPill} aria-label="E-mail">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sohodent.com/doc/static/a1/contact-icon-13.png.webp"
                  alt=""
                  width={22}
                  height={22}
                  className={styles.contactIconImg}
                />
                <span className={styles.contactLabel}>{data.emailLabel}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
