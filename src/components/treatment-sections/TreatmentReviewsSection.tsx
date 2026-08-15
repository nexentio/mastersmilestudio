'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import styles from './TreatmentReviewsSection.module.css';

export default function TreatmentReviewsSection() {
  const locale = useLocale();
  const [startIndex, setStartIndex] = useState(0);

  const reviews = [
    {
      name: 'Malcolm Mallia',
      comment:
        'Master Smile Studio is not just a clinic but it is filled with a relaxing atmosphere. Starting from the welcoming staff at reception, the dental radiographer and the professional doctors who do their utmost to find solutions for any procedures needed. Special thanks to the team for their patience and determination to resolve my issues. The clinic is also situated very central in Istanbul. I highly recommend Master Smile Studio and I am very happy with their professionalism.',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/google.webp',
    },
    {
      name: 'Rafael Rodriguez',
      comment:
        'I came to Istanbul to assist my father in law to do an all on 6 upper jaw. We had looked at other clinics but decided on Master Smile Studio. The owner doctors complement each other perfectly. The preciseness and skill of the surgeon were mind boggling. The clinic is modern, well equipped and beautiful. Much better than my own doctor in Canada.',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/google.webp',
    },
    {
      name: 'Olha Hubych',
      comment:
        'Best dental clinic in Turkey! Very professional and efficient. Thank you so much, will definitely come back!',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/google.webp',
    },
    {
      name: 'Iceman Mike',
      comment:
        'Excellent experience I highly recommend, professional work and a lovely staff.',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/google.webp',
    },
    {
      name: 'N RS',
      comment:
        'The dentists and support staff are very nice, kind and helpful. The office was extremely clean and high tech. The girls at the front desk all spoke perfect English and had the best transparent prices. I\'m very happy with the service here and definitely recommend it.',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/google.webp',
    },
    {
      name: 'Shahab',
      comment:
        'Honestly they are the best in Istanbul. I was a tourist and they gave me best price and a whole warming welcome. Highly recommend specially to tourists. They are highly educated and can speak in English easily.',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/google.webp',
    },
    {
      name: 'Jason Allen Wear',
      comment:
        'If you’re looking to get dental implants or any other dental procedures done, this is the place to be! From Day 1 the communication was top-tier. I’m super happy with my results and new smile. My expectations were exceeded by far! Super affordable as well.',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/google.webp',
    },
    {
      name: 'River Side',
      comment:
        '“I couldn’t wish for better dentists! From the moment you enter the big and great practice, you feel welcome – the entire team is warm, friendly, and highly professional. The consultation is detailed, clear, and honest, so you always feel you’re in the best hands.”',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/google.webp',
    },
    {
      name: 'Philip Henderson',
      comment:
        'I travelled from the UK for dental work. The dentist took the time to explain everything clearly and focused on preserving my natural teeth. I’m so glad I found this clinic and highly recommend them.',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/google.webp',
    },
    {
      name: 'Tasha',
      comment:
        'I visited the clinic two times from Canada for my treatment and had an excellent experience both of those times. My treatment was complicated, requiring all-on-four implants. The dentists handled me with care and professionalism.',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/google.webp',
    },
    {
      name: 'Micha Davis',
      comment:
        'Master Smile Studio was top tier! I had such a great and easy experience. The staff was warm, welcoming, and very accommodating. They thoroughly explained each step of the process and made sure that I was comfortable.',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/google.webp',
    },
    {
      name: 'Sal',
      comment:
        'Excellent service for dental implants, a very high quality dental clinic, puts the UK clinics to shame, prices are very reasonable, their equipment is very high quality, very friendly.',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/google.webp',
    },
    {
      name: 'Indira',
      comment:
        'I came from USA to do implants. Master Smile Studio has done a lot for me to be happy. I\'m very satisfied with their work, everyone is kind and they do their best to make patients satisfied.',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/google.webp',
    },
    {
      name: 'Marek Jankowski',
      comment:
        'Jestem pod ogromnym wrażeniem profesjonalizmu całego zespołu Master Smile Studio. Przyjechałem z Polski na pełną odbudowę uśmiechu (implanty All-on-6). Wszystko – od transferu z lotniska, przez luksusowy hotel, po bezbolesny zabieg – było zorganizowane perfekcyjnie. Lekarze to wybitni specjaliści z pasją. Mój nowy uśmiech wygląda niewiarygodnie naturalnie. Dziękuję!',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/trustpilot.webp',
    },
    {
      name: 'Sarah Jenkins',
      comment:
        'Traveling from London to Istanbul for dental work was a huge decision for me, but Master Smile Studio made every single moment effortless and comfortable. The technology they use is far beyond anything I had seen before. The 3D planning, temporary teeth on the very first day, and the final zirconia crowns exceeded all my expectations. Highly recommended!',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/google.webp',
    },
    {
      name: 'Sophie Dubois',
      comment:
        'Une expérience absolument formidable chez Master Smile Studio à Istanbul. L’équipe médicale est à l’écoute, bienveillante et d’une précision remarquable. Après des années d’hésitation, j’ai enfin retrouvé le plaisir de sourire sans complexe. Merci à toute l’équipe pour votre accueil chaleureux et vos soins de très haute qualité.',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/trustpilot.webp',
    },
    {
      name: 'Michael Becker',
      comment:
        'Von der ersten Online-Beratung bis zum letzten Kontrolltermin lief alles absolut reibungslos. Das gesamte Team von Master Smile Studio spricht hervorragend Englisch und Deutsch, die Klinik ist hochmodern und extrem sauber. Meine Zahnimplantate sitzen perfekt und ich habe mich zu jedem Zeitpunkt sicher und bestens betreut gefühlt.',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/google.webp',
    },
    {
      name: 'Elena Rossi',
      comment:
        'Clinica dentistica eccezionale! Ho fatto un trattamento combinato di faccette e sbiancamento dentale. Risultato impeccabile, naturale e luminoso. I dottori sono veri artisti del sorriso e il personale è incredibilmente gentile. Istanbul è una città meravigliosa e questo viaggio mi ha regalato il sorriso che ho sempre sognato.',
      platformImg: 'https://sohodent.com/doc/static/yorumlar/google.webp',
    },
  ];

  const visibleCount = 3;
  const maxStart = reviews.length - visibleCount;

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxStart));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxStart ? prev + 1 : 0));
  };

  return (
    <div className={styles.wrapper}>
      <div className="treatment-container">
        {/* Head */}
        <div className="head mb-12">
          <div className="grid1 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="s s1">
              <h2 className="treatment-heading-title m-0">
                {locale === 'tr' ? 'Her Gülüşün Bir Hikayesi Var' : 'Every Smile Has a Story'}
              </h2>
            </div>
            <div className="s s2 flex justify-between items-center gap-4">
              <p className="treatment-text-p m-0 text-slate-500">
                {locale === 'tr'
                  ? 'Kliniğimizde tedavi olan mutlu hastalarımızın gerçek Google ve Trustpilot deneyimleri.'
                  : 'Real stories from real patients. Discover how our dedicated care and expert dentistry transformed smiles and lives.'}
              </p>
              <div className="flex gap-2 shrink-0">
                <button
                  onClick={handlePrev}
                  className="treatment-nav-circle-btn"
                  aria-label="Previous reviews"
                >
                  ‹
                </button>
                <button
                  onClick={handleNext}
                  className="treatment-nav-circle-btn"
                  aria-label="Next reviews"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className={styles.grid}>
          {reviews.slice(startIndex, startIndex + visibleCount).map((rev, idx) => (
            <div key={idx} className={styles.card}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-700 text-base">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className={styles.author}>{rev.name}</h4>
                      <div className={styles.rating}>★★★★★</div>
                    </div>
                  </div>
                </div>

                <p className={styles.comment}>
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className={styles.footer}>
                <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                  <span>✓</span> Verified Patient
                </span>
                <img
                  src={rev.platformImg}
                  alt="Review Platform"
                  className="h-5 w-auto object-contain opacity-80"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
