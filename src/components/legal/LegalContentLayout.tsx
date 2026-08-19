'use client';

import React, { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import { getWhatsAppLink, siteConfig } from '@/config/site';
import styles from './LegalContentLayout.module.css';
import { LegalDocumentData } from '@/data/privacy-policy-data';

interface LegalContentLayoutProps {
  data: LegalDocumentData;
}

export default function LegalContentLayout({ data }: LegalContentLayoutProps) {
  const locale = useLocale();
  const [activeSection, setActiveSection] = useState<string>(
    data.sections[0]?.id || ''
  );

  const introTitle = data.introTitle[locale] || data.introTitle.en;
  const introParagraphs = data.introText[locale] || data.introText.en;
  const tocTitle = data.tableOfContentsTitle[locale] || data.tableOfContentsTitle.en;
  const quickContactTitle = data.quickContactTitle[locale] || data.quickContactTitle.en;
  const quickContactDesc = data.quickContactDesc[locale] || data.quickContactDesc.en;
  const quickContactBtn = data.quickContactBtn[locale] || data.quickContactBtn.en;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (const section of data.sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data.sections]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.layoutGrid}>
        {/* ==================== LEFT STICKY INDEX (CLEAN TEXT) ==================== */}
        <aside className={styles.sidebarSticky} aria-label="Table of Contents">
          <div>
            <div className={styles.tocLabel}>// {tocTitle}</div>

            <nav className={styles.tocNav} aria-label="Document Sections">
              {data.sections.map((section, index) => {
                const sectionTitle = section.title[locale] || section.title.en;
                const isActive = activeSection === section.id;
                const formattedIndex = String(index + 1).padStart(2, '0');

                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`${styles.tocLink} ${isActive ? styles.tocLinkActive : ''}`}
                  >
                    <span className={styles.tocIndex}>{formattedIndex}.</span>
                    <span>{sectionTitle.replace(/^\d+\.\s*/, '')}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          <div className={styles.sidebarHelp}>
            <div className={styles.sidebarHelpTitle}>{quickContactTitle}</div>
            <p style={{ margin: 0 }}>{quickContactDesc}</p>
            <a
              href={getWhatsAppLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.sidebarHelpLink}
            >
              {quickContactBtn} →
            </a>
          </div>
        </aside>

        {/* ==================== RIGHT MAIN ARTICLE (NATURAL FLOW) ==================== */}
        <article className={styles.mainArticle}>
          {/* Lead Intro Block */}
          <div className={styles.leadSection}>
            <h2 className={styles.leadHeading}>{introTitle}</h2>
            {introParagraphs.map((paragraph, idx) => (
              <p key={idx} className={styles.leadParagraph}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Flowing Section Blocks */}
          {data.sections.map((section, index) => {
            const sectionTitle = section.title[locale] || section.title.en;
            const paragraphs = section.content[locale] || section.content.en;
            const highlights = section.highlights ? (section.highlights[locale] || section.highlights.en) : null;
            const formattedIndex = String(index + 1).padStart(2, '0');

            return (
              <section
                key={section.id}
                id={section.id}
                className={styles.sectionBlock}
                aria-labelledby={`heading-${section.id}`}
              >
                <div className={styles.sectionLabel}>SECTION // {formattedIndex}</div>
                <h2 id={`heading-${section.id}`} className={styles.sectionHeading}>
                  {sectionTitle}
                </h2>

                <div className={styles.sectionBody}>
                  {paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className={styles.sectionParagraph}>
                      {para}
                    </p>
                  ))}

                  {highlights && highlights.length > 0 && (
                    <div className={styles.highlightsArea}>
                      <div className={styles.highlightsTitle}>Key Principles:</div>
                      <ul className={styles.highlightsList}>
                        {highlights.map((hl, hlIdx) => (
                          <li key={hlIdx} className={styles.highlightsItem}>
                            {hl}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            );
          })}

          {/* Minimalist Sign-off Footer */}
          <div className={styles.signoffBlock}>
            <div className={styles.signoffInfo}>
              <div className={styles.signoffTitle}>Master Smile Studio Diş Polikliniği</div>
              <div>
                {siteConfig.address.streetAddress}, {siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}, Turkey
              </div>
              <div>
                {siteConfig.email} • {siteConfig.phone}
              </div>
            </div>
            <a
              href={`mailto:${siteConfig.email}?subject=Legal%20Inquiry`}
              className={styles.signoffLink}
            >
              Contact Legal Team ↗
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
