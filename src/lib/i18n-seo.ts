import { LOCALES } from '@/i18n/routing';
import { siteConfig } from '@/config/site';

export const TREATMENT_LOCALES = LOCALES;

/**
 * Generates alternates object with canonical and hreflang for all supported locales + x-default
 * @param pathname The path relative to locale (e.g. '', '/about', '/treatments/dental-implants')
 * @param currentLocale The current active locale
 * @param allowedLocales Optional array of supported locales for this specific page (defaults to all LOCALES)
 */
export function getI18nAlternates(
  pathname: string = '',
  currentLocale: string = 'en',
  allowedLocales: readonly string[] = LOCALES
) {
  const cleanSubPath = pathname.replace(/^\/+|\/+$/g, '');
  const baseUrl = siteConfig.domain.replace(/\/+$/, '');

  const buildUrl = (loc: string) => {
    return cleanSubPath ? `${baseUrl}/${loc}/${cleanSubPath}/` : `${baseUrl}/${loc}/`;
  };

  const languagesMap: Record<string, string> = {};

  allowedLocales.forEach((loc) => {
    languagesMap[loc] = buildUrl(loc);
  });

  // x-default points to the international English version by default
  languagesMap['x-default'] = buildUrl('en');

  return {
    canonical: buildUrl(currentLocale),
    languages: languagesMap,
  };
}

