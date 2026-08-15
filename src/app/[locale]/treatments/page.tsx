import React from 'react';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentDetailView from '@/components/TreatmentDetailView';
import { getI18nAlternates, TREATMENT_LOCALES } from '@/lib/i18n-seo';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'services' });

  return {
    title: t('metaTitle') || 'Dental Treatments in Istanbul | Master Smile Studio',
    description:
      t('metaDescription') ||
      'Explore world-class dental treatments, digital smile design, and implants in Istanbul, Turkey.',
    alternates: getI18nAlternates('/treatments', locale, TREATMENT_LOCALES),
  };
}

export default async function TreatmentsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('services');

  return (
    <div className="treatment-layout-root">
      {/* Global Navigation Header */}
      <Header />

      {/* Exact 1:1 Treatment Hero Section */}
      <div className="treatment-hero-banner">
        <Image
          src="/treatment-hero-bg.webp"
          alt={t('pageTitle')}
          fill
          priority
          sizes="100vw"
          className="treatment-hero-bg-img"
        />
        <div className="treatment-hero-content">
          <div className="treatment-hero-tag">
            {locale === 'tr' ? 'TEDAVİLERİMİZ' : 'TREATMENTS'}
          </div>
          <h1 className="treatment-hero-heading">{t('pageTitle')}</h1>
          <p className="treatment-hero-subheading">{t('pageSubtitle')}</p>
          <div className="treatment-hero-btns">
            <Link
              href="/contact"
              className="treatment-hero-primary-btn"
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
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            <a
              href="#treatment-detail-view"
              className="treatment-hero-secondary-btn"
            >
              <span>
                {locale === 'tr' ? 'Detayları İncele' : 'View Details'}
              </span>
            </a>
          </div>
        </div>
      </div>

      <div id="treatment-detail-view">
        <TreatmentDetailView />
      </div>

      {/* Studio Luxury Footer */}
      <Footer />
    </div>
  );
}
