'use client';

import React from 'react';
import CosmeticDentistryIntroSection from '@/components/treatment-sections/CosmeticDentistryIntroSection';
import CosmeticDentistryAccordionSection from '@/components/treatment-sections/CosmeticDentistryAccordionSection';
import CosmeticDentistryJourneySection from '@/components/treatment-sections/CosmeticDentistryJourneySection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import RealPatientsSection from '@/components/RealPatientsSection';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import CosmeticDentistryFaqSection from '@/components/treatment-sections/CosmeticDentistryFaqSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';

export default function CosmeticDentistryDetailView() {
  return (
    <>
      <CosmeticDentistryIntroSection />
      <CosmeticDentistryAccordionSection />
      <CosmeticDentistryJourneySection />
      <TreatmentServicesIncludedSection />
      <RealPatientsSection />
      <TreatmentReviewsSection />
      <CosmeticDentistryFaqSection />
      <div id="contact">
        <TreatmentInteractiveQuoteForm defaultTreatment="Cosmetic Dentistry" />
      </div>
    </>
  );
}
