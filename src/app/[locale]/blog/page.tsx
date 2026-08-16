import React from 'react';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogHeroBanner from '@/components/blog-sections/BlogHeroBanner';
import BlogMainSection from '@/components/blog-sections/BlogMainSection';

interface Props {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return {
    title:
      locale === 'tr'
        ? 'Blog & Rehber | Master Smile Studio İstanbul'
        : 'Dental Blog & Guides | Master Smile Studio Istanbul',
    description:
      locale === 'tr'
        ? 'Diş sağlığı, implant, estetik kaplamalar, ünlülerin dişleri ve Türkiye diş turizmi hakkında uzman rehberler ve makaleler.'
        : 'Expert clinical guides and articles on dental implants, veneers, crowns, celebrity smile makeovers and dental tourism in Istanbul, Turkey.',
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', color: '#0f172a' }}>
      <Header />

      {/* 1:1 Modular Blog Hero Banner */}
      <BlogHeroBanner />

      <main id="main-content" style={{ flex: 1 }}>
        {/* 1:1 Modular Blog 3-Column Listing & Sidebar */}
        <BlogMainSection />
      </main>

      <Footer />
    </div>
  );
}
