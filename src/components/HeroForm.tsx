'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState, FormEvent } from 'react';
import { LOCALES, LOCALE_LABELS, type Locale } from '@/i18n/routing';

const LOCALE_FLAGS: Record<Locale, string> = {
  tr: '🇹🇷',
  en: '🇬🇧',
  pl: '🇵🇱',
  pt: '🇵🇹',
  es: '🇪🇸',
  ru: '🇷🇺',
  de: '🇩🇪',
};

export default function HeroForm() {
  const t = useTranslations('home');
  const tServices = useTranslations('services');
  const currentLocale = useLocale() as Locale;

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('');
  const [language, setLanguage] = useState(currentLocale);
  const [submitted, setSubmitted] = useState(false);

  const treatments = [
    { key: 'smileDesign', label: tServices('smileDesign.title') },
    { key: 'implant', label: tServices('implant.title') },
    { key: 'emax', label: tServices('emax.title') },
    { key: 'zirconia', label: tServices('zirconia.title') },
    { key: 'whitening', label: tServices('whitening.title') },
    { key: 'rootCanal', label: tServices('rootCanal.title') },
    { key: 'dentures', label: tServices('dentures.title') },
    { key: 'bonding', label: tServices('bonding.title') },
  ];

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !treatment || !language) return;

    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          phone,
          treatment,
          locale: language || currentLocale,
          formType: 'Desktop Hero Quick Consultation Form',
        }),
      });
    } catch (err) {
      console.error('Hero form submission error:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '440px',
        backgroundColor: '#ffffff',
        borderRadius: '0px', // Dik (keskin) dış köşeler
        border: '1px solid #e2e8f0',
        padding: '2.25rem 2rem',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
        color: '#0f172a',
        textAlign: 'left',
      }}
    >
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 500, color: '#0f172a', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
          {t('form.title')}
        </h3>
        <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.4, fontWeight: 400 }}>
          {t('form.subtitle')}
        </p>
      </div>

      {submitted ? (
        <div
          style={{
            backgroundColor: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: '12px',
            padding: '1.5rem',
            textAlign: 'center',
            color: '#166534',
          }}
        >
          <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ margin: '0 auto 0.75rem auto' }}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <p style={{ fontSize: '0.95rem', fontWeight: 500, color: '#0f172a', margin: 0 }}>
            {t('form.success')}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
          {/* İsim Soyisim */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 500, color: '#0f172a', marginBottom: '0.4rem' }}>
              {t('form.fullName')} <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder={t('form.fullNamePlaceholder')}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '12px', // İç elementlerin köşeleri yuvarlak
                backgroundColor: '#f8fafc',
                border: '1px solid #cbd5e1',
                color: '#0f172a',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'border-color 0.2s ease',
              }}
            />
          </div>

          {/* Telefon */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 500, color: '#0f172a', marginBottom: '0.4rem' }}>
              {t('form.phone')} <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={t('form.phonePlaceholder')}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '12px', // İç elementlerin köşeleri yuvarlak
                backgroundColor: '#f8fafc',
                border: '1px solid #cbd5e1',
                color: '#0f172a',
                fontSize: '0.9rem',
                outline: 'none',
                transition: 'border-color 0.2s ease',
              }}
            />
          </div>

          {/* Tedavi */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 500, color: '#0f172a', marginBottom: '0.4rem' }}>
              {t('form.treatment')} <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <select
              required
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '12px', // İç elementlerin köşeleri yuvarlak
                backgroundColor: '#f8fafc',
                border: '1px solid #cbd5e1',
                color: treatment ? '#0f172a' : '#64748b',
                fontSize: '0.9rem',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="" disabled style={{ color: '#64748b' }}>
                {t('form.treatmentSelectPlaceholder')}
              </option>
              {treatments.map((tr) => (
                <option key={tr.key} value={tr.key} style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>
                  {tr.label}
                </option>
              ))}
            </select>
          </div>

          {/* Dil */}
          <div>
            <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 500, color: '#0f172a', marginBottom: '0.4rem' }}>
              {t('form.language')} <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <select
              required
              value={language}
              onChange={(e) => setLanguage(e.target.value as Locale)}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '12px', // İç elementlerin köşeleri yuvarlak
                backgroundColor: '#f8fafc',
                border: '1px solid #cbd5e1',
                color: '#0f172a',
                fontSize: '0.9rem',
                outline: 'none',
                cursor: 'pointer',
              }}
            >
              <option value="" disabled style={{ color: '#64748b' }}>
                {t('form.languageSelectPlaceholder')}
              </option>
              {LOCALES.map((loc) => {
                const label = LOCALE_LABELS[loc]?.nativeName || loc.toUpperCase();
                const flag = LOCALE_FLAGS[loc] || '';
                return (
                  <option key={loc} value={loc} style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>
                    {flag} {label}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              marginTop: '0.55rem',
              width: '100%',
              padding: '0.85rem 1.5rem',
              borderRadius: '12px', // İç elementlerin köşeleri yuvarlak
              backgroundColor: '#0f172a',
              color: '#ffffff',
              fontWeight: 500,
              fontSize: '0.95rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 4px 14px rgba(15, 23, 42, 0.2)',
            }}
          >
            {t('form.submit')}
          </button>
        </form>
      )}
    </div>
  );
}
