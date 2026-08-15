'use client';

import React, { useState } from 'react';
import { useLocale } from 'next-intl';

export default function TreatmentClinicTourSection() {
  const locale = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="treatment-tour-wrapper">
      <div className="treatment-container">
        {/* Head */}
        <div className="head mb-10">
          <div className="grid1 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <div className="s s1">
              <h2 className="treatment-heading-title m-0">
                {locale === 'tr' ? 'Master Smile Studio Kliniğimizi Keşfedin' : 'Step Inside Master Smile Studio'}
              </h2>
            </div>
            <div className="s s2">
              <div className="treatment-section-tagline">
                {locale === 'tr'
                  ? 'İstanbul’un kalbinde yer alan son teknoloji kliniğimizde sanal bir tura çıkın.'
                  : 'Take a virtual tour of our state-of-the-art clinic located in the heart of Istanbul.'}
              </div>
              <p className="treatment-text-p m-0 text-slate-500">
                {locale === 'tr'
                  ? 'Modern tedavi odalarından sıcak hasta dinlenme salonlarına kadar, diş sağlığı yolculuğunuzu gerçekten olağanüstü kılmak için ileri teknolojiyi, uluslararası standartları ve şık konforu nasıl birleştirdiğimizi görün.'
                  : 'From modern treatment rooms to welcoming patient lounges, see how we combine advanced technology, international standards, and elegant comfort to make your dental journey truly exceptional.'}
              </p>
            </div>
          </div>
        </div>

        {/* Video Box */}
        <div className="treatment-tour-video-box">
          {isPlaying ? (
            <iframe
              src="https://www.youtube.com/embed/smhwCD78Vbo?autoplay=1"
              title="Step Inside Master Smile Studio Virtual Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div
              onClick={() => setIsPlaying(true)}
              className="treatment-tour-cover-wrap"
            >
              <img
                src="https://sohodent.com/doc/static/yvcover1.jpg.webp"
                alt="Master Smile Studio Clinic Tour"
                loading="lazy"
              />
              <div className="treatment-tour-play-overlay">
                <div className="treatment-tour-play-btn">
                  <svg width="32" height="32" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
