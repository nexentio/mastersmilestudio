'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './CosmeticDentistryAccordionSection.module.css';

interface TreatmentItem {
  title: string;
  target: string;
  desc: string;
  img: string;
  href: string;
}

interface AccordionDictionary {
  heading: string;
  subtitle: string;
  readMore: string;
  items: TreatmentItem[];
}

const COSMETIC_ACCORDION_DATA: Record<string, AccordionDictionary> = {
  en: {
    heading: 'Find the Right Cosmetic Treatment for You',
    subtitle:
      'Not sure which aesthetic dental treatment suits your needs? Browse through our cosmetic options to see who each procedure is for and what it offers so you can make informed decisions about your smile makeover.',
    readMore: 'READ MORE',
    items: [
      {
        title: 'Hollywood Smile Design',
        target: 'Patients seeking complete aesthetic transformation and radiant symmetry',
        desc: '16–20 bespoke Swiss Ivoclar E-Max laminates or crowns tailored to your facial Golden Ratio for a dazzling celebrity smile.',
        img: '/treatments/accordion/e-max-laminate.webp',
        href: '/treatments/smile-makeover',
      },
      {
        title: '3D Digital Smile Design (Mock-Up)',
        target: 'Patients who want to preview their future smile in person before treatment starts',
        desc: 'Precision optical 3Shape scanning and live in-mouth mock-up try-in so you see and approve the exact result with zero risk.',
        img: '/treatments/accordion/porcelain-laminate.webp',
        href: '/treatments/smile-makeover',
      },
      {
        title: 'In-Clinic Laser Teeth Whitening (Philips Zoom)',
        target: 'Patients looking to brighten natural enamel by 6 to 8 shades in one hour',
        desc: 'Professional light-activated bleaching that safely removes deep tea, coffee, and tobacco stains without damaging enamel.',
        img: '/treatments/accordion/lumineers.webp',
        href: '/treatments/teeth-whitening',
      },
      {
        title: 'Diastema Closure & Composite Bonding',
        target: 'Patients with gaps between teeth seeking non-invasive single-visit correction',
        desc: 'High-aesthetic nanohybrid composite bonding sculpted directly onto teeth with zero enamel filing needed.',
        img: '/treatments/accordion/zirconium-laminate.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Pink Aesthetics & Laser Gum Contouring',
        target: 'Patients with excessive gum display ("Gummy Smile") or uneven gumlines',
        desc: 'Painless soft-tissue diode laser gingivoplasty that harmonizes gum margins and elongates short-looking teeth in minutes.',
        img: '/treatments/accordion/allon4-aesthetic.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Porcelain E-Max Veneers & Laminates',
        target: 'Patients with discolored, worn, chipped, or slightly misaligned front teeth',
        desc: 'Ultra-thin (0.3–0.5 mm) lithium disilicate shells bonded to the front surface for lifelike translucency and 15+ year durability.',
        img: '/treatments/accordion/allon6-aesthetic.webp',
        href: '/treatments/dental-veneers',
      },
      {
        title: 'CAD/CAM Ceramic Inlays & Onlays',
        target: 'Patients with large cavities who want to avoid full crown coverage',
        desc: 'Custom-milled solid ceramic puzzle pieces that restore structural strength and natural anatomy to damaged molars.',
        img: '/treatments/accordion/inlay-onlay-ceramic.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Full Ceramic Zirconia Crowns',
        target: 'Patients with severely broken or root-treated teeth needing high-strength beauty',
        desc: '1200+ MPa translucent multilayer zirconia crowns offering indestructible chewing power and zero dark gumlines.',
        img: '/treatments/accordion/sinus-lifting.webp',
        href: '/treatments/dental-crowns',
      },
    ],
  },
  tr: {
    heading: 'Sizin İçin En Doğru Estetik Tedaviyi Keşfedin',
    subtitle:
      'Hangi estetik diş tedavisinin ihtiyaçlarınıza uygun olduğundan emin değil misiniz? Gülüş tasarımınız hakkında bilinçli kararlar verebilmeniz için tedavi seçeneklerimizi inceleyin.',
    readMore: 'DETAYLI BİLGİ',
    items: [
      {
        title: 'Hollywood Smile Gülüş Tasarımı',
        target: 'Komple estetik dönüşüm ve kusursuz beyaz simetri arayanlar',
        desc: '16-20 adet Ivoclar E-Max lamina veya zirkonyum ile yüzün altın oranına göre kişiselleştirilmiş tam gülüş tasarımı.',
        img: '/treatments/accordion/e-max-laminate.webp',
        href: '/treatments/smile-makeover',
      },
      {
        title: '3D Dijital Gülüş Tasarımı & Mock-Up',
        target: 'Tedaviye başlamadan önce yeni gülüşünü aynada canlı görmek isteyenler',
        desc: 'Yapay zeka ve 3Shape tarayıcılarla diş kesimi yapılmadan önce canlı provası yapılan dijital gülüş planlaması.',
        img: '/treatments/accordion/porcelain-laminate.webp',
        href: '/treatments/smile-makeover',
      },
      {
        title: 'Lazerle Diş Beyazlatma (Philips Zoom)',
        target: 'Doğal dişlerinin rengini 6-8 tona kadar açmak isteyenler',
        desc: 'Tek bir 45 dakikalık klinikte lazer seansıyla çay, kahve ve sigara lekelerine son veren güvenli beyazlatma.',
        img: '/treatments/accordion/lumineers.webp',
        href: '/treatments/teeth-whitening',
      },
      {
        title: 'Ayrık Diş (Diastema) Kapatma & Bonding',
        target: 'Ön dişler arasındaki boşlukları diş kesimi olmadan kapatmak isteyenler',
        desc: 'Kompozit bonding veya ultra ince E-Max yaprak porselenlerle tek seansta boşluksuz kusursuz hizalama.',
        img: '/treatments/accordion/zirconium-laminate.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Pembe Estetik & Gummy Smile Tedavisi',
        target: 'Güldüğünde diş etleri fazla görünen veya asimetrik diş eti çizgisine sahip olanlar',
        desc: 'Ağrısız diyot lazer ile diş etlerinin yeniden şekillendirilmesi ve diş boylarının ideal orana getirilmesi.',
        img: '/treatments/accordion/allon4-aesthetic.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Porselen E-Max Lamina Kaplamalar',
        target: 'Kalıcı beyazlık, doğal ışık geçirgenliği ve minimum diş aşındırması isteyenler',
        desc: 'Sadece 0.3-0.5 mm inceliğinde İsviçre lityum disilikat cam seramiklerle doğal mineden ayırt edilemeyen estetik.',
        img: '/treatments/accordion/allon6-aesthetic.webp',
        href: '/treatments/dental-veneers',
      },
      {
        title: 'Seramik İnley & Onley Dolgular',
        target: 'Geniş dolgulu veya kırık arka dişlerini kaplama yaptırmadan kurtarmak isteyenler',
        desc: 'CAD/CAM ile mikron hassasiyetinde üretilen monolitik seramik parçalarla dişin orijinal anatomisini koruma.',
        img: '/treatments/accordion/inlay-onlay-ceramic.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Full Seramik Zirkonyum Kronlar',
        target: 'Yüksek çiğneme kuvvetine dayanıklı ve metal desteksiz estetik kaplama arayanlar',
        desc: '1200+ MPa kırılma dayanımına sahip çok katmanlı translusent zirkonyum ile diş eti kenarında koyu çizgi oluşturmayan kaplamalar.',
        img: '/treatments/accordion/sinus-lifting.webp',
        href: '/treatments/dental-crowns',
      },
    ],
  },
  de: {
    heading: 'Finden Sie die passende ästhetische Zahnbehandlung',
    subtitle:
      'Entdecken Sie unsere kosmetischen Behandlungsoptionen für Ihr strahlendes Hollywood Lächeln in Antalya.',
    readMore: 'MEHR ERFAHREN',
    items: [
      {
        title: 'Hollywood Smile Design',
        target: 'Patienten, die eine vollständige ästhetische Verwandlung wünschen',
        desc: '16–20 maßgefertigte Ivoclar E-Max Veneers abgestimmt auf den Goldenen Schnitt Ihres Gesichts.',
        img: '/treatments/accordion/e-max-laminate.webp',
        href: '/treatments/smile-makeover',
      },
      {
        title: '3D Digital Smile Design & Mock-Up',
        target: 'Patienten, die ihr neues Lächeln vor Behandlungsbeginn sehen möchten',
        desc: 'Präziser optischer 3Shape-Scan und Live-Einprobe im Mund ohne jedes Risiko.',
        img: '/treatments/accordion/porcelain-laminate.webp',
        href: '/treatments/smile-makeover',
      },
      {
        title: 'Laser-Zahnaufhellung (Philips Zoom)',
        target: 'Patienten, die ihre Zähne um 6 bis 8 Nuancen aufhellen möchten',
        desc: 'Schonendes klinisches Bleaching in nur 45 Minuten ohne Zahnschmelzschäden.',
        img: '/treatments/accordion/lumineers.webp',
        href: '/treatments/teeth-whitening',
      },
      {
        title: 'Diastemaverschluss & Composite Bonding',
        target: 'Patienten mit Zahnlücken, die eine sofortige Korrektur ohne Schleifen wünschen',
        desc: 'Hochästhetisches Composite-Bonding in einer einzigen Sitzung.',
        img: '/treatments/accordion/zirconium-laminate.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Laser-Zahnfleischkorrektur (Gummy Smile)',
        target: 'Patienten mit sichtbarem Zahnfleischlächeln',
        desc: 'Schonende Diodenlaser-Gingivoplastik zur Harmonisierung des Zahnfleischrandes.',
        img: '/treatments/accordion/allon4-aesthetic.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'E-Max Porzellan-Veneers',
        target: 'Patienten mit verfärbten oder abgenutzten Zähnen',
        desc: 'Hauchdünne Glaskeramik-Schalen für natürliche Transluzenz und dauerhafte Brillanz.',
        img: '/treatments/accordion/allon6-aesthetic.webp',
        href: '/treatments/dental-veneers',
      },
      {
        title: 'Keramische Inlays & Onlays',
        target: 'Patienten mit stark beschädigten Backenzähnen',
        desc: 'CAD/CAM-gefräste Präzisionskeramiken zur substanzschonenden Restauration.',
        img: '/treatments/accordion/inlay-onlay-ceramic.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Vollkeramische Zirkonkronen',
        target: 'Patienten, die maximale Stabilität ohne Metallränder suchen',
        desc: '1200+ MPa hochfeste Zirkonkronen für perfekte Kaukraft und Ästhetik.',
        img: '/treatments/accordion/sinus-lifting.webp',
        href: '/treatments/dental-crowns',
      },
    ],
  },
  pl: {
    heading: 'Znajdź odpowiedni zabieg stomatologii estetycznej',
    subtitle:
      'Wybierz najlepsze rozwiązanie dla swojego nowego uśmiechu w Master Smile Studio w Antalyi.',
    readMore: 'WIĘCEJ INFORMACJI',
    items: [
      {
        title: 'Projektowanie Uśmiechu Hollywood Smile',
        target: 'Dla pacjentów pragnących spektakularnej metamorfozy uśmiechu',
        desc: '16–20 licówek E-Max lub koron cyrkonowych dobranych do złotych proporcji twarzy.',
        img: '/treatments/accordion/e-max-laminate.webp',
        href: '/treatments/smile-makeover',
      },
      {
        title: '3D Digital Smile Design & Mock-Up',
        target: 'Dla osób chcących zobaczyć efekt przed rozpoczęciem leczenia',
        desc: 'Skanowanie 3Shape i przymiarka próbnego uśmiechu w ustach na żywo.',
        img: '/treatments/accordion/porcelain-laminate.webp',
        href: '/treatments/smile-makeover',
      },
      {
        title: 'Wybielanie Laserowe (Philips Zoom)',
        target: 'Rozjaśnienie zębów o 6-8 odcieni w 45 minut',
        desc: 'Bezpieczne wybielanie gabinetowe usuwające głębokie przebarwienia.',
        img: '/treatments/accordion/lumineers.webp',
        href: '/treatments/teeth-whitening',
      },
      {
        title: 'Zamykanie Diastemy & Bonding',
        target: 'Likwidacja przerw między zębami bez szlifowania',
        desc: 'Kompozytowa odbudowa estetyczna podczas jednej wizyty.',
        img: '/treatments/accordion/zirconium-laminate.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Korekta Uśmiechu Dziąsłowego (Gummy Smile)',
        target: 'Wyrównanie linii dziąseł laserem diodowym',
        desc: 'Bezbolesna plastyka dziąseł odsłaniająca naturalną długość zębów.',
        img: '/treatments/accordion/allon4-aesthetic.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Licówki Porcelanowe E-Max',
        target: 'Korekta kształtu i trwałej bieli zębów przednich',
        desc: 'Cienkie płatki ceramiki szklanej o naturalnej przezierności.',
        img: '/treatments/accordion/allon6-aesthetic.webp',
        href: '/treatments/dental-veneers',
      },
      {
        title: 'Wkłady Ceramiczne Inlay / Onlay',
        target: 'Odbudowa zębów bocznych po dużych ubytkach',
        desc: 'Precyzyjna ceramika CAD/CAM wzmacniająca strukturę zęba.',
        img: '/treatments/accordion/inlay-onlay-ceramic.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Pełnoceramiczne Korony Cyrkonowe',
        target: 'Maksymalna wytrzymałość bez ciemnych brzegów',
        desc: 'Wielowarstwowy cyrkon 1200+ MPa idealny do strefy bocznej i przedniej.',
        img: '/treatments/accordion/sinus-lifting.webp',
        href: '/treatments/dental-crowns',
      },
    ],
  },
  pt: {
    heading: 'Encontre o Tratamento Estético Ideal para Si',
    subtitle:
      'Descubra a melhor opção para transformar o seu sorriso em Antalya com tecnologia de ponta.',
    readMore: 'SABER MAIS',
    items: [
      {
        title: 'Design de Sorriso Hollywood Smile',
        target: 'Para quem procura uma transformação estética integral',
        desc: '16 a 20 facetas E-Max ou zircónia desenhadas segundo as proporções faciais.',
        img: '/treatments/accordion/e-max-laminate.webp',
        href: '/treatments/smile-makeover',
      },
      {
        title: 'Design Digital 3D & Mock-Up',
        target: 'Visualização prévia do resultado final na boca',
        desc: 'Planeamento digital 3Shape sem necessidade de desgaste inicial.',
        img: '/treatments/accordion/porcelain-laminate.webp',
        href: '/treatments/smile-makeover',
      },
      {
        title: 'Branqueamento Dentário a Laser',
        target: 'Dentes 6 a 8 tons mais brancos em 45 minutos',
        desc: 'Tratamento clínico com ativação por luz de máxima segurança.',
        img: '/treatments/accordion/lumineers.webp',
        href: '/treatments/teeth-whitening',
      },
      {
        title: 'Fecho de Diastemas & Bonding',
        target: 'Eliminação de espaços interdentários sem desgaste',
        desc: 'Restaurações em resina composta aplicadas numa única sessão.',
        img: '/treatments/accordion/zirconium-laminate.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Correção de Sorriso Gengival',
        target: 'Harmonização do contorno gengival por laser',
        desc: 'Gengivoplastia a laser de díodo rápida e indolor.',
        img: '/treatments/accordion/allon4-aesthetic.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Facetas de Porcelana E-Max',
        target: 'Estética superior e naturalidade nos dentes anteriores',
        desc: 'Lamelas cerâmicas ultra finas com resistência excecional.',
        img: '/treatments/accordion/allon6-aesthetic.webp',
        href: '/treatments/dental-veneers',
      },
      {
        title: 'Inlays e Onlays Cerâmicos',
        target: 'Restauração de molares com preservação do dente',
        desc: 'Peças em cerâmica monolítica fresadas por CAD/CAM.',
        img: '/treatments/accordion/inlay-onlay-ceramic.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Coroas de Zircónia sem Metal',
        target: 'Elevada resistência e estética sem linhas escuras',
        desc: 'Zircónia multicamada de 1200+ MPa com máxima biocompatibilidade.',
        img: '/treatments/accordion/sinus-lifting.webp',
        href: '/treatments/dental-crowns',
      },
    ],
  },
  es: {
    heading: 'Encuentre el Tratamiento Estético Ideal para Usted',
    subtitle:
      'Conozca las opciones de diseño de sonrisa y elija la más adecuada para sus expectativas.',
    readMore: 'MÁS INFORMACIÓN',
    items: [
      {
        title: 'Diseño de Sonrisa Hollywood Smile',
        target: 'Para quienes buscan una transformación estética completa',
        desc: '16 a 20 carillas E-Max o coronas de zirconio según la proporción áurea facial.',
        img: '/treatments/accordion/e-max-laminate.webp',
        href: '/treatments/smile-makeover',
      },
      {
        title: 'Diseño Digital 3D & Mock-Up',
        target: 'Pruebe su nueva sonrisa en boca antes del tratamiento',
        desc: 'Escaneo óptico 3Shape y prueba en vivo sin limado dental previo.',
        img: '/treatments/accordion/porcelain-laminate.webp',
        href: '/treatments/smile-makeover',
      },
      {
        title: 'Blanqueamiento Dental Láser',
        target: 'Aclare sus dientes de 6 a 8 tonos en 45 minutos',
        desc: 'Blanqueamiento clínico profesional que cuida el esmalte.',
        img: '/treatments/accordion/lumineers.webp',
        href: '/treatments/teeth-whitening',
      },
      {
        title: 'Cierre de Diastemas & Bonding',
        target: 'Cierre de espacios interdentales sin desgaste',
        desc: 'Modelado directo con composite de alta estética en una sola cita.',
        img: '/treatments/accordion/zirconium-laminate.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Contorno Gingival Láser (Gummy Smile)',
        target: 'Armonización de encías irregulares o sonrisa gingival',
        desc: 'Gingivoplastia láser indolora para alargar dientes cortos.',
        img: '/treatments/accordion/allon4-aesthetic.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Carillas de Porcelana E-Max',
        target: 'Dientes blancos y translúcidos con mínima preparación',
        desc: 'Láminas ultrafinas de disilicato de litio suizo de alta duración.',
        img: '/treatments/accordion/allon6-aesthetic.webp',
        href: '/treatments/dental-veneers',
      },
      {
        title: 'Inlays y Onlays Cerámicos',
        target: 'Restauración de molares con gran pérdida dental',
        desc: 'Piezas cerámicas fresadas con precisión digital CAD/CAM.',
        img: '/treatments/accordion/inlay-onlay-ceramic.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Coronas de Zirconio 100% Cerámicas',
        target: 'Máxima resistencia masticatoria sin sombras oscuras',
        desc: 'Zirconio multicapa de 1200+ MPa para una estética inalterable.',
        img: '/treatments/accordion/sinus-lifting.webp',
        href: '/treatments/dental-crowns',
      },
    ],
  },
  ru: {
    heading: 'Выберите подходящую эстетическую процедуру',
    subtitle:
      'Изучите варианты преображения улыбки в Master Smile Studio в Анталье для безупречного результата.',
    readMore: 'ПОДРОБНЕЕ',
    items: [
      {
        title: 'Голливудская Улыбка (Hollywood Smile)',
        target: 'Для комплексного преображения и идеальной белизны',
        desc: '16–20 виниров E-Max или циркониевых коронок по золотому сечению лица.',
        img: '/treatments/accordion/e-max-laminate.webp',
        href: '/treatments/smile-makeover',
      },
      {
        title: '3D Цифровой Дизайн Улыбки (Mock-Up)',
        target: 'Для примерки новой улыбки в зеркале до начала лечения',
        desc: '3Shape сканирование и живая примерка формы без обточки зубов.',
        img: '/treatments/accordion/porcelain-laminate.webp',
        href: '/treatments/smile-makeover',
      },
      {
        title: 'Лазерное Отбеливание (Philips Zoom)',
        target: 'Осветление эмали на 6–8 тонов за 45 минут',
        desc: 'Профессиональное бережное отбеливание без повреждения эмали.',
        img: '/treatments/accordion/lumineers.webp',
        href: '/treatments/teeth-whitening',
      },
      {
        title: 'Закрытие Диастеmatched & Бондинг',
        target: 'Устранение щелей между зубами за 1 визит без обточки',
        desc: 'Художественная реставрация наногибридным композитом.',
        img: '/treatments/accordion/zirconium-laminate.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Лазерная Коррекция Десен (Gummy Smile)',
        target: 'Коррекция десневой улыбки и удлинение зубов',
        desc: 'Безболезненная лазерная пластика десневого контура за минуты.',
        img: '/treatments/accordion/allon4-aesthetic.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Керамические Виниры E-Max',
        target: 'Идеальная форма, белизна и естественная прозрачность',
        desc: 'Ультратонкие пластинки из швейцарского дисиликата лития.',
        img: '/treatments/accordion/allon6-aesthetic.webp',
        href: '/treatments/dental-veneers',
      },
      {
        title: 'Керамические Вкладки Inlay / Onlay',
        target: 'Восстановление жевательных зубов при больших дефектах',
        desc: 'Высокопрочные монолитные керамические вкладки CAD/CAM.',
        img: '/treatments/accordion/inlay-onlay-ceramic.webp',
        href: '/treatments/cosmetic-dentistry',
      },
      {
        title: 'Безметалловые Коронки из Циркония',
        target: 'Максимальная прочность и эстетика без темного края',
        desc: 'Многослойный цирконий 1200+ МПа с непревзойденной надежностью.',
        img: '/treatments/accordion/sinus-lifting.webp',
        href: '/treatments/dental-crowns',
      },
    ],
  },
};

export default function CosmeticDentistryAccordionSection() {
  const locale = useLocale();
  const d = COSMETIC_ACCORDION_DATA[locale] || COSMETIC_ACCORDION_DATA.en;
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = d.items[activeIndex] || d.items[0];

  return (
    <section className={styles.sectionWrap} aria-label={d.heading}>
      <div className={styles.standard_center4}>
        <div className={styles.head}>
          <div className={styles.grid1}>
            <div className={styles.headS1}>{d.heading}</div>
            <div className={styles.headS2}>{d.subtitle}</div>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.grid}>
            {/* Left Column: Accordion */}
            <div className={styles.s1}>
              <div className={styles.accordion}>
                {d.items.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <div
                      key={idx}
                      className={`${styles.item} ${isActive ? styles.active : ''}`}
                    >
                      <div
                        className={styles.title}
                        onClick={() => setActiveIndex(idx)}
                        role="button"
                        tabIndex={0}
                        aria-expanded={isActive}
                      >
                        <div className={styles.text}>
                          <span className={styles.text1}>{item.title}</span>
                          <span className={styles.text2}>{item.target}</span>
                        </div>
                      </div>

                      {isActive && (
                        <div className={styles.content}>
                          <p>{item.desc}</p>
                          <Link href={item.href} className={styles.readMoreBtn}>
                            {d.readMore}
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Dynamic Preview Image */}
            <div className={styles.s2}>
              <Image
                src={activeItem.img}
                alt={activeItem.title}
                fill
                sizes="(max-width: 992px) 100vw, 550px"
                className={styles.previewImg}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
