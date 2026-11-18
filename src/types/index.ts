/**
 * GTSInfo Core TypeScript Type Definitions
 */

export interface Address {
  line1: string;
  line2: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  full: string;
}

export interface CoreValue {
  title: string;
  description: string;
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  industry: string;
  tagline: string;
  email: string;
  address: Address;
  mapsUrl: string;
  mission: string;
  vision: string;
  coreValues: CoreValue[];
}

export interface NavLinkItem {
  name: string;
  path: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  employmentType: 'Full-time' | 'Internship' | 'Part-time' | 'Contract';
  location: string;
  workMode: 'Hybrid' | 'On-site' | 'Remote';
  experience: string;
  openings: number;
  salaryRange: string;
  deadline: string;
  status: 'open' | 'closed';
  isFeatured: boolean;
  isSampleNotice: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
  technicalSkills: string[];
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: string;
  iconName: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  technologies: string[];
  status: string;
  displayOrder: number;
  isPlaceholderNotice: string;
}

export interface GalleryItem {
  id: string;
  src: any;
  title: string;
  description: string;
  aspect: string;
  alt: string;
}

export interface ImageMetadata {
  src: any;
  alt: string;
  title: string;
  caption: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
