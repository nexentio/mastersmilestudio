'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { PACKAGES_DATA, PACKAGES_ADDITIONAL_INFO } from '@/data/packages-page-data';
import { getWhatsAppLink, SITE_CONFIG } from '@/config/site';
import styles from './PackagesGridSection.module.css';

export default function PackagesGridSection() {
  const locale = useLocale();

  const getLocalized = (obj: Record<string, string> | undefined) => {
    if (!obj) return '';
    return obj[locale] || obj.en || obj.tr || '';
  };

  const whatsappNumber = SITE_CONFIG.whatsappNumbers[locale] || SITE_CONFIG.whatsappNumbers.en || '905373059947';

  return (
    <section className={styles.standardCenter4} aria-label="Turkey Teeth Dental Packages">
      <div className={styles.sect30}>
        {PACKAGES_DATA.map((group) => (
          <div key={group.id} className={styles.cat}>
            <h2 className={styles.cattitle}>
              <span className={styles.catIcon}>➤</span>
              <span>{getLocalized(group.categoryTitle)}</span>
            </h2>

            <div className={styles.grid}>
              {group.packages.map((pkg) => {
                const pkgHead = getLocalized(pkg.head);
                const pkgWaMsg = encodeURIComponent(
                  locale === 'tr'
                    ? `Merhaba Master Smile Studio! "${pkgHead}" için kişiye özel fiyat teklifi, otel ve transfer dahil tedavi planı almak istiyorum.`
                    : locale === 'de'
                    ? `Hallo Master Smile Studio! Ich möchte ein persönliches Preisangebot inklusive Hotel & Transfer für "${pkgHead}" erhalten.`
                    : locale === 'pl'
                    ? `Dzień dobry Master Smile Studio! Chciałbym otrzymać indywidualną wycenę z hotelem i transferem dla "${pkgHead}".`
                    : locale === 'pt'
                    ? `Olá Master Smile Studio! Gostaria de receber um orçamento personalizado com hotel e transfer para "${pkgHead}".`
                    : locale === 'es'
                    ? `¡Hola Master Smile Studio! Me gustaría recibir un presupuesto personalizado con hotel y traslado para "${pkgHead}".`
                    : locale === 'ru'
                    ? `Здравствуйте Master Smile Studio! Я хотел бы получить индивидуальный расчет с отелем и трансфером для "${pkgHead}".`
                    : `Hello Master Smile Studio! I would like to get a personalized price quote, hotel and transfer package for "${pkgHead}".`
                );
                const pkgWaUrl = `https://wa.me/${whatsappNumber}?text=${pkgWaMsg}`;

                return (
                  <div key={pkg.id} className={styles.s}>
                    <div>
                      {/* Package Head Title */}
                      <h3 className={styles.head}>{pkgHead}</h3>

                      {/* Image Cover */}
                      <div className={styles.cover}>
                        <Image
                          src={pkg.imageSrc}
                          alt={pkg.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 380px"
                          className={styles.coverImg}
                        />
                      </div>

                      {/* Treatment Duration */}
                      <div className={styles.text1}>
                        <span className={styles.text1x1}>{getLocalized(pkg.durationLabel)}</span>
                        <span className={styles.text1x2}>{getLocalized(pkg.durationValue)}</span>
                      </div>

                      {/* Inclusions Title */}
                      <div className={styles.baslik1}>{getLocalized(pkg.includedTitle)}</div>

                      {/* Inclusions List */}
                      <div className={styles.text2}>
                        <ul>
                          {pkg.inclusions.map((item, idx) => (
                            <li key={idx}>{getLocalized(item)}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      {/* Bottom Clinical Note */}
                      <div className={styles.text3}>{getLocalized(pkg.note)}</div>

                      {/* VIP Inclusions Box */}
                      <div className={styles.vipBox}>
                        <div className={styles.vipTitle}>
                          {getLocalized(pkg.vipBadge) || (locale === 'tr' ? 'Her Şey Dahil VIP Paket' : 'All-Inclusive VIP Package')}
                        </div>
                        <div className={styles.vipSub}>
                          {locale === 'tr'
                            ? '5★ Otel Konaklama + VIP Transfer + 3D Tomografi Dahil'
                            : locale === 'de'
                            ? '5★ Hotel + VIP-Transfer + 3D-CT inklusive'
                            : locale === 'pl'
                            ? 'Hotel 5★ + Transfery VIP + Tomografia 3D w cenie'
                            : locale === 'pt'
                            ? 'Hotel 5★ + Transfers VIP + Tomografia 3D incluídos'
                            : locale === 'es'
                            ? 'Hotel 5★ + Traslados VIP + Tomografía 3D incluidos'
                            : locale === 'ru'
                            ? '5★ Отель + VIP-трансфер + 3D КТ включены'
                            : '5★ Luxury Hotel + VIP Transfers + 3D CBCT Included'}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className={styles.buttonGroup}>
                        <a
                          href={pkgWaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.waButton}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                          </svg>
                          <span>
                            {locale === 'tr'
                              ? 'Fiyat Teklifi Al'
                              : locale === 'de'
                              ? 'Angebot anfordern'
                              : locale === 'pl'
                              ? 'Poproś o wycenę'
                              : locale === 'pt'
                              ? 'Pedir Orçamento'
                              : locale === 'es'
                              ? 'Pedir Presupuesto'
                              : locale === 'ru'
                              ? 'Получить расчет'
                              : 'Get Package Quote'}
                          </span>
                        </a>

                        <Link href="#contact" className={styles.formLink}>
                          <span>{getLocalized(pkg.ctaText)}</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* 1:1 Packages Additional Information / Terms List */}
        <ul className={styles.paketlerEkbilgi} aria-label="Package Terms and Clinical Information">
          {PACKAGES_ADDITIONAL_INFO.map((item, idx) => (
            <li key={idx}>{getLocalized(item)}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
