'use client';

import React from 'react';
import TreatmentCrownsRightTreatmentAccordion from '@/components/treatment-sections/TreatmentCrownsRightTreatmentAccordion';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentPatientReelsSection from '@/components/treatment-sections/TreatmentPatientReelsSection';
import TreatmentBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentBeforeAfterSliderSection';
import TreatmentCrownsPackagesSlider from '@/components/treatment-sections/TreatmentCrownsPackagesSlider';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentCrownsFAQSection from '@/components/treatment-sections/TreatmentCrownsFAQSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';

export default function DentalCrownsDetailView() {
  return (
    <>
      <TreatmentCrownsRightTreatmentAccordion />
      <TreatmentJourneySimpleSection />
      <TreatmentServicesIncludedSection />
      <TreatmentPatientReelsSection />
      <TreatmentBeforeAfterSliderSection />
      <TreatmentCrownsPackagesSlider />
      <TreatmentReviewsSection />
      <TreatmentCrownsFAQSection />
      <div id="contact">
        <TreatmentInteractiveQuoteForm defaultTreatment="Dental Crowns" />
      </div>
    </>
  );
}
