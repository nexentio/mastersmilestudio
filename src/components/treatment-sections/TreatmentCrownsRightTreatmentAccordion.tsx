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

const CROWN_ACCORDION_DATA: Record<
  string,
  {
    heading: string;
    subtitle: string;
    readMore: string;
    items: TreatmentItem[];
  }
> = {
  tr: {
    heading: 'Sizin İçin En Doğru Kron Kaplama Hangisi?',
    subtitle:
      'Hangi diş kronu materyalinin çiğneme kuvvetinize ve estetik beklentilerinize uygun olduğundan emin değil misiniz? Seçeneklerimizi inceleyerek doğru kararı verin.',
    readMore: 'DETAYLI BİLGİ',
    items: [
      {
        title: 'Zirkonyum Kron Kaplama',
        target: 'Yüksek dayanıklılık ve doğal beyazlık isteyen hastalar',
        desc: '1200+ MPa kırılma direncine sahip, metalsiz, biyouyumlu ve diş eti dostu monolitik zirkonyum kaplama.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns/zirconium-crowns',
      },
      {
        title: 'Ivoclar E-Max Kron Kaplama',
        target: 'Ön dişlerinde maksimum ışık geçirgenliği ve saydamlık arayanlar',
        desc: 'Doğal diş minesini birebir taklit eden lityum disilikat cam seramik ile kusursuz ön bölge estetiği.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/dental-crowns/emax-crowns',
      },
      {
        title: 'Metal Destekli Porselen (PFM)',
        target: 'Arka dişlerde ekonomik ve geleneksel sağlamlık arayan hastalar',
        desc: 'Metal alaşım altyapı üzerine porselen işlenen klasik ve dayanıklı kaplama türü.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dental-crowns/pfm-crowns',
      },
      {
        title: 'Tam Seramik Kronlar',
        target: 'Metal alerjisi olan ve doğal diş dokusuna en yakın uyumu isteyenler',
        desc: '%100 metalsiz cam seramik bloklardan üretilen yüksek biyouyumlu restorasyonlar.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dental-crowns/full-ceramic',
      },
      {
        title: 'Zirkon Üstü Porselen (Layered Zirconia)',
        target: 'Hem zirkonyum gücü hem de porselen el işçiliği derinliği isteyenler',
        desc: 'Zirkonyum gövde üzerine usta seramistler tarafından elle işlenen çok katmanlı estetik kaplama.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns/zirconium-crowns',
      },
      {
        title: 'Geçici Kronlar (Same-Day PMMA)',
        target: 'Kalıcı dişler üretilirken dişsiz kalmak istemeyen tüm hastalar',
        desc: 'Diş kesimi ile aynı gün takılan, sıcak-soğuk hassasiyetini önleyen ve çiğnemeyi sağlayan geçici dişler.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/dental-crowns',
      },
    ],
  },
  en: {
    heading: 'Find the Right Dental Crown for You',
    subtitle:
      'Not sure which crown material suits your bite force and aesthetic requirements? Explore our options below to discover the ideal treatment for your smile.',
    readMore: 'READ MORE',
    items: [
      {
        title: 'Monolithic Zirconia Crowns',
        target: 'Patients seeking maximum fracture resistance and lifelike vitality',
        desc: '1200+ MPa strength monolithic biocompatible zirconia for heavy bite forces and multi-unit bridges.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns/zirconium-crowns',
      },
      {
        title: 'Ivoclar E-Max Ceramic Crowns',
        target: 'Patients demanding exceptional front teeth aesthetics and opalescence',
        desc: 'Swiss lithium disilicate glass-ceramic with unmatched natural light transmission for anterior teeth.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/dental-crowns/emax-crowns',
      },
      {
        title: 'Porcelain Fused to Metal (PFM)',
        target: 'Patients seeking traditional, budget-friendly posterior strength',
        desc: 'Time-tested medical alloy core layered with high-fused aesthetic dental porcelain.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dental-crowns/pfm-crowns',
      },
      {
        title: 'Full Ceramic Crowns',
        target: 'Patients with metal sensitivities wanting organic gumline integration',
        desc: '100% metal-free, gentle on opposing teeth with harmonious translucency and zero dark margins.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dental-crowns/full-ceramic',
      },
      {
        title: 'Layered Zirconia Crowns',
        target: 'Combining the core strength of zirconia with ceramist hand-layering',
        desc: 'Precision CAD/CAM zirconia substructure hand-layered with feldspathic porcelain for lifelike depth.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns/zirconium-crowns',
      },
      {
        title: 'Immediate Temporary Crowns',
        target: 'All patients to protect teeth and maintain aesthetics during fabrication',
        desc: 'Same-day custom milled PMMA temporary teeth preventing sensitivity and ensuring normal chewing.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/dental-crowns',
      },
    ],
  },
  de: {
    heading: 'Finden Sie die passende Zahnkrone für sich',
    subtitle:
      'Unsicher, welches Material für Ihre Kaukraft und Ästhetik am besten geeignet ist? Vergleichen Sie unsere Optionen.',
    readMore: 'MEHR ERFAHREN',
    items: [
      {
        title: 'Monolithische Zirkonkronen',
        target: 'Maximale Bruchfestigkeit und Langlebigkeit',
        desc: '1200+ MPa biokompatibles Zirkonoxid für höchste Kaukraft im Backenzahnbereich.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns/zirconium-crowns',
      },
      {
        title: 'Ivoclar E-Max Vollkeramikkronen',
        target: 'Höchste Ästhetik im sichtbaren Frontzahnbereich',
        desc: 'Schweizer Lithium-Disilikat mit natürlicher Lichtbrechung wie echter Zahnschmelz.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/dental-crowns/emax-crowns',
      },
      {
        title: 'Metallkeramik-Kronen (PFM)',
        target: 'Klassische, wirtschaftliche Lösung für Seitenzähne',
        desc: 'Bewährte Metalllegierung mit Keramikverblendung.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dental-crowns/pfm-crowns',
      },
      {
        title: 'Vollkeramikkronen',
        target: 'Metallfreie Versorgung für Allergiker',
        desc: '100% metallfrei mit perfektem Übergang zum Zahnfleisch.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dental-crowns/full-ceramic',
      },
      {
        title: 'Geschichtete Zirkonkronen',
        target: 'Kombination aus Zirkonstärke und Handarbeit',
        desc: 'Zirkongerüst mit handgeschichteter Meisterkeramik.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns/zirconium-crowns',
      },
      {
        title: 'Provisorische Kronen',
        target: 'Sofortiger Schutz während der Laborherstellung',
        desc: 'Passgenaue provisorische Zähne am selben Tag.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/dental-crowns',
      },
    ],
  },
  pl: {
    heading: 'Wybierz idealną koronę zębową dla siebie',
    subtitle:
      'Nie wiesz, jaki materiał korony najlepiej sprawdzi się w Twoim przypadku? Sprawdź nasze opcje.',
    readMore: 'WIĘCEJ INFORMACJI',
    items: [
      {
        title: 'Monolityczne Korony Cyrkonowe',
        target: 'Maksymalna wytrzymałość i biozgodność w odcinku bocznym',
        desc: 'Tlenek cyrkonu o twardości 1200+ MPa, odporny na pęknięcia i ścieranie.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns/zirconium-crowns',
      },
      {
        title: 'Korony Pełnoceramiczne Ivoclar E-Max',
        target: 'Maksymalna estetyka i naturalna przezierność zębów przednich',
        desc: 'Szwajcarski dwukrzemian litu perfekcyjnie imitujący naturalne szkliwo.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/dental-crowns/emax-crowns',
      },
      {
        title: 'Korony Porcelanowe na Metalu (PFM)',
        target: 'Tradycyjna i ekonomiczna odbudowa zębów trzonowych',
        desc: 'Klasyczna podbudowa metalowa licowana porcelaną stomatologiczną.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dental-crowns/pfm-crowns',
      },
      {
        title: 'Korony Pełnoceramiczne',
        target: 'Osoby z alergiami na metale i wysokie wymagania estetyczne',
        desc: 'W 100% bezmetalowe korony zapewniające idealną linię dziąseł bez sinienia.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dental-crowns/full-ceramic',
      },
      {
        title: 'Cyrkon Warstwowany (Layered)',
        target: 'Połączenie siły cyrkonu z ręcznym kunsztem ceramika',
        desc: 'Cyrkonowa baza z indywidualnie nakładanymi warstwami porcelany.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns/zirconium-crowns',
      },
      {
        title: 'Korony Tymczasowe (PMMA)',
        target: 'Ochrona oszlifowanych zębów na czas produkcji',
        desc: 'Dopasowane korony tymczasowe zakładane w tym samym dniu.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/dental-crowns',
      },
    ],
  },
  pt: {
    heading: 'Encontre a Coroa Dentária Ideal para Você',
    subtitle:
      'Em dúvida sobre o melhor material para sua mastigação e estética? Conheça nossas opções em Istambul.',
    readMore: 'SAIBA MAIS',
    items: [
      {
        title: 'Coroas de Zircônia Monolítica',
        target: 'Máxima resistência à fratura e biocompatibilidade',
        desc: 'Zircônia 1200+ MPa alemã para alta carga mastigatória e pontes extensas.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns/zirconium-crowns',
      },
      {
        title: 'Coroas Cerâmicas Ivoclar E-Max',
        target: 'Excelência estética e translucidez para dentes anteriores',
        desc: 'Dissilicato de lítio suíço com passagem de luz idêntica ao esmalte dental.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/dental-crowns/emax-crowns',
      },
      {
        title: 'Coroas Metalocerâmicas (PFM)',
        target: 'Opção tradicional e econômica para dentes posteriores',
        desc: 'Estrutura metálica recoberta por porcelana de alta fusão.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dental-crowns/pfm-crowns',
      },
      {
        title: 'Coroas Cerâmicas Puras',
        target: 'Pacientes com sensibilidade a metais e foco em gengiva saudável',
        desc: '100% livres de metal, garantindo margens sem linhas escuras.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dental-crowns/full-ceramic',
      },
      {
        title: 'Zircônia Estratificada',
        target: 'Força estrutural combinada com arte artesanal',
        desc: 'Núcleo de zircônia com estratificação manual por ceramista.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns/zirconium-crowns',
      },
      {
        title: 'Coroas Provisórias',
        target: 'Proteção imediata durante a confecção definitiva',
        desc: 'Instalação no mesmo dia para manter mastigação e estética.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/dental-crowns',
      },
    ],
  },
  es: {
    heading: 'Encuentre la Corona Dental Ideal para Usted',
    subtitle:
      '¿No sabe qué material se adapta mejor a su fuerza de mordida y estética? Explore nuestras opciones clínicas.',
    readMore: 'MÁS INFORMACIÓN',
    items: [
      {
        title: 'Coronas de Zirconio Monolítico',
        target: 'Máxima resistencia a la fractura y biointegración',
        desc: 'Zirconio alemán de 1200+ MPa ideal para molares y puentes de varias piezas.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns/zirconium-crowns',
      },
      {
        title: 'Coronas Cerámicas Ivoclar E-Max',
        target: 'Máxima translucidez y naturalidad para dientes frontales',
        desc: 'Disilicato de litio suizo con refracción de luz idéntica al esmalte natural.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/dental-crowns/emax-crowns',
      },
      {
        title: 'Metal-Porcelana (PFM)',
        target: 'Opción clásica y económica para sectores posteriores',
        desc: 'Estructura metálica resistente recubierta de porcelana estética.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dental-crowns/pfm-crowns',
      },
      {
        title: 'Coronas Completamente Cerámicas',
        target: 'Pacientes con alergias al metal y encías sensibles',
        desc: '100% libres de metal sin sombras oscuras en el borde gingival.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dental-crowns/full-ceramic',
      },
      {
        title: 'Zirconio Estratificado',
        target: 'Resistencia del zirconio con estratificación artesanal',
        desc: 'Base de zirconio recubierta manualmente por maestros ceramistas.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns/zirconium-crowns',
      },
      {
        title: 'Coronas Provisionales',
        target: 'Protección dental inmediata durante el tratamiento',
        desc: 'Colocadas el mismo día para asegurar estética y función.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/dental-crowns',
      },
    ],
  },
  ru: {
    heading: 'Выберите подходящий вид зубной коронки',
    subtitle:
      'Не знаете, какой материал лучше всего подходит для вашей жевательной нагрузки и эстетики? Ознакомьтесь с вариантами.',
    readMore: 'ПОДРОБНЕЕ',
    items: [
      {
        title: 'Монолитные циркониевые коронки',
        target: 'Максимальная прочность и долговечность',
        desc: 'Диоксид циркония (1200+ МПа) для моляров, мостовидных протезов и бруксизма.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns/zirconium-crowns',
      },
      {
        title: 'Керамические коронки Ivoclar E-Max',
        target: 'Безупречная эстетика и прозрачность передних зубов',
        desc: 'Швейцарская стеклокерамика из дисиликата лития с естественным преломлением света.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/dental-crowns/emax-crowns',
      },
      {
        title: 'Металлокерамические коронки (PFM)',
        target: 'Экономичная и прочная классика для жевательных зубов',
        desc: 'Прочный металлический каркас, облицованный керамической массой.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dental-crowns/pfm-crowns',
      },
      {
        title: 'Цельнокерамические коронки',
        target: 'Для пациентов с аллергией на металлы и чувствительными деснами',
        desc: '100% безметалловая керамика без темной полосы у шейки зуба.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dental-crowns/full-ceramic',
      },
      {
        title: 'Коронки из циркония с нанесением керамики',
        target: 'Сочетание прочности циркония и ручной работы мастера',
        desc: 'Циркониевый каркас с индивидуальной послойной керамикой.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dental-crowns/zirconium-crowns',
      },
      {
        title: 'Временные коронки (PMMA)',
        target: 'Защита зубов на время изготовления постоянных коронок',
        desc: 'Устанавливаются в день обточки для комфортного приема пищи и улыбки.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/dental-crowns',
      },
    ],
  },
};

export default function TreatmentCrownsRightTreatmentAccordion() {
  const locale = useLocale();
  const currentData =
    CROWN_ACCORDION_DATA[locale] || CROWN_ACCORDION_DATA.en;

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index);
  };

  const activeItem = currentData.items[activeIndex] || currentData.items[0];

  return (
    <section
      aria-labelledby="crown-right-treatment-heading"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.surfaceCard}>
          <div className={styles.grid}>
            {/* Left Column: Accordion List */}
            <div className={styles.accordionList}>
              <h2
                id="crown-right-treatment-heading"
                className={styles.mainTitle}
              >
                {currentData.heading}
              </h2>
              <p className={styles.subTitle}>{currentData.subtitle}</p>

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
