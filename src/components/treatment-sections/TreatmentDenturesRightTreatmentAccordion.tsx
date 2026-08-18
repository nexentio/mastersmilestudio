'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentRightTreatmentAccordion.module.css';

interface TreatmentItem {
  title: string;
  target: string;
  desc: string;
  img: string;
  href: string;
}

const DENTURES_ACCORDION_DATA: Record<
  string,
  {
    heading: string;
    subtitle: string;
    readMore: string;
    items: TreatmentItem[];
  }
> = {
  tr: {
    heading: 'Sizin İçin En Doğru Tedaviyi Bulun',
    subtitle:
      'Hangi diş tedavisinin ihtiyaçlarınıza uygun olduğundan emin değil misiniz? Hangi işlemin kimler için uygun olduğunu ve neler sunduğunu görmek için tedavi seçeneklerimize göz atın.',
    readMore: 'DAHA FAZLA BİLGİ',
    items: [
      {
        title: 'Tam Protez (Total Protez)',
        target: 'Ağzında hiç dişi kalmamış hastalar',
        desc: 'Üst ve/veya alt çenedeki tüm dişlerin yerini alan hareketli bir protez türüdür.',
        img: 'https://sohodent.com/doc/data1/complete-dentures.webp?v=1',
        href: '/treatments/dentures/complete-dentures',
      },
      {
        title: 'Bölümlü Protez (Parsiyel)',
        target: 'Bazı dişleri eksik olan ancak kalan doğal dişlerini korumak isteyen hastalar',
        desc: 'Eksik dişlerin yerini alır ve diğer sağlıklı dişlere tutunarak destek alır.',
        img: 'https://sohodent.com/doc/data1/partial-dentures.webp?v=1',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Overdenture (İmplant Destekli Protez)',
        target: 'Daha stabil ve güvenli bir protez isteyen dişsiz hastalar',
        desc: 'İmplantlara tutunan bir protez türüdür. Hareketli klasik protezlere göre çok daha konforlu ve sabittir.',
        img: 'https://sohodent.com/doc/data1/overdenture.webp?v=1',
        href: '/treatments/dentures/overdentures',
      },
    ],
  },
  en: {
    heading: 'Find the Right Treatment for You',
    subtitle:
      'Not sure which dental treatment suits your needs? Browse through our treatment options to see who each procedure is for and what it offers so you can make informed decisions about your dental care.',
    readMore: 'READ MORE',
    items: [
      {
        title: 'Complete Dentures',
        target: 'Patients with no teeth left in their mouth',
        desc: 'It is a type of removable prosthesis that replaces all teeth in the upper and/or lower jaw.',
        img: 'https://sohodent.com/doc/data1/complete-dentures.webp?v=1',
        href: '/treatments/dentures/complete-dentures',
      },
      {
        title: 'Partial Dentures',
        target: 'Patients who are missing some teeth but want to preserve their remaining natural teeth',
        desc: 'It replaces missing teeth and gets support by attaching to other healthy teeth.',
        img: 'https://sohodent.com/doc/data1/partial-dentures.webp?v=1',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Overdenture',
        target: 'Toothless patients who want a more stable and secure prosthesis',
        desc: 'It is a type of prosthesis that attaches to implants. It is more comfortable and stable than removable dentures.',
        img: 'https://sohodent.com/doc/data1/overdenture.webp?v=1',
        href: '/treatments/dentures/overdentures',
      },
    ],
  },
  de: {
    heading: 'Finden Sie die richtige Behandlung für sich',
    subtitle:
      'Sie sind sich nicht sicher, welche Zahnbehandlung zu Ihren Bedürfnissen passt? Durchstöbern Sie unsere Behandlungsoptionen, um fundierte Entscheidungen über Ihre Zahnpflege zu treffen.',
    readMore: 'MEHR ERFAHREN',
    items: [
      {
        title: 'Vollprothesen',
        target: 'Patienten ohne verbleibende Zähne im Mund',
        desc: 'Es ist eine herausnehmbare Prothese, die alle Zähne im Ober- und/oder Unterkiefer ersetzt.',
        img: 'https://sohodent.com/doc/data1/complete-dentures.webp?v=1',
        href: '/treatments/dentures/complete-dentures',
      },
      {
        title: 'Teilprothesen',
        target: 'Patienten, denen einige Zähne fehlen, die aber ihre verbleibenden natürlichen Zähne erhalten möchten',
        desc: 'Sie ersetzt fehlende Zähne und erhält Halt durch die Befestigung an anderen gesunden Zähnen.',
        img: 'https://sohodent.com/doc/data1/partial-dentures.webp?v=1',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Overdenture (Deckprothese)',
        target: 'Zahnlose Patienten, die eine stabilere und sicherere Prothese wünschen',
        desc: 'Eine Prothese, die auf Implantaten befestigt wird. Sie ist wesentlich komfortabler und stabiler als herausnehmbare Vollprothesen.',
        img: 'https://sohodent.com/doc/data1/overdenture.webp?v=1',
        href: '/treatments/dentures/overdentures',
      },
    ],
  },
  pl: {
    heading: 'Znajdź odpowiednie leczenie dla siebie',
    subtitle:
      'Nie wiesz, które leczenie stomatologiczne odpowiada Twoim potrzebom? Przejrzyj nasze opcje leczenia, aby dowiedzieć się, dla kogo jest przeznaczony każdy zabieg i co oferuje.',
    readMore: 'DOWIEDZ SIĘ WIĘCEJ',
    items: [
      {
        title: 'Protezy Całkowite',
        target: 'Pacjenci, którzy nie mają już żadnych zębów w jamie ustnej',
        desc: 'Jest to rodzaj ruchomej protezy, która zastępuje wszystkie zęby w górnej i/lub dolnej szczęce.',
        img: 'https://sohodent.com/doc/data1/complete-dentures.webp?v=1',
        href: '/treatments/dentures/complete-dentures',
      },
      {
        title: 'Protezy Częściowe',
        target: 'Pacjenci, którym brakuje niektórych zębów, ale chcą zachować pozostałe naturalne zęby',
        desc: 'Zastępuje brakujące zęby i uzyskuje podparcie poprzez mocowanie do innych zdrowych zębów.',
        img: 'https://sohodent.com/doc/data1/partial-dentures.webp?v=1',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Overdenture (Proteza na implantach)',
        target: 'Bezzębni pacjenci, którzy oczekują bardziej stabilnej i bezpiecznej protezy',
        desc: 'Jest to rodzaj protezy mocowanej na implantach. Jest znacznie wygodniejsza i stabilniejsza niż tradycyjne protezy ruchome.',
        img: 'https://sohodent.com/doc/data1/overdenture.webp?v=1',
        href: '/treatments/dentures/overdentures',
      },
    ],
  },
  pt: {
    heading: 'Encontre o Tratamento Certo para Você',
    subtitle:
      'Não tem certeza de qual tratamento odontológico atende às suas necessidades? Navegue pelas nossas opções de tratamento para tomar decisões informadas sobre sua saúde bucal.',
    readMore: 'SAIBA MAIS',
    items: [
      {
        title: 'Próteses Totais',
        target: 'Pacientes sem nenhum dente restante na boca',
        desc: 'É um tipo de prótese removível que substitui todos os dentes na arcada superior e/ou inferior.',
        img: 'https://sohodent.com/doc/data1/complete-dentures.webp?v=1',
        href: '/treatments/dentures/complete-dentures',
      },
      {
        title: 'Próteses Parciais',
        target: 'Pacientes que perderam alguns dentes, mas desejam preservar os dentes naturais restantes',
        desc: 'Substitui os dentes ausentes e obtém suporte ao fixar-se em outros dentes saudáveis.',
        img: 'https://sohodent.com/doc/data1/partial-dentures.webp?v=1',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Overdenture (Sobredentadura)',
        target: 'Pacientes edêntulos que desejam uma prótese mais estável e segura',
        desc: 'É um tipo de prótese fixada em implantes. É muito mais confortável e estável do que as dentaduras removíveis convencionais.',
        img: 'https://sohodent.com/doc/data1/overdenture.webp?v=1',
        href: '/treatments/dentures/overdentures',
      },
    ],
  },
  es: {
    heading: 'Encuentre el Tratamiento Adecuado para Usted',
    subtitle:
      '¿No está seguro de qué tratamiento dental se adapta a sus necesidades? Explore nuestras opciones de tratamiento para tomar decisiones informadas sobre su salud dental.',
    readMore: 'MÁS INFORMACIÓN',
    items: [
      {
        title: 'Prótesis Completas',
        target: 'Pacientes sin dientes restantes en la boca',
        desc: 'Es un tipo de prótesis removible que reemplaza todos los dientes en el maxilar superior y/o inferior.',
        img: 'https://sohodent.com/doc/data1/complete-dentures.webp?v=1',
        href: '/treatments/dentures/complete-dentures',
      },
      {
        title: 'Prótesis Parciales',
        target: 'Pacientes a los que les faltan algunos dientes pero desean conservar los dientes naturales restantes',
        desc: 'Reemplaza los dientes perdidos y obtiene soporte fijándose a otros dientes sanos.',
        img: 'https://sohodent.com/doc/data1/partial-dentures.webp?v=1',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Overdenture (Sobredentadura)',
        target: 'Pacientes desdentados que desean una prótesis más estable y segura',
        desc: 'Es un tipo de prótesis que se fija sobre implantes. Es mucho más cómoda y estable que las dentaduras postizas removibles convencionales.',
        img: 'https://sohodent.com/doc/data1/overdenture.webp?v=1',
        href: '/treatments/dentures/overdentures',
      },
    ],
  },
  ru: {
    heading: 'Найдите подходящее лечение для себя',
    subtitle:
      'Не уверены, какое стоматологическое лечение вам подходит? Ознакомьтесь с нашими вариантами, чтобы узнать, для кого предназначена каждая процедура и сделать осознанный выбор.',
    readMore: 'ПОДРОБНЕЕ',
    items: [
      {
        title: 'Полные съемные протезы',
        target: 'Пациенты с полным отсутствием зубов в полости рта',
        desc: 'Это тип съемного протеза, который заменяет все зубы на верхней и/или нижней челюсти.',
        img: 'https://sohodent.com/doc/data1/complete-dentures.webp?v=1',
        href: '/treatments/dentures/complete-dentures',
      },
      {
        title: 'Частичные съемные протезы',
        target: 'Пациенты, у которых отсутствует часть зубов, но они хотят сохранить оставшиеся естественные зубы',
        desc: 'Восстанавливает отсутствующие зубы и фиксируется с опорой на сохранившиеся здоровые зубы.',
        img: 'https://sohodent.com/doc/data1/partial-dentures.webp?v=1',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Покрывной протез (Overdenture)',
        target: 'Пациенты без зубов, которым требуется более стабильный и надежный протез',
        desc: 'Тип протеза, фиксирующийся на имплантах. Он значительно удобнее и стабильнее обычных съемных протезов.',
        img: 'https://sohodent.com/doc/data1/overdenture.webp?v=1',
        href: '/treatments/dentures/overdentures',
      },
    ],
  },
};

export default function TreatmentDenturesRightTreatmentAccordion() {
  const locale = useLocale();
  const currentData =
    DENTURES_ACCORDION_DATA[locale] || DENTURES_ACCORDION_DATA.en;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  const activeItem =
    activeIndex >= 0 && activeIndex < currentData.items.length
      ? currentData.items[activeIndex]
      : currentData.items[0];

  return (
    <section
      className={styles.section}
      aria-labelledby="dentures-right-treatment-heading"
    >
      <div className={styles.container}>
        {/* Top Heading Row: 2-column Grid */}
        <div className={styles.headerRow}>
          <div>
            <h2
              id="dentures-right-treatment-heading"
              className={styles.heading}
            >
              {currentData.heading}
            </h2>
          </div>
          <div>
            <p className={styles.subText}>{currentData.subtitle}</p>
          </div>
        </div>

        {/* Surface Card Container */}
        <div className={styles.surfaceCard}>
          <div className={styles.grid}>
            {/* Left Column: Accordion Items */}
            <div className={styles.accordionList}>
              {currentData.items.map((item, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <div
                    key={idx}
                    className={`${styles.item} ${
                      isActive ? styles.itemActive : ''
                    }`}
                  >
                    <div
                      className={styles.titleRow}
                      onClick={() => toggleAccordion(idx)}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isActive}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleAccordion(idx);
                        }
                      }}
                    >
                      <div className={styles.textGroup}>
                        <span className={styles.titleText}>{item.title}</span>
                        <span className={styles.targetText}>{item.target}</span>
                      </div>
                      <span
                        className={`${styles.chevron} ${
                          isActive ? styles.chevronActive : ''
                        }`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </div>

                    {isActive && (
                      <div className={styles.contentBox}>
                        <p className={styles.descText}>{item.desc}</p>
                        <div className={styles.mobileImgWrap}>
                          <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            width={600}
                            height={369}
                          />
                        </div>
                        <div className={styles.btnWrap}>
                          <Link
                            href={item.href}
                            className={styles.btn}
                            aria-label={`Read more about ${item.title}`}
                          >
                            {currentData.readMore}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Sticky Preview Image Card */}
            <div className={styles.stickyPreview}>
              <Link
                href={activeItem.href}
                className={styles.previewCard}
                aria-label={`Explore ${activeItem.title}`}
              >
                <img
                  src={activeItem.img}
                  alt={activeItem.title}
                  loading="lazy"
                  width={600}
                  height={369}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
