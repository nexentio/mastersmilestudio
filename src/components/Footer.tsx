'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { getWhatsAppLink } from '@/config/site';
import styles from './Footer.module.css';

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
    { label: t('legalClinic'), href: '/contact' },
    { label: t('legalSupport'), href: '/contact' },
    { label: t('legalKvkk'), href: '/privacy-policy#patient-rights' },
    { label: t('legalPrivacy'), href: '/privacy-policy' },
    { label: t('legalCookies'), href: '/privacy-policy#cookies-tracking' },
    { label: t('legalTerms'), href: '/terms-of-service' },
  ];

  const renderLinkItem = (item: { label: string; href: string; isExternal?: boolean }, idx: number) => {
    if (item.isExternal || item.href.startsWith('http')) {
      return (
        <li key={idx}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navLink}
          >
            {item.label}
          </a>
        </li>
      );
    }

    return (
      <li key={idx}>
        <Link href={item.href} className={styles.navLink}>
          {item.label}
        </Link>
      </li>
    );
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Grand Brand Signature (Posterama Text Black) */}
        <div className={styles.brandSignatureWrap}>
          <div className={styles.brandMaster}>MASTER</div>
          <div className={styles.brandSubtitle}>SMILE STUDIO</div>
        </div>

        {/* Top 4 Navigation Columns */}
        <div className={styles.navGrid}>
          {/* Column 1: Treatments */}
          <div>
            <div className={styles.colTitle}>{t('colTreatmentsTitle')}</div>
            <ul className={styles.navList}>
              {treatmentsList.map(renderLinkItem)}
            </ul>
          </div>

          {/* Column 2: Support */}
          <div>
            <div className={styles.colTitle}>{t('colSupportTitle')}</div>
            <ul className={styles.navList}>
              {supportList.map(renderLinkItem)}
            </ul>
          </div>

          {/* Column 3: Corporate */}
          <div>
            <div className={styles.colTitle}>{t('colCorporateTitle')}</div>
            <ul className={styles.navList}>
              {corporateList.map(renderLinkItem)}
            </ul>
          </div>

          {/* Column 4: Legal & Contact */}
          <div>
            <div className={styles.colTitle}>{t('colLegalTitle')}</div>
            <ul className={styles.navList}>
              {legalList.map(renderLinkItem)}
            </ul>
          </div>
        </div>

        {/* Subtle Full-Width Divider Line */}
        <div className={styles.divider} />

        {/* Middle Newsletter Subscription Row */}
        <div className={styles.newsletterRow}>
          {/* Left Text */}
          <div>
            <h4 className={styles.newsletterTitle}>{t('newsletterTitle')}</h4>
            <p className={styles.newsletterDesc}>{t('newsletterDesc')}</p>
          </div>

          {/* Right Newsletter Form */}
          <div className={styles.newsletterFormWrap}>
            <form onSubmit={handleSubmit} className={styles.newsletterForm}>
              <input
                type="email"
                required
                placeholder={t('newsletterPlaceholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
              />
              <button type="submit" className={styles.submitBtn}>
                {submitted ? t('newsletterSuccess') : t('newsletterBtn')}
              </button>
            </form>

            {/* Checkbox Agreement */}
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className={styles.checkboxInput}
              />
              <span>{t('newsletterConsent')}</span>
            </label>
          </div>
        </div>

        {/* Bottom Copyright, Health Türkiye Accreditation & Legal Links */}
        <div className={styles.bottomRow}>
          <div className={styles.copyrightText}>{t('copyright')}</div>

          {/* Standalone HealthTürkiye Logo (No background box) */}
          <Image
            src="/healthturkiye-logo.svg"
            alt="Health Türkiye - Türkiye Sağlık Turizmi"
            width={140}
            height={44}
            className={styles.healthTurkiyeLogo}
          />

          <div className={styles.legalLinks}>
            <Link href="/privacy-policy" className={styles.legalLink}>
              {t('privacyPolicy')}
            </Link>
            <Link href="/terms-of-service" className={styles.legalLink}>
              {t('termsOfUse')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
