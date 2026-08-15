import React from 'react';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentDetailView from '@/components/TreatmentDetailView';
import DentalImplantsDetailView from '@/components/DentalImplantsDetailView';
import AllOnSixImplantDetailView from '@/components/AllOnSixImplantDetailView';
import { generateTreatmentJsonLd } from '@/lib/treatment-schema';
import { getI18nAlternates } from '@/lib/i18n-seo';

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

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

  const title = locale === 'tr' ? currentMeta.tr : currentMeta.en;
  const description =
    locale === 'tr'
      ? 'İstanbul’da dünya standartlarında diş tedavisi, dijital gülüş tasarımı ve implant uygulamaları. Ücretsiz online konsültasyon alın.'
      : 'World-class dental treatments, digital smile design, and implants in Istanbul, Turkey. Get your free online consultation.';

  return {
    title,
    description,
    alternates: getI18nAlternates(`/treatments/${slug}`, locale),
  };
}

export default async function TreatmentDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const isDentalImplants = slug === 'dental-implants';
  const isAllOnSix = slug === 'all-on-6-implants';

  let heroTitle =
    locale === 'tr' ? 'İstanbul Diş İmplantı' : 'Dental Implants in Istanbul';
  let heroSubtitle =
    locale === 'tr'
      ? 'İstanbul’daki kliniğimizde ömür boyu garantili premium implant markaları ve uzman cerrahlarımızla eksiksiz bir gülüşe kavuşun.'
      : 'Restore your smile with confidence, lifelong guarantees, and expert oral surgeons in Istanbul.';

  if (isDentalImplants) {
    heroTitle =
      locale === 'tr' ? 'İstanbul Diş İmplantı' : 'Dental Implants in Istanbul';
    heroSubtitle =
      locale === 'tr'
        ? 'İstanbul’daki kliniğimizde ömür boyu garantili premium implant markaları ve uzman cerrahlarımızla eksiksiz bir gülüşe kavuşun.'
        : 'Restore your smile with confidence, lifelong guarantees, and expert oral surgeons in Istanbul.';
  } else if (isAllOnSix) {
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

      {/* 1:1 Treatment Hero Section */}
      <header className="treatment-hero-banner" role="banner">
        <Image
          src="/treatment-hero-bg.webp"
          alt={heroTitle}
          fill
          priority
          sizes="100vw"
          className="treatment-hero-bg-img"
        />
        <div className="treatment-hero-content">
          <div className="treatment-hero-tag">
            {locale === 'tr' ? 'TEDAVİLERİMİZ' : 'TREATMENTS'}
          </div>
          <h1 className="treatment-hero-heading">{heroTitle}</h1>
          <p className="treatment-hero-subheading">{heroSubtitle}</p>
          <div className="treatment-hero-btns">
            <Link
              href="/contact"
              className="treatment-hero-primary-btn"
              aria-label={
                locale === 'tr'
                  ? 'Randevu ve bilgi almak için iletişim sayfasına gidin'
                  : 'Contact Master Smile Studio for appointment and consultation'
              }
            >
              <span>
                {locale === 'tr' ? 'Randevu & Bilgi Al' : 'Contact & Appointment'}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                className="btn-arrow-icon"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <a
              href="#main-content"
              className="treatment-hero-secondary-btn"
              aria-label={
                locale === 'tr'
                  ? 'Tedavi paketlerini ve ayrıntılarını incelemek için aşağı kaydırın'
                  : 'Scroll down to explore treatment packages and medical details'
              }
            >
              <span>
                {locale === 'tr' ? 'Paketleri İncele' : 'View Packages & Details'}
              </span>
            </a>
          </div>
        </div>
      </header>

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
