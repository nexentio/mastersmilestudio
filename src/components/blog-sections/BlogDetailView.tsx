'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { getWhatsAppLink } from '@/config/site';
import { BLOG_POSTS, BlogPost } from '@/data/blog-page-data';
import { getBlogDetailBySlug, BlogDetailArticle } from '@/data/blog-detail-data';
import { PACKAGES_DATA } from '@/data/packages-page-data';
import { BEFORE_AFTER_PAGE_DATA } from '@/data/before-after-page-data';
import styles from './BlogDetailView.module.css';

interface BlogDetailViewProps {
  slug: string;
}

export default function BlogDetailView({ slug }: BlogDetailViewProps) {
  const locale = useLocale();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const article: BlogDetailArticle = getBlogDetailBySlug(slug);
  const currentPost = BLOG_POSTS.find((p) => p.slug === slug);

  const getLocalized = (obj: Record<string, string> | undefined) => {
    if (!obj) return '';
    return obj[locale] || obj.en || obj.tr || '';
  };

  const getLocalizedArray = (obj: Record<string, string[]> | undefined) => {
    if (!obj) return [];
    return obj[locale] || obj.en || obj.tr || [];
  };

  const UI_TEXT = {
    home: {
      en: 'Home',
      tr: 'Ana Sayfa',
      de: 'Startseite',
      pl: 'Strona główna',
      pt: 'Início',
      es: 'Inicio',
      ru: 'Главная',
    },
    blog: {
      en: 'Blog',
      tr: 'Blog',
      de: 'Blog',
      pl: 'Blog',
      pt: 'Blog',
      es: 'Blog',
      ru: 'Блог',
    },
    verifiedMedical: {
      en: 'Clinically Reviewed',
      tr: 'Klinik Olarak Doğrulandı',
      de: 'Klinisch geprüft',
      pl: 'Zweryfikowane klinicznie',
      pt: 'Clinicamente Verificado',
      es: 'Revisado Clínicamente',
      ru: 'Проверено врачами',
    },
    packagesTitle: {
      en: 'All-Inclusive Dental Treatment Packages',
      tr: 'Her Şey Dahil Diş Tedavi Paketleri',
      de: 'All-Inclusive Zahnbehandlungspakete',
      pl: 'Pakiety leczenia stomatologicznego All-Inclusive',
      pt: 'Pacotes de Tratamento Dentário Tudo Incluído',
      es: 'Paquetes de Tratamiento Dental Todo Incluido',
      ru: 'Пакеты лечения зубов «Все включено»',
    },
    packagesSubtitle: {
      en: 'Transparent pricing with 5-star hotel accommodation, private VIP airport & clinic transfers, and 10-year warranty included.',
      tr: '5 yıldızlı otel konaklaması, özel VIP havalimanı ve klinik transferleri ve 10 yıl garanti dahil şeffaf fiyatlandırma.',
      de: 'Transparente Preise inklusive 5-Sterne-Hotel, VIP-Transfers und 10 Jahren Garantie.',
      pl: 'Przejrzyste ceny z hotelem 5*, prywatnymi transferami VIP i 10-letnią gwarancją.',
      pt: 'Preços transparentes com hotel de 5 estrelas, transfers VIP e garantia de 10 anos.',
      es: 'Precios transparentes con hotel de 5 estrellas, traslados VIP y 10 años de garantía.',
      ru: 'Прозрачные цены с отелем 5*, VIP-трансфером и 10-летней гарантией.',
    },
    viewAllPackages: {
      en: 'View All Treatment Packages →',
      tr: 'Tüm Tedavi Paketlerini İnceleyin →',
      de: 'Alle Behandlungspakete anzeigen →',
      pl: 'Zobacz wszystkie pakiety leczenia →',
      pt: 'Ver Todos os Pacotes de Tratamento →',
      es: 'Ver Todos los Paquetes de Tratamiento →',
      ru: 'Смотреть все пакеты лечения →',
    },
    baTitle: {
      en: 'From First Visit to Final Smile: Real Transformations',
      tr: 'İlk Muayeneden Kusursuz Gülüşe: Gerçek Hasta Dönüşümleri',
      de: 'Vom Erstbesuch zum Traumlächeln: Echte Transformationen',
      pl: 'Od pierwszej wizyty do idealnego uśmiechu: Prawdziwe metamorfozy',
      pt: 'Da Primeira Consulta ao Sorriso Final: Transformações Reais',
      es: 'De la Primera Cita a la Sonrisa Final: Transformaciones Reales',
      ru: 'От первого визита до идеальной улыбки: реальные преображения',
    },
    baSubtitle: {
      en: 'Explore authentic patient results captured inside Master Smile Studio Antalya. These are more than smiles — they are renewed confidence.',
      tr: 'Master Smile Studio Antalya kliniğimizde elde edilen gerçek hasta sonuçlarını inceleyin. Bunlar bir gülüşten fazlası; yeniden kazanılan özgüvendir.',
      de: 'Entdecken Sie echte Patientenergebnisse aus dem Master Smile Studio Antalya.',
      pl: 'Zobacz autentyczne metamorfozy naszych pacjentów w Master Smile Studio w Antalyi.',
      pt: 'Explore resultados reais de pacientes no Master Smile Studio Antalya.',
      es: 'Descubra resultados reales de pacientes en Master Smile Studio Antalya.',
      ru: 'Ознакомьтесь с реальными результатами пациентов клиники Master Smile Studio в Анталье.',
    },
    viewGallery: {
      en: 'View Full Before & After Gallery →',
      tr: 'Tüm Öncesi / Sonrası Galerisini Görün →',
      de: 'Vollständige Vorher/Nachher-Galerie anzeigen →',
      pl: 'Zobacz pełną galerię Przed i Po →',
      pt: 'Ver Galeria Completa Antes e Depois →',
      es: 'Ver Galería Completa de Antes y Después →',
      ru: 'Смотреть всю галерею До и После →',
    },
    faqHeading: {
      en: 'Frequently Asked Questions',
      tr: 'Sıkça Sorulan Sorular',
      de: 'Häufig gestellte Fragen',
      pl: 'Często zadawane pytania',
      pt: 'Perguntas Frequentes',
      es: 'Preguntas Frecuentes',
      ru: 'Часто задаваемые вопросы',
    },
    whyUsTitle: {
      en: 'Why Master Smile Studio?',
      tr: 'Neden Master Smile Studio?',
      de: 'Warum Master Smile Studio?',
      pl: 'Dlaczego Master Smile Studio?',
      pt: 'Por que a Master Smile Studio?',
      es: '¿Por Qué Master Smile Studio?',
      ru: 'Почему Master Smile Studio?',
    },
    whyUsPoints: [
      {
        en: '10-Year Clinical Warranty on all ceramics',
        tr: 'Tüm porselen kaplamalarda 10 Yıl Garanti',
        de: '10 Jahre klinische Garantie auf Keramik',
        pl: '10 lat gwarancji klinicznej na ceramikę',
        pt: '10 anos de garantia clínica em cerâmica',
        es: '10 años de garantía clínica en cerámica',
        ru: '10 лет гарантии на все керамические работы',
      },
      {
        en: '100% Genuine Swiss & German Materials',
        tr: '%100 Orijinal İsviçre ve Alman Materyalleri',
        de: '100% Original Schweizer & deutsche Materialien',
        pl: '100% oryginalne materiały szwajcarskie i niemieckie',
        pt: 'Materiais suíços e alemães 100% originais',
        es: 'Materiales 100% originales de Suiza y Alemania',
        ru: '100% оригинальные материалы из Швейцарии и Германии',
      },
      {
        en: '5-Star Beachfront Hotel Accommodation',
        tr: '5 Yıldızlı Sahil Oteli Konaklaması',
        de: '5-Sterne-Hotelunterkunft direkt am Strand',
        pl: 'Zakwaterowanie w hotelu 5* przy plaży',
        pt: 'Alojamento em Hotel de 5 Estrelas à Beira-Mar',
        es: 'Alojamiento en Hotel de 5 Estrellas Frente al Mar',
        ru: 'Проживание в 5-звездочном отеле на побережье',
      },
      {
        en: 'Private VIP Airport & Clinic Chauffeur',
        tr: 'Özel VIP Havalimanı ve Klinik Şoförü',
        de: 'Privater VIP-Flughafen- und Kliniktransfer',
        pl: 'Prywatny szofer VIP (lotnisko i klinika)',
        pt: 'Motorista Privado VIP de e para a Clínica',
        es: 'Chófer Privado VIP de Aeropuerto y Clínica',
        ru: 'Индивидуальный VIP-трансфер с водителем',
      },
    ],
    relatedTreatmentsTitle: {
      en: 'Related Treatments',
      tr: 'İlgili Tedaviler',
      de: 'Verwandte Behandlungen',
      pl: 'Powiązane zabiegi',
      pt: 'Tratamentos Relacionados',
      es: 'Tratamientos Relacionados',
      ru: 'Связанные процедуры',
    },
    relatedArticlesTitle: {
      en: 'Related Articles',
      tr: 'İlgili Makaleler',
      de: 'Verwandte Artikel',
      pl: 'Powiązane artykuły',
      pt: 'Artigos Relacionados',
      es: 'Artículos Relacionados',
      ru: 'Похожие статьи',
    },
    readMore: {
      en: 'Read More →',
      tr: 'Devamını Oku →',
      de: 'Mehr lesen →',
      pl: 'Czytaj więcej →',
      pt: 'Ler mais →',
      es: 'Leer más →',
      ru: 'Читать далее →',
    },
    consultationTitle: {
      en: 'Get Your Personalized Treatment Plan',
      tr: 'Kişiye Özel Tedavi Planınızı Alın',
      de: 'Erhalten Sie Ihren persönlichen Behandlungsplan',
      pl: 'Otrzymaj indywidualny plan leczenia',
      pt: 'Obtenha o Seu Plano de Tratamento Personalizado',
      es: 'Obtenga su Plan de Tratamiento Personalizado',
      ru: 'Получите персональный план лечения',
    },
    consultationDesc: {
      en: 'Send us your dental photos via WhatsApp for an immediate assessment from our cosmetic & implant dentists.',
      tr: 'Uzman hekimlerimizden anında değerlendirme almak için diş fotoğraflarınızı WhatsApp üzerinden gönderin.',
      de: 'Senden Sie uns Ihre Fotos per WhatsApp für eine direkte Einschätzung durch unsere Zahnärzte.',
      pl: 'Prześlij nam zdjęcia swoich zębów przez WhatsApp, aby uzyskać bezpłatną konsultację.',
      pt: 'Envie-nos as suas fotografias por WhatsApp para uma avaliação imediata dos nossos médicos.',
      es: 'Envíenos sus fotos por WhatsApp para una evaluación inmediata por nuestros especialistas.',
      ru: 'Отправьте фото зубов в WhatsApp для быстрой консультации с нашими врачами.',
    },
    btnWhatsApp: {
      en: 'Chat on WhatsApp',
      tr: 'WhatsApp ile Yazışın',
      de: 'Über WhatsApp anfragen',
      pl: 'Napisz na WhatsApp',
      pt: 'Falar no WhatsApp',
      es: 'Consultar por WhatsApp',
      ru: 'Написать в WhatsApp',
    },
    btnQuote: {
      en: 'Get Personalized Quote',
      tr: 'Kişiye Özel Teklif Al',
      de: 'Persönliches Angebot',
      pl: 'Indywidualna wycena',
      pt: 'Pedir Orçamento',
      es: 'Pedir Presupuesto',
      ru: 'Получить расчет стоимости',
    },
  };

  const SIDEBAR_TREATMENTS = [
    {
      title: {
        en: 'Dental Implants',
        tr: 'Diş İmplantı',
        de: 'Zahnimplantate',
        pl: 'Implanty zębowe',
        pt: 'Implantes Dentários',
        es: 'Implantes Dentales',
        ru: 'Имплантация зубов',
      },
      href: '/treatments/dental-implants',
    },
    {
      title: {
        en: 'All-on-4 Implants',
        tr: 'All-on-4 İmplant',
        de: 'All-on-4 Implantate',
        pl: 'Implanty All-on-4',
        pt: 'Implantes All-on-4',
        es: 'Implantes All-on-4',
        ru: 'Импланты All-on-4',
      },
      href: '/treatments/all-on-4-implants',
    },
    {
      title: {
        en: 'All-on-6 Implants',
        tr: 'All-on-6 İmplant',
        de: 'All-on-6 Implantate',
        pl: 'Implanty All-on-6',
        pt: 'Implantes All-on-6',
        es: 'Implantes All-on-6',
        ru: 'Импланты All-on-6',
      },
      href: '/treatments/all-on-6-implants',
    },
    {
      title: {
        en: 'Porcelain Veneers',
        tr: 'Porselen Lamina Kaplama',
        de: 'Porzellan-Veneers',
        pl: 'Licówki porcelanowe',
        pt: 'Facetas de Porcelana',
        es: 'Carillas de Porcelana',
        ru: 'Керамические виниры',
      },
      href: '/treatments/porcelain-veneers',
    },
    {
      title: {
        en: 'Zirconium Crowns',
        tr: 'Zirkonyum Kaplama',
        de: 'Zirkonkronen',
        pl: 'Korony cyrkonowe',
        pt: 'Coroas de Zircónia',
        es: 'Coronas de Circonio',
        ru: 'Циркониевые коронки',
      },
      href: '/treatments/zirconium-crowns',
    },
    {
      title: {
        en: 'Hollywood Smile',
        tr: 'Hollywood Smile',
        de: 'Hollywood Smile',
        pl: 'Hollywood Smile',
        pt: 'Hollywood Smile',
        es: 'Hollywood Smile',
        ru: 'Голливудская улыбка',
      },
      href: '/treatments/hollywood-smile',
    },
  ];

  // In-article packages (All-on-4 Straumann, NucleOSS, German DXL)
  const featuredPackages = (PACKAGES_DATA[0]?.packages || []).slice(0, 3);

  // In-article before/after items
  const featuredBeforeAfter = (BEFORE_AFTER_PAGE_DATA[0]?.items || []).slice(0, 4);

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);
  const waLink = getWhatsAppLink(locale, `Hello, I am reading the article "${getLocalized(currentPost?.title)}" and would like a consultation.`);

  return (
    <section className={styles.blogDetailSection} aria-label="Dental Article Detail">
      <div className={styles.container}>
        {/* Breadcrumb Navigation */}
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/" className={styles.breadcrumbLink}>
            {getLocalized(UI_TEXT.home)}
          </Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <Link href="/blog" className={styles.breadcrumbLink}>
            {getLocalized(UI_TEXT.blog)}
          </Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbActive}>
            {getLocalized(currentPost?.title)}
          </span>
        </nav>

        {/* Hero Header Area */}
        <header className={styles.headerArea}>
          <div className={styles.categoryBadge}>
            {article.category.replace(/-/g, ' ')}
          </div>

          <h1 className={styles.mainTitle}>
            {getLocalized(currentPost?.title)}
          </h1>

          {/* Meta Bar */}
          <div className={styles.metaBar}>
            <div className={styles.authorBox}>
              <div className={styles.authorAvatar}>
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  sizes="44px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <div className={styles.authorName}>{article.author.name}</div>
                <div className={styles.authorRole}>{getLocalized(article.author.title)}</div>
              </div>
            </div>

            <div className={styles.medicalBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>{getLocalized(UI_TEXT.verifiedMedical)}</span>
            </div>

            <div className={styles.metaItem}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>{article.publishDate}</span>
            </div>

            <div className={styles.metaItem}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>{article.readTime}</span>
            </div>
          </div>
        </header>

        {/* Main 2-Column Grid */}
        <div className={styles.mainGrid}>
          {/* Left Column: Deep Article Body */}
          <article className={styles.articleBody}>
            {/* Featured Image */}
            <div className={styles.featuredImageFrame}>
              <Image
                src={article.image}
                alt={getLocalized(currentPost?.title)}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 840px"
                className={styles.featuredImage}
              />
            </div>

            {/* Stat Row Box (SohoDent Style with Serif Gold Digits) */}
            {article.stats && article.stats.length > 0 && (
              <div className={styles.statTableBox}>
                {article.stats.map((stat, idx) => (
                  <div key={idx} className={styles.statCell}>
                    <div className={styles.statNumber}>{stat.value}</div>
                    <div className={styles.statDesc}>{getLocalized(stat.label)}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Intro Narrative */}
            {getLocalizedArray(article.intro).map((p, idx) => (
              <p key={idx} className={styles.paragraph}>
                {p}
              </p>
            ))}

            {/* Key Takeaways Callout Box (Warm Gold SohoDent Style) */}
            <div className={styles.keyTakeawayBox}>
              <p className={styles.keyTakeawayText}>
                <strong>{getLocalized(article.keyTakeaway)}</strong>
              </p>
            </div>

            <div className={styles.editorialDivider} />

            {/* In-Article Treatment Packages Grid (Direct Booking / Pricing) */}
            {featuredPackages.length > 0 && (
              <div className={styles.packagesSection}>
                <div className={styles.packagesSectionHead}>
                  <h3 className={styles.packagesSectionTitle}>{getLocalized(UI_TEXT.packagesTitle)}</h3>
                  <p className={styles.packagesSectionSubtitle}>{getLocalized(UI_TEXT.packagesSubtitle)}</p>
                </div>
                <div className={styles.packagesGrid}>
                  {featuredPackages.map((pkg) => (
                    <div key={pkg.id} className={styles.packageCard}>
                      <h4 className={styles.packageHead}>{getLocalized(pkg.head)}</h4>
                      <div className={styles.packageCover}>
                        <Image
                          src={pkg.imageSrc}
                          alt={pkg.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 280px"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div className={styles.packageDuration}>
                        <span>{getLocalized(pkg.durationLabel)}</span>
                        <span className={styles.packageDurationVal}>{getLocalized(pkg.durationValue)}</span>
                      </div>
                      <div className={styles.packageInclusionsTitle}>{getLocalized(pkg.includedTitle)}</div>
                      <ul className={styles.packageInclusionsList}>
                        {pkg.inclusions.slice(0, 4).map((inc, i) => (
                          <li key={i} className={styles.packageInclusionItem}>
                            {getLocalized(inc)}
                          </li>
                        ))}
                      </ul>
                      <div className={styles.packagePricingRow}>
                        <span className={styles.packagePriceTag}>{pkg.eur}</span>
                        <span className={styles.packagePriceTag}>{pkg.gbp}</span>
                        <span className={styles.packagePriceTag}>{pkg.usd}</span>
                      </div>
                      <a href={waLink} target="_blank" rel="noopener noreferrer" className={styles.packageQuoteBtn}>
                        {getLocalized(pkg.ctaText || UI_TEXT.btnQuote)}
                      </a>
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Link href="/packages" style={{ color: '#c8973a', fontWeight: 700, fontSize: '0.925rem', textDecoration: 'underline' }}>
                    {getLocalized(UI_TEXT.viewAllPackages)}
                  </Link>
                </div>
              </div>
            )}

            <div className={styles.editorialDivider} />

            {/* Detailed Structured Sections */}
            {article.sections.map((sec) => (
              <section key={sec.id} id={sec.id}>
                <h2 className={styles.h2Heading}>{getLocalized(sec.heading)}</h2>
                {getLocalizedArray(sec.paragraphs).map((p, idx) => (
                  <p key={idx} className={styles.paragraph}>
                    {p}
                  </p>
                ))}

                {sec.highlightBox && (
                  <div className={styles.keyTakeawayBox}>
                    <p className={styles.keyTakeawayText}>
                      <strong>{getLocalized(sec.highlightBox.title)}: </strong>
                      {getLocalized(sec.highlightBox.text)}
                    </p>
                  </div>
                )}
              </section>
            ))}

            {/* Timeline Section */}
            {article.timeline && article.timeline.length > 0 && (
              <div className={styles.timelineContainer}>
                <h2 className={styles.h2Heading}>Evolution & Clinical Timeline</h2>
                {article.timeline.map((item, idx) => (
                  <div key={idx} className={styles.timelineCard}>
                    <div className={styles.timelineCardYear}>{item.year}</div>
                    <h3 className={styles.timelineCardTitle}>{getLocalized(item.title)}</h3>
                    <p className={styles.timelineCardDesc}>{getLocalized(item.desc)}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Real Patient Before/After Showcase Section */}
            {featuredBeforeAfter.length > 0 && (
              <div className={styles.beforeAfterSection}>
                <div className={styles.baHeader}>
                  <h3 className={styles.baTitle}>{getLocalized(UI_TEXT.baTitle)}</h3>
                  <p className={styles.baSubtitle}>{getLocalized(UI_TEXT.baSubtitle)}</p>
                </div>
                <div className={styles.baGrid}>
                  {featuredBeforeAfter.map((item) => (
                    <div key={item.id} className={styles.baCard}>
                      <Image
                        src={item.image}
                        alt={getLocalized(item.alt)}
                        fill
                        sizes="(max-width: 768px) 100vw, 240px"
                        className={styles.baCardImg}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Link href="/before-after" className={styles.baGalleryBtn}>
                    {getLocalized(UI_TEXT.viewGallery)}
                  </Link>
                </div>
              </div>
            )}

            {/* Comparison Table */}
            {article.comparisonTable && (
              <div className={styles.comparisonTableContainer}>
                <table className={styles.compTable}>
                  <thead>
                    <tr>
                      <th className={styles.compTh}>{getLocalized(article.comparisonTable.col1Header)}</th>
                      <th className={styles.compTh}>{getLocalized(article.comparisonTable.col2Header)}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {article.comparisonTable.rows.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 1 ? styles.compTrAlt : undefined}>
                        <td className={styles.compTd}>{getLocalized(row.col1)}</td>
                        <td className={styles.compTd}>{getLocalized(row.col2)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div className={styles.editorialDivider} />

            {/* Clinical FAQ Accordion Section */}
            <div id="faq-section" className={styles.faqSection}>
              <h2 className={styles.faqHeading}>{getLocalized(UI_TEXT.faqHeading)}</h2>
              <div className={styles.faqList}>
                {article.faqs.map((faq, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div key={index} className={styles.faqItem}>
                      <button
                        type="button"
                        onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                        className={styles.faqQuestion}
                        aria-expanded={isOpen}
                      >
                        <span>{getLocalized(faq.q)}</span>
                        <span className={styles.faqIcon}>
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <div className={styles.faqAnswer}>
                          {getLocalized(faq.a)}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Author Bio Box at Bottom */}
            <div className={styles.authorBioBox}>
              <div className={styles.authorBioAvatar}>
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  fill
                  sizes="80px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div>
                <h3 className={styles.authorBioName}>{article.author.name}</h3>
                <div className={styles.authorBioRole}>{getLocalized(article.author.title)}</div>
                <p className={styles.authorBioDesc}>
                  Master Smile Studio is an internationally accredited dental clinic in Antalya, Turkey, specializing in minimally invasive porcelain veneers, Swiss dental implants, and full mouth digital smile rehabilitation.
                </p>
              </div>
            </div>
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className={styles.sidebar}>
            <div className={styles.stickySidebar}>
              {/* Consultation Widget */}
              <div className={styles.consultationWidget}>
                <div className={styles.widgetBanner}>
                  <Image
                    src="/mss-patients-montage.png"
                    alt="Master Smile Studio Consultation"
                    fill
                    sizes="340px"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
                <div className={styles.widgetBody}>
                  <h3 className={styles.widgetTitle}>{getLocalized(UI_TEXT.consultationTitle)}</h3>
                  <p className={styles.widgetSubtitle}>
                    {getLocalized(UI_TEXT.consultationDesc)}
                  </p>
                  <a href={waLink} target="_blank" rel="noopener noreferrer" className={styles.widgetBtnWhatsApp}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.173.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z" />
                    </svg>
                    {getLocalized(UI_TEXT.btnWhatsApp)}
                  </a>
                  <Link href="/contact" className={styles.widgetBtnForm}>
                    {getLocalized(UI_TEXT.btnQuote)}
                  </Link>
                </div>
              </div>

              {/* Why Choose Us Box */}
              <div className={styles.whyUsWidget}>
                <h3 className={styles.whyUsTitle}>{getLocalized(UI_TEXT.whyUsTitle)}</h3>
                <ul className={styles.whyUsList}>
                  {UI_TEXT.whyUsPoints.map((point, idx) => (
                    <li key={idx} className={styles.whyUsItem}>
                      <span className={styles.whyUsCheck}>✓</span>
                      <span>{getLocalized(point)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Treatments */}
              <div className={styles.treatmentsWidget}>
                <h3 className={styles.treatmentsTitle}>{getLocalized(UI_TEXT.relatedTreatmentsTitle)}</h3>
                <div className={styles.treatmentsList}>
                  {SIDEBAR_TREATMENTS.map((trItem, idx) => (
                    <Link key={idx} href={trItem.href} className={styles.treatmentLink}>
                      <span>{getLocalized(trItem.title)}</span>
                      <span>→</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom Related Articles */}
        {relatedPosts.length > 0 && (
          <div className={styles.relatedArticlesSection}>
            <h2 className={styles.relatedHeading}>{getLocalized(UI_TEXT.relatedArticlesTitle)}</h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((post: BlogPost) => (
                <article key={post.slug} className={styles.relatedCard}>
                  <div className={styles.relatedImgWrapper}>
                    <Image
                      src={post.image}
                      alt={getLocalized(post.title)}
                      fill
                      sizes="(max-width: 768px) 100vw, 320px"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={styles.relatedContent}>
                    <Link href={`/blog/${post.slug}`} className={styles.relatedCardTitle}>
                      {getLocalized(post.title)}
                    </Link>
                    <Link href={`/blog/${post.slug}`} className={styles.relatedReadMore}>
                      {getLocalized(UI_TEXT.readMore)}
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
