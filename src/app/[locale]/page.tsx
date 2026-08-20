import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import HomeHeroBanner from '@/components/HomeHeroBanner';
import MobileHeroConsultationForm from '@/components/MobileHeroConsultationForm';
import ServicesGrid from '@/components/ServicesGrid';
import RealPatientsSection from '@/components/RealPatientsSection';
import PatientsSection from '@/components/PatientsSection';
import TransformationsSection from '@/components/TransformationsSection';
import TreatmentProcessSection from '@/components/TreatmentProcessSection';
import TeamSection from '@/components/TeamSection';
import BrandsSection from '@/components/BrandsSection';
import BlogSection from '@/components/BlogSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import LocationMapSection from '@/components/LocationMapSection';
import Footer from '@/components/Footer';

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main id="main-content" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff' }}>
      {/* Global Navigation Header - Sticky across whole page */}
      <Header />

      {/* Hero Section */}
      <HomeHeroBanner />

      {/* Mobile-Only Consultation Form (Flowing from Hero into Services Section on Mobile) */}
      <MobileHeroConsultationForm />

      {/* Treatment Services Square Cards Section */}
      <ServicesGrid />

      {/* Real Patients. Real Smiles Video Stories Section */}
      <RealPatientsSection />

      {/* Hastalarimiz Patient Stories Section */}
      <PatientsSection />

      {/* From First Visit to Final Smile Transformations Carousel */}
      <TransformationsSection />

      {/* Interactive Treatment Process & Quick Contact Section */}
      <TreatmentProcessSection />

      {/* Uzman Kadromuz 3D Perspective Team Carousel */}
      <TeamSection />

      {/* Brands Infinite Marquee Banner Section */}
      <BrandsSection />

      {/* Blog & Dental Health Articles Section */}
      <BlogSection />

      {/* SEO-Rich FAQ & Clinical Guide Section */}
      <FaqSection />

      {/* Contact & Free Consultation Form Section */}
      <ContactSection />

      {/* Interactive Google Map Location & VIP Clinic Tour Section */}
      <LocationMapSection />

      {/* Luxury Studio Footer */}
      <Footer />
    </main>
  );
}
