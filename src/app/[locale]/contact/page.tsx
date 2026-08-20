import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import ContactHeroBanner from '@/components/contact/ContactHeroBanner';
import ContactInfoSection from '@/components/contact/ContactInfoSection';
import ContactSection from '@/components/ContactSection';
import LocationMapSection from '@/components/LocationMapSection';
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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f5f5f5', color: '#111827' }}>
      {/* Global Studio Header */}
      <Header />

      {/* Main Container */}
      <main id="main-content" style={{ flex: 1 }}>
        <ContactHeroBanner />
        <ContactInfoSection />
        <ContactSection />
        <LocationMapSection />
      </main>

      {/* Global Studio Footer */}
      <Footer />
    </div>
  );
}
