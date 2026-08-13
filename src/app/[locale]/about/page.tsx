import { getTranslations, setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import TeamSection from '@/components/TeamSection';
import BrandsSection from '@/components/BrandsSection';
import ContactSection from '@/components/ContactSection';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return {
    title: 'Hakkımızda | Master Smile Studio Ağız ve Diş Sağlığı Polikliniği',
    description: 'Master Smile Studio; 16 uzman tedavi branşı, ileri dijital teknolojileri ve alanında uzman hekim kadrosuyla uluslararası standartlarda diş sağlığı hizmeti sunmaktadır.',
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#09090b', color: '#ffffff' }}>
      {/* Global Navigation Header */}
      <Header />

      {/* Hero Section: Dark Studio Vibe with Emoji Orange Ambient Radial Glow */}
      <section
        style={{
          position: 'relative',
          padding: '5rem 1.5rem 6rem 1.5rem',
          overflow: 'hidden',
          backgroundColor: '#09090b',
          borderBottom: '1px solid #1e293b',
        }}
      >
        {/* Ambient Glow Orbs */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            right: '-150px',
            width: '700px',
            height: '700px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 165, 82, 0.22) 0%, rgba(255, 145, 36, 0.06) 50%, transparent 75%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Main Hero Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              fontWeight: 300,
              color: '#ffffff',
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              marginBottom: '1.75rem',
              maxWidth: '900px',
            }}
          >
            Bilim, Sanat ve Teknolojinin <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #cbd5e1 40%, #FFA552 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 300,
              }}
            >
              Buluştuğu Gülüş Mimarisi
            </span>
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              color: '#cbd5e1',
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: '740px',
              marginBottom: '3.5rem',
            }}
          >
            Master Smile Studio; uluslararası diş hekimliği standartlarında, 16 farklı tedavi branşını ve en ileri dijital teknolojileri tek çatı altında sunan premium ağız ve diş sağlığı polikliniğidir. Beş ayrı tedavi ünitemiz ile hastalarımıza beklemeden, yüksek konforda ve kişiselleştirilmiş hizmet sunuyoruz.
          </p>

          {/* Key Statistics Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 600, color: '#FFA552', lineHeight: 1 }}>16+</span>
              <span style={{ fontSize: '0.95rem', color: '#94a3b8', marginTop: '0.5rem', fontWeight: 400 }}>Uzman Tedavi Branşı</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 600, color: '#ffffff', lineHeight: 1 }}>5</span>
              <span style={{ fontSize: '0.95rem', color: '#94a3b8', marginTop: '0.5rem', fontWeight: 400 }}>İleri Klinik Tedavi Ünitesi</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 600, color: '#FFA552', lineHeight: 1 }}>500+</span>
              <span style={{ fontSize: '0.95rem', color: '#94a3b8', marginTop: '0.5rem', fontWeight: 400 }}>5-Yıldızlı Google Yorumu</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '2.5rem', fontWeight: 600, color: '#ffffff', lineHeight: 1 }}>10,000+</span>
              <span style={{ fontSize: '0.95rem', color: '#94a3b8', marginTop: '0.5rem', fontWeight: 400 }}>Mutlu Gülüş Tasarımı</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2-Column Philosophy & 3-Card Showcase Section */}
      <section
        style={{
          backgroundColor: '#ffffff',
          color: '#0f172a',
          padding: '6rem 1.5rem',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
          }}
        >
          {/* Top Header: Left '/ About' | Right Large Title & Paragraph */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem',
              alignItems: 'start',
            }}
          >
            <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>
              / Vizyonumuz
            </div>

            <div style={{ maxWidth: '850px' }}>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 300,
                  color: '#0f172a',
                  letterSpacing: '-0.035em',
                  lineHeight: 1.15,
                  margin: '0 0 1.25rem 0',
                }}
              >
                Sadece Diş Tedavisi Değil, Yaşam Kalitenizi ve Özgüveninizi Artıran Dijital Gülüş Tasarımları
              </h2>

              <p
                style={{
                  fontSize: '0.95rem',
                  color: '#64748b',
                  lineHeight: 1.6,
                  margin: 0,
                  fontWeight: 400,
                  maxWidth: '720px',
                }}
              >
                Her hastamızın yüz anatomisi, dudak yapısı ve estetik beklentisi benzersizdir. Master Smile Studio olarak amacımız; sadece estetik dişler üretmek değil, hastalarımızın doğal konuşma konforunu, çiğneme fonksiyonunu ve gülüş mimarisini en üst seviyeye çıkarmaktır.
              </p>
            </div>
          </div>

          {/* Bottom 3 Equal-Width Image & Action Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {/* Card 1: Rose Glow Image Card */}
            <div
              style={{
                position: 'relative',
                height: '460px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
              }}
            >
              <Image
                src="/e-max-lamine-treatment-mss.jpeg"
                alt="Rose Glow DSD Smile Architecture"
                fill
                unoptimized
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0.25) 100%)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  color: '#ffffff',
                }}
              >
                <div style={{ fontSize: '1.35rem', fontWeight: 600 }}>Rose Glow</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.5 }}>
                  Yüz anatomisi ve dudak çizginize tam uyumlu kişiselleştirilmiş dijital gülüş mimarisi.
                </div>
              </div>
            </div>

            {/* Card 2: Indigo Insight Image Card */}
            <div
              style={{
                position: 'relative',
                height: '460px',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
              }}
            >
              <Image
                src="/dental-implant-mss.jpeg"
                alt="Indigo Insight 3D Digital Tomography"
                fill
                unoptimized
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.1) 60%, rgba(0, 0, 0, 0.25) 100%)',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  color: '#ffffff',
                }}
              >
                <div style={{ fontSize: '1.35rem', fontWeight: 600 }}>Indigo Insight</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.5 }}>
                  Sıfır hata ile 3D çene yapısı analizi ve dikişsiz hızlı iyileşen implant planlaması.
                </div>
              </div>
            </div>

            {/* Card 3: Pure Solid Black Action Banner */}
            <div
              style={{
                backgroundColor: '#000000',
                height: '460px',
                borderRadius: '8px',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                color: '#ffffff',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.65rem',
                  fontWeight: 500,
                  color: '#ffffff',
                  lineHeight: 1.25,
                  marginBottom: '1.75rem',
                }}
              >
                Gülüşünüzü Bugün Yeniden Keşfedin.
              </h3>

              <a
                href="#contact"
                style={{
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '9999px',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  display: 'inline-block',
                  width: 'fit-content',
                }}
              >
                Randevu Al →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us / Progress Statistics Bar Section */}
      <section
        style={{
          backgroundColor: '#ffffff',
          color: '#0f172a',
          padding: '6rem 1.5rem',
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
          {/* Top Part: 3 Staggered Percentage Progress Bars */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              marginBottom: '5rem',
            }}
          >
            {/* Bar 1: 98% */}
            <div
              style={{
                width: '100%',
                backgroundColor: '#FFF5EA',
                borderRadius: '24px',
                overflow: 'hidden',
                border: 'none',
              }}
            >
              <div
                style={{
                  width: '98%',
                  background: 'radial-gradient(circle at 90% 10%, #FFA552 0%, #D97706 45%, #92400E 100%)',
                  borderRadius: '24px',
                  padding: '2rem 2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '2rem',
                  color: '#ffffff',
                  boxShadow: '0 12px 30px rgba(217, 119, 6, 0.25)',
                }}
              >
                <p
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    lineHeight: 1.5,
                    margin: 0,
                    maxWidth: '640px',
                    color: '#ffffff',
                  }}
                >
                  Hastalarımızın %98'i ilk muayene ve teşhis aşamasında şeffaf bilgilendirme ve yüksek memnuniyet hissettiğini ifade etti.
                </p>
                <span
                  style={{
                    fontSize: '4.25rem',
                    fontWeight: 600,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: '#ffffff',
                  }}
                >
                  98%
                </span>
              </div>
            </div>

            {/* Bar 2: 88% */}
            <div
              style={{
                width: '100%',
                backgroundColor: '#FFF5EA',
                borderRadius: '24px',
                overflow: 'hidden',
                border: 'none',
              }}
            >
              <div
                style={{
                  width: '88%',
                  background: 'radial-gradient(circle at 90% 10%, #FFA552 0%, #D97706 45%, #92400E 100%)',
                  borderRadius: '24px',
                  padding: '2rem 2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '2rem',
                  color: '#ffffff',
                  boxShadow: '0 12px 30px rgba(217, 119, 6, 0.25)',
                }}
              >
                <p
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    lineHeight: 1.5,
                    margin: 0,
                    maxWidth: '640px',
                    color: '#ffffff',
                  }}
                >
                  Tedavi gören hastalarımızın %88'i ilk birkaç haftada estetik ve çiğneme konforunda belirgin artış deneyimledi.
                </p>
                <span
                  style={{
                    fontSize: '4.25rem',
                    fontWeight: 600,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: '#ffffff',
                  }}
                >
                  88%
                </span>
              </div>
            </div>

            {/* Bar 3: 71% */}
            <div
              style={{
                width: '100%',
                backgroundColor: '#FFF5EA',
                borderRadius: '24px',
                overflow: 'hidden',
                border: 'none',
              }}
            >
              <div
                style={{
                  width: '71%',
                  background: 'radial-gradient(circle at 90% 10%, #FFA552 0%, #D97706 45%, #92400E 100%)',
                  borderRadius: '24px',
                  padding: '2rem 2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '2rem',
                  color: '#ffffff',
                  boxShadow: '0 12px 30px rgba(217, 119, 6, 0.25)',
                }}
              >
                <p
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 500,
                    lineHeight: 1.5,
                    margin: 0,
                    maxWidth: '640px',
                    color: '#ffffff',
                  }}
                >
                  Tavsiye üzerine polikliniğimize başvuran yeni hasta oranımız %71 ile uzun vadeli güveni ve devamlılığı yansıtmaktadır.
                </p>
                <span
                  style={{
                    fontSize: '4.25rem',
                    fontWeight: 600,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    color: '#ffffff',
                  }}
                >
                  71%
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Part: 2-Column Headline & Description Stack */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '4rem',
              alignItems: 'start',
            }}
          >
            {/* Left Column: Uppercase Headline & Pill CTA */}
            <div>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                  fontWeight: 600,
                  color: '#0f172a',
                  lineHeight: 1.25,
                  letterSpacing: '-0.025em',
                  textTransform: 'uppercase',
                  marginBottom: '2rem',
                }}
              >
                BİNLERCE HASTAMIZIN SAĞLIKLI GÜLÜŞLERE KAVUŞTUĞU GÜVENİLİR TEDAVİ SÜRECİ
              </h2>

              <a
                href="#contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  backgroundColor: '#fffdfa',
                  border: '1.5px solid #ffedd5',
                  color: '#d97706',
                  padding: '0.65rem 1.35rem',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 16px rgba(255, 165, 82, 0.12)',
                }}
              >
                <span>MEMNUNİYET RAPORU</span>
                <span
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    backgroundColor: '#FFA552',
                    color: '#0f172a',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.85rem',
                  }}
                >
                  ↗
                </span>
              </a>
            </div>

            {/* Right Column: Paragraph Text */}
            <div style={{ paddingTop: '0.5rem' }}>
              <p
                style={{
                  fontSize: '1rem',
                  color: '#475569',
                  lineHeight: 1.7,
                  margin: 0,
                  fontWeight: 400,
                  maxWidth: '520px',
                }}
              >
                Uzman hekim kadromuz, son teknoloji 3D dijital ekipmanlarımız ve hastalarımızın konforunu ön planda tutan VIP tedavi odalarımız ile ağız ve diş sağlığınız için güvenilir bir deneyim sunuyoruz. Şeffaf fiyatlandırma ve kişiye özel tedavi planları ile yanınızdayız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uzman Kadromuz (Reusing 60fps RAF Lerp Interactive TeamSection) */}
      <TeamSection />

      {/* Brands Infinite Marquee Banner Section */}
      <BrandsSection />

      {/* Contact & Free Consultation Form Section */}
      <ContactSection />
    </div>
  );
}
