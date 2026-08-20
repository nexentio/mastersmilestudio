import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_CONFIG } from '@/config/site';
import { BLOG_POSTS } from '@/data/blog-page-data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = SITE_CONFIG.domain;
  const staticRoutes = [
    '',
    '/about',
    '/treatments',
    '/packages',
    '/prices',
    '/before-after',
    '/gallery',
    '/reviews',
    '/faq',
    '/contact',
    '/blog',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const blogRoutes = BLOG_POSTS.map((p) => `/blog/${p.slug}`);
  const allRoutes = [...staticRoutes, ...blogRoutes];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routing.locales.forEach((locale) => {
    allRoutes.forEach((route) => {
      const url = `${domain}/${locale}${route}`;
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : route.startsWith('/blog') ? 0.7 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((loc) => [loc, `${domain}/${loc}${route}`])
          ),
        },
      });
    });
  });

  return sitemapEntries;
}
