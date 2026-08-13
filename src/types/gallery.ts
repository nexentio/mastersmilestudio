export interface GalleryItem {
  id: string;
  category: string;
  name: string;
  shade: string;
  hasQuote?: boolean;
  icons?: string[];
  beforeImage: string;
  afterImage: string;
  portraitImage: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
}

export interface SelectedGalleryModal {
  id: string;
  name: string;
  treatment: string;
  shade: string;
  beforeImage: string;
  portraitImage: string;
}
