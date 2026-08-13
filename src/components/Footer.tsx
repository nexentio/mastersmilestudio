'use client';

import React, { useState } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { getWhatsAppLink } from '@/config/site';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail('');
    }
  };

  const treatmentsList = [
    { label: t('treatmentZirconium'), href: '/treatments' },
    { label: t('treatmentEmax'), href: '/treatments' },
    { label: t('treatmentImplant'), href: '/treatments' },
    { label: t('treatmentHollywood'), href: '/treatments' },
    { label: t('treatmentWhitening'), href: '/treatments' },
    { label: t('treatmentSurgery'), href: '/treatments' },
  ];

  const supportList = [
    { label: t('supportProcess'), href: '/#treatment-process' },
    { label: t('supportTourism'), href: '/#faq' },
    { label: t('supportReviews'), href: '/#patients' },
    { label: t('supportFaq'), href: '/#faq' },
    { label: t('supportContact'), href: '/contact' },
    { label: t('supportWhatsapp'), href: getWhatsAppLink(locale), isExternal: true },
  ];

  const corporateList = [
    { label: t('corpAbout'), href: '/about' },
    { label: t('corpTeam'), href: '/about' },
    { label: t('corpRooms'), href: '/about' },
    { label: t('corpTech'), href: '/about' },
    { label: t('corpCertificates'), href: '/about' },
    { label: t('corpBlog'), href: '/#blog' },
  ];

  const legalList = [
    { label: t('legalClinic'), href: '/#contact' },
    { label: t('legalSupport'), href: '/#contact' },
    { label: t('legalKvkk'), href: '/#contact' },
    { label: t('legalPrivacy'), href: '/#privacy' },
    { label: t('legalCookies'), href: '/#cookies' },
    { label: t('legalTerms'), href: '/#terms' },
  ];

  const renderLinkItem = (item: { label: string; href: string; isExternal?: boolean }, idx: number) => {
    if (item.isExternal || item.href.startsWith('http')) {
      return (
        <li key={idx}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: '0.95rem',
              color: '#f8fafc',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
              fontWeight: 400,
            }}
            className="footer-nav-link"
          >
            {item.label}
          </a>
        </li>
      );
    }

    return (
      <li key={idx}>
        <Link
          href={item.href}
          style={{
            fontSize: '0.95rem',
            color: '#f8fafc',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
            fontWeight: 400,
          }}
          className="footer-nav-link"
        >
          {item.label}
        </Link>
      </li>
    );
  };

  return (
    <footer
      style={{
        position: 'relative',
        backgroundColor: '#08080a',
        backgroundImage: `
          radial-gradient(ellipse 95% 65% at 75% 100%, rgba(255, 165, 82, 0.55) 0%, rgba(255, 145, 36, 0.32) 35%, rgba(217, 119, 6, 0.16) 60%, rgba(8, 8, 10, 0.05) 85%, transparent 100%),
          radial-gradient(ellipse 55% 75% at 100% 70%, rgba(255, 165, 82, 0.45) 0%, rgba(217, 119, 6, 0.22) 35%, rgba(146, 64, 14, 0.1) 65%, transparent 85%),
          radial-gradient(ellipse 45% 45% at 50% 0%, rgba(255, 165, 82, 0.07) 0%, transparent 60%)
        `,
        color: '#ffffff',
        padding: '5.5rem 1.5rem 3.5rem 1.5rem',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Top 4 Navigation Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            marginBottom: '4.5rem',
          }}
        >
          {/* Column 1: // Treatments */}
          <div>
            <div
              style={{
                fontSize: '0.85rem',
                fontFamily: 'monospace, -apple-system, sans-serif',
                color: '#94a3b8',
                letterSpacing: '0.04em',
                marginBottom: '1.75rem',
              }}
            >
              {t('colTreatmentsTitle')}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {treatmentsList.map(renderLinkItem)}
            </ul>
          </div>

          {/* Column 2: // Support */}
          <div>
            <div
              style={{
                fontSize: '0.85rem',
                fontFamily: 'monospace, -apple-system, sans-serif',
                color: '#94a3b8',
                letterSpacing: '0.04em',
                marginBottom: '1.75rem',
              }}
            >
              {t('colSupportTitle')}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {supportList.map(renderLinkItem)}
            </ul>
          </div>

          {/* Column 3: // Corporate */}
          <div>
            <div
              style={{
                fontSize: '0.85rem',
                fontFamily: 'monospace, -apple-system, sans-serif',
                color: '#94a3b8',
                letterSpacing: '0.04em',
                marginBottom: '1.75rem',
              }}
            >
              {t('colCorporateTitle')}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {corporateList.map(renderLinkItem)}
            </ul>
          </div>

          {/* Column 4: // Legal & Contact */}
          <div>
            <div
              style={{
                fontSize: '0.85rem',
                fontFamily: 'monospace, -apple-system, sans-serif',
                color: '#94a3b8',
                letterSpacing: '0.04em',
                marginBottom: '1.75rem',
              }}
            >
              {t('colLegalTitle')}
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {legalList.map(renderLinkItem)}
            </ul>
          </div>
        </div>

        {/* Subtle Full-Width Divider Line */}
        <div
          style={{
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            marginBottom: '3.5rem',
          }}
        />

        {/* Middle Newsletter Subscription Row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '4.5rem',
          }}
        >
          {/* Left Text */}
          <div>
            <h4
              style={{
                fontSize: '1.25rem',
                fontWeight: 500,
                color: '#ffffff',
                margin: '0 0 0.5rem 0',
                letterSpacing: '-0.02em',
              }}
            >
              {t('newsletterTitle')}
            </h4>
            <p
              style={{
                fontSize: '0.9rem',
                color: '#94a3b8',
                lineHeight: 1.6,
                maxWidth: '480px',
                margin: 0,
              }}
            >
              {t('newsletterDesc')}
            </p>
          </div>

          {/* Right Newsletter Form */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifySelf: 'end' }}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                width: '100%',
                maxWidth: '450px',
              }}
            >
              <input
                type="email"
                required
                placeholder={t('newsletterPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  flex: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  borderRadius: '10px',
                  padding: '0.8rem 1.15rem',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  backdropFilter: 'blur(8px)',
                  transition: 'border-color 0.2s ease',
                }}
                className="footer-email-input"
              />
              <button
                type="submit"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#09090b',
                  border: 'none',
                  borderRadius: '10px',
                  padding: '0.8rem 1.85rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: '0 4px 14px rgba(255, 255, 255, 0.15)',
                  whiteSpace: 'nowrap',
                }}
                className="footer-join-btn"
              >
                {submitted ? t('newsletterSuccess') : t('newsletterBtn')}
              </button>
            </form>

            {/* Checkbox Agreement */}
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginTop: '0.85rem',
                fontSize: '0.825rem',
                color: '#94a3b8',
                cursor: 'pointer',
                userSelect: 'none',
              }}
            >
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                style={{
                  width: '16px',
                  height: '16px',
                  accentColor: '#FFA552',
                  cursor: 'pointer',
                  borderRadius: '4px',
                }}
              />
              <span>{t('newsletterConsent')}</span>
            </label>
          </div>
        </div>

        {/* Bottom Copyright & Legal Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            fontSize: '0.85rem',
            color: '#64748b',
          }}
        >
          <div>
            {t('copyright')}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link
              href="/#privacy"
              style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s ease' }}
              className="footer-nav-link"
            >
              {t('privacyPolicy')}
            </Link>
            <Link
              href="/#terms"
              style={{ color: '#94a3b8', textDecoration: 'none', transition: 'color 0.2s ease' }}
              className="footer-nav-link"
            >
              {t('termsOfUse')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
