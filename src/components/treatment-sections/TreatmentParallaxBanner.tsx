'use client';

import React from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SITE_CONFIG, getWhatsAppLink } from '@/config/site';

export default function TreatmentParallaxBanner() {
  const locale = useLocale();

  return (
    <section className="parallax-section">
      <div className="parallax-container">
        <span className="parallax-subtitle">
          {locale === 'tr' ? 'KUSURSUZ TEDAVİ DENEYİMİ' : 'YOUR JOURNEY, SEAMLESSLY DESIGNED'}
        </span>

        <h2 className="parallax-title">
          {locale === 'tr'
            ? 'İlk Mesajınızdan Yeni Gülüşünüze Kadar Her Adımda Yanınızdayız'
            : 'From Your First Message to Your Final Smile — Guided with World-Class Care'}
        </h2>

        <p className="parallax-desc">
          {locale === 'tr'
            ? 'Kişiye özel tedavi planlaması, net ve şeffaf iletişim, 5 yıldızlı konfor ve alanında uzman kurucu cerrahlarımızla sağlık turizmini unutulmaz bir deneyime dönüştürüyoruz.'
            : 'Personalized care, transparent communication, luxury 5-star hotel accommodation, and direct treatment by our clinic founders ensure a smooth and joyful journey in Istanbul.'}
        </p>

        {/* 3 Quick Action Buttons */}
        <div className="parallax-buttons-row">
          <Link
            href="/contact"
            className="treatment-btn-gold"
          >
            <span>📅 {locale === 'tr' ? 'Randevu Oluştur' : 'Book Appointment'}</span>
            <span>→</span>
          </Link>

          <a
            href={getWhatsAppLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            className="treatment-btn-whatsapp"
          >
            <span>💬 WhatsApp Live Chat</span>
          </a>

          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="parallax-btn-phone"
          >
            <span>📞 {SITE_CONFIG.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
