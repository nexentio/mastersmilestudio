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

interface TreatmentRightTreatmentAccordionProps {
  customHeading?: string;
  customSubtitle?: string;
  customItems?: TreatmentItem[];
}

const ACCORDION_DATA_MAP: Record<
  string,
  {
    heading: string;
    subtitle: string;
    readMore: string;
    items: TreatmentItem[];
  }
> = {
  tr: {
    heading: 'Sizin İçin En Doğru Tedavi Hangisi?',
    subtitle:
      'Hangi dental tedavinin ihtiyaçlarınıza uygun olduğundan emin değil misiniz? Her prosedürün kimler için olduğunu ve neler sunduğunu görmek için seçeneklerimize göz atın.',
    readMore: 'DETAYLI BİLGİ',
    items: [
      {
        title: 'Full Mouth İmplant',
        target: 'Üst ve alt çenesinde hiç dişi kalmayan hastalar',
        desc: 'Tüm dişlerin implantlarla sabitlendiği komple bir tam ağız restorasyonudur.',
        img: '/treatments/accordion/full-mouth-implant.webp',
        href: '/treatments/dental-implants/full-mouth-implants',
      },
      {
        title: 'All-on-4 İmplant',
        target: 'Dişsiz olan veya dişlerinin çekilmesi gereken ve kısa sürede sabit diş isteyen hastalar',
        desc: '4 implant ile sabit protez yapılır; çene kemiği yetersiz olanlara da uygulanabilir.',
        img: '/treatments/accordion/all-on-4.webp',
        href: '/treatments/dental-implants/all-on-4-implants',
      },
      {
        title: 'All-on-6 İmplant',
        target: 'Daha güçlü çene desteği isteyen dişsiz hastalar',
        desc: '6 implant ile daha dayanıklı ve uzun ömürlü bir sabit protez yapılır.',
        img: '/treatments/accordion/all-on-6.webp',
        href: '/treatments/dental-implants/all-on-6-implants',
      },
      {
        title: 'Aynı Gün İmplant Tedavisi',
        target: 'Yeni diş çektirmiş ve zaman kaybetmeden implant isteyen hastalar',
        desc: 'İmplant, diş çekimi ile aynı seansta yerleştirilerek zamandan tasarruf sağlar.',
        img: '/treatments/accordion/immediate-implant.webp',
        href: '/treatments/dental-implants/immediate-implant-treatment',
      },
      {
        title: 'Zigoma (Elmacık Kemiği) İmplantı',
        target: 'Üst çenede geleneksel implantların yapılamadığı kemik kaybı olan hastalar',
        desc: 'Elmacık kemiğine yerleştirilen özel implantlardır. Kemik grefti gerekmez.',
        img: '/treatments/accordion/zygomatic-implant.webp',
        href: '/treatments/dental-implants/zygomatic-implants',
      },
      {
        title: 'Zirkonyum İmplant',
        target: 'Metal alerjisi olan veya yüksek estetik kaygısı olanlar',
        desc: 'Doğal dişe estetik olarak en yakın, biyouyumlu beyaz seramik implant türüdür.',
        img: '/treatments/accordion/zirconium-laminate.webp',
        href: '/treatments/dental-implants/zirconium-implants',
      },
      {
        title: 'İmplant Destekli Çıt Çıtlı Protez',
        target: 'Dişsiz hastalar veya hareketli protez kullanıp sabit bir çözüm isteyenler',
        desc: 'Hareketli protezlere kıyasla çok daha stabil, oynamayan ve konforlu bir çözümdür.',
        img: '/treatments/accordion/implant-supported-dentures.webp',
        href: '/treatments/dental-implants/implant-supported-dentures',
      },
      {
        title: 'Sinüs Lifting & Kemik Grefti',
        target: 'Üst çenede implant için yeterli kemik hacmi bulunmayan hastalar',
        desc: 'Sinüs bölgesine kemik tozu eklenerek implant için gerekli zemin hazırlanır.',
        img: '/treatments/accordion/sinus-lifting.webp',
        href: '/treatments/dental-implants/sinus-lifting',
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
        title: 'Full Mouth Implants',
        target: 'Patients who have no teeth left in their upper and lower jaws',
        desc: 'It is a full mouth restoration where all teeth are fixed with implants.',
        img: '/treatments/accordion/full-mouth-implant.webp',
        href: '/treatments/dental-implants/full-mouth-implants',
      },
      {
        title: 'All-on-4 Implants',
        target: 'Patients who are toothless or have teeth that need to be extracted, and who want fixed teeth in a short time.',
        desc: 'A fixed prosthesis is made with 4 implants; it can also be applied to those with insufficient jawbone.',
        img: '/treatments/accordion/all-on-4.webp',
        href: '/treatments/dental-implants/all-on-4-implants',
      },
      {
        title: 'All-on-6 Implants',
        target: 'Toothless patients who want stronger jaw support.',
        desc: 'A more durable and long-lasting fixed prosthesis is made with 6 implants.',
        img: '/treatments/accordion/all-on-6.webp',
        href: '/treatments/dental-implants/all-on-6-implants',
      },
      {
        title: 'Immediate Implant Treatment',
        target: 'Patients who have just had a tooth extracted and want an implant without losing time',
        desc: 'The implant is placed in the same session as the tooth extraction, which saves time.',
        img: '/treatments/accordion/immediate-implant.webp',
        href: '/treatments/dental-implants/immediate-implant-treatment',
      },
      {
        title: 'Zygomatic Implants',
        target: 'Patients with bone loss in the upper jaw where traditional implants cannot be placed',
        desc: 'These are special implants placed in the cheekbone. A bone graft is not required.',
        img: '/treatments/accordion/zygomatic-implant.webp',
        href: '/treatments/dental-implants/zygomatic-implants',
      },
      {
        title: 'Zirconium Implants',
        target: 'Those with metal allergies or high aesthetic concerns',
        desc: 'It is a biocompatible implant type that is aesthetically closest to a natural tooth.',
        img: '/treatments/accordion/zirconium-laminate.webp',
        href: '/treatments/dental-implants/zirconium-implants',
      },
      {
        title: 'Implant Supported Dentures',
        target: 'Toothless patients or those who use dentures but want a fixed solution',
        desc: 'It is a more stable and comfortable solution compared to removable dentures.',
        img: '/treatments/accordion/implant-supported-dentures.webp',
        href: '/treatments/dental-implants/implant-supported-dentures',
      },
      {
        title: 'Sinus Lifting',
        target: 'Patients who do not have enough bone volume in the upper jaw for an implant',
        desc: 'The ground is prepared for the implant by adding bone powder to the sinus area.',
        img: '/treatments/accordion/sinus-lifting.webp',
        href: '/treatments/dental-implants/sinus-lifting',
      },
    ],
  },
  de: {
    heading: 'Finden Sie die passende Behandlung für sich',
    subtitle:
      'Sie sind nicht sicher, welche Zahnbehandlung am besten zu Ihnen passt? Entdecken Sie unsere Optionen, um zu erfahren, für wen jedes Verfahren geeignet ist.',
    readMore: 'MEHR ERFAHREN',
    items: [
      {
        title: 'Full Mouth Implantate',
        target: 'Patienten ohne eigene Zähne im Ober- und Unterkiefer',
        desc: 'Eine vollständige Gebisssanierung, bei der alle Zähne fest auf Implantaten verankert werden.',
        img: '/treatments/accordion/full-mouth-implant.webp',
        href: '/treatments/dental-implants/full-mouth-implants',
      },
      {
        title: 'All-on-4 Implantate',
        target: 'Zahnlose Patienten oder Patienten mit nicht erhaltungswürdigen Zähnen, die schnell feste Zähne wünschen.',
        desc: 'Fester Zahnersatz auf 4 Implantaten; auch bei geringem Kieferknochenangebot anwendbar.',
        img: '/treatments/accordion/all-on-4.webp',
        href: '/treatments/dental-implants/all-on-4-implants',
      },
      {
        title: 'All-on-6 Implantate',
        target: 'Zahnlose Patienten, die maximale Stabilität und Kaukraft wünschen.',
        desc: 'Besonders langlebiger und stabiler festsitzender Zahnersatz auf 6 Implantaten.',
        img: '/treatments/accordion/all-on-6.webp',
        href: '/treatments/dental-implants/all-on-6-implants',
      },
      {
        title: 'Sofortimplantate',
        target: 'Patienten direkt nach einer Zahnextraktion, die ohne Wartezeit ein Implantat wünschen',
        desc: 'Das Implantat wird in derselben Sitzung wie die Zahnentfernung eingesetzt, was Zeit spart.',
        img: '/treatments/accordion/immediate-implant.webp',
        href: '/treatments/dental-implants/immediate-implant-treatment',
      },
      {
        title: 'Zygoma (Jochbein) Implantate',
        target: 'Patienten mit starkem Knochenschwund im Oberkiefer, bei denen herkömmliche Implantate nicht möglich sind',
        desc: 'Spezielle Implantate im Jochbein verankert. Kein vorheriger Knochenaufbau erforderlich.',
        img: '/treatments/accordion/zygomatic-implant.webp',
        href: '/treatments/dental-implants/zygomatic-implants',
      },
      {
        title: 'Zirkonimplantate',
        target: 'Patienten mit Metallallergien oder höchsten ästhetischen Ansprüchen',
        desc: 'Biokompatible weiße Keramikimplantate, die dem natürlichen Zahn optisch am nächsten kommen.',
        img: '/treatments/accordion/zirconium-laminate.webp',
        href: '/treatments/dental-implants/zirconium-implants',
      },
      {
        title: 'Implantatgetragene Prothesen',
        target: 'Zahnlose Patienten, die eine wackelfreie, feste Lösung für herausnehmbare Prothesen suchen',
        desc: 'Eine deutlich stabilere, rutschfeste und komfortable Lösung im Vergleich zu herkömmlichen Prothesen.',
        img: '/treatments/accordion/implant-supported-dentures.webp',
        href: '/treatments/dental-implants/implant-supported-dentures',
      },
      {
        title: 'Sinuslift & Knochenaufbau',
        target: 'Patienten mit unzureichendem Knochenvolumen im Oberkiefer',
        desc: 'Durch Einbringen von Knochenersatzmaterial wird das Fundament für sichere Implantate geschaffen.',
        img: '/treatments/accordion/sinus-lifting.webp',
        href: '/treatments/dental-implants/sinus-lifting',
      },
    ],
  },
  pl: {
    heading: 'Wybierz idealne leczenie dla siebie',
    subtitle:
      'Nie jesteś pewien, który zabieg stomatologiczny jest dla Ciebie najlepszy? Poznaj nasze procedury, aby podjąć świadomą decyzję.',
    readMore: 'WIĘCEJ INFORMACJI',
    items: [
      {
        title: 'Implanty całej szczęki (Full Mouth)',
        target: 'Pacjenci z całkowitym bezzębiem w górnej i dolnej szczęce',
        desc: 'Pełna rekonstrukcja uzębienia, w której wszystkie zęby są trwale osadzone na implantach.',
        img: '/treatments/accordion/full-mouth-implant.webp',
        href: '/treatments/dental-implants/full-mouth-implants',
      },
      {
        title: 'Implanty All-on-4',
        target: 'Pacjenci bezzębni lub wymagający usunięcia zębów, oczekujący stałych zębów w krótkim czasie.',
        desc: 'Stała proteza oparta na 4 implantach; możliwość zastosowania przy ograniczonej ilości kości.',
        img: '/treatments/accordion/all-on-4.webp',
        href: '/treatments/dental-implants/all-on-4-implants',
      },
      {
        title: 'Implanty All-on-6',
        target: 'Pacjenci bezzębni oczekujący maksymalnej stabilności i siły żucia.',
        desc: 'Wyjątkowo trwała i stabilna odbudowa na 6 implantach zębowych.',
        img: '/treatments/accordion/all-on-6.webp',
        href: '/treatments/dental-implants/all-on-6-implants',
      },
      {
        title: 'Implanty natychmiastowe',
        target: 'Pacjenci bezpośrednio po ekstrakcji zęba, którzy nie chcą czekać na wszczepienie implantu',
        desc: 'Implant jest wprowadzany podczas tej samej wizyty co usunięcie zęba, co oszczędza czas.',
        img: '/treatments/accordion/immediate-implant.webp',
        href: '/treatments/dental-implants/immediate-implant-treatment',
      },
      {
        title: 'Implanty jarzmowe (Zygoma)',
        target: 'Pacjenci ze znacznym zanikiem kości w szczęce, gdzie tradycyjne implanty są niemożliwe',
        desc: 'Specjalne implanty kotwiczone w kości jarzmowej. Bez konieczności przeszczepu kości.',
        img: '/treatments/accordion/zygomatic-implant.webp',
        href: '/treatments/dental-implants/zygomatic-implants',
      },
      {
        title: 'Implanty cyrkonowe',
        target: 'Osoby z alergiami na metale lub najwyższymi wymaganiami estetycznymi',
        desc: 'Biokompatybilne białe implanty ceramiczne, najbardziej zbliżone do naturalnego zęba.',
        img: '/treatments/accordion/zirconium-laminate.webp',
        href: '/treatments/dental-implants/zirconium-implants',
      },
      {
        title: 'Protezy na implantach (na zatrzaskach)',
        target: 'Pacjenci bezzębni szukający stabilnego, nieprzesuwającego się rozwiązania',
        desc: 'Znacznie bardziej stabilne i komfortowe rozwiązanie w porównaniu z tradycyjną ruchomą protezą.',
        img: '/treatments/accordion/implant-supported-dentures.webp',
        href: '/treatments/dental-implants/implant-supported-dentures',
      },
      {
        title: 'Podniesienie dna zatoki (Sinus Lift)',
        target: 'Pacjenci ze zbyt małą objętością kości w bocznych odcinkach szczęki',
        desc: 'Przygotowanie podłoża pod implanty poprzez wprowadzenie biomateriału kostnego.',
        img: '/treatments/accordion/sinus-lifting.webp',
        href: '/treatments/dental-implants/sinus-lifting',
      },
    ],
  },
  pt: {
    heading: 'Encontre o tratamento ideal para você',
    subtitle:
      'Não tem certeza de qual tratamento dentário é o mais indicado? Conheça nossas opções para tomar a melhor decisão para o seu sorriso.',
    readMore: 'SABER MAIS',
    items: [
      {
        title: 'Implantes de Boca Toda (Full Mouth)',
        target: 'Pacientes sem dentes na arcada superior e inferior',
        desc: 'Uma restauração completa onde todos os dentes são fixados sobre implantes.',
        img: '/treatments/accordion/full-mouth-implant.webp',
        href: '/treatments/dental-implants/full-mouth-implants',
      },
      {
        title: 'Implantes All-on-4',
        target: 'Pacientes desdentados que desejam dentes fixos rapidamente.',
        desc: 'Prótese fixa suportada por 4 implantes; indicado mesmo para quem tem perda óssea.',
        img: '/treatments/accordion/all-on-4.webp',
        href: '/treatments/dental-implants/all-on-4-implants',
      },
      {
        title: 'Implantes All-on-6',
        target: 'Pacientes que desejam maior suporte e estabilidade mastigatória.',
        desc: 'Prótese fixa extremamente durável e resistente com 6 implantes.',
        img: '/treatments/accordion/all-on-6.webp',
        href: '/treatments/dental-implants/all-on-6-implants',
      },
      {
        title: 'Implantes Imediatos',
        target: 'Pacientes que acabaram de extrair um dente e não querem esperar',
        desc: 'O implante é colocado na mesma sessão da extração, poupando tempo.',
        img: '/treatments/accordion/immediate-implant.webp',
        href: '/treatments/dental-implants/immediate-implant-treatment',
      },
      {
        title: 'Implantes Zigomáticos',
        target: 'Pacientes com perda óssea severa onde implantes tradicionais não são viáveis',
        desc: 'Implantes ancorados no osso zigomático. Dispensa enxerto ósseo prévio.',
        img: '/treatments/accordion/zygomatic-implant.webp',
        href: '/treatments/dental-implants/zygomatic-implants',
      },
      {
        title: 'Implantes de Zircônia',
        target: 'Pessoas com alergia a metais ou alta exigência estética',
        desc: 'Implantes cerâmicos biocompatíveis brancos, com estética natural perfeita.',
        img: '/treatments/accordion/zirconium-laminate.webp',
        href: '/treatments/dental-implants/zirconium-implants',
      },
      {
        title: 'Próteses Sobre Implantes',
        target: 'Pacientes desdentados que usam dentadura e buscam fixação firme',
        desc: 'Solução muito mais estável e confortável do que dentaduras convencionais.',
        img: '/treatments/accordion/implant-supported-dentures.webp',
        href: '/treatments/dental-implants/implant-supported-dentures',
      },
      {
        title: 'Elevação de Seio Maxilar (Sinus Lift)',
        target: 'Pacientes com altura óssea insuficiente na região posterior superior',
        desc: 'Preparação da base óssea com biomaterial para fixação segura dos implantes.',
        img: '/treatments/accordion/sinus-lifting.webp',
        href: '/treatments/dental-implants/sinus-lifting',
      },
    ],
  },
  es: {
    heading: 'Encuentre el tratamiento adecuado para usted',
    subtitle:
      '¿No está seguro de qué tratamiento dental se adapta a sus necesidades? Explore nuestras opciones para tomar una decisión informada.',
    readMore: 'MÁS INFORMACIÓN',
    items: [
      {
        title: 'Implantes de Boca Completa (Full Mouth)',
        target: 'Pacientes sin dientes en el maxilar superior e inferior',
        desc: 'Una restauración bucal completa donde todos los dientes se fijan mediante implantes.',
        img: '/treatments/accordion/full-mouth-implant.webp',
        href: '/treatments/dental-implants/full-mouth-implants',
      },
      {
        title: 'Implantes All-on-4',
        target: 'Pacientes desdentados que desean dientes fijos en poco tiempo.',
        desc: 'Prótesis fija sobre 4 implantes; aplicable incluso con poco volumen óseo.',
        img: '/treatments/accordion/all-on-4.webp',
        href: '/treatments/dental-implants/all-on-4-implants',
      },
      {
        title: 'Implantes All-on-6',
        target: 'Pacientes que buscan mayor soporte y fuerza masticatoria.',
        desc: 'Prótesis fija altamente duradera y resistente fijada sobre 6 implantes.',
        img: '/treatments/accordion/all-on-6.webp',
        href: '/treatments/dental-implants/all-on-6-implants',
      },
      {
        title: 'Implantes Inmediatos',
        target: 'Pacientes tras una extracción dental que desean el implante sin esperas',
        desc: 'El implante se coloca en la misma sesión que la extracción, ahorrando tiempo.',
        img: '/treatments/accordion/immediate-implant.webp',
        href: '/treatments/dental-implants/immediate-implant-treatment',
      },
      {
        title: 'Implantes Cigomáticos',
        target: 'Pacientes con pérdida ósea severa donde los implantes tradicionales no son viables',
        desc: 'Implantes anclados en el hueso cigomático (pómulo). No requiere injerto óseo.',
        img: '/treatments/accordion/zygomatic-implant.webp',
        href: '/treatments/dental-implants/zygomatic-implants',
      },
      {
        title: 'Implantes de Zirconio',
        target: 'Personas con alergia a metales o altas expectativas estéticas',
        desc: 'Implantes cerámicos biocompatibles blancos, lo más parecido a un diente natural.',
        img: '/treatments/accordion/zirconium-laminate.webp',
        href: '/treatments/dental-implants/zirconium-implants',
      },
      {
        title: 'Sobredentaduras Sobre Implantes',
        target: 'Pacientes edéntulos que usan dentaduras y buscan fijación estable',
        desc: 'Una solución mucho más estable y cómoda que las dentaduras postizas convencionales.',
        img: '/treatments/accordion/implant-supported-dentures.webp',
        href: '/treatments/dental-implants/implant-supported-dentures',
      },
      {
        title: 'Elevación de Seno Maxilar (Sinus Lift)',
        target: 'Pacientes sin suficiente altura ósea en el maxilar superior posterior',
        desc: 'Preparación del lecho óseo mediante biomaterial para fijar implantes seguros.',
        img: '/treatments/accordion/sinus-lifting.webp',
        href: '/treatments/dental-implants/sinus-lifting',
      },
    ],
  },
  ru: {
    heading: 'Выберите подходящее лечение',
    subtitle:
      'Не уверены, какой метод лечения подходит именно вам? Ознакомьтесь с нашими процедурами, чтобы принять взвешенное решение.',
    readMore: 'ПОДРОБНЕЕ',
    items: [
      {
        title: 'Полная имплантация челюсти (Full Mouth)',
        target: 'Пациенты с полным отсутствием зубов на верхней и нижней челюсти',
        desc: 'Полное восстановление зубного ряда с надежной фиксацией несъемных мостов на имплантах.',
        img: '/treatments/accordion/full-mouth-implant.webp',
        href: '/treatments/dental-implants/full-mouth-implants',
      },
      {
        title: 'Имплантация All-on-4',
        target: 'Пациенты без зубов или с зубами под удаление, желающие несъемные зубы в кратчайшие сроки.',
        desc: 'Несъемный протез фиксируется всего на 4 имплантах; подходит даже при атрофии кости.',
        img: '/treatments/accordion/all-on-4.webp',
        href: '/treatments/dental-implants/all-on-4-implants',
      },
      {
        title: 'Имплантация All-on-6',
        target: 'Пациенты, которым требуется повышенная жевательная стабильность и надежность.',
        desc: 'Максимально прочная и долговечная несъемная конструкция на 6 имплантах.',
        img: '/treatments/accordion/all-on-6.webp',
        href: '/treatments/dental-implants/all-on-6-implants',
      },
      {
        title: 'Одномоментная имплантация',
        target: 'Пациенты сразу после удаления зуба, не желающие терять время на долгое заживление',
        desc: 'Имplant устанавливается сразу в лунку удаленного зуба в рамках одного приема.',
        img: '/treatments/accordion/immediate-implant.webp',
        href: '/treatments/dental-implants/immediate-implant-treatment',
      },
      {
        title: 'Скуловая имплантация (Zygoma)',
        target: 'Пациенты с критической атрофией кости верхней челюсти',
        desc: 'Специальные удлиненные импланты, фиксируемые в скуловой кости без костной пластики.',
        img: '/treatments/accordion/zygomatic-implant.webp',
        href: '/treatments/dental-implants/zygomatic-implants',
      },
      {
        title: 'Циркониевые импланты',
        target: 'Пациенты с аллергией на металлы или высокими требованиями к эстетике десны',
        desc: 'Биосовместимые белые керамические импланты, максимально приближенные к натуральным зубам.',
        img: '/treatments/accordion/zirconium-laminate.webp',
        href: '/treatments/dental-implants/zirconium-implants',
      },
      {
        title: 'Покрывные протезы на имплантах',
        target: 'Пациенты со съемными протезами, желающие надежной фиксации без соскальзывания',
        desc: 'Значительно более устойчивое и комфортное решение по сравнению с обычными протезами.',
        img: '/treatments/accordion/implant-supported-dentures.webp',
        href: '/treatments/dental-implants/implant-supported-dentures',
      },
      {
        title: 'Синус-лифтинг и наращивание кости',
        target: 'Пациенты с недостаточной высотой кости в боковых отделах верхней челюсти',
        desc: 'Подготовка надежной основы под импланты путем внесения костнозамещающего материала.',
        img: '/treatments/accordion/sinus-lifting.webp',
        href: '/treatments/dental-implants/sinus-lifting',
      },
    ],
  },
};

export default function TreatmentRightTreatmentAccordion({
  customHeading,
  customSubtitle,
  customItems,
}: TreatmentRightTreatmentAccordionProps) {
  const locale = useLocale();
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const localizedData = ACCORDION_DATA_MAP[locale] || ACCORDION_DATA_MAP.en;

  const headingText = customHeading || localizedData.heading;
  const subtitleText = customSubtitle || localizedData.subtitle;
  const readMoreText = localizedData.readMore;
  const treatments = customItems || localizedData.items;

  return (
    <section aria-labelledby="right-treatment-heading" className={styles.section}>
      <div className={styles.container}>
        {/* Head 2-Column Row */}
        <div className={styles.headerRow}>
          <div>
            <h2 id="right-treatment-heading" className={styles.heading}>
              {headingText}
            </h2>
          </div>
          <div>
            <p className={styles.subText}>{subtitleText}</p>
          </div>
        </div>

        {/* Center Rounded Surface Card */}
        <div className={styles.surfaceCard}>
          <div className={styles.grid}>
            {/* Left Column: Accordion List */}
            <div className={styles.accordionList}>
              {treatments.map((item, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                  >
                    {/* Title Bar */}
                    <div
                      className={styles.titleRow}
                      onClick={() => setActiveIdx(isActive ? -1 : idx)}
                      role="button"
                      tabIndex={0}
                      aria-expanded={isActive}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveIdx(isActive ? -1 : idx);
                        }
                      }}
                    >
                      <div className={styles.textGroup}>
                        <span className={styles.titleText}>{item.title}</span>
                        <span className={styles.targetText}>{item.target}</span>
                      </div>

                      {/* Chevron Icon */}
                      <span className={`${styles.chevron} ${isActive ? styles.chevronActive : ''}`}>
                        <svg width="15" height="15" viewBox="0 0 448 512" fill="currentColor">
                          <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                        </svg>
                      </span>
                    </div>

                    {/* Expanded Content */}
                    {isActive && (
                      <div className={styles.contentBox}>
                        <p className={styles.descText}>{item.desc}</p>

                        {/* Mobile Image (shown on small screens) */}
                        <div className={styles.mobileImgWrap}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            width="600"
                            height="369"
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                          />
                        </div>

                        {/* Read More Button */}
                        <div className={styles.btnWrap}>
                          <Link
                            className={styles.btn}
                            href={item.href}
                            aria-label={`Read more about ${item.title}`}
                          >
                            {readMoreText}
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Sticky Preview Image (Desktop) */}
            <div className={styles.stickyPreview}>
              {activeIdx >= 0 && treatments[activeIdx] && (
                <Link
                  href={treatments[activeIdx].href}
                  className={styles.previewCard}
                  aria-label={`Explore ${treatments[activeIdx].title}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    width="600"
                    height="369"
                    src={treatments[activeIdx].img}
                    alt={treatments[activeIdx].title}
                    loading="lazy"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
