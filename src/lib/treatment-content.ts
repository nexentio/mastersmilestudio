export interface TreatmentFaqItem {
  q: string;
  a: string;
}

export interface TreatmentCostRow {
  treatment: string;
  turkey: string;
  uk: string;
  usa: string;
  savings: string;
}

export interface TreatmentReasonItem {
  title: string;
  desc: string;
}

export interface TreatmentPartItem {
  title: string;
  desc: string;
}

export interface RightTreatmentItem {
  title: string;
  target: string;
  desc: string;
}

export interface TreatmentContent {
  slug: string;
  hero: {
    badge?: string;
    title: string;
    subtitle: string;
    features?: string[];
    primaryBtn?: string;
    secondaryBtn?: string;
  };
  intro?: {
    title: string;
    whatIsTitle: string;
    whatIsP1: string;
    parts: TreatmentPartItem[];
    healingP: string;
    solutionP: string;
    videoUrl?: string;
  };
  rightTreatment?: {
    heading: string;
    subtitle: string;
    readMore: string;
    items: Record<string, RightTreatmentItem>;
  };
  whyChoose?: {
    title: string;
    intro: string;
    reasons: TreatmentReasonItem[];
  };
  cost?: {
    heading: string;
    tableIntro?: string;
    comparisonTable?: TreatmentCostRow[];
  };
  faq?: TreatmentFaqItem[];
  seo?: {
    title: string;
    description: string;
  };
}

/**
 * Loads modular treatment JSON content for a specific locale and treatment slug.
 * Gracefully falls back to English ('en') if a specific translation file is pending.
 */
export async function getTreatmentContent(
  locale: string,
  slug: string
): Promise<TreatmentContent | null> {
  try {
    const mod = await import(`../../messages/${locale}/treatments/${slug}.json`);
    return (mod.default || mod) as TreatmentContent;
  } catch {
    try {
      const fallback = await import(`../../messages/en/treatments/${slug}.json`);
      return (fallback.default || fallback) as TreatmentContent;
    } catch {
      return null;
    }
  }
}
