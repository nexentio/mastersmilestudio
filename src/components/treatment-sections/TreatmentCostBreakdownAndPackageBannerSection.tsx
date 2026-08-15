'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import TreatmentDivider from './TreatmentDivider';
import styles from './TreatmentCostBreakdownAndPackageBannerSection.module.css';

export default function TreatmentCostBreakdownAndPackageBannerSection() {
  const locale = useLocale();

  const packageBanners = [
    {
      img: 'https://sohodent.com/doc/data1/All-on-4-package-10.jpg',
      title: 'All-on-4 Implant Packages',
    },
    {
      img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-2.jpg',
      title: 'All-on-4 Implant Packages - DXL',
    },
    {
      img: 'https://sohodent.com/doc/data1/All-on-4-implant-package-3.jpg',
      title: 'All-on-4 Implant Packages - Straumann',
    },
    {
      img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-1.jpg',
      title: 'All-on-6 Implant Packages',
    },
    {
      img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-2.jpg',
      title: 'All-on-6 Implant Packages - DXL',
    },
    {
      img: 'https://sohodent.com/doc/data1/All-on-6-implant-package-3.jpg',
      title: 'All-on-6 Implant Packages - Straumann',
    },
  ];

  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? packageBanners.length - 3 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev >= packageBanners.length - 3 ? 0 : prev + 1));
  };

  return (
    <section aria-labelledby="cost-breakdown-heading" className={styles.section}>
      <div className="treatment-container">
        <TreatmentDivider />

        {/* Video LR_r40rBzb4 */}
        <div className={styles.videoCard}>
          <iframe
            src="https://www.youtube.com/embed/LR_r40rBzb4"
            title="Dental Implant Costs in Istanbul Procedure Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Narrative & Pricing Table */}
        <h2 id="cost-breakdown-heading" className="treatment-heading-title">
          <strong>{locale === 'tr' ? 'İstanbul’da Dental İmplant Fiyatları' : 'Dental Implant Costs in Istanbul'}</strong>
        </h2>

        <p className="treatment-text-p-lead">
          {locale === 'tr'
            ? 'İstanbul’da diş implantı fiyatları kullanılan implant markasına ve cerrahi yönteme göre değişiklik gösterir. Yüksek kaliteli malzemeler, deneyimli cerrahlar ve her şey dahil sağlık turizmi avantajlarıyla İstanbul’da implant tedavisi Avrupa ülkelerine kıyasla çok daha ekonomiktir.'
            : 'The cost of dental implants in Istanbul varies depending on the brand of the implant and the method used. Implants performed in a good clinic with high-quality materials, experienced doctors, and comprehensive services are much more affordable compared to European countries, thanks to the advantages of Turkey’s dental tourism.'}
        </p>

        <h3 className="treatment-heading-h3 text-xl">
          <strong>
            {locale === 'tr'
              ? 'İstanbul’da İmplant Fiyatları – Master Smile Studio\nOrtalama fiyatlar şu şekildedir:'
              : 'Dental Implant Prices in Istanbul - Master Smile Studio\nThe average prices are as follows:'}
          </strong>
        </h3>

        {/* 3 Price Cards */}
        <div className="treatment-price-grid">
          <div className="treatment-price-card nucleoss">
            <h4 className="text-base font-extrabold text-slate-900 mb-2">
              <strong>NUCLEOSS</strong> (Local Brand)
            </h4>
            <div className="treatment-price-val-nucleoss">
              ~$450 <span className="treatment-price-currency-sub">(€400 / £335)</span>
            </div>
            <p className="treatment-price-subtext">Per single implant unit</p>
          </div>

          <div className="treatment-price-card dxl">
            <h4 className="text-base font-extrabold text-slate-900 mb-2">
              <strong>DXL</strong> (German Brand)
            </h4>
            <div className="treatment-price-val-dxl">
              ~$550 <span className="treatment-price-currency-sub">(€500 / £420)</span>
            </div>
            <p className="treatment-price-subtext">Per single implant unit</p>
          </div>

          <div className="treatment-price-card straumann">
            <h4 className="text-base font-extrabold text-slate-900 mb-2">
              <strong>Straumann</strong> (Swiss Brand)
            </h4>
            <div className="treatment-price-val-straumann">
              ~$900 <span className="treatment-price-currency-sub">(€800 / £680)</span>
            </div>
            <p className="treatment-price-subtext">Per single implant unit</p>
          </div>
        </div>

        <p className="treatment-text-p mb-6">
          {locale === 'tr' ? (
            <>
              Çoklu diş eksikliği olan hastalar için <strong>All-on-4</strong> veya <strong>All-on-6</strong> tam çene implant tedavileri sıklıkla tercih edilmektedir. Bu paketlerin maliyeti, implant sayısına ve seçilen markaya bağlı olarak <strong>$4,900 ile $7,600</strong> arasında değişmektedir.
            </>
          ) : (
            <>
              For patients missing multiple teeth, full-arch implants like <strong>All-on-4</strong> or <strong>All-on-6</strong> are common choices. The cost for these packages ranges from <strong>$4,900 to $7,600</strong>, depending on the number of implants and the brand used.
            </>
          )}
        </p>

        <div className="treatment-divider-wrap">
          <TreatmentDivider />
        </div>

        {/* Treatment Packages Carousel */}
        <div className="mt-12">
          <div className={styles.carouselHeader}>
            <div>
              <h3 className="treatment-heading-title m-0">
                {locale === 'tr' ? 'Tedavi Paketleri' : 'Treatment Packages'}
              </h3>
              <p className="text-slate-500 text-sm mt-2">
                {locale === 'tr'
                  ? 'Master Smile Studio İstanbul, kusursuz gülüşünüz için avantajlı her şey dahil tedavi paketleri sunar.'
                  : 'Master Smile Studio in Istanbul offers premium packages with dental treatments for your perfect smile.'}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="treatment-nav-circle-btn treatment-nav-btn-sm"
                aria-label="Previous packages"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="treatment-nav-circle-btn treatment-nav-btn-sm"
                aria-label="Next packages"
              >
                ›
              </button>
            </div>
          </div>

          <div className={styles.bannersGrid}>
            {packageBanners.slice(currentIdx, currentIdx + 3).map((item, idx) => (
              <div key={idx} className={styles.bannerCard}>
                <div className={styles.bannerImgWrap}>
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
