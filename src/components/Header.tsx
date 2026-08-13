'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { useState, useEffect } from 'react';
import { SITE_CONFIG, getWhatsAppLink } from '@/config/site';

export default function Header() {
  const t = useTranslations('common');
  const locale = useLocale();
  const whatsappUrl = getWhatsAppLink(locale);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('navigation.home'), href: '/' },
    { label: t('navigation.about'), href: '/about' },
    { label: t('navigation.treatments'), href: '/treatments' },
    { label: t('navigation.gallery'), href: '/gallery' },
    { label: t('navigation.contact'), href: '/contact' },
  ];

  return (
    <>
      {/* Top Banner Bar - In normal document flow, scrolls away naturally */}
      <div
        style={{
          width: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          position: 'relative',
          zIndex: 49,
        }}
      >
        <div
          style={{
            width: '94%',
            maxWidth: '1400px',
            margin: '0 auto',
            backgroundColor: '#D58936',
            color: '#ffffff',
            fontSize: '0.8rem',
            fontWeight: 600,
            padding: '0.45rem 1.25rem',
            borderRadius: '0 0 16px 16px',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          {/* Left: Social Media Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {/* Instagram */}
            <a
              aria-label="Instagram"
              href={SITE_CONFIG.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn social-icon-ig"
              suppressHydrationWarning
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              aria-label="YouTube"
              href={SITE_CONFIG.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn social-icon-yt"
              suppressHydrationWarning
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              aria-label="Facebook"
              href={SITE_CONFIG.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn social-icon-fb"
              suppressHydrationWarning
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              aria-label="WhatsApp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn social-icon-wa"
              suppressHydrationWarning
            >
              <Image
                src="/whatsapp-icon-mss.webp"
                alt="WhatsApp"
                width={22}
                height={22}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </a>

            {/* Email */}
            <a
              aria-label="Email"
              href={`mailto:${SITE_CONFIG.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn social-icon-mail"
              suppressHydrationWarning
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>

          {/* Center: Google Reviews Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem' }}>
            <span style={{ fontWeight: 700, color: '#ffffff' }}>{t('topBar.googleReviews')}</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
              {[1, 2, 3, 4, 5].map((starIdx) => (
                <Image
                  key={starIdx}
                  src="/neon-star.png"
                  alt="Rating Star"
                  width={14}
                  height={14}
                  style={{
                    objectFit: 'contain',
                    filter: 'drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.85))',
                  }}
                />
              ))}
            </div>
            <span style={{ fontWeight: 750, color: '#ffffff' }}>{t('topBar.rating')}</span>
            <span style={{ opacity: 0.6, color: '#ffffff' }}>·</span>
            <span style={{ color: '#ffffff' }}>{t('topBar.happyPatients')}</span>
          </div>

          {/* Right: Contact Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.78rem', fontWeight: 650 }}>
            <a
              href="mailto:info@mastersmilestudio.com"
              style={{ color: '#ffffff', textDecoration: 'none', transition: 'opacity 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              info@mastersmilestudio.com
            </a>
            <a
              href="tel:+905434568080"
              style={{ color: '#ffffff', textDecoration: 'none', transition: 'opacity 0.2s ease' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              +90 543 456 80 80
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header - Smoothly shrinks and becomes compact on scroll */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          width: '100%',
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isScrolled ? '1px solid rgba(226, 232, 240, 0.95)' : '1px solid rgba(226, 232, 240, 0.65)',
          boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.08)' : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: isScrolled ? '0.45rem 1.5rem' : '0.85rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'padding 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          {/* Logo Section */}
          <Link
            href="/"
            className="header-logo-link"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
            }}
          >
            <Image
              src="/logo-mastersmilestudio-no-bg.webp"
              alt="Master Smile Studio Logo"
              width={180}
              height={48}
              priority
              style={{
                objectFit: 'contain',
                height: isScrolled ? '34px' : '44px',
                width: 'auto',
                filter: 'brightness(0)',
                transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: isScrolled ? '0.6rem' : '0.75rem',
              transition: 'gap 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className="nav-link-item"
                style={{
                  fontSize: isScrolled ? '0.9rem' : '0.95rem',
                  fontWeight: 600,
                  color: '#334155',
                  textDecoration: 'none',
                  transition: 'font-size 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section: Language Switcher + Customer Service CTA + Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: isScrolled ? '0.65rem' : '0.85rem', transition: 'gap 0.3s ease' }}>
            <LanguageSwitcher />

            {/* 7/24 Customer Service CTA Button */}
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: isScrolled ? '0.55rem' : '0.75rem',
                backgroundColor: '#09090b',
                color: '#ffffff',
                padding: isScrolled ? '0.35rem 0.95rem' : '0.5rem 1.15rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                boxShadow: isScrolled ? '0 3px 12px rgba(0, 0, 0, 0.2)' : '0 4px 16px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '1px solid #27272a',
              }}
              className="customer-service-btn"
            >
              {/* Phone/Headset Icon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: isScrolled ? '26px' : '32px',
                  height: isScrolled ? '26px' : '32px',
                  borderRadius: '50%',
                  backgroundColor: '#18181b',
                  color: '#ffffff',
                  border: '1px solid #3f3f46',
                  flexShrink: 0,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <svg width={isScrolled ? 13 : 16} height={isScrolled ? 13 : 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>

              {/* Text Content */}
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span
                    style={{
                      width: isScrolled ? '5px' : '6px',
                      height: isScrolled ? '5px' : '6px',
                      borderRadius: '50%',
                      backgroundColor: '#22c55e',
                      boxShadow: '0 0 8px #22c55e',
                    }}
                  />
                  <span style={{ fontSize: isScrolled ? '0.62rem' : '0.68rem', fontWeight: 700, color: '#e4e4e7', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {t('customerService.badge')}
                  </span>
                </div>
                <span style={{ fontSize: isScrolled ? '0.76rem' : '0.82rem', fontWeight: 600, color: '#ffffff', lineHeight: 1.25 }}>
                  {t('customerService.title')}
                </span>
              </div>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                color: '#1e293b',
              }}
              className="mobile-toggle"
              aria-label="Toggle Navigation Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div
            style={{
              borderTop: '1px solid #f1f5f9',
              backgroundColor: '#ffffff',
              padding: '1rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
            className="mobile-menu"
          >
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: '#334155',
                  textDecoration: 'none',
                  padding: '0.5rem 0',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Responsive Media Queries */}
        <style jsx global>{`
          @media (max-width: 868px) {
            .desktop-nav {
              display: none !important;
            }
            .mobile-toggle {
              display: block !important;
            }
          }
        `}</style>
      </header>
    </>
  );
}
