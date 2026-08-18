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

const COSMETIC_ACCORDION_DATA: Record<
  string,
  {
    heading: string;
    subtitle: string;
    readMore: string;
    items: TreatmentItem[];
  }
> = {
  tr: {
    heading: 'Sizin İçin En Doğru Gülüş Tasarımı Hangisi?',
    subtitle:
      'Yüz hatlarınıza, dudak yapınıza ve estetik beklentilerinize en uygun estetik diş hekimliği tedavisini keşfedin.',
    readMore: 'DETAYLI BİLGİ',
    items: [
      {
        title: 'Hollywood Smile Gülüş Tasarımı',
        target: 'Komple estetik dönüşüm ve kusursuz beyaz simetri arayanlar',
        desc: '16-20 adet Ivoclar E-Max lamina veya zirkonyum ile yüzün altın oranına göre kişiselleştirilmiş tam gülüş tasarımı.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/hollywood-smile',
      },
      {
        title: '3D Dijital Gülüş Tasarımı & Mock-Up',
        target: 'Tedaviye başlamadan önce yeni gülüşünü aynada canlı görmek isteyenler',
        desc: 'Yapay zeka ve 3Shape tarayıcılarla diş kesimi yapılmadan önce canlı provası yapılan dijital gülüş planlaması.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/smile-makeover',
      },
      {
        title: 'Lazerle Diş Beyazlatma (Philips Zoom)',
        target: 'Doğal dişlerinin rengini 6-8 tona kadar açmak isteyenler',
        desc: 'Tek bir 45 dakikalık klinikte lazer seansıyla çay, kahve ve sigara lekelerine son veren güvenli beyazlatma.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/cosmetic-dentistry/teeth-whitening',
      },
      {
        title: 'Ayrık Diş (Diastema) Kapatma',
        target: 'Ön dişler arasındaki boşlukları diş kesimi olmadan kapatmak isteyenler',
        desc: 'Kompozit bonding veya ultra ince E-Max yaprak porselenlerle tek seansta boşluksuz kusursuz hizalama.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/cosmetic-dentistry/diastema-closure',
      },
      {
        title: 'Pembe Estetik & Gummy Smile Tedavisi',
        target: 'Gülerken diş etleri fazla görünen veya seviye farkı olan hastalar',
        desc: 'Kansız, dikişsiz diyot lazer ile 15 dakikada mükemmel simetrik diş eti hattı oluşturma.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/gum-contouring',
      },
      {
        title: 'Kompozit Bonding & Estetik Dolgu',
        target: 'Küçük kırıkları, çatlakları ve aşınmaları hemen onarmak isteyenler',
        desc: 'Doğal diş renginde mikrofil kompozitlerle aynı gün tamamlanan ekonomik ve koruyucu estetik dokunuş.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry',
      },
    ],
  },
  en: {
    heading: 'Find the Right Cosmetic Smile Solution for You',
    subtitle:
      'Explore which cosmetic dentistry treatment best enhances your facial features, smile arc, and aesthetic goals.',
    readMore: 'READ MORE',
    items: [
      {
        title: 'Hollywood Smile Makeover',
        target: 'Patients seeking a complete radiant transformation and flawless white symmetry',
        desc: '16 to 20 Swiss Ivoclar E-Max veneers or crowns customized to your facial Golden Ratio and lip dynamics.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/hollywood-smile',
      },
      {
        title: '3D Digital Smile Design & Mock-Up',
        target: 'Patients wanting to preview and test their new smile live before treatment starts',
        desc: 'AI-guided digital smile planning with live in-mouth physical mock-up try-in before any tooth preparation.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/smile-makeover',
      },
      {
        title: 'Laser Teeth Whitening (Philips Zoom)',
        target: 'Patients looking to brighten natural enamel by 6 to 8 shades in 45 minutes',
        desc: 'In-clinic light-activated whitening erasing years of deep coffee, tea, and tobacco discoloration safely.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/cosmetic-dentistry/teeth-whitening',
      },
      {
        title: 'Diastema Gap Closure',
        target: 'Patients with gaps between front teeth wanting seamless correction',
        desc: 'Non-invasive composite bonding or ultra-thin E-Max porcelain laminates closing gaps with zero tooth reduction.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/cosmetic-dentistry/diastema-closure',
      },
      {
        title: 'Laser Gum Contouring (Gummy Smile)',
        target: 'Patients with excessive gum display when smiling or uneven gingival margins',
        desc: 'Painless 15-minute soft-tissue diode laser gingivoplasty creating balanced, symmetrical pink aesthetics.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/gum-contouring',
      },
      {
        title: 'Composite Bonding & Edge Sculpting',
        target: 'Patients needing same-day repair for chipped, worn, or uneven teeth',
        desc: 'Sculpted nanofill composite resins matching your natural enamel translucency in a single appointment.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry',
      },
    ],
  },
  de: {
    heading: 'Finden Sie Ihr perfektes Smile Design',
    subtitle:
      'Entdecken Sie, welche Behandlung der ästhetischen Zahnheilkunde Ihre Gesichtszüge und Ihr Lächeln optimal hervorhebt.',
    readMore: 'MEHR ERFAHREN',
    items: [
      {
        title: 'Hollywood Smile Makeover',
        target: 'Komplette ästhetische Verwandlung und strahlendes Lächeln',
        desc: '16 bis 20 Ivoclar E-Max Veneers maßgeschneidert nach dem Goldenen Schnitt Ihres Gesichts.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/hollywood-smile',
      },
      {
        title: '3D Digital Smile Design & Mock-Up',
        target: 'Live-Vorschau des Ergebnisses vor Beginn der Behandlung',
        desc: 'Digitale 3D-Simulation und direkte Anprobe im Mund vor jedem Eingriff.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/smile-makeover',
      },
      {
        title: 'Laser-Zahnaufhellung (Philips Zoom)',
        target: 'Bis zu 8 Stufen weißere Zähne in nur 45 Minuten',
        desc: 'Klinisches Bleaching für strahlend weiße Zähne ohne Schmelzschäden.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/cosmetic-dentistry/teeth-whitening',
      },
      {
        title: 'Diastema-Schluss (Zahnlücken)',
        target: 'Schließen von Frontzahnlücken ohne Beschleifen',
        desc: 'Minimalinvasives Komposit-Bonding oder hauchdünne E-Max Veneers.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/cosmetic-dentistry/diastema-closure',
      },
      {
        title: 'Gummy Smile Laser-Korrektur',
        target: 'Harmonischer Zahnfleischverlauf beim Lächeln',
        desc: 'Schmerzfreie 15-Minuten Laserbehandlung ohne Blutung und Nähte.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/gum-contouring',
      },
      {
        title: 'Komposit-Bonding & Kantenreparatur',
        target: 'Sofortige Korrektur kleiner Absplitterungen und Kanten',
        desc: 'Direkte ästhetische Modellation in einer einzigen Sitzung.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry',
      },
    ],
  },
  pl: {
    heading: 'Wybierz idealne rozwiązanie dla swojego uśmiechu',
    subtitle:
      'Sprawdź, jakie zabiegi stomatologii estetycznej najlepiej podkreślą Twoją urodę i przywrócą idealną biel zębów.',
    readMore: 'WIĘCEJ INFORMACJI',
    items: [
      {
        title: 'Metamorfoza Hollywood Smile',
        target: 'Osoby pragnące całkowitej przemiany i idealnej bieli',
        desc: '16–20 licówek Ivoclar E-Max dopasowanych do złotej proporcji twarzy i linii warg.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/hollywood-smile',
      },
      {
        title: 'Cyfrowe Projektowanie Uśmiechu 3D DSD',
        target: 'Ocena efektu końcowego w lustrze przed zabiegiem',
        desc: 'Projektowanie 3D z przymiarką Mock-Up na własnych zębach przed szlifowaniem.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/smile-makeover',
      },
      {
        title: 'Wybielanie Laserowe Philips Zoom',
        target: 'Rozjaśnienie zębów o 6–8 tonów w 45 minut',
        desc: 'Bezpieczne gabinetowe wybielanie usuwające wieloletnie przebarwienia.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/cosmetic-dentistry/teeth-whitening',
      },
      {
        title: 'Zamknięcie Diastemy (Przerw)',
        target: 'Likwidacja przerw między zębami bez szlifowania',
        desc: 'Bonding estetyczny lub ultracienkie licówki E-Max zamykające szpary w 1 wizycie.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/cosmetic-dentistry/diastema-closure',
      },
      {
        title: 'Laserowa Plastyka Dziąseł (Gummy Smile)',
        target: 'Korekta uśmiechu dziąsłowego i nierównej linii dziąseł',
        desc: 'Bezbolesna korekta laserem diodowym w 15 minut bez krwi i szwów.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/gum-contouring',
      },
      {
        title: 'Bonding Kompozytowy i Odbudowa Krawędzi',
        target: 'Szybka naprawa ukruszonych i startych zębów',
        desc: 'Bezpośrednia warstwowa odbudowa kompozytem na jednej wizycie.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry',
      },
    ],
  },
  pt: {
    heading: 'Encontre o Tratamento Estético Ideal para Você',
    subtitle:
      'Descubra qual procedimento de odontologia estética valoriza perfeitamente suas feições e linha de sorriso.',
    readMore: 'SAIBA MAIS',
    items: [
      {
        title: 'Hollywood Smile Makeover',
        target: 'Transformação estética total e brancura impecável',
        desc: '16 a 20 facetas Ivoclar E-Max planejadas de acordo com a proporção áurea facial.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/hollywood-smile',
      },
      {
        title: 'Design Digital 3D do Sorriso & Mock-Up',
        target: 'Visualização ao vivo do resultado antes do início do preparo',
        desc: 'Simulação 3D com teste físico em boca para aprovação direta no espelho.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/smile-makeover',
      },
      {
        title: 'Clareamento Dental a Laser (Philips Zoom)',
        target: 'Dentes até 8 tons mais claros em apenas 45 minutos',
        desc: 'Tratamento rápido e seguro em consultório sem danificar o esmalte.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/cosmetic-dentistry/teeth-whitening',
      },
      {
        title: 'Fechamento de Diastemas (Espaços)',
        target: 'Fechamento de separações entre dentes sem desgaste',
        desc: 'Bonding em resina ou facetas ultrafinas E-Max em sessão única.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/cosmetic-dentistry/diastema-closure',
      },
      {
        title: 'Correção de Sorriso Gengival a Laser',
        target: 'Harmonização de gengiva aparente ao sorrir',
        desc: 'Plástica gengival a laser indolor em 15 minutos sem sangramento.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/gum-contouring',
      },
      {
        title: 'Bonding em Resina Composta',
        target: 'Reparo imediato de pequenas fraturas e desgastes',
        desc: 'Restauração artística direta com resinas de alta estética no mesmo dia.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry',
      },
    ],
  },
  es: {
    heading: 'Encuentre el Tratamiento Estético Ideal para Usted',
    subtitle:
      'Descubra qué tratamiento de estética dental resalta mejor sus rasgos faciales y la línea de su sonrisa.',
    readMore: 'MÁS INFORMACIÓN',
    items: [
      {
        title: 'Diseño de Sonrisa Hollywood Smile',
        target: 'Transformación estética total y blancura deslumbrante',
        desc: '16 a 20 carillas Ivoclar E-Max diseñadas según la proporción áurea facial.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/hollywood-smile',
      },
      {
        title: 'Diseño Digital de Sonrisa 3D & Mock-Up',
        target: 'Ver y probar el resultado en vivo antes de iniciar',
        desc: 'Planificación 3D y prueba física sobre sus dientes antes de cualquier tallado.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/smile-makeover',
      },
      {
        title: 'Blanqueamiento Dental Láser (Philips Zoom)',
        target: 'Dientes hasta 8 tonos más blancos en 45 minutos',
        desc: 'Eliminación segura de manchas de café, té y tabaco en una sola sesión clínica.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/cosmetic-dentistry/teeth-whitening',
      },
      {
        title: 'Cierre de Diastemas (Separaciones)',
        target: 'Cierre de espacios entre dientes frontales sin tallado',
        desc: 'Composite bonding o microcarillas E-Max para una alineación perfecta.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/cosmetic-dentistry/diastema-closure',
      },
      {
        title: 'Gingivoplastia Láser (Sonrisa Gingival)',
        target: 'Encías excesivas o asimétricas al sonreír',
        desc: 'Contorneado gingival indoloro con láser de diodo en 15 minutos sin puntos.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/gum-contouring',
      },
      {
        title: 'Composite Bonding Estético',
        target: 'Reparación en el mismo día de bordes astillados y desgastes',
        desc: 'Modelado artístico directo con resinas nanocompuestas en una sola cita.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry',
      },
    ],
  },
  ru: {
    heading: 'Выберите подходящее преображение улыбки',
    subtitle:
      'Узнайте, какие процедуры эстетической стоматологии наилучшим образом подчеркнут гармонию вашего лица и улыбки.',
    readMore: 'ПОДРОБНЕЕ',
    items: [
      {
        title: 'Преображение Hollywood Smile',
        target: 'Для желающих получить идеальную белизну и безупречную симметрию',
        desc: '16–20 виниров Ivoclar E-Max, спроектированных по правилам золотого сечения лица.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/hollywood-smile',
      },
      {
        title: '3D Цифровой дизайн улыбки & Mock-Up',
        target: 'Примерка будущей формы зубов прямо во рту до начала лечения',
        desc: 'Компьютерное моделирование и живая примерка временных виниров на собственных зубах.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/smile-makeover',
      },
      {
        title: 'Лазерное отбеливание (Philips Zoom)',
        target: 'Осветление зубов на 6–8 тонов за 45 минут',
        desc: 'Безопасное клиническое отбеливание, устраняющее многолетний налет от кофе и табака.',
        img: 'https://sohodent.com/doc/data1/lumineer-copy.webp',
        href: '/treatments/cosmetic-dentistry/teeth-whitening',
      },
      {
        title: 'Закрытие диастем (межзубных щелей)',
        target: 'Устранение щелей между зубами без обточки эмали',
        desc: 'Композитный бондинг или ультратонкие виниры E-Max за 1 визит.',
        img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
        href: '/treatments/cosmetic-dentistry/diastema-closure',
      },
      {
        title: 'Лазерная коррекция десны (Gummy Smile)',
        target: 'Устранение чрезмерного обнажения десен при улыбке',
        desc: 'Бескровная пластика диодным лазером за 15 минут без швов и боли.',
        img: 'https://sohodent.com/doc/data1/porcelain-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry/gum-contouring',
      },
      {
        title: 'Художественный композитный бондинг',
        target: 'Быстрое восстановление сколов и неровных режущих краев',
        desc: 'Прямая послойная реставрация нанокомпозитом в день визита.',
        img: 'https://sohodent.com/doc/data1/e-max-laminate-copy.webp',
        href: '/treatments/cosmetic-dentistry',
      },
    ],
  },
};

export default function TreatmentCosmeticRightTreatmentAccordion() {
  const locale = useLocale();
  const currentData =
    COSMETIC_ACCORDION_DATA[locale] || COSMETIC_ACCORDION_DATA.en;

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index);
  };

  const activeItem = currentData.items[activeIndex] || currentData.items[0];

  return (
    <section
      aria-labelledby="cosmetic-right-treatment-heading"
      className={styles.section}
    >
      <div className={styles.container}>
        {/* Header Row: Left Big Title, Right Subtitle */}
        <div className={styles.headerRow}>
          <div>
            <h2
              id="cosmetic-right-treatment-heading"
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
