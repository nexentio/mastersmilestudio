import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { getI18nAlternates } from '@/lib/i18n-seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'contact' });

  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
    alternates: getI18nAlternates('/contact', locale),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#09090b', color: '#ffffff' }}>
      {/* Global Studio Header */}
      <Header />

      {/* Empty Main Container */}
      <main style={{ flex: 1 }} />

      {/* Global Studio Footer */}
      <Footer />
    </div>
  );
}
