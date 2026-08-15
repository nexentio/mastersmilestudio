import { LOCALES } from '@/i18n/routing';
import { siteConfig } from '@/config/site';

/**
 * Generates alternates object with canonical and hreflang for all supported locales + x-default
 * @param pathname The path relative to locale (e.g. '', '/about', '/treatments/dental-implants')
 * @param currentLocale The current active locale
 */
export function getI18nAlternates(pathname: string = '', currentLocale: string = 'en') {
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const pathWithoutSlash = cleanPath === '/' ? '' : cleanPath;
  const baseUrl = siteConfig.domain.replace(/\/+$/, '');

  const languagesMap: Record<string, string> = {};

  LOCALES.forEach((loc) => {
    languagesMap[loc] = `${baseUrl}/${loc}${pathWithoutSlash}`;
  });

  // x-default points to the international English version by default
  languagesMap['x-default'] = `${baseUrl}/en${pathWithoutSlash}`;

  return {
    canonical: `${baseUrl}/${currentLocale}${pathWithoutSlash}`,
    languages: languagesMap,
  };
}
