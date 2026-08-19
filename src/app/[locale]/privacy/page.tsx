import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LegalHeroBanner from '@/components/legal/LegalHeroBanner';
import LegalContentLayout from '@/components/legal/LegalContentLayout';
import { PRIVACY_POLICY_DATA } from '@/data/privacy-policy-data';
import { getI18nAlternates } from '@/lib/i18n-seo';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const title = PRIVACY_POLICY_DATA.metaTitle[locale] || PRIVACY_POLICY_DATA.metaTitle.en;
  const description = PRIVACY_POLICY_DATA.metaDescription[locale] || PRIVACY_POLICY_DATA.metaDescription.en;

  return {
    title,
    description,
    alternates: getI18nAlternates('/privacy-policy', locale),
  };
}

export default async function PrivacyAliasPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', color: '#0f172a' }}>
      <Header />

      <main id="main-content" style={{ flex: 1 }}>
        <LegalHeroBanner data={PRIVACY_POLICY_DATA} />
        <LegalContentLayout data={PRIVACY_POLICY_DATA} />
      </main>

      <Footer />
    </div>
  );
}
