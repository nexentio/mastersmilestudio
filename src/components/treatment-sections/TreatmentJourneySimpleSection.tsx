'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { getWhatsAppLink } from '@/config/site';
import styles from './TreatmentJourneySimpleSection.module.css';

interface JourneyItem {
  id: string;
  icon: string;
  title: string;
  content: string;
}

interface LocaleContent {
  sectionTitle: string;
  subText: string;
  contactHeading: string;
  whatsappLabel: string;
  phoneLabel: string;
  quickFormLabel: string;
  emailLabel: string;
  items: JourneyItem[];
}

const JOURNEY_DATA: Record<string, LocaleContent> = {
  en: {
    sectionTitle: 'Your Dental Journey Made Simple',
    subText:
      'From your very first inquiry to your permanent final smile, we guarantee a predictable, luxury, and transparent treatment journey in Istanbul. Learn about exact stay durations, visit milestones, recovery times, and all-inclusive pricing designed for international patients.',
    contactHeading: 'Reach Out to Us - Quickly and Easily',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Phone Call',
    quickFormLabel: 'Quick Form',
    emailLabel: 'E-mail',
    items: [
      {
        id: 'stay',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon01.webp',
        title: 'Average Length of Stay in Istanbul',
        content:
          '<strong>3 to 5 days for the 1st visit, 5 to 7 days for the 2nd visit.</strong> During your 1st visit (3–5 days), our senior oral surgeons complete 3D digital CBCT diagnostics, tooth extractions, computer-guided implant surgery, and the same-day fitting of your fixed temporary bridge. Your 2nd visit (5–7 days, after 3 months of healing) is dedicated to digital shade matching, precision try-ins, and final permanent Zirconia bridge delivery.',
      },
      {
        id: 'visits',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon02.webp',
        title: 'Number of Visits Required',
        content:
          '<strong>Exactly 2 visits are required for a complete, permanent full-arch restoration:</strong> Visit 1 (3–5 Days) covers implant placement and immediate fixed temporary teeth (you never leave the clinic without teeth); after a 3-month osseointegration period at home, Visit 2 (5–7 Days) covers CAD/CAM milling and final screw-retained permanent Zirconia bridge delivery.',
      },
      {
        id: 'recovery',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon03.webp',
        title: 'Recovery Time & Healing Process',
        content:
          '<strong>24 to 48 hours for immediate surgical recovery, 3 months for complete bone osseointegration.</strong> Thanks to computerized local anesthesia and minimally invasive guided surgery, post-op swelling and discomfort are minimal. Most patients return to light activities and remote work within 2 days. During the 3-month healing phase, your screw-retained temporary bridge allows comfortable eating of a soft diet while protecting the titanium fixtures.',
      },
      {
        id: 'price',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon04.webp',
        title: 'Price & Package Transparency',
        content:
          '<strong>All-inclusive package prices start from €4,900 / £4,200 ($5,700) per arch.</strong> Packages include 4 premium titanium implants (Straumann, DXL, NucleOSS), same-day fixed temporary bridge, final monolithic Zirconia bridge, 3D CBCT tomography, 4/5-star hotel accommodation with breakfast, and private VIP Mercedes airport-hotel transfers with guaranteed zero hidden fees.',
      },
    ],
  },
  tr: {
    sectionTitle: 'Diş Tedavisi Yolculuğunuz Artık Çok Kolay',
    subText:
      'İlk danışmanızdan kalıcı yeni gülüşünüze kadar İstanbul’da şeffaf, konforlu ve güvenli bir tedavi süreci sunuyoruz. Kalış süreleri, aşamalar, iyileşme süreci ve her şey dahil paket fiyatları hakkında tüm detayları keşfedin.',
    contactHeading: 'Bize Hızlı ve Kolayca Ulaşın',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Telefon Görüşmesi',
    quickFormLabel: 'Hızlı Form',
    emailLabel: 'E-posta',
    items: [
      {
        id: 'stay',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon01.webp',
        title: 'İstanbul’da Ortalama Kalış Süresi',
        content:
          '<strong>1. Ziyaret için 3–5 gün, 2. Ziyaret için 5–7 gün.</strong> 1. Ziyaretinizde (3–5 gün); 3D tomografi planlaması, hasarlı diş çekimleri, 4 implant cerrahisi ve aynı gün vidalanan sabit geçici köprünüz takılır. 3 aylık kemikleşme sonrasındaki 2. Ziyaretinizde (5–7 gün) ise kalıcı monolitik zirkonyum köprünüzün dijital provaları yapılıp kalıcı teslimatı gerçekleştirilir.',
      },
      {
        id: 'visits',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon02.webp',
        title: 'Gereken Ziyaret Sayısı',
        content:
          '<strong>Kalıcı ve eksiksiz bir tam çene tedavisi için toplam 2 ziyaret gerekir:</strong> 1. Ziyaret (3–5 Gün) implant cerrahisi ve aynı gün sabit geçici dişlerin takılmasını kapsar (asla dişsiz kalmazsınız); 3 aylık kemikleşme dönemi sonrasında 2. Ziyaret (5–7 Gün) kalıcı monolitik zirkonyum köprünüzün vidalanarak takılmasıyla tamamlanır.',
      },
      {
        id: 'recovery',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon03.webp',
        title: 'İyileşme Süreci (Recovery)',
        content:
          '<strong>Cerrahi toparlanma 24–48 saat, tam kemikleşme (osteointegrasyon) 3 ay sürer.</strong> Bilgisayarlı lokal anestezi ve kılavuzlu cerrahi sayesinde ameliyat sonrası ağrı ve şişlik minimumdur; hastalarımızın çoğu 2 gün içinde normal günlük yaşamına döner. 3 aylık kaynaşma döneminde vidalı geçici köprünüz implantları korurken yumuşak gıdaları rahatça çiğnemenizi sağlar.',
      },
      {
        id: 'price',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon04.webp',
        title: 'Fiyat & Paket Şeffaflığı',
        content:
          '<strong>Her şey dahil All-on-4 paket fiyatları çene başına €4,900 / £4,200 ($5,700)’dan başlar.</strong> Paketlerimize; 4 adet premium titanyum implant (Straumann, DXL, NucleOSS), aynı gün sabit geçici dişler, kalıcı monolitik zirkonyum köprü, 3D tomografi, oda-kahvaltı dahil 4/5 yıldızlı otel ve VIP Mercedes transferler dahildir. Asla gizli ek ücret talep edilmez.',
      },
    ],
  },
  de: {
    sectionTitle: 'Ihre Zahnbehandlung in Istanbul – Einfach & Transparent',
    subText:
      'Von der ersten Beratung bis zu Ihren dauerhaften Zähnen garantieren wir einen reibungslosen, erstklassigen Ablauf in Istanbul. Erfahren Sie alles über Aufenthaltsdauer, Besuche, Heilung und transparente Paketpreise.',
    contactHeading: 'Erreichen Sie uns schnell & unkompliziert',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Telefonanruf',
    quickFormLabel: 'Schnellformular',
    emailLabel: 'E-Mail',
    items: [
      {
        id: 'stay',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon01.webp',
        title: 'Durchschnittliche Aufenthaltsdauer in Istanbul',
        content:
          '<strong>3 bis 5 Tage für den 1. Besuch, 5 bis 7 Tage für den 2. Besuch.</strong> Beim 1. Besuch (3–5 Tage) erfolgen 3D-DVT-Diagnostik, Zahnentfernungen, 4-Implantat-OP und das Einsetzen der festsitzenden provisorischen Brücke. Der 2. Besuch (5–7 Tage, nach 3 Monaten Einheilung) dient der finalen Anprobe und Einsetzung Ihrer permanenten Zirkonbrücke.',
      },
      {
        id: 'visits',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon02.webp',
        title: 'Erforderliche Anzahl an Besuchen',
        content:
          '<strong>Für eine vollständige permanente Restauration sind genau 2 Besuche erforderlich:</strong> 1. Besuch (3–5 Tage) umfasst Implantation und festsitzende provisorische Zähne (Sie verlassen die Klinik nie zahnlos); nach 3 Monaten Einheilphase folgt der 2. Besuch (5–7 Tage) für die permanente verschraubte Zirkonbrücke.',
      },
      {
        id: 'recovery',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon03.webp',
        title: 'Erholungszeit & Heilungsprozess',
        content:
          '<strong>24 bis 48 Stunden für die chirurgische Erholung, 3 Monate für die vollständige Osseointegration.</strong> Dank digitaler Lokalanästhesie und navigierter Chirurgie sind Schwellungen und Schmerzen minimal; die meisten Patienten sind nach 2 Tagen wieder voll einsatzfähig. Während der 3-monatigen Einheilphase schützt die provisorische Brücke die Implantate bei weicher Kost.',
      },
      {
        id: 'price',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon04.webp',
        title: 'Preise & Paket-Transparenz',
        content:
          '<strong>All-inclusive All-on-4 Paketpreise starten ab €4.900 / £4.200 ($5.700) pro Kiefer.</strong> Die Pakete enthalten 4 Premium-Titanimplantate (Straumann, DXL, NucleOSS), feste provisorische Zähne am selben Tag, finale Zirkonbrücke, 3D-DVT-Röntgen, 4/5-Sterne-Hotel mit Frühstück und private VIP-Transfers ohne versteckte Zusatzkosten.',
      },
    ],
  },
  pl: {
    sectionTitle: 'Twoja Podróż Stomatologiczna Krok po Kroku',
    subText:
      'Od pierwszej konsultacji po ostateczny uśmiech gwarantujemy bezpieczny, przewidywalny i luksusowy pobyt w Stambule. Poznaj dokładne ramy czasowe, liczbę wizyt, okres gojenia i pakiety all-inclusive.',
    contactHeading: 'Skontaktuj się z Nami – Szybko i Wygodnie',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Telefon',
    quickFormLabel: 'Szybki Formularz',
    emailLabel: 'E-mail',
    items: [
      {
        id: 'stay',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon01.webp',
        title: 'Średni Czas Pobytu w Stambule',
        content:
          '<strong>3 do 5 dni na 1. wizytę, 5 do 7 dni na 2. wizytę.</strong> Podczas 1. wizyty (3–5 dni) wykonujemy diagnostykę 3D CBCT, ekstrakcje, zabieg wszczepienia 4 implantów oraz montaż stałego mostu tymczasowego. 2. wizyta (5–7 dni, po 3 miesiącach gojenia) obejmuje przymiarki i ostateczne oddanie stałego mostu cyrkonowego.',
      },
      {
        id: 'visits',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon02.webp',
        title: 'Wymagana Liczba Wizyt',
        content:
          '<strong>Do pełnej, stałej odbudowy łuku zębowego wymagane są dokładnie 2 wizyty:</strong> 1. Wizyta (3–5 Dni) obejmuje wszczepienie implantów i stałe zęby tymczasowe (nigdy nie zostajesz bez zębów); po 3-miesięcznym okresie gojenia 2. Wizyta (5–7 Dni) kończy leczenie montażem stałego mostu cyrkonowego.',
      },
      {
        id: 'recovery',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon03.webp',
        title: 'Czas Rekonwalescencji i Gojenie',
        content:
          '<strong>24 do 48 godzin na rekonwalescencję po zabiegu, 3 miesiące na pełną osteointegrację kości.</strong> Dzięki komputerowemu znieczuleniu miejscowemu obrzęk i dolegliwości są minimalne; pacjenci wracają do codziennych zajęć w ciągu 2 dni. W okresie 3 miesięcy most tymczasowy chroni implanty podczas spożywania miękkich pokarmów.',
      },
      {
        id: 'price',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon04.webp',
        title: 'Przejrzyste Ceny i Pakiety',
        content:
          '<strong>Pakiety All-on-4 all-inclusive zaczynają się od €4,900 / £4,200 ($5,700) za łuk zębowy.</strong> Pakiety obejmują 4 implanty tytanowe premium (Straumann, DXL, NucleOSS), stałe zęby tymczasowe, ostateczny most cyrkonowy, tomografię 3D, hotel 4/5-gwiazdkowy ze śniadaniami i transfery VIP Mercedes bez ukrytych kosztów.',
      },
    ],
  },
  pt: {
    sectionTitle: 'Sua Jornada Odontológica Simplificada',
    subText:
      'Desde a primeira consulta até o seu sorriso definitivo, garantimos uma experiência transparente e de alto padrão em Istambul. Conheça o tempo de estadia, etapas, recuperação e preços de pacotes.',
    contactHeading: 'Fale Conosco com Facilidade',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Ligação Telefônica',
    quickFormLabel: 'Formulário Rápido',
    emailLabel: 'E-mail',
    items: [
      {
        id: 'stay',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon01.webp',
        title: 'Tempo Médio de Estadia em Istambul',
        content:
          '<strong>3 a 5 dias para a 1ª visita, 5 a 7 dias para a 2ª visita.</strong> Na 1ª visita (3–5 dias), nossos cirurgiões realizam a tomografia 3D, extrações necessárias, cirurgia dos 4 implantes e fixação da ponte provisória no mesmo dia. A 2ª visita (5–7 dias, após 3 meses) é dedicada às provas estéticas e entrega da ponte definitiva de zircônia.',
      },
      {
        id: 'visits',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon02.webp',
        title: 'Número de Visitas Necessárias',
        content:
          '<strong>São necessárias exatamente 2 visitas para uma restauração completa e permanente:</strong> A 1ª Visita (3–5 Dias) compreende a cirurgia e dentes provisórios imediatos (você nunca fica sem dentes); após 3 meses de osseointegração, a 2ª Visita (5–7 Dias) finaliza o tratamento com a instalação da ponte definitiva de zircônia.',
      },
      {
        id: 'recovery',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon03.webp',
        title: 'Recuperação e Cicatrização',
        content:
          '<strong>24 a 48 horas para recuperação cirúrgica imediata, 3 meses para osseointegração completa.</strong> Graças à anestesia local computadorizada e cirurgia guiada, o inchaço e desconforto são mínimos, permitindo retorno às atividades em 2 dias. Durante os 3 meses de cicatrização, a prótese provisória protege os implantes com dieta macia.',
      },
      {
        id: 'price',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon04.webp',
        title: 'Preço e Transparência',
        content:
          '<strong>Os pacotes All-on-4 com tudo incluído começam a partir de €4.900 / £4.200 ($5.700) por arcada.</strong> Inclui 4 implantes de titânio premium (Straumann, DXL, NucleOSS), dentes provisórios fixos imediatos, ponte definitiva de zircônia, tomografia 3D, hotel 4/5 estrelas com café da manhã e transfers VIP Mercedes sem taxas ocultas.',
      },
    ],
  },
  es: {
    sectionTitle: 'Su Viaje Dental Hecho Simple y Transparente',
    subText:
      'Desde su primera consulta hasta su sonrisa definitiva, garantizamos un viaje predecible y de lujo en Estambul. Conozca tiempos de estancia, visitas necesarias, proceso de recuperación y precios con todo incluido.',
    contactHeading: 'Contáctenos de Forma Rápida y Sencilla',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Llamada Telefónica',
    quickFormLabel: 'Formulario Rápido',
    emailLabel: 'Correo Electrónico',
    items: [
      {
        id: 'stay',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon01.webp',
        title: 'Duración Media de la Estancia en Estambul',
        content:
          '<strong>De 3 a 5 días para la 1ª visita, de 5 a 7 días para la 2ª visita.</strong> En la 1ª visita (3–5 días) se realiza el TAC 3D, extracciones, colocación de 4 implantes y ajuste del puente provisional fijo en el mismo día. La 2ª visita (5–7 días, tras 3 meses) se dedica a las pruebas estéticas y entrega final del puente permanente de circonio.',
      },
      {
        id: 'visits',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon02.webp',
        title: 'Número de Visitas Requeridas',
        content:
          '<strong>Se requieren exactamente 2 visitas para una restauración completa y permanente:</strong> La 1ª Visita (3–5 Días) cubre la cirugía y colocación de dientes provisionales inmediatos (nunca saldrá sin dientes); tras 3 meses de cicatrización, la 2ª Visita (5–7 Días) concluye con la fijación del puente definitivo de circonio.',
      },
      {
        id: 'recovery',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon03.webp',
        title: 'Tiempo de Recuperación y Cicatrización',
        content:
          '<strong>De 24 a 48 horas para recuperación quirúrgica inmediata, 3 meses para osteointegración completa.</strong> Gracias a la anestesia local computerizada y cirugía guiada, la inflamación y molestias son mínimas; la vuelta a la rutina se produce en 2 días. Durante los 3 meses de cicatrización, el puente provisional protege los implantes con dieta blanda.',
      },
      {
        id: 'price',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon04.webp',
        title: 'Precios y Transparencia en Paquetes',
        content:
          '<strong>Los paquetes All-on-4 todo incluido comienzan desde €4.900 / £4.200 ($5.700) por arcada.</strong> Incluye 4 implantes de titanio premium (Straumann, DXL, NucleOSS), dientes provisionales fijos inmediatos, puente definitivo de circonio, TAC 3D, hotel de 4/5 estrellas con desayuno y traslados VIP Mercedes sin costes ocultos.',
      },
    ],
  },
  ru: {
    sectionTitle: 'Ваш Стоматологический Путь – Просто и Понятно',
    subText:
      'От первого обращения до вашей постоянной новой улыбки мы обеспечиваем предсказуемый и комфортный процесс в Стамбуле. Узнайте точные сроки пребывания, этапы визитов, процесс восстановления и прозрачные пакетные цены.',
    contactHeading: 'Свяжитесь с Нами – Быстро и Удобно',
    whatsappLabel: 'WhatsApp',
    phoneLabel: 'Телефонный звонок',
    quickFormLabel: 'Быстрая форма',
    emailLabel: 'Электронная почта',
    items: [
      {
        id: 'stay',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon01.webp',
        title: 'Средняя Продолжительность Пребывания в Стамбуле',
        content:
          '<strong>От 3 до 5 дней на 1-й визит, от 5 до 7 дней на 2-й визит.</strong> В 1-й визит (3–5 дней) проводятся 3D-КТ диагностика, удаление зубов, установка 4 имплантов и фиксация несъемного временного моста. Во 2-й визит (5–7 дней, через 3 месяца) выполняются цифровые примерки и установка постоянного циркониевого моста.',
      },
      {
        id: 'visits',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon02.webp',
        title: 'Количество Необходимых Визитов',
        content:
          '<strong>Для постоянного восстановления челюсти требуется ровно 2 визита:</strong> 1-й Визит (3–5 Дней) включает операцию и фиксацию временных несъемных зубов (вы ни дня не остаетесь без зубов); после 3 месяцев остеоинтеграции 2-й Визит (5–7 Дней) завершает лечение установкой постоянного циркониевого моста.',
      },
      {
        id: 'recovery',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon03.webp',
        title: 'Сроки Восстановления и Приживление',
        content:
          '<strong>24–48 часов на первичное заживление, 3 месяца на полную остеоинтеграцию с костью.</strong> Благодаря компьютерной местной анестезии и навигационной хирургии отек и дискомфорт минимальны; большинство пациентов возвращаются к делам через 2 дня. В течение 3 месяцев временный мост защищает импланты при мягкой диете.',
      },
      {
        id: 'price',
        icon: 'https://sohodent.com/doc/static/tedaviicon/icon04.webp',
        title: 'Цены и Прозрачность Пакетов',
        content:
          '<strong>Пакетные цены «все включено» на All-on-4 начинаются от €4,900 / £4,200 ($5,700) за челюсть.</strong> В стоимость входят 4 премиальных импланта (Straumann, DXL, NucleOSS), временный несъемный мост, постоянный циркониевый мост, 3D-КТ, отель 4/5* с завтраками и VIP-трансфер Mercedes без скрытых доплат.',
      },
    ],
  },
};

interface Props {
  stayDuration?: string;
  visitCount?: string;
  recoveryTime?: string;
  priceEstimate?: string;
}

export default function TreatmentJourneySimpleSection({
  stayDuration,
  visitCount,
  recoveryTime,
  priceEstimate,
}: Props) {
  const locale = useLocale();
  const data = JOURNEY_DATA[locale] || JOURNEY_DATA.en;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  const getCustomContent = (id: string, defaultContent: string) => {
    if (id === 'stay' && stayDuration) return stayDuration;
    if (id === 'visits' && visitCount) return visitCount;
    if (id === 'recovery' && recoveryTime) return recoveryTime;
    if (id === 'price' && priceEstimate) return priceEstimate;
    return defaultContent;
  };

  return (
    <section aria-labelledby="journey-simple-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head Section */}
        <div className={styles.head}>
          <h2 id="journey-simple-heading" className={styles.title}>
            {data.sectionTitle}
          </h2>
          <p className={styles.subText}>{data.subText}</p>
        </div>

        {/* Main Card */}
        <div className={styles.box}>
          <div className={styles.accordion}>
            {data.items.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={item.id} className={styles.item}>
                  <div
                    className={styles.titleRow}
                    onClick={() => toggleItem(idx)}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleItem(idx);
                      }
                    }}
                  >
                    <div className={styles.leftGroup}>
                      <div className={styles.iconBadge}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.icon}
                          alt={item.title}
                          width={52}
                          height={52}
                          className={styles.iconImg}
                          loading="lazy"
                        />
                      </div>
                      <div className={styles.textCol}>
                        <span className={styles.itemTitle}>{item.title}</span>
                      </div>
                    </div>

                    <span
                      className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                      aria-hidden="true"
                    >
                      <svg width="18" height="18" viewBox="0 0 448 512" fill="currentColor">
                        <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                      </svg>
                    </span>
                  </div>

                  {isOpen && (
                    <div className={styles.content}>
                      <div
                        style={{ margin: 0, lineHeight: 1.75, color: '#475569', fontSize: '0.96rem' }}
                        dangerouslySetInnerHTML={{
                          __html: getCustomContent(item.id, item.content),
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact Bar Inside Card */}
          <div className={styles.contactWrap}>
            <h3 className={styles.contactHead}>{data.contactHeading}</h3>
            <div className={styles.buttonRow}>
              {/* WhatsApp */}
              <a
                href={getWhatsAppLink(locale)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactPill}
                aria-label="WhatsApp"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sohodent.com/doc/static/a1/contact-icon-10.png.webp"
                  alt=""
                  width={22}
                  height={22}
                  className={styles.contactIconImg}
                />
                <span className={styles.contactLabel}>{data.whatsappLabel}</span>
              </a>

              {/* Phone Call */}
              <a href="tel:+905434568080" className={styles.contactPill} aria-label="Phone Call">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sohodent.com/doc/static/a1/contact-icon-11.png.webp"
                  alt=""
                  width={22}
                  height={22}
                  className={styles.contactIconImg}
                />
                <span className={styles.contactLabel}>{data.phoneLabel}</span>
              </a>

              {/* Quick Form */}
              <a href="#js_target1" className={styles.contactPill} aria-label="Quick Form">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sohodent.com/doc/static/a1/contact-icon-12.png.webp"
                  alt=""
                  width={22}
                  height={22}
                  className={styles.contactIconImg}
                />
                <span className={styles.contactLabel}>{data.quickFormLabel}</span>
              </a>

              {/* E-mail */}
              <a href="mailto:info@sohodent.com" className={styles.contactPill} aria-label="E-mail">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://sohodent.com/doc/static/a1/contact-icon-13.png.webp"
                  alt=""
                  width={22}
                  height={22}
                  className={styles.contactIconImg}
                />
                <span className={styles.contactLabel}>{data.emailLabel}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
