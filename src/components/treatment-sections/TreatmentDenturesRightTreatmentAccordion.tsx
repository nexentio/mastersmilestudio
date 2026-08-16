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
    heading: 'Sizin İçin En Doğru Protez Diş Tedavisi Hangisi?',
    subtitle:
      'Damak protezleri, çıtçıtlı overdenture sistemleri veya sabit hibrit çözümlerimiz arasından ağız yapınıza en uygun olanı keşfedin.',
    readMore: 'DETAYLI BİLGİ',
    items: [
      {
        title: 'İmplant Destekli Çıt Çıtlı Protez (Locator)',
        target: 'Damaklarının oynamasından ve yapıştırıcı kremden bıkan hastalar',
        desc: '2 ila 4 titanyum implant üzerine kilitlenen, çiğnerken ve konuşurken yerinden oynamayan kilitli çıtçıt sistemi.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/dentures/overdentures',
      },
      {
        title: 'Üst Çene Damaksız Çıt Çıtlı Protez',
        target: 'Damağın kapanmasından ve tat kaybından rahatsız olanlar',
        desc: '4 implant üzerine oturan nal tipi açık tasarım ile tat ve sıcaklık duyusunu %100 koruyan konforlu protez.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dentures/overdentures',
      },
      {
        title: 'Tam Damak Protezi (Klasik Total Protez)',
        target: 'Tüm dişlerini kaybetmiş ve ekonomik tam çene çözümü arayanlar',
        desc: 'Yüksek kırılma dayanımlı akrilik kaide ve çok katmanlı estetik kompozit dişlerden oluşan klasik tam protez.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dentures/complete-dentures',
      },
      {
        title: 'Hassas Tutuculu Bölümlü Protez (Çıtçıtlı Parsiyel)',
        target: 'Kısmi diş eksikliği olan ve metal kanca görüntüsü istemeyenler',
        desc: 'Kaplamaların içine gizlenen kilitli hassas tutucularla dışarıdan kanca görünmeyen estetik protez.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Valplast Esnek (Deflex) Bölümlü Protez',
        target: 'Kırılmayan, hafif ve diş eti renginde estetik kanca isteyenler',
        desc: 'Termoplastik esnek naylon materyalden üretilen, metal içermeyen ve dokuyla mükemmel uyumlu protez.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Aynı Gün Geçici Protezler (Immediate)',
        target: 'Diş çekiminden sonra iyileşme sürecinde dişsiz kalmak istemeyenler',
        desc: 'Diş çekimiyle aynı gün takılarak diş etlerini koruyan ve sosyal yaşama hemen devam etmeyi sağlayan protezler.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/dentures',
      },
    ],
  },
  en: {
    heading: 'Find the Right Denture Solution for You',
    subtitle:
      'Not sure which denture or overdenture system matches your jawbone condition and lifestyle? Explore our clinical options below.',
    readMore: 'READ MORE',
    items: [
      {
        title: 'Snap-On Implant Overdentures (Locator)',
        target: 'Patients tired of loose, slipping dentures and messy adhesive pastes',
        desc: 'Locked securely onto 2 to 4 titanium implants for rock-solid chewing retention and zero slipping.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/dentures/overdentures',
      },
      {
        title: 'Palateless Upper Snap-On Denture',
        target: 'Patients seeking an open roof of the mouth with full taste sensation',
        desc: 'Horseshoe-shaped open-palate design on 4 implants restoring 100% of taste, temperature, and speech comfort.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dentures/overdentures',
      },
      {
        title: 'Complete Full Arch Acrylic Dentures',
        target: 'Edentulous patients seeking dependable, cost-effective full rehabilitation',
        desc: 'High-impact cross-linked acrylic base with multi-layered anatomical composite teeth.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dentures/complete-dentures',
      },
      {
        title: 'Precision Attachment Partial Dentures',
        target: 'Partially edentulous patients wanting zero visible metal clasps',
        desc: 'Hidden precision clips anchored inside crown attachments for invisible, secure retention.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Valplast Flexible Partial Dentures',
        target: 'Patients desiring an unbreakable, lightweight, metal-free partial denture',
        desc: 'Biocompatible nylon thermoplastic with tissue-colored clasps blending invisibly with natural gums.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Same-Day Immediate Dentures',
        target: 'All patients to maintain speech and aesthetics immediately after extractions',
        desc: 'Fitted on the same day as extractions to protect oral tissues and prevent downtime.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/dentures',
      },
    ],
  },
  de: {
    heading: 'Finden Sie die passende Prothese für sich',
    subtitle:
      'Unsicher, welche Prothesenlösung für Ihre Kiefersituation am besten geeignet ist? Vergleichen Sie unsere Optionen.',
    readMore: 'MEHR ERFAHREN',
    items: [
      {
        title: 'Druckknopf-Prothesen auf Implantaten (Locator)',
        target: 'Fester Halt ohne Wackeln und ohne Haftcreme',
        desc: 'Auf 2 bis 4 Titanimplantaten fest verankert mit praktischem Klicksystem.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/dentures/overdentures',
      },
      {
        title: 'Gaumenfreie Oberkieferprothese',
        target: 'Volles Geschmacksempfinden ohne Gaumenplatte',
        desc: 'Hufeisenförmiges Design auf 4 Implantaten mit freiem Gaumen.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dentures/overdentures',
      },
      {
        title: 'Klassische Vollprothese (Totalprothese)',
        target: 'Vollständiger Zahnverlust im Ober- oder Unterkiefer',
        desc: 'Hochfester Kunststoff mit mehrschichtigen ästhetischen Zähnen.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dentures/complete-dentures',
      },
      {
        title: 'Geschiebeprothese (Teilprothese)',
        target: 'Festsitzender Teilzahnersatz ohne sichtbare Klammern',
        desc: 'Unsichtbare Präzisionsgeschiebe in den Ankerkronen.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Valplast flexible Prothese',
        target: 'Metallfreie und bruchfeste Teilprothese',
        desc: 'Zahnfleischfarbene elastische Halteelemente ohne Metall.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Sofortprothesen am selben Tag',
        target: 'Schutz und Ästhetik direkt nach Zahnextraktionen',
        desc: 'Sofortige Versorgung ohne Ausfallzeit.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/dentures',
      },
    ],
  },
  pl: {
    heading: 'Wybierz idealną protezę zębową dla siebie',
    subtitle:
      'Nie wiesz, która proteza najlepiej sprawdzi się w Twoim przypadku? Sprawdź nasze opcje w Stambule.',
    readMore: 'WIĘCEJ INFORMACJI',
    items: [
      {
        title: 'Protezy na Zatrzaskach Locator (Overdentures)',
        target: 'Koniec z wypadającą protezą i klejami mocującymi',
        desc: 'Zatrzaskiwane na 2–4 implantach tytanowych dla 100% stabilności podczas jedzenia.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/dentures/overdentures',
      },
      {
        title: 'Górna Proteza Bezpodniebienna (Bez Płyty)',
        target: 'Pełne odczuwanie smaków i wygoda bez zakrywania podniebienia',
        desc: 'Konstrukcja w kształcie podkowy na 4 implantach zapewniająca naturalny komfort.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dentures/overdentures',
      },
      {
        title: 'Wysokoudarzeniowa Proteza Całkowita',
        target: 'Całkowity brak zębów i ekonomiczna odbudowa',
        desc: 'Trwała płyta akrylowa z wielowarstwowymi zębami kompozytowymi.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dentures/complete-dentures',
      },
      {
        title: 'Proteza Częściowa na Zatrzaskach Precyzyjnych',
        target: 'Częściowe braki zębowe bez widocznych metalowych klamer',
        desc: 'Ukryte zamki precyzyjne w koronach filarowych.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Elastyczna Proteza Valplast (Nylonowa)',
        target: 'Lekka, niełamliwa i w 100% bezmetalowa proteza',
        desc: 'Klamry w kolorze dziąsła całkowicie niewidoczne z zewnątrz.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Protezy Natychmiastowe w Dniu Ekstrakcji',
        target: 'Ochrona wyrostka zębodołowego i estetyka od 1. dnia',
        desc: 'Zakładane natychmiast po usunięciu zębów.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/dentures',
      },
    ],
  },
  pt: {
    heading: 'Encontre a Prótese Dentária Ideal para Você',
    subtitle:
      'Descubra qual sistema de prótese total ou overdenture sobre implantes oferece o melhor encaixe e conforto para sua boca.',
    readMore: 'SAIBA MAIS',
    items: [
      {
        title: 'Overdentures com Encaixe Locator (Clique)',
        target: 'Eliminação definitiva de dentaduras soltas e pastas fixadoras',
        desc: 'Fixação firme sobre 2 a 4 implantes de titânio com alta retenção mastigatória.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/dentures/overdentures',
      },
      {
        title: 'Overdenture Superior Sem Céu da Boca',
        target: 'Palato livre com preservação total do paladar',
        desc: 'Design aberto em ferradura sobre 4 implantes sem cobrir o palato.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dentures/overdentures',
      },
      {
        title: 'Prótese Total Convencional (Dentadura)',
        target: 'Perda total de dentes com excelente custo-benefício',
        desc: 'Base em acrílico de alta densidade com dentes estéticos multicamadas.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dentures/complete-dentures',
      },
      {
        title: 'Prótese Parcial com Encaixes de Precisão',
        target: 'Perdas parciais sem grampos metálicos visíveis',
        desc: 'Encaixes ocultos nas coroas de suporte para estética invisível.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Prótese Flexível Valplast',
        target: 'Prótese inquebrável, leve e sem metal',
        desc: 'Termoplástico flexível com grampos na cor da gengiva.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Próteses Imediatas no Mesmo Dia',
        target: 'Proteção estética e mastigatória logo após extrações',
        desc: 'Instalação imediata para você nunca ficar sem dentes.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/dentures',
      },
    ],
  },
  es: {
    heading: 'Encuentre la Prótesis Dental Ideal para Usted',
    subtitle:
      'Descubra qué sistema de prótesis completa o sobredentadura sobre implantes se adapta mejor a su mandíbula y estilo de vida.',
    readMore: 'MÁS INFORMACIÓN',
    items: [
      {
        title: 'Sobredentaduras con Anclaje Locator (Clic)',
        target: 'Fin a las dentaduras flojas y a las pastas adhesivas',
        desc: 'Fijación segura sobre 2 a 4 implantes de titanio sin movimientos al comer o hablar.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/dentures/overdentures',
      },
      {
        title: 'Sobredentadura Superior sin Paladar',
        target: 'Paladar libre para disfrutar del 100% del sabor de la comida',
        desc: 'Diseño en herradura sobre 4 implantes sin cubrir el paladar.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dentures/overdentures',
      },
      {
        title: 'Dentadura Completa Total de Alto Impacto',
        target: 'Pérdida total de piezas con solución económica y fiable',
        desc: 'Base de acrílico de alta resistencia con dientes anatómicos multicapa.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dentures/complete-dentures',
      },
      {
        title: 'Prótesis Parcial con Anclajes de Precisión',
        target: 'Sustitución parcial sin ganchos metálicos a la vista',
        desc: 'Mecanismos ocultos dentro de las coronas pilares.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Prótesis Flexible Valplast sin Metal',
        target: 'Prótesis irrompible, ligera y estética',
        desc: 'Resina termoplástica con retenedores del color de la encía.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Prótesis Inmediatas en el Mismo Día',
        target: 'Comodidad y estética inmediata tras las extracciones',
        desc: 'Colocadas el mismo día para evitar quedarse sin dientes.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/dentures',
      },
    ],
  },
  ru: {
    heading: 'Выберите подходящий зубной протез',
    subtitle:
      'Узнайте, какой вид полного съемного или покрывного протеза на имплантатах наилучшим образом восстановит улыбку и жевательную функцию.',
    readMore: 'ПОДРОБНЕЕ',
    items: [
      {
        title: 'Покрывные протезы на замках Locator (Кнопочные)',
        target: 'Абсолютная стабильность без выпадения и фиксирующего клея',
        desc: 'Жесткая фиксация на 2–4 титановых имплантатах для надежного пережевывания пищи.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/dentures/overdentures',
      },
      {
        title: 'Верхний протез без нёба на 4 имплантатах',
        target: 'Свободное нёбо и 100% сохранение вкуса и температуры',
        desc: 'Подковообразная конструкция на 4 имплантатах без пластикового перекрытия нёба.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/dentures/overdentures',
      },
      {
        title: 'Полный съемный акриловый протез',
        target: 'Классическое решение при полном отсутствии зубов',
        desc: 'Ударопрочный немецкий акрил с многослойными композитными зубами.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dentures/complete-dentures',
      },
      {
        title: 'Бюгельный протез на микрозамках (Аттачменах)',
        target: 'Частичное протезирование без видимых металлических крючков',
        desc: 'Скрытые прецизионные замки, спрятанные внутри опорных коронок.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Нейлоновый гибкий протез Valplast',
        target: 'Небьющийся, ультралегкий и полностью безметалловый протез',
        desc: 'Биосовместимый термопласт с незаметными кламмерами цвета десны.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/dentures/partial-dentures',
      },
      {
        title: 'Иммедиат-протезы в день удаления зубов',
        target: 'Сохранение дикции и эстетики с первого дня визита',
        desc: 'Устанавливаются сразу после удаления зубов для защиты десен.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/dentures',
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
    setActiveIndex(index);
  };

  const activeItem = currentData.items[activeIndex] || currentData.items[0];

  return (
    <section
      aria-labelledby="denture-right-treatment-heading"
      className={styles.section}
    >
      <div className={styles.container}>
        <div className={styles.surfaceCard}>
          <div className={styles.grid}>
            {/* Left Column: Accordion List */}
            <div className={styles.accordionList}>
              <h2
                id="denture-right-treatment-heading"
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
