import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentHeroBanner from '@/components/treatment-sections/TreatmentHeroBanner';
import TreatmentDetailView from '@/components/TreatmentDetailView';
import DentalImplantsDetailView from '@/components/DentalImplantsDetailView';
import AllOnSixImplantDetailView from '@/components/AllOnSixImplantDetailView';
import { generateTreatmentJsonLd } from '@/lib/treatment-schema';
import { getI18nAlternates, TREATMENT_LOCALES } from '@/lib/i18n-seo';
import { getTreatmentContent } from '@/lib/treatment-content';

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const content = await getTreatmentContent(locale, slug);

  const titleMap: Record<string, { en: string; tr: string }> = {
    'dental-implants': {
      en: 'Dental Implants in Istanbul | Master Smile Studio',
      tr: 'İstanbul Diş İmplantı Tedavisi | Master Smile Studio',
    },
    'all-on-4-implants': {
      en: 'All-on-4 Dental Implants in Istanbul | Master Smile Studio',
      tr: 'All-on-4 Diş İmplantı İstanbul | Master Smile Studio',
    },
    'all-on-6-implants': {
      en: 'All-on-6 Dental Implants in Istanbul | Master Smile Studio',
      tr: 'All-on-6 Diş İmplantı İstanbul | Master Smile Studio',
    },
    'full-mouth-implants': {
      en: 'Full Mouth Dental Implants in Istanbul | Master Smile Studio',
      tr: 'Tam Ağız Diş İmplantı İstanbul | Master Smile Studio',
    },
    'porcelain-veneers': {
      en: 'Porcelain Veneers in Istanbul | Master Smile Studio',
      tr: 'Porselen Lamine Kaplama İstanbul | Master Smile Studio',
    },
    'zirconia-crowns': {
      en: 'Zirconia Crowns in Istanbul | Master Smile Studio',
      tr: 'Zirkonyum Diş Kaplama İstanbul | Master Smile Studio',
    },
    'hollywood-smile': {
      en: 'Hollywood Smile Design in Istanbul | Master Smile Studio',
      tr: 'Hollywood Smile Gülüş Tasarımı İstanbul | Master Smile Studio',
    },
    'teeth-whitening': {
      en: 'Laser Teeth Whitening in Istanbul | Master Smile Studio',
      tr: 'Lazer Diş Beyazlatma İstanbul | Master Smile Studio',
    },
  };

  const currentMeta = titleMap[slug] || {
    en: 'Dental Treatments in Istanbul | Master Smile Studio',
    tr: 'İstanbul Diş Tedavileri | Master Smile Studio',
  };

  const title =
    content?.seo?.title ||
    (locale === 'tr' ? currentMeta.tr : currentMeta.en);

  const description =
    content?.seo?.description ||
    (locale === 'tr'
      ? 'İstanbul’da dünya standartlarında diş tedavisi, dijital gülüş tasarımı ve implant uygulamaları. Ücretsiz online konsültasyon alın.'
      : 'World-class dental treatments, digital smile design, and implants in Istanbul, Turkey. Get your free online consultation.');

  return {
    title,
    description,
    alternates: getI18nAlternates(`/treatments/${slug}`, locale, TREATMENT_LOCALES),
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const content = await getTreatmentContent(locale, slug);

  const isDentalImplants = slug === 'dental-implants';
  const isAllOnSix = slug === 'all-on-6-implants';

  let heroBadge = content?.hero?.badge || (locale === 'tr' ? 'TEDAVİLERİMİZ' : 'TREATMENTS');
  let heroTitle = content?.hero?.title || (locale === 'tr' ? 'İstanbul Diş İmplantı' : 'Dental Implants in Istanbul');
  let heroSubtitle =
    content?.hero?.subtitle ||
    (locale === 'tr'
      ? 'İstanbul’daki kliniğimizde ömür boyu garantili premium implant markaları ve uzman cerrahlarımızla eksiksiz bir gülüşe kavuşun.'
      : 'Restore your smile with confidence, lifelong guarantees, and expert oral surgeons in Istanbul.');

  if (isAllOnSix && !content?.hero) {
    heroTitle =
      locale === 'tr'
        ? 'All-on-6 Diş İmplantı İstanbul'
        : 'All-on-6 Dental Implants in Istanbul';
    heroSubtitle =
      locale === 'tr'
        ? 'Komple dişsizlik durumunda ömür boyu garantili sabit zirkonyum dişlerle yepyeni bir gülüşe kavuşun.'
        : 'Restore your entire smile with permanent fixed zirconia teeth supported by premium titanium implants.';
  }

  const canonicalUrl = `https://mastersmilestudio.com/${locale}/treatments/${slug}`;
  const jsonLd = generateTreatmentJsonLd({
    locale,
    slug,
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

      {/* Global Navigation Header */}
      <Header />

      {/* 1:1 Modular Treatment Hero Section */}
      <TreatmentHeroBanner
        tag={locale === 'tr' ? 'TEDAVİLERİMİZ' : 'TREATMENTS'}
        title={heroTitle}
        subtitle={heroSubtitle}
        primaryBtnText={locale === 'tr' ? 'Randevu & Bilgi Al' : 'Contact & Appointment'}
        primaryBtnHref="/contact"
        primaryBtnAriaLabel={
          locale === 'tr'
            ? 'Randevu ve bilgi almak için iletişim sayfasına gidin'
            : 'Contact Master Smile Studio for appointment and consultation'
        }
        secondaryBtnText={locale === 'tr' ? 'Paketleri İncele' : 'View Packages & Details'}
        secondaryBtnHref="#main-content"
        secondaryBtnAriaLabel={
          locale === 'tr'
            ? 'Tedavi paketlerini ve ayrıntılarını incelemek için aşağı kaydırın'
            : 'Scroll down to explore treatment packages and medical details'
        }
      />

      {/* Main Content Area Landmark */}
      <main id="main-content" className="treatment-main-content">
        {isDentalImplants ? (
          <DentalImplantsDetailView />
        ) : isAllOnSix ? (
          <AllOnSixImplantDetailView />
        ) : (
          <TreatmentDetailView />
        )}
      </main>

      {/* Studio Luxury Footer */}
      <Footer />
    </div>
  );
}
