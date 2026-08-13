import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

const MODULES = [
  'common',
  'home',
  'about',
  'services',
  'contact',
  'process',
  'team',
  'brands',
  'transformations',
  'patients',
  'blog',
  'faq',
];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !hasLocale(routing.locales, locale)) {
    locale = routing.defaultLocale;
  }

  const messages: Record<string, any> = {};

  for (const mod of MODULES) {
    try {
      const content = (await import(`../../messages/${locale}/${mod}.json`)).default;
      // Namespace binding e.g. useTranslations('home') or useTranslations('team')
      messages[mod] = content;
      // Top-level key binding e.g. useTranslations() direct key lookups
      Object.assign(messages, content);
    } catch (e) {
      // Gracefully continue if optional module is not present
    }
  }

  return {
    locale,
    messages,
  };
});
