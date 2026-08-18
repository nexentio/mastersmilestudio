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
  en: {
    heading: 'Find the Right Treatment for You',
    subtitle:
      'Not sure which dental treatment suits your needs? Browse through our treatment options to see who each procedure is for and what it offers so you can make informed decisions about your dental care.',
    readMore: 'READ MORE',
    items: [
      {
        title: 'Inlay & Onlay',
        target: 'Patients with a large cavity who are looking for a more durable solution than a classic filling',
        desc: 'It is a custom porcelain or composite filling prepared in a laboratory.',
        img: '/treatments/inlay-onlay-comparison.jpg',
        href: '/treatments/general-dentistry/inlay-onlay',
      },
      {
        title: 'Dental Cleaning (Scaling & Polishing)',
        target: 'Patients with gum bleeding, bad breath, or tartar buildup',
        desc: 'Gum health is preserved by cleaning tartar and plaque.',
        img: '/treatments/dental-cleaning-scaling.jpg',
        href: '/treatments/general-dentistry/dental-cleaning',
      },
      {
        title: 'Tooth Fillings (Amalgam/Composite)',
        target: 'Patients with decayed or broken teeth',
        desc: 'The damaged part of the tooth is cleaned and restored with an aesthetic or metal filling.',
        img: '/treatments/tooth-fillings-amalgam-composite.jpg',
        href: '/treatments/general-dentistry/tooth-fillings',
      },
      {
        title: 'Root Canal Treatment',
        target: 'Patients with an inflamed tooth nerve due to deep decay, and a painful tooth',
        desc: 'The infected nerve inside the tooth is removed, and the tooth is saved.',
        img: '/treatments/root-canal-treatment-endodontics.jpg',
        href: '/treatments/general-dentistry/root-canal',
      },
      {
        title: 'Tooth Extraction',
        target: 'Patients with a tooth that is too decayed to be saved, problematic, or impacted',
        desc: 'The tooth is extracted under local anesthesia; a surgical procedure may be applied if necessary.',
        img: '/treatments/tooth-extraction-surgical.jpg',
        href: '/treatments/general-dentistry/tooth-extraction',
      },
      {
        title: 'Dental Sealants',
        target: 'Patients, especially children, who want to protect their high-risk back teeth from decay',
        desc: 'Decay is prevented with a protective layer applied to the chewing surface of the tooth.',
        img: '/treatments/dental-sealants-fissure.jpg',
        href: '/treatments/general-dentistry/dental-sealants',
      },
      {
        title: 'Fluoride Treatment',
        target: 'Children with a high risk of decay and adults with sensitive tooth structure',
        desc: 'It is a simple and quick application that strengthens tooth enamel to prevent decay.',
        img: '/treatments/general/fluoride-treatment-copy.webp',
        href: '/treatments/general-dentistry/fluoride-treatment',
      },
      {
        title: 'Bruxism Treatment (Night Guard)',
        target: 'Patients who experience teeth grinding or clenching',
        desc: 'A night guard prevents wear on the teeth and protects the jaw muscles.',
        img: '/treatments/general/night-guard-copy.webp',
        href: '/treatments/general-dentistry/bruxism-treatment',
      },
    ],
  },
  tr: {
    heading: 'Sizin İçin En Doğru Tedaviyi Bulun',
    subtitle:
      'Hangi diş tedavisinin ihtiyaçlarınıza uygun olduğundan emin değil misiniz? Ağız ve diş sağlığınız konusunda bilinçli kararlar verebilmeniz için tedavi seçeneklerimizi inceleyin.',
    readMore: 'DETAYLI BİLGİ',
    items: [
      {
        title: 'İnley & Onley Porselen Dolgu',
        target: 'Geniş çürüğü olan ve klasik dolgudan daha dayanıklı bir çözüm arayan hastalar',
        desc: 'Laboratuvarda kişiye özel hazırlanan dayanıklı porselen veya kompozit restorasyondur.',
        img: '/treatments/inlay-onlay-comparison.jpg',
        href: '/treatments/general-dentistry/inlay-onlay',
      },
      {
        title: 'Diş Taşı Temizliği (Detertraj & Polisaj)',
        target: 'Diş eti kanaması, ağız kokusu veya diş taşı birikimi yaşayan hastalar',
        desc: 'Diş taşı ve plaklar temizlenerek diş eti ve kemik sağlığı korunur.',
        img: '/treatments/dental-cleaning-scaling.jpg',
        href: '/treatments/general-dentistry/dental-cleaning',
      },
      {
        title: 'Estetik Diş Dolgusu (Kompozit)',
        target: 'Çürük veya kırık dişleri olan hastalar',
        desc: 'Dişin hasarlı kısmı temizlenir ve doğal diş renginde estetik dolgu ile restore edilir.',
        img: '/treatments/tooth-fillings-amalgam-composite.jpg',
        href: '/treatments/general-dentistry/tooth-fillings',
      },
      {
        title: 'Kanal Tedavisi (Endodonti)',
        target: 'Derin çürük nedeniyle diş siniri iltihaplanmış ve ağrılı dişi olan hastalar',
        desc: 'Dişin içindeki enfekte sinir temizlenir, kök kanalları doldurulur ve diş çekilmekten kurtarılır.',
        img: '/treatments/root-canal-treatment-endodontics.jpg',
        href: '/treatments/general-dentistry/root-canal',
      },
      {
        title: 'Diş Çekimi & 20’lik Dişler',
        target: 'Kurtarılamayacak kadar çürümüş, problemli veya gömülü dişi olan hastalar',
        desc: 'Lokal anestezi altında ağrısız çekim yapılır; gerekirse cerrahi işlem uygulanır.',
        img: '/treatments/tooth-extraction-surgical.jpg',
        href: '/treatments/general-dentistry/tooth-extraction',
      },
      {
        title: 'Fissür Örtücü (Dental Sealants)',
        target: 'Özellikle çocuklar ve azı dişlerini çürük riskinden korumak isteyen hastalar',
        desc: 'Dişin çiğneme yüzeyine uygulanan koruyucu katman ile çürük oluşumu engellenir.',
        img: '/treatments/dental-sealants-fissure.jpg',
        href: '/treatments/general-dentistry/dental-sealants',
      },
      {
        title: 'Profesyonel Florür Uygulaması',
        target: 'Yüksek çürük riski olan çocuklar ve hassas diş yapısına sahip yetişkinler',
        desc: 'Diş minesini güçlendirerek çürükleri önleyen pratik ve etkili bir koruyucu uygulamadır.',
        img: '/treatments/general/fluoride-treatment-copy.webp',
        href: '/treatments/general-dentistry/fluoride-treatment',
      },
      {
        title: 'Bruksizm Tedavisi & Gece Plağı',
        target: 'Diş sıkma veya gıcırdatma sorunu yaşayan hastalar',
        desc: 'Özel gece plağı dişlerdeki aşınmayı önler ve çene eklemini korur.',
        img: '/treatments/general/night-guard-copy.webp',
        href: '/treatments/general-dentistry/bruxism-treatment',
      },
    ],
  },
  de: {
    heading: 'Finden Sie die passende Behandlung für sich',
    subtitle:
      'Nicht sicher, welche Zahnbehandlung am besten zu Ihnen passt? Informieren Sie sich über unsere Behandlungsoptionen für fundierte Entscheidungen.',
    readMore: 'MEHR ERFAHREN',
    items: [
      {
        title: 'Inlay & Onlay',
        target: 'Patienten mit großen Kavitäten, die eine langlebigere Lösung als klassische Füllungen suchen',
        desc: 'Individuelle Porzellan- oder Kompositfüllung aus dem Meisterlabor.',
        img: '/treatments/inlay-onlay-comparison.jpg',
        href: '/treatments/general-dentistry/inlay-onlay',
      },
      {
        title: 'Professionelle Zahnreinigung (PZR)',
        target: 'Patienten mit Zahnfleischbluten, Mundgeruch oder Zahnsteinablagerungen',
        desc: 'Schutz der Zahnfleischgesundheit durch sanfte Entfernung von Zahnstein und Belägen.',
        img: '/treatments/dental-cleaning-scaling.jpg',
        href: '/treatments/general-dentistry/dental-cleaning',
      },
      {
        title: 'Zahnfüllungen (Komposit)',
        target: 'Patienten mit kariösen oder abgebrochenen Zähnen',
        desc: 'Schonende Entfernung von Karies und zahnfarbene ästhetische Restauration.',
        img: '/treatments/tooth-fillings-amalgam-composite.jpg',
        href: '/treatments/general-dentistry/tooth-fillings',
      },
      {
        title: 'Wurzelkanalbehandlung (Endodontie)',
        target: 'Patienten mit entzündetem Zahnnerv durch tiefe Karies und Zahnschmerzen',
        desc: 'Entfernung des infizierten Nervs zur Erhaltung des natürlichen Zahns.',
        img: '/treatments/root-canal-treatment-endodontics.jpg',
        href: '/treatments/general-dentistry/root-canal',
      },
      {
        title: 'Zahnextraktion & Weisheitszähne',
        target: 'Nicht erhaltungsfähige, retinierte oder schmerzhafte Zähne',
        desc: 'Schmerzfreie Extraktion unter Lokalanästhesie mit minimaler Gewebebelastung.',
        img: '/treatments/tooth-extraction-surgical.jpg',
        href: '/treatments/general-dentistry/tooth-extraction',
      },
      {
        title: 'Fissurenversiegelung',
        target: 'Kinder und Patienten zum Schutz kariesgefährdeter Backenzähne',
        desc: 'Schutzschicht auf Kauflächen zur wirksamen Vorbeugung von Karies.',
        img: '/treatments/dental-sealants-fissure.jpg',
        href: '/treatments/general-dentistry/dental-sealants',
      },
      {
        title: 'Fluoridierung',
        target: 'Kinder mit Kariesrisiko und Erwachsene mit empfindlichen Zähnen',
        desc: 'Stärkung des Zahnschmelzes und nachhaltiger Schutz vor Säureangriffen.',
        img: '/treatments/general/fluoride-treatment-copy.webp',
        href: '/treatments/general-dentistry/fluoride-treatment',
      },
      {
        title: 'Bruxismus-Behandlung & Aufbissschiene',
        target: 'Patienten mit Zähneknirschen oder Kieferverspannungen',
        desc: 'Individuelle Nachtschiene schützt Zähne vor Abrieb und entlastet das Kiefergelenk.',
        img: '/treatments/general/night-guard-copy.webp',
        href: '/treatments/general-dentistry/bruxism-treatment',
      },
    ],
  },
  pl: {
    heading: 'Wybierz odpowiednie leczenie dla siebie',
    subtitle:
      'Nie wiesz, który zabieg stomatologiczny jest dla Ciebie najlepszy? Przejrzyj nasze opcje leczenia i podejmij świadomą decyzję.',
    readMore: 'WIĘCEJ INFORMACJI',
    items: [
      {
        title: 'Inlay i Onlay',
        target: 'Pacjenci z dużymi ubytkami szukający trwalszego rozwiązania niż klasyczna plomba',
        desc: 'Precyzyjne wypełnienie porcelanowe lub kompozytowe wykonane w laboratorium.',
        img: '/treatments/inlay-onlay-comparison.jpg',
        href: '/treatments/general-dentistry/inlay-onlay',
      },
      {
        title: 'Higienizacja i Skaling Zębów',
        target: 'Pacjenci z krwawieniem dziąseł, kamieniem nazębnym lub nieświeżym oddechem',
        desc: 'Ochrona zdrowia dziąseł poprzez ultradźwiękowe usuwanie kamienia i osadów.',
        img: '/treatments/dental-cleaning-scaling.jpg',
        href: '/treatments/general-dentistry/dental-cleaning',
      },
      {
        title: 'Wypełnienia Kompozytowe',
        target: 'Pacjenci ze zmianami próchnicowymi lub ukruszonymi zębami',
        desc: 'Oczyszczenie ubytku i estetyczna odbudowa w kolorze naturalnego zęba.',
        img: '/treatments/tooth-fillings-amalgam-composite.jpg',
        href: '/treatments/general-dentistry/tooth-fillings',
      },
      {
        title: 'Leczenie Kanałowe (Endodoncja)',
        target: 'Pacjenci z bólem zęba i zapaleniem miazgi na skutek głębokiej próchnicy',
        desc: 'Usunięcie zakażonej miazgi i szczelne wypełnienie kanałów ratujące ząb.',
        img: '/treatments/root-canal-treatment-endodontics.jpg',
        href: '/treatments/general-dentistry/root-canal',
      },
      {
        title: 'Ekstrakcja Zęba & Ósemki',
        target: 'Zęby nienadające się do uratowania, zatrzymane lub problematyczne ósemki',
        desc: 'Bezbolesny zabieg w znieczuleniu miejscowym z minimalną inwazyjnością.',
        img: '/treatments/tooth-extraction-surgical.jpg',
        href: '/treatments/general-dentistry/tooth-extraction',
      },
      {
        title: 'Lakowanie Zębów',
        target: 'Dzieci i dorośli chcący zabezpieczyć zęby trzonowe przed próchnicą',
        desc: 'Ochronna warstwa uszczelniająca bruzdy na powierzchni żującej zębów.',
        img: '/treatments/dental-sealants-fissure.jpg',
        href: '/treatments/general-dentistry/dental-sealants',
      },
      {
        title: 'Fluoryzacja',
        target: 'Osoby z nadwrażliwością zębów oraz podwyższonym ryzykiem próchnicy',
        desc: 'Zabieg wzmacniający szkliwo i chroniący przed działaniem kwasów bakteryjnych.',
        img: '/treatments/general/fluoride-treatment-copy.webp',
        href: '/treatments/general-dentistry/fluoride-treatment',
      },
      {
        title: 'Leczenie Bruksizmu & Szyna Nocna',
        target: 'Pacjenci z nawykowym zgrzytaniem i zaciskaniem zębów',
        desc: 'Indywidualna szyna relaksacyjna zapobiega ścieraniu zębów i chroni stawy.',
        img: '/treatments/general/night-guard-copy.webp',
        href: '/treatments/general-dentistry/bruxism-treatment',
      },
    ],
  },
  pt: {
    heading: 'Encontre o Tratamento Certo para Você',
    subtitle:
      'Não tem certeza de qual tratamento dentário atende às suas necessidades? Conheça nossas opções para tomar decisões informadas sobre sua saúde bucal.',
    readMore: 'SAIBA MAIS',
    items: [
      {
        title: 'Inlay & Onlay',
        target: 'Pacientes com grandes cavidades que buscam uma solução mais durável que a restauração convencional',
        desc: 'Restauração personalizada em porcelana ou resina preparada em laboratório.',
        img: '/treatments/inlay-onlay-comparison.jpg',
        href: '/treatments/general-dentistry/inlay-onlay',
      },
      {
        title: 'Limpeza Dental (Raspagem e Polimento)',
        target: 'Pacientes com sangramento gengival, mau hálito ou acúmulo de tártaro',
        desc: 'A saúde gengival é preservada através da remoção de placa bacteriana e tártaro.',
        img: '/treatments/dental-cleaning-scaling.jpg',
        href: '/treatments/general-dentistry/dental-cleaning',
      },
      {
        title: 'Restaurações Dentárias (Resina)',
        target: 'Pacientes com dentes cariados ou quebrados',
        desc: 'A área danificada é tratada e restaurada esteticamente na cor natural do dente.',
        img: '/treatments/tooth-fillings-amalgam-composite.jpg',
        href: '/treatments/general-dentistry/tooth-fillings',
      },
      {
        title: 'Tratamento de Canal (Endodontia)',
        target: 'Pacientes com inflamação do nervo por cárie profunda e dor aguda',
        desc: 'O nervo infectado é removido e os canais são selados, salvando o dente.',
        img: '/treatments/root-canal-treatment-endodontics.jpg',
        href: '/treatments/general-dentistry/root-canal',
      },
      {
        title: 'Extração Dentária & Dentes do Siso',
        target: 'Dentes sem possibilidade de recuperação, inclusos ou problemáticos',
        desc: 'Extração segura e indolor sob anestesia local com rápida recuperação.',
        img: '/treatments/tooth-extraction-surgical.jpg',
        href: '/treatments/general-dentistry/tooth-extraction',
      },
      {
        title: 'Selantes Dentários',
        target: 'Especialmente crianças e pacientes que desejam proteger dentes posteriores',
        desc: 'Camada protetora aplicada nas fissuras para prevenir o surgimento de cáries.',
        img: '/treatments/dental-sealants-fissure.jpg',
        href: '/treatments/general-dentistry/dental-sealants',
      },
      {
        title: 'Aplicação de Flúor',
        target: 'Crianças com risco de cárie e adultos com sensibilidade dental',
        desc: 'Fortalecimento do esmalte dentário com aplicação clínica de flúor concentrado.',
        img: '/treatments/general/fluoride-treatment-copy.webp',
        href: '/treatments/general-dentistry/fluoride-treatment',
      },
      {
        title: 'Tratamento de Bruxismo & Placa Miorelaxante',
        target: 'Pacientes que sofrem com ranger ou apertar involuntário dos dentes',
        desc: 'Placa personalizada que evita o desgaste dentário e protege a articulação temporomandibular.',
        img: '/treatments/general/night-guard-copy.webp',
        href: '/treatments/general-dentistry/bruxism-treatment',
      },
    ],
  },
  es: {
    heading: 'Encuentre el Tratamiento Adecuado para Usted',
    subtitle:
      '¿No está seguro de qué tratamiento dental se adapta a sus necesidades? Explore nuestras opciones para tomar decisiones informadas sobre su salud dental.',
    readMore: 'MÁS INFORMACIÓN',
    items: [
      {
        title: 'Inlay & Onlay',
        target: 'Pacientes con cavidades grandes que buscan una solución más duradera que el empaste tradicional',
        desc: 'Incrustación personalizada de porcelana o composite fabricada en laboratorio.',
        img: '/treatments/inlay-onlay-comparison.jpg',
        href: '/treatments/general-dentistry/inlay-onlay',
      },
      {
        title: 'Limpieza Dental Profesional (Tartrectomía)',
        target: 'Pacientes con sangrado de encías, mal aliento o acumulación de sarro',
        desc: 'Eliminación cuidadosa del sarro y la placa bacteriana para proteger encías y hueso.',
        img: '/treatments/dental-cleaning-scaling.jpg',
        href: '/treatments/general-dentistry/dental-cleaning',
      },
      {
        title: 'Empastes Dentales Estéticos (Composite)',
        target: 'Pacientes con caries o dientes fracturados',
        desc: 'Eliminación de la caries y restauración estética con resina del color del diente.',
        img: '/treatments/tooth-fillings-amalgam-composite.jpg',
        href: '/treatments/general-dentistry/tooth-fillings',
      },
      {
        title: 'Endodoncia (Tratamiento de Conducto)',
        target: 'Pacientes con dolor agudo o inflamación del nervio dental por caries profunda',
        desc: 'Se elimina el tejido pulpar infectado y se sella el diente para evitar su extracción.',
        img: '/treatments/root-canal-treatment-endodontics.jpg',
        href: '/treatments/general-dentistry/root-canal',
      },
      {
        title: 'Extracción Dental & Muelas del Juicio',
        target: 'Dientes no restaurables, retenidos o que causan molestias continuas',
        desc: 'Procedimiento indoloro bajo anestesia local con técnica mínimamente invasiva.',
        img: '/treatments/tooth-extraction-surgical.jpg',
        href: '/treatments/general-dentistry/tooth-extraction',
      },
      {
        title: 'Selladores Dentales',
        target: 'Especialmente niños y pacientes que buscan proteger los molares contra la caries',
        desc: 'Capa protectora que sella las fisuras en la superficie masticatoria.',
        img: '/treatments/dental-sealants-fissure.jpg',
        href: '/treatments/general-dentistry/dental-sealants',
      },
      {
        title: 'Fluorización Profesional',
        target: 'Personas con alto riesgo de caries o sensibilidad en el esmalte dental',
        desc: 'Aplicación clínica rápida que remineraliza y fortalece el esmalte dental.',
        img: '/treatments/general/fluoride-treatment-copy.webp',
        href: '/treatments/general-dentistry/fluoride-treatment',
      },
      {
        title: 'Tratamiento de Bruxismo & Férula de Descarga',
        target: 'Pacientes que rechinan o aprietan los dientes durante la noche',
        desc: 'Férula protectora a medida que previene el desgaste dental y relaja la mandíbula.',
        img: '/treatments/general/night-guard-copy.webp',
        href: '/treatments/general-dentistry/bruxism-treatment',
      },
    ],
  },
  ru: {
    heading: 'Выберите подходящее лечение для вас',
    subtitle:
      'Не уверены, какое лечение вам необходимо? Ознакомьтесь с нашими услугами, чтобы принять правильное решение о здоровье зубов.',
    readMore: 'ПОДРОБНЕЕ',
    items: [
      {
        title: 'Вкладки Inlay и Onlay',
        target: 'Пациенты с большими полостями, ищущие более прочное решение, чем пломба',
        desc: 'Индивидуальные керамические или композитные микропротезы из лаборатории.',
        img: '/treatments/inlay-onlay-comparison.jpg',
        href: '/treatments/general-dentistry/inlay-onlay',
      },
      {
        title: 'Профессиональная чистка зубов (Air-Flow и УЗ)',
        target: 'Пациенты с кровоточивостью десен, зубным камнем или налетом',
        desc: 'Сохранение здоровья десен за счет ультразвукового удаления камня и полировки.',
        img: '/treatments/dental-cleaning-scaling.jpg',
        href: '/treatments/general-dentistry/dental-cleaning',
      },
      {
        title: 'Эстетические композитные пломбы',
        target: 'Пациенты с кариозными поражениями или сколами зубов',
        desc: 'Удаление поврежденных тканей и эстетическая реставрация в цвет зуба.',
        img: '/treatments/tooth-fillings-amalgam-composite.jpg',
        href: '/treatments/general-dentistry/tooth-fillings',
      },
      {
        title: 'Лечение корневых каналов (Эндодонтия)',
        target: 'Пациенты с воспалением нерва из-за глубокого кариеса и острой болью',
        desc: 'Удаление воспаленного нерва и герметичная 3D-пломбировка каналов для спасения зуба.',
        img: '/treatments/root-canal-treatment-endodontics.jpg',
        href: '/treatments/general-dentistry/root-canal',
      },
      {
        title: 'Удаление зубов & Зубы мудрости',
        target: 'Не подлежащие восстановлению, ретинированные или дистопированные зубы',
        desc: 'Безболезненное атравматичное удаление под местной анестезией.',
        img: '/treatments/tooth-extraction-surgical.jpg',
        href: '/treatments/general-dentistry/tooth-extraction',
      },
      {
        title: 'Герметизация фиссур',
        target: 'Дети и взрослые для защиты жевательных зубов от кариеса',
        desc: 'Защитный слой на жевательной поверхности для предотвращения кариеса.',
        img: '/treatments/dental-sealants-fissure.jpg',
        href: '/treatments/general-dentistry/dental-sealants',
      },
      {
        title: 'Фторирование эмали',
        target: 'Пациенты с повышенной чувствительностью и риском кариеса',
        desc: 'Укрепление зубной эмали и повышение ее устойчивости к кислотам.',
        img: '/treatments/general/fluoride-treatment-copy.webp',
        href: '/treatments/general-dentistry/fluoride-treatment',
      },
      {
        title: 'Лечение бруксизма & Ночная капа',
        target: 'Пациенты, сжимающие или скрежещущие зубами во сне',
        desc: 'Индивидуальная капа защищает зубы от стирания и снижает нагрузку на сустав.',
        img: '/treatments/general/night-guard-copy.webp',
        href: '/treatments/general-dentistry/bruxism-treatment',
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
                          {/* eslint-disable-next-line @next/next/no-img-element */}
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
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
