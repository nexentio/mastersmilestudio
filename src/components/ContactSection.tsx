'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('contact');
  const locale = useLocale();

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
              Get in touch
            </h2>

            {/* 1. Visit us */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', margin: '0 0 0.25rem 0' }}>
                Visit us
              </h3>
              <p style={{ fontSize: '0.925rem', color: '#1e293b', margin: '0 0 0.35rem 0', fontWeight: 400 }}>
                Come say hello at our clinic HQ.
              </p>
              <p style={{ fontSize: '0.95rem', fontWeight: 500, color: '#0f172a', margin: 0, lineHeight: 1.45 }}>
                Liman Mah. Atatürk Bulvarı No: 142 Konyaaltı / Antalya TR
              </p>
            </div>

            {/* 2. Chat to us */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', margin: '0 0 0.25rem 0' }}>
                Chat to us
              </h3>
              <p style={{ fontSize: '0.925rem', color: '#1e293b', margin: '0 0 0.35rem 0', fontWeight: 400 }}>
                Our friendly team is here to help 24/7.
              </p>
              <a
                href="mailto:info@mastersmilestudio.com"
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  textDecoration: 'none',
                  borderBottom: '1.5px solid #0f172a',
                }}
              >
                info@mastersmilestudio.com
              </a>
            </div>

            {/* 3. Call us */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#0f172a', margin: '0 0 0.25rem 0' }}>
                Call us
              </h3>
              <p style={{ fontSize: '0.925rem', color: '#1e293b', margin: '0 0 0.35rem 0', fontWeight: 400 }}>
                Mon-Sat from 9am to 8pm
              </p>
              <a
                href="tel:+905433526040"
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  textDecoration: 'none',
                }}
              >
                (+90) 543 352 60 40
              </a>
            </div>
          </div>

          {/* Social Media Footer */}
          <div style={{ marginTop: '2rem' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', margin: '0 0 0.75rem 0' }}>
              Social media
            </h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ color: '#0f172a', opacity: 0.85, transition: 'opacity 0.2s' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: '#0f172a', opacity: 0.85, transition: 'opacity 0.2s' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
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
                Message Sent Successfully!
              </h3>
              <p style={{ fontSize: '1rem', color: '#a1a1aa', margin: 0 }}>
                Our dental specialists will contact you within 15 minutes.
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
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Randomfirst"
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
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Randomlast"
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
                  Treatment / Company Name
                </label>
                <input
                  type="text"
                  placeholder="Zirconium, All-on-4, Hollywood Smile..."
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
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Random@gmail.com"
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

              {/* Phone Number with Flag Selector */}
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
                  Phone Number
                </label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: '#121214',
                    border: '1px solid #27272a',
                    borderRadius: '10px',
                    overflow: 'hidden',
                  }}
                  className="contact-input-wrapper"
                >
                  {/* Flag Badge */}
                  <div
                    style={{
                      padding: '0.85rem 0.85rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      borderRight: '1px solid #27272a',
                      backgroundColor: '#18181b',
                      fontSize: '0.9rem',
                      color: '#a1a1aa',
                      userSelect: 'none',
                    }}
                  >
                    <span>🇹🇷</span>
                    <span>▾</span>
                  </div>

                  <input
                    type="tel"
                    required
                    placeholder="(+90) 543-352-60-40"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what we can help you with"
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
                  I'd like to receive more information about Master Smile Studio. I understand and agree to the{' '}
                  <a href="#privacy" style={{ color: '#38bdf8', textDecoration: 'underline' }}>
                    Privacy Policy
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
                Send Message
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
