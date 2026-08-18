'use client';

import React from 'react';
import TreatmentDenturesRightTreatmentAccordion from '@/components/treatment-sections/TreatmentDenturesRightTreatmentAccordion';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentBeforeAfterSliderSection';
import TreatmentPackagesSlider from '@/components/treatment-sections/TreatmentPackagesSlider';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentFAQSection from '@/components/treatment-sections/TreatmentFAQSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';

export default function DenturesDetailView() {
  return (
    <>
      <TreatmentDenturesRightTreatmentAccordion />
      <TreatmentJourneySimpleSection />
      <TreatmentServicesIncludedSection />
      <TreatmentPatientReelsSection />
      <TreatmentBeforeAfterSliderSection />
      <TreatmentPackagesSlider />
      <TreatmentReviewsSection />
      <TreatmentFAQSection />
      <div id="contact">
        <TreatmentInteractiveQuoteForm defaultTreatment="Dentures" />
      </div>
    </>
  );
}
