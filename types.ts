
export type Sector =
  | 'COMMERCIAL'
  | 'RESIDENTIAL'
  | 'ADMINISTRATIVE'
  | 'HOTELS'
  | 'SPORTS'
  | 'PHARMACIES'
  | 'ARCHITECTURAL BUILDINGS'
  | 'ENTRANCES';

export interface Project {
  id: string;
  slug?: string;
  title: string;
  title_ar?: string;
  sector: Sector;
  image: string;
  description: string;
  description_ar?: string;
  year: string;
  location: string;
  link?: string;
  body?: string;
  body_ar?: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface HomeContent {
  title: string;
  title_ar?: string;
  heroImage: string;
  heroImageMobile?: string;
  subtitle: string;
  subtitle_ar?: string;
  description: string;
  description_ar?: string;
  music_file?: string;
  // About Section
  about_title?: string;
  about_title_ar?: string;
  about_description?: string;
  about_description_ar?: string;
  vision_text?: string;
  vision_text_ar?: string;
  mission_text?: string;
  mission_text_ar?: string;
  values?: Array<{ title: string; title_ar?: string }>;
  founders?: Array<{ name: string; role: string; bio: string; bio_ar?: string; image?: string; initials?: string }>;
  team?: Array<{ name: string; role: string; image?: string; initials?: string }>;
}
