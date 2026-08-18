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
import CompleteDenturesDetailView from '@/components/CompleteDenturesDetailView';
import PartialDenturesDetailView from '@/components/PartialDenturesDetailView';
import CosmeticDentistryDetailView from '@/components/CosmeticDentistryDetailView';
import SmileMakeoverDetailView from '@/components/SmileMakeoverDetailView';
import GeneralDentistryDetailView from '@/components/GeneralDentistryDetailView';
import AllOnSixImplantDetailView from '@/components/AllOnSixImplantDetailView';
import AllOnFourImplantDetailView from '@/components/AllOnFourImplantDetailView';
import ImmediateImplantDetailView from '@/components/ImmediateImplantDetailView';
import ZygomaticImplantDetailView from '@/components/ZygomaticImplantDetailView';
import ZirconiumImplantDetailView from '@/components/ZirconiumImplantDetailView';
import ImplantSupportedDenturesDetailView from '@/components/ImplantSupportedDenturesDetailView';
import SinusLiftingDetailView from '@/components/SinusLiftingDetailView';
import ZirconiumCrownsDetailView from '@/components/ZirconiumCrownsDetailView';
import PfmCrownsDetailView from '@/components/PfmCrownsDetailView';
import EmaxCrownsDetailView from '@/components/EmaxCrownsDetailView';
import FullCeramicCrownsDetailView from '@/components/FullCeramicCrownsDetailView';
import PorcelainVeneersDetailView from '@/components/PorcelainVeneersDetailView';
import EmaxVeneersDetailView from '@/components/EmaxVeneersDetailView';
import ZirconiumVeneersDetailView from '@/components/ZirconiumVeneersDetailView';
import CompositeVeneersDetailView from '@/components/CompositeVeneersDetailView';
import LumineersDetailView from '@/components/LumineersDetailView';
import EmpressVeneersDetailView from '@/components/EmpressVeneersDetailView';
import TraditionalBridgesDetailView from '@/components/TraditionalBridgesDetailView';
import MarylandBridgesDetailView from '@/components/MarylandBridgesDetailView';
import CantileverBridgesDetailView from '@/components/CantileverBridgesDetailView';
import DentalCleaningHeroBanner from '@/components/treatment-sections/DentalCleaningHeroBanner';
import GeneralDentistryHeroBanner from '@/components/treatment-sections/GeneralDentistryHeroBanner';
import CosmeticDentistryHeroBanner from '@/components/treatment-sections/CosmeticDentistryHeroBanner';
import DenturesHeroBanner from '@/components/treatment-sections/DenturesHeroBanner';
import DentalBridgesHeroBanner from '@/components/treatment-sections/DentalBridgesHeroBanner';
import DentalVeneersHeroBanner from '@/components/treatment-sections/DentalVeneersHeroBanner';
import DentalCrownsHeroBanner from '@/components/treatment-sections/DentalCrownsHeroBanner';
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
  } else if (lastSlug === 'smile-makeover' || lastSlug === 'digital-smile-design' || lastSlug === 'gulus-tasarimi') {
    title =
      locale === 'tr'
        ? 'İstanbul Smile Makeover & 3D Dijital Gülüş Tasarımı | Master Smile Studio'
        : 'Smile Makeover & 3D Digital Smile Design in Istanbul, Turkey | Master Smile Studio';
    description =
      locale === 'tr'
        ? 'Yüzün altın oranına özel 3D dijital analiz, yapay zeka destekli planlama ve diş kesimi öncesi canlı mock-up provası.'
        : 'AI-guided 3D Digital Smile Design with customized facial golden ratio analysis and live in-mouth physical mock-up try-in in Istanbul.';
  } else if (lastSlug === 'hollywood-smile' || lastSlug === 'hollywood-smile-istanbul' || lastSlug === 'hollywood-gulusu') {
    title =
      locale === 'tr'
        ? 'İstanbul Hollywood Smile Fiyatları & Gülüş Tasarımı | Master Smile Studio'
        : 'Hollywood Smile in Istanbul, Turkey (Full Smile Makeover) | Master Smile Studio';
    description =
      locale === 'tr'
        ? '16-20 adet İsviçre Ivoclar E-Max veya Alman Zirkonyum kaplama ile 4-6 günde kusursuz beyaz simetri ve büyüleyici Hollywood gülüşü.'
        : 'Complete aesthetic transformation with 16 to 20 Swiss Ivoclar E-Max veneers or German Zirconia crowns crafted to your facial Golden Ratio in Istanbul.';
  } else if (lastSlug === 'gummy-smile' || lastSlug === 'gummy-smile-treatment' || lastSlug === 'gum-contouring' || lastSlug === 'pembe-estetik') {
    title =
      locale === 'tr'
        ? 'İstanbul Gummy Smile & Diş Eti Estetiği Tedavisi | Master Smile Studio'
        : 'Gummy Smile Treatment & Laser Gum Contouring in Istanbul, Turkey | Master Smile Studio';
    description =
      locale === 'tr'
        ? 'Ağrısız ve dikişsiz diyot lazer teknolojisi ile diş eti seviyeleme, pembe estetik ve gülüş simetrisi optimizasyonu.'
        : 'Painless diode laser gingivectomy and aesthetic gum contouring to balance excessive gum display and enhance smile symmetry in Istanbul.';
  } else if (lastSlug === 'teeth-whitening' || lastSlug === 'laser-teeth-whitening' || lastSlug === 'whitening' || lastSlug === 'dis-beyazlatma') {
    title =
      locale === 'tr'
        ? 'İstanbul Lazerle Diş Beyazlatma & Philips Zoom Fiyatları | Master Smile Studio'
        : 'Laser Teeth Whitening in Istanbul, Turkey (Philips Zoom) | Master Smile Studio';
    description =
      locale === 'tr'
        ? 'Klinik ortamında Philips Zoom Blue LED ışık aktivasyonu ile tek seansta 6-8 tona kadar güvenli ve kalıcı beyazlatma.'
        : 'In-clinic professional light-activated Philips Zoom Blue LED whitening lightening enamel by 6 to 8 shades safely in 45 minutes in Istanbul.';
  } else if (lastSlug === 'tooth-contouring' || lastSlug === 'tooth-contouring-shaping' || lastSlug === 'tooth-shaping' || lastSlug === 'dis-sekillendirme') {
    title =
      locale === 'tr'
        ? 'İstanbul Diş Şekillendirme ve Konturlama Tedavisi | Master Smile Studio'
        : 'Tooth Contouring & Shaping in Istanbul, Turkey | Master Smile Studio';
    description =
      locale === 'tr'
        ? 'Hafif diş eğriliklerini, sivrilikleri ve asimetrileri anestezi gerektirmeden düzelten mikroskobik mine şekillendirme ve polisaj.'
        : 'Subtle enamel recontouring and odontoplasty smoothing minor chips, overlaps, and irregular edges painlessly in a single visit in Istanbul.';
  } else if (lastSlug === 'diastema-closure' || lastSlug === 'diestema-closure' || lastSlug === 'diastema' || lastSlug === 'ayrik-dis-tedavisi') {
    title =
      locale === 'tr'
        ? 'İstanbul Ayrık Diş (Diastema) Kapatma Tedavisi | Master Smile Studio'
        : 'Diastema Closure in Istanbul, Turkey (Gap Closure) | Master Smile Studio';
    description =
      locale === 'tr'
        ? 'Ön dişler arasındaki boşlukları diş kesimi olmadan nano-kompozit bonding veya ultra ince E-Max yaprak porselen ile tek seansta kapatma.'
        : 'Non-invasive diastema closure closing spaces between front teeth using direct resin bonding or ultra-thin E-Max porcelain veneers in Istanbul.';
  } else if (lastSlug.includes('cosmetic') || lastSlug.includes('makeover')) {
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

  const isSmileMakeover =
    lastSlug === 'smile-makeover' ||
    lastSlug === 'digital-smile-design' ||
    lastSlug === 'gulus-tasarimi';

  const isHollywoodSmile =
    lastSlug === 'hollywood-smile' ||
    lastSlug === 'hollywood-smile-istanbul' ||
    lastSlug === 'hollywood-gulusu';

  const isGummySmile =
    lastSlug === 'gummy-smile' ||
    lastSlug === 'gummy-smile-treatment' ||
    lastSlug === 'gum-contouring' ||
    lastSlug === 'pembe-estetik' ||
    lastSlug === 'gingivoplasti';

  const isTeethWhitening =
    lastSlug === 'teeth-whitening' ||
    lastSlug === 'laser-teeth-whitening' ||
    lastSlug === 'whitening' ||
    lastSlug === 'dis-beyazlatma' ||
    lastSlug === 'bleaching';

  const isToothContouring =
    lastSlug === 'tooth-contouring' ||
    lastSlug === 'tooth-contouring-shaping' ||
    lastSlug === 'tooth-shaping' ||
    lastSlug === 'enameloplasty' ||
    lastSlug === 'dis-sekillendirme';

  const isDiastemaClosure =
    lastSlug === 'diastema-closure' ||
    lastSlug === 'diestema-closure' ||
    lastSlug === 'diastema' ||
    lastSlug === 'gap-closure' ||
    lastSlug === 'ayrik-dis-tedavisi';

  const isCosmeticCategory =
    !isSmileMakeover &&
    !isHollywoodSmile &&
    !isGummySmile &&
    !isTeethWhitening &&
    !isToothContouring &&
    !isDiastemaClosure &&
    (lastSlug === 'cosmetic-dentistry' ||
    lastSlug === 'cosmetic-dentistry-istanbul' ||
    lastSlug === 'estetik-dis-hekimligi');

  const isCosmetic =
    isCosmeticCategory ||
    isSmileMakeover ||
    isHollywoodSmile ||
    isGummySmile ||
    isTeethWhitening ||
    isToothContouring ||
    isDiastemaClosure;

  const isCompositeVeneers =
    lastSlug === 'composite-veneers' ||
    lastSlug === 'composite-veneer' ||
    lastSlug === 'composite-bonding' ||
    lastSlug === 'kompozit-lamina' ||
    lastSlug === 'kompozit-bonding';

  const isLumineers =
    lastSlug === 'lumineers' ||
    lastSlug === 'lumineer' ||
    lastSlug === 'no-prep-veneers' ||
    lastSlug === 'no-prep-veneer';

  const isEmpressVeneers =
    lastSlug === 'empress-veneers' ||
    lastSlug === 'empress-veneer' ||
    lastSlug === 'ips-empress' ||
    lastSlug === 'empress-lamina';

  const isZirconiumVeneers =
    !isCompositeVeneers &&
    !isLumineers &&
    !isEmpressVeneers &&
    (lastSlug === 'zirconium-veneers' ||
    lastSlug === 'zirconia-veneers' ||
    lastSlug === 'zirconium-veneer' ||
    lastSlug === 'zirconia-veneer' ||
    lastSlug === 'zirkonyum-lamina');

  const isEmaxVeneers =
    !isZirconiumVeneers &&
    !isCompositeVeneers &&
    !isLumineers &&
    !isEmpressVeneers &&
    (lastSlug === 'emax-veneers' ||
    lastSlug === 'e-max-veneers' ||
    lastSlug === 'emax-veneer' ||
    lastSlug === 'e-max-veneer' ||
    lastSlug === 'emax-lamina');

  const isPorcelainVeneers =
    !isZirconiumVeneers &&
    !isEmaxVeneers &&
    !isCompositeVeneers &&
    !isLumineers &&
    !isEmpressVeneers &&
    (lastSlug === 'porcelain-veneers' ||
    lastSlug === 'porcelain-veneer' ||
    lastSlug === 'porselen-lamina' ||
    lastSlug === 'porcelain-laminate-veneers');

  const isDentalVeneers =
    !isPorcelainVeneers &&
    !isEmaxVeneers &&
    !isZirconiumVeneers &&
    !isCompositeVeneers &&
    !isLumineers &&
    !isEmpressVeneers &&
    (lastSlug.includes('veneer') ||
    lastSlug.includes('lumineer') ||
    lastSlug.includes('lamine') ||
    lastSlug === 'dental-veneers');

  const isZirconiumCrowns =
    lastSlug === 'zirconium-crowns' ||
    lastSlug === 'zirconium-crown' ||
    lastSlug === 'zirconia-crowns' ||
    lastSlug === 'zirkonyum-kaplama' ||
    lastSlug === 'zirconium-dental-crowns';

  const isPfmCrowns =
    lastSlug === 'pfm-crowns' ||
    lastSlug === 'metal-porcelain-crowns' ||
    lastSlug === 'metal-porcelain-crown' ||
    lastSlug === 'pfm-crown';

  const isEmaxCrowns =
    lastSlug === 'emax-crowns' ||
    lastSlug === 'e-max-crowns' ||
    lastSlug === 'emax-crown' ||
    lastSlug === 'e-max-crown' ||
    lastSlug === 'emax-kaplama';

  const isFullCeramicCrowns =
    lastSlug === 'full-ceramic' ||
    lastSlug === 'full-ceramic-crowns' ||
    lastSlug === 'full-ceramic-crown' ||
    lastSlug === 'tam-seramik-kron' ||
    lastSlug === 'tam-seramik-kaplama';

  const isDentalCrowns =
    !isZirconiumCrowns &&
    !isPfmCrowns &&
    !isEmaxCrowns &&
    !isFullCeramicCrowns &&
    (lastSlug.includes('crown') ||
    lastSlug.includes('kron') ||
    lastSlug === 'dental-crowns');

  const isMarylandBridges =
    lastSlug === 'maryland-bridges' ||
    lastSlug === 'maryland-bridge' ||
    lastSlug === 'maryland-kopru' ||
    lastSlug === 'resin-bonded-bridge' ||
    lastSlug === 'resin-bonded-bridges';

  const isCantileverBridges =
    lastSlug === 'cantilever-bridges' ||
    lastSlug === 'cantilever-bridge' ||
    lastSlug === 'cantilever-kopru' ||
    lastSlug === 'balkon-kopru';

  const isTraditionalBridges =
    !isMarylandBridges &&
    !isCantileverBridges &&
    (lastSlug === 'traditional-bridges' ||
    lastSlug === 'traditional-bridge' ||
    lastSlug === 'geleneksel-kopru' ||
    lastSlug === 'fixed-bridges' ||
    lastSlug === 'fixed-bridge');
  const isDentalBridges =
    !isTraditionalBridges &&
    !isMarylandBridges &&
    !isCantileverBridges &&
    (lastSlug.includes('bridge') ||
    lastSlug.includes('kopru') ||
    lastSlug === 'dental-bridge');

  const isCompleteDentures =
    lastSlug === 'complete-dentures' ||
    lastSlug === 'complete-denture' ||
    lastSlug === 'tam-protez' ||
    lastSlug === 'total-protez' ||
    lastSlug === 'full-dentures' ||
    lastSlug === 'full-denture';

  const isPartialDentures =
    lastSlug === 'partial-dentures' ||
    lastSlug === 'partial-denture' ||
    lastSlug === 'bolumlu-protez' ||
    lastSlug === 'parsiyel-protez' ||
    lastSlug === 'kancali-protez' ||
    lastSlug === 'valplast' ||
    lastSlug === 'precision-attachment';

  const isOverdentures =
    lastSlug === 'overdentures' ||
    lastSlug === 'overdenture' ||
    lastSlug === 'snap-on-dentures' ||
    lastSlug === 'snap-on-denture' ||
    lastSlug === 'implant-supported-dentures' ||
    lastSlug === 'implant-supported-dentures-istanbul-turkey' ||
    lastSlug === 'implant-supported-overdentures' ||
    lastSlug === 'implant-destekli-protezler-istanbul' ||
    lastSlug === 'citcitli-protez' ||
    lastSlug === 'implant-ustu-protez';

  const isImplantSupportedDentures = isOverdentures;

  const isDenturesCategory =
    !isCompleteDentures &&
    !isPartialDentures &&
    !isOverdentures &&
    (lastSlug.includes('denture') ||
    lastSlug.includes('protez') ||
    lastSlug === 'dentures');

  const isDentures = isDenturesCategory;

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
      heroTitle = locale === 'tr' ? 'İstanbul Diş Taşı Temizliği ve Bakımı' : 'Teeth Cleaning & Scaling in Istanbul, Turkey';
      heroSubtitle = locale === 'tr' ? 'Ultrasonik cihazlarla ağrısız diş taşı temizliği, hava akışlı polisaj ve florür uygulaması.' : 'Professional ultrasonic scaling, air-flow polishing, and preventive oral hygiene treatments in Istanbul.';
    } else if (lastSlug === 'tooth-fillings') {
      heroTitle = locale === 'tr' ? 'İstanbul Estetik Kompozit Diş Dolgusu' : 'Aesthetic Composite Dental Fillings in Istanbul';
      heroSubtitle = locale === 'tr' ? 'Doğal diş renginde, biyouyumlu nanokompozit dolgular ile çürük tedavisi ve restorasyon.' : 'Tooth-colored biocompatible composite restorations for seamless cavity repair.';
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
  } else if (isSmileMakeover) {
    heroBadge =
      locale === 'tr' ? '3D DİJİTAL GÜLÜŞ TASARIMI' :
      locale === 'de' ? '3D DIGITAL SMILE DESIGN' :
      locale === 'pl' ? 'CYFROWE PROJEKTOWANIE UŚMIECHU 3D' :
      locale === 'pt' ? 'DESIGN DIGITAL DO SORRISO 3D' :
      locale === 'es' ? 'DISEÑO DIGITAL DE SONRISA 3D' :
      locale === 'ru' ? '3D ЦИФРОВОЙ ДИЗАЙН УЛЫБКИ' :
      '3D DIGITAL SMILE DESIGN & MAKEOVER';
    heroTitle =
      locale === 'tr' ? 'İstanbul Smile Makeover & Dijital Gülüş Tasarımı' :
      locale === 'de' ? 'Smile Makeover & Digital Smile Design in Istanbul, Türkei' :
      locale === 'pl' ? 'Smile Makeover w Stambule, Turcja' :
      locale === 'pt' ? 'Smile Makeover e Design Digital do Sorriso em Istambul, Turquia' :
      locale === 'es' ? 'Smile Makeover y Diseño Digital de Sonrisa en Estambul, Turquía' :
      locale === 'ru' ? 'Smile Makeover и цифровой дизайн улыбки в Стамбуле, Турция' :
      'Smile Makeover & Digital Smile Design in Istanbul, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Yüzün altın oranına ve dudak dinamiklerine özel 3D dijital analiz, yapay zeka destekli planlama ve diş kesimi öncesi canlı mock-up provası.' :
      locale === 'de' ? 'Individuelle 3D-Smile-Design-Analyse, KI-gestützte Behandlungsplanung und Live-Mock-up-Anprobe vor Behandlungsbeginn in Istanbul.' :
      locale === 'pl' ? 'Indywidualna analiza estetyczna 3D, cyfrowe planowanie uśmiechu AI i przymiarka mock-up przed rozpoczęciem zabiegu w Stambule.' :
      locale === 'pt' ? 'Análise estética 3D personalizada, planeamento digital com IA e prova de mock-up ao vivo antes de qualquer desgaste em Istambul.' :
      locale === 'es' ? 'Análisis estético 3D personalizado, planificación digital con IA y prueba de mock-up en vivo antes del tratamiento en Estambul.' :
      locale === 'ru' ? 'Персонализированный 3D-анализ улыбки, цифровое планирование с ИИ и живая примерка mock-up до начала препарирования в Стамбуле.' :
      'AI-guided 3D Digital Smile Design with customized facial golden ratio analysis and live in-mouth physical mock-up try-in in Istanbul.';
  } else if (isHollywoodSmile) {
    heroBadge =
      locale === 'tr' ? 'HOLLYWOOD SMİLE GÜLÜŞ TASARIMI' :
      locale === 'de' ? 'HOLLYWOOD SMILE' :
      locale === 'pl' ? 'HOLLYWOODZKI UŚMIECH' :
      locale === 'pt' ? 'SORRISO HOLLYWOOD' :
      locale === 'es' ? 'SONRISA HOLLYWOOD' :
      locale === 'ru' ? 'ГОЛЛИВУДСКАЯ УЛЫБКА' :
      'HOLLYWOOD SMILE MAKEOVER';
    heroTitle =
      locale === 'tr' ? 'İstanbul Hollywood Smile Fiyatları & Gülüş Tasarımı' :
      locale === 'de' ? 'Hollywood Smile in Istanbul, Türkei (Komplettes Makeover)' :
      locale === 'pl' ? 'Hollywood Smile w Stambule, Turcja' :
      locale === 'pt' ? 'Sorriso Hollywood em Istambul, Turquia' :
      locale === 'es' ? 'Sonrisa Hollywood en Estambul, Turquía' :
      locale === 'ru' ? 'Голливудская улыбка в Стамбуле, Турция' :
      'Hollywood Smile in Istanbul, Turkey (Full Smile Makeover)';
    heroSubtitle =
      locale === 'tr' ? '16-20 adet İsviçre Ivoclar E-Max veya Alman Zirkonyum kaplama ile 4-6 günde kusursuz beyaz simetri ve büyüleyici Hollywood gülüşü.' :
      locale === 'de' ? '16 bis 20 Schweizer Ivoclar E-Max oder deutsche Zirkonkronen für perfekte weiße Symmetrie und ein strahlendes Hollywood-Lächeln in Istanbul.' :
      locale === 'pl' ? '16–20 szwajcarskich licówek Ivoclar E-Max lub koron cyrkonowych zapewniających idealną symetrię i hollywoodzki uśmiech w Stambule.' :
      locale === 'pt' ? '16 a 20 facetas suíças Ivoclar E-Max ou coroas de zircónia para simetria perfeita e sorriso Hollywood deslumbrante em Istambul.' :
      locale === 'es' ? '16 a 20 carillas suizas Ivoclar E-Max o coronas de circonio para una simetría blanca perfecta y sonrisa Hollywood en Estambul.' :
      locale === 'ru' ? '16–20 швейцарских виниров Ivoclar E-Max или циркониевых коронок для безупречной белизны и голливудской улыбки в Стамбуле.' :
      'Complete aesthetic transformation with 16 to 20 Swiss Ivoclar E-Max veneers or German Zirconia crowns crafted to your facial Golden Ratio in Istanbul.';
  } else if (isGummySmile) {
    heroBadge =
      locale === 'tr' ? 'PEMBE ESTETİK & GUMMY SMILE' :
      locale === 'de' ? 'GUMMY-SMILE-BEHANDLUNG & ZAHNFLEISCHKORREKTUR' :
      locale === 'pl' ? 'KOREKTA UŚMIECHU DZIĄSŁOWEGO (GUMMY SMILE)' :
      locale === 'pt' ? 'TRATAMENTO DE SORRISO GENGIVAL' :
      locale === 'es' ? 'TRATAMIENTO DE SONRISA GINGIVAL' :
      locale === 'ru' ? 'ЛЕЧЕНИЕ ДЕСНЕВОЙ УЛЫБКИ (GUMMY SMILE)' :
      'GUMMY SMILE TREATMENT & GUM CONTOURING';
    heroTitle =
      locale === 'tr' ? 'İstanbul Gummy Smile & Diş Eti Estetiği Tedavisi' :
      locale === 'de' ? 'Gummy-Smile-Behandlung & Zahnfleischästhetik in Istanbul, Türkei' :
      locale === 'pl' ? 'Leczenie Uśmiechu Dziąsłowego (Gummy Smile) w Stambule, Turcja' :
      locale === 'pt' ? 'Tratamento de Sorriso Gengival em Istambul, Turquia' :
      locale === 'es' ? 'Tratamiento de Sonrisa Gingival en Estambul, Turquía' :
      locale === 'ru' ? 'Лечение десневой улыбки (Gummy Smile) в Стамбуле, Турция' :
      'Gummy Smile Treatment & Laser Gum Contouring in Istanbul, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Ağrısız ve dikişsiz diyot lazer teknolojisi ile diş eti seviyeleme, pembe estetik ve gülüş simetrisi optimizasyonu.' :
      locale === 'de' ? 'Schmerzfreie Diodenlaser-Gingivektomie zur Harmonisierung der Zahnfleischlinie und Beseitigung des Gummy Smile in Istanbul.' :
      locale === 'pl' ? 'Bezbolesna korekta linii dziąseł laserem diodowym zapewniająca idealną różową estetykę i harmonijny uśmiech w Stambule.' :
      locale === 'pt' ? 'Gengivoplastia indolor com laser de díodo para alinhar a margem gengival e eliminar o sorriso gengival em Istambul.' :
      locale === 'es' ? 'Gingivoplastia indolora con láser de diodo para nivelar el margen gingival y corregir la sonrisa gingival en Estambul.' :
      locale === 'ru' ? 'Безболезненная коррекция десневого контура диодным лазером для устранения десневой улыбки и розовой эстетики в Стамбуле.' :
      'Painless diode laser gingivectomy and aesthetic gum contouring to balance excessive gum display and enhance smile symmetry in Istanbul.';
  } else if (isTeethWhitening) {
    heroBadge =
      locale === 'tr' ? 'LAZERLE DİŞ BEYAZLATMA' :
      locale === 'de' ? 'LASER-ZAHNAUFHELLUNG (BLEACHING)' :
      locale === 'pl' ? 'LASEROWE WYBIELANIE ZĘBÓW' :
      locale === 'pt' ? 'BRANQUEAMENTO DENTÁRIO A LASER' :
      locale === 'es' ? 'BLANQUEAMIENTO DENTAL LÁSER' :
      locale === 'ru' ? 'ЛАЗЕРНОЕ ОТБЕЛИВАНИЕ ЗУБОВ' :
      'LASER TEETH WHITENING';
    heroTitle =
      locale === 'tr' ? 'İstanbul Lazerle Diş Beyazlatma & Philips Zoom' :
      locale === 'de' ? 'Laser-Zahnaufhellung (Bleaching) in Istanbul, Türkei' :
      locale === 'pl' ? 'Laserowe Wybielanie Zębów w Stambule, Turcja (Philips Zoom)' :
      locale === 'pt' ? 'Branqueamento Dentário a Laser em Istambul, Turquia' :
      locale === 'es' ? 'Blanqueamiento Dental Láser en Estambul, Turquía' :
      locale === 'ru' ? 'Лазерное отбеливание зубов в Стамбуле, Турция (Philips Zoom)' :
      'Laser Teeth Whitening in Istanbul, Turkey (Philips Zoom)';
    heroSubtitle =
      locale === 'tr' ? 'Klinik ortamında Philips Zoom Blue LED ışık aktivasyonu ile tek seansta 6-8 tona kadar güvenli ve kalıcı beyazlatma.' :
      locale === 'de' ? 'Professionelles klinisches Bleaching mit Philips Zoom LED-Licht für 6 bis 8 Nuancen hellere Zähne in nur einer Sitzung in Istanbul.' :
      locale === 'pl' ? 'Profesjonalne wybielanie gabinetowe lampą Philips Zoom rozjaśniające zęby o 6-8 odcieni podczas jednej wizyty w Stambule.' :
      locale === 'pt' ? 'Branqueamento profissional com lâmpada Philips Zoom para dentes até 8 tons mais claros em apenas uma sessão em Istambul.' :
      locale === 'es' ? 'Blanqueamiento dental clínico con lámpara Philips Zoom para aclarar de 6 a 8 tonos en una sola sesión en Estambul.' :
      locale === 'ru' ? 'Профессиональное клиническое отбеливание лампой Philips Zoom на 6-8 тонов светлее всего за один сеанс в Стамбуле.' :
      'In-clinic professional light-activated Philips Zoom Blue LED whitening lightening enamel by 6 to 8 shades safely in 45 minutes in Istanbul.';
  } else if (isToothContouring) {
    heroBadge =
      locale === 'tr' ? 'DİŞ ŞEKİLLENDİRME (ODONTOPLASTİ)' :
      locale === 'de' ? 'ZAHNUMFORMUNG & KONTURIERUNG' :
      locale === 'pl' ? 'KONTUROWANIE I KSZTAŁTOWANIE ZĘBÓW' :
      locale === 'pt' ? 'CONTORNO E REMODELAÇÃO DENTÁRIA' :
      locale === 'es' ? 'CONTORNEADO Y REMODELADO DENTAL' :
      locale === 'ru' ? 'КОНТУРИРОВАНИЕ И РЕМАСШТАБИРОВАНИЕ ЗУБОВ' :
      'TOOTH CONTOURING & ENAMEL RESHAPING';
    heroTitle =
      locale === 'tr' ? 'İstanbul Diş Şekillendirme ve Konturlama Tedavisi' :
      locale === 'de' ? 'Zahnumformung & Konturierung in Istanbul, Türkei' :
      locale === 'pl' ? 'Konturowanie i Modelowanie Zębów w Stambule, Turcja' :
      locale === 'pt' ? 'Contorno e Remodelação Dentária em Istambul, Turquia' :
      locale === 'es' ? 'Contorneado y Modelado Dental en Estambul, Turquía' :
      locale === 'ru' ? 'Контурирование и моделирование зубов в Стамбуле, Турция' :
      'Tooth Contouring & Shaping in Istanbul, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Hafif diş eğriliklerini, sivrilikleri ve asimetrileri anestezi gerektirmeden düzelten mikroskobik mine şekillendirme ve polisaj.' :
      locale === 'de' ? 'Minimalinvasive Schmelzkonturierung zur Glättung kleiner Kanten und Asymmetrien ganz ohne Betäubung in Istanbul.' :
      locale === 'pl' ? 'Minimalnie inwazyjne konturowanie szkliwa korygujące drobne nierówności i asymetrie bez znieczulenia w Stambule.' :
      locale === 'pt' ? 'Remodelação minimamente invasiva do esmalte para corrigir pequenas irregularidades e assimetrias sem anestesia em Istambul.' :
      locale === 'es' ? 'Contorneado de esmalte mínimamente invasivo para corregir pequeñas irregularidades y asimetrías sin anestesia en Estambul.' :
      locale === 'ru' ? 'Минимально инвазивное контурирование эмали для устранения неровностей и асимметрии зубов без анестезии в Стамбуле.' :
      'Subtle enamel recontouring and odontoplasty smoothing minor chips, overlaps, and irregular edges painlessly in a single visit in Istanbul.';
  } else if (isDiastemaClosure) {
    heroBadge =
      locale === 'tr' ? 'AYRIK DİŞ (DİASTEMA) KAPATMA' :
      locale === 'de' ? 'DIASTEMA-SCHLIESSUNG (ZAHNLÜCKEN-KORREKTUR)' :
      locale === 'pl' ? 'ZAMYKANIE DIASTEMY (LUK MIĘDZY ZĘBAMI)' :
      locale === 'pt' ? 'FECHAMENTO DE DIASTEMA' :
      locale === 'es' ? 'CIERRE DE DIASTEMA' :
      locale === 'ru' ? 'ЗАКРЫТИЕ ДИАСТЕМЫ (ЩЕЛИ МЕЖДУ ЗУБАМИ)' :
      'DIASTEMA CLOSURE & GAP REPAIR';
    heroTitle =
      locale === 'tr' ? 'İstanbul Ayrık Diş (Diastema) Kapatma Tedavisi' :
      locale === 'de' ? 'Diastema-Schließung in Istanbul, Türkei (Zahnlücken-Korrektur)' :
      locale === 'pl' ? 'Zamykanie Diastemy w Stambule, Turcja' :
      locale === 'pt' ? 'Fechamento de Diastema em Istambul, Turquia' :
      locale === 'es' ? 'Cierre de Diastema en Estambul, Turquía' :
      locale === 'ru' ? 'Закрытие диастемы в Стамбуле, Турция' :
      'Diastema Closure in Istanbul, Turkey (Gap Closure)';
    heroSubtitle =
      locale === 'tr' ? 'Ön dişler arasındaki boşlukları diş kesimi olmadan nano-kompozit bonding veya ultra ince E-Max yaprak porselen ile tek seansta kapatma.' :
      locale === 'de' ? 'Lückenschluss zwischen den Frontzähnen ohne Beschleifen durch direktes Komposit-Bonding oder hauchdünne E-Max-Veneers in Istanbul.' :
      locale === 'pl' ? 'Zamykanie przerw między zębami bez szlifowania za pomocą bondingu kompozytowego lub ultra-cienkich licówek E-Max w Stambule.' :
      locale === 'pt' ? 'Fechamento de espaços entre os dentes sem desgaste dental com resina composta ou facetas ultrafinas E-Max em Istambul.' :
      locale === 'es' ? 'Cierre de espacios interdentales sin tallado mediante composite o carillas ultrafinas E-Max en Estambul.' :
      locale === 'ru' ? 'Закрытие межзубных промежутков без обточки с помощью композитного бондинга или ультратонких виниров E-Max в Стамбуле.' :
      'Non-invasive diastema closure closing spaces between front teeth using direct resin bonding or ultra-thin E-Max porcelain veneers in Istanbul.';
  } else if (isCosmeticCategory) {
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
  } else if (isZirconiumCrowns) {
    heroBadge =
      locale === 'tr' ? 'ZİRKONYUM KRON KAPLAMA' :
      locale === 'de' ? 'ZIRKONKRONEN' :
      locale === 'pl' ? 'KORONY CYRKONOWE' :
      locale === 'pt' ? 'COROAS DE ZIRCÓNIA' :
      locale === 'es' ? 'CORONAS DE CIRCONIO' :
      locale === 'ru' ? 'ЦИРКОНИЕВЫЕ КОРОНКИ' :
      'ZIRCONIUM CROWNS';
    heroTitle =
      locale === 'tr' ? 'İstanbul Zirkonyum Diş Kaplama & Kron Tedavisi' :
      locale === 'de' ? 'Zirkonkronen in Istanbul, Türkei' :
      locale === 'pl' ? 'Korony Cyrkonowe w Stambule, Turcja' :
      locale === 'pt' ? 'Coroas de Zircónia em Istambul, Turquia' :
      locale === 'es' ? 'Coronas de Circonio en Estambul, Turquía' :
      locale === 'ru' ? 'Циркониевые коронки в Стамбуле, Турция' :
      'Zirconium Crowns in Istanbul, Turkey';
    heroSubtitle =
      locale === 'tr' ? '1200+ MPa yüksek dayanımlı Alman Zirkonyum ile doğal diş ışık geçirgenliği ve estetiğinde ömür boyu kalıcı kuron kaplamalar.' :
      locale === 'de' ? 'Perfekte Ästhetik und 1200+ MPa Stabilität mit deutschem Zirkonium, 5-Sterne-Hotel und privatem VIP-Shuttle in Istanbul.' :
      locale === 'pl' ? 'Odbuduj uśmiech dzięki koronom z niemieckiego cyrkonu 1200+ MPa, naturalnej przezierności, hotelowi 5★ i transferom VIP.' :
      locale === 'pt' ? 'Restaure o seu sorriso com coroas de zircónia alemã 1200+ MPa, translucidez natural, hotel 5 estrelas e transfers VIP.' :
      locale === 'es' ? 'Recupere su sonrisa con coronas de circonio alemán 1200+ MPa, translucidez natural, hotel de 5 estrellas y traslados VIP.' :
      locale === 'ru' ? 'Идеальная улыбка с немецкими коронками из диоксида циркония 1200+ МПа, естественной прозрачностью, отелем 5★ и VIP-трансфером.' :
      'Restore your smile with 1200+ MPa German Zirconia crowns, lifelike translucency, 5-star hotel accommodation, and VIP transfers.';
  } else if (isPfmCrowns) {
    heroBadge =
      locale === 'tr' ? 'METAL DESTEKLİ PORSELEN KRON (PFM)' :
      locale === 'de' ? 'METALLKERAMIKKRONEN (PFM)' :
      locale === 'pl' ? 'KORONY PORCELANOWE NA METALU (PFM)' :
      locale === 'pt' ? 'COROAS METALOCERÂMICAS (PFM)' :
      locale === 'es' ? 'CORONAS METAL-PORCELANA (PFM)' :
      locale === 'ru' ? 'МЕТАЛЛОКЕРАМИЧЕСКИЕ КОРОНКИ (PFM)' :
      'METAL PORCELAIN CROWNS (PFM)';
    heroTitle =
      locale === 'tr' ? 'İstanbul Metal Destekli Porselen Diş Kaplama & Fiyatları' :
      locale === 'de' ? 'Metallkeramikkronen (PFM) in Istanbul, Türkei' :
      locale === 'pl' ? 'Korony Porcelanowe na Metalu (PFM) w Stambule, Turcja' :
      locale === 'pt' ? 'Coroas Metalocerâmicas (PFM) em Istambul, Turquia' :
      locale === 'es' ? 'Coronas Metal-Porcelana (PFM) en Estambul, Turquía' :
      locale === 'ru' ? 'Металлокерамические коронки (PFM) в Стамбуле, Турция' :
      'Metal Porcelain Crowns (PFM) in Istanbul, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Arka çiğneme dişleri için yüksek dayanımlı tıbbi alaşım altyapı ve estetik porselen kaplama ile ekonomik ve uzun ömürlü diş restorasyonu.' :
      locale === 'de' ? 'Wirtschaftliche, bewährte und langlebige Zahnrestaurationen mit biokompatiblem Metallkern und hochfester Keramikverblendung in Istanbul.' :
      locale === 'pl' ? 'Ekonomiczna, sprawdzona i trwała odbudowa zębów z podbudową ze stopu medycznego i estetyczną porcelaną w Stambule.' :
      locale === 'pt' ? 'Restaurações dentárias econômicas, comprovadas e resistentes com núcleo de liga médica e porcelana estética em Istambul.' :
      locale === 'es' ? 'Restauraciones dentales económicas, probadas y duraderas con núcleo de aleación médica y porcelana estética en Estambul.' :
      locale === 'ru' ? 'Экономичное, надежное и долговечное восстановление зубов с каркасом из медицинского сплава и эстетической керамикой в Стамбуле.' :
      'Affordable, time-tested, and durable tooth restorations with medical alloy core and high-fused aesthetic dental porcelain in Istanbul.';
  } else if (isEmaxCrowns) {
    heroBadge =
      locale === 'tr' ? 'E-MAX PORSELEN KRON KAPLAMA' :
      locale === 'de' ? 'E-MAX KERAMIKKRONEN' :
      locale === 'pl' ? 'KORONY PEŁNOCERAMICZNE E-MAX' :
      locale === 'pt' ? 'COROAS DE PORCELANA E-MAX' :
      locale === 'es' ? 'CORONAS DE PORCELANA E-MAX' :
      locale === 'ru' ? 'КОРОНКИ E-MAX ИЗ ДИСИЛИКАТА ЛИТИЯ' :
      'E-MAX PORCELAIN CROWNS';
    heroTitle =
      locale === 'tr' ? 'İstanbul E-Max Porselen Diş Kaplama & Fiyatları' :
      locale === 'de' ? 'E-Max Keramikkronen in Istanbul, Türkei' :
      locale === 'pl' ? 'Korony E-Max w Stambule, Turcja' :
      locale === 'pt' ? 'Coroas de Porcelana E-Max em Istambul, Turquia' :
      locale === 'es' ? 'Coronas de Porcelana E-Max en Estambul, Turquía' :
      locale === 'ru' ? 'Коронки E-Max в Стамбуле, Турция' :
      'E-Max Porcelain Dental Crowns in Istanbul, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'İsviçre Ivoclar IPS e.max lityum disilikat ile ön dişlerde maksimum ışık geçirgenliği ve doğal diş minesine en yakın estetik kaplama.' :
      locale === 'de' ? 'Schweizer Ivoclar IPS e.max Lithium-Disilikat-Kronen für höchste optische Transluzenz und makellose Zahnästhetik in Istanbul.' :
      locale === 'pl' ? 'Szwajcarskie korony z dwukrzemianu litu Ivoclar IPS e.max zapewniające najwyższą przezierność i idealną estetykę w Stambule.' :
      locale === 'pt' ? 'Coroas suíças Ivoclar IPS e.max de dissilicato de lítio com máxima translucidez e estética dental impecável em Istambul.' :
      locale === 'es' ? 'Coronas suizas Ivoclar IPS e.max de disilicato de litio con máxima translucidez y estética dental impecable en Estambul.' :
      locale === 'ru' ? 'Швейцарские коронки Ivoclar IPS e.max из дисиликата лития с непревзойденной прозрачностью и безупречной эстетикой в Стамбуле.' :
      'Premium Swiss Ivoclar IPS e.max lithium disilicate crowns delivering supreme optical translucency and flawless natural tooth aesthetics in Istanbul.';
  } else if (isFullCeramicCrowns) {
    heroBadge =
      locale === 'tr' ? 'TAM SERAMİK KRON DİŞ KAPLAMA' :
      locale === 'de' ? 'VOLLKERAMIKKRONEN' :
      locale === 'pl' ? 'KORONY PEŁNOCERAMICZNE' :
      locale === 'pt' ? 'COROAS CERÂMICAS PURAS' :
      locale === 'es' ? 'CORONAS TOTALMENTE CERÁMICAS' :
      locale === 'ru' ? 'ЦЕЛЬНОКЕРАМИЧЕСКИЕ КОРОНКИ' :
      'FULL CERAMIC DENTAL CROWNS';
    heroTitle =
      locale === 'tr' ? 'İstanbul Tam Seramik Diş Kaplama & Fiyatları' :
      locale === 'de' ? 'Vollkeramikkronen in Istanbul, Türkei' :
      locale === 'pl' ? 'Korony Pełnoceramiczne w Stambule, Turcja' :
      locale === 'pt' ? 'Coroas Cerâmicas Puras em Istambul, Turquia' :
      locale === 'es' ? 'Coronas Totalmente Cerámicas en Estambul, Turquía' :
      locale === 'ru' ? 'Цельнокерамические коронки в Стамбуле, Турция' :
      'Full Ceramic Dental Crowns in Istanbul, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Metalsiz biyouyumlu tam seramik altyapı ile diş etinde gri gölge bırakmayan, doğal ve doku dostu estetik kuron restorasyonu.' :
      locale === 'de' ? '100% metallfreie, biokompatible Vollkeramikkronen für hervorragende Gewebeintegration und natürliche Ästhetik ohne dunkle Ränder in Istanbul.' :
      locale === 'pl' ? 'W 100% bezmetalowe, biokompatybilne korony ceramiczne zapewniające doskonałą integrację z dziąsłami bez sinych obwódek w Stambule.' :
      locale === 'pt' ? 'Coroas 100% cerâmicas livres de metal e biocompatíveis para integração gengival perfeita sem bordas escuras em Istambul.' :
      locale === 'es' ? 'Coronas 100% cerámicas biocompatibles sin metal para una integración gingival perfecta sin bordes oscuros en Estambul.' :
      locale === 'ru' ? '100% безметалловые биосовместимые цельнокерамические коронки без темного ободка у десны и с естественной эстетикой в Стамбуле.' :
      '100% metal-free, biocompatible ceramic crowns engineered for superior tissue integration, zero gray gum lines, and natural smile harmony in Istanbul.';
  } else if (isMarylandBridges) {
    heroBadge =
      locale === 'tr' ? 'MARYLAND KANATLI DİŞ KÖPRÜSÜ' :
      locale === 'de' ? 'MARYLAND-BRÜCKEN' :
      locale === 'pl' ? 'MOSTY MARYLAND' :
      locale === 'pt' ? 'PONTES MARYLAND' :
      locale === 'es' ? 'PUENTES MARYLAND' :
      locale === 'ru' ? 'МОСТЫ МЭРИЛЕНД' :
      'MARYLAND RESIN-BONDED BRIDGES';
    heroTitle =
      locale === 'tr' ? 'İstanbul Maryland Kanatlı Diş Köprüsü & Fiyatları' :
      locale === 'de' ? 'Maryland-Zahnbrücken in Istanbul, Türkei' :
      locale === 'pl' ? 'Mosty Protetyczne Maryland w Stambule, Turcja' :
      locale === 'pt' ? 'Pontes Dentárias Maryland em Istambul, Turquia' :
      locale === 'es' ? 'Puentes Dentales Maryland en Estambul, Turquía' :
      locale === 'ru' ? 'Зубные мосты Мэриленд в Стамбуле, Турция' :
      'Maryland Dental Bridges in Istanbul, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Komşu dişleri kesmeden, arka yüzeylere adeziv kanatlarla yapıştırılan minimal preparasyonlu estetik ön diş köprüleri.' :
      locale === 'de' ? 'Minimalinvasive adhäsive Maryland-Brücken mit hauchdünnen Keramik- oder Zirkonflügeln ohne Beschleifen gesunder Zähne in Istanbul.' :
      locale === 'pl' ? 'Minimalnie inwazyjne mosty adhezyjne Maryland ze skrzydełkami z cyrkonu lub ceramiki bez szlifowania zębów w Stambule.' :
      locale === 'pt' ? 'Pontes adesivas Maryland minimamente invasivas com aletas cerâmicas ou de zircónia sem desgaste dental em Istambul.' :
      locale === 'es' ? 'Puentes adhesivos Maryland mínimamente invasivos con aletas de cerámica o circonio sin tallado dental en Estambul.' :
      locale === 'ru' ? 'Минимально инвазивные адгезивные мосты Мэриленд с крыльями из циркония или керамики без обточки зубов в Стамбуле.' :
      'Conservative, minimal-prep fixed dental bridges with discreet ceramic or zirconia wings bonded to the backside of adjacent teeth for single missing front teeth in Istanbul.';
  } else if (isCantileverBridges) {
    heroBadge =
      locale === 'tr' ? 'CANTILEVER (BALKON) ASMA KÖPRÜ' :
      locale === 'de' ? 'CANTILEVER-ZAHNBRÜCKEN' :
      locale === 'pl' ? 'MOSTY WSPORNIKOWE CANTILEVER' :
      locale === 'pt' ? 'PONTES CANTILEVER' :
      locale === 'es' ? 'PUENTES CANTILEVER' :
      locale === 'ru' ? 'КОНСОЛЬНЫЕ ЗУБНЫЕ МОСТЫ' :
      'CANTILEVER FIXED DENTAL BRIDGES';
    heroTitle =
      locale === 'tr' ? 'İstanbul Cantilever (Asma) Diş Köprüsü & Fiyatları' :
      locale === 'de' ? 'Cantilever-Zahnbrücken in Istanbul, Türkei' :
      locale === 'pl' ? 'Mosty Wspornikowe Cantilever w Stambule, Turcja' :
      locale === 'pt' ? 'Pontes Dentárias Cantilever em Istambul, Turquia' :
      locale === 'es' ? 'Puentes Dentales Cantilever en Estambul, Turquía' :
      locale === 'ru' ? 'Консольные зубные мосты в Стамбуле, Турция' :
      'Cantilever Dental Bridges in Istanbul, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Boşluğun tek tarafındaki sağlam dişten destek alan, yüksek dayanımlı Alman Zirkonyum asma köprü restorasyonları.' :
      locale === 'de' ? 'Präzisionsgefertigte Cantilever-Brücken aus deutschem Zirkonium zur einseitigen Verankerung bei fehlenden Zähnen in Istanbul.' :
      locale === 'pl' ? 'Precyzyjnie wykonane mosty wspornikowe z niemieckiego cyrkonu oparte na pojedynczym filarze w Stambule.' :
      locale === 'pt' ? 'Pontes cantilever de alta precisão em zircónia alemã para ancoragem unilateral de dentes perdidos em Istambul.' :
      locale === 'es' ? 'Puentes cantilever de alta precisión en circonio alemán para anclaje unilateral de piezas ausentes en Estambul.' :
      locale === 'ru' ? 'Высокоточные консольные зубные мосты из немецкого диоксида циркония с односторонней фиксацией в Стамбуле.' :
      'Precision-engineered single-sided anchor dental bridges designed to replace missing teeth when only one adjacent anchor tooth is available in Istanbul.';
  } else if (isTraditionalBridges) {
    heroBadge =
      locale === 'tr' ? 'GELENEKSEL SABİT DİŞ KÖPRÜSÜ' :
      locale === 'de' ? 'TRADITIONELLE ZAHNBRÜCKEN' :
      locale === 'pl' ? 'TRADYCYJNE MOSTY PROTETYCZNE' :
      locale === 'pt' ? 'PONTES DENTÁRIAS TRADICIONAIS' :
      locale === 'es' ? 'PUENTES DENTALES TRADICIONALES' :
      locale === 'ru' ? 'ТРАДИЦИОННЫЕ ЗУБНЫЕ МОСТЫ' :
      'TRADITIONAL FIXED DENTAL BRIDGES';
    heroTitle =
      locale === 'tr' ? 'İstanbul Geleneksel Sabit Diş Köprüsü & Fiyatları' :
      locale === 'de' ? 'Traditionelle Zahnbrücken in Istanbul, Türkei' :
      locale === 'pl' ? 'Tradycyjne Mosty Protetyczne w Stambule, Turcja' :
      locale === 'pt' ? 'Pontes Dentárias Tradicionais em Istambul, Turquia' :
      locale === 'es' ? 'Puentes Dentales Tradicionales en Estambul, Turquía' :
      locale === 'ru' ? 'Традиционные зубные мосты в Стамбуле, Турция' :
      'Traditional Dental Bridges in Istanbul, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Yüksek dayanımlı Alman Zirkonyum ve porselen ile eksik dişlerinizi komşu dişlerden destek alarak 5-7 günde kalıcı olarak tamamlayın.' :
      locale === 'de' ? 'Festsitzende traditionelle Zahnbrücken aus hochfestem deutschem Zirkonium oder Metallkeramik für lückenlose Ästhetik in Istanbul.' :
      locale === 'pl' ? 'Precyzyjnie wykonane tradycyjne mosty protetyczne z niemieckiego cyrkonu lub porcelany na metalu w Stambule.' :
      locale === 'pt' ? 'Pontes dentárias fixas tradicionais em zircónia alemã de alta resistência ou metalo-cerâmica em Istambul.' :
      locale === 'es' ? 'Puentes dentales fijos tradicionales de circonio alemán de alta resistencia o metal-porcelana en Estambul.' :
      locale === 'ru' ? 'Традиционные несъемные зубные мосты из немецкого диоксида циркония и металлокерамики за 5-7 дней в Стамбуле.' :
      'Precision-milled German zirconia and porcelain-fused-to-metal fixed dental bridges to seamlessly replace missing teeth in 5-7 days in Istanbul.';
  } else if (isEmpressVeneers) {
    heroBadge =
      locale === 'tr' ? 'IPS EMPRESS PORSELEN LAMİNA' :
      locale === 'de' ? 'IPS EMPRESS VENEERS' :
      locale === 'pl' ? 'LICÓWKI IPS EMPRESS' :
      locale === 'pt' ? 'FACETAS IPS EMPRESS' :
      locale === 'es' ? 'CARILLAS IPS EMPRESS' :
      locale === 'ru' ? 'ВИНИРЫ IPS EMPRESS' :
      'IPS EMPRESS PORCELAIN VENEERS';
    heroTitle =
      locale === 'tr' ? 'İstanbul IPS Empress Porselen Lamina & Fiyatları' :
      locale === 'de' ? 'IPS Empress Veneers in Istanbul, Türkei' :
      locale === 'pl' ? 'Licówki IPS Empress w Stambule, Turcja' :
      locale === 'pt' ? 'Facetas IPS Empress em Istambul, Turquia' :
      locale === 'es' ? 'Carillas IPS Empress en Estambul, Turquía' :
      locale === 'ru' ? 'Виниры IPS Empress в Стамбуле, Турция' :
      'IPS Empress Porcelain Veneers in Istanbul, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'İsviçre Ivoclar IPS Empress lösit cam seramik ile doğal diş minesinin ışık derinliğini ve kameleon etkisini birebir yakalayan üstün estetik.' :
      locale === 'de' ? 'Leuzitverstärkte Glaskeramik-Veneers von Ivoclar IPS Empress für unübertroffene Lichtstreuung und natürliche Chamäleon-Ästhetik in Istanbul.' :
      locale === 'pl' ? 'Licówki z ceramiki szklanej Ivoclar IPS Empress zapewniające niezrównaną głębię optyczną i efekt kameleona w Stambule.' :
      locale === 'pt' ? 'Facetas de vitrocerâmica Ivoclar IPS Empress com dispersão de luz incomparável e efeito camaleão em Istambul.' :
      locale === 'es' ? 'Carillas de vitrocerámica Ivoclar IPS Empress con dispersión de luz incomparable y efecto camaleón en Estambul.' :
      locale === 'ru' ? 'Виниры из лейцитной стеклокерамики Ivoclar IPS Empress с непревзойденной глубиной света и эффектом хамелеона в Стамбуле.' :
      'High-leucite glass-ceramic veneers crafted by master ceramists for unmatched light dispersion, lifelike natural depth, and radiant smile elegance in Istanbul.';
  } else if (isLumineers) {
    heroBadge =
      locale === 'tr' ? 'KESİMSİZ LUMINEERS LAMİNA' :
      locale === 'de' ? 'NO-PREP LUMINEERS' :
      locale === 'pl' ? 'LICÓWKI LUMINEERS' :
      locale === 'pt' ? 'LUMINEERS SEM DESGASTE' :
      locale === 'es' ? 'LUMINEERS SIN TALLADO' :
      locale === 'ru' ? 'ВИНИРЫ LUMINEERS' :
      'NO-PREP LUMINEERS';
    heroTitle =
      locale === 'tr' ? 'İstanbul Kesimsiz Lumineers (No-Prep Lamina) & Fiyatları' :
      locale === 'de' ? 'No-Prep Lumineers in Istanbul, Türkei' :
      locale === 'pl' ? 'Licówki Lumineers bez szlifowania w Stambule, Turcja' :
      locale === 'pt' ? 'Lumineers sem Desgaste em Istambul, Turquia' :
      locale === 'es' ? 'Lumineers sin Tallado en Estambul, Turquía' :
      locale === 'ru' ? 'Люминиры Lumineers без обточки в Стамбуле, Турция' :
      'No-Prep Lumineers in Istanbul, Turkey';
    heroSubtitle =
      locale === 'tr' ? '0.2 mm kontakt lens inceliğinde, doğal diş minesine zarar vermeden anestezi ve kesimsiz uygulanan lüks yaprak porselenler.' :
      locale === 'de' ? 'Hauchdünne 0,2-mm-Lumineers für ein perfektes Lächeln ganz ohne Beschleifen der Zähne und ohne Anästhesie in Istanbul.' :
      locale === 'pl' ? 'Ultra-cienkie licówki Lumineers 0,2 mm bez szlifowania szkliwa i bez znieczulenia w Stambule.' :
      locale === 'pt' ? 'Lumineers ultrafinas de 0,2 mm aplicadas sem desgaste do esmalte dental e sem anestesia em Istambul.' :
      locale === 'es' ? 'Lumineers ultrafinas de 0,2 mm colocadas sin desgaste dental ni anestesia en Estambul.' :
      locale === 'ru' ? 'Ультратонкие люминиры Lumineers 0,2 мм без препарирования эмали и без анестезии в Стамбуле.' :
      'Ultra-thin 0.2 mm contact lens porcelain veneers placed with zero tooth drilling, no anesthesia, and zero enamel loss at Master Smile Studio Istanbul.';
  } else if (isCompositeVeneers) {
    heroBadge =
      locale === 'tr' ? 'KOMPOZİT LAMİNA & BONDİNG' :
      locale === 'de' ? 'KOMPOSIT-VENEERS' :
      locale === 'pl' ? 'LICÓWKI KOMPOZYTOWE' :
      locale === 'pt' ? 'FACETAS DE RESINA' :
      locale === 'es' ? 'CARILLAS DE COMPOSITE' :
      locale === 'ru' ? 'КОМПОЗИТНЫЕ ВИНИРЫ' :
      'COMPOSITE VENEERS & BONDING';
    heroTitle =
      locale === 'tr' ? 'İstanbul Kompozit Lamina (Bonding) & Fiyatları' :
      locale === 'de' ? 'Komposit-Veneers in Istanbul, Türkei' :
      locale === 'pl' ? 'Licówki Kompozytowe w Stambule, Turcja' :
      locale === 'pt' ? 'Facetas de Resina Composta em Istambul, Turquia' :
      locale === 'es' ? 'Carillas de Composite en Estambul, Turquía' :
      locale === 'ru' ? 'Композитные виниры в Стамбуле, Турция' :
      'Composite Veneers & Direct Bonding in Istanbul, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Alman nano-hibrit rezin ile tek seansta diş kesimsiz estetik gülüş tasarımı, kırık diş onarımı ve aralık kapatma.' :
      locale === 'de' ? 'Minimalinvasive direkte Komposit-Veneers aus deutschem Nano-Hybrid-Komposit für sofortige Zahnkorrekturen und Lückenschluss in Istanbul.' :
      locale === 'pl' ? 'Bezpośrednie licówki kompozytowe z niemieckiego nanokompozytu umożliwiające natychmiastową metamorfozę uśmiechu w Stambule.' :
      locale === 'pt' ? 'Facetas diretas de resina composta nano-híbrida alemã para transformação estética imediata do sorriso em Istambul.' :
      locale === 'es' ? 'Carillas directas de composite nano-híbrido alemán para transformación estética inmediata de la sonrisa en Estambul.' :
      locale === 'ru' ? 'Прямые композитные виниры из немецкого наногибридного композита без обточки зубов за один визит в Стамбуле.' :
      'Same-day direct composite bonding & resin laminate veneers sculpted chairside with premium German nanofilled ceramics in Istanbul.';
  } else if (isZirconiumVeneers) {
    heroBadge =
      locale === 'tr' ? 'ZİRKONYUM LAMİNA DİŞ KAPLAMA' :
      locale === 'de' ? 'ZIRKONIUM-VENEERS' :
      locale === 'pl' ? 'LICÓWKI CYRKONOWE' :
      locale === 'pt' ? 'FACETAS DE ZIRCÓNIA' :
      locale === 'es' ? 'CARILLAS DE CIRCONIO' :
      locale === 'ru' ? 'ЦИРКОНИЕВЫЕ ВИНИРЫ' :
      'ZIRCONIUM LAMINATE VENEERS';
    heroTitle =
      locale === 'tr' ? 'İstanbul Zirkonyum Lamina (Yaprak Porselen) & Fiyatları' :
      locale === 'de' ? 'Zirkonium-Veneers in Istanbul, Türkei' :
      locale === 'pl' ? 'Licówki Cyrkonowe w Stambule, Turcja' :
      locale === 'pt' ? 'Facetas de Zircónia em Istambul, Turquia' :
      locale === 'es' ? 'Carillas de Circonio en Estambul, Turquía' :
      locale === 'ru' ? 'Циркониевые виниры в Стамбуле, Турция' :
      'Zirconium Laminate Veneers in Istanbul, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Yüksek dayanımlı çok katmanlı Alman zirkonyum altyapı ile kırılmaya dirençli, leke tutmaz ve doğal gülüş estetiği.' :
      locale === 'de' ? 'Hochfeste mehrschichtige deutsche Zirkonium-Veneers für maximale Bruchfestigkeit, Fleckenbeständigkeit und natürliche Ästhetik in Istanbul.' :
      locale === 'pl' ? 'Wielowarstwowe licówki z niemieckiego cyrkonu o wysokiej wytrzymałości, odporne na pęknięcia i przebarwienia w Stambule.' :
      locale === 'pt' ? 'Facetas de zircónia alemã multicamadas de alta resistência a fraturas e manchas para um sorriso deslumbrante em Istambul.' :
      locale === 'es' ? 'Carillas de circonio alemán multicapa de alta resistencia a fracturas y manchas para una sonrisa radiante en Estambul.' :
      locale === 'ru' ? 'Высокопрочные многослойные немецкие циркониевые виниры с максимальной устойчивостью к сколам и естественной эстетикой в Стамбуле.' :
      'High-strength German zirconia laminate veneers engineered for maximum durability, stain resistance, and radiant Hollywood smile transformation in Istanbul.';
  } else if (isEmaxVeneers) {
    heroBadge =
      locale === 'tr' ? 'E-MAX LAMİNA DİŞ KAPLAMA' :
      locale === 'de' ? 'E-MAX VENEERS' :
      locale === 'pl' ? 'LICÓWKI E-MAX' :
      locale === 'pt' ? 'FACETAS E-MAX' :
      locale === 'es' ? 'CARILLAS E-MAX' :
      locale === 'ru' ? 'ВИНИРЫ E-MAX' :
      'E-MAX PORCELAIN VENEERS';
    heroTitle =
      locale === 'tr' ? 'İstanbul E-Max Lamina (Yaprak Porselen) & Fiyatları' :
      locale === 'de' ? 'E-Max Veneers in Istanbul, Türkei' :
      locale === 'pl' ? 'Licówki E-Max w Stambule, Turcja' :
      locale === 'pt' ? 'Facetas E-Max em Istambul, Turquia' :
      locale === 'es' ? 'Carillas E-Max en Estambul, Turquía' :
      locale === 'ru' ? 'Виниры E-Max в Стамбуле, Турция' :
      'E-Max Porcelain Veneers in Istanbul, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Orijinal İsviçre Ivoclar Vivadent IPS e.max lityum disilikat ile 0.3 mm ultra ince diş kesimi ve doğal gülüş estetiği.' :
      locale === 'de' ? 'Original Schweizer Ivoclar Vivadent IPS e.max Lithium-Disilikat-Veneers für natürliche Transluzenz und schonende 0,3-mm-Präparation in Istanbul.' :
      locale === 'pl' ? 'Oryginalne szwajcarskie licówki Ivoclar Vivadent IPS e.max z dwukrzemianu litu zapewniające naturalną przezierność i minimalną preparację 0,3 mm w Stambule.' :
      locale === 'pt' ? 'Facetas originais suíças Ivoclar Vivadent IPS e.max de dissilicato de lítio com translucidez natural e micro-preparação de 0,3 mm em Istambul.' :
      locale === 'es' ? 'Carillas originales suizas Ivoclar Vivadent IPS e.max de disilicato de litio con translucidez natural y micro-preparación de 0,3 mm en Estambul.' :
      locale === 'ru' ? 'Оригинальные швейцарские виниры Ivoclar Vivadent IPS e.max из дисиликата лития с непревзойденной прозрачностью и микропрепарированием 0,3 мм в Стамбуле.' :
      'Authentic Swiss Ivoclar Vivadent IPS e.max lithium disilicate laminate veneers delivering unmatched natural translucency, ultra-thin 0.3 mm micro-preparation, and lifetime smile beauty in Istanbul.';
  } else if (isPorcelainVeneers) {
    heroBadge =
      locale === 'tr' ? 'PORSELEN LAMİNA DİŞ KAPLAMA' :
      locale === 'de' ? 'PORZELLAN-VENEERS' :
      locale === 'pl' ? 'LICÓWKI PORCELANOWE' :
      locale === 'pt' ? 'FACETAS DE PORCELANA' :
      locale === 'es' ? 'CARILLAS DE PORCELANA' :
      locale === 'ru' ? 'КЕРАМИЧЕСКИЕ ВИНИРЫ' :
      'PORCELAIN LAMINATE VENEERS';
    heroTitle =
      locale === 'tr' ? 'İstanbul Porselen Lamina (Yaprak Porselen) & Fiyatları' :
      locale === 'de' ? 'Porzellan-Veneers in Istanbul, Türkei' :
      locale === 'pl' ? 'Licówki Porcelanowe w Stambule, Turcja' :
      locale === 'pt' ? 'Facetas de Porcelana em Istambul, Turquia' :
      locale === 'es' ? 'Carillas de Porcelana en Estambul, Turquía' :
      locale === 'ru' ? 'Керамические виниры в Стамбуле, Турция' :
      'Porcelain Laminate Veneers in Istanbul, Turkey';
    heroSubtitle =
      locale === 'tr' ? 'Minimum diş kesimi (0.3–0.5 mm) ve İsviçre Ivoclar E-Max ile doğal diş minesinin ışık geçirgenliğini birebir taklit eden leke tutmaz yaprak porselenler.' :
      locale === 'de' ? 'Minimalinvasive Porzellan-Veneers aus Schweizer Ivoclar E-Max für natürliche Transluzenz, Fleckenbeständigkeit und ein makelloses Lächeln in Istanbul.' :
      locale === 'pl' ? 'Minimalnie inwazyjne licówki porcelanowe ze szwajcarskiego Ivoclar E-Max zapewniające naturalną przezierność i wielowymiarowy uśmiech w Stambule.' :
      locale === 'pt' ? 'Facetas de porcelana minimamente invasivas da suíça Ivoclar E-Max com translucidez natural, resistência a manchas e sorriso perfeito em Istambul.' :
      locale === 'es' ? 'Carillas de porcelana mínimamente invasivas de la suiza Ivoclar E-Max con translucidez natural, resistencia a manchas y sonrisa perfecta en Estambul.' :
      locale === 'ru' ? 'Минимально инвазивные керамические виниры из швейцарского Ivoclar E-Max с естественной прозрачностью и устойчивостью к окрашиванию в Стамбуле.' :
      'Ultra-thin, minimally invasive Swiss Ivoclar E-Max porcelain veneers providing natural optical translucency, stain resistance, and Hollywood smile design in Istanbul.';
  } else if (isSinusLift) {
    heroBadge = locale === 'tr' ? 'SİNÜS LİFTİNG & KEMİK GREFTİ' : 'SINUS LIFTING & BONE AUGMENTATION';
    heroTitle = locale === 'tr' ? 'İstanbul Sinüs Lifting (Sinüs Yükseltme) Tedavisi' : 'Sinus Lifting in Istanbul, Turkey';
    heroSubtitle = locale === 'tr' ? 'Üst çenede kemik yetersizliği olan durumlarda sinüs tabanı yükseltilerek güvenli ve ömür boyu kalıcı implant temeli oluşturulur.' : 'Gentle sinus membrane elevation and precision bone grafting to create a solid foundation for permanent dental implants in Istanbul.';
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
      ) : isCosmeticCategory ? (
        <CosmeticDentistryHeroBanner />
      ) : isDentures ? (
        <DenturesHeroBanner />
      ) : isDentalBridges ? (
        <DentalBridgesHeroBanner />
      ) : isDentalVeneers ? (
        <DentalVeneersHeroBanner />
      ) : isDentalCrowns ? (
        <DentalCrownsHeroBanner />
      ) : isDentalCleaning ? (
        <DentalCleaningHeroBanner />
      ) : (
        <TreatmentHeroBanner
          tag={heroBadge}
          title={heroTitle}
          subtitle={heroSubtitle}
          imageSrc={
            isSmileMakeover
              ? 'https://sohodent.com/doc/data1/smile-makeover.webp?v=1'
              : isHollywoodSmile
              ? 'https://sohodent.com/doc/data1/hoolywood-smile.webp?v=1'
              : isGummySmile
              ? 'https://sohodent.com/doc/data1/gummy-smile-treatment.webp?v=1'
              : isTeethWhitening
              ? 'https://sohodent.com/doc/data1/teeth-whitening.webp?v=1'
              : isToothContouring
              ? 'https://sohodent.com/doc/data1/tooth-contouring-shaping.webp?v=1'
              : isDiastemaClosure
              ? 'https://sohodent.com/doc/data1/diestema-closure.webp?v=1'
              : isCompleteDentures
              ? 'https://sohodent.com/doc/data1/complete-dentures.webp?v=1'
              : isPartialDentures
              ? 'https://sohodent.com/doc/data1/partial-dentures.webp?v=1'
              : isOverdentures
              ? 'https://sohodent.com/doc/data1/overdenture.webp?v=1'
              : isMarylandBridges
              ? 'https://sohodent.com/doc/data1/maryland-bridge.webp.avif?v=1'
              : isCantileverBridges
              ? 'https://sohodent.com/doc/data1/cantilever-bridge.webp?v=1'
              : isTraditionalBridges
              ? 'https://sohodent.com/doc/data1/traditional-bridge.webp?v=1'
              : isCompositeVeneers
              ? 'https://sohodent.com/doc/data1/composite-veneer.webp.avif?v=1'
              : isLumineers
              ? 'https://sohodent.com/doc/data1/lumineer.webp?v=1'
              : isEmpressVeneers
              ? 'https://sohodent.com/doc/data1/empress-veneer.webp?v=1'
              : isZirconiumVeneers
              ? 'https://sohodent.com/doc/data1/zirconium-veneers.webp?v=1'
              : isEmaxVeneers
              ? 'https://sohodent.com/doc/data1/e-max-veneer.webp?v=1'
              : isPorcelainVeneers
              ? 'https://sohodent.com/doc/data1/porcelain-veneers.webp?v=1'
              : isEmaxCrowns
              ? 'https://sohodent.com/doc/data1/e-max-crown.webp?v=1'
              : isFullCeramicCrowns
              ? 'https://sohodent.com/doc/data1/full-ceramic-crown.webp?v=1'
              : isPfmCrowns
              ? 'https://sohodent.com/doc/data1/metal-porcelain-crown.webp?v=1'
              : isZirconiumCrowns
              ? 'https://sohodent.com/doc/data1/zirconium-crowns.webp?v=1'
              : isSinusLift
              ? 'https://sohodent.com/doc/data1/sinus-lifting.webp?v=1'
              : isDentalImplantsCategory
              ? 'https://sohodent.com/doc/data1/zirconium-implant.webp?v=1'
              : undefined
          }
          imageAlt={
            isSmileMakeover
              ? 'Smile Makeover in Istanbul, Turkey'
              : isHollywoodSmile
              ? 'Hollywood Smile in Istanbul, Turkey'
              : isGummySmile
              ? 'Gummy Smile Treatment in Istanbul, Turkey'
              : isTeethWhitening
              ? 'Teeth Whitening in Istanbul, Turkey'
              : isToothContouring
              ? 'Tooth Contouring & Shaping in Istanbul, Turkey'
              : isDiastemaClosure
              ? 'Diastema Closure in Istanbul, Turkey'
              : isCompleteDentures
              ? 'Complete Dentures in Istanbul, Turkey'
              : isPartialDentures
              ? 'Partial Dentures in Istanbul, Turkey'
              : isOverdentures
              ? 'Implant Supported Dentures (Overdentures) in Istanbul, Turkey'
              : isMarylandBridges
              ? 'Maryland Dental Bridges in Istanbul, Turkey'
              : isCantileverBridges
              ? 'Cantilever Dental Bridges in Istanbul, Turkey'
              : isTraditionalBridges
              ? 'Traditional Dental Bridges in Istanbul, Turkey'
              : isCompositeVeneers
              ? 'Composite Veneers'
              : isLumineers
              ? 'Lumineers Dental Veneers in Istanbul, Turkey'
              : isEmpressVeneers
              ? 'Empress Veneers in Istanbul, Turkey'
              : isZirconiumVeneers
              ? 'Zirconium Veneers'
              : isEmaxVeneers
              ? 'E-max Veneers'
              : isPorcelainVeneers
              ? 'Porcelain Laminate Veneers in Istanbul, Turkey'
              : isEmaxCrowns
              ? 'E-Max Crowns in Istanbul, Turkey'
              : isFullCeramicCrowns
              ? 'Full Ceramic Crowns in Istanbul, Turkey'
              : isPfmCrowns
              ? 'Metal Porcelain Crowns (PFM) in Istanbul, Turkey'
              : isZirconiumCrowns
              ? 'Zirconium Crowns in Istanbul, Turkey'
              : isSinusLift
              ? 'Sinus Lifting in Istanbul, Turkey'
              : isDentalImplantsCategory
              ? 'Zirconium Implants'
              : undefined
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
              : 'Book Consultation')
          }
          primaryBtnHref="/contact"
          secondaryBtnText={
            content?.hero?.secondaryBtn ||
            (locale === 'tr'
              ? 'Tedavileri İncele'
              : locale === 'de'
              ? 'Behandlung Details'
              : locale === 'pl'
              ? 'Szczegóły Zabiegu'
              : locale === 'pt'
              ? 'Ver Detalhes'
              : locale === 'es'
              ? 'Ver Tratamientos'
              : locale === 'ru'
              ? 'Подробнее о лечении'
              : 'Explore Treatment')
          }
          secondaryBtnHref="#main-content"
        />
      )}

      {/* Main Content Area Landmark */}
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
        ) : isSmileMakeover ? (
          <SmileMakeoverDetailView />
        ) : isCosmetic ? (
          <CosmeticDentistryDetailView />
        ) : isCompleteDentures ? (
          <CompleteDenturesDetailView />
        ) : isPartialDentures ? (
          <PartialDenturesDetailView />
        ) : isOverdentures ? (
          <ImplantSupportedDenturesDetailView />
        ) : isDentures ? (
          <DenturesDetailView />
        ) : isMarylandBridges ? (
          <MarylandBridgesDetailView />
        ) : isCantileverBridges ? (
          <CantileverBridgesDetailView />
        ) : isTraditionalBridges ? (
          <TraditionalBridgesDetailView />
        ) : isDentalBridges ? (
          <DentalBridgeDetailView />
        ) : isZirconiumCrowns ? (
          <ZirconiumCrownsDetailView />
        ) : isPfmCrowns ? (
          <PfmCrownsDetailView />
        ) : isEmaxCrowns ? (
          <EmaxCrownsDetailView />
        ) : isFullCeramicCrowns ? (
          <FullCeramicCrownsDetailView />
        ) : isDentalCrowns ? (
          <DentalCrownsDetailView />
        ) : isCompositeVeneers ? (
          <CompositeVeneersDetailView />
        ) : isLumineers ? (
          <LumineersDetailView />
        ) : isEmpressVeneers ? (
          <EmpressVeneersDetailView />
        ) : isZirconiumVeneers ? (
          <ZirconiumVeneersDetailView />
        ) : isEmaxVeneers ? (
          <EmaxVeneersDetailView />
        ) : isPorcelainVeneers ? (
          <PorcelainVeneersDetailView />
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
