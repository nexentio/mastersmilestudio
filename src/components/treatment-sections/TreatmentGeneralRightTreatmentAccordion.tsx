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

const GENERAL_ACCORDION_DATA: Record<
  string,
  {
    heading: string;
    subtitle: string;
    readMore: string;
    items: TreatmentItem[];
  }
> = {
  tr: {
    heading: 'İhtiyacınız Olan Genel Diş Tedavisi Hangisi?',
    subtitle:
      'Ağrılı dişlerin kurtarılmasından diş eti sağlığına, profesyonel temizlikten gömülü 20’lik diş çekimlerine kadar ağız sağlığınızı koruyan tüm klinik tedavileri keşfedin.',
    readMore: 'DETAYLI BİLGİ',
    items: [
      {
        title: 'Mikroskobik Kök Kanal Tedavisi (Endodonti)',
        target: 'Şiddetli diş ağrısı, gece zonklaması veya kök ucu apsesi olan hastalar',
        desc: 'Diş mikroskobu altında milimetrik kök temizliği ve 3D biyouyumlu termoplastik dolum ile dişi çekilmekten kurtarma.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/general-dentistry/root-canal-treatment',
      },
      {
        title: 'Ultrasonik Diş Taşı Temizliği & Air-Flow Cila',
        target: 'Diş eti kanaması, ağız kokusu ve çay/kahve lekesi yaşayan herkes',
        desc: 'Mineye zarar vermeden derin diş taşlarının ses dalgalarıyla temizlenmesi ve İsviçre Air-Flow ile lekesiz pürüzsüzlük.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/general-dentistry/teeth-cleaning-scaling',
      },
      {
        title: 'Estetik Nanokompozit Diş Dolguları',
        target: 'Çürük, kırık veya eski cıvalı siyah amalgam dolgusunu değiştirmek isteyenler',
        desc: 'Doğal diş renginde mikrofil nanokompozitlerle tek seansta tamamlanan kimyasal tutuculuklu sağlam dolgular.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/general-dentistry/dental-fillings',
      },
      {
        title: 'Atravmatik 20’lik Diş & Cerrahi Çekimler',
        target: 'Gömülü, yarı gömülü, ağrı ve apse yapan akıl dişleri olan hastalar',
        desc: '3D Tomografi kılavuzluğunda çene kemiğine ve sinirlere zarar vermeden gerçekleştirilen konforlu cerrahi çekim.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/general-dentistry/tooth-extractions',
      },
      {
        title: 'Periodontoloji & Lazerle Diş Eti Tedavisi',
        target: 'Diş eti çekilmesi, cep iltihabı (Periodontitis) ve sallanan dişleri olanlar',
        desc: 'Diyot lazer ve ultrasonik küretajla diş eti ceplerinin bakterilerden arındırılması ve doku sıkılaştırılması.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/general-dentistry/periodontology',
      },
      {
        title: 'Bruksizm (Diş Sıkma) Tedavisi & Gece Plağı',
        target: 'Sabahları çene ağrısı, baş ağrısı ve aşınmış diş kenarlarıyla uyananlar',
        desc: 'Kişiye özel laboratuvar koruyucu gece plağı ve masseter kas botoks uygulaması ile çene eklemi koruması.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/general-dentistry',
      },
    ],
  },
  en: {
    heading: 'Find the Right General Dental Care for You',
    subtitle:
      'From saving painful teeth with microscopic endodontics to gentle deep scaling, composite fillings, and surgical wisdom tooth extractions.',
    readMore: 'READ MORE',
    items: [
      {
        title: 'Microscopic Root Canal Therapy (Endodontics)',
        target: 'Patients with intense throbbing toothache, sensitivity, or periapical abscess',
        desc: 'Saving severely damaged teeth from extraction using high-magnification dental microscopes and 3D thermoplastic obturation.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/general-dentistry/root-canal-treatment',
      },
      {
        title: 'Ultrasonic Scaling & Swiss Air-Flow Deep Clean',
        target: 'Patients experiencing bleeding gums, persistent bad breath, or stubborn stains',
        desc: 'Gentle acoustic vibration removal of subgingival calculus without enamel scraping, finished with Swiss Air-Flow polishing.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/general-dentistry/teeth-cleaning-scaling',
      },
      {
        title: 'Aesthetic Nano-Hybrid Composite Fillings',
        target: 'Patients needing cavity treatment or replacing old toxic silver amalgam fillings',
        desc: 'Tooth-colored, biocompatible resin fillings chemically bonded to preserve maximum natural tooth structure.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/general-dentistry/dental-fillings',
      },
      {
        title: 'Atraumatic Wisdom Tooth & Surgical Extractions',
        target: 'Patients with impacted, painful, or misaligned wisdom teeth threatening adjacent molars',
        desc: '3D CBCT-guided minimally invasive surgical extraction preventing nerve trauma and promoting rapid tissue healing.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/general-dentistry/tooth-extractions',
      },
      {
        title: 'Periodontal Care & Laser Gum Therapy',
        target: 'Patients suffering from chronic gum inflammation, deep pockets, or loose teeth',
        desc: 'Deep ultrasonic scaling and soft-tissue diode laser decontamination to stop bone loss and restore healthy pink gums.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/general-dentistry/periodontology',
      },
      {
        title: 'TMJ Bruxism Therapy & Custom Night Guards',
        target: 'Patients experiencing morning jaw fatigue, teeth clenching, or enamel chipping',
        desc: 'Custom-milled protective night splints and Masseter muscle relaxation therapy to protect teeth and joints.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/general-dentistry',
      },
    ],
  },
  de: {
    heading: 'Finden Sie die passende zahnärztliche Behandlung',
    subtitle:
      'Vom Zahnerhalt durch mikroskopische Endodontie über schonende Prophylaxe bis hin zu ästhetischen Füllungen und Weisheitszahn-Operationen.',
    readMore: 'MEHR ERFAHREN',
    items: [
      {
        title: 'Mikroskopische Wurzelkanalbehandlung (Endodontie)',
        target: 'Patienten mit starken Zahnschmerzen, Entzündungen oder Wurzelspitzenabszessen',
        desc: 'Zahnerhalt unter dem Dentalmikroskop mit 3D thermoplastischer Wurzelkanalfüllung.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/general-dentistry/root-canal-treatment',
      },
      {
        title: 'Ultraschall-Zahnreinigung & Schweizer Air-Flow',
        target: 'Beseitigung von Zahnstein, Verfärbungen und Vorbeugung von Zahnfleischentzündungen',
        desc: 'Schonende Entfernung von Zahnstein und Belägen ohne Schmelzabrieb mit Air-Flow Politur.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/general-dentistry/teeth-cleaning-scaling',
      },
      {
        title: 'Ästhetische Nanokomposit-Zahnfüllungen',
        target: 'Kariesbehandlung oder Austausch alter quecksilberhaltiger Amalgamfüllungen',
        desc: 'Zahnfarbene, biokompatible Füllungen mit perfekter Randschlusssicherheit.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/general-dentistry/dental-fillings',
      },
      {
        title: 'Atraumatische Weisheitszahnentfernung',
        target: 'Retinierte, schmerzhafte oder schief liegende Weisheitszähne',
        desc: '3D CBCT-geführte schonende operative Entfernung ohne Nervtraumata.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/general-dentistry/tooth-extractions',
      },
      {
        title: 'Parodontologie & Laser-Zahnfleischtherapie',
        target: 'Zahnfleischbluten, Parodontitis und entzündete Zahnfleischtaschen',
        desc: 'Tiefenreinigung und Diodenlaser-Dekontamination für straffes, gesundes Zahnfleisch.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/general-dentistry/periodontology',
      },
      {
        title: 'Bruxismus-Therapie & Individuelle Aufbissschiene',
        target: 'Zähneknirschen in der Nacht, Kieferschmerzen und Zahnabrasion',
        desc: 'Präzisionsgefertigte Knirscherschienen zur Entlastung des Kiefergelenks.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/general-dentistry',
      },
    ],
  },
  pl: {
    heading: 'Wybierz odpowiednie leczenie stomatologiczne dla siebie',
    subtitle:
      'Od ratowania zębów pod mikroskopem po profesjonalną higienizację Air-Flow, wypełnienia kompozytowe i chirurgiczne usuwanie ósemek.',
    readMore: 'WIĘCEJ INFORMACJI',
    items: [
      {
        title: 'Leczenie Kanałowe pod Mikroskopem (Endodoncja)',
        target: 'Pacjenci z ostrym bólem zęba, nadwrażliwością lub ropniem okołowierzchołkowym',
        desc: 'Uratowanie zęba przed ekstrakcją dzięki mikroskopowej precyzji i termoplastycznemu wypełnieniu 3D.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/general-dentistry/root-canal-treatment',
      },
      {
        title: 'Skaling Ultradźwiękowy & Szwajcarski Air-Flow',
        target: 'Osoby z krwawieniem dziąseł, kamieniem nazębnym i osadami z kawy/herbaty',
        desc: 'Bezpieczne usuwanie kamienia poddziąsłowego ultradźwiękami bez rysowania szkliwa.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/general-dentistry/teeth-cleaning-scaling',
      },
      {
        title: 'Estetyczne Wypełnienia Nanokompozytowe',
        target: 'Leczenie próchnicy i bezpieczna wymiana szarych plomb amalgamatowych',
        desc: 'Wypełnienia w kolorze naturalnego zęba łączone chemicznie z twardymi tkankami zęba.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/general-dentistry/dental-fillings',
      },
      {
        title: 'Atraumatyczne Chirurgiczne Usuwanie Ósemek',
        target: 'Zatrzymane, stłoczone lub powodujące ból zęby mądrości',
        desc: 'Zabieg pod kontrolą tomografii 3D CBCT chroniący struktury nerwowe i kość wyrostka.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/general-dentistry/tooth-extractions',
      },
      {
        title: 'Periodontologia & Laserowe Leczenie Dziąseł',
        target: 'Choroby przyzębia, krwawienie, głębokie kieszonki i paradontoza',
        desc: 'Kiretaż poddziąsłowy i sterylizacja laserem diodowym zatrzymująca zanik kości.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/general-dentistry/periodontology',
      },
      {
        title: 'Leczenie Bruksizmu & Indywidualna Szyna Nocna',
        target: 'Zgrzytanie zębami w nocy, bóle stawów skroniowo-żuchwowych i starte szkliwo',
        desc: 'Dopasowane szyny relaksacyjne chroniące zęby przed ścieraniem i pękaniem.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/general-dentistry',
      },
    ],
  },
  pt: {
    heading: 'Encontre o Tratamento de Clínica Geral Ideal para Você',
    subtitle:
      'Desde o salvamento de dentes com endodontia microscópica até profilaxia Air-Flow, restaurações estéticas e extração de sisos.',
    readMore: 'SAIBA MAIS',
    items: [
      {
        title: 'Tratamento de Canal Microscópico (Endodontia)',
        target: 'Pacientes com dor de dente severa, sensibilidade aguda ou abscesso',
        desc: 'Preservação do dente natural com microscopia clínica e obturação 3D termoplástica.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/general-dentistry/root-canal-treatment',
      },
      {
        title: 'Raspagem Ultrassônica & Jato de Bicarbonato Air-Flow',
        target: 'Eliminação de tártaro, manchas de café/tabaco e prevenção de gengivite',
        desc: 'Limpeza profunda e suave com ondas ultrassônicas sem desgastar o esmalte dental.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/general-dentistry/teeth-cleaning-scaling',
      },
      {
        title: 'Restaurações Estéticas em Nanoresina Composta',
        target: 'Tratamento de cáries e substituição de restaurações antigas de amálgama',
        desc: 'Resinas de última geração na cor exata do dente com alta durabilidade mecânica.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/general-dentistry/dental-fillings',
      },
      {
        title: 'Extração Atraumática de Sisos e Cirurgia Oral',
        target: 'Sisos inclusos, inclinados ou inflamados com risco para os molares vizinhos',
        desc: 'Cirurgia guiada por tomografia 3D CBCT com preservação tecidual e cicatrização rápida.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/general-dentistry/tooth-extractions',
      },
      {
        title: 'Periodontia & Terapia Gengival a Laser',
        target: 'Sangramento gengival crônico, bolsas periodontais e mobilidade dental',
        desc: 'Curetagem subgengival e descontaminação com laser de diodo para recuperar gengivas firmes.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/general-dentistry/periodontology',
      },
      {
        title: 'Tratamento de Bruxismo & Placa de Mordida Noturna',
        target: 'Apertamento dental noturno, dores na mandíbula e desgaste das bordas dentais',
        desc: 'Placas miorrelaxantes personalizadas para proteger os dentes e articulações ATM.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/general-dentistry',
      },
    ],
  },
  es: {
    heading: 'Encuentre el Tratamiento Dental General Ideal para Usted',
    subtitle:
      'Desde salvar piezas dentales con endodoncia microscópica hasta limpieza Air-Flow, empastes estéticos y extracción de muelas del juicio.',
    readMore: 'MÁS INFORMACIÓN',
    items: [
      {
        title: 'Endodoncia Microscópica (Tratamiento de Conductos)',
        target: 'Pacientes con dolor dental agudo, sensibilidad o flemón en la raíz',
        desc: 'Salvamento de la pieza dental bajo microscopio quirúrgico con sellado 3D termoplástico.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/general-dentistry/root-canal-treatment',
      },
      {
        title: 'Limpieza Dental por Ultrasonidos & Air-Flow Suizo',
        target: 'Eliminación de sarro, manchas de tabaco/café y sangrado de encías',
        desc: 'Limpieza suave mediante ondas acústicas y pulido Air-Flow sin dañar el esmalte dental.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/general-dentistry/teeth-cleaning-scaling',
      },
      {
        title: 'Empastes Dentales de Nanocomposite Estético',
        target: 'Tratamiento de caries y sustitución de empastes oscuros de amalgama de plata',
        desc: 'Resinas del color natural del diente con adhesión química directa y máxima resistencia.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/general-dentistry/dental-fillings',
      },
      {
        title: 'Extracción Atraumática de Muelas del Juicio',
        target: 'Muelas del juicio impactadas, dolorosas o con malposición',
        desc: 'Cirugía guiada por TAC 3D CBCT para proteger el nervio y facilitar una rápida recuperación.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/general-dentistry/tooth-extractions',
      },
      {
        title: 'Periodoncia & Tratamiento de Encías con Láser',
        target: 'Sangrado de encías, bolsas periodontales profundas y movilidad dental',
        desc: 'Curetaje por ultrasonidos y desinfección con láser de diodo para frenar la periodontitis.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/general-dentistry/periodontology',
      },
      {
        title: 'Tratamiento del Bruxismo & Férula de Descarga',
        target: 'Apretamiento nocturno de dientes, dolor de mandíbula y desgaste del esmalte',
        desc: 'Férulas rígidas a medida para proteger la dentición y la articulación mandibular (ATM).',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/general-dentistry',
      },
    ],
  },
  ru: {
    heading: 'Выберите необходимое терапевтическое лечение зубов',
    subtitle:
      'От спасения разрушенных зубов под микроскопом до глубокой гигиены Air-Flow, эстетических пломб и удаления зубов мудрости.',
    readMore: 'ПОДРОБНЕЕ',
    items: [
      {
        title: 'Лечение каналов под микроскопом (Эндодонтия)',
        target: 'Пациенты с острой зубной болью, пульпитом или периодонтитом',
        desc: 'Спасение зуба от удаления с помощью дентального микроскопа и трехмерной 3D обтурации.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/general-dentistry/root-canal-treatment',
      },
      {
        title: 'Ультразвуковая чистка зубов & Швейцарский Air-Flow',
        target: 'Удаление зубного камня, налета от чая/кофе и устранение кровоточивости десен',
        desc: 'Бережное удаление поддесневых отложений ультразвуком без повреждения эмали.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/general-dentistry/teeth-cleaning-scaling',
      },
      {
        title: 'Эстетические нанокомпозитные пломбы',
        target: 'Лечение кариеса и замена старых темных амальгамовых пломб',
        desc: 'Биосовместимые светоотверждаемые нанокомпозиты точно под цвет натуральной эмали.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/general-dentistry/dental-fillings',
      },
      {
        title: 'Атравматичное удаление зубов мудрости',
        target: 'Ретинированные, дистопированные или воспаленные восьмерки',
        desc: 'Миниинвазивное удаление под контролем 3D томографии с сохранением нервов и кости.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/general-dentistry/tooth-extractions',
      },
      {
        title: 'Пародонтология & Лазерное лечение десен',
        target: 'Кровоточивость десен, глубокие пародонтальные карманы и пародонтит',
        desc: 'Ультразвуковой кюретаж и стерилизация карманов диодным лазером для укрепления десен.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/general-dentistry/periodontology',
      },
      {
        title: 'Лечение бруксизма & Защитные ночные капы',
        target: 'Ночное сжатие зубов, стираемость эмали и боли в челюстном суставе',
        desc: 'Индивидуальные релаксационные капы для защиты зубов и суставов ВНЧС.',
        img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
        href: '/treatments/general-dentistry',
      },
    ],
  },
};

export default function TreatmentGeneralRightTreatmentAccordion() {
  const locale = useLocale();
  const currentData =
    GENERAL_ACCORDION_DATA[locale] || GENERAL_ACCORDION_DATA.en;

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index);
  };

  const activeItem = currentData.items[activeIndex] || currentData.items[0];

  return (
    <section
      aria-labelledby="general-right-treatment-heading"
      className={styles.section}
    >
      <div className={styles.container}>
        {/* Header Row: Left Big Title, Right Subtitle */}
        <div className={styles.headerRow}>
          <div>
            <h2
              id="general-right-treatment-heading"
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
