import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_CONFIG } from '@/config/site';
import { BLOG_POSTS } from '@/data/blog-page-data';
import { TREATMENT_PRIMARY_SLUGS, TREATMENT_NESTED_SLUGS } from '@/data/treatment-routes';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = SITE_CONFIG.domain.replace(/\/+$/, '');

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

  const primaryTreatmentRoutes = Array.from(
    new Set(TREATMENT_PRIMARY_SLUGS.map((slug) => `/treatments/${slug}`))
  );

  const nestedTreatmentRoutes = Array.from(
    new Set(TREATMENT_NESTED_SLUGS.map((slugs) => `/treatments/${slugs[0]}/${slugs[1]}`))
  );

  const blogRoutes = BLOG_POSTS.map((p) => `/blog/${p.slug}`);

  const allRoutes = Array.from(
    new Set([
      ...staticRoutes,
      ...primaryTreatmentRoutes,
      ...nestedTreatmentRoutes,
      ...blogRoutes,
    ])
  );

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routing.locales.forEach((locale) => {
    allRoutes.forEach((route) => {
      const url = `${domain}/${locale}${route}`;
      const isHome = route === '';
      const isTreatment = route.startsWith('/treatments');
      const isBlog = route.startsWith('/blog');

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: isHome ? 'daily' : isTreatment ? 'weekly' : isBlog ? 'weekly' : 'monthly',
        priority: isHome ? 1.0 : isTreatment ? 0.9 : isBlog ? 0.7 : 0.8,
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
