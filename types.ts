
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
