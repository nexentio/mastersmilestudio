'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import styles from './CosmeticDentistryIntroSection.module.css';

interface IntroContent {
  heading: string;
  lead: string;
  p1: string;
  p2: string;
  callout: string;
}

const DICTIONARIES: Record<string, IntroContent> = {
  en: {
    heading: 'Artistic Cosmetic Dentistry & Smile Design in Antalya',
    lead: 'Where aesthetic mastery meets clinical perfection — bespoke veneers, Hollywood smile transformations, and 3D digital facial harmonization.',
    p1: 'Cosmetic dentistry represents the refined union of medical science and facial artistry, designed to elevate your natural smile while preserving optimal biting function. At Master Smile Studio, our cosmetic dentistry department delivers tailored porcelain laminate veneers, full-mouth Hollywood Smile rehabilitations, Philips Zoom laser teeth whitening, and microscopic composite bonding.',
    p2: 'Utilizing cutting-edge 3D Digital Smile Design (DSD) software, intraoral 3Shape scanners, and ultra-translucent Ivoclar E-Max and monolithic zirconia ceramics, our prosthodontists calibrate every tooth contour, texture, and light translucency to harmonize flawlessly with your lips, facial proportions, and skin tone.',
    callout: 'Experience the confidence of a bespoke, radiant smile crafted by Antalya’s leading aesthetic dental specialists with lifelong durability.',
  },
  tr: {
    heading: 'Antalya’da Estetik Diş Hekimliği ve Kişiye Özel Gülüş Tasarımı',
    lead: 'Sanatın ve klinik mükemmelliğin buluştuğu nokta: Kişiye özel porselen laminalar, Hollywood Gülüşü ve 3D dijital yüz uyumu.',
    p1: 'Estetik diş hekimliği; doğal çiğneme fonksiyonlarını korurken yüz güzelliğinizi ve özgüveninizi en üst seviyeye taşıyan tıp ve sanatın kusursuz birleşimidir. Master Smile Studio kliniğimizde; kişiye özel porselen lamine kaplamalar, Hollywood Smile gülüş yenilemeleri, Philips Zoom lazerli diş beyazlatma ve mikroskobik kompozit bonding uygulamaları titizlikle gerçekleştirilir.',
    p2: 'İleri 3D Dijital Gülüş Tasarımı (DSD) teknolojisi, 3Shape ağız içi tarayıcılar ve yüksek ışık geçirgenliğine sahip Ivoclar E-Max seramikler kullanılarak diş formu, uzunluğu, basamak açıları ve mikro-dokuları yüz hatlarınız, dudak dinamikleriniz ve ten renginizle tam uyumlu olarak tasarlanır.',
    callout: 'Antalya’nın önde gelen estetik hekimleri tarafından tasarlanan, doğal ışıltısını ömür boyu koruyan kusursuz bir gülüşün ayrıcalığını yaşayın.',
  },
  de: {
    heading: 'Ästhetische Zahnheilkunde & Digitales Lächeldesign in Antalya',
    lead: 'Wo medizinische Perfektion auf dentale Kunst trifft: Maßgeschneiderte Veneers, Hollywood Smile Makeovers und 3D-Gesichtsharmonisierung.',
    p1: 'Die ästhetische Zahnheilkunde verbindet moderne Zahnmedizin mit feinstem ästhetischem Gespür, um Ihr Lächeln harmonisch und strahlend zu vollenden. Im Master Smile Studio bieten wir hauchdünne Keramik-Veneers, komplette Hollywood Smile Rekonstruktionen, Philips Zoom Laser-Bleaching und minimalinvasives Composite Bonding.',
    p2: 'Mithilfe von 3D Digital Smile Design (DSD) und Ivoclar E-Max Lithiumdisilikat-Keramiken stimmen unsere Spezialisten jede Zahnkontur und Transluzenz perfekt auf Ihre Lippenlinie und Gesichtssymmetrie ab.',
    callout: 'Erleben Sie ein strahlendes, natürliches und langlebiges Lächeln – individuell für Sie gestaltet von führenden Spezialisten in Antalya.',
  },
  pl: {
    heading: 'Stomatologia Estetyczna i Cyfrowe Projektowanie Uśmiechu w Antalyi',
    lead: 'Gdzie kunszt estetyczny spotyka się z doskonałością kliniczną: Licówki ceramiczne, metamorfozy Hollywood Smile i harmonia 3D.',
    p1: 'Stomatologia estetyczna to połączenie zaawansowanej wiedzy medycznej i precyzji artystycznej, mające na celu wydobycie pełnego piękna Twojego uśmiechu. W Master Smile Studio wykonujemy ultracienkie licówki porcelanowe E-Max, kompleksowe metamorfozy Hollywood Smile, laserowe wybielanie Philips Zoom oraz bonding kompozytowy.',
    p2: 'Dzięki technologii 3D Digital Smile Design (DSD) oraz skanerom wewnątrzustnym 3Shape precyzyjnie dopasowujemy kształt, odcień i przezierność zębów do rysów Twojej twarzy i dynamiki uśmiechu.',
    callout: 'Odkryj pewność siebie dzięki zachwycającemu, naturalnemu uśmiechowi zaprojektowanemu przez ekspertów w Antalyi.',
  },
  pt: {
    heading: 'Medicina Dentária Estética e Design de Sorriso em Antália',
    lead: 'Onde a arte encontra a excelência clínica: Facetas personalizadas, transformações Hollywood Smile e harmonia facial 3D.',
    p1: 'A dentisteria estética é a arte de criar sorrisos deslumbrantes que realçam a sua beleza natural e promovem a máxima autoestima. Na Master Smile Studio, realizamos facetas ultrafinas de porcelana E-Max, reabilitações completas Hollywood Smile, branqueamento a laser Philips Zoom e microestética em compósito.',
    p2: 'Através do Digital Smile Design 3D e cerâmicas de alta translucidez, calibramos cada detalhe anatómico em total harmonia com a sua fisionomia e linha labial.',
    callout: 'Transforme a sua imagem com um sorriso personalizado, radiante e com garantia de longevidade superior.',
  },
  es: {
    heading: 'Odontología Estética y Diseño de Sonrisa en Antalya',
    lead: 'Donde la precisión clínica se une al arte dental: Carillas de porcelana, transformaciones Hollywood Smile y armonización facial 3D.',
    p1: 'La odontología estética es el arte de perfeccionar su sonrisa natural, combinando belleza, luminosidad y una función oclusal impecable. En Master Smile Studio realizamos carillas de porcelana E-Max de mínima preparación, diseños integrales Hollywood Smile, blanqueamiento láser Philips Zoom y bonding estético.',
    p2: 'Con el sistema 3D Digital Smile Design (DSD) y escáneres 3Shape, diseñamos cada borde incisal, tono y textura para que se integren de forma idónea con sus facciones.',
    callout: 'Disfrute de una sonrisa deslumbrante, armónica y duradera de la mano de los mejores especialistas estéticos de Antalya.',
  },
  ru: {
    heading: 'Эстетическая стоматология и цифровой дизайн улыбки в Анталье',
    lead: 'Союз высокого медицинского искусства и технологий: Индивидуальные виниры, голливудские улыбки и 3D-гармония лица.',
    p1: 'Эстетическая стоматология — это искусство создания безупречной улыбки, подчеркивающей естественную красоту и индивидуальность каждого пациента. В Master Smile Studio мы создаем ультратонкие керамические виниры E-Max, проводим комплексные преображения Hollywood Smile, лазерное отбеливание Philips Zoom и художественную реставрацию.',
    p2: 'С помощью 3D Digital Smile Design (DSD) и сканеров 3Shape мы с математической точностью рассчитываем форму, прозрачность и пропорции зубов с учетом мимики и анатомии лица.',
    callout: 'Подарите себе ослепительную, естественную и долговечную улыбку, созданную ведущими эстетическими стоматологами Антальи.',
  },
};

export default function CosmeticDentistryIntroSection() {
  const locale = useLocale();
  const d = DICTIONARIES[locale] || DICTIONARIES.en;

  return (
    <section aria-labelledby="cosmetic-intro-heading" className={styles.section}>
      <div className={styles.container}>
        <h2 id="cosmetic-intro-heading" className={styles.heading}>
          {d.heading}
        </h2>
        <p className={styles.lead}>{d.lead}</p>

        <div className={styles.contentGrid}>
          <p className={styles.paragraph}>{d.p1}</p>
          <p className={styles.paragraph}>{d.p2}</p>
          <p className={styles.paragraph}>{d.callout}</p>
        </div>
      </div>
    </section>
  );
}
