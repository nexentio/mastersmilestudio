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
    heading: 'Antalya’da Diş İmplantı Fiyatları',
    leadParagraph: (
      <>
        Antalya’da <strong>diş implantı</strong> fiyatları, kullanılan implantın markasına ve uygulanan yönteme göre değişiklik gösterir. Kaliteli malzemeler, deneyimli hekimler ve kapsamlı hizmetler sunan iyi bir klinikte yapılan implantlar, <strong>Türkiye’nin diş hekimliği turizminin</strong> avantajları sayesinde Avrupa ülkelerine kıyasla çok daha ekonomiktir.
      </>
    ),
    subHeadingTitle: 'Antalya’da İmplant Fiyatları – Master Smile Studio',
    subHeadingAverage: 'Ortalama fiyatlar şu şekildedir:',
    nucleoss: (
      <>
        <strong>NUCLEOSS (yerli marka)</strong> implant: yaklaşık <strong>$450</strong> (400€ / 335£)
      </>
    ),
    dxl: (
      <>
        <strong>DXL (Alman markası)</strong> implant: yaklaşık <strong>$550</strong> (500€ / 420£)
      </>
    ),
    straumann: (
      <>
        <strong>Straumann (İsviçre markası)</strong> implant: yaklaşık <strong>$900</strong> (800€ / 680£)
      </>
    ),
    allOnPackagesParagraph: (
      <>
        Birden fazla eksik dişi olan hastalar için{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          <strong>All-on-4</strong>
        </Link>{' '}
        veya{' '}
        <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.link}>
          <strong>All-on-6</strong>
        </Link>{' '}
        tam çene implantları yaygın seçeneklerdir. Bu paketlerin maliyeti, implant sayısına ve kullanılan markaya bağlı olarak <strong>$4,900 ile $7,600</strong> arasında değişmektedir. Örneğin, <strong>NUCLEOSS</strong> implantlı bir{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          <strong>All-on-4 paketi</strong>
        </Link>{' '}
        yaklaşık <strong>$4,900</strong>, <strong>Straumann</strong> implantlı{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          aynı paket
        </Link>{' '}
        ise yaklaşık <strong>$7,600</strong> tutarındadır.
      </>
    ),
    complexityParagraph:
      'Bu fiyatlar ameliyatın karmaşıklığına (kemik grefti, sinüs lifting gibi) ve dahil edilen ek hizmetlere (otel, VIP ulaşım gibi) göre değişiklik gösterebilir.',
    moreDetailsParagraph: (
      <>
        Antalya&apos;un uygun fiyatlı ve yüksek kaliteli diş hizmetleri hakkında daha fazla bilgi almak ve{' '}
        <Link href="/treatments/dental-implants" className={styles.link}>
          detaylı bir fiyat listesi
        </Link>{' '}
        görmek için Master Smile Studio&apos;nun{' '}
        <Link href="/contact" className={styles.link}>
          <strong>&ldquo;Türkiye Diş Tedavisi Fiyatları Ne Kadar?&rdquo;</strong>
        </Link>{' '}
        sayfasını ziyaret edebilirsiniz.
      </>
    ),
    packagesLinkParagraph: (
      <>
        Detaylı paket fiyatları için{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          lütfen bu sayfayı ziyaret edin
        </Link>
      </>
    ),
  },
  en: {
    heading: 'Dental Implant Costs in Antalya',
    leadParagraph: (
      <>
        The cost of <strong>dental implants in Antalya</strong> varies depending on the brand of the implant and the method used. Implants performed in a good clinic with high-quality materials, experienced doctors, and comprehensive services are much more affordable compared to European countries, thanks to the advantages of <strong>Turkey&apos;s dental tourism</strong>.
      </>
    ),
    subHeadingTitle: 'Dental Implant Prices in Antalya - Master Smile Studio',
    subHeadingAverage: 'The average prices are as follows:',
    nucleoss: (
      <>
        <strong>NUCLEOSS (local brand)</strong> implant: approximately <strong>$450</strong> (400€ / 335£)
      </>
    ),
    dxl: (
      <>
        <strong>DXL (German brand)</strong> implant: approximately <strong>$550</strong> (500€ / 420£)
      </>
    ),
    straumann: (
      <>
        <strong>Straumann (Swiss brand)</strong> implant: approximately <strong>$900</strong> (800€ / 680£)
      </>
    ),
    allOnPackagesParagraph: (
      <>
        For patients missing multiple teeth, full-arch implants like{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          <strong>All-on-4</strong>
        </Link>{' '}
        or{' '}
        <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.link}>
          <strong>All-on-6</strong>
        </Link>{' '}
        are common choices. The cost for these packages ranges from <strong>$4,900 to $7,600</strong>, depending on the number of implants and the brand used. For example, an{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          <strong>All-on-4 package</strong>
        </Link>{' '}
        with <strong>NUCLEOSS</strong> implants costs around <strong>$4,900</strong>, while the{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          same package
        </Link>{' '}
        with <strong>Straumann</strong> implants costs around <strong>$7,600</strong>.
      </>
    ),
    complexityParagraph:
      'These prices may vary depending on the complexity of the surgery (such as bone grafting, sinus lift) and additional services included (such as hotel, transportation).',
    moreDetailsParagraph: (
      <>
        To get more details on Antalya’s affordable and high-quality dental services and see a{' '}
        <Link href="/treatments/dental-implants" className={styles.link}>
          detailed price list,
        </Link>{' '}
        you can visit Master Smile Studio’s{' '}
        <Link href="/contact" className={styles.link}>
          <strong>&ldquo;How Much Are Turkey Teeth?&rdquo;</strong>
        </Link>{' '}
        page.
      </>
    ),
    packagesLinkParagraph: (
      <>
        For detailed package prices,{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          please visit this page
        </Link>
      </>
    ),
  },
  de: {
    heading: 'Zahnimplantat-Kosten in Antalya',
    leadParagraph: (
      <>
        Die Kosten für <strong>Zahnimplantate in Antalya</strong> hängen von der gewählten Implantatmarke und der Methode ab. Dank der Vorteile des <strong>Medizintourismus in der Türkei</strong> sind Behandlungen in unserer modernen Klinik mit erstklassigen Materialien und erfahrenen Chirurgen deutlich günstiger als in Westeuropa.
      </>
    ),
    subHeadingTitle: 'Zahnimplantat-Preise in Antalya – Master Smile Studio',
    subHeadingAverage: 'Die durchschnittlichen Preise lauten wie folgt:',
    nucleoss: (
      <>
        <strong>NUCLEOSS (lokale Qualitätsmarke)</strong> Implantat: ca. <strong>400€</strong> ($450 / 335£)
      </>
    ),
    dxl: (
      <>
        <strong>DXL (deutsche Marke)</strong> Implantat: ca. <strong>500€</strong> ($550 / 420£)
      </>
    ),
    straumann: (
      <>
        <strong>Straumann (Schweizer Premiummarke)</strong> Implantat: ca. <strong>800€</strong> ($900 / 680£)
      </>
    ),
    allOnPackagesParagraph: (
      <>
        Für Patienten mit mehreren fehlenden Zähnen sind Gesamtkiefer-Lösungen wie{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          <strong>All-on-4</strong>
        </Link>{' '}
        oder{' '}
        <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.link}>
          <strong>All-on-6</strong>
        </Link>{' '}
        beliebte Optionen. Die Kosten für diese Pakete liegen zwischen <strong>4.500€ und 7.000€</strong>.
      </>
    ),
    complexityParagraph:
      'Diese Preise können je nach chirurgischem Aufwand (Knochenaufbau, Sinuslift) und gewählten Zusatzleistungen (Hotel, VIP-Transfer) variieren.',
    moreDetailsParagraph: (
      <>
        Weitere Details zu unseren Behandlungsangeboten und eine{' '}
        <Link href="/treatments/dental-implants" className={styles.link}>
          detaillierte Preisliste
        </Link>{' '}
        finden Sie auf unserer Seite für{' '}
        <Link href="/contact" className={styles.link}>
          <strong>&ldquo;Zahnbehandlungskosten in der Türkei&rdquo;</strong>
        </Link>.
      </>
    ),
    packagesLinkParagraph: (
      <>
        Für detaillierte Paketpreise{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          besuchen Sie bitte diese Seite
        </Link>.
      </>
    ),
  },
  pl: {
    heading: 'Koszty Implantów Zębowych w Antalyi',
    leadParagraph: (
      <>
        Koszt <strong>implantów zębowych w Antalyi</strong> zależy od marki implantu oraz zastosowanej procedury chirurgicznej. Zabiegi w naszej klinice z udziałem doświadczonych chirurgów są znacznie bardziej przystępne cenowo w porównaniu z Europą Zachodnią.
      </>
    ),
    subHeadingTitle: 'Ceny Implantów w Antalyi – Master Smile Studio',
    subHeadingAverage: 'Średnie ceny kształtują się następująco:',
    nucleoss: (
      <>
        Implant <strong>NUCLEOSS</strong>: około <strong>$450</strong> (400€ / 335£)
      </>
    ),
    dxl: (
      <>
        Implant <strong>DXL (marka niemiecka)</strong>: około <strong>$550</strong> (500€ / 420£)
      </>
    ),
    straumann: (
      <>
        Implant <strong>Straumann (marka szwajcarska)</strong>: około <strong>$900</strong> (800€ / 680£)
      </>
    ),
    allOnPackagesParagraph: (
      <>
        Dla pacjentów z bezzębiem pakiety{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          <strong>All-on-4</strong>
        </Link>{' '}
        i{' '}
        <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.link}>
          <strong>All-on-6</strong>
        </Link>{' '}
        wynoszą od <strong>$4,900 do $7,600</strong> w zależności od wybranej marki.
      </>
    ),
    complexityParagraph:
      'Ceny mogą ulec zmianie w zależności od procedur towarzyszących (podniesienie zatoki, odbudowa kości) oraz pakietów hotelowych.',
    moreDetailsParagraph: (
      <>
        Aby poznać{' '}
        <Link href="/treatments/dental-implants" className={styles.link}>
          szczegółowy cennik
        </Link>{' '}
        zapraszamy do kontaktu z naszym zespołem.
      </>
    ),
    packagesLinkParagraph: (
      <>
        Szczegółowe pakiety:{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          przejdź do strony pakietów
        </Link>.
      </>
    ),
  },
  pt: {
    heading: 'Custos de Implantes Dentários em Antalya',
    leadParagraph: (
      <>
        O custo dos <strong>implantes dentários em Antalya</strong> varia de acordo com a marca do implante e o método cirúrgico. Realizados em nossa clínica com materiais de alta qualidade e cirurgiões experientes, os tratamentos são muito mais acessíveis do que na Europa.
      </>
    ),
    subHeadingTitle: 'Preços de Implantes em Antalya – Master Smile Studio',
    subHeadingAverage: 'Os preços médios são os seguintes:',
    nucleoss: (
      <>
        Implante <strong>NUCLEOSS</strong>: aproximadamente <strong>$450</strong> (400€ / 335£)
      </>
    ),
    dxl: (
      <>
        Implante <strong>DXL (marca alemã)</strong>: aproximadamente <strong>$550</strong> (500€ / 420£)
      </>
    ),
    straumann: (
      <>
        Implante <strong>Straumann (marca suíça)</strong>: aproximadamente <strong>$900</strong> (800€ / 680£)
      </>
    ),
    allOnPackagesParagraph: (
      <>
        Para restaurações de arcada completa como{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          <strong>All-on-4</strong>
        </Link>{' '}
        ou{' '}
        <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.link}>
          <strong>All-on-6</strong>
        </Link>
        , os valores variam entre <strong>$4,900 e $7,600</strong>.
      </>
    ),
    complexityParagraph:
      'Os preços podem variar conforme a necessidade de enxerto ósseo ou sinus lift.',
    moreDetailsParagraph: (
      <>
        Para consultar a lista completa, visite a nossa{' '}
        <Link href="/treatments/dental-implants" className={styles.link}>
          tabela de preços
        </Link>.
      </>
    ),
    packagesLinkParagraph: (
      <>
        Consulte os pacotes:{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          clique aqui
        </Link>.
      </>
    ),
  },
  es: {
    heading: 'Precios de Implantes Dentales en Antalya',
    leadParagraph: (
      <>
        El coste de los <strong>implantes dentales en Antalya</strong> varía según la marca y la técnica quirúrgica. Gracias al turismo dental en Turquía, los precios son hasta un 70% más económicos que en España o Europa, garantizando la máxima calidad clínica.
      </>
    ),
    subHeadingTitle: 'Precios de Implantes en Antalya – Master Smile Studio',
    subHeadingAverage: 'Los precios medios son los siguientes:',
    nucleoss: (
      <>
        Implante <strong>NUCLEOSS</strong>: aproximadamente <strong>$450</strong> (400€ / 335£)
      </>
    ),
    dxl: (
      <>
        Implante <strong>DXL (marca alemana)</strong>: aproximadamente <strong>$550</strong> (500€ / 420£)
      </>
    ),
    straumann: (
      <>
        Implante <strong>Straumann (marca suiza)</strong>: aproximadamente <strong>$900</strong> (800€ / 680£)
      </>
    ),
    allOnPackagesParagraph: (
      <>
        Para arcadas completas como{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          <strong>All-on-4</strong>
        </Link>{' '}
        o{' '}
        <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.link}>
          <strong>All-on-6</strong>
        </Link>
        , el coste oscila entre <strong>$4,900 y $7,600</strong> según la marca de implante.
      </>
    ),
    complexityParagraph:
      'Los precios pueden ajustarse si se requiere elevación de seno o injerto óseo.',
    moreDetailsParagraph: (
      <>
        Para más detalles sobre los costes en Turquía, visite nuestra{' '}
        <Link href="/treatments/dental-implants" className={styles.link}>
          lista de precios detallada
        </Link>.
      </>
    ),
    packagesLinkParagraph: (
      <>
        Para conocer los paquetes:{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          visite esta página
        </Link>.
      </>
    ),
  },
  ru: {
    heading: 'Стоимость зубных имплантов в Анталье',
    leadParagraph: (
      <>
        Стоимость <strong>зубных имплантов в Анталье</strong> варьируется в зависимости от выбранного бренда и метода лечения. Благодаря преимуществам медицинского туризма в Турции, лечение в Master Smile Studio обходится значительно выгоднее, чем в странах Европы.
      </>
    ),
    subHeadingTitle: 'Цены на импланты в Анталье – Master Smile Studio',
    subHeadingAverage: 'Средняя стоимость составляет:',
    nucleoss: (
      <>
        Имплант <strong>NUCLEOSS (Турция)</strong>: около <strong>$450</strong> (400€ / 335£)
      </>
    ),
    dxl: (
      <>
        Имплант <strong>DXL (Германия)</strong>: около <strong>$550</strong> (500€ / 420£)
      </>
    ),
    straumann: (
      <>
        Имплант <strong>Straumann (Швейцария)</strong>: около <strong>$900</strong> (800€ / 680£)
      </>
    ),
    allOnPackagesParagraph: (
      <>
        Для полной реставрации челюсти по протоколам{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          <strong>All-on-4</strong>
        </Link>{' '}
        или{' '}
        <Link href="/treatments/dental-implants/all-on-6-implants" className={styles.link}>
          <strong>All-on-6</strong>
        </Link>{' '}
        стоимость пакетов составляет от <strong>$4,900 до $7,600</strong>.
      </>
    ),
    complexityParagraph:
      'Цены могут корректироваться в зависимости от необходимости наращивания кости или синус-лифтинга.',
    moreDetailsParagraph: (
      <>
        Подробную информацию и прайс-лист вы можете посмотреть в разделе{' '}
        <Link href="/treatments/dental-implants" className={styles.link}>
          цены на имплантацию
        </Link>.
      </>
    ),
    packagesLinkParagraph: (
      <>
        Подробнее о пакетах:{' '}
        <Link href="/treatments/dental-implants/all-on-4-implants" className={styles.link}>
          перейти на страницу
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
        <TreatmentDivider />

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
        <TreatmentDivider />
      </div>
    </section>
  );
}
