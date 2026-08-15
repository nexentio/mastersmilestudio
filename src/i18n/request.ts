import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

const NAMESPACES = [
  'common',
  'home',
  'about',
  'services',
  'contact',
  'process',
  'team',
  'brands',
  'blog',
  'faq',
  'footer',
  'gallery',
] as const;

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !hasLocale(routing.locales, locale)) {
    locale = routing.defaultLocale;
  }

  // Dynamically load only the requested locale's translation files
  const loadedEntries = await Promise.all(
    NAMESPACES.map(async (ns) => {
      try {
        const mod = await import(`../../messages/${locale}/${ns}.json`);
        return [ns, mod.default || mod];
      } catch (err) {
        // Fallback to default locale if namespace is missing in target locale
        try {
          const fallbackMod = await import(`../../messages/${routing.defaultLocale}/${ns}.json`);
          return [ns, fallbackMod.default || fallbackMod];
        } catch {
          return [ns, {}];
        }
      }
    })
  );

  const messages = Object.fromEntries(loadedEntries);

  return {
    locale,
    messages,
  };
});
