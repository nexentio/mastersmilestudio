'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter, LOCALES, LOCALE_LABELS, type Locale } from '@/i18n/routing';
import { useState, useTransition, useRef, useEffect } from 'react';

const LOCALE_FLAGS: Record<Locale, string> = {
  tr: '🇹🇷',
  en: '🇬🇧',
  pl: '🇵🇱',
  pt: '🇵🇹',
  es: '🇪🇸',
  ru: '🇷🇺',
  de: '🇩🇪',
};

export default function LanguageSwitcher() {
  const currentLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLanguageSelect = (nextLocale: Locale) => {
    setIsOpen(false);
    if (nextLocale === currentLocale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeLabel = LOCALE_LABELS[currentLocale]?.nativeName || currentLocale.toUpperCase();
  const activeFlag = LOCALE_FLAGS[currentLocale] || '🌐';

  return (
    <div ref={containerRef} style={{ position: 'relative', display: 'inline-block' }}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="lang-switcher-trigger"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          backgroundColor: '#ffffff',
          color: '#0f172a',
          padding: '0.55rem 1rem',
          borderRadius: '9999px',
          border: '1px solid #e2e8f0',
          fontSize: '0.9rem',
          fontWeight: 600,
          cursor: isPending ? 'wait' : 'pointer',
          outline: 'none',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
        }}
      >
        <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>{activeFlag}</span>
        <span>{activeLabel}</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill="currentColor"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            color: '#64748b',
          }}
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Floating Popover Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 0.6rem)',
            right: 0,
            width: 'max-content',
            minWidth: '170px',
            backgroundColor: '#ffffff',
            borderRadius: '24px',
            boxShadow: '0 20px 40px -15px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06)',
            padding: '0.5rem',
            zIndex: 100,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          {LOCALES.map((loc) => {
            const isSelected = loc === currentLocale;
            const label = LOCALE_LABELS[loc]?.nativeName || loc.toUpperCase();
            const flag = LOCALE_FLAGS[loc] || '🌐';

            return (
              <button
                key={loc}
                type="button"
                onClick={() => handleLanguageSelect(loc)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  width: '100%',
                  padding: '0.6rem 0.85rem',
                  borderRadius: '16px',
                  border: 'none',
                  backgroundColor: isSelected ? '#fff7ed' : 'transparent',
                  color: isSelected ? '#ea580c' : '#1e293b',
                  fontSize: '0.92rem',
                  fontWeight: isSelected ? 600 : 500,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s ease',
                  fontFamily: 'inherit',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <span style={{ fontSize: '1.25rem', lineHeight: 1 }}>{flag}</span>
                <span style={{ flex: 1 }}>{label}</span>
                {isSelected && (
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" style={{ color: '#ea580c' }}>
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
