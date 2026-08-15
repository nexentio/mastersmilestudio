'use client';

import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from './LanguageSwitcher';
import { useState, useEffect } from 'react';
import { SITE_CONFIG, getWhatsAppLink } from '@/config/site';

const TREATMENTS_MEGA_MENU = [
  {
    id: 'implants',
    title: { tr: 'İmplant Tedavisi', en: 'Dental Implants' },
    href: '/treatments#implants',
    subitems: [
      { tr: 'Tüm Ağız İmplant (Full Mouth)', en: 'Full Mouth Implants', href: '/treatments#full-mouth' },
      { tr: 'All-on-4 İmplant Tedavisi', en: 'All-on-4 Implants', href: '/treatments#all-on-4' },
      { tr: 'All-on-6 İmplant Tedavisi', en: 'All-on-6 Implants', href: '/treatments#all-on-6' },
      { tr: 'Aynı Gün İmplant (Immediate)', en: 'Immediate Implant Treatment', href: '/treatments#immediate' },
      { tr: 'Zigoma & Pterigoid İmplant', en: 'Zygomatic & Pterygoid Implants', href: '/treatments#zygomatic' },
      { tr: 'Zirkonyum İmplant', en: 'Zirconium Implants', href: '/treatments#zirconium-implants' },
      { tr: 'İmplant Destekli Protez', en: 'Implant Supported Dentures', href: '/treatments#implant-dentures' },
      { tr: 'Sinüs Lift & Kemik Grefti', en: 'Sinus Lifting & Bone Graft', href: '/treatments#sinus-lift' },
    ],
  },
  {
    id: 'crowns',
    title: { tr: 'Zirkonyum & Kaplama', en: 'Dental Crowns' },
    href: '/treatments#crowns',
    subitems: [
      { tr: 'Zirkonyum Kron Kaplama', en: 'Zirconium Crowns', href: '/treatments#zirconium-crowns' },
      { tr: 'Metal Porselen Kaplama (PFM)', en: 'Metal Porcelain Crowns (PFM)', href: '/treatments#pfm-crowns' },
      { tr: 'E-max Full Seramik Kaplama', en: 'E-max Crowns', href: '/treatments#emax-crowns' },
      { tr: 'Tam Seramik Kron', en: 'Full Ceramic Crowns', href: '/treatments#full-ceramic' },
    ],
  },
  {
    id: 'veneers',
    title: { tr: 'Lamine Veneer', en: 'Dental Veneers' },
    href: '/treatments#veneers',
    subitems: [
      { tr: 'Porselen Lamine Veneer', en: 'Porcelain Veneers', href: '/treatments#porcelain-veneers' },
      { tr: 'E-max Lamine Veneer', en: 'E-max Veneers', href: '/treatments#emax-veneers' },
      { tr: 'Zirkonyum Lamine', en: 'Zirconium Veneers', href: '/treatments#zirconium-veneers' },
      { tr: 'Kompozit Lamine (Bonding)', en: 'Composite Veneers', href: '/treatments#composite-veneers' },
      { tr: 'Lumineers İnce Lamine', en: 'Lumineers', href: '/treatments#lumineers' },
      { tr: 'Empress Estetik Lamine', en: 'Empress Veneers', href: '/treatments#empress-veneers' },
    ],
  },
  {
    id: 'bridge',
    title: { tr: 'Diş Köprüsü', en: 'Dental Bridge' },
    href: '/treatments#bridge',
    subitems: [
      { tr: 'Zirkonyum Diş Köprüsü', en: 'Zirconium Dental Bridge', href: '/treatments#zirconium-bridge' },
      { tr: 'Porselen Diş Köprüsü', en: 'Porcelain Dental Bridge', href: '/treatments#porcelain-bridge' },
      { tr: 'İmplant Destekli Köprü', en: 'Implant Supported Bridge', href: '/treatments#implant-bridge' },
    ],
  },
  {
    id: 'dentures',
    title: { tr: 'Protez Diş', en: 'Dentures' },
    href: '/treatments#dentures',
    subitems: [
      { tr: 'Hareketli Protez Diş', en: 'Removable Dentures', href: '/treatments#removable-dentures' },
      { tr: 'Çıt Çıtlı Hassas Tutuculu Protez', en: 'Precision Attachment Dentures', href: '/treatments#precision-dentures' },
      { tr: 'Sabit Protez', en: 'Fixed Dentures', href: '/treatments#fixed-dentures' },
    ],
  },
  {
    id: 'cosmetic',
    title: { tr: 'Estetik Diş Hekimliği', en: 'Cosmetic Dentistry' },
    href: '/treatments#cosmetic',
    subitems: [
      { tr: 'Hollywood Smile Gülüş Tasarımı', en: 'Hollywood Smile Makeover', href: '/treatments#hollywood-smile' },
      { tr: 'Lazerle Diş Beyazlatma (Bleaching)', en: 'Teeth Whitening (Bleaching)', href: '/treatments#whitening' },
      { tr: 'Diş Eti Estetiği (Gingivektomi)', en: 'Gum Aesthetics (Gingivectomy)', href: '/treatments#gum-aesthetics' },
      { tr: '3D Dijital Gülüş Simülasyonu', en: 'Digital Smile Simulation 3D', href: '/treatments#digital-smile' },
    ],
  },
  {
    id: 'general',
    title: { tr: 'Genel Diş Hekimliği', en: 'General Dentistry' },
    href: '/treatments#general',
    subitems: [
      { tr: 'Kanal Tedavisi (Endodonti)', en: 'Root Canal Treatment', href: '/treatments#root-canal' },
      { tr: 'Estetik Kompozit Dolgu', en: 'Composite Filling', href: '/treatments#composite-filling' },
      { tr: 'Diş Taşı Temizliği & Detertraj', en: 'Dental Cleaning & Scaling', href: '/treatments#scaling' },
      { tr: 'Gömülü 20\'lik Diş Çekimi', en: 'Wisdom Tooth Extraction', href: '/treatments#wisdom-tooth' },
    ],
  },
];

const EXPLORE_MEGA_MENU = [
  {
    id: 'prices',
    title: { tr: 'Fiyatlar & Paketler', en: 'Prices' },
    href: '/treatments#pricing',
    subitems: [
      { tr: 'Fiyat Listesi', en: 'Price List', href: '/treatments#pricing' },
      { tr: 'VIP Diş Turizmi Paketleri', en: 'Packages', href: '/#contact' },
    ],
  },
  {
    id: 'gallery',
    title: { tr: 'Galeri', en: 'Gallery' },
    href: '/gallery',
    subitems: [
      { tr: 'Fotoğraf Galerisi', en: 'Photo Gallery', href: '/gallery' },
      { tr: 'Video Hasta Hikayeleri', en: 'Video Stories', href: '/#real-patients' },
    ],
  },
  {
    id: 'blog',
    title: { tr: 'Blog', en: 'Blog' },
    href: '/#blog',
    subitems: [
      { tr: 'Diş Sağlığı Makaleleri', en: 'Dental Health Articles', href: '/#blog' },
      { tr: 'Diş Turizmi Rehberi', en: 'Dental Tourism Guide', href: '/#blog' },
    ],
  },
  {
    id: 'reviews',
    title: { tr: 'Hasta Yorumları', en: 'Reviews' },
    href: '/#patients',
    subitems: [
      { tr: 'Google Yorumları (4.9 ★)', en: 'Google Reviews (4.9 ★)', href: '/#patients' },
      { tr: 'Trustpilot Yorumları (5.0 ★)', en: 'Trustpilot Reviews (5.0 ★)', href: '/#patients' },
      { tr: 'Hasta Deneyimleri', en: 'Patient Stories', href: '/#real-patients' },
    ],
  },
  {
    id: 'before-after',
    title: { tr: 'Öncesi / Sonrası', en: 'Before/After' },
    href: '/#transformations',
    subitems: [
      { tr: 'Hollywood Smile Vakaları', en: 'Hollywood Smile Cases', href: '/#transformations' },
      { tr: 'İmplant Dönüşümleri', en: 'Implant Transformations', href: '/#transformations' },
      { tr: 'Lamine Veneer Dönüşümleri', en: 'Veneer Transformations', href: '/#transformations' },
    ],
  },
  {
    id: 'faq',
    title: { tr: 'Sıkça Sorulan Sorular (SSS)', en: 'Frequently Asked Questions (FAQ)' },
    href: '/#faq',
    subitems: [
      { tr: 'Tedavi Süreci SSS', en: 'Treatment Process FAQ', href: '/#faq' },
      { tr: 'Konaklama ve VIP Transfer SSS', en: 'Travel & VIP Stay FAQ', href: '/#faq' },
      { tr: 'Uluslararası Garanti SSS', en: 'Guarantee FAQ', href: '/#faq' },
    ],
  },
];

export default function Header() {
  const t = useTranslations('common');
  const locale = useLocale();
  const whatsappUrl = getWhatsAppLink(locale);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'treatments' | 'explore' | null>(null);
  const [activeTreatmentCat, setActiveTreatmentCat] = useState<string>('implants');
  const [activeExploreCat, setActiveExploreCat] = useState<string>('prices');

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
    { label: t('navigation.treatments'), href: '/treatments', menuType: 'treatments' },
    { label: t('navigation.explore'), href: '/gallery', menuType: 'explore' },
    { label: t('navigation.about'), href: '/about' },
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

          {/* Desktop Navigation Links with Treatments Mega Menu */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: isScrolled ? '0.6rem' : '0.75rem',
              transition: 'gap 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link, idx) => {
              const isTreatments = link.menuType === 'treatments';
              const isExplore = link.menuType === 'explore';

              if (isTreatments) {
                const isOpen = activeDropdown === 'treatments';
                return (
                  <div
                    key={idx}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setActiveDropdown('treatments')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className="nav-link-item"
                      style={{
                        fontSize: isScrolled ? '0.9rem' : '0.95rem',
                        fontWeight: 600,
                        color: isOpen ? '#D58936' : '#334155',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <span>{link.label}</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                        }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </Link>

                    {/* Treatments Mega Menu Dropdown */}
                    {isOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          paddingTop: '0.85rem',
                          zIndex: 100,
                        }}
                      >
                        <div
                          style={{
                            width: '680px',
                            backgroundColor: 'rgba(24, 24, 27, 0.96)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            borderRadius: '18px',
                            border: '1px solid rgba(213, 137, 54, 0.4)',
                            boxShadow: '0 24px 50px rgba(0, 0, 0, 0.45)',
                            padding: '0.85rem',
                            display: 'grid',
                            gridTemplateColumns: '240px 1fr',
                            gap: '0.85rem',
                          }}
                        >
                          {/* Left Column: Level 1 Main Categories */}
                          <div
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.04)',
                              borderRadius: '12px',
                              padding: '0.5rem',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '0.35rem',
                            }}
                          >
                            {TREATMENTS_MEGA_MENU.map((cat) => {
                              const isActive = activeTreatmentCat === cat.id;
                              const label = locale === 'tr' ? cat.title.tr : cat.title.en;
                              return (
                                <div
                                  key={cat.id}
                                  onMouseEnter={() => setActiveTreatmentCat(cat.id)}
                                  onClick={() => setActiveTreatmentCat(cat.id)}
                                  style={{
                                    padding: '0.65rem 0.95rem',
                                    borderRadius: '8px',
                                    fontSize: '0.88rem',
                                    fontWeight: isActive ? 700 : 500,
                                    color: isActive ? '#ffffff' : '#cbd5e1',
                                    backgroundColor: isActive ? '#D58936' : 'transparent',
                                    boxShadow: isActive ? '0 4px 14px rgba(213, 137, 54, 0.35)' : 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                  }}
                                >
                                  <span>{label}</span>
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    style={{ opacity: isActive ? 1 : 0.4, transition: 'opacity 0.2s ease' }}
                                  >
                                    <path d="M9 18l6-6-6-6" />
                                  </svg>
                                </div>
                              );
                            })}
                          </div>

                          {/* Right Column: Level 2 Dynamic Sub-treatments */}
                          <div
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.02)',
                              borderRadius: '12px',
                              padding: '0.65rem 0.85rem',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '0.2rem',
                              maxHeight: '380px',
                              overflowY: 'auto',
                            }}
                          >
                            {(() => {
                              const selectedCat =
                                TREATMENTS_MEGA_MENU.find((c) => c.id === activeTreatmentCat) || TREATMENTS_MEGA_MENU[0];
                              return selectedCat.subitems.map((sub, sIdx) => {
                                const subLabel = locale === 'tr' ? sub.tr : sub.en;
                                return (
                                  <Link
                                    key={sIdx}
                                    href={sub.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="mega-subitem-link"
                                    style={{
                                      padding: '0.65rem 0.85rem',
                                      borderRadius: '6px',
                                      fontSize: '0.86rem',
                                      fontWeight: 500,
                                      color: '#f8fafc',
                                      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      textDecoration: 'none',
                                      transition: 'all 0.2s ease',
                                    }}
                                  >
                                    <span>{subLabel}</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D58936" strokeWidth="2.2">
                                      <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                  </Link>
                                );
                              });
                            })()}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              if (isExplore) {
                const isOpen = activeDropdown === 'explore';
                return (
                  <div
                    key={idx}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setActiveDropdown('explore')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className="nav-link-item"
                      style={{
                        fontSize: isScrolled ? '0.9rem' : '0.95rem',
                        fontWeight: 600,
                        color: isOpen ? '#D58936' : '#334155',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <span>{link.label}</span>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease',
                        }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </Link>

                    {/* Explore Mega Menu Dropdown */}
                    {isOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          paddingTop: '0.85rem',
                          zIndex: 100,
                        }}
                      >
                        <div
                          style={{
                            width: '600px',
                            backgroundColor: 'rgba(24, 24, 27, 0.96)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            borderRadius: '18px',
                            border: '1px solid rgba(213, 137, 54, 0.4)',
                            boxShadow: '0 24px 50px rgba(0, 0, 0, 0.45)',
                            padding: '0.85rem',
                            display: 'grid',
                            gridTemplateColumns: '230px 1fr',
                            gap: '0.85rem',
                          }}
                        >
                          {/* Left Column: Level 1 Explore Categories */}
                          <div
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.04)',
                              borderRadius: '12px',
                              padding: '0.5rem',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '0.35rem',
                            }}
                          >
                            {EXPLORE_MEGA_MENU.map((cat) => {
                              const isActive = activeExploreCat === cat.id;
                              const label = locale === 'tr' ? cat.title.tr : cat.title.en;
                              return (
                                <div
                                  key={cat.id}
                                  onMouseEnter={() => setActiveExploreCat(cat.id)}
                                  onClick={() => setActiveExploreCat(cat.id)}
                                  style={{
                                    padding: '0.65rem 0.95rem',
                                    borderRadius: '8px',
                                    fontSize: '0.88rem',
                                    fontWeight: isActive ? 700 : 500,
                                    color: isActive ? '#ffffff' : '#cbd5e1',
                                    backgroundColor: isActive ? '#D58936' : 'transparent',
                                    boxShadow: isActive ? '0 4px 14px rgba(213, 137, 54, 0.35)' : 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                  }}
                                >
                                  <span>{label}</span>
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    style={{ opacity: isActive ? 1 : 0.4, transition: 'opacity 0.2s ease' }}
                                  >
                                    <path d="M9 18l6-6-6-6" />
                                  </svg>
                                </div>
                              );
                            })}
                          </div>

                          {/* Right Column: Level 2 Explore Dynamic Sub-items */}
                          <div
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.02)',
                              borderRadius: '12px',
                              padding: '0.65rem 0.85rem',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '0.2rem',
                              maxHeight: '380px',
                              overflowY: 'auto',
                            }}
                          >
                            {(() => {
                              const selectedCat =
                                EXPLORE_MEGA_MENU.find((c) => c.id === activeExploreCat) || EXPLORE_MEGA_MENU[0];
                              return selectedCat.subitems.map((sub, sIdx) => {
                                const subLabel = locale === 'tr' ? sub.tr : sub.en;
                                return (
                                  <Link
                                    key={sIdx}
                                    href={sub.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="mega-subitem-link"
                                    style={{
                                      padding: '0.65rem 0.85rem',
                                      borderRadius: '6px',
                                      fontSize: '0.86rem',
                                      fontWeight: 500,
                                      color: '#f8fafc',
                                      borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'space-between',
                                      textDecoration: 'none',
                                      transition: 'all 0.2s ease',
                                    }}
                                  >
                                    <span>{subLabel}</span>
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D58936" strokeWidth="2.2">
                                      <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                  </Link>
                                );
                              });
                            })()}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
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
              );
            })}
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

      {/* Pinned Side Tab Badge: Start My Journey! */}
      <a
        href="#contact"
        className="start-journey-side-tab"
        style={{
          position: 'fixed',
          left: 0,
          top: '38%',
          zIndex: 45,
          backgroundColor: '#D58936',
          color: '#ffffff',
          padding: '0.75rem 0.85rem 0.75rem 0.65rem',
          borderRadius: '0 12px 12px 0',
          boxShadow: '4px 0 20px rgba(0, 0, 0, 0.3)',
          fontWeight: 750,
          fontSize: '0.78rem',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          writingMode: 'vertical-lr',
          transform: 'rotate(180deg)',
          cursor: 'pointer',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          transition: 'all 0.3s ease',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          borderLeft: 'none',
        }}
      >
        <span>{locale === 'tr' ? 'GÜLÜŞ YOLCULUĞUMU BAŞLAT!' : 'START MY JOURNEY!'}</span>
      </a>
    </>
  );
}
