import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_CONFIG } from '@/config/site';
import { BLOG_POSTS } from '@/data/blog-page-data';

export const dynamic = 'force-static';

export const CANONICAL_STATIC_ROUTES = [
  '',
  'about',
  'treatments',
  'packages',
  'prices',
  'before-after',
  'gallery',
  'reviews',
  'faq',
  'contact',
  'blog',
  'privacy-policy',
  'terms-of-service',
];

export const CANONICAL_TREATMENT_CATEGORIES = [
  'dental-implants',
  'dental-crowns',
  'dental-veneers',
  'dental-bridges',
  'dentures',
  'cosmetic-dentistry',
  'general-dentistry',
];

export const CANONICAL_NESTED_TREATMENTS: Array<[string, string]> = [
  // Dental Implants
  ['dental-implants', 'full-mouth-implants'],
  ['dental-implants', 'all-on-4-implants'],
  ['dental-implants', 'all-on-6-implants'],
  ['dental-implants', 'immediate-implant-treatment'],
  ['dental-implants', 'zygomatic-implants'],
  ['dental-implants', 'zirconium-implants'],
  ['dental-implants', 'implant-supported-dentures'],
  ['dental-implants', 'sinus-lifting'],
  // Dental Crowns
  ['dental-crowns', 'zirconium-crowns'],
  ['dental-crowns', 'pfm-crowns'],
  ['dental-crowns', 'emax-crowns'],
  ['dental-crowns', 'full-ceramic-crowns'],
  // Dental Veneers
  ['dental-veneers', 'porcelain-veneers'],
  ['dental-veneers', 'emax-veneers'],
  ['dental-veneers', 'zirconium-veneers'],
  ['dental-veneers', 'composite-veneers'],
  ['dental-veneers', 'lumineers'],
  ['dental-veneers', 'empress-veneers'],
  // Dental Bridges
  ['dental-bridges', 'traditional-bridges'],
  ['dental-bridges', 'maryland-bridges'],
  ['dental-bridges', 'cantilever-bridges'],
  ['dental-bridges', 'implant-supported-bridges'],
  // Dentures
  ['dentures', 'complete-dentures'],
  ['dentures', 'partial-dentures'],
  ['dentures', 'overdentures'],
  ['dentures', 'implant-supported-dentures'],
  // Cosmetic Dentistry
  ['cosmetic-dentistry', 'smile-makeover'],
  ['cosmetic-dentistry', 'hollywood-smile'],
  ['cosmetic-dentistry', 'gummy-smile-treatment'],
  ['cosmetic-dentistry', 'teeth-whitening'],
  ['cosmetic-dentistry', 'tooth-contouring'],
  ['cosmetic-dentistry', 'diastema-closure'],
  // General Dentistry
  ['general-dentistry', 'dental-cleaning'],
  ['general-dentistry', 'tooth-fillings'],
  ['general-dentistry', 'root-canal'],
  ['general-dentistry', 'tooth-extraction'],
  ['general-dentistry', 'inlay-onlay'],
  ['general-dentistry', 'dental-sealants'],
  ['general-dentistry', 'fluoride-treatment'],
  ['general-dentistry', 'bruxism-treatment'],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const domain = SITE_CONFIG.domain.replace(/\/+$/, '');

  const normalizedRoutes: string[] = [
    // Static routes ('' -> '', 'about' -> 'about')
    ...CANONICAL_STATIC_ROUTES,
    // Category hubs (e.g. 'treatments/dental-implants')
    ...CANONICAL_TREATMENT_CATEGORIES.map((cat) => `treatments/${cat}`),
    // Nested treatment subpages (e.g. 'treatments/dental-implants/all-on-4-implants')
    ...CANONICAL_NESTED_TREATMENTS.map(([cat, sub]) => `treatments/${cat}/${sub}`),
    // Blog articles (e.g. 'blog/simon-cowell-teeth-before-and-after')
    ...BLOG_POSTS.map((p) => `blog/${p.slug}`),
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  routing.locales.forEach((locale) => {
    normalizedRoutes.forEach((route) => {
      // Build trailingSlash compliant URL: https://mastersmilestudio.com/en/ or https://mastersmilestudio.com/en/about/
      const cleanRoute = route ? `${route}/` : '';
      const url = `${domain}/${locale}/${cleanRoute}`;

      const isHome = route === '';
      const isTreatment = route.startsWith('treatments');
      const isBlog = route.startsWith('blog');

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency: isHome ? 'daily' : isTreatment ? 'weekly' : isBlog ? 'weekly' : 'monthly',
        priority: isHome ? 1.0 : isTreatment ? 0.9 : isBlog ? 0.7 : 0.8,
        alternates: {
          languages: {
            ...Object.fromEntries(
              routing.locales.map((loc) => [loc, `${domain}/${loc}/${cleanRoute}`])
            ),
            'x-default': `${domain}/en/${cleanRoute}`,
          },
        },
      });
    });
  });

  return sitemapEntries;
}
