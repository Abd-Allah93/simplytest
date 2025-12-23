
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
  title: string;
  sector: Sector;
  image: string;
  description: string;
  year: string;
  location: string;
}

export interface NavItem {
  label: string;
  path: string;
}
