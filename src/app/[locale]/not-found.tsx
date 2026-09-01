import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NotFoundSection from '@/components/NotFoundSection';

export default function LocaleNotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', color: '#0f172a' }}>
      <Header />
      <main id="main-content" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
        <NotFoundSection />
      </main>
      <Footer />
    </div>
  );
}
