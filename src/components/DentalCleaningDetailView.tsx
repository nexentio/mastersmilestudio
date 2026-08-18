'use client';

import React from 'react';
import TreatmentGeneralRightTreatmentAccordion from '@/components/treatment-sections/TreatmentGeneralRightTreatmentAccordion';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentGeneralBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentGeneralBeforeAfterSliderSection';
import TreatmentGeneralPackagesSlider from '@/components/treatment-sections/TreatmentGeneralPackagesSlider';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentGeneralFAQSection from '@/components/treatment-sections/TreatmentGeneralFAQSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';

export default function DentalCleaningDetailView() {
  return (
    <>
      <TreatmentGeneralRightTreatmentAccordion />
      <TreatmentJourneySimpleSection />
      <TreatmentServicesIncludedSection />
      <TreatmentPatientReelsSection />
      <TreatmentGeneralBeforeAfterSliderSection />
      <TreatmentGeneralPackagesSlider />
      <TreatmentReviewsSection />
      <TreatmentGeneralFAQSection />
      <div id="contact">
        <TreatmentInteractiveQuoteForm defaultTreatment="Dental Cleaning" />
      </div>
    </>
  );
}
