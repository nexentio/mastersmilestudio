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
import DentalCleaningHeroBanner from '@/components/treatment-sections/DentalCleaningHeroBanner';
import GeneralDentistryHeroBanner from '@/components/treatment-sections/GeneralDentistryHeroBanner';
import CosmeticDentistryHeroBanner from '@/components/treatment-sections/CosmeticDentistryHeroBanner';
import GeneralDentistryIntroSection from '@/components/treatment-sections/GeneralDentistryIntroSection';
import GeneralDentistryAccordionSection from '@/components/treatment-sections/GeneralDentistryAccordionSection';
import GeneralDentistryJourneySection from '@/components/treatment-sections/GeneralDentistryJourneySection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import RealPatientsSection from '@/components/RealPatientsSection';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import GeneralDentistryFaqSection from '@/components/treatment-sections/GeneralDentistryFaqSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';
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

  const isGeneralMain = lastSlug === 'general-dentistry';
  const isGeneralSub =
    (slugList.includes('general-dentistry') && lastSlug !== 'general-dentistry') ||
    [
      'dental-cleaning',
      'tooth-fillings',
      'root-canal',
      'tooth-extraction',
      'inlay-onlay',
      'dental-sealants',
      'fluoride-treatment',
      'bruxism-treatment',
    ].includes(lastSlug);
  const isGeneral = isGeneralMain || isGeneralSub;

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

  const isImplantSupportedDentures =
    lastSlug === 'implant-supported-dentures' ||
    lastSlug === 'implant-supported-dentures-istanbul-turkey' ||
    lastSlug === 'implant-supported-overdentures' ||
    lastSlug === 'implant-destekli-protezler-istanbul';

  const isDentures =
    !isImplantSupportedDentures &&
    (lastSlug.includes('denture') ||
    lastSlug.includes('protez') ||
    lastSlug.includes('overdenture') ||
    lastSlug === 'dentures');

  const isAllOnFour = lastSlug === 'all-on-4-implants' || lastSlug === 'all-on-four-implant-istanbul-turkey' || lastSlug === 'all-on-4';
  const isAllOnSix = lastSlug === 'all-on-6-implants' || lastSlug === 'all-on-six-dental-implant-istanbul-turkey' || lastSlug === 'all-on-6';
  const isImmediate = lastSlug === 'immediate-implant-treatment' || lastSlug === 'immediate-implants' || lastSlug === 'immediate';
  const isZygomatic = lastSlug === 'zygomatic-implants' || lastSlug === 'zygomatic-implants-istanbul-turkey' || lastSlug === 'zygomatic';
  const isZirconium = lastSlug === 'zirconium-implants' || lastSlug === 'zirconium-implants-istanbul-turkey';
  const isSinusLift = lastSlug === 'sinus-lifting' || lastSlug === 'sinus-lift';
  const isDentalCleaning = lastSlug === 'dental-cleaning' || lastSlug === 'dental-cleaning-in-istanbul-turkey' || lastSlug === 'scaling-polishing';

  let heroBadge = content?.hero?.badge || (locale === 'tr' ? 'TEDAVİLERİMİZ' : 'TREATMENTS');
  let heroTitle = content?.hero?.title || t('pageTitle');
  let heroSubtitle = content?.hero?.subtitle || t('pageSubtitle');

  if (isGeneralSub) {
    heroBadge = locale === 'tr' ? 'GENEL DİŞ HEKİMLİĞİ' : 'GENERAL DENTISTRY';
    if (lastSlug === 'dental-cleaning' || lastSlug === 'scaling-polishing') {
      heroTitle = locale === 'tr' ? 'İstanbul Diş Taşı Temizliği (Scaling & Polishing)' : 'Dental Cleaning (Scaling & Polishing) in Istanbul, Turkey';
      heroSubtitle = locale === 'tr' ? 'Ağrısız ultrasonik kavitron, İsviçre Air-Flow leke temizliği ve florürlü profesyonel cila uygulaması.' : 'Pain-free ultrasonic scaling, Swiss Air-Flow plaque removal, and high-gloss polishing performed by expert dental hygienists.';
    } else if (lastSlug === 'tooth-fillings') {
      heroTitle = locale === 'tr' ? 'İstanbul Estetik Kompozit Dolgu Tedavisi' : 'Tooth Fillings (Amalgam / Composite) in Istanbul, Turkey';
      heroSubtitle = locale === 'tr' ? 'Doğal diş renginde estetik nanokompozit dolgular ve amalgam dolgu değişimi.' : 'Tooth-colored composite restorations and safe amalgam filling replacements in Istanbul.';
    } else if (lastSlug === 'root-canal') {
      heroTitle = locale === 'tr' ? 'İstanbul Kanal Tedavisi (Endodonti)' : 'Root Canal Treatment (Endodontics) in Istanbul, Turkey';
      heroSubtitle = locale === 'tr' ? 'Ağrısız mikroskobik kanal tedavisi ile enfekte dişlerinizi çekilmekten kurtarın.' : 'Pain-free microscopic root canal therapy to save your natural teeth in Istanbul.';
    } else if (lastSlug === 'tooth-extraction') {
      heroTitle = locale === 'tr' ? 'İstanbul 20’lik ve Cerrahi Diş Çekimi' : 'Tooth & Wisdom Tooth Extraction in Istanbul, Turkey';
      heroSubtitle = locale === 'tr' ? 'Ağrısız, travmasız cerrahi çekimler ve gömülü 20 yaş dişi operasyonları.' : 'Painless surgical extractions and impacted wisdom tooth removal under local anesthesia.';
    } else if (lastSlug === 'inlay-onlay') {
      heroTitle = locale === 'tr' ? 'İstanbul İnley & Onley Porselen Dolgu' : 'Inlay & Onlay Ceramic Restorations in Istanbul, Turkey';
      heroSubtitle = locale === 'tr' ? 'CAD/CAM ile üretilen mikroskobik uyumlu porselen inley ve onley restorasyonlar.' : 'Precision CAD/CAM ceramic inlays and onlays preserving natural tooth structure.';
    } else if (lastSlug === 'dental-sealants') {
      heroTitle = locale === 'tr' ? 'İstanbul Fissür Örtücü Koruyucu Tedavi' : 'Dental Sealants (Fissure Protection) in Istanbul, Turkey';
      heroSubtitle = locale === 'tr' ? 'Azı dişlerindeki derin olukları kapatarak çürük oluşumunu %90 engelleyen koruyucu kalkan.' : 'Protective fissure sealants preventing tooth decay and safeguarding enamel.';
    } else if (lastSlug === 'fluoride-treatment') {
      heroTitle = locale === 'tr' ? 'İstanbul Profesyonel Florür Uygulaması' : 'Professional Fluoride Treatment in Istanbul, Turkey';
      heroSubtitle = locale === 'tr' ? 'Diş minesini güçlendiren ve hassasiyeti azaltan profesyonel flor uygulaması.' : 'Clinical fluoride varnish strengthening enamel and remineralizing sensitive teeth.';
    } else if (lastSlug === 'bruxism-treatment') {
      heroTitle = locale === 'tr' ? 'İstanbul Gece Plağı ve Bruksizm Tedavisi' : 'Bruxism Treatment & Night Guard in Istanbul, Turkey';
      heroSubtitle = locale === 'tr' ? 'Diş sıkma ve gıcırdatmaya karşı kişiye özel 3D gece koruyucu plakları ve botoks uygulaması.' : 'Custom 3D night guards and masseter treatment for teeth grinding and TMJ relief.';
    }
  } else if (isGeneralMain) {
    heroBadge = locale === 'tr' ? 'GENEL & KORUYUCU DİŞ HEKİMLİĞİ' : 'GENERAL & PREVENTIVE DENTISTRY';
    heroTitle = locale === 'tr' ? 'İstanbul Genel Diş Hekimliği & Tedavileri' : 'General Dentistry & Oral Health in Istanbul';
    heroSubtitle = locale === 'tr' ? 'Ağrısız mikroskobik kanal tedavisi, İsviçre Air-Flow ultrasonik diş temizliği ve estetik nanokompozit dolgular.' : 'Pain-free microscopic root canal therapy, ultrasonic Swiss Air-Flow scaling, and tooth-colored composite restorations.';
  } else if (isCosmetic) {
    heroBadge = locale === 'tr' ? 'ESTETİK DİŞ HEKİMLİĞİ & GÜLÜŞ TASARIMI' : 'COSMETIC DENTISTRY & SMILE DESIGN';
    heroTitle = locale === 'tr' ? 'İstanbul Hollywood Smile & Estetik Diş Tedavisi' : 'Hollywood Smile & Cosmetic Dentistry in Istanbul';
    heroSubtitle = locale === 'tr' ? 'Yüzün altın oranına özel 3D Dijital Gülüş Tasarımı, İsviçre Ivoclar E-Max laminalar ve lazerle pembe estetik.' : 'Transform your smile with bespoke 3D Digital Smile Design, Swiss Ivoclar E-Max laminates, and laser gum contouring in Istanbul.';
  } else if (isImplantSupportedDentures) {
    heroBadge = locale === 'tr' ? 'İMPLANT DESTEKLİ ÇIT ÇITLI DAMAK' : 'IMPLANT SUPPORTED OVERDENTURES';
    heroTitle = locale === 'tr' ? 'İstanbul İmplant Destekli Protez & Çıt Çıtlı Damak Tedavisi' : 'Implant-Supported Dentures (Snap-On) in Istanbul';
    heroSubtitle = locale === 'tr' ? 'Oynayan damak sorununa son: 2 ila 4 implant desteğiyle kilitlenen, damağı kapatmayan açık tasarımıyla %100 sabit çiğneme konforu.' : 'Eliminate loose slipping dentures with 2–4 implant-retained Snap-On overdentures and palateless horseshoe designs in Istanbul.';
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
  } else if (isZygomatic) {
    heroBadge = locale === 'tr' ? 'ZİGOMATİK İMPLANT' : 'ZYGOMATIC DENTAL IMPLANTS';
    heroTitle = locale === 'tr' ? 'İstanbul Zigoma (Elmacık Kemiği) İmplant Tedavisi' : 'Zygomatic Dental Implants in Istanbul Turkey';
    heroSubtitle = locale === 'tr' ? 'Aşırı kemik erimesi olan vakalarda kemik nakli beklemeden elmacık kemiğine sabitlenen 24 saatte kalıcı diş çözümü.' : 'Fixed full-arch teeth in 24 hours anchored into the dense zygoma (cheekbone) for severe bone loss cases without bone grafting.';
  } else if (isZirconium) {
    heroBadge = locale === 'tr' ? 'ZİRKONYUM SERAMİK İMPLANT' : 'ZIRCONIUM CERAMIC IMPLANTS';
    heroTitle = locale === 'tr' ? 'İstanbul Zirkonyum (Seramik) Diş İmplantı Tedavisi' : 'Zirconium Ceramic Dental Implants in Istanbul';
    heroSubtitle = locale === 'tr' ? '%100 metalsiz, biyouyumlu beyaz seramik yapısıyla diş etinde grileşme yapmayan en estetik ve alerjisiz implant çözümü.' : '100% metal-free, biocompatible white ceramic implants for natural gum aesthetics without dark shadows or metal allergies.';
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

      {isGeneralMain ? (
        <GeneralDentistryHeroBanner />
      ) : isCosmetic ? (
        <CosmeticDentistryHeroBanner />
      ) : isDentalCleaning ? (
        <DentalCleaningHeroBanner />
      ) : (
        <TreatmentHeroBanner
          tag={heroBadge}
          title={heroTitle}
          subtitle={heroSubtitle}
          imageSrc={
            isDentalImplantsCategory
              ? 'https://sohodent.com/doc/data1/zirconium-implant.webp?v=1'
              : undefined
          }
          imageAlt={
            isDentalImplantsCategory ? 'Zirconium Implants' : undefined
          }
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
      )}

      <main id="main-content" className="treatment-main-content">
        {isGeneralMain ? (
          <>
            <GeneralDentistryIntroSection />
            <GeneralDentistryAccordionSection />
            <GeneralDentistryJourneySection />
            <TreatmentServicesIncludedSection />
            <RealPatientsSection />
            <TreatmentReviewsSection />
            <GeneralDentistryFaqSection />
            <div id="contact">
              <TreatmentInteractiveQuoteForm defaultTreatment="General Dentistry" />
            </div>
          </>
        ) : isGeneralSub ? (
          <div style={{ minHeight: '120px' }} />
        ) : isCosmetic ? (
          <CosmeticDentistryDetailView />
        ) : isImplantSupportedDentures ? (
          <ImplantSupportedDenturesDetailView />
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
