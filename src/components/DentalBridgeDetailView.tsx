'use client';

import React from 'react';
import TreatmentBridgeRightTreatmentAccordion from '@/components/treatment-sections/TreatmentBridgeRightTreatmentAccordion';
import TreatmentJourneySimpleSection from '@/components/treatment-sections/TreatmentJourneySimpleSection';
import TreatmentServicesIncludedSection from '@/components/treatment-sections/TreatmentServicesIncludedSection';
import TreatmentBridgeBeforeAfterSliderSection from '@/components/treatment-sections/TreatmentBridgeBeforeAfterSliderSection';
import TreatmentBridgePackagesSlider from '@/components/treatment-sections/TreatmentBridgePackagesSlider';
import TreatmentReviewsSection from '@/components/treatment-sections/TreatmentReviewsSection';
import TreatmentBridgeFAQSection from '@/components/treatment-sections/TreatmentBridgeFAQSection';
import TreatmentInteractiveQuoteForm from '@/components/treatment-sections/TreatmentInteractiveQuoteForm';

export default function DentalBridgeDetailView() {
  return (
    <>
      <TreatmentBridgeRightTreatmentAccordion />
      <TreatmentJourneySimpleSection />
      <TreatmentServicesIncludedSection />
      <TreatmentBridgeBeforeAfterSliderSection />
      <TreatmentBridgePackagesSlider />
      <TreatmentReviewsSection />
      <TreatmentBridgeFAQSection />
      <div id="contact">
        <TreatmentInteractiveQuoteForm defaultTreatment="Dental Bridges" />
      </div>
    </>
  );
}
