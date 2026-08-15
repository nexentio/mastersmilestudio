'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface PatientStory {
  id: string;
  country: string;
  countryCode: string;
  flagSvg: string;
  treatment: string;
  image: string;
  videoUrl: string;
}

export default function RealPatientsSection() {
  const t = useTranslations('home');
  const [startIndex, setStartIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const stories: PatientStory[] = [
    {
      id: 'story-1',
      country: 'UKRAINE',
      countryCode: 'ua',
      flagSvg: 'https://flagcdn.com/w160/ua.png',
      treatment: 'WISDOM TOOTH',
      image: '/patients/patient-1.jpeg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/v5XoXnDblWI?autoplay=1',
    },
    {
      id: 'story-2',
      country: 'AUSTRIA',
      countryCode: 'at',
      flagSvg: 'https://flagcdn.com/w160/at.png',
      treatment: 'WISDOM TOOTH',
      image: '/patients/patient-2.jpeg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/F_ULWgBZhjY?autoplay=1',
    },
    {
      id: 'story-3',
      country: 'CANADA',
      countryCode: 'ca',
      flagSvg: 'https://flagcdn.com/w160/ca.png',
      treatment: 'ALL ON SIX',
      image: '/patients/patient-3.jpeg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/ZYMbU63b_PY?autoplay=1',
    },
    {
      id: 'story-4',
      country: 'USA',
      countryCode: 'us',
      flagSvg: 'https://flagcdn.com/w160/us.png',
      treatment: 'LAMINE',
      image: '/patients/patient-4.jpeg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/z_D8n4-FDSE?autoplay=1',
    },
    {
      id: 'story-5',
      country: 'SWEDEN',
      countryCode: 'se',
      flagSvg: 'https://flagcdn.com/w160/se.png',
      treatment: 'LAMINE',
      image: '/patients/patient-5.jpeg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/GxYMgj02_2E?autoplay=1',
    },
    {
      id: 'story-6',
      country: 'GERMANY',
      countryCode: 'de',
      flagSvg: 'https://flagcdn.com/w160/de.png',
      treatment: 'ZIRCONIUM CROWNS',
      image: '/patients/patient-6.jpeg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/2aW6V37Jw7c?autoplay=1',
    },
    {
      id: 'story-7',
      country: 'UNITED KINGDOM',
      countryCode: 'gb',
      flagSvg: 'https://flagcdn.com/w160/gb.png',
      treatment: 'ALL ON FOUR',
      image: '/mastersmilestudio_1781430682_3919246906335743176_70887948899.jpg',
      videoUrl: 'https://www.youtube-nocookie.com/embed/OsM5_-n4eVk?autoplay=1',
    },
  ];

  const visibleCount = 5;
  const maxIndex = Math.max(0, stories.length - visibleCount);

  const handlePrev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedVideo(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const visibleStories = stories.slice(startIndex, startIndex + visibleCount);

  const getSafeText = (key: string, fallback: string) => {
    return t.has(key as any) ? t(key as any) : fallback;
  };

  return (
    <section
      id="real-patients"
      style={{
        backgroundColor: '#ffffff',
        color: '#0f172a',
        padding: '3rem 1.5rem 2rem 1.5rem',
        position: 'relative',
        borderTop: '1px solid #f1f5f9',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* Header Section */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '2.5rem',
            marginBottom: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '1 1 380px' }}>
            <h2
              style={{
                fontSize: '3.5rem',
                fontWeight: 850,
                color: '#0b132b',
                letterSpacing: '-0.035em',
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              {getSafeText('realPatients.title', 'Real Patients. Real Smiles.')}
            </h2>
          </div>

          <div style={{ flex: '1 1 380px', maxWidth: '540px' }}>
            <p
              style={{
                fontSize: '1.05rem',
                color: '#475569',
                lineHeight: 1.65,
                margin: 0,
                fontWeight: 450,
              }}
            >
              {getSafeText(
                'realPatients.subtitle',
                'Explore the journey of our international patients through authentic visuals, elegant transformations, and moments captured inside Master Smile Studio. Let their stories inspire your own.'
              )}
            </p>
          </div>
        </div>

        {/* Patients Video Cards Carousel Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '12px',
            marginBottom: '2rem',
          }}
          className="real-patients-grid"
        >
          {visibleStories.map((story) => (
            <div
              key={story.id}
              onClick={() => setSelectedVideo(story.videoUrl)}
              style={{
                backgroundColor: '#1f1f23',
                borderRadius: '6px',
                padding: '0',
                display: 'flex',
                height: '460px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.16)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '1px solid #333338',
              }}
              className="real-patient-card"
            >
              {/* Left Vertical Bar: Text "FROM [COUNTRY] TO MASTER SMILE" */}
              <div
                style={{
                  width: '52px',
                  height: '100%',
                  backgroundColor: '#141416',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1rem 0',
                  borderRight: '1px solid #2a2a30',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    whiteSpace: 'nowrap',
                    fontSize: '1.15rem',
                    fontWeight: 900,
                    color: '#ffffff',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontFamily: 'impact, sans-serif, system-ui',
                    opacity: 0.95,
                  }}
                >
                  FROM {story.country} TO MASTER SMILE
                </span>
              </div>

              {/* Right Main Content */}
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '0',
                  position: 'relative',
                  backgroundColor: '#1c1c20',
                }}
              >
                {/* Top Country Flag Banner */}
                <div
                  style={{
                    width: '100%',
                    height: '48px',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: '#000000',
                    borderBottom: '2px solid #2a2a30',
                  }}
                >
                  <img
                    src={story.flagSvg}
                    alt={story.country}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'contrast(1.05)',
                    }}
                  />
                </div>

                {/* Happy Patient Heading */}
                <div
                  style={{
                    textAlign: 'center',
                    padding: '0.65rem 0.5rem 0.25rem 0.5rem',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 900,
                      letterSpacing: '0.08em',
                      color: '#a1a1aa',
                      textTransform: 'uppercase',
                      fontFamily: 'impact, sans-serif, system-ui',
                    }}
                  >
                    HAPPY PATIENT
                  </span>
                </div>

                {/* Center Image Thumbnail with Red Play Button Overlay */}
                <div
                  style={{
                    padding: '0 0.85rem',
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '240px',
                      borderRadius: '2px',
                      position: 'relative',
                      overflow: 'hidden',
                      border: '1px solid #3f3f46',
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
                    }}
                  >
                    <Image
                      src={story.image}
                      alt={story.country}
                      fill
                      unoptimized
                      sizes="(max-width: 768px) 100vw, 250px"
                      style={{
                        objectFit: 'cover',
                        objectPosition: 'center top',
                        transition: 'transform 0.4s ease',
                      }}
                      className="patient-img-zoom"
                    />

                    {/* Red YouTube Play Button Icon */}
                    {/* Play Icon (yticon.webp with transparent background) */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      className="play-overlay"
                    >
                      <Image
                        src="/yticon.webp"
                        alt="Play Icon"
                        width={60}
                        height={60}
                        style={{
                          objectFit: 'contain',
                          width: '58px',
                          height: '58px',
                          backgroundColor: 'transparent',
                          transition: 'transform 0.3s ease, filter 0.3s ease, opacity 0.3s ease',
                          filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.7))',
                          opacity: 0.9,
                        }}
                        className="play-btn-box"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom Treatment Label */}
                <div
                  style={{
                    textAlign: 'center',
                    padding: '0.65rem 0.5rem 1rem 0.5rem',
                    borderTop: '1px solid #27272a',
                    backgroundColor: '#18181b',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 900,
                      color: '#ffffff',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      fontFamily: 'impact, sans-serif, system-ui',
                    }}
                  >
                    {story.treatment}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Carousel Controls (Left & Right Buttons) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '0.75rem',
          }}
        >
          <button
            type="button"
            onClick={handlePrev}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#e2e8f0',
              color: '#0f172a',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            className="carousel-arrow-btn"
            aria-label="Previous Patient"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleNext}
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: '#e2e8f0',
              color: '#0f172a',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            className="carousel-arrow-btn"
            aria-label="Next Patient"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* --- VIDEO LIGHTBOX MODAL --- */}
      {selectedVideo && (
        <div
          onClick={() => setSelectedVideo(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            backgroundColor: 'rgba(0, 0, 0, 0.88)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeIn 0.2s ease forwards',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '850px',
              aspectRatio: '16/9',
              position: 'relative',
              borderRadius: '20px',
              overflow: 'hidden',
              backgroundColor: '#000000',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              style={{
                position: 'absolute',
                top: '-50px',
                right: '0',
                backgroundColor: '#ffffff',
                color: '#000000',
                border: 'none',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              }}
              aria-label="Close Video"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <iframe
              src={selectedVideo}
              title="Patient Transformation Video"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Hover & Responsive CSS */}
      <style jsx global>{`
        @media (max-width: 1200px) {
          .real-patients-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .real-patients-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .real-patients-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .real-patient-card {
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .real-patient-card:hover {
          transform: none !important;
        }
        .real-patient-card:hover .patient-img-zoom {
          transform: scale(1.04);
        }
        .real-patient-card:hover .play-btn-box {
          transform: scale(1.2) !important;
          opacity: 1 !important;
          background-color: transparent !important;
          filter: drop-shadow(0 8px 25px rgba(255, 0, 0, 0.7)) brightness(1.15) !important;
        }
        .carousel-arrow-btn:hover {
          background-color: #0f172a !important;
          color: #ffffff !important;
        }
      `}</style>
    </section>
  );
}
