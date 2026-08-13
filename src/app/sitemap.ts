import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/about', '/gallery', '/treatments'];
  const sitemapEntries: MetadataRoute.Sitemap = [];

  routing.locales.forEach((locale) => {
    routes.forEach((route) => {
      const url = `${siteConfig.domain}/${locale}${route}`;
      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((loc) => [loc, `${siteConfig.domain}/${loc}${route}`])
          ),
        },
      });
    });
  });

  return sitemapEntries;
}
