'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './GeneralDentistryJourneySection.module.css';

interface JourneyItem {
  id: string;
  icon: string;
  title: string;
  sub: string;
  desc: string;
}

interface JourneyDictionary {
  headTitle: string;
  headSubtitle: string;
  items: JourneyItem[];
  reachTitle: string;
  btnWhatsapp: string;
  btnPhone: string;
  btnForm: string;
  btnEmail: string;
}

const JOURNEY_I18N: Record<string, JourneyDictionary> = {
  en: {
    headTitle: 'Your Dental Journey Made Simple',
    headSubtitle: 'From your very first inquiry to the final results, we ensure a smooth and transparent treatment journey in Istanbul. Learn about how long you’ll stay, how many visits you’ll need, your recovery time, and estimated pricing — all designed with international patients in mind. Let us take care of the details, so you can focus on your smile.',
    reachTitle: 'Reach Out to Us - Quickly and Easily',
    btnWhatsapp: 'WhatsApp',
    btnPhone: 'Phone Call',
    btnForm: 'Quick Form',
    btnEmail: 'E-mail',
    items: [
      {
        id: 'stay',
        icon: '/icons/journey-01.webp',
        title: 'Average Length of Stay in Istanbul',
        sub: '-',
        desc: 'For routine cleanings, composite fillings, or simple extractions, a short 1-day to 3-day stay in Istanbul is usually sufficient. Complex procedures like multiple root canals or wisdom tooth surgeries may require up to 4-5 days for comfortable follow-up.',
      },
      {
        id: 'visits',
        icon: '/icons/journey-02.webp',
        title: 'Number of Visits Required',
        sub: '-',
        desc: 'Most general dentistry procedures are completed in a single comprehensive clinical appointment. Procedures requiring lab work (like inlays/onlays) or multi-canal therapies typically take 2 visits scheduled across your trip.',
      },
      {
        id: 'recovery',
        icon: '/icons/journey-03.webp',
        title: 'Recovery Time',
        sub: '-',
        desc: 'You can return to normal daily activities immediately after cleaning or fillings. For tooth extractions or surgical removals, minor swelling subsides within 24 to 48 hours with prescribed anti-inflammatory care.',
      },
      {
        id: 'price',
        icon: '/icons/journey-04.webp',
        title: 'Price',
        sub: '-',
        desc: 'General dentistry treatments in Turkey offer up to 70% savings compared to the UK, Europe, and North America, with 100% fixed transparent quotes and zero hidden fees.',
      },
    ],
  },
  tr: {
    headTitle: 'Diş Tedavi Süreciniz Artık Çok Kolay',
    headSubtitle: 'İlk iletişiminizden nihai tedavi sonucunuza kadar, İstanbul’da sorunsuz ve şeffaf bir klinik yolculuk sunuyoruz. Konaklama süreniz, gereken seans sayısı, iyileşme süreciniz ve tahmini fiyatlarımız hakkında tüm detayları öğrenin.',
    reachTitle: 'Bize Kolayca ve Hızlıca Ulaşın',
    btnWhatsapp: 'WhatsApp',
    btnPhone: 'Telefonla Ara',
    btnForm: 'Hızlı Form',
    btnEmail: 'E-posta Gönder',
    items: [
      {
        id: 'stay',
        icon: '/icons/journey-01.webp',
        title: 'İstanbul’da Ortalama Kalış Süresi',
        sub: '-',
        desc: 'Diş taşı temizliği, kompozit dolgu ve basit çekimler gibi rutin tedaviler için genellikle 1-3 günlük bir İstanbul seyahati yeterlidir. Çoklu kanal tedavisi veya cerrahi 20\'lik diş çekimlerinde ise takip kontrolleri için 4-5 gün önerilir.',
      },
      {
        id: 'visits',
        icon: '/icons/journey-02.webp',
        title: 'Gereken Klinik Randevu Sayısı',
        sub: '-',
        desc: 'Genel diş hekimliği işlemlerinin çoğu tek bir kapsamlı seansta tamamlanır. İnley/onley gibi laboratuvar aşaması gerektiren veya çoklu kanal tedavilerinde 2 klinik ziyareti planlanır.',
      },
      {
        id: 'recovery',
        icon: '/icons/journey-03.webp',
        title: 'İyileşme Süresi',
        sub: '-',
        desc: 'Diş taşı temizliği ve dolgu işlemlerinden sonra hemen günlük yaşantınıza dönebilirsiniz. Diş çekimlerinde ise hafif hassasiyet hekimimizin önerdiği ilaçlarla 24-48 saatte tamamen geçer.',
      },
      {
        id: 'price',
        icon: '/icons/journey-04.webp',
        title: 'Fiyat ve Maliyetler',
        sub: '-',
        desc: 'Türkiye\'de genel diş hekimliği hizmetleri Avrupa ve İngiltere\'ye kıyasla %70\'e varan fiyat avantajı sunar. Tüm tedavi planlarımız şeffaf ve sabit fiyat garantilidir.',
      },
    ],
  },
  de: {
    headTitle: 'Ihre Zahnbehandlung – Einfach & Transparent',
    headSubtitle: 'Von Ihrer ersten Anfrage bis zum perfekten Endergebnis gewährleisten wir eine transparente und reibungslose Behandlungsreise in Istanbul. Erfahren Sie alles über Aufenthaltsdauer, Termine, Heilungsverlauf und Preise.',
    reachTitle: 'Kontaktieren Sie uns – Schnell & Unkompliziert',
    btnWhatsapp: 'WhatsApp',
    btnPhone: 'Anrufen',
    btnForm: 'Schnellformular',
    btnEmail: 'E-Mail',
    items: [
      {
        id: 'stay',
        icon: '/icons/journey-01.webp',
        title: 'Durchschnittliche Aufenthaltsdauer in Istanbul',
        sub: '-',
        desc: 'Für Routine-Zahnreinigungen, Kompositfüllungen oder einfache Extraktionen reicht in der Regel ein kurzer Aufenthalt von 1 bis 3 Tagen in Istanbul völlig aus.',
      },
      {
        id: 'visits',
        icon: '/icons/journey-02.webp',
        title: 'Erforderliche Anzahl von Klinikbesuchen',
        sub: '-',
        desc: 'Die meisten allgemeinen zahnärztlichen Behandlungen werden in einem einzigen Termin abgeschlossen. Laborgefertigte Inlays oder Wurzelbehandlungen erfordern meist 2 Termine.',
      },
      {
        id: 'recovery',
        icon: '/icons/journey-03.webp',
        title: 'Erholungszeit',
        sub: '-',
        desc: 'Nach Zahnreinigungen oder Füllungen können Sie sofort Ihren Alltag fortsetzen. Nach Zahnextraktionen klingen Beschwerden innerhalb von 24–48 Stunden ab.',
      },
      {
        id: 'price',
        icon: '/icons/journey-04.webp',
        title: 'Preise & Kosten',
        sub: '-',
        desc: 'Zahnbehandlungen in der Türkei bieten bis zu 70 % Ersparnis gegenüber Deutschland, Österreich und der Schweiz bei 100 % transparenter Kostenkalkulation.',
      },
    ],
  },
  pl: {
    headTitle: 'Twoja Droga do Zdrowego Uśmiechu – Prosto i Przejrzyście',
    headSubtitle: 'Od pierwszego kontaktu po ostateczne rezultaty zapewniamy bezstresowy pobyt leczniczy w Stambule. Dowiedz się, ile potrwa Twój pobyt, ile wizyt będzie potrzebnych oraz jakie są szacunkowe koszty.',
    reachTitle: 'Skontaktuj się z nami — Szybko i Wygodnie',
    btnWhatsapp: 'WhatsApp',
    btnPhone: 'Zadzwoń',
    btnForm: 'Szybki Formularz',
    btnEmail: 'E-mail',
    items: [
      {
        id: 'stay',
        icon: '/icons/journey-01.webp',
        title: 'Średni Czas Pobytu w Stambule',
        sub: '-',
        desc: 'W przypadku rutynowej higienizacji, wypełnień kompozytowych lub prostych ekstrakcji zazwyczaj wystarcza krótki pobyt 1–3 dni w Stambule.',
      },
      {
        id: 'visits',
        icon: '/icons/journey-02.webp',
        title: 'Wymagana Liczba Wizyt w Klinice',
        sub: '-',
        desc: 'Większość zabiegów stomatologii ogólnej wykonujemy podczas jednej kompleksowej wizyty. Prace laboratoryjne (inlay/onlay) wymagają zazwyczaj 2 wizyt.',
      },
      {
        id: 'recovery',
        icon: '/icons/journey-03.webp',
        title: 'Czas Rekonwalescencji',
        sub: '-',
        desc: 'Po higienizacji lub plombowaniu powrót do codziennych aktywności jest natychmiastowy. Po ekstrakcjach dyskomfort ustępuje w ciągu 24–48 godzin.',
      },
      {
        id: 'price',
        icon: '/icons/journey-04.webp',
        title: 'Cena i Koszty',
        sub: '-',
        desc: 'Leczenie stomatologiczne w Turcji to oszczędność do 70% w porównaniu z Europą Zachodnią przy zachowaniu najwyższych standardów medycznych.',
      },
    ],
  },
  pt: {
    headTitle: 'A Sua Jornada Dentária Simplificada',
    headSubtitle: 'Desde o primeiro contacto até aos resultados finais, garantimos uma experiência de tratamento tranquila e transparente em Istambul. Conheça a duração da estadia, o número de consultas e os custos estimados.',
    reachTitle: 'Fale Connosco – Rápido e Fácil',
    btnWhatsapp: 'WhatsApp',
    btnPhone: 'Telefone',
    btnForm: 'Formulário Rápido',
    btnEmail: 'E-mail',
    items: [
      {
        id: 'stay',
        icon: '/icons/journey-01.webp',
        title: 'Tempo Médio de Estadia em Istambul',
        sub: '-',
        desc: 'Para destartarização de rotina, restaurações em resina ou extrações simples, uma estadia curta de 1 a 3 dias em Istambul é geralmente suficiente.',
      },
      {
        id: 'visits',
        icon: '/icons/journey-02.webp',
        title: 'Número de Consultas Necessárias',
        sub: '-',
        desc: 'A maioria dos procedimentos de medicina dentária geral é concluída numa única consulta. Tratamentos com fase laboratorial necessitam de 2 consultas.',
      },
      {
        id: 'recovery',
        icon: '/icons/journey-03.webp',
        title: 'Tempo de Recuperação',
        sub: '-',
        desc: 'Pode retomar as suas atividades diárias imediatamente após limpezas ou restaurações. Em extrações, a recuperação completa ocorre em 24 a 48 horas.',
      },
      {
        id: 'price',
        icon: '/icons/journey-04.webp',
        title: 'Preço e Valores',
        sub: '-',
        desc: 'Os tratamentos dentários na Turquia oferecem até 70% de poupança em relação ao resto da Europa, com orçamentos 100% transparentes e fixos.',
      },
    ],
  },
  es: {
    headTitle: 'Su Viaje Dental Hecho Fácil',
    headSubtitle: 'Desde su primera consulta hasta el resultado final, le garantizamos un tratamiento transparente y sin complicaciones en Estambul. Conozca el tiempo de estancia, las visitas requeridas y los precios estimados.',
    reachTitle: 'Póngase en Contacto – Fácil y Rápido',
    btnWhatsapp: 'WhatsApp',
    btnPhone: 'Llamar',
    btnForm: 'Formulario Rápido',
    btnEmail: 'E-mail',
    items: [
      {
        id: 'stay',
        icon: '/icons/journey-01.webp',
        title: 'Duración Media de la Estancia en Estambul',
        sub: '-',
        desc: 'Para limpiezas rutinarias, empastes de composite o extracciones simples, suele ser suficiente una estancia corta de 1 a 3 días en Estambul.',
      },
      {
        id: 'visits',
        icon: '/icons/journey-02.webp',
        title: 'Número de Citas Clínicas Necesarias',
        sub: '-',
        desc: 'La mayoría de los procedimientos de odontología general se completan en una sola sesión. Tratamientos de laboratorio como incrustaciones requieren 2 citas.',
      },
      {
        id: 'recovery',
        icon: '/icons/journey-03.webp',
        title: 'Tiempo de Recuperación',
        sub: '-',
        desc: 'Puede volver a su rutina diaria inmediatamente tras limpiezas o empastes. En extracciones, cualquier molestia leve remite en 24-48 horas.',
      },
      {
        id: 'price',
        icon: '/icons/journey-04.webp',
        title: 'Precio y Presupuesto',
        sub: '-',
        desc: 'Los tratamientos odontológicos en Turquía ofrecen hasta un 70% de ahorro en comparación con Europa y EE.UU., con presupuestos cerrados y sin sorpresas.',
      },
    ],
  },
  ru: {
    headTitle: 'Ваш путь к здоровой улыбке — просто и понятно',
    headSubtitle: 'С момента первого обращения до финального результата мы гарантируем комфортное и прозрачное лечение в Стамбуле. Узнайте о сроках пребывания, количестве визитов и стоимости.',
    reachTitle: 'Свяжитесь с нами — Быстро и Удобно',
    btnWhatsapp: 'WhatsApp',
    btnPhone: 'Позвонить',
    btnForm: 'Быстрая Форма',
    btnEmail: 'E-mail',
    items: [
      {
        id: 'stay',
        icon: '/icons/journey-01.webp',
        title: 'Средняя продолжительность пребывания в Стамбуле',
        sub: '-',
        desc: 'Для профессиональной чистки, композитных пломб или простого удаления зубов обычно достаточно короткой поездки в Стамбул на 1–3 дня.',
      },
      {
        id: 'visits',
        icon: '/icons/journey-02.webp',
        title: 'Необходимое количество визитов в клинику',
        sub: '-',
        desc: 'Большинство терапевтических процедур завершается за один визит. Для вкладок Inlay/Onlay или сложных каналов требуется 2 визита.',
      },
      {
        id: 'recovery',
        icon: '/icons/journey-03.webp',
        title: 'Время восстановления',
        sub: '-',
        desc: 'После чистки и пломбирования вы сразу возвращаетесь к обычной жизни. После удаления зубов легкий отек проходит за 24–48 часов.',
      },
      {
        id: 'price',
        icon: '/icons/journey-04.webp',
        title: 'Цены и стоимость',
        sub: '-',
        desc: 'Стоматологическое лечение в Турции до 70% выгоднее, чем в странах ЕС и Великобритании, с абсолютно прозрачной сметой без скрытых доплат.',
      },
    ],
  },
};

export default function GeneralDentistryJourneySection() {
  const locale = useLocale();
  const d = JOURNEY_I18N[locale] || JOURNEY_I18N.en;
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setActiveIdx(prev => (prev === idx ? null : idx));
  };

  return (
    <section className={styles.sectionWrap} aria-label={d.headTitle}>
      <div className={styles.standard_center4}>
        <div className={styles.head}>
          <div className={styles.grid1}>
            <div className={styles.headS1}>{d.headTitle}</div>
            <div className={styles.headS2}>{d.headSubtitle}</div>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.accordion}>
            {d.items.map((item, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div
                  key={item.id}
                  className={`${styles.item} ${isActive ? styles.active : ''}`}
                >
                  <div
                    className={styles.title}
                    onClick={() => toggle(idx)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isActive}
                  >
                    <div className={styles.titleLeft}>
                      <span className={styles.iconfirst}>
                        <Image
                          src={item.icon}
                          alt={item.title}
                          width={52}
                          height={52}
                        />
                      </span>
                      <span className={styles.text}>
                        <span className={styles.text1}>{item.title}</span>
                        <span className={styles.text2}>{item.sub}</span>
                      </span>
                    </div>

                    <span className={styles.icon} aria-hidden="true">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                      </svg>
                    </span>
                  </div>

                  {isActive && (
                    <div className={styles.content}>
                      <p className={styles.descP}>{item.desc}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Contact Buttons Grid */}
          <div className={styles.grid2}>
            <div className={styles.xhead}>{d.reachTitle}</div>
            <div className={styles.butonlar}>
              <a
                href="https://wa.me/905434568080"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactBtn}
              >
                <Image
                  src="/icons/contact-whatsapp.webp"
                  alt="WhatsApp"
                  width={22}
                  height={22}
                  className={styles.btnIcon}
                />
                <span>{d.btnWhatsapp}</span>
              </a>

              <a href="tel:+905434568080" className={styles.contactBtn}>
                <Image
                  src="/icons/contact-phone.webp"
                  alt="Phone Call"
                  width={22}
                  height={22}
                  className={styles.btnIcon}
                />
                <span>{d.btnPhone}</span>
              </a>

              <Link href="/contact" className={styles.contactBtn}>
                <Image
                  src="/icons/contact-form.webp"
                  alt="Quick Form"
                  width={22}
                  height={22}
                  className={styles.btnIcon}
                />
                <span>{d.btnForm}</span>
              </Link>

              <a href="mailto:info@mastersmilestudio.com" className={styles.contactBtn}>
                <Image
                  src="/icons/contact-email.webp"
                  alt="E-mail"
                  width={22}
                  height={22}
                  className={styles.btnIcon}
                />
                <span>{d.btnEmail}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
