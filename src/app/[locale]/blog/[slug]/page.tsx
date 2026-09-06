import React from 'react';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogDetailView from '@/components/blog-sections/BlogDetailView';
import { BLOG_POSTS } from '@/data/blog-page-data';
import { SITE_CONFIG } from '@/config/site';

import { getI18nAlternates } from '@/lib/i18n-seo';

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

const HOME_NAMES: Record<string, string> = {
  tr: 'Ana Sayfa',
  en: 'Home',
  de: 'Startseite',
  pl: 'Strona Główna',
  pt: 'Início',
  es: 'Inicio',
  ru: 'Главная',
};

const BLOG_NAMES: Record<string, string> = {
  tr: 'Blog & Rehberler',
  en: 'Blog & Guides',
  de: 'Blog & Ratgeber',
  pl: 'Blog i Poradniki',
  pt: 'Blog e Guias',
  es: 'Blog y Guías',
  ru: 'Блог и Статьи',
};

export async function generateStaticParams() {
  const locales = ['en', 'tr', 'de', 'pl', 'pt', 'es', 'ru'];
  const params: { locale: string; slug: string }[] = [];
  locales.forEach((locale) => {
    BLOG_POSTS.forEach((post) => {
      params.push({ locale, slug: post.slug });
    });
  });
  return params;
}

const BLOG_META_DESC_TEMPLATES: Record<string, (title: string) => string> = {
  tr: (title) => `${title} - Antalya Master Smile Studio klinik analiz, tedavi yöntemleri ve uzman rehberi.`,
  en: (title) => `${title} - Clinical insights, dental procedure breakdown, and expert guidance from Master Smile Studio Antalya.`,
  de: (title) => `${title} - Klinische Einblicke, Ablauf der Zahnbehandlung und Expertenrat von Master Smile Studio Antalya.`,
  pl: (title) => `${title} - Analiza kliniczna, przebieg zabiegów stomatologicznych i porady ekspertów Master Smile Studio Antalya.`,
  pt: (title) => `${title} - Análise clínica, procedimentos odontológicos e orientações especializadas da Master Smile Studio Antalya.`,
  es: (title) => `${title} - Análisis clínico, desglose de procedimientos dentales y orientación experta de Master Smile Studio Antalya.`,
  ru: (title) => `${title} - Клинический анализ, этапы процедур и экспертные рекомендации от Master Smile Studio в Анталье.`,
};

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  const title = post.title[locale] || post.title.en || post.title.tr || slug;
  const descBuilder = BLOG_META_DESC_TEMPLATES[locale] || BLOG_META_DESC_TEMPLATES.en;
  const description = descBuilder(title);

  const canonicalUrl = `${SITE_CONFIG.domain}/${locale}/blog/${slug}/`;
  const ogImage = post.image.startsWith('http') ? post.image : `${SITE_CONFIG.domain}${post.image}`;

  return {
    title: `${title} | Master Smile Studio`,
    description,
    alternates: getI18nAlternates(`/blog/${slug}`, locale),
    openGraph: {
      title: `${title} | Master Smile Studio`,
      description,
      url: canonicalUrl,
      siteName: 'Master Smile Studio Antalya',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'article',
      publishedTime: '2026-07-20T10:00:00.000Z',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Master Smile Studio`,
      description,
      images: [ogImage],
    },
  };
}

import { getBlogDetailBySlug } from '@/data/blog-detail-data';

export default async function BlogDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  const article = getBlogDetailBySlug(slug);
  const title = post.title[locale] || post.title.en || post.title.tr || slug;
  const descBuilder = BLOG_META_DESC_TEMPLATES[locale] || BLOG_META_DESC_TEMPLATES.en;
  const description = descBuilder(title);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: post.image.startsWith('http') ? post.image : `${SITE_CONFIG.domain}${post.image}`,
    author: {
      '@type': 'Organization',
      name: 'Master Smile Studio Medical Board',
      url: `${SITE_CONFIG.domain}/${locale}/`,
    },
    publisher: {
      '@type': 'Dentist',
      name: 'Master Smile Studio Antalya',
      url: `${SITE_CONFIG.domain}/${locale}/`,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.domain}/mastersmilestudio-logo.png`,
      },
    },
    datePublished: '2026-07-20T10:00:00.000Z',
    dateModified: '2026-08-19T14:00:00.000Z',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.domain}/${locale}/blog/${slug}/`,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', "section[aria-label='Clinical Summary and Key Findings']"],
    },
  };

  const faqJsonLd = article?.faqs && article.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q[locale] || faq.q.en || faq.q.tr,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a[locale] || faq.a.en || faq.a.tr,
      },
    })),
  } : null;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: HOME_NAMES[locale] || HOME_NAMES.en,
        item: `${SITE_CONFIG.domain}/${locale}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: BLOG_NAMES[locale] || BLOG_NAMES.en,
        item: `${SITE_CONFIG.domain}/${locale}/blog/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `${SITE_CONFIG.domain}/${locale}/blog/${slug}/`,
      },
    ],
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', color: '#0f172a' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Header />

      <main id="main-content" style={{ flex: 1 }}>
        <BlogDetailView slug={slug} />
      </main>

      <Footer />
    </div>
  );
}
