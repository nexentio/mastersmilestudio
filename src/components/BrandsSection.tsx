'use client';

import { useTranslations } from 'next-intl';

export default function BrandsSection() {
  const t = useTranslations('brands');

  const getSafeText = (key: string, fallback: string) => {
    try {
      return t.has(key as any) ? t(key as any) : fallback;
    } catch {
      return fallback;
    }
  };

  const brands = [
    {
      name: 'Straumann',
      subtitle: getSafeText('straumannSub', 'Swiss Precision Implants'),
      icon: '✦',
      origin: 'İsviçre / Swiss Made',
    },
    {
      name: 'Nobel Biocare',
      subtitle: getSafeText('nobelSub', 'Premium Implantology'),
      icon: '✧',
      origin: 'İsveç / Sweden',
    },
    {
      name: 'Astra Tech',
      subtitle: getSafeText('astraSub', 'Dentsply Sirona Group'),
      icon: '✦',
      origin: 'Dentsply Sirona',
    },
    {
      name: 'Medentika',
      subtitle: getSafeText('medentikaSub', 'Straumann Group Quality'),
      icon: '✧',
      origin: 'Straumann Group',
    },
    {
      name: 'Bredent SKY',
      subtitle: getSafeText('bredentSub', 'German Dental Innovation'),
      icon: '✦',
      origin: 'Almanya / Germany',
    },
  ];

  // Tripled array for seamless infinite marquee loop
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <section
      className="section home-brands"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #FFE5CA 20%, #FFA552 50%, #1e1e24 80%, #09090b 100%)',
        color: '#ffffff',
        padding: '6rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: 'none',
        borderBottom: 'none',
      }}
    >
      {/* Warm Ambient Glow Orb at Center */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 165, 82, 0.25) 0%, rgba(255, 145, 36, 0.08) 55%, transparent 75%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          textAlign: 'center',
          marginBottom: '3.5rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            fontWeight: 600,
            color: '#0f172a',
            letterSpacing: '-0.035em',
            margin: '0 0 1rem 0',
            lineHeight: 1.15,
          }}
        >
          {getSafeText('title', 'Dünya Standartlarında Dental İmplant & Materyal Ortakları')}
        </h2>

        <p
          style={{
            fontSize: '1.05rem',
            color: '#1e293b',
            maxWidth: '640px',
            margin: '0 auto',
            fontWeight: 500,
            lineHeight: 1.6,
          }}
        >
          {getSafeText('subtitle', 'Polikliniğimizde kullanılan tüm implant ve kaplama sistemleri ömür boyu orijinal garanti sertifikalıdır.')}
        </p>
      </div>

      {/* Infinite Scrolling Marquee Track */}
      <div
        className="brands-marquee"
        style={{
          width: '100%',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1,
          padding: '1rem 0',
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem',
            width: 'max-content',
            animation: 'marquee 35s linear infinite',
          }}
        >
          {marqueeItems.map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              style={{
                backgroundColor: '#18181b',
                border: '1.5px solid #27272a',
                borderRadius: '20px',
                padding: '1.5rem 2.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                minWidth: '280px',
                boxShadow: 'none',
                transition: 'all 0.3s ease',
              }}
              className="brand-glass-card"
            >
              <span
                style={{
                  fontSize: '1.35rem',
                  color: '#FFA552',
                  lineHeight: 1,
                }}
              >
                {brand.icon}
              </span>

              <div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    margin: '0 0 0.2rem 0',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {brand.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: '#94a3b8',
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {brand.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .brands-marquee:hover .marquee-track {
          animation-play-state: paused;
        }
        .brand-glass-card:hover {
          border-color: rgba(255, 165, 82, 0.4) !important;
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(255, 165, 82, 0.15) !important;
        }
      `}</style>
    </section>
  );
}
