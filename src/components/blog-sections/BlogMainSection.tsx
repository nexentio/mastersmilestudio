'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { SITE_CONFIG, getWhatsAppLink } from '@/config/site';
import { BLOG_POSTS, BlogPost } from '@/data/blog-page-data';
import styles from './BlogMainSection.module.css';

export default function BlogMainSection() {
  const locale = useLocale();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [certificateModalOpen, setCertificateModalOpen] = useState(false);

  const getLocalized = (obj: Record<string, string> | undefined) => {
    if (!obj) return '';
    return obj[locale] || obj.en || obj.tr || '';
  };

  const filteredPosts =
    selectedCategory === 'all'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  const UI_TEXT = {
    readMore: {
      en: 'Read More',
      tr: 'Devamını Oku',
      de: 'Mehr lesen',
      pl: 'Czytaj więcej',
      pt: 'Ler mais',
      es: 'Leer más',
      ru: 'Читать далее',
    },
    categoriesTitle: {
      en: 'Categories',
      tr: 'Kategoriler',
      de: 'Kategorien',
      pl: 'Kategorie',
      pt: 'Categorias',
      es: 'Categorías',
      ru: 'Категории',
    },
    catCelebrities: {
      en: 'Celebrities Teeth',
      tr: 'Ünlülerin Dişleri',
      de: 'Zähne der Prominenten',
      pl: 'Zęby Gwiazd',
      pt: 'Dentes dos Famosos',
      es: 'Dientes de Famosos',
      ru: 'Зубы знаменитостей',
    },
    catTurkeyTeeth: {
      en: 'Turkey Teeth',
      tr: 'Türkiye Diş Tedavileri',
      de: 'Zahnbehandlung Türkei',
      pl: 'Zęby w Turcji',
      pt: 'Dentes na Turquia',
      es: 'Dientes en Turquía',
      ru: 'Лечение зубов в Турции',
    },
    allPosts: {
      en: 'All Articles',
      tr: 'Tüm Yazılar',
      de: 'Alle Artikel',
      pl: 'Wszystkie artykuły',
      pt: 'Todos os Artigos',
      es: 'Todos los Artículos',
      ru: 'Все статьи',
    },
    consultationTitle: {
      en: 'Contact Us For Free Consultation',
      tr: 'Ücretsiz Konsültasyon İçin Ulaşın',
      de: 'Kontaktieren Sie uns für eine kostenlose Beratung',
      pl: 'Skontaktuj się w celu bezpłatnej konsultacji',
      pt: 'Contacte-nos para uma Consulta Gratuita',
      es: 'Contáctenos para una Consulta Gratuita',
      ru: 'Свяжитесь с нами для бесплатной консультации',
    },
    consultationSubtitle: {
      en: 'Send us your dental photos via WhatsApp for an immediate assessment from our specialists.',
      tr: 'Uzman hekimlerimizden anında değerlendirme almak için diş fotoğraflarınızı WhatsApp üzerinden gönderin.',
      de: 'Senden Sie uns Ihre Fotos per WhatsApp für eine direkte Einschätzung durch unsere Zahnärzte.',
      pl: 'Prześlij nam zdjęcia swoich zębów przez WhatsApp, aby uzyskać szybką wycenę.',
      pt: 'Envie-nos as suas fotografias por WhatsApp para uma avaliação imediata dos nossos médicos.',
      es: 'Envíenos sus fotos por WhatsApp para una evaluación inmediata por nuestros especialistas.',
      ru: 'Отправьте фото зубов в WhatsApp для быстрой консультации с нашими врачами.',
    },
    chatWhatsApp: {
      en: 'Chat on WhatsApp',
      tr: 'WhatsApp ile Danışın',
      de: 'Über WhatsApp anfragen',
      pl: 'Napisz na WhatsApp',
      pt: 'Falar no WhatsApp',
      es: 'Consultar por WhatsApp',
      ru: 'Написать в WhatsApp',
    },
    getQuote: {
      en: 'GET QUOTE',
      tr: 'TEKLİF AL',
      de: 'ANGEBOT',
      pl: 'WYCENA',
      pt: 'ORÇAMENTO',
      es: 'PRESUPUESTO',
      ru: 'РАСЧЕТ',
    },
    treatmentsTitle: {
      en: 'Treatment',
      tr: 'Tedavi',
      de: 'Behandlung',
      pl: 'Zabiegi',
      pt: 'Tratamentos',
      es: 'Tratamientos',
      ru: 'Лечение',
    },
    certificateBadge: {
      en: 'Official Ministry Accreditation',
      tr: 'T.C. Sağlık Bakanlığı Onaylı',
      de: 'Offizielle Akkreditierung',
      pl: 'Oficjalna akredytacja',
      pt: 'Acreditação Oficial',
      es: 'Acreditación Oficial',
      ru: 'Официальная аккредитация',
    },
    certificateTitle: {
      en: 'International Health Tourism Authorization',
      tr: 'Uluslararası Sağlık Turizmi Yetki Belgesi',
      de: 'Genehmigung für Gesundheitstourismus',
      pl: 'Certyfikat Turystyki Medycznej',
      pt: 'Autorização de Turismo de Saúde',
      es: 'Autorización de Turismo de Salud',
      ru: 'Сертификат медицинского туризма',
    },
    certificateDesc: {
      en: 'Master Smile Studio is officially certified by the Republic of Türkiye Ministry of Health for international dental tourism.',
      tr: 'Master Smile Studio, uluslararası sağlık turizmi alanında T.C. Sağlık Bakanlığı tarafından resmi olarak yetkilendirilmiş ve akredite edilmiştir.',
      de: 'Master Smile Studio ist vom türkischen Gesundheitsministerium für internationalen Zahntourismus offiziell zertifiziert.',
      pl: 'Master Smile Studio posiada oficjalny certyfikat Ministerstwa Zdrowia w zakresie międzynarodowej turystyki stomatologicznej.',
      pt: 'A Master Smile Studio é oficialmente certificada pelo Ministério da Saúde para turismo dentário internacional.',
      es: 'Master Smile Studio está oficialmente certificada por el Ministerio de Salud para turismo dental internacional.',
      ru: 'Master Smile Studio официально сертифицирована Министерством здравоохранения Турции для международного стоматологического туризма.',
    },
    certificateViewBtn: {
      en: 'View Official Certificate ↗',
      tr: 'Yetki Belgesini İncele ↗',
      de: 'Zertifikat ansehen ↗',
      pl: 'Zobacz certyfikat ↗',
      pt: 'Ver Certificado ↗',
      es: 'Ver Certificado ↗',
      ru: 'Посмотреть сертификат ↗',
    },
  };

  const SIDEBAR_TREATMENTS = [
    {
      title: {
        en: 'Dental Implants',
        tr: 'Diş İmplantları',
        de: 'Zahnimplantate',
        pl: 'Implanty Zębowe',
        pt: 'Implantes Dentários',
        es: 'Implantes Dentales',
        ru: 'Зубные импланты',
      },
      href: '/treatments/dental-implants/',
      hasImage: true,
    },
    {
      title: {
        en: 'Dental Crowns',
        tr: 'Diş Kaplamaları (Kron)',
        de: 'Zahnkronen',
        pl: 'Korony Zębowe',
        pt: 'Coroas Dentárias',
        es: 'Coronas Dentales',
        ru: 'Зубные коронки',
      },
      href: '/treatments/dental-crowns/',
      hasImage: false,
    },
    {
      title: {
        en: 'Dental Veneers',
        tr: 'Lamine Diş (Veneer)',
        de: 'Veneers',
        pl: 'Licówki Zębowe',
        pt: 'Facetas Dentárias',
        es: 'Carillas Dentales',
        ru: 'Виниры для зубов',
      },
      href: '/treatments/dental-veneers/',
      hasImage: false,
    },
    {
      title: {
        en: 'Dental Bridge',
        tr: 'Diş Köprüsü',
        de: 'Zahnbrücke',
        pl: 'Mosty Protetyczne',
        pt: 'Ponte Dentária',
        es: 'Puente Dental',
        ru: 'Зубной мост',
      },
      href: '/treatments/dental-bridges/',
      hasImage: false,
    },
    {
      title: {
        en: 'Dentures',
        tr: 'İmplant Üstü Protezler',
        de: 'Zahnersatz / Prothesen',
        pl: 'Protezy Zębowe',
        pt: 'Próteses Dentárias',
        es: 'Dentaduras Postizas',
        ru: 'Зубные протезы',
      },
      href: '/treatments/dentures/',
      hasImage: false,
    },
    {
      title: {
        en: 'Cosmetic Dentistry',
        tr: 'Estetik Diş Hekimliği',
        de: 'Ästhetische Zahnmedizin',
        pl: 'Stomatologia Estetyczna',
        pt: 'Dentisteria Estética',
        es: 'Odontología Estética',
        ru: 'Эстетическая стоматология',
      },
      href: '/treatments/cosmetic-dentistry/',
      hasImage: false,
    },
    {
      title: {
        en: 'General Dentistry',
        tr: 'Genel Diş Tedavileri',
        de: 'Allgemeine Zahnheilkunde',
        pl: 'Stomatologia Ogólna',
        pt: 'Dentisteria Geral',
        es: 'Odontología General',
        ru: 'Общая стоматология',
      },
      href: '/treatments/general-dentistry/',
      hasImage: false,
    },
  ];

  return (
    <section className={styles.standardCenter3} aria-label="Dental Articles and Guides">
      <div className={styles.pagegrid}>
        {/* Left Column: 3-Column Blog Cards Grid */}
        <div className={styles.s1}>
          <div className={styles.list}>
            {filteredPosts.map((post: BlogPost) => (
              <article key={post.slug} className={styles.item}>
                <div className={styles.imgWrapper}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={styles.imgLink}
                    aria-label={getLocalized(post.title)}
                  >
                    <Image
                      src={post.image}
                      alt={getLocalized(post.title)}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 320px"
                      className={styles.img}
                    />
                  </Link>
                </div>

                <Link href={`/blog/${post.slug}`} className={styles.name}>
                  {getLocalized(post.title)}
                </Link>

                <div className={styles.buttonWrapper}>
                  <Link href={`/blog/${post.slug}`} className={styles.readMoreBtn}>
                    {getLocalized(UI_TEXT.readMore)}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Right Column: Sticky Sidebar */}
        <aside className={styles.s2}>
          <div className={styles.sticky}>
            {/* Categories Card */}
            <div className={styles.kategoriler}>
              <div className={styles.catTitle}>
                {getLocalized(UI_TEXT.categoriesTitle)}
              </div>
              <div className={styles.kategoriList}>
                <div className={styles.kategoriItem}>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('all')}
                    className={styles.kategoriLink}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      fontWeight: selectedCategory === 'all' ? 800 : 600,
                    }}
                  >
                    <span className={styles.arrowIcon}>→</span>
                    <span>{getLocalized(UI_TEXT.allPosts)}</span>
                  </button>
                </div>
                <div className={styles.kategoriItem}>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('celebrities-teeth')}
                    className={styles.kategoriLink}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      fontWeight: selectedCategory === 'celebrities-teeth' ? 800 : 600,
                    }}
                  >
                    <span className={styles.arrowIcon}>→</span>
                    <span>{getLocalized(UI_TEXT.catCelebrities)}</span>
                  </button>
                </div>
                <div className={styles.kategoriItem}>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory('turkey-teeth')}
                    className={styles.kategoriLink}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      fontWeight: selectedCategory === 'turkey-teeth' ? 800 : 600,
                    }}
                  >
                    <span className={styles.arrowIcon}>→</span>
                    <span>{getLocalized(UI_TEXT.catTurkeyTeeth)}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* VIP Consultation Widget */}
            <div className={styles.consultationWidget}>
              <div className={styles.widgetBanner}>
                <Image
                  src="/mss-patients-montage.png"
                  alt="Master Smile Studio Consultation"
                  width={582}
                  height={578}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  className={styles.widgetBannerImg}
                />
              </div>
              <div className={styles.widgetBody}>
                <div className={styles.widgetBrand}>Master Smile Studio</div>
                <h3 className={styles.widgetTitle}>{getLocalized(UI_TEXT.consultationTitle)}</h3>
                <p className={styles.widgetSubtitle}>
                  {getLocalized(UI_TEXT.consultationSubtitle)}
                </p>
                <a
                  href={getWhatsAppLink(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.widgetBtnWhatsApp}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
                  </svg>
                  <span>{getLocalized(UI_TEXT.chatWhatsApp)}</span>
                </a>
                <div className={styles.widgetActionRow}>
                  <Link href="/contact" className={styles.widgetBtnQuote}>
                    {getLocalized(UI_TEXT.getQuote)}
                  </Link>
                  <a
                    aria-label="Phone"
                    href={`tel:${SITE_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
                    className={styles.widgetBtnPhone}
                    title={SITE_CONFIG.phone}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Clean Official Certificate Card */}
            <div 
              className={styles.certCard}
              onClick={() => setCertificateModalOpen(true)}
              role="button"
              tabIndex={0}
              aria-label={locale === 'tr' ? 'Sağlık Turizmi Yetki Belgesini Büyüt' : 'View Health Tourism Certificate'}
            >
              <div className={styles.certFrame}>
                <Image
                  src="/certificates/mastersmilestudio_international-health-tourism-authorization-certification.jpg"
                  alt="T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi"
                  width={1440}
                  height={1040}
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                  className={styles.certImg}
                />
                <div className={styles.certHoverBadge}>
                  <span className={styles.certZoomIcon}>🔍</span>
                  <span>{locale === 'tr' ? 'Büyütmek için tıklayın' : 'Click to enlarge'}</span>
                </div>
              </div>
              <div className={styles.certCaption}>
                <div className={styles.certCaptionTitle}>
                  {locale === 'tr'
                    ? 'Uluslararası Sağlık Turizmi Yetki Belgesi'
                    : locale === 'de'
                    ? 'Zertifikat für Gesundheitstourismus'
                    : locale === 'ru'
                    ? 'Сертификат медицинского туризма'
                    : locale === 'pl'
                    ? 'Certyfikat Turystyki Medycznej'
                    : locale === 'pt'
                    ? 'Autorização de Turismo de Saúde'
                    : locale === 'es'
                    ? 'Autorización de Turismo de Salud'
                    : 'Health Tourism Authorization Certificate'}
                </div>
                <div className={styles.certCaptionSub}>T.C. Sağlık Bakanlığı</div>
              </div>
            </div>

            {/* Treatment Miniblog Widget */}
            <div className={styles.miniblog1}>
              <div className={styles.xtitle}>{getLocalized(UI_TEXT.treatmentsTitle)}</div>
              <div className={styles.treatmentList}>
                {SIDEBAR_TREATMENTS.map((item, idx) => (
                  <div key={idx} className={styles.treatmentItem}>
                    {item.hasImage && (
                      <div className={styles.treatmentThumb}>
                        <Link href={item.href} aria-label={getLocalized(item.title)} className={styles.treatmentThumbLink}>
                          <Image
                            src="/dental-implant-mss.jpeg"
                            alt={getLocalized(item.title)}
                            fill
                            sizes="300px"
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                          />
                        </Link>
                      </div>
                    )}
                    <Link href={item.href} className={styles.treatmentLink}>
                      <span className={styles.arrowIcon}>→</span>
                      <span>{getLocalized(item.title)}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Certificate Lightbox Modal */}
      {certificateModalOpen && (
        <div 
          className={styles.modalBackdrop}
          onClick={() => setCertificateModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={() => setCertificateModalOpen(false)}
              aria-label="Kapat"
            >
              ✕
            </button>
            <div className={styles.modalImgWrap}>
              <Image
                src="/certificates/mastersmilestudio_international-health-tourism-authorization-certification.jpg"
                alt="T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi"
                width={1440}
                height={1040}
                style={{ width: '100%', height: 'auto', borderRadius: '8px', display: 'block' }}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
