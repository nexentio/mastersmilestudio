import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

const MODULES = ['common', 'home', 'about', 'services', 'contact'];

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !hasLocale(routing.locales, locale)) {
    locale = routing.defaultLocale;
  }

  const modulesEntries = await Promise.all(
    MODULES.map(async (mod) => {
      try {
        const content = (await import(`../../messages/${locale}/${mod}.json`)).default;
        return [mod, content];
      } catch (e) {
        return [mod, {}];
      }
    })
  );

  return {
    locale,
    messages: Object.fromEntries(modulesEntries)
  };
});
