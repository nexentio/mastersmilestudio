import React from 'react';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogDetailView from '@/components/blog-sections/BlogDetailView';
import { BLOG_POSTS } from '@/data/blog-page-data';
import { SITE_CONFIG } from '@/config/site';

interface Props {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const locales = ['en', 'tr', 'de', 'pl', 'pt', 'es', 'ru'];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const post of BLOG_POSTS) {
      params.push({
        locale,
        slug: post.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  const title = post.title[locale] || post.title.en || post.title.tr || slug;
  const description =
    locale === 'tr'
      ? `${title} - Antalya Master Smile Studio klinik analiz, tedavi yöntemleri ve uzman rehberi.`
      : `${title} - Clinical insights, dental procedure breakdown, and expert guidance from Master Smile Studio Antalya.`;

  const canonicalUrl = `${SITE_CONFIG.domain}/${locale}/blog/${slug}`;
  const ogImage = post.image.startsWith('http') ? post.image : `${SITE_CONFIG.domain}${post.image}`;

  return {
    title: `${title} | Master Smile Studio`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
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

export default async function BlogDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) {
    notFound();
  }

  const title = post.title[locale] || post.title.en || post.title.tr || slug;
  const description =
    locale === 'tr'
      ? `${title} - Antalya Master Smile Studio klinik analiz, tedavi yöntemleri ve uzman rehberi.`
      : `${title} - Clinical insights, dental procedure breakdown, and expert guidance from Master Smile Studio Antalya.`;

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: post.image.startsWith('http') ? post.image : `${SITE_CONFIG.domain}${post.image}`,
    author: {
      '@type': 'Organization',
      name: 'Master Smile Studio Medical Board',
      url: `${SITE_CONFIG.domain}/${locale}`,
    },
    publisher: {
      '@type': 'Dentist',
      name: 'Master Smile Studio Antalya',
      url: SITE_CONFIG.domain,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.domain}/mss-logo.webp`,
      },
    },
    datePublished: '2026-07-20T10:00:00.000Z',
    dateModified: '2026-08-19T14:00:00.000Z',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_CONFIG.domain}/${locale}/blog/${slug}`,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locale === 'tr' ? 'Ana Sayfa' : 'Home',
        item: `${SITE_CONFIG.domain}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: locale === 'tr' ? 'Blog & Rehberler' : 'Blog & Guides',
        item: `${SITE_CONFIG.domain}/${locale}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `${SITE_CONFIG.domain}/${locale}/blog/${slug}`,
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

      <Header />

      <main id="main-content" style={{ flex: 1 }}>
        <BlogDetailView slug={slug} />
      </main>

      <Footer />
    </div>
  );
}
