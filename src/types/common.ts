export type Locale = 'tr' | 'en' | 'de' | 'ru' | 'es' | 'pt' | 'pl';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface CountryCode {
  code: string;
  dialCode: string;
  name: string;
  flag: string;
  placeholder: string;
  maxLength: number;
}
