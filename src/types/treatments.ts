export interface TreatmentCaseStudy {
  beforeImg: string;
  afterImg: string;
  desc: string;
}

export interface TreatmentDoctor {
  name: string;
  title: string;
  img: string;
}

export interface TreatmentDetail {
  id: string;
  category: string;
  title: string;
  badge: string;
  desc: string;
  image: string;
  timeframe: string;
  sessions: string;
  guarantee: string;
  tags: string[];
  caseStudy: TreatmentCaseStudy;
  doctor: TreatmentDoctor;
}
