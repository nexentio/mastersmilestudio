import React from 'react';
import Image from 'next/image';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TreatmentDetailView from '@/components/TreatmentDetailView';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'treatments' });

  return {
    title: t('metaTitle') || 'Dental Treatments in Istanbul | Master Smile Studio',
    description:
      t('metaDescription') ||
      'Explore world-class dental treatments, digital smile design, and implants in Istanbul, Turkey.',
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
          <h1 className="treatment-hero-heading">
            {t('pageTitle')}
          </h1>
          <h4 className="treatment-hero-subheading">
            {t('pageSubtitle')}
          </h4>
          <div className="treatment-hero-btns">
            <Link
              href="/contact"
              className="treatment-hero-primary-btn"
            >
              <span>{t('inquireBtn') || (locale === 'tr' ? 'Randevu & Bilgi Al' : 'Contact & Appointment')}</span>
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
              href="#treatments-content"
              className="treatment-hero-secondary-btn"
            >
              <span>{t('exploreCasesBtn') || (locale === 'tr' ? 'Tedavileri İncele' : 'Explore Treatments')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main id="treatments-content" className="treatment-main-content">
        <TreatmentDetailView />
      </main>

      {/* Luxury Studio Footer */}
      <Footer />
    </div>
  );
}
