'use client';

import { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { TEAM_MEMBERS } from '@/data/team';

export default function TeamSection() {
  const t = useTranslations('team');
  const [selectedDocId, setSelectedDocId] = useState<number | null>(null);

  const stripRef = useRef<HTMLDivElement>(null);
  const targetScrollRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);

  // Mouse Drag State
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialScrollLeft, setInitialScrollLeft] = useState(0);

  // Smooth easing animation loop (Lerp - Linear Interpolation at 60fps)
  const animateScroll = () => {
    if (stripRef.current) {
      const current = stripRef.current.scrollLeft;
      const target = targetScrollRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.3) {
        stripRef.current.scrollLeft = current + diff * 0.07;
        animFrameRef.current = requestAnimationFrame(animateScroll);
      } else {
        stripRef.current.scrollLeft = target;
        animFrameRef.current = null;
      }
    }
  };

  // Mouse move tracking
  const handleSectionMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMouseDown || !stripRef.current) return;
    const container = stripRef.current;
    const rect = container.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, mouseX / rect.width));
    const maxScroll = container.scrollWidth - container.clientWidth;

    targetScrollRef.current = ratio * maxScroll;

    if (!animFrameRef.current) {
      animFrameRef.current = requestAnimationFrame(animateScroll);
    }
  };

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Mouse Drag Event Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!stripRef.current) return;
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    setIsMouseDown(true);
    setStartX(e.pageX - stripRef.current.offsetLeft);
    setInitialScrollLeft(stripRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseDrag = (e: React.MouseEvent) => {
    if (!isMouseDown || !stripRef.current) return;
    e.preventDefault();
    const x = e.pageX - stripRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    stripRef.current.scrollLeft = initialScrollLeft - walk;
    targetScrollRef.current = stripRef.current.scrollLeft;
  };

  const selectedMember = TEAM_MEMBERS.find((m) => m.id === selectedDocId);

  return (
    <section
      id="team"
      onMouseMove={handleSectionMouseMove}
      style={{
        backgroundColor: '#ffffff',
        color: '#0f172a',
        padding: '6rem 0',
        position: 'relative',
        borderTop: 'none',
        borderBottom: 'none',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Header Container */}
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          textAlign: 'center',
          marginBottom: '3.5rem',
        }}
      >
        <h2
          style={{
            fontSize: '3.25rem',
            fontWeight: 400,
            color: '#0f172a',
            letterSpacing: '-0.035em',
            marginBottom: '1rem',
            lineHeight: 1.12,
          }}
        >
          {t('title')}
        </h2>

        <p
          style={{
            fontSize: '1.15rem',
            color: '#475569',
            maxWidth: '680px',
            margin: '0 auto',
            lineHeight: 1.65,
            fontWeight: 400,
          }}
        >
          {t('subtitle')}
        </p>
      </div>

      {/* 100% Full Width Mouse-Tracking Horizontal Scroll Strip */}
      <div
        ref={stripRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeaveOrUp}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseDrag}
        style={{
          width: '100%',
          overflowX: 'auto',
          scrollBehavior: 'auto',
          paddingBottom: '1.5rem',
          paddingTop: '0.5rem',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          cursor: isMouseDown ? 'grabbing' : 'grab',
          userSelect: 'none',
        }}
        className="hide-scrollbar"
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            gap: '1.75rem',
            width: 'max-content',
            margin: '0 auto',
          }}
        >
          {TEAM_MEMBERS.map((member) => {
            const title = t(`${member.docKey}.title` as any);

            return (
              <div
                key={member.id}
                onClick={() => setSelectedDocId(selectedDocId === member.id ? null : member.id)}
                style={{
                  flex: '0 0 270px',
                  backgroundColor: member.pastelBg,
                  borderRadius: '160px',
                  padding: '2.5rem 0 0 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  height: '480px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className={`stadium-doctor-card ${member.docKey === 'doc4' ? 'team-card-ozan' : ''}`}
              >
                {/* Top Text Portion: Name & Title */}
                <div
                  style={{
                    textAlign: 'center',
                    marginBottom: '1.25rem',
                    zIndex: 2,
                    width: '100%',
                    padding: '0 1rem',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      color: member.textColor,
                      margin: '0 0 0.35rem 0',
                      lineHeight: 1.2,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: member.subColor,
                      margin: 0,
                      lineHeight: 1.35,
                    }}
                  >
                    {title}
                  </p>
                </div>

                {/* Bottom Arch Portion: 100% Full Width Image Container Touching Left & Right Edges */}
                <div
                  style={{
                    width: 'calc(100% + 4px)',
                    marginLeft: '-2px',
                    marginBottom: '-25px',
                    flex: 1,
                    borderRadius: '160px 160px 0 0',
                    overflow: 'hidden',
                    position: 'relative',
                    backgroundColor: '#000000',
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    unoptimized
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      transform: `scale(${member.imageScale}) translateY(${member.imageOffsetY})`,
                      transformOrigin: 'top center',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Doctor Detailed Bio Box */}
      {selectedMember && (
        <div
          className="team-bio-modal-container"
          style={{
            maxWidth: '1280px',
            margin: '3rem auto 0 auto',
            padding: '0 1.5rem',
          }}
        >
          <div
            className="team-bio-modal-card"
            style={{
              backgroundColor: '#18181b',
              borderRadius: '24px',
              border: '1.5px solid #27272a',
              padding: '2.5rem 3rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              maxWidth: '850px',
              margin: '0 auto',
              position: 'relative',
              animation: 'fadeIn 0.35s ease-out forwards',
            }}
          >
            <button
              onClick={() => setSelectedDocId(null)}
              className="team-bio-modal-close"
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                backgroundColor: '#27272a',
                border: 'none',
                color: '#a1a1aa',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
              }}
              aria-label="Close"
            >
              ✕
            </button>

            <div
              className="team-bio-modal-head"
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}
            >
              <span
                className="team-bio-modal-badge"
                style={{
                  backgroundColor: selectedMember.pastelBg,
                  color: '#0f172a',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '9999px',
                }}
              >
                {t(`${selectedMember.docKey}.experience` as any)}
              </span>
              <h4
                className="team-bio-modal-name"
                style={{ fontSize: '1.35rem', fontWeight: 600, color: '#ffffff', margin: 0 }}
              >
                {selectedMember.name}
              </h4>
            </div>

            <p
              className="team-bio-modal-text"
              style={{
                fontSize: '1.05rem',
                color: '#cbd5e1',
                lineHeight: 1.75,
                margin: '0 0 1.5rem 0',
                fontWeight: 300,
              }}
            >
              {t(`${selectedMember.docKey}.bio` as any)}
            </p>

            <div className="team-bio-modal-btns" style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a
                href="#contact"
                className="team-bio-btn-primary"
                style={{
                  backgroundColor: '#d58936',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  padding: '0.65rem 1.35rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s ease',
                }}
              >
                {t('getConsultation' as any) || 'Book Consultation'}
              </a>
              <a
                href="#contact"
                className="team-bio-btn-secondary"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  color: '#f8fafc',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  fontWeight: 500,
                  fontSize: '0.88rem',
                  padding: '0.65rem 1.25rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'all 0.2s ease',
                }}
              >
                {t('viewProfile' as any) || 'View Profile'}
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .stadium-doctor-card:hover {
          filter: brightness(1.02);
        }
        @media (max-width: 768px) {
          .team-card-ozan {
            order: -1 !important;
          }
          .team-bio-modal-container {
            margin-top: 1.5rem !important;
            padding: 0 1rem !important;
          }
          .team-bio-modal-card {
            padding: 1.25rem 1.25rem !important;
            border-radius: 18px !important;
          }
          .team-bio-modal-close {
            top: 1rem !important;
            right: 1rem !important;
            width: 28px !important;
            height: 28px !important;
            font-size: 0.85rem !important;
          }
          .team-bio-modal-head {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.35rem !important;
            padding-right: 2rem !important;
            margin-bottom: 0.75rem !important;
          }
          .team-bio-modal-badge {
            font-size: 0.75rem !important;
            padding: 0.25rem 0.65rem !important;
          }
          .team-bio-modal-name {
            font-size: 1.15rem !important;
          }
          .team-bio-modal-text {
            font-size: 0.88rem !important;
            line-height: 1.55 !important;
            margin-bottom: 1rem !important;
          }
          .team-bio-modal-btns {
            gap: 0.5rem !important;
          }
          .team-bio-btn-primary,
          .team-bio-btn-secondary {
            font-size: 0.8rem !important;
            padding: 0.5rem 1rem !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
