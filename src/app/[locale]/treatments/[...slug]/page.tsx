import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentHeroBanner from '@/components/treatment-sections/TreatmentHeroBanner';
import TreatmentDetailView from '@/components/TreatmentDetailView';
import DentalImplantsDetailView from '@/components/DentalImplantsDetailView';
import DentalVeneersDetailView from '@/components/DentalVeneersDetailView';
import DentalCrownsDetailView from '@/components/DentalCrownsDetailView';
import DentalBridgeDetailView from '@/components/DentalBridgeDetailView';
import DenturesDetailView from '@/components/DenturesDetailView';
import CosmeticDentistryDetailView from '@/components/CosmeticDentistryDetailView';
import GeneralDentistryDetailView from '@/components/GeneralDentistryDetailView';
import AllOnSixImplantDetailView from '@/components/AllOnSixImplantDetailView';
import AllOnFourImplantDetailView from '@/components/AllOnFourImplantDetailView';
import ImmediateImplantDetailView from '@/components/ImmediateImplantDetailView';
import ZygomaticImplantDetailView from '@/components/ZygomaticImplantDetailView';
import ZirconiumImplantDetailView from '@/components/ZirconiumImplantDetailView';
import ImplantSupportedDenturesDetailView from '@/components/ImplantSupportedDenturesDetailView';
import SinusLiftingDetailView from '@/components/SinusLiftingDetailView';
import { generateTreatmentJsonLd } from '@/lib/treatment-schema';
import { getI18nAlternates, TREATMENT_LOCALES } from '@/lib/i18n-seo';
import { getTreatmentContent } from '@/lib/treatment-content';

interface PageProps {
  params: Promise<{ locale: string; slug: string[] }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const slugList = Array.isArray(slug) ? slug : [slug];
  const lastSlug = slugList[slugList.length - 1];
  const slugPath = slugList.join('/');

  const content = await getTreatmentContent(locale, lastSlug);

  let title =
    content?.seo?.title ||
    (locale === 'tr'
      ? 'İstanbul Diş Tedavisi ve Fiyatları | Master Smile Studio'
      : 'Dental Treatments in Istanbul, Turkey | Master Smile Studio');

  let description =
    content?.seo?.description ||
    (locale === 'tr'
      ? 'İstanbul’da uzman diş hekimleri ve cerrahlarımızla dünya standartlarında dental tedaviler.'
      : 'World-class dental treatments in Istanbul, Turkey with expert dentists, 5-star hotel and VIP transfers.');

  if (
    lastSlug.includes('general') ||
    lastSlug.includes('root-canal') ||
    lastSlug.includes('cleaning') ||
    lastSlug.includes('filling') ||
    lastSlug.includes('extraction') ||
    lastSlug.includes('periodont')
  ) {
    title =
      locale === 'tr'
        ? 'İstanbul Genel Diş Hekimliği & Tedavi Fiyatları | Master Smile Studio'
        : 'General & Preventive Dentistry in Istanbul, Turkey | Master Smile Studio';
    description =
      locale === 'tr'
        ? 'Ağrısız mikroskobik kanal tedavisi, Air-Flow diş temizliği, estetik nanokompozit dolgular ve 20’lik diş çekimleri.'
        : 'Microscopic root canal therapy, ultrasonic Swiss Air-Flow scaling, composite fillings, and wisdom tooth extractions in Istanbul.';
  } else if (
    lastSlug.includes('cosmetic') ||
    lastSlug.includes('hollywood') ||
    lastSlug.includes('makeover') ||
    lastSlug.includes('whitening') ||
    lastSlug.includes('diastema') ||
    lastSlug.includes('contouring')
  ) {
    title =
      locale === 'tr'
        ? 'İstanbul Estetik Diş Hekimliği & Hollywood Smile Fiyatları | Master Smile Studio'
        : 'Hollywood Smile & Cosmetic Dentistry in Istanbul, Turkey | Master Smile Studio';
    description =
      locale === 'tr'
        ? '3D Dijital Gülüş Tasarımı, İsviçre Ivoclar E-Max laminalar, lazer diş beyazlatma ve diş eti estetiği (Gummy Smile).'
        : 'Transform your smile with bespoke 3D Digital Smile Design, Swiss Ivoclar E-Max laminates, and laser gum contouring in Istanbul.';
  } else if (lastSlug.includes('denture') || lastSlug.includes('protez') || lastSlug.includes('overdenture')) {
    title =
      locale === 'tr'
        ? 'İstanbul Protez Diş & Çıt Çıtlı Damak Fiyatları | Master Smile Studio'
        : 'Dentures Cost in Istanbul, Turkey (Snap-On Overdentures) | Master Smile Studio';
    description =
      locale === 'tr'
        ? 'Oynayan damaklara son veren implant destekli çıtçıtlı protezler ve kırılmaya dayanıklı tam damak protezleri.'
        : 'Snap-On implant overdentures and precision complete dentures in Istanbul. Rock-solid retention with zero slipping.';
  } else if (lastSlug.includes('bridge') || lastSlug.includes('kopru')) {
    title =
      locale === 'tr'
        ? 'İstanbul Diş Köprüsü Fiyatları ve Tedavisi | Master Smile Studio'
        : 'Dental Bridges in Istanbul, Turkey (Zirconia & Implant Bridges) | Master Smile Studio';
    description =
      locale === 'tr'
        ? 'Eksik dişleriniz için Alman Zirkonyum ve implant destekli sabit köprü tedavisi. 4-6 günde 5 yıldızlı otel konforuyla yeni bir gülüş.'
        : 'High-strength Zirconia and Implant-supported dental bridges in Istanbul, Turkey. Restore missing teeth and bite function in 4-6 days with 5-star VIP care.';
  } else if (lastSlug.includes('veneer') || lastSlug.includes('lumineer') || lastSlug.includes('lamine')) {
    title =
      locale === 'tr'
        ? 'İstanbul Diş Kaplama & Lamina Fiyatları | Master Smile Studio'
        : 'Dental Veneers in Istanbul, Turkey (E-Max Laminates) | Master Smile Studio';
    description =
      locale === 'tr'
        ? 'İsviçre menşeli Ivoclar E-Max porselen laminalarla 4-6 günde kusursuz Hollywood gülüşü.'
        : 'Swiss Ivoclar E-Max porcelain veneers and laminates in Istanbul. Natural, stain-resistant smile transformations in 4-6 days.';
  } else if (lastSlug.includes('crown') || lastSlug.includes('kron')) {
    title =
      locale === 'tr'
        ? 'İstanbul Zirkonyum & Kron Diş Kaplama Fiyatları | Master Smile Studio'
        : 'Dental Crowns Cost in Istanbul, Turkey (Zirconia & E-Max) | Master Smile Studio';
    description =
      locale === 'tr'
        ? '1200+ MPa Alman Zirkonyum ve Ivoclar E-Max kron kaplamalarla kırık ve kanal tedavili dişlerinizi kurtarın.'
        : 'Premium German Zirconia & E-Max dental crowns in Istanbul. High fracture resistance, natural translucency, and 5-year warranty.';
  } else if (lastSlug === 'dental-implants' || lastSlug === 'dental-implant-istanbul-turkey' || lastSlug === 'implants') {
    title = locale === 'tr' ? 'İstanbul Diş İmplantı Tedavisi ve Fiyatları | Master Smile Studio' : 'Dental Implants Cost in Istanbul, Turkey | Master Smile Studio';
    description = locale === 'tr' ? 'İstanbul’da uzman çene cerrahları ile dünya markası titanyum implant tedavisi. Şeffaf her şey dahil paket fiyatları.' : 'Dental implants in Istanbul, Turkey. Highest quality Swiss & German titanium implants with lifetime guarantee.';
  }

  return {
    title,
    description,
    alternates: getI18nAlternates(`/treatments/${slugPath}`, locale, TREATMENT_LOCALES),
  };
}

export default async function HierarchicalTreatmentPage({ params }: PageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('services');

  const slugList = Array.isArray(slug) ? slug : [slug];
  const lastSlug = slugList[slugList.length - 1];
  const isCategoryOnly = slugList.length === 1;
  const slugPath = slugList.join('/');

  const content = await getTreatmentContent(locale, lastSlug);

  // Route matching
  const isDentalImplantsCategory =
    lastSlug === 'dental-implants' ||
    lastSlug === 'dental-implant-istanbul-turkey' ||
    lastSlug === 'implants' ||
    lastSlug.includes('implant') ||
    lastSlug.includes('full-mouth') ||
    lastSlug.includes('bone-graft') ||
    slugList.includes('dental-implants');

  const isGeneral =
    lastSlug.includes('general') ||
    lastSlug.includes('root-canal') ||
    lastSlug.includes('cleaning') ||
    lastSlug.includes('filling') ||
    lastSlug.includes('extraction') ||
    lastSlug.includes('periodont') ||
    lastSlug === 'general-dentistry';

  const isCosmetic =
    lastSlug.includes('cosmetic') ||
    lastSlug.includes('hollywood') ||
    lastSlug.includes('makeover') ||
    lastSlug.includes('whitening') ||
    lastSlug.includes('diastema') ||
    lastSlug.includes('contouring') ||
    lastSlug === 'cosmetic-dentistry';

  const isDentalVeneers =
    lastSlug.includes('veneer') ||
    lastSlug.includes('lumineer') ||
    lastSlug.includes('lamine') ||
    lastSlug === 'dental-veneers';

  const isDentalCrowns =
    lastSlug.includes('crown') ||
    lastSlug.includes('kron') ||
    lastSlug.includes('full-ceramic') ||
    lastSlug === 'dental-crowns';

  const isDentalBridges =
    lastSlug.includes('bridge') ||
    lastSlug.includes('kopru') ||
    lastSlug === 'dental-bridge';

  const isDentures =
    lastSlug.includes('denture') ||
    lastSlug.includes('protez') ||
    lastSlug.includes('overdenture') ||
    lastSlug === 'dentures';

  const isAllOnFour = lastSlug === 'all-on-4-implants' || lastSlug === 'all-on-four-implant-istanbul-turkey' || lastSlug === 'all-on-4';
  const isAllOnSix = lastSlug === 'all-on-6-implants' || lastSlug === 'all-on-six-dental-implant-istanbul-turkey' || lastSlug === 'all-on-6';
  const isImmediate = lastSlug === 'immediate-implant-treatment' || lastSlug === 'immediate-implants' || lastSlug === 'immediate';
  const isZygomatic = lastSlug === 'zygomatic-implants' || lastSlug === 'zygomatic-implants-istanbul-turkey' || lastSlug === 'zygomatic';
  const isZirconium = lastSlug === 'zirconium-implants' || lastSlug === 'zirconium-implants-istanbul-turkey';
  const isSinusLift = lastSlug === 'sinus-lifting' || lastSlug === 'sinus-lift';

  let heroBadge = content?.hero?.badge || (locale === 'tr' ? 'TEDAVİLERİMİZ' : 'TREATMENTS');
  let heroTitle = content?.hero?.title || t('pageTitle');
  let heroSubtitle = content?.hero?.subtitle || t('pageSubtitle');

  if (isGeneral) {
    heroBadge = locale === 'tr' ? 'GENEL & KORUYUCU DİŞ HEKİMLİĞİ' : 'GENERAL & PREVENTIVE DENTISTRY';
    heroTitle = locale === 'tr' ? 'İstanbul Genel Diş Hekimliği & Tedavileri' : 'General Dentistry & Oral Health in Istanbul';
    heroSubtitle = locale === 'tr' ? 'Ağrısız mikroskobik kanal tedavisi, İsviçre Air-Flow ultrasonik diş temizliği ve estetik nanokompozit dolgular.' : 'Pain-free microscopic root canal therapy, ultrasonic Swiss Air-Flow scaling, and tooth-colored composite restorations.';
  } else if (isCosmetic) {
    heroBadge = locale === 'tr' ? 'ESTETİK DİŞ HEKİMLİĞİ & GÜLÜŞ TASARIMI' : 'COSMETIC DENTISTRY & SMILE DESIGN';
    heroTitle = locale === 'tr' ? 'İstanbul Hollywood Smile & Estetik Diş Tedavisi' : 'Hollywood Smile & Cosmetic Dentistry in Istanbul';
    heroSubtitle = locale === 'tr' ? 'Yüzün altın oranına özel 3D Dijital Gülüş Tasarımı, İsviçre Ivoclar E-Max laminalar ve lazerle pembe estetik.' : 'Transform your smile with bespoke 3D Digital Smile Design, Swiss Ivoclar E-Max laminates, and laser gum contouring in Istanbul.';
  } else if (isDentures) {
    heroBadge = locale === 'tr' ? 'PROTEZ DİŞ TEDAVİSİ' : 'DENTURES & OVERDENTURES';
    heroTitle = locale === 'tr' ? 'İstanbul Protez Diş & Çıt Çıtlı Damak Tedavisi' : 'Dentures & Snap-On Overdentures in Istanbul';
    heroSubtitle = locale === 'tr' ? 'Oynayan damak sorununa son veren implant destekli çıtçıtlı overdenture sistemleri ve estetik tam protezler.' : 'Eliminate loose dentures with rock-solid Snap-On implant overdentures and precision complete dentures in Istanbul.';
  } else if (isDentalBridges) {
    heroBadge = locale === 'tr' ? 'DİŞ KÖPRÜSÜ' : 'DENTAL BRIDGES';
    heroTitle = locale === 'tr' ? 'İstanbul Diş Köprüsü & Zirkonyum Tedavisi' : 'Dental Bridges & Zirconia in Istanbul';
    heroSubtitle = locale === 'tr' ? 'Eksik dişlerinizi 1200+ MPa Alman Zirkonyum ve implant destekli köprülerle kalıcı olarak tamamlayın.' : 'Replace missing teeth permanently with high-strength German Zirconia & Implant-supported bridges in Istanbul.';
  } else if (isDentalCrowns) {
    heroBadge = locale === 'tr' ? 'ZİRKONYUM & KRON' : 'DENTAL CROWNS';
    heroTitle = locale === 'tr' ? 'İstanbul Zirkonyum & Kron Kaplama Tedavisi' : 'Dental Crowns & Zirconia in Istanbul';
    heroSubtitle = locale === 'tr' ? '1200+ MPa dayanıklılıkta Alman Zirkonyum ve Ivoclar E-Max kalitesiyle eksiksiz gülüş dönüşümü.' : 'Restore damaged teeth with 1200+ MPa German Zirconia & Ivoclar E-Max crowns with 5-star VIP care in Istanbul.';
  } else if (isDentalVeneers) {
    heroBadge = locale === 'tr' ? 'DİŞ KAPLAMA & LAMİNA' : 'DENTAL VENEERS';
    heroTitle = locale === 'tr' ? 'İstanbul Diş Kaplama & Lamina Tedavisi' : 'Dental Veneers & Laminates in Istanbul';
    heroSubtitle = locale === 'tr' ? 'İsviçre menşeli Ivoclar E-Max porselen laminalarla 4-6 günde kusursuz Hollywood gülüşü.' : 'Transform your smile with Swiss Ivoclar E-Max porcelain veneers and 5-star VIP care in Istanbul.';
  } else if (isAllOnFour) {
    heroBadge = locale === 'tr' ? 'ALL-ON-4 İMPLANT' : 'ALL-ON-4 DENTAL IMPLANTS';
    heroTitle = locale === 'tr' ? 'İstanbul All-on-4 Diş İmplantı Tedavisi' : 'All-on-4 Dental Implants in Istanbul Turkey';
    heroSubtitle = locale === 'tr' ? 'Kemik erimesi olan vakalarda sinüs liftinge gerek kalmadan 4 açılı implantla 24 saatte sabit dişler.' : 'Same-day fixed full-arch teeth with 4 angled titanium implants without bone grafting in Istanbul.';
  } else if (isAllOnSix) {
    heroBadge = locale === 'tr' ? 'ALL-ON-6 İMPLANT' : 'ALL-ON-6 DENTAL IMPLANTS';
    heroTitle = locale === 'tr' ? 'İstanbul All-on-6 Diş İmplantı Tedavisi' : 'All-on-6 Dental Implants in Istanbul Turkey';
    heroSubtitle = locale === 'tr' ? 'Tek çenede 6 implant desteği ile 14 dişlik eksiksiz çiğneme arkı ve 1200+ MPa Alman Zirkonyum köprü.' : 'Full-arch 14-tooth restoration with 6 titanium implants per jaw and 1200+ MPa Monolithic German Zirconia bridges.';
  } else if (isImmediate) {
    heroBadge = locale === 'tr' ? 'AYNI GÜN İMPLANT' : 'IMMEDIATE DENTAL IMPLANTS';
    heroTitle = locale === 'tr' ? 'İstanbul Aynı Gün İmplant Tedavisi (Same-Day Teeth)' : 'Immediate Dental Implants in Istanbul (Same-Day Teeth)';
    heroSubtitle = locale === 'tr' ? 'Diş çekimi ile aynı seansta yüksek tutuculuklu implant yerleşimi ve 24 saat içinde sabit geçici kuron.' : 'Same-day tooth extraction, high-torque titanium implant placement, and fixed aesthetic teeth in 24 hours in Istanbul.';
  } else if (isDentalImplantsCategory) {
    heroBadge = locale === 'tr' ? 'DİŞ İMPLANTLARI' : 'DENTAL IMPLANTS';
    heroTitle = locale === 'tr' ? 'İstanbul Diş İmplantı Tedavisi & Fiyatları' : 'Dental Implants Cost (Price) Istanbul Turkey';
    heroSubtitle = locale === 'tr' ? 'Uzman cerrahlarımız ve en son 3D tomografi teknolojisiyle doğal dişinize en yakın kalıcı implant sonuçları.' : 'Achieve results closest to natural teeth with implant treatment performed under the supervision of expert oral surgeons.';
  }

  const canonicalUrl = `https://mastersmilestudio.com/${locale}/treatments/${slugPath}`;
  const jsonLd = generateTreatmentJsonLd({
    locale,
    slug: lastSlug,
    title: heroTitle,
    description: heroSubtitle,
    canonicalUrl,
  });

  return (
    <div className="treatment-layout-root">
      {/* Schema.org Advanced JSON-LD @graph */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <TreatmentHeroBanner
        tag={heroBadge}
        title={heroTitle}
        subtitle={heroSubtitle}
        primaryBtnText={
          content?.hero?.primaryBtn ||
          (locale === 'tr'
            ? 'Randevu & Bilgi Al'
            : locale === 'de'
            ? 'Kontakt & Termin'
            : locale === 'pl'
            ? 'Kontakt i Rezerwacja'
            : locale === 'pt'
            ? 'Contato e Agendamento'
            : locale === 'es'
            ? 'Contacto y Cita'
            : locale === 'ru'
            ? 'Консультация и Запись'
            : 'Contact & Appointment')
        }
        primaryBtnHref="/contact"
        primaryBtnAriaLabel={
          locale === 'tr'
            ? 'Randevu ve bilgi almak için iletişim sayfasına gidin'
            : 'Contact Master Smile Studio for appointment and consultation'
        }
        secondaryBtnText={
          content?.hero?.secondaryBtn ||
          (locale === 'tr'
            ? 'Paketleri İncele'
            : locale === 'de'
            ? 'Pakete & Details ansehen'
            : locale === 'pl'
            ? 'Zobacz Pakiety i Szczegóły'
            : locale === 'pt'
            ? 'Ver Pacotes e Detalhes'
            : locale === 'es'
            ? 'Ver Paquetes y Detalles'
            : locale === 'ru'
            ? 'Посмотреть Пакеты и Детали'
            : 'View Packages & Details')
        }
        secondaryBtnHref="#main-content"
        secondaryBtnAriaLabel={
          locale === 'tr'
            ? 'Tedavi paketlerini ve ayrıntılarını incelemek için aşağı kaydırın'
            : 'Scroll down to explore treatment packages and medical details'
        }
      />

      <main id="main-content" className="treatment-main-content">
        {isGeneral ? (
          <GeneralDentistryDetailView />
        ) : isCosmetic ? (
          <CosmeticDentistryDetailView />
        ) : isDentures ? (
          <DenturesDetailView />
        ) : isDentalBridges ? (
          <DentalBridgeDetailView />
        ) : isDentalCrowns ? (
          <DentalCrownsDetailView />
        ) : isDentalVeneers ? (
          <DentalVeneersDetailView />
        ) : isAllOnFour ? (
          <AllOnFourImplantDetailView />
        ) : isAllOnSix ? (
          <AllOnSixImplantDetailView />
        ) : isImmediate ? (
          <ImmediateImplantDetailView />
        ) : isZygomatic ? (
          <ZygomaticImplantDetailView />
        ) : isZirconium ? (
          <ZirconiumImplantDetailView />
        ) : isSinusLift ? (
          <SinusLiftingDetailView />
        ) : isDentalImplantsCategory ? (
          <DentalImplantsDetailView />
        ) : (
          <TreatmentDetailView />
        )}
      </main>

      <Footer />
    </div>
  );
}
