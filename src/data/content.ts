import { Profile, Project, ExperienceItem, EducationItem, Certification, Achievement, GalleryImage } from "./types";

export const PROFILE: Profile = {
  name: "Sanjana Onteru",
  tagline: "AI/ML Engineer • Data Storyteller • ENTJ-A",
  location: "USA",
  email: "sanjanaonteru1@gmail.com",
  socials: {
    github: "https://github.com/Sonteru4",
    linkedin: "https://www.linkedin.com/in/onteru/",
    website: "https://sanjanaonteru.com",
    medium: "https://medium.com/@sanjanaonteru404",
    substack: "https://substack.com",
  },
  avatar: "/avatar.jpg",              // put image in /public/avatar.jpg
  resumeUrl: "/Sanjana_Onteru_Resume.pdf", // put PDF in /public/
  skills: ["AI/ML", "NLP", "Python", "SQL", "AWS/GCP", "Data Visualization", "Automation", "Tableau"]
};

export const PROJECTS: Project[] = [
  {
    title: "Profanity Monitoring Dashboard",
    subtitle: "AWS Contact Lens + Bedrock | Risk & QA Analytics",
    type: "data",
    description: "End-to-end pipeline analyzing contact-center transcripts for profanity with false-positive suppression and executive dashboards.",
    tags: ["AWS", "Bedrock", "SageMaker", "NLP", "Dashboards"],
    links: { /* repo: "https://github.com/Sonteru4/...", */ demo: "#" }, // TODO: insert real links or remove
    impact: "Reviewed 2000+ calls; mitigated 500+ false-positive patterns; improved agent behavior signals"
  },
  {
    title: "Engine Lab TeamsBot",
    subtitle: "Teams + n8n + Terraform + GitHub automations",
    type: "other",
    description: "Internal assistant that automates IAM/DB access flows, infra requests, and GitHub ops; reduced manual tickets and cycle time.",
    tags: ["Python", "Terraform", "n8n", "GitHub", "Azure/GCP"],
    links: { demo: "#" } // internal — keep placeholder
  },
  {
   
    description: "NLP topic modeling (LDA) across Cold War vs. modern space-industry corpora with interactive timelines and narrative.",
    tags: ["NLP", "LDA", "Visualization"],
    links: { repo: "https://github.com/Sonteru4" } // TODO: point to project repo
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Staff Machine Learning Engineer",
    company: "Lore Health",
    period: "2024 — Present",
    bullets: [
      "Designed and deployed ML systems in production; championed identity-based resilience research.",
      "Built internal tooling (TeamsBot + Terraform) to automate IAM/DB access and infra requests; reduced ticket load and latency."
    ]
  },
  {
    role: "Data / ML Engineer",
    company: "Previous Roles (Banking & Analytics)",
    period: "2019 — 2024",
    bullets: [
      "Led analytics projects and dashboards for executives; improved data reliability and decision velocity.",
      "Mentored teams; drove adoption of cloud-native ML workflows and best practices."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  { program: "MS, Business Analytics", org: "University — TODO", period: "—", details: ["Coursework: Data Engineering, Visualization"] },
  { program: "MS, Management", org: "University — TODO", period: "—", details: ["Focus: Strategy, Operations, Leadership"] },
  { program: "BTech, (Discipline) — TODO", org: "University — TODO", period: "—", details: ["Senior Project: TODO"] }
];

export const CERTS: Certification[] = [
  { name: "AWS Certified AI Practitioner", org: "Amazon Web Services", year: "2024" },
  { name: "AWS Machine Learning – Associate ", org: "Amazon Web Services", year: "—" },
  { name: "Tableau Data Analyst", org: "Tableau", year: "2020" }
];

export const ACHIEVEMENTS: Achievement[] = [
 
];

export const GALLERY: GalleryImage[] = [
  { src: "/gallery/speaking.jpg", alt: "Sanjana speaking at a tech event" },
  { src: "/gallery/workshop.jpg", alt: "Hands-on workshop with AI/ML demos" },
  { src: "/gallery/team.jpg", alt: "Team collaboration on ML systems" }
];


