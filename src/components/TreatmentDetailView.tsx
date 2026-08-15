'use client';

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SITE_CONFIG, getWhatsAppLink } from '@/config/site';

interface MediaPlaceholderProps {
  num: number | string;
  label: string;
  type: 'video' | 'image' | 'carousel' | 'slider';
  color: string;
  aspectRatio?: string;
  height?: string;
  style?: React.CSSProperties;
}

function MediaPlaceholder({
  num,
  label,
  type,
  color,
  aspectRatio = '16/9',
  height,
  style,
}: MediaPlaceholderProps) {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: height || 'auto',
        aspectRatio: height ? undefined : aspectRatio,
        backgroundColor: '#18181b',
        borderRadius: '16px',
        border: `2px dashed ${color}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        padding: '1.5rem',
        overflow: 'hidden',
        boxShadow: `0 8px 30px ${color}20`,
        ...style,
      }}
    >
      {/* Top Floating Number Badge */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          left: '12px',
          backgroundColor: color,
          color: '#ffffff',
          fontWeight: 800,
          fontSize: '0.85rem',
          padding: '0.35rem 0.85rem',
          borderRadius: '9999px',
          boxShadow: `0 4px 14px ${color}60`,
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          letterSpacing: '0.02em',
          zIndex: 5,
        }}
      >
        <span>#{num}</span>
      </div>

      {/* Media Type Icon */}
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          backgroundColor: `${color}25`,
          border: `1.5px solid ${color}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: color,
        }}
      >
        {type === 'video' ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        )}
      </div>

      {/* Label */}
      <div style={{ textAlign: 'center', maxWidth: '85%' }}>
        <span style={{ color: '#ffffff', fontWeight: 600, fontSize: '0.95rem', display: 'block', marginBottom: '0.2rem' }}>
          {label}
        </span>
        <span style={{ color: '#a1a1aa', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          {type === 'video' ? 'Video Player Placeholder' : 'Görsel / Image Placeholder'}
        </span>
      </div>
    </div>
  );
}

export default function TreatmentDetailView() {
  const locale = useLocale();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeSect77, setActiveSect77] = useState<number>(0);
  const [activeJourneyStep, setActiveJourneyStep] = useState<number | null>(0);

  // Treatment Options for Section 77
  const treatmentOptions = [
    {
      title: 'Full Mouth Implants',
      target: 'Patients who have lost most or all teeth in both jaws',
      desc: 'Complete full mouth restoration where all teeth are fixed securely with dental implants for natural function.',
      color: '#14b8a6', // Teal
      placeholderNum: 9,
    },
    {
      title: 'All-on-4 Implants',
      target: 'Toothless patients seeking immediate fixed teeth with minimal bone requirement',
      desc: 'Fixed full-arch prosthesis supported by 4 precisely angled implants, suitable even with reduced jawbone density.',
      color: '#e11d48', // Rose
      placeholderNum: 10,
    },
    {
      title: 'All-on-6 Implants',
      target: 'Patients wanting maximum bite strength, stability, and long-term durability',
      desc: 'Premium full-arch fixed restoration supported by 6 robust implants for optimal load distribution.',
      color: '#84cc16', // Lime
      placeholderNum: 11,
    },
    {
      title: 'Immediate Implant Treatment',
      target: 'Patients needing extraction and implant in the same surgical session',
      desc: 'Implant is placed right after tooth extraction to preserve natural bone contours and save treatment time.',
      color: '#a855f7', // Violet
      placeholderNum: 12,
    },
    {
      title: 'Zygomatic Implants',
      target: 'Severe upper jaw bone loss where bone grafting is not desired',
      desc: 'Specialized longer implants anchored directly into the zygomatic cheekbone without extensive bone grafts.',
      color: '#0284c7', // Sky Blue
      placeholderNum: 13,
    },
    {
      title: 'Zirconium Implants',
      target: 'Patients with metal sensitivity seeking 100% metal-free biocompatibility',
      desc: 'Ceramic zirconium implants providing natural tissue integration and superior soft tissue aesthetics.',
      color: '#d97706', // Amber
      placeholderNum: 14,
    },
    {
      title: 'Implant Supported Dentures',
      target: 'Removable denture wearers seeking snap-on stability and comfort',
      desc: 'Overdentures anchored with locator attachments, offering strong hold without palate coverage.',
      color: '#4f46e5', // Indigo
      placeholderNum: 15,
    },
    {
      title: 'Sinus Lifting & Bone Grafting',
      target: 'Patients requiring bone height augmentation in the upper posterior jaw',
      desc: 'Lifting sinus floor and placing natural bone mineral powder to create solid foundations for implants.',
      color: '#059669', // Emerald
      placeholderNum: 16,
    },
  ];

  // Package Deals List
  const packages = [
    {
      name: 'ALL-ON-4 PACKAGE – NUCLEOSS',
      brand: 'NucleOSS (Turkish Precision)',
      duration: '3 + 7 Working Days (2 Visits)',
      inclusions: [
        '4x NucleOSS Implants',
        '12x Fixed Temporary Teeth',
        '12x Final Permanent Teeth',
        '3D CBCT Surgical Planning',
        'Local Anesthesia',
        'VIP Airport & Hotel Transfers',
        '4-Star Hotel Stay with Breakfast',
        'Certified Laboratory Fees',
      ],
      priceUSD: '$5,700',
      priceEUR: '€4,900',
      priceGBP: '£4,200',
      color: '#10b981',
      placeholderNum: 3,
    },
    {
      name: 'ALL-ON-4 PACKAGE – DXL GERMAN',
      brand: 'DXL (German Engineered)',
      duration: '3 + 7 Working Days (2 Visits)',
      inclusions: [
        '4x DXL German Implants',
        '12x Fixed Temporary Teeth',
        '12x Final Permanent Teeth',
        '3D CBCT Surgical Planning',
        'Local Anesthesia',
        'VIP Airport & Hotel Transfers',
        '4-Star Hotel Stay with Breakfast',
        'Certified Laboratory Fees',
      ],
      priceUSD: '$6,400',
      priceEUR: '€5,500',
      priceGBP: '£4,750',
      color: '#8b5cf6',
      placeholderNum: 4,
    },
    {
      name: 'ALL-ON-4 PACKAGE – STRAUMANN',
      brand: 'Straumann (Swiss Premium)',
      duration: '3 + 7 Working Days (2 Visits)',
      inclusions: [
        '4x Straumann Swiss Implants',
        '12x Fixed Temporary Teeth',
        '12x Final Permanent Teeth',
        '3D CBCT Surgical Planning',
        'Local Anesthesia',
        'VIP Airport & Hotel Transfers',
        '5-Star Luxury Hotel Stay',
        'Lifetime Global Warranty',
      ],
      priceUSD: '$9,300',
      priceEUR: '€8,000',
      priceGBP: '£6,900',
      color: '#ec4899',
      placeholderNum: 5,
    },
    {
      name: 'ALL-ON-6 PACKAGE – MEGAGEN',
      brand: 'Megagen (Korean Technology)',
      duration: '3 + 7 Working Days (2 Visits)',
      inclusions: [
        '6x Megagen Implants',
        '12x Fixed Temporary Teeth',
        '12x Final Permanent Teeth',
        '3D CBCT Surgical Planning',
        'Local Anesthesia',
        'VIP Airport & Hotel Transfers',
        '4-Star Hotel Stay with Breakfast',
        'Certified Laboratory Fees',
      ],
      priceUSD: '$8,000',
      priceEUR: '€7,000',
      priceGBP: '£6,000',
      color: '#06b6d4',
      placeholderNum: 6,
    },
    {
      name: 'ALL-ON-6 PACKAGE – NEODENT',
      brand: 'Neodent by Straumann',
      duration: '3 + 7 Working Days (2 Visits)',
      inclusions: [
        '6x Neodent Implants',
        '12x Fixed Temporary Teeth',
        '12x Final Permanent Teeth',
        '3D CBCT Surgical Planning',
        'Local Anesthesia',
        'VIP Airport & Hotel Transfers',
        '4-Star Hotel Stay with Breakfast',
        'Certified Laboratory Fees',
      ],
      priceUSD: '$8,000',
      priceEUR: '€7,000',
      priceGBP: '£6,000',
      color: '#f97316',
      placeholderNum: 7,
    },
    {
      name: 'ALL-ON-6 PACKAGE – HIOSSEN',
      brand: 'Hiossen (American Brand)',
      duration: '3 + 7 Working Days (2 Visits)',
      inclusions: [
        '6x Hiossen Implants',
        '12x Fixed Temporary Teeth',
        '12x Final Permanent Teeth',
        '3D CBCT Surgical Planning',
        'Local Anesthesia',
        'VIP Airport & Hotel Transfers',
        '4-Star Hotel Stay with Breakfast',
        'Certified Laboratory Fees',
      ],
      priceUSD: '$7,700',
      priceEUR: '€6,750',
      priceGBP: '£5,780',
      color: '#6366f1',
      placeholderNum: 8,
    },
  ];

  // Journey Steps Accordion (Section ACC)
  const journeySteps = [
    {
      title: 'Average Length of Stay in Antalya',
      content: 'For full mouth dental implants, most patients stay 3-5 days for the first surgery visit, and 5-7 days for the final permanent smile fitting visit. We handle all scheduling to fit your flight times seamlessly.',
      icon: '01',
    },
    {
      title: 'Number of Visits Required',
      content: 'Treatment is carried out in two comfortable visits. Visit 1: 3D tomography planning, extractions (if needed), implant placement, and fixed temporary teeth. Visit 2: Final permanent zirconia teeth attachment after osseointegration (3-6 months).',
      icon: '02',
    },
    {
      title: 'Recovery & Osseointegration Time',
      content: 'Implants fuse naturally with your bone over 3 to 6 months. During this healing period, you can comfortably chew and smile with your fixed temporary teeth while living your regular life at home.',
      icon: '03',
    },
    {
      title: 'Transparent Pricing & Warranty',
      content: 'Our prices include all stages with no hidden hospital or laboratory extras. Every implant comes with an official manufacturer passport and lifetime international guarantee certificate.',
      icon: '04',
    },
  ];

  // Doctors / Specialist Surgeons
  const doctors = [
    {
      name: 'Dr. Dt. Onur Utku Yüksel',
      title: 'Oral & Maxillofacial Surgeon',
      role: 'Head of Implantology',
      placeholderNum: 19,
      color: '#ea580c',
    },
    {
      name: 'Dt. Ufuk Ağdaşan',
      title: 'Aesthetic & Cosmetic Dentist',
      role: 'Smile Makeover Lead',
      placeholderNum: 20,
      color: '#9333ea',
    },
    {
      name: 'MSc. Dt. Hakkı Serdar Ünal',
      title: 'Oral Implantology Specialist',
      role: 'Surgical Prosthodontist',
      placeholderNum: 21,
      color: '#0891b2',
    },
    {
      name: 'Dt. Çağatay Çakır',
      title: 'Restorative & Endodontist',
      role: 'Clinical Specialist',
      placeholderNum: 22,
      color: '#16a34a',
    },
  ];

  // Included Services Badges (Sectinfo1)
  const servicesIncluded = [
    'Specialist Dental Consultation',
    '3D CBCT Panoramic Tomography',
    'Surgeon Work & Surgical Planning',
    'VIP Airport & Clinic Transfers',
    'Local Anesthesia & Comfort Protocol',
    'Full Medication & Aftercare Kit',
    'Certified Digital Lab Artistry',
    '4/5-Star Hotel Stay with Breakfast',
  ];

  // Video Stories Reels
  const videoStories = [
    { title: 'Full Mouth Transformation', placeholderNum: 23, color: '#db2777' },
    { title: 'All-on-4 Patient Experience', placeholderNum: 24, color: '#7c3aed' },
    { title: 'UK Patient Journey to Antalya', placeholderNum: 25, color: '#2563eb' },
    { title: 'German Patient Dental Story', placeholderNum: 26, color: '#059669' },
    { title: 'Immediate Implant Recovery', placeholderNum: 27, color: '#d97706' },
    { title: 'Smile Makeover Result', placeholderNum: 28, color: '#4f46e5' },
  ];

  // FAQs
  const faqs = [
    {
      q: 'What are full mouth dental implants and how do they work?',
      a: 'Full mouth dental implants replace all missing or damaged teeth in an upper or lower jaw (or both) using 4, 6, or more titanium implants anchored firmly into the jawbone, topped with a custom fixed bridge.',
    },
    {
      q: 'Is the dental implant procedure painful?',
      a: 'Not at all. The entire surgery is performed under local anesthesia or optional conscious sedation. Patients report minimal discomfort similar to a standard filling, easily managed with mild painkillers.',
    },
    {
      q: 'How many days do I need to stay in Antalya for full dental implants?',
      a: 'The first visit requires 3 to 5 days for implant placement and temporary teeth attachment. The second visit (3-6 months later) takes 5 to 7 days for the final custom zirconia teeth fitting.',
    },
    {
      q: 'What is the difference between All-on-4 and All-on-6 implants?',
      a: 'All-on-4 uses 4 implants per arch (ideal when posterior bone volume is limited). All-on-6 uses 6 implants for increased biting force and stability if sufficient bone is present.',
    },
    {
      q: 'Are the dental implants guaranteed?',
      a: 'Yes. All our premium implant brands (Straumann, Megagen, NucleOSS, DXL, Neodent) come with international lifetime warranties and official brand passports.',
    },
    {
      q: 'Will I be left without teeth during the healing period?',
      a: 'No. You will receive fixed temporary teeth on the very first visit, so you can eat, speak, and smile with confidence throughout the healing period.',
    },
  ];

  return (
    <div style={{ backgroundColor: '#ffffff', color: '#0f172a' }}>
      {/* 1. Introduction Overview Section */}
      <section style={{ padding: '4.5rem 1.5rem 2rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ maxWidth: '900px', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', fontWeight: 600, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1.25rem' }}>
            Full Mouth Dental Implants in Antalya, Turkey
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            Full dental implants in Turkey are a complete and permanent solution for patients who have lost most or all of their natural teeth. At <strong>Master Smile Studio</strong>, our oral surgery specialists provide safe, cutting-edge, and long-lasting full mouth treatments designed specifically for international patients seeking five-star results at affordable prices.
          </p>
          <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6 }}>
            Our full mouth options include: <strong>All-on-4 Implants</strong>, <strong>All-on-6 Implants</strong>, <strong>Zygomatic Implants</strong>, <strong>Zirconium Implants</strong>, and <strong>Implant-Supported Overdentures</strong>.
          </p>
        </div>

        {/* Media Placeholder #2: Overview YouTube Video */}
        <div style={{ maxWidth: '960px', margin: '0 auto 4rem auto' }}>
          <MediaPlaceholder
            num={2}
            label="Full Mouth Implant Video Overview (YouTube Embedded Video)"
            type="video"
            color="#3b82f6"
            aspectRatio="16/9"
          />
        </div>
      </section>

      {/* 2. Package Deals & Price Comparison Section */}
      <section style={{ backgroundColor: '#f8fafc', padding: '5rem 1.5rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#D58936', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '0.5rem' }}>
              All-Inclusive Dental Tourism
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 600, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 1rem 0' }}>
              Full Mouth Dental Implants Turkey Package Deals & Prices
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6 }}>
              Transparent pricing with no hidden clinic or surgical fees. Packages include surgical CBCT scans, temporary teeth, hotel stay, and private VIP transfers.
            </p>
          </div>

          {/* Packages 3-Column Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
            {packages.map((pkg, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  padding: '1.75rem',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                className="package-card"
              >
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '1rem', minHeight: '44px' }}>
                    {pkg.name}
                  </h3>

                  {/* Package Media Placeholder (Placeholders #3 to #8) */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <MediaPlaceholder
                      num={pkg.placeholderNum}
                      label={`${pkg.brand} Package Image`}
                      type="image"
                      color={pkg.color}
                      aspectRatio="16/9"
                    />
                  </div>

                  {/* Duration Badge */}
                  <div style={{ backgroundColor: '#f1f5f9', padding: '0.6rem 0.9rem', borderRadius: '10px', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.82rem', color: '#64748b', fontWeight: 600 }}>Duration:</span>
                    <span style={{ fontSize: '0.85rem', color: '#0f172a', fontWeight: 700 }}>{pkg.duration}</span>
                  </div>

                  {/* What's Included */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', display: 'block', marginBottom: '0.65rem' }}>
                      What’s Included?
                    </span>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {pkg.inclusions.map((item, iIdx) => (
                        <li key={iIdx} style={{ fontSize: '0.86rem', color: '#475569', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <span style={{ color: '#D58936', fontWeight: 700 }}>✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  {/* Prices in 3 Currencies */}
                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.78rem', color: '#94a3b8', display: 'block', marginBottom: '0.4rem' }}>
                      Package price per arch (one jaw):
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#09090b', color: '#ffffff', borderRadius: '12px', padding: '0.75rem 1rem' }}>
                      <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFA552' }}>{pkg.priceUSD}</span>
                      <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#e4e4e7' }}>{pkg.priceEUR}</span>
                      <span style={{ fontSize: '1.05rem', fontWeight: 700, color: '#e4e4e7' }}>{pkg.priceGBP}</span>
                    </div>
                  </div>

                  {/* Action CTA Button */}
                  <Link
                    href="/contact"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      backgroundColor: '#D58936',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      padding: '0.85rem 1.25rem',
                      borderRadius: '9999px',
                      textDecoration: 'none',
                      boxShadow: '0 6px 18px rgba(213, 137, 54, 0.35)',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    Get Personalized Quote Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Section 77: Interactive Treatment Finder Accordion */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ maxWidth: '800px', marginBottom: '3rem' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#D58936', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '0.5rem' }}>
            Interactive Decision Guide
          </span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 600, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 1rem 0' }}>
            Find the Right Treatment for You
          </h2>
          <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6 }}>
            Not sure which dental treatment suits your needs? Browse through our full mouth options to see who each procedure is for and what it delivers.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
          {/* Left: Accordion List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {treatmentOptions.map((opt, idx) => {
              const isOpen = activeSect77 === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveSect77(idx)}
                  style={{
                    backgroundColor: isOpen ? '#ffffff' : '#f8fafc',
                    borderRadius: '16px',
                    border: isOpen ? `2px solid ${opt.color}` : '1px solid #e2e8f0',
                    padding: '1.25rem 1.5rem',
                    cursor: 'pointer',
                    boxShadow: isOpen ? `0 10px 25px ${opt.color}15` : 'none',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '1.05rem', fontWeight: 700, color: isOpen ? opt.color : '#0f172a', display: 'block' }}>
                        {opt.title}
                      </span>
                      <span style={{ fontSize: '0.84rem', color: '#64748b', display: 'block', marginTop: '0.2rem' }}>
                        {opt.target}
                      </span>
                    </div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={isOpen ? opt.color : '#94a3b8'}
                      strokeWidth="2.5"
                      style={{
                        transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0,
                      }}
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </div>

                  {isOpen && (
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                      <p style={{ fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
                        {opt.desc}
                      </p>
                      <Link
                        href="/contact"
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: opt.color,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                        }}
                      >
                        <span>BOOK FREE CONSULTATION</span>
                        <span>→</span>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Selected Treatment Visual Placeholder (Placeholders #9 to #16) */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <MediaPlaceholder
              num={treatmentOptions[activeSect77].placeholderNum}
              label={`${treatmentOptions[activeSect77].title} Treatment Showcase Visual`}
              type="image"
              color={treatmentOptions[activeSect77].color}
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* 4. Parallax Journey Quote Banner */}
      <section style={{ position: 'relative', width: '100%', minHeight: '440px', display: 'flex', alignItems: 'center', backgroundColor: '#09090b', overflow: 'hidden', padding: '4rem 1.5rem' }}>
        {/* Parallax Background Placeholder (Placeholder #17) */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.35, zIndex: 0 }}>
          <MediaPlaceholder
            num={17}
            label="Parallax Background Banner Image"
            type="image"
            color="#f43f5e"
            height="100%"
            style={{ borderRadius: 0, border: 'none' }}
          />
        </div>

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '960px', margin: '0 auto', textAlign: 'center', color: '#ffffff' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FFA552', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            Master Smile Studio Patient Promise
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 1.5rem 0' }}>
            Your Journey, Seamlessly Designed
          </h2>
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#cbd5e1', lineHeight: 1.7, maxWidth: '780px', margin: '0 auto 2.5rem auto' }}>
            From your first message to your final smile — we guide you through every step with personalized care, clear communication, and world-class dental expertise.
          </p>

          {/* Quick Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              className="hero-btn-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                padding: '0.85rem 1.85rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              <span>Book Appointment</span>
            </Link>

            <a
              href={getWhatsAppLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.65rem',
                backgroundColor: '#22c55e',
                color: '#ffffff',
                padding: '0.85rem 1.85rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 8px 20px rgba(34, 197, 94, 0.4)',
              }}
            >
              <span>WhatsApp Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. Stay Details, Number of Visits & Recovery Accordion (Section ACC) */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          {/* Left Column: Accordion */}
          <div>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#D58936', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '0.5rem' }}>
              Simple & Predictable Process
            </span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 600, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 1.5rem 0' }}>
              Your Dental Journey Made Simple
            </h2>
            <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6, marginBottom: '2rem' }}>
              From initial online consultation to final smile delivery in Antalya, everything is planned with international travelers in mind.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {journeySteps.map((step, sIdx) => {
                const isOpen = activeJourneyStep === sIdx;
                return (
                  <div
                    key={sIdx}
                    onClick={() => setActiveJourneyStep(isOpen ? null : sIdx)}
                    style={{
                      backgroundColor: isOpen ? '#f8fafc' : '#ffffff',
                      borderRadius: '14px',
                      border: '1px solid #e2e8f0',
                      padding: '1.2rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        <span style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#D58936', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 800 }}>
                          {step.icon}
                        </span>
                        <span style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
                          {step.title}
                        </span>
                      </div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#64748b"
                        strokeWidth="2.5"
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.2s ease',
                        }}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>

                    {isOpen && (
                      <p style={{ marginTop: '0.85rem', paddingTop: '0.85rem', borderTop: '1px solid #e2e8f0', fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: '0.85rem 0 0 0' }}>
                        {step.content}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Media Placeholder #18 (Journey Explainer Video) */}
          <div>
            <MediaPlaceholder
              num={18}
              label="Treatment Journey & Recovery Guide Video (YouTube)"
              type="video"
              color="#2563eb"
              aspectRatio="16/9"
            />
          </div>
        </div>
      </section>

      {/* 6. Section DOC: Our Specialist Surgeons */}
      <section style={{ backgroundColor: '#f8fafc', padding: '5rem 1.5rem', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#D58936', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '0.5rem' }}>
              Clinical Team
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 600, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 1rem 0' }}>
              Meet Our Specialist Dental Surgeons
            </h2>
            <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.6 }}>
              All surgical procedures are conducted by board-certified oral surgeons and aesthetic dental specialists with decades of combined clinical success.
            </p>
          </div>

          {/* Doctors 4-Column Grid with Placeholders #19 to #22 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.75rem' }}>
            {doctors.map((doc, dIdx) => (
              <div
                key={dIdx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  overflow: 'hidden',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ padding: '0.75rem' }}>
                  <MediaPlaceholder
                    num={doc.placeholderNum}
                    label={`${doc.name} Portrait Photo`}
                    type="image"
                    color={doc.color}
                    aspectRatio="3/4"
                  />
                </div>
                <div style={{ padding: '1.25rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.25rem 0' }}>
                    {doc.name}
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: '#D58936', fontWeight: 600, display: 'block', marginBottom: '0.2rem' }}>
                    {doc.title}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {doc.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Section INFO1: All-Inclusive Service Inclusions Grid */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#D58936', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '0.5rem' }}>
            Everything You Need
          </span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.5rem)', fontWeight: 600, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 1rem 0' }}>
            Our Best Services Included in Your Package
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {servicesIncluded.map((srv, sIdx) => (
            <div
              key={sIdx}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(213, 137, 54, 0.15)',
                  color: '#D58936',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontWeight: 800,
                }}
              >
                ✓
              </div>
              <span style={{ fontSize: '0.92rem', fontWeight: 600, color: '#1e293b' }}>
                {srv}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Section INSTA: Real Patients Video Stories */}
      <section style={{ backgroundColor: '#09090b', color: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3.5rem auto' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFA552', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '0.5rem' }}>
              Patient Testimonials
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 1rem 0' }}>
              Real Patients. Real Smiles.
            </h2>
            <p style={{ fontSize: '1rem', color: '#94a3b8', lineHeight: 1.6 }}>
              Explore the journey of our international patients through authentic video reels, testimonials, and smile reveals.
            </p>
          </div>

          {/* 6 Reels Grid with Placeholders #23 to #28 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
            {videoStories.map((reel, rIdx) => (
              <div key={rIdx}>
                <MediaPlaceholder
                  num={reel.placeholderNum}
                  label={reel.title}
                  type="video"
                  color={reel.color}
                  aspectRatio="9/16"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Section BA: Before & After Transformation Slider */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#D58936', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '0.5rem' }}>
            Clinical Outcomes
          </span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 600, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 1rem 0' }}>
            Before & After Full Mouth Transformations
          </h2>
        </div>

        {/* Media Placeholder #29: Before / After Slider */}
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <MediaPlaceholder
            num={29}
            label="Interactive Before / After Smile Split Slider"
            type="slider"
            color="#e11d48"
            aspectRatio="16/9"
          />
        </div>
      </section>

      {/* 10. Patient Full Experience Video Showcase */}
      <section style={{ backgroundColor: '#f8fafc', padding: '5rem 1.5rem', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#D58936', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '0.5rem' }}>
              Full Video Review
            </span>
            <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 600, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 1rem 0' }}>
              Full Mouth Dental Implants Reviews in Antalya, Turkey
            </h2>
          </div>

          {/* Media Placeholder #30: Full Patient Video */}
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            <MediaPlaceholder
              num={30}
              label="Full Patient Video Testimonial (YouTube Embed)"
              type="video"
              color="#0284c7"
              aspectRatio="16/9"
            />
          </div>
        </div>
      </section>

      {/* 11. Section SSS: Frequently Asked Questions */}
      <section style={{ padding: '5rem 1.5rem', maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#D58936', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '0.5rem' }}>
            Got Questions?
          </span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.8vw, 2.6rem)', fontWeight: 600, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {faqs.map((faq, fIdx) => {
            const isOpen = activeFaq === fIdx;
            return (
              <div
                key={fIdx}
                onClick={() => setActiveFaq(isOpen ? null : fIdx)}
                style={{
                  backgroundColor: isOpen ? '#f8fafc' : '#ffffff',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  padding: '1.25rem 1.5rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#0f172a', margin: 0 }}>
                    {faq.q}
                  </h3>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#D58936"
                    strokeWidth="2.5"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                      flexShrink: 0,
                    }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>

                {isOpen && (
                  <p style={{ marginTop: '0.85rem', paddingTop: '0.85rem', borderTop: '1px solid #e2e8f0', fontSize: '0.92rem', color: '#475569', lineHeight: 1.6, margin: '0.85rem 0 0 0' }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 12. Direct Medical Quote & Consultation Form */}
      <section style={{ backgroundColor: '#09090b', color: '#ffffff', padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#FFA552', textTransform: 'uppercase', letterSpacing: '0.12em', display: 'block', marginBottom: '0.5rem' }}>
            Start Your Smile Transformation
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2, margin: '0 0 1.25rem 0' }}>
            Get Your Free Personalized Treatment Plan & Quote
          </h2>
          <p style={{ fontSize: '1rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Send your panoramic X-ray or dental photos. Our chief oral surgeon will prepare a customized treatment schedule and quotation within 24 hours.
          </p>

          <Link
            href="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              backgroundColor: '#D58936',
              color: '#ffffff',
              padding: '1rem 2.25rem',
              borderRadius: '9999px',
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(213, 137, 54, 0.45)',
              transition: 'all 0.3s ease',
            }}
          >
            <span>Claim Your Free Consultation</span>
            <span>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
