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
  "en": {
    "heading": "Find the Right Treatment for You",
    "subtitle": "Not sure which dental treatment suits your needs? Browse through our treatment options to see who each procedure is for and what it offers so you can make informed decisions about your dental care.",
    "readMore": "READ MORE",
    "items": [
      {
        "title": "Zirconium Crowns",
        "target": "Patients with high aesthetic concerns who want a natural-looking and durable crown",
        "desc": "It is metal-free, offers an appearance closest to a natural tooth. It is durable and frequently preferred for front teeth.",
        "img": "/treatments/accordion/zirconium-crowns.webp",
        "href": "/treatments/dental-crowns/zirconium-crowns"
      },
      {
        "title": "Metal Porcelain Crowns (PFM Crowns)",
        "target": "Patients looking for a more economical solution and durability in their back teeth",
        "desc": "The inner part is metal, the outer is porcelain. It is long-lasting but not as natural as zirconium aesthetically.",
        "img": "/treatments/accordion/metal-porcelain-crown.webp",
        "href": "/treatments/dental-crowns/pfm-crowns"
      },
      {
        "title": "E-max Crowns",
        "target": "Patients who want maximum aesthetics on their front teeth",
        "desc": "It is full ceramic, has high light translucency, and looks almost identical to a natural tooth.",
        "img": "/treatments/accordion/e-max-crown.webp",
        "href": "/treatments/dental-crowns/emax-crowns"
      },
      {
        "title": "Full Ceramic Crowns",
        "target": "Patients who want to avoid allergy risks and prefer a natural, metal-free option",
        "desc": "It is made entirely of ceramic, is gum-friendly, and is aesthetically top-tier.",
        "img": "/treatments/accordion/full-ceramic-crown.webp",
        "href": "/treatments/dental-crowns/full-ceramic"
      }
    ]
  },
  "tr": {
    "heading": "Sizin İçin En Doğru Tedaviyi Bulun",
    "subtitle": "Hangi diş tedavisinin ihtiyaçlarınıza uygun olduğundan emin değil misiniz? Tedavi seçeneklerimizi inceleyerek doğru kararı verin.",
    "readMore": "DETAYLI BİLGİ",
    "items": [
      {
        "title": "Zirkonyum Kron Kaplama",
        "target": "Yüksek estetik beklentisi olan, doğal ve dayanıklı bir kaplama isteyen hastalar",
        "desc": "Metalsizdir, doğal dişe en yakın görünümü sunar. Dayanıklıdır ve ön dişlerde sıklıkla tercih edilir.",
        "img": "/treatments/accordion/zirconium-crowns.webp",
        "href": "/treatments/dental-crowns/zirconium-crowns"
      },
      {
        "title": "Metal Destekli Porselen Kronlar (PFM)",
        "target": "Daha ekonomik çözüm ve arka dişlerde yüksek sağlamlık arayan hastalar",
        "desc": "İç kısmı metal, dış kısmı porselendir. Uzun ömürlüdür ancak estetik olarak zirkonyum kadar doğal değildir.",
        "img": "/treatments/accordion/metal-porcelain-crown.webp",
        "href": "/treatments/dental-crowns/pfm-crowns"
      },
      {
        "title": "E-max Kron Kaplama",
        "target": "Ön dişlerinde maksimum estetik ve ışık geçirgenliği isteyen hastalar",
        "desc": "Tam seramiktir, ışık geçirgenliği yüksektir ve doğal diş ile neredeyse birebir aynı görünür.",
        "img": "/treatments/accordion/e-max-crown.webp",
        "href": "/treatments/dental-crowns/emax-crowns"
      },
      {
        "title": "Tam Seramik Kronlar",
        "target": "Alerji riskinden kaçınmak isteyen ve metalsiz, doğal bir seçenek arayan hastalar",
        "desc": "Tamamen seramikten üretilir, diş eti dostudur ve estetik açıdan en üst seviyededir.",
        "img": "/treatments/accordion/full-ceramic-crown.webp",
        "href": "/treatments/dental-crowns/full-ceramic"
      }
    ]
  },
  "de": {
    "heading": "Finden Sie die passende Behandlung für sich",
    "subtitle": "Unsicher, welche Zahnbehandlung am besten zu Ihren Bedürfnissen passt? Vergleichen Sie unsere Optionen, um die beste Entscheidung für Ihre Zahngesundheit zu treffen.",
    "readMore": "MEHR ERFAHREN",
    "items": [
      {
        "title": "Zirkonkronen",
        "target": "Patienten mit hohen ästhetischen Ansprüchen, die eine natürliche und langlebige Krone wünschen",
        "desc": "Metallfrei, bietet das Aussehen, das einem natürlichen Zahn am nächsten kommt. Hochbelastbar und ideal für Front- und Seitenzähne.",
        "img": "/treatments/accordion/zirconium-crowns.webp",
        "href": "/treatments/dental-crowns/zirconium-crowns"
      },
      {
        "title": "Metallkeramikkronen (PFM)",
        "target": "Patienten, die eine wirtschaftliche Lösung und hohe Stabilität im Backenzahnbereich suchen",
        "desc": "Der innere Teil besteht aus Metall, der äußere aus Porzellan. Langlebig, jedoch ästhetisch nicht so transluzent wie Zirkon.",
        "img": "/treatments/accordion/metal-porcelain-crown.webp",
        "href": "/treatments/dental-crowns/pfm-crowns"
      },
      {
        "title": "E-max Kronen",
        "target": "Patienten, die maximale Ästhetik im sichtbaren Frontzahnbereich wünschen",
        "desc": "Vollkeramik mit höchster Lichtdurchlässigkeit – sieht echtem Zahnschmelz zum Verwechseln ähnlich.",
        "img": "/treatments/accordion/e-max-crown.webp",
        "href": "/treatments/dental-crowns/emax-crowns"
      },
      {
        "title": "Vollkeramikkronen",
        "target": "Patienten, die Allergierisiken vermeiden und eine metallfreie, natürliche Option bevorzugen",
        "desc": "Vollständig aus biokompatibler Keramik gefertigt, zahnfleischfreundlich und ästhetisch auf höchstem Niveau.",
        "img": "/treatments/accordion/full-ceramic-crown.webp",
        "href": "/treatments/dental-crowns/full-ceramic"
      }
    ]
  },
  "pl": {
    "heading": "Wybierz odpowiednie leczenie dla siebie",
    "subtitle": "Nie masz pewności, które leczenie stomatologiczne odpowiada Twoim potrzebom? Sprawdź nasze opcje, aby podjąć świadomą decyzję o swoim uśmiechu.",
    "readMore": "DOWIEDZ SIĘ WIĘCEJ",
    "items": [
      {
        "title": "Korony Cyrkonowe",
        "target": "Pacjenci o wysokich wymaganiach estetycznych, oczekujący naturalnego i trwałego efektu",
        "desc": "Bezmetalowe korony o wyglądzie najbardziej zbliżonym do naturalnego zęba. Wyjątkowo trwałe i często wybierane na zęby przednie.",
        "img": "/treatments/accordion/zirconium-crowns.webp",
        "href": "/treatments/dental-crowns/zirconium-crowns"
      },
      {
        "title": "Korony Porcelanowe na Podbudowie Metalowej (PFM)",
        "target": "Pacjenci poszukujący bardziej ekonomicznego rozwiązania i dużej wytrzymałości w odcinku bocznym",
        "desc": "Wnętrze wykonane z metalu, z zewnątrz licowane porcelaną. Bardzo trwałe, choć estetycznie mniej naturalne niż cyrkon.",
        "img": "/treatments/accordion/metal-porcelain-crown.webp",
        "href": "/treatments/dental-crowns/pfm-crowns"
      },
      {
        "title": "Korony E-max",
        "target": "Pacjenci pragnący maksymalnej estetyki i przezierności w strefie uśmiechu",
        "desc": "Pełna ceramika o wysokiej przepuszczalności światła, wyglądająca niemal identycznie jak naturalny ząb.",
        "img": "/treatments/accordion/e-max-crown.webp",
        "href": "/treatments/dental-crowns/emax-crowns"
      },
      {
        "title": "Korony Pełnoceramiczne",
        "target": "Pacjenci chcący uniknąć ryzyka alergii i preferujący bezmetalowe, naturalne rozwiązania",
        "desc": "Wykonane w całości z ceramiki, w 100% przyjazne dla dziąseł i reprezentujące najwyższą klasę estetyki.",
        "img": "/treatments/accordion/full-ceramic-crown.webp",
        "href": "/treatments/dental-crowns/full-ceramic"
      }
    ]
  },
  "pt": {
    "heading": "Encontre o Tratamento Ideal para Você",
    "subtitle": "Não tem certeza de qual tratamento dentário atende às suas necessidades? Explore nossas opções para tomar a melhor decisão para o seu sorriso.",
    "readMore": "SAIBA MAIS",
    "items": [
      {
        "title": "Coroas de Zircónia",
        "target": "Pacientes com altas exigências estéticas que buscam uma coroa natural e duradoura",
        "desc": "Livre de metal, oferece a aparência mais próxima do dente natural. É altamente durável e frequentemente indicada para dentes anteriores.",
        "img": "/treatments/accordion/zirconium-crowns.webp",
        "href": "/treatments/dental-crowns/zirconium-crowns"
      },
      {
        "title": "Coroas Metalocerâmicas (PFM)",
        "target": "Pacientes que procuram uma solução mais econômica e resistência para os dentes posteriores",
        "desc": "A estrutura interna é de metal e a externa de porcelana. Longa durabilidade, mas com estética menos translúcida que a zircônia.",
        "img": "/treatments/accordion/metal-porcelain-crown.webp",
        "href": "/treatments/dental-crowns/pfm-crowns"
      },
      {
        "title": "Coroas E-max",
        "target": "Pacientes que desejam máxima estética nos dentes da frente",
        "desc": "Totalmente cerâmica, com alta translucidez de luz e aparência praticamente idêntica ao esmalte dental natural.",
        "img": "/treatments/accordion/e-max-crown.webp",
        "href": "/treatments/dental-crowns/emax-crowns"
      },
      {
        "title": "Coroas Cerâmicas Puras",
        "target": "Pacientes que desejam evitar alergias e preferem uma opção biocompátivel sem metal",
        "desc": "Feita inteiramente de cerâmica, excelente integração gengival e padrão estético de alto nível.",
        "img": "/treatments/accordion/full-ceramic-crown.webp",
        "href": "/treatments/dental-crowns/full-ceramic"
      }
    ]
  },
  "es": {
    "heading": "Encuentre el Tratamiento Adecuado para Usted",
    "subtitle": "¿No está seguro de qué tratamiento dental se adapta a sus necesidades? Revise nuestras opciones para tomar una decisión informada sobre su salud dental.",
    "readMore": "MÁS INFORMACIÓN",
    "items": [
      {
        "title": "Coronas de Circonio",
        "target": "Pacientes con altas exigencias estéticas que buscan una corona de aspecto natural y duradera",
        "desc": "Sin metal, ofrece la apariencia más cercana a un diente natural. Es duradera y se prefiere frecuentemente para dientes frontales.",
        "img": "/treatments/accordion/zirconium-crowns.webp",
        "href": "/treatments/dental-crowns/zirconium-crowns"
      },
      {
        "title": "Coronas Metal-Porcelana (Coronas PFM)",
        "target": "Pacientes que buscan una solución más económica y durabilidad en dientes posteriores",
        "desc": "La parte interna es de metal y la externa de porcelana. Larga vida útil, aunque estéticamente no tan natural como el circonio.",
        "img": "/treatments/accordion/metal-porcelain-crown.webp",
        "href": "/treatments/dental-crowns/pfm-crowns"
      },
      {
        "title": "Coronas E-max",
        "target": "Pacientes que buscan la máxima estética en sus dientes frontales",
        "desc": "Completamente de cerámica, tiene alta translucidez y aspecto prácticamente idéntico al de un diente natural.",
        "img": "/treatments/accordion/e-max-crown.webp",
        "href": "/treatments/dental-crowns/emax-crowns"
      },
      {
        "title": "Coronas Totalmente Cerámicas",
        "target": "Pacientes que quieren evitar riesgos de alergias y prefieren una opción sin metal",
        "desc": "Fabricadas íntegramente en cerámica, cuidan la encía y ofrecen el más alto nivel estético.",
        "img": "/treatments/accordion/full-ceramic-crown.webp",
        "href": "/treatments/dental-crowns/full-ceramic"
      }
    ]
  },
  "ru": {
    "heading": "Найдите подходящее лечение для себя",
    "subtitle": "Не уверены, какое стоматологическое лечение подходит именно вам? Ознакомьтесь с вариантами, чтобы принять взвешенное решение о здоровье зубов.",
    "readMore": "ПОДРОБНЕЕ",
    "items": [
      {
        "title": "Циркониевые коронки",
        "target": "Пациенты с высокими эстетическими требованиями, желающие получить естественные и прочные коронки",
        "desc": "Не содержат металла, обеспечивают максимально естественный вид. Высокая прочность, идеально подходят для передних и жевательных зубов.",
        "img": "/treatments/accordion/zirconium-crowns.webp",
        "href": "/treatments/dental-crowns/zirconium-crowns"
      },
      {
        "title": "Металлокерамические коронки (PFM)",
        "target": "Пациенты, которые ищут экономичное решение и долговечность для жевательных зубов",
        "desc": "Внутренняя часть металлическая, внешняя — керамическая. Долговечны, но менее прозрачны, чем оксид циркония.",
        "img": "/treatments/accordion/metal-porcelain-crown.webp",
        "href": "/treatments/dental-crowns/pfm-crowns"
      },
      {
        "title": "Коронки E-max",
        "target": "Пациенты, желающие добиться максимальной эстетики на передних зубах",
        "desc": "Цельная керамика с высокой светопроницаемостью, практически неотличимая от натуральной эмали.",
        "img": "/treatments/accordion/e-max-crown.webp",
        "href": "/treatments/dental-crowns/emax-crowns"
      },
      {
        "title": "Цельнокерамические коронки",
        "target": "Пациенты, желающие исключить риск аллергии и выбирающие биосовместимый вариант без металла",
        "desc": "Полностью выполнены из керамики, бережно контактируют с десной и обеспечивают высший уровень эстетики.",
        "img": "/treatments/accordion/full-ceramic-crown.webp",
        "href": "/treatments/dental-crowns/full-ceramic"
      }
    ]
  }
};

export default function TreatmentCrownsRightTreatmentAccordion() {
  const locale = useLocale();
  const currentData = CROWN_ACCORDION_DATA[locale] || CROWN_ACCORDION_DATA.en;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  const activeItem =
    activeIndex >= 0 && activeIndex < currentData.items.length
      ? currentData.items[activeIndex]
      : currentData.items[0];

  return (
    <section aria-labelledby="right-treatment-heading" className={styles.section}>
      <div className={styles.container}>
        {/* Header Row: Left Big Title, Right Subtitle */}
        <div className={styles.headerRow}>
          <div>
            <h2 id="right-treatment-heading" className={styles.heading}>
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
                    className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
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
