import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalHeroBanner from '@/components/legal/LegalHeroBanner';
import LegalContentLayout from '@/components/legal/LegalContentLayout';
import { TERMS_OF_SERVICE_DATA } from '@/data/terms-of-service-data';
import { getI18nAlternates } from '@/lib/i18n-seo';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const title = TERMS_OF_SERVICE_DATA.metaTitle[locale] || TERMS_OF_SERVICE_DATA.metaTitle.en;
  const description = TERMS_OF_SERVICE_DATA.metaDescription[locale] || TERMS_OF_SERVICE_DATA.metaDescription.en;

  return {
    title,
    description,
    alternates: getI18nAlternates('/terms-of-service', locale),
  };
}

export default async function TermsOfServicePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', color: '#0f172a' }}>
      <Header />

      <main id="main-content" style={{ flex: 1 }}>
        <LegalHeroBanner data={TERMS_OF_SERVICE_DATA} />
        <LegalContentLayout data={TERMS_OF_SERVICE_DATA} />
      </main>

      <Footer />
    </div>
  );
}
