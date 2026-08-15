'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';

interface CountryCode {
  code: string;
  dialCode: string;
  name: string;
  flag: string;
  placeholder: string;
  maxLength: number;
}

const COUNTRIES: CountryCode[] = [
  { code: 'tr', dialCode: '+90', name: 'Türkiye', flag: '/flags/tr.webp', placeholder: '543 352 60 40', maxLength: 14 },
  { code: 'gb', dialCode: '+44', name: 'United Kingdom', flag: '/flags/en.webp', placeholder: '7911 123456', maxLength: 12 },
  { code: 'de', dialCode: '+49', name: 'Deutschland', flag: '/flags/de.webp', placeholder: '151 23456789', maxLength: 13 },
  { code: 'es', dialCode: '+34', name: 'España', flag: '/flags/es.webp', placeholder: '612 345 678', maxLength: 11 },
  { code: 'ru', dialCode: '+7', name: 'Россия', flag: '/flags/ru.webp', placeholder: '912 345-67-89', maxLength: 13 },
  { code: 'pt', dialCode: '+351', name: 'Portugal', flag: '/flags/pt.webp', placeholder: '912 345 678', maxLength: 11 },
  { code: 'pl', dialCode: '+48', name: 'Polska', flag: '/flags/pl.webp', placeholder: '512 345 678', maxLength: 11 },
];

export default function ContactSection() {
  const t = useTranslations('contact');
  const currentLocale = useLocale();

  const getSafeText = (key: string, fallbackKey?: string, fallbackString: string = '') => {
    if (t.has(key as any)) return t(key as any);
    if (fallbackKey && t.has(fallbackKey as any)) return t(fallbackKey as any);
    return fallbackString;
  };

  const initialCountry =
    COUNTRIES.find((c) => c.code === (currentLocale === 'en' ? 'gb' : currentLocale)) || COUNTRIES[0];

  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(initialCountry);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    treatment: '',
    email: '',
    phone: '',
    message: '',
    agreePrivacy: false,
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const targetCountry =
      COUNTRIES.find((c) => c.code === (currentLocale === 'en' ? 'gb' : currentLocale)) || COUNTRIES[0];
    setSelectedCountry(targetCountry);
  }, [currentLocale]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCountryDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    // Filter out invalid characters (keep digits, spaces, hyphens)
    val = val.replace(/[^\d\s-]/g, '');

    // Strip leading '+' or country dial code if user tries to enter it
    const cleanDial = selectedCountry.dialCode.replace('+', '');
    if (val.startsWith(cleanDial)) {
      val = val.slice(cleanDial.length).trim();
    } else if (val.startsWith('00' + cleanDial)) {
      val = val.slice(('00' + cleanDial).length).trim();
    }

    // Strip leading 0 (e.g. if user types 0543)
    if (val.startsWith('0') && val.length > 1) {
      val = val.slice(1);
    }

    // Enforce country character limit
    if (val.length <= selectedCountry.maxLength) {
      setFormData((prev) => ({ ...prev, phone: val }));
    }
  };

  const handleCountrySelect = (country: CountryCode) => {
    setSelectedCountry(country);
    setCountryDropdownOpen(false);
    // Reset phone if country code changes
    setFormData((prev) => ({ ...prev, phone: '' }));
    setTimeout(() => {
      phoneInputRef.current?.focus();
    }, 50);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        treatment: '',
        email: '',
        phone: '',
        message: '',
        agreePrivacy: false,
      });
    }, 4000);
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: '#09090b',
        color: '#ffffff',
        padding: '6rem 1.5rem',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '4rem',
          alignItems: 'stretch',
        }}
      >
        {/* Left Column: Emoji Orange to White Gradient Card */}
        <div
          style={{
            background: 'linear-gradient(165deg, #FFA552 0%, #FFB875 30%, #FFE2C7 65%, #FFFFFF 100%)',
            borderRadius: '24px',
            padding: '3rem 2.5rem',
            color: '#0f172a',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 40px rgba(255, 165, 82, 0.15)',
            minHeight: '620px',
          }}
        >
          {/* Header & Contact Details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.25rem' }}>
            <h2
              style={{
                fontSize: '2.5rem',
                fontWeight: 600,
                color: '#0f172a',
                letterSpacing: '-0.03em',
                margin: 0,
              }}
            >
              {getSafeText('heading', 'cardTitle', 'Contact Us')}
            </h2>

            {/* 1. Visit us */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', margin: '0 0 0.25rem 0' }}>
                {t('visitTitle')}
              </h3>
              <p style={{ fontSize: '0.925rem', color: '#1e293b', margin: '0 0 0.35rem 0', fontWeight: 400 }}>
                {t('visitDesc')}
              </p>
              <p style={{ fontSize: '0.95rem', fontWeight: 500, color: '#0f172a', margin: 0, lineHeight: 1.45 }}>
                {t('address')}
              </p>
            </div>

            {/* 2. Chat to us */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', margin: '0 0 0.25rem 0' }}>
                {t('chatTitle')}
              </h3>
              <p style={{ fontSize: '0.925rem', color: '#1e293b', margin: '0 0 0.35rem 0', fontWeight: 400 }}>
                {t('chatDesc')}
              </p>
              <a
                href={`mailto:${t('email')}`}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  textDecoration: 'none',
                  borderBottom: '1.5px solid #0f172a',
                }}
              >
                {t('email')}
              </a>
            </div>

            {/* 3. Call us */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', margin: '0 0 0.25rem 0' }}>
                {t('callTitle')}
              </h3>
              <p style={{ fontSize: '0.925rem', color: '#1e293b', margin: '0 0 0.35rem 0', fontWeight: 400 }}>
                {t('callHours')}
              </p>
              <a
                href="tel:+905373059947"
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  textDecoration: 'none',
                }}
              >
                {t('phone')}
              </a>
            </div>
          </div>

          {/* Social Media Footer */}
          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', margin: '0 0 0.75rem 0' }}>
              {t('socialTitle')}
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/p/Mastersmilestudio-61569392717782/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                suppressHydrationWarning
                style={{ color: '#0f172a', opacity: 0.85, transition: 'opacity 0.2s' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@dentmastersmile"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                suppressHydrationWarning
                style={{ color: '#0f172a', opacity: 0.85, transition: 'opacity 0.2s' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/mastersmilestudio/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                suppressHydrationWarning
                style={{ color: '#0f172a', opacity: 0.85, transition: 'opacity 0.2s' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                suppressHydrationWarning
                style={{ color: '#0f172a', opacity: 0.85, transition: 'opacity 0.2s' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Dark Modern Form */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {submitted ? (
            <div
              style={{
                backgroundColor: 'rgba(255, 165, 82, 0.12)',
                border: '1.5px solid #FFA552',
                borderRadius: '18px',
                padding: '2.5rem',
                textAlign: 'center',
                color: '#ffffff',
              }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '0.5rem', color: '#FFA552' }}>✓</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600, margin: '0 0 0.5rem 0' }}>
                {t('successTitle')}
              </h3>
              <p style={{ fontSize: '1rem', color: '#a1a1aa', margin: 0 }}>
                {t('successDesc')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* First Name & Last Name */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#ffffff',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {t('labelFirstName')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t('placeholderFirstName')}
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: '#121214',
                      border: '1px solid #27272a',
                      borderRadius: '10px',
                      padding: '0.85rem 1rem',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                    className="contact-input"
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#ffffff',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {t('labelLastName')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t('placeholderLastName')}
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    style={{
                      width: '100%',
                      backgroundColor: '#121214',
                      border: '1px solid #27272a',
                      borderRadius: '10px',
                      padding: '0.85rem 1rem',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                    className="contact-input"
                  />
                </div>
              </div>

              {/* Treatment / Company Name */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                  }}
                >
                  {getSafeText('labelTreatment', 'treatmentLabel', 'Treatment of Interest')}
                </label>
                <input
                  type="text"
                  placeholder={getSafeText('placeholderTreatment', 'treatmentOther', 'e.g. Dental Implants, Veneers')}
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: '#121214',
                    border: '1px solid #27272a',
                    borderRadius: '10px',
                    padding: '0.85rem 1rem',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                  className="contact-input"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                  }}
                >
                  {t('labelEmail')}
                </label>
                <input
                  type="email"
                  required
                  placeholder={t('placeholderEmail')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: '#121214',
                    border: '1px solid #27272a',
                    borderRadius: '10px',
                    padding: '0.85rem 1rem',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                  }}
                  className="contact-input"
                />
              </div>

              {/* Phone Number with Interactive Flag Selector & Length Limiter */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                  }}
                >
                  {t('labelPhone')}
                </label>
                <div
                  ref={dropdownRef}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#121214',
                    border: '1px solid #27272a',
                    borderRadius: '10px',
                  }}
                  className="contact-input-wrapper"
                >
                  {/* Clickable Flag Button */}
                  <button
                    type="button"
                    onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                    style={{
                      padding: '0.85rem 0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.45rem',
                      border: 'none',
                      borderRight: '1px solid #27272a',
                      backgroundColor: '#18181b',
                      fontSize: '0.9rem',
                      color: '#ffffff',
                      cursor: 'pointer',
                      borderTopLeftRadius: '9px',
                      borderBottomLeftRadius: '9px',
                      outline: 'none',
                      transition: 'background-color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#27272a')}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#18181b')}
                  >
                    <div
                      style={{
                        width: '20px',
                        height: '14px',
                        position: 'relative',
                        borderRadius: '2px',
                        overflow: 'hidden',
                        flexShrink: 0,
                      }}
                    >
                      <Image
                        src={selectedCountry.flag}
                        alt={selectedCountry.name}
                        fill
                        unoptimized
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#e4e4e7' }}>
                      {selectedCountry.dialCode}
                    </span>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        color: '#a1a1aa',
                        transform: countryDropdownOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s',
                      }}
                    >
                      ▾
                    </span>
                  </button>

                  {/* Dropdown Floating Menu */}
                  {countryDropdownOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 0.4rem)',
                        left: 0,
                        backgroundColor: '#18181b',
                        border: '1px solid #27272a',
                        borderRadius: '16px',
                        padding: '0.45rem',
                        zIndex: 100,
                        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
                        minWidth: '225px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.2rem',
                      }}
                    >
                      {COUNTRIES.map((c) => {
                        const isSelected = c.code === selectedCountry.code;
                        return (
                          <button
                            key={c.code}
                            type="button"
                            onClick={() => handleCountrySelect(c)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.75rem',
                              padding: '0.55rem 0.75rem',
                              borderRadius: '8px',
                              border: 'none',
                              backgroundColor: isSelected ? '#27272a' : 'transparent',
                              color: isSelected ? '#FFA552' : '#ffffff',
                              cursor: 'pointer',
                              fontSize: '0.88rem',
                              textAlign: 'left',
                              width: '100%',
                              transition: 'background-color 0.15s',
                            }}
                            onMouseEnter={(e) => {
                              if (!isSelected) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                            }}
                            onMouseLeave={(e) => {
                              if (!isSelected) e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                          >
                            <div
                              style={{
                                width: '20px',
                                height: '14px',
                                position: 'relative',
                                borderRadius: '2px',
                                overflow: 'hidden',
                                flexShrink: 0,
                              }}
                            >
                              <Image
                                src={c.flag}
                                alt={c.name}
                                fill
                                unoptimized
                                style={{ objectFit: 'cover' }}
                              />
                            </div>
                            <span style={{ flex: 1, whiteSpace: 'nowrap' }}>{c.name}</span>
                            <span style={{ color: '#a1a1aa', fontSize: '0.8rem', fontWeight: 500 }}>{c.dialCode}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  <input
                    ref={phoneInputRef}
                    type="tel"
                    required
                    maxLength={selectedCountry.maxLength}
                    placeholder={selectedCountry.placeholder}
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    style={{
                      flex: 1,
                      backgroundColor: 'transparent',
                      border: 'none',
                      padding: '0.85rem 1rem',
                      color: '#ffffff',
                      fontSize: '0.95rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                  }}
                >
                  {t('labelMessage')}
                </label>
                <textarea
                  rows={4}
                  placeholder={t('placeholderMessage')}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    backgroundColor: '#121214',
                    border: '1px solid #27272a',
                    borderRadius: '10px',
                    padding: '0.85rem 1rem',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                  className="contact-input"
                />
              </div>

              {/* Checkbox Privacy Policy */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginTop: '0.25rem' }}>
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  checked={formData.agreePrivacy}
                  onChange={(e) => setFormData({ ...formData, agreePrivacy: e.target.checked })}
                  style={{
                    width: '18px',
                    height: '18px',
                    accentColor: '#FFA552',
                    cursor: 'pointer',
                    marginTop: '0.2rem',
                  }}
                />
                <label htmlFor="privacy" style={{ fontSize: '0.85rem', color: '#a1a1aa', lineHeight: 1.45, cursor: 'pointer' }}>
                  {t('privacyConsent')}{' '}
                  <a href="#privacy" style={{ color: '#38bdf8', textDecoration: 'underline' }}>
                    {t('privacyLink')}
                  </a>
                </label>
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#FFA552',
                  color: '#0f172a',
                  padding: '1rem',
                  borderRadius: '12px',
                  fontSize: '1rem',
                  fontWeight: 600,
                  border: 'none',
                  outline: 'none',
                  cursor: 'pointer',
                  marginTop: '0.75rem',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 16px rgba(255, 165, 82, 0.25)',
                }}
                className="send-msg-btn"
              >
                {t('btnSend')}
              </button>
            </form>
          )}
        </div>
      </div>

      <style jsx global>{`
        .contact-input:focus, .contact-input-wrapper:focus-within {
          border-color: #FFA552 !important;
          box-shadow: 0 0 0 2px rgba(255, 165, 82, 0.2) !important;
        }
        .send-msg-btn:hover {
          background-color: #ff9838 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 165, 82, 0.35) !important;
        }
      `}</style>
    </section>
  );
}
