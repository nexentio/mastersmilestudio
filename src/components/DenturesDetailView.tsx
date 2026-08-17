'use client';

import React from 'react';
import GeneralDentistryIntroSection from '@/components/treatment-sections/GeneralDentistryIntroSection';
import GeneralDentistryAccordionSection from '@/components/treatment-sections/GeneralDentistryAccordionSection';
import GeneralDentistryJourneySection from '@/components/treatment-sections/GeneralDentistryJourneySection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import RealPatientsSection from '@/components/RealPatientsSection';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import GeneralDentistryFaqSection from '@/components/treatment-sections/GeneralDentistryFaqSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';

export default function DenturesDetailView() {
  return (
    <>
      <GeneralDentistryIntroSection />
      <GeneralDentistryAccordionSection />
      <GeneralDentistryJourneySection />
      <TreatmentServicesIncludedSection />
      <RealPatientsSection />
      <TreatmentReviewsSection />
      <GeneralDentistryFaqSection />
      <div id="contact">
        <TreatmentInteractiveQuoteForm defaultTreatment="Dentures" />
      </div>
    </>
  );
}
