'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FaqSection() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const rawFaqList = t.raw('faqList') as Array<{ question: string; answer: string }>;
  const rawSeoTags = t.raw('seoTags') as string[];

  return (
    <section
      id="faq"
      itemScope
      itemType="https://schema.org/FAQPage"
      style={{
        backgroundColor: '#ffffff',
        color: '#0f172a',
        padding: '6rem 1.5rem',
        position: 'relative',
        borderTop: '1px solid #f1f5f9',
        borderBottom: 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* Section Header */}
        <div
          style={{
            textAlign: 'left',
            marginBottom: '3.5rem',
            maxWidth: '900px',
          }}
        >
          <span
            style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              color: '#d97706',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              backgroundColor: '#fff7ed',
              padding: '0.4rem 1.1rem',
              borderRadius: '9999px',
              border: '1px solid #ffedd5',
              display: 'inline-block',
              marginBottom: '1rem',
            }}
          >
            {t('eyebrow')}
          </span>

          <h2
            style={{
              fontSize: '3rem',
              fontWeight: 400,
              color: '#0f172a',
              letterSpacing: '-0.035em',
              marginBottom: '1.25rem',
              lineHeight: 1.15,
            }}
          >
            {t('title')}
          </h2>

          <p
            style={{
              fontSize: '1.15rem',
              color: '#475569',
              lineHeight: 1.65,
              margin: 0,
              fontWeight: 400,
            }}
          >
            {t('subtitle')}
          </p>
        </div>

        {/* 2-Column Main Layout: Left Article | Right Expanding Inline Accordion */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3.5rem',
            alignItems: 'start',
            marginBottom: '4rem',
          }}
        >
          {/* Left Column: Master Article */}
          <div>
            <article
              style={{
                backgroundColor: '#fafafa',
                borderRadius: '24px',
                padding: '2.25rem',
                border: '1px solid #f1f5f9',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  marginBottom: '1.5rem',
                  letterSpacing: '-0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                }}
              >
                <span style={{ color: '#FFA552' }}>✦</span>
                {t('aboutHeading')}
              </h3>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.15rem',
                  color: '#334155',
                  fontSize: '1.025rem',
                  lineHeight: 1.75,
                  fontWeight: 400,
                }}
              >
                <p style={{ margin: 0 }}>{t('aboutP1')}</p>
                <p style={{ margin: 0 }}>{t('aboutP2')}</p>
                <p style={{ margin: 0 }}>{t('aboutP3')}</p>
                <p style={{ margin: 0 }}>{t('aboutP4')}</p>
              </div>
            </article>
          </div>

          {/* Right Column: Inline Expanding Accordion */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {rawFaqList.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  style={{
                    backgroundColor: isOpen ? '#ffffff' : '#f8fafc',
                    borderRadius: '18px',
                    border: isOpen ? '1.5px solid #FFA552' : '1px solid #e2e8f0',
                    boxShadow: isOpen ? '0 10px 25px -5px rgba(255, 165, 82, 0.12)' : '0 2px 8px rgba(0, 0, 0, 0.02)',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                >
                  {/* Question Header (Click to Expand Downwards) */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    style={{
                      width: '100%',
                      padding: '1.35rem 1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '1rem',
                      backgroundColor: 'transparent',
                      border: 'none',
                      outline: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    <span
                      itemProp="name"
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: isOpen ? '#0f172a' : '#1e293b',
                        lineHeight: 1.4,
                      }}
                    >
                      {faq.question}
                    </span>

                    {/* Chevron Icon */}
                    <div
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '50%',
                        backgroundColor: isOpen ? '#fff7ed' : '#ffffff',
                        border: isOpen ? '1px solid #ffedd5' : '1px solid #cbd5e1',
                        color: isOpen ? '#d97706' : '#64748b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'transform 0.3s ease',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </button>

                  {/* Answer Content (Expands Downwards Inline) */}
                  {isOpen && (
                    <div
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                      style={{
                        padding: '0 1.5rem 1.5rem 1.5rem',
                        color: '#475569',
                        fontSize: '1.025rem',
                        lineHeight: 1.7,
                        borderTop: '1px solid #f1f5f9',
                        paddingTop: '1.15rem',
                      }}
                    >
                      <p itemProp="text" style={{ margin: 0 }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* SEO Keywords & Tags Pill Bar */}
        <div
          style={{
            paddingTop: '2.5rem',
            borderTop: '1px solid #f1f5f9',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#64748b',
              marginRight: '0.5rem',
            }}
          >
            ✦ Anahtar Kelimeler:
          </span>
          {rawSeoTags.map((tag, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: '#f1f5f9',
                color: '#334155',
                fontSize: '0.825rem',
                fontWeight: 500,
                padding: '0.4rem 0.9rem',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                transition: 'all 0.25s ease',
                cursor: 'pointer',
              }}
              className="seo-chip"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .seo-chip:hover {
          background-color: #fff7ed !important;
          color: #d97706 !important;
          border-color: #ffedd5 !important;
        }
      `}</style>
    </section>
  );
}
