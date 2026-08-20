'use client';

import React from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { SITE_CONFIG, getWhatsAppLink } from '@/config/site';
import styles from './ContactInfoSection.module.css';

const CONTACT_INFO_DATA: Record<
  string,
  {
    address: string;
    phone: string;
    phoneRaw: string;
    email: string;
    hours: {
      weekdaysLabel: string;
      weekdaysTime: string;
      saturdayLabel: string;
      saturdayTime: string;
      sundayLabel: string;
      sundayTime: string;
    };
  }
> = {
  tr: {
    address: 'Güzeloba Mah. Çağlayangil Cad. No: 6-B, 07230 Muratpaşa / Antalya, Türkiye',
    phone: '+90 534 696 31 63',
    phoneRaw: '+905346963163',
    email: 'info@mastersmilestudio.com',
    hours: {
      weekdaysLabel: 'Hafta İçi',
      weekdaysTime: '09:00 - 18:00',
      saturdayLabel: 'Cumartesi',
      saturdayTime: '09:00 - 16:00',
      sundayLabel: 'Pazar',
      sundayTime: 'Kapalı',
    },
  },
  en: {
    address: 'Güzeloba Mah. Çağlayangil Cad. No: 6-B, 07230 Muratpaşa / Antalya, Turkey',
    phone: '+90 537 305 99 47',
    phoneRaw: '+905373059947',
    email: 'info@mastersmilestudio.com',
    hours: {
      weekdaysLabel: 'Weekdays',
      weekdaysTime: '09:00 - 18:00',
      saturdayLabel: 'Saturday',
      saturdayTime: '09:00 - 16:00',
      sundayLabel: 'Sunday',
      sundayTime: 'Closed',
    },
  },
  de: {
    address: 'Güzeloba Mah. Çağlayangil Cad. No: 6-B, 07230 Muratpaşa / Antalya, Türkei',
    phone: '+90 537 305 99 41',
    phoneRaw: '+905373059941',
    email: 'info@mastersmilestudio.com',
    hours: {
      weekdaysLabel: 'Wochentage',
      weekdaysTime: '09:00 - 18:00',
      saturdayLabel: 'Samstag',
      saturdayTime: '09:00 - 16:00',
      sundayLabel: 'Sonntag',
      sundayTime: 'Geschlossen',
    },
  },
  pl: {
    address: 'Güzeloba Mah. Çağlayangil Cad. No: 6-B, 07230 Muratpaşa / Antalya, Turcja',
    phone: '+90 533 197 39 07',
    phoneRaw: '+905331973907',
    email: 'info@mastersmilestudio.com',
    hours: {
      weekdaysLabel: 'Dni robocze',
      weekdaysTime: '09:00 - 18:00',
      saturdayLabel: 'Sobota',
      saturdayTime: '09:00 - 16:00',
      sundayLabel: 'Niedziela',
      sundayTime: 'Zamknięte',
    },
  },
  pt: {
    address: 'Güzeloba Mah. Çağlayangil Cad. No: 6-B, 07230 Muratpaşa / Antalya, Turquia',
    phone: '+90 537 305 99 47',
    phoneRaw: '+905373059947',
    email: 'info@mastersmilestudio.com',
    hours: {
      weekdaysLabel: 'Dias úteis',
      weekdaysTime: '09:00 - 18:00',
      saturdayLabel: 'Sábado',
      saturdayTime: '09:00 - 16:00',
      sundayLabel: 'Domingo',
      sundayTime: 'Fechado',
    },
  },
  es: {
    address: 'Güzeloba Mah. Çağlayangil Cad. No: 6-B, 07230 Muratpaşa / Antalya, Turquía',
    phone: '+90 537 305 99 47',
    phoneRaw: '+905373059947',
    email: 'info@mastersmilestudio.com',
    hours: {
      weekdaysLabel: 'Días laborables',
      weekdaysTime: '09:00 - 18:00',
      saturdayLabel: 'Sábado',
      saturdayTime: '09:00 - 16:00',
      sundayLabel: 'Domingo',
      sundayTime: 'Cerrado',
    },
  },
  ru: {
    address: 'Güzeloba Mah. Çağlayangil Cad. No: 6-B, 07230 Muratpaşa / Antalya, Турция',
    phone: '+90 534 696 31 89',
    phoneRaw: '+905346963189',
    email: 'info@mastersmilestudio.com',
    hours: {
      weekdaysLabel: 'Будни',
      weekdaysTime: '09:00 - 18:00',
      saturdayLabel: 'Суббота',
      saturdayTime: '09:00 - 16:00',
      sundayLabel: 'Воскресенье',
      sundayTime: 'Закрыто',
    },
  },
};

export default function ContactInfoSection() {
  const locale = useLocale();
  const info = CONTACT_INFO_DATA[locale] || CONTACT_INFO_DATA.en;
  const whatsappUrl = getWhatsAppLink(locale);

  return (
    <section className={styles.sectinfo1} aria-label="Contact Details">
      <div className={styles.standard_center4}>
        <div className={styles.grid}>
          {/* Left Column: Info Table & Socials */}
          <div className={`${styles.s} ${styles.s1}`}>
            <div className={styles.table}>
              <div className={styles.inner}>
                <table>
                  <tbody>
                    {/* Address Row */}
                    <tr>
                      <td className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                        </svg>
                      </td>
                      <td className={styles.text}>{info.address}</td>
                    </tr>

                    {/* Phone Row */}
                    <tr>
                      <td className={styles.icon}>
                        <a aria-label={info.phone} href={`tel:${info.phoneRaw}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z" />
                          </svg>
                        </a>
                      </td>
                      <td className={styles.text}>
                        <a href={`tel:${info.phoneRaw}`}>{info.phone}</a>
                      </td>
                    </tr>

                    {/* Email Row */}
                    <tr>
                      <td className={styles.icon}>
                        <a aria-label="Email Master Smile Studio" href={`mailto:${info.email}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                          </svg>
                        </a>
                      </td>
                      <td className={styles.text}>
                        <a href={`mailto:${info.email}`}>{info.email}</a>
                      </td>
                    </tr>

                    {/* Working Hours Row */}
                    <tr>
                      <td className={styles.icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 236.1 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                        </svg>
                      </td>
                      <td className={styles.text}>
                        <table className={styles.hoursTable}>
                          <tbody>
                            <tr>
                              <td>{info.hours.weekdaysLabel}</td>
                              <td>{info.hours.weekdaysTime}</td>
                            </tr>
                            <tr>
                              <td>{info.hours.saturdayLabel}</td>
                              <td>{info.hours.saturdayTime}</td>
                            </tr>
                            <tr>
                              <td>{info.hours.sundayLabel}</td>
                              <td>{info.hours.sundayTime}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className={styles.icons}>
              <a
                aria-label="Instagram"
                className={styles.socialBtn}
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/social/insta.png.webp"
                  alt="Instagram"
                  width={42}
                  height={42}
                  className={styles.socialImg}
                />
              </a>

              <a
                aria-label="YouTube"
                className={styles.socialBtn}
                href={SITE_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/social/yt.png.webp"
                  alt="YouTube"
                  width={42}
                  height={42}
                  className={styles.socialImg}
                />
              </a>

              <a
                aria-label="Facebook"
                className={styles.socialBtn}
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/social/face.png.webp"
                  alt="Facebook"
                  width={42}
                  height={42}
                  className={styles.socialImg}
                />
              </a>

              <a
                aria-label="WhatsApp"
                className={styles.socialBtn}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/social/wa.png.webp"
                  alt="WhatsApp"
                  width={42}
                  height={42}
                  className={styles.socialImg}
                />
              </a>
            </div>
          </div>

          {/* Right Column: Clinic Image */}
          <div className={`${styles.s} ${styles.s2}`}>
            <Image
              src="/form1.webp"
              alt="Master Smile Studio Clinic"
              fill
              sizes="(max-width: 900px) 100vw, 580px"
              className={styles.clinicImg}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
