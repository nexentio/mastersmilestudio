'use client';

import React from 'react';

interface VideoItem {
  id: string;
  title?: string;
}

interface Props {
  videos?: VideoItem[];
}

export default function TreatmentTripleVideoSlider({
  videos = [
    { id: 'ZYMbU63b_PY', title: 'Patient Dental Implant Story & Experience' },
    { id: 'Be2UTTeW5JI', title: 'Full Mouth Teeth Transformation in Istanbul' },
    { id: 'F_ULWgBZhjY', title: 'Painless Implant Procedure & Doctor Review' },
  ],
}: Props) {
  return (
    <div className="treatment-triple-shorts-wrapper">
      <div className="treatment-triple-shorts-grid">
        {videos.map((vid, idx) => (
          <div key={idx} className="treatment-shorts-card">
            <iframe
              src={`https://www.youtube.com/embed/${vid.id}`}
              title={vid.title || `Dental Patient Short Video ${idx + 1}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ))}
      </div>
    </div>
  );
}
