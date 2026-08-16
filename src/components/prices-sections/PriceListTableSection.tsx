'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { PRICE_GROUPS, PRICING_SIDEBAR_DATA } from '@/data/price-list-data';
import styles from './PriceListTableSection.module.css';

export default function PriceListTableSection() {
  const locale = useLocale();

  const getLocalized = (obj: Record<string, string> | undefined) => {
    if (!obj) return '';
    return obj[locale] || obj.en || obj.tr || '';
  };

  const { consultation, treatmentsTitle, featuredTreatment, treatmentLinks, disclaimer } = PRICING_SIDEBAR_DATA;

  const getWhatsAppMessage = () => {
    const messages: Record<string, string> = {
      en: 'Hello Master Smile Studio! I would like to get more information about dental treatment prices and packages.',
      tr: 'Merhaba Master Smile Studio! Diş tedavi fiyatları ve paketler hakkında bilgi almak istiyorum.',
      de: 'Hallo Master Smile Studio! Ich möchte weitere Informationen zu den Preisen und Paketen erhalten.',
      pl: 'Dzień dobry Master Smile Studio! Chciałbym uzyskać więcej informacji na temat cen zabiegów i pakietów.',
      pt: 'Olá Master Smile Studio! Gostaria de obter mais informações sobre os preços dos tratamentos e pacotes.',
      es: '¡Hola Master Smile Studio! Me gustaría recibir más información sobre los precios y paquetes de tratamientos.',
      ru: 'Здравствуйте Master Smile Studio! Я хотел бы узнать больше информации о ценах и пакетах лечения.',
    };
    return encodeURIComponent(messages[locale] || messages.en);
  };

  const whatsappUrl = `https://wa.me/905434568080?text=${getWhatsAppMessage()}`;

  return (
    <section className={styles.standardCenter4} aria-label="Master Smile Studio Price List">
      <div className={styles.pagegrid}>
        {/* S1: LEFT COLUMN - PRICING TABLES */}
        <div className={styles.s1}>
          {PRICE_GROUPS.map((group) => (
            <div key={group.id} className={styles.flGroup}>
              <h2 className={styles.flGroupTitle}>{getLocalized(group.title)}</h2>

              <div className={styles.flTables}>
                {group.tables.map((table, tIdx) => (
                  <div key={tIdx} className={styles.flTable}>
                    <div className={styles.flCaption}>
                      <span>{getLocalized(table.caption)}</span>
                    </div>

                    <div className={styles.tableScrollWrap}>
                      {/* Column Header */}
                      <div className={`${styles.flRow} ${styles.flColhead}`}>
                        <span className={styles.flName}>
                          {locale === 'tr'
                            ? 'Tedavi'
                            : locale === 'de'
                            ? 'Behandlung'
                            : locale === 'pl'
                            ? 'Zabieg'
                            : locale === 'pt'
                            ? 'Tratamento'
                            : locale === 'es'
                            ? 'Tratamiento'
                            : locale === 'ru'
                            ? 'Процедура'
                            : 'Treatment'}
                        </span>
                        <span className={styles.flPrice}>
                          $ <small>USD</small>
                        </span>
                        <span className={styles.flPrice}>
                          € <small>EUR</small>
                        </span>
                        <span className={styles.flPrice}>
                          £ <small>GBP</small>
                        </span>
                      </div>

                      {/* Rows */}
                      {table.rows.map((row, rIdx) => (
                        <div key={rIdx} className={styles.flRow}>
                          <span className={styles.flName}>{getLocalized(row.name)}</span>
                          <span className={styles.flPrice}>
                            <b>$</b>{row.usd.replace('$', '')}
                          </span>
                          <span className={styles.flPrice}>
                            <b>€</b>{row.eur.replace('€', '')}
                          </span>
                          <span className={styles.flPrice}>
                            <b>£</b>{row.gbp.replace('£', '')}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Explore Bar for Package Tables */}
                    {table.exploreHref && (
                      <div className={styles.flExplore}>
                        <a
                          aria-label="WhatsApp Consultation"
                          className={styles.waBtn}
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                          </svg>
                        </a>
                        <Link className={styles.detayBtn} href={table.exploreHref}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.35-4.35" />
                          </svg>
                          <span>{getLocalized(table.exploreText)}</span>
                        </Link>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Disclaimer Note */}
          <div className={styles.flEkbilgi}>
            {getLocalized(disclaimer)}
          </div>
        </div>

        {/* S2: RIGHT COLUMN - SIDEBAR WIDGETS */}
        <aside className={styles.s2} aria-label="Prices Consultation and Quick Navigation">
          {/* Consultation Card */}
          <div className={styles.minikart}>
            <div className={styles.miniAd}>{consultation.clinicName}</div>
            <div className={styles.miniImgWrap}>
              <Image
                src={consultation.imageSrc}
                alt={consultation.clinicName}
                fill
                sizes="(max-width: 1024px) 100vw, 340px"
                className={styles.miniImg}
              />
            </div>
            <div className={styles.miniInfo}>
              {getLocalized(consultation.info)}
            </div>
            <div className={styles.miniButtons}>
              <Link href="/contact" className={styles.miniQuoteBtn}>
                {getLocalized(consultation.quoteBtn)}
              </Link>
              <a
                aria-label="WhatsApp"
                className={`${styles.miniIconBtn} ${styles.miniWaBtn}`}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
              <a
                aria-label="Phone"
                className={`${styles.miniIconBtn} ${styles.miniPhoneBtn}`}
                href={`tel:${consultation.phone}`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Treatment Links Widget */}
          <div className={styles.miniblog1}>
            <div className={styles.xtitle}>{getLocalized(treatmentsTitle)}</div>

            {/* Featured Treatment Card */}
            <Link href={featuredTreatment.href} className={styles.featuredItem}>
              <div className={styles.featuredImgWrap}>
                <Image
                  src={featuredTreatment.imageSrc}
                  alt={getLocalized(featuredTreatment.title)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 340px"
                  className={styles.featuredImg}
                />
              </div>
              <div className={styles.featuredTitle}>
                <span>{getLocalized(featuredTreatment.title)}</span>
                <span className={styles.featuredArrow}>→</span>
              </div>
            </Link>

            {/* Treatment Links List */}
            {treatmentLinks.map((link, idx) => (
              <Link key={idx} href={link.href} className={styles.blogItem}>
                <span>{getLocalized(link.title)}</span>
                <span className={styles.arrowIcon}>→</span>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
