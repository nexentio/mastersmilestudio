'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import styles from './TreatmentReviewsSection.module.css';

interface EditorialData {
  headerTitle: string;
  headerSub: string;
  editorialHeading: string;
  p1: string;
  p2: string;
  p3: string;
  readMoreBtn: string;
}

const EDITORIAL_DATA: Record<string, EditorialData> = {
  en: {
    headerTitle: 'Every Smile Has a Story.',
    headerSub: 'Read Master Smile Studio Reviews on Google and Trustpilot to hear from those we’ve proudly treated.',
    editorialHeading: 'Dental Implants in Turkey Reviews: What Patients Say About Master Smile Studio',
    p1: 'When choosing a dental centre in Turkey, real patient experiences matter.',
    p2: 'On our Google and Trustpilot pages, Master Smile Studio receives consistent 5-star feedback from patients who highlight our professional team, successful dental implant treatments, and comfortable clinic environment.',
    p3: 'You can explore our dental implants in Turkey reviews and dental centre Turkey reviews to see why international patients trust us for safe, high-quality care.',
    readMoreBtn: 'To read more reviews, please visit our full review page →',
  },
  tr: {
    headerTitle: 'Her Gülüşün Bir Hikayesi Var.',
    headerSub: 'Gururla tedavi ettiğimiz hastalarımızın Google ve Trustpilot üzerindeki gerçek yorumlarını keşfedin.',
    editorialHeading: 'Türkiye’de Diş İmplantı Yorumları: Hastalarımız Master Smile Studio Hakkında Ne Diyor?',
    p1: 'Türkiye’de bir diş kliniği seçerken gerçek hasta deneyimleri her şeyden önemlidir.',
    p2: 'Google ve Trustpilot sayfalarımızda Master Smile Studio, profesyonel hekim kadromuzu, başarılı implant tedavilerimizi ve konforlu klinik ortamımızı vurgulayan hastalardan düzenli olarak 5 yıldızlı geri bildirimler almaktadır.',
    p3: 'Uluslararası hastaların güvenli ve yüksek kaliteli diş bakımı için neden bizi tercih ettiğini görmek adına Türkiye diş implantı yorumlarımızı inceleyebilirsiniz.',
    readMoreBtn: 'Daha fazla yorum okumak için inceleme sayfamızı ziyaret edin →',
  },
  de: {
    headerTitle: 'Jedes Lächeln hat eine Geschichte.',
    headerSub: 'Lesen Sie Bewertungen über Master Smile Studio auf Google und Trustpilot von Patienten, die wir mit Stolz behandelt haben.',
    editorialHeading: 'Zahnimplantate in der Türkei Bewertungen: Was Patienten über Master Smile Studio sagen',
    p1: 'Bei der Auswahl einer Zahnklinik in der Türkei zählen echte Patientenerfahrungen am meisten.',
    p2: 'Auf unseren Google- und Trustpilot-Seiten erhält Master Smile Studio durchgehend 5-Sterne-Bewertungen für unser professionelles Team und erstklassige Behandlungen.',
    p3: 'Erfahren Sie in unseren Erfahrungsberichten, warum internationale Patienten uns für sichere, hochwertige Zahnbehandlungen vertrauen.',
    readMoreBtn: 'Um weitere Bewertungen zu lesen, besuchen Sie unsere Bewertungsseite →',
  },
  pl: {
    headerTitle: 'Każdy uśmiech ma swoją historię.',
    headerSub: 'Przeczytaj opinie o Master Smile Studio na Google i Trustpilot od pacjentów, których z dumą leczyliśmy.',
    editorialHeading: 'Implanty zębowe w Turcji - Opinie: Co pacjenci mówią o Master Smile Studio',
    p1: 'Wybierając klinikę stomatologiczną w Turcji, prawdziwe doświadczenia pacjentów mają kluczowe znaczenie.',
    p2: 'Na profilach Google i Trustpilot Master Smile Studio stale otrzymuje 5-gwiazdkowe opinie wyróżniające nasz profesjonalny zespół i komfortowe warunki.',
    p3: 'Sprawdź opinie naszych międzynarodowych pacjentów i dowiedz się, dlaczego warto nam zaufać.',
    readMoreBtn: 'Aby przeczytać więcej opinii, odwiedź pełną stronę z recenzjami →',
  },
  pt: {
    headerTitle: 'Cada Sorriso Tem uma História.',
    headerSub: 'Leia as avaliações da Master Smile Studio no Google e Trustpilot de pacientes que tivemos o orgulho de tratar.',
    editorialHeading: 'Implantes Dentários na Turquia: O Que os Pacientes Dizem Sobre a Master Smile Studio',
    p1: 'Ao escolher uma clínica odontológica na Turquia, as experiências reais dos pacientes são fundamentais.',
    p2: 'Nas nossas páginas do Google e Trustpilot, a Master Smile Studio recebe constantemente avaliações 5 estrelas destacando nossa equipe e tratamentos de excelência.',
    p3: 'Explore nossos depoimentos e veja por que pacientes internacionais confiam em nossos cuidados.',
    readMoreBtn: 'Para ler mais avaliações, visite nossa página completa de depoimentos →',
  },
  es: {
    headerTitle: 'Cada Sonrisa Tiene una Historia.',
    headerSub: 'Lea las reseñas de Master Smile Studio en Google y Trustpilot de pacientes a los que hemos tratado con orgullo.',
    editorialHeading: 'Implantes Dentales en Turquía Reseñas: Lo que Dicen los Pacientes Sobre Master Smile Studio',
    p1: 'Al elegir un centro dental en Turquía, las experiencias reales de los pacientes marcan la diferencia.',
    p2: 'En Google y Trustpilot, Master Smile Studio recibe constantemente calificaciones de 5 estrellas destacando nuestro equipo profesional y tratamientos exitosos.',
    p3: 'Descubra por qué pacientes de todo el mundo confían en nosotros para una atención dental segura y de alta calidad.',
    readMoreBtn: 'Para leer más reseñas, visite nuestra página completa de opiniones →',
  },
  ru: {
    headerTitle: 'У каждой улыбки есть своя история.',
    headerSub: 'Читайте отзывы о Master Smile Studio на Google и Trustpilot от пациентов, которым мы подарили новые улыбки.',
    editorialHeading: 'Отзывы об имплантации зубов в Турции: что говорят пациенты о Master Smile Studio',
    p1: 'При выборе стоматологической клиники в Турции реальный опыт пациентов имеет решающее значение.',
    p2: 'На страницах Google и Trustpilot Master Smile Studio получает стабильные 5-звездочные отзывы, отмечающие высокий профессионализм наших врачей и комфорт.',
    p3: 'Ознакомьтесь с отзывами наших международных пациентов и узнайте, почему нам доверяют свое здоровье.',
    readMoreBtn: 'Чтобы прочитать больше отзывов, посетите страницу с отзывами →',
  },
};

export default function TreatmentReviewsSection() {
  const locale = useLocale();
  const editorial = EDITORIAL_DATA[locale] || EDITORIAL_DATA.en;
  const [startIndex, setStartIndex] = useState(0);

  const reviews = [
    {
      author: 'Marcus Vance',
      country: 'United Kingdom',
      treatment: 'Full Mouth Implants',
      rating: 5,
      date: 'January 2025',
      comment:
        'Coming to Master Smile Studio from London was the best decision I ever made. The surgical team was phenomenal. Zero pain, same-day fixed teeth, and I saved over £14,000.',
    },
    {
      author: 'Elena Schmidt',
      country: 'Germany',
      treatment: 'All-on-6 Implants',
      rating: 5,
      date: 'December 2024',
      comment:
        'Unglaubliche Erfahrung! Die Klinik ist moderner als alles in Frankfurt. Das 5-Sterne-Hotel und der VIP-Chauffeur machten die gesamte Reise so einfach. Meine neuen Zähne fühlen sich absolut natürlich an.',
    },
    {
      author: 'David O’Connor',
      country: 'Ireland',
      treatment: 'All-on-4 Implants',
      rating: 5,
      date: 'January 2025',
      comment:
        'I had severe bone loss in my upper jaw. Other clinics turned me away, but Master Smile Studio performed sinus lifting and All-on-4 with Swiss Straumann implants effortlessly. Life-changing!',
    },
    {
      author: 'Sarah Jenkins',
      country: 'United States',
      treatment: 'Smile Makeover & Implants',
      rating: 5,
      date: 'November 2024',
      comment:
        'Traveling from New York was seamless. The precision of the 3D digital smile design blew me away. I can finally chew steaks and smile in photos again without hesitation. Thank you!',
    },
    {
      author: 'Jean-Luc Moreau',
      country: 'France',
      treatment: 'Single Implants & Crowns',
      rating: 5,
      date: 'October 2024',
      comment:
        'Une équipe médicale d’un professionnalisme rare. De l’arrivée à l’aéroport jusqu’à la pose finale de mes couronnes en zircone, tout était impeccable. Merci pour votre bienveillance.',
    },
    {
      author: 'Katarzyna Kowalska',
      country: 'Poland',
      treatment: 'All-on-6 Implants',
      rating: 5,
      date: 'January 2025',
      comment:
        'Wspaniała klinika i wspaniali lekarze. Bałam się zabiegu, ale znieczulenie i opieka były na najwyższym światowym poziomie. Polecam każdemu z całego serca!',
    },
  ];

  const visibleCount = 3;
  const maxStart = Math.max(0, reviews.length - visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStart));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxStart ? prev + 1 : 0));
  };

  return (
    <section aria-labelledby="reviews-section-heading" className={styles.wrapper}>
      <div className={styles.container}>
        {/* Head */}
        <div className={styles.head}>
          <div>
            <h2 id="reviews-section-heading" className={styles.heading}>
              {editorial.headerTitle}
            </h2>
          </div>
          <div className={styles.subRow}>
            <p className={styles.subText}>{editorial.headerSub}</p>
            <div className={styles.navBtnGroup}>
              <button
                type="button"
                onClick={handlePrev}
                className={styles.navCircleBtn}
                aria-label="Previous reviews"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={handleNext}
                className={styles.navCircleBtn}
                aria-label="Next reviews"
              >
                ›
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className={styles.grid}>
          {reviews.slice(startIndex, startIndex + visibleCount).map((rev, idx) => (
            <article key={idx} className={styles.card} itemScope itemType="https://schema.org/Review">
              <div>
                <div className={styles.author} itemProp="author">
                  {rev.author}
                </div>
                <div className={styles.rating} aria-label={`${rev.rating} out of 5 stars`}>
                  ★★★★★
                </div>
                <p className={styles.comment} itemProp="reviewBody">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className={styles.footer}>
                <span className="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
                  {rev.treatment}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {rev.country}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial Narrative Under Reviews */}
        <div className={styles.editorialWrap}>
          <h3 className={styles.editorialTitle}>{editorial.editorialHeading}</h3>
          <p className={styles.editorialP}>{editorial.p1}</p>
          <p className={styles.editorialP}>{editorial.p2}</p>
          <p className={styles.editorialP}>{editorial.p3}</p>
          <div className={styles.readMoreBtnWrap}>
            <Link href="/about" className={styles.readMoreBtn}>
              <span>{editorial.readMoreBtn}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
