export type LinkMap = { repo?: string; demo?: string; url?: string };

export interface Socials {
  github?: string; linkedin?: string; website?: string; substack?: string; medium?: string; twitter?: string;
}

export interface Profile {
  name: string; tagline: string; location: string; email: string; socials: Socials;
  avatar: string; resumeUrl: string; skills: string[];
}

export type ProjectType = "data" | "other";

export interface Project {
  title: string; subtitle?: string; type: ProjectType; description: string; tags: string[]; links?: LinkMap; impact?: string;
}

export interface ExperienceItem {
  role: string; company: string; period: string; bullets: string[];
}

export interface EducationItem {
  program: string; org: string; period: string; details?: string[];
}

export interface Certification {
  name: string; org: string; year: string; url?: string;
}

export interface Achievement {
  title: string; detail: string;
}

export interface GalleryImage {
  src: string; alt: string;
}


