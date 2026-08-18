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

const VENEER_ACCORDION_DATA: Record<
  string,
  {
    heading: string;
    subtitle: string;
    readMore: string;
    items: TreatmentItem[];
  }
> = {
  tr: {
    heading: 'Sizin İçin En Doğru Lamina Tedavisi Hangisi?',
    subtitle:
      'Hangi diş kaplama veya lamina türünün ihtiyaçlarınıza uygun olduğundan emin değil misiniz? Her prosedürün kimler için olduğunu ve neler sunduğunu görmek için seçeneklerimize göz atın.',
    readMore: 'DETAYLI BİLGİ',
    items: [
      {
        title: 'Porselen Lamina',
        target: 'Renk değişimi, kırık veya aralıklı dişleri olan hastalar',
        desc: 'Leke tutmayan, doğal ışık yansımasına sahip ve uzun ömürlü estetik yaprak porselenler.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Ivoclar E-Max Lamina',
        target: 'Ön dişlerde maksimum doğallık ve saydamlık isteyenler',
        desc: 'Doğal diş minesinin ışık geçirgenliğini birebir taklit eden lityum disilikat cam seramik.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Lumineers (Sıfır Kesim Lamina)',
        target: 'Dişine hiç müdahale ve törpüleme istemeyen hastalar',
        desc: '0.2 mm lens inceliğinde, anestezi ve kesim gerektirmeden doğal mineye yapıştırılan ultra koruyucu laminalar.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Kompozit Lamina (Bonding)',
        target: 'Küçük estetik kusurlar için hızlı ve ekonomik çözüm arayanlar',
        desc: 'Dişe hiç dokunulmadan tek seansta hekim tarafından şekillendirilen pratik ve bütçe dostu estetik çözüm.',
        img: 'https://sohodent.com/doc/data1/composite-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Zirkonyum Lamina & Kaplama',
        target: 'Hem estetik hem de yüksek kırılma direnci arayanlar',
        desc: 'Yüksek çiğneme kuvvetlerine dayanıklı, biyouyumlu ve estetik zirkonyum restorasyonlar.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Empress Lamina',
        target: 'Zengin renk geçişleri ve opalesans isteyenler',
        desc: 'Doğal derinlik ve pürüzsüz optik geçişler sağlayan preslenmiş cam seramik.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
    ],
  },
  en: {
    heading: 'Find the Right Veneer Treatment for You',
    subtitle:
      'Not sure which dental veneer technique fits your needs? Browse through our options below to see who each procedure is for and what it offers so you can make informed decisions about your smile makeover.',
    readMore: 'READ MORE',
    items: [
      {
        title: 'Porcelain Laminates',
        target: 'Patients with tooth discoloration, chips, or spacing',
        desc: 'Ultra-thin handcrafted ceramic shells providing superior stain resistance and timeless aesthetic vitality.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Ivoclar E-Max Veneers',
        target: 'Patients seeking maximum translucency and natural front teeth aesthetics',
        desc: 'Lithium disilicate glass-ceramic with lifelike light transmission, replicating natural tooth enamel perfectly.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Lumineers (No-Prep Veneers)',
        target: 'Patients wanting zero drilling and fully reversible aesthetics',
        desc: 'Contact lens-thin (0.2mm) veneers bonded directly onto intact enamel with no anesthesia or shaving required.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Composite Veneers & Bonding',
        target: 'Fast, same-day economical correction of minor cosmetic flaws',
        desc: 'Direct composite resin sculpted chairside in a single visit without invasive tooth reduction.',
        img: 'https://sohodent.com/doc/data1/composite-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Zirconium Veneers',
        target: 'Patients seeking superior fracture resistance and strength',
        desc: 'High-strength biocompatible zirconia ideal for combined smile makeovers and high bite force areas.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Empress Veneers',
        target: 'Patients desiring rich shade gradients and opalescence',
        desc: 'Leucite-reinforced pressed glass ceramic creating smooth optical transitions and lifelike depth.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
    ],
  },
  de: {
    heading: 'Finden Sie die passende Veneer-Behandlung für sich',
    subtitle:
      'Sie sind nicht sicher, welche Veneer-Technik am besten zu Ihnen passt? Entdecken Sie unsere Optionen, um zu erfahren, für wen jedes Verfahren geeignet ist.',
    readMore: 'MEHR ERFAHREN',
    items: [
      {
        title: 'Porzellan-Laminate',
        target: 'Patienten mit Verfärbungen, Zahnlücken oder abgebrochenen Kanten',
        desc: 'Hauchdünne Keramikschalen mit überlegener Farbbeständigkeit und natürlichem Glanz.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Ivoclar E-Max Veneers',
        target: 'Patienten mit höchsten Ansprüchen an Transluzenz und Schneidezahn-Ästhetik',
        desc: 'Schweizer Lithium-Disilikat-Glaskeramik für perfekte Lichtdurchlässigkeit und Natürlichkeit.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Lumineers (No-Prep Veneers)',
        target: 'Patienten, die kein Abschleifen der eigenen Zähne wünschen',
        desc: '0,2 mm hauchdünne Verblendungen direkt auf den unberührten Zahnschmelz ohne Betäubung.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Komposit-Bonding (Direct Veneers)',
        target: 'Schnelle und wirtschaftliche Korrektur kleiner Mängel in einer Sitzung',
        desc: 'Direkt im Mund modellierter Hochleistungs-Kunststoff ohne Zahnabtrag.',
        img: 'https://sohodent.com/doc/data1/composite-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Zirkon-Veneers & Kronen',
        target: 'Patienten, die maximale Bruchfestigkeit und Stabilität suchen',
        desc: 'Biokompatibles Zirkonoxid für höchste Kaukraftbelastung.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Empress Veneers',
        target: 'Sanfte Farbverläufe und lebendige Tiefenwirkung',
        desc: 'Gepresste Glaskeramik mit fließenden Farbnuancen.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
    ],
  },
  pl: {
    heading: 'Wybierz idealne licówki dla siebie',
    subtitle:
      'Nie wiesz, który rodzaj licówek jest najlepszy dla Twoich zębów? Sprawdź nasze opcje, aby dowiedzieć się, dla kogo przeznaczony jest każdy zabieg i jakie korzyści oferuje.',
    readMore: 'WIĘCEJ INFORMACJI',
    items: [
      {
        title: 'Licówki Porcelanowe',
        target: 'Pacjenci z przebarwieniami, ukruszeniami lub przerwami między zębami',
        desc: 'Trwałe i odporne na osady płatki porcelanowe o ponadczasowej estetyce.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Licówki Ivoclar E-Max',
        target: 'Osoby oczekujące maksymalnej naturalności i przezierności w strefie uśmiechu',
        desc: 'Szwajcarska ceramika szklana z dwukrzemianu litu, idealnie imitująca naturalne szkliwo.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Lumineers (Bez Szlifowania / No-Prep)',
        target: 'Pacjenci ceniący nienaruszone szkliwo bez wiercenia i znieczulenia',
        desc: 'Ultracienkie płytki (0,2 mm) naklejane bezpośrednio na ząb bez ingerencji w szkliwo.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Bonding Kompozytowy',
        target: 'Szybka i ekonomiczna korekta w trakcie jednej wizyty w klinice',
        desc: 'Bezpośrednie modelowanie żywicy kompozytowej bez konieczności szlifowania.',
        img: 'https://sohodent.com/doc/data1/composite-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Licówki Cyrkonowe',
        target: 'Pacjenci poszukujący maksymalnej wytrzymałości mechanicznej',
        desc: 'Wysoce estetyczny i biokompatybilny tlenek cyrkonu odporny na duże siły żucia.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Licówki Empress',
        target: 'Naturalne przejścia tonalne i głęboka opalescencja',
        desc: 'Tłoczona ceramika szklana o wyjątkowej głębi optycznej.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
    ],
  },
  pt: {
    heading: 'Encontre o Tratamento de Facetas Ideal para Você',
    subtitle:
      'Em dúvida sobre qual técnica de facetas escolher? Conheça nossas opções para descobrir a indicação e os benefícios de cada procedimento.',
    readMore: 'SAIBA MAIS',
    items: [
      {
        title: 'Facetas de Porcelana',
        target: 'Pacientes com manchas, fraturas ou espaços entre dentes',
        desc: 'Lâminas cerâmicas resistentes e altamente estéticas que não mancham com o tempo.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Facetas Ivoclar E-Max',
        target: 'Quem busca máxima translucidez e aspecto idêntico ao dente natural',
        desc: 'Dissilicato de lítio suíço com transmissão de luz perfeita para dentes anteriores.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Lentes de Contato (No-Prep)',
        target: 'Pacientes que não desejam nenhum desgaste dental ou anestesia',
        desc: 'Lentes ultrafinas de 0,2 mm coladas diretamente no esmalte dental intacto.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Facetas em Resina Composta (Bonding)',
        target: 'Correção rápida e acessível realizada em sessão única',
        desc: 'Esculpida diretamente no consultório pelo dentista sem desgaste dental invasivo.',
        img: 'https://sohodent.com/doc/data1/composite-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Facetas de Zircônia',
        target: 'Pacientes que necessitam de alta resistência à mastigação',
        desc: 'Zircônia biocompatível de alta dureza ideal para restaurações combinadas.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Facetas Empress',
        target: 'Transições suaves de cor e opalescência natural',
        desc: 'Cerâmica prensada com rica profundidade óptica.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
    ],
  },
  es: {
    heading: 'Encuentre el Tratamiento de Carillas Ideal para Usted',
    subtitle:
      '¿No está seguro de qué tipo de carilla se adapta mejor a sus objetivos? Descubra a continuación para quién está indicada cada técnica y sus ventajas.',
    readMore: 'MÁS INFORMACIÓN',
    items: [
      {
        title: 'Carillas de Porcelana',
        target: 'Pacientes con manchas, fracturas o diastemas',
        desc: 'Finas láminas cerámicas resistentes con brillo natural permanente que no se mancha.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Carillas Ivoclar E-Max',
        target: 'Pacientes que buscan máxima translucidez y naturalidad en dientes frontales',
        desc: 'Disilicato de litio suizo que reproduce a la perfección el paso de la luz en el esmalte.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Lumineers (Microcarillas Sin Tallado)',
        target: 'Pacientes que desean conservar el 100% de su esmalte sin tallado ni anestesia',
        desc: 'Carillas ultrafinas de 0.2 mm adheridas directamente sobre el esmalte intacto.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Carillas de Composite (Bonding)',
        target: 'Corrección rápida y económica en una sola sesión clínica',
        desc: 'Modelado directo con resina cosmética sin necesidad de desgaste dental.',
        img: 'https://sohodent.com/doc/data1/composite-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Carillas de Zirconio',
        target: 'Pacientes que requieren máxima resistencia a la fractura',
        desc: 'Zirconio biocompatible ideal para zonas con altas cargas masticatorias.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Carillas Empress',
        target: 'Degradados de color suaves y aspecto vivo',
        desc: 'Cerámica prensada con transiciones ópticas naturales.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
    ],
  },
  ru: {
    heading: 'Выберите подходящий вид виниров для вашей улыбки',
    subtitle:
      'Не уверены, какая технология виниров подойдет вам лучше всего? Изучите наши варианты, чтобы узнать показания и преимущества каждого метода.',
    readMore: 'ПОДРОБНЕЕ',
    items: [
      {
        title: 'Фарфоровые виниры',
        target: 'Пациенты с потемнением, сколами или щелями между зубами',
        desc: 'Тонкие керамические пластинки ручной работы с устойчивым естественным блеском.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Виниры Ivoclar E-Max',
        target: 'Максимальная эстетика и идеальная прозрачность передних зубов',
        desc: 'Швейцарская стеклокерамика из дисиликата лития, в точности повторяющая эмаль.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Люминиры (Без обточки / No-Prep)',
        target: 'Для тех, кто хочет сохранить 100% эмали без спиливания и уколов',
        desc: 'Ультратонкие пластинки (0,2 мм), фиксируемые на неповрежденную эмаль.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Композитные виниры (Бондинг)',
        target: 'Быстрое и экономичное преображение за одно посещение',
        desc: 'Прямая реставрация композитом в кресле стоматолога без обточки.',
        img: 'https://sohodent.com/doc/data1/composite-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Циркониевые виниры и коронки',
        target: 'Пациенты с повышенными жевательными нагрузками',
        desc: 'Биосовместимый диоксид циркония с повышенной прочностью.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
      {
        title: 'Виниры Empress',
        target: 'Мягкие цветовые переходы и естественная глубина',
        desc: 'Прессованная стеклокерамика с глубокой оптической естественностью.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/porcelain-veneers',
      },
    ],
  },
};

export default function TreatmentVeneerRightTreatmentAccordion() {
  const locale = useLocale();
  const currentData =
    VENEER_ACCORDION_DATA[locale] || VENEER_ACCORDION_DATA.en;

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index);
  };

  const activeItem = currentData.items[activeIndex] || currentData.items[0];

  return (
    <section
      aria-labelledby="veneer-right-treatment-heading"
      className={styles.section}
    >
      <div className={styles.container}>
        {/* Header Row: Left Big Title, Right Subtitle */}
        <div className={styles.headerRow}>
          <div>
            <h2
              id="veneer-right-treatment-heading"
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
