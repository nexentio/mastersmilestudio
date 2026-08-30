'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import TreatmentDivider from '@/components/treatment-sections/TreatmentDivider';
import styles from './TreatmentCostBreakdownAndPackageBannerSection.module.css';

interface CostBreakdownContent {
  heading: string;
  leadParagraph: React.ReactNode;
  subHeadingTitle: string;
  subHeadingAverage: string;
  nucleoss: React.ReactNode;
  dxl: React.ReactNode;
  straumann: React.ReactNode;
  allOnPackagesParagraph: React.ReactNode;
  complexityParagraph: string;
  moreDetailsParagraph: React.ReactNode;
  packagesLinkParagraph: React.ReactNode;
}

const COST_CONTENT: Record<string, CostBreakdownContent> = {
  tr: {
    heading: 'Antalya’da Diş İmplantı Tedavisi & VIP Paket Avantajları',
    leadParagraph: (
      <>
        Antalya’da <strong>diş implantı</strong> tedavisi, kullanılan implantın markasına, kemik yoğunluğuna ve uygulanan cerrahi yönteme göre kişiye özel olarak planlanır. Deneyimli çene cerrahlarımız, son teknoloji 3D CBCT dijital tomografi ve <strong>ömür boyu uluslararası garanti sertifikası</strong> ile dünya standartlarında sağlık hizmeti sunmaktadır.
      </>
    ),
    subHeadingTitle: 'Klinik Standartlarımız & İmplant Sistemleri – Master Smile Studio',
    subHeadingAverage: 'Kliniğimizde uygulanan global onaylı premium implant sistemleri:',
    nucleoss: (
      <>
        <strong>NUCLEOSS (Grade 4 Saf Titanyum):</strong> Yüksek biyouyumluluk, mikro gözenekli osteointegrasyon yüzeyi ve ömür boyu garanti.
      </>
    ),
    dxl: (
      <>
        <strong>DXL (Alman Mühendisliği):</strong> İleri SLA aktif yüzey teknolojisi, hızlı kemik kaynaşması ve yüksek primer stabilite.
      </>
    ),
    straumann: (
      <>
        <strong>Straumann (İsviçre Altın Standart):</strong> SLActive hidrofilik yüzey, diyabet ve kemik erimesi vakalarında kanıtlanmış maksimum başarı.
      </>
    ),
    allOnPackagesParagraph: (
      <>
        Tam çene diş eksikliği olan hastalarımız için{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          <strong>All-on-4</strong>
        </Link>{' '}
        veya{' '}
        <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.link}>
          <strong>All-on-6</strong>
        </Link>{' '}
        aynı gün sabit geçici diş yükleme protokolleri uygulanmaktadır. VIP paketlerimiz 5 yıldızlı otel konaklaması, özel Mercedes havalimanı transferleri ve kişiye özel tercüman desteğini kapsamaktadır.
      </>
    ),
    complexityParagraph:
      'Her hastamızın kemik yapısı ve estetik beklentileri farklı olduğundan, net tedavi planınız gönderdiğiniz panoramik röntgen incelenerek 24 saat içinde şeffaf olarak hazırlanır.',
    moreDetailsParagraph: (
      <>
        Röntgeninizi ileterek uzman hekimlerimizden{' '}
        <Link href="/contact" className={styles.link}>
          <strong>ücretsiz kişiye özel tedavi planı ve teklif</strong>
        </Link>{' '}
        alabilir, sürpriz maliyetler olmadan tedavi sürecinizi güvenle planlayabilirsiniz.
      </>
    ),
    packagesLinkParagraph: (
      <>
        Detaylı VIP paket kapsamlarını incelemek için{' '}
        <Link href="/packages" className={styles.link}>
          lütfen paketler sayfamızı ziyaret edin
        </Link>.
      </>
    ),
  },
  en: {
    heading: 'Dental Implant Treatment & VIP Package Advantages in Antalya',
    leadParagraph: (
      <>
        <strong>Dental implant treatment in Antalya</strong> is customized according to the patient&apos;s bone density, aesthetic goals, and chosen implant brand. Our expert oral surgeons utilize state-of-the-art 3D CBCT digital tomography and provide <strong>lifetime international manufacturer warranty passports</strong> for every restoration.
      </>
    ),
    subHeadingTitle: 'Our Clinical Standards & Implant Systems – Master Smile Studio',
    subHeadingAverage: 'Globally certified premium implant systems offered at our clinic:',
    nucleoss: (
      <>
        <strong>NUCLEOSS (Grade 4 Pure Titanium):</strong> High biocompatibility, microporous osseointegration surface, and lifetime warranty.
      </>
    ),
    dxl: (
      <>
        <strong>DXL (German Engineering):</strong> Advanced SLA surface technology, accelerated bone fusion, and high primary stability.
      </>
    ),
    straumann: (
      <>
        <strong>Straumann (Swiss Gold Standard):</strong> SLActive hydrophilic surface, proven highest clinical success rates even in compromised bone.
      </>
    ),
    allOnPackagesParagraph: (
      <>
        For patients suffering from full-arch tooth loss,{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          <strong>All-on-4</strong>
        </Link>{' '}
        and{' '}
        <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.link}>
          <strong>All-on-6</strong>
        </Link>{' '}
        same-day fixed temporary loading protocols are performed. Our all-inclusive VIP packages include 5-star hotel accommodation, private Mercedes chauffeur transfers, and dedicated patient coordinators.
      </>
    ),
    complexityParagraph:
      'Because every smile anatomy is unique, your personalized written treatment plan is prepared transparently within 24 hours upon reviewing your panoramic X-ray or CT scan.',
    moreDetailsParagraph: (
      <>
        Send your dental X-rays to receive a{' '}
        <Link href="/contact" className={styles.link}>
          <strong>free personalized treatment plan and custom quote</strong>
        </Link>{' '}
        with zero hidden fees.
      </>
    ),
    packagesLinkParagraph: (
      <>
        To explore all-inclusive VIP package details,{' '}
        <Link href="/packages" className={styles.link}>
          please visit our packages page
        </Link>.
      </>
    ),
  },
  de: {
    heading: 'Zahnimplantate & VIP-Paketvorteile in Antalya',
    leadParagraph: (
      <>
        Die <strong>Zahnimplantatbehandlung in Antalya</strong> wird individuell an Ihre Knochendichte und ästhetischen Wünsche angepasst. Unsere erfahrenen Kieferchirurgen nutzen moderne 3D-DVT-Tomographie und bieten <strong>lebenslange internationale Herstellergarantien</strong>.
      </>
    ),
    subHeadingTitle: 'Klinische Standards & Implantatsysteme – Master Smile Studio',
    subHeadingAverage: 'Zertifizierte Premium-Implantatsysteme in unserer Klinik:',
    nucleoss: (
      <>
        <strong>NUCLEOSS (Reintitan Grad 4):</strong> Hohe Biokompatibilität und lebenslange Garantie.
      </>
    ),
    dxl: (
      <>
        <strong>DXL (Deutsche Ingenieurskunst):</strong> Fortschrittliche SLA-Oberfläche und beschleunigte Einheilung.
      </>
    ),
    straumann: (
      <>
        <strong>Straumann (Schweizer Goldstandard):</strong> SLActive hydrophile Oberfläche für maximale Erfolgsraten.
      </>
    ),
    allOnPackagesParagraph: (
      <>
        Für zahnlose Kiefer bieten wir{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          <strong>All-on-4</strong>
        </Link>{' '}
        und{' '}
        <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.link}>
          <strong>All-on-6</strong>
        </Link>{' '}
        Festsitzende Sofortversorgungen inklusive 5-Sterne-Hotel und VIP-Transfer.
      </>
    ),
    complexityParagraph:
      'Ihr schriftlicher Behandlungsplan wird innerhalb von 24 Stunden nach Prüfung Ihres Röntgenbildes transparent und verbindlich erstellt.',
    moreDetailsParagraph: (
      <>
        Senden Sie uns Ihr Röntgenbild für einen{' '}
        <Link href="/contact" className={styles.link}>
          <strong>kostenlosen individuellen Behandlungsplan</strong>
        </Link>.
      </>
    ),
    packagesLinkParagraph: (
      <>
        Für VIP-Pakete{' '}
        <Link href="/packages" className={styles.link}>
          besuchen Sie bitte unsere Pakete-Seite
        </Link>.
      </>
    ),
  },
  pl: {
    heading: 'Leczenie Implantologiczne i Pakiety VIP w Antalyi',
    leadParagraph: (
      <>
        <strong>Leczenie implantologiczne w Antalyi</strong> jest indywidualnie dopasowywane do gęstości kości pacjenta. Nasi chirurdzy stomatologiczni stosują cyfrową tomografię 3D CBCT i zapewniają <strong>dożywotni międzynarodowy paszport gwarancyjny</strong>.
      </>
    ),
    subHeadingTitle: 'Standardy Kliniczne i Systemy Implantów – Master Smile Studio',
    subHeadingAverage: 'Certyfikowane systemy implantologiczne premium w naszej klinice:',
    nucleoss: (
      <>
        <strong>NUCLEOSS (Czysty Tytan Grade 4):</strong> Wysoka biokompatybilność i dożywotnia gwarancja.
      </>
    ),
    dxl: (
      <>
        <strong>DXL (Niemiecka Inżynieria):</strong> Zaawansowana technologia powierzchni SLA i szybka osteointegracja.
      </>
    ),
    straumann: (
      <>
        <strong>Straumann (Szwajcarski Złoty Standard):</strong> Hydrofilowa powierzchnia SLActive o najwyższej skuteczności.
      </>
    ),
    allOnPackagesParagraph: (
      <>
        Dla pacjentów z bezzębiem oferujemy pakiety{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          <strong>All-on-4</strong>
        </Link>{' '}
        oraz{' '}
        <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.link}>
          <strong>All-on-6</strong>
        </Link>{' '}
        ze stałym uzębieniem tymczasowym w 24h, 5-gwiazdkowym hotelem i transferami VIP.
      </>
    ),
    complexityParagraph:
      'Twój indywidualny plan leczenia przygotowywany jest bezpłatnie w ciągu 24 godzin po przesłaniu zdjęcia pantomograficznego.',
    moreDetailsParagraph: (
      <>
        Prześlij swoje zdjęcie RTG, aby otrzymać{' '}
        <Link href="/contact" className={styles.link}>
          <strong>bezpłatny plan leczenia i wycenę</strong>
        </Link>.
      </>
    ),
    packagesLinkParagraph: (
      <>
        Szczegóły pakietów VIP znajdziesz na{' '}
        <Link href="/packages" className={styles.link}>
          stronie pakietów
        </Link>.
      </>
    ),
  },
  pt: {
    heading: 'Tratamento com Implantes e Pacotes VIP em Antália',
    leadParagraph: (
      <>
        O <strong>tratamento com implantes dentários em Antália</strong> é personalizado de acordo com a anatomia do paciente. Nossos cirurgiões utilizam tomografia 3D CBCT e emitem <strong>passaporte com garantia internacional vitalícia</strong>.
      </>
    ),
    subHeadingTitle: 'Padrões Clínicos & Sistemas de Implantes – Master Smile Studio',
    subHeadingAverage: 'Sistemas de implantes premium certificados disponíveis em nossa clínica:',
    nucleoss: (
      <>
        <strong>NUCLEOSS (Titânio Grau 4 Puro):</strong> Alta biocompatibilidade e garantia vitalícia.
      </>
    ),
    dxl: (
      <>
        <strong>DXL (Engenharia Alemã):</strong> Superfície SLA avançada e rápida osteointegração.
      </>
    ),
    straumann: (
      <>
        <strong>Straumann (Padrão Ouro Suíço):</strong> Superfície hidrofílica SLActive com máxima taxa de sucesso clínico.
      </>
    ),
    allOnPackagesParagraph: (
      <>
        Para perdas totais de dentes, realizamos protocolos{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          <strong>All-on-4</strong>
        </Link>{' '}
        e{' '}
        <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.link}>
          <strong>All-on-6</strong>
        </Link>{' '}
        com dentes fixos no mesmo dia, hotel 5 estrelas e transfers VIP.
      </>
    ),
    complexityParagraph:
      'Seu plano de tratamento personalizado é preparado em até 24 horas após o envio da sua radiografia panorâmica.',
    moreDetailsParagraph: (
      <>
        Envie sua radiografia para receber um{' '}
        <Link href="/contact" className={styles.link}>
          <strong>plano de tratamento e orçamento gratuito</strong>
        </Link>.
      </>
    ),
    packagesLinkParagraph: (
      <>
        Para ver todos os pacotes VIP,{' '}
        <Link href="/packages" className={styles.link}>
          visite nossa página de pacotes
        </Link>.
      </>
    ),
  },
  es: {
    heading: 'Tratamiento de Implantes y Paquetes VIP en Antalya',
    leadParagraph: (
      <>
        El <strong>tratamiento de implantes dentales en Antalya</strong> se diseña a medida según la anatomía ósea de cada paciente. Nuestros cirujanos utilizan tomografía 3D CBCT y entregan <strong>pasaporte de garantía internacional de por vida</strong>.
      </>
    ),
    subHeadingTitle: 'Estándares Clínicos y Sistemas de Implantes – Master Smile Studio',
    subHeadingAverage: 'Sistemas de implantes premium certificados en nuestra clínica:',
    nucleoss: (
      <>
        <strong>NUCLEOSS (Titanio Puro Grado 4):</strong> Alta biocompatibilidad y garantía de por vida.
      </>
    ),
    dxl: (
      <>
        <strong>DXL (Ingeniería Alemana):</strong> Superficie SLA avanzada y rápida osteointegración.
      </>
    ),
    straumann: (
      <>
        <strong>Straumann (Estándar de Oro Suizo):</strong> Superficie hidrófila SLActive con máximo éxito clínico.
      </>
    ),
    allOnPackagesParagraph: (
      <>
        Para pacientes con ausencia total de piezas, ofrecemos{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          <strong>All-on-4</strong>
        </Link>{' '}
        y{' '}
        <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.link}>
          <strong>All-on-6</strong>
        </Link>{' '}
        con carga fija inmediata el mismo día, hotel 5 estrellas y traslados VIP.
      </>
    ),
    complexityParagraph:
      'Su plan de tratamiento personalizado se prepara en 24 horas tras la revisión de su radiografía panorámica.',
    moreDetailsParagraph: (
      <>
        Envíe sus radiografías para recibir un{' '}
        <Link href="/contact" className={styles.link}>
          <strong>plan de tratamiento y presupuesto gratuito</strong>
        </Link>.
      </>
    ),
    packagesLinkParagraph: (
      <>
        Para consultar los paquetes VIP,{' '}
        <Link href="/packages" className={styles.link}>
          visite nuestra página de paquetes
        </Link>.
      </>
    ),
  },
  ru: {
    heading: 'Имплантация Зубов и VIP-Пакеты в Анталье',
    leadParagraph: (
      <>
        <strong>Имплантация зубов в Анталье</strong> планируется индивидуально на основе плотности костной ткани и 3D-томографии. Наши челюстно-лицевые хирурги предоставляют <strong>пожизненный международный паспорт гарантии</strong> от производителя.
      </>
    ),
    subHeadingTitle: 'Клинические Стандарты и Системы Имплантов – Master Smile Studio',
    subHeadingAverage: 'Сертифицированные системы имплантов премиум-класса:',
    nucleoss: (
      <>
        <strong>NUCLEOSS (Чистый титан Grade 4):</strong> Высокая биосовместимость и пожизненная гарантия.
      </>
    ),
    dxl: (
      <>
        <strong>DXL (Немецкая инженерия):</strong> Передовая SLA-поверхность и быстрая остеоинтеграция.
      </>
    ),
    straumann: (
      <>
        <strong>Straumann (Швейцарский золотой стандарт):</strong> Гидрофильная поверхность SLActive с максимальной приживаемостью.
      </>
    ),
    allOnPackagesParagraph: (
      <>
        При полном отсутствии зубов мы проводим протоколы{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          <strong>All-on-4</strong>
        </Link>{' '}
        и{' '}
        <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.link}>
          <strong>All-on-6</strong>
        </Link>{' '}
        с несъемными временными зубами в день операции, 5-звездочным отелем и VIP-трансфером.
      </>
    ),
    complexityParagraph:
      'Индивидуальный план лечения составляется в течение 24 часов после анализа вашего панорамного снимка или КТ.',
    moreDetailsParagraph: (
      <>
        Отправьте снимок для получения{' '}
        <Link href="/contact" className={styles.link}>
          <strong>бесплатного плана лечения и индивидуального расчета</strong>
        </Link>.
      </>
    ),
    packagesLinkParagraph: (
      <>
        Подробнее о VIP-пакетах читайте на{' '}
        <Link href="/packages" className={styles.link}>
          странице пакетов
        </Link>.
      </>
    ),
  },
};

export default function TreatmentCostBreakdownAndPackageBannerSection() {
  const locale = useLocale();
  const content = COST_CONTENT[locale] || COST_CONTENT.en;

  return (
    <section aria-labelledby="cost-breakdown-heading" className={styles.section}>
      <div className={styles.container}>
        {/* Top Decorative Divider */}
        <div className={styles.topDividerWrap}>
          <TreatmentDivider />
        </div>

        {/* 16:9 Fullwidth Video Embed */}
        <div className={styles.videoCard}>
          <iframe
            src="https://www.youtube.com/embed/eiTTit9PLrQ"
            title="Dental Implant Costs in Antalya Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Main Heading */}
        <h2 id="cost-breakdown-heading" className={styles.heading}>
          {content.heading}
        </h2>

        {/* Lead Paragraph */}
        <p className={styles.leadText}>{content.leadParagraph}</p>

        {/* Subheading: Average prices */}
        <h3 className={styles.subHeading}>
          {content.subHeadingTitle}
          <span className={styles.subHeadingSpan}>{content.subHeadingAverage}</span>
        </h3>

        {/* Brand Prices List */}
        <div className={styles.priceList}>
          <p className={styles.priceItem}>{content.nucleoss}</p>
          <p className={styles.priceItem}>{content.dxl}</p>
          <p className={styles.priceItem}>{content.straumann}</p>
        </div>

        {/* All-on-4 / All-on-6 Paragraph */}
        <p className={styles.bodyText}>{content.allOnPackagesParagraph}</p>

        {/* Complexity Paragraph */}
        <p className={styles.bodyText}>{content.complexityParagraph}</p>

        {/* Links Paragraph */}
        <p className={styles.bodyText}>{content.moreDetailsParagraph}</p>

        {/* Packages Page Link */}
        <p className={styles.bodyText}>{content.packagesLinkParagraph}</p>

        {/* Bottom Decorative Divider */}
        <div className={styles.bottomDividerWrap}>
          <TreatmentDivider />
        </div>
      </div>
    </section>
  );
}
