'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentRightTreatmentAccordion.module.css';

export default function TreatmentRightTreatmentAccordion() {
  const locale = useLocale();
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const treatments = [
    {
      title: locale === 'tr' ? 'Full Mouth Implants' : 'Full Mouth Implants',
      target: locale === 'tr' ? 'Üst ve alt çenesinde hiç dişi kalmayan hastalar' : 'Patients who have no teeth left in their upper and lower jaws',
      desc: locale === 'tr' ? 'Tüm dişlerin implantlarla sabitlendiği komple bir tam ağız restorasyonudur.' : 'It is a full mouth restoration where all teeth are fixed with implants.',
      img: 'https://sohodent.com/doc/data1/full-mouth-implant-copy.webp',
      href: '/treatments/dental-implants/full-mouth-implants',
    },
    {
      title: locale === 'tr' ? 'All-on-4 Implants' : 'All-on-4 Implants',
      target: locale === 'tr' ? 'Dişsiz olan veya dişlerinin çekilmesi gereken ve kısa sürede sabit diş isteyen hastalar' : 'Patients who are toothless or have teeth that need to be extracted, and who want fixed teeth in a short time.',
      desc: locale === 'tr' ? '4 implant ile sabit protez yapılır; çene kemiği yetersiz olanlara da uygulanabilir.' : 'A fixed prosthesis is made with 4 implants; it can also be applied to those with insufficient jawbone.',
      img: 'https://sohodent.com/doc/data1/all-on-4-copy.webp',
      href: '/treatments/dental-implants/all-on-4-implants',
    },
    {
      title: locale === 'tr' ? 'All-on-6 Implants' : 'All-on-6 Implants',
      target: locale === 'tr' ? 'Daha güçlü çene desteği isteyen dişsiz hastalar.' : 'Toothless patients who want stronger jaw support.',
      desc: locale === 'tr' ? '6 implant ile daha dayanıklı ve uzun ömürlü bir sabit protez yapılır.' : 'A more durable and long-lasting fixed prosthesis is made with 6 implants.',
      img: 'https://sohodent.com/doc/data1/all-on-six-copy.webp',
      href: '/treatments/dental-implants/all-on-6-implants',
    },
    {
      title: locale === 'tr' ? 'Immediate Implant Treatment' : 'Immediate Implant Treatment',
      target: locale === 'tr' ? 'Yeni diş çektirmiş ve zaman kaybetmeden implant isteyen hastalar' : 'Patients who have just had a tooth extracted and want an implant without losing time',
      desc: locale === 'tr' ? 'İmplant, diş çekimi ile aynı seansta yerleştirilerek zamandan tasarruf sağlar.' : 'The implant is placed in the same session as the tooth extraction, which saves time.',
      img: 'https://sohodent.com/doc/data1/immediate-copy.webp',
      href: '/treatments/dental-implants/immediate-implant-treatment',
    },
    {
      title: locale === 'tr' ? 'Zygomatic Implants' : 'Zygomatic Implants',
      target: locale === 'tr' ? 'Üst çenede geleneksel implantların yapılamadığı kemik kaybı olan hastalar' : 'Patients with bone loss in the upper jaw where traditional implants cannot be placed',
      desc: locale === 'tr' ? 'Elmacık kemiğine yerleştirilen özel implantlardır. Kemik grefti gerekmez.' : 'These are special implants placed in the cheekbone. A bone graft is not required.',
      img: 'https://sohodent.com/doc/data1/zygomatic-implant-copy.webp',
      href: '/treatments/dental-implants/zygomatic-implants',
    },
    {
      title: locale === 'tr' ? 'Zirconium Implants' : 'Zirconium Implants',
      target: locale === 'tr' ? 'Metal alerjisi olan veya yüksek estetik kaygısı olanlar' : 'Those with metal allergies or high aesthetic concerns',
      desc: locale === 'tr' ? 'Doğal dişe estetik olarak en yakın, biyouyumlu beyaz seramik implant türüdür.' : 'It is a biocompatible implant type that is aesthetically closest to a natural tooth.',
      img: 'https://sohodent.com/doc/data1/zirconium-implant-copy.webp',
      href: '/treatments/dental-implants/zirconium-implants',
    },
    {
      title: locale === 'tr' ? 'Implant Supported Dentures' : 'Implant Supported Dentures',
      target: locale === 'tr' ? 'Dişsiz hastalar veya hareketli protez kullanıp sabit bir çözüm isteyenler' : 'Toothless patients or those who use dentures but want a fixed solution',
      desc: locale === 'tr' ? 'Hareketli protezlere kıyasla çok daha stabil, kaymayan ve konforlu bir çözümdür.' : 'It is a more stable and comfortable solution compared to removable dentures',
      img: 'https://sohodent.com/doc/data1/implant-supported-dentures-copy.webp',
      href: '/treatments/dental-implants/implant-supported-dentures',
    },
    {
      title: locale === 'tr' ? 'Sinus Lifting' : 'Sinus Lifting',
      target: locale === 'tr' ? 'Üst çenede implant için yeterli kemik hacmi bulunmayan hastalar' : 'Patients who do not have enough bone volume in the upper jaw for an implant',
      desc: locale === 'tr' ? 'Sinüs bölgesine kemik tozu eklenerek implant için gerekli zemin hazırlanır.' : 'The ground is prepared for the implant by adding bone powder to the sinus area.',
      img: 'https://sohodent.com/doc/data1/sinus-lifting-copy.webp',
      href: '/treatments/dental-implants/sinus-lifting',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className="treatment-container">
        {/* Head */}
        <div className="head mb-12">
          <div className="grid1 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="s s1">
              <h2 className="treatment-heading-title m-0">
                {locale === 'tr' ? 'Sizin İçin En Doğru Tedavi Hangisi?' : 'Find the Right Treatment for You'}
              </h2>
            </div>
            <div className="s s2">
              <p className="treatment-text-p m-0 text-slate-500">
                {locale === 'tr'
                  ? 'Hangi dental tedavinin ihtiyaçlarınıza uygun olduğundan emin değil misiniz? Her prosedürün kimler için olduğunu ve neler sunduğunu görmek için seçeneklerimize göz atın.'
                  : 'Not sure which dental treatment suits your needs? Browse through our treatment options to see who each procedure is for and what it offers so you can make informed decisions about your dental care.'}
              </p>
            </div>
          </div>
        </div>

        {/* Center Grid */}
        <div className="center">
          <div className={styles.grid}>
            {/* Left Column: Accordion List */}
            <div>
              <div className="accordion flex flex-col">
                {treatments.map((item, idx) => {
                  const isActive = activeIdx === idx;
                  return (
                    <div
                      key={idx}
                      className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                    >
                      {/* Title Bar */}
                      <div
                        className={styles.titleRow}
                        onClick={() => setActiveIdx(idx)}
                      >
                        <span className="flex flex-col">
                          <span className={styles.titleText}>
                            {item.title}
                          </span>
                          <span className={styles.targetText}>
                            {item.target}
                          </span>
                        </span>

                        {/* Chevron Icon */}
                        <span className={`${styles.chevron} ${isActive ? styles.chevronActive : ''}`}>
                          <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                          </svg>
                        </span>
                      </div>

                      {/* Expanded Content */}
                      {isActive && (
                        <div className={styles.contentBox}>
                          <p className="treatment-text-p font-medium text-slate-800 mb-5">
                            {item.desc}
                          </p>

                          {/* Button */}
                          <div className="mt-3">
                            <Link
                              className={styles.btn}
                              href={item.href}
                            >
                              READ MORE
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Sticky Preview Image */}
            <div className={styles.stickyPreview}>
              <Link
                href={treatments[activeIdx].href}
                className={styles.previewCard}
              >
                <img
                  width="600"
                  height="369"
                  src={treatments[activeIdx].img}
                  alt={treatments[activeIdx].title}
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
