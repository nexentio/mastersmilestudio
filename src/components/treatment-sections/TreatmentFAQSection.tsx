'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import styles from './TreatmentFAQSection.module.css';

interface FAQItem {
  q: string;
  a: string | string[];
}

export default function TreatmentFAQSection() {
  const t = useTranslations('faq');
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const title = t.has('treatmentFaq.title')
    ? t('treatmentFaq.title')
    : 'Frequently Asked Questions About This Treatment';

  const subText = t.has('treatmentFaq.subText')
    ? t('treatmentFaq.subText')
    : 'Have questions about this treatment? You’re not alone. From treatment timelines to costs and recovery, we’re here to guide you with clear answers, expert advice, and personalized support at every step.';

  const rawItems = t.has('treatmentFaq.items') ? t.raw('treatmentFaq.items') : [];
  const items: FAQItem[] = Array.isArray(rawItems) ? rawItems : [];

  const toggleFAQ = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section aria-labelledby="faq-section-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.head}>
          <h2 id="faq-section-heading" className={styles.title}>
            {title}
          </h2>
          <p className={styles.subText}>{subText}</p>
        </div>

        {/* Accordion List */}
        <div className={styles.accordion}>
          {items.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`${styles.item} ${isOpen ? styles.itemActive : ''}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className={styles.itemHeader}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className={styles.questionText}>{faq.q}</span>
                  <span
                    className={`${styles.iconBadge} ${isOpen ? styles.iconBadgeActive : ''}`}
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width="14"
                      height="14"
                      fill="currentColor"
                    >
                      <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div id={`faq-answer-${idx}`} className={styles.contentBox}>
                    {Array.isArray(faq.a) ? (
                      faq.a.map((paragraph, pIdx) => <p key={pIdx}>{paragraph}</p>)
                    ) : (
                      <p>{faq.a}</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
