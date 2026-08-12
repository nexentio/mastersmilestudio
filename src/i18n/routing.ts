import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const LOCALES = ['tr', 'en', 'pl', 'pt', 'es', 'ru', 'de'] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_LABELS: Record<Locale, { name: string; nativeName: string }> = {
  tr: { name: 'Turkish', nativeName: 'Türkçe' },
  en: { name: 'English', nativeName: 'English' },
  pl: { name: 'Polish', nativeName: 'Polski' },
  pt: { name: 'Portuguese', nativeName: 'Português' },
  es: { name: 'Spanish', nativeName: 'Español' },
  ru: { name: 'Russian', nativeName: 'Русский' },
  de: { name: 'German', nativeName: 'Deutsch' },
};

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: 'tr',
  localePrefix: 'as-needed'
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
