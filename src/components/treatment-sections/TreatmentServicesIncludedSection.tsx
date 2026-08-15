'use client';

import React from 'react';
import { useLocale } from 'next-intl';

export default function TreatmentServicesIncludedSection() {
  const locale = useLocale();

  const services = [
    { text: locale === 'tr' ? 'Konsültasyon & Uzman Muayenesi' : 'Consultation' },
    { text: locale === 'tr' ? 'Panoramik Röntgen ve 3D Planlama' : 'Panoramic X-Ray' },
    { text: locale === 'tr' ? 'Uzman Hekimin Zamanı ve Emeği' : 'The Dentist’s Time & Work' },
    { text: locale === 'tr' ? 'VIP Transfer Hizmetleri (Havalimanı - Otel - Klinik)' : 'VIP Transfers (airport, hotel)' },
    { text: locale === 'tr' ? 'Gelişmiş Lokal Anestezi' : 'Local Anesthetics' },
    { text: locale === 'tr' ? 'Antibiyotikler, Ağrı Kesiciler, Ağız Çalkalama Suyu vb.' : 'Anti-biotics, Pain killers, mouth wash etc.' },
    { text: locale === 'tr' ? 'Tüm Laboratuvar ve CAD/CAM Ücretleri' : 'Laboratory Fees' },
    { text: locale === 'tr' ? 'Paket Anlaşmalı Otel Konaklaması (Oda & Kahvaltı)' : 'Hotel Stay with Package Deals (Bed & Breakfast)' },
  ];

  const col1 = [services[0], services[2], services[4], services[6]];
  const col2 = [services[1], services[3], services[5], services[7]];

  return (
    <div className="treatment-services-included-wrapper">
      <div className="treatment-container max-w-5xl">
        <div className="treatment-services-included-card">
          <div className="mb-7">
            <h2 className="treatment-services-included-title">
              <span>{locale === 'tr' ? 'Dahil Olan En İyi Hizmetlerimiz' : 'Our Best Services Included'}</span>
            </h2>
            <div className="treatment-services-included-divider" />
          </div>

          <div className="treatment-services-included-grid">
            <div className="flex flex-col gap-5">
              {col1.map((item, idx) => (
                <div key={idx} className="treatment-services-included-item">
                  <div className="treatment-services-included-icon-badge">
                    <svg width="12" height="12" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M294.6 151.2c-4.2-4.6-10.1-7.2-16.4-7.2C266 144 256 154 256 166.3l0 41.7-96 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l96 0 0 41.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.4-7.2l84-91c3.5-3.8 5.4-8.7 5.4-13.9s-1.9-10.1-5.4-13.9l-84-91z" />
                    </svg>
                  </div>
                  <div className="treatment-services-included-text">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-5">
              {col2.map((item, idx) => (
                <div key={idx} className="treatment-services-included-item">
                  <div className="treatment-services-included-icon-badge">
                    <svg width="12" height="12" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M294.6 151.2c-4.2-4.6-10.1-7.2-16.4-7.2C266 144 256 154 256 166.3l0 41.7-96 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l96 0 0 41.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.4-7.2l84-91c3.5-3.8 5.4-8.7 5.4-13.9s-1.9-10.1-5.4-13.9l-84-91z" />
                    </svg>
                  </div>
                  <div className="treatment-services-included-text">
                    {item.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
