import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentHeroBanner from '@/components/treatment-sections/TreatmentHeroBanner';
import TreatmentDetailView from '@/components/TreatmentDetailView';
import DentalImplantsDetailView from '@/components/DentalImplantsDetailView';
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

  let title = locale === 'tr' ? 'Tüm Ağız İmplant Tedavisi İstanbul (Full Mouth) | Master Smile Studio' : 'Full Mouth Dental Implants in Istanbul, Turkey | Master Smile Studio';
  let description = locale === 'tr' ? 'İstanbul’da tüm ağız diş implantı tedavisi ve paket fiyatları. Ömür boyu garantili sabit zirkonyum dişler.' : 'Full mouth dental implants in Istanbul, Turkey. All-inclusive packages with Straumann & NucleOSS implants.';

  if (lastSlug === 'dental-implants' || lastSlug === 'dental-implant-istanbul-turkey' || lastSlug === 'implants') {
    title = locale === 'tr' ? 'İstanbul Diş İmplantı Tedavisi ve Fiyatları | Master Smile Studio' : 'Dental Implants Cost (Price) in Istanbul, Turkey | Master Smile Studio';
    description = locale === 'tr' ? 'İstanbul’da uzman çene cerrahları ile dünya markası titanyum implant tedavisi. Şeffaf her şey dahil paket fiyatları.' : 'Dental implants in Istanbul, Turkey starting from £350. Highest quality Swiss & German titanium implants with lifetime guarantee.';
  } else if (lastSlug === 'all-on-4-implants' || lastSlug === 'all-on-four-implant-istanbul-turkey' || lastSlug === 'all-on-4') {
    title = locale === 'tr' ? 'All-on-4 Diş İmplantı Fiyatları İstanbul | Master Smile Studio' : 'All on 4 Dental Implants Cost in Istanbul, Turkey | Master Smile Studio';
    description = locale === 'tr' ? 'All-on-4 tekniği ile aynı gün sabit dişler. Kemik tozu gerekmeden ekonomik tam çene implant tedavisi.' : 'All-on-4 dental implants in Istanbul, Turkey. Permanent fixed teeth in 2 visits without bone grafting.';
  } else if (lastSlug === 'all-on-6-implants' || lastSlug === 'all-on-six-dental-implant-istanbul-turkey' || lastSlug === 'all-on-6') {
    title = locale === 'tr' ? 'All-on-6 Diş İmplantı Fiyatları İstanbul | Master Smile Studio' : 'All on 6 Dental Implants Cost in Istanbul, Turkey | Master Smile Studio';
    description = locale === 'tr' ? 'Tam dişsiz çeneler için 6 implantlı All-on-6 tedavisi. 2 ziyarette kalıcı zirkonyum sabit dişler.' : 'All-on-6 dental implants in Istanbul, Turkey. Strongest full-arch teeth restoration with 6 implants per jaw.';
  } else if (lastSlug === 'immediate-implant-treatment' || lastSlug === 'immediate-implants') {
    title = locale === 'tr' ? 'Aynı Gün İmplant Tedavisi İstanbul | Master Smile Studio' : 'Immediate Same-Day Dental Implants in Istanbul, Turkey | Master Smile Studio';
    description = locale === 'tr' ? 'Diş çekimi ile aynı seansta implant uygulaması. Aylarca beklemeden aynı gün sabit diş.' : 'Same-day dental implants placed immediately after tooth extraction with zero waiting period.';
  } else if (lastSlug === 'zygomatic-implants' || lastSlug === 'zygomatic-implants-istanbul-turkey') {
    title = locale === 'tr' ? 'Zigoma (Elmacık Kemiği) İmplantı İstanbul | Master Smile Studio' : 'Zygomatic Dental Implants in Istanbul, Turkey | Master Smile Studio';
    description = locale === 'tr' ? 'Aşırı kemik erimesi olan üst çeneler için zigomatik implant çözümü. Kemik greftine gerek kalmadan sabit diş.' : 'Zygomatic cheekbone implants for severe upper jawbone loss without bone grafting.';
  } else if (lastSlug === 'zirconium-implants' || lastSlug === 'zirconium-implants-istanbul-turkey') {
    title = locale === 'tr' ? 'Zirkonyum Seramik İmplant Tedavisi İstanbul | Master Smile Studio' : 'Zirconium Metal-Free Ceramic Implants in Istanbul, Turkey | Master Smile Studio';
    description = locale === 'tr' ? '%100 metalsiz beyaz seramik zirkonyum implantlar. Alerji yapmayan üstün diş eti estetiği.' : '100% metal-free biocompatible white zirconia ceramic dental implants for optimal gum aesthetics.';
  } else if (lastSlug === 'implant-supported-dentures' || lastSlug === 'implant-dentures') {
    title = locale === 'tr' ? 'İmplant Destekli Çıt Çıtlı Protez İstanbul | Master Smile Studio' : 'Implant Supported Dentures (Overdentures) in Istanbul, Turkey | Master Smile Studio';
    description = locale === 'tr' ? 'Kaymayan ve oynamayan çıtçıtlı damak protezleri. 2-4 implantla konforlu tutuculuk.' : 'Locking snap-on implant-supported overdentures for secure and comfortable chewing.';
  } else if (lastSlug === 'sinus-lifting' || lastSlug === 'sinus-lift') {
    title = locale === 'tr' ? 'Sinüs Lifting & Kemik Grefti İstanbul | Master Smile Studio' : 'Sinus Lifting & Bone Augmentation in Istanbul, Turkey | Master Smile Studio';
    description = locale === 'tr' ? 'Üst çenede sarkan sinüs tabanının yükseltilmesi ve kemik tozu takviyesiyle güvenli implant zemini.' : 'Sinus floor elevation and bone grafting surgery for upper jaw implant placement.';
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
    isCategoryOnly && (lastSlug === 'dental-implants' || lastSlug === 'dental-implant-istanbul-turkey' || lastSlug === 'implants');

  const isAllOnFour = lastSlug === 'all-on-4-implants' || lastSlug === 'all-on-four-implant-istanbul-turkey' || lastSlug === 'all-on-4';
  const isAllOnSix = lastSlug === 'all-on-6-implants' || lastSlug === 'all-on-six-dental-implant-istanbul-turkey' || lastSlug === 'all-on-6';
  const isImmediate = lastSlug === 'immediate-implant-treatment' || lastSlug === 'immediate-implants' || lastSlug === 'immediate';
  const isZygomatic = lastSlug === 'zygomatic-implants' || lastSlug === 'zygomatic-implants-istanbul-turkey' || lastSlug === 'zygomatic';
  const isZirconium = lastSlug === 'zirconium-implants' || lastSlug === 'zirconium-implants-istanbul-turkey';
  const isDentures = lastSlug === 'implant-supported-dentures' || lastSlug === 'implant-dentures' || lastSlug === 'overdentures';
  const isSinusLift = lastSlug === 'sinus-lifting' || lastSlug === 'sinus-lift';

  let heroBadge = locale === 'tr' ? 'TEDAVİLERİMİZ' : 'TREATMENTS';
  let heroTitle = t('pageTitle');
  let heroSubtitle = t('pageSubtitle');

  if (isDentalImplantsCategory) {
    heroBadge = locale === 'tr' ? 'DİŞ İMPLANTLARI' : 'DENTAL IMPLANTS';
    heroTitle = locale === 'tr' ? 'İstanbul Diş İmplantı Tedavisi & Fiyatları' : 'Dental Implants Cost (Price) Istanbul Turkey';
    heroSubtitle = locale === 'tr' ? 'Uzman cerrahlarımız ve en son 3D tomografi teknolojisiyle doğal dişinize en yakın kalıcı implant sonuçları.' : 'Achieve results closest to natural teeth with implant treatment performed under the supervision of expert oral surgeons.';
  } else if (isAllOnFour) {
    heroBadge = locale === 'tr' ? 'ALL-ON-4 İMPLANT' : 'ALL-ON-4 IMPLANTS';
    heroTitle = locale === 'tr' ? 'All on 4 Diş İmplantı Tedavisi İstanbul' : 'All on 4 Dental Implants Cost in Istanbul, Turkey';
    heroSubtitle = locale === 'tr' ? 'Kemik grefti gerekmeden 4 implant üzerine aynı gün sabit diş konforu.' : 'Permanent fixed teeth in 2 visits — restore your entire smile with only 4 implants per jaw.';
  } else if (isAllOnSix) {
    heroBadge = locale === 'tr' ? 'ALL-ON-6 İMPLANT' : 'ALL-ON-6 IMPLANTS';
    heroTitle = locale === 'tr' ? 'All on 6 Diş İmplantı Tedavisi İstanbul' : 'All on 6 Dental Implants Cost in Istanbul, Turkey';
    heroSubtitle = locale === 'tr' ? 'Maksimum stabilite, güçlü çiğneme performansı ve ömür boyu dayanıklı zirkonyum tam çene restorasyonu.' : 'A stronger, more stable full-arch solution designed for long-term comfort and maximum chewing power.';
  } else if (isImmediate) {
    heroBadge = locale === 'tr' ? 'AYNI GÜN İMPLANT' : 'IMMEDIATE IMPLANTS';
    heroTitle = locale === 'tr' ? 'Aynı Gün İmplant Tedavisi İstanbul' : 'Immediate Implant Treatment in Istanbul, Turkey';
    heroSubtitle = locale === 'tr' ? 'Diş çekimiyle aynı seansta implant ve geçici diş takılarak aylarca bekleme süresine son.' : 'Same-day dental implants placed immediately after extraction for fast recovery and zero waiting.';
  } else if (isZygomatic) {
    heroBadge = locale === 'tr' ? 'ZİGOMA İMPLANT' : 'ZYGOMATIC IMPLANTS';
    heroTitle = locale === 'tr' ? 'Zigoma (Elmacık Kemiği) İmplantı İstanbul' : 'Zygomatic Dental Implants in Istanbul, Turkey';
    heroSubtitle = locale === 'tr' ? 'İleri derece kemik erimesi olan üst çenelerde elmacık kemiğinden destek alan kalıcı çözüm.' : 'Revolutionary cheekbone implants for severe upper jawbone loss without bone grafting.';
  } else if (isZirconium) {
    heroBadge = locale === 'tr' ? 'ZİRKONYUM İMPLANT' : 'ZIRCONIUM IMPLANTS';
    heroTitle = locale === 'tr' ? 'Zirkonyum (Seramik) Diş İmplantı İstanbul' : 'Zirconium Ceramic Dental Implants in Istanbul';
    heroSubtitle = locale === 'tr' ? '%100 metalsiz, biyouyumlu beyaz seramik gövdeyle en yüksek diş eti estetiği.' : '100% metal-free, white biocompatible ceramic implants for pristine gum aesthetics.';
  } else if (isDentures) {
    heroBadge = locale === 'tr' ? 'ÇIT ÇITLI PROTEZ' : 'OVERDENTURES';
    heroTitle = locale === 'tr' ? 'İmplant Destekli Protez (Çıt Çıtlı Damak) İstanbul' : 'Implant Supported Dentures (Overdentures) in Istanbul';
    heroSubtitle = locale === 'tr' ? 'Gevşeyen ve oynayan damak protezlerine son veren kilitli çıtçıt sistemi.' : 'Say goodbye to loose, slipping dentures with stable snap-on implant retention.';
  } else if (isSinusLift) {
    heroBadge = locale === 'tr' ? 'SİNÜS LİFTİNG' : 'SINUS LIFTING';
    heroTitle = locale === 'tr' ? 'Sinüs Lifting & Kemik Grefti İstanbul' : 'Sinus Lifting & Bone Augmentation in Istanbul, Turkey';
    heroSubtitle = locale === 'tr' ? 'Üst çene arka bölgede kemik yüksekliği yetersiz olan hastalar için güvenli kemik oluşturma.' : 'Creating a solid bone foundation in the upper posterior jaw for lifelong implants.';
  } else {
    heroBadge = locale === 'tr' ? 'FULL MOUTH İMPLANT' : 'FULL MOUTH IMPLANTS';
    heroTitle = locale === 'tr' ? 'Tüm Ağız İmplant Tedavisi İstanbul (Full Mouth)' : 'Full Mouth Dental Implants Cost in Istanbul, Turkey';
    heroSubtitle = locale === 'tr' ? 'Komple dişsizlik durumunda ömür boyu garantili sabit zirkonyum dişlerle yepyeni bir gülüş.' : 'Restore your entire smile with permanent fixed zirconia teeth supported by premium titanium implants.';
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
        {isDentalImplantsCategory ? (
          <DentalImplantsDetailView />
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
        ) : isDentures ? (
          <ImplantSupportedDenturesDetailView />
        ) : isSinusLift ? (
          <SinusLiftingDetailView />
        ) : (
          <TreatmentDetailView />
        )}
      </main>

      <Footer />
    </div>
  );
}
