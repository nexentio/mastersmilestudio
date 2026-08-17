'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import styles from './TreatmentReviewsSection.module.css';

interface ReviewItem {
  id: string;
  author: string;
  comment: string;
}

interface SectionDict {
  title: string;
  subtitle: string;
}

const SECTION_I18N: Record<string, SectionDict> = {
  en: {
    title: 'Every Smile Has a Story.',
    subtitle: 'Read Master Smile Studio Reviews on Google and Trustpilot to hear from those we’ve proudly treated.',
  },
  tr: {
    title: 'Her Gülüşün Bir Hikayesi Var.',
    subtitle: 'Gururla tedavi ettiğimiz hastalarımızın Google ve Trustpilot üzerindeki gerçek yorumlarını keşfedin.',
  },
  de: {
    title: 'Jedes Lächeln hat eine Geschichte.',
    subtitle: 'Lesen Sie Bewertungen über Master Smile Studio auf Google und Trustpilot von Patienten, die wir mit Stolz behandelt haben.',
  },
  pl: {
    title: 'Każdy uśmiech ma swoją historię.',
    subtitle: 'Przeczytaj opinie o Master Smile Studio na Google i Trustpilot od pacjentów, których z dumą leczyliśmy.',
  },
  pt: {
    title: 'Cada Sorriso Tem uma História.',
    subtitle: 'Leia as avaliações da Master Smile Studio no Google e Trustpilot de pacientes que tivemos o orgulho de tratar.',
  },
  es: {
    title: 'Cada Sonrisa Tiene una Historia.',
    subtitle: 'Lea las reseñas de Master Smile Studio en Google y Trustpilot de pacientes a los que hemos tratado con orgullo.',
  },
  ru: {
    title: 'У каждой улыбки есть своя история.',
    subtitle: 'Читайте отзывы о Master Smile Studio на Google и Trustpilot от пациентов, которым мы подарили новые улыбки.',
  },
};

const ALL_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Malcolm Mallia',
    comment: 'Master Smile Studio is not just a Clinic but it is filled with a relaxing atmosphere. Starting from the welcoming staff at reception, Charlie who patiently made sure to explain every step required, the nursing assistants, the dental radiographer and the professional doctors who do their utmost to find solutions for any procedures needed.',
  },
  {
    id: 'rev-2',
    author: 'Olha Hubych',
    comment: 'Best dental clinic in Turkey! Very professional and efficient. Thank you so much, will come back!',
  },
  {
    id: 'rev-3',
    author: 'Iceman Mike',
    comment: 'Excellent experience I highly recommend, professional work and a lovely staff.',
  },
  {
    id: 'rev-4',
    author: 'N RS',
    comment: 'Dr Ufuk and Dr Catay and Dr Utku, Eva and Beyza are very nice, kind and helpful. The office was extremely clean and high tech. The girls at the front desk all spoke perfect English and had the best prices.',
  },
  {
    id: 'rev-5',
    author: 'Shahab',
    comment: 'Honestly they are the best in Istanbul. I was a tourist and they gave me best price and a whole warming welcome. Highly recommend specially to tourists. They are highly educated and can speak in English easily…',
  },
  {
    id: 'rev-6',
    author: 'Jason Allen Wear',
    comment: 'If you’re looking to get dental implants or any other dental procedures done, this is the place to be! From Day 1 the communication was top-tier. I’m super happy with my results and new smile. My expectations were exceeded by far!',
  },
  {
    id: 'rev-7',
    author: 'River Side',
    comment: 'I couldn’t wish for better dentists! From the moment you enter the big and great practice, you feel welcome – the entire team is warm, friendly, and highly professional. The consultation is detailed, clear, and honest, so you always feel you’re in the best hands.',
  },
  {
    id: 'rev-8',
    author: 'Semhar Isaak',
    comment: 'I traveled from USA and I had a very pleasant experience in Master Smile Studio. Good customer service from all the staff top to bottom.',
  },
  {
    id: 'rev-9',
    author: 'Kimberly Simms',
    comment: 'My daughter and I went to Istanbul Turkiye to get dental treatments from Master Smile Studio. We experienced excellent care, progressive and healthy options, top-tier customer service, and the perfect outcomes for both of us! I can\'t stop smiling!',
  },
  {
    id: 'rev-10',
    author: 'Philip Henderson',
    comment: 'I travelled from the UK for dental work. The dentist took the time to explain everything clearly and focused on preserving my natural teeth. They managed to save a tooth that another clinic said had to be extracted. Spotless and modern facilities.',
  },
  {
    id: 'rev-11',
    author: 'Tasha',
    comment: 'I visited Master Smile Studio from Canada for my treatment and had an excellent experience. My treatment was complicated, requiring the removal of all my teeth and all-on-four implants. Handled with supreme care and professionalism.',
  },
  {
    id: 'rev-12',
    author: 'Micha Davis',
    comment: 'Master Smile Studio was top tier! I had such a great and easy experience. The staff was warm, welcoming, and very accommodating. They thoroughly explained each step and made sure I was comfortable throughout.',
  },
];

export default function TreatmentReviewsSection() {
  const locale = useLocale();
  const d = SECTION_I18N[locale] || SECTION_I18N.en;
  const [startIndex, setStartIndex] = useState(0);

  const itemsPerPage = 4;
  const maxStart = Math.max(0, ALL_REVIEWS.length - itemsPerPage);

  const handlePrev = () => {
    setStartIndex(prev => (prev > 0 ? prev - 1 : maxStart));
  };

  const handleNext = () => {
    setStartIndex(prev => (prev < maxStart ? prev + 1 : 0));
  };

  const visibleReviews = ALL_REVIEWS.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className={styles.wrapper} aria-label={d.title}>
      <div className={styles.container}>
        <div className={styles.head}>
          <div className={styles.headS1}>{d.title}</div>
          <div className={styles.headS2}>{d.subtitle}</div>
        </div>

        <div className={styles.sliderOuter}>
          <div className={styles.track}>
            {visibleReviews.map((rev) => (
              <div key={rev.id} className={styles.card}>
                <div>
                  <div className={styles.cardTop}>
                    <span className={styles.arrowIcon}>➤</span>
                    <span className={styles.authorName}>{rev.author}</span>
                  </div>
                  <p className={styles.commentText}>{rev.comment}</p>
                </div>

                <div className={styles.platform}>
                  <Image
                    src="/icons/google-review.webp"
                    alt="Google Reviews"
                    width={85}
                    height={28}
                    className={styles.platformImg}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.navRow}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={handlePrev}
              aria-label="Previous Reviews"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
              </svg>
            </button>
            <button
              type="button"
              className={styles.navBtn}
              onClick={handleNext}
              aria-label="Next Reviews"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
