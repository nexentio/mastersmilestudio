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

const BRIDGE_ACCORDION_DATA: Record<
  string,
  {
    heading: string;
    subtitle: string;
    readMore: string;
    items: TreatmentItem[];
  }
> = {
  tr: {
    heading: 'Sizin İçin En Doğru Diş Köprüsü Hangisi?',
    subtitle:
      'Eksik dişlerinizi tamamlamak için hangi köprü yönteminin ağız yapınıza en uygun olduğunu keşfedin.',
    readMore: 'DETAYLI BİLGİ',
    items: [
      {
        title: 'Geleneksel Sabit Zirkonyum Köprü',
        target: 'Boşluğun iki tarafında sağlıklı destek dişi olan hastalar',
        desc: '1200+ MPa Alman Zirkonyum gövde ile iki destek diş üzerine oturtulan kırılmaya dayanıklı sabit köprü.',
        img: '/treatments/accordion/traditional-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'İmplant Destekli Diş Köprüsü',
        target: 'Yan yana 3 veya 4 diş eksikliği olan ve kemik yapısı uygun hastalar',
        desc: 'Komşu doğal dişleri kesmeden sadece 2 adet titanyum implant üzerine vidalanan sabit köprü.',
        img: '/treatments/accordion/implant-supported-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Maryland Kanatlı Köprü (Minimal Prep)',
        target: 'Ön tek diş eksikliğinde yan dişleri aşındırmak istemeyen hastalar',
        desc: 'Komşu dişlerin arkasına özel adeziv kompozitle yapıştırılan kanatlı estetik köprü çözümü.',
        img: '/treatments/accordion/maryland-bridge.webp',
        href: '/treatments/dental-bridge/maryland-bridges',
      },
      {
        title: 'Cantilever (Balkon) Asma Köprü',
        target: 'Boşluğun sadece tek tarafında sağlam destek dişi bulunan durumlar',
        desc: 'Tek taraflı dayanak dişiyle boşluğu dolduran özel mühendislik ürünü köprü tasarımı.',
        img: '/treatments/accordion/cantilever-bridge.webp',
        href: '/treatments/dental-bridge/cantilever-bridges',
      },
      {
        title: 'Ivoclar E-Max Estetik Köprü',
        target: 'Ön bölgede tek diş boşluğunda maksimum ışık geçirgenliği arayanlar',
        desc: 'Lityum disilikat cam seramik ile doğal diş minesiyle ayırt edilemeyen ön bölge estetiği.',
        img: '/treatments/accordion/e-max-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Aynı Gün Geçici Köprüler (PMMA)',
        target: 'Kalıcı köprü üretilirken dişsiz kalmak istemeyen tüm hastalar',
        desc: 'Diş hazırlığıyla aynı seansta takılan, çiğnemeyi ve estetiği koruyan geçici köprü dişler.',
        img: '/treatments/accordion/temporary-bridge.webp',
        href: '/treatments/dental-bridge',
      },
    ],
  },
  en: {
    heading: 'Find the Right Dental Bridge for You',
    subtitle:
      'Not sure which bridge restoration fits your missing teeth pattern and bite forces? Explore our clinical options below.',
    readMore: 'READ MORE',
    items: [
      {
        title: 'Traditional Fixed Zirconia Bridge',
        target: 'Patients with healthy natural anchor teeth on both sides of the gap',
        desc: '1200+ MPa German monolithic zirconia bridge anchored securely over two prepared abutment teeth.',
        img: '/treatments/accordion/traditional-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Implant-Supported Dental Bridge',
        target: 'Patients missing 3 to 4 consecutive teeth seeking fixed teeth without shaving natural teeth',
        desc: 'Permanent multi-unit bridge anchored directly onto 2 dental implants with zero reduction of natural enamel.',
        img: '/treatments/accordion/implant-supported-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Maryland Resin-Bonded Bridge',
        target: 'Patients missing a single front tooth wanting zero or minimal tooth preparation',
        desc: 'Conservative ceramic or metal wings bonded discreetly to the backside of adjacent natural teeth.',
        img: '/treatments/accordion/maryland-bridge.webp',
        href: '/treatments/dental-bridge/maryland-bridges',
      },
      {
        title: 'Cantilever Dental Bridge',
        target: 'Situations where support teeth exist on only one side of the gap',
        desc: 'Single-sided anchor bridge engineered for low-stress anterior or premolar gaps.',
        img: '/treatments/accordion/cantilever-bridge.webp',
        href: '/treatments/dental-bridge/cantilever-bridges',
      },
      {
        title: 'Ivoclar E-Max Aesthetic Bridge',
        target: 'Patients demanding unmatched front-teeth translucency and natural light transmission',
        desc: 'Swiss lithium disilicate glass-ceramic with lifelike vitality for anterior gaps.',
        img: '/treatments/accordion/e-max-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Same-Day Temporary Bridges',
        target: 'All patients to protect prepared teeth and maintain chewing function',
        desc: 'Immediate PMMA temporary bridge fitted on the first visit so you never have a missing gap.',
        img: '/treatments/accordion/temporary-bridge.webp',
        href: '/treatments/dental-bridge',
      },
    ],
  },
  de: {
    heading: 'Finden Sie die passende Zahnbrücke für sich',
    subtitle:
      'Unsicher, welche Brückenart für Ihre Zahnlücke und Ästhetik am besten geeignet ist? Vergleichen Sie unsere Optionen.',
    readMore: 'MEHR ERFAHREN',
    items: [
      {
        title: 'Traditionelle feste Zirkonbrücke',
        target: 'Gesunde Pfeilerzähne auf beiden Seiten der Lücke',
        desc: '1200+ MPa deutsches Zirkonoxid für maximale Bruchfestigkeit und Stabilität.',
        img: '/treatments/accordion/traditional-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Implantatgetragene Zahnbrücke',
        target: '3 bis 4 fehlende Zähne in Reihe ohne Beschleifen gesunder Zähne',
        desc: 'Festsitzende Brücke auf 2 Titanimplantaten ohne Belastung der Nachbarzähne.',
        img: '/treatments/accordion/implant-supported-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Maryland-Brücke (Klebebrücke)',
        target: 'Minimalinvasiver Einzelzahn-Ersatz im Frontzahnbereich',
        desc: 'Rückseitig verklebte Keramikflügel ohne Substanzverlust.',
        img: '/treatments/accordion/maryland-bridge.webp',
        href: '/treatments/dental-bridge/maryland-bridges',
      },
      {
        title: 'Freiendbrücke (Cantilever)',
        target: 'Lücken mit Pfeilerzähnen auf nur einer Seite',
        desc: 'Einseitig verankerte Brückenkonstruktion.',
        img: '/treatments/accordion/cantilever-bridge.webp',
        href: '/treatments/dental-bridge/cantilever-bridges',
      },
      {
        title: 'Ivoclar E-Max Vollkeramikbrücke',
        target: 'Höchste Ästhetik im sichtbaren Frontzahnbereich',
        desc: 'Glaskeramik mit natürlicher Lichtbrechung wie echter Zahnschmelz.',
        img: '/treatments/accordion/e-max-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Provisorische Brücke am selben Tag',
        target: 'Sofortiger Schutz während der Laborherstellung',
        desc: 'Passgenaue provisorische Zähne am Tag des Beschleifens.',
        img: '/treatments/accordion/temporary-bridge.webp',
        href: '/treatments/dental-bridge',
      },
    ],
  },
  pl: {
    heading: 'Wybierz idealny most protetyczny dla siebie',
    subtitle:
      'Nie wiesz, jaki most najlepiej uzupełni brakujące zęby? Sprawdź nasze opcje w Antalyi.',
    readMore: 'WIĘCEJ INFORMACJI',
    items: [
      {
        title: 'Tradycyjny Most Cyrkonowy',
        target: 'Pacjenci z własnymi zębami filarowymi po obu stronach luki',
        desc: 'Tlenek cyrkonu 1200+ MPa osadzony na zębach filarowych z pełną stabilnością.',
        img: '/treatments/accordion/traditional-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Most Protetyczny na Implantach',
        target: 'Brak 3–4 zębów obok siebie bez szlifowania zdrowych zębów',
        desc: 'Stały most oparty na 2 implantach tytanowych chroniący kość i zęby własne.',
        img: '/treatments/accordion/implant-supported-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Most Adhezyjny Maryland',
        target: 'Pojedynczy brak w odcinku przednim bez szlifowania zębów',
        desc: 'Skrzydełka przyklejane do wewnętrznej powierzchni zębów sąsiednich.',
        img: '/treatments/accordion/maryland-bridge.webp',
        href: '/treatments/dental-bridge/maryland-bridges',
      },
      {
        title: 'Most Wspornikowy (Cantilever)',
        target: 'Braki zębowe z filarem tylko z jednej strony',
        desc: 'Specjalna konstrukcja jednobrzeżna dla zębów przednich.',
        img: '/treatments/accordion/cantilever-bridge.webp',
        href: '/treatments/dental-bridge/cantilever-bridges',
      },
      {
        title: 'Most Pełnoceramiczny Ivoclar E-Max',
        target: 'Maksymalna estetyka i naturalna przezierność w odcinku przednim',
        desc: 'Dwukrzemian litu o idealnej grze światła imitujący naturalne szkliwo.',
        img: '/treatments/accordion/e-max-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Most Tymczasowy Zakładany od Razu',
        target: 'Ochrona i estetyka na cały czas leczenia',
        desc: 'Dopasowany most tymczasowy instalowany w dniu zabiegu.',
        img: '/treatments/accordion/temporary-bridge.webp',
        href: '/treatments/dental-bridge',
      },
    ],
  },
  pt: {
    heading: 'Encontre a Ponte Dentária Ideal para Você',
    subtitle:
      'Descubra qual método de restauração em ponte fixa atende perfeitamente à sua necessidade mastigatória e estética.',
    readMore: 'SAIBA MAIS',
    items: [
      {
        title: 'Ponte Fixa Tradicional em Zircônia',
        target: 'Pacientes com dentes pilares saudáveis em ambos os lados da falha',
        desc: 'Zircônia alemã de 1200+ MPa cimentada sobre dentes pilares preparados.',
        img: '/treatments/accordion/traditional-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Ponte Fixa Suportada por Implantes',
        target: 'Perda de 3 a 4 dentes seguidos sem desgastar dentes naturais',
        desc: 'Ponte parafusada sobre 2 implantes de titânio com alta retenção.',
        img: '/treatments/accordion/implant-supported-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Ponte Adesiva Maryland (Sem Desgaste)',
        target: 'Substituição de dente anterior sem desgastar esmalte',
        desc: 'Aletas cerâmicas coladas na parte interna dos dentes adjacentes.',
        img: '/treatments/accordion/maryland-bridge.webp',
        href: '/treatments/dental-bridge/maryland-bridges',
      },
      {
        title: 'Ponte em Cantilever (Extensão)',
        target: 'Casos com suporte dental em apenas um dos lados',
        desc: 'Design em extensão para áreas de baixa carga oclusal.',
        img: '/treatments/accordion/cantilever-bridge.webp',
        href: '/treatments/dental-bridge/cantilever-bridges',
      },
      {
        title: 'Ponte Cerâmica Ivoclar E-Max',
        target: 'Translucidez e estética incomparável para o sorriso frontal',
        desc: 'Dissilicato de lítio suíço com máxima naturalidade estética.',
        img: '/treatments/accordion/e-max-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Pontes Provisórias Imediatas',
        target: 'Proteção estética e mastigatória durante a viagem',
        desc: 'Instalação no mesmo dia para você nunca ficar sem dentes.',
        img: '/treatments/accordion/temporary-bridge.webp',
        href: '/treatments/dental-bridge',
      },
    ],
  },
  es: {
    heading: 'Encuentre el Puente Dental Ideal para Usted',
    subtitle:
      'Descubra qué tipo de puente fijo se adapta a la disposición de sus dientes ausentes y a su fuerza masticatoria.',
    readMore: 'MÁS INFORMACIÓN',
    items: [
      {
        title: 'Puente Fijo Tradicional de Zirconio',
        target: 'Pacientes con dientes pilares sanos a ambos lados del espacio',
        desc: 'Zirconio alemán de 1200+ MPa fijado permanentemente sobre dos pilares.',
        img: '/treatments/accordion/traditional-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Puente Dental sobre Implantes',
        target: 'Ausencia de 3 a 4 dientes consecutivos sin tallar dientes sanos',
        desc: 'Puente atornillado sobre 2 implantes de titanio preservando el hueso.',
        img: '/treatments/accordion/implant-supported-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Puente Adhesivo Maryland (Mínimo Tallado)',
        target: 'Pérdida de un diente frontal sin necesidad de limar los dientes vecinos',
        desc: 'Aletas estéticas adheridas por detrás de los dientes vecinos.',
        img: '/treatments/accordion/maryland-bridge.webp',
        href: '/treatments/dental-bridge/maryland-bridges',
      },
      {
        title: 'Puente Cantilever (En Voladizo)',
        target: 'Espacios con diente de apoyo en un solo lado',
        desc: 'Diseño en voladizo para zonas de menor fuerza oclusal.',
        img: '/treatments/accordion/cantilever-bridge.webp',
        href: '/treatments/dental-bridge/cantilever-bridges',
      },
      {
        title: 'Puente Cerámico Ivoclar E-Max',
        target: 'Máxima translucidez y naturalidad en dientes anteriores',
        desc: 'Disilicato de litio suizo con integración visual perfecta.',
        img: '/treatments/accordion/e-max-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Puentes Provisionales Inmediatos',
        target: 'Protección dental y función durante todo el tratamiento',
        desc: 'Colocados el mismo día para asegurar masticación y estética.',
        img: '/treatments/accordion/temporary-bridge.webp',
        href: '/treatments/dental-bridge',
      },
    ],
  },
  ru: {
    heading: 'Выберите подходящий зубной мостовидный протез',
    subtitle:
      'Узнайте, какой вид зубного моста наилучшим образом восстановит отсутствующие зубы и жевательную силу.',
    readMore: 'ПОДРОБНЕЕ',
    items: [
      {
        title: 'Традиционный циркониевый мостовидный протез',
        target: 'При наличии опорных здоровых зубов с обеих сторон',
        desc: 'Немецкий цирконий 1200+ МПа, надежно зафиксированный на опорных зубах.',
        img: '/treatments/accordion/traditional-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Мостовидный протез на имплантатах',
        target: 'Отсутствие 3–4 зубов подряд без обточки здоровых зубов',
        desc: 'Несъемный мост с опорой на 2 титановых имплантата.',
        img: '/treatments/accordion/implant-supported-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Мэрилендский адгезивный мост (Maryland)',
        target: 'Восстановление 1 переднего зуба без обточки соседних',
        desc: 'Керамические крыловидные элементы, приклеиваемые с обратной стороны зубов.',
        img: '/treatments/accordion/maryland-bridge.webp',
        href: '/treatments/dental-bridge/maryland-bridges',
      },
      {
        title: 'Консольный мост (Cantilever)',
        target: 'При наличии опоры только с одной стороны дефекта',
        desc: 'Консольная конструкция для переднего отдела.',
        img: '/treatments/accordion/cantilever-bridge.webp',
        href: '/treatments/dental-bridge/cantilever-bridges',
      },
      {
        title: 'Керамический мост Ivoclar E-Max',
        target: 'Максимальная эстетика и светопроницаемость резцов',
        desc: 'Швейцарский дисиликат лития с естественной прозрачностью.',
        img: '/treatments/accordion/e-max-bridge.webp',
        href: '/treatments/dental-bridge/traditional-bridges',
      },
      {
        title: 'Временные мосты в день приема',
        target: 'Защита зубов и комфорт на время изготовления постоянного моста',
        desc: 'Установка в 1-й день визита для сохранения функции речи и жевания.',
        img: '/treatments/accordion/temporary-bridge.webp',
        href: '/treatments/dental-bridge',
      },
    ],
  },
};

export default function TreatmentBridgeRightTreatmentAccordion() {
  const locale = useLocale();
  const currentData =
    BRIDGE_ACCORDION_DATA[locale] || BRIDGE_ACCORDION_DATA.en;

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index);
  };

  const activeItem = currentData.items[activeIndex] || currentData.items[0];

  return (
    <section
      aria-labelledby="bridge-right-treatment-heading"
      className={styles.section}
    >
      <div className={styles.container}>
        {/* Header Row: Left Big Title, Right Subtitle */}
        <div className={styles.headerRow}>
          <div>
            <h2
              id="bridge-right-treatment-heading"
              className={styles.heading}
            >
              {currentData.heading}
            </h2>
          </div>
          <div>
            <p className={styles.subText}>{currentData.subtitle}</p>
          </div>
        </div>

        <div className={styles.surfaceCard}>
          <div className={styles.grid}>
            {/* Left Column: Accordion List */}
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
                          width="15"
                          height="15"
                          viewBox="0 0 448 512"
                          fill="currentColor"
                        >
                          <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
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
